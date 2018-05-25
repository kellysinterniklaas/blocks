import system from "system-components";
import { Group } from "../../atoms";

export default Group.extend`
  > button {
    margin-right: ${({ theme }) => theme.space[3]};

    &:last-child {
      margin-right: 0;
      }
    }
  }
`;
