import Reportpom from "../POM/Reportpom.cy";
describe('POM Test', ()=> {
    //const loginpage = new login();
    
    it('Visit', ()=> {
        // executes prior each test within it block
        cy.visit("http://192.168.1.37/login.php");
    })  

    it('Log-in', () => {

        cy.get('#email').type('gsunil@trellissoft.ai');
        cy.get('#login-password').type('trellisdashboard@2@21');
        cy.wait(60000);
        cy.get('#btn-login1').click();
    })

    it('Create Report Module', () => {
        const report = new Reportpom();
        
        report.clickonReportbutton();
        cy.wait(3000);

        report.clickonCreatenew();
        cy.wait(3000);
        report.clickonYesbutton();

        report.clickonFilenametextbox("TestReport30509");
        cy.wait(10000);

        report.clickonSavebutton();
        cy.wait(10000);
    })

    it('Add DataBase Connection', () => {
        const report = new Reportpom();
        cy.wait(2000);

        report.clickonAddDatabutton();
        cy.wait(3000);

        report.selectDBConnection();
        report.clickonConnectbutton();
        cy.get('.alert').should('have.text', 'Successfully Connected');

        report.clickonOKbutton();
    })
})