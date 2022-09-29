import React from "react";

const Boards = ({ boards, loading }) => {
  return (
    <>
      {loading && <div> loading... </div>}
      <ul>
        {boards.map((board) => (
          <li key={board.id}>{board.title}</li>
        ))}
      </ul>
    </>
  );
};
export default Boards;