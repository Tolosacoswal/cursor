const apiKey = `GoJQWJtLrNJI4FAIvfslf0m0T0o7V7r9`;
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
peticion
.then (resp => resp.json())
.then (({data}) =>{
       const {url} = data.images.original;
       const img = document.createElement("img");
       img.src = url;
       document.body.append(img);
})   

.catch (console.warn);  