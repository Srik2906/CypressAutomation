
class ProductPage {

    verifySum() {
        let sum = 0
        let expectedSum
        cy.get('h3 strong').then((element) => {
            var expected = element.text()
            cy.log(expected)
            expectedSum = expected.split(" ")
            expectedSum = expectedSum[1].trim()
            })
            
        
        
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
          var res = $el.text()
            var amount = res.split(" ")
            amount = amount[1].trim()
            sum = Number(sum) + Number(amount)

        }).then(() => {
            expect(Number(expectedSum)).to.equal(sum)
        })
        



    }

    Checkout() {
        return cy.contains('Checkout')
    }

    DeliveryLoc() {
        return cy.get('.validate')
    }

    selectCountry() {
        return cy.get('div.suggestions ul li a', { timeout: 6000 })
    }

    clickCheckbox() {
        return cy.get('#checkbox2')
    }

    clickPurchase() {
        return cy.get('input.btn').click()
    }

    verifySuccessMessage() {
        return cy.get('div.alert').then((element) => {
            const actualText = element.text()
            expect(actualText.includes('Success!')).to.be.true
        })
    }
}

export default ProductPage