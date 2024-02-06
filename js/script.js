const button = document.getElementById('menu-btn');
const navigation = document.getElementById('menu');

button.addEventListener('click', () => {
  button.classList.toggle('open');
  navigation.classList.toggle('hidden');
})