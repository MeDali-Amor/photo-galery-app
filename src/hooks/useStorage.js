import { useState, useEffect } from "react";
import {
    projectStorage,
    projectFirestore,
    timestamp,
} from "../firebase/config";
import {
    ref,
    uploadBytesResumable,
    getDownloadURL,
    uploadBytes,
} from "firebase/storage";
import { doc, collection, setDoc, addDoc } from "firebase/firestore";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // creating a reference to the file inside the firebase storage bucket
        const storageRef = ref(projectStorage, file.name);
        const collectionRef = collection(projectFirestore, "images");

        const uploadTask = uploadBytesResumable(storageRef, file);

        // upload the file to the reference in the storage bucket
        // storageRef is async, everytime the state of the file change a snap fun is fired that take snapshots of the state
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                let percentage =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(percentage);
                console.log("Upload is " + percentage + "% done");
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    // case "running":
                    //     console.log("Upload is running");
                    //     break;
                }
            },
            (err) => {
                setError(err);
            },

            () => {
                // Handle successful uploads on complete
                // setUrl(null);
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("File available at", downloadURL);
                    const createdAt = new Date(timestamp);
                    // collectionRef.add({ url: downloadURL, createdAt });
                    addDoc(collection(projectFirestore, "images"), {
                        url: downloadURL,
                        createdAt,
                    });
                    setUrl(downloadURL);
                });
            }
        );
    }, [file]);
    return { progress, url, error };
};
export default useStorage;
