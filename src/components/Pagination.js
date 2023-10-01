import React from 'react'
import './Pagination.css'

const Pagination = ({ totalPosts, perPage, setCurrentPage, currentPage }) => {
  let pages = []

  for (let i = 1; i <= Math.ceil(totalPosts / perPage); i++){
    pages.push(i)
  }

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1)
  }
  
  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    <div className='pagination'>
        <button onClick={handlePrevBtn}
         disabled={currentPage == pages[0] ? true : false}
         className='pagination-buttons'>
            Prev
         </button>
        {pages.map((page, index) => {
            return(
                <button key={index}
                 onClick={() => setCurrentPage(page)}
                 className={page === currentPage ? "active" : ""}>
                    {page}
                </button>
            )
        })}
        <button onClick={handleNextBtn} 
        disabled={currentPage == pages[pages.length - 1] ? true : false}
        className='pagination-buttons'>
            Next
        </button>
    </div>
  )
}

export default Pagination