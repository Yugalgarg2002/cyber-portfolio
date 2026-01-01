import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

const AVAILABLE_COMMANDS = ["help", "clear", "status", "contact", "whoami", "ls", "skills", "quests", "date"];

export function VaultTerminal() {
    const [input, setInput] = useState("");
    const [outputHistory, setOutputHistory] = useState<string[]>([
        "Welcome to Vault Terminal v9.0.4",
        "Type 'help' for available commands.",
    ]);
    const [cmdHistory, setCmdHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [outputHistory]);

    const executeCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        const newOutput = [...outputHistory, `> ${cmd}`];

        switch (trimmedCmd) {
            case "help":
                newOutput.push(
                    "Available commands:",
                    "  help     - Show this message",
                    "  clear    - Clear terminal (Ctrl+L)",
                    "  status   - System status check",
                    "  contact  - Show contact info",
                    "  whoami   - Operator identity",
                    "  ls       - List active modules",
                    "  skills   - Display technical capabilities",
                    "  quests   - List active objectives",
                    "  date     - Current timestamp"
                );
                break;
            case "clear":
                setOutputHistory([]);
                return;
            case "status":
                newOutput.push(
                    "SYSTEM STATUS: ONLINE", 
                    "CORE TEMP: 32°C", 
                    "SECURITY: ENCRYPTED",
                    "UPTIME: 99.99%"
                );
                break;
            case "contact":
                newOutput.push(
                    "EMAIL: yugalgarg7@gmail.com", 
                    "GITHUB: github.com/Yugalgarg2002",
                    "LINKEDIN: linkedin.com/in/yugalgarg2002"
                );
                break;
            case "whoami":
                newOutput.push("OPERATOR: YUGAL [FULL_STACK_ARCHITECT]", "ACCESS LEVEL: ADMIN_01");
                break;
            case "ls":
                newOutput.push(
                    "MODULES:",
                    "  [DIR] dashboard  - Command Center",
                    "  [DIR] mcp        - Model Context Protocol",
                    "  [DIR] frontend   - Visual Systems",
                    "  [DIR] messaging  - Neural Link",
                    "  [DIR] cache      - Memory Bank"
                );
                break;
            case "skills":
                newOutput.push(
                    "CAPABILITIES:",
                    "  * Frontend Development (React, TS, Tailwind)",
                    "  * Backend Systems (Node.js, Python, Go)",
                    "  * DevOps & Cloud (Docker, K8s, AWS)",
                    "  * System Architecture",
                    "  * UI/UX Design"
                );
                break;
            case "quests":
                newOutput.push(
                    "ACTIVE OBJECTIVES:",
                    "  [!] MCP Integration Review",
                    "  [!] Performance Optimization (Cache)",
                    "  [!] Neural Interface Upgrade"
                );
                break;
            case "date":
                newOutput.push(new Date().toString());
                break;
            case "":
                break;
            default:
                newOutput.push(`ERROR: Command not found: '${trimmedCmd}'. Type 'help'.`);
        }

        setOutputHistory(newOutput);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && e.key === "l") {
            e.preventDefault();
            setOutputHistory([]);
            return;
        }

        if (e.key === "Enter") {
            if (!input.trim()) return;
            
            // Add to command history
            const newCmdHistory = [input, ...cmdHistory];
            setCmdHistory(newCmdHistory);
            setHistoryIndex(-1);
            
            executeCommand(input);
            setInput("");
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (cmdHistory.length > 0) {
                const nextIndex = Math.min(historyIndex + 1, cmdHistory.length - 1);
                setHistoryIndex(nextIndex);
                setInput(cmdHistory[nextIndex]);
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex > 0) {
                const prevIndex = historyIndex - 1;
                setHistoryIndex(prevIndex);
                setInput(cmdHistory[prevIndex]);
            }
        } else if (e.key === "Tab") {
            e.preventDefault();
            const trimmedInput = input.trim().toLowerCase();
            if (trimmedInput) {
                const matches = AVAILABLE_COMMANDS.filter(c => c.startsWith(trimmedInput));
                if (matches.length === 1) {
                    setInput(matches[0]);
                } else if (matches.length > 1) {
                    // Show suggestions? For now just autocomplete if possible
                    // Could print suggestions to history if we want to be fancy
                }
            }
        }
    };

    return (
        <div 
            className="bg-vault-dark border border-vault-border p-4 h-48 font-mono text-xs flex flex-col font-mono rounded mt-6 relative overflow-hidden group"
            onClick={() => inputRef.current?.focus()}
        >
            {/* Scanline effect */}
            <div className="absolute inset-0 bg-scanline opacity-5 pointer-events-none" />
            
            <div className="flex-1 overflow-y-auto space-y-1 mb-2 scrollbar-thin scrollbar-thumb-vault-border scrollbar-track-transparent pr-2">
                {outputHistory.map((line, i) => (
                    <div key={i} className={clsx(
                        "break-words font-medium",
                        line.startsWith(">") ? "text-vault-text-dim" : "text-vault-neon shadow-neon-sm"
                    )}>
                        {line}
                    </div>
                ))}
                <div ref={bottomRef} />
            </div>
            <div className="flex items-center gap-2 border-t border-vault-border pt-2 relative z-10">
                <span className="text-vault-neon font-bold animate-pulse">$</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="bg-transparent border-none outline-none text-vault-text-primary flex-1 placeholder:text-vault-text-dim/30 font-bold"
                    placeholder="AWAITING_INPUT..."
                    autoComplete="off"
                    spellCheck="false"
                />
            </div>
        </div>
    );
}
