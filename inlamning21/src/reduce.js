let intialState = {
  accountNo: 1001,
  balance: 0,
  destinationAccount : null
  
}


 function rootReducer(state = intialState, action){
   switch (action.type) {
    
     case DEPOSIT:
      let newState = object.assign({}, state);
       newState.amount = action.amount;
       newState.balance = action.balance;
       return newState.balance += newState.amount;
       
     case WITHDRAW:
       let newState = Object.assign({}, state);
        newState.amount = action.amount;
        newState.balance = action.balance;
          return newState.amount -= newState.amount;
       
     case TRANSFER_FUNDS:
       let newState = Object.assign({}, state);
       newState.amount = action.amount;
       newState.destinationAccount = action.destinationAccount;
        return 
        newState.destinationAccount += newState.amount;
  }
   
}