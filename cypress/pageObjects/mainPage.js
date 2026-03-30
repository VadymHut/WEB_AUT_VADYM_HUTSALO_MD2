import { BasePage } from "./basePage";


export class MainPage extends BasePage
{
  static get url()
  {
    return "/";
  }

  static get makeAppointment()
  {
    return cy.get("#btn-make-appointment")
  }
}