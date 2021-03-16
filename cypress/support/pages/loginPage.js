/// <reference types="cypress"/>


class LoginPage{

    static acessarLogin(){
        cy.visit('https://twitter.com/login/')
    }

    static limparStorage(){
        //cy.clearLocalStorage()
    }


    static preencherEmail(email){
        cy.xpath('//input[@name="session[username_or_email]" and @type="text"]').type(email)
      
    }

    static preencherSenha(senha){
        cy.get('input[type="password"]').type(senha + '{enter}')

    }

    static clicarBotaoEntrar(){
        cy.get('span').contains('Entrar').click
  
    }

    static validarBotaoEntrarDesabilitado(){
        cy.get('div[role="button"]').should('have.attr', 'disabled')
       
    }

    static validarMensagemAlertLoginInvalido(mensagem){
        cy.get('div[dir="auto"]').should('contain',mensagem)

    }

 

}

export default LoginPage