# Loading Component

مكون يعرض حالة التحميل (Loading State) بشكل مرن ومناسب للوصولية (Accessibility).

## Features - المميزات
- **Accessible:** بيحتوي على `role="status"` و `aria-live="polite"` لتنبيه قارئات الشاشة تلقائياً أثناء التحميل.
- **Customizable Content:** يدعم تمرير نص أو مكون فرعي (Spinner / Icons) عبر `children` مع وجود نص افتراضي `"Loading..."`.
- **Custom Styling:** يسمح بتمرير `className` لتحديد المسافات والمحاذاة.

## Props - الخصائص
| Prop | Type | Required | Default | المعنى |
| --- | --- | --- | --- | --- |
| children | ReactNode | No | "Loading..." | المحتوى أو النص المعروض داخل مكون التحميل |
| className | string | No | "" | كلاسات إضافية للتنسيق |

## Usage - طريقة الاستخدام
```tsx
import Loading from './Loading';

// استخدام افتراضي
<Loading/>

// تخصيص النص أو الشحنة
<Loading>جاري تحميل البيانات...</Loading>