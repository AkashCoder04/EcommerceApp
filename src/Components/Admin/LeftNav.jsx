import React from 'react'
import {Link} from 'react-router-dom'
export default function LeftNav() {
  return (
    <>
      <div className="list-group">
  <Link to="/admin" className="list-group-item list-group-item-action"> Home <i className="bi bi-house float-right"></i> </Link>
  <Link to="/admin-profile" className="list-group-item list-group-item-action"> User <i className="bi bi-person-circle float-right"></i> </Link>
  <Link to="/admin-maincategory" className="list-group-item list-group-item-action">MainCategory <i className="bi bi-bag-check float-right"></i></Link>
  <Link to="/admin-subcategory" className="list-group-item list-group-item-action">SubCategory<i className="bi bi-bag-check float-right"></i></Link>
  <Link to="/admin-brand" className="list-group-item list-group-item-action">Brands <i className="bi bi-bag-check float-right"></i></Link>
  <Link to="/admin-product" className="list-group-item list-group-item-action">Products <i className="bi bi-bag-check float-right"></i></Link>
  <Link to="/admin-checkout" className="list-group-item list-group-item-action">Checkout <i className="bi bi-card-checklist float-right"></i></Link>
  <Link to="/admin-contact" className="list-group-item list-group-item-action">Contact <i className="bi bi-person-lines-fill float-right"></i></Link>
  <Link to="/admin-newslatters" className="list-group-item list-group-item-action">Newslatters <i className="bi bi-envelope float-right"></i></Link>
</div>
    </>
  )
}
