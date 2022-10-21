function goto_address(url) {
  window.open(url, '_blank');
}
function change_address(data) {
  document.getElementById('iframe').src = data;
}
