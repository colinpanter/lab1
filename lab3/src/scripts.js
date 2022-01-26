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
    let title = document.createElement("h1");
    let text = document.createElement("p");
    let img = document.createElement("img");
    
    if(this.type === "Warning"){
      img.src = ""
    } else if(this.type === "Success"){
      img.src = ""
    } else if(this.type === "Info"){
      img.src = ""
    }

    toast.className = "toast";
    title.innerHTML = this.type;
    title.className = "unselectable"
    text.innerHTML = this.message;
    text.className = "unselectable"

    // toast.appendChild(img);
    toast.appendChild(title);
    toast.appendChild(text);

    toast.onclick = function(){ 
      toast.remove();
     };

    document.getElementById("plate").appendChild(toast);
  }
}