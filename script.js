var totalCases = 0;

document.querySelector('.button').addEventListener('click', function() {
    
    var newCases = document.querySelector('.input-cases').value;
    console.log(newCases);
    totalCases += Number(newCases);
    document.getElementById('num-new-cases').textContent = newCases;
    document.getElementById('num-total-cases').textContent = totalCases;
});