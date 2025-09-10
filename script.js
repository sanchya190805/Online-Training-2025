// Generate 30 day cards dynamically
const container = document.getElementById("cardsContainer");
// ✅ Extra card: Certificate
let certificateCard = document.createElement("div");
certificateCard.className = "card special-card certificate";
certificateCard.innerHTML = `<h3>Certificate</h3><p>Click to view</p>`;
certificateCard.onclick = () => {
  window.open("pdfs/certificate.pdf", "_blank"); // put your certificate PDF in /pdfs folder
};
container.appendChild(certificateCard);

// ✅ Extra card: Allotment Letter
let allotmentCard = document.createElement("div");
allotmentCard.className = "card special-card allotment";
allotmentCard.innerHTML = `<h3>Allotment Letter</h3><p>Click to view</p>`;
allotmentCard.onclick = () => {
  window.open("pdfs/allotment.pdf", "_blank"); // put your allotment letter PDF in /pdfs folder
};
container.appendChild(allotmentCard);
for (let i = 1; i <= 25; i++) {
  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<h3>Day ${i}</h3><p>Click to view PDF</p>`;

  // 🔽 Your daily training PDFs
  let pdfPath = `pdfs/day${i}.pdf`; 

  card.onclick = () => {
    window.open(pdfPath, "_blank");  // Opens PDF in new tab
  };

  container.appendChild(card);
}





// Fade-in on scroll
const fadeEls = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
