import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  Landmark,
  LineChart,
  LockKeyhole,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import HomeLeadWidget from "./ui/home-lead-widget";

export const metadata: Metadata = {
  title: "Seguro IUL | Grupo Financiero Tridente",
  description:
    "Grupo Financiero Tridente ayuda a familias y profesionales a evaluar seguros IUL con protección, estrategia y acompañamiento personalizado.",
};

const navItems = [
  { label: "Seguro IUL", href: "#iul" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Consulta", href: "#consulta" },
  { label: "Únete a nuestro equipo", href: "/vsl-landing" },
];

const benefits = [
  {
    title: "Protección de vida",
    text: "Cobertura para proteger a tu familia mientras construyes una estrategia de largo plazo.",
    icon: ShieldCheck,
  },
  {
    title: "Potencial de acumulación",
    text: "Opciones ligadas a índices que pueden apoyar metas futuras sin exposición directa al mercado.",
    icon: LineChart,
  },
  {
    title: "Flexibilidad financiera",
    text: "Un diseño correcto puede darte margen para ajustar primas, objetivos y necesidades con el tiempo.",
    icon: Banknote,
  },
];

const steps = [
  "Entendemos tus metas, familia, ingresos y horizonte.",
  "Evaluamos si un IUL hace sentido dentro de tu estrategia.",
  "Diseñamos una propuesta clara y revisamos escenarios contigo.",
];

const highlights = [
  { value: "IUL", label: "Seguro de vida indexado" },
  { value: "1:1", label: "Análisis personalizado" },
  { value: "0", label: "Promesas irreales" },
];

const contactInfo = {
  phone: "(626) 559-6320",
  address: "1125 Debra Dr, Costa Mesa, California, United States, 92626",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/92 px-5 backdrop-blur-xl sm:px-8 lg:px-10">
        <nav
          className="mx-auto flex min-h-20 w-full max-w-[1180px] items-center justify-between gap-3 py-3"
          aria-label="Navegación principal"
        >
          <Link
            href="#inicio"
            className="flex w-[126px] shrink-0 items-center sm:w-[190px] lg:w-[220px]"
            aria-label="Ir al inicio de Grupo Financiero Tridente"
          >
            <Image
              src="/tridente-logo.png"
              alt="Grupo Financiero Tridente"
              width={1446}
              height={508}
              priority
              className="h-auto w-full"
            />
          </Link>

          <div className="hidden flex-1 flex-wrap items-center justify-end gap-2 text-sm font-bold text-white/72 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.href === "/vsl-landing"
                    ? "rounded-[6px] px-3 py-2 text-[#f4bd45] transition hover:bg-[#f4bd45]/10 hover:text-[#ffd866] focus:outline-none focus:ring-2 focus:ring-[#f4bd45]/45"
                    : "rounded-[6px] px-3 py-2 transition hover:bg-white/7 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#f4bd45]/45"
                }
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              href="#consulta"
              className="inline-flex min-h-10 items-center justify-center gap-2 whitespace-nowrap rounded-[6px] border border-[#fff0a8]/40 bg-[#f4bd45] px-3 py-2 text-[0.72rem] font-black text-[#080808] shadow-[0_10px_28px_rgba(244,189,69,0.22)] transition hover:translate-y-[-1px] hover:bg-[#ffd866] focus:outline-none focus:ring-2 focus:ring-[#f4bd45]/45 sm:px-4 sm:text-sm"
            >
              <span className="sm:hidden">Info IUL</span>
              <span className="hidden sm:inline">Quiero información</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/vsl-landing"
              className="inline-flex min-h-10 items-center justify-center rounded-[6px] border border-white/12 px-3 py-2 text-[0.72rem] font-black text-white/78 transition hover:bg-white/7 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#f4bd45]/45 lg:hidden"
              aria-label="Únete a nuestro equipo"
            >
              Equipo
            </Link>
          </div>
        </nav>
      </header>

      <section
        id="inicio"
        className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden px-5 pb-14 pt-12 sm:px-8 sm:pb-16 sm:pt-16 lg:px-10"
      >
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(5,5,5,0.97)_0%,rgba(5,5,5,0.84)_42%,rgba(8,57,61,0.62)_100%)]"
          aria-hidden="true"
        />
        <Image
          src="/tridente-logo.png"
          alt=""
          width={1446}
          height={508}
          priority
          className="pointer-events-none absolute bottom-10 right-[-180px] -z-10 hidden w-[760px] max-w-none opacity-[0.15] lg:block"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-px bg-[linear-gradient(90deg,transparent,#f4bd45,transparent)]"
          aria-hidden="true"
        />

        <div className="mx-auto grid min-h-[calc(100svh-11rem)] w-full max-w-[1180px] gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
          <div className="max-w-[780px]">
            <p className="mb-5 inline-flex items-center gap-2 rounded-[6px] border border-[#40d6c9]/28 bg-[#0b2525]/70 px-3 py-2 text-sm font-black uppercase text-[#8ff3ea]">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Seguro IUL con estrategia personalizada
            </p>
            <h1 className="text-balance text-[2.35rem] font-black leading-[1.03] tracking-normal text-white sm:text-[4rem] lg:text-[5rem]">
              Protege a tu familia y construye{" "}
              <span className="text-[#f4bd45]">valor financiero</span>
            </h1>
            <p className="mt-6 max-w-[690px] text-pretty text-lg font-semibold leading-8 text-white/78 sm:text-xl">
              En Tridente te ayudamos a evaluar si un seguro de vida indexado
              IUL encaja con tus metas de protección, acumulación y flexibilidad.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#consulta"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-white px-5 py-3 text-sm font-black text-[#070707] transition hover:translate-y-[-1px] hover:bg-[#f3f5f5] focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                Solicitar análisis IUL
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/vsl-landing"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] border border-[#f4bd45]/55 px-5 py-3 text-sm font-black text-[#f9d677] transition hover:translate-y-[-1px] hover:bg-[#f4bd45]/10 focus:outline-none focus:ring-2 focus:ring-[#f4bd45]/45"
              >
                Únete a nuestro equipo
                <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <aside className="rounded-[8px] border border-white/10 bg-white/[0.055] p-5 shadow-[0_22px_64px_rgba(0,0,0,0.32)] sm:p-6">
            <p className="text-sm font-black uppercase text-[#8ff3ea]">
              ¿Para quién puede servir?
            </p>
            <div className="mt-5 grid gap-3">
              <HeroPoint text="Personas que quieren protección de vida con estrategia de acumulación." />
              <HeroPoint text="Familias que buscan complementar planes de retiro y legado." />
              <HeroPoint text="Profesionales que necesitan una explicación clara antes de decidir." />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[8px] border border-white/10 bg-black/24 p-4"
                >
                  <div className="text-2xl font-black text-[#f4bd45]">
                    {item.value}
                  </div>
                  <p className="mt-2 text-xs font-bold leading-5 text-white/68">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section
        id="iul"
        className="bg-[#f6f7f4] px-5 py-16 text-[#101211] sm:px-8 lg:px-10 lg:py-20"
      >
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#a17115]">
              Seguro IUL
            </p>
            <h2 className="mt-3 text-balance text-3xl font-black leading-tight tracking-normal sm:text-5xl">
              Un seguro de vida que también puede apoyar tu estrategia futura.
            </h2>
          </div>
          <div className="rounded-[8px] border border-[#d8ddd4] bg-white p-6 shadow-[0_14px_34px_rgba(16,18,17,0.06)]">
            <p className="text-lg leading-8 text-[#4f5753]">
              Un IUL combina protección por fallecimiento con una cuenta de
              valor en efectivo que puede crecer con base en índices. La clave
              no es comprar cualquier póliza, sino diseñarla con objetivos,
              presupuesto y expectativas correctas.
            </p>
            <p className="mt-4 text-sm font-semibold leading-6 text-[#69716d]">
              El crecimiento no está garantizado y depende del diseño de la
              póliza, costos, límites, participación y reglas de la aseguradora.
            </p>
          </div>
        </div>
      </section>

      <section
        id="beneficios"
        className="bg-white px-5 py-16 text-[#101211] sm:px-8 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-[720px]">
            <p className="text-sm font-black uppercase text-[#a17115]">
              Beneficios principales
            </p>
            <h2 className="mt-3 text-balance text-3xl font-black leading-tight tracking-normal sm:text-5xl">
              Diseñado para proteger primero y planear mejor.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="rounded-[8px] border border-[#d8ddd4] bg-[#f9faf8] p-6 shadow-[0_14px_34px_rgba(16,18,17,0.05)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-[6px] bg-[#0c3335] text-[#8ff3ea]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-black text-[#101211]">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#4f5753]">
                    {benefit.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="proceso"
        className="bg-[#071616] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-20"
      >
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#8ff3ea]">
              Proceso Tridente
            </p>
            <h2 className="mt-3 text-balance text-3xl font-black leading-tight tracking-normal sm:text-5xl">
              Te ayudamos a decidir con claridad, no con presión.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/74">
              Nuestro trabajo es explicar, comparar y aterrizar una estrategia
              que tenga sentido para tu realidad financiera.
            </p>
          </div>

          <div className="grid gap-3">
            {steps.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-[8px] border border-white/10 bg-white/[0.055] p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] bg-[#f4bd45] text-sm font-black text-[#080808]">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">{item}</h3>
                  <p className="mt-2 leading-7 text-white/68">
                    Recibes una explicación simple del diseño, sus costos,
                    riesgos y usos posibles.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="consulta"
        className="bg-[#050505] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-20"
      >
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#f4bd45]">
              Captación de leads IUL
            </p>
            <h2 className="mt-3 text-balance text-3xl font-black leading-tight tracking-normal sm:text-5xl">
              Da el primer paso para revisar tu estrategia IUL.
            </h2>
            <p className="mt-5 max-w-[690px] text-lg leading-8 text-white/72">
              Agenda una conversación para entender tus objetivos y confirmar si
              un seguro IUL puede ser una buena herramienta para ti.
            </p>
          </div>

          <div className="rounded-[8px] border border-[#f4bd45]/24 bg-white/[0.055] p-6 shadow-[0_18px_52px_rgba(0,0,0,0.32)]">
            <div className="grid gap-4">
              <LeadPrompt icon={ClipboardCheck} text="Revisión de objetivos" />
              <LeadPrompt icon={LockKeyhole} text="Protección familiar" />
              <LeadPrompt icon={Landmark} text="Plan patrimonial" />
            </div>
            <div className="mt-6 rounded-[8px] border border-white/10 bg-black/24 p-4">
              <p className="text-lg font-black text-white">
                Solicita información de IUL
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-white/64">
                Nombre, teléfono, correo y objetivo financiero.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f7f4] px-5 py-14 text-[#101211] sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-6 rounded-[8px] border border-[#d8ddd4] bg-white p-6 shadow-[0_14px_34px_rgba(16,18,17,0.06)] lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[760px]">
            <p className="text-sm font-black uppercase text-[#a17115]">
              Oportunidad de carrera
            </p>
            <h2 className="mt-2 text-2xl font-black leading-tight tracking-normal sm:text-3xl">
              ¿Quieres formar parte del equipo Tridente?
            </h2>
            <p className="mt-3 leading-7 text-[#59615d]">
              La sección de reclutamiento vive aparte para candidatos que quieren
              conocer el modelo de trabajo y aplicar al equipo.
            </p>
          </div>
          <Link
            href="/vsl-landing"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[6px] border border-[#0c3335]/18 bg-[#0c3335] px-6 py-3 text-sm font-black text-white transition hover:translate-y-[-1px] hover:bg-[#114649] focus:outline-none focus:ring-2 focus:ring-[#0c3335]/30 sm:w-auto"
          >
            Únete a nuestro equipo
            <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-5 py-12 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1fr_1.15fr_1fr]">
          <div>
            <Link
              href="#inicio"
              className="block w-[190px]"
              aria-label="Ir al inicio de Grupo Financiero Tridente"
            >
              <Image
                src="/tridente-logo.png"
                alt="Grupo Financiero Tridente"
                width={1446}
                height={508}
                className="h-auto w-full"
              />
            </Link>
            <p className="mt-5 max-w-[310px] text-sm font-semibold leading-6 text-white/62">
              Estrategias de seguro IUL con explicación clara, protección y
              acompañamiento personalizado.
            </p>
          </div>

          <div>
            <p className="text-sm font-black uppercase text-[#f4bd45]">
              Navegación
            </p>
            <nav
              className="mt-4 grid gap-3 text-sm font-bold text-white/70 sm:grid-cols-2"
              aria-label="Navegación del pie de página"
            >
              {navItems.map((item) => (
                <Link
                  key={`footer-${item.href}`}
                  href={item.href}
                  className="transition hover:text-white focus:outline-none focus:ring-2 focus:ring-[#f4bd45]/45"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#terminos"
                className="transition hover:text-white focus:outline-none focus:ring-2 focus:ring-[#f4bd45]/45"
              >
                Términos de Servicio
              </Link>
              <Link
                href="#privacidad"
                className="transition hover:text-white focus:outline-none focus:ring-2 focus:ring-[#f4bd45]/45"
              >
                Política de Privacidad
              </Link>
            </nav>
          </div>

          <div>
            <p className="text-sm font-black uppercase text-[#f4bd45]">
              Contacto
            </p>
            <div className="mt-4 grid gap-4 text-sm font-semibold leading-6 text-white/68">
              <a
                href={`tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-start gap-3 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-[#f4bd45]/45"
              >
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#8ff3ea]"
                  aria-hidden="true"
                />
                {contactInfo.phone}
              </a>
              <p className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#8ff3ea]"
                  aria-hidden="true"
                />
                <span>{contactInfo.address}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1180px] gap-4 text-sm leading-6 text-white/68 lg:grid-cols-2">
          <details
            id="terminos"
            className="rounded-[8px] border border-white/10 bg-white/[0.045] p-5"
          >
            <summary className="cursor-pointer text-base font-black text-white">
              Términos de Servicio
            </summary>
            <div className="mt-4 space-y-3">
              <p>
                Al usar este sitio aceptas que la información presentada es de
                carácter general y no constituye asesoría legal, fiscal,
                contable o financiera personalizada.
              </p>
              <p>
                Las ilustraciones, beneficios y escenarios relacionados con
                seguros IUL dependen del diseño de la póliza, requisitos de
                suscripción, costos, límites, reglas de la aseguradora y
                condiciones aplicables.
              </p>
              <p>
                Enviar tus datos no garantiza aprobación, cobertura, resultados
                financieros ni una relación contractual. Toda recomendación o
                solicitud formal debe revisarse con un representante autorizado.
              </p>
            </div>
          </details>

          <details
            id="privacidad"
            className="rounded-[8px] border border-white/10 bg-white/[0.045] p-5"
          >
            <summary className="cursor-pointer text-base font-black text-white">
              Política de Privacidad
            </summary>
            <div className="mt-4 space-y-3">
              <p>
                Podemos recopilar la información que compartes voluntariamente,
                como nombre, teléfono, correo electrónico y objetivos
                financieros, para responder a tu solicitud y dar seguimiento a
                tu consulta.
              </p>
              <p>
                La información puede utilizarse para contactarte, preparar una
                revisión personalizada y mejorar nuestros procesos internos. No
                vendemos tu información personal.
              </p>
              <p>
                Puedes solicitar correcciones o pedir que dejemos de
                contactarte usando el teléfono o la dirección publicados en este
                sitio.
              </p>
            </div>
          </details>
        </div>

        <div className="mx-auto mt-8 flex max-w-[1180px] flex-col gap-3 border-t border-white/10 pt-6 text-xs font-semibold text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Grupo Financiero Tridente. Todos los
            derechos reservados.
          </p>
          <p>Contenido legal disponible únicamente en esta página principal.</p>
        </div>
      </footer>

      <HomeLeadWidget />
    </main>
  );
}

function HeroPoint({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-[8px] border border-white/10 bg-black/22 p-4">
      <CheckCircle2
        className="mt-0.5 h-5 w-5 shrink-0 text-[#8ff3ea]"
        aria-hidden="true"
      />
      <p className="text-sm font-semibold leading-6 text-white/76">{text}</p>
    </div>
  );
}

function LeadPrompt({
  icon: Icon,
  text,
}: {
  icon: typeof Target;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-black/24 p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] bg-[#8ff3ea]/12 text-[#8ff3ea]">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <p className="font-black text-white">{text}</p>
    </div>
  );
}
