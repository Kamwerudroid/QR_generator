const inputEl = document.getElementById("input-value");
const sizesEl = document.getElementById("size");
const qrOutEl = document.getElementById("qrCodeScreen");
const button = document.querySelector(".btn-generator");
const downloadBtn = document.querySelector(".btn-save");

const ErrorEl = document.querySelector(".msg");

let Url;
let size;

// generator qr code function
const generateQrCode = function (e) {
  e.preventDefault();

  Url = document.getElementById("input-value").value;
  size = document.getElementById("size").value;

  if (Url === "") {
    ErrorEl.innerHTML = "Please Enter URL!";
  } else {
    QrCodeDisplay(Url, size);
    qrOutEl.style.display = "block";
    ErrorEl.innerHTML = "";
  }
};

// Generate QR code
const QrCodeDisplay = function (url, size) {
  qrOutEl.innerHTML = "";
  new QRCode("qrCodeScreen", {
    text: url,
    width: size,
    height: size,
  });
};

// Create save button to download QR code as image
downloadBtn.addEventListener("click", () => {
  let img = document.querySelector("#qrCodeScreen img");

  if (img !== null) {
    let imgAtrr = img.getAttribute("src");
    downloadBtn.setAttribute("href", imgAtrr);
  } else {
    downloadBtn.setAttribute(
      "href",
      `${document.querySelector("canvas").toDataURL()}`,
    );
  }
});

// generate event
button.addEventListener("click", generateQrCode);