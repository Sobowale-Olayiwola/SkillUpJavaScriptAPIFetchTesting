const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
let magaritahtmlSyntax = '';
const margaritas = fetch( baseUrl );

function wrapMagaritaPromiseObject( promiseObject ){
    console.log( promiseObject );
    promiseObject.then( value => value.json() ) 
    .then(value => {
        console.log( value );
        console.log( value.drinks[0].strDrink );
        for( index = 0; index <= 5; index++ ) {
            let htmlSegment = `<div class="user">
            <h2> ${value.drinks[index].strDrink} </h2>
            <img src="${value.drinks[index].strDrinkThumb}">
            <h3>List of Ingredients </h3>
            <ul>
                <li>${value.drinks[index].strIngredient1}</li>
                <li>${value.drinks[index].strIngredient2}</li>
                <li>${value.drinks[index].strIngredient3}</li>
                <li>${value.drinks[index].strIngredient4}</li>
            </ul>
            <h3>Preparation of Drink</h3>
            <p>${value.drinks[index].strInstructions}</p>
            </div>`;
            magaritahtmlSyntax += htmlSegment;
            console.log(magaritahtmlSyntax)
            let container = document.querySelector('.container');
            container.innerHTML = magaritahtmlSyntax;
        }
    } )
    .catch( error => error.message); 
}
addEventListener( 'load', wrapMagaritaPromiseObject(margaritas) );