'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <span
        className={`${
          isActive ? ' bg-white text-primary text-xl font-bold' : 'text-white'
        }
          flex items-center gap-5 px-4 py-5 rounded-2xl transition-colors duration-200 hover:bg-white hover:text-primary`}
      >
        {children}
      </span>
    </Link>
  );
}
