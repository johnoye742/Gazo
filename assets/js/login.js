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

window.addEventListener("load", (ev) => {
    const form = document.getElementById("login-form")
    
    form.addEventListener("submit", async (ev) => {
        ev.preventDefault()
        let frm = new FormData(form)
        const allInputs = form.getElementsByTagName("input")
        await fetch("./utils/login.php", {
            method: "POST",
            body: frm
        })
        .then((res) => res.text())
        .then((response) => {
            if(response == "success") {
                location.href = "./index.html";
                localStorage.setItem("username", frm.get("uern"))
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Your credentials do not match our records",
                    icon: "error"
                })
                
            }
        })
    })
})