'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ThemeToggleButton from '@/components/ThemeToggleButton';

export default function MissionVisionPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-brand-black text-brand-black dark:text-white">

      {/* ── Top nav strip ── */}
      <div className="w-full bg-white dark:bg-brand-black border-b border-black/8 dark:border-white/10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36 py-4 flex items-center justify-between">
        <Link
          href="/#about"
          className="inline-flex items-center gap-2 text-black/50 dark:text-white/50 hover:text-accent transition-colors text-sm font-medium group"
        >
          <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
        <img src="/logo1.png" alt="Kaz Properties" className="h-8 md:h-10 w-auto object-contain" />
        <ThemeToggleButton variant="light" />
      </div>

      {/* ══════════════════════════════════════════
          SECTION 1 — ABOUT US
      ══════════════════════════════════════════ */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/assets/bg1.png"
            alt="Background"
            className="w-full h-full object-cover blur-sm"
          />
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
        </div>
        {/* dot grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#888 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36">
          {/* Label */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-px h-8 bg-accent" />
            <span className="text-accent uppercase tracking-widest text-sm sm:text-base font-bold">About Us</span>
          </div>

          {/* Two-col: text left, visual right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-start">
            {/* Left */}
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-light leading-tight mb-6 text-white">
                Building Tomorrow&apos;s <span className="font-bold">Legacy, Today</span>
              </h1>
              <p className="text-sm sm:text-base leading-relaxed font-light text-white/90 mb-4">
                Kaz Properties & Developers was founded with a singular belief — that real estate is more than
                buying and selling land. It is about creating enduring communities where families feel safe,
                proud, and connected. Every project we undertake begins with that conviction.
              </p>
              <p className="text-sm sm:text-base leading-relaxed font-light text-white/90 mb-4">
                Our journey began by partnering with established projects in the Dhaka-Savar corridor, building
                the expertise, trust, and relationships that now define who we are. From residential land-share
                models to multi-storey developments, we have demonstrated that transparency and quality can
                coexist with affordability.
              </p>
              <p className="text-sm sm:text-base leading-relaxed font-light text-white/90 mb-8">
                Led by a team of civil engineers, structural architects, and real estate professionals — many
                trained internationally — Kaz Properties brings global standards to the Bangladeshi market.
                We do not simply build structures. We deliver spaces where lives are lived.
              </p>

              {/* Key stats row */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                {[
                  { value: '20+', label: 'Years Combined Experience' },
                  { value: '27',  label: 'Units Delivered' },
                  { value: '100%', label: 'Transparent Agreements' },
                ].map(s => (
                  <div key={s.label}>
                    <div className="text-2xl sm:text-3xl font-bold text-accent leading-none mb-1">{s.value}</div>
                    <div className="text-[10px] sm:text-xs uppercase tracking-wide text-white/70 font-medium leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — decorative accent block */}
            <div className="flex flex-col gap-5">
              {/* Pull-quote */}
              <div className="relative bg-white/10 backdrop-blur-sm border border-accent/20 p-7 sm:p-8 rounded-sm overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
                <div className="text-accent text-5xl font-serif leading-none mb-3 ml-2">&ldquo;</div>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed font-light italic ml-2">
                  We are not selling a property — we are offering a home, a future, and a community that stands
                  the test of time. That is the Kaz Properties promise.
                </p>
                <p className="text-accent text-xs uppercase tracking-widest font-bold mt-4 ml-2">
                  — Abdul Quader Zilon, MD & CEO
                </p>
              </div>

              {/* Core values mini-grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { title: 'Integrity',    desc: 'Every promise made is a promise kept — no hidden fees, no vague timelines.' },
                  { title: 'Innovation',   desc: 'Modern design thinking meets local knowledge for spaces that last.' },
                  { title: 'Partnership',  desc: 'We grow alongside our landowners, clients, and communities.' },
                  { title: 'Excellence',   desc: 'From foundation to finish, quality is never compromised.' },
                ].map(v => (
                  <div key={v.title} className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mb-2" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">{v.title}</h4>
                    <p className="text-[11px] text-white/70 leading-relaxed font-light">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — MISSION & VISION (dark band)
      ══════════════════════════════════════════ */}
      <section className="w-full bg-brand-black text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36">
          {/* Label */}
          <div className="flex items-center gap-2 mb-10 sm:mb-12">
            <div className="w-px h-8 bg-accent" />
            <span className="text-accent uppercase tracking-widest text-sm sm:text-base font-bold">Mission &amp; Vision</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Mission */}
            <div className="border border-white/10 p-8 sm:p-10 relative overflow-hidden group hover:border-accent/50 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <span className="text-accent uppercase tracking-[0.25em] text-xs font-bold mb-4 block">Our Mission</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-light leading-snug mb-5 text-white">
                  To design and deliver exceptional living spaces — built on superior quality, transparency,
                  and an absolute commitment to exceeding expectations.
                </h2>
                <p className="text-white/50 text-sm leading-relaxed font-light">
                  Every project at Kaz Properties is driven by a mission to make premium real estate accessible
                  and honest. We believe that the families who trust us with their most important investment
                  deserve nothing less than the best — on time, on budget, and beyond specification.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="border border-white/10 p-8 sm:p-10 relative overflow-hidden group hover:border-accent/50 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <span className="text-accent uppercase tracking-[0.25em] text-xs font-bold mb-4 block">Our Vision</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-light leading-snug mb-5 text-white">
                  To be Bangladesh&apos;s most trusted real estate brand — recognised for creating enduring
                  communities that build tomorrow&apos;s legacy today.
                </h2>
                <p className="text-white/50 text-sm leading-relaxed font-light">
                  We envision a Bangladesh where every citizen has access to a home that reflects their
                  aspirations. Through innovative land-share models, thoughtful urban planning, and a deeply
                  human approach to development, Kaz Properties aims to set a new standard for the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — MD MESSAGE WITH PHOTO
      ══════════════════════════════════════════ */}
      <section className="w-full bg-[#FAF7F5] dark:bg-[#0d0d0d] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36">
          {/* Label */}
          <div className="flex items-center gap-2 mb-10 sm:mb-12">
            <div className="w-px h-8 bg-accent" />
            <span className="text-accent uppercase tracking-widest text-sm sm:text-base font-bold">Message from the MD &amp; CEO</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-start">

            {/* Left — text */}
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              <p className="text-accent text-xs uppercase tracking-[0.2em] font-bold mb-2">Message from the</p>
              <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-brand-black dark:text-white mb-1 leading-tight">
                Abdul Quader Zilon
              </h2>
              <p className="text-sm text-accent font-semibold uppercase tracking-widest mb-6">
                Managing Director &amp; CEO — Kaz Properties &amp; Developers
              </p>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed font-light text-black/65 dark:text-white/65">
                <p>
                  &ldquo;Building Tomorrow&apos;s Legacy&rdquo; is more than a tagline — it is the philosophy that
                  shapes our purpose, our decisions, and our vision for the years ahead.
                </p>
                <p>
                  At Kaz Properties, we understand that real estate is not merely the construction of buildings.
                  It is the creation of enduring communities, meaningful relationships, and long-term value for
                  generations to come. Every project we take on carries the weight of that responsibility.
                </p>
                <p>
                  With over two decades of professional experience across the United Arab Emirates and international
                  real estate markets in the Middle East, I have witnessed firsthand what separates good development
                  from great development: integrity, attention to detail, and a genuine commitment to the people
                  you serve.
                </p>
                <p>
                  We invite you to be part of our story — as a homeowner, a land partner, or simply someone who
                  believes that where you live defines how you live.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/management-team"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-brand-black dark:hover:bg-white text-white dark:hover:text-brand-black transition-colors px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-sm"
                >
                  Meet the Full Team <ArrowRight size={13} />
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-white transition-colors px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-sm"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* Right — photo */}
            <div className="order-1 lg:order-2">
              <div className="relative max-w-md mx-auto">
                {/* Accent frame offset */}
                <div className="absolute -top-2 -right-2 w-full h-full border-2 border-accent/30 rounded-sm pointer-events-none" />
                <div className="relative overflow-hidden rounded-sm shadow-2xl" style={{ aspectRatio: '4/5' }}>
                  <img
                    src="/assets/management-team/Abdul Quader.png"
                    alt="Abdul Quader Zilon — Managing Director & CEO, Kaz Properties"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Bottom gradient name badge */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-12 pb-4 px-5">
                    <p className="text-white font-bold text-base leading-tight">Abdul Quader Zilon</p>
                    <p className="text-accent text-[10px] uppercase tracking-widest font-semibold mt-0.5">
                      Managing Director &amp; CEO
                    </p>
                    <p className="text-white/50 text-[10px] mt-0.5">Kaz Properties &amp; Developers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BAND
      ══════════════════════════════════════════ */}
      <section className="w-full bg-brand-black text-white py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="relative z-10 px-4 sm:px-6">
          <p className="text-accent uppercase tracking-[0.25em] text-xs font-bold mb-3">Our Promise</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight mb-4 max-w-2xl mx-auto">
            We are not selling a thing — we are selling{' '}
            <span className="text-accent font-bold">security, pride, and a future</span> for your family.
          </h2>
          <p className="text-white/45 text-sm max-w-lg mx-auto mb-8 font-light">
            Join the growing community of homeowners and land partners who chose to build with Kaz Properties.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/#featured"
              className="inline-flex items-center gap-2 bg-accent hover:bg-white text-white hover:text-brand-black transition-colors px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-sm"
            >
              View Our Projects <ArrowRight size={13} />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-accent text-white/70 hover:text-accent transition-colors px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer strip */}
      <div className="border-t border-black/8 dark:border-white/10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-black/35 dark:text-white/35 bg-white dark:bg-brand-black">
        <p>© {new Date().getFullYear()} Kaz Properties &amp; Developers. All Rights Reserved.</p>
        <Link href="/#about" className="flex items-center gap-1.5 hover:text-accent transition-colors">
          <ArrowLeft size={11} /> Back to Home
        </Link>
      </div>

    </div>
  );
}
