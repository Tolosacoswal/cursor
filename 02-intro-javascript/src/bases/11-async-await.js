const getImagen = async()=> {
    try {
        const apiKey =`GoJQWJtLrNJI4FAIvfslf0m0T0o7V7r9`;
const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
const {data} =await respuesta.json();
const {url} =data.images.original;
const img = document.createElement("img");
img.src = url;
document.body.append(img);
 } catch (error){
    //manejo del error
    console.error(error)
 }


}

getImagen();

//const apiKey = `GoJQWJtLrNJI4FAIvfslf0m0T0o7V7r9`;
//const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
//peticion
//.then (resp => resp.json())
//.then (({data}) =>{
  //     const {url} = data.images.original;
    //   const img = document.createElement("img");
      // img.src = url;
      // document.body.append(img);
//})   

//.catch (console.warn); 
