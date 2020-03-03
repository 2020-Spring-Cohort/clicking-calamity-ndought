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
         it('countClick() 2 time will result in a clickCount of 2', () => {
             underTest.countClick();
             underTest.countClick();
             expect(underTest.clickCount).toBe(2);
         });

    })
});