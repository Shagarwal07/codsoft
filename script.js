let string = "";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string =eval(string.replace('%', '/100')); 
;
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'C') {
      string = "";
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'DEL') {
      string = string.slice(0, -1);
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == '%'){
      string = string + '%'
      document.querySelector('input').value = string;
    } 
    else {
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});