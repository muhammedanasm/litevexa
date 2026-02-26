import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import {
  ArrowDown,
  ArrowUpRight,
  Globe,
  Box,
  Layers,
  Zap,
  Hexagon,
  Play,
  Users,
  Code,
  Smartphone,
  Search,
  Palette,
  Megaphone,
  Phone,
  Sparkles,
} from "lucide-react";
import logo from "./assets/Litevexa Logo-White.svg";
import logofooter from "./assets/Litevexa.svg";
import works from "./assets/corevista.png";
import works1 from "./assets/swadiamonds.png";
import works2 from "./assets/welota.png";
import works3 from "./assets/b2nes.jpg";

gsap.registerPlugin(ScrollTrigger);

/* --- UTILS --- */

const Magnetic = ({ children }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const xTo = gsap.quickTo(el, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(el, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const move = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      xTo((clientX - (left + width / 2)) * 0.35);
      yTo((clientY - (top + height / 2)) * 0.35);
    };
    const leave = () => {
      xTo(0);
      yTo(0);
    };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);
  return React.cloneElement(children, { ref });
};

const CustomCursor = () => {
  const cursor = useRef(null);
  const follower = useRef(null);
  useEffect(() => {
    const move = (e) => {
      gsap.to(cursor.current, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.to(follower.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <>
      <div
        ref={cursor}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      <div
        ref={follower}
        className="fixed top-0 left-0 w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
    </>
  );
};

/* --- SECTIONS --- */

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full px-10 py-8 flex justify-between items-center z-50 mix-blend-difference text-white">
      <div className="font-display font-bold text-3xl uppercase tracking-tighter">
        <img style={{ height: "25px" }} src={logo} alt="Logo" />
      </div>
      <div className="hidden md:flex gap-12 font-sans text-xs font-bold uppercase tracking-widest">
        <a href="#about" className="hover:text-gray-400 transition-colors">
          Studio
        </a>
        <a href="#work" className="hover:text-gray-400 transition-colors">
          Work
        </a>
        <a href="#services" className="hover:text-gray-400 transition-colors">
          Services
        </a>
        <a href="#contact" className="hover:text-gray-400 transition-colors">
          Contact
        </a>
      </div>
      <Magnetic>
        <a
          href="tel:+91 9645016304"
          className="hidden md:flex items-center gap-2 px-6 py-2 border border-white rounded-full uppercase text-xs font-bold tracking-widest hover:bg-white hover:text-black transition-colors"
        >
          Get in Touch
        </a>
      </Magnetic>
    </nav>
  );
};

const Hero = () => {
  const container = useRef(null);
  const textRef = useRef(null);
  const visualRef = useRef(null);
  const orbRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation for text
      gsap.from(".hero-line", {
        y: 150,
        opacity: 0,
        duration: 2,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.5,
      });

      // Floating animation for cards
      gsap.to(".floating-card", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      });

      // Parallax effect on mouse move
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 50;
        const yPos = (clientY / window.innerHeight - 0.5) * 50;

        gsap.to(visualRef.current, {
          x: xPos,
          y: yPos,
          duration: 1.5,
          ease: "power2.out",
        });

        gsap.to(orbRef.current, {
          x: xPos * 1.5,
          y: yPos * 1.5,
          duration: 2,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="relative min-h-screen flex items-center px-6 md:px-20 overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Background Architectural Grid */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="grid lg:grid-cols-2 w-full z-10 items-center gap-10">
        {/* LEFT: Heading */}
        <div ref={textRef}>
          <h1 className="font-display text-[11vw] lg:text-[8vw] leading-[0.85] font-semibold uppercase tracking-tighter">
            <div className="overflow-hidden h-fit hero-line">Digital</div>
            <div className="overflow-hidden h-fit text-gray-500 hero-line">
              Reality
            </div>
            <div className="overflow-hidden h-fit hero-line">Architects</div>
          </h1>
          <div className="mt-10 overflow-hidden flex items-center gap-4 hero-line opacity-100">
            <span className="h-[1px] w-12 bg-indigo-500"></span>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-indigo-400">
              Premium Digital Craftsmanship
            </p>
          </div>
        </div>

        {/* RIGHT: Engaging Visual Section */}
        <div className="relative h-[60vh] lg:h-[80vh] flex items-center justify-center">
          {/* Glowing Aura */}
          <div
            ref={orbRef}
            className="absolute w-[40vw] h-[40vw] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"
          />

          <div ref={visualRef} className="relative w-full h-full">
            {/* Card: Code/Engineering */}
            <div className="floating-card absolute top-[10%] right-[15%] w-40 h-40 md:w-56 md:h-56 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col justify-between transform rotate-12 transition-all hover:border-indigo-500/50">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center">
                <Code size={24} className="text-indigo-400" />
              </div>
              <div>
                <div className="h-1 w-12 bg-white/20 rounded-full mb-2"></div>
                <div className="h-1 w-8 bg-white/10 rounded-full"></div>
                <p className="mt-4 font-display text-xl font-bold">
                  Scalable Systems
                </p>
              </div>
            </div>

            {/* Card: Identity/Users */}
            <div className="floating-card absolute bottom-[15%] left-[10%] w-48 h-32 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col justify-center transform -rotate-6 transition-all hover:border-indigo-500/50">
              <div className="flex -space-x-3 mb-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 20}`}
                      alt="avatar"
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-black bg-indigo-600 flex items-center justify-center text-xs font-bold">
                  +
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                Human-Centric Design
              </p>
            </div>

            {/* Central Piece: The Core */}
            <div className="floating-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group">
              <div className="absolute inset-0 bg-indigo-500 blur-3xl opacity-20 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative w-32 h-32 md:w-48 md:h-48 border border-white/20 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                <Hexagon
                  size={64}
                  strokeWidth={1}
                  className="text-white opacity-40"
                />
                <div className="absolute inset-0 border-t-2 border-indigo-500 rounded-full"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Sparkles size={32} className="text-indigo-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Footer */}
      <div className="absolute bottom-12 left-6 md:left-20 flex justify-between items-end w-[90%] border-t border-white/10 pt-6">
        <p className="max-w-md text-sm text-gray-400 font-sans leading-relaxed">
          Litevexa is a global digital agency. We merge raw creativity with
          engineering precision to build the unbuildable.
        </p>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
            Explore
          </span>
          <ArrowDown className="animate-bounce" size={20} />
        </div>
      </div>
    </section>
  );
};

const VideoExpand = () => {
  const container = useRef(null);
  const wrapper = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(wrapper.current, {
        width: "100%",
        height: "100vh",
        borderRadius: "0px",
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // Subtle parallax for the image inside
      gsap.to(".inner-img", {
        scale: 1.2,
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="h-[150vh] flex items-start justify-center pt-20 bg-[#0a0a0a] relative"
    >
      <div
        ref={wrapper}
        className="w-[80vw] h-[60vh] bg-zinc-900 rounded-[50px] overflow-hidden relative border border-white/10"
      >
        {/* The Image Replacement */}
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
          alt="Architecture"
          className="inner-img w-full h-full object-cover opacity-60"
        />

        {/* HUD / Technical Overlays to make it "Engage" */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Scanning Line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.5)] animate-[scan_4s_linear_infinite]"></div>

          {/* Corner Brackets */}
          <div className="absolute top-10 left-10 w-10 h-10 border-t-2 border-l-2 border-white/30"></div>
          <div className="absolute top-10 right-10 w-10 h-10 border-t-2 border-r-2 border-white/30"></div>
          <div className="absolute bottom-10 left-10 w-10 h-10 border-b-2 border-l-2 border-white/30"></div>
          <div className="absolute bottom-10 right-10 w-10 h-10 border-b-2 border-r-2 border-white/30"></div>

          {/* Technical Data Points */}
          <div className="absolute top-20 left-20 hidden md:block">
            <p className="text-[10px] font-mono text-indigo-400 mb-1 tracking-tighter">
              PROJECT_042 // SECTOR_G
            </p>
            <div className="w-32 h-[1px] bg-indigo-500/30"></div>
          </div>

          <div className="absolute bottom-20 right-20 hidden md:block text-right">
            <p className="text-[10px] font-mono text-gray-500 tracking-tighter italic">
              LAT: 34.0522° N <br /> LONG: 118.2437° W
            </p>
          </div>
        </div>

        {/* Center Interaction */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Magnetic>
            <div className="group relative flex items-center justify-center cursor-pointer">
              {/* Spinning Ring */}
              <div className="absolute w-32 h-32 border border-white/10 border-t-indigo-500 rounded-full animate-spin-slow"></div>

              <div className="w-24 h-24 bg-white/5 backdrop-blur-xl rounded-full flex flex-col items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-white transition-all duration-500">
                <Sparkles
                  className="text-white group-hover:text-black mb-1"
                  size={20}
                />
                <span className="text-[8px] font-bold uppercase tracking-widest text-white group-hover:text-black">
                  Explore
                </span>
              </div>
            </div>
          </Magnetic>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            top: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }
      `}</style>
    </section>
  );
};

const TextReveal = () => {
  const container = useRef(null);
  const text =
    "We enable ambitious organizations to embrace the future. Through strategy, design, and technology, we craft systems that scale.";

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-word", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "bottom 50%",
          scrub: 1,
        },
        opacity: 0.1,
        stagger: 0.05,
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={container}
      className="py-40 px-6 md:px-24 bg-[#0a0a0a] text-white"
    >
      <h2 className="text-4xl md:text-7xl font-sans font-medium leading-[1.2] max-w-6xl mx-auto text-center">
        {text.split(" ").map((word, i) => (
          <span key={i} className="reveal-word inline-block mr-3 opacity-100">
            {word}
          </span>
        ))}
      </h2>
    </section>
  );
};

// const StickyServices = () => {
//   const container = useRef(null);
//   const rightSection = useRef(null);

//   return (
//     <section
//       ref={container}
//       className="py-20 px-6 md:px-20 flex flex-col md:flex-row gap-20 bg-[#0a0a0a] text-white"
//     >
//       <div className="md:w-1/3">
//         <div className="sticky top-32">
//           <h2 className="font-display text-6xl uppercase mb-8">Services</h2>
//           <p className="text-gray-400 text-lg">
//             A complete suite of digital solutions designed for the modern era.
//           </p>
//         </div>
//       </div>
//       <div ref={rightSection} className="md:w-2/3 flex flex-col gap-8">
//         {[
//           {
//             icon: Globe,
//             title: "Web Engineering",
//             desc: "Robust, scalable platforms built with Next.js, React, and Node.",
//           },
//           {
//             icon: Box,
//             title: "3D Experiences",
//             desc: "Immersive WebGL and Three.js interactions.",
//           },
//           {
//             icon: Layers,
//             title: "Product Design",
//             desc: "Award-winning UI/UX design systems.",
//           },
//           {
//             icon: Zap,
//             title: "Growth Marketing",
//             desc: "Data-driven strategies to acquire and retain users.",
//           },
//           {
//             icon: Hexagon,
//             title: "Blockchain",
//             desc: "Smart contracts and Web3 integration.",
//           },
//         ].map((s, i) => (
//           <div
//             key={i}
//             className="bg-zinc-900 p-12 rounded-3xl hover:bg-white hover:text-black transition-colors duration-500 group cursor-pointer border border-white/5"
//           >
//             <s.icon
//               size={48}
//               className="mb-8 text-gray-500 group-hover:text-black"
//             />
//             <h3 className="font-display text-4xl font-bold mb-4">{s.title}</h3>
//             <p className="text-gray-500 group-hover:text-black/70 text-lg">
//               {s.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

const StickyServices = () => {
  const container = useRef(null);
  const rightSection = useRef(null);

  return (
    <section
      id="services"
      ref={container}
      className="py-20 px-6 md:px-20 flex flex-col md:flex-row gap-20 bg-[#0a0a0a] text-white"
    >
      <div className="md:w-1/3">
        <div className="sticky top-32">
          <h2 className="font-display text-6xl uppercase mb-8">Services</h2>
          <p className="text-gray-400 text-lg">
            A complete suite of digital solutions designed for the modern era.
          </p>
        </div>
      </div>
      <div ref={rightSection} className="md:w-2/3 flex flex-col gap-8">
        {[
          {
            icon: Code,
            title: "WEB DESIGN & DEVELOPEMENT",
            desc: "Crafting visually stunning and high-performing websites tailored to your business goals.",
          },
          {
            icon: Smartphone,
            title: "App development",
            desc: "Building intuitive, scalable mobile applications for iOS and Android platforms.",
          },
          {
            icon: Search,
            title: "SEARCH ENGINE OPTIMISATION",
            desc: "Boosting your online visibility and driving organic traffic through data-driven search strategies.",
          },
          {
            icon: Palette,
            title: "BRANDING & DESIGNING",
            desc: "Creating unique brand identities and compelling visual designs that resonate with your audience.",
          },
          {
            icon: Megaphone,
            title: "DIGITAL MARKETING",
            desc: "Executing strategic online campaigns to expand your reach and maximize conversions.",
          },
        ].map((s, i) => (
          <div
            key={i}
            className="bg-zinc-900 p-12 rounded-3xl hover:bg-white hover:text-black transition-colors duration-500 group cursor-pointer border border-white/5"
          >
            <s.icon
              size={48}
              className="mb-8 text-gray-500 group-hover:text-black"
            />
            <h3 className="font-display text-3xl font-bold mb-4 uppercase">
              {s.title}
            </h3>
            <p className="text-gray-500 group-hover:text-black/70 text-lg">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const HorizontalScroll = () => {
  const container = useRef(null);
  const track = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(track.current, {
        x: () => -(track.current.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + track.current.scrollWidth,
        },
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="h-screen bg-white text-black overflow-hidden flex flex-col justify-center"
    >
      <div className="px-12 mb-10">
        <h2 className="font-display text-4xl uppercase tracking-widest text-gray-500">
          Our Process
        </h2>
      </div>

      <div ref={track} className="flex gap-20 px-12 w-fit">
        {[
          "Discovery",
          "Strategy",
          "Design",
          "Development",
          "Launch",
          "Scale",
        ].map((step, i) => (
          <div key={i} className="w-[60vw] md:w-[30vw] flex flex-col gap-6">
            <span className="text-9xl font-display font-bold text-gray-200">
              0{i + 1}
            </span>
            <h3 className="text-5xl font-display font-bold uppercase">
              {step}
            </h3>
            <p className="text-xl text-gray-600">
              We dive deep into your business logic to ensure we are building
              the right thing for the right people.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const ParallaxWork = () => {
  const container = useRef(null);
  const col1 = useRef(null);
  const col2 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(col1.current, {
        y: -100,
        scrollTrigger: { trigger: container.current, scrub: true },
      });
      gsap.to(col2.current, {
        y: 100,
        scrollTrigger: { trigger: container.current, scrub: true },
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const imgClass =
    "w-full h-[60vh] object-cover rounded-lg mb-8 opacity-60 hover:opacity-100 transition-opacity duration-500 hover:grayscale-0";

  return (
    <section
      id="work"
      ref={container}
      className="py-32 px-6 md:px-20 bg-[#0a0a0a] text-white min-h-screen overflow-hidden"
    >
      <h2 className="font-display text-6xl md:text-8xl mb-20 uppercase">
        Selected <span className="text-gray-500 italic">Work</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div ref={col1} className="mt-20">
          <img src={works} className={imgClass} />
          <img src={works1} className={imgClass} />
          <img src={works2} className={imgClass} />
        </div>
        <div ref={col2} className="-mt-20">
          <img src={works3} className={imgClass} />
          <img src={works} className={imgClass} />
          <img src={works1} className={imgClass} />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-white text-black pt-32 pb-10 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-4">
            What's Next?
          </p>
          <h2 className="font-display text-[12vw] leading-none uppercase font-bold hover:text-indigo-600 transition-colors duration-500 cursor-pointer">
            Let's Talk
          </h2>
          <div className="mt-8">
            <Magnetic>
              <a
                href="tel:+91 9645016304"
                className="flex items-center gap-3 px-10 py-4 bg-black text-white rounded-full uppercase text-sm font-bold tracking-widest hover:bg-indigo-600 transition-colors"
              >
                <Phone size={18} /> Call Now
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mt-20 border-t border-black/10 pt-12">
          <div>
            <img
              style={{ maxWidth: "200px", marginBottom: "20px" }}
              src={logofooter}
              alt="Logo"
            />
            <p className="text-gray-500 text-sm">
              Building the future of digital interaction.
            </p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-4">
              Sitemap
            </h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Home</li>
              <li>Work</li>
              <li>Services</li>
              <li>Agency</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-4">
              Socials
            </h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Instagram</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>litevexadigital@gmail.com</li>
              <li>+91 9645016304</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* --- APP --- */

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="font-sans antialiased selection:bg-indigo-500 selection:text-white">
      <div className="fixed inset-0 bg-noise opacity-[0.03] pointer-events-none z-[9999]"></div>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <VideoExpand />
        <TextReveal />
        <StickyServices />
        <HorizontalScroll />
        <ParallaxWork />
      </main>
      <Footer />
    </div>
  );
};

export default App;
