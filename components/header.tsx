import Link from "next/link";

export default function Header() {
  const links = [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="mx-auto my-8 flex max-w-7xl flex-wrap px-4 tracking-tight">
      <Link
        href="/"
        className="text-xl font-bold text-gray-100 hover:underline tablet:text-2xl"
      >
        Alp Ozkan
      </Link>
      <nav className="w-full text-lg tablet:ml-auto tablet:text-xl sm:w-auto">
        <ul className="my-4 flex gap-2 tablet:m-0">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
