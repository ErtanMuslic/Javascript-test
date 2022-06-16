const getQuotes = async (name) => {
    try {

        const response = await fetch(`https://api.imgflip.com/get_memes`);
        const result = await response.json();
        console.log(result.data.memes);
        return result.data.memes;

    } catch (error) {
        console.log(error);
    }
};

let memes = getQuotes();


const contentDiv = document.getElementById("content");

const createCard = (name, url) => {
    return `<div style="width: 500px; min-height: 100px; border: 1px solid black; margin: 10px; padding: 20px;">
        <h1 style="text-align: center;">${name} </h1>
        <img style="width: 100%;" src="${url}" alt="">
    </div>`
}


getQuotes().then((result) => {
    result.forEach(element => {
        console.log(element);
        contentDiv.innerHTML = contentDiv.innerHTML + createCard(element.name, element.url);
    });
});