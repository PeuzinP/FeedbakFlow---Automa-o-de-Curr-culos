import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ArrowLeft } from 'lucide-react';

interface ParticipantsProps {
    onBack: () => void;
    currentName: string;
}

export const Participants = ({ onBack, currentName }: ParticipantsProps) => {
    return (
        <div className="space-y-6">
            <div className="flex items-center space-x-4">
                <Button variant="ghost" onClick={onBack} className="pl-0">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar
                </Button>
                <h2 className="text-3xl font-bold tracking-tight">Participantes</h2>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Detalhes do Candidato</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="mb-6">
                        <h3 className="text-lg font-medium">
                            Candidato em Foco: <span className="text-primary">{currentName || "Nenhum nome digitado"}</span>
                        </h3>
                    </div>

                    <div className="rounded-md border p-8 text-center text-muted-foreground">
                        <p>Aguardando novos currículos para exibição detalhada...</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
