import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <nav className="flex justify-center">
            <ul className="flex space-x-4 sm:space-x-8">
              <li>
                <Link
                  to="/"
                  className="text-lg font-medium text-black hover:text-gray-700 transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-lg font-medium text-black hover:text-gray-700 transition duration-150 ease-in-out"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="text-lg font-medium text-black hover:text-gray-700 transition duration-150 ease-in-out"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white mt-auto">
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} My App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;

