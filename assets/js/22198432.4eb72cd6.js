"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7058],{7822:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=t(4848),i=t(8453);const a={},r="Kubernetes Guide - Bootstrapping with Kubeadm",o={id:"launchpad/advanced-tutorials/kubernetes-create-cluster-with-kubeadm",title:"Kubernetes Guide - Bootstrapping with Kubeadm",description:"Introduction",source:"@site/docs/launchpad/advanced-tutorials/kubernetes-create-cluster-with-kubeadm.md",sourceDirName:"launchpad/advanced-tutorials",slug:"/launchpad/advanced-tutorials/kubernetes-create-cluster-with-kubeadm",permalink:"/launchpad/advanced-tutorials/kubernetes-create-cluster-with-kubeadm",draft:!1,unlisted:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/launchpad/advanced-tutorials/kubernetes-create-cluster-with-kubeadm.md",tags:[],version:"current",frontMatter:{},sidebar:"launchpadSidebar",previous:{title:"Upgrading Kubernetes with kubeadm",permalink:"/launchpad/advanced-tutorials/kubeadm-upgrade-nodes"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Bootstrapping a cluster with Kubeadm",id:"bootstrapping-a-cluster-with-kubeadm",level:3},{value:"Installing a CNI",id:"installing-a-cni",level:3},{value:"Adding more control-plane nodes",id:"adding-more-control-plane-nodes",level:3},{value:"Adding worker nodes",id:"adding-worker-nodes",level:3},{value:"QuickStart on Ubuntu 22.04 with CRI-O",id:"quickstart-on-ubuntu-2204-with-cri-o",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Install packages",id:"install-packages",level:3},{value:"Initialize the Cluster",id:"initialize-the-cluster",level:3},{value:"Install Cilium CNI",id:"install-cilium-cni",level:3},{value:"Add more nodes",id:"add-more-nodes",level:3},{value:"Control-Plane nodes",id:"control-plane-nodes",level:4},{value:"Worker nodes",id:"worker-nodes",level:4}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"kubernetes-guide---bootstrapping-with-kubeadm",children:"Kubernetes Guide - Bootstrapping with Kubeadm"})}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://kubernetes.io/",children:"Kubernetes"})," is the container orchestration system emerging as the victor of the container wars.\nSome of its characteristics that stand out are:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"being opensource"}),"\n",(0,s.jsx)(n.li,{children:"having an API designed to be easily extended"}),"\n",(0,s.jsx)(n.li,{children:"following a design pattern based on controllers and reconciliation loops"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The major components that make up k8s are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"etcd:"})," a key-value store"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"kube-apiserver:"})," exposes the Kubernetes API"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"kube-controller-manager:"})," single binary that combines a variety of controllers"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"kube-scheduler:"})," assigns containers to nodes"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"kubelet:"})," responsible for setting up containers"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"kube-proxy:"})," manages iptables rules in order to implement the Kubernetes service abstraction"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Being a multi-node clustered system, Kubernetes topology distinguishes between two different roles:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"control-plane"})," nodes: these are the nodes that run ",(0,s.jsx)(n.em,{children:"kube-apiserver"}),", ",(0,s.jsx)(n.em,{children:"kube-controller-manager"}),", and in some setups also ",(0,s.jsx)(n.em,{children:"etcd"})," nodes (",(0,s.jsx)(n.em,{children:"etcd"})," could, potentially, run externally in its own independent nodes)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"worker"})," nodes: these need to run mostly ",(0,s.jsx)(n.em,{children:"kubelet"}),", as their purpose is focused on running the workload containers"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Setting up, and bootstrapping a cluster involves installing and configuring all the required components, certificates management, and container manifests that make up the system. There are numerous options and tools to achieve this goal, but performing manual bootstrapping is a highly educational experience: ",(0,s.jsx)(n.a,{href:"https://github.com/kelseyhightower/kubernetes-the-hard-way",children:"Kubernetes - The Hard Way"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["This guide utilizes ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/setup-tools/kubeadm/",children:"Kubeadm"})," - a tool used to bootstrap and manage the lifecycle of a Kubernetes cluster (upgrade versions, add/remove nodes). It automates the process of setting up a cluster and provides a consistent way of doing it while preserving almost as much control over the setup as a purely manual one."]}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"At least a node configured with your Linux OS of choice and swap disabled - recent Kubernetes versions allow the host to have swap enabled, but that is a new feature not yet in GA (General Availability) and requires extra setup."}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/setup/production-environment/container-runtimes/",children:"container runtime"})," of choice. We favored CRI-O, and would recommend that one."]}),"\n",(0,s.jsxs)(n.li,{children:["Installing the required binaries: ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/",children:"Documentation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"kubelet"}),"\n",(0,s.jsx)(n.li,{children:"kubeadm"}),"\n",(0,s.jsx)(n.li,{children:"kubectl (the CLI tool to talk to your cluster)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Pay attention that all the binaries, and the chosen CRI, are of matching compatible versions."]}),"\n",(0,s.jsxs)(n.p,{children:["Lastly, there is one networking setup requirement, or choice: there needs to be an endpoint for the control-plane API (an IP address, and optionally, a DNS that resolves to that IP). In the special case of a single-node cluster, picking the IP of the listening interface fits the bill. But, more generally, one would either setup a Load Balancer if setting up the cluster on a Cloud Provider, and use that Load Balancer's IP / DNS, or in case of a multi-node control-plane in bare metal, one may setup something such as ",(0,s.jsx)(n.a,{href:"https://keepalived.readthedocs.io/en/latest/introduction.html",children:"Keepalived"})," to have a floating IP suitable to be used as the control-plane endpoint."]}),"\n",(0,s.jsx)(n.h3,{id:"bootstrapping-a-cluster-with-kubeadm",children:"Bootstrapping a cluster with Kubeadm"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Note"}),": This guide provides a generalized overview of installing Kubernetes, offering insights into one of many potential approaches. Please note that specific steps may vary based on the operating system, package manager, and software versions utilized. It is intended to serve as a conceptual reference, rather than a comprehensive, step-by-step manual. Adaptations and modifications might be necessary to suit your specific environment and requirements."]}),"\n",(0,s.jsxs)(n.p,{children:["A feature that stands out in ",(0,s.jsx)(n.em,{children:"kubeadm"})," is the ability to customize almost every option of the underlying components. That configuration is passed via flags to ",(0,s.jsx)(n.em,{children:"kubeadm"}),", or ingested via YAML files.\n",(0,s.jsx)(n.em,{children:"Kubeadm"})," always bootstraps a cluster as a single control-plane node, and other nodes are added after the bootstrapping."]}),"\n",(0,s.jsxs)(n.p,{children:["We're going to create a YAML file instead of passing all the options as flags to ",(0,s.jsx)(n.em,{children:"kubeadm"}),".\nCreate a cluster-config.yaml file as the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: kubeadm.k8s.io/v1beta3\nkind: InitConfiguration\nnodeRegistration:\n  kubeletExtraArgs:\n    cgroup-driver: systemd\n  taints: []\n---\napiVersion: kubeadm.k8s.io/v1beta3\nkind: ClusterConfiguration\nnetworking:\n  serviceSubnet: "10.96.0.0/16"\n  podSubnet: "10.10.0.0/16"\nkubernetesVersion: "v1.25.9"\ncontrolPlaneEndpoint: <endpoint_ip_or_dns>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["where you must replace ",(0,s.jsx)(n.code,{children:"<endpoint_ip_or_dns>"})," by the control-plane's endpoint and, optionally, choose a different podSubnet and/or serviceSubnet. Documentation on all the many configuration options available can be found ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/config-api/kubeadm-config.v1beta3/",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["next, you can use ",(0,s.jsx)(n.em,{children:"kubeadm"})," to bootstrap the cluster with:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"kubeadm init --upload-certs --config cluster-config.yaml\n"})}),"\n",(0,s.jsx)(n.p,{children:"after which, if all goes well, one should see output similar to this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'[root@demo /]# kubeadm init\nI0515 19:48:51.424146 1642628 version.go:256] remote version is much newer: v1.27.1; falling back to: stable-1.25\n[init] Using Kubernetes version: v1.25.9\n[preflight] Running pre-flight checks\n[preflight] Pulling images required for setting up a Kubernetes cluster\n[preflight] This might take a minute or two, depending on the speed of your internet connection\n[preflight] You can also perform this action in beforehand using \'kubeadm config images pull\'\n[certs] Using certificateDir folder "/etc/kubernetes/pki"\n[certs] Generating "ca" certificate and key\n[certs] Generating "apiserver" certificate and key\n[certs] apiserver serving cert is signed for DNS names [demo kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local] and IPs [10.96.0.1 134.177.177.107]\n[certs] Generating "apiserver-kubelet-client" certificate and key\n[certs] Generating "front-proxy-ca" certificate and key\n[certs] Generating "front-proxy-client" certificate and key\n[certs] Generating "etcd/ca" certificate and key\n[certs] Generating "etcd/server" certificate and key\n[certs] etcd/server serving cert is signed for DNS names [demo localhost] and IPs [134.177.177.107 127.0.0.1 ::1]\n[certs] Generating "etcd/peer" certificate and key\n[certs] etcd/peer serving cert is signed for DNS names [demo localhost] and IPs [134.177.177.107 127.0.0.1 ::1]\n[certs] Generating "etcd/healthcheck-client" certificate and key\n[certs] Generating "apiserver-etcd-client" certificate and key\n[certs] Generating "sa" key and public key\n[kubeconfig] Using kubeconfig folder "/etc/kubernetes"\n[kubeconfig] Writing "admin.conf" kubeconfig file\n[kubeconfig] Writing "kubelet.conf" kubeconfig file\n[kubeconfig] Writing "controller-manager.conf" kubeconfig file\n[kubeconfig] Writing "scheduler.conf" kubeconfig file\n[kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"\n[kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"\n[kubelet-start] Starting the kubelet\n[control-plane] Using manifest folder "/etc/kubernetes/manifests"\n[control-plane] Creating static Pod manifest for "kube-apiserver"\n[control-plane] Creating static Pod manifest for "kube-controller-manager"\n[control-plane] Creating static Pod manifest for "kube-scheduler"\n[etcd] Creating static Pod manifest for local etcd in "/etc/kubernetes/manifests"\n[wait-control-plane] Waiting for the kubelet to boot up the control plane as static Pods from directory "/etc/kubernetes/manifests". This can take up to 4m0s\n[apiclient] All control plane components are healthy after 4.502328 seconds\n[upload-config] Storing the configuration used in ConfigMap "kubeadm-config" in the "kube-system" Namespace\n[kubelet] Creating a ConfigMap "kubelet-config" in namespace kube-system with the configuration for the kubelets in the cluster\n[upload-certs] Skipping phase. Please see --upload-certs\n[mark-control-plane] Marking the node demo as control-plane by adding the labels: [node-role.kubernetes.io/control-plane node.kubernetes.io/exclude-from-external-load-balancers]\n[mark-control-plane] Marking the node demo as control-plane by adding the taints [node-role.kubernetes.io/control-plane:NoSchedule]\n[bootstrap-token] Using token: 4y3umx.fnuv7v9pgp4jn74b\n[bootstrap-token] Configuring bootstrap tokens, cluster-info ConfigMap, RBAC Roles\n[bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to get nodes\n[bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to post CSRs in order for nodes to get long term certificate credentials\n[bootstrap-token] Configured RBAC rules to allow the csrapprover controller automatically approve CSRs from a Node Bootstrap Token\n[bootstrap-token] Configured RBAC rules to allow certificate rotation for all node client certificates in the cluster\n[bootstrap-token] Creating the "cluster-info" ConfigMap in the "kube-public" namespace\n[kubelet-finalize] Updating "/etc/kubernetes/kubelet.conf" to point to a rotatable kubelet client certificate and key\n[addons] Applied essential addon: CoreDNS\n[addons] Applied essential addon: kube-proxy\n\nYour Kubernetes control-plane has initialized successfully!\n\nTo start using your cluster, you need to run the following as a regular user:\n\n  mkdir -p $HOME/.kube\n  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n  sudo chown $(id -u):$(id -g) $HOME/.kube/config\n\nAlternatively, if you are the root user, you can run:\n\n  export KUBECONFIG=/etc/kubernetes/admin.conf\n\nYou should now deploy a pod network to the cluster.\nRun "kubectl apply -f [podnetwork].yaml" with one of the options listed at:\n  https://kubernetes.io/docs/concepts/cluster-administration/addons/\n\nYou can now join any number of control-plane node by running the following command on each as a root:\n\nkubeadm join 192.168.0.200:6443 --token 9vr73a.a8uxyaju799qwdjv --discovery-token-ca-cert-hash sha256:7c2e69131a36ae2a042a339b33381c6d0d43887e2de83720eff5359e26aec866 --control-plane --certificate-key f8902e114ef118304e561c3ecd4d0b543adc226b7a07f675f56564185ffe0c07\n\nPlease note that the certificate-key gives access to cluster sensitive data, keep it secret!\nAs a safeguard, uploaded-certs will be deleted in two hours; If necessary, you can use kubeadm init phase upload-certs to reload certs afterward.\n\nThen you can join any number of worker nodes by running the following on each as root:\n\nkubeadm join 192.168.0.200:6443 --token 9vr73a.a8uxyaju799qwdjv --discovery-token-ca-cert-hash sha256:7c2e69131a36ae2a042a339b33381c6d0d43887e2de83720eff5359e26aec866\n'})}),"\n",(0,s.jsxs)(n.p,{children:["(",(0,s.jsx)(n.em,{children:"Note"}),": Save these ",(0,s.jsx)(n.code,{children:"kubeadm join"})," commands presented in this output, as they contain secrets that will be required to add more nodes in future steps.)"]}),"\n",(0,s.jsxs)(n.p,{children:["this being a control-plane node, ",(0,s.jsx)(n.em,{children:"kubeadm"})," will have created a ",(0,s.jsx)(n.em,{children:"kubeconfig"})," file in /etc/kubernetes/admin.conf. A ",(0,s.jsx)(n.em,{children:"kubeconfig"})," file is a YAML file that contains the required metadata and credentials to talk to the cluster, such as certificates/tokens and endpoint specification. ",(0,s.jsx)(n.em,{children:"Kubectl"})," will use whatever ",(0,s.jsx)(n.em,{children:"kubeconfig"})," file is pointed at by the KUBECONFIG environment variable, or, by default, the file in ",(0,s.jsx)(n.code,{children:"~/.kube/config"}),". So, as suggested in the output, we should do:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export KUBECONFIG=/etc/kubernetes/admin.conf\n"})}),"\n",(0,s.jsxs)(n.p,{children:["now ",(0,s.jsx)(n.em,{children:"kubectl"})," should be setup to interact your the cluster. Try it by doing the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[root@demo /]# kubectl get nodes\nNAME   STATUS   ROLES           AGE   VERSION\ndemo   Ready    control-plane   10s   v1.25.9\n"})}),"\n",(0,s.jsx)(n.h3,{id:"installing-a-cni",children:"Installing a CNI"}),"\n",(0,s.jsxs)(n.p,{children:["Kubernetes follows a very modular API interface based design. Some of those components, like the CSI (",(0,s.jsx)(n.a,{href:"https://kubernetes.io/blog/2019/01/15/container-storage-interface-ga/",children:"https://kubernetes.io/blog/2019/01/15/container-storage-interface-ga/"})," ) CNI (",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/",children:"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/"}),") or Ingress controller, come together to form the core of most kubernetes platform setups."]}),"\n",(0,s.jsx)(n.p,{children:"The CNI is the module that will take care of enabling networking between containers and services in different nodes, or setup each container's networking properties. As such, it is a critical next step in order to add more nodes to the cluster, or even run workload containers."}),"\n",(0,s.jsxs)(n.p,{children:["We have chosen to use ",(0,s.jsx)(n.a,{href:"https://github.com/cilium/cilium/",children:"cilium"})," as a CNI solution, but there are ",(0,s.jsx)(n.a,{href:"https://github.com/containernetworking/cni/",children:"many options"})," to choose from."]}),"\n",(0,s.jsx)(n.p,{children:"We'll go ahead and fetch the cilium binary from upstream by running the following script:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"CILIUM_CLI_VERSION=$(curl -s https://raw.githubusercontent.com/cilium/cilium-cli/master/stable.txt)\nCLI_ARCH=amd64\ncd /usr/local/bin\ncurl -L --fail --remote-name-all https://github.com/cilium/cilium-cli/releases/download/${CILIUM_CLI_VERSION}/cilium-linux-${CLI_ARCH}.tar.gz{,.sha256sum}\nsha256sum --check cilium-linux-${CLI_ARCH}.tar.gz.sha256sum\nsudo tar xzvfC cilium-linux-${CLI_ARCH}.tar.gz /usr/local/bin\nrm cilium-linux-${CLI_ARCH}.tar.gz{,.sha256sum}\n"})}),"\n",(0,s.jsx)(n.p,{children:"and then proceed to install cilium with default options by running:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"/usr/local/bin/cilium install\n"})}),"\n",(0,s.jsx)(n.h3,{id:"adding-more-control-plane-nodes",children:"Adding more control-plane nodes"}),"\n",(0,s.jsxs)(n.p,{children:["If you have gone with the default topology setup, ",(0,s.jsx)(n.em,{children:"kubeadm"})," should be instantiating ",(0,s.jsx)(n.em,{children:"etcd"})," instances co-located with your control-plane nodes. Given that and the fact that ",(0,s.jsx)(n.em,{children:"etcd"})," is a majority quorum based system, it's especially important that for a high-availability setup, you'll keep an ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"odd"})})," (i.e: one, three, five, ...) number of control-plane nodes. As such, the minimum number of control-plane nodes that can offer high-availability would be three."]}),"\n",(0,s.jsx)(n.p,{children:"To add more control-plane nodes you need to first get the hosts ready for such by:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"preparing the node OS as required"}),"\n",(0,s.jsx)(n.li,{children:"provisioning the required tools and software as in the first bootstrapping node (container runtime engine, kubelet, kubeadm, kubectl, ...)"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["and then execute, on that node, the appropriate ",(0,s.jsx)(n.code,{children:"kubeadm join"})," command as shown in the previous ",(0,s.jsx)(n.code,{children:"kubeadm init"})," output.\nFor a control-plane node, that takes the form:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubeadm join <endpoint> --token <secret> --discovery-token-ca-cert-hash sha256:<hash> --control-plane --certificate-key <secret>\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Note"}),": the ",(0,s.jsx)(n.code,{children:"kubeadm join"})," commands shown after bootstrapping the cluster or, rather, the secrets uploaded and displayed are temporary and expire after a certain time. In case you lost them or they've expired, you can re-upload new certificates and display the new ones, on the bootstrapping control-plane node, by running:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubeadm init phase upload-certs --upload-certs\nkubeadm token create --print-join-command\n"})}),"\n",(0,s.jsx)(n.h3,{id:"adding-worker-nodes",children:"Adding worker nodes"}),"\n",(0,s.jsx)(n.p,{children:"To add worker nodes to your cluster, first get them ready by:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"preparing the node OS as required"}),"\n",(0,s.jsx)(n.li,{children:"provisioning the required tools and software as in the first bootstrapping node (container runtime engine, kubelet, kubeadm, kubectl, ...)"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Next, you can run the appropriate ",(0,s.jsx)(n.code,{children:"kubeadm join"})," command that was displayed at cluster bootstrap. It has the form:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubeadm join <endpoint> --token <secret> --discovery-token-ca-cert-hash sha256:<hash>\n"})}),"\n",(0,s.jsx)(n.p,{children:"In case you haven't saved that output, you can run (on one of the existing control-plane cluster members) the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubeadm token create --print-join-command\n"})}),"\n",(0,s.jsx)(n.p,{children:"which will display the appropriate kubeadm join command and the relevant secrets, again."}),"\n",(0,s.jsx)(n.h2,{id:"quickstart-on-ubuntu-2204-with-cri-o",children:"QuickStart on Ubuntu 22.04 with CRI-O"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Note"}),": This guide assumes you'll be running these commands as root."]}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites-1",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"1:"})," Enable the required kernel modules on boot:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat <<EOF > /etc/modules-load.d/crio-network.conf\noverlay\nbr_netfilter\nEOF\n"})}),"\n",(0,s.jsx)(n.p,{children:"and load them now:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"modprobe overlay\nmodprobe br_netfilter\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"2:"})," Set appropriate networking sysctl toggles:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat <<EOF > /etc/sysctl.d/99-kubernetes.conf\nnet.bridge.bridge-nf-call-iptables  = 1\nnet.ipv4.ip_forward                 = 1\nnet.bridge.bridge-nf-call-ip6tables = 1\nEOF\n"})}),"\n",(0,s.jsx)(n.p,{children:"and apply them immediately:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sysctl --system\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"3:"})," Disable swap:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"swapoff -a\n"})}),"\n",(0,s.jsx)(n.p,{children:"and take care to disable swap setup on boot, in case it is enabled (maybe on /etc/fstab)"}),"\n",(0,s.jsx)(n.h3,{id:"install-packages",children:"Install packages"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"4:"})," Install dependencies:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"apt-get update\napt-get install -y apt-transport-https ca-certificates curl gpg\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"5:"})," Set variables for CRI-O commands:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export OS="xUbuntu_22.04"\nexport VERSION="1.28"\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"6:"})," Install CRI-O:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'echo "deb [signed-by=/usr/share/keyrings/libcontainers-archive-keyring.gpg] https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/$OS/ /" > /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list\necho "deb [signed-by=/usr/share/keyrings/libcontainers-crio-archive-keyring.gpg] https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable:/cri-o:/$VERSION/$OS/ /" > /etc/apt/sources.list.d/devel:kubic:libcontainers:stable:cri-o:$VERSION.list\n\nmkdir -p /usr/share/keyrings\ncurl -L https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/$OS/Release.key | gpg --dearmor -o /usr/share/keyrings/libcontainers-archive-keyring.gpg\ncurl -L https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable:/cri-o:/$VERSION/$OS/Release.key | gpg --dearmor -o /usr/share/keyrings/libcontainers-crio-archive-keyring.gpg\n\napt-get update\napt-get install cri-o cri-o-runc\n\nsystemctl daemon-reload\nsystemctl enable --now crio\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"7:"})," Install kubernetes packages:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -fsSL https://pkgs.k8s.io/core:/stable:/v${VERSION}/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg\necho "deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v${VERSION}/deb/ /" | sudo tee /etc/apt/sources.list.d/kubernetes.list\napt-get update\napt-get install -y kubelet kubeadm kubectl\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"8:"})," Hold package versions so they don't auto-update:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"apt-mark hold kubelet kubeadm kubectl\n"})}),"\n",(0,s.jsx)(n.h3,{id:"initialize-the-cluster",children:"Initialize the Cluster"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"9:"})," Create a kubeadm config for initializing the Cluster:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'cat << EOF > /tmp/cluster-config.yaml\napiVersion: kubeadm.k8s.io/v1beta3\nkind: InitConfiguration\nnodeRegistration:\n  kubeletExtraArgs:\n    cgroup-driver: systemd\n    node-ip: 10.110.0.2\n  taints: []\nskipPhases:\n  - addon/kube-proxy\n---\napiVersion: kubeadm.k8s.io/v1beta3\nkind: ClusterConfiguration\nnetworking:\n  serviceSubnet: "10.96.0.0/16"\n  podSubnet: "10.10.0.0/16"\ncontrollerManager:\n  extraArgs:\n    allocate-node-cidrs: "true"\n    node-cidr-mask-size: "20"\nkubernetesVersion: "v1.28.3"\ncontrolPlaneEndpoint: 10.110.0.2 \nEOF\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Note"})}),": If you intend to setup a HA Cluster, you should take care of setting up the VIP beforehand (be it by creating a Load Balancer in a Cloud Provider, or using a bare-metal solution based on something like ",(0,s.jsx)(n.a,{href:"https://www.keepalived.org/",children:"Keepalived"}),"). That VIP (or DNS) should go into the ",(0,s.jsx)(n.code,{children:"controlPlaneEndpoint"}),", as changing this after creating the Cluster is an elaborate endeavour."]}),"\n",(0,s.jsx)(n.p,{children:"We are specifying a particular node-IP to ensure usage of the internal interface, as our node has multiple interfaces/IPs. We are also skipping the kube-proxy installation because we plan to use Cilium CNI, which will replace kube-proxy."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"10:"})," Initialize the Cluster:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubeadm init --upload-certs --config /tmp/cluster-config.yaml\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"11:"})," Copy kubeconfig to ~/.kube/config:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir ~/.kube\ncp /etc/kubernetes/admin.conf ~/.kube/config\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"12:"})," Verify the cluster is online and ready with ",(0,s.jsx)(n.code,{children:"kubectl get nodes"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"NAME                             STATUS   ROLES           AGE   VERSION\nubuntu-s-2vcpu-4gb-amd-ams3-01   Ready    control-plane   85m   v1.28.3\n"})}),"\n",(0,s.jsx)(n.h3,{id:"install-cilium-cni",children:"Install Cilium CNI"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"13:"})," Install cilium binary"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"CILIUM_CLI_VERSION=$(curl -s https://raw.githubusercontent.com/cilium/cilium-cli/master/stable.txt)\nCLI_ARCH=amd64\ncd /usr/local/bin\ncurl -L --fail --remote-name-all https://github.com/cilium/cilium-cli/releases/download/${CILIUM_CLI_VERSION}/cilium-linux-${CLI_ARCH}.tar.gz{,.sha256sum}\nsha256sum --check cilium-linux-${CLI_ARCH}.tar.gz.sha256sum\nsudo tar xzvfC cilium-linux-${CLI_ARCH}.tar.gz /usr/local/bin\nrm cilium-linux-${CLI_ARCH}.tar.gz{,.sha256sum}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"14:"})," Install cilium CNI with ",(0,s.jsx)(n.code,{children:"cilium install"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\u2139  Using Cilium version 1.14.2\n\ud83d\udd2e Auto-detected cluster name: kubernetes\n\ud83d\udd2e Auto-detected kube-proxy has not been installed\n\u2139  Cilium will fully replace all functionalities of kube-proxy\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"15:"})," Wait a minute and verify it has been deployed successfully with ",(0,s.jsx)(n.code,{children:"cilium status"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"    /\xaf\xaf\\\n /\xaf\xaf\\__/\xaf\xaf\\    Cilium:             OK\n \\__/\xaf\xaf\\__/    Operator:           OK\n /\xaf\xaf\\__/\xaf\xaf\\    Envoy DaemonSet:    disabled (using embedded mode)\n \\__/\xaf\xaf\\__/    Hubble Relay:       disabled\n    \\__/       ClusterMesh:        disabled\n\nDeployment             cilium-operator    Desired: 1, Ready: 1/1, Available: 1/1\nDaemonSet              cilium             Desired: 1, Ready: 1/1, Available: 1/1\nContainers:            cilium             Running: 1\n                       cilium-operator    Running: 1\nCluster Pods:          2/2 managed by Cilium\nHelm chart version:    1.14.2\nImage versions         cilium             quay.io/cilium/cilium:v1.14.2@sha256:6263f3a3d5d63b267b538298dbeb5ae87da3efacf09a2c620446c873ba807d35: 1\n                       cilium-operator    quay.io/cilium/operator-generic:v1.14.2@sha256:52f70250dea22e506959439a7c4ea31b10fe8375db62f5c27ab746e3a2af866d: 1\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Congratulations! ","\ud83c\udf89"]}),"\n",(0,s.jsx)(n.h3,{id:"add-more-nodes",children:"Add more nodes"}),"\n",(0,s.jsx)(n.h4,{id:"control-plane-nodes",children:"Control-Plane nodes"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"1:"})," On each node, repeat the previous steps for prerequisites and package installs (steps 1 to 8)"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"2:"})," Create a kubeadm join config:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat << EOF > /tmp/join-config.yaml\napiVersion: kubeadm.k8s.io/v1beta3\nkind: JoinConfiguration\ndiscovery:\n  bootstrapToken:\n    token: <token>\n    apiServerEndpoint: <control plane endpoint>\n    caCertHashes:\n      - <ca cert hash>\nnodeRegistration:\n  kubeletExtraArgs:\n    cgroup-driver: systemd\n    node-ip: 10.110.0.5\ncontrolPlane:\n  certificateKey: <ca certificate key>\nEOF\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"<token>"}),",",(0,s.jsx)(n.code,{children:"<ca cert hash>"})," and ",(0,s.jsx)(n.code,{children:"<ca certificate key>"})," will have been output by kubeadm at the initialization step (previous step 10). If you don't have them anymore or the token has expired, you can get a new certificateKey with:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubeadm init phase upload-certs --upload-certs\n"})}),"\n",(0,s.jsx)(n.p,{children:"and obtain the token and certificate hash with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubeadm token create --print-join-command\n"})}),"\n",(0,s.jsx)(n.p,{children:"We're setting node-ip here because our nodes have multiple IPs and we want to specify which interface the services should listen on."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"3:"})," On each node, provided each join-config.yaml has been adjusted if required, join the node with:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubeadm join --config /tmp/join-config.yaml\n"})}),"\n",(0,s.jsx)(n.h4,{id:"worker-nodes",children:"Worker nodes"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"1:"})," On each node, repeat the previous steps for prerequisites and package installs (steps 1 to 8)"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"2:"})," Create a kubeadm join config:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat << EOF > /tmp/join-config.yaml\napiVersion: kubeadm.k8s.io/v1beta3\nkind: JoinConfiguration\ndiscovery:\n  bootstrapToken:\n    token: <token>\n    apiServerEndpoint: 10.110.0.2:6443\n    caCertHashes:\n      - <ca cert hash>\nnodeRegistration:\n  kubeletExtraArgs:\n    cgroup-driver: systemd\n    node-ip: 10.110.0.7\n  taints: []\nEOF\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"<token>"})," and ",(0,s.jsx)(n.code,{children:"<ca cert hash>"})," will have been output by kubeadm at the initialization step (previous step 10). If you don't have them anymore or the token has expired, you can obtain them again by running on a control-plane node:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubeadm token create --print-join-command\n"})}),"\n",(0,s.jsx)(n.p,{children:"We're setting node-ip here because our nodes have multiple IPs and we want to specify which interface the services should listen on."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"3:"})," On each node, provided each join-config.yaml has been adjusted if required, join the node with:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubeadm join --config /tmp/join-config.yaml\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"4:"})," Label the new worker nodes, by running on a control-plane node:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'kubectl label node <node_name> node-role.kubernetes.io/worker=""\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(6540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);