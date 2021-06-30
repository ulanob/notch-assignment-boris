import React from 'react';
import PropTypes from 'prop-types';

import './sass/styles.scss';

export const Table = ({ ...props }) => {
  return (
    <div className="wrapper">
      <table>
        <thead>
          <tr>
            <th className='col1'>STATUS</th>
            <th className='col2'>DELIVERY DAY</th>
            <th className='col3'>SUPPLIER</th>
            <th className='col4'>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {
            props.displayData.map((vendor, i) => {
              return (
                <tr key={i}>
                  <td className='col1'>
                    <span className={vendor.background}>{vendor.orderBuyerStatus}</span>
                  </td>
                  <td className='col2'>
                    {vendor.deliveryDay ? vendor.deliveryDay : null}
                  </td>
                  <td className='col3'>
                    {vendor.vendorName}
                    {!vendor.isBYOS ? <span className='market'>Market</span> : null}
                    {vendor.isPendingVendorOnboarding ? <span className='first'>1st</span> : null}
                  </td>
                  <td className='col4'>
                    {vendor.total === 0 || !vendor.total ? null : vendor.total}
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
