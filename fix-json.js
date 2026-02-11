const fs = require('fs');
const path = require('path');

const files = ['en', 'de', 'fil', 'id', 'vi'];
const basePath = path.join(__dirname, 'escapeysunami', 'messages', 'brainrots');

files.forEach(lang => {
    const filePath = path.join(basePath, `${lang}.json`);

    try {
        // Read file
        const content = fs.readFileSync(filePath, 'utf8');

        // Parse JSON
        const data = JSON.parse(content);

        // Fix rarities object - ensure proper comma-separated string
        if (data.rarities && typeof data.rarities === 'object') {
            const keys = Object.keys(data.rarities);
            const lastKey = keys[keys.length - 1];

            // Get the last key's value and add comma
            if (lastKey && data.rarities[lastKey]) {
                data.rarities[lastKey] += ',';
            }
        }

        // Write back the fixed JSON
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`Fixed ${lang}.json`);
    } catch (error) {
        console.error(`Error fixing ${lang}.json:`, error.message);
    }
});
