
function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    const message = document.getElementById("uploadMessage");

    const file = fileInput.files[0];

    if (!file) {
        message.style.color = "red";
        message.textContent = "Please select a file first!";
        return;
    }

    message.style.color = "green";
    message.textContent =
        "File selected successfully: " + file.name;
}

function downloadFile() {
    const content = "Hello! This is a sample downloaded file.This is your downloaded file";

    const blob = new Blob([content], {
        type: "text/plain"
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "sample.txt";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
