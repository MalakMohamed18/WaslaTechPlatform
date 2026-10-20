# ErrorState

Shown when something fails. Replaces the old Error component.

## Usage

    import { ErrorState } from "../components/common";
    <ErrorState message="Failed to load data." onRetry={reload} />

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| message | string | "Something went wrong." | Error text |
| children | ReactNode | - | Custom content instead of the message |
| onRetry | () => void | - | Shows a "Try again" button when provided |
| className | string | "" | Extra CSS classes |
