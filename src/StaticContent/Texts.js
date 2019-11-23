import { TextPortuguese } from "./Languages";
import { getLanguage, USD } from "../Storage/Session";

function returnTexts(){
    switch (getLanguage()) {
        case USD:
            return null;
        default:
            return TextPortuguese;
    }
}
var Texts = returnTexts();

export { Texts };
export default Texts;