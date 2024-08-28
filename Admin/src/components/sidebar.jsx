import React from 'react'
import '../styles/sidebar.css'
import { assets } from '../assets/admin_assets/assets'
import {NavLink} from 'react-router-dom'

const sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/add' className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>Add Food Item</p>
            </NavLink>
            <NavLink to='/add-category' className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>Add Food Category</p>
            </NavLink>
            <NavLink to='/list' className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>List Items</p>
            </NavLink>
            <NavLink to='/get-categories' className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>List Categories</p>
            </NavLink>
            <NavLink to='/orders' className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default sidebar