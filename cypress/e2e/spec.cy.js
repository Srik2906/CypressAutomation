/// <reference types="Cypress" />

describe("Test suite", () => {
  it("Test case", () => {
    cy.visit("https://rahulshettyacademseleniumPractise/#/")
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
  }
  )
})
