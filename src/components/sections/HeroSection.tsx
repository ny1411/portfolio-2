"use client";

import Image from "next/image";
import Link from "next/link";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";
import { SnowEffect } from "../ui/SnowEffect";
import { RainEffect } from "../ui/RainEffect";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);

export function HeroSection() {
  return (
    <>
      {/* === Hero Banner Image === */}
      <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden border-b border-border">
        <Image
          src="/hero-banner.png"
          alt="Dark cityscape skyline"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Snowy or Rain effect */}
        {Math.random() > 0.5 ? <RainEffect /> : <SnowEffect />}
        {/* Gradient overlay at bottom to blend into page */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent z-20" />
      </div>

      {/* === Profile Content === */}
      <div className="w-full p-8 md:p-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-12"
        >
          {/* Left: Text content */}
          <div className="flex-1 space-y-6">
            {/* Name */}
            <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight leading-tight text-text-primary">
              Neeraj Yamaji
            </h1>

            {/* Role + Location */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-text-secondary">
              <span className="font-medium text-text-primary">Computer Engineer</span>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                <span>Pune, India</span>
              </div>
            </div>

            {/* Bio */}
            <p className="text-text-secondary leading-relaxed max-w-xl text-[15px]">
              CS student at{" "}
              <span className="bg-accent-blue/10 text-accent-blue px-1 rounded">
                TSSM&apos;s BSCOER
              </span>
              . I build things for the web, tinker with systems, and occasionally touch grass.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="mailto:neerajyamaji@gmail.com">
                <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent-blue text-white text-sm font-medium rounded-full hover:bg-accent-blue-dim transition-colors duration-200">
                  <MailIcon className="w-4 h-4" />
                  Get in touch
                </button>
              </Link>
              <Link href="/resume">
                <button className="inline-flex items-center gap-2 px-6 py-2.5 border border-border text-text-primary text-sm font-medium rounded-full hover:border-text-secondary hover:bg-bg-surface-hover transition-all duration-200">
                  <FileText className="w-4 h-4" />
                  Resume
                </button>
              </Link>
            </div>

            {/* Social Links Row */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <Link
                href="https://github.com/ny1411"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-border text-xs text-text-secondary hover:text-text-primary hover:border-text-secondary transition-all duration-200"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/neeraj-yamaji"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-border text-xs text-text-secondary hover:text-text-primary hover:border-text-secondary transition-all duration-200"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </Link>
              <Link
                href="https://x.com/n_y_1411/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-border text-xs text-text-secondary hover:text-text-primary hover:border-text-secondary transition-all duration-200"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
                <span>Twitter</span>
              </Link>
            </div>
          </div>

          {/* Right: Avatar */}
          <div className="hidden md:block flex-shrink-0">
            <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-2xl overflow-hidden border border-border">
              <Image
                src="/avatar.png"
                alt="Neeraj Yamaji avatar"
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
