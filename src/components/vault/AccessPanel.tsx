import { motion } from 'framer-motion';
import { modules, type ModuleId } from '../../data/modules';
import clsx from 'clsx';

interface AccessPanelProps {
    activeModule: ModuleId | null;
    onSelect: (id: ModuleId) => void;
}

export function AccessPanel({ activeModule, onSelect }: AccessPanelProps) {
    return (
        <div className="h-full w-full bg-vault-metal border-r border-vault-border flex flex-col p-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-vault-neon shadow-[0_0_10px_#00f3ff]"></div>

            <div className="mb-8">
                <h1 className="text-2xl font-display font-bold text-vault-neon tracking-wider uppercase">
                    Tech Vault
                </h1>
                <div className="text-xs font-mono text-vault-text-dim mt-1">
                    SYSTEM_ID: V-9000
                </div>
            </div>

            <div className="flex-1 space-y-4">
                {modules.map((module) => {
                    const Icon = module.icon;
                    const isActive = activeModule === module.id;

                    return (
                        <button
                            key={module.id}
                            onClick={() => onSelect(module.id)}
                            className={clsx(
                                "w-full group relative flex items-center p-3 transition-all duration-300 border-l-2",
                                isActive
                                    ? "bg-vault-neon/10 border-vault-neon"
                                    : "bg-transparent border-transparent hover:bg-vault-text-dim/5 hover:border-vault-text-dim"
                            )}
                        >
                            <div className={clsx(
                                "mr-3 transition-colors duration-300",
                                isActive ? "text-vault-neon" : "text-vault-text-secondary group-hover:text-vault-text-primary"
                            )}>
                                <Icon size={20} />
                            </div>

                            <div className="text-left font-mono text-sm">
                                <div className={clsx(
                                    "font-bold uppercase tracking-wider",
                                    isActive ? "text-vault-text-primary" : "text-vault-text-secondary"
                                )}>
                                    {module.title}
                                </div>
                                <div className="text-[10px] text-vault-text-dim hidden md:block">
                                    {module.status}
                                </div>
                            </div>

                            {isActive && (
                                <motion.div
                                    layoutId="activeGlow"
                                    className="absolute inset-0 bg-vault-neon/5"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    )
                })}
            </div>

            <div className="mt-auto border-t border-vault-border pt-4">
                <div className="text-[10px] font-mono text-vault-text-dim text-center">
                    SECURE CONNECTION
                    <span className="block text-vault-neon animate-pulse">● ONLINE</span>
                </div>
            </div>
        </div>
    );
}
