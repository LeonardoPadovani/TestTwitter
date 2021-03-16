/// <reference types="cypress"/>

import LoginPage from "../../support/pages/loginPage"
import HomePage from "../../support/pages/homePage"
 


describe('Deve validar rotina de login', () => {
    beforeEach(function(){
        LoginPage.acessarLogin()
    })

    afterEach(function(){
        LoginPage.limparStorage()
    })


    it('Deve autenticar com sucesso',() =>{
        cy.fixture('loginData').then(login => {
        LoginPage.preencherEmail(login.email)
        LoginPage.preencherSenha(login.senha)
        HomePage.ValidarTituloHome('Home / Twitter')
        HomePage.clicarBotaoAccounts()
        HomePage.clicarBotaoLogOut()
        HomePage.confirmarLogOut()
    })})

    it('Não deve autenticar - Usuario não cadastrado ',() =>{
        cy.fixture('loginData').then(login => {
        LoginPage.preencherEmail(login.emailInvalido)
        LoginPage.preencherSenha(login.senha)
        LoginPage.validarMensagemAlertLoginInvalido(login.msgemLoginInvalido)
    })})

    it('Não deve autenticar - senha incorreta',() =>{
        cy.fixture('loginData').then(login => {
        LoginPage.preencherEmail(login.email)
        LoginPage.preencherSenha(login.senhaInvalida)
        LoginPage.validarMensagemAlertLoginInvalido(login.msgemLoginInvalido)
    })})

    it('Não deve autenticar - Email não preenchido ',() =>{
        cy.fixture('loginData').then(login => {
        LoginPage.preencherSenha(login.senha)
        LoginPage.validarBotaoEntrarDesabilitado()
    })})

    it('Não deve autenticar - Senha não preenchida ',() =>{
        cy.fixture('loginData').then(login => {
        LoginPage.preencherEmail(login.email)
        LoginPage.validarBotaoEntrarDesabilitado()
    })})

 

})

