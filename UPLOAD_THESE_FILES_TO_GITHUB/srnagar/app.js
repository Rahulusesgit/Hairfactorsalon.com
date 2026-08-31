// ==========================================
// COMPLETE SERVICE MENU DATA (SR NAGAR)
// ==========================================
const SERVICES = [
    // Men's Cut & Style
    { id: "s1", name: "Haircut (Men)", price: 430, dur: "45 min", cat: "hair", desc: "" },
    { id: "s2", name: "Kids Cut (Men, Under 8 Yrs)", price: 330, dur: "30 min", cat: "hair", desc: "" },
    { id: "s3", name: "Beard Trim / Design", price: 160, dur: "20 min", cat: "hair", desc: "" },
    { id: "s4", name: "Clean Shave", price: 110, dur: "15 min", cat: "hair", desc: "" },

    // Women's Cut & Style
    { id: "s5", name: "Haircut (Women)", price: 1000, dur: "45 min", cat: "hair", desc: "" },
    { id: "s6", name: "Kids Cut (Women, Under 8 Yrs)", price: 800, dur: "30 min", cat: "hair", desc: "" },

    // Permanent Hair Treatment
    { id: "s7", name: "Keratin Treatment", price: 3500, dur: "2.5 hrs", cat: "hair", desc: "Deep molecular keratin protein infusion for glass-smooth, frizz-free hair. Price onwards based on hair length." },
    { id: "s8", name: "Botox Treatment", price: 6000, dur: "2 hrs", cat: "hair", desc: "Advanced hair botox for deep repair and shine restoration. Price onwards." },
    { id: "s9", name: "Nonatlastia", price: 7000, dur: "3 hrs", cat: "hair", desc: "Premium nanoplastia treatment for natural-looking straight hair. Price onwards." },
    { id: "s10", name: "Rebonding", price: 3500, dur: "3 hrs", cat: "hair", desc: "Get super sleek poker straight hair. Price onwards based on hair length." },
    { id: "s11", name: "Smoothening", price: 6000, dur: "2.5 hrs", cat: "hair", desc: "Let go of the frizz, tame your hair without compromising on volume. Price onwards." },

    // Hair Styling
    { id: "s12", name: "Hair Wash + Blast Dry", price: 400, dur: "30 min", cat: "hair", desc: "" },
    { id: "s13", name: "Hair Wash + Blow Dry", price: 700, dur: "45 min", cat: "hair", desc: "" },
    { id: "s14", name: "Blow Dry (Without Hair Wash)", price: 500, dur: "30 min", cat: "hair", desc: "" },
    { id: "s15", name: "Hair Wash + Tongs / Ironing", price: 1000, dur: "1 hr", cat: "hair", desc: "Price onwards" },

    // Hair Colors - L'Oreal
    { id: "s16", name: "Root Touch Up (Mens) - L'Oreal", price: 1500, dur: "1 hr", cat: "hair", desc: "" },
    { id: "s17", name: "Root Touch Up (Female) - L'Oreal", price: 1800, dur: "1.5 hrs", cat: "hair", desc: "" },
    { id: "s18", name: "Highlights Per Foil - L'Oreal", price: 350, dur: "30 min", cat: "hair", desc: "" },
    { id: "s19", name: "Global Colour - L'Oreal", price: 3000, dur: "2 hrs", cat: "hair", desc: "" },

    // Hair Colors - Streax
    { id: "s20", name: "Root Touch Up (Mens) - Streax", price: 1000, dur: "1 hr", cat: "hair", desc: "" },
    { id: "s21", name: "Root Touch Up (Female) - Streax", price: 1300, dur: "1.5 hrs", cat: "hair", desc: "" },
    { id: "s22", name: "Highlights Per Foil - Streax", price: 300, dur: "30 min", cat: "hair", desc: "Price onwards" },
    { id: "s23", name: "Global Colour - Streax", price: 2500, dur: "2 hrs", cat: "hair", desc: "Price onwards" },

    // Men's Hair Treatments
    { id: "s24", name: "L'Oreal Spa (Men)", price: 1100, dur: "45 min", cat: "hair", desc: "" },
    { id: "s25", name: "Anti-Dandruff Treatment (Men)", price: 1200, dur: "45 min", cat: "hair", desc: "" },
    { id: "s26", name: "Anti-Hair Fall Treatment (Men)", price: 1150, dur: "45 min", cat: "hair", desc: "" },
    { id: "s27", name: "Frizz Ease Hair Treatment (Men)", price: 1200, dur: "45 min", cat: "hair", desc: "" },
    { id: "s28", name: "Deep Moisturising Hair Spa (Men)", price: 1100, dur: "45 min", cat: "hair", desc: "" },

    // Women's Hair Treatments
    { id: "s29", name: "L'Oreal Spa (Women)", price: 1800, dur: "1 hr", cat: "hair", desc: "Price onwards based on hair length" },
    { id: "s30", name: "Anti-Dandruff Treatment (Women)", price: 1900, dur: "1 hr", cat: "hair", desc: "Price onwards" },
    { id: "s31", name: "Anti-Hair Fall Treatment (Women)", price: 1900, dur: "1 hr", cat: "hair", desc: "Price onwards" },
    { id: "s32", name: "Frizz Ease Hair Treatment (Women)", price: 1800, dur: "1 hr", cat: "hair", desc: "Price onwards" },
    { id: "s33", name: "Deep Moisturising Hair Spa (Women)", price: 1800, dur: "1 hr", cat: "hair", desc: "Price onwards" },

    // Threading
    { id: "s34", name: "Threading - Eyebrow", price: 50, dur: "10 min", cat: "skin", desc: "" },
    { id: "s35", name: "Threading - Forehead", price: 40, dur: "10 min", cat: "skin", desc: "" },
    { id: "s36", name: "Threading - Upper Lip", price: 50, dur: "10 min", cat: "skin", desc: "" },
    { id: "s37", name: "Threading - Chin", price: 40, dur: "10 min", cat: "skin", desc: "" },
    { id: "s38", name: "Threading - Side Face", price: 100, dur: "15 min", cat: "skin", desc: "" },
    { id: "s39", name: "Threading - Full Face", price: 300, dur: "30 min", cat: "skin", desc: "" },

    // Waxing Normal
    { id: "s40", name: "Waxing - Full Arms (Normal)", price: 600, dur: "30 min", cat: "skin", desc: "" },
    { id: "s41", name: "Waxing - Half Arms (Normal)", price: 400, dur: "20 min", cat: "skin", desc: "" },
    { id: "s42", name: "Waxing - Full Legs (Normal)", price: 1000, dur: "40 min", cat: "skin", desc: "" },
    { id: "s43", name: "Waxing - Half Legs (Normal)", price: 600, dur: "25 min", cat: "skin", desc: "" },
    { id: "s44", name: "Waxing - Underarms (Normal)", price: 200, dur: "15 min", cat: "skin", desc: "" },
    { id: "s45", name: "Waxing - Full Body (Normal)", price: 2500, dur: "1.5 hrs", cat: "skin", desc: "Price onwards" },

    // Waxing Rica
    { id: "s46", name: "Waxing - Full Arms (Rica)", price: 1000, dur: "30 min", cat: "skin", desc: "" },
    { id: "s47", name: "Waxing - Half Arms (Rica)", price: 400, dur: "20 min", cat: "skin", desc: "" },
    { id: "s48", name: "Waxing - Full Legs (Rica)", price: 1200, dur: "40 min", cat: "skin", desc: "" },
    { id: "s49", name: "Waxing - Half Legs (Rica)", price: 700, dur: "25 min", cat: "skin", desc: "" },
    { id: "s50", name: "Waxing - Face (Rica)", price: 400, dur: "20 min", cat: "skin", desc: "" },
    { id: "s51", name: "Waxing - Underarms (Rica)", price: 300, dur: "15 min", cat: "skin", desc: "" },
    { id: "s52", name: "Waxing - Full Body (Rica)", price: 3000, dur: "1.5 hrs", cat: "skin", desc: "Price onwards" },

    // Facials
    { id: "s53", name: "Clean Up", price: 800, dur: "30 min", cat: "skin", desc: "" },
    { id: "s54", name: "Regular Facial", price: 700, dur: "45 min", cat: "skin", desc: "" },
    { id: "s55", name: "Fruit Facial", price: 1300, dur: "1 hr", cat: "skin", desc: "" },
    { id: "s56", name: "Ozone Facial", price: 3500, dur: "1 hr", cat: "skin", desc: "" },
    { id: "s57", name: "Pearl Facial", price: 1500, dur: "1 hr", cat: "skin", desc: "" },
    { id: "s58", name: "Gold Facial", price: 1500, dur: "1 hr", cat: "skin", desc: "" },
    { id: "s59", name: "O3 Whitening Facial", price: 4000, dur: "1.5 hrs", cat: "skin", desc: "" },
    { id: "s60", name: "Vitamin C Facial", price: 900, dur: "45 min", cat: "skin", desc: "" },
    { id: "s61", name: "Diamond Facial", price: 1800, dur: "1 hr", cat: "skin", desc: "" },

    // D-Tan Ozone
    { id: "s63", name: "Face D-Tan (Ozone)", price: 500, dur: "30 min", cat: "skin", desc: "" },
    { id: "s64", name: "Face & Neck D-Tan (Ozone)", price: 800, dur: "40 min", cat: "skin", desc: "" },
    { id: "s65", name: "Full Hands D-Tan (Ozone)", price: 700, dur: "30 min", cat: "skin", desc: "" },
    { id: "s66", name: "Half Leg D-Tan (Ozone)", price: 500, dur: "25 min", cat: "skin", desc: "" },
    { id: "s67", name: "Full Back D-Tan (Ozone)", price: 800, dur: "40 min", cat: "skin", desc: "" },
    { id: "s68", name: "Half Back D-Tan (Ozone)", price: 500, dur: "25 min", cat: "skin", desc: "" },

    // D-Tan O3
    { id: "s69", name: "Face D-Tan (O3)", price: 700, dur: "30 min", cat: "skin", desc: "" },
    { id: "s70", name: "Face & Neck D-Tan (O3)", price: 1000, dur: "40 min", cat: "skin", desc: "" },
    { id: "s71", name: "Full Hands D-Tan (O3)", price: 1000, dur: "30 min", cat: "skin", desc: "" },
    { id: "s72", name: "Half Leg D-Tan (O3)", price: 700, dur: "25 min", cat: "skin", desc: "" },
    { id: "s73", name: "Full Back D-Tan (O3)", price: 1000, dur: "40 min", cat: "skin", desc: "" },
    { id: "s74", name: "Half Back D-Tan (O3)", price: 700, dur: "25 min", cat: "skin", desc: "" },

    // Mani-Pedi (Hands & Feet)
    { id: "s75", name: "Pedicure", price: 900, dur: "45 min", cat: "nails", desc: "" },
    { id: "s76", name: "Manicure", price: 800, dur: "30 min", cat: "nails", desc: "" },
    { id: "s77", name: "Spa Pedicure", price: 1200, dur: "1 hr", cat: "nails", desc: "" },
    { id: "s78", name: "Spa Manicure", price: 800, dur: "45 min", cat: "nails", desc: "" },
    { id: "s79", name: "Ozone / O3 Pedicure", price: 1500, dur: "1 hr", cat: "nails", desc: "" },
    { id: "s80", name: "Ozone / O3 Manicure", price: 1200, dur: "45 min", cat: "nails", desc: "" },
    { id: "s81", name: "Nail Polish Feet / Hands", price: 300, dur: "15 min", cat: "nails", desc: "" },

    // Body & Spa Treatments
    { id: "s62", name: "Body Polish", price: 4000, dur: "1.5 hrs", cat: "body", desc: "Full body exfoliation & polishing. Price onwards." },
    { id: "s82", name: "Head Massage (Male)", price: 350, dur: "20 min", cat: "body", desc: "Relaxing stress-relief head massage" },
    { id: "s83", name: "Head Massage (Female)", price: 650, dur: "30 min", cat: "body", desc: "Soothing head massage with nourishing oils" },
    { id: "s84", name: "Head Massage with Hair Wash (Male)", price: 450, dur: "30 min", cat: "body", desc: "Invigorating massage followed by refreshing hair wash" },
    { id: "s85", name: "Head Massage with Hair Wash (Female)", price: 750, dur: "40 min", cat: "body", desc: "Deep relaxing massage followed by professional hair wash" },
    { id: "s86", name: "Foot Massage", price: 700, dur: "30 min", cat: "body", desc: "Pressure-point foot relaxation massage" },
    { id: "s87", name: "Hand Massage", price: 500, dur: "20 min", cat: "body", desc: "Therapeutic hand & forearm massage" },
    { id: "s88", name: "Face Massage", price: 300, dur: "20 min", cat: "body", desc: "Gentle rejuvenating facial massage" }
];

// ==========================================
// STATE
// ==========================================
let state = {
    services: [],
    date: "",
    time: "",
};

// ==========================================
// INIT
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    initCombCursor();
    initNavbar();
    initMobileDrawer();
    initReveal();
    initTypewriter();
    initBeforeAfter();
    renderMenu("hair");
    initMenuTabs();
    initMenuSearch();
    genDates();
    initForm();
    checkBooking();
    initStylistButtons();
    initKeratinButton();
});

// ==========================================
// COMB CURSOR
// ==========================================
function initCombCursor() {
    const comb = document.getElementById("cursorComb");
    const glow = document.getElementById("cursorGlow");
    if (!comb || !glow) return;
    if (!window.matchMedia("(pointer:fine)").matches) return;

    comb.style.opacity = "1";
    glow.style.opacity = "1";

    let mx = 0, my = 0, cx = 0, cy = 0, gx = 0, gy = 0;
    document.addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; });

    const tick = () => {
        cx += (mx - cx) * 0.15;
        cy += (my - cy) * 0.15;
        
        const isHover = comb.classList.contains('active');
        const rot = isHover ? '0deg' : '-30deg';
        const scale = isHover ? '1.35' : '1';
        
        comb.style.transform = `translate3d(calc(${cx}px - 50%), calc(${cy}px - 50%), 0) rotate(${rot}) scale(${scale})`;
        
        gx += (mx - gx) * 0.06;
        gy += (my - gy) * 0.06;
        glow.style.transform = `translate3d(calc(${gx}px - 50%), calc(${gy}px - 50%), 0)`;
        
        requestAnimationFrame(tick);
    };
    tick();
    bindHover();

    document.addEventListener("mouseleave", () => { comb.style.opacity = "0"; glow.style.opacity = "0"; });
    document.addEventListener("mouseenter", () => { comb.style.opacity = "1"; glow.style.opacity = "1"; });
}

function bindHover() {
    const comb = document.getElementById("cursorComb");
    const glow = document.getElementById("cursorGlow");
    if (!comb || !glow) return;
    document.querySelectorAll("[data-cursor-interact],a,button,select,input,textarea,.d-card,.t-slot,.menu-card,.gallery-card,.rev-card,.team-card").forEach(el => {
        el.addEventListener("mouseenter", () => { comb.classList.add("active"); glow.classList.add("active"); });
        el.addEventListener("mouseleave", () => { comb.classList.remove("active"); glow.classList.remove("active"); });
    });
}

// ==========================================
// NAVBAR
// ==========================================
function initNavbar() {
    const nav = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        nav.classList.toggle("scrolled", scrollY > 30);
        // Active link
        const links = document.querySelectorAll(".nav-links a:not(.nav-book)");
        let cur = "home";
        document.querySelectorAll("section").forEach(s => { if (scrollY >= s.offsetTop - 120) cur = s.id; });
        links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + cur));
    });
}

// ==========================================
// MOBILE DRAWER
// ==========================================
function initMobileDrawer() {
    const h = document.getElementById("hamburger");
    const d = document.getElementById("mobileDrawer");
    const o = document.getElementById("mobileOverlay");
    const toggle = () => { h.classList.toggle("open"); d.classList.toggle("open"); o.classList.toggle("open"); document.body.classList.toggle("no-scroll"); };
    h.addEventListener("click", toggle);
    o.addEventListener("click", toggle);
    document.querySelectorAll(".drawer-link").forEach(l => l.addEventListener("click", toggle));
}

// ==========================================
// SCROLL REVEAL
// ==========================================
function initReveal() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("revealed"); obs.unobserve(e.target); } });
    }, { threshold: 0.06, rootMargin: "0px 0px -30px 0px" });
    document.querySelectorAll(".reveal").forEach(r => obs.observe(r));
}

// ==========================================
// TYPEWRITER (editorial pulse hero)
// ==========================================
const TW_WORDS = ["Unisex Salon.", "Self-Expression.", "Hair Mastery.", "Pure Luxury.", "Your Style."];
let twi = 0, twc = 0, twDel = false;
function initTypewriter() {
    const el = document.getElementById("typewriter");
    if (!el) return;
    el.classList.add("typing");
    const tick = () => {
        const w = TW_WORDS[twi];
        el.textContent = twDel ? w.substring(0, twc - 1) : w.substring(0, twc + 1);
        twDel ? twc-- : twc++;
        let sp = twDel ? 45 : 110;
        if (!twDel && twc === w.length) { sp = 2200; twDel = true; }
        else if (twDel && twc === 0) { twDel = false; twi = (twi + 1) % TW_WORDS.length; sp = 400; }
        setTimeout(tick, sp);
    };
    tick();
}

// ==========================================
// BEFORE / AFTER SLIDER
// ==========================================
function initBeforeAfter() {
    const range = document.getElementById("baRange");
    const handle = document.getElementById("baHandle");
    const before = document.getElementById("baBefore");
    if (!range || !handle || !before) return;

    range.addEventListener("input", e => {
        const v = e.target.value;
        before.style.clipPath = `inset(0 ${100 - v}% 0 0)`;
        handle.style.left = v + "%";
    });
}

// ==========================================
// MENU RENDERING & SEARCH
// ==========================================
function renderMenu(cat, query = "") {
    const grid = document.getElementById("menuGrid");
    if (!grid) return;
    
    let items = SERVICES;
    
    // Filter by search query if it exists (ignore category tabs for global search)
    if (query.trim() !== "") {
        const q = query.toLowerCase();
        items = items.filter(s => s.name.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q) || s.cat.toLowerCase().includes(q));
    } else if (cat) {
        // Fallback to category filter if no search query
        items = cat === "all" ? items : items.filter(s => s.cat === cat);
    }
    
    if (items.length === 0) {
        grid.innerHTML = `<p class="ph-text" style="grid-column: 1 / -1; text-align: center; padding: 3rem 0;">No services found matching your search.</p>`;
        return;
    }

    grid.innerHTML = items.map(s => {
        const added = state.services.some(x => x.id === s.id);
        return `<div class="menu-card" data-cursor-interact>
            <div class="mc-top"><span class="mc-name">${s.name}</span><span class="mc-price">₹${s.price.toLocaleString("en-IN")}</span></div>
            <div class="mc-meta"><span class="mc-dur">⏳ ${s.dur}</span><span class="mc-cat">${s.cat}</span></div>
            <p class="mc-desc">${s.desc}</p>
            <button class="btn-add ${added ? 'added' : ''}" data-id="${s.id}" data-cursor-interact>${added ? '✓ Added' : '+ Add to Booking'}</button>
        </div>`;
    }).join("");
    grid.querySelectorAll(".btn-add").forEach(b => b.addEventListener("click", () => toggleSvc(b.getAttribute("data-id"))));
    bindHover();
}

function initMenuTabs() {
    document.querySelectorAll(".menu-tab").forEach(t => {
        t.addEventListener("click", () => {
            document.querySelectorAll(".menu-tab").forEach(x => x.classList.remove("active"));
            t.classList.add("active");
            
            // Clear search when clicking a tab
            const searchInput = document.getElementById("menuSearch");
            if(searchInput) searchInput.value = "";
            
            renderMenu(t.getAttribute("data-cat"));
        });
    });
}

function initMenuSearch() {
    const searchInput = document.getElementById("menuSearch");
    if (!searchInput) return;
    
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value;
        // When searching, we can unselect the active tab for clarity, or just let it be.
        // For now, we will unselect the active tab if there is a query to show global search mode.
        if(query.trim() !== "") {
            document.querySelectorAll(".menu-tab").forEach(x => x.classList.remove("active"));
        } else {
            // Restore default tab if search is cleared
            const hairTab = document.querySelector('.menu-tab[data-cat="hair"]');
            if(hairTab) {
                hairTab.classList.add("active");
                renderMenu("hair");
                return;
            }
        }
        
        renderMenu(null, query);
    });
}

// ==========================================
// SERVICE CART
// ==========================================
function toggleSvc(id) {
    const svc = SERVICES.find(s => s.id === id);
    if (!svc) return;
    const idx = state.services.findIndex(s => s.id === id);
    idx > -1 ? state.services.splice(idx, 1) : state.services.push(svc);
    renderCart();
    updateBtns();
}

function updateBtns() {
    document.querySelectorAll(".btn-add").forEach(b => {
        const added = state.services.some(s => s.id === b.getAttribute("data-id"));
        b.classList.toggle("added", added);
        b.textContent = added ? "✓ Added" : "+ Add to Booking";
    });
}

function renderCart() {
    const box = document.getElementById("selectedServicesSummary");
    if (!box) return;
    if (!state.services.length) {
        box.innerHTML = `<p class="ph-text">Add services from the menu above ↑</p>`;
        validateBtn();
        return;
    }
    let total = 0;
    const pills = state.services.map(s => {
        total += s.price;
        return `<span class="sel-pill">${s.name} (₹${s.price.toLocaleString("en-IN")})<span class="rm" data-id="${s.id}">&times;</span></span>`;
    }).join("");
    box.innerHTML = `<div>${pills}</div><div class="sel-total"><span>${state.services.length} selected</span><strong>₹${total.toLocaleString("en-IN")}</strong></div>`;
    box.querySelectorAll(".rm").forEach(r => r.addEventListener("click", () => toggleSvc(r.getAttribute("data-id"))));
    bindHover();
    validateBtn();
}

// ==========================================
// DATE & TIME
// ==========================================
function genDates() {
    const c = document.getElementById("dateScrollContainer");
    if (!c) return;
    const dn = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    let h = "";
    for (let i = 0; i < 7; i++) {
        const d = new Date(); d.setDate(d.getDate() + i);
        const fmt = d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
        if (i === 0) state.date = fmt;
        h += `<div class="d-card ${i === 0 ? 'active' : ''}" data-date="${fmt}"><span class="dd">${dn[d.getDay()]}</span><span class="dn">${d.getDate()}</span></div>`;
    }
    c.innerHTML = h;
    c.querySelectorAll(".d-card").forEach(card => {
        card.addEventListener("click", () => {
            c.querySelectorAll(".d-card").forEach(x => x.classList.remove("active"));
            card.classList.add("active");
            state.date = card.getAttribute("data-date");
            genTimes();
        });
    });
    genTimes();
}

function genTimes() {
    const c = document.getElementById("timeSlotsContainer");
    if (!c) return;
    state.time = "";
    validateBtn();
    const slots = ["09:00 AM","10:00 AM","11:00 AM","12:00 PM","01:00 PM","02:00 PM","03:00 PM","04:00 PM","05:00 PM","06:00 PM","07:00 PM"];
    const seed = state.date;
    let hash = 0;
    for (let i = 0; i < seed.length; i++) hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    const avail = slots.filter((_, i) => Math.abs(Math.sin(hash + i)) <= 0.68);
    if (!avail.length) { c.innerHTML = `<p class="ph-text" style="grid-column:1/-1;color:var(--red)">No slots. Try another date.</p>`; return; }
    c.innerHTML = avail.map(s => `<div class="t-slot" data-time="${s}">${s}</div>`).join("");
    c.querySelectorAll(".t-slot").forEach(s => {
        s.addEventListener("click", () => {
            c.querySelectorAll(".t-slot").forEach(x => x.classList.remove("active"));
            s.classList.add("active");
            state.time = s.getAttribute("data-time");
            validateBtn();
        });
    });
    bindHover();
}

// ==========================================
// BOOKING FORM
// ==========================================
function initForm() {
    const form = document.getElementById("salonBookingForm");
    if (!form) return;
    document.getElementById("userName").addEventListener("input", validateBtn);
    document.getElementById("userPhone").addEventListener("input", validateBtn);
    form.addEventListener("submit", e => { e.preventDefault(); submit(); });
    document.getElementById("resetBookingBtn").addEventListener("click", reset);
}

function validateBtn() {
    const b = document.getElementById("submitBookingBtn");
    if (!b) return;
    const n = document.getElementById("userName").value.trim();
    const p = document.getElementById("userPhone").value.trim();
    b.disabled = !(state.services.length && state.date && state.time && n && p);
}

function submit() {
    const n = document.getElementById("userName").value.trim();
    const p = document.getElementById("userPhone").value.trim();
    const ref = "HF-" + Math.floor(10000 + Math.random() * 90000);
    const total = state.services.reduce((s, x) => s + x.price, 0);
    const servicesList = state.services.map(s => s.name);
    const ticket = { id: ref, services: servicesList, price: total, date: state.date, time: state.time, name: n };
    
    localStorage.setItem("activeBooking", JSON.stringify(ticket));
    document.getElementById("receiptId").textContent = ref;
    document.getElementById("receiptServices").textContent = ticket.services.join(", ");
    document.getElementById("receiptWhen").textContent = `${ticket.date} at ${ticket.time}`;
    document.getElementById("receiptPrice").textContent = `₹${total.toLocaleString("en-IN")}`;
    document.getElementById("successOverlay").classList.add("open");
    checkBooking();

    // Construct WhatsApp message
    const waNumber = "919177892616";
    const message = `Hello Hair Factor Salon (SR Nagar)!\nI would like to book an appointment.\n\n*Name:* ${n}\n*Phone:* ${p}\n*Services:* ${servicesList.join(", ")}\n*Preferred Date:* ${state.date}\n*Preferred Time:* ${state.time}\n\nIs this slot available?`;
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(waUrl, "_blank");
}

function reset() {
    state = { services: [], date: "", time: "" };
    document.getElementById("salonBookingForm").reset();
    document.getElementById("successOverlay").classList.remove("open");
    renderCart(); updateBtns(); genDates();
}

// ==========================================
// BOOKING BADGE (localStorage)
// ==========================================
function checkBooking() {
    const badge = document.getElementById("upcomingBadge");
    const text = document.getElementById("badgeText");
    const cancel = document.getElementById("cancelBadgeBtn");
    if (!badge || !text) return;
    const saved = localStorage.getItem("activeBooking");
    if (saved) {
        const t = JSON.parse(saved);
        text.innerHTML = `<strong>Upcoming Visit!</strong><br>${t.services.join(", ")}<br>On <strong>${t.date} at ${t.time}</strong>`;
        badge.classList.remove("hidden");
        cancel.onclick = () => {
            if (confirm("Cancel your appointment?")) {
                localStorage.removeItem("activeBooking");
                badge.classList.add("hidden");
            }
        };
    } else badge.classList.add("hidden");
}

// ==========================================
// QUICK BOOK BUTTONS (scroll to booking)
// ==========================================
function initStylistButtons() {
    document.querySelectorAll(".select-stylist-quick").forEach(b => {
        b.addEventListener("click", () => {
            document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
        });
    });
}

// ==========================================
// KERATIN QUICK BOOK BUTTON
// ==========================================
function initKeratinButton() {
    const btn = document.getElementById("bookKeratinBtn");
    if (!btn) return;
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const keratinSvc = SERVICES.find(s => s.id === "s7" || s.name.toLowerCase().includes("keratin") || s.id === "k1");
        if (keratinSvc) {
            if (!state.services.some(s => s.id === keratinSvc.id)) {
                state.services.push(keratinSvc);
                renderCart();
                updateBtns();
            }
        }
        document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
    });
}
