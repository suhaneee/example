// loadFile 안에 JSON 배열 등록
const loadFile = async () => {
  const response = await fetch("./curation.json", {
    method: "GET",
  });

  const data = await response.json();
  console.log(data);

  const images = data.forEach((item, i) => {
    item.image;
    console.log(i + item.image);
  });

  

  function setBannerImage() {
    const bannerImgs = document.querySelectorAll(".banner-img");
    bannerImgs.forEach((bannerImg, i) => {
      const imageSrc = data[i].image;
      bannerImg.setAttribute("src", imageSrc);
      console.log(bannerImg);
    });
  }
  setBannerImage();
  
//banner-text의 텍스트 변환
  function setBannerText() {
    const bannertexts = document.querySelectorAll(".banner-text");
    bannertexts.forEach((bannertext, i) => {
      const Texts = data[i].text_ko;
      bannertext.innerHTML=Texts;
      console.log(bannertext);
    });
  }
  setBannerText();
};

loadFile();

// header footer 분리해서 index.html에 붙히기
window.addEventListener("load", function () {
  var allElements = document.getElementsByTagName("*");
  Array.prototype.forEach.call(allElements, function (el) {
    var includePath = el.dataset.includePath;
    if (includePath) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          el.outerHTML = this.responseText;
        }
      };
      xhttp.open("GET", includePath, true);
      xhttp.send();
    }
  });
});


