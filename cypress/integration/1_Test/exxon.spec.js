context('Exxon-ViewPort',function(){
    beforeEach(() => {
        cy.visit('https://corporate.exxonmobil.com/')
      })

      it("Height and Width",()=>
      {
          cy.document().its('contentType').should('eq', 'text/html')
          //Yield Document Object
          cy.document().then(doc=>
          {
             cy.log(Cypress.$ (doc).height())
             cy.log(Cypress.$ (doc).with())
          })
          })
    specify('HomePage-Pixel-320,480',()=>{
        cy.viewport(320, 480)
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get("button[aria-label='Navigation']").should('be.visible')
        cy.get("button[aria-label='Navigation']").click()
    })
    specify('HomePage--ipad-2',()=>{
        cy.viewport('ipad-2')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get("button[aria-label='Navigation']").should('be.visible')
        cy.get("button[aria-label='Navigation']").click()
    })
    specify('HomePage--iphone-8',()=>{
        cy.viewport('iphone-8')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get("button[aria-label='Navigation']").should('be.visible')
        cy.get("button[aria-label='Navigation']").click()
    })
   
})