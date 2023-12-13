import React from 'react'
import { Routes,Route} from 'react-router-dom'
import DefaultLayouts from '../Layouts/Default.Layout'
import MovieLayout from '../Layouts/Movie.Layout'


const MovieHOC = ({component:Component,...rest }) => {
    return (
        <>
            <Routes>               
                <Route
                    {...rest} element={<MovieLayout>
                        <Component/>
                    </MovieLayout> }
                />
            </Routes>
        </>);
}
export default MovieHOC