import Link from "next/link";

export default function Header() {
  const links = [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="mx-auto mb-8 mt-8 flex max-w-7xl flex-wrap tracking-tight">
      <Link
        href="/"
        className="text-xl font-bold text-gray-100 hover:underline sm:text-2xl"
      >
        Alp Ozkan
      </Link>
      <nav className="w-full text-lg sm:ml-auto sm:w-auto sm:text-xl">
        <ul className="my-4 flex gap-2 sm:m-0">
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
