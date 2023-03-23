window.addEventListener("load", () => {
    const img = document.getElementById("lg-img")
    const main = document.getElementById("main")
    img.offsetHeight = main.offsetHeight
    console.log(img.offsetHeight, main.offsetHeight)
})

window.addEventListener("resize", () => {
    const img = document.getElementById("lg-img")
    const main = document.getElementById("main")
    img.offsetHeight = main.offsetHeight
})

window.addEventListener("load", () => {
    const form = document.getElementById("sign-up")
    

    form.addEventListener("submit", async (ev) => {
        
        ev.preventDefault()
        const frm = new FormData(form);
        const allInputs = form.getElementsByTagName("input")
        

        await fetch("./utils/sign-up.php", {
            method: "POST",
            body: frm
        })
        .then((response) => response.text())
        .then((response) => {
            if(response == "success") {
                Swal.fire({
                    title: "Signed up!",
                    text: "You've been successfully signed up, you will now be redirected to the login page.",
                    icon: "success"
                }).then((result) => {
                    if(result.value) {
                        location.href = "./login.html"
                    }
                })
            } else {
                Swal.fire({
                    title: "Error",
                    text: response,
                    icon: "error"
                })
                allInputs.forEach((el) => {
                    el.value = ""
                })
            }
        })
    })
})

let validateA = (input) => {

}

let validateP = (pwd) => {
    
}