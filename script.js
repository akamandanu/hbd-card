// Ambil elemen tombol dan elemen amplop
const openButton = document.getElementById('openButton');
const amplop = document.querySelector('.amplop');
const card = document.querySelector('.card');
const img = document.querySelector('.images img');

// Tambahkan event listener untuk tombol "open"
openButton.addEventListener('click', function() {
    // Tambahkan kelas "opened" pada elemen amplop
    amplop.classList.add('opened');
    openButton.innerHTML = "opened";
    card.classList.add('moving');
    img.classList.add('img-opened');
});