const account ={
    nama: "Michelle",
    expenses: [],
}
const addExpenses = function (description, amount){
    account.expenses.push({description:description,
        amount:amount});
}

const getAccountSummary = function(){
    let totalExpenses = 0;
    account.expenses.forEach(function (i){
        totalExpenses = totalExpenses + i.amount
    });
    return "Total Pengeluaran " + account.nama + " adalah Rp." + totalExpenses
}

addExpenses("Beli Makanan", 15000)
addExpenses("Ongkos",30000)
console.log(getAccountSummary());


