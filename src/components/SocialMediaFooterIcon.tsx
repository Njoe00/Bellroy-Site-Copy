import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export default function SocialMediaFooterIcon({
  icon,
}: {
  icon: IconDefinition;
}) {
  const [changeColourOnHover, SetchangeColourOnHover] = useState(false);

  return (
    <FontAwesomeIcon
      className="cursor-pointer"
      icon={icon}
      width={20}
      height={20}
      style={{ color: changeColourOnHover ? "#FF5A0B" : "#9a9a9a" }}
      onMouseOver={() => SetchangeColourOnHover(true)}
      onMouseOut={() => SetchangeColourOnHover(false)}
      size="xl"
    />
  );
}
