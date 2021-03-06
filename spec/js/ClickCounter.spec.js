// iteration1

describe('Clicking Calamity Tests:', () => {
    let underTest;
    
    beforeEach(() => {
        underTest = new ClickCount();
        
    })
    describe('countClick() records each click and ClickCounter can display the clickCount', () => {

        it('countClick() 1 time should result in a clickCount of 1.', () => {
            underTest.countClick(0);
            expect(underTest.clickCount).toBe(1);
        });
         it('countClick() 2 times will result in a clickCount of 2', () => {
            underTest.countClick();
            underTest.countClick();
            expect(underTest.clickCount).toBe(2);
        });    
    });
    describe('Click Companion', () => {
        it('ClickCompanion should have 0 when new. ', () => {
            expect(underTest.displayCompanionCount()).toBe(0);
        });
        it('ClickCompanion can be purchased for 100 clicks', () => {
           for(let i = 0;i < 100; i++){
               underTest.countClick();
            }
            underTest.buyClickCompanion();
            expect(underTest.displayCompanionCount()).toBe(1);
           
        });
        it('Buying ClickCompanion decreases clickCount by 100', () =>{
            for(let i = 0;i < 100; i++){
                underTest.countClick();
             }
             underTest.buyClickCompanion();
             expect(underTest.clickCount).toBe(0);
        });
        it('ClickCompanion cost should increase 10% each time', () =>{
            for(let i = 0;i < 101; i++){
                underTest.countClick(); 
            }
            underTest.buyClickCompanion();
            expect(underTest.companionCost).toBe(110);

        });
        it('AutoClick should add click to clickCount every second', () =>{
            for(let i = 0; i<this.clickCount; i++){
                underTest.countClick();
                expect(underTest.setInterval).toBeEqualto(1000);
            }
            }, 1000);
            
        });
    describe('Collective Culmination Compounder records each click and countCompounder can display CompounderCount', () =>{

        it('countCompounder() 1 time should result in a CompounderCount of 1', () =>{
            underTest.countCompounder(0);
            expect(underTest.compounderCount).toBe(1);
        });
        it('countCompounder() 2 times should result in a CompounderCount of 2', () =>{
            underTest.countCompounder();
            underTest.countCompounder();
            expect(underTest.compounderCount).toBe(2);
        });
    describe('Collective Culmination Compounder', () =>{
        it('Collective Culmination Compounder should have 0 when new', () =>{
            expect(underTest.displayCompounderCount()).toBe(0);
        });
        it('Collective Culmination Compounder can be purchased for 10 clicks', () =>{
            for(let i = 0;i < 10; i++){
                underTest.countClick();
            }
            underTest.buyCompounder();
            expect(underTest.displayCompounderCount()).toBe(1);
        
        });
        it('Buying Compounder decreases clickCount by 10', () =>{
            for(let i=0;i < 11; i++){
                underTest.countClick();
            }
            underTest.buyCompounder();
            expect(underTest.clickCount).toBe(1);
        });
        it('Buying first Compounder increases countClick() value to 1.2', () =>{
            for (let i=0; i<10; i++){
                underTest.countClick();
            }
            underTest.buyCompounder();
            expect(underTest.firstCompounder()).toBe(1.2); 
        });
    describe('getClickValue() should return the value of each click', () =>{
        it('clickValue should be 1 at start of game', () =>{
             expect(underTest.getClickValue()).toBe(1);
        });
        
    });
});
});
});
        

    
