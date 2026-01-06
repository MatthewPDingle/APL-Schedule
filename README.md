# APLPT Queensland January 2026 - Poker Tournament Calendar

A web-based calendar application for viewing and tracking poker tournaments from the APLPT Queensland series at Southport Sharks, Gold Coast (January 10-18, 2026).

## Schedule Overview

This calendar includes the complete APLPT Queensland January 2026 schedule with:

- **45 Main Events** + satellites (92 total schedule entries)
- **$655,000+** in guaranteed prize pools
- **Buy-ins** ranging from $45 to $2,500
- **20+ Dealer Dealt** events

### Featured Events

| Event | Buy-in | Stack | Blinds | Guarantee |
|-------|--------|-------|--------|-----------|
| APL $100K Invitational | Qualifiers Only | 60K | 30m | $100,000 |
| APLPT Main Event (8 flights) | $480 | 50K | 30m | $100,000 |
| Jackstar Super High Roller | $1,500 | 80K | 40m | $300,000 |
| The Centurion | $2,500 | 100K | 45m | $75,000 |
| Monster Stack | $360 | 75K | 20m | $50,000 |
| Turbo High Roller | $1,100 | 40K | 20m | $40,000 |
| APLPT Classic (6 flights) | $180 | 50K | 30m | $30,000 |
| Sunday Super Stack | $360 | 75K | 20m | $30,000 |
| Think Fast Five Hundred | $500 | 40K | 20m | $20,000 |
| One-Shot Freezeout | $250 | 40K | 20m | $10,000 |

## Features

- **9-Column Layout** - All days displayed side-by-side for easy comparison
- **Color-coded events** - Different colors for each event type
- **Include/Exclude Filters** - Click to include, click again to exclude, click again to reset
- **Dealer Dealt Badge** - Blue "D" indicator shows dealer-dealt events
- **Event Details** - Starting stack, blind levels, and re-entry rules
- **Event Selection** - Click events to build your personal schedule
- **Export Schedule** - Export your selected events to a text file

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
2. Browse the full schedule across all 9 days (horizontal scroll if needed)
3. Click on events to select them (they'll be highlighted)
4. Use the filters to include or exclude specific event types
5. Export your selected schedule using the "Export" button

## Event Type Color Coding

| Color | Type | Description |
|-------|------|-------------|
| Red | Main Event | APLPT Main Event flights and Day 2 |
| Purple | High Roller | $1,100+ buy-in events (Centurion, Jackstar SHR, etc.) |
| Blue | NLH | Standard No Limit Hold'em events |
| Green | PLO | Pot Limit Omaha and mixed games |
| Orange | Satellite | Qualifier events for larger tournaments |
| Pink | Bounty | Knockout/bounty format events |
| Teal | Special | Ladies, Masters (50+), Teams, Pineapple variants |

## Filter System

The filter buttons cycle through three states:
1. **Neutral** (default) - No filtering applied
2. **Include** (green with checkmark) - Show ONLY this event type
3. **Exclude** (red with strikethrough) - Hide this event type

You can combine multiple filters:
- Include "Main Event" + Include "High Roller" = Shows both types
- Exclude "Satellite" = Hides satellites, shows everything else

## Event Data Format

Each event in the schedule includes:

```javascript
{
    id: 1,
    event: "#1",              // Event number or "Sat" for satellites
    title: "Event Name",
    type: "nlh",              // main-event, high-roller, nlh, plo, satellite, bounty, special
    time: "12:00 PM",
    buyin: "$480",
    stack: "50K",             // Starting stack
    blinds: "30m",            // Blind level duration
    reentry: "1 Re-Entry",    // Re-entry rules
    guarantee: "$100,000",
    dealer: true              // Dealer dealt (shows "D" badge)
}
```

## File Structure

```
.
├── poker-calendar.html          # Main calendar application (includes schedule data)
├── extract-schedule-data.js     # Browser console script to extract data from APL website
└── README.md                    # This file
```

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Tips for Using the Calendar

1. **Planning Your Schedule**: Select all events you're interested in, then use "Selected" view to see just your picks
2. **Finding Dealer-Dealt Events**: Look for the blue "D" badge next to the time
3. **Comparing Buy-ins**: All 9 days are visible at once for easy comparison
4. **Export for Offline**: Use the export feature to create a text file you can reference without internet
5. **Mobile Use**: The calendar scrolls horizontally on smaller screens

## Official Information

For official APLPT information, visit: https://playapl.com/aplpt/aplpt-queensland-january-2026

## License

This is an unofficial fan-made tool. All APLPT branding and tournament information belongs to the Australian Poker League.
