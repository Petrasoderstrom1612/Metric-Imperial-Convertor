/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


document.getElementById("convert-btn").addEventListener("click", function(){
    variablesForEachGroup("length-conversion","meters", "feet", 3.281)
    variablesForEachGroup("volume-conversion","liters","gallons", 0.264)
    variablesForEachGroup("mass-conversion","kilos","pounds", 2.204)
})

function variablesForEachGroup(dom, metricUnit, imperialUnit, rate){
    let inputValue = Number(document.getElementById("input").value)
    document.getElementById(dom).innerText = `${inputValue} ${metricUnit}  = ${(inputValue*rate).toFixed(2)} ${imperialUnit} | ${inputValue} ${imperialUnit} = ${(inputValue/rate).toFixed(2)} ${metricUnit}`
}