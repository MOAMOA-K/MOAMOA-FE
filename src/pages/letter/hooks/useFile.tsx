import { useState, type ChangeEvent } from 'react';

const useFile = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  return {
    uploadedFile,
    isUploaded: uploadedFile !== null,
    handleFileChange,
  };
};

export default useFile;
