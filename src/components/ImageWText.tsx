"use client";

import React from "react";

interface ImageWTextProps {
  subtitle: string;
  title: string;
  text: string;
  buttonText?: string;
  backgroundImage?: string;
  contentImage: string;
  imageAlt?: string;
  showButton?: boolean;
  onButtonClick?: () => void;
  backgroundColor?: string;
  reverse?: boolean;
  subImage?: string;
  subImageAlt?: string;
  textColor?: string;
}

const ImageWText: React.FC<ImageWTextProps> = ({
  subtitle,
  title,
  text,
  buttonText = "Daha fazla bilgi",
  backgroundImage,
  contentImage,
  imageAlt = "Content Image",
  showButton = true,
  onButtonClick,
  reverse = false,
  subImage,
  backgroundColor = "#F5F5F5",
  subImageAlt = "Sub Image",
  textColor = "#BD631F",
}) => {
  const contentDiv = (
    <div className="image-w-text-content" style={{ color: textColor }}>
      {subImage && (
        <div className="image-w-text-subimage">
          <img src={subImage} alt={subImageAlt} />
        </div>
      )}

      <h4 className="image-w-text-subtitle" style={{ color: textColor }}>{subtitle}</h4>
      <h2 
        className="image-w-text-title"
        style={{ color: textColor }}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <div
        className="image-w-text-text"
        style={{ color: textColor }}
        dangerouslySetInnerHTML={{ __html: text }}
      />

      {showButton && (
        <button
          className="image-w-text-button"
          style={{ color: textColor, borderColor: textColor }}
          onClick={onButtonClick || (() => {})}
        >
          {buttonText}
        </button>
      )}
    </div>
  );

  const imageDiv = (
    <div className="image-w-text-visual">
      <img src={contentImage} alt={imageAlt} />
    </div>
  );

  return (
    <section
      className={`image-w-text-section ${reverse ? "reverse" : ""}`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundColor: backgroundColor ? backgroundColor : undefined,
      }}
    >
      <div className="image-w-text-container">
        {reverse ? (
          <>
            {imageDiv}
            {contentDiv}
          </>
        ) : (
          <>
            {contentDiv}
            {imageDiv}
          </>
        )}

        <div
          className="image-w-text-text-mobile"
          style={{ color: textColor }}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </section>
  );
};

export default ImageWText;
