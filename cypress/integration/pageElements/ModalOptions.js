class ModalOptions {
    modalDefaultOption() {
        return cy.xpath("(//div//button[contains(text(),'Launch demo modal')])[1]");
    }

    modalDateOfBirth() {
        return cy.xpath("//input[@id='dateOfBirth']");
    }

    modalOptionModalBtnSave() {
        return cy.xpath("//button[@class='btn btn-outline-dark']")
    }

    modalBackDrop() {
        return cy.xpath("//button[contains(text(),'Modal with backdrop custom class')]")
    }

    modalBackDropBtnClose() {
        return cy.xpath("//button[contains(text(),'Close')]")
    }
}

export default ModalOptions