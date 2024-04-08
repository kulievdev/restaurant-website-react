import React, { useEffect, useRef } from "react";
import "./Modal.css";

const Modal = ({ show, children, onClose }) => {
    const modalRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (show) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [show, onClose]);

    return (
        <>
            {show ? (
                <div className="modal-overlay">
                    <div ref={modalRef} className="modal">
                        {children}
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default Modal;
