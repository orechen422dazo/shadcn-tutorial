# shadcn tutorial

[installation](https://ui.shadcn.com/docs/installation/next)

Create project
Run the init command to create a new Next.js project or to setup an existing one:

```shell
npx shadcn@latest init
```

That's it
You can now start adding components to your project.

```shell
npx shadcn@latest add button
```

The command above will add the Button component to your project. You can then import it like this:
```tsx
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
```