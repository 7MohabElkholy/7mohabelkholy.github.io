function changeImage(imageSrc) {
  document.getElementById("mainImage").src = imageSrc;
}

function openModal() {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = document.getElementById("mainImage").src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
