import React from 'react'
import './footer.css'

// 2 ways adding style 
// 1.by variable 
// 2.by importing css file

export const Footer = () => {

    //giving min length to todos a better solution 

    // let footerStyle={
    //     position:"relative",
    //     top:"100vh",
    //     width:"100%"
    // }
    return (
        // <footer className="bg-dark text-light py-3" style={footerStyle}>
        <footer className="bg-dark text-light py-3">
            <p className="text-center">
                 Copyright &copy; Anoopkumar Shukla
            </p>
           
        </footer>
    )
}
