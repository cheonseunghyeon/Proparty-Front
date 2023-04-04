const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg"
]
// 이미지를 html에 넣기

/*
const todaysImg = images[Math.floor(Math.random() * images.length)];
// document에 createElemet를 넣는다
// 현재 bgImage는 <img>
//const bgImage = document.createElement("img");
const bgImage = document.createElement("img");
bgImage.src = `img/${todaysImg}`
// <img src="img/3.jpg"> 우리가 알고있는 img 넣는 형식으로 나온다.

// document.body에 html 넣기
// appendChild()
document.body.appendChild(bgImage)
*/

// 이미지를 body의 배경으로 만들기


const chosenImages = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImages}`;

document.body.appendChild(bgImage);
bgImage.id = 'bgImage';
