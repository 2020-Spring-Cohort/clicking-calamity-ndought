let appCookieClicker = new ClickCount;

const clickCountButton = document.querySelector('.main-click-button');
const clickCountElement = document.querySelector('.display__clickCount');


const getCurrentClickCount = (clickCountElement, _click) =>{
    clickCountElement.innerText = _click.displayClickCount();
}
const makeButtonIntoClickCounter = (clickCountButton, _clickCountElement, _click) =>{
    clickCountButton.addEventListener('click', ()=>{
        _click.displayClickCount();
        getCurrentClickCount(clickCountButton, _click);
        updateDisplay()
    });
}
const updateDisplay = ()=>{
    getCurrentClickCount(clickCountElement, appCookieClicker);
}
document.querySelector('.display__clickCount').innerText = ClickCount.displayClickCount();



setInterval(() => {
    noahsUpdateFunction()
}, 1000);




const click = new countClick();


makeButtonIntoClickCounter(clickCountButton, clickCountElement, _click);


// document.querySelector('.display__clickCount').innerText = "test"