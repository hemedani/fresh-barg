import { ComponentChildren, FunctionComponent } from "preact";
import { Header, MainHeader, UserCard } from "../mod.ts";
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
      <main className="container">
        <MainHeader />
        <div className="main-content">
          <div>
            <UserCard />
          </div>
          <div className="content">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};
