const displayCards = document.getElementById("projects"); // pre-defined target to put finished cards

fetch("../json/projectlist.json") // grab .json file with projects
.then(response => response.json()) // parse .json file 
.then(jsonData => { 
    jsonData.forEach(item => { // loop through each item in projectlist.json

        // create div for the card
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("move-in-card");

        // create img with src as the specified path in the json, can be relative or absolute 
        const img = document.createElement("img");
        img.classList.add("card-img");
        img.src = item.img;
        
        // create div for the title element and uses the item's title from json
        const title = document.createElement("div");
        title.classList.add("card-title");
        title.textContent = item.title;
    
        // same as previous, but for the description using the item's desc
        const desc = document.createElement("div");
        desc.classList.add("card-desc");
        desc.textContent = item.desc;

        // also same, but setting date using item's date
        const date = document.createElement("div");
        date.classList.add("card-date");
        date.textContent = item.date;
    
        // create a link using the item's specified link, opening in a new tab
        const link = document.createElement("a");
        link.href = item.link;
        link.classList.add("card-link");
        link.textContent = "More info";
        link.target = "_blank";
    
        // append image, title, description, date, and link elements to this card
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(date);
        card.appendChild(link);

        // append this card and all children to the end of project-cards
        displayCards.appendChild(card); 
    });
})
.catch(error => { // log error if issue with json fetch
    console.error("Error fetching JSON data:", error);
})