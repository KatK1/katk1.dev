async function fetchJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network Failure");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching JSON:", error);
    }
}
  
function createCards(jsonData) {
    const container = document.getElementById("projects");
    
    jsonData.forEach(data => {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col");
        
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card", "h-100");
        
        const cardBodyDiv = document.createElement("div");
        cardBodyDiv.classList.add("card-body");
        
        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = data.title;

        const badge = document.createElement("span");
        badge.classList.add("badge");
        if (data.badge == "Current") {
            badge.classList.add("text-bg-success")
        } else if (data.badge == "Outdated") {
            badge.classList.add("text-bg-secondary")
        }
        badge.textContent = data.badge;
        
        const desc = document.createElement("p");
        desc.classList.add("card-text");
        desc.textContent = data.desc;
        
        const date = document.createElement("p");
        date.classList.add("card-text");
        date.textContent = data.date;

        const link = document.createElement("a");
        link.classList.add("btn");
        link.classList.add("btn-primary");
        link.setAttribute("href", data.link);
        link.textContent = "More Info";
        
        cardBodyDiv.appendChild(title);
        cardBodyDiv.appendChild(badge);
        cardBodyDiv.appendChild(desc);
        cardBodyDiv.appendChild(date);
        cardBodyDiv.appendChild(link);
        
        cardDiv.appendChild(cardBodyDiv);
        colDiv.appendChild(cardDiv);
        container.appendChild(colDiv);
    });
}

fetchJSON("../json/projectlist.json")
    .then(jsonData => createCards(jsonData))
    .catch(error => console.error("Error fetching JSON:", error));