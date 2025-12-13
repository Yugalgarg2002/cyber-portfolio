import { Component, Cpu, MessageSquare, Zap, LayoutDashboard } from 'lucide-react';

export type ModuleId = 'dashboard' | 'mcp' | 'frontend' | 'messaging' | 'cache';

export interface Module {
    id: ModuleId;
    title: string;
    description: string;
    icon: any; // Lucide icon
    status: 'active' | 'offline' | 'maintenance' | 'locked';
}

export const modules: Module[] = [
    {
        id: 'dashboard',
        title: 'Command Center',
        description: 'System Status & Operator Profile',
        icon: LayoutDashboard,
        status: 'active',
    },
    {
        id: 'mcp',
        title: 'MCP Core',
        description: 'Model Context Protocol Integrations',
        icon: Cpu,
        status: 'active',
    },
    {
        id: 'frontend',
        title: 'Frontend UI',
        description: 'Component Library & Visual Systems',
        icon: Component,
        status: 'active',
    },
    {
        id: 'messaging',
        title: 'Neural Link',
        description: 'Messaging Patterns & Real-time Comms',
        icon: MessageSquare,
        status: 'active',
    },
    {
        id: 'cache',
        title: 'Memory Bank',
        description: 'Cache Strategies & Optimization',
        icon: Zap,
        status: 'active',
    },
];
