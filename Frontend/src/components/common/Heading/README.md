# Heading Component

مكون العناوين القابل لإعادة الاستخدام (Reusable Heading Component) يُستخدم لإنشاء عناوين بمستويات مختلفة (من h1 إلى h6) بشكل ديناميكي لتسهيل التحكم في هيكلة النص والـ SEO.

## Features - المميزات
- **Dynamic Level:** يدعم تحديد مستوى العنوان (`h1` إلى `h6`) بسهولة مع افتراض المستوى `h2`.
- **Semantic HTML:** يحافظ على الوصولية (Accessibility) وهيكلة الصفحة الصحيحة للـ SEO.
- **Custom Classes:** يسمح بتمرير `className` لإضافة تنسيقات خاصة بكل عنوان.

## Props - الخصائص
| Prop | Type | Required | Default | المعنى |
| --- | --- | --- | --- | --- |
| children | ReactNode | Yes | - | النص أو المحتوى داخل العنوان |
| level | 1 \| 2 \| 3 \| 4 \| 5 \| 6 | No | 2 | مستوى العنوان من h1 إلى h6 |
| className | string | No | "" | كلاسات إضافية لتغيير الحجم أو اللون |

## Usage - طريقة الاستخدام
```tsx
import Heading from './Heading';

// h1 عنوان رئيسي
<Heading level="{1}">الرئيسية</Heading>

// h2 عنوان افتراضي
<Heading>عن منصة وصلة</Heading>

// h3 مع كلاسات إضافية
<Heading className="custom-heading" level="{3}">
  الخدمات المتاحة
</Heading>