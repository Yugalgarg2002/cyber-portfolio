import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
    id: number;
    x: number;
    y: number;
}

export function MessagingVisualizer() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const id = Date.now();
            setParticles((prev) => [...prev, { id, x: 0, y: 0 }].slice(-10)); // Keep max 10
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-[300px] bg-vault-dark border border-vault-border rounded relative overflow-hidden flex items-center justify-between px-16">

            {/* Publisher Node */}
            <div className="relative z-10 w-24 h-24 border-2 border-vault-neon bg-vault-metal/80 flex flex-col items-center justify-center rounded-full shadow-[0_0_20px_rgba(0,243,255,0.3)]">
                <div className="text-xs font-mono text-vault-neon font-bold">PUB</div>
                <div className="w-2 h-2 bg-vault-neon rounded-full mt-2 animate-ping" />
            </div>

            {/* Subscriber Node */}
            <div className="relative z-10 w-24 h-24 border-2 border-vault-amber bg-vault-metal/80 flex flex-col items-center justify-center rounded-full shadow-[0_0_20px_rgba(255,170,0,0.3)]">
                <div className="text-xs font-mono text-vault-amber font-bold">SUB</div>
                <div className="w-2 h-2 bg-vault-amber rounded-full mt-2 animate-pulse" />
            </div>

            {/* Stream Pipe */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-vault-border -translate-y-1/2" />

            {/* Particles */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute top-1/2 w-4 h-4 -mt-2 bg-white rounded-full shadow-[0_0_10px_white] z-20"
                    initial={{ left: "15%", opacity: 0, scale: 0.5 }}
                    animate={{
                        left: "85%",
                        opacity: [0, 1, 1, 0],
                        scale: [0.5, 1, 1, 0.5]
                    }}
                    transition={{ duration: 2, ease: "linear" }}
                />
            ))}

            <div className="absolute bottom-4 left-0 w-full text-center text-[10px] font-mono text-vault-text-dim">
                STREAM_LATENCY: 12ms // PACKET_LOSS: 0.0%
            </div>
        </div>
    );
}
