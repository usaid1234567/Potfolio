"use client";

import { useRef, useState, type ChangeEvent, type DragEvent } from "react";
import { cn } from "@/lib/cn";
import { validateFiles } from "@/utils/validateFile";
import { UploadCloud, FileText, X } from "lucide-react";

export interface FileUploadProps {
  accept?: string;
  acceptedTypes?: string[];
  maxSizeMB?: number;
  multiple?: boolean;
  label?: string;
  hint?: string;
  onFilesSelected?: (files: File[]) => void;
  className?: string;
}

export function FileUpload({
  accept,
  acceptedTypes,
  maxSizeMB,
  multiple,
  label = "Upload a file",
  hint,
  onFilesSelected,
  className,
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  function handleFiles(fileList: FileList | null) {
    if (!fileList) return;
    const { validFiles, errors: validationErrors } = validateFiles(Array.from(fileList), {
      acceptedTypes,
      maxSizeMB,
    });
    const next = multiple ? [...files, ...validFiles] : validFiles;
    setFiles(next);
    setErrors(validationErrors);
    onFilesSelected?.(next);
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
    handleFiles(event.dataTransfer.files);
  }

  function removeFile(index: number) {
    const next = files.filter((_, i) => i !== index);
    setFiles(next);
    onFilesSelected?.(next);
  }

  return (
    <div className={className}>
      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={cn(
          "glass-panel border-dashed flex flex-col items-center justify-center gap-2 py-10 px-4 text-center cursor-pointer transition-colors",
          isDragging && "border-violet/60 bg-violet/5"
        )}
      >
        <UploadCloud className="h-6 w-6 text-mist-faint" aria-hidden="true" />
        <p className="text-sm text-mist">{label}</p>
        {hint && <p className="text-xs text-mist-faint">{hint}</p>}
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleFiles(e.target.files)}
          className="sr-only"
        />
      </div>

      {errors.length > 0 && (
        <ul className="mt-2 space-y-1">
          {errors.map((error) => (
            <li key={error} className="text-xs text-rose-400">
              {error}
            </li>
          ))}
        </ul>
      )}

      {files.length > 0 && (
        <ul className="mt-3 space-y-2">
          {files.map((file, index) => (
            <li key={`${file.name}-${index}`} className="flex items-center gap-2 text-sm text-mist-muted glass-panel px-3 py-2">
              <FileText className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="truncate flex-1">{file.name}</span>
              <button type="button" onClick={() => removeFile(index)} aria-label={`Remove ${file.name}`}>
                <X className="h-4 w-4 text-mist-faint hover:text-mist" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
