describe('xpath-suite',function(){
    beforeEach(()=>
    {
        cy.visit('https://testautomationpractice.blogspot.com/')
    })
    it('SearchwithXpath-1',function(){
       
        cy.xpath("//input[contains(@id,'input')]").type('cypress') .type('{enter}')
    
    
    })
    it('SearchwithXpath-2',function(){
         cy.xpath('(//span)[9]')
         .xpath(".//input[@id='Wikipedia1_wikipedia-search-input']").type('cypress') .type('{enter}')
    })
     
    it('SearchwithXpath-3',function(){
        
        cy.xpath('(//span)[9]').within(() =>
        cy.xpath(".//input[@id='Wikipedia1_wikipedia-search-input']").type('cypress') .type('{enter}')
    )
    }) 


})