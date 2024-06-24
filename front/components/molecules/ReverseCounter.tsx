import { signal } from "@preact/signals";
import { Button } from "../mod.ts";
import { useEffect } from "preact/hooks";
import { Fragment } from "preact/jsx-runtime";
export const ReverseCounter = ({ initialValue }: { initialValue: number }) => {
  const count = signal(initialValue);

  useEffect(() => {
    if (count.value > 0) {
      const timeout = setTimeout(() => {
        count.value -= 1;
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [count]);

  return (
    <Fragment>
      {count.value === 0
        ? <Button>ارسال‌مجدد‌کد</Button>
        : <p className="resend-code-text">{count.value}‌ثانیه‌تاارسال‌مجدد‌کد</p>}
    </Fragment>
  );
};
