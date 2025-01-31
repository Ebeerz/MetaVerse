import './style.css'
import { Slider } from './slider'

let aboutSliderElement = document.querySelector('.about__information--active .about__slider .slider') as HTMLElement;
let aboutSlider = new Slider(aboutSliderElement, false, true)

const roboticsCase = document.querySelector('.case__robotics-slider .slider') as HTMLElement;
const roboticsCaseSlider = new Slider(roboticsCase, false, true)

const festivalCase = document.querySelector('.case__festival-slider .slider') as HTMLElement;
const festivalCaseSlider = new Slider(festivalCase, false, true)

const cardsSection = document.querySelector('.about__cards') as HTMLElement;
let activeCard = cardsSection?.querySelector('.card--active') as HTMLElement;


const onCardClick = (evt: Event) => {
    if (activeCard != evt.target) {
        activeCard.classList.remove('card--active');
        activeCard = evt.target as HTMLElement;
        activeCard.classList.add('card--active')

        let aboutInfoActive = document.querySelector('.about__information--active') as HTMLElement
        aboutInfoActive.classList.remove('about__information--active');

        let newAboutInfoActive = document.querySelector(`.about__information#${activeCard.id}`) as HTMLElement
        newAboutInfoActive.classList.add('about__information--active');

        aboutSlider.deleteSlider();
        aboutSliderElement = document.querySelector('.about__information--active .about__slider .slider') as HTMLElement;
        aboutSlider = new Slider(aboutSliderElement, false, true)
        aboutSlider.startTimer()
    }
}

aboutSlider.startTimer()
roboticsCaseSlider.startTimer()
festivalCaseSlider.startTimer()

cardsSection.addEventListener('click', onCardClick)
// здесь должна вызываться ф-ия 
