class AngularRealWorld {
    articlePreview() {
        return cy.xpath("(//div[@class='article-preview'])[1]", { timeout: 30000 }).should('be.visible')
    }
}

export default AngularRealWorld