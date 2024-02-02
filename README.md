# 외국인 관광 패스 도움 웹 서비스(디스커버 서울패스)

## Preview

![image](https://github.com/jinuew/jinuew.github.io/assets/141210846/064f742a-a713-41a1-b657-487fa7ed8128)
URL: https://jinuew.github.io/


## 구현목적
디스커버 서울패스 기능을 보완하는 시스템을 제작하고자 함.
관광지 분포 미제공, 경로 미제공 등 외국인이 쉽게 알 수 없는 정보에 대해 제공하고자 함.
관광지 분포는 관광지 간의 인접성 정보를 제공하기에 관광패스를 활용하면서 선택 가능한 관광지 조합에 대한 정보를 제공할 수 있음.
카카오API, OverpassAPI, Python, HTML, QGIS 등을 혼합하여 제작

## 무엇을 어떻게?
![image](https://github.com/jinuew/jinuew.github.io/assets/141210846/3a3b698d-fd72-47af-9363-55436f6e048a)
[관광지 분포도 제공]
-> 관광지 정보 웹 수집, 지오코딩(카카오API)를 활용하여 위경도 데이터 추출, Kakao API의 웹 지도를 불러와 마커 생성, 인포윈도우, 마우스온 이벤트 등을 결합

![image](https://github.com/jinuew/jinuew.github.io/assets/141210846/80eda2aa-c887-4c9d-b44b-c54ac86ee962)
[LBS기반 인근 상권 파악 시스템]
카카오API에 등록된 카페, 마트, 은행, 주유소, 편의점, 약국 위치 및 정보를 추출
LBS 시스템을 활용하여 내위치를 파악하고 지도 스케일 변환을 통해 내 위치 주변의 상권 정보를 파악할 수 있도록 함

![image](https://github.com/jinuew/jinuew.github.io/assets/141210846/692124b9-571d-4838-9f06-b6531baa7c7e)
[라인스트링 데이터 시각화를 통한 경로 호출]
Departue point, Waypoinst1,2 선택을 통해 경유지 중 어떤 지역을 먼저 방문할지에 대한 경로를 생성.
카카오맵, 구글맵 등에서 경로 선택 순서에 따라 제공하지만, 경유지 순서를 바꾸어 최적의 경로를 제공하지 않음.
선택이 가능한 관광지 조합에 대해 모든 라인스트링을 학습 후, 최단 경로를 제공. (현재 마커 오류로 정확한 순서를 가시적으로 확인할 수는 없음)
