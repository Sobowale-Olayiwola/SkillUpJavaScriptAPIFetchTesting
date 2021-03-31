const baseUrl = 'http://universities.hipolabs.com/search?country=United+States'
const mainContent = document.querySelector('body');
let html = '';

// async function universityProfile(){
//     const university = fetch(baseUrl);
//    console.log(university);
//     const universityDetails = await university;
//     console.log(universityDetails);
//     const universityProperties = await universityDetails.json()
//     console.log(universityProperties)

// }
// universityProfile()
const universities = fetch(baseUrl);
function wrapper( promiseObject ){
    console.log( promiseObject );
    // promiseObject.then( value => value.json() )
    promiseObject.then( value => value.json() ) 
    .then(value => {
        console.log( value );
        for( index = 0; index <= 5; index += index ) {
            let htmlSegment = `<div class="user">
            <h2> ${value[index].name}</h2>
            <h2> Domain: ${value[index].domains[0]}</h2>
            <a> WebPage: ${value[index].web_pages[0]} </a>
            </div>
            `;
            html += htmlSegment;
            let container = document.querySelector('.container');
    container.innerHTML = html;
        }
    } )
    .catch( error => error.message);

    
}
wrapper(universities);
