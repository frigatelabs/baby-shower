# baby.jonathanandabbey.com: Luncheon Shower for Abbey Matthews

Saturday, January 9, 2027 · 11:30 AM · home of Lori Toffler, St. Andrew's Country Club, Boca Raton
Kindly reply by Saturday, December 26.

| File | What it is |
|---|---|
| `config.js` | **The only file you edit**: wording, date, address, RSVP-by, registry link, Firebase keys |
| `index.html` | Guest site: invitation, details, add-to-calendar, maps, registry, RSVP form |
| `hosts.html` | **Host portal** (`/hosts`): one shared passcode; live totals, attending/declined, gate list, thank-you addresses, copy/print/spreadsheet |
| `og.jpg` | Picture that shows when the link is texted, emailed or posted |
| `email/` | Email invitation (`invitation-email.html`) + its images |
| `art/` | The watercolor paintings used on the site and in the email |
| `database.rules.json` | Firebase rules: guests can only *add* a reply; only the host account can read or delete |

## 1. Move baby.jonathanandabbey.com to this site
The gender reveal currently lives at this address, and GitHub lets only one repo use a custom domain.
1. Old gender-reveal repo → Settings → Pages → Custom domain → **Remove**. *(Optional: re-add it as `reveal.jonathanandabbey.com` + a `reveal` CNAME in Squarespace to keep it online.)*
2. New repo (e.g. `baby-shower`) → push these files to `main` → Settings → Pages → Deploy from branch `main` / root.
3. Custom domain: `baby.jonathanandabbey.com` → Save → tick **Enforce HTTPS** once the certificate is issued.
4. **No DNS change needed.** The existing `baby` CNAME already points to your GitHub Pages.
5. Update the hub page's "Gender Reveal" button if you moved it.

## 2. Firebase (separate project recommended)
1. console.firebase.google.com → **Add project** (e.g. `matthews-luncheon-shower`). Analytics off.
2. Build → **Realtime Database** → Create → *locked mode* → Rules tab → paste `database.rules.json` → Publish.
3. Build → **Authentication** → Get started → **Email/Password** → Enable (leave "Email link" off).
4. Authentication → **Users → Add user**: email `hosts@jonathanandabbey.com`, password = **the shared passcode** (8+ characters; something like `keswick-margot-27`). This email account doesn't have to really exist.
5. Project settings → Your apps → **Web `</>`** → register → copy the config into `SHOWER_FIREBASE` in `config.js` → commit.
6. Text the passcode and `baby.jonathanandabbey.com/hosts` to your mom and Robin & Ashley.

Test: submit a fake RSVP on the site → it shows in `/hosts` within a second → delete it there.

## 3. Send the invitations
- **Text:** paste the link. iMessage shows the watercolor card picture automatically.
  > You're invited! 💐 A luncheon shower for Abbey, Saturday Jan 9 at 11:30 in Boca. Margot Alice is on her way Details & RSVP: baby.jonathanandabbey.com
- **Email:** open `email/invitation-email.html` in Chrome *after the site is live* → Select All → Copy → paste into a new Gmail message → BCC guests. Subject idea: *You're invited: A Luncheon Shower for Abbey*
- **Paper:** `print/invitation-5x7-print.pdf` (5.25×7.25" with 0.125" bleed; front = floral border + monogram + invitation, back = lighthouse painting + QR code to RSVP) for a print shop or Minted/Zazzle upload. `invitation-5x7-home.pdf` is the trimmed 5×7 for printing at home. 100–110 lb cotton or eggshell cover stock suits the watercolor.

## Artwork
Hand-painted watercolors (generated in Gemini) live in `art/`: `garland.jpg` (header), `sconset.jpg` ('Sconset lane with Myka, bunnies and Sankaty Head), `monogram.jpg` (wreath monogram), `shells.png` (section divider). Their paper backgrounds are cleaned to pure white and blended into the cream with `mix-blend-mode: multiply`, so there are no boxes around them. Full-resolution print versions are in the `brand/` folder of the package.

## Before you send: fill in
- Optional `notes`, e.g. gate instructions for St. Andrew's

## Colors
| Name | Hex | Use |
|---|---|---|
| Nantucket Cream | `#FBF6EF` | Paper & background |
| Harbor Ink | `#3D3236` | Main text |
| Beach Rose Mauve | `#8E5F70` | RSVP button, script line |
| Dusty Mauve | `#B98A9A` | Fine rules |
| Deep Sage | `#66745A` | Headings, links, secondary buttons |
| Dune Sage | `#A3AE8A` | Rules, accents (matches the painted leaves) |
| Sage Mist | `#ECEFE4` | Tinted panels |
| Hydrangea Blue | `#A7AEDB` | Accent from the paintings |

Fonts: Pinyon Script (one accent line) + Cormorant Garamond (everything else). Full sheet: `brand/color-palette.pdf`.
