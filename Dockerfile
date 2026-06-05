# 1. جلب الصورة الرسمية والأحدث من Repocket كقاعدة أساسية
FROM repocket/repocket:latest

# 2. متغيرات البيئة (للاختبار)
ENV RP_EMAIL="nadia911g@outlook.com"
ENV RP_API_KEY="bb8802e0-e585-4167-8ec0-92084b1e10b8"
# ملاحظة: هذه القيم مضافة للاختبار فقط.

# 3. إخبار المنصة بالمنافذ (اختياري ولكن يفضل وجوده للتوافق)
EXPOSE 8080
