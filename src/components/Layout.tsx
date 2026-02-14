import React from 'react';
import { LayoutDashboard, Users, Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';
import { useTheme } from '../context/ThemeContext';

interface LayoutProps {
    children: React.ReactNode;
    currentView: 'dashboard' | 'participants';
    onNavigate: (view: 'dashboard' | 'participants') => void;
}

export const Layout = ({ children, currentView, onNavigate }: LayoutProps) => {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const { theme } = useTheme();

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            {/* Mobile Header */}
            <div className="lg:hidden flex items-center justify-between p-4 border-b bg-card">
                <h1 className="text-xl font-bold text-primary">FeedbackFlow</h1>
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </div>

            <div className="flex h-screen overflow-hidden">
                {/* Sidebar */}
                <aside
                    className={cn(
                        "fixed inset-y-0 left-0 z-50 w-64 transform bg-card border-r transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0",
                        sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    )}
                >
                    <div className="flex h-full flex-col">
                        <div className="flex h-16 items-center border-b px-6">
                            <h1 className="text-2xl font-bold text-primary">FeedbackFlow</h1>
                        </div>

                        <nav className="flex-1 space-y-1 p-4">
                            <Button
                                variant={currentView === 'dashboard' ? 'default' : 'ghost'}
                                className="w-full justify-start text-base"
                                onClick={() => {
                                    onNavigate('dashboard');
                                    setSidebarOpen(false);
                                }}
                            >
                                <LayoutDashboard className="mr-3 h-5 w-5" />
                                Dashboard
                            </Button>
                            <Button
                                variant={currentView === 'participants' ? 'default' : 'ghost'}
                                className="w-full justify-start text-base"
                                onClick={() => {
                                    onNavigate('participants');
                                    setSidebarOpen(false);
                                }}
                            >
                                <Users className="mr-3 h-5 w-5" />
                                Participantes
                            </Button>
                        </nav>

                        <div className="border-t p-4 flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Tema</span>
                            <ThemeToggle />
                        </div>
                    </div>
                </aside>

                {/* Overlay for mobile */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-muted/20">
                    <div className="mx-auto max-w-7xl animate-in fade-in cursor-default">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};
