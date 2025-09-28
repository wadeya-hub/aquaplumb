"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import styles from "./Header.module.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Completed Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className={styles.header}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.contactInfo}>
            <a href="tel:+254700000000" className={styles.contactLink}>
              <Phone size={14} />
              <span>+254 700 000 000</span>
            </a>
            <a
              href="mailto:info@aquaplumbinnovations.com"
              className={styles.contactLink}
            >
              <Mail size={14} />
              <span>info@aquaplumbinnovations.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.navContent}>
            {/* Logo */}
            <Link href="/" className={styles.logo}>
              <Image
                src="https://hdwifbsurncntfwwmadt.supabase.co/storage/v1/object/public/website_general/logo.png"
                alt="AquaPlumb Innovations Limited"
                width={180}
                height={60}
                className={styles.logoImage}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className={styles.desktopNav}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.navLink}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/quote" className={styles.quoteButton}>
                Quick Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={styles.mobileMenuButton}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.mobileMenuContent}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/quote"
                className={styles.mobileQuoteButton}
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
