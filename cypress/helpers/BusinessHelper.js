export const dayjs = require('dayjs')
 
export const visitPage = (targetUrl) => {
    cy.visit(targetUrl)
    cy.log(targetUrl)
}
export const configValue = require('../fixtures/config.json')

export const asserText = (selector, textValue) => {
    cy.xpath(selector).should('have.text', textValue)
}

export const getCurrentDate = () =>{
    dayjs().format('YYYY/MM/DD')
}




