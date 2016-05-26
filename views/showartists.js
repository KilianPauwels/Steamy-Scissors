$("#genre").click(function playSomeSound(genre){
	SC.get('/tracks',{
		genres: genre
	}, function(tracks){
			var random = Math.floor(Math.random()*49);
			SC.oEmbed(tracks[random].uri, {autoplay: true}, document.getElementById('target'));
		});
	});

	$(document).ready(function(){
		SC.initialize({
			client_id: '5c4bf4a850b4ac822bc9e6000203d52f'
	});

	var menuLink = [];


	var menuLinks = document.getElementById('genre');
		for(var i = 0; i < 5; i++){
			menuLink = menuLinks[i];
			menuLinks[i].onclick = function(e){
				e.preventDefault();
				playSomeSound(menuLink.innerHTML);
			};
		}
});