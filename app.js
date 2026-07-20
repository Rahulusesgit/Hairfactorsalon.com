// ==========================================
// COMPLETE SERVICE MENU DATA
// ==========================================
const SERVICES = [
    { id: "m1", name: "Threading - Eyebrows", price: 50, dur: "45 min", cat: "skin", desc: "" },
    { id: "m2", name: "Threading - Upper Lip", price: 50, dur: "45 min", cat: "skin", desc: "" },
    { id: "m3", name: "Threading - Lower Lip", price: 50, dur: "45 min", cat: "skin", desc: "" },
    { id: "m4", name: "Threading - Chin", price: 50, dur: "45 min", cat: "skin", desc: "" },
    { id: "m5", name: "Threading - Sidelock", price: 50, dur: "45 min", cat: "skin", desc: "" },
    { id: "m6", name: "Threading - Jawline", price: 50, dur: "45 min", cat: "skin", desc: "" },
    { id: "m7", name: "Threading - Forehead", price: 50, dur: "45 min", cat: "skin", desc: "" },
    { id: "m8", name: "Threading - Neck", price: 50, dur: "45 min", cat: "skin", desc: "" },
    { id: "m9", name: "Threading - Face", price: 500, dur: "45 min", cat: "skin", desc: "" },
    { id: "m10", name: "Waxing - Upper Lip", price: 100, dur: "45 min", cat: "skin", desc: "" },
    { id: "m11", name: "Waxing - Chin", price: 100, dur: "45 min", cat: "skin", desc: "" },
    { id: "m12", name: "Waxing - Sidelock", price: 100, dur: "45 min", cat: "skin", desc: "" },
    { id: "m13", name: "Waxing - Face", price: 500, dur: "45 min", cat: "skin", desc: "" },
    { id: "m14", name: "Waxing - Underarms", price: 300, dur: "45 min", cat: "skin", desc: "" },
    { id: "m15", name: "Waxing - Arms Half", price: 400, dur: "45 min", cat: "skin", desc: "" },
    { id: "m16", name: "Waxing - Arms Full", price: 800, dur: "45 min", cat: "skin", desc: "" },
    { id: "m17", name: "Waxing - Half Legs", price: 600, dur: "45 min", cat: "skin", desc: "" },
    { id: "m18", name: "Waxing - Full Legs", price: 1200, dur: "45 min", cat: "skin", desc: "" },
    { id: "m19", name: "Waxing - Midriff", price: 800, dur: "45 min", cat: "skin", desc: "" },
    { id: "m20", name: "Waxing - Full Back / Front", price: 800, dur: "45 min", cat: "skin", desc: "" },
    { id: "m21", name: "Waxing - Full (Hands, Legs & Underarms)", price: 2500, dur: "45 min", cat: "skin", desc: "" },
    { id: "m22", name: "Waxing - Body", price: 5000, dur: "45 min", cat: "skin", desc: "" },
    { id: "m23", name: "Waxing - Bikini Line", price: 2000, dur: "45 min", cat: "skin", desc: "" },
    { id: "m24", name: "Smoothening - Fringe", price: 1300, dur: "45 min", cat: "hair", desc: "Let's go of the frizz tame your hair with this smoothening services without compromising on the in hair" },
    { id: "m25", name: "Smoothening - Crown", price: 2800, dur: "45 min", cat: "hair", desc: "" },
    { id: "m26", name: "Smoothening - Upto Neck", price: 3800, dur: "45 min", cat: "hair", desc: "" },
    { id: "m27", name: "Smoothening - Upto Shoulder", price: 4200, dur: "45 min", cat: "hair", desc: "" },
    { id: "m28", name: "Smoothening - Below Shoulder", price: 5200, dur: "45 min", cat: "hair", desc: "" },
    { id: "m29", name: "Smoothening - Waist & Below", price: 6200, dur: "45 min", cat: "hair", desc: "" },
    { id: "m30", name: "Rebonding - Fringe", price: 1650, dur: "45 min", cat: "hair", desc: "Get Super Sleek poker straight hair for hot & Sexy look that's fresh off the runway" },
    { id: "m31", name: "Rebonding - Crown", price: 3000, dur: "45 min", cat: "hair", desc: "" },
    { id: "m32", name: "Rebonding - Upto Neck", price: 4200, dur: "45 min", cat: "hair", desc: "" },
    { id: "m33", name: "Rebonding - Upto Shoulder", price: 5800, dur: "45 min", cat: "hair", desc: "" },
    { id: "m34", name: "Rebonding - Below Shoulder", price: 7000, dur: "45 min", cat: "hair", desc: "" },
    { id: "m35", name: "Rebonding - Waist & Below", price: 8000, dur: "45 min", cat: "hair", desc: "" },
    { id: "m36", name: "Strait Therapy - Fringe", price: 2000, dur: "45 min", cat: "hair", desc: "Love the Straight look but worried about hair nourishment? Trust the therapy to deep condition your locks while straightening them too." },
    { id: "m37", name: "Strait Therapy - Crown", price: 4000, dur: "45 min", cat: "hair", desc: "" },
    { id: "m38", name: "Strait Therapy - Upto Neck", price: 5100, dur: "45 min", cat: "hair", desc: "" },
    { id: "m39", name: "Strait Therapy - Upto Shoulder", price: 6800, dur: "45 min", cat: "hair", desc: "" },
    { id: "m40", name: "Strait Therapy - Below Shoulder", price: 8500, dur: "45 min", cat: "hair", desc: "" },
    { id: "m41", name: "Strait Therapy - Waist & Below", price: 10500, dur: "45 min", cat: "hair", desc: "" },
    { id: "m42", name: "Cysteine - Upto Neck", price: 3800, dur: "45 min", cat: "hair", desc: "Reverse the damage of chemicals and pollution with the power of proteins. Restore your hair, Making it frizz-free, manageable and full of health." },
    { id: "m43", name: "Cysteine - Upto Shoulder", price: 4800, dur: "45 min", cat: "hair", desc: "" },
    { id: "m44", name: "Cysteine - Upto Mid Back", price: 6500, dur: "45 min", cat: "hair", desc: "" },
    { id: "m45", name: "Cysteine - Upto Waist", price: 7500, dur: "45 min", cat: "hair", desc: "" },
    { id: "m46", name: "Cysteine - Below Waist", price: 9400, dur: "45 min", cat: "hair", desc: "" },
    { id: "m47", name: "Almond / Aroma / Olive / Coconut Oil Massage", price: 500, dur: "45 min", cat: "hair", desc: "After all that running around, de-stress with a soothing head massage that comes with the goodness of Natural Oils." },
    { id: "m48", name: "Moroccan Oil Head Massage", price: 1000, dur: "45 min", cat: "hair", desc: "After all that running around, de-stress with a soothing head massage that comes with the goodness of Natural Oils." },
    { id: "m49", name: "Dandruff Control Treatment", price: 1000, dur: "45 min", cat: "hair", desc: "Dandruff on your mind? Wash it away forever, with this effective dandruff control treatment that lets you flaunt your gorgeous tresses" },
    { id: "m50", name: "Hair Fall Treatment", price: 1000, dur: "45 min", cat: "hair", desc: "Forget about all your hair fall, worries now get Shiny, long and strong locks with this anti-hair fall treatment" },
    { id: "m51", name: "Loreal De-Stress Spa", price: 2000, dur: "45 min", cat: "hair", desc: "Bring Life back into your locks with this ritual that's designed for those who love to experiment with colour & texture. With cell perfectory technology, give your hair the repair and cere it's longing for" },
    { id: "m52", name: "Loreal Repair hair Spa", price: 2000, dur: "45 min", cat: "hair", desc: "Here's a moisturizing Marvel for your gorgeous Tresses Infuse your hair with protein rich fruit and plant extracts, leaving it hydrated." },
    { id: "m53", name: "Loreal Protein Rush Spa", price: 2500, dur: "45 min", cat: "hair", desc: "Get deep and intensive hydration with rich anti-oxidants and proteins which have the ability to restore and renew even the most porous and damaged hair." },
    { id: "m54", name: "Mythic Oil", price: 2000, dur: "45 min", cat: "hair", desc: "Spa is bliss when it strengthens and hydrate your hair, loaded with benefits of the seven wonders mythic oil" },
    { id: "m55", name: "Moroccan Oil Spa - Intense Hydrating", price: 2300, dur: "45 min", cat: "hair", desc: "Each strand of your hair deserves deep hydration. Pamper it with omega-3 oils and Vitamins, leaving them soft and gorgeous." },
    { id: "m56", name: "Moroccan Oil Spa - Restorative", price: 2400, dur: "45 min", cat: "hair", desc: "Restore strength and shine to your hair. Loaded with omega-3 oils and Vitamins, it's time to give your hair some love." },
    { id: "m57", name: "Moroccan Smooth Spa", price: 3000, dur: "45 min", cat: "hair", desc: "Argan butter melts smoothly into the hair making it frizz free and nourished giving it a brilliant shine." },
    { id: "m58", name: "Additional Charge for Spas Below Waist", price: 500, dur: "45 min", cat: "hair", desc: "" },
    { id: "m59", name: "Flavored Waxing - Half Arms", price: 400, dur: "45 min", cat: "skin", desc: "" },
    { id: "m60", name: "Flavored Waxing - Full Arms", price: 800, dur: "45 min", cat: "skin", desc: "" },
    { id: "m61", name: "Flavored Waxing - Half Legs", price: 600, dur: "45 min", cat: "skin", desc: "" },
    { id: "m62", name: "Flavored Waxing - Full Legs", price: 1300, dur: "45 min", cat: "skin", desc: "" },
    { id: "m63", name: "Flavored Waxing - Midriff", price: 800, dur: "45 min", cat: "skin", desc: "" },
    { id: "m64", name: "Flavored Waxing - Full Back / Front", price: 800, dur: "45 min", cat: "skin", desc: "" },
    { id: "m65", name: "Flavored Waxing - Full (Hands, Legs & Underarms)", price: 2000, dur: "45 min", cat: "skin", desc: "" },
    { id: "m66", name: "Flavored Waxing - Full (Hands, Legs & Peel off Underarms)", price: 2500, dur: "45 min", cat: "skin", desc: "" },
    { id: "m67", name: "Flavored Waxing - Body", price: 4000, dur: "45 min", cat: "skin", desc: "" },
    { id: "m68", name: "Peel off Waxing - Upper Lips", price: 100, dur: "45 min", cat: "skin", desc: "" },
    { id: "m69", name: "Peel off Waxing - Lower Lips", price: 100, dur: "45 min", cat: "skin", desc: "" },
    { id: "m70", name: "Peel off Waxing - Chin", price: 100, dur: "45 min", cat: "skin", desc: "" },
    { id: "m71", name: "Peel off Waxing - Sidelocks", price: 150, dur: "45 min", cat: "skin", desc: "" },
    { id: "m72", name: "Peel off Waxing - Jawline", price: 100, dur: "45 min", cat: "skin", desc: "" },
    { id: "m73", name: "Peel off Waxing - Forehead", price: 100, dur: "45 min", cat: "skin", desc: "" },
    { id: "m74", name: "Peel off Waxing - Face", price: 600, dur: "45 min", cat: "skin", desc: "" },
    { id: "m75", name: "Peel off Waxing - Under Arms", price: 300, dur: "45 min", cat: "skin", desc: "" },
    { id: "m76", name: "Peel off Waxing - Bikini Line", price: 2000, dur: "45 min", cat: "skin", desc: "" },
    { id: "m77", name: "Brazilian Wax", price: 1600, dur: "45 min", cat: "skin", desc: "" },
    { id: "m78", name: "Buttocks crack", price: 500, dur: "45 min", cat: "skin", desc: "" },
    { id: "m79", name: "Stylist Cut", price: 430, dur: "45 min", cat: "hair", desc: "be a Cut above the rest with our wide range of stylish haircuts. Trendy and glam everyday." },
    { id: "m80", name: "Child Cut", price: 350, dur: "45 min", cat: "hair", desc: "" },
    { id: "m81", name: "Beard Trimming", price: 170, dur: "45 min", cat: "hair", desc: "" },
    { id: "m82", name: "Shaving", price: 130, dur: "45 min", cat: "hair", desc: "" },
    { id: "m83", name: "Men's Hair Color - Color Mustache", price: 500, dur: "45 min", cat: "hair", desc: "" },
    { id: "m84", name: "Men's Hair Color - Inoa Color", price: 1500, dur: "45 min", cat: "hair", desc: "" },
    { id: "m85", name: "Men's Hair Color - Majerial Color", price: 1500, dur: "45 min", cat: "hair", desc: "" },
    { id: "m86", name: "Men's Hair Color - Dimension A", price: 1300, dur: "45 min", cat: "hair", desc: "" },
    { id: "m87", name: "Men's Hair Color - Streax", price: 1300, dur: "45 min", cat: "hair", desc: "" },
    { id: "m88", name: "Men's Hair Spa & Oil Massage - Oil Massage", price: 400, dur: "45 min", cat: "hair", desc: "" },
    { id: "m89", name: "Men's Hair Spa & Oil Massage - Moroccan Oil Massage", price: 1000, dur: "45 min", cat: "hair", desc: "" },
    { id: "m90", name: "Men's Hair Spa & Oil Massage - Loreal Destress Spa", price: 1200, dur: "45 min", cat: "hair", desc: "" },
    { id: "m91", name: "Men's Hair Spa & Oil Massage - Loreal Repair Spa", price: 1200, dur: "45 min", cat: "hair", desc: "" },
    { id: "m92", name: "Men's Hair Spa & Oil Massage - Loreal Protein Spa", price: 1200, dur: "45 min", cat: "hair", desc: "" },
    { id: "m93", name: "Men's Hair Spa & Oil Massage - Moroccan Oil Spa", price: 2000, dur: "45 min", cat: "hair", desc: "" },
    { id: "m94", name: "Men's Hair Boost - Serious Condition", price: 300, dur: "45 min", cat: "hair", desc: "" },
    { id: "m95", name: "Men's Hair Styling - Wash & Plain Dry (with Conditioning)", price: 300, dur: "45 min", cat: "hair", desc: "" },
    { id: "m96", name: "Men's Hair Styling - Hair Styling", price: 250, dur: "45 min", cat: "hair", desc: "" },
    { id: "m97", name: "Stylist Cut", price: 1100, dur: "45 min", cat: "hair", desc: "be a Cut above the rest with our wide range of stylish haircuts. Trendy and glam everyday." },
    { id: "m98", name: "Senior Stylist", price: 1500, dur: "45 min", cat: "hair", desc: "" },
    { id: "m99", name: "Fringe", price: 300, dur: "45 min", cat: "hair", desc: "" },
    { id: "m100", name: "Child Cut", price: 800, dur: "45 min", cat: "hair", desc: "" },
    { id: "m101", name: "Wash & Plain Dry - Upto Shoulder", price: 400, dur: "45 min", cat: "hair", desc: "Flaunt a style you love the most. from curly to straight locks or high volume tresses, blow dry your hair, as you like." },
    { id: "m102", name: "Wash & Plain Dry - Upto Waist", price: 650, dur: "45 min", cat: "hair", desc: "" },
    { id: "m103", name: "Wash & Blow Dry (With Conditioner) - Upto Shoulder", price: 700, dur: "45 min", cat: "hair", desc: "" },
    { id: "m104", name: "Wash & Blow Dry (With Conditioner) - Upto Waist", price: 950, dur: "45 min", cat: "hair", desc: "" },
    { id: "m105", name: "Ultimate Blow Dry - Upto Shoulder", price: 600, dur: "45 min", cat: "hair", desc: "" },
    { id: "m106", name: "Ultimate Blow Dry - Upto Waist", price: 700, dur: "45 min", cat: "hair", desc: "" },
    { id: "m107", name: "Crimping & Ironing", price: 1100, dur: "45 min", cat: "hair", desc: "Straighten or crimp your hair to get a sleek, frizz - free and stylish hairstyle" },
    { id: "m108", name: "Tongs", price: 1100, dur: "45 min", cat: "hair", desc: "Flaunt Those irresistibly gorgeous curls as they bounce with joy" },
    { id: "m109", name: "Moroccan Straight Finish - Upto Shoulder", price: 700, dur: "45 min", cat: "hair", desc: "Dazzle the world with your shiny. Straight tresses with moroccan serum" },
    { id: "m110", name: "Moroccan Straight Finish - Upto Waist", price: 900, dur: "45 min", cat: "hair", desc: "" },
    { id: "m111", name: "Braids", price: 350, dur: "45 min", cat: "hair", desc: "Wear a new hairstyle every day. Play with new updos and explore more style to feel your glamorous best." },
    { id: "m112", name: "Formal", price: 800, dur: "45 min", cat: "hair", desc: "" },
    { id: "m113", name: "Informal", price: 500, dur: "45 min", cat: "hair", desc: "" },
    { id: "m114", name: "Serious Conditioning", price: 250, dur: "45 min", cat: "hair", desc: "Give your looks an instant dose of beauty with personalized treatments that give you spa-like hair" },
    { id: "m115", name: "Global Loreal Majirel", price: 3500, dur: "45 min", cat: "hair", desc: "Mix, Match, Layer or blend. Dress up your hair with some stunning hues and shades to look ramp ready" },
    { id: "m116", name: "Global Loreal Inoa", price: 3500, dur: "45 min", cat: "hair", desc: "" },
    { id: "m117", name: "Dimension", price: 3000, dur: "45 min", cat: "hair", desc: "" },
    { id: "m118", name: "Streax", price: 3000, dur: "45 min", cat: "hair", desc: "" },
    { id: "m119", name: "Root Touch up Majirel", price: 1500, dur: "45 min", cat: "hair", desc: "" },
    { id: "m120", name: "Root Touch up Inoa", price: 1800, dur: "45 min", cat: "hair", desc: "" },
    { id: "m121", name: "Highlights Per Foil - Loreal", price: 450, dur: "45 min", cat: "hair", desc: "Wear the shades of your personility on your hair, block colour your tresses or streak it in style" },
    { id: "m122", name: "Highlights Per Foil - Streax", price: 350, dur: "45 min", cat: "hair", desc: "" },
    { id: "m123", name: "Balayage", price: 4000, dur: "45 min", cat: "hair", desc: "Flaunt a trend that's loved by vanity heads the world over. Transform your hair with Ombre, a colouring technique that lets you play with shades and tones of your choice giving you a style edge" },
    { id: "m124", name: "Camming Facial", price: 1100, dur: "45 min", cat: "skin", desc: "Instantly calms and soothes slightly irritated skin." },
    { id: "m125", name: "Choco Revival Facial", price: 1300, dur: "45 min", cat: "skin", desc: "Your skin deserves attention too. Revive it with this soothing facial and boost it with a nourished, healthy shine with the help of Chocolate" },
    { id: "m126", name: "Good Bye Tan Facial", price: 2000, dur: "45 min", cat: "skin", desc: "An ideal de-tan for first timers, this facial will restore your skin with a radiant glow." },
    { id: "m127", name: "Acne Scar Reducing Facial", price: 3000, dur: "45 min", cat: "skin", desc: "Reduces existing acne breakout and control excess sebum secretion" },
    { id: "m128", name: "Fruit Facial", price: 1800, dur: "45 min", cat: "skin", desc: "Love all things natural? Hydrate your skin with this fruity treat that's full of Papaya, Orange and Banana goodness. Fresh and supple, get healthy looking skin like never before." },
    { id: "m129", name: "Gloss Intense Hydrating Ritual", price: 2200, dur: "45 min", cat: "skin", desc: "A facial with intense hydration that improves the skin texture has rich ingredients like Glacial Water and Mint extract, it's time to deeply nourish your skin, making it look divine." },
    { id: "m130", name: "Ageless Facial", price: 4000, dur: "45 min", cat: "skin", desc: "Meet a younger you by saying goodbye to ageing cells. With the right amount of hydration and rejuvenation, leave your skin looking young and plum with this facial" },
    { id: "m131", name: "Insta Sheen", price: 1900, dur: "45 min", cat: "skin", desc: "Give your skin a makeover with radiance that's instant. Rich in Vitamin C and power packed with the goodness of fruit peel, it's time to restore your natural skin tone and look desirable." },
    { id: "m132", name: "Perfect Radiance Facial", price: 4500, dur: "45 min", cat: "skin", desc: "Luxuriously radiant skin is just a facial away. Give it that perfect balance of glow with this exquisite facial, leaving it picture-perfect." },
    { id: "m133", name: "Clean-Ups", price: 1000, dur: "45 min", cat: "skin", desc: "Deeply cleanses the clogged pores and gently exfoliates the dead skin from the skin, leaving it clean and clear" },
    { id: "m134", name: "Citrus Clean-up", price: 700, dur: "45 min", cat: "skin", desc: "Add zing to your skin with a rush of citrus extracts. Fresh and invigorating. deeply cleanse it, leaving it soft and bright." },
    { id: "m135", name: "Berry Clean-up", price: 800, dur: "45 min", cat: "skin", desc: "Bring beauty back into your skin with the power of berries. Infused with Raspberry antioxidants, deep cleanse your skin, leaving it fresh and plump." },
    { id: "m136", name: "Fresh Fruit Clean-Up", price: 1000, dur: "45 min", cat: "skin", desc: "Get fruitilicious skin that's fresh and pure. With the goodness of the choicest fruits, cleanse and nourish your skin." },
    { id: "m137", name: "O3 Clean-Up", price: 2000, dur: "45 min", cat: "skin", desc: "Deeply cleanses the clogged pores and gently exfoliates the dead skin from the skin, make your Skin lighter effect." },
    { id: "m138", name: "Eye Rejuvenation", price: 500, dur: "45 min", cat: "skin", desc: "Here's a soothing treatment for the delicate skin around your eyes. Relaxes tired eyes, leaving them rejuvenated" },
    { id: "m139", name: "Organic Eye / Lip Treatment", price: 1000, dur: "45 min", cat: "skin", desc: "Enchant the world with your smile. Truly organic, accentuates your eyes / lips, leaving them luscious with the goodness of exotic berries." },
    { id: "m140", name: "Bleaching - Upper Lip", price: 150, dur: "45 min", cat: "skin", desc: "" },
    { id: "m141", name: "Bleaching - Face and Neck", price: 800, dur: "45 min", cat: "skin", desc: "" },
    { id: "m142", name: "Bleaching - Face, Neck and Blouse Line", price: 1500, dur: "45 min", cat: "skin", desc: "" },
    { id: "m143", name: "Bleaching - Under Arms", price: 500, dur: "45 min", cat: "skin", desc: "" },
    { id: "m144", name: "Bleaching - Half Arms", price: 1000, dur: "45 min", cat: "skin", desc: "" },
    { id: "m145", name: "Bleaching - Full Arms", price: 1500, dur: "45 min", cat: "skin", desc: "" },
    { id: "m146", name: "Bleaching - Feet", price: 800, dur: "45 min", cat: "skin", desc: "" },
    { id: "m147", name: "Bleaching - Half Legs", price: 800, dur: "45 min", cat: "skin", desc: "" },
    { id: "m148", name: "Bleaching - Full Legs", price: 1600, dur: "45 min", cat: "skin", desc: "" },
    { id: "m149", name: "Bleaching - Midriff", price: 600, dur: "45 min", cat: "skin", desc: "" },
    { id: "m150", name: "Bleaching - Half Back / Front", price: 1000, dur: "45 min", cat: "skin", desc: "" },
    { id: "m151", name: "Bleaching - Full Back / Front", price: 1500, dur: "45 min", cat: "skin", desc: "" },
    { id: "m152", name: "Bleaching - Body", price: 2500, dur: "45 min", cat: "skin", desc: "" },
    { id: "m153", name: "Detan - Face & Neck", price: 1000, dur: "45 min", cat: "skin", desc: "" },
    { id: "m154", name: "Detan - Face, Neck and Blouse Line", price: 1200, dur: "45 min", cat: "skin", desc: "" },
    { id: "m155", name: "Detan - Under Arms", price: 500, dur: "45 min", cat: "skin", desc: "" },
    { id: "m156", name: "Detan - Half Arms", price: 1000, dur: "45 min", cat: "skin", desc: "" },
    { id: "m157", name: "Detan - Full Arms", price: 1500, dur: "45 min", cat: "skin", desc: "" },
    { id: "m158", name: "Detan - Feet", price: 800, dur: "45 min", cat: "skin", desc: "" },
    { id: "m159", name: "Detan - Half Legs", price: 800, dur: "45 min", cat: "skin", desc: "" },
    { id: "m160", name: "Detan - Full Legs", price: 1600, dur: "45 min", cat: "skin", desc: "" },
    { id: "m161", name: "Detan - Midriff", price: 800, dur: "45 min", cat: "skin", desc: "" },
    { id: "m162", name: "Detan - Half Back", price: 1000, dur: "45 min", cat: "skin", desc: "" },
    { id: "m163", name: "Detan - Full Back", price: 2000, dur: "45 min", cat: "skin", desc: "" },
    { id: "m164", name: "Detan - Full Body", price: 2500, dur: "45 min", cat: "skin", desc: "" },
    { id: "m165", name: "Change of Polish", price: 100, dur: "45 min", cat: "nails", desc: "" },
    { id: "m166", name: "Cut, File & Polish", price: 200, dur: "45 min", cat: "nails", desc: "" },
    { id: "m167", name: "Regular Manicure", price: 1000, dur: "45 min", cat: "nails", desc: "This manicure will pamper your hands, leaving them de-stressed and visibly groomed." },
    { id: "m168", name: "Aroma Next Manicure", price: 1500, dur: "45 min", cat: "nails", desc: "Perfectly moisturise your skin with aromatic essential oils. It's a routine that will soften your skin while de-stressing your senses." },
    { id: "m169", name: "Peppermint Manicure", price: 1500, dur: "45 min", cat: "nails", desc: "A perfect choice for summer, give your hands a cool, refreshing treat by removing dead cells. Also get ready for some tingling glow." },
    { id: "m170", name: "Chocolate Manicure", price: 1900, dur: "45 min", cat: "nails", desc: "Give your skin a delicious treat. Rich in cocoa and antioxidants, deeply moisturise your skin making it soft and supple." },
    { id: "m171", name: "Signature Hands Ritual", price: 2000, dur: "45 min", cat: "nails", desc: "An elaborate Hand Ritual, using the finest natural extracts & Dead Sea minerals visibly reduces tanning in one sitting" },
    { id: "m172", name: "Regular Pedicure", price: 1000, dur: "45 min", cat: "nails", desc: "This pedicure will pamper your feet, leaving it de-stressed and visibly groomed." },
    { id: "m173", name: "Aroma Next Pedicure", price: 1500, dur: "45 min", cat: "nails", desc: "Perfectly moisturise your skin with aromatic essential oils. It's a routine that will soften your skin while de-stressing your senses." },
    { id: "m174", name: "Peppermint Pedicure", price: 1800, dur: "45 min", cat: "nails", desc: "A perfect choice for summer, give your feet a cool, refreshing treat by removing dead cells. Also get ready for some tingling glow." },
    { id: "m175", name: "Chocolate Pedicure", price: 2000, dur: "45 min", cat: "nails", desc: "Give your skin a delicious treat. Rich in cocoa and antioxidants, deeply moisturise your skin making it soft and supple." },
    { id: "m176", name: "Signature Feet Ritual", price: 2500, dur: "45 min", cat: "nails", desc: "An elaborate Foot Ritual, using Finest natural extracts & Dead Sea minerals visibly reduce tanning in one sitting. A mechanical device is used to remove dead skin from the soles of the feet" },
    { id: "m177", name: "Flavored Waxing - Half Arms", price: 400, dur: "45 min", cat: "skin", desc: "" },
    { id: "m178", name: "Flavored Waxing - Full Arms", price: 800, dur: "45 min", cat: "skin", desc: "" },
    { id: "m179", name: "Flavored Waxing - Half Legs", price: 600, dur: "45 min", cat: "skin", desc: "" },
    { id: "m180", name: "Flavored Waxing - Full Legs", price: 1200, dur: "45 min", cat: "skin", desc: "" },
    { id: "m181", name: "Flavored Waxing - Midriff", price: 800, dur: "45 min", cat: "skin", desc: "" },
    { id: "m182", name: "Flavored Waxing - Full Back / Front", price: 800, dur: "45 min", cat: "skin", desc: "" },
    { id: "m183", name: "Flavored Waxing - Full (Hands, Legs & Underarms)", price: 2000, dur: "45 min", cat: "skin", desc: "" },
    { id: "m184", name: "Flavored Waxing - Full (Hands, Legs & Peel off Underarms)", price: 2500, dur: "45 min", cat: "skin", desc: "" },
    { id: "m185", name: "Flavored Waxing - Body", price: 4000, dur: "45 min", cat: "skin", desc: "" },
    { id: "m186", name: "Peel off Waxing - Upper Lips", price: 100, dur: "45 min", cat: "skin", desc: "" },
    { id: "m187", name: "Peel off Waxing - Lower Lips", price: 100, dur: "45 min", cat: "skin", desc: "" },
    { id: "m188", name: "Peel off Waxing - Chin", price: 100, dur: "45 min", cat: "skin", desc: "" },
    { id: "m189", name: "Peel off Waxing - Sidelocks", price: 150, dur: "45 min", cat: "skin", desc: "" },
    { id: "m190", name: "Peel off Waxing - Jawline", price: 100, dur: "45 min", cat: "skin", desc: "" },
    { id: "m191", name: "Peel off Waxing - Forehead", price: 100, dur: "45 min", cat: "skin", desc: "" },
    { id: "m192", name: "Peel off Waxing - Face", price: 600, dur: "45 min", cat: "skin", desc: "" },
    { id: "m193", name: "Peel off Waxing - Under Arms", price: 300, dur: "45 min", cat: "skin", desc: "" },
    { id: "m194", name: "Peel off Waxing - Bikini Line", price: 2000, dur: "45 min", cat: "skin", desc: "" },
    { id: "m195", name: "Peel off Waxing - Brazilian Wax", price: 1500, dur: "45 min", cat: "skin", desc: "" },
    { id: "m196", name: "Peel off Waxing - Buttocks crack", price: 600, dur: "45 min", cat: "skin", desc: "" },
    { id: "m197", name: "Wedding / Reception Classic Cream (Artist)", price: 6500, dur: "45 min", cat: "bridal", desc: "" },
    { id: "m198", name: "Wedding / Reception Liquid Makeup (Artist)", price: 8500, dur: "45 min", cat: "bridal", desc: "" },
    { id: "m199", name: "Wedding / Reception Liquid Makeup (Senior Artist)", price: 11000, dur: "45 min", cat: "bridal", desc: "" },
    { id: "m200", name: "Wedding / Reception Liquid Makeup (Bridal Expert)", price: 14500, dur: "45 min", cat: "bridal", desc: "" },
    { id: "m201", name: "Wedding / Reception Ultimate Look Makeup (Senior Artist)", price: 12500, dur: "45 min", cat: "bridal", desc: "" },
    { id: "m202", name: "Wedding / Reception Ultimate Look Makeup (Bridal Expert)", price: 16500, dur: "45 min", cat: "bridal", desc: "" },
    { id: "m203", name: "Wedding / Reception High Definition Makeup (Senior Artist)", price: 17000, dur: "45 min", cat: "bridal", desc: "" },
    { id: "m204", name: "Wedding / Reception High Definition Makeup (Bridal Expert)", price: 19000, dur: "45 min", cat: "bridal", desc: "" },
    { id: "m205", name: "Special Occasion Classic Cream (Artist)", price: 5000, dur: "45 min", cat: "bridal", desc: "Engagement / Sangeet / Mehendi / Cocktail" },
    { id: "m206", name: "Special Occasion Liquid Makeup (Artist)", price: 6000, dur: "45 min", cat: "bridal", desc: "Engagement / Sangeet / Mehendi / Cocktail" },
    { id: "m207", name: "Special Occasion Liquid Makeup (Senior Artist)", price: 8500, dur: "45 min", cat: "bridal", desc: "Engagement / Sangeet / Mehendi / Cocktail" },
    { id: "m208", name: "Special Occasion Liquid Makeup (Bridal Expert)", price: 11500, dur: "45 min", cat: "bridal", desc: "Engagement / Sangeet / Mehendi / Cocktail" },
    { id: "m209", name: "Special Occasion Ultimate Look Makeup (Senior Artist)", price: 11000, dur: "45 min", cat: "bridal", desc: "Engagement / Sangeet / Mehendi / Cocktail" },
    { id: "m210", name: "Special Occasion Ultimate Look Makeup (Bridal Expert)", price: 13000, dur: "45 min", cat: "bridal", desc: "Engagement / Sangeet / Mehendi / Cocktail" },
    { id: "m211", name: "Special Occasion High Definition Makeup (Senior Artist)", price: 13500, dur: "45 min", cat: "bridal", desc: "Engagement / Sangeet / Mehendi / Cocktail" },
    { id: "m212", name: "Special Occasion High Definition Makeup (Bridal Expert)", price: 15000, dur: "45 min", cat: "bridal", desc: "Engagement / Sangeet / Mehendi / Cocktail" },
    { id: "m213", name: "Party Makeup Classic Cream (Artist)", price: 2600, dur: "45 min", cat: "bridal", desc: "" },
    { id: "m214", name: "Party Makeup Liquid Makeup (Artist)", price: 3500, dur: "45 min", cat: "bridal", desc: "" },
    { id: "m215", name: "Party Makeup Liquid Makeup (Senior Artist)", price: 4000, dur: "45 min", cat: "bridal", desc: "" },
    { id: "m216", name: "Party Makeup Liquid Makeup (Bridal Expert)", price: 4500, dur: "45 min", cat: "bridal", desc: "" },
    { id: "m217", name: "Party Makeup Ultimate Look Makeup (Senior Artist)", price: 4500, dur: "45 min", cat: "bridal", desc: "" },
    { id: "m218", name: "Party Makeup Ultimate Look Makeup (Bridal Expert)", price: 6000, dur: "45 min", cat: "bridal", desc: "" },
    { id: "m219", name: "Party Makeup High Definition Makeup (Senior Artist)", price: 7000, dur: "45 min", cat: "bridal", desc: "" },
    { id: "m220", name: "Party Makeup High Definition Makeup (Bridal Expert)", price: 8000, dur: "45 min", cat: "bridal", desc: "" },
    { id: "m221", name: "Grooming Makeup", price: 1800, dur: "45 min", cat: "grooming", desc: "" },
    { id: "m222", name: "Groom Makeup", price: 5000, dur: "45 min", cat: "grooming", desc: "" },
    { id: "m223", name: "Saree Draping - Specialised", price: 600, dur: "45 min", cat: "bridal", desc: "" },
    { id: "m224", name: "Saree Draping - Classic", price: 500, dur: "45 min", cat: "bridal", desc: "" },
    { id: "m225", name: "Peppermint Manicure & Pedicure Masque", price: 500, dur: "45 min", cat: "nails", desc: "" },
    { id: "m226", name: "Chocolate Manicure & Pedicure Masque", price: 500, dur: "45 min", cat: "nails", desc: "" },
    { id: "m227", name: "Soft Caress Masque - For Hands", price: 200, dur: "45 min", cat: "nails", desc: "Wrap your hand and feet in the warmth of Paraffin Wax! While its natural emollient intensely softens your skin, let the heat soothe your reflexes" },
    { id: "m228", name: "Soft Caress Masque - For Feet", price: 250, dur: "45 min", cat: "nails", desc: "Wrap your hand and feet in the warmth of Paraffin Wax! While its natural emollient intensely softens your skin, let the heat soothe your reflexes" },
    { id: "m229", name: "Summer Detanning Masque - For Hands", price: 1500, dur: "45 min", cat: "nails", desc: "Here's the perfect summer overhaul. When the temperature takes a toll, soothe your skin and fight the tan with this awesome masque." },
    { id: "m230", name: "Summer Detanning Masque - For Feet", price: 500, dur: "45 min", cat: "nails", desc: "Here's the perfect summer overhaul. When the temperature takes a toll, soothe your skin and fight the tan with this awesome masque." },
    { id: "m231", name: "Foot Relaxing Massage", price: 800, dur: "45 min", cat: "nails", desc: "Get stress-free feet with this massage that works its magic inside out. With techniques that involve the use of Lemon Grass balm, leave your feet feeling on top of the world." },
    { id: "m232", name: "Back Massage - Detoxifying", price: 550, dur: "45 min", cat: "body", desc: "Pamper your body with a wonderful blend of herb essential oils like Jupiter Berry and Rosemary. Detoxify it, leaving it feeling alive." },
    { id: "m233", name: "Back Massage - Relaxing", price: 550, dur: "45 min", cat: "body", desc: "Ease those stressed nerves and calm your senses with this relaxing body massage. With a blissful amalgamation of Ylang Ylang and Lavender essential oils, it's time to be at your your relaxed best." },
    { id: "m234", name: "Back Massage - Stress Relief", price: 550, dur: "45 min", cat: "body", desc: "De-stress after a busy day. Revitalize your body with a unique blend of spices and essential herb oils like Basil and Ginger." },
    { id: "m235", name: "De-stressing Back Treatment", price: 1800, dur: "45 min", cat: "body", desc: "Give your back the care it deserves with this calming massage that's a guaranteed stress-buster. Created to soothe, you'll be left wanting more." },
    { id: "m236", name: "Body Massage - Detoxifying", price: 2000, dur: "45 min", cat: "body", desc: "Pamper your body with a wonderful blend of herb essential oils like Jupiter Berry and Rosemary. Detoxify it, leaving it feeling alive." },
    { id: "m237", name: "Body Massage - Relaxing", price: 2000, dur: "45 min", cat: "body", desc: "Ease those stressed nerves and calm your senses with this relaxing body massage. With a blissful amalgamation of Ylang Ylang and Lavender essential oils, it's time to be at your your relaxed best." },
    { id: "m238", name: "Body Massage - Stress Relief", price: 2000, dur: "45 min", cat: "body", desc: "De-stress after a busy day. Revitalize your body with a unique blend of spices and essential herb oils like Basil and Ginger." },
    { id: "m239", name: "Body Polishing", price: 3500, dur: "45 min", cat: "body", desc: "A body polishing is a popular body treatment that exfoliates and hydrate your skin leaving it smooth & Soft." },
    { id: "m240", name: "Hand Polishing", price: 600, dur: "45 min", cat: "body", desc: "A hand polishing is a popular Hand treatment that exfoliates and hydrate your skin leaving it smooth & Soft." },
    { id: "m241", name: "Pre Bridal Package (15 days before wedding)", price: 4500, dur: "45 min", cat: "bridal", desc: "" },
    { id: "m242", name: "Pre Bridal Package (30 days before wedding)", price: 9500, dur: "45 min", cat: "bridal", desc: "" },
    { id: "m243", name: "Pre Bridal Package (45 days before wedding)", price: 18000, dur: "45 min", cat: "bridal", desc: "" },
    { id: "m244", name: "HAIR + SKIN PACKAGE", price: 3800, dur: "45 min", cat: "bridal", desc: "" },
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
    const ticket = { id: ref, services: state.services.map(s => s.name), price: total, date: state.date, time: state.time, name: n };
    localStorage.setItem("activeBooking", JSON.stringify(ticket));
    document.getElementById("receiptId").textContent = ref;
    document.getElementById("receiptServices").textContent = ticket.services.join(", ");
    document.getElementById("receiptWhen").textContent = `${ticket.date} at ${ticket.time}`;
    document.getElementById("receiptPrice").textContent = `â‚¹${total.toLocaleString("en-IN")}`;
    document.getElementById("successOverlay").classList.add("open");
    checkBooking();
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

