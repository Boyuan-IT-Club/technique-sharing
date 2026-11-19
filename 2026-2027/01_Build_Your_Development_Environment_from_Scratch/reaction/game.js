// 把浏览器点击交给回合逻辑，再将回合状态显示到页面。
const button = document.querySelector("#reaction-button");
const result = document.querySelector("#result");

function renderRound(phase, message) {
  button.dataset.state = phase;

  if (phase === "waiting") {
    button.textContent = "红灯 · 等一下";
    result.textContent = "等待绿灯…";
    return;
  }

  if (phase === "ready") {
    button.textContent = "绿灯 · 快点！";
    result.textContent = "绿灯亮了。";
    return;
  }

  button.textContent = "再玩一次";
  result.textContent = message;
}

const round = createReactionRound(renderRound);
button.addEventListener("click", round.handleRoundClick);
