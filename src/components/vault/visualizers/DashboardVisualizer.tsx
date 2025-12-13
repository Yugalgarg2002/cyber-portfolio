import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

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
                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatCard label="EXP_YEARS" value="03" delay={0.1} />
                    <StatCard label="PROJECTS" value="24" delay={0.2} />
                    <StatCard label="CONTRIBS" value="150+" delay={0.3} />
                    <StatCard label="UPTIME" value="99.9%" delay={0.4} />
                </div>

                {/* Bio / Log */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex-1 bg-vault-panel border border-vault-border p-6 relative"
                >
                    <div className="text-xs text-vault-text-dim mb-4 flex justify-between">
                        <span>// BIO_LOG_ENTRY_001</span>
                        <span>STATUS: ENCRYPTED</span>
                    </div>
                    <p className="text-vault-text-secondary leading-relaxed text-sm">
                        Passionate developer specializing in building agentic AI workflows and futuristic interfaces.
                        Currently architecting high-performance web applications using the latest protocols (MCP).
                        Obsessed with clean code, modular architecture, and cyber-aesthetic design systems.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                        <Tag>React</Tag>
                        <Tag>Node.js</Tag>
                        <Tag>TypeScript</Tag>
                        <Tag>Vite</Tag>
                        <Tag>Tailwind</Tag>
                    </div>
                </motion.div>
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

function StatCard({ label, value, delay }: { label: string, value: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay }}
            className="bg-vault-dark border border-vault-border p-4 flex flex-col items-center justify-center hover:border-vault-neon/50 transition-colors"
        >
            <div className="text-2xl font-display font-bold text-vault-text-primary mb-1">{value}</div>
            <div className="text-[10px] text-vault-text-dim uppercase">{label}</div>
        </motion.div>
    )
}

function Tag({ children }: { children: React.ReactNode }) {
    return (
        <span className="px-2 py-1 text-[10px] border border-vault-neon/30 text-vault-neon bg-vault-neon/5 rounded-sm">
            {children}
        </span>
    )
}
