/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('testing.cy.js', () => {
  it('should visit', () => {
    cy.visit(Cypress.env('url') + '/AutomationPractice')
    //cy.get('#opentab').invoke('removeAttr','target').click()
    //ncy.go('back')
    cy.get('table[name="courses"] tr td:nth-child(2)').as('tableLocator')

    cy.get('@tableLocator').each(($el, index, $list) => {

      const course = $el.text()
      if (course.includes('Python')) {
        cy.get('@tableLocator').eq(index).next().then((price) => {
          const priceText = price.text()
          expect(priceText).to.equal('25')
        })
      }



    })
    cy.get('div.mouse-hover-content').invoke('show').contains('Top').click()
    cy.url().should('include', 'top')


  })
})


