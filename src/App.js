import React, { useState } from "react";
import ImgModal from "./comps/ImgModal";
import PhotoList from "./comps/PhotoList";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";

function App() {
    const [selectedImg, setSelectedImg] = useState(null);
    return (
        <div className="App">
            <Title />
            <UploadForm />
            <PhotoList setSelectedImg={setSelectedImg} />
            {selectedImg && (
                <ImgModal
                    selectedImg={selectedImg}
                    setSelectedImg={setSelectedImg}
                />
            )}
        </div>
    );
}

export default App;
