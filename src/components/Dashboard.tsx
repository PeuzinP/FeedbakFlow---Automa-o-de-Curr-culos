import React from 'react';
import { FileUpload } from './FileUpload';
import { CandidateTable } from './CandidateTable';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/Card';
import { Button } from './ui/Button';

interface DashboardProps {
  onViewAll: () => void;
  setGlobalName: (name: string) => void;
}

export const Dashboard = ({ onViewAll, setGlobalName }: DashboardProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-12">
      <div className="md:col-span-12 lg:col-span-4">
        <Card>
          <CardHeader>
            <CardTitle>Novo Processo</CardTitle>
            <CardDescription>
              Inicie uma nova análise de currículos carregando os dados do candidato.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FileUpload setGlobalName={setGlobalName} />
            <Button className="w-full mt-4">Iniciar Análise</Button>
          </CardContent>
        </Card>
      </div>

      <div className="md:col-span-12 lg:col-span-8">
        <Card className="h-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Candidatos Recentes</CardTitle>
            <Button variant="ghost" size="sm" onClick={onViewAll}>
              Ver todos →
            </Button>
          </CardHeader>
          <CardContent>
            <CandidateTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};