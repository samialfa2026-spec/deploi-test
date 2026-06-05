
const { exec } = require('child_process');

console.log("=== Starting Diploi Disguise Mode ===");
console.log("Initializing Repocket background node...");

// إعداد بيانات حسابك (استبدلها ببياناتك الحقيقية)
const email = "nadia911@outlook.com"; 
const apiKey = "bb8802e0-e585-4167-8ec9-92084b1e10b8";

// الأمر الذي سيتم تنفيذه داخل السيرفر لتشغيل repocket
// نقوم بتثبيت حزمة repocket العالمية وتشغيلها فوراً
const command = `npx repocket --email "${email}" --api-key "${apiKey}"`;

const repocketProcess = exec(command);

// طباعة مخرجات Repocket في الـ Container Log الخاص بـ Diploi
repocketProcess.stdout.on('data', (data) => {
    console.log(`[Repocket Output]: ${data}`);
});

repocketProcess.stderr.on('data', (data) => {
    console.error(`[Repocket Error]: ${data}`);
});

// إبقاء السيرفر حياً لكي لا تظن منصة Diploi أن التطبيق تعطل وتغلقه
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Disguise Node Server is active and earning!\n');
});

// التمويـه: تشغيل سيرفر ويب على المنفذ 3000 الذي تطلبه المنصة دائماً
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Disguise HTTP web server is running on port ${PORT}`);
});

