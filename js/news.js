//  dom (html 태그 로딩 완료시 실행)
$(document).ready(function () {
  var cards = $('#card-slider .slider-item').toArray();

  startAnim(cards);
  
  function startAnim(array){
      if(array.length >= 4 ) {
          TweenMax.fromTo(array[0], 0.5, {x:0, y: 0, opacity:0.75}, {x:120, y: 0, opacity:0, zIndex: 0, delay:0.03, ease: Cubic.easeInOut, onComplete: sortArray(array)});
  
          TweenMax.fromTo(array[1], 0.5, {x:-79, y: 125, opacity:1, zIndex: 1}, {x:0, y: 0, opacity:0.75, zIndex: 0, boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', ease: Cubic.easeInOut});
  
          TweenMax.to(array[2], 0.5, {bezier:[{x:0, y:250}, {x:65, y:200}, {x:-79, y:125}], boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', zIndex: 1, opacity: 1, ease: Cubic.easeInOut});
  
          TweenMax.fromTo(array[3], 0.5, {x:0, y:400, opacity: 0, zIndex: 0}, {x:0, y:250, opacity: 0.75, zIndex: 0, ease: Cubic.easeInOut}, );
      } else {
          $('#card-slider').append('<p>Sorry, carousel should contain more than 3 slides</p>')
      }
  }
  
  function sortArray(array) {
      clearTimeout(delay);
      var delay = setTimeout(function(){
          var firstElem = array.shift();
          array.push(firstElem);
          return startAnim(array); 
      },3000)
  }
});

// 멀티미디어 리소스 로딩 완료 후 실행
window.addEventListener("load", function () {
  var swiper = new Swiper(".newSwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000, // 각 슬라이드 간의 재생 지연 시간 (밀리초 단위)
      disableOnInteraction: false // 사용자 상호 작용 후에도 자동 재생을 멈추지 않음
    }
  });
});