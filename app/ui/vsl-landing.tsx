"use client";

import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  Globe2,
  Play,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const videoUrl = process.env.NEXT_PUBLIC_VIDEO_EMBED_URL;
const ghlSurveyUrl =
  "https://api.leadconnectorhq.com/widget/survey/8KeDBS7oRjUWKuq7Japx";
const ghlSurveyId = "8KeDBS7oRjUWKuq7Japx";

const highlights = [
  {
    icon: BarChart3,
    title: "Ingresos reales",
    body: "De $8K a $30K+ al mes.",
  },
  {
    icon: UsersRound,
    title: "Equipo ganador",
    body: "Entrenamiento, apoyo y cultura de alto rendimiento.",
  },
  {
    icon: Globe2,
    title: "Libertad desde cualquier lugar",
    body: "Trabaja remoto. Tú pones los límites, nosotros el camino.",
  },
  {
    icon: ShieldCheck,
    title: "Bulletproof",
    body: "Sistema probado con cientos de agentes en la industria.",
  },
];

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
    <main className="min-h-screen bg-black text-white">
      <section className="relative isolate flex min-h-svh overflow-hidden bg-[#020202] px-5 py-5 sm:px-8 sm:py-7 lg:px-10">
        <GoldAtmosphere />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-2.5rem)] w-full max-w-[1180px] flex-col">
          <header className="flex w-full items-start justify-start">
            <LogoMark />
          </header>

          <div className="grid flex-1 content-center gap-7 py-7 sm:gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(460px,1.05fr)] lg:items-center lg:gap-12 lg:py-10">
            <div className="max-w-[690px]">
              <h1 className="text-balance text-[2.08rem] font-black leading-[1.08] tracking-normal text-white sm:text-[3.3rem] lg:text-[4.15rem]">
                Cómo generar de{" "}
                <span className="bg-[linear-gradient(90deg,#f8c447_0%,#b77a16_42%,#ffe08a_72%,#d7951c_100%)] bg-clip-text text-transparent">
                  $8,000 a $30,000
                </span>{" "}
                dólares al mes como agente remoto
              </h1>

              <p className="mt-5 max-w-[620px] text-[1.06rem] font-semibold leading-7 text-white/88 sm:text-[1.35rem] sm:leading-8">
                Con{" "}
                <span className="font-black text-[#f7bd34]">
                  entrenamientos, sistemas probados
                </span>{" "}
                y un{" "}
                <span className="font-black text-[#f7bd34]">
                  equipo diseñado para ganar.
                </span>
              </p>
            </div>

            <div className="w-full">
              <VideoFrame />

              <button
                type="button"
                onClick={handleApplyClick}
                className="mx-auto mt-6 inline-flex min-h-12 w-full max-w-[330px] items-center justify-center gap-3 rounded-[6px] border border-[#fff0a8]/45 bg-[linear-gradient(180deg,#ffd35b_0%,#f2ad23_47%,#d58b12_100%)] px-7 py-3.5 text-base font-black tracking-normal text-[#070707] shadow-[0_16px_38px_rgba(231,166,38,0.28),inset_0_1px_0_rgba(255,255,255,0.45)] transition hover:translate-y-[-1px] hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-[#f6bb36]/25 sm:text-lg">
                Aplicar al equipo
                <ArrowRight
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {showApplication ? (
        <section
          ref={applicationRef}
          id="aplicacion"
          className="bg-[linear-gradient(180deg,#050505_0%,#0c0802_100%)] px-5 pb-14 pt-8 text-white sm:px-8 lg:pb-[4.5rem]">
          <div className="mx-auto max-w-[1040px]">
            <ApplicationEmbeds />
          </div>
        </section>
      ) : null}
    </main>
  );
}

function GoldAtmosphere() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(255,201,76,0.13),transparent_26%),radial-gradient(circle_at_84%_10%,rgba(255,198,67,0.12),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.025)_0%,transparent_34%,rgba(244,174,42,0.06)_100%)]" />
      <div className="absolute -right-12 top-12 h-[210px] w-[410px] rotate-[-28deg] opacity-90 sm:right-6 sm:top-14">
        <span className="absolute right-0 top-3 h-[2px] w-full bg-[linear-gradient(90deg,transparent,#f7bd34,transparent)] shadow-[0_0_16px_rgba(247,189,52,0.95)]" />
        <span className="absolute right-2 top-12 h-[1px] w-[92%] bg-[linear-gradient(90deg,transparent,#bc7c12,transparent)] shadow-[0_0_12px_rgba(247,189,52,0.65)]" />
        <span className="absolute right-6 top-[5.25rem] h-[2px] w-[78%] bg-[linear-gradient(90deg,transparent,#ffdc78,transparent)] shadow-[0_0_18px_rgba(255,220,120,0.88)]" />
        <span className="absolute right-12 top-[7.5rem] h-[1px] w-[72%] bg-[linear-gradient(90deg,transparent,#aa7112,transparent)]" />
      </div>
      <div className="absolute bottom-[16%] left-[-22%] h-[38%] w-[64%] rounded-full border border-[#9d6c16]/20 blur-[2px]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(180deg,transparent,#000)]" />
    </div>
  );
}

function LogoMark() {
  return (
    <a
      href="#"
      aria-label="Grupo Financiero Tridente"
      className="block w-[180px] sm:w-[240px] lg:w-[260px]">
      <Image
        src="/tridente-logo.png"
        alt="Grupo Financiero Tridente"
        width={1446}
        height={508}
        priority
        className="h-auto w-full"
      />
    </a>
  );
}

function VideoFrame() {
  return (
    <div className="relative overflow-hidden rounded-[10px] border border-[#b98524]/48 bg-[#090909] shadow-[0_0_0_1px_rgba(255,218,122,0.08),0_22px_68px_rgba(0,0,0,0.58)]">
      <span className="pointer-events-none absolute inset-x-[11%] top-[-1px] z-10 h-[2px] bg-[linear-gradient(90deg,transparent,#ffe08a,transparent)] shadow-[0_0_16px_rgba(255,212,88,0.95)]" />
      <span className="pointer-events-none absolute inset-x-[20%] bottom-[-1px] z-10 h-[2px] bg-[linear-gradient(90deg,transparent,#ffd35b,transparent)] shadow-[0_0_16px_rgba(255,211,91,0.86)]" />
      <span className="pointer-events-none absolute bottom-[22%] left-[-1px] top-[32%] z-10 w-[2px] bg-[linear-gradient(180deg,transparent,#ffc342,transparent)] shadow-[0_0_14px_rgba(255,195,66,0.85)]" />
      <span className="pointer-events-none absolute bottom-[23%] right-[-1px] top-[31%] z-10 w-[2px] bg-[linear-gradient(180deg,transparent,#ffc342,transparent)] shadow-[0_0_14px_rgba(255,195,66,0.85)]" />

      {videoUrl ? (
        <iframe
          className="aspect-video w-full"
          src={videoUrl}
          title="Presentacion para aplicar al equipo"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="relative aspect-video w-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,220,125,0.18),transparent_28%),linear-gradient(135deg,#1f1f1f_0%,#080808_58%,#111_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_16%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_82%_24%,rgba(247,189,52,0.15),transparent_24%)]" />
          <button
            type="button"
            aria-label="Reproducir video"
            className="absolute left-1/2 top-1/2 flex h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#f7bd34] bg-black/45 text-[#f7bd34] shadow-[0_0_34px_rgba(247,189,52,0.32),inset_0_0_24px_rgba(247,189,52,0.1)] backdrop-blur transition hover:scale-[1.03] hover:bg-[#120d03]">
            <Play
              className="ml-1 h-9 w-9 fill-[#f7bd34] text-[#f7bd34]"
              aria-hidden="true"
            />
          </button>
        </div>
      )}
    </div>
  );
}

function HighlightGrid() {
  return (
    <div className="grid grid-cols-2 border-t border-[#f7bd34]/10 pb-5 pt-5 sm:grid-cols-4 sm:pb-3">
      {highlights.map((item, index) => {
        const Icon = item.icon;

        return (
          <article
            key={item.title}
            className={`px-3 text-center sm:px-5 ${
              index > 0 ? "sm:border-l sm:border-[#f7bd34]/14" : ""
            } ${index % 2 === 1 ? "border-l border-[#f7bd34]/14 sm:border-l" : ""}`}>
            <Icon
              className="mx-auto h-10 w-10 text-[#f7bd34] sm:h-12 sm:w-12"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <h2 className="mt-3 text-[0.74rem] font-black uppercase leading-4 text-white sm:text-[0.84rem]">
              {item.title}
            </h2>
            <p className="mx-auto mt-3 max-w-[180px] text-[0.73rem] leading-5 text-white/76 sm:text-[0.82rem]">
              {item.body}
            </p>
          </article>
        );
      })}
    </div>
  );
}

function ApplicationEmbeds() {
  return (
    <div className="mx-auto max-w-[820px]">
      <EmbedPanel />
    </div>
  );
}

function EmbedPanel() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="overflow-hidden rounded-[8px] border border-[#c5912c]/36 bg-[#090909] shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
      <div className="flex min-h-16 items-center gap-3 border-b border-[#f7bd34]/18 px-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-[6px] bg-[linear-gradient(180deg,#ffd35b,#d58b12)] text-black">
          <CalendarCheck
            className="h-5 w-5"
            aria-hidden="true"
          />
        </div>
        <h2 className="text-base font-black uppercase tracking-[0.08em] text-white">
          Formulario de aplicacion
        </h2>
      </div>

      <div className="relative min-h-[760px] bg-white">
        {!isLoaded ? (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#090909] px-6 text-center">
            <p className="text-base font-black uppercase tracking-[0.08em] text-[#f7bd34]">
              Cargando formulario...
            </p>
          </div>
        ) : null}

        <iframe
          id={ghlSurveyId}
          className="min-h-[760px] w-full bg-white"
          src={ghlSurveyUrl}
          title="survey"
          loading="lazy"
          scrolling="no"
          style={{ border: "none", width: "100%" }}
          onLoad={() => setIsLoaded(true)}
        />
        <Script
          src="https://link.msgsndr.com/js/form_embed.js"
          strategy="afterInteractive"
        />
      </div>
    </div>
  );
}
