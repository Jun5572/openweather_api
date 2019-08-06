$(function(){

	let input = document.querySelector('[data-js="input"]');
	let submit_btn = document.querySelector('[data-js="submit_btn"]');

	submit_btn.addEventListener('click', function(e){
		let input_data = input.value;
		let result = document.querySelector('[data-js="result"]');

		$.ajax({
			url : `${BASE_URL}?q=${input_data}&units=metric&APPID=${API_KEY}`,
			type : 'get',
			dataType : 'json',
			cache : false,
		})
		.done(function(data){
			let icon_code = data.weather[0].icon;
			let html = '';

			html += `<div class="result_inner_wrapper">
						<h2>${data.name}の現在の天気</h2>
						<div class="result_container">
							<p>${data.main.temp}℃</p>
							<p>${data.weather[0].main}</p>
							<img class="weather_icon" src="${ICON_URL}${icon_code}.png" alt="weather icon">
						</div>
					</div>`;
			result.innerHTML = html;
			html = '';
		})
		.fail(function(data){
			console.log('ajax失敗');
			result.innerHTML = `<h2>Sorry...</h2>
								<p>英語で試してみて下さい</p>`;
		})
	}, false );

});


