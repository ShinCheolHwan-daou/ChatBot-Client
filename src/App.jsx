import React, {useState} from "react";

import MainPage from "./pages/MainPage.jsx";
import FileUploadPage from "./pages/FileUploadPage.jsx";

function App() {
    const [data, setData] = useState(null);

    return (
        <>
            {data ? <MainPage data={data}/> : <FileUploadPage setData={setData}/>}
        </>
    )
}

export default App;
