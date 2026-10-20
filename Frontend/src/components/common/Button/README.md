# Button

Reusable button with three visual variants.

## Usage

    import { Button } from "../components/common";
    <Button variant="danger" onClick={save}>Delete</Button>

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| children | ReactNode | required | Button content |
| onClick | () => void | - | Click handler |
| disabled | boolean | false | Disables the button |
| type | "button" / "submit" / "reset" | "button" | Native button type |
| variant | "primary" / "secondary" / "danger" | "primary" | Visual style |
| className | string | "" | Extra CSS classes |
