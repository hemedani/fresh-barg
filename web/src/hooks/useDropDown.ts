import { useState, useRef } from "react";
import { useClickOutside } from "./useClickOutSide";

export const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggle = () => setIsOpen((prev) => !prev);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  useClickOutside(dropdownRef, close);

  return {
    isOpen,
    toggle,
    open,
    close,
    dropdownRef,
  };
};
