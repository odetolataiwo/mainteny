/// <reference types="Cypress" />


let token

it("Get Token", ()=>{
    cy.request({
        url: 'https://staging.mainteny.com/api/sessions/login',
        method: "POST",
        body: {
            "username": 'andreas@finch.com',
            "password": 'Andreas@1234'
        }
    }).then((response) => {
        token = response.body.token
        cy.log(`Bearer ${token}`)
        expect(response.status).to.eq(200)
        expect(response.body.userAccount).to.have.property('username', 'andreas@finch.com')
        expect(response.body.userAccount).to.have.property('firstName', 'Andreas')
        expect(response.body.userAccount).to.have.property('lastName', 'Finch')
    })
})
