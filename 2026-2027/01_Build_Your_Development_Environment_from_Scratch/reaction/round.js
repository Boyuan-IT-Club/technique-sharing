// 回合负责计时和状态，界面通过 onChange 接收变化。
function createReactionRound(onChange) {
  const minimumWaitMs = 1000;
  const randomWaitMs = 2000;
  let phase = "idle";
  let signalTimer;
  let readyAt;

  function startRound() {
    phase = "waiting";
    onChange(phase);

    const delay = minimumWaitMs + Math.random() * randomWaitMs;
    signalTimer = window.setTimeout(() => {
      signalTimer = undefined;
      readyAt = performance.now();
      phase = "ready";
      onChange(phase);
    }, delay);
  }

  function cancelPendingSignal() {
    window.clearTimeout(signalTimer);
    signalTimer = undefined;
  }

  function finishRound(message) {
    phase = "finished";
    onChange(phase, message);
  }

  function handleRoundClick() {
    if (phase === "waiting") {
      finishRound("抢跑了。等绿灯亮起再点。");
      return;
    }

    if (phase === "ready") {
      const elapsedMs = Math.round(performance.now() - readyAt);
      finishRound(`反应时间 ${elapsedMs} 毫秒`);
      return;
    }

    cancelPendingSignal();
    startRound();
  }

  return { handleRoundClick };
}
