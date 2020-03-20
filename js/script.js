

function progress(value) {
	var parent = $('.progress').width();
	var child = parseInt(($("#progressBar").width() / parent * 100).toFixed());
		if (child == 100) {
			alert('Вы достигли MAX');
		} else {
			console.log(child);
			console.log(value);
			$('#progressBar').width((child + value) * parent / 100);
		}
}