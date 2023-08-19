import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export default function SocialMediaFooterIcon({
  icon,
}: {
  icon: IconDefinition;
}) {
  const [isHovered, SetisHovered] = useState(false);

  return (
    <FontAwesomeIcon
      className="cursor-pointer"
      icon={icon}
      width={20}
      height={20}
      style={{ color: isHovered ? "#FF5A0B" : "#9a9a9a" }}
      onMouseOver={() => SetisHovered(true)}
      onMouseOut={() => SetisHovered(false)}
      size="xl"
    />
  );
}
