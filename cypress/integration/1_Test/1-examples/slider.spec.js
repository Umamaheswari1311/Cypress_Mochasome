describe('sliser-suite',function(){
   

    it('Slidervariation-1',function(){
        cy.visit('https://smartslider3.com/infinite-logo-carousel/')
        cy.get("div[aria-label='Mashable']").click()
       
    })

    it('Slidervariation-2',function(){
        cy.visit('https://smartslider3.com/layer-slider-template/')
        cy.get("div[aria-label='App']").click()
       
    })
      /* it.only('Slidervariation-3',function(){
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.xpath("//*[name()='path' and contains(@d,'M13 13v8h8')]").click({force: true})
        cy.xpath("//div[@class='element-list collapse show']//li[@id='item-3']").click()
        cy.get('input[type=range]').invoke('val',50).trigger('change').click({ force: true }) 
    
    })  */
    it('Slider',function(){
        cy.visit('https://testautomationpractice.blogspot.com/')
       cy.get('span[tabindex=0]').invoke('attr','left','75%')
    
    })
})