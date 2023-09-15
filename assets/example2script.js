var map = new kakao.maps.Map(document.getElementById('map'), { // 지도를 표시할 div
    center: new kakao.maps.LatLng(36.2683, 127.6358), // 지도의 중심좌표 
    level: 14 // 지도의 확대 레벨 
});

// 마커 클러스터러를 생성합니다 
var clusterer = new kakao.maps.MarkerClusterer({
    map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
    minLevel: 10 // 클러스터 할 최소 지도 레벨 
});

$.get("/download/web/data/chicken.json", function (data) {
    // 데이터에서 좌표 값을 가지고 마커를 표시합니다
    // 마커 클러스터러로 관리할 마커 객체는 생성할 때 지도 객체를 설정하지 않습니다
    var markers = $(data.positions).map(function (i, position) {
        return new kakao.maps.Marker({
            position: new kakao.maps.LatLng(position.lat, position.lng)
        });
    });

    // 클러스터러에 마커들을 추가합니다
    clusterer.addMarkers(markers);
});

var positions = [
    {
        content: '<div>서울 이랜드FC</div>', 
        latlng: new kakao.maps.LatLng(37.5305582, 126.8808949)
    },
    {
        content: '<div>코엑스 아쿠아리움</div>', 
        latlng: new kakao.maps.LatLng(37.5131846, 127.0586092)
    },
    {
        content: '<div>리움 미술관</div>', 
        latlng: new kakao.maps.LatLng(37.5383836, 126.999165)
    },
    {
        content: '<div>스페이스K서울미술관museum</div>', 
        latlng: new kakao.maps.LatLng(37.5610159, 126.8310224)
    },
    {
        content: '<div>식민지역사박물관</div>', 
        latlng: new kakao.maps.LatLng(37.54582725, 126.9669582)
    },
    {
        content: '<div>일민 미술관</div>', 
        latlng: new kakao.maps.LatLng(37.5699354, 126.9775098)
    },
    {
        content: '<div>짚풀생활사박물관</div>', 
        latlng: new kakao.maps.LatLng(37.584932, 126.999624)
    },
    {
        content: '<div>겸재정선미술관</div>', 
        latlng: new kakao.maps.LatLng(37.57224945, 126.8383975)
    },
    {
        content: '<div>북촌생활사박물관</div>', 
        latlng: new kakao.maps.LatLng(37.5803146, 126.984741)
    },
    {
        content: '<div>63스퀘어</div>', 
        latlng: new kakao.maps.LatLng(37.51984955, 126.9402516)
    },
    {
        content: '<div>남이섬</div>', 
        latlng: new kakao.maps.LatLng(37.79172845, 127.525144)
    },
    {
        content: '<div>서울 도심 등산관광센터</div>', 
        latlng: new kakao.maps.LatLng(37.662431, 127.009656)
    },
    {
        content: '<div>경복궁</div>', 
        latlng: new kakao.maps.LatLng(37.57975395, 126.9766809)
    },
    {
        content: '<div>더현대 서울</div>', 
        latlng: new kakao.maps.LatLng(37.5259638, 126.9284184)
    },
    {
        content: '<div>창덕궁</div>', 
        latlng: new kakao.maps.LatLng(37.58238725, 126.9917013)
    },
    {
        content: '<div>덕수궁</div>', 
        latlng: new kakao.maps.LatLng(37.56616675, 126.9751703)
    },
    {
        content: '<div>창경궁</div>', 
        latlng: new kakao.maps.LatLng(37.5802456, 126.9948331)
    },
    {
        content: '<div>종묘</div>', 
        latlng: new kakao.maps.LatLng(37.5051756, 126.9940152)
    },
   
];

positions.forEach(function (position) {
    var marker = new kakao.maps.Marker({
        map: map,
        position: position.latlng
    });

    var infowindow = new kakao.maps.InfoWindow({
        content: position.content
    });

    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
});

function makeOverListener(map, marker, infowindow) {
    return function () {
        infowindow.open(map, marker);
    };
}

function makeOutListener(infowindow) {
    return function () {
        infowindow.close();
    };
}
