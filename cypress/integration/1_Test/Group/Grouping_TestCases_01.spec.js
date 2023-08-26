
context('Grouping TS-1',()=>{

    it('Smoke Test',()=>{
     cy.log('Grouping TS-1-SmokeTest')
    })
    it('Smoke And Functional Test',{tags:['Smoke','Functional']},()=>{
         cy.log('Grouping TS-1-FunctionalTest')  
    })
    it('Functional Test',{tags:'Functional'},()=>{
         cy.log('Grouping TS-1-FunctionalTest')  
    })
    it('Regression Test',()=>{
         cy.log('Grouping TS-1-RegressionTest')   
    })

})