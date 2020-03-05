class ClickCount {
    constructor() {
        this.clickCount = 0;
        this.companionCount = 0;
        this.companionCost = 100;
    }
    countClick() {
        this.clickCount++;
    }
    getCompanionCount(){
        return this.companionCount;
    }
    buyClickCompanion() {
        if (this.clickCount >= this.companionCost){
            this.clickCount -= this.companionCost;
            this.companionCount++;
            this.companionCost = this.companionCost + (this.companionCost*0.1)
        }


    }

}

    
    


