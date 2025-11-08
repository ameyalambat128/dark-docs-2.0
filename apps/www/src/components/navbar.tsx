"use client";
import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href={"/"} className="flex items-center">
      <Image
        src="/icon.png"
        alt="Logo"
        width={40}
        height={40}
        className="h-8 w-8 max-w-full drop-shadow-2xl lg:h-10 lg:w-10"
      />
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 lg:py-8">
      <div className="flex items-center gap-2 md:gap-4">
        <Logo />
        <span
          className="bg-gradient-to-b from-white via-white to-neutral-400 bg-clip-text text-lg font-bold tracking-tighter text-transparent md:text-xl"
          style={{
            textShadow: "0 1px 2px rgba(0,0,0,0.2)",
          }}
        >
          Dark Docs 2.0
        </span>
      </div>
      <section className="flex items-center space-x-2 lg:space-x-6">
        <div className="flex items-center space-x-2 lg:space-x-4">
          <a
            href="https://x.com/darkdocs2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
          >
            <Image
              src="/social-icons/x-dark.svg"
              alt="X (Twitter)"
              width={20}
              height={20}
              className="h-4 w-4 opacity-80 transition hover:opacity-100 lg:h-6 lg:w-6"
            />
          </a>
          <a
            href="https://github.com/ameyalambat128/dark-docs-2.0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Image
              src="/social-icons/github-dark.svg"
              alt="GitHub"
              width={22}
              height={22}
              className="h-5 w-5 opacity-80 transition hover:opacity-100 lg:h-6 lg:w-6"
            />
          </a>
        </div>
        {/* Product Hunt Badge - Large */}
        <a
          href="https://www.producthunt.com/products/docs-dark-2-0?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-dark&#0045;docs&#0045;2&#0045;0"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:block"
        >
          <Image
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1002154&theme=light&t=1754457725109"
            alt="Dark Docs 2.0 - The Dark Theme Google 'Forgot' | Product Hunt"
            width={160}
            height={34}
            style={{ width: "160px", height: "34px" }}
          />
        </a>
        {/* Product Hunt Badge - Small */}
        <a
          href="https://www.producthunt.com/products/docs-dark-2-0?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-dark&#0045;docs&#0045;2&#0045;0"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:block lg:hidden"
        >
          <Image
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1002154&theme=light&t=1754457725109"
            alt="Dark Docs 2.0 - The Dark Theme Google 'Forgot' | Product Hunt"
            width={100}
            height={22}
            style={{ width: "100px", height: "22px" }}
          />
        </a>
        {/* Product Hunt Badge - Mobile */}
        <a
          href="https://www.producthunt.com/products/docs-dark-2-0?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-dark&#0045;docs&#0045;2&#0045;0"
          target="_blank"
          rel="noopener noreferrer"
          className="block sm:hidden"
        >
          <Image
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1002154&theme=light&t=1754457725109"
            alt="Dark Docs 2.0 - The Dark Theme Google 'Forgot' | Product Hunt"
            width={120}
            height={26}
            style={{ width: "120px", height: "26px" }}
          />
        </a>
      </section>
    </nav>
  );
}
