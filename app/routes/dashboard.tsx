import Sidebar from "~/components/Sidebar";
import { HiBars3 } from "react-icons/hi2";
import { Outlet } from "@remix-run/react";
import { useState } from "react";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  return (
    <div className={"min-h-screen bg-white"}>
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="lg:ml-60">
        <header className={"p-4"}>
          <div className="">
            <button onClick={() => setOpen(true)} className={"lg:hidden"}>
              <HiBars3 className={"size-6"} />
            </button>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
