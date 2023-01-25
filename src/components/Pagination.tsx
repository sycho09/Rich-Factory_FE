import React from "react";
import styled from "styled-components";

const PaginationComponent = ({ totalPage, currentPage, setCurrentPage }) => {
  return (
    <Container>
      {totalPage > 1 && (
        <>
          <PaginationButton
            onClick={() => setCurrentPage((old) => Math.max(old - 1, 1))}
            disabled={currentPage === 1}
          >
            &lt;
          </PaginationButton>
          {Array(totalPage)
            .fill()
            .map((_, i) => (
              <PaginationButton
                key={i + 1}
                aria-current={currentPage === i + 1 ? "page" : null}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </PaginationButton>
            ))}
          <PaginationButton
            onClick={() =>
              setCurrentPage((old) => Math.min(old + 1, totalPage))
            }
            disabled={currentPage === totalPage}
          >
            &gt;
          </PaginationButton>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

const PaginationButton = styled.button`
  border: 1px solid;
  border-color: ${(props) => props.theme.palette.grey.second};
  background: #fff;
  padding: 4px 8px;
  margin: 0 2px;
  color: ${(props) => props.theme.palette.grey.second};
  font-size: 1rem;

  &:first-child {
    margin-right: 10px;
    border-radius: 8px;
    border: none;
  }

  &:last-child {
    margin-left: 10px;
    border-radius: 8px;
    border: none;
  }
  &:hover {
    color: ${(props) => props.theme.palette.grey.second};
    background-color: ${(props) => props.theme.palette.grey.main};
    cursor: pointer;
    transform: translateY(-1px);
  }
  &[disabled] {
    display: none;
  }
  &[aria-current] {
    background: ${(props) => props.theme.palette.primary.dark};
    color: #fff;
    cursor: revert;
    transform: revert;
  }
`;

export default PaginationComponent;
