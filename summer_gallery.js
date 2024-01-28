const summer_gallery = document.getElementsByClassName("summer_gallery")
var image_id = 0
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
    } else {
        document.getElementById(id).setAttribute("class", "")
        document.getElementsByClassName("backdrop")[0].style.display = "none"
    }
}