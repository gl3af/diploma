import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useCreateQueryString = () => {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (value: string | null, name = "query") => {
      const current = new URLSearchParams(Array.from(searchParams.entries()));

      if (!value) {
        current.delete(name);
      } else {
        if (current.has(name)) {
          current.set(name, value);
        } else {
          current.append(name, value);
        }
      }

      return current.toString() || "";
    },
    [searchParams],
  );

  return createQueryString;
};
