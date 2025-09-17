"use client";

import { WatchlistTHead } from "./watchlist-thead";
import { WatchlistTBody } from "./watchlist-tbody";

export default function WatchlistTable() {

  return (
    <div className="w-full mt-16">
      <div className="overflow-hidden">
        <WatchlistTHead />
        <WatchlistTBody />
      </div>
    </div>
  );
}
