import * as React from 'react';
import * as M from "@mui/material";
import { PagComponentProps } from './type';

export default function PaginationComponent({
  total,
  offset,
  setOffset
}: PagComponentProps) {
  const LIMIT = 20;
  const MAX_ITEMS = 0;
  const MAX_LEFT = (MAX_ITEMS - 1) / 2;

  const current = offset ? offset / LIMIT + 1 : 1;
  const pages = Math.ceil(total / LIMIT);
  const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
  const first = Math.min(
    Math.max(current - MAX_LEFT, 1),
    maxFirst
  );

  function onPageChange(page: number) {
    setOffset((page - 1) * LIMIT);
  }
  return (
    <ul className="pagination">
      <div>
        <button
          onClick={() => onPageChange(current - 1)}
          disabled={current === 1}
        >
          Anterior
        </button>
      </div>
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <div key={page}>
            <button
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </div>
        ))}
      <div>
        {}
        <button
          onClick={() => onPageChange(current + 1)}
          disabled={current === pages}
        >
          Próxima
        </button>
      </div>
    </ul>
  );
}