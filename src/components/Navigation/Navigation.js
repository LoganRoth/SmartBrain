import React from 'react'

const Navigation = ({ onRouteChange, isSignedIn }) => {
    return (
        isSignedIn
            ? (
                <div className="nav-div">
                <nav>
                    <input
                        className='ph3 pv2 input-reset b--transparent bg-transparent grow pointer underline f3 dib'
                        type='submit'
                        value='Sign Out'
                        onClick={() => onRouteChange('signin')}
                    />
                </nav>
                </div>
            )
            : (
                <div className="nav-div">
                    <nav>
                        <input
                            className='ph3 pv2 input-reset b--transparent bg-transparent grow pointer underline f3 dib'
                            type='submit'
                            value='Sign In'
                            onClick={() => onRouteChange('signin')}
                        />
                    </nav>
                    <nav>
                        <input
                            className='ph3 pv2 input-reset b--transparent bg-transparent grow pointer underline f3 dib'
                            type='submit'
                            value='Register'
                            onClick={() => onRouteChange('register')}
                        />
                    </nav>
                </div>
            )
    )
}

export default Navigation