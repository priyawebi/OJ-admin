import { Col, Form, Row } from 'react-bootstrap';
import Container from 'components/_common/Container'

function bookingDetails() {
    return (
        <>
            <Container activeBar={"bookings"} />
            <div className='main-content'>
                <div className='m-4'>
                    <Row>
                        <Col xs={12}>
                            <div className='cards'>
                                <div className='row align-items-center '>
                                    <h3 className='cards-header my-3'>Personal details</h3>

                                    <div className='col-sm-3'>
                                        <p className='label-text'>Name</p>
                                    </div>
                                    <div className='col-sm-4'>
                                        <p className='label-text'>John Johnson</p>
                                    </div>
                                </div>
                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Phone</p>
                                    </div>
                                    <div className='col-sm-4'>
                                        <p className='label-text'>1341234234</p>
                                    </div>
                                </div>

                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>E-mail</p>
                                    </div>
                                    <div className='col-sm-4'>
                                        <p className='label-text'>JohnJohnson@gmail.com</p>
                                    </div>
                                </div>

                                <div className='row align-items-center '>
                                    <h3 className='cards-header my-3'>Interested</h3>
                                    <small className='mb-3'>
                                        Designer jewellry, Investor choise{' '}
                                    </small>

                                    <div className='col-sm-3'>
                                        <p className='label-text'>Colour</p>
                                    </div>
                                    <div className='col-sm-4'>
                                        <p className='label-text'>Blue, Light effect</p>
                                    </div>
                                </div>
                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Variety</p>
                                    </div>
                                    <div className='col-sm-4'>
                                        <p className='label-text'>Afganite</p>
                                    </div>
                                </div>

                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Jewellery purpose</p>
                                    </div>
                                    <div className='col-sm-4'>
                                        <p className='label-text'>Ring, Bracelet, Earring</p>
                                    </div>
                                </div>

                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Shape (dimensions)</p>
                                    </div>
                                    <div className='col-sm-4'>
                                        <p className='label-text'>
                                            Heart Shape (6), Briolette (10), Cabochon (4)
                                        </p>
                                    </div>
                                </div>

                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Price</p>
                                    </div>
                                    <div className='col-sm-4'>
                                        <p className='label-text'>1000-3000 Eur</p>
                                    </div>
                                </div>
                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Carat</p>
                                    </div>
                                    <div className='col-sm-4'>
                                        <p className='label-text'>1-5</p>
                                    </div>
                                </div>

                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Date</p>
                                    </div>
                                    <div className='col-sm-5'>
                                        <Form.Control
                                            className='h-40'
                                            type='text'
                                            placeholder='Enter'
                                        />
                                    </div>
                                    <div className='col'>Prefered date: 2018 05 29 14:00</div>
                                </div>
                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Location</p>
                                    </div>
                                    <div className='col-sm-5'>
                                        <Form.Control
                                            className='h-40'
                                            type='text'
                                            placeholder='Enter'
                                        />
                                    </div>
                                </div>
                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Status</p>
                                    </div>
                                    <div className='col-sm-5'>
                                        <div className='form-check form-check-inline'>
                                            <input
                                                className='form-check-input'
                                                type='radio'
                                                name='inlineRadioOptions'
                                                id='inlineRadio1'
                                                value='option1'
                                            />
                                            <label
                                                className='form-check-label'
                                                htmlFor='inlineRadio1'
                                            >
                                                Open
                                            </label>
                                        </div>
                                        <div className='form-check form-check-inline'>
                                            <input
                                                className='form-check-input'
                                                type='radio'
                                                name='inlineRadioOptions'
                                                id='inlineRadio2'
                                                value='option2'
                                            />
                                            <label
                                                className='form-check-label'
                                                htmlFor='inlineRadio2'
                                            >
                                                Closed
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='row  mt-5'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Notes</p>
                                    </div>
                                    <div className='col-sm-9'>
                                        <textarea
                                            name=''
                                            id=''
                                            className='custom-textareas'
                                            rows={7}
                                        ></textarea>
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
                        </Col>
                    </Row>
                    <div id='container'>
                        <div id='midivfixed'></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default bookingDetails;