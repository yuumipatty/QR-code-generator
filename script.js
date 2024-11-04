// function generateQRCode() {
//     const text = document.getElementById("text-input").value;
//     const darkColor = document.getElementById("dark-color").value;
//     const lightColor = document.getElementById("light-color").value;
//     const qrCodeContainer = document.getElementById("qrcode");

//     // Clear previous QR code
//     qrCodeContainer.innerHTML = "";

//     // Generate new QR code if text is provided
//     if (text.trim()) {
//         QRCode.toCanvas(qrCodeContainer, text, {
//             width: 200,
//             margin: 1,
//             color: {
//                 dark: darkColor,
//                 light: lightColor
//             }
//         }, (error) => {
//             if (error) console.error(error);
//         });
//     } else {
//         alert("Please enter text or URL!");
//     }
// }

// function generateQRCode() {
//     const text = document.getElementById("text-input").value;
//     const darkColor = document.getElementById("dark-color").value;
//     const lightColor = document.getElementById("light-color").value;
//     const qrCodeContainer = document.getElementById("qrcode");

//     // Clear previous QR code
//     qrCodeContainer.innerHTML = "";

//     if (text.trim()) {
//         const qr = new QRCode(qrCodeContainer, {
//             text: text,
//             width: 200,
//             height: 200,
//             colorDark: darkColor,
//             colorLight: lightColor,
//         });
//     } else {
//         alert("Please enter text or URL!");
//     }
// }

function generateQRCode() {
    const text = document.getElementById("text-input").value;
    const darkColor = document.getElementById("dark-color").value;
    const lightColor = document.getElementById("light-color").value;
    const qrCodeContainer = document.getElementById("qrcode");

    // Clear previous QR code
    qrCodeContainer.innerHTML = "";

    // Generate new QR code if text is provided
    if (text.trim()) {
        const qr = new QRCode(qrCodeContainer, {
            text: text,
            width: 200,
            height: 200,
            colorDark: darkColor,
            colorLight: lightColor
        });
    } else {
        alert("Please enter text or URL!");
    }
}

// function downloadQRCode() {
//     const qrCodeCanvas = document.getElementById("qrcode").querySelector("canvas");

//     if (qrCodeCanvas) {
//         const link = document.createElement("a");
//         link.href = qrCodeCanvas.toDataURL("image/png");
//         link.download = "qr_code.png";
//         link.click();
//     } else {
//         alert("Please generate a QR code first!");
//     }
// }


function downloadQRCode() {
    const qrCodeCanvas = document.getElementById("qrcode").querySelector("canvas");

    if (qrCodeCanvas) {
        const link = document.createElement("a");
        link.href = qrCodeCanvas.toDataURL("image/png");
        link.download = "qr_code.png";
        link.click();
    } else {
        alert("Please generate a QR code first!");
    }
}
