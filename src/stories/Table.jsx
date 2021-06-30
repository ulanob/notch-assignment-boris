import React from 'react';
import PropTypes from 'prop-types';

import './sass/styles.scss';

export const Table = ({ ...props }) => {
  return (
    <div className="wrapper">
      <table>
        <thead>
          <tr>
            <th
              className='col1'
              onClick={() => props.sortDisplayData('orderBuyerStatus')
              }>STATUS</th>
            <th
              className='col2'
              onClick={() => props.sortDisplayData('deliveryDay')
              }>DELIVERY DAY</th>
            <th
              className='col3'
              onClick={() => props.sortDisplayData('vendorName')
              }>SUPPLIER</th>
            <th
              className='col4'
              onClick={() => props.sortDisplayData('total')
              }>TOTAL</th>
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
                    {vendor.formattedDeliveryDay ? vendor.formattedDeliveryDay : null}
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
