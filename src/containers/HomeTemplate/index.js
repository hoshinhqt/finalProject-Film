import React from 'react';
import { Route } from 'react-router-dom';
import FooterHome from '../../components/FooterHome';
import NavBarHome from '../../components/NavBarHome';


function LayoutHome(props) {
    console.log('ahihi2222');
    return (
        <div>
            <NavBarHome/>
            {props.children}
            {/* <FooterHome /> */}
        </div>
    )
}
export default function HomeTemplate({ Component, ...props }) {
    console.log(props);
    return (
        <Route render={(componentProps) => (
            <LayoutHome>
                <Component {...componentProps} />
            </LayoutHome>
        )} />
    )
}
