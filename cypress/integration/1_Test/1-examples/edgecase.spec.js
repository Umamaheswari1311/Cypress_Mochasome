
/// <reference types="cypress" />
const book = {
  title: 'Designing Evolvable Web APIs with ASP.NET',
  ISBN: '9781449337711',
};
context('BookStore',() =>{  

    specify('GetBooks',() =>{
    cy.request({
        method: 'GET',
        url:'https://demoqa.com/BookStore/v1/Books'}).then((response)=>{
            expect(response.status).to.eq(200);
            cy.log(response.body)
            cy.log(JSON.stringify(response.body))
        })
    })
    specify('Mock-Books',() =>{
      cy.intercept('https://demoqa.com/BookStore/v1/Books', { fixture: 'empty.json' }).as(
      'empty'
    );
    
    cy.visit('https://demoqa.com/books');
    cy.wait('@empty');
  
  });
  specify('stub-OneBook',() =>{
    cy.intercept('https://demoqa.com/BookStore/v1/Books', { fixture: 'book.json' }).as(
    'one'
  );
  
  cy.visit('https://demoqa.com/books');
  cy.wait('@one');
  
  //cy.contains('a', book.title).should('be.visible');
});
        })
    

     