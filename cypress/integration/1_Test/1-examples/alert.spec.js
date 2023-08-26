//Cypress will automatically handle alert to click Ok
context('Different alerts and Popup',{'baseUrl':'https://demoqa.com'},()=>{
    specify('childwindow',()=>{
        cy.visit('/')
        cy.get("svg[viewBox*='0 0 448 512'] > path").click()
        cy.get('span').contains('Links').click()
        cy.get('#dynamicLink').invoke('removeAttr','target').click()
        cy.go('back')
    
    
    })  
    
specify('Simple-Alert',()=>{
    cy.visit('/')
    cy.get("svg[viewBox*='0 0 14 16']> path").click({force: true})
    cy.get('li>span').contains('Alerts').click()
    //Alert  
  //Handle using cy.on(window:alert)
     /* cy.on('window:alert',(str)=>{
        expect(str).to.equal('You clicked a button')
    })
    cy.get('#alertButton').click() */

 //Handle using cy.stub & cy.on(window:alert)
  const stub=cy.stub()
  cy.on('window:alert',stub)
  cy.get('#alertButton').click().then(()=>{
      expect(stub.getCall(0)).to.be.calledWithExactly('You clicked a button') 
  })
  })
  specify.only('Confirm-Alert',()=>{
    cy.visit('/')
    cy.get("svg[viewBox*='0 0 14 16']> path").click({force: true})
    cy.get('li>span').contains('Alerts').click()
 
    //Handle using cy.on(window:confirm)
   cy.on('window:confirm',(txt)=>{
       expect(txt).to.equal('Do you confirm action?')
       return false
   })
   cy.get('#confirmButton').click()
 /* //Handle using cy.stub & cy.on(window:alert)
   const stub=cy.stub()
    stub.onFirstCall().returns(false)
    cy.on('window:confirm',stub)
    cy.get('#confirmButton').click().then(()=>{
    expect(stub.getCall(0)).to.be.calledWithExactly('Do you confirm action?')
   }) */
})
specify('Confirm-Prompt',()=>{
    cy.visit('/')
    cy.get("svg[viewBox*='0 0 14 16']> path").click({force: true})
    cy.get('li>span').contains('Alerts').click()
    cy.window().then((winObj=>{
        const stub=cy.stub(winObj,"prompt")
        stub.returns('malar')
    }))
    cy.get('#promtButton').click()
})
specify('ModalDialog-Alert',()=>{
    cy.visit('/')
    cy.get("svg[viewBox*='0 0 14 16']> path").click({force: true})
    cy.get('li>span').contains('Modal').click()
    cy.get('#showSmallModal').click()
    cy.get('div[role=dialog] div:nth-child(2)').should('contain.text','small')
    cy.get('#closeSmallModal').click()
})
specify('Window-open',()=>{
    cy.visit('/')
    cy.get("svg[viewBox*='0 0 14 16']> path").click({force: true})
    cy.get('li>span').contains('Windows').click()
    const url='/sample'
    cy.window().then(win=>{
        const stub=cy.stub(win,'open').as('openWindow')
    })
    cy.get('#windowButton').click()
    cy.get('@openWindow').should('be.calledOnceWith',url)

    cy.window().then(win=>{
        win.location.href=url
        cy.get('#sampleHeading').should('contain.text','This is a sample page')
    })
    cy.go('back')
}) 
 
it('getProperty',()=>{
    cy.get("svg[viewBox*='0 0 448 512'] > path").click()
    cy.get('span').contains('Links').click()
    cy.get('#dynamicLink').then(el=>{
        const url=el.prop('href')
        cy.visit(url)
    })
})
})