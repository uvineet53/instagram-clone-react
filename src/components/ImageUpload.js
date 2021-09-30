import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase";
import './ImageUpload.css';

function ImageUpload({username}) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //progress function...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        //error function
        console.log(error);
        alert(error.message);
      },
      () => {
        //complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            //post image in db
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              imageUrl: url,
              username: username,
              caption:caption,
            }).then(()=>{
                setProgress(0);
                setCaption("");
                setImage(null);
            });
            
          });
      }
    );
  };

  return (
    <div className="upload__container">
      <progress value={progress} max="100" />
      <textarea
      className="upload__textarea"
        rows="5"
        type="text"
        placeholder="Enter a caption..."
        value={caption}
        onChange={(event) => setCaption(event.target.value)}
      />
      <input type="file" onChange={handleChange} />
      <Button variant="contained" color="primary" onClick={handleUpload }>Upload</Button>
    </div>
  );
}

export default ImageUpload;
