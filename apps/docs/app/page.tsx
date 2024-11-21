"use client";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <p className="text-md mb-5">Hello</p>
      <div className="mt-5">
        <Button
          children="Click me please"
          className="px-4 py-2 bg-blue-500 text-white"
          onClick={() => alert("Wow, so cool. This works")}
        />
      </div>
    </div>
  );
}
