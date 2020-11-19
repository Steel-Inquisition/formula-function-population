// Population growth by Peter Oh

// HTML Elements
let popEl = document.getElementById('population');
let birthEl = document.getElementById('birth');
let moveInEl = document.getElementById('moveIn');
let deathEl = document.getElementById('death');
let moveOutEl = document.getElementById('moveOut');
let outputEl = document.getElementById('output');
let calcEl = document.getElementById('calc');

// Event Listener
calcEl.addEventListener("click", calcPopulation);

// Event Function
function calcPopulation() {
    //Input
    let population = popEl.value;
    let birth = birthEl.value;
    let moveIn = moveInEl.value;
    let death = deathEl.value;
    let moveOut = moveOutEl.value;

    // Process and Output
    outputEl.innerHTML = populationGrowth(birth, moveIn, death, moveOut, population);
}