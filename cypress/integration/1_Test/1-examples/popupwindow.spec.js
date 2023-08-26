context('Windows-Popup',()=>{ 
specify('Simple way',()=>{
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    cy.get('p').should('contain.text','Congratulations')
})
specify('Alternate',()=>{
    cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth: {username: 'admin',password: 'admin'}})
    cy.get('p').should('contain.text','Congratulations')
})
})