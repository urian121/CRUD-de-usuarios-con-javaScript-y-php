const API_URL = "./backend-php/api.php";

// Referencias a elementos del DOM
const userForm = document.getElementById("user-form");
const userTable = document.getElementById("user-table");
const userIdInput = document.getElementById("user-id");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const speakEnglishInputs = document.getElementsByName("speak_english"); 
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
    speak_english: document.querySelector('input[name="speak_english"]:checked').id === "Si" ? "Si" : "No",
  };

  if (id) {
    await updateUser(id, userData);
  } else {
    await createUser(userData);
  }

  userForm.reset();
  formSubmitButton.textContent = "Crear nuevo usuario"; // Restaurar texto del botón
  loadUsers();
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
          <button class="btn btn-warning btn-sm mb-2" onclick="editUser(${user.id})"> <i class="bi bi-pencil-square"></i> Editar</button>
          <button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})"> <i class="bi bi-trash3"></i> Eliminar</button>
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
}

// Eliminar usuario
window.deleteUser = async (id) => {
  if (confirm("¿Estás seguro de eliminar este usuario?")) {
    await fetch(`${API_URL}?id=${id}`, { method: "DELETE" });
    loadUsers();
    userForm.reset();
  }
};
