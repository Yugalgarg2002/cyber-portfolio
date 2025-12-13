import { motion } from "framer-motion";
import clsx from "clsx";

interface TechItem {
    label: string;
    status: "optimal" | "stable" | "experimental";
    value: number; // 0-100
}

interface TechGridProps {
    items: TechItem[];
}

export function TechGrid({ items }: TechGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, index) => (
                <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-vault-panel border border-vault-border p-4 relative overflow-hidden group hover:border-vault-neon/50 transition-colors"
                >
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-mono font-bold text-vault-text-primary">
                            {item.label}
                        </span>
                        <span
                            className={clsx(
                                "text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm",
                                item.status === "optimal" && "bg-emerald-500/10 text-emerald-400",
                                item.status === "stable" && "bg-blue-500/10 text-blue-400",
                                item.status === "experimental" &&
                                "bg-vault-amber/10 text-vault-amber"
                            )}
                        >
                            {item.status}
                        </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1 w-full bg-vault-dark mt-2 overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.value}%` }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                            className={clsx(
                                "h-full",
                                item.status === "optimal" && "bg-emerald-400",
                                item.status === "stable" && "bg-blue-400",
                                item.status === "experimental" && "bg-vault-amber"
                            )}
                        />
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-vault-neon/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.div>
            ))}
        </div>
    );
}
