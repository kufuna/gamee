const a = document.querySelector('#Btn');

function Start(){
		
	var point = 0;
	function play() {
	var Remove = function(e){
			var aa = document.createElement('img');
			aa.src = 'img/fire.png';
			aa.style.width = '100%';
			aa.style.position = 'absolute';
			e.target.append(aa);
			setTimeout(function() {
				e.target.style.transform = `translateY(-10000000000%) !important`;
				e.target.classList.remove("bubble");
				e.target.classList = ('close');
				point++;
				document.getElementById('point').innerText = point;
			}, 100);	
		}
		var per = 100;
		var ran = Math.floor((Math.random() * 720) + 1);
		var CreateBubble = document.createElement('span');
		var ab = CreateBubble.className = 'bubble';
		CreateBubble.style.top = '0px';
		CreateBubble.style.left = `${ran}px`;
		var sty = CreateBubble.style.display = 'inline-block';

		CreateBubble.addEventListener('click',Remove);

		var mo = setInterval(Move,10);
		var pers = 10;
		var sr = CreateBubble.style.transform = `translateY(0)`;
		function Move() {

			pers += 1;
			var st = CreateBubble.style.transform = `translateY(${pers}%)`;
			var ww = document.querySelector('.bubble');

			if (ww.style.transform == 'translateY(850%)') {
				confirm(`You scored ${ document.getElementById('point').textContent} points` , window.location.reload());
				clearInterval(mo);
				clearInterval(pl);
			}

		}
		var Body = document.querySelector('#body');
		Body.append(CreateBubble);
	}	
	var pl = setInterval(play , 400);

}

a.addEventListener('click',Start);
