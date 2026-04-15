import React from 'react'

const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='d-flex align-item-center'>
                    <p className='text-primary fs-3 m-3'>School Manager</p>
                    <form className="d-flex h-50" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Header
