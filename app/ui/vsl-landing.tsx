"use client";

import { CalendarCheck, CheckCircle2, CirclePlay } from "lucide-react";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const videoUrl = process.env.NEXT_PUBLIC_VIDEO_EMBED_URL;
const ghlCalendarUrl = process.env.NEXT_PUBLIC_GHL_CALENDAR_EMBED_URL;

export default function VslLanding() {
  const [showApplication, setShowApplication] = useState(false);
  const applicationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!showApplication) {
      return;
    }

    window.requestAnimationFrame(() => {
      applicationRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [showApplication]);

  function handleApplyClick() {
    if (showApplication) {
      applicationRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    setShowApplication(true);
  }

  return (
    <main className="min-h-screen bg-[#f2f6ff] text-[#050505]">
      <section className="relative isolate flex min-h-svh overflow-hidden bg-[linear-gradient(180deg,#edf4ff_0%,#f8fbff_76%,#ffffff_100%)] px-5 py-6 sm:px-8 lg:px-10">
        <BrandAura />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-3rem)] w-full max-w-[760px] items-center justify-center">
          <div className="flex w-full max-w-[668px] flex-col items-center">
            <div className="mb-5 w-full sm:mb-6">
              <LogoMark />
            </div>

            <h1 className="w-full text-left text-balance text-[1.76rem] font-black leading-[0.98] tracking-normal text-[#111827] sm:text-[2.24rem] lg:text-[2.36rem] xl:text-[2.48rem]">
              Como facturar de $8,000 a $30,000 al mes como Closer en un
              equipo comercial de alto rendimiento
            </h1>

            <div className="mt-5 w-full sm:mt-6 lg:mt-7">
              <VideoFrame />
            </div>

            <button
              type="button"
              onClick={handleApplyClick}
              className="mx-auto mt-5 inline-flex min-h-12 min-w-[224px] items-center justify-center rounded-[4px] border border-[#0f57ff]/30 bg-white/80 px-7 py-3 font-mono text-base font-semibold tracking-normal text-[#0f57ff] shadow-[0_18px_42px_rgba(15,87,255,0.18)] transition hover:border-[#0f57ff] hover:bg-white focus:outline-none focus:ring-4 focus:ring-[#0f57ff]/20 sm:mt-6"
            >
              Aplicar al equipo
            </button>
          </div>
        </div>
      </section>

      {showApplication ? (
        <section
          ref={applicationRef}
          id="aplicacion"
          className="bg-[#f8fbff] px-5 pb-14 pt-6 text-[#050505] sm:px-8 lg:pb-[4.5rem]"
        >
          <div className="mx-auto max-w-[1040px]">
            <ApplicationEmbeds />
          </div>
        </section>
      ) : null}
    </main>
  );
}

function BrandAura() {
  return (
    <div
      className="pointer-events-none absolute -left-[72px] top-[148px] hidden h-[540px] w-[540px] opacity-90 blur-[9px] lg:block"
      aria-hidden="true"
    >
      <div className="absolute left-[30px] top-[20px] h-[278px] w-[386px] rotate-[-18deg] rounded-[52%] border-[50px] border-[#0f57ff] opacity-[0.42] blur-[16px]" />
      <div className="absolute left-[38px] top-[44px] h-[268px] w-[374px] rotate-[-18deg] rounded-[52%] border-[36px] border-black opacity-[0.22] blur-[13px]" />
      <div className="absolute left-[82px] top-[246px] h-[244px] w-[359px] rotate-[16deg] rounded-[52%] border-[47px] border-[#0f57ff] opacity-[0.39] blur-[18px]" />
      <div className="absolute left-[89px] top-[267px] h-[229px] w-[335px] rotate-[16deg] rounded-[52%] border-[34px] border-black opacity-[0.2] blur-[14px]" />
    </div>
  );
}

function LogoMark() {
  return (
    <a
      href="#"
      aria-label="Growth Partner"
      className="inline-flex items-center gap-2.5 text-left"
    >
      <span className="relative h-8 w-8 shrink-0">
        <span className="absolute left-0 top-0 h-[17px] w-[28px] rotate-[-24deg] rounded-[999px] border-[4px] border-[#0f57ff]" />
        <span className="absolute bottom-[1px] left-[2px] h-[17px] w-[29px] rotate-[25deg] rounded-[999px] border-[4px] border-black" />
      </span>
      <span className="grid text-[15px] font-black leading-[0.89] tracking-normal text-black">
        <span>growth</span>
        <span>partner</span>
      </span>
    </a>
  );
}

function VideoFrame() {
  if (videoUrl) {
    return (
      <div className="overflow-hidden rounded-[17px] bg-black shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
        <iframe
          className="aspect-video w-full"
          src={videoUrl}
          title="Presentacion para aplicar al equipo"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[17px] bg-[#151515] shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
      <div className="relative aspect-video w-full bg-[linear-gradient(180deg,#2a2a2a_0%,#111_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_24%,rgba(255,255,255,0.16),transparent_24%),radial-gradient(circle_at_72%_18%,rgba(15,87,255,0.22),transparent_26%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[37%] bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.62))]" />

        <div className="absolute left-[17%] top-[18%] h-[49%] w-[22%] rounded-t-full bg-[linear-gradient(180deg,#d9e4f7,#6f7890_42%,#111827_43%)] opacity-95" />
        <div className="absolute right-[16%] top-[17%] h-[52%] w-[24%] rounded-t-full bg-[linear-gradient(180deg,#dce7fb,#788197_41%,#050505_42%)] opacity-95" />
        <div className="absolute bottom-[9%] left-[36%] h-[26%] w-[30%] rounded-t-lg bg-[#222]" />

        <button
          type="button"
          aria-label="Reproducir video"
          className="absolute left-1/2 top-1/2 flex h-[84px] w-[84px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[#0f57ff]/78 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_14px_36px_rgba(0,0,0,0.35)] backdrop-blur transition hover:bg-[#0f57ff]"
        >
          <CirclePlay className="h-12 w-12 fill-white/90 text-white" aria-hidden="true" />
        </button>

        <div className="absolute bottom-[16%] left-[7%] right-[7%] h-[6px] rounded-full bg-[#0f57ff]/78 shadow-[0_0_18px_rgba(15,87,255,0.92)]">
          <span className="absolute left-0 top-1/2 h-[20px] w-[20px] -translate-y-1/2 rounded-full bg-[#7aa6ff] ring-[5px] ring-black/35" />
          <span className="absolute left-1/2 top-1/2 h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/50 ring-[4px] ring-white/12" />
          <span className="absolute left-1/2 top-1/2 h-[12px] w-[12px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[3px] bg-white" />
          <span className="absolute right-0 top-1/2 h-[20px] w-[20px] -translate-y-1/2 rounded-full bg-[#7aa6ff] ring-[5px] ring-black/35" />
        </div>

        <div className="absolute bottom-[7%] left-[4%] right-[4%] flex items-center justify-between text-[11px] font-semibold text-white/78">
          <span>Como aplicar</span>
          <span>$5K</span>
          <span>$20K</span>
          <span>Closer</span>
        </div>
      </div>
    </div>
  );
}

function ApplicationEmbeds() {
  return (
    <div className="mx-auto max-w-[820px]">
      <EmbedPanel
        src={ghlCalendarUrl}
        fallback="Pega tu URL de calendario GHL con formulario integrado en NEXT_PUBLIC_GHL_CALENDAR_EMBED_URL."
      />
    </div>
  );
}

function EmbedPanel({
  src,
  fallback,
}: {
  src?: string;
  fallback: string;
}) {
  return (
    <div className="overflow-hidden border border-white/10 bg-[#0b0b0b]">
      <div className="flex min-h-16 items-center gap-3 border-b border-white/10 px-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-[4px] bg-[#0f57ff] text-white">
          <CalendarCheck className="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 className="text-base font-black uppercase tracking-[0.08em] text-white">
          Formulario y calendario
        </h2>
      </div>

      {src ? (
        <>
          <iframe
            className="h-[760px] w-full bg-white"
            src={src}
            title="Formulario y calendario de aplicacion"
            allow="payment"
            loading="lazy"
            scrolling="no"
          />
          <Script
            src="https://agent.thrive-companies.com/js/form_embed.js"
            strategy="afterInteractive"
          />
        </>
      ) : (
        <div className="flex min-h-[420px] flex-col items-center justify-center px-6 text-center">
          <CheckCircle2 className="h-12 w-12 text-[#75a3ff]" aria-hidden="true" />
          <p className="mt-5 max-w-sm text-lg font-bold leading-7 text-white">
            {fallback}
          </p>
        </div>
      )}
    </div>
  );
}
