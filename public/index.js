const btnCatalogo = document.querySelector("#btnCatalogo");
// const btnMayor = document.querySelector("#btnMayor")
const btnDetail = document.querySelector("#btnDetail");

const numero = "573163934994";
function openCatalogo(e) {
  window.open(
    "https://drive.google.com/drive/folders/1mbullnewRXp5BnHf8FCAgIXSiJ--wqmu?usp=sharing",
    "_blank"
  );
}

function messageMayorWhatsApp(e) {
  // console.log("Sending Message");
  const message = "Hola, quiero una asesoría mayorista";
  const url = "https://wa.me/" + numero + "/?text=" + encodeURI(message);
  console.log(encodeURIComponent(url));
  window.open(url, "_blank");
}

function messageDetailWhatsApp(e) {
  // console.log("Sending Message");
  const message = "Hola, requiero información sobre los productos .";
  const url = "https://wa.me/" + numero + "/?text=" + encodeURI(message);
  // console.log(encodeURIComponent(url));
  window.open(url, "_blank");
}

btnCatalogo.addEventListener("click", openCatalogo);
// btnMayor.addEventListener("click", messageMayorWhatsApp)
btnDetail.addEventListener("click", messageDetailWhatsApp);
