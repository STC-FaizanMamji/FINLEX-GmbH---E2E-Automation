class DialogModal {
    openDialog() {
        return cy.xpath("(//span[contains(text(),'Open dialog')])[1]")
    }

    closeFirstDialog() {
        return cy.xpath("//span[contains(text(),'Cancel')]")
    }

    dialogOverviewTextField() {
        return cy.xpath("//div[@class='mat-form-field-infix ng-tns-c152-4']/input")
    }

    dialogOverviewButton() {
        return cy.xpath("//span[contains(text(),'Pick one')]")
    }

    dialogOverviewModal() {
        return cy.xpath("//div[@id='cdk-overlay-1']//input")
    }

    dialogOverviewModalButton() {
        return cy.xpath("(//div[@id='cdk-overlay-1']//button)[2]")
    }

    dialogOverviewAssertText(){
        return cy.xpath("//li[@class='ng-star-inserted']/i")
    }
}

export default DialogModal