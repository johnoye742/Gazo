window.addEventListener("load", (ev) => {
    const dropzones = document.querySelectorAll("#dropzone")
    const here = document.querySelector("._here")
    const imgs = document.getElementById('images')
    const up = document.querySelector("._uploading")
    let highlight = (el) => {
        el.classList.add("dropping")
        here.classList.replace("hidden", "flex")
    } 
    let unhighlight = (el) => {
        el.classList.remove("dropping")
        here.classList.replace("flex", "hidden")
    }
    let allowed = ["image/jpeg", "image/gif", "image/png"]
    dropzones.forEach((dropzone) => {
        dropzone.addEventListener("dragenter", (ev) => {
            ev.stopPropagation()
            ev.preventDefault()
            highlight(dropzone)
        })
        dropzone.addEventListener("dragleave", (ev) => {
            ev.stopPropagation()
            ev.preventDefault()
            unhighlight()
        })
        dropzone.addEventListener("drop", (ev) => {
            ev.stopPropagation()
            ev.preventDefault()
            unhighlight(dropzone)
            let data = ev.dataTransfer
            let files = data.files
            let f = document.getElementById("filenames")
            let allFilesStatus = []
            let count = 0;
            up.classList.replace("hidden", "flex")
            up.innerHTML = "Upload Started";

            for(const file of files) {
                up.innerHTML = "Uploading " + file.name;
                console.log(file.type)
                if(count <= 10) {
                    let fr = new FileReader()
                    fr.readAsDataURL(file)
                    fr.onload = (ev) => {
                        let img = `<img src="${fr.result}" class="h-20 w-20 object-cover"></img>`
                        imgs.innerHTML = imgs.innerHTML + img
                    }
                }
                
                if(allowed.includes(file.type)) {
                    let frm = new FormData()
                    frm.append("file", file)
                    fetch("./utils/upload.php", {
                        method: "POST", 
                        body: frm
                    }).then((response) => {
                        return response.text()
                    })
                    .then((response) => {
                        
                        console.log(response)
                        allFilesStatus.push(response)
                        up.classList.replace("flex", "hidden");
                        if(!allFilesStatus.includes("Error")) {
                            console.log("All Uploads are completed");
                        } else {
                            console.log("Couldn't upload "+ file.name)
                        }
                    })
                } else {
                    up.innerHTML = file.name + " was not uploaded because it is an unsupported format";
                }
                count++
            }

            

            
            
        })
        dropzone.addEventListener("dragend", (e) => {
            e.preventDefault()
            e.stopPropagation()
        })
        let evs = ["dragover", "dragenter", "dragstart", "dragleave", "drop", "dragend"]
        evs.forEach((ev) => {
            dropzone.addEventListener(ev, (e) => {
                e.preventDefault()
                e.stopPropagation()
            })
        })
    }) 

    document.getElementsByClassName("year")[0].innerHTML = new Date().getFullYear()
    
})

window.addEventListener("load", (ev) => {
    if(localStorage.getItem("username").trim != "") {
        document.querySelectorAll("#btn").forEach((element) => {
            element.remove()
        })
        let img = document.createElement("img")
        
    }
})