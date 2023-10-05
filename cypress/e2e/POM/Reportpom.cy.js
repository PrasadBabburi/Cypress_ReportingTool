class Reportpom{
    Report_elements = {

        getReportbutton: () => cy.get(':nth-child(2) > a > label'),
        getCreatenew: () => cy.get('span > .fa-icon'),
        getYesbutton: () => cy.get('#newfile > .modal-footer > .btn-default'),
        getFilenametextbox: () => cy.get('#filename'),
        getSavebutton: () => cy.get('#savefil > .modal-footer > #saveBtn'),
        getAdddatabutton: () => cy.get('span > .fa-database'),
        selectMYSQLoption: () => cy.get(':nth-child(2) > :nth-child(2) > .card > .card-body > div.float-start > .text-primary'),
        getConnectbutton: () => cy.get('#btn-connect'),
        getOKbutton: () => cy.get('#hostsetting > .d-flex > .db-message > .text-center > div > .btn')

    }
    clickonReportbutton()
    {
        this.Report_elements.getReportbutton().click();
    }
    clickonCreatenew()
    {
        this.Report_elements.getCreatenew().click();
    }
    clickonYesbutton()
    {
        this.Report_elements.getYesbutton().click();
    }
    clickonFilenametextbox(FileName)
    {
        this.Report_elements.getFilenametextbox().clear();
        this.Report_elements.getFilenametextbox().type(FileName);
    }
    clickonSavebutton()
    {
        this.Report_elements.getSavebutton().click();
    }
    clickonAddDatabutton()
    {
        this.Report_elements.getAdddatabutton().click();
    }
    selectDBConnection()
    {
        this.Report_elements.selectMYSQLoption();
    }
    clickonConnectbutton()
    {
        this.Report_elements.getConnectbutton().click({force: true});
    }
    clickonOKbutton()
    {
        this.Report_elements.getOKbutton().click();
    }
}

export default Reportpom;