/**
 * APLPT Schedule Data Extractor
 *
 * HOW TO USE:
 * 1. Go to https://playapl.com/aplpt/aplpt-queensland-january-2026/schedule
 * 2. Open browser console (F12 or Right-click > Inspect > Console)
 * 3. Paste this entire script and press Enter
 * 4. Copy the JSON output that appears
 * 5. Save it to 'schedule-data.json' in this project folder
 */

(function() {
    console.log('Extracting APLPT Schedule Data...\n');

    const scheduleData = [];

    // Try to find event cards or schedule elements
    // Adjust selectors based on actual website structure
    const dayContainers = document.querySelectorAll('[data-day], .day-section, .schedule-day');

    if (dayContainers.length === 0) {
        // Fallback: try to extract from tables or lists
        const eventElements = document.querySelectorAll('.event, .tournament, [class*="event-card"], article');

        console.log(`Found ${eventElements.length} potential event elements`);

        // Manual extraction helper
        console.log('\n📋 MANUAL EXTRACTION HELPER');
        console.log('============================================');
        console.log('Copy the schedule data manually using this template:\n');
        console.log(JSON.stringify({
            day: "Friday",
            date: "January 10, 2026",
            events: [
                {
                    id: 1,
                    number: "Event #1",
                    title: "Event Name",
                    type: "main-event", // or: high-roller, no-limit-holdem, plo, satellite, bounty
                    typeLabel: "Main Event",
                    time: "12:00 PM",
                    buyin: "$1,100",
                    guarantee: "$200,000",
                    format: "No Limit Hold'em"
                }
            ]
        }, null, 2));
        console.log('\n============================================\n');

        // Try to extract visible text for manual review
        const scheduleText = document.body.innerText;
        const lines = scheduleText.split('\n').filter(line => {
            const lower = line.toLowerCase();
            return (
                line.trim().length > 0 &&
                (lower.includes('event') ||
                 lower.includes('january') ||
                 lower.includes('$') ||
                 lower.includes('guarantee') ||
                 lower.includes('buyin') ||
                 lower.includes('hold') ||
                 lower.includes('omaha') ||
                 lower.includes('pm') ||
                 lower.includes('am'))
            );
        });

        console.log('📄 Extracted Schedule Text:');
        console.log('============================================');
        lines.slice(0, 200).forEach(line => console.log(line));
        console.log('============================================\n');

    } else {
        console.log(`Found ${dayContainers.length} day containers`);

        dayContainers.forEach((dayContainer, dayIndex) => {
            const dayData = {
                day: "",
                date: "",
                events: []
            };

            // Extract day and date
            const dayTitle = dayContainer.querySelector('.day-title, [class*="day"], h2, h3');
            const dateTitle = dayContainer.querySelector('.date, [class*="date"]');

            if (dayTitle) dayData.day = dayTitle.textContent.trim();
            if (dateTitle) dayData.date = dateTitle.textContent.trim();

            // Extract events for this day
            const eventElements = dayContainer.querySelectorAll('.event, .tournament-event, [class*="event-card"]');

            eventElements.forEach((eventEl, eventIndex) => {
                const event = {
                    id: dayIndex * 100 + eventIndex + 1,
                    number: "",
                    title: "",
                    type: "no-limit-holdem",
                    typeLabel: "NL Hold'em",
                    time: "",
                    buyin: "",
                    guarantee: "",
                    format: ""
                };

                // Try to extract event details
                const titleEl = eventEl.querySelector('.title, .event-name, h3, h4');
                const timeEl = eventEl.querySelector('.time, [class*="time"]');
                const buyinEl = eventEl.querySelector('.buyin, [class*="buyin"], [class*="buy-in"]');
                const guaranteeEl = eventEl.querySelector('.guarantee, [class*="guarantee"]');

                if (titleEl) event.title = titleEl.textContent.trim();
                if (timeEl) event.time = timeEl.textContent.trim();
                if (buyinEl) event.buyin = buyinEl.textContent.trim();
                if (guaranteeEl) event.guarantee = guaranteeEl.textContent.trim();

                // Determine event type from title
                const titleLower = event.title.toLowerCase();
                if (titleLower.includes('main event')) {
                    event.type = 'main-event';
                    event.typeLabel = 'Main Event';
                } else if (titleLower.includes('high roller')) {
                    event.type = 'high-roller';
                    event.typeLabel = 'High Roller';
                } else if (titleLower.includes('plo') || titleLower.includes('omaha')) {
                    event.type = 'plo';
                    event.typeLabel = 'PLO';
                } else if (titleLower.includes('satellite')) {
                    event.type = 'satellite';
                    event.typeLabel = 'Satellite';
                } else if (titleLower.includes('bounty')) {
                    event.type = 'bounty';
                    event.typeLabel = 'Bounty';
                }

                dayData.events.push(event);
            });

            if (dayData.events.length > 0) {
                scheduleData.push(dayData);
            }
        });
    }

    if (scheduleData.length > 0) {
        console.log('✅ Schedule data extracted successfully!\n');
        console.log('📋 Copy the JSON below and save to schedule-data.json:\n');
        console.log('============================================');
        console.log(JSON.stringify(scheduleData, null, 2));
        console.log('============================================\n');
    } else {
        console.warn('⚠️  Could not automatically extract schedule data.');
        console.log('Please manually create the schedule-data.json file using the template above.\n');
    }

    // Also output to a downloadable file
    const dataStr = JSON.stringify(scheduleData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'schedule-data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log('📥 schedule-data.json downloaded to your Downloads folder!');

})();
