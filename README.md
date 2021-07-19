# 프론트 엔드 개발

## 클라이언트-서버 시스템(모델)

> 클라이언트-서버 시스템은 복잡한 네트워크 연결중 양 끝단에 연결된 사용자와 공급자의 관계를 의미함
> 
> 클라이언트 : 사용자가 사용하는 디바이스 또는 디바이스에서 실행되는 어플리케이션
> 
> Ex) 웹브라우저
> 
> 서버 : 데이터, 네트워크 서비스가 공급되는 디바이스 또는 디바이스에서 실행되는 서버소프트웨어
> 
> Ex) 아파치 서버

## HTML 기본 개념

> HTML - Hyper Text Markup Language
> 
> 웹페이지에 구성 요소를 표시하는 언어
> 
> 구성 요소 : 콘텐츠, 구조

## HTML 기본구조

`(backtick)

```
<!DOCTYPE html>
<html>
  <head></head>
  <body></body>
</html>
```

- DOCTYPE : html문서 타입
- html : html 영역 표시
- head : 해당 웹페이지의 부연설명, 부가정보가 포함
- body : 웹페이지의 콘텐츠를 표시하는 영역

## HTML 요소 기본 개념

### 요소 문법

```
<starttag>contents</endtag>
```

### 포함관계

> 요소의 영역안에 다른 요소를 포함하는 관계
> 
> 직계 포함하는 요소 : 부모(parent)요소
> 
> 직계 포함되는 요소 : 자식(child)요소
> 
> 직계가 아닌 포함하는 요소 : 조상(ancestor)요소
> 
> 직계가 아닌 포함되는 요소 : 자손(descendant)요소

### Empty element(빈 요소)

> 시작태그만 있고 종료 태그가 없는 요소


### HTML 속성(Attribute)

> html element에 대해 추가정보(이동경로, 파일명...)를 제공
> 시작태그에 입력
> 형식 : 속성이름 = "속성값"

### HTML로 표현할수 있는 콘텐츠(웹페이지에서 표현할수 있는 콘텐츠)

> 텍스트 콘텐츠
> 
> 멀티미디어 콘텐츠
>  - 이미지
>  - 비디오
>  - 오디오

### 제목 요소(Heading Element)
> h1 ~ h6(h : heading)

### 단락 요소(Paragraph Element)
> p : Paragraph

> hr : horizontal rules
> - 단락을 구분하는 수평선을 표시
> 빈요소

> br : Line Break
> - 같은 단락안에서 강제 줄바꿈
> 빈요소

### 하이퍼링크 요소(Hyper Link Element)
> a : anchor

```
<a href="url">링크텍스트</a>
```

> href : hyper text reference - 이동하고자 하는 목적이 위치/경로를 표시하는 속성
> - url(Uniform Resource locator) : 이동하고자하는 목적지의 위치/경로 값

### 목록 요소(List Element)
> 순서있는/순서없는 목록
> 
> ol(Ordered List), ul(Unordered List), li(List Item)

> 설명목록
> 
> 주제와 설명이 한 세트로 구성되는 목록
> 
> dl(Description List), dt(Description Term), dd(Description Data)

### Table Element(https://www.tablesgenerator.com/html_tables)
> table, thead, tbody, tfoot, tr, th, td, caption

```
<table>
  <caption></caption>
  <thead>
    <tr>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td></td>
    </tr>
  </tfoot>
</table>
```

> table : table의 영역을 설정
> 
> thead, tbody, tfoot : table 데이터의 그룹을 표시
> 
> tr(table row) : 행
> 
> th(table head) : 제목 칸(셀)
> 
> td(table data) : 데이터 칸(셀)
> 
> caption : 테이블의 제목,설명

### Image element
> img(image)
> attribute : src(source), alt(alternative)

```
<img src="image.jpg" alt="image">
```

> img 태그를 사용할 때 src, alt 속성은 반드시 사용해야 함

### Video Element

> attrubute
> - controls : 비디오 컨트롤 버튼 표시
> - loop : 비디오 반복 재생
> - muted : 음소거
> - autoplay : 자동재생(항상 muted와 같이 사용)

### 절대경로/상대경로

> 절대경로 : 콘텐츠 파일을 불러오고자 하는 HTML 페이지가 어떤 위치에 있던 동일하게 찾아올수 있도록 자세하게 표시하는 경로
> 상대경로 : 콘텐츠 파일을 불러오고자 하는 HTML 페이지의 위치를 기준으로 콘텐츠 파일의 위치를 표시하는 경로

```
<img src="https://w3schools.com/images/picture.jpg">

<img src="images/picture.jpg">

<img src="../images/picture.jpg">

root 상대경로
<img src="/images/picture.jpg">
```

### Block/Inline Element
> 화면에 표시되는 형태를 기준으로 구분하는 방식

> Block Element
> 
> - 화면에 줄바꿈되어 표시되는 요소
> 
> - 항상 사용가능한 전체 너비를 차지함
> 
> Inline Element
> 
> - 화면에 줄바꿈되지 않고 나란히 표시되는 요소
> 
> - 인라인요소에 포함된 콘텐츠의 너비만큼만 차지함
> 
> div(division) / span
> - 단순 영역구분 요소(Container Element)

### 폼 요소

> input, button

```
<input type="text">

<input type="password">

<input type="button" value="이름">
<input type="submit" value="이름">
<input type="reset" value="이름">

<button type="button">이름</button>
<button type="submit">이름</button>
<button type="reset">이름</button>
```

### 인터넷 주소체계

> IP address : 192.168.0.1
> 
> Domain address : https://www.naver.com
> - 기본주소(IP) => 의미있는 영어단어로 변환 : 도메인 주소
> 
> www.naver.com/images/picture.jpg => URL

## CSS

> CSS(Cascading Style Sheet)
> 
> - cascading : 나중에 선언한것이 최종 반영되는 CSS 특징
> 
> - CSS는 여러 대상에 대해서 공통으로 스타일을 적용시킬수 있음

> CSS syntax
> 
> - selector(선택자)와 declaration block(선언블록)으로 구성됨
> 
> - 선언블록은 중괄호 안에 여러 선언을 포함
> 
> - 각 선언에는 property와 value로 구성됨

```
h1 {color:red;font-size:10px;}
```

### class, id

> HTML element에 대해서 이름을 지정해줄 때 사용하는 attibute
> 
> class
> 
> - 여러개의 HTML element에 같은 클래스 이름을 사용할 수 있음
> 
> - 한 개의 HTML element에 여러개의 클래스 이름을 사용할 수 있음
> 
> id
> 
> - id 이름은 HTML 문서내에서 고유해야함(한 개만 존재)\
> 
> - 한 개의 HTML element에 한 개의 id 이름만 사용할 수 있음 

```
<div class="box box1 box2"></div>
<div class="box box1 box2"></div>
<div class="box box1 box2"></div>

<div id="title1"></div>
<div id="title2"></div>
<div id="title3"></div>
```

### naming 표기방식
- naming을 할 때 한 단어로 naming을 하기에는 한계가 있기 때문에 여러 단어로 naming을 하게될 때, 단어와 단어 사이를 구분해야 하는데 일반 문서 작성처럼 띄어쓰기로 구분할 수 없기때문에 단어와 단어 사이를 기호나 규칙에 의해서 띄어쓰지 않고 구분할 수 있도혹 함 => 표기방식

> 표기방식 종류
> - snake case : gnb_list_item (underbar/underscore) => file/folder
> - kebab case : gnb-list-item (hyphen/dash) => id/class
> - camel case : gnbListItem => javascript 변수/함수 이름
> - Pascal case : GnbListItem => javascript에서의 class 이름 지정

### 컬러 모드/코드 정리

> 컬러모드
> - RGB : Red, Green, Blue - 가산혼합
> - CMYK : Cyan, Magenta, Yellow, Black(Key plate) - 감산혼합

> 색 표현 범위
> - 1bit : 최소단위
> - 8bit => 1byte : 정보표현 최소단위
> - RGB 색상 표현 : 각 1byte씩 총 3byte(24bit)로 표현(트루컬러)
> - RGB 색상 표현 값
>   - 16진수 : #0FAB78
>   - 10진수 : (255, 100, 121) ※숫자범위 : 0~255

### Text CSS

> color
> 
> - value : #000000, rgb(0,0,0)(black), #ffffff, rgb(255,255,255)(white)
> 
> text-align : left, center, right, justify
> 
> text-decoration : underline, line-through, overline, none
> 
> text-indent : 50px(들여쓰기), -50px(내어쓰기)
> 
> letter-spacing : 3px, -3px
> 
> line-height : 24px, 1.6(배수표현)
> 
> word-spacing
> 
> white-space : nowrap(줄바꿈 비활성화)

### Font CSS

> font-family : 'Times New Roman', Times, serif;
> - font fallback : 랜더링시 폰트를 찾지 못했을 때 다른 폰트를 사용하도록 하는 대비책
> - web safe : 웹 페이지가 표시될 때 표시하고자 했던 폰트가 제대로 보일수 있도록 선택
> - web font : 사용자 클라이언트에서 폰트를 찾는 것이 아니라 서버에서 폰트를 찾도록 하는 방식
> - google font : 웹 폰트를 사용할 수 있도록 해주는 구글 폰트 서비스
> - 눈누 : 한글 웹폰트 서비스
> 
> font-weight : normal(regular:400), bold(700)
> 
> font-size : 20px
> 
> font-style : italic

### Box Model

> HTML Element에는 기본적으로 영역이 존재하는데, 이 영역에 몇가지 CSS 요소를 적용할 수 있음.
> - Content 영역 : width/height
> - padding : 안쪽 여백
> - border : 테두리
> - margin : 바깥 여백

### width/height

> width : 가로길이/너비
> - 기본 속성 : Block 요소는 부모요소에 맞춰지고, inline 요소는 자식요소에 맞춰짐
> 
> height : 세로길이/높이
> - 기본 속성 : Block, Inline 모두 자식요소에 맞춰짐
> 
> 단위
> - px : 지정된 수치값으로 고정
> - % : 지정된 수치값이 부모요소를 기준으로 일정 비율 크기로 정해짐
> - Block 요소의 가로길이는 px, % 단위가 적용되고, 세로길이는 %적용이 되지 않음(적용할수 있는 방법은 있음)
> - Inline 요소의 경우 px, % 단위 모두 적용되지 않음

### padding

> padding-top
> 
> padding-right
> 
> padding-bottom
> 
> padding-left
> 
> padding 축약표현

```
padding:20px; : 모든 방향

padding:20px 30px; : top/bottom right/left

padding:20px 30px 40px : top right/left bottom

padding:10px 20px 30px 40px : top right bottom left
```

### margin

> padding과 사용방법이 같음

> margin 겹침
> - 위아래 연이어 배치된 박스의 위/아래 margin이 겹쳐서 큰 수치의 margin만 표현되는 것

### border

> border
> 
> width, style, color
> 
> top, right, bottom, left

```
border:1px solid #fff; Ex) #aa5500 => #a50

border-width:1px;
border-style:solid;
border-color:#fff;

border-top:1px solid #fff;
border-right:1px solid #fff;
border-bottom:1px solid #fff;
border-left:1px solid #fff;
```

### 박스 모델 크기 계산

> width/height, padding, border, margin 모두 별개의 요소

> Ex) 박스의 전체너비 : 300px, padding:20px 4방향, 테두리 1px 4방향, margin 30px 4방향
```
div{
  padding:20px;
  border:1px solid #fff;
  margin:30px;
  width:258px;
}
```

> box-sizing:border-box;(기본값 : content-box)

```
div{
  padding:20px;
  border:1px solid #fff;
  margin:30px;
  width:300px;
  box-sizing:border-box;
}
```

### Block, Inline에 박스모델 적용

> Block : 박스모델의 모든 요소가 적용 가능
> 
> Inline : 박스모델의 width/height, 상하 margin 이 제대로 적용되지 않음

### display 속성

> 박스(영역)의 block, inilne 속성을 변형

> display : inline => 박스 속성이 inline으로 변형
> 
> display : block => 박스 속성이 block으로 변형
> 
> dispaly : inline-block => 박스속성이 inline 요소 속성(가로길이가 자식요소에 맞춰짐), block 요소의 속성(박스 모델 적용 가능) 모두 가지고 있음

### 가로 배치 방법

- float
- flex
- grid

### float

> 박스를 부유시켜서 좌우배치를 할 수 있게 함
> float:left, float:right 부모 요소의 왼쪽/오른쪽을 기준으로 배치,순서 적용

> float으로 배치시 박스가 띄워지기 때문에 위아래 인접 관계 박스들의 레이아웃이 위로 올라감
> float 박스의 하단 박스에 clear:both 를 적용하면 위로 올라가지 않음
> float 박스는 계속 띄워져 있기 때문에 margin 적용 같은 문제가 발생할 수 있음

> float 박스를 부모요소로 감싸주고 float박스 하단에 높이 0 짜리 박스를 추가해서 clear:both를 적용
> float 박스와 위아래 인접관계에 있던 박스들은 float 박스의 부모요소와 인접관계가 되기 때문에 float과 상관없어짐
```
HTML
<div class="float-parent">
  <div class="float-box">Text</div>
  <div class="clearfix"></div>
</div>

CSS
.float-box{
  float:left;
}
.clearfix{
  clear:both;
}
```

### 가상 클래스(Pseudo Class)

> 선택자(요소)의 상태를 정의
> 
> 여러 요소중 특정 요소를 지정

```
상태 정의

a:link{
  color:red;
}
a:visited{
  color:blue;
}
a:hover{
  color:green;
}
a:active{
  color:yellow;
}

※ a 태그의 pseudo class는 위 순서와 동일하게 코딩


특정 요소 지정

p:first-child{
  color:red;
}
p:last-child{
  color:blue;
}
p:nth-child(3){
  color:green;
}
p:nth-child(4n){
  color:pink;
}
```

### 가상 요소(Pseudo Element)

> HTML에 직접 입력하는 것이 아닌 CSS에서 랜더링 시 생성되는 가상 요소

```
div::before{
  content:"Hello World";
}

div::after{
  content:"";
  display:block;
  width:100px;
  height:30px;
}
```

### 투명도

> transparent : 투명한
> - 투명색 적용
> 
> alpha : 추가색
> - rgba() 함수 사용 : color에만 투명도 적용
> 
> opacity : 불투명한
> - Element(요소)에 투명도 적용


```
div{
  background-color:transparent;
}

div{
  opacity:0.7;(0.0 ~ 1.0)
}

div{
  background-color:rgb(255,255,255); /* rgb() : rgb함수 */
}

div{
  background-color:rgba(255,255,255,0.6); /* a : alpha (0.0 ~ 1.0) */
}

```

### 배경이미지

> background-image
> - 배경이미지 표현
> - 배경이미지가 반복되어 영역을 모두 채움(기본속성)

> backgroud-repeat
> - repeat-x : x 방향으로만 반복
> - repeat-y : y 방향으로만 반복
> - no-repeat : 반복 없음

> background-position
> - left, center, right
> - top, center, bottom
```
div{
  background-position:100px 200px; /* 앞:가로방향, 뒤:세로방향 */
}
```

> background-attachment
> - 배경 고정
```
div{
  background-attachment:fixed;
}
```
※ 배경색, 배경이미지 모두 content영역과 padding 영역에 적용됨(border, margin에는 적용이 안됨)

### 이미지 표현 방법

> 콘텐트로 표현
> - img 태그로 표현
> 
> 디자인요소로 표현
> - background로 표현

> IR(Image Replacement) 기법
> - 화면에 표시는 이미지로 표시, 실제 콘텐트는 텍스트의 형태

> 가상요소를 사용해서 배경표현 기법
> - 가상요소에 디자인 이미지를 적용해서 화면에 표시

### flex

> 기존의 float, position 방식을 사용하지 않고 웹페이지의 레이아웃을 구성할 수 있게 함
```
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```
> flex의 박스 배치 관련 property들은 부모요소에 적용시켜줌


### css 상속
> css는 html element의 부모요소에 적용된 css 속성이 자식요소에도 적용
> 상속되는 css property를 활용하면 코드 길이를 줄일 수 있음

### 반응형 웹
> OSMU : One Source Multi Use
> => One Source : HTML source
> => Multi Use : CSS source

> 해상도
> - 모바일 실제 해상도와 CSS 해상도 구분

> @media
```
@media screen and (해상도 범위){
  해당 해상도의 스타일
}
```

> 해상도 범위, 변경점(break point)
> - 변경점의 기준 해상도
>   - 모바일 : 360px ~ 480px(640px)
>   - 태블릿 : 720px ~ 1024px
>   - PC : 1024px ~
```
닫힌 범위
@media screen and (min-width:360px) and (max-width:480px){}
@media screen and (min-width:720px) and (max-width:1024px){}
@media screen and (min-width:1024px){}

열린 범위
/* pc CSS */
div{font-size:15px;}

/* tablet CSS */
@media screen and (max-width:1024px){
  div{font-size:13px;}
}

/* smart phone CSS */
@media screen and (max-width:640px){
  div{font-size:11px;}
}
```

## Javascript

### Object(객체)

> JS Object는 Javascript가 동작, 기능할 때 필요한 대상

> Object는 property와 method를 포함
> - property는 Object의 속성
> - method는 Object의 동작, 기능
```
Syntax)
Object.property ~
Object.method() ~

Ex)
car.name = 'grandeur';
car.company = 'hyundai';

car.start();
car.drive();
```

### JS DOM

> javascript가 HTML Element에 access 하기 위해서 브라우저가 생성하는 Object

### jQuery DOM

> jQuery가 HTML Element에 access 하기 위해서 브라우저가 생성하는 Object

### jQuery

> Javascript를 좀더 간편하고 유연하게 사용할 수 있도록 만들어진 라이브러리

### Event

> 상황 변화에 따라 발생되는 신호

> Event 발생시 동작 구분
> - 이벤트에 따른 신호 발생
>   - 이벤트 종류
>     - Javascript : onclick, onmouseover, onmouseout => click, mouseover, mouseout
>     - jQuery : click, mouseenter, mouseleave
> - 발생된 신호를 감지해서 해당 기능 실행
>   - object.onclick = 함수이름
>   - object.addEventListener('이벤트', 실행함수); => event : click, mouseover, mouseout
>   - $(object).on('이벤트', 실행함수);

### 요소 탐색

> 기준이 되는 요소를 찾은 후 여러 단계를 통해 실제 요소를 탐색

> 조상요소 : parent() : 부모요소, parents() : 조상요소(부모요소 포함)
> 자손요소 : children() : 자식요소, find() : 자손요소(자식요소 포함)
> 형제요소 : siblings() : 형제요소 모두, next()/prev() : 인접한 형제요소

### this
> 현재(이벤트가 발생한 상황등에 대한 것) 요소/대상을 지칭
> Ex) p 태그에 이벤트 발생 => this : 이벤트가 발생한 대상 => 이벤트가 발생된 p 태그가 this

















