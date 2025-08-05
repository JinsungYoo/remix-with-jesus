import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="w-full p-4 bg-white shadow-md flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-gray-800">
        With Jesus
      </Link>
      <nav className="flex gap-4">
        <Link to="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
        <Link to="/join" className="text-blue-600 hover:underline">
          Signin
        </Link>
      </nav>
    </header>
  );
}
