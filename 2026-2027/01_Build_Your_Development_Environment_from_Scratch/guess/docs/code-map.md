# 猜数字代码地图

打开游戏并提交一次后，可以沿下面的路线追到服务器的判定逻辑。

| 从哪里开始 | 看什么 |
| --- | --- |
| [index.html](../index.html) | 搜索 `submit_guess`，看看表单提交到了哪里 |
| [app.py](../app.py) | 找到 `POST /guess` 入口，检查输入校验与 `judge_guess` 调用 |
| [guess_rules.py](../guess_rules.py) | 看比较结果怎样变成偏大、偏小或猜中 |

选中远端项目的 `.venv` 解释器后，可以从 `judge_guess` 的调用跳到定义。按 [ISSUE.md](../ISSUE.md) 复测三组数字。
