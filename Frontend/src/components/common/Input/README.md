# Input Component

مكون حقل الإدخال القابل لإعادة الاستخدام (Reusable Input Component) يُستخدم لإنشاء حقول الإدخال في النماذج مع دعم العنوان (Label) ورسائل الخطأ (Error Messages).

## Features - المميزات
- **Standard Props:** بيمرر كل خصائص `<input>` العادية في React من غير أي قيود.
- **Label Support:** بياخد `label` اختياري وبيتربط بالحقل عن طريق الـ `id`.
- **Error Handling:** بيعرض رسالة الخطأ تلقائياً تحته كـ `<span className="input-error">`.

## Props - الخصائص
| Prop | Type | Required | Default | المعنى |
| --- | --- | --- | --- | --- |
| label | string | No | undefined | النص الظاهر فوق حقل الإدخال |
| error | string | No | undefined | نص رسالة الخطأ الظاهرة تحت الحقل |
| id | string | No | undefined | معرف الحقل لربطه بالـ Label |
| className | string | No | "" | كلاسات إضافية للتنسيق |
| ...props | InputHTMLAttributes | No | - | باقي خصائص הـ HTML مثل `type`, `placeholder`, `value`, `onChange` |

## Usage - طريقة الاستخدام
```tsx
import Input from './Input';

// استخدام بسيط
<Input id="email" label="البريد الإلكتروني" placeholder="example@domain.com" type="email"/>

// مع إظهار رسالة خطأ
<Input error="البريد الإلكتروني مطلوب" id="email" label="البريد الإلكتروني" type="email"/>