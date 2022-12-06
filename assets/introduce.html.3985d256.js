import{_ as s,a as o}from"./wechat_QR.453bad8a.js";import{_ as h}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as u,f as p,a as t,d as i,w as a,b as e,e as l,r as n}from"./app.22bc7f56.js";const b={},_=t("h1",{id:"bitsail",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#bitsail","aria-hidden":"true"},"#"),e(" BitSail")],-1),m={href:"https://github.com/bytedance/bitsail/actions/workflows/cicd.yml",target:"_blank",rel:"noopener noreferrer"},f=t("img",{src:"https://github.com/bytedance/bitsail/actions/workflows/cicd.yml/badge.svg",alt:"Build",loading:"lazy"},null,-1),g={href:"https://www.apache.org/licenses/LICENSE-2.0.html",target:"_blank",rel:"noopener noreferrer"},S=t("img",{src:"https://img.shields.io/badge/license-Apache 2-4EB1BA.svg",alt:"License",loading:"lazy"},null,-1),k={href:"https://join.slack.com/t/slack-ted3816/shared_invite/zt-1inff2sip-u7Ej_o73sUgdpJAvqwlEwQ",target:"_blank",rel:"noopener noreferrer"},x=t("img",{src:"https://img.shields.io/badge/slack-%23BitSail-72eff8?logo=slack&color=5DADE2&label=加入 Slack",alt:"加入Slack",loading:"lazy"},null,-1),w=t("h2",{id:"快速导航",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#快速导航","aria-hidden":"true"},"#"),e(" 快速导航")],-1),B=l('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>BitSail是字节跳动开源的基于分布式架构的高性能数据集成引擎, 支持多种异构数据源间的数据同步，并提供离线、实时、全量、增量场景下的全域数据集成解决方案，目前服务于字节内部几乎所有业务线，包括抖音、今日头条等，每天同步数百万亿数据</p><h2 id="为什么我们要使用bitsail" tabindex="-1"><a class="header-anchor" href="#为什么我们要使用bitsail" aria-hidden="true">#</a> 为什么我们要使用BitSail</h2><p>BitSail目前已被广泛使用,并支持数百万亿的大流量场景。同时在火山引擎云原生环境、客户私有云环境等多种场景下得到验证。</p><p>我们积累了很多经验，并做了多项优化，以完善数据集成的功能</p><ul><li>全域数据集成解决方案, 覆盖离线、实时、增量场景</li><li>分布式以及云原生架构, 支持水平扩展</li><li>在准确性、稳定性、性能上，成熟度更好</li><li>丰富的基础功能，例如类型转换、脏数据处理、流控、数据湖集成、自动并发度推断等</li><li>完善的任务运行状态监控，例如流量、QPS、脏数据、延迟等</li></ul><h2 id="bitsail使用场景" tabindex="-1"><a class="header-anchor" href="#bitsail使用场景" aria-hidden="true">#</a> BitSail使用场景</h2><ul><li>异构数据源海量数据同步</li><li>流批一体数据处理能力</li><li>湖仓一体数据处理能力</li><li>高性能、高可靠的数据同步</li><li>分布式、云原生架构数据集成引擎</li></ul><h2 id="bitsail主要特点" tabindex="-1"><a class="header-anchor" href="#bitsail主要特点" aria-hidden="true">#</a> BitSail主要特点</h2><ul><li>简单易用，灵活配置</li><li>流批一体、湖仓一体架构，一套框架覆盖几乎所有数据同步场景</li><li>高性能、海量数据处理能力</li><li>DDL自动同步</li><li>类型系统，不同数据源类型之间的转换</li><li>独立于引擎的读写接口，开发成本低</li><li>任务进度实时展示，正在开发中</li><li>任务状态实时监控</li></ul><h2 id="bitsail架构" tabindex="-1"><a class="header-anchor" href="#bitsail架构" aria-hidden="true">#</a> BitSail架构</h2><p><img src="'+s+`" alt="" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Source[Input Sources] -&gt; Framework[Data Transmission] -&gt; Sink[Output Sinks]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>数据处理流程如下，首先通过 Input Sources 拉取源端数据，然后通过中间框架层处理，最后通过 Output Sinks 将数据写入目标端</p><p>在框架层，我们提供了丰富的基础功能，并对所有同步场景生效，比如脏数据收集、自动并发度计算、流控、任务监控等</p><p>在数据同步场景上，全面覆盖批式、流式、增量场景</p><p>在Runtime层，支持多种执行模式，比如yarn、local，k8s在开发中</p><h2 id="支持连接器列表" tabindex="-1"><a class="header-anchor" href="#支持连接器列表" aria-hidden="true">#</a> 支持连接器列表</h2><table><tr><th>DataSource</th><th>Sub Modules</th><th>Reader</th><th>Writer</th></tr><tr><td>Doris</td><td>-</td><td></td><td>✅</td></tr><tr><td>Druid</td><td>-</td><td></td><td>✅</td></tr><tr><td>ElasticSearch</td><td>-</td><td></td><td>✅</td></tr><tr><td>Fake</td><td>-</td><td>✅</td><td></td></tr><tr><td>FTP/SFTP</td><td>-</td><td>✅</td><td></td></tr><tr><td>Hive</td><td>-</td><td>✅</td><td>✅</td></tr><tr><td>Hadoop</td><td>-</td><td>✅</td><td>✅</td></tr><tr><td>Hbase</td><td>-</td><td>✅</td><td>✅</td></tr><tr><td>Hudi</td><td>-</td><td>✅</td><td>✅</td></tr><tr><td rowspan="4">JDBC</td><td>MySQL</td><td rowspan="4">✅</td><td rowspan="4">✅</td></tr><tr><td>Oracle</td></tr><tr><td>PostgreSQL</td></tr><tr><td>SqlServer</td></tr><tr><td>Kafka</td><td>-</td><td>✅</td><td>✅</td></tr><tr><td>Kudu</td><td>-</td><td>✅</td><td>✅</td></tr><tr><td>MongoDB</td><td>-</td><td>✅</td><td>✅</td></tr><tr><td>Print</td><td>-</td><td></td><td>✅</td></tr><tr><td>Redis</td><td>-</td><td></td><td>✅</td></tr><tr><td>RocketMQ</td><td>-</td><td></td><td>✅</td></tr></table><h2 id="社区支持" tabindex="-1"><a class="header-anchor" href="#社区支持" aria-hidden="true">#</a> 社区支持</h2><h3 id="slack" tabindex="-1"><a class="header-anchor" href="#slack" aria-hidden="true">#</a> Slack</h3>`,21),E={href:"https://join.slack.com/t/slack-ted3816/shared_invite/zt-1inff2sip-u7Ej_o73sUgdpJAvqwlEwQ",target:"_blank",rel:"noopener noreferrer"},y=l('<h3 id="邮件列表" tabindex="-1"><a class="header-anchor" href="#邮件列表" aria-hidden="true">#</a> 邮件列表</h3><p>当前，BitSail社区通过谷歌群组作为邮件列表的提供者，邮件列表可以在绝大部分地区正常收发邮件。 在订阅BitSail小组的邮件列表后可以通过发送邮件发言</p><p>订阅: 发送Email到此地址 <code>bitsail+subscribe@googlegroups.com</code>， 你会收到一封回信询问你是否希望加入BitSail群组，<code>Join This Group</code>按钮可能因网络原因无法使用，直接回复此封邮件便可确认加入。</p><p>开启一个话题: 发送Email到此地址 <code>bitsail@googlegroups.com</code></p><p>取消订阅: 发送Email到此地址 <code>bitsail+unsubscribe@googlegroups.com</code></p><h3 id="微信群" tabindex="-1"><a class="header-anchor" href="#微信群" aria-hidden="true">#</a> 微信群</h3><p>欢迎加入BitSail微信群参与社区讨论与贡献</p><img src="'+o+'" alt="qr" width="100"><h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h2>',9),L=t("h2",{id:"如何部署",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#如何部署","aria-hidden":"true"},"#"),e(" 如何部署")],-1),v=t("h2",{id:"bitsail参数指引",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#bitsail参数指引","aria-hidden":"true"},"#"),e(" BitSail参数指引")],-1),A=t("h2",{id:"如何贡献",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#如何贡献","aria-hidden":"true"},"#"),e(" 如何贡献")],-1),I=t("h2",{id:"开源协议",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#开源协议","aria-hidden":"true"},"#"),e(" 开源协议")],-1),z={href:"https://github.com/bytedance/bitsail/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"};function N(D,T){const r=n("ExternalLinkIcon"),d=n("RouterLink");return c(),u("div",null,[p(`

    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

`),_,t("p",null,[t("a",m,[f,i(r)]),t("a",g,[S,i(r)]),t("a",k,[x,i(r)])]),w,t("ul",null,[t("li",null,[i(d,{to:"/zh/documents/start/"},{default:a(()=>[e("快速上手")]),_:1}),e("：包含BitSail的环境部署和使用教程")]),t("li",null,[i(d,{to:"/zh/documents/connectors/"},{default:a(()=>[e("BitSail连接器")]),_:1}),e("：包含BitSail支持的连接器使用方法")]),t("li",null,[i(d,{to:"/zh/documents/components/"},{default:a(()=>[e("BitSail组件")]),_:1}),e("：包含BitSail支持的常用组件")]),t("li",null,[i(d,{to:"/zh/documents/faq/"},{default:a(()=>[e("常见问题")]),_:1}),e("：BitSail中遇到的常见问题")])]),B,t("p",null,[e("通过此链接可以直接下载并加入BitSail的Slack频道 "),t("a",E,[e("link"),i(r)])]),y,t("p",null,[e("跳转"),i(d,{to:"/zh/documents/start/env_setup.html"},{default:a(()=>[e("环境配置")]),_:1}),e(".")]),L,t("p",null,[e("跳转"),i(d,{to:"/zh/documents/start/deployment.html"},{default:a(()=>[e("部署指南")]),_:1}),e(".")]),v,t("p",null,[e("跳转"),i(d,{to:"/zh/documents/start/config.html"},{default:a(()=>[e("参数指引")]),_:1}),e(".")]),A,t("p",null,[e("跳转"),i(d,{to:"/zh/community/contribute.html"},{default:a(()=>[e("贡献者指引")]),_:1}),e(".")]),I,t("p",null,[t("a",z,[e("Apache 2.0 License"),i(r)]),e(".")])])}const F=h(b,[["render",N],["__file","introduce.html.vue"]]);export{F as default};
