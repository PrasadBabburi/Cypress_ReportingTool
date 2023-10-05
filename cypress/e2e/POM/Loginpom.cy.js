class loginpom{
    elements = {
        usernameInput : () => cy.get('#email'), 
        passwordInput : () => cy.get('#login-password'),
        logB : () => cy.get('#btn-login1'),
        optionsdropdown : () => cy.get('#RDropdown'),
        logoutB : () => cy.get(':nth-child(3) > .dropdown-item')
    }
    enterUsername(username)
    {
       // let emptyUsername = "";

        this.elements.usernameInput().clear();
        this.elements.usernameInput().type(username);
    }
    enterPassword(password)
    {
       // let emptyPassword = "";
        this.elements.passwordInput().clear();
        this.elements.passwordInput().type(password);
    }
    clickLogin()
    {
        this.elements.logB().click();
    }
    clickOnSettings()
        {
            this.elements.optionsdropdown().click();
        }

    clickonLogout()
    {
        this.elements.logoutB().click();
    }
    }
    export default loginpom;