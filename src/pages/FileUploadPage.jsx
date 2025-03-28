import React, {useState} from "react";

function FileUploadPage({setData}) {
    const [dragging, setDragging] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);

        const file = e.dataTransfer.files[0];
        if (file && file.type === "application/json") {
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const data = JSON.parse(event.target.result);
                    setData(data);
                } catch {
                    alert("올바른 JSON 파일이 아닙니다.");
                }
            };
            reader.readAsText(file);
        } else {
            alert("JSON 파일만 업로드 가능합니다.");
        }
    };

    return (
        <div
            className={`w-full h-full flex items-center justify-center relative ${dragging ? "bg-slate-700" : "bg-slate-800"}`}
            onDragOver={handleDragOver}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
        >
            <p className={"text-sm font-medium text-center text-white"}>JSON 파일을 여기로 드래그 앤 드롭하세요.</p>
        </div>
    )
}

export default FileUploadPage;