import React from 'react';

function Navbar() {
  return (
    <div>
      <div className="navbar font-playfair text-xl bg-red-200">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img src="/images/growing-plant.png" alt="Logo" className="h-8 mr-2" />
            Floral Symphony
          </a>
        </div>
        <div className="flex-none flex items-center gap-4"> {/* فاصله استاندارد بین آیکون‌ها */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <img
                  src="/images/shopping-bag.png"
                  alt="shopping-bag"
                  className="h-5 w-5"
                />
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src="/images/xy.png"
                  alt="profileDefault"
                  className="h-5 w-5"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
