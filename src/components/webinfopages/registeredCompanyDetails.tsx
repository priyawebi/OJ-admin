import Container from 'components/_common/Container'
import ImageSelecter from './_common/imageSelecter';
import TextEditor from './_common/textEditor';
import Gallery from './_common/gallery';

function RegisteredCompanyDetails() {
    return (
        <>
            <Container activeBar={"info"} />
            <div className='main-content'>
                <div className='m-4'>
                    <div className='cards'>
                        <h3 className='cards-header mb-3 mt-3'>Slides</h3>
                        <div className='row align-items-center mt-4'>
                            <ImageSelecter key={(Math.random() + 1).toString(36).substring(7)} view={["slide", "input", "image"]} checkboxText={"Slide 1"} />
                            <ImageSelecter key={(Math.random() + 1).toString(36).substring(7)} view={["slide", "input", "image"]} checkboxText={"Slide 2"} />
                            <ImageSelecter key={(Math.random() + 1).toString(36).substring(7)} view={["slide", "input", "image"]} checkboxText={"Slide 3"} />
                        </div>
                        <h3 className='cards-header mb-3 mt-3'>Description</h3>
                        <TextEditor />
                        <h3 className='cards-header mb-3 mt-3'>Gallery</h3>
                        <Gallery />

                        <h3 className='cards-header mb-3 mt-3'>Slides</h3>
                        <div className='row align-items-center mt-4 col-sm-12'>
                            <ImageSelecter key={(Math.random() + 1).toString(36).substring(7)} view={["image"]} />
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

export default RegisteredCompanyDetails;