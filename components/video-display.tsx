
"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";

interface VideoDisplayProps {
    filepath: string;
    className?: string;
}

export function VideoDisplay({ filepath, className }: VideoDisplayProps) {
    return (
        <AnimatePresence mode="sync">
            <motion.video
                key={filepath}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                autoPlay
                muted
                playsInline
                loop
                className={cn(
                    // "absolute top-0 z-0 h-full w-full origin-top-left scale-[1.2] object-cover md:origin-top-right"
                    className,
                )}
            // poster={`${filepath}.png`}
            >
                <source src={`${filepath}.mp4`} type="video/mp4" />
                {/* <source
          src={`${filepath}.av1.mp4`}
          type="video/mp4; codecs=av01.0.05M.08,opus"
        />
        <source src={`${filepath}.hevc.mp4`} type="video/mp4; codecs=hvc1" />
        <source
          src={`${filepath}.h264.mp4`}
          type="video/mp4; codecs=avc1.4D401E,mp4a.40.2"
        /> */}
            </motion.video>
        </AnimatePresence>
    );
}
