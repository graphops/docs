"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={},i="Kubernetes Guide",s={unversionedId:"launchpad/guides/kubernetes-guide",id:"launchpad/guides/kubernetes-guide",title:"Kubernetes Guide",description:"Introduction",source:"@site/docs/launchpad/guides/kubernetes-guide.md",sourceDirName:"launchpad/guides",slug:"/launchpad/guides/kubernetes-guide",permalink:"/launchpad/guides/kubernetes-guide",draft:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/launchpad/guides/kubernetes-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"launchpadSidebar",previous:{title:"Upgrading Kubernetes with kubeadm",permalink:"/launchpad/guides/kubeadm-upgrading"},next:{title:"Considerations for Kubernetes installation using FCOS",permalink:"/launchpad/advanced/advanced-kubernetes"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Bootstrapping a cluster with Kubeadm",id:"bootstrapping-a-cluster-with-kubeadm",level:2},{value:"Installing a CNI",id:"installing-a-cni",level:2},{value:"Adding more control-plane nodes",id:"adding-more-control-plane-nodes",level:2},{value:"Adding worker nodes",id:"adding-worker-nodes",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kubernetes-guide"},"Kubernetes Guide"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"[Kubernetes]","(",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"https://kubernetes.io/")," is the container orchestration system emerging as the victor of the container wars.\nSome of its characteristics that stand out are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"being opensource"),(0,o.kt)("li",{parentName:"ul"},"having an API designed to be easily extended"),(0,o.kt)("li",{parentName:"ul"},"following a design pattern based on controllers and reconciliation loops")),(0,o.kt)("p",null,"The major components that make up k8s are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"etcd:")," a key-value store "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"kube-apiserver:")," exposes the Kubernetes API "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"kube-controller-manager:")," single binary that combines a variety of controllers"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"kube-scheduler:")," assigns containers to nodes"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"kubelet:")," responsible for setting up containers"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"kube-proxy:")," manages iptables rules in order to implement the Kubernetes service abstraction")),(0,o.kt)("p",null,"Being a multi-node clustered system, Kubernetes topology distinguishes between two different roles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"control-plane")," nodes: these are the nodes that run ",(0,o.kt)("em",{parentName:"li"},"kube-apiserver"),", ",(0,o.kt)("em",{parentName:"li"},"kube-controller-manager"),", and in some setups also ",(0,o.kt)("em",{parentName:"li"},"etcd")," nodes (",(0,o.kt)("em",{parentName:"li"},"etcd")," could, potentially, run externally in its own independent nodes)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"worker")," nodes: these need to run mostly ",(0,o.kt)("em",{parentName:"li"},"kubelet"),", as their purpose is focused on running the workload containers")),(0,o.kt)("p",null,"Setting up, and bootstrapping a cluster involves installing and configuring all the required components, certificates management, and container manifests that make up the system. There are numerous options and tools to achieve this goal, but performing manual bootstrapping is a highly educational experience: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kelseyhightower/kubernetes-the-hard-way"},"Kubernetes - The Hard Way"),")."),(0,o.kt)("p",null,"This guide utilizes ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/setup-tools/kubeadm/"},"Kubeadm")," - a tool used to bootstrap and manage the lifecycle of a Kubernetes cluster (upgrade versions, add/remove nodes). It automates the process of setting up a cluster and provides a consistent way of doing it while preserving almost as much control over the setup as a purely manual one."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"At least a node configured with your Linux OS of choice and swap disabled - recent Kubernetes versions allow the host to have swap enabled, but that is a new feature not yet in GA (General Availability) and requires extra setup."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/production-environment/container-runtimes/"},"container runtime")," of choice. We favored CRI-O, and would recommend that one. "),(0,o.kt)("li",{parentName:"ul"},"Installing the required binaries: ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/"},"Documentation"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"kubelet"),(0,o.kt)("li",{parentName:"ul"},"kubeadm"),(0,o.kt)("li",{parentName:"ul"},"kubectl (the CLI tool to talk to your cluster)")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Pay attention that all the binaries, and the chosen CRI, are of matching compatible versions."),(0,o.kt)("p",null,"Lastly, there is one networking setup requirement, or choice: there needs to be an endpoint for the control-plane API (an IP address, and optionally, a DNS that resolves to that IP). In the special case of a single-node cluster, picking the IP of the listening interface fits the bill. But, more generally, one would either setup a Load Balancer if setting up the cluster on a Cloud Provider, and use that Load Balancer's IP / DNS, or in case of a multi-node control-plane in bare metal, one may setup something such as ",(0,o.kt)("a",{parentName:"p",href:"https://keepalived.readthedocs.io/en/latest/introduction.html"},"Keepalived")," to have a floating IP suitable to be used as the control-plane endpoint."),(0,o.kt)("h2",{id:"bootstrapping-a-cluster-with-kubeadm"},"Bootstrapping a cluster with Kubeadm"),(0,o.kt)("p",null,"A feature that stands out in ",(0,o.kt)("em",{parentName:"p"},"kubeadm")," is the ability to customize almost every option of the underlying components. That configuration is passed via flags to ",(0,o.kt)("em",{parentName:"p"},"kubeadm"),", or ingested via YAML files.\n",(0,o.kt)("em",{parentName:"p"},"Kubeadm")," always bootstraps a cluster as a single control-plane node, and other nodes are added after the bootstrapping."),(0,o.kt)("p",null,"We're going to create a YAML file instead of passing all the options as flags to ",(0,o.kt)("em",{parentName:"p"},"kubeadm"),".\nCreate a cluster-config.yaml file as the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: kubeadm.k8s.io/v1beta3\nkind: InitConfiguration\nkubeletExtraArgs:\n  cgroup-driver: systemd\ntaints: []\n---\napiVersion: kubeadm.k8s.io/v1beta3\nkind: ClusterConfiguration\nnetworking:\n  serviceSubnet: "10.96.0.0/16"\n  podSubnet: "10.10.0.0/16"\nkubernetesVersion: "v1.25.9"\ncontrolPlaneEndpoint: <endpoint_ip_or_dns>\n')),(0,o.kt)("p",null,"where you must replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<endpoint_ip_or_dns>")," by the control-plane's endpoint and, optionally, choose a different podSubnet and/or serviceSubnet. Documentation on all the many configuration options available can be found ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/config-api/kubeadm-config.v1beta3/"},"here"),"."),(0,o.kt)("p",null,"next, you can use ",(0,o.kt)("em",{parentName:"p"},"kubeadm")," to bootstrap the cluster with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"kubeadm init --upload-certs --config cluster-config.yaml\n")),(0,o.kt)("p",null,"after which, if all goes well, one should see output similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'[root@demo /]# kubeadm init\nI0515 19:48:51.424146 1642628 version.go:256] remote version is much newer: v1.27.1; falling back to: stable-1.25\n[init] Using Kubernetes version: v1.25.9\n[preflight] Running pre-flight checks\n[preflight] Pulling images required for setting up a Kubernetes cluster\n[preflight] This might take a minute or two, depending on the speed of your internet connection\n[preflight] You can also perform this action in beforehand using \'kubeadm config images pull\'\n[certs] Using certificateDir folder "/etc/kubernetes/pki"\n[certs] Generating "ca" certificate and key\n[certs] Generating "apiserver" certificate and key\n[certs] apiserver serving cert is signed for DNS names [demo kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local] and IPs [10.96.0.1 134.177.177.107]\n[certs] Generating "apiserver-kubelet-client" certificate and key\n[certs] Generating "front-proxy-ca" certificate and key\n[certs] Generating "front-proxy-client" certificate and key\n[certs] Generating "etcd/ca" certificate and key\n[certs] Generating "etcd/server" certificate and key\n[certs] etcd/server serving cert is signed for DNS names [demo localhost] and IPs [134.177.177.107 127.0.0.1 ::1]\n[certs] Generating "etcd/peer" certificate and key\n[certs] etcd/peer serving cert is signed for DNS names [demo localhost] and IPs [134.177.177.107 127.0.0.1 ::1]\n[certs] Generating "etcd/healthcheck-client" certificate and key\n[certs] Generating "apiserver-etcd-client" certificate and key\n[certs] Generating "sa" key and public key\n[kubeconfig] Using kubeconfig folder "/etc/kubernetes"\n[kubeconfig] Writing "admin.conf" kubeconfig file\n[kubeconfig] Writing "kubelet.conf" kubeconfig file\n[kubeconfig] Writing "controller-manager.conf" kubeconfig file\n[kubeconfig] Writing "scheduler.conf" kubeconfig file\n[kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"\n[kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"\n[kubelet-start] Starting the kubelet\n[control-plane] Using manifest folder "/etc/kubernetes/manifests"\n[control-plane] Creating static Pod manifest for "kube-apiserver"\n[control-plane] Creating static Pod manifest for "kube-controller-manager"\n[control-plane] Creating static Pod manifest for "kube-scheduler"\n[etcd] Creating static Pod manifest for local etcd in "/etc/kubernetes/manifests"\n[wait-control-plane] Waiting for the kubelet to boot up the control plane as static Pods from directory "/etc/kubernetes/manifests". This can take up to 4m0s\n[apiclient] All control plane components are healthy after 4.502328 seconds\n[upload-config] Storing the configuration used in ConfigMap "kubeadm-config" in the "kube-system" Namespace\n[kubelet] Creating a ConfigMap "kubelet-config" in namespace kube-system with the configuration for the kubelets in the cluster\n[upload-certs] Skipping phase. Please see --upload-certs\n[mark-control-plane] Marking the node demo as control-plane by adding the labels: [node-role.kubernetes.io/control-plane node.kubernetes.io/exclude-from-external-load-balancers]\n[mark-control-plane] Marking the node demo as control-plane by adding the taints [node-role.kubernetes.io/control-plane:NoSchedule]\n[bootstrap-token] Using token: 4y3umx.fnuv7v9pgp4jn74b\n[bootstrap-token] Configuring bootstrap tokens, cluster-info ConfigMap, RBAC Roles\n[bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to get nodes\n[bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to post CSRs in order for nodes to get long term certificate credentials\n[bootstrap-token] Configured RBAC rules to allow the csrapprover controller automatically approve CSRs from a Node Bootstrap Token\n[bootstrap-token] Configured RBAC rules to allow certificate rotation for all node client certificates in the cluster\n[bootstrap-token] Creating the "cluster-info" ConfigMap in the "kube-public" namespace\n[kubelet-finalize] Updating "/etc/kubernetes/kubelet.conf" to point to a rotatable kubelet client certificate and key\n[addons] Applied essential addon: CoreDNS\n[addons] Applied essential addon: kube-proxy\n\nYour Kubernetes control-plane has initialized successfully!\n\nTo start using your cluster, you need to run the following as a regular user:\n\n  mkdir -p $HOME/.kube\n  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n  sudo chown $(id -u):$(id -g) $HOME/.kube/config\n\nAlternatively, if you are the root user, you can run:\n\n  export KUBECONFIG=/etc/kubernetes/admin.conf\n\nYou should now deploy a pod network to the cluster.\nRun "kubectl apply -f [podnetwork].yaml" with one of the options listed at:\n  https://kubernetes.io/docs/concepts/cluster-administration/addons/\n\nYou can now join any number of control-plane node by running the following command on each as a root:\n\nkubeadm join 192.168.0.200:6443 --token 9vr73a.a8uxyaju799qwdjv --discovery-token-ca-cert-hash sha256:7c2e69131a36ae2a042a339b33381c6d0d43887e2de83720eff5359e26aec866 --control-plane --certificate-key f8902e114ef118304e561c3ecd4d0b543adc226b7a07f675f56564185ffe0c07\n\nPlease note that the certificate-key gives access to cluster sensitive data, keep it secret!\nAs a safeguard, uploaded-certs will be deleted in two hours; If necessary, you can use kubeadm init phase upload-certs to reload certs afterward.\n\nThen you can join any number of worker nodes by running the following on each as root:\n\nkubeadm join 192.168.0.200:6443 --token 9vr73a.a8uxyaju799qwdjv --discovery-token-ca-cert-hash sha256:7c2e69131a36ae2a042a339b33381c6d0d43887e2de83720eff5359e26aec866\n')),(0,o.kt)("p",null,"(",(0,o.kt)("em",{parentName:"p"},"Note"),": Save these ",(0,o.kt)("inlineCode",{parentName:"p"},"kubeadm join")," commands presented in this output, as they contain secrets that will be required to add more nodes in future steps.)"),(0,o.kt)("p",null,"this being a control-plane node, ",(0,o.kt)("em",{parentName:"p"},"kubeadm")," will have created a ",(0,o.kt)("em",{parentName:"p"},"kubeconfig")," file in /etc/kubernetes/admin.conf. A ",(0,o.kt)("em",{parentName:"p"},"kubeconfig")," file is a YAML file that contains the required metadata and credentials to talk to the cluster, such as certificates/tokens and endpoint specification. ",(0,o.kt)("em",{parentName:"p"},"Kubectl")," will use whatever ",(0,o.kt)("em",{parentName:"p"},"kubeconfig")," file is pointed at by the KUBECONFIG environment variable, or, by default, the file in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.kube/config"),". So, as suggested in the output, we should do:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=/etc/kubernetes/admin.conf\n")),(0,o.kt)("p",null,"now ",(0,o.kt)("em",{parentName:"p"},"kubectl")," should be setup to interact your the cluster. Try it by doing the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[root@demo /]# kubectl get nodes\nNAME   STATUS   ROLES           AGE   VERSION\ndemo   Ready    control-plane   10s   v1.25.9\n")),(0,o.kt)("h2",{id:"installing-a-cni"},"Installing a CNI"),(0,o.kt)("p",null,"Kubernetes follows a very modular API interface based design. Some of those components, like the CSI (",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2019/01/15/container-storage-interface-ga/"},"https://kubernetes.io/blog/2019/01/15/container-storage-interface-ga/")," ) CNI (",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/"},"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/"),") or Ingress controller, come together to form the core of most kubernetes platform setups."),(0,o.kt)("p",null,"The CNI is the module that will take care of enabling networking between containers and services in different nodes, or setup each container's networking properties. As such, it is a critical next step in order to add more nodes to the cluster, or even run workload containers."),(0,o.kt)("p",null,"We have chosen to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cilium/cilium/"},"cilium")," as a CNI solution, but there are ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containernetworking/cni/"},"many options")," to choose from."),(0,o.kt)("p",null,"We'll go ahead and fetch the cilium binary from upstream by running the following script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"CILIUM_CLI_VERSION=$(curl -s https://raw.githubusercontent.com/cilium/cilium-cli/master/stable.txt)\nCLI_ARCH=amd64\ncd /usr/local/bin\ncurl -L --fail --remote-name-all https://github.com/cilium/cilium-cli/releases/download/${CILIUM_CLI_VERSION}/cilium-linux-${CLI_ARCH}.tar.gz{,.sha256sum}\nsha256sum --check cilium-linux-${CLI_ARCH}.tar.gz.sha256sum\nsudo tar xzvfC cilium-linux-${CLI_ARCH}.tar.gz /usr/local/bin\nrm cilium-linux-${CLI_ARCH}.tar.gz{,.sha256sum}\n")),(0,o.kt)("p",null,"and then proceed to install cilium with default options by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/local/bin/cilium install\n")),(0,o.kt)("h2",{id:"adding-more-control-plane-nodes"},"Adding more control-plane nodes"),(0,o.kt)("p",null,"If you have gone with the default topology setup, ",(0,o.kt)("em",{parentName:"p"},"kubeadm")," should be instantiating ",(0,o.kt)("em",{parentName:"p"},"etcd")," instances co-located with your control-plane nodes. Given that and the fact that ",(0,o.kt)("em",{parentName:"p"},"etcd")," is a majority quorum based system, it's specially important that for a high-availability setup you'll keep an ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"odd"))," (i.e: one, thee, five, ...) number of control-plane nodes. As such, the minimum number of control-plane nodes that can offer high-availability would be three."),(0,o.kt)("p",null,"To add more control-plane nodes you need to first get the hosts ready for such by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"preparing the node OS as required"),(0,o.kt)("li",{parentName:"ul"},"provisioning the required tools and software as in the first bootstrapping node (container runtime engine, kubelet, kubeadm, kubectl, ...)")),(0,o.kt)("p",null,"and then execute, on that node, the appropriate ",(0,o.kt)("inlineCode",{parentName:"p"},"kubeadm join")," command as shown in the previous ",(0,o.kt)("inlineCode",{parentName:"p"},"kubeadm init")," output.\nFor a control-plane node, that takes the form:\n",(0,o.kt)("inlineCode",{parentName:"p"},"kubeadm join <endpoint> --token <secret> --discovery-token-ca-cert-hash sha256:<hash> --control-plane --certificate-key <secret>")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note"),": the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubeadm join")," commands shown after bootstrapping the cluster or, rather, the secrets uploaded and displayed are temporary and expire after a certain time. In case you lost them or they've expired, you can re-upload new certificates and display the new ones, on the bootstrapping control-plane node, by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubeadm init phase upload-certs --upload-certs\nkubeadm token create --print-join-command\n")),(0,o.kt)("h2",{id:"adding-worker-nodes"},"Adding worker nodes"),(0,o.kt)("p",null,"To add worker nodes to your cluster, first get them ready for such by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"preparing the node OS as required"),(0,o.kt)("li",{parentName:"ul"},"provisioning the required tools and software as in the first bootstrapping node (container runtime engine, kubelet, kubeadm, kubectl, ...)")),(0,o.kt)("p",null,"Next, you can run the appropriate ",(0,o.kt)("inlineCode",{parentName:"p"},"kubeadm join")," command that was displayed at cluster bootstrap. It has the form:\n",(0,o.kt)("inlineCode",{parentName:"p"},"kubeadm join <endpoint> --token <secret> --discovery-token-ca-cert-hash sha256:<hash>")),(0,o.kt)("p",null,"In case you haven't saved that output, you can run (on one of the existing control-plane cluster members) the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubeadm token create --print-join-command\n")),(0,o.kt)("p",null,"which will display you the appropriate kubeadm join command and the relevant secrets, again."))}p.isMDXComponent=!0}}]);