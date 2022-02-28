//Defines employee class
class Employee {
   constructor(name, id, email) {
       this.name = name;
       this.id = id;
       this.email = email;
   } 

 
   //Defines methods
   getName() {
       return this.name;
   }

   getId() {
       return this.id;
   }

   getEmail() {
       return this.email;
   }

   getRole() {
       return 'Employee';
   }
  
}

//Exports info re Employee to be imported by other files
module.exports = Employee;