context('Different select',()=>{
    Cypress.config('baseUrl','https://kitchen.applitools.com/ingredients/select')
    
specify('Simple-DropDown',()=>{
    cy.visit('/')
//Drop-down selection
      //Select By Text
      cy.get('#spices-select-single').select('Garlic').should('have.value','garlic')  
      
      //Select By Value
      cy.get('#spices-select-single').select('ginger').find('option:selected').invoke('text').should('eq','Ginger')  
      //Select By index`  
      cy.get('#spices-select-single').select('chili-powder').find('option:selected').invoke('val').should('eq','chili-powder')  
   
})
specify('multiple-DropDown',()=>{
    cy.visit('/')
   cy.get('#spices-select-multi').select(['Garlic','Ginger']).invoke('val').should('deep.equal',['garlic','ginger'])
   cy.get('#spices-select-multi').select(['Garlic','Ginger']).find('option:selected').invoke('text').should('deep.equal',['Garlic','Ginger'].join(""))
})



})