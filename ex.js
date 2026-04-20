// script.js
const paper = document.getElementById('paper');
const foldBtn = document.getElementById('foldBtn');
const unfoldBtn = document.getElementById('unfoldBtn');
const animateToggle = document.getElementById('animateToggle');

function setFolded(state, animate = true) {
  paper.classList.toggle('folded', state);
  paper.classList.toggle('animate', animate);
}

foldBtn.addEventListener('click', () => setFolded(true, animateToggle.checked));
unfoldBtn.addEventListener('click', () => setFolded(false, animateToggle.checked));

// start folded for demo; remove if you want it flat initially
setFolded(true, true);