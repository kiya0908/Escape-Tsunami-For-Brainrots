const fs = require('fs');

const files = [
    { path: './escapeysunami/messages/brainrots/en.json', name: 'en' },
    { path: './escapeysunami/messages/brainrots/de.json', name: 'de' },
    { path: './escapeysunami/messages/brainrots/fil.json', name: 'fil' },
    { path: './escapeysunami/messages/brainrots/id.json', name: 'id' },
    { path: './escapeysunami/messages/brainrots/vi.json', name: 'vi' }
];

files.forEach(({ path, name }) => {
    try {
        const content = fs.readFileSync(path, 'utf8');
        const data = JSON.parse(content);

        // Fix rarities.Celestial by adding trailing comma if needed
        if (data.rarities && data.rarities.Celestial) {
            if (!data.rarities.Celestial.endsWith(',')) {
                data.rarities.Celestial += ',';
                console.log(`Fixed ${name}.json - added comma to Celestial`);
            }
        }

        fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
        console.log(`Successfully fixed ${name}.json`);
    } catch (error) {
        console.error(`Error fixing ${name}.json:`, error.message);
    }
});

console.log('All JSON files fixed!');
'