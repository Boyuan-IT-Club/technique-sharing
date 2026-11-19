# 第一课参考资料

## VS Code 界面、工作区和快捷键

- [官方入门教程](https://code.visualstudio.com/docs/editing/getting-started/editor-tutorial)带你打开项目并完成一次编辑。
- [界面总览](https://code.visualstudio.com/docs/editing/getting-started/userinterface)介绍活动栏、编辑区、底部面板和分屏。
- [工作区](https://code.visualstudio.com/docs/editing/workspaces/workspaces)解释打开文件夹和多根工作区。
- [默认快捷键](https://code.visualstudio.com/docs/reference/default-keybindings) · [Windows 一页速查表](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
- [集成终端](https://code.visualstudio.com/docs/terminal/basics) · [终端字体与外观](https://code.visualstudio.com/docs/terminal/appearance)
- [VS Code Markdown](https://code.visualstudio.com/docs/languages/markdown)介绍内置预览。

## 查找、跨文件跳转和编辑

- [基本编辑](https://code.visualstudio.com/docs/editing/codebasics)介绍多光标、跨文件搜索和替换预览。
- [代码导航](https://code.visualstudio.com/docs/editing/editingevolved)介绍面包屑、跳转到定义和查找引用。
- [IntelliSense](https://code.visualstudio.com/docs/editing/intellisense) · [JavaScript 支持](https://code.visualstudio.com/docs/languages/javascript) · [自定义代码片段](https://code.visualstudio.com/docs/editing/userdefinedsnippets)
- [VS Code 调试](https://code.visualstudio.com/docs/debugtest/debugging)介绍断点、变量和调用栈。

## 扩展与配置

- 安装和管理扩展，准备独立的演示配置。[扩展市场](https://code.visualstudio.com/docs/configure/extensions/extension-marketplace) · [Profiles](https://code.visualstudio.com/docs/configure/profiles)
- 界面语言。[简体中文语言包](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans) · [显示语言设置](https://code.visualstudio.com/docs/configure/locales)
- 静态页面预览，保存后自动刷新。[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- 选择 Python 环境、补全和跳转。[Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) · [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance) · [Pylance 自动导入](https://github.com/microsoft/pylance-release/blob/main/docs/howto/auto-import-guide.md)
- 代码格式、检查和行内提示。[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) · [Ruff](https://docs.astral.sh/ruff/editors/setup/) · [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
- 主题、文件图标、窗口颜色、缩进和 Markdown 目录。[One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme) · [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) · [Peacock](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock) · [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) · [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

## Python、Flask 和远程开发

- [Python 虚拟环境](https://docs.python.org/3/library/venv.html)（含激活脚本说明） · [uv](https://docs.astral.sh/uv/)（更快的替代） · [VS Code 中选择 Python 环境](https://code.visualstudio.com/docs/python/environments)
- [Flask 安装](https://flask.palletsprojects.com/en/stable/installation/) · [Flask Quickstart](https://flask.palletsprojects.com/en/stable/quickstart/)
- [Remote - SSH](https://code.visualstudio.com/docs/remote/ssh)介绍连接远端、打开文件夹和安装远端扩展。
- [Ports 与端口转发](https://code.visualstudio.com/docs/remote/ssh#_forwarding-a-port--creating-ssh-tunnel)说明如何从本机浏览器访问远端服务。
- [GNU nano 手册](https://www.nano-editor.org/dist/latest/nano.html) · [Vim 入门](https://vimhelp.org/usr_02.txt.html)

## 仓库页、许可证与第一次贡献

- [Fork 仓库](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)说明 Fork 是在自己的账号下复制一份，用来发起 PR。
- [用 Star 收藏仓库](https://docs.github.com/en/get-started/exploring-projects-on-github/saving-repositories-with-stars) · [关注动态](https://docs.github.com/en/get-started/exploring-projects-on-github/following-people)。Star 是收藏，Watch 才是订阅通知。
- [许可证如何判定](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)说明没有 LICENSE 时默认保留所有权利。
- [选择一个开源许可证](https://choosealicense.com/)对比 MIT、Apache-2.0、GPL 的许可条件。
- [GNU GPL 常见问题](https://www.gnu.org/licenses/gpl-faq.html)解释传染性许可在网络服务下的边界。
- 练手仓库：[first-contributions](https://github.com/firstcontributions/first-contributions)按网页步骤完成第一次 PR；找真实任务用 [goodfirstissue.dev](https://goodfirstissue.dev/)、[up-for-grabs.net](https://up-for-grabs.net/)、[First Timers Only](https://www.firsttimersonly.com/)、[awesome-for-beginners](https://github.com/MunGell/awesome-for-beginners) 或 GitHub 的 [`good first issue` 标签](https://github.com/topics/good-first-issue)。
- [GitHub 开源指南：如何贡献](https://opensource.guide/how-to-contribute/)说明文档、翻译、测试同样算贡献。

## 写代码的工具：编辑器、IDE 与 agent

- [VS Code](https://code.visualstudio.com/) · [Zed](https://zed.dev/) · [Cursor](https://cursor.com/) · [JetBrains IDE 列表](https://www.jetbrains.com/ides/)对照轻量编辑器、重型 IDE 和 AI 编辑器。
- [语言服务器协议](https://microsoft.github.io/language-server-protocol/)解释编辑器的补全和跳转来自哪里。
- [Claude Code](https://docs.claude.com/en/docs/claude-code/overview) · [OpenAI Codex](https://developers.openai.com/codex) · [pi](https://pi.dev/)是终端里的编码 agent。
- [DeepSeek Harness（dsh）](https://github.com/deepseek-ai/deepseek-harness) · [ZCode](https://github.com/zai-org/ZCode)是带桌面或网页界面的 agent 工作台。

## 浏览器开发者工具

- [DevTools 总览](https://developer.chrome.com/docs/devtools) · [Elements](https://developer.chrome.com/docs/devtools/elements)看 DOM 与 `data-state` 的变化。
- [Console](https://developer.chrome.com/docs/devtools/console)看报错，[Sources](https://developer.chrome.com/docs/devtools/sources)下断点，[Network](https://developer.chrome.com/docs/devtools/network)看请求与状态码。

## 包管理器

- [apt](https://wiki.debian.org/Apt)是 Debian/Ubuntu 的系统包管理器，[winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/)是 Windows 的系统包管理器。
- [pip](https://pip.pypa.io/en/stable/)管 Python 包，[npm install](https://docs.npmjs.com/cli/v11/commands/npm-install)管 Node 包。系统包和语言包分开，是因为隔离粒度不同。

## npm 与 npx

- [npm install](https://docs.npmjs.com/cli/v11/commands/npm-install)把依赖装进项目的 `node_modules`，[npx](https://docs.npmjs.com/cli/v11/commands/npx)临时下载并运行一条命令。
- [package.json](https://docs.npmjs.com/cli/v11/configuring-npm/package-json)声明依赖和脚本，和 `requirements.txt` 是同一类东西。
- [Agent Skills 生态](https://skills.sh/) · [skills CLI](https://github.com/vercel-labs/skills)。`npx skills add` 把 skill 装进当前项目。

## 开源项目如何处理 Issue 与 PR

- [开源的定义](https://opensource.org/osd)
- [什么是 GitHub](https://docs.github.com/en/get-started/start-your-journey/what-is-github)
- [GitHub Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues)
- [Pull requests](https://docs.github.com/en/pull-requests/reference/pull-requests)

现有项目的贡献流程：

- [VS Code 贡献入口](https://github.com/microsoft/vscode/blob/main/CONTRIBUTING.md) · [贡献指南](https://github.com/microsoft/vscode/wiki/How-to-Contribute)。报 bug 前查重，给出运行环境、复现步骤和预期与实际结果。
- [CPython 的 PR 生命周期](https://devguide.python.org/getting-started/pull-request-lifecycle/)。确认问题、开分支、验证改动和提交 PR。
- [Vite 贡献指南](https://github.com/vitejs/vite/blob/main/CONTRIBUTING.md)。处理 bug 时准备最小复现，讨论功能时先写清楚动机和使用场景。
- [GitHub 如何关联 PR 和 Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue)。查看何时可用 `Fixes #编号` 在合入后关闭 Issue。
- Vue 的最小复现、修复和回归测试。[Issue #15495](https://github.com/vuejs/core/issues/15495) · [PR #15498](https://github.com/vuejs/core/pull/15498)
- Flask 的边界用例与修复。[Issue #6093](https://github.com/pallets/flask/issues/6093) · [PR #6096](https://github.com/pallets/flask/pull/6096)

## 环境问题案例

- [Werkzeug Issue #2789](https://github.com/pallets/werkzeug/issues/2789)。Flask 2.2.2 搭配 Werkzeug 3.0.0 时，导入 Flask 就会失败。报告里的三个版本和最小复现帮助维护者定位了兼容性问题。
- [Vite 讨论 #20286](https://github.com/vitejs/vite/discussions/20286) · [Vite 7 的运行时要求](https://vite.dev/blog/announcing-vite7#node-js-support)。新建项目在 Node.js 20.9.0 上报错，Vite 7 官方要求 Node.js 20.19+ 或 22.12+。

## 课后延伸

- [MIT Missing Semester：开发环境与工具](https://missing.csail.mit.edu/2026/development-environment/)
- [Microsoft Learn：VS Code 入门短视频](https://learn.microsoft.com/en-us/shows/visual-studio-code/learn-visual-studio-code-in-7min-official-beginner-tutorial)
- 本课用的官方 Windows 快捷键一页表已放在仓库里：[materials/vscode-shortcuts-windows.pdf](materials/vscode-shortcuts-windows.pdf)。

## 和 AI 协作与学习资源

- 官方优先：[Anthropic Engineering](https://www.anthropic.com/engineering) · [OpenAI Cookbook](https://cookbook.openai.com/) · [VS Code 文档](https://code.visualstudio.com/docs)
- 画图：[archify](https://github.com/tt-a1i/archify)把仓库或描述变成可交互架构图，[PlantUML](https://plantuml.com/)写时序图和类图。
- 值得反复读的仓库：[awesome](https://github.com/sindresorhus/awesome) · [project-based-learning](https://github.com/practical-tutorials/project-based-learning) · [build-your-own-x](https://github.com/codecrafters-io/build-your-own-x) · [java-design-patterns](https://github.com/iluwatar/java-design-patterns) · [minimind](https://github.com/jingyaogong/minimind) · [hello-agents](https://github.com/datawhalechina/hello-agents) · [ai-agent-book](https://github.com/bojieli/ai-agent-book) · [deer-flow](https://github.com/bytedance/deer-flow)
- 真实项目：[mall](https://github.com/macrozheng/mall)（Spring Boot 电商） · [spring-petclinic](https://github.com/spring-projects/spring-petclinic)（官方最小示例） · [realworld](https://github.com/realworld-apps/realworld)（一套 API 多种框架实现） · [vuejs/core](https://github.com/vuejs/core) · [system-design-primer](https://github.com/donnemartin/system-design-primer)
- Karpathy 的从零实现：[micrograd](https://github.com/karpathy/micrograd) · [nanoGPT](https://github.com/karpathy/nanoGPT) · [nanochat](https://github.com/karpathy/nanochat) · [llm.c](https://github.com/karpathy/llm.c) · [Zero to Hero](https://github.com/karpathy/nn-zero-to-hero)
- 每周扫一眼 [GitHub Trending](https://github.com/trending)，知道大家在做什么；想学什么就让 AI 推荐仓库，clone 下来跟着做。
- 书：[Clean Code](https://openlibrary.org/isbn/9780132350884) · [人月神话](https://openlibrary.org/isbn/9780201835953) · [程序员修炼之道](https://openlibrary.org/isbn/9780135957059) · [重构](https://openlibrary.org/isbn/9780134757599)
