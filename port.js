// Modal functionality
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close-btn");

document.querySelectorAll(".achievement-box").forEach(box => {
  box.addEventListener("click", () => {
    const imgSrc = box.getAttribute("data-full");
    modalImg.src = imgSrc;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Animate progress bars when scrolling to about section
const aboutSection = document.getElementById('about');
const progressBars = document.querySelectorAll('.progress');

const animateProgressBars = () => {
  progressBars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    bar.style.width = width + '%';
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateProgressBars();
    }
  });
}, { threshold: 0.3 });

observer.observe(aboutSection);
// Contact Form Handling
function showMessage(event) {
  event.preventDefault();
  document.getElementById('form-response').innerText = "Thank you! Your message has been sent.";
  document.getElementById('form-response').style.display = "block";
}

