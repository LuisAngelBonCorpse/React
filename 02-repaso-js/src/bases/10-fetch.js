const apiKey = '9009iomkTcRzZmRDxIM8izBXcDcTvSih';

const llamadoHTTP = fetch (`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

/*llamadoHTTP.then(respuesta => {
    console.log(respuesta)
    respuesta.json().then(data =>{
        console.log(data)
    })
})*/ //no es tan legible

llamadoHTTP //promesas en cadena, mas legible
    .then(respuesta => respuesta.json())
    .then(({data}) => {
        const {url} = data.images.original;
        console.log(url);
        
        const img = document.createElement('img');
        img.src = url;

        document.body.append (img);

    })
    .catch(console.warn) 