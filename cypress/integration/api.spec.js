/// <reference types="Cypress" />


let token

// get token (sign in)
it("Get Token", ()=>{
    cy.request({
        url: '/api/sessions/login',
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
        expect(response.body.userAccount).to.have.property('roles')
        expect(response.body.userAccount).to.have.property('status')
        expect(response.body).to.have.property('createdAt')
        expect(response.body).to.have.property('lastUpdatedAt')
    })
})


it("Service Orders", ()=>{
    cy.request({
        url: '/api/serviceOrders',
        method: "GET",
        headers:{
            Authorization: `Bearer ${token}`
        },
        qs:{
            serviceCompanyId: "9d85be2d-ceb9-4b19-a350-9f512b4b57e4",
            status: "INIT",
            status: "READY_TO_SCHEDULE",
            start: "2021-01-04T23:53:09.588Z",
            end: "2023-01-04T23:53:09.588Z",
            pageIndex: 0,
            pageSize: 20,
            orderBy: "CREATED_TIME",
            order: "ASC",
            query: ""
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('total')
        expect(response.body).to.have.property('page')
        expect(response.body.data[0]).to.have.property('number')

        Cypress._.each(response.body.data[0].elevator, (elevator) => {
            expect(elevator.id).to.not.be.null
            expect(elevator.number).to.not.be.null
            expect(elevator.model).to.not.be.null
            expect(elevator.type).to.not.be.null
            expect(elevator.capacity).to.not.be.null
            expect(elevator.category).to.not.be.null
            expect(elevator.address).to.not.be.null
        })
    })
})


it("Service Orders | Missing Required Parameters", ()=>{
    cy.request({
        url: '/api/serviceOrders',
        method: "GET",
        headers:{
            Authorization: `Bearer ${token}`
        },
        qs:{
            serviceCompanyId: "9d85be2d-ceb9-4b19-a350-9f512b4b57e4",
            status: "INIT",
            status: "READY_TO_SCHEDULE",
            pageIndex: 0,
            pageSize: 20,
            orderBy: "CREATED_TIME",
            order: "ASC",
            query: ""
        },
        failOnStatusCode: false, 
    }).then((response) => {
        expect(response.status).to.eq(500)
    })
})


it("Service Orders | Invalid value for endpoint parameters", ()=>{
    cy.request({
        url: '/api/serviceOrders',
        method: "GET",
        headers:{
            Authorization: `Bearer ${token}`
        },
        qs:{
            serviceCompanyId: "85be2d-ceb9-4b19-a350-9f512b4b57e4",
            status: "INITIAL",
            status: "READY_TOCHEDULE",
            start: "2021-01-04T23:53:09.588Z",
            end: "2023-01-04T23:53:09.588Z",
            pageIndex: 0,
            pageSize: 20,
            orderBy: "CREATED_TIME",
            order: "ASC",
            query: ""
        },
        failOnStatusCode: false, 
    }).then((response) => {
        expect(response.status).to.eq(500)
    })
})
