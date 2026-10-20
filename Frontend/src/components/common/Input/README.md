# Input

Text input with optional label and error message. Accepts every native input prop.

## Usage

    import { Input } from "../components/common";
    <Input id="email" label="Email" error="Email is required" />

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| id | string | - | Links the label to the input |
| label | string | - | Label text |
| error | string | - | Error message, also turns the border red |
| className | string | "" | Extra CSS classes for the input |
| ...rest | native input props | - | placeholder, value, onChange, disabled, ... |
