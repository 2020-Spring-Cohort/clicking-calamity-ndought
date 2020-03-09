let appCookieClicker = new ClickCount;
let appCompounder = new CollectiveCulminationCompounder;

const clickCountButton = document.querySelector('.main-click-button');


const getCurrentClickCount = () =>{
    document.querySelector('.displayClickCount').innerText = appCookieClicker.displayClickCount().toFixed(2);
}
const makeButtonIntoClickCounter = (appCookieClicker) => {
    clickCountButton.addEventListener('click', () => {
        appCookieClicker.countClick();
        document.querySelector('.displayClickCount').innerText = appCookieClicker.displayClickCount().toFixed(2);
    });
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