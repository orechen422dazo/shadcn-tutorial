"use client"
import { Button } from "@/components/ui/button"

export default function ButtonComponent() {
  // log function
  function logger(): void {
    console.log("🤙Button Call")
  }
  
  return (
    <div>
      <Button onClick={logger}>Click me</Button>
    </div>
  )
}
