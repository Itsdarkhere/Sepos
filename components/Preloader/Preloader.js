import './preloader.css'
import ScrollLock from 'react-scrolllock';
import Modal from 'react-modal'
import React from 'react'

export default function Preloader({loaded}) {

    // This component creates the preloader animation, you pass a prop 'loaded'
    // that is a boolean value that tells if an image has been loaded, if it has been loaded, 
    // the preloader goes away
    

    //I have no idea why this needs to be set
    Modal.setAppElement('#root')

    return (
        <ScrollLock isActive={!loaded}>
            <div id="loader-container">
                <Modal
                    isOpen={!loaded}
                    overlayClassName="loader-container"
                    id="preloader-modal"
                    className="preloader-modal">
                    <div className="loader"></div>
                </Modal>
            </div>
        </ScrollLock>
    )
}