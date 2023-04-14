import React, { useState } from "react";
import MyForm from "../form/form";
import Result from "../result/result";
import Header from "../header";
import Loader from "./loader";

function Preloader(props) {
    const [showPreloader, setShowPreloader] = useState(true);

    setTimeout(() => {
        setShowPreloader(false);
    }, 3000);

    return (
        <div>
            {showPreloader ? (
                <div><Loader /></div>
            ) : (
                <div>
                    {/* THE FIRST PROP WILL DISPLAY THE HEADER AND FORM AFTER THE PRELOADER */}
                    {props.myForm ? <div><Header /><MyForm /></div> : null}

                    {/* THIS WILL DISPLAY THE RESULT AFTER THE PRELOADER */}
                    {props.myResult ? <Result /> : null}
                </div>
            )}
        </div>
    );
}

export default Preloader;
