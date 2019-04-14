import React from 'react';

class SplashBody extends React.Component {
    render() {
        return(
            <div className='splash-body-container'>
                <div className="page-header">
                    <div className="page-header-hero">
                        <div className="content-block">
                            <div className="dtp-title">
                                <div className="content-block-header">
                                    <div className="page-header-title">Find your table for any occasion</div>
                                </div>
                                <div className="content-block-body">
                                    <div className="dtp-picker">
                                        <form className="dtp-picker-form" action="">
                                            <div className="dtp-picker-selectors-container">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <div className="dtp-picker-search-container">
                                            </div>
                                            <input className="dtp-picker-button" type="submit" value="Let's go"/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-wrapper">

                </div>
            </div>
        )
    }
}   

export default SplashBody;