import Container from 'components/_common/Container'

import ImageSelecter from './_common/imageSelecter';
import ImageTextChange from "./_common/imageTextChange";
import ImageIconFile from "./_common/imageIconFile";
import ImageTextFile from "./_common/imageTextFile";

function HomePage() {
    return (
        <>
            <Container activeBar={"info"} />
            <div className='main-content'>
                <div className='m-4'>
                    <div className='cards'>
                        <h3 className='cards-header mb-3 mt-3'>Slides</h3>
                        <div className='row align-items-center mt-4'>
                            <ImageSelecter view={["slide", "input", "image"]} checkboxText={"Slide 1"} />
                            <ImageSelecter view={["slide", "input", "image"]} checkboxText={"Slide 2"} />
                            <ImageSelecter view={["slide", "input", "image"]} checkboxText={"Slide 3"} />
                        </div>
                        <h3 className='cards-header mb-5 mt-5'>Latest additions</h3>

                        {new Array(8).fill(undefined).map((e, i) => {
                            return (
                                <div className='row align-items-center mt-4'>
                                    <div className='col-sm-2 align-items-center'>
                                        Addition {i + 1}
                                    </div>
                                    <div className='col-sm-4 mt-2'>
                                        <ImageTextChange />
                                    </div>
                                    <div className='col-sm-4 mt-2'>
                                        <ImageIconFile />
                                    </div>
                                    {(i == 2 || i == 5) && (
                                        <div className='col-sm-4 offset-sm-2 mt-2'>
                                            <ImageTextFile />
                                        </div>
                                    )}

                                </div>
                            )
                        })}

                        <h3 className='cards-header mb-5 mt-5'>Precious things</h3>

                        {new Array(8).fill(undefined).map((e, i) => {
                            return (
                                <div className='row align-items-center mt-4'>
                                    <div className='col-sm-2 align-items-center'>
                                        Addition {i + 1}
                                    </div>
                                    <div className='col-sm-4 '>
                                        <ImageTextChange />
                                    </div>
                                </div>
                            )
                        })}

                        <h3 className='cards-header mt-5'>Bottom image</h3>

                        <div className='align-items-center mt-4'>
                            <input type='text' className='form-control' placeholder='Link to' />
                            <img className='w-100 mt-2' style={{ objectFit: "cover" }} src={"https://picsum.photos/1000/750"} alt='loginImage' height={"300px"} />
                            <div className='d-flex justify-content-center'>
                                <label className='btn-upload mt-2' htmlFor='file-upload'>Choose File</label>
                                <input type='file' id='file-upload' className='d-none' accept='Image/*' />
                            </div>
                        </div>

                        <div className='footersave'>
                            <div className='footer-1'>
                                <div className='row mt-3 justify-content-end'>
                                    <div className='col-sm-3'>
                                        <button className='btn-save'>Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;