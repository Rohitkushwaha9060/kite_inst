"use client";
import { useAuthStore } from "@repo/zustand-store";

export default function Home() {
  const { auth } = useAuthStore();
  console.log(auth);

  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}
