function ImageTextFile() {
    function randomIntFromInterval(min: number, max: number) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    return (
        <div className='align-items-center d-flex image-text-box'>
            <div className='col-4'>
                <img style={{ objectFit: "cover", borderRight: "1px solid rgba(215, 215, 215, 1)" }} src={"https://picsum.photos/" + randomIntFromInterval(200, 300)} alt='loginImage' width={"100%"} height={"70px"} />
            </div>
            <div className='col-9 ms-2'>
                <span>Gem or Jewellery name</span>
                <br />
                <label className='btn-upload mt-2' htmlFor='file-upload'>Choose File</label>
                <input type='file' id='file-upload' className='d-none' accept='Image/*' />
            </div>
        </div>
    )
}

export default ImageTextFile;
