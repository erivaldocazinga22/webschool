import { useEffect, useState } from "react";


export const useAvatarSiglas = (name: string | null | undefined) => {
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

  return siglas;
};