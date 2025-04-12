window.onload = () => {
   const mapLinks = {
     "Figure": "area-figure",
     "Picture": "area-picture",
     "Audio": "area-audio",
     "Video": "area-video"
   };

   const links = document.querySelectorAll("menu ul li a");

   links.forEach(link => {
     link.addEventListener("click", (e) => {
       e.preventDefault();

       const linkText = link.textContent.trim(); // Pega o texto clicado
       const targetId = mapLinks[linkText]; // Usa o texto pra achar o id
       const targetElement = document.getElementById(targetId); // Seleciona o elemento correspondente

       if (targetElement) {
         targetElement.style.backgroundColor = "#fef08a"; // amarelo destaque

         setTimeout(() => {
           targetElement.style.backgroundColor = ""; // volta ao normal depois de 5s
         }, 1000);
       }
     });
   });
};