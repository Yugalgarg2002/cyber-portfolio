import { motion } from "framer-motion";
import { useState } from "react";

export function FrontendVisualizer() {
    const [activeTab, setActiveTab] = useState("buttons");

    return (
        <div className="border border-vault-border bg-vault-dark/50 p-6 rounded-lg font-mono">
            <div className="flex gap-4 mb-8 border-b border-vault-border pb-2">
                {["buttons", "inputs", "alerts"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`uppercase text-sm tracking-wider hover:text-vault-neon transition-colors ${activeTab === tab ? "text-vault-neon border-b-2 border-vault-neon -mb-2.5 pb-2" : "text-vault-text-dim"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="min-h-[200px] flex items-center justify-center">
                {activeTab === "buttons" && (
                    <div className="flex flex-wrap gap-4 justify-center items-center">
                        <button className="bg-vault-neon text-vault-dark px-6 py-2 font-bold hover:bg-white transition-colors skew-x-[-10deg]">
                            <span className="skew-x-[10deg] block">PRIMARY_ACTION</span>
                        </button>
                        <button className="border border-vault-neon text-vault-neon px-6 py-2 font-bold hover:bg-vault-neon/10 transition-colors">
                            SECONDARY
                        </button>
                        <button className="bg-vault-alert text-white px-6 py-2 font-bold hover:bg-red-500 transition-colors uppercase tracking-widest text-xs">
                            Danger
                        </button>
                    </div>
                )}

                {activeTab === "inputs" && (
                    <div className="space-y-4 w-full max-w-sm">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="ENTER_COMMAND..."
                                className="w-full bg-vault-metal border-b border-vault-text-dim p-2 focus:outline-none focus:border-vault-neon text-vault-text-primary placeholder:text-vault-text-dim/50 transition-colors"
                                readOnly
                            />
                            <div className="absolute top-0 right-0 text-[10px] text-vault-neon opacity-0 group-hover:opacity-100 transition-opacity">
                                AWAITING_INPUT
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "alerts" && (
                    <div className="space-y-4 w-full">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="border-l-4 border-vault-neon bg-vault-neon/5 p-4 text-sm"
                        >
                            <div className="font-bold text-vault-neon mb-1">SYSTEM_UPDATE</div>
                            <div className="text-vault-text-secondary">Patch v2.0.4 installed successfully.</div>
                        </motion.div>

                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="border-l-4 border-vault-alert bg-vault-alert/5 p-4 text-sm"
                        >
                            <div className="font-bold text-vault-alert mb-1">CRITICAL_WARNING</div>
                            <div className="text-vault-text-secondary">Unauthorized access attempt detected in Sector 7.</div>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
}
