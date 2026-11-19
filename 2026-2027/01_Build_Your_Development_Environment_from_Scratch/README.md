# 博远技术分享 · 第一课

**开发环境配置与编辑器**

用两个带故障的小游戏练习接手项目。先读任务、复现现象，再用 VS Code 搜索、跨文件跳转、定位并修复。修完后用同一套步骤验证结果。

| 练习 | 场景 | 从这里开始 |
| --- | --- | --- |
| 红灯绿灯反应测试 | 在本机浏览器复现计时问题，沿按钮事件追到回合逻辑 | [项目说明](reaction/README.md) · [练习任务](reaction/ISSUE.md) |
| 服务器猜数字 | 在远程 VS Code 中排查判定逻辑，从本机浏览器验证回复 | [项目说明](guess/README.md) · [练习任务](guess/ISSUE.md) |

线上任务：[Issue #2 抢跑后按钮自己变绿](https://github.com/Zewang0217/boyuan-tech-sharing-lesson-01/issues/2) · [Issue #3 猜大和猜小的提示反了](https://github.com/Zewang0217/boyuan-tech-sharing-lesson-01/issues/3)。仓库里的 `ISSUE.md` 是同内容的离线副本，网络不通时用它们。

在 VS Code 中打开本目录可浏览所有文件。打开 [games.code-workspace](games.code-workspace) 可将两个项目作为独立目录并排展示。

## 课前准备

- 一台能用浏览器的电脑，Windows、macOS 或 Linux 均可。课上按 Windows 键位演示。
- 安装 [VS Code](https://code.visualstudio.com/)；已有 Zed、JetBrains 或 Cursor 也能跟，操作名不同。
- 注册 GitHub 账号，课上要打开仓库页和 Issue 页。
- 只有想在自己机器上跑猜数字的人需要 Python 3.10 或更新版本；服务端演示在讲者的远端主机完成，不需要自备服务器。
- 网络要能访问 GitHub 和扩展市场。连不上时用讲者提供的备用克隆。

## 课件

[第一课课件 PDF](materials/开发环境配置与编辑器.pdf)（57 页，排版与 PPT 一致） · [第一课 PPT](materials/开发环境配置与编辑器.pptx)（含演讲者备注；新增页的讲稿在逐页讲稿里） · [逐页讲稿](materials/逐页讲稿.md) · [Windows 快捷键一页表 PDF](materials/vscode-shortcuts-windows.pdf)

## VS Code 编辑练习

在 VS Code 打开本目录，找到 [test/exercise/editing-practice.js](test/exercise/editing-practice.js)。把内容复制到新建的 JavaScript 编辑器，再练习多光标、上下移行、复制整行、删除整行和格式化。底稿故意保留了错乱的缩进，演示结束后关闭副本即可。

## 运行反应测试

在 VS Code 打开 `reaction/`，再用浏览器打开 [`index.html`](reaction/index.html)。`game.js` 负责界面和点击事件，`round.js` 负责计时与回合。浏览器可直接运行，也可以用 Live Server 预览。

## 运行服务器猜数字

通过 VS Code Remote - SSH 打开演示主机上的 `guess/`。在该目录的 Linux 终端执行，Python 3.10 或更新版本：

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

激活后提示符前出现 `(.venv)`，`python` 和 `pip` 都指向这个环境，`deactivate` 退出。懒得激活就继续写全路径：`.venv/bin/python app.py`。装了 [uv](https://docs.astral.sh/uv/) 的话，三条更短：

```bash
uv venv
uv pip install -r requirements.txt
uv run app.py
```

Windows PowerShell 对应写法：

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python app.py
```

在 VS Code 的 Ports 面板转发远端 `5000`，用浏览器打开面板显示的本地地址。服务每次启动时随机选一个 1 到 100 的整数，运行期间保持同一个谜底；要固定谜底复测，启动时加 `GUESS_TARGET=42`，例如 `GUESS_TARGET=42 python app.py`。保存服务端代码后，按 `Ctrl+C` 停止旧进程，再启动。

`index.html` 提供表单，`app.py` 处理请求，`guess_rules.py` 负责判定。Flask 监听运行它的那台机器的 `127.0.0.1:5000`。在自己的电脑上练习时，用本机终端启动后可直接访问这个地址。

课程涉及的快捷键、扩展、Python 环境和远程开发文档见[参考资料](REFERENCES.md)。

## 许可证

本课的代码与文档采用 [MIT 许可证](LICENSE)。`materials/` 里的第三方截图、书封和图标版权归各自所有者，仅作教学引用。
