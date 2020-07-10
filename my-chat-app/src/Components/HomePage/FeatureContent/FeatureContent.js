import React from 'react';

const featureContent =(props)=>{
    return(
        <div className="content-wrapper">
        <div className="content">
        <h2 className="content-head is-center"> Features of WebChat Application</h2>

        <div className="Appfeatures">
                <div className="contenthead">

                    <h3 className="content-subhead">
                        <i className="fa fa-rocket"></i>
                        Get Started Quickly
                    </h3>
                    <p>
                        Just register yourself with this app and start chating with your loved ones
                    </p>
                </div>
                <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                    <h3 className="content-subhead">
                        <i className="fa fa-sign-in"></i>
                        Firebase Authentication
                    </h3>
                    <p>
                        Firebase Authentication has been implemented in this app 
                    </p>
                </div>
                <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                    <h3 className="content-subhead">
                        <i className="fa fa-th-large"></i>
                        Media 
                    </h3>
                    <p>
                        You can share images with your friends for better experience
                    </p>
                </div>
                <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                    <h3 className="content-subhead">
                        <i className="fa fa-refresh"></i>
                        Updates
                    </h3>
                    <p>
                        We will working with new features for this app for better experience in future
                    </p>
                </div>
            </div>
        </div></div>
    )
}

export default featureContent;