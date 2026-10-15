# The Garden Café website
HTML, CSS and JavaScript only. No backend.

Edit `js/app.js`:
- `CONFIG.wa`: the café WhatsApp number, digits only with country code (e.g. 9779812345678).
- `CONFIG.address`, `hours`, `phone`.
- `MENU`: items and prices. The prices there are SAMPLES. Replace them with the real menu before going live.

Run locally: `python3 -m http.server 8000` then open http://localhost:8000
Deploy free: push to GitHub and enable Settings > Pages (branch main, root).

## Header, payments and gallery
- Header text "Hookha Hub presents / The Garden Café" is in `index.html` (top of the file).
- `CONFIG.phone` and `CONFIG.wa` fill the header, About Us, footer and the floating WhatsApp button.
- `CONFIG.pay`: your eSewa ID, Khalti ID and bank details. Add a QR image path in `qr` to show it. The site does not process payments: customers pay in their own app and send a screenshot on WhatsApp.
- Gallery: copy photos into `assets/gallery/` and add a line to `GALLERY` in `js/app.js`.
- Owner preview: open `index.html?admin` to see an "Add photos" button. Photos added this way are stored only in your own browser.

## Opening hours and map
- `CONFIG.open` and `CONFIG.close` (24-hour, e.g. "08:00") set the hours on the home page and in About Us. The "Open now / Closed now" badge uses Nepal time. The current hours are samples: set the real ones.
- `CONFIG.location`: street, nearest landmark, cross street and town. They show in Find Us and build the Google Map. Until you replace the [ ... ] text, a sample map is shown.
- For the exact pin: in Google Maps choose Share > Embed a map, copy the link inside src="..." and paste it into `CONFIG.mapEmbed`.

## Photos
- Menu photos and the lobby/cabin/extra gallery photos are TEMPORARY random stock photos loaded from loremflickr.com. Replace them with your own before going live: add `img:"assets/food/momo.jpg"` to a menu item, and change `src` in `GALLERY`.
- Gallery categories come from the `c` field in `GALLERY` (Garden, Tables, Entrance, Lobby, Cabins). Type a new name to create a new category.
- `CONFIG.deliveryArea` sets the town in the home delivery text.
