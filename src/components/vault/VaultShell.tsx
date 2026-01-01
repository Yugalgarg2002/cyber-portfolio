import { useState, useRef } from 'react';
import { AccessPanel } from './AccessPanel';
import { HolographicDisplay } from './HolographicDisplay';
import { modules, type ModuleId } from '../../data/modules';

export function VaultShell() {
    const [activeModuleId, setActiveModuleId] = useState<ModuleId | null>('dashboard'); // Default to Dashboard
    const containerRef = useRef<HTMLDivElement>(null);

    const activeModule = modules.find(m => m.id === activeModuleId) || null;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        containerRef.current.style.setProperty('--x', `${x}px`);
        containerRef.current.style.setProperty('--y', `${y}px`);
    };

    return (
        <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="flex flex-col md:flex-row h-screen w-screen overflow-hidden bg-vault-dark text-vault-text-primary font-sans antialiased selection:bg-vault-neon/30 selection:text-white relative group"
            style={{ '--x': '0px', '--y': '0px' } as React.CSSProperties}
        >
            {/* Mouse Spotlight Effect */}
            <div 
                className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at var(--x) var(--y), rgba(0, 243, 255, 0.1), transparent 40%)`
                }}
            />

            {/* Top Navigation Panel (Mobile) / Left Side (Desktop) */}
            <div className="w-full md:w-64 h-auto shrink-0 z-20 order-1 relative border-b md:border-b-0 md:border-r border-vault-border bg-vault-metal">
                <AccessPanel
                    activeModule={activeModuleId}
                    onSelect={setActiveModuleId}
                />
            </div>

            {/* Main Display */}
            <div className="flex-1 relative z-10 order-2 overflow-hidden h-full">
                <HolographicDisplay module={activeModule} />
            </div>
        </div>
    );
}
