import React from 'react';
import Button from "../components/common/Button/Button";
import Container from "../components/common/Container/Container";
import Section from "../components/common/Section/Section";
import Heading from "../components/common/Heading/Heading";
import Input from "../components/common/Input/Input";
import Card from "../components/common/Card/Card";
import LoadingState from "../components/common/LoadingState/LoadingState";
import EmptyState from "../components/common/EmptyState/EmptyState";
import Error from "../components/common/Error/Error";

function ComponentsDemo() {
  return (
    <Container>
      <Section>
        <Heading level={1}>WaslaTech Shared Components Demo</Heading>
      </Section>

      {/* 1. Buttons & Headings */}
      <Section>
        <Heading level={2}>1. Buttons & Headings</Heading>
        <Button onClick={() => alert("Button Clicked!")}>اضغط هنا</Button>
      </Section>

      {/* 2. Input Fields */}
      <Section>
        <Heading level={2}>2. Input Fields</Heading>
        <Input id="username" label="اسم المستخدم" placeholder="أدخل اسمك" />
      </Section>

      {/* 3. Basic Card */}
      <Section>
        <Heading level={2}>3. Basic Card</Heading>
        <Card>
          <Heading level={3}>عنوان البطاقة</Heading>
          <p>محتوى كارت تجريبي داخل الـ Card Component.</p>
        </Card>
      </Section>

      {/* 4. Feedback & UI States */}
      <Section>
        <Heading level={2}>4. Feedback & UI States</Heading>
        
        <Heading level={3}>Loading State:</Heading>
        <LoadingState />

        <Heading level={3}>Empty State:</Heading>
        <EmptyState message="لا توجد عناصر لعرضها" />

        <Heading level={3}>Error State:</Heading>
        <Error message="حدث خطأ أثناء جلب البيانات" />
      </Section>
    </Container>
  );
}

export default ComponentsDemo;