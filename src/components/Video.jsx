import { files } from "../db/files";
import closebtn from "../assets/close.png";
import video1 from "../assets/videos/video_caterina1.mp4";

import style from "./Video.module.css";

const Video = ({ video, id, setVideo }) => {
  const handleClickOut = (e) => {
    e.stopPropagation();
    setVideo(false);
  };

  return (
    <div>
      <div className={style.divVid} onClick={(e) => handleClickOut(e)}>
        <img
          className={style.closeBtn}
          src={closebtn}
          alt=""
          onClick={() => setVideo(false)}
        />
        <video src={video1} controls />
        {files.map((file) =>
          id ===
          file.imgURL.replace("/src/assets/thumb_", "").replace(".jpg", "") ? (
            <div className={style.videoLabel} key={file.descripTitle}>
              <h4>{file.descriptType}</h4>
              <h5>{file.descripTitle}</h5>
              <h6>{file.descripClient}</h6>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Video;
