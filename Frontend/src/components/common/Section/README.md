# Section Component

مكون قسم قابل لإعادة الاستخدام (Reusable Section Component) يُستخدم لتقسيم صفحات الموقع وإتاحة ربط الأقسام بشكل مرن.

## Features - المميزات
- **Semantic HTML:** بيستخدم عنصر `<section>` لتحسين هيكلة الصفحة والـ SEO.
- **Anchor Navigation:** يدعم تمرير `id` للتنقل المباشر بين الأقسام داخل الصفحة (Scroll Anchors).
- **Custom Classes:** بيسمح بتمرير كلاسات إضافية بمرونة عن طريق `className`.

## Props - الخصائص
| Prop | Type | Required | المعنى |
| --- | --- | --- | --- |
| children | ReactNode | Yes | المحتوى المعروض داخل القسم |
| className | string | No | كلاسات إضافية لتحديد الخلفيات أو المسافات |
| id | string | No | معرف القسم للوصول السريع |

## Usage - طريقة الاستخدام
```tsx
import Section from './Section';

<Section className="about-section" id="about">
  <h2>عن منصة وصلة</h2>
</Section>