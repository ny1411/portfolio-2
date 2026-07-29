import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-sm text-text-secondary">
          © 2026{" "}
          <Link href="/" className="text-text-primary hover:text-accent-blue transition-colors duration-200">
            Neeraj Yamaji
          </Link>
        </p>
        
        <p className="text-sm text-text-secondary">
          Built after midnight.
        </p>
      </div>
    </footer>
  );
}
