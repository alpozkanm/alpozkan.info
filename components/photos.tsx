import Image from "next/image";
import clsx from "clsx";

import image2 from "~/public/images/Alp_Ozkan_About_2.jpeg";
import image3 from "~/public/images/Alp-Ozkan-Profile-Photo.png";
import image1 from "~/public/images/Alp_Ozkan_About_3.jpg";

export default function Photos() {
  const rotations = ["rotate-2", "-rotate-2", "rotate-2"];
  const alt = [
    "Alp Ozkan website photo - about page",
    "Alp Ozkan website photo - about page",
    "Alp Ozkan website photo - about page",
  ];

  return (
    <div className="-my-4 flex max-w-5xl justify-center gap-5 overflow-hidden py-4 sm:gap-8">
      {[image1, image2, image3].map((image, imageIndex) => (
        <div
          key={image.src}
          className={clsx(
            "relative flex aspect-[9/10] w-44 overflow-hidden rounded-xl bg-zinc-800 sm:w-72 sm:rounded-2xl",
            rotations[imageIndex % rotations.length]
          )}
        >
          <Image
            src={image}
            alt={alt[imageIndex]}
            sizes="(min-width: 640px) 18rem, 11rem"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
