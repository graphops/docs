"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4439],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={},r="FCOS Installation",l={unversionedId:"launchpad/guides/install-fcos",id:"launchpad/guides/install-fcos",title:"FCOS Installation",description:"Fedora CoreOS (FCOS) is an open-source container-focused operating system that is:",source:"@site/docs/launchpad/guides/install-fcos.md",sourceDirName:"launchpad/guides",slug:"/launchpad/guides/install-fcos",permalink:"/launchpad/guides/install-fcos",draft:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/launchpad/guides/install-fcos.md",tags:[],version:"current",frontMatter:{},sidebar:"launchpadSidebar",previous:{title:"Goerli Indexer Guide",permalink:"/launchpad/guides/goerli-indexer-guide"},next:{title:"Considerations for Kubernetes installation using FCOS",permalink:"/launchpad/advanced/advanced-kubernetes"}},s={},p=[{value:"Picking the right installation method",id:"picking-the-right-installation-method",level:2},{value:"Create a configuration",id:"create-a-configuration",level:2},{value:"Install new OS with coreos-installer",id:"install-new-os-with-coreos-installer",level:2},{value:"Next steps",id:"next-steps",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fcos-installation"},"FCOS Installation"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.fedoraproject.org/en-US/fedora-coreos/"},"Fedora CoreOS")," (FCOS) is an open-source container-focused operating system that is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"minimal"),(0,i.kt)("li",{parentName:"ul"},"automatically updated"),(0,i.kt)("li",{parentName:"ul"},"designed for clusters but can also be used standalone.")),(0,i.kt)("p",null,"It is optimized for Kubernetes and includes technology from CoreOS Container Linux and Fedora Atomic Host, providing a secure and scalable container host for workloads."),(0,i.kt)("p",null,"Here are key differences between FCOS and traditional operating systems:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Package management"),": FCOS uses ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/coreos/rpm-ostree"},(0,i.kt)("inlineCode",{parentName:"a"},"rpm-ostree"))," for atomic updates, while traditional OSes use package managers like ",(0,i.kt)("inlineCode",{parentName:"li"},"apt")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"yum"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Security"),": FCOS includes ",(0,i.kt)("a",{parentName:"li",href:"https://selinuxproject.org/page/Main_Page"},(0,i.kt)("inlineCode",{parentName:"a"},"SELinux"))," for enhanced security, while traditional OSes may require additional security configurations."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Containerization"),": FCOS is designed for container workloads, while traditional OSes may need extra setup for containers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Automatic updates"),": FCOS provides automatic updates, while traditional OSes may require manual updates."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Minimal footprint"),": FCOS is optimized for running containers at scale, while traditional OSes have a broader range of software and features.")),(0,i.kt)("p",null,"This guide takes you through the different considerations required to install and configure FCOS. ",(0,i.kt)("strong",{parentName:"p"},"NOTE the following instructions are for guidance only and do not represent step by step instructions.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#fcos-installation"},"FCOS Installation"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#picking-the-right-installation-method"},"Picking the right installation method")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#create-a-configuration"},"Create a configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#install-new-os-with-coreos-installer"},"Install new OS with coreos-installer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#next-steps"},"Next steps"))))),(0,i.kt)("h2",{id:"picking-the-right-installation-method"},"Picking the right installation method"),(0,i.kt)("p",null,"To install and configure FCOS, you need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"coreos-installer")," tool. The following options for booting the OS are available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Installing on bare metal:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Booting from ",(0,i.kt)("a",{parentName:"li",href:"https://docs.fedoraproject.org/en-US/fedora-coreos/bare-metal/#_installing_from_live_iso"},"live ISO")," using a KVM"),(0,i.kt)("li",{parentName:"ul"},"Booting from ",(0,i.kt)("a",{parentName:"li",href:"https://docs.fedoraproject.org/en-US/fedora-coreos/bare-metal/#_installing_from_live_iso"},"PXE")," or ",(0,i.kt)("a",{parentName:"li",href:"https://docs.fedoraproject.org/en-US/fedora-coreos/bare-metal/#_installing_from_ipxe"},"iPXE")),(0,i.kt)("li",{parentName:"ul"},"Booting from a ",(0,i.kt)("a",{parentName:"li",href:"https://docs.fedoraproject.org/en-US/fedora-coreos/bare-metal/#_installing_from_the_container"},"container")),(0,i.kt)("li",{parentName:"ul"},"Installing ",(0,i.kt)("inlineCode",{parentName:"li"},"coreos-installer")," using ",(0,i.kt)("inlineCode",{parentName:"li"},"cargo")," (not officially documented) but a good option for anyone running Hetzner servers or any other provider that doesn't offer PXE/iPXE boot and is not officially supporting FCOS images. The officially supported alternative for this option would be ",(0,i.kt)("a",{parentName:"li",href:"https://docs.fedoraproject.org/en-US/fedora-coreos/bare-metal/#_installing_from_live_iso"},"booting from live ISO"),".\nExample of ",(0,i.kt)("inlineCode",{parentName:"li"},"coreos-installer")," install using cargo:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"# install packages necessary for coreos-installer\napt update && apt upgrade\napt install pkg-config libssl-dev libzstd-dev\n# install cargo\ncurl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\nsource \"$HOME/.cargo/env\"\ncargo install coreos-installer\n# install butane \nwget https://github.com/coreos/butane/releases/download/$YOUR_BUTANE_VERSION/butane-x86_64-unknown-linux-gnu\nchmod +x butane-x86_64-unknown-linux-gnu\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Installing on cloud servers/VMs:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"official FCOS images can be used to provision new servers for AWS and GCP - can be found under ",(0,i.kt)("inlineCode",{parentName:"li"},"Cloud Launchable")," section on ",(0,i.kt)("a",{parentName:"li",href:"https://fedoraproject.org/coreos/download/?stream=stable"},"downloads page"))))),(0,i.kt)("p",null,"Once an installation image is picked, time to customize the system. "),(0,i.kt)("h2",{id:"create-a-configuration"},"Create a configuration"),(0,i.kt)("p",null,'FedoraCoreOS follows the principles of immutable infrastructure, where the operating system and application components are treated as immutable, meaning they are not modified after deployment. Updates are delivered through "automatic updates" managed by the OS , following a rolling update strategy. New instances with updated images are provisioned, and old instances are replaced. '),(0,i.kt)("p",null,"Treating the operating system as immutable:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"reduces configuration drift"),(0,i.kt)("li",{parentName:"ul"},"enhances system reliability"),(0,i.kt)("li",{parentName:"ul"},"stateful components or data can still exist outside the operating system and have their own mechanisms for persistence and updates")),(0,i.kt)("p",null,"To customize a Fedora CoreOS (FCOS) system, a configuration file needs to be provided which will be used by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/coreos/ignition"},"Ignition")," to provision the system.  "),(0,i.kt)("p",null,"This file will be used to customize various aspects of the system, such as creating a user, adding a trusted SSH key, enabling systemd services, and more."),(0,i.kt)("p",null,"To create an ",(0,i.kt)("inlineCode",{parentName:"p"},"ignition")," file:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"define a ",(0,i.kt)("inlineCode",{parentName:"li"},"butane")," config in YAML format using the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/coreos/butane/blob/main/docs/specs.md"},"specification"),". Your butane file should contain the following minimum sections:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ignition Version"),": Specify the version of the Ignition configuration format to use"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Storage Configuration"),": Define the disk layout and filesystems for your FCOS installation. This includes partitioning, formatting, and mounting options."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Passwd Users"),": Set up user accounts for logging into the FCOS instance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Systemd Units"),": Configure systemd units to manage services and perform system-level tasks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Networkd Units"),": Configure network settings, including network interfaces, IP addressing, and DNS as required."))),(0,i.kt)("li",{parentName:"ul"},"These are just the basic building blocks for a Butane configuration file. Depending on your specific requirements, you may need to include additional configuration options such as users, SSH keys, systemd units, networking, etc. You can refer to the Butane documentation and the FCOS documentation for more details and advanced configuration options."),(0,i.kt)("li",{parentName:"ul"},"An example of a butane file you can get started with containing the minimum requirement:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"variant: fcos\nversion: 1.4.0\nstorage:\n    disks:\n    - device: /dev/sda\n      partitions:\n        - number: 1\n        size: 512MiB\n        label: root\n        filesystem: ext4\n        should_exist: true\n    filesystems:\n      - name: root\n        mount:\n            path: /\n        device: /dev/disk/by-partlabel/root\n        format: true\npasswd:\nusers:\n  - name: myuser\n    ssh_authorized_keys:\n        - ssh-rsa AAAA...\nsystemd:\n    units:\n    - name: my-service.service\n      enable: true\n      contents: |\n        [Unit]\n        Description=My Service\n        \n        [Service]\n        ExecStart=/usr/bin/my-service\nnetworkd:\n    units:\n    - name: 00-eth0.network\n      contents: |\n        [Match]\n        Name=eth0\n        \n        [Network]\n        DHCP=ipv4\n"))),(0,i.kt)("li",{parentName:"ul"},"use the ",(0,i.kt)("inlineCode",{parentName:"li"},"butane")," cli (formally Fedora CoreOS Config Transpiler (fcct)) to convert the YAML config into a valid ",(0,i.kt)("inlineCode",{parentName:"li"},"ignition")," configuration (JSON format).",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"butane --pretty --strict < /tmp/config.bu > /tmp/config.ign\n# or if using podman\nsudo podman run --interactive --rm [quay.io/coreos/butane:release](http://quay.io/coreos/butane:release) --pretty --strict < /tmp/config.bu > /tmp/config.ign\n")))),(0,i.kt)("h2",{id:"install-new-os-with-coreos-installer"},"Install new OS with coreos-installer"),(0,i.kt)("p",null,"Next pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.ign")," file to ",(0,i.kt)("inlineCode",{parentName:"p"},"coreos-installer"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"coreos-installer install /dev/sda -i config.ign /tmp/config.ign\n")),(0,i.kt)("p",null,"If you've run the above command the folowing will happen on the host"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The CoreOS Installer will install the Fedora CoreOS operating system onto the specified device (in this case, ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"/dev/sda")),") using the provided Ignition configuration file (",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"/tmp/config.ign")),")."),(0,i.kt)("li",{parentName:"ol"},"The installation process will partition and format the device, copy necessary files, and configure the bootloader."),(0,i.kt)("li",{parentName:"ol"},"At this point user should reboot the system."),(0,i.kt)("li",{parentName:"ol"},"Upon reboot, the system will start up with the newly installed Fedora CoreOS."),(0,i.kt)("li",{parentName:"ol"},"After the initial boot, Fedora CoreOS will automatically manage updates using the ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"rpm-ostree"))," tool. It will fetch and apply updates in an atomic manner, ensuring a consistent and reliable system."),(0,i.kt)("li",{parentName:"ol"},"You can log in to the system and start using Fedora CoreOS. As an immutable operating system, any modifications to the system outside of automatic updates are typically done by updating the Ignition configuration file and performing a reboot to apply the changes.")),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("p",null,"The outlined steps mark the initial phase of grasping the workings of FCOS. For the different components that you'd need to include in your ",(0,i.kt)("inlineCode",{parentName:"p"},"butane")," config to install Kuberneter follow ",(0,i.kt)("a",{parentName:"p",href:"../advanced/advanced-kubernetes"},"Advanced Kubernetes"),"."))}d.isMDXComponent=!0}}]);