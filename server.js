const express = require('express');
const app = express();

// تأكد من أن التطبيق يستمع على 0.0.0.0
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server is running on http://0.0.0.0:${PORT}`);
});

// صفحة تجريبية للتأكد أن السيرفر يعمل
app.get('/', (req, res) => {
    res.send('<h1>🎉 OpenShift App is Running Successfully! 🎉</h1>');
});
