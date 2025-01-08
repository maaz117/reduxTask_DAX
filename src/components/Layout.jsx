import { Outlet, Link } from "react-router";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white p-4">
            <nav>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="hover:underline">Home</Link></li>
                    <li> <Link to="/about" className="hover:underline">About</Link></li>
                    <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                </ul>
            </nav>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8">
            <Outlet />
        </main>
        <footer className="bg-gray-200 text-center p-4">
            <p>&copy; 2025 My App. All rights reserved.</p>
        </footer>
    </div>
  );
}

export default Layout;