# 服务器猜数字

浏览器提交一个整数，Flask 判定偏大、偏小或猜中。服务每次启动时随机选一个 1 到 100 的整数，同一次运行中一直使用这个谜底。要按固定输入验收修复，见 [Issue](ISSUE.md)。

在 Remote - SSH 窗口打开本目录，在远端 Linux 终端运行：

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

激活后提示符前出现 `(.venv)`，之后 `python` 和 `pip` 都是这个环境里的，`deactivate` 退出。也可以不激活，写全路径 `.venv/bin/python app.py`。装了 [uv](https://docs.astral.sh/uv/) 就用 `uv venv`、`uv pip install -r requirements.txt`、`uv run app.py`。

服务启动时从 1 到 100 随机选一个谜底，同一次运行里不变。要固定谜底复测，启动时加 `GUESS_TARGET=42`，例如 `GUESS_TARGET=42 python app.py`。

在 VS Code 的 Ports 面板转发远端端口 `5000`，在本机浏览器打开面板显示的地址。改动 Python 后停止并重新启动服务，再用同一地址验证。

| 文件 | 作用 |
| --- | --- |
| index.html | 显示表单和判定结果 |
| app.py | 处理首页和提交请求，调用判定函数 |
| guess_rules.py | 根据玩家输入和谜底生成提示 |
| requirements.txt | 声明 Python 依赖 |

想沿表单追到判定函数，打开[代码地图](docs/code-map.md)。
