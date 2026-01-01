import { motion, AnimatePresence } from 'framer-motion';
import type { Module } from '../../data/modules';
import { DashboardVisualizer } from './visualizers/DashboardVisualizer';
import { BlogVisualizer } from './visualizers/BlogVisualizer';

interface HolographicDisplayProps {
    module: Module | null;
}

export function HolographicDisplay({ module }: HolographicDisplayProps) {
    return (
        <div className="relative w-full h-full bg-vault-dark overflow-y-auto overflow-x-hidden flex flex-col p-4 md:p-8 custom-scrollbar">
            {/* Background Grid & Scanlines (Fixed) */}
            <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
            <div className="scanlines fixed inset-0 pointer-events-none"></div>

            {/* Content Container */}
            <AnimatePresence mode="wait">
                {module ? (
                    <motion.div
                        key={module.id}
                        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                        className="relative z-10 w-full max-w-4xl mx-auto border border-vault-border bg-vault-metal/50 backdrop-blur-sm p-4 md:p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                    >
                        {/* Header */}
                        <div className="border-b border-vault-neon/30 pb-4 mb-6 flex items-center justify-between">
                            <div>
                                <h2 className="text-3xl font-display font-bold text-vault-text-primary uppercase tracking-widest flex items-center gap-3">
                                    <module.icon className="text-vault-neon animate-pulse-slow" size={32} />
                                    {module.title}
                                </h2>
                                <div className="text-sm font-mono text-vault-text-dim mt-1">
                                    MODULE_ID: {module.id.toUpperCase()} // STATUS: {module.status.toUpperCase()}
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <div className="w-16 h-16 border border-vault-neon/50 flex items-center justify-center">
                                    <div className="w-12 h-12 bg-vault-neon/10 animate-flicker"></div>
                                </div>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="font-mono text-vault-text-secondary leading-relaxed min-h-[300px]">
                            <p className="text-lg mb-4">{module.description}</p>

                            <div className="p-4 border border-dashed border-vault-border bg-vault-dark/50 rounded mt-8">
                                <div className="text-xs text-vault-amber mb-2">[SYSTEM NOTICE]</div>
                                <p>Content module initialization complete. Use the interface to interact with this component.</p>

                                {/* Module Visualizer */}
                                <div className="mt-8 p-4 bg-black/20 rounded border border-vault-border/50">
                                    {module.id === 'dashboard' && <DashboardVisualizer />}
                                    {module.id === 'blog' && <BlogVisualizer />}
                                </div>
                            </div>
                        </div>

                        {/* Footer Decor */}
                        <div className="absolute bottom-0 right-0 p-2">
                            <div className="w-4 h-4 bg-vault-neon"></div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center h-full text-vault-text-dim z-10"
                    >
                        <div className="text-6xl mb-4 font-display opacity-20">LOCKED</div>
                        <p className="font-mono custom-kerning">SELECT A MODULE TO BEGIN</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

