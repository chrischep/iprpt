const div = document.querySelector('.dataContainer'),
shedA = document.getElementById('shedA'),
shedB = document.getElementById('shedB'),
shedC  = document.getElementById('shedC'),
shedD = document.getElementById('shedD')

function generateData(){
    //calculate total milk in ltrs
    document.getElementById('data').className = ''
    let totalMilkInLitres = parseInt(shedA.value) + parseInt(shedB.value) + parseInt(shedC.value) + parseInt(shedD.value)
    console.log(totalMilkInLitres)
    //create elements for displaying data
    const p1 = document.createElement('p'),
    p2 = document.createElement('p'),
    p3 = document.createElement('p'),
    p4 = document.createElement('p'),
    p5 = document.createElement('p')
    p5.className = 'bolder'

    //Display daily milk production in litres
    p1.textContent = `The daily total milk production pin shed A is ${shedA.value} litres`
    p2.textContent = `The daily total milk production in shed B is ${shedB.value} litres`
    p3.textContent = `The daily total milk production in shed C is ${shedC.value} litres`
    p4.textContent = `The daily total milk production in shed D is ${shedD.value} litres`
    p5.textContent = `The total milk produced per day is ${totalMilkInLitres} litres`
    
    //insert the elements to the div container
    document.getElementById('dataContainer').append(p1,p2,p3,p4,p5)

    //Calculate the daily price
    calculateDailyWeeklyIncome(totalMilkInLitres)
    calculateMonthlyIncome(totalMilkInLitres)
    calculateYearlyIncome(totalMilkInLitres)

}
function calculateDailyWeeklyIncome(litres){
        //Create p element for displaying earnings
        const daily = document.createElement('p'),
        weekly = document.createElement('p')
        h3 = document.createElement('h3')
        h3.textContent=("Daily and Weekly Income")
    
        //Displaying daily incomes
        daily.textContent = `The total income per day is ${litres*45} Kenyan Shillings`
        daily.className = 'daily'
    
        //Displayinf weekly incomes
        weekly.textContent = `The total weekly income is ${litres*45*7} Kenyan Shillings`
        daily.className = 'daily'
    
        //Append the elements to the div container
        document.getElementById('dataContainer').append(h3,daily, weekly)
}
function calculateMonthlyIncome(litres){
    //create elements for displaying monthly incomes
    const jan = document.createElement('p'),
    feb = document.createElement('p'),
    mar = document.createElement('p'),
    apr = document.createElement('p'),
    may = document.createElement('p'),
    jun = document.createElement('p'),
    jul = document.createElement('p'),
    aug = document.createElement('p'),
    sep = document.createElement('p'),
    oct = document.createElement('p'),
    nov = document.createElement('p'),
    dec = document.createElement('p'),
    h3 = document.createElement('h3')
    h3.textContent=("Monthly Income")


    jan.textContent = `The total January income per month is ${litres*31} Kenyan Shillings`
    feb.textContent = `The total February income per month is ${litres*29} Kenyan Shillings`
    mar.textContent = `The total March income per month is ${litres*31} Kenyan Shillings`
    apr.textContent = `The total April income per month is ${litres*30} Kenyan Shillings`
    may.textContent = `The total May income per month is ${litres*31} Kenyan Shillings`
    jun.textContent = `The total June income per month is ${litres*30} Kenyan Shillings`
    jul.textContent = `The total July income per month is ${litres*31} Kenyan Shillings`
    aug.textContent = `The total August income per month is ${litres*31} Kenyan Shillings`
    sep.textContent = `The total September income per month is ${litres*30} Kenyan Shillings`
    oct.textContent = `The total October income per month is ${litres*31} Kenyan Shillings`
    nov.textContent = `The total November income per month is ${litres*30} Kenyan Shillings`
    dec.textContent = `The total December income per month is ${litres*31} Kenyan Shillings`


    document.getElementById('dataContainer').append(h3, jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec)

}