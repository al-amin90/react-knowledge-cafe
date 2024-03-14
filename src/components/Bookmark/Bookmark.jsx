import React from 'react';
import PropTypes from 'prop-types';

Bookmark.propTypes = {
    bookmark: PropTypes.array
};

function Bookmark({ bookmark }) {
    const {title} = bookmark;
    return (
        <div className='bg-white text-[#111111 rounded-lg p-5 mt-4'>
            <h3 className="font-semibold text-base">{title}</h3>
        </div>
    );
}

export default Bookmark;