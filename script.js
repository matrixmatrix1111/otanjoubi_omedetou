/*
ローディングから画面遷移
================================================ */
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () => {
  // ローディング中（グレースクリーン）
  loadingAreaGrey.animate(
    {
      opacity: [1, 0],
    },
    {
      duration: 2000,
      delay: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  ).onfinish = () => {
    loadingAreaGrey.style.visibility = 'hidden'; // アニメーション終了後に非表示
  };

  // ローディング中（薄緑スクリーン）
  loadingAreaGreen.animate(
    {
      transform: ['translateY(100vh)', 'translateY(0)', 'translateY(-100vh)']
    },
    {
      duration: 2000,
      delay: 800,
      easing: 'ease',
      fill: 'forwards',
    }
  ).onfinish = () => {
    loadingAreaGreen.style.visibility = 'hidden'; // アニメーション終了後に非表示
  };

  // ローディング中テキスト
  loadingText.animate(
    [
      {
        opacity: 1,
        offset: 0.8  // 80%の位置で不透明度1
      },
      {
        opacity: 0,
        offset: 1  // 100%の位置で不透明度0
      },
    ], 
    {
      duration: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );
});

/*
画像ギャラリー
================================================ */
/* ----- ↓↓ 追加 ↓↓ ----- */
const mainImage = document.querySelector('.gallery-image img');
const thumbImages = document.querySelectorAll('.gallery-thumbnails img');

// for(let i = 0; i < thumbImages.length; i++) {
//   thumbImages[i].addEventListener('mouseover', (event) => {
//       mainImage.src = event.target.src;
//       mainImage.animate({opacity: [0, 1]}, 500);
//   });
// }
thumbImages.forEach((thumbImage)=>{
  thumbImage.addEventListener('mouseover', (event) => {
    mainImage.src = event.target.src;
    mainImage.animate({opacity: [0, 1]}, 500);
  });
});
/* ----- ↑↑ 追加 ↑↑ ----- */
