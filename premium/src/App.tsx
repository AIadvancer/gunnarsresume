import Hero from "./Hero";
import { CursorGlow } from "./components/ui/cursor-glow";
import { ToastProvider } from "./components/ui/toast";

export default function App() {
  return (
    <ToastProvider>
      <div className="relative min-h-screen bg-[#010101] text-white antialiased">
        <CursorGlow />
        <div className="relative z-10">
          <Hero />
        </div>
      </div>
    </ToastProvider>
  );
}
