export default function Notification() {
    return (
        <div className="w-[calc(100vw-30px)] max-w-[448px] rounded-md bg-zinc-200 dark:bg-webschool-200 shadow-md overflow-hidden">
            <header className="px-6 py-4 flex gap-3">
                <span className="font-bold mr-auto">
                    Notificações
                </span>
                <button type="button" className="text-sm font-medium text-blue-600 hover:text-webschool-first transition">
                    Marcar todas como lidas
                </button>
            </header>
            <div className="bg-zinc-300/30 dark:bg-webschool-200 space-y-[1px] lg:h-auto h-[264px] overflow-auto max-h-[calc(100vh-220px)]">
                <h4 className="text-zinc-400 dark:text-webschool-100 dark:bg-webschool-300 font-medium text-sm px-6 py-3">Antigas</h4>
                <a href="#" className="flex items-center px-6 py-4 transition bg-zinc-200 hover:bg-zinc-200/80 dark:bg-webschool-200 hover:dark:bg-webschool-300/40">
                    {/* Notification content */}
                </a>
                <a href="#" className="flex items-center px-6 py-4 transition bg-zinc-200 hover:bg-zinc-200/80 dark:bg-webschool-200 hover:dark:bg-webschool-300/40">
                    {/* Notification content */}
                </a>
            </div>
            <a href="/notifications" className="flex items-center justify-center w-full h-12 text-xs font-bold bg-zinc-300 dark:bg-webschool-300 border-t border-zinc-200 dark:border-webschool-300 hover:bg-zinc-300/50 dark:hover:bg-webschool-400/50 transition">
                Ver todas
            </a>
        </div>
    )
}