import React from 'react';

import './sass/styles.scss';

export const Form = ({ ...props }) => {
  return (
    <div className="formContainer">
      <div className="wrapper ">
        <form action="select" onChange={(e) => {
          props.handleChange(e);
          props.filterVendors(e.target.value)
        }}>
          <label htmlFor="formVendorList">Supplier</label>
          <select className="wrapper" name="formVendorList" id="formVendorList">
            <option value="all">All Suppliers</option>
            {
              props.entries.map((entry) => {
                return (
                  <option key={entry.id}>{entry.vendorName}</option>
                )
              })
            }
          </select>
          <button onClick={(e) => props.reset(e)}>Reset Filters</button>
        </form>
      </div>
    </div>
  )
}