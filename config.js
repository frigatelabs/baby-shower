// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE ONLY. Everything on the site reads from here.
//  Leave a value as null and the site shows "coming soon" / hides it.
// ─────────────────────────────────────────────────────────────
window.SHOWER = {
  // Invitation wording (top of the page)
  inviteLead:  "Please join us for",
  title:       "A Luncheon Shower",          // set in script
  celebrating: "Abbey Matthews",
  tagline:     "Margot Alice is on her way",
  hostedBy:    "Hosted by Robin Matthews and Ashley Brewer",
  babyName:    "Margot Alice Matthews",     // used in calendar invites

  // When — full ISO with Eastern offset (-05:00 in winter)
  start:    "2027-01-09T11:30:00-05:00",
  end:      null,                           // e.g. "2027-01-09T14:30:00-05:00" (calendar defaults to 3 hrs)
  timeZone: "America/New_York",

  // Where
  venueName:    "the home of Lori Toffler",
  addressLines: ["7455 Fenwick Place", "St. Andrew's Country Club", "Boca Raton, Florida 33496"],
  mapQuery:     "7455 Fenwick Place, Boca Raton, FL 33496",

  rsvpBy:      "2026-12-19",
  registryUrl: "https://my.babylist.com/abbey-matthews",

  notes: [
    "In lieu of a card, please bring a children’s book with a personal inscription for Margot.",
  ],

  maxPartySize: 6,
  siteUrl: "https://baby.jonathanandabbey.com",
};

// Firebase web config — Firebase console → Project settings → Your apps → Web app.
// While apiKey still says PASTE_ME the site runs in demo mode (nothing is saved).
window.SHOWER_FIREBASE = {
  apiKey:            "AIzaSyCPoXZ1lv3a238zeF7jUYR7dole6YwYZzo",
  authDomain:        "matthews-luncheon-shower.firebaseapp.com",
  databaseURL:       "https://matthews-luncheon-shower-default-rtdb.firebaseio.com",
  projectId:         "matthews-luncheon-shower",
  storageBucket:     "matthews-luncheon-shower.appspot.com",
  messagingSenderId: "",
  appId:             "",
};

// Host portal (hosts.html). Create this user in Firebase → Authentication → Users → Add user,
// with the shared passcode as its password. Hosts only ever type the passcode.
window.SHOWER_PORTAL_EMAIL = "hosts@jonathanandabbey.com";

