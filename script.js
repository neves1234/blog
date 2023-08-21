async function getPost() {
    const resposta = await fetch("https://api-rest-post-diegocandido.herokuapp.com/postagens/")
    const data = await resposta.json()
    mostraPost(data)
}

function mostraPost(data) {
    data.forEach(data => {
        let img = 'https://api-rest-post-diegocandido.herokuapp.com' + data.thumbImage;
        const postHTML = `
        <div class="container text dark mt-5 border border-dark p-0 noticia">
            <img src="${img}" alt="${data.thumbImageAltText}" class="imagemn">
            <h5 class="noticia">${data.title}</h5>
            <p>${data.description}</p>  
        </div>`;
        console.log(postHTML);

        let div = document.createElement('div');
        div.innerHTML = postHTML;
        document.querySelector('#noticias').appendChild(div);
    });
}



getPost()