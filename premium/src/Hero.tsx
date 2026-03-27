import * as React from "react";
import Hls from "hls.js";
import { motion } from "motion/react";
import { ArrowRight, Zap } from "lucide-react";
import { cn } from "./lib/cn";
import { InfiniteSlider } from "./components/ui/infinite-slider";

const HLS_URL =
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/697945ca6b876878dba3b23fbd2f1561/manifest/video.m3u8";
const FALLBACK_MP4 =
  "/_videos/v1/f0c78f536d5f21a047fb7792723a36f9d647daa1";

function useHlsVideo(videoRef: React.RefObject<HTMLVideoElement>) {
  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;
    let cancelled = false;

    const playSafe = async () => {
      try {
        await video.play();
      } catch {
        // Autoplay can be blocked; this is fine.
      }
    };

    const setFallback = async () => {
      if (cancelled) return;
      if (hls) {
        hls.destroy();
        hls = null;
      }
      video.src = FALLBACK_MP4;
      video.load();
      await playSafe();
    };

    // iOS Safari supports native HLS
    const canPlayNative = video.canPlayType("application/vnd.apple.mpegurl");
    if (canPlayNative) {
      video.src = HLS_URL;
      playSafe();
      return () => {
        cancelled = true;
      };
    }

    if (Hls.isSupported()) {
      hls = new Hls({
        lowLatencyMode: true,
        backBufferLength: 60,
      });

      hls.attachMedia(video);
      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        if (cancelled) return;
        hls?.loadSource(HLS_URL);
      });

      hls.on(Hls.Events.ERROR, (_, data) => {
        if (!data.fatal) return;
        setFallback();
      });

      playSafe();
    } else {
      setFallback();
    }

    return () => {
      cancelled = true;
      if (hls) hls.destroy();
    };
  }, [videoRef]);
}

const logos = [
  { src: "https://html.tailus.io/blocks/customers/openai.svg", alt: "OpenAI" },
  { src: "https://html.tailus.io/blocks/customers/nvidia.svg", alt: "NVIDIA" },
  {
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/github.svg",
    alt: "GitHub",
  },
  {
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/vercel.svg",
    alt: "Vercel",
  },
  {
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/react.svg",
    alt: "React",
  },
  {
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/vite.svg",
    alt: "Vite",
  },
  {
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/tailwindcss.svg",
    alt: "Tailwind CSS",
  },
  {
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/cloudflare.svg",
    alt: "Cloudflare",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.2, 0, 0, 1] },
  },
};

export default function Hero() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  useHlsVideo(videoRef);

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-40 top-[-180px] h-[520px] w-[520px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(250,147,250,0.22), transparent 60%)",
          }}
          animate={{ x: [0, 30, 0], y: [0, 18, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-48 top-[120px] h-[560px] w-[560px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, rgba(152,58,214,0.20), transparent 60%)",
          }}
          animate={{ x: [0, -28, 0], y: [0, 22, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-24 sm:pt-28">
        <motion.div
          className="relative z-20 mx-auto max-w-3xl text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Announcement Pill */}
          <motion.div variants={item} className="flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[rgba(28,27,36,0.15)] px-4 py-2 backdrop-blur-md">
              <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#FA93FA] via-[#C967E8] to-[#983AD6] opacity-90" />
                <span className="absolute inset-0 rounded-xl blur-md bg-gradient-to-br from-[#FA93FA] via-[#C967E8] to-[#983AD6] opacity-60" />
                <Zap className="relative z-10 h-4 w-4 text-black" />
              </span>
              <span className="text-sm text-white/70">
                Used by founders. Loved by devs.
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="mt-8 text-balance text-[44px] font-semibold leading-[1.02] tracking-tight sm:text-[64px] lg:text-[80px]"
          >
            <span className="block bg-gradient-to-br from-white via-[#FA93FA] to-[#983AD6] bg-clip-text text-transparent">
              Your Vision
            </span>
            <span className="block bg-gradient-to-br from-white via-[#C967E8] to-[#983AD6] bg-clip-text text-transparent">
              Our Digital Reality.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg"
          >
            We turn bold ideas into modern designs that don't just look amazing,
            they grow your business fast.
          </motion.p>

          {/* CTA */}
          <motion.div variants={item} className="mt-10 flex justify-center">
            <div className="rounded-full border border-white/10 bg-white/5 p-[2px] backdrop-blur-md">
              <a
                href="#book"
                className={cn(
                  "group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black",
                  "transition-transform duration-200 hover:-translate-y-[1px] active:translate-y-0"
                )}
              >
                Book a 15-min call
                <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full">
                  <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FA93FA] via-[#C967E8] to-[#983AD6]" />
                  <ArrowRight className="relative h-4 w-4 text-black transition-transform duration-200 group-hover:translate-x-[1px]" />
                </span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Video */}
      <div className="relative z-10 -mt-[150px]">
        <div className="relative">
          <video
            ref={videoRef}
            className="w-full h-auto mix-blend-screen"
            muted
            playsInline
            autoPlay
            loop
            preload="auto"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#010101] via-transparent to-[#010101]" />
        </div>
      </div>

      {/* Logo Cloud */}
      <div className="relative z-20 border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-4 md:min-w-[240px]">
              <p className="text-sm font-medium text-white/70">
                Powering the best teams
              </p>
              <div className="hidden h-8 w-px bg-white/10 md:block" />
            </div>

            <InfiniteSlider
              logos={logos}
              speed={80}
              className="w-full"
              itemClassName="h-7 md:h-8"
            />
          </div>
        </div>
      </div>

      <div id="book" className="sr-only" />
    </section>
  );
}
