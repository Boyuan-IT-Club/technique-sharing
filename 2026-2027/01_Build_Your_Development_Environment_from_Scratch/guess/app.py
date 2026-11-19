"""在一个 Flask 进程中提供页面和判定，目标数字留在服务端。"""

from __future__ import annotations

from os import getenv
from random import randint

from flask import Flask, render_template, request

from guess_rules import judge_guess

app = Flask(__name__, template_folder=".")
SERVER_LABEL = "猜数字服务 · 课堂演示"
# 固定值用于彩排，平时由服务启动时随机生成。
TARGET = int(getenv("GUESS_TARGET") or randint(1, 100))


@app.get("/")
def show_game() -> str:
    """打开初始游戏页面。"""
    return render_template("index.html", server_label=SERVER_LABEL)


@app.post("/guess")
def submit_guess() -> str | tuple[str, int]:
    """读取表单中的整数并返回附带判定结果的游戏页面。"""
    guess = request.form.get("guess", type=int)
    if guess is None or not 1 <= guess <= 100:
        return render_template(
            "index.html", server_label=SERVER_LABEL, result="请输入 1 到 100 的整数。"
        ), 400

    return render_template(
        "index.html",
        server_label=SERVER_LABEL,
        guess=guess,
        result=judge_guess(guess, TARGET),
    )


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=False, use_reloader=False)
