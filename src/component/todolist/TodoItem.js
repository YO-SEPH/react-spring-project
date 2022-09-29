//  각 할 일에 대한 정보를 렌더링해주는 컴포넌트
//  좌측에 있는 원을 누르면 할 일의 완료 여부를 toggle 할 수 있다.
// 할 일이 완료됐을 땐 좌측에 체크가 나타나고 텍스트의 색상이 연해집니다.
//  그리고, 마우스를 올리면 휴지통 아이콘이 나타나고 이를 누르면 항목이 삭제됩니다.

import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../todolist/TodoContext';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  opacity: 0;
  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;
// TodoItemBlock에 대한 설명
// 여기서 사용된 기능은 Component Selector 라는 기능
//  이 스타일은 TodoItemBlock 위에 커서가 있을 때, 
// Remove 컴포넌트를 보여주라는 의미를 가지고 있다.

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id }); 
  //  **토글이란 (toggle)
  // 하나의 설정 값으로부터 다른 값으로 전환하는 것이다. 
  // 토글이라는 용어는 오직 두 가지 상태 밖에 없는 상황에서 
  // 스위치를 한번 누르면 한 값이 되고, 다시 한번 누르면 다른 값으로 변하는 것을 의미한다.
  const onRemove = () => dispatch({ type: 'REMOVE', id }); //삭제
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);