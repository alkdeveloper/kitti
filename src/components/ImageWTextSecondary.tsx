"use client";

import React from "react";
import { contentData } from "@/data/content";
import { imageAssets, IMAGE_PATHS } from "@/data/images";

const ImageWTextSecondary: React.FC = () => {
  return (
    <section
      className="image-w-text-section-secondary"
      style={{
        backgroundImage: `url(${IMAGE_PATHS.BG_ATOLYEDEN_DUNYAYA})`,
      }}
    >
      <div className="image-w-text-content">
        <h4 className="image-w-text-subtitle">
          {contentData.imageWTextSecondary.subtitle}
        </h4>
        <h2 className="image-w-text-title">{contentData.imageWTextSecondary.title}</h2>

        <div className="image-w-text-text">
          {contentData.imageWTextSecondary.description.map((text, index) => (
            <React.Fragment key={index}>
              {text === "" ? (
                <br />
              ) : text.includes("Büyük ölçekli") ? (
                <b>{text}</b>
              ) : (
                text
              )}
              {index < contentData.imageWTextSecondary.description.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>

        <div className="image-w-text-buttons-ctr">
          {contentData.imageWTextSecondary.buttons.map((button, index) => (
            <button key={index} className="image-w-text-button">
              {button.text}
            </button>
          ))}
        </div>
      </div>

      <div className="image-w-text-visual">
        <img 
          src={IMAGE_PATHS.CONTENT_IMG_W_TEXT_SECONDARY} 
          alt={imageAssets.altTexts.imgWTextSecondary} 
        />
      </div>
      <div className="image-w-text-text-mobile">
        {contentData.imageWTextSecondary.mobileDescription.map((text, index) => (
          <React.Fragment key={index}>
            {text === "" ? (
              <br />
            ) : text.includes("Büyük ölçekli") ? (
              <b>{text}</b>
            ) : (
              text
            )}
            {index < contentData.imageWTextSecondary.mobileDescription.length - 1 && <br />}
          </React.Fragment>
        ))}
        {contentData.imageWTextSecondary.buttons.map((button, index) => (
          <button key={index} className="image-w-text-button mobile-show">
            {button.text}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ImageWTextSecondary;
