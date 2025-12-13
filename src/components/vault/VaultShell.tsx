import { useState } from 'react';
import { AccessPanel } from './AccessPanel';
import { HolographicDisplay } from './HolographicDisplay';
import { modules, type ModuleId } from '../../data/modules';

export function VaultShell() {
    const [activeModuleId, setActiveModuleId] = useState<ModuleId | null>('dashboard'); // Default to Dashboard

    const activeModule = modules.find(m => m.id === activeModuleId) || null;

    return (
        <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden bg-vault-dark text-vault-text-primary font-sans antialiased selection:bg-vault-neon/30 selection:text-white">
            {/* Top Navigation Panel (Mobile) / Left Side (Desktop) */}
            <div className="w-full md:w-64 h-auto flex-shrink-0 z-20 order-1 relative border-b md:border-b-0 md:border-r border-vault-border bg-vault-metal">
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
