import ReactPaginate from 'react-paginate';

export const Pagination = ({totalPage, setActivePage, activePage}) => {
  return (
    <>
    <ReactPaginate
     className='pagination justify-content-center my-5 gap-2'
     forcePage={activePage === 1 ? 0 : activePage - 1}
     pageCount={totalPage}
     previousLabel="Prev"
     nextLabel="next"
     previousLinkClassName='btn btn-primary'
     nextLinkClassName='btn btn-primary'
     pageClassName='page-item'
     pageLinkClassName='page-link'
     activeClassName='active'
     onPageChange={(data) => {
      setActivePage(data.selected + 1)
     }}
     />
    </>
  )
}
