import React, { useState } from "react";
import SocialMediaFooterIcon from "./SocialMediaFooterIcon";

import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faWeixin } from "@fortawesome/free-brands-svg-icons";

export default function SocialMediaFooterIcons() {
  return (
    <div className="flex h-6 space-x-4 items-center">
      {SocialMediaIcons.map((icon, index) => (
        <div className=" text-current hover:stroke-orange-600 " key={index}>
          <SocialMediaFooterIcon icon={icon} />
        </div>
      ))}
    </div>
  );
}

const SocialMediaIcons = [
  faSquareInstagram,
  faFacebookF,
  faYoutube,
  faLinkedin,
  faPinterest,
  faTiktok,
  faWeixin,
];
