const account ={
    nama: "Michelle",
    expenses: [],
}
const addExpenses = function (desc, amnt){
    account.expenses.push({description:desc,
        amount:amnt});
}

const getAccountSummary = function(){
    let totalExpenses = 0;
    account.expenses.forEach(function (el){
        totalExpenses = totalExpenses+el.amount
    });
    return "Total Pengeluaran " + account.nama + " adalah Rp." + totalExpenses
}

addExpenses("Beli Makanan", 15000)
addExpenses("Ongkos",30000)
console.log(getAccountSummary());



