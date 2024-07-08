const modal = document.getElementById('modal')
const formModal = document.getElementById('form-modal')

function clickOutside(event) {
  if (!formModal.contains(event.target)) {
    modal.style.display = "none";
    modal.removeEventListener('click', clickOutside);
  }
}

function openModal() {
  modal.style.display = "flex"
  modal.addEventListener('click', clickOutside);
}

function closeModal() {
  modal.style.display = "none"
  modal.removeEventListener('click', clickOutside);
}

function signIn() {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  alert("Email: " + email + "\nPassword: " + password);
}