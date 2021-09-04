import { useState, useEffect } from "react";
import { projectFirestore, projectStorage } from "../firebase/config";
import {
    doc,
    collection,
    setDoc,
    onSnapshot,
    orderBy,
    query,
} from "firebase/firestore";
const useFirestore = (col) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const q = query(
            collection(projectFirestore, col),
            orderBy("createdAt", "desc")
        );
        const unsub = onSnapshot(
            q,

            (snapshot) => {
                let documents = [];
                snapshot.forEach((doc) => {
                    documents.push({ ...doc.data(), id: doc.id });
                });
                setDocs(documents);
            }
        );

        return () => unsub();
    }, [collection]);

    return { docs };
};

export default useFirestore;
