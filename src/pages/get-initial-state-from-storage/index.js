import * as React from "react";
import { withPrePage } from "../../hocs";
import GetInitialStateFromStorage from "../../pages_/get-initial-state-from-storage";

export default withPrePage(GetInitialStateFromStorage);

export { Head } from "../../pages-components/common/head";
