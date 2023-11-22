import { useRef, useState } from "react";
import { files } from "../db/files";
import Video from "../components/Video";

import style from "./Works.module.css";

const Works = () => {
  const [video, setVideo] = useState(false);
  const [id, setId] = useState("");
  const labelRef = useRef();

  const handleClick = ({ target }) => {
    setVideo(true);
    setId(target.id);
  };

  function showLabel({ target }) {
    console.log(labelRef);
  }

  function hideLabel() {}

  return (
    <div>
      <div className={style.thumbContainer} id="thumbContainer">
        {files.map((file, index) => (
          <div
            key={index}
            className={style.divImg}
            style={{ position: "relative" }}
            onMouseEnter={(e) => showLabel(e)}
            onMouseLeave={hideLabel}
          >
            <img
              src={file.imgURL}
              className={style.thumb}
              alt={file.nome}
              onClick={(e) => handleClick(e)}
              id={file.imgURL
                .replace("/src/assets/thumb_", "")
                .replace(".jpg", "")}
            />
            <div
              className={`${style.description} ${style.hide}`}
              ref={labelRef}
            >
              <h4>{file.descriptType}</h4>
              <h5>{file.descripTitle}</h5>
              <h6>{file.descripClient}</h6>
            </div>
          </div>
        ))}
      </div>
      {video && <Video video={video} id={id} setVideo={setVideo} />}
    </div>
  );
};

export default Works;
