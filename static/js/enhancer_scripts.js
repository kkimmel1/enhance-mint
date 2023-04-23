    
const amplifyEdgeButton = document.getElementById("amplify_edges");
const blurButton = document.getElementById("blur");
const smoothButton = document.getElementById("smooth");
const increaseColorButton = document.getElementById("increase_color");
const increaseContrastButton = document.getElementById("increase_contrast");
const sharpenButton = document.getElementById("sharpen");
const brightenButton = document.getElementById("brighten");
const darkenButton = document.getElementById("darken");
const autoEnhanceButton = document.getElementById("auto_enhance");

const enhanceButtons = document.querySelectorAll("button");
const imgElement = document.querySelector("img");

enhanceButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const function_name = button.id;

        fetch(`/enhance/${function_name}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            if (!response.ok) {
                console.log(response)
                throw new Error("An error occurred");
            }
            return response.json();
        })
        .then(data => {
            imgElement.src = `data:image/png;base64,${data.imgData}`;
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});
