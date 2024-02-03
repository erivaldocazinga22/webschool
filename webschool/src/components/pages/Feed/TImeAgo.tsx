import { useTimeAgo } from "@/hooks/useTimeAgo"

export default function TimeAgo({ created_at }:{ created_at: Date | null | undefined }) {
    
    const data = useTimeAgo(created_at);
    
    return (
        <span>{data}</span>
    )
}