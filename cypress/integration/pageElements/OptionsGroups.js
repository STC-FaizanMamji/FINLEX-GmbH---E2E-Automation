class OptionsGroups{
    drpOptions(){
      return cy.xpath("//div[@class='mat-form-field-infix ng-tns-c145-6']");
    }

    drpOptionsTypeText(){
        return cy.xpath("//div[@class='mat-form-field-infix ng-tns-c145-6']/input");
    }

    drpOptionsSelectValue(){
        return cy.xpath("//span[@class='mat-option-text']")
    }
}

export default OptionsGroups