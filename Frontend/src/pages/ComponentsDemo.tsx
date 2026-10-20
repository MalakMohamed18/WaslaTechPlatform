import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  EmptyState,
  ErrorState,
  Heading,
  Input,
  LoadingState,
  Section,
} from "../components/common";

function ComponentsDemo() {
  const [count, setCount] = useState(0);
  const row = { display: "flex", gap: 8, flexWrap: "wrap" as const };

  return (
    <Container>
      <Section>
        <Heading level={1}>WaslaTech Shared Components Demo</Heading>
      </Section>

      <Section>
        <Heading level={2}>1. Buttons</Heading>
        <div style={row}>
          <Button onClick={() => setCount(count + 1)}>Clicked {count} times</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button disabled>Disabled</Button>
        </div>
      </Section>

      <Section>
        <Heading level={2}>2. Headings</Heading>
        <Heading level={1}>Heading level 1</Heading>
        <Heading level={2}>Heading level 2</Heading>
        <Heading level={3}>Heading level 3</Heading>
      </Section>

      <Section>
        <Heading level={2}>3. Inputs</Heading>
        <Input id="name" label="Name" placeholder="Enter your name" />
        <Input id="email" label="Email" error="Email is required" />
        <Input id="locked" label="Disabled" disabled placeholder="Not editable" />
      </Section>

      <Section>
        <Heading level={2}>4. Cards</Heading>
        <div style={row}>
          <Card title="Card with title">Card content goes here.</Card>
          <Card>Card without a title.</Card>
        </div>
      </Section>

      <Section>
        <Heading level={2}>5. UI States</Heading>
        <Heading level={3}>Loading</Heading>
        <LoadingState />
        <LoadingState>Fetching your data...</LoadingState>
        <Heading level={3}>Empty</Heading>
        <EmptyState />
        <EmptyState message="No projects yet.">
          <Button variant="secondary">Create project</Button>
        </EmptyState>
        <Heading level={3}>Error</Heading>
        <ErrorState />
        <ErrorState message="Failed to load data." onRetry={() => alert("Retry clicked")} />
      </Section>
    </Container>
  );
}

export default ComponentsDemo;
