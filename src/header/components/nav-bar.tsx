import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../../lib/routes";

interface NavBarProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

export default function NavBar({ isMobile, onLinkClick }: NavBarProps) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav
      className={`${
        isMobile
          ? "flex flex-col gap-5 w-full items-start"
          : "hidden lg:flex flex-1 justify-end items-center gap-x-4 xl:gap-x-8 mr-4 xl:mr-8"
      }`}
    >
      {NAV_LINKS.map((link) => {
        const isAnchor = link.href.includes("#");
        const isActive = pathname === link.href.split("#")[0];

        if (isAnchor) {
          return (
            <a
              key={link.href}
              href={link.href}
              onClick={onLinkClick}
              className={`text-[13px] xl:text-sm font-medium transition-all duration-200 relative py-1 whitespace-nowrap ${
                isActive
                  ? "text-[#008542] font-bold"
                  : "text-gray-600 hover:text-[#008542]"
              }`}
            >
              {link.label}
              {isActive && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#008542] rounded-full" />
              )}
            </a>
          );
        }

        return (
          <Link
            key={link.href}
            to={link.href}
            onClick={onLinkClick}
            className={`text-[13px] xl:text-sm font-medium transition-all duration-200 relative py-1 whitespace-nowrap ${
              isActive
                ? "text-[#008542] font-bold"
                : "text-gray-600 hover:text-[#008542]"
            }`}
          >
            {link.label}
            {isActive && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#008542] rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
