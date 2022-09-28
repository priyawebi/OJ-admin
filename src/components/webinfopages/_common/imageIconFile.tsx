import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function ImageIconFile() {
    return (
        <div className='align-items-center d-flex'>
            <div className='col-4'>
                <img style={{ objectFit: "cover", borderRight: "1px solid rgba(215, 215, 215, 1)" }} src={"https://via.placeholder.com/200x150/fde6f0/808080?text=Image"} alt='loginImage' width={"100%"} height={"70px"} />
            </div>
            <div className='col-9 ms-2'>
                <div className='border-cross' style={{ width: "25px" }} >
                    <FontAwesomeIcon className='icon-class pinkicon' icon={faXmark} title='View' />
                </div>
                <label className='btn-upload mt-2' htmlFor='file-upload'>Choose File</label>
                <input type='file' id='file-upload' className='d-none' accept='Image/*' />
            </div>
        </div>
    )
}

export default ImageIconFile;
