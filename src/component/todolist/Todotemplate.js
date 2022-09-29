import React from 'react';
import styled from 'styled-components';

function Todotemplate({ children }) {

    const TodoTemplateBlock = styled.div`
    width: 500px;
    height: 538px;
    left: 400px;

    position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 255);

    margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

    margin-top: 10rem;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    `;
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>
      
    
}
export default Todotemplate;