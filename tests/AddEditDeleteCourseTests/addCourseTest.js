import { Selector } from 'testcafe';

fixture `addCourseTest`
    .page `http://localhost:8081/`;

test('addCourseTest', async t => {t
        await t
        .click('#createAccountBtn')
        .typeText(Selector('#email'),'a@gmail.com')
        .typeText(Selector('#password'),'Ab123456')
        .typeText(Selector('#repeatPassword'),'Ab123456')
        .typeText(Selector('#displayName'),'Jianqiao')
        .typeText(Selector('#securityQuestion'),'123456')
        .typeText(Selector('#securityAnswer'),'123456')
        .click("#create")
        .typeText(Selector('#email'),'a@gmail.com')
        .typeText(Selector('#password'),'Ab123456')
        .click('#loginBtn')
        .click('#coursesMode')
        .click('#roundsModeActionBtn')
        .typeText(Selector('#autocomplete'),'Golf Course Clubhouse')
        .debug()
        .typeText(Selector('#phone'),'5090000000')
        .typeText(Selector('#teeName'),'White')
        .typeText(Selector('#golfingYardage'),'20')
        .click('#runningYardage')
        .pressKey('ctrl+a delete')
        .typeText(Selector('#runningYardage'),'10')
        .typeText(Selector('#numberOfHoles'),'5')
        .typeText(Selector('#holebyHole'),'20')
        .click('#timeParConstant')
        .pressKey('ctrl+a delete')
        .typeText(Selector('#timeParConstant'),'80')
        .typeText(Selector('#speedgolfRecord'),'Speedgolf record')
        .click("#submit")
        .expect(Selector('td').withText('Golf Course Clubhouse').visible).eql(true)

        .click("#editBtn0")
        // .expect(Selector('logCourseForm').visible).eql(true)
        .click('#autocomplete')
        .pressKey('ctrl+a delete')
        .typeText(Selector('#autocomplete'),'Golf Club Drive')
        .debug()
        .click("#submit")
        .expect(Selector('td').withText('Golf Club Drive').visible).eql(true)

        .click("#delBtn0")
        .click("#Confirm")
        .expect(Selector('td').withText('Golf Club Drive').visible).eql(false)
})