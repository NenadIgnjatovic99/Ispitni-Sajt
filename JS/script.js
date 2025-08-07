const scrollBtn = document.getElementById('scrollTopBtn');


/* Kada korisnik skrolovanjem prodje odredjenu daljinu (scrollY iznad odredjene vrednosti, pokazuje se dugme) */
window.addEventListener('scroll', function () {
  if (window.scrollY > 2000) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

// U trenutku kada korisnik klikne dugme, raca ga na vrh stranice
scrollBtn.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

//funkcija koja izvrsava animaciju slova kada se predje misem na elemente u navbaru
document.querySelectorAll('.nav-linkovi').forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.transition = 'all 0.75s';
    link.style.letterSpacing = '1px';
  });
  link.addEventListener('mouseout', () => {
    link.style.letterSpacing = 'normal';
  });
});

if (!localStorage.getItem('visited')) {
  alert("Dobrodošao na naš sajt! 👋");
  localStorage.setItem('visited', 'true');
}
