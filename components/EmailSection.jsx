import React from "react";
import GithubIcon from "../public/github-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";
import InstagramIcon from "../public/instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";
import GmailIcon from "../public/gmail-icon.svg";

const EmailSection = () => {
  return (
    <main
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 md:py-24 gap-4 relative"
      id="contact"
    >
      <div className="z-10">
        <h5 className="text-4xl font-bold text-white my-2 ">
          Let&apos;s connect! :)
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md mt-8 text-justify">
          As a passionate learner who loves challenges, I am excited for the
          opportunities and lessons that I will go through in life. However
          anything goes, let&apos;s remember that we always will have a place in
          the stars!
        </p>
        <h4 className="pb-3 mt-6">Intrigued? Let&apos;s get in touch!</h4>
        <div className=" flex flex-row gap-4 mt-6">
          <Link href="https://github.com/AidanChang04">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/aidan-chang-232593210/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://www.instagram.com/04___ac/" className="mt-1">
            <Image src={InstagramIcon} alt="Instagram Icon" />
          </Link>
          <Link href="mailto:aidanchang2004@gmail.com" className="mt-1">
            <Image src={GmailIcon} alt="Gmail Icon" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default EmailSection;
