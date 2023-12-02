function logTemplate(text) {
  return `<div style="display:flex;justify-content:center;margin-bottom:10px;margin-top:3px"><p class="bg-neutral-100 dark:bg-neutral-900 rounded-lg" style="width:99%">${text}</p></div>`;
}

function errorTemplate(text) {
  return `<div style="display:flex;justify-content:center;margin-bottom:10px;margin-top:3px"><p class="bg-red-400 dark:bg-red-500 rounded-lg" style="width:99%">${text}</p></div>`;
}