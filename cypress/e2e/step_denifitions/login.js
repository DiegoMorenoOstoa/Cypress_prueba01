
import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Abrir la página web de liverpool',()=>{
    cy.viewport('macbook-16')
    cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
})
When('Ir a página de iniciar sesión',()=>{
    cy.get('.order-lg-4 > .a-header__topLink').click({force:true})
})
When('Introducir un email',()=>{
    cy.get('#username').type('diego123@gmail.com')
})
When('Introducir un password',()=>{
    cy.get('#password').type('1234')
})
And('Dar click en iniciar sesión',()=>{
    cy.contains('Iniciar sesión').click({force:true})
})
Then('regresar a menu principal',()=>{
cy.visit('https://www.liverpool.com.mx/tienda/home', { headers: {'accept': 'application/json, text/plain, */*','user-agent': 'axios/0.27.2'}});
})
