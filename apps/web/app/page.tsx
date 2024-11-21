"use client";
import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <main>
      <div className="text-red-600 mb-5">Hello world from a different app</div>
      <Button
        children="Click me"
        className="px-4 py-2 bg-black text-white"
        onClick={() => alert("Same button, just from a different app")}
      />
    </main>
  );
}
