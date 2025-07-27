document.getElementById('togglePwd').addEventListener('click', () => {
  const pwd = document.getElementById('loginPassword');
  pwd.type = pwd.type === 'password' ? 'text' : 'password';
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const user = JSON.parse(localStorage.getItem('user'));
  const errorBox = document.getElementById('loginError');

  if (!user || user.email !== email || user.password !== password) {
    errorBox.textContent = 'Invalid email or password.';
    return;
  }

  localStorage.setItem('session', 'true');
  window.location.href = 'dashboard.html';
});
