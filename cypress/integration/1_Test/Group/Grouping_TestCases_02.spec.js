
context('Grouping TS-2',()=>{

    it('Smoke Test',()=>{
     cy.log('Grouping TS-2-SmokeTest')
    })
    it('Smoke And Functional Test',{tags:['Smoke','Functional']},()=>{
         cy.log('Grouping TS-2-FunctionalTest')  
    })
    it('Functional Test',{tags:'Functional'},()=>{
         cy.log('Grouping TS-2-FunctionalTest')  
    })
    it('Regression Test',()=>{
         cy.log('Grouping TS-2-RegressionTest')  
    })

})
