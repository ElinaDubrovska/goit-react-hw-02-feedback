import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #e7e7e7;
  border: none;
  border-radius: 4px;
  color: black;
  padding: 12px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledListItem = styled.li`
  margin-bottom: 12px;
  &: last-child {
    margin-bottom: 0;
  }
`;