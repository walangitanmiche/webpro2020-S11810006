const account ={
    nama: "Michelle",
    expense: [],

    getAccountSummary : function(description,amount){
        let totalExpenses=0;
        this.expenses.forEach(function(el){
            totalExpenses=totalExpenses+el;
        })
    }
 
}
    
const expense= [
    description,
    amount,
    {
        description: "Beli Makanan",
        amount: "0",
    },
    {
        description: "Ongkos",
        amount: "0",
    }
]
expense.forEach(function(description,amount){
    console.log(description,amount);
});

expense.amount.push(15000,30000)

