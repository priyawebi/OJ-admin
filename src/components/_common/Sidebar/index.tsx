import React, { useState } from 'react'
import Link from 'next/link';


const Sidebar = (props: any) => {
  return (
    <div>
      <div className={props.sideBarStatus ? "mobile-sidebar" : "sidebar"}
        onClick={() => {
          props?.setSideBarStatus ? props.setSideBarStatus(false) : null
        }}
      >
        <div className='sidebar-style'>
          <div className='menu-head'>
            <span>CUSTOMERS CARE</span>
          </div>

          <Link href='/customers-list' passHref>
            <div className={`dashboard pointer ${props.activeBar == "customers" ? 'active' : ''}`}>
              <span>CUSTOMERS</span>
              <span className={'countIcon'}>10</span>
            </div>
          </Link>
          <Link href='/orders-list' passHref>
            <div className={`dashboard pointer ${props.activeBar == "orders" ? 'active' : ''}`}>
              <span>ORDERS</span>
            </div>
          </Link>
          <Link href='/bookings-list' passHref>
            <div className={`dashboard pointer ${props.activeBar == "bookings" ? 'active' : ''}`}>
              <span>BOOKINGS</span>
            </div>
          </Link>
          <Link href='/requests-list' passHref>
            <div className={`dashboard pointer ${props.activeBar == "requests" ? 'active' : ''}`}>
              <span>REQUESTS</span>
            </div>
          </Link>

          <div className='menu-head'>
            <span>DISCOUNTS</span>
          </div>
          <Link href='/gift-cards-list' passHref>
            <div className={`dashboard pointer ${props.activeBar == "giftcards" ? 'active' : ''}`}>
              <span>GIFT CARDS</span>
            </div>
          </Link>
          <Link href='/discount-codes-list' passHref>
            <div className={`dashboard pointer ${props.activeBar == "discountcodes" ? 'active' : ''}`}>
              <span>DISCOUNT CODES</span>
            </div>
          </Link>
          <div className='menu-head'>
            <span>STOCK</span>
          </div>
          <Link href='/gems-list' passHref>
            <div className={`dashboard pointer ${props.activeBar == "gems" ? 'active' : ''}`}>
              <span>GEMS</span>
            </div>
          </Link>
          <Link href='/jewelleries-list' passHref>
            <div className={`dashboard pointer ${props.activeBar == "jewellery" ? 'active' : ''}`}>
              <span>JEWELLERY</span>
            </div>
          </Link>
          <Link href='/precious-things-list' passHref>
            <div className={`dashboard pointer ${props.activeBar == "preciousThing" ? 'active' : ''}`}>
              <span>PRECIOUS THINGS</span>
            </div>
          </Link>
          <Link href='/creators-list' passHref>
            <div className={`dashboard pointer ${props.activeBar == "creator" ? 'active' : ''}`}>
              <span>CREATORS</span>
            </div>
          </Link>

          <Link href='/laboratories-list' passHref>
            <div className={`dashboard pointer ${props.activeBar == "laboratory" ? 'active' : ''}`}>
              <span>LABORATORIES</span>
            </div>
          </Link>

     <div className='menu-head'>
            <span>DYJ</span>
          </div>
          <Link href='/dyj-list ' passHref>
            <div className={`dashboard pointer ${props.activeBar == "dyj" ? 'active' : ''}`}>
              <span>DYJ </span>
            </div>
          </Link>
          <Link href='/settings-list' passHref>
            <div className={`dashboard pointer ${props.activeBar == "setting" ? 'active' : ''}`}>
              <span>SETTING</span>
            </div>
          </Link>
          
          <div className='menu-head'>
          <Link href='/editable-values-list' passHref>
            <span className={`dashboard pointer ${props.activeBar == "gemshape" ? 'active' : ''}`}>EDITABLE VALUES</span>
            </Link>
          </div>
          <Link href='/all-gem' passHref>
            <div className={`dashboard pointer ${props.activeBar == "gemshape" ? 'active' : ''}`}>
              <span>GemShape</span>
            </div>
          </Link>
          <Link href='/all-family-variety' passHref>
            <div className={`dashboard pointer ${props.activeBar == "gemfamilyvariety" ? 'active' : ''}`}>
              <span>GemFamilyVariety</span>
            </div>
          </Link>
          <Link href='/all-gem-color' passHref>
            <div className={`dashboard pointer ${props.activeBar == "gemcolor" ? 'active' : ''}`}>
              <span>GemColor</span>
            </div>
          </Link>
          <Link href='/all-gem-cut' passHref>
            <div className={`dashboard pointer ${props.activeBar == "gemcut" ? 'active' : ''}`}>
              <span>GemCut</span>
            </div>
          </Link>
          <Link href='/all-gem-type' passHref>
            <div className={`dashboard pointer ${props.activeBar == "gemtype" ? 'active' : ''}`}>
              <span>GemType</span>
            </div>
          </Link>
          <Link href='/all-jewelery-type' passHref>
            <div className={`dashboard pointer ${props.activeBar == "jwellerytype" ? 'active' : ''}`}>
              <span>JwelleryType</span>
            </div>
          </Link>
        <Link href='/all-metal-type' passHref>
            <div className={`dashboard pointer ${props.activeBar == "metaltype" ? 'active' : ''}`}>
              <span>MetalType</span>
            </div>
          </Link>
          <Link href='/all-pt-type' passHref>
            <div className={`dashboard pointer ${props.activeBar == "pttype" ? 'active' : ''}`}>
              <span>PTtype</span>
            </div>
          </Link>
          <Link href='/all-pt-period' passHref>
            <div className={`dashboard pointer ${props.activeBar == "ptperiod" ? 'active' : ''}`}>
              <span>PTPeriod</span>
            </div>
          </Link>
          <Link href='/all-jewelery-style' passHref>
            <div className={`dashboard pointer ${props.activeBar == "jwellerystyle" ? 'active' : ''}`}>
              <span>JwelleryStyle</span>
            </div>
          </Link>
          <Link href='/all-return-policy' passHref>
            <div className={`dashboard pointer ${props.activeBar == "returnpolicy" ? 'active' : ''}`}>
              <span>ReturnPolicy</span>
            </div>
          </Link>
          <Link href='/all-finish-parameter' passHref>
            <div className={`dashboard pointer ${props.activeBar == "finishparameter" ? 'active' : ''}`}>
              <span>FinishParameters</span>
            </div>
          </Link>
          <Link href='/gift-cards' passHref>
            <div className={`dashboard pointer ${props.activeBar == "finishparameter" ? 'active' : ''}`}>
              <span>GiftCrads</span>
            </div>
          </Link>
          <div className='menu-head'>
            <span>BOOK KEEPING</span>
          </div>
          <Link href='/suppliers-list' passHref>
            <div className={`dashboard pointer ${props.activeBar == "suppliers" ? 'active' : ''}`}>
              <span>SUPPLIERS</span>
            </div>
          </Link>
          <Link href='/costs-list' passHref>
            <div className={`dashboard pointer ${props.activeBar == "cost" ? 'active' : ''}`}>
              <span>COSTS</span>
            </div>
          </Link>
          <Link href='/documents-list' passHref>
            <div className={`dashboard pointer ${props.activeBar == "document" ? 'active' : ''}`}>
              <span>DOCUMENTS </span>
            </div>
          </Link>
          <div className='menu-head'>
            <span>WEBSITE</span>
          </div>
          <Link href='/info-pages' passHref>
            <div className={`dashboard pointer ${props.activeBar == "info" ? 'active' : ''}`}>
              <span>INFO PAGES </span>
            </div>
          </Link>
          <Link href='/lightboxes' passHref id="lightboxes">
            <div className={`dashboard pointer ${props.activeBar == "lightboxes" ? 'active' : ''}`}>
              <span>LIGHTBOXES</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar