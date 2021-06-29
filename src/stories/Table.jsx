import React from 'react';
import PropTypes from 'prop-types';

import './table.css';

export const Table = ({ ...props }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>STATUS</th>
          <th>DELIVERY DAY</th>
          <th>SUPPLIER</th>
          <th>TOTAL</th>
        </tr>
      </thead>
      <tbody>
        {
          props.displayData.map((vendor, i) => {
            return (
              <tr key={i}>
                <td>{vendor.orderBuyerStatus}</td>
                <td>{vendor.deliveryDay ? vendor.deliveryDay : null}</td>
                <td>
                  {vendor.vendorName}
                  {vendor.isPendingVendorOnboarding ? <span>1st</span> : null}
                  {!vendor.isBYOS ?
                    <span>Market</span> : null}</td>
                <td>
                  {vendor.total === 0 || !vendor.total ?
                    null : vendor.total
                  }</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
