import { LayoutDashboard, BookOpen, type LucideIcon } from 'lucide-react';

export type ModuleId = 'dashboard' | 'blog';

export interface Module {
    id: ModuleId;
    title: string;
    description: string;
    icon: LucideIcon;
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
        id: 'blog',
        title: 'Field Logs',
        description: 'Research Notes & Architectural Decisions',
        icon: BookOpen,
        status: 'active',
    },
];

