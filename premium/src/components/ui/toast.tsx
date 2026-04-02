import * as React from "react";
import { motion, AnimatePresence } from "motion/react";

type Toast = { id: number; message: string };

type ToastContextValue = {
  push: (message: string) => void;
};

const ToastContext = React.createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider />");
  return ctx;
}

/**
 * Lightweight toast system (premium replacement for browser alerts).
 */
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);
  const nextId = React.useRef(1);

  const push = React.useCallback((message: string) => {
    const id = nextId.current++;
    setToasts((t) => [...t, { id, message }]);
    window.setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, 2200);
  }, []);

  // Safety: if any legacy code uses alert(...), turn it into a toast.
  React.useEffect(() => {
    const original = window.alert;
    window.alert = (msg?: any) => {
      push(String(msg ?? ""));
    };
    return () => {
      window.alert = original;
    };
  }, [push]);

  return (
    <ToastContext.Provider value={{ push }}>
      {children}

      <div className="pointer-events-none fixed bottom-5 left-5 z-[60] flex flex-col gap-2">
        <AnimatePresence initial={false}>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 10, filter: "blur(10px)", scale: 0.98 }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, y: 8, filter: "blur(10px)", scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.2, 0, 0, 1] }}
              className="inline-flex max-w-[320px] items-center gap-3 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-white/80 shadow-[0_18px_55px_rgba(0,0,0,0.55)] backdrop-blur-xl"
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#FA93FA] via-[#C967E8] to-[#983AD6]" />
              <span className="leading-snug">{t.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}
