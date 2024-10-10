import axios from "axios";

export function handleDownload() {
  axios
    .get("/pdf/Curriculum.pdf", {
      responseType: "arraybuffer",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/pdf",
      },
    })
    .then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Alan Francisco Mora - CV.pdf"); //or any other extension
      document.body.appendChild(link);
      link.click();
    })
    .catch((error) => console.log(error));
}
