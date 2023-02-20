let filmeRafa = 'https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg';

let filmePaulo = 'https://br.web.img3.acsta.net/pictures/16/10/19/01/57/552532.jpg';

let filmeGui = 'https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg';

let listaFilmes = ["https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg", "https://br.web.img3.acsta.net/pictures/16/10/19/01/57/552532.jpg", "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg", "p", "https://upload.wikimedia.org/wikipedia/pt/3/38/The_Batman_poster.jpg"];

listaFilmes[3] = 'https://upload.wikimedia.org/wikipedia/pt/3/37/Spider-Man_3.jpg';




for(let i=0; i < listaFilmes.length; i++) {
    document.write('<img src=' + listaFilmes[i] + '>');
}

