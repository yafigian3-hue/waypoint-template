import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { content } from "../../lib/content";

import { Logo } from "../shared/logo";
import { CtaButton } from "../shared/cta-button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="sticky top-0 z-50 border-b border-slate/10 bg-paper/85 shadow-[0_1px_0_rgba(184,134,63,0.08)] backdrop-blur-2xl"
    >
      <div className="container flex h-[4.5rem] items-center justify-between gap-6">
        <Logo>{content.nav.logo}</Logo>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {content.nav.links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.2 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative rounded-sm px-1 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-slate transition-colors duration-200 hover:text-ink"
            >
              {link.label}

              <span className="absolute -bottom-1 left-0 h-px w-0 bg-brass transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.2 + content.nav.links.length * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <CtaButton href="#start">{content.nav.cta}</CtaButton>{" "}
          </motion.div>
        </nav>

        {/* Mobile menu button */}
        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.25,
          }}
          whileTap={{ scale: 0.9 }}
          className="grid size-10 place-items-center border border-slate/20 text-ink transition-colors hover:border-brass hover:text-brass md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X size={21} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={21} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border-t border-slate/10 bg-ink text-paper shadow-[0_14px_30px_rgba(18,24,31,0.14)]"
          >
            <nav className="container flex flex-col gap-2 pb-7 pt-5 text-sm">
              {content.nav.links.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.05 + index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={closeMenu}
                  className="border-b border-paper/10 py-3 text-paper/80 transition-colors duration-200 hover:border-brass hover:text-brass"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.35,
                  delay: 0.05 + content.nav.links.length * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <CtaButton href="#start">{content.nav.cta}</CtaButton>{" "}
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
