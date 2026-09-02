import { content, footerColumns, footerTagline } from "../../lib/content";
import { Logo } from "../shared/logo";

export default function Footer() {
  return (
    <footer>
      <div className="container flex flex-col justify-between gap-[50px] py-[65px] md:flex-row">
        <div>
          <Logo>{content.nav.logo}</Logo>

          <p className="mt-[18px] max-w-[230px] text-xs leading-[1.6] text-slate">
            {footerTagline}
          </p>
        </div>

        <div className="flex flex-wrap gap-[35px] md:gap-20">
          {footerColumns.map((column) => (
            <div
              key={column.title}
              className="flex min-w-[90px] flex-col gap-3"
            >
              <div className="text-[10px] uppercase tracking-widest text-slate">
                {column.title}
              </div>

              {column.links.map((link) => (
                <a
                  href="#product"
                  key={link}
                  className="text-[11px] text-slate"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container flex justify-between border-t border-slate/20 pb-[25px] pt-[18px]">
        <span className="text-[11px] text-slate">
          © {new Date().getFullYear()} Waypoint, Inc.
        </span>

        <span className="flex gap-4 text-[11px] text-slate">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </span>
      </div>
    </footer>
  );
}
