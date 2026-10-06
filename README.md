# APL Poker Tour Calendars

Single-file, offline-friendly schedule calendars for Australian Poker League (APL) series. Each series has a desktop version (all days side by side) and a mobile version (day tabs).

| Series | Desktop | Mobile |
|--------|---------|--------|
| 2026 APL Million | `2026-APL-Million.html` | `2026-APL-Million-mobile.html` |
| APLPT Queensland January 2026 | `APLPT-Southport-Jan-2026.html` | `APLPT-Southport-Jan-2026-mobile.html` |
| APL NQ Classic February 2026 | `NQ-Classic-2026.html` | `NQ-Classic-2026-mobile.html` |
| APLPT Queensland May 2026 | `APLPT-Queensland-May-2026.html` | `APLPT-Queensland-May-2026-mobile.html` |
| APLPT Adelaide June 2026 | `APLPT-Adelaide-June-2026.html` | `APLPT-Adelaide-June-2026-mobile.html` |

`index.html` links to all of them.

## Features

- **Color-coded event types**: Main Event, High Roller, NLH, PLO/other variants, Satellite, Bounty, Special
- **Include / exclude filters**: click a filter once to include, again to exclude, again to reset. Includes **Dealer Dealt**.
- **Event details**: time, buy-in, starting stack, blind duration, guarantee, re-entry, dealer-dealt badge
- **My events**: tap an event to highlight it. Picks are saved and still highlighted next time you open the page.
- **Export** your picks to a text file

## Saving your events

Picks are saved in your browser (`localStorage`), keyed by day + time + event title, so a later schedule correction will not move your highlights onto the wrong event. Desktop and mobile versions of a series share the same picks when opened from the same place.

Tap the blue 💾 button in any calendar for:

- **Download backup (.json)** / **Restore from backup**: a file you control, safe from browser storage clearing
- **Copy link with my events**: a link that restores your picks on any device
- **Clear all my events**

If the browser cannot save (some in-app viewers and private tabs), the panel says so and points you to the backup.

### If a downloaded page stops working later

Opening a downloaded `.html` from a phone's Downloads/Files viewer often runs from a temporary location, and browsers can also clear storage for sites you have not visited recently. Both can make a saved copy break or forget your picks. The reliable fix is to open the calendars from one permanent https address instead of a downloaded file:

1. Repo **Settings → Pages**, deploy from the branch root.
2. Open `https://<user>.github.io/<repo>/` on your phone and use **Add to Home Screen**.

Served over https, `sw.js` also caches the pages so they open offline after the first visit. Note that GitHub Pages sites are publicly reachable.

## Updating schedule data

Each calendar embeds its events in a `tournamentData` array:

```javascript
{
    id: 1,
    event: "#3",
    title: "Main Event Flight 1",
    type: "main-event",   // main-event, high-roller, nlh, plo, satellite, bounty, special
    time: "7:00 PM",
    buyin: "$480",
    stack: "50K",
    blinds: "30m",
    reentry: "1 Re-Entry",
    guarantee: "$100,000",
    dealer: true
}
```

## Source

Schedules come from the official APL pages, e.g. https://playapl.com/aplpt/aplpt-queensland-january-2026. The schedule tabs are rendered by JavaScript, so event data is entered from the published schedule.

This is an unofficial fan-made tool. All APL branding and tournament information belongs to the Australian Poker League.
