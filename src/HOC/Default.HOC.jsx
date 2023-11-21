import React from 'react'
import { Routes,Route} from 'react-router-dom'
import DefaultLayouts from '../Layouts/Default.Layout'


const DefaultHOC = ({component:Component,...rest }) => {
    return (
        <>
            <Routes>               
                <Route
                    {...rest} element={<DefaultLayouts>
                        <Component/>
                    </DefaultLayouts> }
                />
            </Routes>
        </>);
}
export default DefaultHOC