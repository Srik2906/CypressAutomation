/// <reference types="Cypress" />

describe("Test suite", () => {
  it("Test case", () => {
    cy.visit(Cypress.env('url') + '/seleniumPractise')
    cy.get('input.search-keyword').type('ca')
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').should('have.length', 4)
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
      const veg = $el.find('.product-name').text()
      if (veg.includes('Cashews')) {
        cy.wrap($el).find('button').click()
      }
    })
     cy.get('.brand').then((logoelement) => {
        cy.log(logoelement.text()).then(() => {
          console.log("srikanth")
        })
     })
     cy.get('.cart-icon > img').click()
     cy.contains('PROCEED TO CHECKOUT').click()
     cy.contains('Place Order').click()
     cy.get('select').select("India")
     cy.get('.chkAgree').click()
     cy.get('button').click()
     cy.get('div.wrapperTwo span:nth-child(1)').then((message) =>
     { 
       let successMessage=message.text()
       expect(successMessage.includes('Thank you, your order has been placed successfully ')).to.be.true
     })

  }
  )
})
