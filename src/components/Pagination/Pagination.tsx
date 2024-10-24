import usePagination, { UsePaginationProps } from "@mui/material/usePagination";
import { memo } from "react";

import "./Pagination.scss";

type TPaginationProps = {
  page: number;
  count: number;
  onChange: UsePaginationProps["onChange"];
};

function Pagination({ page, count, onChange }: TPaginationProps) {
  const { items } = usePagination({
    page,
    count,
    onChange,
  });

  return (
    <nav className="pagination">
      <ul className="pagination__list">
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button
                className={`pagination__btn ${selected ? "pagination__btn_selected" : ""}`}
                type="button"
                style={{
                  fontWeight: selected ? "bold" : "normal",
                }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button className="pagination__btn-nav" type="button" {...item}>
                {type}
              </button>
            );
          }

          return (
            <li className="pagination__item" key={index}>
              {children}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default memo(Pagination);
