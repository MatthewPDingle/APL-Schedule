# APLPT Queensland January 2026 - Poker Tournament Calendar

A web-based calendar application for viewing and tracking poker tournaments from the APLPT Queensland series at Southport Sharks, Gold Coast (January 10-18, 2026).

## Schedule Overview

This calendar includes the complete APLPT Queensland January 2026 schedule with:

- **49 Events** across 9 days
- **$650,000+** in guaranteed prize pools
- **Buy-ins** ranging from $80 to $2,500

### Featured Events

| Event | Buy-in | Guarantee |
|-------|--------|-----------|
| $100K Invitational | Invite Only | $100,000 |
| APLPT Main Event | $1,100 | $100,000 |
| Jackstar Super High Roller | $2,500 | $300,000 |
| Centurion | $2,500 | $75,000 |
| Mystery Bounty | $1,100 | $50,000 |
| Deep Freeze | $600 | $40,000 |
| Monster Stack | $330 | $30,000 |
| PLO Championship | $400 | $20,000 |

## Features

- Full 9-day schedule view - See all tournament events in one page
- Color-coded events - Different colors for each event type
- Advanced filtering - Filter events by type to focus on what interests you
- Event selection - Mark events you're interested in attending
- Export schedule - Export your selected events to a text file
- Responsive design - Works on desktop, tablet, and mobile devices

## How to View the Calendar

### Option 1: Open Directly in Browser
Simply double-click `poker-calendar.html` or right-click and select "Open with" your preferred browser.

### Option 2: Local Web Server (for development)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (npx)
npx serve

# Using PHP
php -S localhost:8000
```
Then open `http://localhost:8000/poker-calendar.html` in your browser.

### Option 3: VS Code Live Server
If using VS Code, install the "Live Server" extension, then right-click `poker-calendar.html` and select "Open with Live Server".

## Quick Start

1. Open `poker-calendar.html` in your web browser
2. Browse the full schedule across all 9 days
3. Click on events to select them (they'll be highlighted)
4. Use the filters to show only specific event types
5. Export your selected schedule using the "Export Schedule" button

## Event Type Color Coding

- **Red** - Main Event
- **Purple** - High Roller / Invitational
- **Blue** - No Limit Hold'em
- **Green** - PLO (Pot Limit Omaha)
- **Orange** - Satellite
- **Pink** - Bounty

## File Structure

```
.
├── poker-calendar.html          # Main calendar application (includes schedule data)
├── extract-schedule-data.js     # Browser console script to extract data from APL website
└── README.md                    # This file
```

## Updating Schedule Data

The schedule data is embedded in `poker-calendar.html` starting around line 469. To update:

1. Open `poker-calendar.html` in a text editor
2. Find the `tournamentData` constant
3. Modify events using this format:

```javascript
{
    id: 1,
    number: "Event #1",
    title: "Event Name",
    type: "main-event",  // Options: main-event, high-roller, no-limit-holdem, plo, satellite, bounty
    typeLabel: "Main Event",
    time: "12:00 PM",
    buyin: "$1,100",
    guarantee: "$100,000",
    format: "No Limit Hold'em"
}
```

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Tips for Using the Calendar

1. **Planning Your Schedule**: Select all events you're interested in, then use "Selected Only" view to see just your picks
2. **Finding Similar Events**: Use the event type filters to find all PLO games, satellites, etc.
3. **Export for Offline**: Use the export feature to create a text file you can reference without internet
4. **Mobile Use**: The calendar is fully responsive - save the HTML file to your phone for on-the-go access

## Official Information

For official APLPT information, visit: https://playapl.com/aplpt/aplpt-queensland-january-2026

## License

This is an unofficial fan-made tool. All APLPT branding and tournament information belongs to the Australian Poker League.
