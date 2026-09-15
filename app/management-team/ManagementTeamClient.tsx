'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import ThemeToggleButton from '@/components/ThemeToggleButton';

const team = [
  {
    name: 'Abdul Quader Zilon',
    title: 'Managing Director & CEO',
    company: 'KAZ Properties & Developers',
    photo: '/assets/management-team/Abdul Quader.png',
    bio: [
      '"We Build Abodes of Peace" — is not just a sentence for us. It\'s the deep core belief that drives our work, our choices, and our dream for tomorrow.',
      'At KAZ Properties, we believe real estate isn\'t just about brick, cement, or high buildings. It\'s about building a peaceful home where a family feels safe, creating strong neighborhood bonds, and leaving behind a place of comfort for your children.',
      'Guided by over 20 years of real industry experience, Mr. Abdul Quader Zilon has built his career on honesty, modern ideas, and a promise to always do what\'s right for people.',
      'His long journey includes leading key projects in the United Arab Emirates and international real estate markets across the Middle East. Through this, he brought back world-class planning, modern designs, and a strong commitment to putting people\'s peace of mind first.',
    ],
  },
  {
    name: 'Sharmin Akter',
    title: 'Deputy Managing Director',
    company: 'KAZ Properties & Developers',
    photo: '/assets/management-team/Sharmin Akter.jpeg',
    bio: [
      'Sharmin Akter serves as Deputy Managing Director at KAZ Properties & Developers, bringing extensive experience in insurance, sales, marketing, customer relationship management, and real estate.',
      'After completing her Master\'s in Arts from Jahangirnagar University, she began her career with MetLife Insurance Company, where she gained valuable expertise in client communication, relationship management, sales, and business development. She later joined Aksirnagar Housing Society, further strengthening her experience in real estate sales, marketing, and client relations.',
      'At KAZ Properties & Developers, she plays an active role in sales and marketing, business development, client relationship management, strategic planning, and business growth. Her leadership is guided by integrity, customer trust, transparency, and long-term value creation.',
      'She remains committed to building lasting relationships and delivering reliable, customer-focused real estate solutions.',
    ],
  },
  {
    name: 'Abu Bakar Siddique',
    title: 'Director – Operations',
    company: 'KAZ Properties & Developers',
    photo: '/assets/management-team/Abu_bakar.jpeg',
    bio: [
      'Abu Bakar Siddique serves as Director – Operations at KAZ Properties and Developers, bringing over a decade of experience in the Ready-Made Garments (RMG) sector along with growing expertise in real estate and business development.',
      'An Economics graduate from Jahangirnagar University, he has strong experience in quality assurance, production management, operational efficiency, and customer-focused execution. He now applies this expertise to real estate, overseeing operations with a focus on quality, efficiency, transparency, and timely delivery.',
      'Passionate about business development, Abu Bakar focuses on understanding market needs, building lasting relationships, and creating sustainable value. He believes successful real estate development is about turning people\'s aspirations into thoughtfully planned living spaces.',
    ],
  },
];

export default function ManagementTeamClient() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white dark:bg-brand-black text-brand-black dark:text-white overflow-y-auto h-screen">

      {/* ── Top nav bar ── */}
      <div className="relative z-10 px-5 md:px-10 lg:px-16 xl:px-24 py-5 md:py-6 flex items-center justify-between border-b border-black/10 dark:border-white/10">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-black/50 dark:text-white/50 hover:text-accent transition-colors text-sm font-medium group"
        >
          <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        <img src="/logo1.png" alt="Kaz Properties" className="h-8 md:h-10 xl:h-12 w-auto object-contain" />
        <ThemeToggleButton variant="light" />
      </div>

      {/* ── Hero header — centered ── */}
      <section className="relative overflow-hidden py-20 md:py-28 xl:py-36 text-center bg-brand-black text-white">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        {/* Top accent line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-black to-transparent pointer-events-none" />

        <div className="relative z-10 px-5 md:px-10">
          <p className="text-accent uppercase tracking-[0.3em] text-xs xl:text-sm font-bold mb-5">
            The People Behind Our Vision
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight mb-6 tracking-tight">
            Our Management<br />Team
          </h1>
          {/* Accent rule */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-accent/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <div className="h-px w-16 bg-accent/40" />
          </div>
          <p className="text-white/40 font-light text-sm xl:text-base max-w-xl mx-auto leading-relaxed">
            A team of seasoned professionals united by a shared commitment to excellence, integrity, and creating lasting value in real estate.
          </p>
        </div>
      </section>

      {/* ── Team members ── */}
      <section className="px-5 md:px-10 lg:px-16 xl:px-24 2xl:px-36 pb-24 md:pb-32 xl:pb-40 bg-white dark:bg-brand-black">
        <div className="flex flex-col gap-0">
          {team.map((member, index) => (
            <article
              key={member.name}
              className={`flex flex-col lg:flex-row gap-0 border-t border-black/8 dark:border-white/8 ${index === team.length - 1 ? 'border-b' : ''}`}
            >
              {/* ── Photo panel ── */}
              <div
                className={`w-full lg:w-[38%] xl:w-[35%] shrink-0 ${index % 2 === 1 ? 'lg:order-last' : ''}`}
              >
                <div className="relative overflow-hidden group h-[360px] md:h-[440px] lg:h-full min-h-[420px]">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent" />
                  {/* Left/right gradient depending on position */}
                  <div
                    className={`absolute inset-0 ${index % 2 === 1 ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-transparent to-brand-black/30`}
                  />

                  {/* Index watermark */}
                  <div className="absolute top-5 right-6 text-[72px] font-bold text-white/[0.06] leading-none select-none pointer-events-none tabular-nums">
                    0{index + 1}
                  </div>

                  {/* Name + title badge */}
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                    <div className="inline-flex items-center gap-2 bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      <span className="text-white text-[10px] uppercase tracking-widest font-bold">{member.title}</span>
                    </div>
                    <h2 className="text-white text-2xl md:text-3xl font-light leading-tight">{member.name}</h2>
                    <p className="text-white/50 text-xs mt-1 font-light tracking-wide">{member.company}</p>
                  </div>
                </div>
              </div>

              {/* ── Bio panel ── */}
              <div
                className={`flex-1 flex flex-col justify-center py-12 md:py-16 xl:py-20 ${index % 2 === 1 ? 'lg:pl-0 lg:pr-12 xl:pr-20' : 'lg:pl-12 xl:pl-20'}`}
              >
                {/* Section label */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-accent" />
                  <span className="text-accent uppercase tracking-[0.25em] text-[10px] xl:text-xs font-bold">Leadership Profile</span>
                </div>

                {/* Name heading (visible on mobile since photo covers it) */}
                <div className="lg:hidden mb-6">
                  <p className="text-accent text-xs uppercase tracking-widest font-semibold mb-1">{member.title}</p>
                  <h2 className="text-2xl font-light text-brand-black dark:text-white">{member.name}</h2>
                  <p className="text-brand-black/40 dark:text-white/40 text-xs mt-1">{member.company}</p>
                </div>

                {/* Bio paragraphs */}
                <div className="space-y-5 xl:space-y-6 max-w-2xl">
                  {member.bio.map((para, pi) => (
                    <p
                      key={pi}
                      className={`leading-[1.85] text-sm xl:text-base ${
                        pi === 0
                          ? 'text-brand-black/85 dark:text-white/85 italic font-light border-l-2 border-accent/50 pl-4 text-base xl:text-lg'
                          : 'text-brand-black/55 dark:text-white/55 font-light'
                      }`}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Decorative bottom rule */}
                <div className="flex items-center gap-3 mt-10 xl:mt-12">
                  <div className="h-px flex-1 max-w-[60px] bg-accent/30" />
                  <div className="w-1 h-1 rounded-full bg-accent/40" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className="relative border-t border-black/10 dark:border-white/10 py-16 md:py-20 text-center px-5 bg-white dark:bg-brand-black">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#888 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />
        <div className="relative z-10">
          <p className="text-accent uppercase tracking-widest text-xs font-bold mb-4">Work With Us</p>
          <h3 className="text-2xl md:text-4xl xl:text-5xl font-light mb-5 leading-tight text-brand-black dark:text-white">
            Ready to build your<br className="hidden md:block" /> future with us?
          </h3>
          <p className="text-brand-black/40 dark:text-white/40 text-sm xl:text-base font-light max-w-md mx-auto mb-8">
            Our leadership team is here to guide you through every step of your real estate journey.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-brand-black dark:hover:bg-white text-white dark:hover:text-brand-black transition-colors px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-sm"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* ── Footer strip ── */}
      <div className="border-t border-black/10 dark:border-white/10 px-5 md:px-10 lg:px-16 xl:px-24 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-black/30 dark:text-white/30 bg-white dark:bg-brand-black">
        <p>© {new Date().getFullYear()} Kaz Properties &amp; Developers. All Rights Reserved.</p>
        <button onClick={() => router.back()} className="flex items-center gap-2 hover:text-accent transition-colors">
          <ArrowLeft size={12} />
          Back
        </button>
      </div>

    </div>
  );
}
