// iteration1 and iteration 2

class ClickCount {
    constructor() {
        this.clickCount = 0;
        this.companionCount = 0;
        this.companionCost = 100;
        this.addAutoClick = ()=>{
            this.clickCount += this.companionCount;
            updateClickCount();
        }
        this.compounderCount = 0;
        this.compounderCost = 10;
    }
    countClick() {
        this.clickCount++;
    }
    displayClickCount() {
        return this.clickCount;
    }
    displayCompanionCount() {
        return this.companionCount;
    }
    displayCompanionCost() {
        return this.companionCost;
    }
    buyClickCompanion() {
        if (this.clickCount >= this.companionCost) {
            this.clickCount -= this.companionCost;
            this.companionCount++;
            this.companionCost = this.companionCost + (this.companionCost*0.1)
            this.companionCost = Math.round(this.companionCost);
        }
    }
    countCompounder() {
        this.compounderCount++;
    }
    displayCompounderCount() {
        return this.compounderCount;
    }
    buyCompounder() {
        if (this.clickCount >= this.compounderCost){
            this.clickCount -= this.compounderCost;
            this.compounderCount++;
            this.compounderCost = this.compounderCost + (this.compounderCost*0.1);
            this.compounderCost = Math.round(this.compounderCost);
            updateClickCount();
        }
    }
    getMultiplier() {
        return 1.2**this.displayCompounderCount();

    }
}
    
setInterval(() => {
    for(let i = 0; i<this.companionCount; i++){
        this.countClick()
    }
}, 1000);



       




   