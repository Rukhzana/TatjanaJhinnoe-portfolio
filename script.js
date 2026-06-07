const nav = document.querySelector("nav");
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main section");
const revealItems = document.querySelectorAll(".reveal");
const topButton = document.querySelector(".top-button");
const whatsappForm = document.querySelector("#whatsappForm");
const languageModal = document.querySelector("#languageModal");
const chooseDutch = document.querySelector("#chooseDutch");
const chooseEnglish = document.querySelector("#chooseEnglish");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

revealItems.forEach((item) => revealObserver.observe(item));

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });

    topButton.classList.toggle("show", window.scrollY > 500);
});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const translations = [
    ["nav a[href='#over']", "About me"],
    ["nav a[href='#ervaring']", "Experience"],
    ["nav a[href='#projecten']", "Projects"],
    ["nav a[href='#hobbys']", "Hobbies"],
    ["nav a[href='#galerij']", "Photos"],
    [".hero-text > p", "Someone with big dreams, a strong mindset and strong motivation to grow. Through discipline, positivity and perseverance, a future full of success and opportunities is being built."],
    [".hero-actions .primary", "Contact me"],
    [".hero-actions .secondary", "View photos"],
    [".profile-card p", "22 years old | Software Engineering"],
    ["#over h2", "About me"],
    ["#over > p:nth-of-type(1)", "My name is Tatjana Jhinnoe. I am 22 years old and was born on April 5, 2004. I am from Leiding 9A in Saramacca Polder. I study Software Engineering at UNASAT and enjoy learning how websites, applications and digital solutions are built."],
    ["#over > p:nth-of-type(2)", "I am a driven and creative person who is always open to new challenges and opportunities to grow. Technology, innovation and personal development motivate me to keep bringing out the best in myself."],
    [".education-box h3", "Education"],
    [".education-box p:nth-of-type(1)", "<strong>UNASAT</strong> - Software Engineering, started in 2025.", "html"],
    [".education-box p:nth-of-type(2)", "<strong>VWO</strong> - completed in 2024.", "html"],
    ["#ervaring h2", "Work Experience"],
    ["#ervaring article:nth-child(1) p:nth-of-type(2)", "Helped customers through chat with questions and issues about Netflix. Professional communication, quick responses and customer-focused solutions were central."],
    ["#ervaring article:nth-child(2) p:nth-of-type(1) strong", "Backoffice Employee"],
    ["#ervaring article:nth-child(2) p:nth-of-type(2)", "Provided support with administrative tasks such as processing orders, helping customers, and keeping quotations, invoices and documents organized."],
    ["#projecten h2", "Projects"],
    ["#projecten article:nth-child(1) p:nth-of-type(1)", "A group project researching the demand for smart locker systems in Suriname, with a focus on hospitals and market research."],
    ["#projecten article:nth-child(1) p:nth-of-type(2)", "<strong>Technologies:</strong> Google Online Form, Excel and PowerPoint.", "html"],
    ["#projecten article:nth-child(1) p:nth-of-type(3)", "<strong>My role:</strong> actively contributing to different parts of the research and helping make the project successful.", "html"],
    ["#projecten article:nth-child(1) p:nth-of-type(4)", "<strong>Link:</strong> Not available.", "html"],
    ["#projecten article:nth-child(2) h3", "Personal Portfolio Website"],
    ["#projecten article:nth-child(2) p:nth-of-type(1)", "A personal website to professionally present my background, education, work experience, skills, photos and contact information."],
    ["#projecten article:nth-child(2) p:nth-of-type(2)", "<strong>Technologies:</strong> HTML, CSS and JavaScript.", "html"],
    ["#projecten article:nth-child(2) p:nth-of-type(3)", "<strong>My role:</strong> collecting content, presenting personal information and publishing the website online.", "html"],
    [".skill-grid article:nth-child(1) h3", "Coaching & Guidance"],
    [".skill-grid article:nth-child(1) p", "Supporting, motivating and guiding colleagues to achieve better results."],
    [".skill-grid article:nth-child(2) p", "Processing data, creating structure and working accurately with administrative tasks."],
    [".skill-grid article:nth-child(3) h3", "Administrative Skills"],
    [".skill-grid article:nth-child(3) p", "Experience processing orders, quotations, invoices and documents."],
    [".skill-grid article:nth-child(4) h3", "Customer Focus"],
    [".skill-grid article:nth-child(4) p", "Communicating professionally and helping customers kindly with suitable solutions."],
    [".skill-grid article:nth-child(5) h3", "Problem-Solving Thinking"],
    [".skill-grid article:nth-child(5) p", "Quickly analyzing situations and working efficiently toward solutions."],
    [".skill-grid article:nth-child(6) p", "Strong in teamwork, listening and clear communication within a team."],
    [".skill-grid article:nth-child(7) h3", "Accuracy"],
    [".skill-grid article:nth-child(7) p", "Working in an organized way with attention to detail and quality."],
    ["#hobbys h2", "Hobbies & Achievements"],
    [".timeline div:nth-child(1) strong", "Walking"],
    [".timeline div:nth-child(1) p", "Walking helps me relax, clear my mind and regain new energy."],
    [".timeline div:nth-child(2) strong", "Personal Growth"],
    [".timeline div:nth-child(2) p", "I continuously work on myself by learning new things and developing myself further."],
    [".timeline div:nth-child(3) strong", "Traveling & Discovering"],
    [".timeline div:nth-child(3) p", "I enjoy discovering new places, cultures and experiences."],
    [".timeline div:nth-child(4) strong", "Study & Development"],
    [".timeline div:nth-child(4) p", "I keep developing myself and investing in my future and skills."],
    ["#galerij h2", "Photos"],
    [".gallery-container figure:nth-child(2) figcaption", "Beautiful moments"],
    [".gallery-container figure:nth-child(3) figcaption", "New places"],
    [".video-card p", "A video about myself."],
    ["#contact p", "You can reach me by phone, WhatsApp, e-mail or Facebook."],
    [".contact-grid a:nth-child(1)", "Call me: 8847775"],
    [".contact-form label[for='name']", "Name"],
    [".contact-form label[for='message']", "Message"],
    [".contact-form button", "Send via WhatsApp"],
    [".top-button", "Top"]
];

const placeholderTranslations = [
    ["#name", "Enter your name"],
    ["#email", "Enter your e-mail"],
    ["#message", "Type your message"]
];

function translateToEnglish() {
    document.documentElement.lang = "en";
    translations.forEach(([selector, text, type]) => {
        const element = document.querySelector(selector);
        if (!element) return;

        if (type === "html") {
            element.innerHTML = text;
        } else {
            element.textContent = text;
        }
    });

    placeholderTranslations.forEach(([selector, text]) => {
        const element = document.querySelector(selector);
        if (element) element.placeholder = text;
    });
}

function closeLanguageModal() {
    languageModal.classList.add("hide");
}

chooseDutch.addEventListener("click", closeLanguageModal);

chooseEnglish.addEventListener("click", () => {
    translateToEnglish();
    closeLanguageModal();
});

whatsappForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();
    const text = `Hallo Tatjana, mijn naam is ${name}.\nEmail: ${email}\nBericht: ${message}`;

    window.open(`https://wa.me/5978847775?text=${encodeURIComponent(text)}`, "_blank");
});
