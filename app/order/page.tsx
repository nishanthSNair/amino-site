import { Suspense } from "react";
import type { Metadata } from "next";
import { OrderFlow } from "@/components/order-flow";

export const metadata: Metadata = { title: "Order | Amino" };

export default function OrderPage() {
  return (
    <main>
      <Suspense>
        <OrderFlow />
      </Suspense>
    </main>
  );
}
