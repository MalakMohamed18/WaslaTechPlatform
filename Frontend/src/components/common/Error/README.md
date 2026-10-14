# Error Component

مكون يعرض حالة الأخطاء (Error State) بشكل موحد ومناسب للوصولية (Accessibility).

## Features - المميزات
- **Accessible:** يتضمن الخاصية `role="alert"` لتنبيه قارئات الشاشة تلقائياً فور ظهور الخطأ.
- **Fallback Message:** يعرض رسالة افتراضية `"Something went wrong."` في حال عدم تمرير محتوى.
- **Custom Content:** يدعم تمرير عناصر مخصصة أو أزرار عبر `children` (مثل زر "إعادة المحاولة").
- **Custom Styling:** يسمح بتمرير `className` لتحديد التنسيق المباشر.

## Props - الخصائص
| Prop | Type | Required | Default | المعنى |
| --- | --- | --- | --- | --- |
| message | string | No | "Something went wrong." | النص الافتراضي المعروض في حال عدم تمرير محتوى مخصص |
| children | ReactNode | No | undefined | محتوى مخصص أو أزرار تفاعلية (مثل Try Again) |
| className | string | No | "" | كلاسات إضافية للتنسيق |

## Usage - طريقة الاستخدام
```tsx
import Error from './Error';

// استخدام افتراضي
<Error/>

// رسالة مخصصة
<Error message="فشل الاتصال بالخادم، يرجى المحاولة لاحقاً"/>

// مع أزرار تفاعلية
<Error>
  <p>حدث خطأ أثناء تحميل البيانات</p>
  <button onClick={handleRetry}>إعادة المحاولة</button>
</Error>