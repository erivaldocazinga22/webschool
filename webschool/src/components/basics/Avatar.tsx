import { useState, useEffect } from "react";
import { LuUser2 } from "react-icons/lu";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

const AvatarSchema = z.object({
    data: z.object({
        avatar_url: z.string().nullish(),
        name: z.string().nullish(),
    }),
    className: z.string().optional(),
});

type AvatarProps = z.infer<typeof AvatarSchema>;

export default function Avatar({ data, className = "" }: AvatarProps) {
    const { avatar_url, name } = data;
    const [siglas, setSiglas] = useState<string | null>(null);

    useEffect(() => {
        if (!name) {
            setSiglas(null);
            return;
        }

        const nameWords = name.split(" ");
        const firstName = nameWords[0].charAt(0);
        const lastName = nameWords[nameWords.length - 1].charAt(0);
        setSiglas(`${firstName}${lastName}`);
    }, [name]);

    return (
        <div
            className={twMerge(`
                w-12 h-12 min-w-10 min-h-10 rounded-full select-none cursor-pointer flex items-center justify-center 
                border border-zinc-200 dark:border-webschool-300 overflow-hidden
                bg-white dark:bg-webschool-200 transition-colors duration-150
            `, className)}
        >
            
            {/* <AvatarImage src={`${avatar_url}`} />
            <AvatarFallback>{siglas}</AvatarFallback> */}
            {avatar_url ? (
                <img src={avatar_url} alt="" />
            ) : (
                siglas ? (
                    <span className="font-medium text-zinc-600 uppercase">
                        {siglas}
                    </span>
                ) : (
                    <LuUser2 size={24} strokeWidth={1.5} />
                )
            )}
        </div>
    );
}

