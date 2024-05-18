import Button from "@/components/ui/button";
import { db } from "@/lib/db";

export default async function Home() {
  await db.set("key", "hello");
  return (
    <div>
      <Button variant="ghost">Click Me</Button>
    </div>
  );
}
