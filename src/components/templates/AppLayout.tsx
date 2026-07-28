import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

interface Props {
  children: React.ReactNode;
  backLink?: {
    to: string;
    label: string;
  };
}

const AppLayout = ({ children, backLink }: Props) => {
  const wishlistCount = useSelector(
    (state: RootState) => state.wishlist.items.length,
  );

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-slate-900 transition hover:text-slate-700"
          >
            GitHub Explorer
          </Link>

          {backLink ? (
            <Link
              to={backLink.to}
              className="text-base font-medium text-slate-600 transition hover:text-slate-900"
            >
              {backLink.label}
            </Link>
          ) : (
            <Link
              to="/wishlist"
              className="text-base font-medium text-slate-700 transition hover:text-slate-900"
            >
              Wishlist ({wishlistCount})
            </Link>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
    </div>
  );
};

export default AppLayout;
