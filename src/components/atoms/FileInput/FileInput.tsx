import { useEffect, useCallback, useState } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';
import { ImagesWrapper, AddPhotoButton, ClearButton } from './FileInput.style';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import get from 'lodash/get';
import { v4 as uuid } from 'uuid';

interface FileInputProps {
  name: string;
  type: string;
  accept: string;
  register: (name: string, required: { required: boolean }) => void;
  errors: any;
  unregister: (name: string) => void;
  maxFiles: number;
  required: boolean;
}

interface FormattedFile {
  fileName: string;
  src: any;
  id: string;
}

const handleFormatFiles = async (files: File[]) => {
  const formattedFilesPromise: Promise<FormattedFile>[] = [];

  files.forEach((file) => {
    formattedFilesPromise.push(
      new Promise<FormattedFile>((resolve) => {
        const reader = new FileReader();

        reader.onloadend = () =>
          resolve({
            fileName: file.name,
            src: reader.result,
            id: uuid(),
          });

        reader.readAsDataURL(file);
      })
    );
  });

  const formattedFiles = await Promise.all(formattedFilesPromise);

  return formattedFiles;
};

const FileInput = ({
  name,
  type,
  accept = 'image/*',
  register,
  errors,
  unregister,
  maxFiles = 1,
  required = false,
}: FileInputProps) => {
  const [addedFiles, setAddedFiles] = useState<File[]>([]);
  const [rejectedFiles, setRejectedFiles] = useState<{ name: string }[]>([]);
  const [formattedFiles, setFormattedFiles] = useState<FormattedFile[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      if (acceptedFiles.length) {
        setAddedFiles((prevState) => [...prevState, ...acceptedFiles]);
      }

      if (rejectedFiles.length) {
        const files = rejectedFiles.map((file) => ({ name: file.file.name }));

        setRejectedFiles((prevState) => [...prevState, ...files]);
      }
    },
    []
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: accept,
    maxFiles,
  });

  const formatFiles = useCallback(async () => {
    if (addedFiles.length > 0) {
      try {
        const files = await handleFormatFiles(addedFiles);

        setFormattedFiles(files);
      } catch (err) {
        console.log(err);
      }
    }
  }, [addedFiles]);

  const clear = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setAddedFiles([]);
    setRejectedFiles([]);
    setFormattedFiles([]);
  };

  useEffect(() => {
    formatFiles();
  }, [formatFiles]);

  useEffect(() => {
    register(name, { required: required });
    return () => {
      unregister(name);
    };
  }, [register, unregister, name]);

  const renderPreview = formattedFiles.map(({ id, fileName, src }) => (
    <img src={src} key={id} alt={fileName} />
  ));

  return (
    <>
      <ImagesWrapper {...getRootProps()}>
        {(addedFiles.length > 0 ||
          rejectedFiles.length > 0 ||
          formattedFiles.length > 0) && (
          <ClearButton onClick={clear}>
            <span role="img" aria-label="x icon">
              ❌
            </span>
          </ClearButton>
        )}
        <AddPhotoButton type={type} {...getInputProps()} />
        {formattedFiles.length > 0 && renderPreview}
      </ImagesWrapper>
      {rejectedFiles.length > 0 && (
        <ErrorMessage>
          {`Wybrany plik nie może zostać akceptowany: ${rejectedFiles
            .map(({ name }) => name)
            .join(', ')}`}
        </ErrorMessage>
      )}
      {get(errors, name) && <ErrorMessage>Dodaj zdjecie</ErrorMessage>}
    </>
  );
};

export default FileInput;
