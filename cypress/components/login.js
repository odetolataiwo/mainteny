export const email = () => cy.xpath("//input[@type='email']")
export const password = () => cy.xpath("//input[@name='password']")

export const loginButton = () => cy.xpath("//button[contains(text(),'Login')]")

export const performLogin = (email, password) => {
    email().clear().type(email)
    password().clear().type(password)
    loginButton().click()
} 


