import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Gallery() {
    return (
        <>
            <div className='customer-side-box-head'>
                <div className='row align-items-center'>
                    <div className='col-10'>
                        <p className='m-0'>Upload Documents</p>
                    </div>
                    <div className='col-2'>
                        <label className='btn-upload' htmlFor='file-upload'>Choose File</label>
                        <input type='file' id='file-upload' className='d-none' />
                    </div>
                </div>
            </div>
            {
                new Array(3).fill(undefined).map((e, i) => {
                    return (
                        <div className='col-12 d-flex mt-2 gap-2'>
                            <img src={`https://picsum.photos/` + (200 + i)} height={"100px"} />
                            <textarea cols={100}></textarea>
                            <div className='border-cross justify-content-center align-self-center' style={{ height: "25px" }} >
                                <FontAwesomeIcon className='icon-class pinkicon' icon={faXmark} title='View' />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Gallery;