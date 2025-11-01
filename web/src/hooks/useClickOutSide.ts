// hooks/useClickOutside.ts
import { useEffect, RefObject } from "react";

type Handler = (event: MouseEvent | TouchEvent) => void;

// تایپ ایمن‌تر
type ClickOutsideRef<T extends HTMLElement = HTMLElement> = RefObject<T | null>;

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: ClickOutsideRef<T>,
  handler: Handler,
): void => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref?.current;

      if (!el || el.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener, { capture: true });
    document.addEventListener("touchstart", listener, { capture: true });

    return () => {
      document.removeEventListener("mousedown", listener, { capture: true });
      document.removeEventListener("touchstart", listener, { capture: true });
    };
  }, [ref, handler]);
};
