export const emailField = () => cy.xpath("//input[@type='email']")
export const passwordField = () => cy.xpath("//input[@name='password']")

export const loginButton = () => cy.xpath("//button[contains(text(),'Login')]")

export const performLogin = (email, password) => {
    emailField().clear().type(email)
    passwordField().clear().type(password)
    loginButton().click()
} 


