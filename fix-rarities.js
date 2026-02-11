const fs = require('fs');

const langFiles = [
    'en',
    'de',
    'fil',
    'id',
    'vi'
];

langFiles.forEach(lang => {
    try {
        const filePath = `./escapeysunami/messages/brainrots/${lang}.json`;
        console.log(`Processing ${lang}.json...`);

        // 读取文件
        const content = fs.readFileSync(filePath, 'utf8');

        // 解析 JSON
        const data = JSON.parse(content);

        // 修复 rarities.Celestial
        if (data.rarities && data.rarities.Celestial) {
            // 移除末尾的引号和可能的错误字符
            const celestial = data.rarities.Celestial.replace(/^['\"]+/, '"').replace(/[,;]+$/, '').replace(/Celestial/, 'Celestial');

            // 确保末尾有逗号
            if (!celestial.endsWith(',')) {
                data.rarities.Celestial = celestial + ',';
                console.log(`  Fixed ${lang}.json - Celestial now ends with comma`);
            } else {
                data.rarities.Celestial = celestial;
                console.log(`  ${lang}.json - Celestial OK`);
            }

            // 写回文件
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        } else if (data.rarities && data.rarities && typeof data.rarities === 'object') {
            console.log(`  ${lang}.json - rarities is array, fixing...`);
            // 处理数组情况
        } else {
            console.log(`  ${lang}.json - OK`);
        }

        console.log(`Successfully fixed ${lang}.json`);
    } catch (error) {
        console.error(`Error fixing ${lang}.json:`, error.message);
    }
});

console.log('All language files fixed!');
