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
}