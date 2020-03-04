describe('Clicking Calamity Tests:', () => {
    let underTest;
    beforeEach(() => {
        underTest = new ClickCount();
        underTest1 = new ClickCompanion();
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
    describe('Click Companions', () => {
        it('ClickCounter should have 0 when new. ', () => {
            expect(underTest.getCompanionCount()).toBe(0);
        });
        it('When ClickCounter reaches 100 a clickCompanion can be purchased', () => {
            expect(underTest.countClick).toBe(100);
            expect(underTest.clickCompanion).toBe(1);
        });
    });
    
});
    
