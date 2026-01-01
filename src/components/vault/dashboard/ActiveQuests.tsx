import { motion } from "framer-motion";

const quests = [
    { id: 1, title: "Master Next.js 15", progress: 100, status: "IN_PROGRESS" },
    { id: 2, title: "AWS Solutions Architect", progress: 20, status: "STARTED" },
    { id: 3, title: "Advanced Agentic AI", progress: 45, status: "ANALYZING" },
    { id: 4, title: "WebFlux Reactive Programming", progress: 0, status: "TO-DO"}
];

export function ActiveQuests() {
    return (
        <div className="space-y-4 font-mono">
            <div className="text-xs text-vault-text-dim border-b border-vault-border pb-1 mb-2 flex justify-between items-center">
                <span>ACTIVE_QUESTS</span>
                <span className="text-vault-neon animate-pulse">● SYNCING</span>
            </div>

            {quests.map((quest) => (
                <div key={quest.id} className="group">
                    <div className="flex justify-between text-xs mb-1">
                        <span className="text-vault-text-primary group-hover:text-vault-neon transition-colors">
                            {quest.title}
                        </span>
                        <span className="text-vault-text-dim">
                            {quest.progress}% // {quest.status}
                        </span>
                    </div>
                    <div className="h-1.5 w-full bg-vault-dark border border-vault-border/50 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${quest.progress}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-vault-neon/80 group-hover:bg-vault-neon transition-colors"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
