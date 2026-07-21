export interface FileValidationOptions {
  acceptedTypes?: string[];
  maxSizeMB?: number;
}

export interface FileValidationResult {
  validFiles: File[];
  errors: string[];
}

/** Pure validation logic, kept separate from FileUpload's UI so it's independently testable. */
export function validateFiles(files: File[], options: FileValidationOptions): FileValidationResult {
  const { acceptedTypes, maxSizeMB } = options;
  const validFiles: File[] = [];
  const errors: string[] = [];

  for (const file of files) {
    if (acceptedTypes && acceptedTypes.length > 0) {
      const matches = acceptedTypes.some((type) => file.name.toLowerCase().endsWith(type.toLowerCase()));
      if (!matches) {
        errors.push(`${file.name}: unsupported file type`);
        continue;
      }
    }

    if (maxSizeMB && file.size > maxSizeMB * 1024 * 1024) {
      errors.push(`${file.name}: exceeds ${maxSizeMB}MB limit`);
      continue;
    }

    validFiles.push(file);
  }

  return { validFiles, errors };
}
