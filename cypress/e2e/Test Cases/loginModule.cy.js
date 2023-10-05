import loginpom from "../POM/Loginpom.cy";
describe('POM Test', ()=> {
    //const loginpage = new login();
    
    it('Visit', ()=> {
        // executes prior each test within it block
        cy.visit("http://192.168.1.37/login.php");
    })  

    it('TC-01 Verify the login page with valid Cred', ()=> {

        cy.wait(5000)
        cy.reload()
        const loginpage = new loginpom();
        loginpage.enterUsername('gsunil@trellissoft.ai')
        loginpage.enterPassword('trellisdashboard@2@21')

        cy.wait(60000);
        loginpage.clickLogin();

        cy.wait(5000);

        loginpage.clickOnSettings();
        loginpage.clickonLogout();
    })
                                      // Negative Scenarios Start

    it('TC - 02 Verify the login functionality with In-Valid password', ()=> {

        cy.reload()
        const loginpage = new loginpom();
        loginpage.enterUsername('qa@trellissoft.ai')
        loginpage.enterPassword('Trellis@1231')

        cy.wait(60000);
        loginpage.clickLogin();
        cy.get('.alert').should('have.text', 'Invalid Password !')
    })

    it('TC - 03 Verify the login functionality with In-Valid email', ()=> {
        const loginpage = new loginpom();
        cy.reload()
        cy.wait(5000)
        loginpage.enterUsername('temp1@trellissoft.ai')
        loginpage.enterPassword('Trellis@123')

        cy.wait(60000);
        loginpage.clickLogin();
        //loginpage.elements.errorTxt().should('contain', 'User with this email address is not registered !');
        cy.get('.alert').should('have.text', 'User with this email address is not registered !')
    })

    it('TC - 04 Verify the login functionality with In-Valid Cred', ()=> {
        const loginpage = new loginpom();
        cy.reload()
        cy.wait(5000)
        loginpage.enterUsername('temp@trellissoft.ai')
        loginpage.enterPassword('Trellis@1231')

        cy.wait(60000);
        loginpage.clickLogin();
        //loginpage.elements.errorTxt().should('contain', 'User with this email address is not registered !');
        cy.get('.alert').should('have.text', 'User with this email address is not registered !')
    })




    it('TC - 06 Verify the login functionality without Cred', ()=> {
        //let eptyUsername = "";
        //let emptyPassword = "";
        const loginpage = new loginpom();
        cy.reload()
        cy.wait(5000)
       // loginpage.enterUsername()
       // loginpage.enterPassword()

        cy.wait(60000);
        loginpage.clickLogin();
        //loginpage.elements.errorTxt().should('contain', 'Please provide all the required parameters for processing your request.');
        cy.get('.alert').should('have.text', 'Please provide all the required parameters for processing your request.')
    }) 

                                              // Negative Scenarios End
/*
    it('Verify SettingsPage', ()=> {
        const SettingsB = new SettingsPage()

        cy.wait(2000);
        SettingsB.clickOnSettings();
    })
    it('Click on Account', ()=> {

        cy.on("uncaught:exception", (e, runnable) => {
            console.log("error", e);
            console.log("runnable", runnable);
            return false;
            });
        const AccountB = new AccountPage()
        AccountB.clickonAccount()
        cy.wait(3000);
    })

    */
    /*
// Updating/Modifying First Name and Last Name text fileds
    it('Update Account details', () => {
        const UpdateAccount = new UpdateAccountSettings()

        //UpdateAccount.typeFirstName("QA");
        //UpdateAccount.typeLastName("Test");
        UpdateAccount.ClickonSavebutton();
    })
    */
/*
    it('Verify the login unsuccessfull for missing steps', ()=> {
        const loginpage = new login();
        loginpage.enterUsername('bprasad@gmail.com')
        loginpage.enterPassword('Trellis@121')
        loginpage.clickLogin();
        loginpage.elements.errorTxt().should('contain', 'Please provide all the required parameters for processing your request');
    })
    */
})