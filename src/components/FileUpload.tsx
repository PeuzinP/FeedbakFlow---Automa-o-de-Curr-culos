
import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { cn } from '../lib/utils';

interface FileUploadProps {
  setGlobalName: (name: string) => void;
}

export const FileUpload = ({ setGlobalName }: FileUploadProps) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Nome do Candidato
        </label>
        <input
          type="text"
          placeholder="Ex: Pedro Paulo"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          onChange={(e) => setGlobalName(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="file-upload"
          className={cn(
            "flex flex-col items-center justify-center w-full h-32 rounded-lg border-2 border-dashed transition-colors cursor-pointer hover:bg-muted/50",
            isDragging ? "border-primary bg-muted" : "border-muted-foreground/25"
          )}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            if (e.dataTransfer.files?.[0]) setFileName(e.dataTransfer.files[0].name);
          }}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
            <p className="mb-2 text-sm text-muted-foreground">
              {fileName ? (
                <span className="font-semibold text-primary">{fileName}</span>
              ) : (
                <>
                  <span className="font-semibold">Clique para enviar</span> ou arraste
                </>
              )}
            </p>
            <p className="text-xs text-muted-foreground">PDF, JPG, PNG</p>
          </div>
          <input
            type="file"
            id="file-upload"
            accept=".pdf, .jpg, .jpeg, .png"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>
    </div>
  );
};
