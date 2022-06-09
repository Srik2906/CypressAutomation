const BaseUrl = "https://rahulshettyacademy.com/angularpractice/"
class Utils{
    launchWebsite()
    {   
        return cy.visit('BaseUrl')
    }
}
export default Utils