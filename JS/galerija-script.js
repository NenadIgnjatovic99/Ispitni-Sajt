// Kada se cela stranica učita, pokreće se ovaj kod
document.addEventListener('DOMContentLoaded', () => {
  // Selektujemo sve galerije na stranici (npr. više sekcija sa slikama)
  const galleries = document.querySelectorAll('.gallery-grid');

  // Selektujemo modal prozor i njegovu sliku
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');

  // Selektujemo X dugme za zatvaranje modala
  const closeBtn = document.getElementById('closeBtn');

  // Za svaku galeriju (sekciju sa slikama) dodajemo klik listener
  galleries.forEach(gallery => {
    gallery.addEventListener('click', (e) => {
      // Proveravamo da li je kliknuto baš na <img>, a ne na prazan prostor
      if (e.target.tagName === 'IMG') {
        // Resetujemo sliku u modalu (ovo je bitno zbog animacije)
        modalImg.src = '';
        modalImg.alt = '';

        // Mali delay (10ms) da se resetuje <img> pre postavljanja nove slike
        setTimeout(() => {
          modalImg.src = e.target.src;
          modalImg.alt = e.target.alt || ''; // fallback ako nema alt teksta
        }, 10);

        // Dodajemo klasu koja prikazuje modal (sa animacijom iz CSS-a)
        if (!modal.classList.contains('show')) {
          modal.classList.add('show');
        }
      }
    });
  });

  // Funkcija za zatvaranje modala
  function closeModal() {
    modal.classList.remove('show');
  }

  // Klikom na X dugme zatvaramo modal
  closeBtn.addEventListener('click', closeModal);

  // Klikom bilo gde van slike (na tamnu pozadinu), zatvaramo modal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // BONUS: Zatvaranje modala tasterom Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });
});
