import React, { useRef, useState } from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  background: #f5fafd;
  height: 300px;
  width: 300px;
  margin-left: 20px;
  border-radius: 4px;
  background: rgba(33, 114, 229, 0.1);
  border: 1px solid rgba(33, 114, 229, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;
  overflow: hidden;
  h1 {
    margin: 0;
    font-size: 20px;
    color: #fff;
  }

  @media (max-width: 850px) {
    margin-left: 0;
  }

  @media (max-width: 362px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const fileInput = useRef(null);

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      let reader = new FileReader();
      let file = e.target.files[0];

      reader.onloadend = () => {
        setImage({
          file: file,
          imagePreviewUrl: reader.result,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  console.log("image ->", image);

  return (
    <BannerContainer
      onClick={() => {
        if (image) return null;
        fileInput.current.click();
      }}
    >
      <input
        ref={fileInput}
        type="file"
        onChange={onSelectFile}
        onClick={onSelectFile}
        style={{ display: "none" }}
      />

      <h1>+</h1>

      {image && (
        <ImageContainer>
          <ImagePreview alt="image upload" src={image.imagePreviewUrl} />
        </ImageContainer>
      )}
    </BannerContainer>
  );
};

export default UploadImage;
