// ui.js

export function showModal(message) {
  const modal = document.createElement('div');
  modal.innerHTML = `<div style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(16,38,59,.9);display:flex;align-items:center;justify-content:center;z-index:99;">
    <div style="padding:2rem;background:#fff;border-radius:8px;color:#212;">
      <p>${message}</p>
      <button id="closeModalBtn">Close</button>
    </div>
  </div>`;
  document.body.appendChild(modal);
  document.getElementById("closeModalBtn").onclick = () => modal.remove();
}

export function startTimer(seconds, cb) {
  let time = seconds;
  const timerDiv = document.createElement("div");
  timerDiv.id = "modal-timer";
  timerDiv.style = "position:fixed;bottom:1rem;right:1rem;padding:1rem;background:#881c30;color:#fff;border-radius:5px;z-index:99;";
  timerDiv.innerText = `Time left: ${time}s`;
  document.body.appendChild(timerDiv);

  const interval = setInterval(() => {
    time -= 1;
    timerDiv.innerText = `Time left: ${time}s`;
    if (time <= 0) {
      clearInterval(interval);
      timerDiv.remove();
      cb();
    }
  }, 1000);
}
