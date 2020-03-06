class ClickCount {
    constructor() {
        this.clickCount = 0;
        this.companionCount = 0;
        this.companionCost = 100;
        this.autoClick = this.companionCount + this.clickCount;
    }
    countClick() {
        this.clickCount++;
    }
    displayClickCount() {
        return this.clickCount;
    }
    displayCompanionCount(){
        return this.companionCount;
    }
    buyClickCompanion() {
        if (this.clickCount >= this.companionCost){
            this.clickCount -= this.companionCost;
            this.companionCount++;
            this.companionCost = this.companionCost + (this.companionCost*0.1)
        }
    }
    addAutoClick() {
    }

    

}
setInterval(() => {
    for(let i = 0; i<this.companionCount; i++){
        this.countClick()
    }
}, 1000);

    
    


