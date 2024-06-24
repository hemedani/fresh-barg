import { EffectCallback, useEffect, useRef } from "preact/hooks";

type useNonInitialEffectReturn = void | (() => void | undefined);

export const useNonInitialEffect = (
  effect: EffectCallback,
  deps?: any,
): useNonInitialEffectReturn => {
  const initialRender = useRef(true);

  useEffect(() => {
    let effectReturns: any = () => {
    };

    if (initialRender.current) {
      initialRender.current = false;
    } else {
      effectReturns = effect();
    }

    if (effectReturns && typeof effectReturns === "function") {
      return effectReturns;
    }
  }, deps);
};
