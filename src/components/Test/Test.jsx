import { firebaseExports } from "../../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { googleAuth } from "../../firebase/firebaseRequests/firebaseRequests";

export const Test = () => {
  const [user, setUser] = useState(null);
  const [avatarSrc, setAvatarSrc] = useState(null);
  const { storage } = firebaseExports;
  let file = null;
  let storageRef = null;
  const id = "id12ddsa44sad";

  function upload(storageRef, file) {
    const { name } = file;
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log(`Uploaded a ${name} file!`);
      getAvatar();
    });
  }
  console.log(avatarSrc);

  useEffect(() => {
    user && getAvatar();
  }, [user !== null]);

  function getAvatar() {
    getDownloadURL(ref(storage, `avatars/${user.uid}-avatar`)).then((url) => {
      if (url) {
        setAvatarSrc(url);
      }
    });
  }

  async function handleSelectFile(e) {
    file = await e.target.files[0];
    storageRef = await ref(storage, `avatars/${user.uid}-avatar`);
    await upload(storageRef, file);
  }

  return (
    <div>
      {user && <img src={avatarSrc} alt="avatar" width={300} />}
      <>
        <input
          type="file"
          name="file"
          id="file"
          onChange={(e) => {
            handleSelectFile(e);
          }}
        />
        <button
          onClick={() => {
            getAvatar();
          }}
        >
          check
        </button>
        <button
          onClick={() => {
            getDownloadURL(ref(storage, file.name)).then((url) => {
              if (url) {
                const xhr = new XMLHttpRequest();
                xhr.responseType = "blob";
                xhr.onload = (event) => {
                  const blob = xhr.response;
                };
                xhr.open("GET", url);
                xhr.send();
              }
            });
          }}
        >
          download
        </button>
        <button
          onClick={() => {
            googleAuth(setUser);
          }}
        >
          Register
        </button>
      </>
    </div>
  );
};

// rules_version = '2';

// // Craft rules based on data in your Firestore database
// // allow write: if firestore.get(
// //    /databases/(default)/documents/users/$(request.Register.uid)).data.isAdmin;
// service firebase.storage {
//   match /b/{bucket}/o {

//     // This rule allows anyone with your Storage bucket reference to view, edit,
//     // and delete all data in your Storage bucket. It is useful for getting
//     // started, but it is configured to expire after 30 days because it
//     // leaves your app open to attackers. At that time, all client
//     // requests to your Storage bucket will be denied.
//     //
//     // Make sure to write security rules for your app before that time, or else
//     // all client requests to your Storage bucket will be denied until you Update
//     // your rules
//     match /{allPaths=**} {
//       allow read, write: if request.time < timestamp.date(2023, 12, 6);
//     }
//   }
// }
