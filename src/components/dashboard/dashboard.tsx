import Sidebar from 'components/_common/Sidebar'
import Header from 'components/_common/Header'
import React from 'react'

const Dashboard = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Sidebar activeBar='home' />
            </div>
        </div>
    )
}

export default Dashboard