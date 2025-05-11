const bar = document.getElementById("bar");
const nav = document.getElementById("about");
const close = document.getElementById("close");

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        
        console.log("clicked");
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
        console.log("press")
    })
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach((el) => observer.observe(el));