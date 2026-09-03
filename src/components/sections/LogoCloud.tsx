import { motion } from "framer-motion";
import { Activity, GitBranch, Layers3, Radio } from "lucide-react";

import { content } from "../../lib/content";
import {
  logoCloudHeader,
  logoCloudLogo,
  logoCloudLogoHover,
  motionTransitions,
} from "../../lib/animations";

const logoIcons = [Activity, GitBranch, Radio, Layers3];

export default function LogoCloud() {
  return (
    <section className="border-y border-slate/15 bg-paper py-9 sm:py-10 lg:py-12">
      <div className="container">
        <motion.div
          {...logoCloudHeader}
          transition={motionTransitions.standard}
          className="mb-7 flex items-center gap-3 sm:mb-8"
        >
          <span className="h-px w-7 bg-brass sm:w-8" />
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-slate sm:text-[10px]">
            Trusted by engineering teams
          </span>
        </motion.div>

        <div className="grid grid-cols-2 border-t border-slate/15 sm:grid-cols-4 sm:border-t-0">
          {content.logos.map((logo, index) => {
            const Icon = logoIcons[index];

            return (
              <motion.div
                key={logo}
                {...logoCloudLogo}
                transition={{
                  ...motionTransitions.standard,
                  delay: 0.08 + index * 0.08,
                }}
                whileHover={{
                  ...logoCloudLogoHover,
                  transition: motionTransitions.fast,
                }}
                className="group flex min-h-[76px] items-center justify-center border-b border-slate/15 px-4 sm:min-h-[82px] sm:border-b-0 sm:border-r sm:last:border-r-0 sm:px-5 lg:px-7"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    size={17}
                    strokeWidth={1.7}
                    className="shrink-0 text-brass transition-colors duration-200 group-hover:text-ink"
                  />
                  <span className="font-mono text-[11px] font-semibold tracking-[0.01em] text-ink/85 transition-colors duration-200 group-hover:text-ink sm:text-xs lg:text-[13px]">
                    {logo}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
