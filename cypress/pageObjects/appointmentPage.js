import { BasePage } from "./basePage";


export class AppointmentPage extends BasePage
{
  static get url()
  {
    return "/#appointment";
  }

  static get facility()
  {
    return cy.get("#combo_facility");
  }

  static get hospitalReadmission()
  {
    return cy.get("#chk_hospotal_readmission");
  }

  static get healthcareProgramMedicaid()
  {
    return cy.get("#radio_program_medicaid");
  }
  
  static get visitDate()
  {
    return cy.get("#txt_visit_date");
  }

  static get comment()
  {
    return cy.get("#txt_comment");
  }

  static closeDatepicker()
  {
    return cy.get("body").click(0, 0);
  }
  
  static get bookAppointment()
  {
    return cy.get("#btn-book-appointment");
  }
  
  static get sidebar()
  {
    return cy.get("#sidebar-wrapper");
  }

  static get menuIcon()
  {
    return cy.get("i.fa.fa-bars");
  }

  static get history()
  {
    return cy.contains("History");
  }

}