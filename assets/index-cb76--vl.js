var m=Object.defineProperty;var v=(i,e,r)=>e in i?m(i,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[e]=r;var s=(i,e,r)=>v(i,typeof e!="symbol"?e+"":e,r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(t){if(t.ep)return;t.ep=!0;const l=r(t);fetch(t.href,l)}})();class n{constructor(e,r,o){s(this,"sliderElement");s(this,"width");s(this,"slides");s(this,"sliderWrapper");s(this,"navButtons");s(this,"activeSlide");s(this,"activeButton");s(this,"arrows");s(this,"timeoutID");s(this,"onButtonClick",e=>{this.activeButton.classList.remove("slider-nav__item--current"),this.activeButton=e.target,this.activeButton.classList.add("slider-nav__item--current"),this.activeSlide=Array.from(this.navButtons).indexOf(this.activeButton),this.sliderWrapper.style.left=`${this.activeSlide*-this.width}px`,this.resetTimer()});s(this,"onArrowClick",e=>{e.target.classList.contains("arrow--previous")?(this.resetTimer(),this.setActiveSlide("prev")):(this.resetTimer(),this.setActiveSlide("next"))});s(this,"setActiveSlide",(e="next")=>{this.activeSlide<this.slides.length-1&&e==="next"?this.activeSlide++:this.activeSlide>0&&e!=="next"?this.activeSlide--:this.activeSlide<0&&e!=="next"?this.activeSlide=this.slides.length-1:this.activeSlide=0,this.activeButton.classList.remove("slider-nav__item--current"),this.activeButton=this.navButtons[this.activeSlide],this.activeButton.classList.add("slider-nav__item--current"),this.sliderWrapper.style.left=`${this.activeSlide*-this.width}px`});this.sliderElement=e,this.width=Number.parseInt(window.getComputedStyle(this.sliderElement).getPropertyValue("width").replace("px","")),this.slides=this.sliderElement.querySelectorAll(".slide"),this.sliderWrapper=this.sliderElement.querySelector(".slider__wrapper"),this.navButtons=this.sliderElement.querySelectorAll(".slider-nav__item"),this.sliderWrapper.style.width=`${this.slides.length*this.width}px`,this.activeSlide=0,this.activeButton=this.navButtons[0],this.arrows=this.sliderElement.querySelectorAll(".arrow"),this.navButtons.forEach(t=>{r?t.addEventListener("click",this.onButtonClick):t.style.display="none"}),this.arrows.forEach(t=>{o?t.addEventListener("click",this.onArrowClick):t.style.display="none"})}startTimer(){this.timeoutID=window.setInterval(this.setActiveSlide,2500)}resetTimer(){window.clearInterval(this.timeoutID),this.startTimer()}deleteSlider(){window.clearInterval(this.timeoutID),this.navButtons.forEach(e=>{e.removeEventListener("click",this.onButtonClick)})}}const f=(i,e,r)=>{fetch("https://api.emailjs.com/api/v1.0/email/send-form",{method:"POST",body:r}).then(o=>{o.ok?i(o):e("Не удалось отправить данные")}).catch(()=>{e("Не удалось отправить данные")})};let h=document.querySelector(".about__information--active .about__slider .slider"),c=new n(h,!1,!0);const p=document.querySelector(".case__robotics-slider .slider"),_=new n(p,!1,!0),S=document.querySelector(".case__festival-slider .slider"),y=new n(S,!1,!0),w=document.querySelector(".gallery__slider .slider"),g=new n(w,!0,!1),d=document.querySelector(".about__cards");let a=d==null?void 0:d.querySelector(".card--active");const b=i=>{a!=i.target&&(a.classList.remove("card--active"),a=i.target,a.classList.add("card--active"),document.querySelector(".about__information--active").classList.remove("about__information--active"),document.querySelector(`.about__information#${a.id}`).classList.add("about__information--active"),c.deleteSlider(),h=document.querySelector(".about__information--active .about__slider .slider"),c=new n(h,!1,!0),c.startTimer())};c.startTimer();_.startTimer();y.startTimer();g.startTimer();d.addEventListener("click",b);const L=document.querySelector(".contact-form");L.addEventListener("submit",i=>{const e=new FormData(i.target);e.append("service_id","service_xnfm3ht"),e.append("template_id","template_lmglny9"),e.append("user_id","eHsc2yN1CUf2jn_UW"),console.log(e),i.preventDefault(),f(console.log,console.log,e)});
