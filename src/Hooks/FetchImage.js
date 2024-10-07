// O objetivo é fazer fetch para depois conseguir mostrar essa imagem no componente do evento

const FetchImage = ({imageId}) => {
    fetch("https://pub-8b9cd84f81c646e1b2023d8c508870c1.r2.dev/02e44262-e33c-42d2-bfd0-77f5d0d4d4f1/" + imageId)
        .then((response) => {
            response.blob();})    
        .then((blob) =>  url = URL.createObjectURL(blob))
}

export default FetchImage;