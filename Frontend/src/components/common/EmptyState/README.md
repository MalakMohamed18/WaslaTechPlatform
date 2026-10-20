# EmptyState

Shown when there is no data to display.

## Usage

    import { EmptyState } from "../components/common";
    <EmptyState message="No projects yet." />

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| message | string | "No data available." | Text shown when no children are passed |
| children | ReactNode | - | Custom content, for example an action button |
| className | string | "" | Extra CSS classes |
