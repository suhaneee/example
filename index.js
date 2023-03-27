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

  function setBannerLink() {
    const bannerlinks = document.querySelectorAll(".banner-link");
    bannerlinks.forEach((bannerlink, i) => {
      const aLink = data[i].link;
      bannerlink.setAttribute("href", aLink);
      console.log(bannerlink);
    });
  }
  setBannerLink();
  
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

//header footer 분리해서 index.html에 붙히기
window.addEventListener("load", function () {
  fetch("header.html")
    .then(response => response.text())
    .then(data => document.querySelector("#header").innerHTML = data);

  fetch("footer.html")
    .then(response => response.text())
    .then(data => document.querySelector("#footer").innerHTML = data);
}); // //패치로 


