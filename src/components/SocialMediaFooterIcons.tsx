import Image from "next/image";
import FacebookFooterIcon from "public/Footer_Social_Media_Icons/facebook.svg";





export default function SocialMediaFooterIcons() {
  return (
    <div className="flex h-6">
      {SocialMediaIcons.map((icon, index) => (
        <Image
          src={FacebookFooterIcon}
          width={20}
          height={20}
          alt="image"
          className="fill-orange-600"
          key={index}
        />
      ))}
    </div>
    
  );
}

const SocialMediaIcons = [
  "/Footer_Social_Media_Icons/icons8-instagram.svg",
  "/Footer_Social_Media_Icons/icons8-facebook.svg",
  "/Footer_Social_Media_Icons/icons8-pinterest.svg",
  "/Footer_Social_Media_Icons/icons8-tiktok.svg",
  "/Footer_Social_Media_Icons/facebook.svg",
];
