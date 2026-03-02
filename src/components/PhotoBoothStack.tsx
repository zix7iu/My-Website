"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const PHOTOS = [
  { src: "/interest_pic_1.jpg", caption: "Night in Taipei..." },
  { src: "/interest_pic_2.jpg", caption: "In Disneyland" },
  { src: "/interest_pic_3.jpg", caption: "With my pet friend" },
  { src: "/interest_pic_4.jpg", caption: "Always exploring, always learning." },
] as const;

const ROTATIONS = [-2.5, 1.8, -1.2, 2.2];

export function PhotoBoothStack() {
  const t = useTranslations("interests");
  const [order, setOrder] = useState([0, 1, 2, 3]);

  const cycleTopToBack = () => {
    setOrder((prev) => (prev.length > 0 ? [...prev.slice(1), prev[0]] : prev));
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="relative flex min-h-[600px] w-[420px] cursor-pointer items-center justify-center"
        onClick={cycleTopToBack}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            cycleTopToBack();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label="Cycle to next photo"
      >
        {order.map((photoIndex, stackPosition) => {
          const isTop = stackPosition === 0;
          const photo = PHOTOS[photoIndex];
          const rotation = ROTATIONS[photoIndex];
          const z = order.length - stackPosition;

          return (
            <motion.div
              key={photoIndex}
                className="absolute left-1/2 top-1/2"
                style={{
                  zIndex: z,
                  rotate: rotation,
                  x: "-50%",
                  y: "-50%",
                }}
                initial={false}
                layout
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <motion.div
                  className="flex flex-col items-center"
                  whileTap={isTop ? { scale: 0.98 } : undefined}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <PolaroidFrame src={photo.src} caption={photo.caption} />
                </motion.div>
              </motion.div>
            );
        })}
      </div>
      <p className="text-sm text-slate-500">{t("photoBoothHint")}</p>
    </div>
  );
}

function PolaroidFrame({
  src,
  caption,
}: { src: string; caption: string }) {
  return (
    <div className="flex w-96 flex-shrink-0 flex-col rounded-sm bg-white px-5 pt-5 pb-12 shadow-[0_4px_20px_rgba(0,0,0,0.1),0_0_30px_rgba(255,193,243,0.2),0_0_20px_rgba(136,223,250,0.15)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-slate-100">
        <Image
          src={src}
          alt=""
          fill
          className="object-cover select-none"
          sizes="384px"
          draggable={false}
        />
      </div>
      <p className="mt-4 font-handwriting text-center text-lg font-medium text-slate-600">
        {caption}
      </p>
    </div>
  );
}
