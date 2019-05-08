// alert('Hello World');

function pimping(){
  var text = document.getElementById('text');
  text.style.fontSize = '24pt';
}

function changeStyle(val) {
  var text = document.getElementById('text');
  if(val.checked){
    text.style.fontWeight = 'bold';
    text.style.textDecoration = 'underline blink';
    text.style.color = 'green';
    text.style.fontStyle = 'italic';
    text.style.fontFamily = 'Comic Sans MS, Comic Sans, cursive';
  }else {
    text.style.fontWeight = 'normal';
    text.style.textDecoration = '';
    text.style.color = '';
    text.style.fontStyle = '';
    text.style.fontFamily = 'monospace';
  }
}

function snoopify(){
  var text = document.getElementById('text');
  var value = text.value.trim();
  var parts = value.split('.');
  parts = parts.map(element => {
    return element == '' ? '' : element + '-izzle.';
  });
  text.value = parts.join('').trim();
}
