fetch('https://restcountries.com/v2/all')
.then((data) => data.json())

             .then((whatCameIn) => {
               // console.log(whatCameIn)
                             let data1 = "";

                             whatCameIn.map((values) => {
                                     data1+= `   <div class="card">
                <h1 class="name">${values.name}</h1>
                    <img class="images" src="${values.flag}" alt="flag">
                    <p class="description">${values.population}</p>
                    <p class="capital">${values.capital}</p>
                    <p class="region">${values.region}</p>
            </div> `});
                                 document.getElementById("cards").innerHTML = data1;

                             }).catch((error)=>{ console.log(error)});