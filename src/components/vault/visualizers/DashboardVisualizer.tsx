import { motion } from "framer-motion";
import { Mail, type LucideIcon } from "lucide-react";
import { siGithub } from 'simple-icons/icons';
import SimpleIcon from "../../SimpleIcon";
import { SkillRadar } from "../dashboard/SkillRadar";
import { ActiveQuests } from "../dashboard/ActiveQuests";
import { VaultTerminal } from "../dashboard/VaultTerminal";

// Define the shape of the SimpleIcon object from simple-icons
interface SimpleIconData {
    title: string;
    slug: string;
    svg: string;
    path: string;
    hex: string;
}

// Manually define LinkedIn icon as it was removed from simple-icons package
const siLinkedin: SimpleIconData = {
    title: "LinkedIn",
    slug: "linkedin",
    hex: "0A66C2",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    svg: ""
};

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
                    Yugal Garg
                </h2>
                <div className="text-xs text-vault-neon mb-6">FULL STACK ARCHITECT</div>

                <div className="w-full space-y-3">
                    <SocialLink simpleIcon={siGithub} label="GITHUB" href="https://github.com/Yugalgarg2002" />
                    <SocialLink simpleIcon={siLinkedin} label="LINKEDIN" href="https://www.linkedin.com/in/yugalgarg2002/" />
                    <SocialLink icon={Mail} label="CONTACT" href="mailto:yugalgarg7@gmail.com" />
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

function SocialLink({ 
    icon: Icon, 
    simpleIcon, 
    label, 
    href 
}: { 
    icon?: LucideIcon, 
    simpleIcon?: SimpleIconData, 
    label: string, 
    href: string 
}) {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-between w-full p-2 border border-vault-border bg-vault-metal/30 hover:bg-vault-neon/10 hover:border-vault-neon transition-all group relative z-10"
        >
            <span className="text-xs text-vault-text-secondary group-hover:text-vault-neon">{label}</span>
            {simpleIcon ? (
                <SimpleIcon icon={simpleIcon} size={14} className="text-vault-text-dim group-hover:text-vault-neon fill-current" />
            ) : Icon ? (
                <Icon size={14} className="text-vault-text-dim group-hover:text-vault-neon" />
            ) : null}
        </a>
    )
}
