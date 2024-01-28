const summer_gallery = document.getElementsByClassName("summer_gallery")
var current_image = ""
document.getElementsByClassName("backdrop")[0].style.display = "none"

for(i = 0; i < summer_gallery.length; i++) {
    pictures = summer_gallery[i].getElementsByTagName("img")
    for(j = 0; j < pictures.length; j++) {
        pictures[j].setAttribute("id", "pic_"+i+"_"+j)
        pictures[j].setAttribute("alt", "pic_"+i+"_"+j)
        pictures[j].setAttribute("onclick", "show_image('pic_"+i+"_"+j+"')")
    }
}

function show_image(id) {
    if(document.getElementById(id).className != "active") {
        document.getElementById(id).setAttribute("class", "active")
        document.getElementsByClassName("backdrop")[0].style.display = "block"
        current_image = id
    } else {
        document.getElementById(id).setAttribute("class", "")
        document.getElementsByClassName("backdrop")[0].style.display = "none"
        current_image = ""
    }
}

document.addEventListener('keydown', (e) => {
    console.log(e.key)
    if(current_image != undefined) {
        if(e.key === "ArrowLeft") {
            document.getElementById(current_image).setAttribute("class", "")
            document.getElementsByClassName("backdrop")[0].style.display = "none"
            _id = current_image.split("_")
            show_image("pic_"+_id[1]+"_"+(parseInt(_id[2])-1))
        }
        if(e.key === "ArrowRight") {
            document.getElementById(current_image).setAttribute("class", "")
            document.getElementsByClassName("backdrop")[0].style.display = "none"
            _id = current_image.split("_")
            show_image("pic_"+_id[1]+"_"+(parseInt(_id[2])+1))
        }
    }
})