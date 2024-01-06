function Header() {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <a className="btn btn-ghost text-2xl font-extrabold">pti.</a>
      </div>
      <div className="navbar-center lg:flex gap-1">
        <div className="form-control relative">
          <img
            className="h-6 w-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
            src="search.svg"
            alt="search"
          />
          <input
            type="text"
            placeholder="Search Audiobook"
            className="input input-bordered w-48 md:w-96 lg:w-[500px] bg-white px-12"
          />
        </div>

        <ul className="menu menu-horizontal px-1 border bg-white rounded-xl">
          <li>
            <details className="md:w-44 w-28 text-sm">
              <summary className="uppercase font-bold focus:text-amber-600">
                Menu
              </summary>
              <ul className="p-1 ">
                <li className="hover:text-amber-600">
                  <a>Home</a>
                </li>
                <li className="hover:text-amber-600">
                  <a>Details</a>
                </li>
                <li className="hover:text-amber-600">
                  <a>Category</a>
                </li>
                <li className="hover:text-amber-600">
                  <a>My Favorites</a>
                </li>
                <li className="hover:text-amber-600">
                  <a>Profile</a>
                </li>
                <li className="hover:text-amber-600">
                  <a>Log In/Sign Up</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden md:flex">
        <div className="w-10 rounded-full">
          <img src="avatar.png" alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default Header;
