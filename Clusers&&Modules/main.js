
const StringFormatter = function () {
    const capitalizeFirst = (s) => {
        console.log(s.charAt(0).toUpperCase() + s.slice(1));

    }
    const skewerCase = (str) => {
        console.log(str.split(' ').join('-'));
    }
    return { capitalizeFirst: capitalizeFirst, skewerCase: skewerCase }

}

const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box") //should print blue-box


const Bank = () => {
    let startAccount = 500;
    const deposit = (num) => {
        startAccount += num;
    }

    const showBalance = () => {
        console.log(startAccount);

    }

    return {
        deposit,
        showBalance
    }
}



const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() 