import { BasePage } from "./basePage";


export class LoginPage extends BasePage
{
  static get url()
  {
    return "/profile.php#login";
  }

  static get demoUsernameField()
  {
    return cy.get("[aria-describedby='demo_username_label']");
    
  }
  
  static get usernameInput()
  {
    return cy.get("#txt-username");
  }

  static get demoPasswordField()
  {
    return cy.get("[aria-describedby='demo_password_label']");
    
  }
  
  static get passwordInput()
  {
    return cy.get("#txt-password");
  }

  static get login()
  {
    return cy.get("#btn-login")
  }
}