class HomePage {
    getName() {
        return cy.get('input[name="name"]').eq(1)
    }
    getEmail() {
        return cy.get('input[name="email"]')

    }

    getRadio() {
        return cy.get('input[id="exampleCheck1"]')
    }

    getGender() {
    return cy.get('#exampleFormControlSelect1')
    }

    getRadioone() {
        return  cy.get('#inlineRadio2')
    }

    getDataBinding() {
        return cy.get(':nth-child(4) > .ng-valid')
    }

    getShop()
    {
       return  cy.get(':nth-child(2) > .nav-link')
    }



}

export default HomePage