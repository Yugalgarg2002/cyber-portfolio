import { useState } from 'react';
import { AccessPanel } from './AccessPanel';
import { HolographicDisplay } from './HolographicDisplay';
import { modules, type ModuleId } from '../../data/modules';

export function VaultShell() {
    const [activeModuleId, setActiveModuleId] = useState<ModuleId | null>('dashboard'); // Default to Dashboard

    const activeModule = modules.find(m => m.id === activeModuleId) || null;

    return (
        <div className="flex h-screen w-screen overflow-hidden bg-vault-dark text-vault-text-primary font-sans antialiased selection:bg-vault-neon/30 selection:text-white">
            {/* Left Panel */}
            <div className="w-20 md:w-64 flex-shrink-0 z-20">
                <AccessPanel
                    activeModule={activeModuleId}
                    onSelect={setActiveModuleId}
                />
            </div>

            {/* Main Display */}
            <div className="flex-1 relative z-10">
                <HolographicDisplay module={activeModule} />
            </div>
        </div>
    );
}
