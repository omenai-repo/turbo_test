"use client";
import { Button } from "@repo/ui/button";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ name: "" });
  const handleClick = async () => {
    setLoading(true);
    const res = await fetch("https://turbo-test-server.vercel.app/api/test");
    const response = await res.json();
    setData(() => {
      return { name: response.data.name };
    });
    setLoading(false);
  };
  return (
    <main>
      <div className="text-red-600">Hello world</div>;
      <Button children="Click me" onClick={handleClick} />
      <div className="mt-5">
        <p className="text-lg text-red">
          The response from the api call is:{" "}
          {loading ? <p>Loading....</p> : data.name}
        </p>
      </div>
    </main>
  );
}
