import React, {useRef, useState} from "react";
import ss from "./DragAndDrop.module.scss";
import ServerClass from "@/sublimates/Server/ServerClass";


const server = new ServerClass();

const success = e => {
    console.log('success', e);
    setTimeout(() => {location.reload();}, 1000);
};


const DragAndDrop = () => {

    const filesRef = useRef();
    const [uploadedFiles, setUploadedFiles] = useState();
    const [drag, setDrag] = useState(false);

    const sendFiles = e => {
        e.preventDefault();
        const formData = new FormData();
        for (let x = 0; x < uploadedFiles.length; x++) {
            formData.append("attachment[]", uploadedFiles[x]);
        }
        server.create_files('upload', formData, e => {console.log(e);}, e => {success(e)});
    };

    const onDrop = e => {
        e.preventDefault();
        setDrag(false);
        let files = Array.from(e.dataTransfer.files);
        if(files.length > 12){files = files.slice(0, 12);}
        let filesUrl = files.map(file => {
            return URL.createObjectURL(file);
        });
        setUploadedFiles(files);
        if(e.dataTransfer.files.length === 0){setUploadedFiles(null)}
    };

    const inputChange = e => {
        e.preventDefault();
        let files = Array.from(filesRef.current.files);
        if(files.length > 12){files = files.slice(0, 12);}
        let filesUrl = files.map(file => {
            return URL.createObjectURL(file);
        });
        setUploadedFiles(files);
        if(filesRef.current.files.length === 0){setUploadedFiles(null)}
        console.log(files);
    };

    const deleteFile = (e, key) => {
        let array = uploadedFiles;
        array = array.filter((v, k) => {
            return key !== k && v;
        });
        if(array.length > 0){
            setUploadedFiles(array);
        }else{
            setUploadedFiles(null);
        }
    };

    const renderUploadedFiles = () => {
        return uploadedFiles.map((v, k) => {
            return (
                <div key={k} className={`${ss.image}`}>
                    <img src={URL.createObjectURL(v)} alt="img"/>
                    <div className={`${ss.buttons}`}><div className={`btn-sm btn-danger`}
                        onClick={(e) => {deleteFile(e, k)}}
                    >Delete</div></div>
                </div>
            );
        });
    };

    const dragEnterHandler = e => {
        e.preventDefault();
        setDrag(true);
    };

    const dragOverHandler = e => {
        e.preventDefault();
        setDrag(true);
    };

    const dragLeaveHandler = e => {
        e.preventDefault();
        setDrag(false);
    };

    const fileInputTrigger = e => {
        e.preventDefault();
        filesRef.current.click();
    };

    return (
        <>
            <div className={`${ss.dragAndDrop_wrapper} ${drag && ss.onDrag}`}
            >
                <div className={`${ss.dragAndDrop}`}
                     onDragEnter={dragEnterHandler}
                     onDragOver={dragOverHandler}
                     onDragLeave={dragLeaveHandler}
                     onDrop={onDrop}
                >
                    <i className="fa-solid fa-cloud-arrow-up no_pointer_events"/>
                    <div className={`no_pointer_events`}>
                        {drag ? `Yes, please. Drop me here!` : `Drag&Drop File here`}
                    </div>
                    <div className={`${ss.ore} no_pointer_events`}>or</div>
                    <form>
                        <input ref={filesRef} className={`form-control`} type="file" name={`attachment[]`} multiple
                               accept={`image/*,.png,.jpg,.jpeg,.webp,.gif`} onChange={inputChange}
                        />
                        {uploadedFiles
                            ? <button className={`btn btn-outline-success`} onClick={sendFiles}
                        >Upload Files</button>
                            : <button className={`btn btn-outline-secondary`} onClick={fileInputTrigger}
                            >Browse Files</button>}
                    </form>
                </div>

                {uploadedFiles &&
                <div className={`${ss.selectedFiles}`}>
                    {renderUploadedFiles()}
                </div>}

            </div>
        </>
    );
};

export default DragAndDrop;