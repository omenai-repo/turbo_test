"use client";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <p className="text-md">Hello</p>
      <div className="mt-5">
        <Button
          children="Click me please"
          onClick={() => alert("Wow, so cool. This works")}
        />
      </div>
    </div>
  );
}
