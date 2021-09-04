import React from "react";
import { motion } from "framer-motion";

const ImgModal = ({ selectedImg, setSelectedImg }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains("background")) {
            setSelectedImg(null);
        }
    };
    return (
        <motion.div
            className="background"
            onClick={handleClick}
            initial={{ opacity: 0 }}
            initial={{ opacity: 1 }}
        >
            <motion.img
                src={selectedImg}
                className="modal-img"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
            />
        </motion.div>
    );
};

export default ImgModal;
