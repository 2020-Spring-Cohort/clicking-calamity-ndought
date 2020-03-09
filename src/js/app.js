let appCookieClicker = new ClickCount;


const clickCountButton = document.querySelector('.main-click-button');
const companionButton = document.querySelector('.buy-companion-button');
const compounderButton = document.querySelector('.buy-compounder-button');


const getCurrentClickCount = (appCookieClicker) =>{
    document.querySelector('.displayClickCount').innerText = appCookieClicker.displayClickCount().toFixed(2);
}
const makeButtonIntoClickCounter = (appCookieClicker) => {
    clickCountButton.addEventListener('click', () => {
        appCookieClicker.countClick();
        document.querySelector('.displayClickCount').innerText = appCookieClicker.displayClickCount().toFixed(2);
    });
}
const makeButtonAddToCompanion = (appCookieClicker) => {
    companionButton.addEventListener('click', () =>{
        appCookieClicker.buyClickCompanion();
        document.querySelector('.displayCompanionCount').innerText = appCookieClicker.displayCompanionCount();
        document.querySelector('.displayCompanionCost').innerText = appCookieClicker.displayCompanionCost();
    });
} 
const makeButtonAddToCompounder = (appCookieClicker) =>{
    compounderButton.addEventListener('click', ()=> {
        appCookieClicker.buyCompounder();
        document.querySelector('.displayCompounderCount').innerText = appCookieClicker.displayCompounderCount();
        document.querySelector('.displayCompounderCost').innerText = appCookieClicker.displayCompounderCost();
    });
}
const updateDisplay = (appCookieClicker)=>{
    getCurrentClickCount(appCookieClicker);
}
document.querySelector('.displayClickCount').innerText = appCookieClicker.displayClickCount();
document.querySelector('.displayCompanionCount').innerText = appCookieClicker.displayCompanionCount();
document.querySelector('.displayCompanionCost').innerText = appCookieClicker.displayCompanionCost();
document.querySelector('.displayCompounderCount').innerText = appCookieClicker.displayCompounderCount();
document.querySelector('.displayCompounderCost').innerText = appCookieClicker.displayCompounderCost();





setInterval(() => {
    cookieUpdateFunction()
}, 1000);


makeButtonIntoClickCounter(appCookieClicker);
makeButtonAddToCompanion(appCookieClicker);
makeButtonAddToCompounder(appCookieClicker);


// document.querySelector('.display__clickCount').innerText = "test"