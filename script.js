let maket, text;

ajoutTaskBtn.onclick = ajouterTask;
ajoutTextTask.oninput = changeSize;
typeTask.onchange = renderTask;

function ajouterTask() {
   if(ajoutTextTask.value.trim() !== "") {
      text = ajoutTextTask.value;
      maket = ghost.cloneNode(true);
      remplirEvent(maket);
      maket.removeAttribute("id");
      maket.removeAttribute("hidden");
      maket.setAttribute("place", "act");
      maket.querySelector(".textTask").textContent = text;
      maket.querySelector(".textTask").setAttribute("rows", maket.querySelector(".textTask").value.length  / 32 + 1);
      maket.querySelector(".textTask").oninput = changeSize;
      displayTask.appendChild(maket);
      renderTask();
   }
}

function remplirEvent(elem) {
   elem.querySelector(".btnBon").onclick = replaceBon;
   elem.querySelector(".btnEdit").onclick = editText;
   elem.querySelector(".btnSup").onclick = replaceSup;
   elem.querySelector(".btnAct").onclick = replaceAct;
}

function replaceBon() {
   this.parentNode.parentNode.setAttribute("place", "bon");
   renderTask();
   changeBorderColorAndBtn(this);
   this.parentNode.parentNode.setAttribute("edit", "nope");
   this.parentNode.parentNode.querySelector(".textTask").setAttribute("readonly", "");
}

function replaceSup() {
   this.parentNode.parentNode.setAttribute("place", "ret");
   renderTask();
   changeBorderColorAndBtn(this);
   this.parentNode.parentNode.setAttribute("edit", "nope");
   this.parentNode.parentNode.querySelector(".textTask").setAttribute("readonly", "");
}

function replaceAct() {
   this.parentNode.parentNode.setAttribute("place", "act");
   renderTask();
   changeBorderColorAndBtn(this);
   this.parentNode.parentNode.setAttribute("edit", "nope");
   this.parentNode.parentNode.querySelector(".textTask").setAttribute("readonly", "");
}

function editText() {
   switch(this.parentNode.parentNode.getAttribute("edit")) {
      case "nope":
         console.log(this.parentNode.querySelector(".btnAct").hasAttribute("hidden"));
         if(true) {
            this.parentNode.parentNode.setAttribute("edit", "yeap");
            this.parentNode.parentNode.querySelector(".textTask").removeAttribute("readonly");
            this.parentNode.parentNode.style.borderColor = "#fff";
         }
         break;
      case "yeap":
         changeBorderColorAndBtn(this);
         this.parentNode.parentNode.setAttribute("edit", "nope");
         this.parentNode.parentNode.querySelector(".textTask").setAttribute("readonly", "");
         break;
   }
}

function renderTask() {
   switch(typeTask.value) {
      case "act":
         for(let element of document.getElementsByClassName("task")) {
            if(element.getAttribute("place") === "act")
               element.removeAttribute("hidden");
            else
               element.setAttribute("hidden", "");
         }
         break;
      case "ret":
         for(let element of document.getElementsByClassName("task")) {
            if(element.getAttribute("place") === "ret")
               element.removeAttribute("hidden");
            else
               element.setAttribute("hidden", "");
         }
         break;
      case "bon":
         for(let element of document.getElementsByClassName("task")) {
            if(element.getAttribute("place") === "bon")
               element.removeAttribute("hidden");
            else
               element.setAttribute("hidden", "");
         }
         break;
   }
}
function changeSize() {
   this.setAttribute("rows", Math.trunc((this.value.length / 32 + 1)));
}

function changeBorderColorAndBtn(element) {
   switch(element.parentNode.parentNode.getAttribute("place")) {
      case "bon":
         element.parentNode.parentNode.style.borderColor = "#22d501";
         element.setAttribute("hidden", "");
         element.parentNode.querySelector(".btnAct").removeAttribute("hidden");
         element.parentNode.querySelector(".btnSup").removeAttribute("hidden");

         break;
      case "ret":
         element.parentNode.parentNode.style.borderColor = "#ababab";
         element.setAttribute("hidden", "");
         element.parentNode.querySelector(".btnAct").removeAttribute("hidden");
         element.parentNode.querySelector(".btnBon").removeAttribute("hidden");
         break;
      case "act":
         element.parentNode.parentNode.style.borderColor = "#0c3ce1";
         element.setAttribute("hidden", "");
         element.parentNode.querySelector(".btnBon").removeAttribute("hidden");
         element.parentNode.querySelector(".btnSup").removeAttribute("hidden");
         break;
   }
}