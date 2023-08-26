//,{'baseUrl':'https://facebook.com'}
context('Different config level',{'baseUrl':'https://facebook.com'},()=>{

  // Cypress.config('baseUrl','https://the-internet.herokuapp.com/')

    specify('PickTestcaselevel',{'baseUrl':'https://google.com'},()=>{
          cy.visit('/')
          //https://petstore.swagger.io
    })
    specify('PickTestsuite level',()=>{
        cy.visit('/') 
    })

     
})