import Sidebar from '../Sidebar'
import Header from '../Header'
import { useState } from 'react';
function Container({ activeBar }: any) {
    const [sideBarStatus, setSideBarStatus] = useState(false)
    return (
        <div className="App">
            <div>
                <Header sideBarStatus={sideBarStatus} setSideBarStatus={setSideBarStatus} />
            </div>
            <div>
                <Sidebar sideBarStatus={sideBarStatus} setSideBarStatus={setSideBarStatus} activeBar={activeBar} />
            </div>
        </div>
    )
}

export default Container;