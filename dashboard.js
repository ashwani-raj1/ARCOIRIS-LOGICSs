if (localStorage.getItem('session') !== 'true') {
  alert('Please login first.');
  window.location.href = 'login.html';
}

const user = JSON.parse(localStorage.getItem('user'));

document.getElementById('profileImg').src = user.profile || 'https://via.placeholder.com/100';
document.getElementById('userName').textContent = user.name;
document.getElementById('userEmail').textContent = user.email;
document.getElementById('userPhone').textContent = user.phone;
document.getElementById('userGender').textContent = user.gender;
document.getElementById('userCity').textContent = user.city;
document.getElementById('userSkills').textContent = user.skills.join(', ');

function logout() {
  localStorage.removeItem('session');
  window.location.href = 'login.html';
}
