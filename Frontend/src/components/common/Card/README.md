# Basic Card Component

مكون البطاقة الأساسي القابل لإعادة الاستخدام (Reusable Card Component) يُستخدم لتغليف المحتوى وتجميعه في حاوية مرئية متميزة.

## Features - المميزات
- **Flexible Container:** بيسمح بتمرير أي محتوى أو عناصر داخلية بمرونة عن طريق `children`.
- **Custom Classes:** يدعم تمرير `className` لتحديد التنسيقات والخلفيات والحدود حسب الحاجة.

## Props - الخصائص
| Prop | Type | Required | Default | المعنى |
| --- | --- | --- | --- | --- |
| children | ReactNode | Yes | - | المحتوى الداخلي للبطاقة |
| className | string | No | "" | كلاسات إضافية لتطبيق التنسيقات |

## Usage - طريقة الاستخدام
```tsx
import Card from './Card';

<Card className="profile-card">
  <h3>اسم المستخدم</h3>
  <p>تفاصيل الحساب...</p>
</Card>