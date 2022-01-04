/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

import * as login from '../components/login.js'


describe("Login Feature", ()=>{

    before("Visit the login page", ()=>{
        // visit the site
        cy.visit("/auth/login")
    })

    context("Invalid Details - Invalid Password", ()=>{
        it("Should throw an error", ()=>{
            login.performLogin('engineering@mainteny.com','MAINTENY@2021')
            cy.xpath("//div[@class='error']").should("be.visible")
        })
    })

    context("Invalid Details - Invalid Email", ()=>{
        it("Should throw an error", ()=>{
            login.performLogin('taiwo@mainteny.com','Mainteny@2021')
            cy.xpath("//div[@class='error']").should("be.visible")
        })
    })

    context("Invalid Details - Invalid Password and Email", ()=>{
        it("Should throw an error", ()=>{
            login.performLogin('taiwo@mainteny.com','MAINTENY@2021')
            cy.xpath("//div[@class='error']").should("be.visible")
        })
    })

    context("Valid Details", ()=>{
        it("Should login successfully", ()=>{
            login.performLogin('engineering@mainteny.com','Mainteny@2021')

            cy.url().should('include', '/pages/dashboard')
            cy.xpath("//div[contains(text(),'Hi Martin!')]").should('be.visible')
        })
    })
})