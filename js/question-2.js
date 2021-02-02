// question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating"; 

const resultsContainer = document.querySelector(".results"); 

async function getProperties() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        const rating = data.results;

        resultsContainer.innerHTML = "";

        for (let i = 0; i < rating.length; i++) {
            console.log(rating[i].name);

            if (i === 7) { 
                break; 
            }

            resultsContainer.innerHTML += `<ul class="result">
            <li>${rating[i].name}</li>
            <li>${rating[i].rating}</li>
            <li>${rating[i].tags.length}</li> 
            </ul>`;
        }
    } catch (error) {
        console.log("An error occurred");
        resultsContainer.innerHTML = displayError("An error occurred when calling the API");
    }

}

getProperties();