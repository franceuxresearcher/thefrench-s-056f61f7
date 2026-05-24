import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { toast } from "sonner";
import heroSacreCoeur from "@/assets/hero-sacre-coeur.jpg";
import portraitFrance from "@/assets/portrait-france.jpg";
import look01 from "@/assets/look-01.jpg";
import look02 from "@/assets/look-02.jpg";
import look03 from "@/assets/look-03.jpg";
import parisianVitrines from "@/assets/parisian-vitrines.jpg";

const CONTACT_EMAIL = "thefrenchs.contact@gmail.com";

function handleContactClick(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  // Try to copy the email to clipboard as a fallback
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(CONTACT_EMAIL).catch(() => {});
  }
  // Attempt to open mail client
  window.location.href = `mailto:${CONTACT_EMAIL}`;
  // Show a toast with the email so users without a mail client still get it
  setTimeout(() => {
    toast("Email copied - write to us", {
      description: CONTACT_EMAIL,
      duration: 6000,
    });
  }, 300);
}

export const Route = createFileRoute("/")({
  component: Index,
});

function Placeholder({ label, sub }: { label: string; sub?: string }) {
  return (
    <div className="flex h-full min-h-[300px] w-full flex-col items-center justify-center gap-2 text-center text-[11px] tracking-[0.1em] text-ink-20">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-ink-20 text-lg">
        ⊹
      </div>
      <span>{label}</span>
      {sub && <span className="text-ink-20">{sub}</span>}
    </div>
  );
}

function Index() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-cream text-ink">
      {/* NAV */}
      <nav className="sticky top-0 z-[100] flex items-center justify-between border-b-[0.5px] border-ink-20 bg-cream px-6 py-6 md:px-16">
        <a href="#top" className="font-serif text-[20px] tracking-[0.06em] text-ink-soft">
          The French S
        </a>
        <div className="flex items-center gap-6 md:gap-10">
          <a
            href="#about"
            className="text-[11px] uppercase tracking-[0.14em] text-ink-40 transition-colors hover:text-ink"
          >
            About
          </a>
          <a
            href="#offers"
            className="text-[11px] uppercase tracking-[0.14em] text-ink-40 transition-colors hover:text-ink"
          >
            Offers
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            onClick={handleContactClick}
            className="text-[11px] uppercase tracking-[0.14em] text-ink-40 transition-colors hover:text-ink"
          >
            Contact
          </a>
          <a
            href="https://instagram.com/thefrenches_paris"
            target="_blank"
            rel="noreferrer"
            className="border-b-[0.5px] border-ink-20 pb-px text-[11px] uppercase tracking-[0.14em] text-ink-40 transition-colors hover:text-ink"
          >
            Instagram ↗
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header id="top" className="grid min-h-[90vh] grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-16 md:px-16 md:py-24">
          <p className="mb-8 text-[11px] uppercase tracking-[0.2em] text-ink-40">
            Personal Shopping · Paris
          </p>
          <h1 className="mb-4 font-serif text-[clamp(36px,4vw,52px)] font-normal leading-[1.15] text-ink-soft">
            Effortless style,
            <br />
            real confidence.
          </h1>
          <p className="mb-12 font-serif text-[20px] italic text-ink-40">Let's start here.</p>
          <a href={`mailto:${CONTACT_EMAIL}`} onClick={handleContactClick} className="btn">
            Get in touch
          </a>
        </div>
        <div className="relative min-h-[60vw] overflow-hidden bg-[rgba(26,26,26,0.07)] md:min-h-0">
          <img
            src={heroSacreCoeur}
            alt="Parisian street style - denim shirt and black trousers on cobblestones"
            className="h-full w-full object-cover object-center"
            loading="eager"
          />
        </div>
      </header>

      {/* THE FRENCH TOUCH */}
      <section className="border-t-[0.5px] border-ink-10 px-6 py-16 md:px-16 md:py-24">
        <p className="mb-10 text-[10px] uppercase tracking-[0.22em] text-ink-40">
          The French Touch
        </p>
        <h2 className="mb-6 font-serif text-[clamp(26px,3vw,36px)] font-normal leading-[1.25] text-ink-soft">
          What is French style?
        </h2>
        <p className="max-w-[580px] text-[15px] leading-[1.9] text-ink-60">
          French style is often misunderstood. It's not about wearing a striped marinière and a
          beret. It's something quieter than that.
        </p>
        <p className="mt-4 max-w-[580px] text-[15px] leading-[1.9] text-ink-60">
          It's the art of looking effortless without being careless. Choosing fewer things, but
          better ones. Knowing your colours, understanding your proportions, and not trying too
          hard - because trying too hard is, in France, the one thing you never want to do.
        </p>
        <p className="mt-4 max-w-[580px] text-[15px] leading-[1.9] text-ink-60">
          At its core, French style is a form of self-respect. A quiet way of saying: I know who I
          am.
        </p>
      </section>

      {/* WHO I AM */}
      <section
        id="about"
        className="border-t-[0.5px] border-ink-10 px-6 py-16 md:px-16 md:py-24"
      >
        <p className="mb-10 text-[10px] uppercase tracking-[0.22em] text-ink-40">Who I am</p>
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="mb-6 font-serif text-[clamp(26px,3vw,36px)] font-normal leading-[1.25] text-ink-soft">
              I'm France.
              <br />
              <em className="italic">Yes, that's really my name.</em>
            </h2>
            <p className="text-[15px] leading-[1.9] text-ink-60">
              A Parisian stylist with a genuine passion for clothing and beautiful things.
            </p>
            <p className="mt-4 text-[15px] leading-[1.9] text-ink-60">
              Three years ago, a close friend went through a difficult breakup after seven years
              together. He needed to rebuild his confidence before stepping back into the world. We
              worked on his wardrobe across several sessions, following him through different
              stages of his life as things slowly shifted. That's how The French S was born.
            </p>
            <p className="mt-4 text-[15px] leading-[1.9] text-ink-60">
              Word spread, and what started as a personal gesture grew into something I'm truly
              proud of - accompanying men through the moments that matter.
            </p>
          </div>
          <div className="aspect-[3/4] overflow-hidden bg-[rgba(26,26,26,0.06)]">
            <img
              src={portraitFrance}
              alt="France, Parisian stylist, on a Montmartre street"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* WHY THE FRENCH S */}
      <section className="border-t-[0.5px] border-ink-10 px-6 py-16 md:px-16 md:py-24">
        <p className="mb-10 text-[10px] uppercase tracking-[0.22em] text-ink-40">
          Why The French S
        </p>
        <h2 className="mb-6 font-serif text-[clamp(26px,3vw,36px)] font-normal leading-[1.25] text-ink-soft">
          The moments that matter
        </h2>
        <p className="max-w-[580px] text-[15px] leading-[1.9] text-ink-60">
          There are times in life when you want to show up differently - after a breakup, stepping
          back into the dating scene, starting a new job, preparing for a wedding, or simply
          deciding that now is a good time to invest in yourself.
        </p>
        <p className="mt-4 max-w-[580px] text-[15px] leading-[1.9] text-ink-60">
          For example, dating is one of those moments where first impressions really do matter. The
          way you dress sends a signal before you've said a word - confidence, taste, attention to
          detail. I help you make that signal work in your favour.
        </p>
        <p className="mt-4 max-w-[580px] text-[15px] leading-[1.9] text-ink-60">
          I'm here to help you move through those moments with more ease, find genuine pleasure in
          getting dressed, and build a wardrobe that feels like you - maybe a slightly better, more
          confident version of you.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              n: "01",
              t: "When you don't know, keep it simple.",
              b: "Simplicity is always elegant. We start from what works, not from what's trendy.",
            },
            {
              n: "02",
              t: "Fabric matters.",
              b: "Quality over quantity, always. The right fabric changes how a piece looks, feels, and lasts.",
            },
            {
              n: "03",
              t: "Colors can make a difference.",
              b: "The right palette quietly transforms how you look and how you feel.",
            },
            {
              n: "04",
              t: "Keep your own identity.",
              b: "I'm not here to turn you into someone else - just to help you look like the best version of yourself.",
            },
          ].map((p) => (
            <div
              key={p.n}
              className="border-[0.5px] border-ink-20 bg-white-40 p-8"
            >
              <div className="mb-4 font-serif text-[36px] leading-none text-ink-10">{p.n}</div>
              <h3 className="mb-2 font-serif text-[16px] italic text-ink-soft">{p.t}</h3>
              <p className="text-[13px] leading-[1.8] text-ink-60">{p.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FILIGRANE BAND */}
      <section
        aria-label="Quote"
        className="relative isolate overflow-hidden border-t-[0.5px] border-ink-10"
      >
        <img
          src={parisianVitrines}
          alt=""
          aria-hidden="true"
          width={1920}
          height={832}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-cream/70" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-transparent to-cream/40" aria-hidden="true" />
        <div className="relative flex min-h-[42vh] items-center justify-center px-6 py-24 md:min-h-[50vh] md:px-16 md:py-32">
          <figure className="max-w-[820px] text-center">
            <p className="mb-5 text-[10px] uppercase tracking-[0.24em] text-ink-40">
              — In a few words —
            </p>
            <blockquote className="font-serif text-[clamp(26px,3.4vw,44px)] italic leading-[1.25] text-ink-soft">
              "Confidence is the only thing that never goes out of fashion."
            </blockquote>
          </figure>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t-[0.5px] border-ink-10 px-6 py-16 md:px-16 md:py-24">
        <p className="mb-10 text-[10px] uppercase tracking-[0.22em] text-ink-40">
          They trusted The French S
        </p>
        <h2 className="mb-6 font-serif text-[clamp(26px,3vw,36px)] font-normal leading-[1.25] text-ink-soft">
          What clients say
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              q: "I came to France after a rough breakup. She didn't just help me dress better - she helped me feel like myself again. It really helped me gain confidence in dating and stand out on the apps. Worth every cent.",
              a: "- Yoann, San Francisco",
            },
            {
              q: "I was starting a new job in Paris and had no idea where to begin. Two sessions later, I had a wardrobe I actually understood. Quiet, confident, me.",
              a: "- Michael, Chicago",
            },
            {
              q: "The lookbook alone changed how I shop. I stop buying things that don't work. Simple as that.",
              a: "- Thomas, San Francisco",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 border-[0.5px] border-ink-20 bg-white-60 p-8"
            >
              <div className="flex-1">
                <div className="mb-2 font-serif text-[36px] leading-none text-ink-20">"</div>
                <p className="font-serif text-[15px] italic leading-[1.8] text-ink-60">{t.q}</p>
              </div>
              <p className="border-t-[0.5px] border-ink-10 pt-4 text-[11px] uppercase tracking-[0.12em] text-ink-40">
                {t.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="border-t-[0.5px] border-ink-10 px-6 py-16 md:px-16 md:py-24">
        <p className="mb-10 text-[10px] uppercase tracking-[0.22em] text-ink-40">The looks</p>
        <h2 className="mb-6 font-serif text-[clamp(26px,3vw,36px)] font-normal leading-[1.25] text-ink-soft">
          A few examples
        </h2>
        <p className="max-w-[580px] text-[15px] leading-[1.9] text-ink-60">
          Real clients, real results. Each look is built around the person - their life, their
          body, their personality.
        </p>
        <div className="mt-12 grid grid-cols-3 gap-2 md:gap-4">
          {[
            { label: "Look 01", src: look01 },
            { label: "Look 02", src: look02 },
            { label: "Look 03", src: look03 },
          ].map((l) => (
            <div
              key={l.label}
              className="aspect-[2/3] overflow-hidden bg-[rgba(26,26,26,0.07)]"
            >
              {l.src ? (
                <img
                  src={l.src}
                  alt={l.label}
                  className="h-full w-full object-cover object-[70%_center] transition-transform duration-500 hover:scale-[1.03]"
                  loading="lazy"
                />
              ) : (
                <Placeholder label={l.label} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* OFFERS */}
      <section
        id="offers"
        className="border-t-[0.5px] border-ink-10 px-6 py-16 md:px-16 md:py-24"
      >
        <p className="mb-10 text-[10px] uppercase tracking-[0.22em] text-ink-40">What I offer</p>
        <h2 className="mb-6 font-serif text-[clamp(26px,3vw,36px)] font-normal leading-[1.25] text-ink-soft">
          Two ways to work together
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-5 border-[0.5px] border-ink-20 bg-white-60 p-8 md:p-10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-ink-40">
              01 - Remote · Worldwide
            </p>
            <h3 className="font-serif text-[22px] font-normal leading-[1.3] text-ink-soft">
              The Personalised Lookbook
            </h3>
            <p className="flex-1 text-[14px] leading-[1.85] text-ink-60">
              Your pocket guide to shopping smarter. Based on your profile, lifestyle and goals, I
              put together a personalised lookbook - direction and inspiration you can actually
              use, wherever you are in the world.
            </p>
            <div className="flex flex-col gap-1 border-t-[0.5px] border-ink-10 pt-5">
              <span className="font-serif text-[26px] text-ink-soft">€350</span>
              <span className="text-[12px] tracking-[0.04em] text-ink-40">Delivered remotely</span>
            </div>
          </div>
          <div className="flex flex-col gap-5 border-[0.5px] border-ink-20 bg-white-60 p-8 md:p-10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-ink-40">02 - In Paris</p>
            <h3 className="font-serif text-[22px] font-normal leading-[1.3] text-ink-soft">
              Shop with Me in Paris
            </h3>
            <p className="flex-1 text-[14px] leading-[1.85] text-ink-60">
              A call to understand your needs, a tailored lookbook, then 2 to 3 hours shopping
              together in Paris. Styling advice after the session on how to put it all together.
              Budget guidance: around €500 for one pair of trousers and two shirts.
            </p>
            <div className="flex flex-col gap-1 border-t-[0.5px] border-ink-10 pt-5">
              <span className="font-serif text-[26px] text-ink-soft">From €650</span>
              <span className="text-[12px] tracking-[0.04em] text-ink-40">
                + shopping budget · Paris
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* REASSURANCE */}
      <section className="border-t-[0.5px] border-ink-10 px-6 py-16 md:px-16 md:py-24">
        <p className="mb-10 text-[10px] uppercase tracking-[0.22em] text-ink-40">
          Why you can trust us
        </p>
        <h2 className="mb-6 font-serif text-[clamp(26px,3vw,36px)] font-normal leading-[1.25] text-ink-soft">
          A serious, personal service
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              t: "Registered business",
              b: "The French S is a registered French business. Operating since 2022.",
            },
            {
              t: "100% tailored",
              b: "Every session starts with a call. No templates, no shortcuts - everything is built around you specifically.",
            },
            {
              t: "Clear process",
              b: "You always know what happens next. A call first, then a lookbook, then a shopping session if you're coming to Paris. No surprises.",
            },
          ].map((r) => (
            <div
              key={r.t}
              className="flex flex-col gap-3 border-[0.5px] border-ink-10 bg-white-40 p-8"
            >
              <div className="font-serif text-[22px] text-ink-20">✦</div>
              <h3 className="font-serif text-[16px] font-normal text-ink-soft">{r.t}</h3>
              <p className="text-[13px] leading-[1.75] text-ink-60">{r.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="border-t-[0.5px] border-ink-10 px-6 py-24 text-center md:px-16 md:py-32"
      >
        <h2 className="mb-4 font-serif text-[clamp(28px,3.5vw,42px)] font-normal text-ink-soft">
          Ready to start?
        </h2>
        <p className="mb-2 text-[15px] text-ink-60">
          Let's talk about where you are and where you want to go.
        </p>
        <span className="mb-10 block text-[14px] italic text-ink-40">
          <a
            href="mailto:thefrenchs.contact@gmail.com"
            className="border-b-[0.5px] border-ink-20 pb-px text-ink-60 transition-colors hover:text-ink"
          >
            thefrenchs.contact@gmail.com
          </a>
        </span>
        <a href={`mailto:${CONTACT_EMAIL}`} onClick={handleContactClick} className="btn">
          Get in touch
        </a>
      </section>

      {/* FOOTER */}
      <footer className="flex flex-col items-start gap-4 border-t-[0.5px] border-ink-10 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-16">
        <span className="font-serif text-[16px] text-ink-40">The French S</span>
        <div className="flex items-center gap-8">
          <a
            href="https://instagram.com/thefrenches_paris"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] tracking-[0.1em] text-ink-40 transition-colors hover:text-ink"
          >
            Instagram ↗
          </a>
          <a
            href="mailto:thefrenchs.contact@gmail.com"
            className="text-[11px] tracking-[0.1em] text-ink-40 transition-colors hover:text-ink"
          >
            thefrenchs.contact@gmail.com
          </a>
        </div>
        <span className="text-[10px] tracking-[0.04em] text-ink-20">
          © 2025 · Auto-entrepreneur · Paris, France
        </span>
      </footer>
    </div>
  );
}
