import{_ as i,a as h,b as c}from"./license_header.a2f60810.js";import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as u,c as _,a as e,d as l,w as o,b as t,e as a,r as n}from"./app.22bc7f56.js";const p={},b=e("h1",{id:"贡献者指引",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#贡献者指引","aria-hidden":"true"},"#"),t(" 贡献者指引")],-1),m=a('<p>BitSail社区欢迎大家的贡献！</p><h2 id="如何参与" tabindex="-1"><a class="header-anchor" href="#如何参与" aria-hidden="true">#</a> 如何参与</h2><ul><li>如果你在使用 BitSail 时遇到任何问题，请提交GitHub Issue进行报告。</li><li>如果你希望能支持一个新功能，请提交GitHub Issue以请求该功能。</li><li>在 Slack 频道上可以提出任何问题，或帮助回答其他用户的问题。</li><li>通过认领GitHub Issue来修复Bug或开发新功能。</li><li>改进文档、代码注释、拼写错误和测试覆盖率。</li><li>如果你有一个大的功能要引入，可以在邮件列表中发起一个讨论，收集其他开发者的意见。</li></ul><h2 id="打开一个github-issue" tabindex="-1"><a class="header-anchor" href="#打开一个github-issue" aria-hidden="true">#</a> 打开一个GitHub Issue</h2>',4),f=e("li",null,"搜索已知问题以检查是否存在现有主题",-1),k=e("li",null,"如果是，您可以参与讨论",-1),g={href:"https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue",target:"_blank",rel:"noopener noreferrer"},x=e("h2",{id:"开发环境配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#开发环境配置","aria-hidden":"true"},"#"),t(" 开发环境配置")],-1),y=e("h2",{id:"代码风格",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#代码风格","aria-hidden":"true"},"#"),t(" 代码风格")],-1),q={href:"https://google.github.io/styleguide/javaguide.html",target:"_blank",rel:"noopener noreferrer"},I=a('<h2 id="ide配置" tabindex="-1"><a class="header-anchor" href="#ide配置" aria-hidden="true">#</a> IDE配置</h2><p>我们使用了Intellij作为配置的例子</p><h3 id="checkstyle" tabindex="-1"><a class="header-anchor" href="#checkstyle" aria-hidden="true">#</a> CheckStyle</h3><p>在IDE中安装checkstyle插件</p><p><img src="'+h+'" alt="" loading="lazy"></p>',5),v={href:"https://github.com/bytedance/bitsail/blob/master/tools/maven/checkstyle.xml",target:"_blank",rel:"noopener noreferrer"},w=e("p",null,[e("img",{src:i,alt:"",loading:"lazy"})],-1),E=e("p",null,[t("导入完成后，运行指令 "),e("code",null,"mvn checkstyle:check"),t(" 即可检查是否满足checkstyle.")],-1),B=e("h3",{id:"安装lombok",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装lombok","aria-hidden":"true"},"#"),t(" 安装lombok")],-1),S={href:"https://projectlombok.org/",target:"_blank",rel:"noopener noreferrer"},D=e("h3",{id:"添加license配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#添加license配置","aria-hidden":"true"},"#"),t(" 添加License配置")],-1),G={href:"https://www.apache.org/legal/src-headers#headers",target:"_blank",rel:"noopener noreferrer"},L=a('<p><img src="'+c+'" alt="" loading="lazy"></p><h2 id="开发小技巧" tabindex="-1"><a class="header-anchor" href="#开发小技巧" aria-hidden="true">#</a> 开发小技巧</h2><h3 id="maven依赖强制检查" tabindex="-1"><a class="header-anchor" href="#maven依赖强制检查" aria-hidden="true">#</a> maven依赖强制检查</h3><p>我们在构建过程中检查重叠的包。当您在构建过程中看到冲突错误时，请从 pom 文件中排除有冲突的包。</p><h2 id="提交一个pull-request" tabindex="-1"><a class="header-anchor" href="#提交一个pull-request" aria-hidden="true">#</a> 提交一个Pull Request</h2>',5),z={href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests",target:"_blank",rel:"noopener noreferrer"},H={href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo",target:"_blank",rel:"noopener noreferrer"},N=e("em",null,[e("strong",null,"BitSail")],-1),R=e("li",null,"在你的fork的代码库中生成一个新分支",-1),V=e("li",null,"开发你的代码，包括必要的测试用例和编码风格检查",-1),j=e("li",null,"提交对分支的更改并推送到你fork的仓库",-1),C=e("li",null,[t("向 "),e("em",null,[e("strong",null,"BitSail")]),t(" 存储库创建pull request")],-1),P=e("h2",{id:"请求代码审查",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#请求代码审查","aria-hidden":"true"},"#"),t(" 请求代码审查")],-1),A=e("p",null,"准备好pull request后，请确保pull request模板清单中的所有项目都已完成。 在pull request中@任意一个项目的committer进行代码审查。",-1);function F(J,T){const s=n("RouterLink"),r=n("ExternalLinkIcon");return u(),_("div",null,[b,e("p",null,[l(s,{to:"/en/contribute/contribute.html"},{default:o(()=>[t("English")]),_:1}),t(" | 简体中文")]),m,e("ul",null,[f,k,e("li",null,[t("如果不是，根据文档自己创建一个新问题"),e("a",g,[t("创建Issue"),l(r)])])]),x,e("p",null,[t("跳转到"),l(s,{to:"/zh/documents/docs/start/env_setup.html"},{default:o(()=>[t("环境配置")]),_:1})]),y,e("p",null,[t("BitSail项目使用了"),e("a",q,[t("Google Java Style Guide"),l(r)])]),I,e("p",null,[t("我们为开发者定义了一份checkstyle配置 "),e("a",v,[t("tools/maven/checkstyle.xml"),l(r)]),t(" 。 在IDE中进行开发时，可将上述checkstyle配置文件导入项目:")]),w,E,B,e("p",null,[t("我们使用了"),e("a",S,[t("lombok"),l(r)]),t(".请在IDE插件安装lombok")]),D,e("p",null,[t("所有源文件都需要添加许可证头。请添加 "),e("a",G,[t("Apache License header"),l(r)]),t(" 到您的 IDE 版权设置。完成此步骤后，IDE 将自动将许可证添加到新的源文件。")]),L,e("p",null,[t("如果是第一次提交 pull request，可以阅读这个文档 "),e("a",z,[t("什么是Pull Request"),l(r)])]),e("ul",null,[e("li",null,[e("a",H,[t("Fork "),N,t(" 代码库"),l(r)])]),R,V,j,C]),P,A])}const Q=d(p,[["render",F],["__file","contribute.html.vue"]]);export{Q as default};
