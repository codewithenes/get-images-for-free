const form = document.querySelector('#form')
const formWrapper = document.querySelector('.form-wrapper')
const buttonWrapper = document.querySelector('.button-wrapper')
const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById('searchButton')
const clearButton = document.getElementById('clearButton')
const imageListWrapper = document.querySelector('.image-wrapper')

runEventListener();

function runEventListener(){
    form.addEventListener("submit", search)
    clearButton.addEventListener("click", clear)
}
function clear(e){
    imageListWrapper.innerHTML ="";
   div = document.createElement("div");
    div.className = "card mx-auto grid grid-cols-3 gap-3 max-w-[780px] justify-center";
    imageListWrapper.appendChild(div);
    e.preventDefault();

    //alttaki kod üstteki ile aynı işleve sahip
    // Array.from(imageListWrapper.children).forEach((child)=>child.remove())

}
function search(e){
    if(searchInput.value.trim() === ""){
        alert("Invalid Search!")
        return;
    }
    else{
    div.innerHTML = "";

    
    const value = searchInput.value.trim()
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method : "GET",
        headers : {
            Authorization : "Client-ID nK0bVsdonsXxxZjC1olK6J2_fchL2EWpy5ymp5yg3Xo"
        }

    })
    .then((res) => res.json())
    .then((data) => data.results)
    .then((data)=>{
        Array.from(data).forEach((image) => {
    //console.log(image.urls.small);
        addImagetoUI(image.urls.small)});
    })
    .catch((err)=> console.log(err))
    e.preventDefault()
        searchInput.value = ""
        

}
}




let div = document.createElement("div");
div.className = "card mx-auto grid grid-cols-3 gap-3 max-w-[780px] justify-center";
imageListWrapper.appendChild(div);

function addImagetoUI(url) {
  const img = document.createElement("img");
  img.setAttribute("src", url);
  img.className = "w-[250px] h-[250px] rounded-lg object-cover";

  div.appendChild(img);
}
