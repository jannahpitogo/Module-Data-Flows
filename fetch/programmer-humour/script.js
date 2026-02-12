
function logImg(data){
    const body = document.querySelector("body");
    const img = document.createElement("img");
    img.classList = "image-layout";
    img.src = data.img;
    body.appendChild(img);
}



fetch("https://xkcd.now.sh/?comic=latest")
    .then(response => {
        if (!response.ok) throw new Error("Request Failed")
            return response.json();
    })

    .then(data => {
        console.log(data);
        logImg(data);
    })