import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

export function VaultTerminal() {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>([
        "Welcome to Vault Terminal v9.0.4",
        "Type 'help' for available commands.",
    ]);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const handleCommand = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            const cmd = input.trim().toLowerCase();
            const newHistory = [...history, `> ${input}`];

            switch (cmd) {
                case "help":
                    newHistory.push(
                        "Available commands:",
                        "  help    - Show this message",
                        "  clear   - Clear terminal",
                        "  status  - System status check",
                        "  contact - Show contact info"
                    );
                    break;
                case "clear":
                    setHistory([]);
                    setInput("");
                    return;
                case "status":
                    newHistory.push("SYSTEM STATUS: ONLINE", "CORE TEMP: 32°C", "SECURITY: ENCRYPTED");
                    break;
                case "contact":
                    newHistory.push("EMAIL: yugal@example.com", "GITHUB: github.com/yugalgarg2002");
                    break;
                case "":
                    break;
                default:
                    newHistory.push(`Unknown command: '${cmd}'`);
            }

            setHistory(newHistory);
            setInput("");
        }
    };

    return (
        <div className="bg-vault-dark border border-vault-border p-4 h-48 font-mono text-xs flex flex-col font-mono rounded mt-6">
            <div className="flex-1 overflow-y-auto space-y-1 mb-2">
                {history.map((line, i) => (
                    <div key={i} className={clsx(
                        "break-words",
                        line.startsWith(">") ? "text-vault-text-dim" : "text-vault-neon"
                    )}>
                        {line}
                    </div>
                ))}
                <div ref={bottomRef} />
            </div>
            <div className="flex items-center gap-2 border-t border-vault-border pt-2">
                <span className="text-vault-neon">$</span>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleCommand}
                    className="bg-transparent border-none outline-none text-vault-text-primary flex-1 placeholder:text-vault-text-dim/30"
                    placeholder="ENTER_COMMAND..."
                />
            </div>
        </div>
    );
}
