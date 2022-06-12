//GET ELEMENTS FROM DOM
const $ = function (id) {
    return document.getElementById(id);
}

function bankAccount(getOwnerName) {
    let balance = 0
    let fname
    return {
        withdrawal: function (withdrawalAmount) {
            balance -= withdrawalAmount
        },
        deposit: function (depositAmount) {
            balance += depositAmount
        },
        getBalance: function () {
            return balance
        },
        getOwnerName: function () {
            return fname
        }
    }
}

const account = new bankAccount()

window.addEventListener('load', () => {
    $('fName').addEventListener('click', () => {
        let fname = prompt("Enter your name")
        $('display').innerHTML = 'Welcome to your account ' + account.getOwnerName(fname)
    })
    account.getOwnerName(name)
    $('deposit').addEventListener('click', () => {
        let deposit = parseInt(prompt("Enter deposit amount"))
        account.deposit(deposit)
        $('display').innerHTML = 'Balance: $' + account.getBalance()
    })
    
    $('withdrawal').addEventListener('click', () => {
        let withdrawal = parseInt(prompt('Enter withdrawal amount'))
        account.withdrawal(withdrawal)
        $('display').innerHTML = 'Balance: $' + account.getBalance()
    })

})