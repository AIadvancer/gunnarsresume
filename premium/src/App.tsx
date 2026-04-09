import Hero from "./Hero";
import { CursorGlow } from "./components/ui/cursor-glow";
import { ToastProvider } from "./components/ui/toast";

export default function App() {
  return (
    <ToastProvider>
      <div className="relative min-h-screen overflow-hidden bg-[#050507] text-white antialiased">
        <div className="bg-mesh" aria-hidden="true" />
        <div className="premium-noise" aria-hidden="true" />
        <CursorGlow />
        <div className="relative z-10">
          <Hero />
        </div>
      </div>
    </ToastProvider>
  );
}
