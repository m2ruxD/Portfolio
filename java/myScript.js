function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all the fields.");
    return false;
  }

  showModal("Thank you for your message, " + name + "!");

  return false;
}

function showModal(message) {
  let modal = document.getElementById("thankYouModal");

  if (!modal) {
    modal = document.createElement("div");
    modal.id = "thankYouModal";
    modal.className = "modal";
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-btn" onclick="closeModal()">&times;</span>
        <h3>Message Sent!</h3>
        <p id="modalText"></p>
      </div>
    `;
    document.body.appendChild(modal);
  }

  document.getElementById("modalText").textContent = message;
  modal.style.display = "flex";

  window.onclick = function(event) {
    if (event.target === modal) {
      closeModal();
    }
  };
}

function closeModal() {
  const modal = document.getElementById("thankYouModal");
  if (modal) {
    modal.style.display = "none";
  }
}