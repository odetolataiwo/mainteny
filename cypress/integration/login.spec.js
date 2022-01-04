/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

import * as login from '../components/login.js'


describe("Login Feature", ()=>{

    before("", ()=>{
        // visit the site
        cy.visit("/auth/login")
    })

    context("Invalid Details - Invalid Password", ()=>{
        it("", ()=>{
            login.email().clear().type('engineering@mainteny.com')
            login.password().clear().type('MAINTENY@2021')
            cy.xpath("//div[@class='error']").should("be.visible")
        })
    })

    context("Invalid Details - Invalid Email", ()=>{
        it("", ()=>{
            login.email().clear().type('taiwo@mainteny.com')
            login.password().clear().type('Mainteny@2021')
            cy.xpath("//div[@class='error']").should("be.visible")
        })
    })

    context("Invalid Details - Invalid Password and Email", ()=>{
        it("", ()=>{
            login.email().clear().type('taiwo@mainteny.com')
            login.password().clear().type('MAINTENY@2021')
            cy.xpath("//div[@class='error']").should("be.visible")
        })
    })

    context("Valid Details", ()=>{
        it("", ()=>{
            login.email().clear().type('engineering@mainteny.com')
            login.password().clear().type('Mainteny@2021')
        })
    })
})