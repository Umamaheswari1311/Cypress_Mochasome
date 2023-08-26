
beforeEach(() => {
    //URL Launch
        cy.visit(Cypress.env("url"))})

context('Different config level',()=>{

    
        it('Webtable',()=>{
            cy.get("svg[viewBox*='0 0 448 512'] > path").click()
            cy.get('span').contains('Web Tables').click()
        //Static Text finding anywhere from table
            cy.get('.rt-tbody').contains('div','Vega').should('exist')
            cy.get('.rt-tbody').contains('div','Vega').should('be.visible')
        //Specific Row and Column value from table
        cy.get('div[role=grid] > div:last-child>div:nth-child(2)>div>div:nth-child(3)').contains('45').should('be.visible')
        //static value to find next dynamic value
        cy.get('div[role=grid] > div:last-child>div:nth-child(2)>div>div:nth-child(3)').next().contains('alden')
        //static value to find prev dynamic value
        cy.get('div[role=grid] > div:last-child>div:nth-child(2)>div>div:nth-child(3)').prev().contains('Cantrell')
        
      
    })
   

     
})