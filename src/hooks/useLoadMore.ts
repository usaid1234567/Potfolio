"use client";

import { useMemo, useState } from "react";

export function useLoadMore<T>(items: T[], pageSize = 6) {
  const [visibleCount, setVisibleCount] = useState(pageSize);

  const visibleItems = useMemo(() => items.slice(0, visibleCount), [items, visibleCount]);
  const hasMore = visibleCount < items.length;

  function loadMore() {
    setVisibleCount((count) => count + pageSize);
  }

  function reset() {
    setVisibleCount(pageSize);
  }

  return { visibleItems, hasMore, loadMore, reset };
}
