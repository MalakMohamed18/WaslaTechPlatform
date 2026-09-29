# AI Frontend Requirements & Data Specifications

المستند ده بيمثل التوثيق الشامل والمتطلبات الخاصة بـ Frontend الجزء الخاص بالذكاء الاصطناعي (AI)، مع توضيح للشاشات، الـ Components، البيانات المطلوبة من الـ Backend (API Payload & Response)، وحالات الـ UI المختلفة.

---

## 1. شاشة البحث (Search Screen)

### الـ Components المطلوبة:
- **Search Header Bar:** شريط البحث الرئيسي مع زر إرسال وسجل للكلمات الأخيرة.
- **Filter Panel:** فلاتر اختيارية تتيح تصفية النتائج حسب (التاريخ، التصنيف، نوع المستند).
- **Recent Searches Component:** عرض آخر عمليات بحث قام بيها المستخدم لإمكانية إعادة الضغط عليها.
- **Search Suggestions Dropdown:** اقتراحات تظهر تلقائياً أثناء كتابة المستخدم.

### البيانات المطلوبة (Payload / Request to Backend):
```json
{
  "searchQuery": "string",
  "filters": {
    "category": "string",
    "dateRange": {
      "start": "YYYY-MM-DD",
      "end": "YYYY-MM-DD"
    },
    "documentType": "string"
  },
  "page": "number",
  "limit": "number"
}
