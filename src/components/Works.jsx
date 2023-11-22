import { useState } from "react";
import { files } from "../db/files";
import Video from "./Video";
import style from "./Works.module.css";

const Works = () => {
  const [video, setVideo] = useState(false);
  const [id, setId] = useState("");

  const handleClick = ({ target }) => {
    setVideo(true);
    setId(target.id);
  };

  return (
    <div>
      <div className={style.thumbContainer} id="thumbContainer">
        {files.map((file, index) => (
          <div
            key={index}
            className={style.divImg}
            style={{ position: "relative" }}
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
            <div className={`${style.description} ${style.hide}`}>
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
