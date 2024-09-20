"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Nav = () => {
  const router = useRouter();
  return (
    <section>
      <div className="navigation_logo">
        <img src="/dungdev.jpg" alt="Profile_image_of_DungDev" />
      </div>
      <div className="navigation_bar">
        <Link href="/">
          <div className="snip1582">
            <i className="fa fa-home"></i>
          </div>
        </Link>
        <Link href="/about">
          <div className="snip1582">
            <i className="fa fa-user"></i>
          </div>
        </Link>
        <Link href="/education">
          <div className="snip1582">
            <i className="fa fa-book"></i>
          </div>
        </Link>
        <Link href="/experiences">
          <div className="snip1582">
            <i className="fa fa-briefcase"></i>
          </div>
        </Link>
        <Link href="/projects">
          <div className="snip1582">
            <i class="fa-brands fa-product-hunt"></i>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Nav;
