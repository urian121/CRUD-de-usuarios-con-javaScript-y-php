import { toast } from "https://unpkg.com/nextjs-toast-notify@1.34.0/dist/nextjs-toast-notify.js";

const API_URL = "./backend-php/api.php";

// Referencias a elementos del DOM
const userForm = document.getElementById("user-form");
const userTable = document.getElementById("tbody-user-table");
const userIdInput = document.getElementById("user-id");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const formSubmitButton = document.getElementById("form-submit-btn");

// Cargar usuarios y resetear formulario al iniciar
document.addEventListener("DOMContentLoaded", () => {
  userForm.reset(); // Limpiar formulario
  loadUsers(); // Cargar usuarios
});

// Manejar formulario
userForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const id = userIdInput.value;

  const userData = {
    name: nameInput.value,
    email: emailInput.value,
    age: ageInput.value,
    speak_english:
      document.querySelector('input[name="speak_english"]:checked').id === "Si"
        ? "Si"
        : "No",
  };

  if (id) {
    // Llamar a la función updateUser(id, userData) y enviale el id del usuario seleccionado mas los datos del formulario
    await updateUser(id, userData);

    // Mostrar notificación
    showToast("Usuario actualizado correctamente", "info");
  } else {
    // Llamar a la función createUser(userData) y enviale los datos del formulario
    await createUser(userData);

    // Mostrar notificación
    showToast("Usuario creado correctamente", "success");
  }

  userForm.reset(); // Limpiar formulario
  formSubmitButton.textContent = "Crear nuevo usuario"; // Restaurar texto del botón
  loadUsers(); // Cargar usuarios
});

// Cargar usuarios
async function loadUsers() {
  const response = await fetch(API_URL);
  const users = await response.json();
  userTable.innerHTML = users
    .map(
      (user) => `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.age}</td>
        <td>${user.speak_english}</td>
        <td>${user.created_at}</td>
        <td>
          <button class="btn btn-warning btn-sm mb-2" onclick="editUser(${user.id})"> <i class="bi bi-pencil-square"></i> </button>
          <button class="btn btn-danger btn-sm mb-2" onclick="deleteUser(${user.id})"> <i class="bi bi-trash3"></i> </button>
        </td>
      </tr>
    `
    )
    .join("");
}

// Crear usuario
async function createUser(user) {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  console.log(`Usuario Creado ${JSON.stringify(user)}`);
}

// Editar usuario
window.editUser = async (id) => {
  const response = await fetch(`${API_URL}?id=${id}`);
  const user = await response.json();

  userIdInput.value = user.id;
  nameInput.value = user.name;
  emailInput.value = user.email;
  ageInput.value = user.age;

  // Seleccionar el botón de radio correcto
  if (user.speak_english === "Si" || user.speak_english === true) {
    document.getElementById("Si").checked = true;
  } else {
    document.getElementById("No").checked = true;
  }

  // Cambiar el texto del botón
  formSubmitButton.textContent = "Actualizar datos";
};

// Actualizar usuario
async function updateUser(id, user) {
  await fetch(`${API_URL}?id=${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  console.log(`Usuario Actualizado ${JSON.stringify(user)}`);
}

// Eliminar usuario
window.deleteUser = async (id) => {
  await fetch(`${API_URL}?id=${id}`, { method: "DELETE" });

  loadUsers(); // Cargar usuarios
  userForm.reset(); // Limpiar formulario

  // Mostrar notificación
  showToast("Usuario eliminado correctamente", "error");
};

function showToast(msj, tipo) {
  toast[tipo](msj, {
    duration: 5000, // Duración de la notificación en ms
    position: "top-right", // Posición de la notificación
    transition: "bounceIn", // Tipo de transición para la entrada
    icon: "",
    sonido: true, // Reproducir sonido
  });
}
