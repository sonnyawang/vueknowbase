(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{413:function(_,v,e){"use strict";e.r(v);var o=e(45),a=Object(o.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h4",{attrs:{id:"_1-中间件是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-中间件是什么"}},[_._v("#")]),_._v(" 1. 中间件是什么")]),_._v(" "),e("ul",[e("li",[_._v("中间件是一种独立的系统软件或服务程序，分布式应用软件借助这种软件在不同的技术之间共享资源。中间件位于客户机/ 服务器的操作系统之上，管理计算机资源和网络通讯，是连接两个独立应用程序或独立系统的软件。相连接的系统，即使它们具有不同的接口，但通过中间件相互之间仍能交换信息。通过中间件，应用程序可以工作于多平台或 OS 环境。")]),_._v(" "),e("li",[_._v("中间件是介于操作系统和应用软件之间，为应用软件提供服务功能的软件，有消息中间件，交易中间件，应用服务器等。由于介于两种软件之间，所以，称为中间件。")]),_._v(" "),e("li",[_._v("中间件屏蔽了底层操作系统的复杂性，使程序开发人员面对一个简单而统一的开发环境，减少程序设计的复杂性，将注意力集中在自己的业务上，不必再为程序在不同系统软件上的移植而重复工作，从而大大减少了技术上的负担。中间件带给应用系统的，不只是开发的简便、开发周期的缩短，也减少了系统的维护、运行和管理的工作量，还减少了计算机总体费用的投入。")])]),_._v(" "),e("h4",{attrs:{id:"_2-主要中间件的分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-主要中间件的分类"}},[_._v("#")]),_._v(" 2. 主要中间件的分类")]),_._v(" "),e("h5",{attrs:{id:"_2-1-hadoop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-hadoop"}},[_._v("#")]),_._v(" 2.1 "),e("code",[_._v("Hadoop")])]),_._v(" "),e("ul",[e("li",[e("code",[_._v("Hadoop")]),_._v("就是一个分布式计算平台，用"),e("code",[_._v("Java")]),_._v("语言开发，包含 "),e("code",[_._v("Common")]),_._v("、"),e("code",[_._v("MapReduce")]),_._v(" 和"),e("code",[_._v("HDFS")]),_._v("三个核心部件（"),e("code",[_._v("HDFS")]),_._v(" 和 "),e("code",[_._v("MapReduce")]),_._v(" 是最核心的两个部件）。其中：\n"),e("ul",[e("li",[e("code",[_._v("Common")]),_._v(" 为 "),e("code",[_._v("Hadoop")]),_._v(" 的其他项目提供了一些常用工具，主要包括系统配置工具 "),e("code",[_._v("Configuration")]),_._v("、远程过程调用 "),e("code",[_._v("RPC")]),_._v("、序列化机制和 "),e("code",[_._v("Hadoop")]),_._v(" 抽象文件系统等。")]),_._v(" "),e("li",[e("code",[_._v("MapReduce")]),_._v(" 是处理海量数据的计算模型。")]),_._v(" "),e("li",[_._v("而 "),e("code",[_._v("HDFS")]),_._v(" 用于存储海量数据，它具备高度容错性，能在低成本的通用硬件机器上稳定运行。")])])]),_._v(" "),e("li",[e("code",[_._v("Hadoop")]),_._v(" 实现了分布式计算中的基础算法（如一致算法、选举算法、故障检测、快照等），同时为用户提供了编程和命令接口。程序员调用这些函数能轻松写出分布式应用程序。")]),_._v(" "),e("li",[_._v("基于 "),e("code",[_._v("Hadoop")]),_._v(" 平台衍生出来的开源项目主要有"),e("code",[_._v("Yarn")]),_._v("、"),e("code",[_._v("HBase")]),_._v("、"),e("code",[_._v("Hive")]),_._v("、"),e("code",[_._v("ZooKeeper")]),_._v("、"),e("code",[_._v("Avro")]),_._v("、"),e("code",[_._v("Sqoop")]),_._v("、"),e("code",[_._v("Mahout")]),_._v("、"),e("code",[_._v("Crossbow")]),_._v(" 等。")]),_._v(" "),e("li",[_._v("用 "),e("code",[_._v("Hadoop")]),_._v(" 构建的应用实例对于计算资源的消耗具备两个明显的特征：资源需求量大；资源需求具备季节性。")])]),_._v(" "),e("h5",{attrs:{id:"_2-2-lvs-linux-virtual-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-lvs-linux-virtual-server"}},[_._v("#")]),_._v(" 2.2 "),e("code",[_._v("LVS(Linux Virtual Server)")])]),_._v(" "),e("ul",[e("li",[_._v("把许多台物理"),e("code",[_._v("Linux")]),_._v("计算机逻辑上整合成一台超级计算机，对用户来说感觉只有一台计算能力很强的服务器。"),e("code",[_._v("LVS")]),_._v(" 就是一个由软件实现的负载均衡器，工作在网络"),e("code",[_._v("OSI")]),_._v("的第四层（应用层）。负载均衡器的作用就是把任务分配给最合适的服务器。")]),_._v(" "),e("li",[_._v("两个较为流行的第七层负载均衡器是 "),e("code",[_._v("Nginx")]),_._v(" 和 "),e("code",[_._v("HAProxy")]),_._v("，针对应用做均衡，所以能适应的负载种类没有 "),e("code",[_._v("LVS")]),_._v(" 多。")])]),_._v(" "),e("h5",{attrs:{id:"_2-3-linux-ha"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-linux-ha"}},[_._v("#")]),_._v(" 2.3 "),e("code",[_._v("Linux-HA")])]),_._v(" "),e("ul",[e("li",[_._v("如果负载均衡器出现故障，那么整个系统（如网店）将会瘫痪。所以人们开发了各种集群软件，如 "),e("code",[_._v("Linux-HA")]),_._v(" 和 "),e("code",[_._v("Keepalive")]),_._v(" 等。集成故障转移集群软件的核心思想是，实时检测故障机器并及时让好的机器接管工作，对外提供高可用性。")]),_._v(" "),e("li",[e("code",[_._v("Linux-HA组件")]),_._v("：\n"),e("ul",[e("li",[e("code",[_._v("Heartbeat")]),_._v("：负责维护集群中各节点的信息及它们之间的心跳通信。")]),_._v(" "),e("li",[e("code",[_._v("Pacemaker")]),_._v("：集群资源管理器，是核心组件，客户端通过 Pacemaker 来配置、管理并监控整个集群。")]),_._v(" "),e("li",[e("code",[_._v("Resource Agent")]),_._v("：为用于控制服务启停、监控服务状态的脚本集合，本地资源管理器（"),e("code",[_._v("LRM")]),_._v("）调用这些脚本来启动、停止、监控各种集群资源。")]),_._v(" "),e("li",[e("code",[_._v("Cluster Glue")]),_._v("：包含一套函数库和工具，在集群栈中，除集群消息传输（由 "),e("code",[_._v("Heartbeat 承担")]),_._v("）、集群资源管理（由 "),e("code",[_._v("Pacemaker")]),_._v(" 承担）和资源代理（由 "),e("code",[_._v("Resource Agent")]),_._v(" 承担）功能外，其他功能都由 "),e("code",[_._v("Cluster Glue")]),_._v(" 来完成。它包含的两个主要部分是 "),e("code",[_._v("LRM")]),_._v(" 和 "),e("code",[_._v("Stonith")]),_._v("，前者是本地资源管理器，后者的任务是隔离故障机器。")])])])]),_._v(" "),e("h5",{attrs:{id:"_2-4-静态网站服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-静态网站服务器"}},[_._v("#")]),_._v(" 2.4 静态网站服务器")]),_._v(" "),e("ul",[e("li",[_._v("网页浏览器与 "),e("code",[_._v("Apache")]),_._v(" 成了标准的 "),e("code",[_._v("C/S")]),_._v(" 模式，浏览器是客户端，而 "),e("code",[_._v("Apache")]),_._v(" 是服务端。")])]),_._v(" "),e("h5",{attrs:{id:"_2-5-动态应用服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-动态应用服务器"}},[_._v("#")]),_._v(" 2.5 动态应用服务器")]),_._v(" "),e("ul",[e("li",[_._v("开源的动态应用服务器有 "),e("code",[_._v("JBoss")]),_._v("、"),e("code",[_._v("Tomcat")]),_._v("、"),e("code",[_._v("Geronimo")]),_._v("、"),e("code",[_._v("JOnAS")]),_._v("。")])])])}),[],!1,null,null,null);v.default=a.exports}}]);