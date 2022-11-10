var imgList =Array.from(document.querySelectorAll('.item img'));
var lightBoxContainer=document.querySelector('.lightboxcontainer');
var lightBoxItem=document.querySelector('.lightboxitem');
var nextBtn=document.getElementById('next');
var prevBtn=document.getElementById("prev");
var closeBtn=document.getElementById('close');
var cuurentSlidIndex=0;
for (var i=0; i<imgList.length; i++){
   imgList[i].addEventListener('click', function(e){
   var imgSrc=e.target.getAttribute('src')
   cuurentSlidIndex=imgList.indexOf(e.target);
   console.log(cuurentSlidIndex);
   lightBoxItem.style.backgroundImage=`url(${imgSrc})`
   lightBoxContainer.classList.replace('d-none', 'd-flex');
    })
}
function nextSlid(){
    cuurentSlidIndex++;//2
    if (cuurentSlidIndex == imgList.length){
        cuurentSlidIndex=0;
    }
    console.log(cuurentSlidIndex);
    var imgSrc= imgList[cuurentSlidIndex].getAttribute('src');
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`
}
nextBtn.addEventListener('click', nextSlid);
function prevSlid(){
    cuurentSlidIndex--;
    if (cuurentSlidIndex< 0 ){
        cuurentSlidIndex = imgList.length-1;
    }
    var imgSrc=imgList[cuurentSlidIndex].getAttribute('src');
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`;
}
prevBtn.addEventListener('click' , prevSlid);
closeBtn.addEventListener('click', function(){
    lightBoxContainer.classList.replace('d-flex','d-none');
})