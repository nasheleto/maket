const lines = document.querySelectorAll('.line')
const line3 = document.querySelector('.line3')
const img = document.querySelectorAll('img')


for (s of lines){
	s.onclick  = function(e){
  var el = e ? e.target : window.event.srcElement;
  el.style.transform = 'rotate(90deg)';
}
}

