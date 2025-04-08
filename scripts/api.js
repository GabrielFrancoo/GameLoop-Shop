const URL = "https://cors-anywhere.herokuapp.com/https://www.gamereactor.pt/rss/rss.php?texttype=[4,1,2,3,5,9,10,7,8,11]";

const xml = new XMLHttpRequest();

xml.open("GET", URL, true);

xml.onload = () => {
    if (xml.status !== 200) {
        return console.log("Erro ao carregar o feed");
    }

    const response = xml.responseXML;

    const items = response.querySelectorAll("item");
    items.forEach(item => {
        const title = item.querySelector("title").textContent; 
        const link = item.querySelector("link").textContent;
        const description = item.querySelector("description") ? item.querySelector("description").textContent : "Sem descrição"; 

        const limitedDescription = description.length > 400 ? description.substring(0, 400) + "..." : description;

        const formattedDescription = limitedDescription.replace(/<br\s*\/?>/gi, "\n");

        if (formattedDescription.trim() !== "") {
            mostrarNoticias(title, link, formattedDescription);
        }
    });
};

function mostrarNoticias(title, link, description) {
    const newsContainer = document.getElementById('newsContainer'); 
    
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item'); 

    newsItem.innerHTML = `
        <h3><a href="${link}" target="_blank">${title}</a></h3>
        ${description} 
    `;
    
    newsContainer.appendChild(newsItem); 
};

xml.send();
