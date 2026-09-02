import { motion } from "framer-motion";
import { Activity, GitBranch, Layers3, Radio } from "lucide-react";

import { content } from "../../lib/content";
import {
  logoCloudHover,
  logoCloudItem,
  logoCloudLabel,
  motionTransitions,
} from "../../lib/animations";

const logoIcons = [Activity, GitBranch, Radio, Layers3];

export default function LogoCloud() {
  return (
    <section className=" bg-paper py-8 sm:py-9">
      <div className="container">
        <div className="flex flex-col gap-6">
          <motion.div
            {...logoCloudLabel}
            transition={motionTransitions.standard}
            className="flex items-center gap-2.5"
          >
            <span className="size-2 shrink-0 bg-brass" />
            <span className="font-mono text-[9px] font-medium uppercase tracking-[0.15em] text-slate sm:text-[10px]">
              Trusted by engineering teams
            </span>
          </motion.div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:flex sm:items-center sm:justify-between sm:gap-0">
            {content.logos.map((logo, index) => {
              const Icon = logoIcons[index];

              return (
                <div
                  key={logo}
                  className="flex items-center justify-center sm:justify-start"
                >
                  <motion.div
                    {...logoCloudItem}
                    transition={{
                      ...motionTransitions.standard,
                      delay: 0.1 + index * 0.08,
                    }}
                    whileHover={logoCloudHover}
                    className="group flex items-center gap-2.5 sm:gap-3"
                  >
                    <span className="grid size-8 shrink-0 place-items-center border border-slate/20 text-slate transition-all duration-200 group-hover:border-brass group-hover:bg-ink group-hover:text-paper">
                      <Icon size={15} strokeWidth={1.7} />
                    </span>

                    <span className="whitespace-nowrap font-mono text-[11px] font-semibold tracking-[0.01em] text-ink/80 transition-colors duration-200 group-hover:text-ink sm:text-xs">
                      {logo}
                    </span>
                  </motion.div>

                  {index < content.logos.length - 1 && (
                    <span className="ml-5 hidden text-sm text-slate/35 sm:block lg:ml-7">
                      /
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
