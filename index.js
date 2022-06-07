  var loginbtn = document.getElementById("login");
loginbtn.addEventListener("click", function(){
    
     var loginAria = document.getElementById("login-aria");
    loginAria.style.display = "none";
    
     var trengert = document.getElementById("trenj");
    
     trengert.style.display = "block";
})



//addDpocit

const depositBtn = document.getElementById("addDeposi");
depositBtn.addEventListener("click", function(){
 
    const depositAmount = document.getElementById("depositAmount").value;
    const  depositNumber = parseFloat(depositAmount);
      const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
     const totalDeposit = depositNumber + currentDepositNumber;
    document.getElementById("currentDeposit").innerText = totalDeposit;
 
    
    
    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById("currentBalance").innerText = totalBalance;
    
   document.getElementById("depositAmount").value = "";
    
    })



//withdraw button handelar

const withdrawBtn = document.getElementById("addwithdraw");
withdrawBtn.addEventListener("click", function(){
    
   const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawNumber = parseFloat(withdrawAmount);
    
    const currentwithdra = document.getElementById("currentwitdraw").innerText;
    const currentwithdraNumber = parseFloat(currentwithdra);
    
    
    const totalwithdraw = withdrawNumber + currentwithdraNumber;
    
    document.getElementById("currentwitdraw").innerText = totalwithdraw;
    
//    ========
    
    
    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = withdrawNumber - currentBalanceNumber;
    document.getElementById("currentBalance").innerText = -1 * totalBalance;
    
    document.getElementById("withdrawAmount").value = "";

})
