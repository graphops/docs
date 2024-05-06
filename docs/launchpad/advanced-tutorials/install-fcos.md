---
---
# FCOS Installation

[Fedora CoreOS](https://docs.fedoraproject.org/en-US/fedora-coreos/) (FCOS) is an open-source container-focused operating system that is:

- minimal
- automatically updated
- designed for clusters but can also be used standalone.

It is optimized for Kubernetes and includes technology from CoreOS Container Linux and Fedora Atomic Host, providing a secure and scalable container host for workloads.

Here are key differences between FCOS and traditional operating systems:

- **Package management**: FCOS uses [`rpm-ostree`](https://github.com/coreos/rpm-ostree) for atomic updates, while traditional OSes use package managers like `apt` or `yum`.
- **Security**: FCOS includes [`SELinux`](https://selinuxproject.org/page/Main_Page) for enhanced security, while traditional OSes may require additional security configurations.
- **Containerization**: FCOS is designed for container workloads, while traditional OSes may need extra setup for containers.
- **Automatic updates**: FCOS provides automatic updates, while traditional OSes may require manual updates.
- **Minimal footprint**: FCOS is optimized for running containers at scale, while traditional OSes have a broader range of software and features.

This guide takes you through the different considerations required to install and configure FCOS. **NOTE the following instructions are for guidance only and do not represent step by step instructions.**
- [FCOS Installation](#fcos-installation)
  - [Picking the right installation method](#picking-the-right-installation-method)
  - [Create a configuration](#create-a-configuration)
  - [Install new OS with coreos-installer](#install-new-os-with-coreos-installer)
  - [Next steps](#next-steps)

## Picking the right installation method

To install and configure FCOS, you need to use the `coreos-installer` tool. The following options for booting the OS are available:

- Installing on bare metal:
    - Booting from [live ISO](https://docs.fedoraproject.org/en-US/fedora-coreos/bare-metal/#_installing_from_live_iso) using a KVM
    - Booting from [PXE](https://docs.fedoraproject.org/en-US/fedora-coreos/bare-metal/#_installing_from_live_iso) or [iPXE](https://docs.fedoraproject.org/en-US/fedora-coreos/bare-metal/#_installing_from_ipxe)
    - Booting from a [container](https://docs.fedoraproject.org/en-US/fedora-coreos/bare-metal/#_installing_from_the_container)
    - Installing `coreos-installer` using `cargo` (not officially documented) but a good option for anyone running Hetzner servers or any other provider that doesn't offer PXE/iPXE boot and is not officially supporting FCOS images. The officially supported alternative for this option would be [booting from live ISO](https://docs.fedoraproject.org/en-US/fedora-coreos/bare-metal/#_installing_from_live_iso).
        Example of `coreos-installer` install using cargo:
        ```
        # install packages necessary for coreos-installer
        apt update && apt upgrade
        apt install pkg-config libssl-dev libzstd-dev
        # install cargo
        curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
        source "$HOME/.cargo/env"
        cargo install coreos-installer
        # install butane 
        wget https://github.com/coreos/butane/releases/download/$YOUR_BUTANE_VERSION/butane-x86_64-unknown-linux-gnu
        chmod +x butane-x86_64-unknown-linux-gnu
        ```

- Installing on cloud servers/VMs:
    - official FCOS images can be used to provision new servers for AWS and GCP - can be found under `Cloud Launchable` section on [downloads page](https://fedoraproject.org/coreos/download/?stream=stable)

Once an installation image is picked, time to customize the system. 

## Create a configuration

FedoraCoreOS follows the principles of immutable infrastructure, where the operating system and application components are treated as immutable, meaning they are not modified after deployment. Updates are delivered through "automatic updates" managed by the OS , following a rolling update strategy. New instances with updated images are provisioned, and old instances are replaced. 

Treating the operating system as immutable:

- reduces configuration drift
- enhances system reliability
- stateful components or data can still exist outside the operating system and have their own mechanisms for persistence and updates

To customize a Fedora CoreOS (FCOS) system, a configuration file needs to be provided which will be used by [Ignition](https://github.com/coreos/ignition) to provision the system.  

This file will be used to customize various aspects of the system, such as creating a user, adding a trusted SSH key, enabling systemd services, and more.

To create an `ignition` file:

- define a `butane` config in YAML format using the [specification](https://github.com/coreos/butane/blob/main/docs/specs.md). Your butane file should contain the following minimum sections:
  - **Ignition Version**: Specify the version of the Ignition configuration format to use
  - **Storage Configuration**: Define the disk layout and filesystems for your FCOS installation. This includes partitioning, formatting, and mounting options.
  - **Passwd Users**: Set up user accounts for logging into the FCOS instance.
  - **Systemd Units**: Configure systemd units to manage services and perform system-level tasks.
  - **Networkd Units**: Configure network settings, including network interfaces, IP addressing, and DNS as required.
- These are just the basic building blocks for a Butane configuration file. Depending on your specific requirements, you may need to include additional configuration options such as users, SSH keys, systemd units, networking, etc. You can refer to the Butane documentation and the FCOS documentation for more details and advanced configuration options.
- An example of a butane file you can get started with containing the minimum requirement:
    ```yaml
    variant: fcos
    version: 1.4.0
    storage:
        disks:
        - device: /dev/sda
          partitions:
            - number: 1
            size: 512MiB
            label: root
            filesystem: ext4
            should_exist: true
        filesystems:
          - name: root
            mount:
                path: /
            device: /dev/disk/by-partlabel/root
            format: true
    passwd:
    users:
      - name: myuser
        ssh_authorized_keys:
            - ssh-rsa AAAA...
    systemd:
        units:
        - name: my-service.service
          enable: true
          contents: |
            [Unit]
            Description=My Service
            
            [Service]
            ExecStart=/usr/bin/my-service
    networkd:
        units:
        - name: 00-eth0.network
          contents: |
            [Match]
            Name=eth0
            
            [Network]
            DHCP=ipv4
    ```
- use the `butane` cli (formally Fedora CoreOS Config Transpiler (fcct)) to convert the YAML config into a valid `ignition` configuration (JSON format).
    
    ```bash
    butane --pretty --strict < /tmp/config.bu > /tmp/config.ign
    # or if using podman
    sudo podman run --interactive --rm [quay.io/coreos/butane:release](http://quay.io/coreos/butane:release) --pretty --strict < /tmp/config.bu > /tmp/config.ign
    ```


## Install new OS with coreos-installer

Next pass the `config.ign` file to `coreos-installer`. 

```bash
coreos-installer install /dev/sda -i config.ign /tmp/config.ign
```

If you've run the above command the folowing will happen on the host

1. The CoreOS Installer will install the Fedora CoreOS operating system onto the specified device (in this case, **`/dev/sda`**) using the provided Ignition configuration file (**`/tmp/config.ign`**).
2. The installation process will partition and format the device, copy necessary files, and configure the bootloader.
3. At this point user should reboot the system.
4. Upon reboot, the system will start up with the newly installed Fedora CoreOS.
5. After the initial boot, Fedora CoreOS will automatically manage updates using the **`rpm-ostree`** tool. It will fetch and apply updates in an atomic manner, ensuring a consistent and reliable system.
6. You can log in to the system and start using Fedora CoreOS. As an immutable operating system, any modifications to the system outside of automatic updates are typically done by updating the Ignition configuration file and performing a reboot to apply the changes.

## Next steps 

The outlined steps mark the initial phase of grasping the workings of FCOS. For the different components that you'd need to include in your `butane` config to install Kuberneter follow [Advanced Kubernetes](advanced-kubernetes.md).