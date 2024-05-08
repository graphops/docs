"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,k=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},i="Kubernetes Guide - Bootstrapping with Kubeadm",s={unversionedId:"launchpad/advanced-tutorials/kubernetes-create-cluster-with-kubeadm",id:"launchpad/advanced-tutorials/kubernetes-create-cluster-with-kubeadm",title:"Kubernetes Guide - Bootstrapping with Kubeadm",description:"Introduction",source:"@site/docs/launchpad/advanced-tutorials/kubernetes-create-cluster-with-kubeadm.md",sourceDirName:"launchpad/advanced-tutorials",slug:"/launchpad/advanced-tutorials/kubernetes-create-cluster-with-kubeadm",permalink:"/launchpad/advanced-tutorials/kubernetes-create-cluster-with-kubeadm",draft:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/launchpad/advanced-tutorials/kubernetes-create-cluster-with-kubeadm.md",tags:[],version:"current",frontMatter:{},sidebar:"launchpadSidebar",previous:{title:"Upgrading Kubernetes with kubeadm",permalink:"/launchpad/advanced-tutorials/kubeadm-upgrade-nodes"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Bootstrapping a cluster with Kubeadm",id:"bootstrapping-a-cluster-with-kubeadm",level:3},{value:"Installing a CNI",id:"installing-a-cni",level:3},{value:"Adding more control-plane nodes",id:"adding-more-control-plane-nodes",level:3},{value:"Adding worker nodes",id:"adding-worker-nodes",level:3},{value:"QuickStart on Ubuntu 22.04 with CRI-O",id:"quickstart-on-ubuntu-2204-with-cri-o",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Install packages",id:"install-packages",level:3},{value:"Initialize the Cluster",id:"initialize-the-cluster",level:3},{value:"Install Cilium CNI",id:"install-cilium-cni",level:3},{value:"Add more nodes",id:"add-more-nodes",level:3},{value:"Control-Plane nodes",id:"control-plane-nodes",level:4},{value:"Worker nodes",id:"worker-nodes",level:4}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kubernetes-guide---bootstrapping-with-kubeadm"},"Kubernetes Guide - Bootstrapping with Kubeadm"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," is the container orchestration system emerging as the victor of the container wars.\nSome of its characteristics that stand out are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"being opensource"),(0,r.kt)("li",{parentName:"ul"},"having an API designed to be easily extended"),(0,r.kt)("li",{parentName:"ul"},"following a design pattern based on controllers and reconciliation loops")),(0,r.kt)("p",null,"The major components that make up k8s are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"etcd:")," a key-value store "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"kube-apiserver:")," exposes the Kubernetes API "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"kube-controller-manager:")," single binary that combines a variety of controllers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"kube-scheduler:")," assigns containers to nodes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"kubelet:")," responsible for setting up containers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"kube-proxy:")," manages iptables rules in order to implement the Kubernetes service abstraction")),(0,r.kt)("p",null,"Being a multi-node clustered system, Kubernetes topology distinguishes between two different roles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"control-plane")," nodes: these are the nodes that run ",(0,r.kt)("em",{parentName:"li"},"kube-apiserver"),", ",(0,r.kt)("em",{parentName:"li"},"kube-controller-manager"),", and in some setups also ",(0,r.kt)("em",{parentName:"li"},"etcd")," nodes (",(0,r.kt)("em",{parentName:"li"},"etcd")," could, potentially, run externally in its own independent nodes)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"worker")," nodes: these need to run mostly ",(0,r.kt)("em",{parentName:"li"},"kubelet"),", as their purpose is focused on running the workload containers")),(0,r.kt)("p",null,"Setting up, and bootstrapping a cluster involves installing and configuring all the required components, certificates management, and container manifests that make up the system. There are numerous options and tools to achieve this goal, but performing manual bootstrapping is a highly educational experience: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kelseyhightower/kubernetes-the-hard-way"},"Kubernetes - The Hard Way"),")."),(0,r.kt)("p",null,"This guide utilizes ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/setup-tools/kubeadm/"},"Kubeadm")," - a tool used to bootstrap and manage the lifecycle of a Kubernetes cluster (upgrade versions, add/remove nodes). It automates the process of setting up a cluster and provides a consistent way of doing it while preserving almost as much control over the setup as a purely manual one."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"At least a node configured with your Linux OS of choice and swap disabled - recent Kubernetes versions allow the host to have swap enabled, but that is a new feature not yet in GA (General Availability) and requires extra setup."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/production-environment/container-runtimes/"},"container runtime")," of choice. We favored CRI-O, and would recommend that one. "),(0,r.kt)("li",{parentName:"ul"},"Installing the required binaries: ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/"},"Documentation"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"kubelet"),(0,r.kt)("li",{parentName:"ul"},"kubeadm"),(0,r.kt)("li",{parentName:"ul"},"kubectl (the CLI tool to talk to your cluster)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Pay attention that all the binaries, and the chosen CRI, are of matching compatible versions."),(0,r.kt)("p",null,"Lastly, there is one networking setup requirement, or choice: there needs to be an endpoint for the control-plane API (an IP address, and optionally, a DNS that resolves to that IP). In the special case of a single-node cluster, picking the IP of the listening interface fits the bill. But, more generally, one would either setup a Load Balancer if setting up the cluster on a Cloud Provider, and use that Load Balancer's IP / DNS, or in case of a multi-node control-plane in bare metal, one may setup something such as ",(0,r.kt)("a",{parentName:"p",href:"https://keepalived.readthedocs.io/en/latest/introduction.html"},"Keepalived")," to have a floating IP suitable to be used as the control-plane endpoint."),(0,r.kt)("h3",{id:"bootstrapping-a-cluster-with-kubeadm"},"Bootstrapping a cluster with Kubeadm"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note"),": This guide provides a generalized overview of installing Kubernetes, offering insights into one of many potential approaches. Please note that specific steps may vary based on the operating system, package manager, and software versions utilized. It is intended to serve as a conceptual reference, rather than a comprehensive, step-by-step manual. Adaptations and modifications might be necessary to suit your specific environment and requirements."),(0,r.kt)("p",null,"A feature that stands out in ",(0,r.kt)("em",{parentName:"p"},"kubeadm")," is the ability to customize almost every option of the underlying components. That configuration is passed via flags to ",(0,r.kt)("em",{parentName:"p"},"kubeadm"),", or ingested via YAML files.\n",(0,r.kt)("em",{parentName:"p"},"Kubeadm")," always bootstraps a cluster as a single control-plane node, and other nodes are added after the bootstrapping."),(0,r.kt)("p",null,"We're going to create a YAML file instead of passing all the options as flags to ",(0,r.kt)("em",{parentName:"p"},"kubeadm"),".\nCreate a cluster-config.yaml file as the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: kubeadm.k8s.io/v1beta3\nkind: InitConfiguration\nnodeRegistration:\n  kubeletExtraArgs:\n    cgroup-driver: systemd\n  taints: []\n---\napiVersion: kubeadm.k8s.io/v1beta3\nkind: ClusterConfiguration\nnetworking:\n  serviceSubnet: "10.96.0.0/16"\n  podSubnet: "10.10.0.0/16"\nkubernetesVersion: "v1.25.9"\ncontrolPlaneEndpoint: <endpoint_ip_or_dns>\n')),(0,r.kt)("p",null,"where you must replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<endpoint_ip_or_dns>")," by the control-plane's endpoint and, optionally, choose a different podSubnet and/or serviceSubnet. Documentation on all the many configuration options available can be found ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/config-api/kubeadm-config.v1beta3/"},"here"),"."),(0,r.kt)("p",null,"next, you can use ",(0,r.kt)("em",{parentName:"p"},"kubeadm")," to bootstrap the cluster with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kubeadm init --upload-certs --config cluster-config.yaml\n")),(0,r.kt)("p",null,"after which, if all goes well, one should see output similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[root@demo /]# kubeadm init\nI0515 19:48:51.424146 1642628 version.go:256] remote version is much newer: v1.27.1; falling back to: stable-1.25\n[init] Using Kubernetes version: v1.25.9\n[preflight] Running pre-flight checks\n[preflight] Pulling images required for setting up a Kubernetes cluster\n[preflight] This might take a minute or two, depending on the speed of your internet connection\n[preflight] You can also perform this action in beforehand using \'kubeadm config images pull\'\n[certs] Using certificateDir folder "/etc/kubernetes/pki"\n[certs] Generating "ca" certificate and key\n[certs] Generating "apiserver" certificate and key\n[certs] apiserver serving cert is signed for DNS names [demo kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local] and IPs [10.96.0.1 134.177.177.107]\n[certs] Generating "apiserver-kubelet-client" certificate and key\n[certs] Generating "front-proxy-ca" certificate and key\n[certs] Generating "front-proxy-client" certificate and key\n[certs] Generating "etcd/ca" certificate and key\n[certs] Generating "etcd/server" certificate and key\n[certs] etcd/server serving cert is signed for DNS names [demo localhost] and IPs [134.177.177.107 127.0.0.1 ::1]\n[certs] Generating "etcd/peer" certificate and key\n[certs] etcd/peer serving cert is signed for DNS names [demo localhost] and IPs [134.177.177.107 127.0.0.1 ::1]\n[certs] Generating "etcd/healthcheck-client" certificate and key\n[certs] Generating "apiserver-etcd-client" certificate and key\n[certs] Generating "sa" key and public key\n[kubeconfig] Using kubeconfig folder "/etc/kubernetes"\n[kubeconfig] Writing "admin.conf" kubeconfig file\n[kubeconfig] Writing "kubelet.conf" kubeconfig file\n[kubeconfig] Writing "controller-manager.conf" kubeconfig file\n[kubeconfig] Writing "scheduler.conf" kubeconfig file\n[kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"\n[kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"\n[kubelet-start] Starting the kubelet\n[control-plane] Using manifest folder "/etc/kubernetes/manifests"\n[control-plane] Creating static Pod manifest for "kube-apiserver"\n[control-plane] Creating static Pod manifest for "kube-controller-manager"\n[control-plane] Creating static Pod manifest for "kube-scheduler"\n[etcd] Creating static Pod manifest for local etcd in "/etc/kubernetes/manifests"\n[wait-control-plane] Waiting for the kubelet to boot up the control plane as static Pods from directory "/etc/kubernetes/manifests". This can take up to 4m0s\n[apiclient] All control plane components are healthy after 4.502328 seconds\n[upload-config] Storing the configuration used in ConfigMap "kubeadm-config" in the "kube-system" Namespace\n[kubelet] Creating a ConfigMap "kubelet-config" in namespace kube-system with the configuration for the kubelets in the cluster\n[upload-certs] Skipping phase. Please see --upload-certs\n[mark-control-plane] Marking the node demo as control-plane by adding the labels: [node-role.kubernetes.io/control-plane node.kubernetes.io/exclude-from-external-load-balancers]\n[mark-control-plane] Marking the node demo as control-plane by adding the taints [node-role.kubernetes.io/control-plane:NoSchedule]\n[bootstrap-token] Using token: 4y3umx.fnuv7v9pgp4jn74b\n[bootstrap-token] Configuring bootstrap tokens, cluster-info ConfigMap, RBAC Roles\n[bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to get nodes\n[bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to post CSRs in order for nodes to get long term certificate credentials\n[bootstrap-token] Configured RBAC rules to allow the csrapprover controller automatically approve CSRs from a Node Bootstrap Token\n[bootstrap-token] Configured RBAC rules to allow certificate rotation for all node client certificates in the cluster\n[bootstrap-token] Creating the "cluster-info" ConfigMap in the "kube-public" namespace\n[kubelet-finalize] Updating "/etc/kubernetes/kubelet.conf" to point to a rotatable kubelet client certificate and key\n[addons] Applied essential addon: CoreDNS\n[addons] Applied essential addon: kube-proxy\n\nYour Kubernetes control-plane has initialized successfully!\n\nTo start using your cluster, you need to run the following as a regular user:\n\n  mkdir -p $HOME/.kube\n  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n  sudo chown $(id -u):$(id -g) $HOME/.kube/config\n\nAlternatively, if you are the root user, you can run:\n\n  export KUBECONFIG=/etc/kubernetes/admin.conf\n\nYou should now deploy a pod network to the cluster.\nRun "kubectl apply -f [podnetwork].yaml" with one of the options listed at:\n  https://kubernetes.io/docs/concepts/cluster-administration/addons/\n\nYou can now join any number of control-plane node by running the following command on each as a root:\n\nkubeadm join 192.168.0.200:6443 --token 9vr73a.a8uxyaju799qwdjv --discovery-token-ca-cert-hash sha256:7c2e69131a36ae2a042a339b33381c6d0d43887e2de83720eff5359e26aec866 --control-plane --certificate-key f8902e114ef118304e561c3ecd4d0b543adc226b7a07f675f56564185ffe0c07\n\nPlease note that the certificate-key gives access to cluster sensitive data, keep it secret!\nAs a safeguard, uploaded-certs will be deleted in two hours; If necessary, you can use kubeadm init phase upload-certs to reload certs afterward.\n\nThen you can join any number of worker nodes by running the following on each as root:\n\nkubeadm join 192.168.0.200:6443 --token 9vr73a.a8uxyaju799qwdjv --discovery-token-ca-cert-hash sha256:7c2e69131a36ae2a042a339b33381c6d0d43887e2de83720eff5359e26aec866\n')),(0,r.kt)("p",null,"(",(0,r.kt)("em",{parentName:"p"},"Note"),": Save these ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeadm join")," commands presented in this output, as they contain secrets that will be required to add more nodes in future steps.)"),(0,r.kt)("p",null,"this being a control-plane node, ",(0,r.kt)("em",{parentName:"p"},"kubeadm")," will have created a ",(0,r.kt)("em",{parentName:"p"},"kubeconfig")," file in /etc/kubernetes/admin.conf. A ",(0,r.kt)("em",{parentName:"p"},"kubeconfig")," file is a YAML file that contains the required metadata and credentials to talk to the cluster, such as certificates/tokens and endpoint specification. ",(0,r.kt)("em",{parentName:"p"},"Kubectl")," will use whatever ",(0,r.kt)("em",{parentName:"p"},"kubeconfig")," file is pointed at by the KUBECONFIG environment variable, or, by default, the file in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.kube/config"),". So, as suggested in the output, we should do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=/etc/kubernetes/admin.conf\n")),(0,r.kt)("p",null,"now ",(0,r.kt)("em",{parentName:"p"},"kubectl")," should be setup to interact your the cluster. Try it by doing the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[root@demo /]# kubectl get nodes\nNAME   STATUS   ROLES           AGE   VERSION\ndemo   Ready    control-plane   10s   v1.25.9\n")),(0,r.kt)("h3",{id:"installing-a-cni"},"Installing a CNI"),(0,r.kt)("p",null,"Kubernetes follows a very modular API interface based design. Some of those components, like the CSI (",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2019/01/15/container-storage-interface-ga/"},"https://kubernetes.io/blog/2019/01/15/container-storage-interface-ga/")," ) CNI (",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/"},"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/"),") or Ingress controller, come together to form the core of most kubernetes platform setups."),(0,r.kt)("p",null,"The CNI is the module that will take care of enabling networking between containers and services in different nodes, or setup each container's networking properties. As such, it is a critical next step in order to add more nodes to the cluster, or even run workload containers."),(0,r.kt)("p",null,"We have chosen to use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cilium/cilium/"},"cilium")," as a CNI solution, but there are ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containernetworking/cni/"},"many options")," to choose from."),(0,r.kt)("p",null,"We'll go ahead and fetch the cilium binary from upstream by running the following script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CILIUM_CLI_VERSION=$(curl -s https://raw.githubusercontent.com/cilium/cilium-cli/master/stable.txt)\nCLI_ARCH=amd64\ncd /usr/local/bin\ncurl -L --fail --remote-name-all https://github.com/cilium/cilium-cli/releases/download/${CILIUM_CLI_VERSION}/cilium-linux-${CLI_ARCH}.tar.gz{,.sha256sum}\nsha256sum --check cilium-linux-${CLI_ARCH}.tar.gz.sha256sum\nsudo tar xzvfC cilium-linux-${CLI_ARCH}.tar.gz /usr/local/bin\nrm cilium-linux-${CLI_ARCH}.tar.gz{,.sha256sum}\n")),(0,r.kt)("p",null,"and then proceed to install cilium with default options by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/local/bin/cilium install\n")),(0,r.kt)("h3",{id:"adding-more-control-plane-nodes"},"Adding more control-plane nodes"),(0,r.kt)("p",null,"If you have gone with the default topology setup, ",(0,r.kt)("em",{parentName:"p"},"kubeadm")," should be instantiating ",(0,r.kt)("em",{parentName:"p"},"etcd")," instances co-located with your control-plane nodes. Given that and the fact that ",(0,r.kt)("em",{parentName:"p"},"etcd")," is a majority quorum based system, it's especially important that for a high-availability setup, you'll keep an ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"odd"))," (i.e: one, three, five, ...) number of control-plane nodes. As such, the minimum number of control-plane nodes that can offer high-availability would be three."),(0,r.kt)("p",null,"To add more control-plane nodes you need to first get the hosts ready for such by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"preparing the node OS as required"),(0,r.kt)("li",{parentName:"ul"},"provisioning the required tools and software as in the first bootstrapping node (container runtime engine, kubelet, kubeadm, kubectl, ...)")),(0,r.kt)("p",null,"and then execute, on that node, the appropriate ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeadm join")," command as shown in the previous ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeadm init")," output.\nFor a control-plane node, that takes the form: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubeadm join <endpoint> --token <secret> --discovery-token-ca-cert-hash sha256:<hash> --control-plane --certificate-key <secret>\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note"),": the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeadm join")," commands shown after bootstrapping the cluster or, rather, the secrets uploaded and displayed are temporary and expire after a certain time. In case you lost them or they've expired, you can re-upload new certificates and display the new ones, on the bootstrapping control-plane node, by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubeadm init phase upload-certs --upload-certs\nkubeadm token create --print-join-command\n")),(0,r.kt)("h3",{id:"adding-worker-nodes"},"Adding worker nodes"),(0,r.kt)("p",null,"To add worker nodes to your cluster, first get them ready by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"preparing the node OS as required"),(0,r.kt)("li",{parentName:"ul"},"provisioning the required tools and software as in the first bootstrapping node (container runtime engine, kubelet, kubeadm, kubectl, ...)")),(0,r.kt)("p",null,"Next, you can run the appropriate ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeadm join")," command that was displayed at cluster bootstrap. It has the form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubeadm join <endpoint> --token <secret> --discovery-token-ca-cert-hash sha256:<hash>\n")),(0,r.kt)("p",null,"In case you haven't saved that output, you can run (on one of the existing control-plane cluster members) the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubeadm token create --print-join-command\n")),(0,r.kt)("p",null,"which will display the appropriate kubeadm join command and the relevant secrets, again."),(0,r.kt)("h2",{id:"quickstart-on-ubuntu-2204-with-cri-o"},"QuickStart on Ubuntu 22.04 with CRI-O"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note"),": This guide assumes you'll be running these commands as root."),(0,r.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1:")," Enable the required kernel modules on boot:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat <<EOF > /etc/modules-load.d/crio-network.conf\noverlay\nbr_netfilter\nEOF\n")),(0,r.kt)("p",null,"and load them now:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"modprobe overlay\nmodprobe br_netfilter\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2:")," Set appropriate networking sysctl toggles:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat <<EOF > /etc/sysctl.d/99-kubernetes.conf\nnet.bridge.bridge-nf-call-iptables  = 1\nnet.ipv4.ip_forward                 = 1\nnet.bridge.bridge-nf-call-ip6tables = 1\nEOF\n")),(0,r.kt)("p",null,"and apply them immediately:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sysctl --system\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3:")," Disable swap:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swapoff -a\n")),(0,r.kt)("p",null,"and take care to disable swap setup on boot, in case it is enabled (maybe on /etc/fstab)"),(0,r.kt)("h3",{id:"install-packages"},"Install packages"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4:")," Install dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt-get update\napt-get install -y apt-transport-https ca-certificates curl gpg\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5:")," Set variables for CRI-O commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export OS="xUbuntu_22.04"\nexport VERSION="1.28"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6:")," Install CRI-O:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "deb [signed-by=/usr/share/keyrings/libcontainers-archive-keyring.gpg] https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/$OS/ /" > /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list\necho "deb [signed-by=/usr/share/keyrings/libcontainers-crio-archive-keyring.gpg] https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable:/cri-o:/$VERSION/$OS/ /" > /etc/apt/sources.list.d/devel:kubic:libcontainers:stable:cri-o:$VERSION.list\n\nmkdir -p /usr/share/keyrings\ncurl -L https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/$OS/Release.key | gpg --dearmor -o /usr/share/keyrings/libcontainers-archive-keyring.gpg\ncurl -L https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable:/cri-o:/$VERSION/$OS/Release.key | gpg --dearmor -o /usr/share/keyrings/libcontainers-crio-archive-keyring.gpg\n\napt-get update\napt-get install cri-o cri-o-runc\n\nsystemctl daemon-reload\nsystemctl enable --now crio\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"7:")," Install kubernetes packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -fsSL https://pkgs.k8s.io/core:/stable:/v${VERSION}/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg\necho "deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v${VERSION}/deb/ /" | sudo tee /etc/apt/sources.list.d/kubernetes.list\napt-get update\napt-get install -y kubelet kubeadm kubectl\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"8:")," Hold package versions so they don't auto-update:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt-mark hold kubelet kubeadm kubectl\n")),(0,r.kt)("h3",{id:"initialize-the-cluster"},"Initialize the Cluster"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"9:")," Create a kubeadm config for initializing the Cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cat << EOF > /tmp/cluster-config.yaml\napiVersion: kubeadm.k8s.io/v1beta3\nkind: InitConfiguration\nnodeRegistration:\n  kubeletExtraArgs:\n    cgroup-driver: systemd\n    node-ip: 10.110.0.2\n  taints: []\nskipPhases:\n  - addon/kube-proxy\n---\napiVersion: kubeadm.k8s.io/v1beta3\nkind: ClusterConfiguration\nnetworking:\n  serviceSubnet: "10.96.0.0/16"\n  podSubnet: "10.10.0.0/16"\ncontrollerManager:\n  extraArgs:\n    allocate-node-cidrs: "true"\n    node-cidr-mask-size: "20"\nkubernetesVersion: "v1.28.3"\ncontrolPlaneEndpoint: 10.110.0.2 \nEOF\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note")),": If you intend to setup a HA Cluster, you should take care of setting up the VIP beforehand (be it by creating a Load Balancer in a Cloud Provider, or using a bare-metal solution based on something like ",(0,r.kt)("a",{parentName:"p",href:"https://www.keepalived.org/"},"Keepalived"),"). That VIP (or DNS) should go into the ",(0,r.kt)("inlineCode",{parentName:"p"},"controlPlaneEndpoint"),", as changing this after creating the Cluster is an elaborate endeavour."),(0,r.kt)("p",null,"We are specifying a particular node-IP to ensure usage of the internal interface, as our node has multiple interfaces/IPs. We are also skipping the kube-proxy installation because we plan to use Cilium CNI, which will replace kube-proxy."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"10:")," Initialize the Cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubeadm init --upload-certs --config /tmp/cluster-config.yaml\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"11:")," Copy kubeconfig to ~/.kube/config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ~/.kube\ncp /etc/kubernetes/admin.conf ~/.kube/config\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"12:")," Verify the cluster is online and ready with ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get nodes"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                             STATUS   ROLES           AGE   VERSION\nubuntu-s-2vcpu-4gb-amd-ams3-01   Ready    control-plane   85m   v1.28.3\n")),(0,r.kt)("h3",{id:"install-cilium-cni"},"Install Cilium CNI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"13:")," Install cilium binary"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CILIUM_CLI_VERSION=$(curl -s https://raw.githubusercontent.com/cilium/cilium-cli/master/stable.txt)\nCLI_ARCH=amd64\ncd /usr/local/bin\ncurl -L --fail --remote-name-all https://github.com/cilium/cilium-cli/releases/download/${CILIUM_CLI_VERSION}/cilium-linux-${CLI_ARCH}.tar.gz{,.sha256sum}\nsha256sum --check cilium-linux-${CLI_ARCH}.tar.gz.sha256sum\nsudo tar xzvfC cilium-linux-${CLI_ARCH}.tar.gz /usr/local/bin\nrm cilium-linux-${CLI_ARCH}.tar.gz{,.sha256sum}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"14:")," Install cilium CNI with ",(0,r.kt)("inlineCode",{parentName:"p"},"cilium install"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u2139  Using Cilium version 1.14.2\n\ud83d\udd2e Auto-detected cluster name: kubernetes\n\ud83d\udd2e Auto-detected kube-proxy has not been installed\n\u2139  Cilium will fully replace all functionalities of kube-proxy\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"15:")," Wait a minute and verify it has been deployed successfully with ",(0,r.kt)("inlineCode",{parentName:"p"},"cilium status"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    /\xaf\xaf\\\n /\xaf\xaf\\__/\xaf\xaf\\    Cilium:             OK\n \\__/\xaf\xaf\\__/    Operator:           OK\n /\xaf\xaf\\__/\xaf\xaf\\    Envoy DaemonSet:    disabled (using embedded mode)\n \\__/\xaf\xaf\\__/    Hubble Relay:       disabled\n    \\__/       ClusterMesh:        disabled\n\nDeployment             cilium-operator    Desired: 1, Ready: 1/1, Available: 1/1\nDaemonSet              cilium             Desired: 1, Ready: 1/1, Available: 1/1\nContainers:            cilium             Running: 1\n                       cilium-operator    Running: 1\nCluster Pods:          2/2 managed by Cilium\nHelm chart version:    1.14.2\nImage versions         cilium             quay.io/cilium/cilium:v1.14.2@sha256:6263f3a3d5d63b267b538298dbeb5ae87da3efacf09a2c620446c873ba807d35: 1\n                       cilium-operator    quay.io/cilium/operator-generic:v1.14.2@sha256:52f70250dea22e506959439a7c4ea31b10fe8375db62f5c27ab746e3a2af866d: 1\n")),(0,r.kt)("p",null,"Congratulations! \ud83c\udf89"),(0,r.kt)("h3",{id:"add-more-nodes"},"Add more nodes"),(0,r.kt)("h4",{id:"control-plane-nodes"},"Control-Plane nodes"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1:")," On each node, repeat the previous steps for prerequisites and package installs (steps 1 to 8)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2:")," Create a kubeadm join config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat << EOF > /tmp/join-config.yaml\napiVersion: kubeadm.k8s.io/v1beta3\nkind: JoinConfiguration\ndiscovery:\n  bootstrapToken:\n    token: <token>\n    apiServerEndpoint: <control plane endpoint>\n    caCertHashes:\n      - <ca cert hash>\nnodeRegistration:\n  kubeletExtraArgs:\n    cgroup-driver: systemd\n    node-ip: 10.110.0.5\ncontrolPlane:\n  certificateKey: <ca certificate key>\nEOF\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<token>"),",",(0,r.kt)("inlineCode",{parentName:"p"},"<ca cert hash>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<ca certificate key>")," will have been output by kubeadm at the initialization step (previous step 10). If you don't have them anymore or the token has expired, you can get a new certificateKey with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubeadm init phase upload-certs --upload-certs\n")),(0,r.kt)("p",null,"and obtain the token and certificate hash with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubeadm token create --print-join-command\n")),(0,r.kt)("p",null,"We're setting node-ip here because our nodes have multiple IPs and we want to specify which interface the services should listen on."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3:")," On each node, provided each join-config.yaml has been adjusted if required, join the node with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubeadm join --config /tmp/join-config.yaml\n")),(0,r.kt)("h4",{id:"worker-nodes"},"Worker nodes"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1:")," On each node, repeat the previous steps for prerequisites and package installs (steps 1 to 8)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2:")," Create a kubeadm join config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat << EOF > /tmp/join-config.yaml\napiVersion: kubeadm.k8s.io/v1beta3\nkind: JoinConfiguration\ndiscovery:\n  bootstrapToken:\n    token: <token>\n    apiServerEndpoint: 10.110.0.2:6443\n    caCertHashes:\n      - <ca cert hash>\nnodeRegistration:\n  kubeletExtraArgs:\n    cgroup-driver: systemd\n    node-ip: 10.110.0.7\n  taints: []\nEOF\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<token>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<ca cert hash>")," will have been output by kubeadm at the initialization step (previous step 10). If you don't have them anymore or the token has expired, you can obtain them again by running on a control-plane node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubeadm token create --print-join-command\n")),(0,r.kt)("p",null,"We're setting node-ip here because our nodes have multiple IPs and we want to specify which interface the services should listen on."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3:")," On each node, provided each join-config.yaml has been adjusted if required, join the node with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubeadm join --config /tmp/join-config.yaml\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4:")," Label the new worker nodes, by running on a control-plane node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl label node <node_name> node-role.kubernetes.io/worker=""\n')))}d.isMDXComponent=!0}}]);