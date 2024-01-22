import { useState, useEffect } from "react";
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

export default function Avatar({ data: user, className = "" }: AvatarProps) {
    const [siglas, setSiglas] = useState<string | null>(null);

    useEffect(() => {
        const nameWords = user.name && user.name.split(" ");

        if (nameWords && nameWords.length > 1) {
            const firstName = nameWords[0].charAt(0);
            const lastName = nameWords[nameWords.length - 1].charAt(0);
            setSiglas(`${firstName}${lastName}`);
        } else if (nameWords && nameWords.length === 1) {
            setSiglas(nameWords[0].charAt(0));
        } else {
            setSiglas(null);
        }
    }, [user.name]);

    return (
        <div
            className={twMerge(`
                w-12 h-12 rounded-full select-none cursor-pointer flex items-center justify-center 
                border border-zinc-200 dark:border-webschool-300 overflow-hidden
                bg-white dark:bg-webschool-200 transition-colors duration-150
            `, className)}
        >
            {user.avatar_url ? (
                <img src={user.avatar_url} alt="" />
            ) : (
                siglas && (
                    <span className="font-medium text-zinc-600 uppercase">
                        {siglas}
                    </span>
                )
            )}
        </div>
    );
}

