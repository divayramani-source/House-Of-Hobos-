import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import WhatsappButton from "./WhatsappButton";

export default function Layout() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">

      <Navbar />

      <main className="pt-28">
        <Outlet />
      </main>

      {/* ✅ GLOBAL FLOATING BUTTON */}
      <WhatsappButton />

    </div>
  );
}