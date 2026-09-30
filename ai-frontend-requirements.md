# AI Frontend Requirements & Data Specifications

المستند ده بيمثل التوثيق الشامل والمتطلبات الخاصة بـ Frontend الجزء الخاص بالذكاء الاصطناعي (AI)، مع توضيح للشاشات، الـ Components، البيانات المطلوبة من الـ Backend (API Payload & Response)، وحالات الـ UI المختلفة.

---

## 1. شاشة البحث (Search Screen)

### الـ Components المطلوبة:
* **Search Header Bar**: شريط البحث الرئيسي مع زر إرسال وسجل للكلمات الأخيرة.
* **Filter Panel**: فلاتر اختيارية تتيح تصفية النتائج حسب (التاريخ، التصنيف، نوع المستند).
* **Recent Searches Component**: عرض آخر عمليات بحث قام بها المستخدم مع إمكانية إعادتها أو مسح السجل.
* **Search Suggestions Dropdown**: قائمة منسدلة بالاقتراحات تظهر تلقائيًا أثناء كتابة المستخدم.

---

### تفاصيل الفلاتر (Filters Specification):
* **Category (التصنيف)**:
  * **القيم المتاحة**: `['Computer Science', 'Artificial Intelligence', 'Software Engineering', 'Data Science', 'General']`
  * **طبيعة الاختيار**: تتيح للمستخدم اختيار أكثر من قيمة (Multi-select).
* **documentType (نوع المستند)**:
  * **القيم المتاحة**: `['PDF', 'Research Paper', 'Article', 'Book', 'Report']`
  * **طبيعة الاختيار**: تتيح اختيار أكثر من قيمة (Multi-select).
* **آلية الإرسال للـ Backend**: يتم إرسال الاختيارات كـ Arrays داخل كائن الـ `filters` في الـ Request Body.

---

### سلوك Recent Searches و Search Suggestions:
1. **Search Suggestions (الاقتراحات التلقائية)**:
   * **توقيت الظهور**: تظهر القائمة المنسدلة بمجرد كتابة المستخدم لـ 3 أحرف على الأقل في شريط البحث مع تطبيق `Debounce Time: 300ms` للحد من إرسال الـ Requests المتكررة.
   * **التفاعل**: عند الضغط على أي اقتراح، يتم ملء شريط البحث بالاقتراح وتنفيذ البحث فورًا.
2. **Recent Searches (عمليات البحث الأخيرة)**:
   * **طريقة التخزين**: يتم حفظها محليًا في الـ `localStorage` بالمتصفح (أو استرجاعها عبر API حسب الاعتماد)، بحد أقصى **آخر 5 إلى 10 كلمات بحثية**.
   * **التفاعل**: عند النقر على كلمة سابقة يتم إعادة البحث بها، ويوجد خيار لمسح السجل بالكامل (Clear History).

---

### تفاصيل الـ API Request Payload:
* **الحقول المطلوبة (Required)**: `searchQuery`, `page`, `limit`
* **الحقول الاختيارية (Optional)**: `filters` (`category`, `documentType`, `dateRange`)

#### مثال Request فعلي (Actual Payload Example):
*(ملاحظة: تم التنسيق ليكون متوافقاً مع مسؤول الـ Backend - نور)*

```json
{
  "searchQuery": "Machine Learning algorithms in Healthcare",
  "filters": {
    "category": ["Artificial Intelligence", "Data Science"],
    "dateRange": {
      "start": "2023-01-01",
      "end": "2026-09-30"
    },
    "documentType": ["Research Paper", "PDF"]
  },
  "page": 1,
  "limit": 10
}
