type NextSlide = 'next' | 'prev';
type Pagination = true | false;
type Arrows = true | false;
export class Slider {
    private sliderElement: HTMLElement;
    private width: number;
    private slides: NodeListOf<HTMLElement>;
    private sliderWrapper: HTMLElement;
    private navButtons: NodeListOf<HTMLElement>;
    private activeSlide: number;
    private activeButton: HTMLElement;
    private arrows: NodeListOf<HTMLElement>;
    private timeoutID?: number;

    constructor(sliderElement: HTMLElement, pagination: Pagination, arrows: Arrows) {
        this.sliderElement = sliderElement;
        this.width = Number.parseInt(window.getComputedStyle(this.sliderElement).getPropertyValue('width').replace('px', ''));
        this.slides = this.sliderElement.querySelectorAll('.slide') as NodeListOf<HTMLElement>;
        this.sliderWrapper = this.sliderElement.querySelector('.slider__wrapper') as HTMLElement;
        this.navButtons = this.sliderElement.querySelectorAll('.slider-nav__item') as NodeListOf<HTMLElement>;
        this.sliderWrapper.style.width = `${this.slides.length*(this.width)}px`;
        this.activeSlide = 0;
        this.activeButton = this.navButtons[0] as HTMLElement;
        this.arrows = this.sliderElement.querySelectorAll('.arrow') as NodeListOf<HTMLElement>
        this.navButtons.forEach((navButton) => {
            if (pagination) {
                navButton.addEventListener('click', this.onButtonClick);
            } else {
                navButton.style.display = "none";
            }
        }); 
        this.arrows.forEach((arrow) => {
            if (arrows) {
                arrow.addEventListener('click', this.onArrowClick);
            } else {
                arrow.style.display = "none";
            }
        }); 
    };

    private onButtonClick = (evt: Event) => {
        this.activeButton.classList.remove("slider-nav__item--current");
        this.activeButton = evt.target as HTMLElement;
        this.activeButton.classList.add("slider-nav__item--current");
        this.activeSlide = Array.from(this.navButtons).indexOf(this.activeButton);
        this.sliderWrapper.style.left = `${this.activeSlide*(-(this.width))}px`;
        this.resetTimer()
    }

    private onArrowClick = (evt: Event) => {
        const arrow = evt.target as HTMLElement;
        if (arrow.classList.contains('arrow--previous')) {
            this.resetTimer();
            this.setActiveSlide('prev');
        } else {
            this.resetTimer();
            this.setActiveSlide('next');
        }

    }

    private setActiveSlide = (nextSlide: NextSlide = 'next') => {
        if (this.activeSlide < this.slides.length - 1 && nextSlide === 'next') {
            this.activeSlide++;
        } else if (this.activeSlide > 0 && nextSlide !== 'next'){
            this.activeSlide--;
        } else if (this.activeSlide < 0 && nextSlide !== 'next') {
            this.activeSlide = this.slides.length - 1;
        } else {
            this.activeSlide = 0;
        }
        this.activeButton.classList.remove("slider-nav__item--current");
        this.activeButton = this.navButtons[this.activeSlide]
        this.activeButton.classList.add("slider-nav__item--current");
        this.sliderWrapper.style.left = `${this.activeSlide*(-(this.width))}px`;
    };

    public startTimer() {
        this.timeoutID = window.setInterval(this.setActiveSlide, 2500);
    }

    public resetTimer() {
        window.clearInterval(this.timeoutID);
        this.startTimer();
    }

    public deleteSlider() {
        window.clearInterval(this.timeoutID);
        this.navButtons.forEach((navButton) => {
            navButton.removeEventListener('click', this.onButtonClick);
        }); 
    }
}




// const slider = document.querySelector('.slider') as HTMLElement;
// const slides = slider.querySelectorAll('.slide');
// const sliderWrapper = slider.querySelector('.slider__wrapper') as HTMLElement;
// const navButtons = slider.querySelectorAll('.slider-nav__item');
// let timeoutID: number;
// sliderWrapper.style.width = `${navButtons.length*800}px`;

// let activeSlide = 0;
// let activeButton = navButtons[0]; 

// const onButtonClick = (evt: Event) => {
//     activeButton.classList.remove("slider-nav__item--current");
//     activeButton = evt.target as HTMLElement;
//     activeButton.classList.add("slider-nav__item--current");
//     activeSlide = Array.from(navButtons).indexOf(activeButton);
//     sliderWrapper.style.left = `${activeSlide*(-800)}px`;
//     resetTimer()
// }

// const setActiveSlide = () => {
//     if (activeSlide < slides.length - 1) {
//         activeSlide++;
//     } else {
//         activeSlide = 0;
//     }
//     activeButton.classList.remove("slider-nav__item--current");
//     activeButton = navButtons[activeSlide]
//     activeButton.classList.add("slider-nav__item--current");
//     sliderWrapper.style.left = `${activeSlide*(-800)}px`;
// };
 
// export function startTimer() {
//     timeoutID = window.setInterval(setActiveSlide, 2500);
// }


// function resetTimer() {
//     window.clearInterval(timeoutID);
//     startTimer();
// }

// navButtons.forEach((navButton) => {
//     navButton.addEventListener('click', onButtonClick);
// });

// startTimer();
