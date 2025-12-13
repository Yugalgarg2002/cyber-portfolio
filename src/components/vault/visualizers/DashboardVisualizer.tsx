import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { SkillRadar } from "../dashboard/SkillRadar";
import { ActiveQuests } from "../dashboard/ActiveQuests";
import { VaultTerminal } from "../dashboard/VaultTerminal";

export function DashboardVisualizer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full font-mono">
            {/* Profile Section */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="col-span-1 bg-vault-dark/50 border border-vault-border p-6 flex flex-col items-center text-center relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />

                {/* Holographic Avatar Border */}
                <div className="w-32 h-32 rounded-full border-2 border-dashed border-vault-neon p-1 mb-4 relative group">
                    <div className="w-full h-full rounded-full bg-vault-metal flex items-center justify-center overflow-hidden relative">
                        {/* Replace with actual image if available, using placeholder art for now */}
                        <div className="text-4xl">👨‍💻</div>
                        <div className="absolute inset-0 bg-vault-neon/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Rotating Ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-2 border border-vault-text-dim rounded-full border-t-transparent opacity-50"
                    />
                </div>

                <h2 className="text-xl font-display font-bold text-vault-text-primary uppercase tracking-widest mb-1">
                    Yugal
                </h2>
                <div className="text-xs text-vault-neon mb-6">FULL_STACK_ARCHITECT</div>

                <div className="w-full space-y-3">
                    <SocialLink icon={Github} label="GITHUB" href="#" />
                    <SocialLink icon={Twitter} label="TWITTER" href="#" />
                    <SocialLink icon={Linkedin} label="LINKEDIN" href="#" />
                    <SocialLink icon={Mail} label="CONTACT" href="#" />
                </div>
            </motion.div>

            {/* Stats & Bio Section */}
            <div className="col-span-1 md:col-span-2 flex flex-col gap-6">

                {/* Top Row: Skills & Quests */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-64">
                    <div className="bg-vault-panel border border-vault-border p-4 relative overflow-hidden h-64 md:h-full">
                        <SkillRadar />
                    </div>
                    <div className="bg-vault-panel border border-vault-border p-4 relative overflow-hidden overflow-y-auto h-64 md:h-full">
                        <ActiveQuests />
                    </div>
                </div>

                {/* Bottom Row: Terminal */}
                <VaultTerminal />
            </div>
        </div>
    );
}

function SocialLink({ icon: Icon, label, href }: { icon: any, label: string, href: string }) {
    return (
        <a href={href} className="flex items-center justify-between w-full p-2 border border-vault-border bg-vault-metal/30 hover:bg-vault-neon/10 hover:border-vault-neon transition-all group">
            <span className="text-xs text-vault-text-secondary group-hover:text-vault-neon">{label}</span>
            <Icon size={14} className="text-vault-text-dim group-hover:text-vault-neon" />
        </a>
    )
}
