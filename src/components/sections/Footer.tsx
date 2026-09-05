import { motion } from "framer-motion";

import {
  content,
  footerColumns,
  footerContent,
  footerTagline,
} from "../../lib/content";

import {
  footerBrand,
  footerBottom,
  footerColumn,
  footerLinkHover,
  motionTransitions,
} from "../../lib/animations";
import { Logo } from "../shared/logo";

export default function Footer() {
  return (
    <footer className="border-t border-slate/15 bg-paper">
      <div className="container py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_2fr] md:gap-16 lg:gap-24">
          <motion.div {...footerBrand} transition={motionTransitions.standard}>
            <Logo>{content.nav.logo}</Logo>

            <p className="mt-5 max-w-[280px] text-sm leading-7 text-slate">
              {footerTagline}
            </p>

            <div className="mt-7 flex items-center gap-2">
              <span className="h-px w-7 bg-brass" />
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-slate">
                {footerContent.descriptor}
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-10">
            {footerColumns.map((column, index) => (
              <motion.div
                key={column.title}
                {...footerColumn}
                transition={{
                  ...motionTransitions.standard,
                  delay: 0.08 + index * 0.08,
                }}
                className="flex min-w-0 flex-col"
              >
                <div className="mb-4 font-mono text-[9px] uppercase tracking-[0.14em] text-slate">
                  {column.title}
                </div>

                <div className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      whileHover={footerLinkHover}
                      transition={motionTransitions.fast}
                      className="w-fit text-sm text-ink/75 transition-colors duration-200 hover:text-ink"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          {...footerBottom}
          transition={{ ...motionTransitions.standard, delay: 0.2 }}
          className="mt-14 flex flex-col gap-4 border-t border-slate/15 pt-5 sm:mt-16 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="font-mono text-[10px] text-slate">
            © {new Date().getFullYear()} {footerContent.copyrightName}
          </span>

          <div className="flex items-center gap-5 font-mono text-[10px] text-slate">
            <a
              href={footerContent.privacyHref}
              className="transition-colors duration-200 hover:text-ink"
            >
              {footerContent.privacy}
            </a>

            <a
              href={footerContent.termsHref}
              className="transition-colors duration-200 hover:text-ink"
            >
              {footerContent.terms}
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
