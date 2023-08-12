import react from "react";

export default function SiteMapFooterTextContent({
  content,
}: {
  content: string[];
}) {
  return (
    <div>
      {content.map((section, index) => (
        <li className="text-xs flex pt-2 w-56 h-6 hover:text-orange-400 cursor-pointer">
          {section}
        </li>
      ))}
    </div>
  );
}
