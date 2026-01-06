# APLPT Queensland January 2026 - Poker Tournament Calendar

A web-based calendar application for viewing and tracking poker tournaments from the APLPT Queensland series (January 10-18, 2026).

## Features

- 📅 **Full 9-day schedule view** - See all tournament events in one page
- 🎨 **Color-coded events** - Different colors for each event type (Main Event, High Roller, PLO, Bounty, etc.)
- 🔍 **Advanced filtering** - Filter events by type to focus on what interests you
- ⭐ **Event selection** - Mark events you're interested in attending
- 📤 **Export schedule** - Export your selected events to a text file
- 📱 **Responsive design** - Works on desktop, tablet, and mobile devices

## Quick Start

1. Open `poker-calendar.html` in your web browser
2. Browse the full schedule across all 9 days
3. Click on events to select them (they'll be highlighted)
4. Use the filters to show only specific event types
5. Export your selected schedule using the "Export Schedule" button

## Event Type Color Coding

- 🔴 **Red** - Main Event
- 🟣 **Purple** - High Roller
- 🔵 **Blue** - No Limit Hold'em
- 🟢 **Green** - PLO (Pot Limit Omaha)
- 🟠 **Orange** - Satellite
- 🟣 **Pink** - Bounty

## How to Add Real Schedule Data

The calendar currently contains sample tournament data. To replace it with the actual APLPT Queensland schedule:

### Method 1: Browser Console Extraction (Recommended)

1. Go to https://playapl.com/aplpt/aplpt-queensland-january-2026/schedule
2. Open your browser's console:
   - **Chrome/Edge**: Press `F12` or `Ctrl+Shift+J` (Windows) / `Cmd+Option+J` (Mac)
   - **Firefox**: Press `F12` or `Ctrl+Shift+K` (Windows) / `Cmd+Option+K` (Mac)
   - **Safari**: Enable Developer menu in Preferences, then press `Cmd+Option+C`
3. Copy the entire contents of `extract-schedule-data.js`
4. Paste it into the console and press Enter
5. The script will attempt to extract and download the schedule data as `schedule-data.json`
6. If automatic extraction doesn't work, manually copy the visible schedule data
7. Update the `tournamentData` array in `poker-calendar.html` (around line 370)

### Method 2: Manual Data Entry

1. Visit the APLPT schedule page and manually copy event information
2. Open `poker-calendar.html` in a text editor
3. Find the `tournamentData` constant (around line 370)
4. Replace the sample data with real events using this format:

```javascript
{
    day: "Friday",
    date: "January 10, 2026",
    events: [
        {
            id: 1,  // Unique ID for each event
            number: "Event #1",
            title: "Opening Flight 1A",
            type: "main-event",  // Options: main-event, high-roller, no-limit-holdem, plo, satellite, bounty
            typeLabel: "Main Event",
            time: "12:00 PM",
            buyin: "$1,100",
            guarantee: "$200,000",
            format: "No Limit Hold'em"
        }
    ]
}
```

### Method 3: CSV Import (Coming Soon)

A CSV import feature will be added to allow you to upload schedule data from a spreadsheet.

## File Structure

```
.
├── poker-calendar.html          # Main calendar application
├── extract-schedule-data.js     # Browser console script to extract data
├── README.md                    # This file
└── schedule-data.json          # (Optional) Extracted schedule data
```

## Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## Customization

### Changing Colors

Edit the CSS color gradients in the `<style>` section of `poker-calendar.html`:

```css
.event-type.main-event { background: linear-gradient(135deg, #c92a2a, #e03131); }
```

### Adding New Event Types

1. Add a new filter button in the filters section
2. Add corresponding CSS classes for the new type
3. Use the new type value in your event data

## Tips for Using the Calendar

1. **Planning Your Schedule**: Select all events you're interested in, then use "Selected Only" view to see just your picks
2. **Finding Similar Events**: Use the event type filters to find all PLO games, satellites, etc.
3. **Export for Offline**: Use the export feature to create a text file you can reference without internet
4. **Mobile Use**: The calendar is fully responsive - save the HTML file to your phone for on-the-go access

## Support

For issues or questions about this calendar app, please open an issue on the GitHub repository.

For official APLPT information, visit: https://playapl.com/aplpt/aplpt-queensland-january-2026

## License

This is an unofficial fan-made tool. All APLPT branding and tournament information belongs to the Australian Poker League.
