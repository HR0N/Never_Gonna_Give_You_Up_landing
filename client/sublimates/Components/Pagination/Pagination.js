import React from "react";


const Pagination = ({postsPerPage, totalPosts, paginate}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <>
            <nav>
                <ul className={`pagination`} style={{'display':'flex', 'listStyle':'none'}}>
                    {pageNumbers.map(number => (
                        <li key={number} className={`page-item`} style={{'padding':'4px 6px', 'border':'1px solid lightgrey'}}>
                            <div onClick={() => paginate(number)} className={`page-link`}>
                                {number}
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Pagination;