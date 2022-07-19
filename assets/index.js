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
}