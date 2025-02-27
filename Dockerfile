# استخدم صورة Node.js كقاعدة
FROM node:18

# تحديد مجلد العمل داخل الحاوية
WORKDIR /app

# نسخ ملفات المشروع إلى الحاوية
COPY package*.json ./

# تثبيت الحزم
RUN npm install

# نسخ باقي الملفات
COPY . .

# تعيين المنفذ الذي سيعمل عليه التطبيق
EXPOSE 8080

# أمر تشغيل التطبيق
CMD ["node", "server.js"]
