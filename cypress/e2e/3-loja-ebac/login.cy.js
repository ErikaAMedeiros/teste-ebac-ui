/// <reference types="cypress"/>

describe('Funcionalidade: login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('erika.teste@teste.com.br')
        cy.get('#password').type('Erika.teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, erika.teste (não é erika.teste? Sair)')
    })
})