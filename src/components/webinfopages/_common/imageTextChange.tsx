function ImageTextChange() {
    function randomIntFromInterval(min: number, max: number) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return (
        <div className='align-items-center image-text-box d-flex'>
            <div className='col-3'>
                <img style={{ objectFit: "cover", borderRight: "1px solid rgba(215, 215, 215, 1)" }} src={"https://picsum.photos/" + randomIntFromInterval(200, 300)} alt='loginImage' width={"100%"} height={"70px"} />
            </div>
            <div className='col-9 ms-2'>
                <span>Gem or Jewellery name</span>
                <br />
                <a style={{ color: "rgb(255 94 166)" }} href='#'>Change</a>
            </div>
        </div>
    )
}

export default ImageTextChange;