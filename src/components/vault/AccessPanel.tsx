import { motion } from 'framer-motion';
import { modules, type ModuleId } from '../../data/modules';
import clsx from 'clsx';

interface AccessPanelProps {
    activeModule: ModuleId | null;
    onSelect: (id: ModuleId) => void;
}

export function AccessPanel({ activeModule, onSelect }: AccessPanelProps) {
    return (
        <div className="h-full w-full bg-vault-metal flex md:flex-col items-center md:items-stretch overflow-hidden">
            {/* Top Border Glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-vault-neon shadow-[0_0_10px_#00f3ff] hidden md:block"></div>

            {/* Header (Desktop Only) */}
            <div className="hidden md:block p-4 mb-4">
                <h1 className="text-2xl font-display font-bold text-vault-neon tracking-wider uppercase">
                    Tech Vault
                </h1>
                <div className="text-xs font-mono text-vault-text-dim mt-1">
                    SYSTEM_ID: V-9000
                </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex-1 flex flex-row md:flex-col justify-around md:justify-start md:space-y-2 p-1 md:p-4 w-full">
                {modules.map((module) => {
                    const Icon = module.icon;
                    const isActive = activeModule === module.id;

                    return (
                            <button
                                onClick={() => onSelect(module.id)}
                                className={clsx(
                                    "w-full flex items-center gap-3 px-4 py-3 text-sm font-mono uppercase tracking-wider transition-all duration-200 border-l-2 md:border-l-0 md:border-b-2",
                                    isActive 
                                        ? "bg-vault-neon/10 border-vault-neon text-vault-neon shadow-[inset_0_0_10px_rgba(0,243,255,0.1)]" 
                                        : "border-transparent text-vault-text-secondary hover:text-vault-neon hover:bg-vault-neon/5 md:hover:border-vault-neon/50"
                                )}
                            >
                            <div className={clsx(
                                "mb-1 md:mb-0 md:mr-3 transition-transform duration-300",
                                isActive ? "scale-110 md:scale-100" : ""
                            )}>
                                <Icon size={20} className="md:w-6 md:h-6" />
                            </div>

                            <div className="text-center md:text-left font-mono text-[10px] md:text-sm">
                                <div className={clsx(
                                    "font-bold uppercase tracking-wider",
                                    isActive ? "text-vault-text-primary" : "text-vault-text-secondary"
                                )}>
                                    {module.title}
                                </div>
                                <div className="text-[9px] text-vault-text-dim hidden md:block">
                                    {module.status}
                                </div>
                            </div>

                            {isActive && (
                                <motion.div
                                    layoutId="activeGlow"
                                    className="absolute inset-0 bg-vault-neon/5 rounded-lg md:rounded-none"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    )
                })}
            </div>

            {/* Footer (Desktop Only) */}
            <div className="hidden md:block mt-auto border-t border-vault-border p-4">
                <div className="text-[10px] font-mono text-vault-text-dim text-center">
                    SECURE CONNECTION
                    <span className="block text-vault-neon animate-pulse">● ONLINE</span>
                </div>
            </div>
        </div>
    );
}
