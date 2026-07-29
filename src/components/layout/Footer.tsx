import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-bg-primary mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-mono font-bold text-text-primary text-lg">ny.dev</span>
          <p className="text-sm text-text-secondary mt-1">Built after midnight.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <Link href="https://github.com/ny1411" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com/in/neeraj-yamaji" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://x.com/n_y_1411/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors">
            <Twitter className="w-5 h-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="mailto:neerajyamaji@gmail.com" className="text-text-secondary hover:text-text-primary transition-colors">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
