# 反应测试代码地图

做完一轮游戏后，可以用这张表追一次按钮点击。

| 从哪里开始 | 看什么 |
| --- | --- |
| [index.html](../index.html) | 搜索 `reaction-button` 找到页面按钮和脚本引入 |
| [game.js](../game.js) | 找到事件绑定，在 `handleRoundClick` 上跳到定义 |
| [round.js](../round.js) | 读等待、绿灯和结束状态，找出何时安排与取消下一次状态变化 |

验收用 [ISSUE.md](../ISSUE.md) 的步骤。正常计时也要再玩一轮。
