import re

with open('style.css', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. CSS Variables
replacements = [
    ('--bg:             #0c0b10;', '--bg:             #0a0a0a;'),
    ('--bg2:            #13121a;', '--bg2:            #111111;'),
    ('--bg3:            #1b1a25;', '--bg3:            #1a1a1a;'),
    ('--bg4:            #24222f;', '--bg4:            #242424;'),
    ('--surface:        rgba(255,255,255,0.03);', '--surface:        rgba(255,255,255,0.04);'),
    ('--glass:          rgba(20,18,28,0.72);', '--glass:          rgba(10,10,10,0.78);'),
    ('--glass-border:   rgba(255,255,255,0.08);', '--glass-border:   rgba(255,255,255,0.1);'),
    ('--text:           #ede9e3;', '--text:           #f5f5f5;'),
    ('--text2:          #b5aea5;', '--text2:          #a0a0a0;'),
    ('--text3:          #7d7770;', '--text3:          #666666;'),
    ('--text4:          #504c47;', '--text4:          #444444;'),
    ('--amber:          #d4a574;', '--accent:         #ffffff;'),
    ('--amber-l:        #e8c49a;', '--accent-l:       #e0e0e0;'),
    ('--amber-d:        #b88550;', '--accent-d:       #cccccc;'),
    ('--gold:           #f0d078;', '--silver:         #d0d0d0;'),
    ('--glow:           rgba(212,165,116,0.12);', '--glow:           rgba(255,255,255,0.06);'),
    ('--glow-s:         rgba(212,165,116,0.25);', '--glow-s:         rgba(255,255,255,0.12);'),
    ('--border:         rgba(255,255,255,0.06);', '--border:         rgba(255,255,255,0.08);'),
    ('--border-a:       rgba(212,165,116,0.15);', '--border-a:       rgba(255,255,255,0.15);'),
    ('--border-a2:      rgba(212,165,116,0.30);', '--border-a2:      rgba(255,255,255,0.25);'),
]

for old, new in replacements:
    content = content.replace(old, new)

# 2. Rename variable usages
content = content.replace('var(--amber-l)', 'var(--accent-l)')
content = content.replace('var(--amber-d)', 'var(--accent-d)')
content = content.replace('var(--amber)', 'var(--accent)')
content = content.replace('var(--gold)', 'var(--silver)')

# 3. Comb cursor
content = content.replace('rgba(212,165,116,0.5)', 'rgba(255,255,255,0.4)')
content = content.replace('rgba(212,165,116,0.1)', 'rgba(255,255,255,0.08)')
content = content.replace('rgba(212,165,116,0.2)', 'rgba(255,255,255,0.15)')
content = content.replace('rgba(240,208,120,0.06)', 'rgba(255,255,255,0.06)')

# 4. Hero ambient glow
content = content.replace('rgba(212,165,116,.1)', 'rgba(255,255,255,.06)')
content = content.replace('rgba(212,165,116,.06)', 'rgba(255,255,255,.04)')
content = content.replace('rgba(212,165,116,.08)', 'rgba(255,255,255,.05)')
content = content.replace('rgba(212,165,116,.03)', 'rgba(255,255,255,.02)')

# 5. Editorial pulse / typewriter
content = content.replace('.hero-h1 em{font-style:italic;color:var(--accent)}', '.hero-h1 em{font-style:normal;font-weight:700;color:#ffffff}')
content = content.replace('rgba(232,196,154,0)', 'rgba(255,255,255,0)')
content = content.replace('rgba(232,196,154,.25)', 'rgba(255,255,255,.25)')

# 9. Navbar scrolled
content = content.replace('rgba(12,11,16,0.92)', 'rgba(10,10,10,0.92)')

# 12. Hero badge
content = content.replace('rgba(20,18,28,.85)', 'rgba(10,10,10,.85)')

# 13. Review star color
# We need to change star color to #ffffff
content = content.replace('color:var(--silver);', 'color:#ffffff;') # Since we renamed var(--gold) to var(--silver), it might be var(--silver) now
content = content.replace('color:var(--accent)', 'color:#ffffff')
content = content.replace('.rev-stars{color:var(--silver)', '.rev-stars{color:#ffffff')
content = content.replace('.badge-stars{display:flex;gap:2px;color:var(--silver)}', '.badge-stars{display:flex;gap:2px;color:#ffffff}')
content = content.replace('.trust-stars{color:var(--silver)', '.trust-stars{color:#ffffff')

# 11. Button box-shadows and other rgba containing 212,165,116 or 240,208,120 or 232,196,154
content = re.sub(r'rgba\(212,165,116,([0-9.]+)\)', r'rgba(255,255,255,\1)', content)
content = re.sub(r'rgba\(240,208,120,([0-9.]+)\)', r'rgba(255,255,255,\1)', content)
content = re.sub(r'rgba\(232,196,154,([0-9.]+)\)', r'rgba(255,255,255,\1)', content)

# 10. Remaining hardcoded hex colors
content = content.replace('#d4a574', '#ffffff')
content = content.replace('#e8c49a', '#e0e0e0')
content = content.replace('#b88550', '#cccccc')
content = content.replace('#f0d078', '#d0d0d0')

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
