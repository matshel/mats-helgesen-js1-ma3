// question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating"; 

const resultsContainer = document.querySelector(".results"); 

async function getGamesProperties() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        // console.log(data);

        const games = data.results;

        resultsContainer.innerHTML = "";

        for (let i = 0; i < games.length; i++) {

            if (i === 8) { 
                break; 
            }

            resultsContainer.innerHTML += `<ul class="result">
            <li>${games[i].name}</li>
            <li>${games[i].rating}</li>
            <li>${games[i].tags.length}</li> 
            </ul>`;
        }
    } catch (error) {
        console.log("An error occurred");
        resultsContainer.innerHTML = displayError("An error occurred when calling the API");
    }

}

getGamesProperties();