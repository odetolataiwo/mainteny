/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />


describe("Login Feature", ()=>{

    before("", ()=>{
        // visit the site
        cy.visit("/auth/login")
    })

    context("Invalid Details - Invalid Password", ()=>{
        it("", ()=>{
            cy.xpath("//input[@type='email']").clear().type('engineering@mainteny.com')
            cy.xpath("//input[@name='password']").clear().type('MAINTENY@2021')
            cy.xpath("//div[@class='error']").should("be.visible")
        })
    })

    context("Invalid Details - Invalid Email", ()=>{
        it("", ()=>{
            cy.xpath("//input[@type='email']").clear().type('taiwo@mainteny.com')
            cy.xpath("//input[@name='password']").clear().type('Mainteny@2021')
            cy.xpath("//div[@class='error']").should("be.visible")
        })
    })

    context("Invalid Details - Invalid Password and Email", ()=>{
        it("", ()=>{
            cy.xpath("//input[@type='email']").clear().type('taiwo@mainteny.com')
            cy.xpath("//input[@name='password']").clear().type('MAINTENY@2021')
            cy.xpath("//div[@class='error']").should("be.visible")
        })
    })

    context("Valid Details", ()=>{
        it("", ()=>{
            cy.xpath("//input[@type='email']").clear().type('engineering@mainteny.com')
            cy.xpath("//input[@name='password']").clear().type('Mainteny@2021')
        })
    })
})