/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convNumber = document.getElementById('convert-val')
const convertBtn = document.getElementById('convert-btn')

const lengthP = document.getElementById('length-p')
const volumeP = document.getElementById('volume-p')
const massP = document.getElementById('mass-p')

convertBtn.addEventListener('click', function() {
    let val = Number(convNumber.value)
    lengthP.textContent = `${val} meters = ${(val * 3.281).toFixed(3)} feets | ${val} feets = ${(val / 3.281).toFixed(3)} meters`
    
    volumeP.textContent = `${val} litres = ${(val * 0.264).toFixed(3)} gallons | ${val} gallons = ${(val / 0.264).toFixed(3)} litres`
    
    massP.textContent = `${val} kilos = ${(val * 2.204).toFixed(3)} pounds | ${val} pounds = ${(val / 2.204).toFixed(3)} kilos`
})