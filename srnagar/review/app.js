// ═══════════════════════════════════════════════════════
//  HAIR FACTOR SALON — REVIEW FUNNEL
//  Configuration & Application Logic
// ═══════════════════════════════════════════════════════

// ┌──────────────────────────────────────────────────────┐
// │              ★ CONFIGURATION ★                       │
// │  Paste your URLs below between the quotes.           │
// └──────────────────────────────────────────────────────┘

/**
 * GOOGLE REVIEW URL
 * -----------------
 * This is the URL customers will be redirected to when they give 4 or 5 stars.
 * To find this URL:
 *   1. Search for "Hair Factor Salon" on Google Maps.
 *   2. Click on your salon listing.
 *   3. Click "Write a review".
 *   4. Copy the URL from your browser's address bar.
 *   5. Paste it below, replacing the placeholder text.
 */
const GOOGLE_REVIEW_URL = "https://www.google.com/maps/search/?api=1&query=Hair+Factor+Salon+Beside+Persis+Cafe+Srinivasa+Nagar+Sanjeeva+Reddy+Nagar+Hyderabad+500038";

/**
 * GOOGLE SHEETS WEBHOOK URL
 * -------------------------
 * This is the URL of your Google Apps Script web app.
 * It receives 1-3 star feedback and saves it to your Google Sheet.
 * Follow the README instructions to set this up.
 * Once deployed, paste the web app URL below.
 */
const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxvqJRQs3SCumboziBXk-Cj-fj1t9hzlvkyRmBS3qvqhE_joB0Ox8m4dsQd7knW5W1G3Q/exec";

// ═══════════════════════════════════════════════════════
//  DO NOT EDIT BELOW THIS LINE (unless you know what you're doing)
// ═══════════════════════════════════════════════════════

let selectedRating = 0;
let pendingPayload = null;

// ═══ DOM ELEMENTS ═══
const screens = {
    rating: document.getElementById("screenRating"),
    feedback: document.getElementById("screenFeedback"),
    thanksFeedback: document.getElementById("screenThanksFeedback"),
    thanksGoogle: document.getElementById("screenThanksGoogle"),
    error: document.getElementById("screenError"),
};

const starsContainer = document.getElementById("starsContainer");
const starHint = document.getElementById("starHint");
const feedbackForm = document.getElementById("feedbackForm");
const btnSubmit = document.getElementById("btnSubmit");
const btnRetry = document.getElementById("btnRetry");

// ═══ SCREEN MANAGEMENT ═══
function showScreen(screenId) {
    Object.values(screens).forEach(s => {
        s.classList.remove("active");
        s.style.display = "none";
    });
    const target = screens[screenId];
    // Force reflow for animation restart
    void target.offsetWidth;
    target.style.display = "block";
    target.classList.add("active");
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ═══ STAR RATING LOGIC ═══
const starButtons = starsContainer.querySelectorAll(".star-btn");

const hintMessages = {
    1: "😞 Very poor",
    2: "😕 Could be better",
    3: "😐 Average",
    4: "😊 Great!",
    5: "🤩 Amazing!",
};

function updateStars(rating, isHover = false) {
    starButtons.forEach((btn, i) => {
        const starRating = i + 1;
        if (isHover) {
            btn.classList.toggle("hovered", starRating <= rating);
        } else {
            btn.classList.remove("hovered");
            btn.classList.toggle("selected", starRating <= rating);
        }
    });
    if (rating > 0) {
        starHint.textContent = hintMessages[rating];
        starHint.style.color = rating >= 4 ? "#4ade80" : rating === 3 ? "#fbbf24" : "#f87171";
    }
}

// Star hover effects
starButtons.forEach(btn => {
    const rating = parseInt(btn.dataset.rating);

    btn.addEventListener("mouseenter", () => {
        if (selectedRating === 0) updateStars(rating, true);
    });

    btn.addEventListener("mouseleave", () => {
        if (selectedRating === 0) {
            updateStars(0, true);
            starHint.textContent = "Tap a star to rate your experience";
            starHint.style.color = "";
        }
    });

    btn.addEventListener("click", () => {
        selectedRating = rating;
        updateStars(rating);

        // Add pop animation
        btn.classList.add("pop");
        setTimeout(() => btn.classList.remove("pop"), 400);

        // Delay before transitioning to next screen
        setTimeout(() => {
            if (rating >= 4) {
                // 4 or 5 stars → Google Review redirect
                showScreen("thanksGoogle");
                setTimeout(() => {
                    if (GOOGLE_REVIEW_URL && GOOGLE_REVIEW_URL !== "PASTE_YOUR_GOOGLE_REVIEW_URL_HERE") {
                        window.location.href = GOOGLE_REVIEW_URL;
                    }
                }, 1200);
            } else {
                // 1, 2, or 3 stars → Feedback form
                showScreen("feedback");
            }
        }, 600);
    });
});

// ═══ FEEDBACK FORM SUBMISSION ═══
feedbackForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const feedbackMain = document.getElementById("feedbackMain").value.trim();
    if (!feedbackMain) {
        document.getElementById("feedbackMain").focus();
        return;
    }

    // Collect form data
    const payload = {
        timestamp: new Date().toISOString(),
        rating: selectedRating,
        name: document.getElementById("customerName").value.trim(),
        phone: document.getElementById("customerPhone").value.trim(),
        email: document.getElementById("customerEmail").value.trim(),
        feedback: feedbackMain,
        additionalComments: document.getElementById("feedbackExtra").value.trim(),
    };

    pendingPayload = payload;

    // Show loading state
    btnSubmit.querySelector(".btn-text").style.display = "none";
    btnSubmit.querySelector(".btn-loading").style.display = "flex";
    btnSubmit.disabled = true;

    try {
        await sendToGoogleSheets(payload);
        showScreen("thanksFeedback");
    } catch (err) {
        console.error("Submission failed:", err);
        showScreen("error");
    } finally {
        // Reset button state
        btnSubmit.querySelector(".btn-text").style.display = "inline";
        btnSubmit.querySelector(".btn-loading").style.display = "none";
        btnSubmit.disabled = false;
    }
});

// ═══ GOOGLE SHEETS INTEGRATION ═══
async function sendToGoogleSheets(data) {
    if (!GOOGLE_SHEET_WEBHOOK_URL || GOOGLE_SHEET_WEBHOOK_URL === "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEBHOOK_URL_HERE") {
        // If webhook not configured, simulate success (for testing)
        console.warn("Google Sheet webhook URL not configured. Logging data to console instead:");
        console.table(data);
        return;
    }

    const response = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    // Note: With mode "no-cors", we can't read the response.
    // The request will be sent, and Google Apps Script will process it.
    // If there's a network error, the fetch will throw and we catch it above.
    return response;
}

// ═══ RETRY LOGIC ═══
btnRetry.addEventListener("click", async () => {
    if (!pendingPayload) {
        // If no pending data, go back to feedback form
        showScreen("feedback");
        return;
    }

    showScreen("feedback");

    // Re-attempt submission after a brief moment
    setTimeout(async () => {
        btnSubmit.querySelector(".btn-text").style.display = "none";
        btnSubmit.querySelector(".btn-loading").style.display = "flex";
        btnSubmit.disabled = true;

        try {
            await sendToGoogleSheets(pendingPayload);
            showScreen("thanksFeedback");
        } catch (err) {
            console.error("Retry failed:", err);
            showScreen("error");
        } finally {
            btnSubmit.querySelector(".btn-text").style.display = "inline";
            btnSubmit.querySelector(".btn-loading").style.display = "none";
            btnSubmit.disabled = false;
        }
    }, 500);
});
