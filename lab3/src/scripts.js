export function toaster(type) {
    const toast = new Toast(type, document.getElementById("input").value);
    toast.showToast();
  }

class Toast{
  constructor(type, message){
    this.type = type;
    this.message = message;
  }

  showToast() {
    let toast = document.createElement("div");
    let biggerToast = document.createElement("div");
    let title = document.createElement("p");
    let text = document.createElement("p");
    let img = document.createElement("img");
    
    if(this.type === "Warning"){
      img.src = ""
    } else if(this.type === "Success"){
      img.src = ""
    } else if(this.type === "Info"){
      img.src = ""
    }

    title.innerHTML = this.type;
    text.innerHTML = this.message;
    toast.className = "toast";
    biggerToast.className = "biggerToast";

    biggerToast.appendChild(toast);
    toast.appendChild(img);
    toast.appendChild(title);
    toast.appendChild(text);

    biggerToast.onclick = function(){ 
      biggerToast.remove();
     };

    document.getElementById("plate").appendChild(biggerToast);
  }
}