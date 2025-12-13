import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

export function CacheVisualizer() {
    const [logs, setLogs] = useState<{ id: number; result: "HIT" | "MISS" }[]>(
        []
    );
    const [processing, setProcessing] = useState(false);

    const simulateRequest = () => {
        if (processing) return;
        setProcessing(true);

        const isHit = Math.random() > 0.4; // 60% hit rate
        const newLog = { id: Date.now(), result: isHit ? "HIT" : "MISS" } as const;

        setTimeout(() => {
            setLogs((prev) => [newLog, ...prev].slice(0, 5));
            setProcessing(false);
        }, 1000);
    };

    return (
        <div className="flex flex-col md:flex-row gap-8 items-start h-[300px]">
            {/* Control Panel */}
            <div className="w-full md:w-1/3 space-y-4">
                <button
                    onClick={simulateRequest}
                    disabled={processing}
                    className={clsx(
                        "w-full py-3 px-6 font-bold font-mono uppercase tracking-wider border transition-all duration-300",
                        processing
                            ? "bg-vault-dark border-vault-text-dim text-vault-text-dim cursor-not-allowed"
                            : "bg-vault-neon text-vault-dark border-vault-neon hover:bg-white hover:text-black hover:scale-105"
                    )}
                >
                    {processing ? "SCANNING..." : "FETCH_DATA()"}
                </button>

                <div className="bg-vault-panel border border-vault-border p-4 h-48 overflow-y-auto font-mono text-xs">
                    <div className="text-vault-text-dim mb-2 border-b border-vault-border pb-1">
                        SYSTEM_LOGS
                    </div>
                    <AnimatePresence initial={false}>
                        {logs.map((log) => (
                            <motion.div
                                key={log.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className={clsx(
                                    "mb-1",
                                    log.result === "HIT" ? "text-emerald-400" : "text-vault-alert"
                                )}
                            >
                                [{new Date(log.id).toLocaleTimeString()}] CACHE_{log.result}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Visual Simulation */}
            <div className="flex-1 h-full bg-vault-dark border border-vault-border relative rounded-lg overflow-hidden p-8 flex items-center justify-center">
                {/* Cache Box */}
                <div className="w-32 h-32 border-2 border-dashed border-vault-border flex items-center justify-center relative">
                    <div className="text-vault-text-dim font-mono text-xs absolute -top-6 left-0">
                        L1_CACHE
                    </div>
                    <div className="w-24 h-24 bg-vault-metal/50 flex items-center justify-center">
                        <div className="text-4xl">💾</div>
                    </div>
                </div>

                {/* Request Animation */}
                {processing && (
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 150, opacity: 0 }}
                        className="absolute z-10 w-8 h-8 bg-vault-neon rounded-full shadow-[0_0_15px_#00f3ff]"
                    />
                )}
            </div>
        </div>
    );
}
