import { Button } from "@/components/ui/button";
import { showToast } from "@/lib/utils";

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>

      <Button onClick={() => showToast("success", "Hello world")}>
        Show Toast
      </Button>
    </div>
  );
}
