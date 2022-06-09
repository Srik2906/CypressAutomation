/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
import HomePage from '../support/pageObjects/Homepage'
import ProductPage from '../support/pageObjects/Products'
const homepage = new HomePage()
const productpage = new ProductPage()

describe('sample', () => {
  let data

  before(async () => {
    data = await cy.fixture('example')

  })


  it('should visit', () => {
    cy.visit(Cypress.env('url')+'/angularpractice')
    homepage.getName().type(data.name)
    homepage.getEmail().type(data.email)
    homepage.getRadio().check().should('be.checked')
    homepage.getGender().select(data.gender).should('have.value', 'Male')
    homepage.getRadioone().click()
    homepage.getDataBinding().should('have.value', data.name)
    //cy.get('input[name="name"]').eq(1).should('have.attr','minlength','2')
    homepage.getShop().click()
    data.productName.forEach(element => {
      cy.selectProduct(element)
    });
    productpage.Checkout().click()
    productpage.verifySum()
    productpage.Checkout().click()
    productpage.DeliveryLoc().type('India')
    productpage.selectCountry().click()
    productpage.clickCheckbox().click({force:true})
    productpage.clickPurchase()
    productpage.verifySuccessMessage()



  })
})
