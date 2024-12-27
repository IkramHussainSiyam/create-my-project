"use client";

import Callout from "@/components/ui/callout";
import { showToast } from "@/lib/toast";

export default function HomePage() {
  return (
    <div className="max-w-screen-lg mx-auto my-12">
      <h3 className="mb-6">HomePage</h3>

      <Callout
        onClick={() =>
          showToast("loading", "Something went wrong", {
            description: "An error occurred, during the click",
          })
        }
        title="Error"
        description="This is an error"
      />
    </div>
  );
}
