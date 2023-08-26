context('document Command',() =>{  

    before(()=>
    {
        cy.visit("https://en.wikipedia.org/wiki/URI_fragment#Examples")
        
    })

    it("Title",()=>
    {
        //Yield Document Object
        cy.document().then(doc=>
        {
            const title=doc.title
            expect(title).to.eq('URI fragment - Wikipedia')
        })

       // Simple way
       cy.title().should('equals','URI fragment - Wikipedia')

       cy.document().then(doc=>
        {
            Cypress.$(doc.body).css('background-color','red')
        })

    })
    it.only("cookies",()=>
    {

        /* Clear a specific browser cookie. 
        Cypress automatically clears all cookies before each test to prevent state from being shared across tests.
        You shouldn’t need to use this command unless you’re using it to clear a specific cookie inside a single test.
        //Yield Document Object */
        cy.document().then(doc=>
        {
            cy.log(doc.cookie)
            //Add
            doc.cookie="name=Greet"
            cy.log(doc.cookie)
            //Update
            doc.cookie="name=welcome"
            cy.log(doc.cookie)
            //clear
            doc.cookie="name="
            cy.log(doc.cookie)
        })
       // Simple way
     cy.setCookie('note','Hello')
     cy.getCookie('note').should('have.property',
        'value',
        'Hello')
        cy.getCookie('GeoIP')
        cy.clearCookie('note')
        //cy.getCookie('note')
  
    })
     
})