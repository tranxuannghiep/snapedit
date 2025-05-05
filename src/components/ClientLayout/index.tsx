// components/ClientLayout.tsx
"use client";

import { useDataStore } from "@/stores/useDataStore";
import { ReactNode, useEffect } from "react";

export function ClientLayout({
  children,
  initialData,
}: {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialData: any;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setData = useDataStore((state: any) => state.setData);

  useEffect(() => {
    setData(initialData); // lưu vào Zustand khi vừa mount
  }, [initialData, setData]);

  return <>{children}</>;
}
