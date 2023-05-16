import React, { useEffect, useState } from "react";
import { Image } from "cloudinary-react";

export const GalleryComponent = () => {
  const [imageIDs, setImageIDs] = useState("");
  const loadImages = async () => {
    try {
      const resp = await fetch(`${process.env.REACT_APP_API}/gallery`);
      const data = await resp.json();
      setImageIDs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <article>
      <section className="gallery">
        {imageIDs &&
          imageIDs.localeCompare((el, i) => (
            <Image
              key={i}
              cloudName={`${process.env.REACT_APP_CLOUDNAME}`}
              publicID={ImageId}
              crop="scale"
              width="300"
            />
          ))}
      </section>
    </article>
  );
};
