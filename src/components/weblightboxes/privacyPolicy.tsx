import Container from 'components/_common/Container'

import TextEditor from './_common/textEditor';

function PrivacyPolicy() {
    return (
        <>
            <Container activeBar={"lightboxes"} />
            <div className='main-content'>
                <div className='m-4'>
                    <div className='cards'>
                        <h3 className='cards-header mb-3 mt-3'>Privacy Policy</h3>
                        <TextEditor />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy;