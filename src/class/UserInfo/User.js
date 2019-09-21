import Model from 'src/js-model/model';

import Edu from "./Edu";
import Basic from "./Basic";
let User = new Model({
    basic: Basic,
    edu: [Edu]
});
export default User;