// =========================================
// REGISTRASI
// =========================================

const registerForm = document.querySelector(".register-box form");

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = document.getElementById("nama");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");

  // =========================================
  // RESET VALIDASI
  // =========================================

  nama.classList.remove("is-invalid");
  email.classList.remove("is-invalid");
  password.classList.remove("is-invalid");
  confirmPassword.classList.remove("is-invalid");

  // =========================================
  // VALIDASI NAMA
  // =========================================

  if (nama.value.trim() === "") {
    nama.classList.add("is-invalid");

    alert("Nama lengkap harus diisi.");

    nama.focus();

    return;
  }

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

  if (password.value.length < 8) {
    password.classList.add("is-invalid");

    alert("Password minimal 8 karakter.");

    password.focus();

    return;
  }

  // =========================================
  // KONFIRMASI PASSWORD
  // =========================================

  if (password.value !== confirmPassword.value) {
    confirmPassword.classList.add("is-invalid");

    alert("Konfirmasi password tidak sama.");

    confirmPassword.focus();

    return;
  }

  // =========================================
  // REGISTRASI BERHASIL
  // =========================================

  alert("Registrasi berhasil!");

  // Nantinya data registrasi dapat
  // dikirim ke backend/database di sini.
});
