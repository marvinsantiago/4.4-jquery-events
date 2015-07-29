var buttonEl = $('button');
var output = $('.output-screen');

output.html('');

buttonEl.on('click', function() {
  if (this.innerHTML === 'tab') {
    ouput.append(' ');
  } else if (this.innerHTML === '') {
    output.append(' ');
  } else if (this.innerHTML === 'delete') {
    var newInput = output.html().slice(0, -1);
    output.html(newInput);
  } else if (this.innerHTML === 'caps lock' || this.innerHTML === 'shift') {
    return false;
  } else if (this.innerHTML === 'return') {
    output.append('\n');
  } else {
    output.append(this.innerHTML);
  }

});
