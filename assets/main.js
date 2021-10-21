//crea un input per selezionare la difficolta 
//let level = prompt(`selziona la difficoltà `);

/*
let livello = document.getElementById(`livello`);
let esegui = document.getElementById(`esegui`);
let livello = SelectElement.value;


esegui.addEventListener(`click`, function () {

    let livello = SelectElement.value;
    console.log(livelloSelectElement);
})
*/
const playBtnElement = document.querySelector(`.livelli>button`);
const selectLevelElement = document.getElementById(`level`);






generaGriglia(level)

//genera una griglia con un ciclo
function generaGriglia(level) {
    let numeroCelle;
    // fai decidere la difficolta

    playBtnElement.addEventListener(`click`, function () {


        const level = selectLevelElement.value;

        if (level == `1`) {
            numeroCelle = 100;
        } else if (level == `2`) {
            numeroCelle = 81;
        } else if (level == `3`) {
            numeroCelle = 49;
        }

    })



    console.log(numeroCelle)

    //selezionare un elemento dalla DOM continer

    const container = document.querySelector(`.container`)

    for (let i = 0; i < numeroCelle; i++) {
        //let element = `<divEL class= "grid_cell grid_cell--${i}"> ${i}</divEL>`;
        //  section.insertAdjacentHTML("beforeend", element);



        //crea un elemento DOM da menttere nella grilia (cella)
        const divEl = document.createElement(`div`);



        //aggiungi una classe all'elemento appena creato
        divEl.className = `grid_cell`;
        divEl.innerHTML = `${i}`;

        //appendi l'elemento creato prima al container 
        container.append(divEl);

        //attacca un event listner a ciascun elemento creato nel ciclo
        divEl.addEventListener(`click`, function () {

            this.style.backgroundColor = `green`;


        })

    }
}







//generare dei numeri random da 1 a 16
function numbers_bomb(numbers_bomb) {

    return Math.floor((Math.random() * 6) + 1);

}


console.log(`numbers_bomb`);


//inserirli nella griglia




// fare in modo che cliccando su questi numeri appare una cella di colore rossa 











