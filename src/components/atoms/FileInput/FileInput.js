import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { ImagesWrapper, AddPhotoButton } from './FileInput.style';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import get from 'lodash/get';

const FileInput = ({
  name,
  type,
  accept = 'image/*',
  setValue,
  register,
  watch,
  errors,
  unregister,
  mode = 'update',
  maxFiles = 1,
  required = false,
}) => {
  const files = watch(name);

  const onDrop = useCallback(
    (droppedFiles) => {
      let newFiles =
        mode === 'update' ? droppedFiles : [...(files || []), ...droppedFiles];
      if (mode === 'append') {
        newFiles = newFiles.reduce((prev, file) => {
          const fo = Object.entries(file);
          if (
            prev.find((e) => {
              const eo = Object.entries(e);
              return eo.every(
                ([key, value], index) =>
                  key === fo[index][0] && value === fo[index][1]
              );
            })
          ) {
            return prev;
          } else {
            return [...prev, file];
          }
        }, []);
      }
      setValue(name, newFiles, { shouldValidate: true });
    },
    [setValue, name, mode, files]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: accept,
    maxFiles,
  });

  const renderPreview = files?.map((file) => (
    <img key={file.name} src={URL.createObjectURL(file)} />
  ));

  useEffect(() => {
    register(name, { required: required });
    return () => {
      unregister(name);
    };
  }, [register, unregister, name]);

  return (
    <>
      <ImagesWrapper isDragActive={isDragActive} {...getRootProps()}>
        <AddPhotoButton type={type} {...getInputProps()} />
        {!!files?.length && renderPreview}
      </ImagesWrapper>
      {get(errors, name) && <ErrorMessage>Dodaj zdjecie</ErrorMessage>}
    </>
  );
};

FileInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  accept: PropTypes.string,
  setValue: PropTypes.func,
  register: PropTypes.func,
  watch: PropTypes.func,
  unregister: PropTypes.func,
  errors: PropTypes.object,
  mode: PropTypes.oneOf(['append', 'update']),
  maxFiles: PropTypes.number,
  required: PropTypes.bool,
};

export default FileInput;
