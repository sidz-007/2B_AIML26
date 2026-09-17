class BankAccount{
    constructor(accountno, holdername, balance, ifsccode){
        this.AccountNumber = accountno;
        this.HolderName = holdername;
        this.Balance = balance;
        this.IFSCCode = ifsccode;
    }
    depoit(amount){
       console.log("Deposited: ", amount);
       this.Balance += amount;
               console.log("Current Balance: ", this.Balance);
    }
    withdraw(amount){
        if(amount <= this.Balance){
            console.log("Withdrawn: ", amount);
           this.Balance -= amount;
        }else{
            console.log("Insufficient balance.");
        }
                console.log("Current Balance: ", this.Balance);
    }
    displayBalance(){
        // console.log("Current Balance: ", this.Balance);
        console.log("IFSC Code:" + this.IFSCCode);
      console.log("Account Number:" + this.AccountNumber);
      console.log("Holder Name:" + this.HolderName);
    }
    static bankinfo(){

      console.log("Bank Name: ABC Bank");
      console.log("Branch: Main Branch");

    }
}
let account1 = new BankAccount(123456, "Ali", 1000, "ABC123456");
account1.depoit(500);
account1.withdraw(300);
account1.displayBalance();
BankAccount.bankinfo();
let account2 = new BankAccount(789012, "Ahmed", 2000, "XYZ789012");
account2.depoit(1000);
account2.withdraw(500);
account2.displayBalance();
BankAccount.bankinfo();
console.log("Contact: 123-456-7890");