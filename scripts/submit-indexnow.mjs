import https from 'https';

const HOST = 'escapetsunamiforbrainrots.space';
const KEY = '7ae1119393ea49cc9e5fdf24d2edf81d';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// 所有语言前缀（默认语言 en 无前缀）
const locales = ['', '/fil', '/vi', '/id', '/de'];

// 页面路径
const pages = ['', '/about', '/privacy', '/terms'];

// 生成所有语言 × 页面的 URL 组合
const urlList = locales.flatMap((locale) =>
    pages.map((page) => `https://${HOST}${locale}${page}`)
);

const data = JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlList,
});

const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/IndexNow',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(data),
    },
};

console.log('Submitting URLs to IndexNow...');
console.log(`Host: ${HOST}`);
console.log(`Key Location: ${KEY_LOCATION}`);
console.log(`URL Count: ${urlList.length}`);
console.log('URLs:');
urlList.forEach((url) => console.log(`  - ${url}`));

const req = https.request(options, (res) => {
    console.log(`\nStatus Code: ${res.statusCode}`);

    res.on('data', (d) => {
        process.stdout.write(d);
    });

    res.on('end', () => {
        if (res.statusCode === 200) {
            console.log('\n✅ Successfully submitted URLs to IndexNow!');
        } else {
            console.log('\n❌ Submission failed. Please check the error details.');
        }
    });
});

req.on('error', (error) => {
    console.error('Request error:', error);
});

req.write(data);
req.end();
