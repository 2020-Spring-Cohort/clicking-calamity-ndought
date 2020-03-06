describe('Clicking Calamity Tests:', () => {
    let underTest;
    let testCompanion;
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
            for(let i = 0;i < 101; i++){
                underTest.countClick();
             }
             underTest.buyClickCompanion();
             expect(underTest.clickCount).toBe(1);
        });
        it('ClickCompanion cost should increase 10% each time', () =>{
            for(let i = 0;i < 101; i++){
                underTest.countClick(); 
            }
            underTest.buyClickCompanion();
            expect(underTest.companionCost).toBe(110);

        });
        it('AutoClick should add click to companionCount every second', () =>{
            for(let i = 0; i<this.companionCount; i++){
                underTest.countClick();
                expect(underTest.setInterval).toBeEqualto(1000);
            }
            }, 1000);
            
        });
    });


         
        

    
