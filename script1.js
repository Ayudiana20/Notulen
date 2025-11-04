document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const userType = document.getElementById("userType").value;
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const warning = document.getElementById("warning");

  // data akun
  const akun = {
    admin: { username: "admin", password: "admin123" },
    pengguna: { username: "user", password: "user123" }
  };

  // validasi form kosong
  if (!userType || !username || !password) {
    warning.textContent = "⚠️ Semua kolom wajib diisi.";
    warning.style.display = "block";
    return;
  }

  // validasi login berdasarkan jenis user
  if (
    userType === "admin" &&
    username === akun.admin.username &&
    password === akun.admin.password
  ) {
    localStorage.setItem("userType", userType);
    localStorage.setItem("username", username);
    window.location.href = "admin.html"; // ke halaman admin
  } 
  else if (
    userType === "pengguna" &&
    username === akun.pengguna.username &&
    password === akun.pengguna.password
  ) {
    localStorage.setItem("userType", userType);
    localStorage.setItem("username", username);
    window.location.href = "peserta2.html"; // ke halaman pengguna
  } 
  else {
    warning.textContent = "❌ Username atau password salah.";
    warning.style.display = "block";
  }
});
