context('Different select',()=>{
    Cypress.config('baseUrl','http://uitestingplayground.com/')
    
specify('Simple-DropDown',()=>{
    cy.visit('/')
cy.get("a[href='/loaddelay']").click()
cy.get('#spinner').should('not.exist')
cy.get("div[class='container'] h3").should('have.text','Load Delays')

})


})