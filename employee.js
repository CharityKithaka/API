function Employee (designation, payslips=[]){
  this.designation = designation;
  this.payslips = payslips;
}

Employee.prototype.getDesignation = function(){
  return this.designation;
};

module.exports = {
  Employee
};
