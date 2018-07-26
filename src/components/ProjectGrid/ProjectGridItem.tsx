import styled from 'react-emotion';
import { darken } from 'polished';

const ProjectGridItem = styled('div')`
  background-color: red;
  width: 100%;
  height: 100px;
  &:hover {
    cursor: pointer;
    background-color: ${darken(0.2, 'red')};
  }
`;

export default ProjectGridItem;
