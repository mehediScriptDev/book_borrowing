import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#111827] text-base-content py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="font-bold text-xl">
            <span className="text-white">Mango</span>
            <span className="text-primaryy">Bookish</span>
          </Link>
            <p className="text-sm text-white/80 max-w-xs">
              MangoBookish is a book borrowing site powered by programming hero student. Any PH student can borrow book from this site. Just Ph level-1. 
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline text-white/80">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/allBooks" className="hover:underline text-white/80">
                  All Books
                </Link>
              </li>
              <li>
                <Link href="/myProfile" className="hover:underline text-white/80">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-white">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@mangobookish.com" className="hover:underline text-white/80">
                  hellomia@mangobookish.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:underline text-white/80">
                  +8801834393787
                </a>
              </li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-2">
          <aside>
            <p className="text-xs">
              Copyright © {new Date().getFullYear()} - All right reserved by
              MangoBookish
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
