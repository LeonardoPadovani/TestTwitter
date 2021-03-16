/// <reference types="cypress"/>

class HomePage{

    static ValidarTituloHome(titulo){
        cy.title().should('eq', titulo)

    }

    static clicarBotaoAccounts(){
        cy.get('div[data-testid="SideNav_AccountSwitcher_Button"]').click()
          
    }

    static clicarBotaoLogOut(){
        cy.get('a[href="/logout"]').click()
  
    }

    static confirmarLogOut(){
        cy.xpath('//div[@data-testid="confirmationSheetConfirm"]').click()
        
    }

    

  


}

export default HomePage

