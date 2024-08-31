let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// form 
const btn = document.getElementById('btn');

document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validasi form
    const toEmail = document.getElementById('to_email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (!toEmail || !subject || !message) {
        alert('Di isi dlu yg lengkap ntar baru bisa dikirim.');
        return;
    }

    btn.value = 'kela dagoannya ...';

    const serviceID = 'service_1ak8078';
    const templateID = 'template_d99ddqi';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Kirim pesan';
            alert('Email berhasil terkirim');
        })
        .catch((err) => {
            btn.value = 'Kirim pesan';
            alert(JSON.stringify(err));
        });
});

// poto 
const images = [
    'img/gw-n-2.png', 
    'img/gw-n-3.jpg', 
    'img/g2-n-2.jpg', 
    'img/gw-pl.jpg',  
    'img/gw.jpg'
];

let currentImageIndex = 0;

document.getElementById('like-btn').addEventListener('click', function(event) {
    event.preventDefault(); 

    const imgElement = document.querySelector('.home-img img');
    const popup = document.getElementById('like-popup');

    
    imgElement.classList.add('fade-out');

    
     popup.classList.add('show');

     
    setTimeout(() => {
        popup.classList.remove('show');
    }, 1000);

   
    setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length; 
        imgElement.src = images[currentImageIndex]; 
        
      
        imgElement.classList.remove('fade-out');
        imgElement.classList.add('fade-in');
        
 
        setTimeout(() => {
            imgElement.classList.remove('fade-in');
        }, 300); 
    }, 300); 
});


/*=============== GSAP ANIMATION ===============*/
gsap.from('.home-img',1.2,{opacity:0, y:100, delay: .1})
gsap.from('.home-content h1',1.2,{opacity:0, y:-150, delay: .3})
gsap.from('.home-content p',1.2,{opacity:0, y:150, delay: .3})

gsap.from('.sosial-icons',1.2,{opacity:0, x:-250, delay: .5})
gsap.from('.home-content .text-animation',1.2,{opacity:0, x:-150, delay: .3})
gsap.from('.btn-group',1.2,{opacity:0, y:150, delay: .6})


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal('.timeline-item ', {origin: 'right'})
sr.reveal('.heading', {origin: 'left'})

sr.reveal('.container img ', {origin: 'right'})
sr.reveal('.container p', {origin: 'left'})


sr.reveal('.Kontak p ', {origin: 'right'})
sr.reveal('.form', {interval:100})

sr.reveal('.footer', {interval:100})

