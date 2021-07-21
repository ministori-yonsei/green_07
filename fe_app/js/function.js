$(function(){
    /*
    * 날씨 데이터
    * */
    let weatherWord = {
        'Thunderstorm' : '천둥번개',
        'Drizzle' : '이슬비',
        'Rain' : '비',
        'Snow' : '눈',
        'Fog' : '안개',
        'Clear' : '맑음',
        'Clouds' : '흐림'
    }

    fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.499400&lon=127.030660&appid=38839cb93ff3097889b4eba2996ff3d5')
        .then(function(response){
            return response.json();
        })
        .then(function(weatherData){
            console.log(weatherData);

            // console.log(weatherData.weather[0].main);
            // $('.weather-condition').text(weatherData.weather[0].main);

            console.log(weatherData.weather[0].description);
            $('.weather-description').text(weatherData.weather[0].description);

            console.log(weatherData.weather[0].icon);
            /*
            * Ex) 1 + 1 = 2 (덧셈 사칙연산)
            * Ex) 1 + 'a' = '1a' (연결연산)
            * */
            let condition = weatherData.weather[0].icon;
            $('.weather-image').attr('src', 'http://openweathermap.org/img/wn/' + condition + '@2x.png');

            console.log(weatherData.main.temp);
            /*
            * Math.floor() : 내림 / Math.ceil() : 올림 / Math.round() : 반올림
            * */
            $('.weather-temp-number').text(Math.floor(weatherData.main.temp) - 273);

            console.log(weatherData.weather[0].id);
            let weatherID = Math.floor(weatherData.weather[0].id / 100);

            if( Math.floor(weatherData.weather[0].id / 100) === 8 ) {
                if( (weatherData.weather[0].id % 100) === 0 ){
                    weatherID = 8;
                } else {
                    weatherID = 9;
                }
            }
            switch( weatherID ){
                case 2:{
                    $('.weather-condition').text(weatherWord.Thunderstorm);
                    break;
                }
                case 3:{
                    $('.weather-condition').text(weatherWord.Drizzle);
                    break;
                }
                case 5:{
                    $('.weather-condition').text(weatherWord.Rain);
                    break;
                }
                case 6:{
                    $('.weather-condition').text(weatherWord.Snow);
                    break;
                }
                case 7:{
                    $('.weather-condition').text(weatherWord.Fog);
                    break;
                }
                case 8:{
                    $('.weather-condition').text(weatherWord.Clear);
                    break;
                }
                case 9:{
                    $('.weather-condition').text(weatherWord.Clouds);
                    break;
                }
            }



        });

    /*
    * 지도 데이터
    * */
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: map.getCenter()
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 지도에 클릭 이벤트를 등록합니다
    // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
    kakao.maps.event.addListener(map, 'click', function(mouseEvent) {

        // 클릭한 위도, 경도 정보를 가져옵니다
        var latlng = mouseEvent.latLng;

        // 마커 위치를 클릭한 위치로 옮깁니다
        marker.setPosition(latlng);

        // 지도 중심을 클릭한 위치로 이동
        // map.setCenter(latlng);

        console.log(latlng.getLat());
        console.log(latlng.getLng());

    });
});