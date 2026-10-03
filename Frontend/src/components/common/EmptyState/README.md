# Empty Component

مكون يعرض حالة عدم وجود بيانات (Empty State) لتنبيه المستخدم بطريقة واضحة وإتاحة تخصيص المحتوى.

## Features - المميزات
- **Fallback Message:** يعرض نصاً افتراضياً `"No data available."` عند عدم تمرير أي محتوى.
- **Custom Content Support:** يدعم تمرير أي مكونات أو أزرار فرعية عبر `children` لاستبدال النص الافتراضي (مثل إضافة زر إجراء "إضافة جديد").
- **Custom Styling:** يتيح تمرير `className` للتنسيق والتحكم بالمسافات.

## Props - الخصائص
| Prop | Type | Required | Default | المعنى |
| --- | --- | --- | --- | --- |
| message | string | No | "No data available." | النص الافتراضي المعروض في حال عدم تمرير محتوى داخلي |
| children | ReactNode | No | undefined | محتوى مخصص أو أزرار تفاعلية تظهر بدلاً من النص الافتراضي |
| className | string | No | "" | كلاسات إضافية للتنسيق |

## Usage - طريقة الاستخدام
```tsx
import Empty from './Empty';

// استخدام افتراضي
<Empty/>

// رسالة مخصصة
<Empty message="لا توجد عناصر لعرضها حالياً"/>

// تمرير عناصر مخصصة
<Empty>
  <p>قائمة البيانات فارغة</p>
  <button>إضافة عنصر جديد</button>
</Empty>