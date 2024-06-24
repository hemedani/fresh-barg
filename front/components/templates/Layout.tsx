import { ComponentChildren, FunctionComponent } from "preact";
import { Header } from "../mod.ts";
import { useSignal } from "@preact/signals";
import { Sidebar } from "../../islands/mod.ts";

export const Layout: FunctionComponent<{ children: ComponentChildren }> = (
  { children },
) => {
  const toggleMenu = useSignal<boolean>(false);
  return (
    <div className="layout">
      <Header toggleMenu={toggleMenu} />
      <Sidebar toggleMenu={toggleMenu} />
      <main>
        <div className="container">
          {children}
        </div>
      </main>
    </div>
  );
};
