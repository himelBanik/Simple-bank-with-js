document.getElementById('deposit-button').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const depositAmount = parseInt(depositField.value);
    

    const depositTotalElement = document.getElementById('depositTotal');
    if(depositAmount < 0){
        alert("Hehe. Negative won't work");
    }
    else{
        const addition = depositAmount + parseInt(depositTotalElement.innerText);
        depositTotalElement.innerText = addition;
        depositField.value = "";
    
        const balanceElement = document.getElementById('totalBalance');
        const balance = balanceElement.innerText;
        const newBalance = depositAmount + parseInt(balance);
        balanceElement.innerText = newBalance;
    }
  
})