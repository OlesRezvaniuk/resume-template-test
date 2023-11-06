import { firebaseExports } from "../../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from "react";

export const Test = () => {
  const { storage } = firebaseExports;
  let file = null;
  let storageRef = null;

  function upload(storageRef, file) {
    const { name } = file;
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log(`Uploaded a ${name} file!`);
    });
  }

  return (
    <>
      <>
        <input
          type="file"
          name="file"
          id="file"
          onChange={async (e) => {
            file = await e.target.files[0];
            storageRef = await ref(storage, file.name);
            await upload(storageRef, file);
          }}
        />
        <button
          onClick={() => {
            getDownloadURL(ref(storage, file.name)).then((url) => {
              if (url) {
                console.log(url);
              }
            });
          }}
        >
          download
        </button>
      </>
    </>
  );
};
