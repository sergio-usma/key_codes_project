const container = document.getElementById('container');

function generateHTML(key, code, keyCode) {
  return `
  <div class="key-container">
    <h4>Key</h4>
    <div class="key-container_content">
      ${key === ' ' ? 'Space' : key}
    </div>
  </div>
  
    <div class="key-container">
    <h4>Key</h4>
    <div class="key-container_content">
      ${code}
    </div>
  </div>
  
    <div class="key-container">
    <h4>Key</h4>
    <div class="key-container_content">
      ${keyCode}
    </div>
  </div>
  `;
}

container.innerHTML = generateHTML('-', '-', '-');

window.addEventListener('keydown', (e) => {
  container.innerHTML = generateHTML(e.key, e.code, e.key.charCodeAt(0));
});
