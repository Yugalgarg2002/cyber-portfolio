import { motion } from "framer-motion";

export function MCPVisualizer() {
    const nodes = [
        { id: "client", x: 100, y: 150, label: "Client Host" },
        { id: "mcp-server", x: 300, y: 150, label: "MCP Server" },
        { id: "llm", x: 500, y: 80, label: "LLM Model" },
        { id: "db", x: 500, y: 220, label: "Database" },
    ];

    return (
        <div className="w-full h-[400px] relative bg-vault-dark/50 border border-vault-border rounded-lg overflow-hidden">
            <div className="absolute top-4 left-4 text-xs font-mono text-vault-text-dim">
                PROTOCOL_VISUALIZATION // MCP_GRAPH
            </div>

            {/* Connection Lines (Simplified SVG Overlay) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-vault-neon/30 stroke-[2px]">
                <line x1="132" y1="150" x2="268" y2="150" />
                <line x1="332" y1="150" x2="468" y2="80" />
                <line x1="332" y1="150" x2="468" y2="220" />
            </svg>

            {/* Nodes */}
            {nodes.map((node, i) => (
                <motion.div
                    key={node.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        type: "spring",
                        delay: i * 0.2,
                        damping: 12,
                        stiffness: 100,
                    }}
                    className="absolute w-32 h-16 -ml-16 -mt-8 flex items-center justify-center bg-vault-metal border border-vault-neon rounded shadow-[0_0_15px_rgba(0,243,255,0.2)] z-10"
                    style={{ left: node.x, top: node.y }}
                >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-vault-dark px-2 text-[8px] text-vault-text-dim border border-vault-border">
                        NODE_{i}
                    </div>
                    <span className="font-mono text-sm font-bold text-vault-text-primary">
                        {node.label}
                    </span>
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-vault-neon animate-pulse" />
                </motion.div>
            ))}

            {/* Data Packets */}
            <motion.div
                animate={{
                    x: [132, 268, 132],
                    opacity: [0, 1, 0],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute w-2 h-2 bg-vault-text-primary rounded-full top-[146px] left-0 shadow-[0_0_8px_white]"
            />
            <motion.div
                animate={{
                    x: [332, 468],
                    y: [150, 80],
                    opacity: [0, 1, 0],
                }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5, ease: "linear" }}
                className="absolute w-2 h-2 bg-vault-amber rounded-full shadow-[0_0_8px_orange]"
            />
        </div>
    );
}
