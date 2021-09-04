import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const PhotoList = ({ setSelectedImg }) => {
    const { docs } = useFirestore("images");
    console.log(docs);
    return (
        <div className="img-grid">
            {docs &&
                docs.map((doc) => (
                    <motion.div
                        className="img-wrapper"
                        whileHover={{ opacity: 1 }}
                        layout
                        key={doc.id}
                        style={{ maxWidth: 300 }}
                        onClick={() => setSelectedImg(doc.url)}
                    >
                        <motion.img
                            src={doc.url}
                            style={{ maxWidth: 300 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        />
                    </motion.div>
                ))}
        </div>
    );
};

export default PhotoList;
