import Container from 'components/_common/Container'

import TextEditor from './_common/textEditor';
import ImageSelecter from './_common/imageSelecter';

function ReturnPolicies() {
    return (
        <>
            <Container activeBar={"lightboxes"} />
            <div className='main-content'>
                <div className='m-4'>
                    <div className='cards'>
                        <h3 className='cards-header mb-3 mt-3'>Return Policies for DYJ</h3>
                        <TextEditor />
                        <h3 className='cards-header mb-3 mt-3'>Return Policies for other items</h3>
                        <TextEditor />
                        <h3 className='cards-header mb-3 mt-3'>Image for menu</h3>
                        <div className='row align-items-center mt-4'>
                            <ImageSelecter key={(Math.random() + 1).toString(36).substring(7)} view={["image"]} checkboxText={"Slide 1"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReturnPolicies;