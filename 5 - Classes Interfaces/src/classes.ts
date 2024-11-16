// class Department {
//   // private id: string;
//   // private name: string;
//   // private employees: string[] = [];
//   static fiscalYear = 2020;
//   protected employees: string[] = [];
//   constructor(protected readonly id: string, private name: string) {
//     // this.name = n;
//     // console.log(this.fiscalYear);//error
//     // console.log(Department.fiscalYear);
//   }
//   descripe(this: Department) {
//     // console.log("Department :" + this.name);
//     console.log(`Department (${this.id}): ${this.name}`);
//   }
//   static createEmployee(name: string) {
//     return { name: name };
//   }
//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }
//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }
// // const accounting = new Department("d1", "accounting");
// // console.log(accounting);
// // accounting.descripe();
// // accounting.addEmployee("Max");
// // accounting.addEmployee("Mue");
// //i wan't this not happen not add employee with this way use method addEmployee only so make it with privete
// // accounting.employees[2] = "Amgad";
// // accounting.printEmployeeInformation();
// // const accountingCopy = { descripe: accounting.descripe };
// // accountingCopy.descripe();
// // const accountingCopy = { name: "Dummy", descripe: accounting.descripe };
// // accountingCopy.descripe();
// //Static methods and properties
// // const employee1 = Department.createEmployee("Amgad");
// // console.log(employee1, Department.fiscalYear);
// class ITDepartment extends Department {
//   public admins: string[];
//   constructor(id: string, admins: string[]) {
//     super(id, "IT");
//     this.admins = admins;
//   }
// }
// const it = new ITDepartment("d2", ["Max"]);
// console.log(it);
// it.descripe();
// it.addEmployee("Max");
// it.addEmployee("Mue");
// it.printEmployeeInformation();
// class AccountingDepartment extends Department {
//   private lastReport: string;
//   get mostRecentReport() {
//     if (this.lastReport) {
//       return this.lastReport;
//     }
//     throw new Error("No Report Found .....");
//   }
//   set mostRecentReport(value: string) {
//     if (!value) {
//       throw new Error("please pass in valid value! ");
//     }
//     this.addReports(value);
//   }
//   constructor(id: string, private reports: string[]) {
//     super(id, "Accounting");
//     this.lastReport = reports[0];
//   }
//   addEmployee(employee: string): void {
//     if (employee === "Max") {
//       return;
//     }
//     this.employees.push(employee);
//   }
//   descripe() {
//     console.log("Accounting Department -ID" + this.id);
//   }
//   addReports(text: string) {
//     this.reports.push(text);
//     this.lastReport = text;
//   }
//   printReports() {
//     console.log(this.reports);
//   }
// }
// const accounting = new AccountingDepartment("d3", []);
// // console.log(accounting.mostRecentReport);
// accounting.mostRecentReport = "Year end report";
// accounting.addReports("something went wrong....");
// console.log(accounting.mostRecentReport);
// accounting.printReports();
// accounting.addEmployee("Max");
// accounting.addEmployee("Amgad");
// accounting.descripe();
// console.log(accounting);
// abstract class Department {
//   // private id: string;
//   // private name: string;
//   // private employees: string[] = [];
//   static fiscalYear = 2020;
//   protected employees: string[] = [];
//   constructor(protected readonly id: string, private name: string) {
//     // this.name = n;
//     // console.log(this.fiscalYear);//error
//     // console.log(Department.fiscalYear);
//   }
//   abstract descripe(): void;
//   static createEmployee(name: string) {
//     return { name: name };
//   }
//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }
//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }
// class ITDepartment extends Department {
//   descripe(): void {
//     console.log("IT Department -ID" + this.id);
//   }
//   public admins: string[];
//   constructor(id: string, admins: string[]) {
//     super(id, "IT");
//     this.admins = admins;
//   }
// }
// const it = new ITDepartment("d2", ["Max"]);
// console.log(it);
// it.descripe();
// it.addEmployee("Max");
// it.addEmployee("Mue");
// it.printEmployeeInformation();
// class AccountingDepartment extends Department {
//   private lastReport: string;
//   private static instance: AccountingDepartment;
//   get mostRecentReport() {
//     if (this.lastReport) {
//       return this.lastReport;
//     }
//     throw new Error("No Report Found .....");
//   }
//   set mostRecentReport(value: string) {
//     if (!value) {
//       throw new Error("please pass in valid value! ");
//     }
//     this.addReports(value);
//   }
//   private constructor(id: string, private reports: string[]) {
//     super(id, "Accounting");
//     this.lastReport = reports[0];
//   }
//   static getInstance() {
//     if (this.instance) {
//       return this.instance;
//     }
//     this.instance = new AccountingDepartment("d2", []);
//     return this.instance;
//   }
//   addEmployee(employee: string): void {
//     if (employee === "Max") {
//       return;
//     }
//     this.employees.push(employee);
//   }
//   descripe() {
//     console.log("Accounting Department -ID" + this.id);
//   }
//   addReports(text: string) {
//     this.reports.push(text);
//     this.lastReport = text;
//   }
//   printReports() {
//     console.log(this.reports);
//   }
// }
// // const accounting = new AccountingDepartment("d3", [])
// const accounting = AccountingDepartment.getInstance();
// const accounting2 = AccountingDepartment.getInstance();
// // console.log(accounting.mostRecentReport);
// accounting.mostRecentReport = "Year end report";
// accounting.addReports("something went wrong....");
// console.log(accounting.mostRecentReport);
// accounting.printReports();
// accounting.addEmployee("Max");
// accounting.addEmployee("Amgad");
// accounting.descripe();
// console.log(accounting);
