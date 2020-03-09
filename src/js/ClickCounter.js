// iteration1 and iteration 2

class ClickCount {
    constructor() {
        this.clickCount = 0;
        this.companionCount = 0;
        this.companionCost = 5;
        this.compounderCount = 0;
        this.compounderCost = 10;
        this.clickValue = 1;
        // this.addAutoClick = ()=>{
        //     this.clickCount += this.companionCount;
        //     this.displayClickCount();
        // }
        
    }
    countClick() {
        this.clickCount+=this.clickValue;
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
            this.addAutoClick;
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
    displayCompounderCost() {
        return this.compounderCost;
    }
    buyCompounder() {
        if (this.clickCount >= this.compounderCost) {
            this.clickCount -= this.compounderCost;
            this.compounderCount++;
            this.compounderCost = this.compounderCost + (this.compounderCost*0.1);
            this.compounderCost = Math.round(this.compounderCost);
            this.compoundClickValue();
            
        }
    }
    getClickValue() {
        return this.clickValue;
    }
    compoundClickValue() {
        this.clickValue = 1 * Math.pow(1.2, this.clickValue);

    }
    updateDisplay() {
        return this.addAutoClick;
    }
    
}




       




   