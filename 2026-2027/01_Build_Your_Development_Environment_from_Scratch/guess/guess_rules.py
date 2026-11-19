"""比较猜测与谜底，生成页面可直接显示的判定文案。"""

from __future__ import annotations


def compare_guess(guess: int, target: int) -> int:
    """返回玩家猜测与谜底的差值。"""
    return target - guess


def judge_guess(guess: int, target: int) -> str:
    """根据差值返回偏小、偏大或猜中的提示。"""
    difference = compare_guess(guess, target)
    if difference < 0:
        return "偏小，再猜大一点。"
    if difference > 0:
        return "偏大，再猜小一点。"
    return "猜中了！"
