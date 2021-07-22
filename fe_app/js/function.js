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

    let weatherLatitude;
    let weatherLongitude;

    // 날씨 데이터 함수
    function getWeatherData(weatherLatitude, weatherLongitude){
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + weatherLatitude + '&lon=' + weatherLongitude + '&appid=38839cb93ff3097889b4eba2996ff3d5')
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
    }

    // 페이지 로드시 첫 날씨 데이터를 가져옴
    getWeatherData(33.450701, 126.570667);

    /*
    * 현재 사용자 위치 데이터
    * */
    let currentLatitude = 0; // 0으로 초기화
    let currentLongitude = 0; // 0으로 초기화

    function showPosition(position) {
        currentLatitude = position.coords.latitude;
        currentLongitude = position.coords.longitude;
    }

    navigator.geolocation.getCurrentPosition(showPosition);

    /*
    * 지도 데이터
    * */

    var mapContainer;
    var map;
    var marker;

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 좌표로 주소값 가져오기
    function getAddress(coords){
        geocoder.coord2Address(coords.getLng(), coords.getLat(), function(result, status){
            if (status === kakao.maps.services.Status.OK) {
                // console.log(result[0].road_address.region_2depth_name);
                console.log(result[0].road_address.road_name);
            }
        });
    }

    // 주소로 좌표를 검색합니다
    function search(inputValue){

        geocoder.addressSearch(inputValue, function(result, status) {

            // 정상적으로 검색이 완료됐으면
            if (status === kakao.maps.services.Status.OK) {
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                moveMap(coords);

                getWeatherData(result[0].y, result[0].x);

                console.log(result[0].y + '      ' + result[0].x);
            }
        });
    }

    // 첫 맵 생성
    function showMap(currentLatitude, currentLongitude){
        mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
            //33.450701, 126.570667
                center: new kakao.maps.LatLng(currentLatitude, currentLongitude), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        map = new kakao.maps.Map(mapContainer, mapOption);

        // 마커를 생성합니다
        marker = new kakao.maps.Marker({
            position: map.getCenter()
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        let addrCoords = new kakao.maps.LatLng(33.450701, 126.570667);
        getAddress(addrCoords);

    }

    // 맵과 마커 이동
    function moveMap(coords){
        // 마커 위치를 해당 좌표로 이동
        marker.setPosition(coords);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
    }


    // 페이지 로드시 첫 실행
    showMap(33.450701, 126.570667);

    // 마우스로 지도 클릭시 마커를 이동
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

        getWeatherData(latlng.getLat(), latlng.getLng());

    });

    // 현재위치 버튼 클릭시 맵과 마커 이동
    $('.current-button').on('click', function(){
        var currentCoords = new kakao.maps.LatLng(currentLatitude, currentLongitude);
        moveMap(currentCoords);
        getWeatherData(currentLatitude, currentLongitude);
    });

    // 검색 버튼 클릭시 입력된 주소값으로 위치 검색
    $('.search-button').on('click',function(){
        let inputValue = $('.search-text').val();
        search(inputValue); // 함수 호출
    });

});