document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value;
  const confirm = document.getElementById('regConfirm').value;
  const phone = document.getElementById('regPhone').value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const dob = new Date(document.getElementById('regDOB').value);
  const address = document.getElementById('regAddress').value;
  const city = document.getElementById('regCity').value;
  const skills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(i => i.value);
  const terms = document.getElementById('terms').checked;
  const profilePic = document.getElementById('profilePic').files[0];
  const reader = new FileReader();

  if (name.length < 3 || /\d/.test(name) || /(.)\1{2,}/.test(name)) return alert('Invalid name');
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) return alert('Weak password');
  if (password !== confirm) return alert('Passwords do not match');
  if (!/^\d{10}$/.test(phone)) return alert('Invalid phone number');
  if (!gender) return alert('Select gender');
  if ((new Date().getFullYear() - dob.getFullYear()) < 18) return alert('You must be 18+');
  if (address.length < 10) return alert('Address too short');
  if (!skills.length) return alert('Select at least one skill');
  if (!terms) return alert('Please accept terms');

  reader.onload = () => {
    const user = {
      name, email, password, phone, gender: gender.value,
      dob: dob.toISOString(), address, city, skills, profile: reader.result
    };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Registration Successful!');
    window.location.href = 'index.html';
  };

  if (profilePic) reader.readAsDataURL(profilePic);
  else reader.onload();
});
