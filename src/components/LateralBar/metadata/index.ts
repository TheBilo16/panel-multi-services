import { IconType } from "react-icons/lib";

namespace NSLateralBar {

  export interface Link {
    title : string;
    Icon : IconType;
    link : string;
  }

  export interface ItemProps extends Link {
    isSelected? : boolean;
  }
}

export default NSLateralBar;