document.getElementById('btn-withdraw').addEventListener('click', function(){
    const depositField = parseInt(document.getElementById('withdraw-field').value);
    const previousWithdraw = parseInt(document.getElementById('withdrawTotal').innerText);
    

    const balanceElement = document.getElementById('totalBalance');
    const balance = parseInt(balanceElement.innerText);
    
    if(depositField < 0){
        alert("Hehe. Negative won't work");
    }
    else if (depositField <= balance){
    withdrawTotal.innerText = previousWithdraw + depositField;
    (document.getElementById('withdraw-field').value) = '';
    balanceElement.innerText =  balance - depositField ;
    }
    else{
        alert("You do not have sufficient balance");
    }
})