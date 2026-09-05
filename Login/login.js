// =========================================
// LOGIN
// =========================================

const loginForm = document.querySelector(".login-box form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  // Reset validasi
  email.classList.remove("is-invalid");
  password.classList.remove("is-invalid");

  // =========================================
  // VALIDASI EMAIL
  // =========================================

  if (email.value.trim() === "") {
    email.classList.add("is-invalid");

    alert("Email harus diisi.");

    email.focus();

    return;
  }

  // =========================================
  // VALIDASI FORMAT EMAIL
  // =========================================

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email.value)) {
    email.classList.add("is-invalid");

    alert("Format email tidak valid.");

    email.focus();

    return;
  }

  // =========================================
  // VALIDASI PASSWORD
  // =========================================

  if (password.value.trim() === "") {
    password.classList.add("is-invalid");

    alert("Password harus diisi.");

    password.focus();

    return;
  }

  // =========================================
  // LOGIN BERHASIL
  // =========================================

  alert("Login berhasil!");

  // Nantinya proses login dapat
  // dihubungkan ke backend di sini.
});
