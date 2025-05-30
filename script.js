function toggleStart() {
  const menu = document.getElementById('startMenu');
  menu.classList.toggle('hidden');
}

function openApp(id) {
  document.getElementById(id).classList.remove('hidden');
  document.getElementById('startMenu').classList.add('hidden');
}

function closeApp(id) {
  document.getElementById(id).classList.add('hidden');
}

// drag and move windows
let dragTarget = null, offsetX = 0, offsetY = 0;

document.addEventListener('mousedown', (e) => {
  if (e.target.closest('.title-bar')) {
    dragTarget = e.target.closest('.window');
    offsetX = e.clientX - dragTarget.offsetLeft;
    offsetY = e.clientY - dragTarget.offsetTop;
  }
});

document.addEventListener('mousemove', (e) => {
  if (dragTarget) {
    dragTarget.style.left = (e.clientX - offsetX) + 'px';
    dragTarget.style.top = (e.clientY - offsetY) + 'px';
  }
});

document.addEventListener('mouseup', () => {
  dragTarget = null;
});
