Button Component

Button Component = مكوّن الزرار

ده مكوّن قابل لإعادة الاستخدام (Reusable Component)، بنستخدمه في أي صفحة محتاجة زرار بدل ما نكتب كود الزرار من جديد كل مرة.

Features — المميزات

- Custom Content: نقدر نغير الكلام أو المحتوى الموجود داخل الزرار.
- Click Event: نقدر نحدد وظيفة تحصل لما المستخدم يضغط على الزرار.
- Disabled State: نقدر نخلي الزرار غير قابل للضغط.
- Button Type: نقدر نحدد نوع الزرار مثل "button" أو "submit" أو "reset".

Usage — طريقة الاستخدام

1. Basic Button — زرار عادي

import Button from "./Button";

<Button>Click Me</Button>

ده بيعمل زرار عادي مكتوب عليه Click Me.

2. With Click Event — زرار مع وظيفة عند الضغط

<Button onClick={() => console.log("Clicked!")}>
  Click Me
</Button>

هنا لما المستخدم يضغط على الزرار، الكود الموجود داخل "onClick" هيتم تنفيذه.

3. Disabled Button — زرار غير قابل للضغط

<Button disabled>
  Disabled
</Button>

هنا الزرار هيظهر لكنه مش هيكون قابل للضغط.

4. Submit Button — زرار إرسال

<Button type="submit">
  Submit
</Button>

ده ممكن نستخدمه داخل الـForms لإرسال البيانات.

Props — الخصائص

Prop| Type| Required| المعنى
"children"| "ReactNode"| Yes| المحتوى الموجود داخل الزرار
"onClick"| "() => void"| No| الوظيفة التي يتم تنفيذها عند الضغط
"disabled"| "boolean"| No| تجعل الزرار غير قابل للضغط
"type"| ""button" | "submit" | "reset""| No| تحديد نوع الزرار

Required و Optional

- Required: الخاصية المطلوبة ولازم يتم إرسالها.
- Optional: الخاصية الاختيارية وممكن نستخدم الـComponent من غيرها.

Reusability — إعادة الاستخدام

الـButton مصمم بحيث نقدر نستخدمه في صفحات مختلفة، مثل:

- Home
- Login
- Dashboard
- Profile
- Forms

وده بيمنع تكرار نفس كود الزرار في كل صفحة.

File Location — مكان الملف

src/components/common/Button/Button.tsx

الـButton موجود داخل "common" لأنه Shared Component، يعني مكوّن مشترك ممكن استخدامه في أكتر من صفحة في المشروع.