import { MainPage } from "../pageObjects/mainPage";
import { LoginPage } from "../pageObjects/loginPage";
import { AppointmentPage } from "../pageObjects/appointmentPage";
import { HistoryPage } from "../pageObjects/historyPage";
import { AppointmentSummaryPage } from "../pageObjects/appointmentSummaryPage";

describe("HW2", () => {
  context("Appointment flows", () =>
    {
    beforeEach(() => {
      MainPage.visit();
    });

    it("Make an Appointment", () => {
      MainPage.makeAppointment.click();

      LoginPage.demoUsernameField.invoke("val").then((username) => {LoginPage.usernameInput.type(username)});
      LoginPage.demoPasswordField.invoke("val").then((password) => {LoginPage.passwordInput.type(password)});
      LoginPage.login.click();

      AppointmentPage.facility.select("Seoul CURA Healthcare Center");
      AppointmentPage.hospitalReadmission.check();
      AppointmentPage.healthcareProgramMedicaid.check();
      AppointmentPage.visitDate.type("30/03/2026");
      AppointmentPage.closeDatepicker();
      AppointmentPage.comment.type("CURA Healthcare Service")
      AppointmentPage.bookAppointment.click();

      AppointmentSummaryPage.facility.should("contain.text", "Seoul CURA Healthcare Center");
      AppointmentSummaryPage.hospitalReadmission.should("contain.text", "Yes");
      AppointmentSummaryPage.program.should("contain.text", "Medicaid");
      AppointmentSummaryPage.visitDate.should("contain.text", "30/03/2026");
      AppointmentSummaryPage.comment.should("contain.text", "CURA Healthcare Service");
    });

    it("Appointment history empty", () => {
      MainPage.makeAppointment.click();

      LoginPage.demoUsernameField.invoke("val").then((username) => {LoginPage.usernameInput.type(username)});
      LoginPage.demoPasswordField.invoke("val").then((password) => {LoginPage.passwordInput.type(password)});
      LoginPage.login.click();

      AppointmentPage.menuIcon.click();
      AppointmentPage.sidebar.should("have.class", "active");
      AppointmentPage.history.click();

      HistoryPage.noAppointment.should("be.visible")
    });

  });
});
