import { ArrowRight, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="flex min-h-screen items-center px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-[1040px]">
          <header className="mb-16 flex items-center justify-between gap-6">
            <Image
              src="/tridente-logo.png"
              alt="Grupo Financiero Tridente"
              width={1446}
              height={508}
              priority
              className="h-auto w-[190px] sm:w-[250px]"
            />
            <span className="hidden rounded-[6px] border border-[#f7bd34]/24 px-4 py-2 text-sm font-bold uppercase tracking-normal text-[#f7bd34] sm:inline-flex">
              Principal
            </span>
          </header>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(320px,0.58fr)] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.14em] text-[#f7bd34]">
                Grupo Financiero Tridente
              </p>
              <h1 className="mt-5 max-w-[760px] text-[2.25rem] font-black leading-[1.06] tracking-normal text-white sm:text-[3.5rem] lg:text-[4.2rem]">
                Centro principal del proyecto
              </h1>
              <p className="mt-6 max-w-[600px] text-lg font-semibold leading-8 text-white/74 sm:text-xl">
                Acceso directo a la experiencia VSL para reclutamiento remoto y aplicacion al equipo.
              </p>
            </div>

            <Link
              href="/vsl-landing"
              className="group block rounded-[8px] border border-[#c5912c]/42 bg-[#0b0b0b] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.36)] transition hover:translate-y-[-2px] hover:border-[#f7bd34]/72"
            >
              <div className="flex items-center justify-between gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-[6px] bg-[linear-gradient(180deg,#ffd35b,#d58b12)] text-black">
                  <PlayCircle className="h-6 w-6" aria-hidden="true" />
                </div>
                <ArrowRight
                  className="h-6 w-6 text-[#f7bd34] transition group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
              <h2 className="mt-8 text-2xl font-black tracking-normal text-white">
                VSL Landing
              </h2>
              <p className="mt-3 text-base leading-7 text-white/68">
                Video, CTA de aplicacion y formulario GoHighLevel.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
