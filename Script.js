document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navContainer = document.getElementById('nav-container');

  hamburgerBtn.addEventListener('click', () => {
    navContainer.classList.toggle('open');
});

  const welcomeForm = document.getElementById('welcome-form');
  const welcomeScreen = document.getElementById('welcome-screen');
  const mainContent = document.getElementById('main-content');
  const themeSwitch = document.getElementById('theme-switch');
  const clock = document.getElementById('clock');
  const sectionContent = document.getElementById('section-content');

  welcomeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre && apellido && correo && telefono && mensaje) {
      welcomeScreen.style.display = 'none';
      mainContent.style.display = 'block';
      navigate('home');
    } else {
      alert('Por favor, rellena todos los campos.');
    }
  });

  themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark');
  });

  function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    clock.textContent = timeString;
  }

  setInterval(updateClock, 1000);
  updateClock();

  function iniciarCarrusel() {
  const track = document.querySelector('.carousel-track');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const totalSlides = document.querySelectorAll('.carousel-img').length;

  let current = 0;
  let intervalId;

  function updateCarousel() {
    const offset = -current * 100;
    track.style.transform = `translateX(${offset}vw)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
  }

  function nextSlide() {
    current = (current + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    current = (current - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      current = index;
      updateCarousel();
      resetAutoSlide();
    });
  });

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
  });

  function startAutoSlide() {
    intervalId = setInterval(nextSlide, 5000); // Cambia cada 5 segundos
  }

  function resetAutoSlide() {
    clearInterval(intervalId);
    startAutoSlide();
  }

  updateCarousel();
  startAutoSlide();
}


  window.navigate = function (section) {
    let content = '';

    switch (section) {
      case 'home':
        content = `
        <section class="home">
          <div class="carousel">
            <div class="carousel-inner">
              <div class="carousel-track">
                <img src="img/carrusel/Cherry PC.webp" class="carousel-img" alt="Carrusel 1">
                <img src="img/carrusel/Envio Gratis PC.webp" class="carousel-img" alt="Carrusel 2">
                <img src="img/carrusel/nuevas fragancias PC.webp" class="carousel-img" alt="Carrusel 3">
                <img src="img/carrusel/Productos Addi PC.webp" class="carousel-img" alt="Carrusel 4">
              </div>
            </div>
            <button class="carousel-btn prev">&#10094;</button>
            <button class="carousel-btn next">&#10095;</button>
            <div class="carousel-dots">
              <span class="dot active"></span>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          </div>

          <Spark class="parr">Descubre una experiencia sensorial inolvidable con nuestras fragancias únicas y elegantes. Spark Perfum combina pasión, arte y ciencia para ofrecerte perfumes diseñados para inspirar emociones.</p>

          <div class="product-grid">
            <div class="product">
              <img src="img/productos/prod1.webp" alt="Producto 1">
              <div class="product-label">Fragancia Floral</div>
            </div>
            <div class="product">
              <img src="img/productos/prod2.webp" alt="Producto 2">
              <div class="product-label">Aroma Amaderado</div>
            </div>
            <div class="product">
              <img src="img/productos/prod3.webp" alt="Producto 3">
              <div class="product-label">Edición Verano</div>
            </div>
            <div class="product">
              <img src="img/productos/prod4.webp" alt="Producto 4">
              <div class="product-label">Intenso y Elegante</div>
            </div>
          </div>

        </section>`;
        break;

      case 'quienes':
        content = `
        <section class="quienes">
          <h2 class="contactott">¿Quiénes Somos?</h2>
          <img class="equipo" src="img/quienes somos.png" alt="equipo">
          <p class="parr">
            En <strong>Spark Perfum</strong> creamos más que fragancias: diseñamos experiencias sensoriales que despiertan emociones y reflejan la esencia única de cada persona. Somos una empresa apasionada por la perfumería artesanal, enfocada en ofrecer aromas auténticos, personalizados y elaborados con ingredientes de alta calidad. Nuestro equipo fusiona arte y ciencia para crear perfumes que no solo te identifican, sino que te inspiran. Creemos en el poder de los aromas para contar historias, dejar huella y conectar con lo más profundo de ti. Bienvenido al universo Spark Perfum.
          </p>
          <h2 id="nosotros">Nosotros</h2>
          <div class="product-grid">
            <div class="product">
              <img src="img/productos/user.png" alt="Producto 1">
              <div class="product-label">Daniela</div>
            </div>
            <div class="product">
              <img src="img/productos/user.png" alt="Producto 2">
              <div class="product-label">Fulano</div>
            </div>
        </section>`;
        break;

      case 'servicios':
        content = `
        <section class="servicios">
          <h2 class="contactott">Servicios</h2>
          <p class="vacio">Ofrecemos perfumes personalizados, asesorías aromáticas y talleres de creación de fragancias.</p>
        </section>`;
        break;

      case 'programas':
        content = `
        <section class="programas">
          <h2 class="contactott">Programas</h2>
          <p class="vacio">Explora nuestros programas de fidelidad, membresías exclusivas y lanzamientos especiales.</p>

        </section>`;
        break;

      case 'contacto':
        content = `
        <section class="contacto">
          <h2 class="contactott">Contacto</h2>
          <p class="parr">En Spark Perfum valoramos cada mensaje que recibimos. Si tienes preguntas sobre nuestros productos, deseas colaborar con nosotros, hacer sugerencias o simplemente compartir tu experiencia, no dudes en ponerte en contacto. Estamos aquí para ayudarte y brindarte la mejor atención posible. También puedes encontrarnos en nuestras redes sociales oficiales para mantenerte al tanto de novedades, promociones y lanzamientos especiales.</p>

          <div class="social-icons">
            <a href="https://www.facebook.com" target="_blank"><img src="img/contact/fb.png" alt="Facebook"></a>
            <a href="https://www.instagram.com" target="_blank"><img src="img/contact/ig.png" alt="Instagram"></a>
            <a href="https://www.tiktok.com" target="_blank"><img src="img/contact/tt.png" alt="TikTok"></a>
            <a href="https://wa.me/" target="_blank"><img src="img/contact/wa.png" alt="WhatsApp"></a>
            <a href="https://www.google.com" target="_blank"><img src="img/contact/web.png" alt="Google"></a>
          </div>
        </section>`;
        break;

    }

    sectionContent.innerHTML = content;

    if (section === 'home') {
      setTimeout(iniciarCarrusel, 100);
    }
  };
});
