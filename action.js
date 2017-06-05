let state = {
  accountNo : 1001,
  balance : 0  
}

function actionDeposit(amount){
  return{
    type : DEPOSIT, 
    amount
    
  }
}

function actionWithdraw(amount){
  return{
    type: WITHDRAW, 
    amount
  }
}

function actionTransferFunds(amount, destinationAccount){
  return{
    type: TRANSFER_FUNDS, 
    amount,
    destinationAccount
  }
}