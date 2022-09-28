import React, { useEffect, useState } from 'react';

function ImageSelecter(props: any) {
    const [image, setImage] = useState("https://via.placeholder.com/200x150/fde6f0/808080?text=Image")
    const getImagePath = (f: { target: { files: Blob[]; }; }) => {
        var reader = new FileReader();
        reader.onload = function (e: any) {
            setImage(e?.target?.result);
        };
        reader.readAsDataURL(f.target.files[0]);
    }
    const [keyId] = useState((Math.random() + 1).toString(36).substring(7))
    return (
        <div className='col-sm-4 align-items-center'>
            {props.view.includes("slide") && (
                <div className='col-sm-4 m-2'>
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" /> &nbsp; {props.checkboxText}
                </div>
            )}

            {props.view.includes("input") && (
                <input type='text' className='form-control mt-3 mb-3' placeholder='Link to' />
            )}
            {props.view.includes("image") && (
                <>
                    <img style={{ objectFit: "cover" }} src={image} alt='loginImage' width={"100%"} height={"200px"} />
                    <label className='btn-upload mt-2' htmlFor={'file-upload' + keyId}>Choose File</label>
                    <input onChange={(e: any) => { getImagePath(e) }} type='file' name='' id={'file-upload' + keyId} className='d-none' accept='Image/*' />
                </>
            )}
        </div>
    )
}

export default ImageSelecter;