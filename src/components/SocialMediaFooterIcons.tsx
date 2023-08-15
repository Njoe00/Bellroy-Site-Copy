import React, { useState } from "react";
import SocialMediaFooterIcon from "./SocialMediaFooterIcon";

import {
  faFacebookF,
  faSquareInstagram,
  faYoutube,
  faLinkedin,
  faPinterest,
  faTiktok,
  faWeixin,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialMediaFooterIcons() {
  return (
    <div className="flex h-6 space-x-4 items-center">
      {SocialMediaIcons.map((icon, index) => (
        <SocialMediaFooterIcon icon={icon} key={index} />
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
