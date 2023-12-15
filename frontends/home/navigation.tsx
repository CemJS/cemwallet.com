import { Cemjsx, Fn, front } from "cemjs-all"
import AdvantagesBlock from "./display/AdvantagesBlock"
import OurSocialBlock from "./display/OurSocialBlock"
import AboutProduct from "./display/AboutProduct"

export default function () {
  console.log("front.Variable.stateModal", front.Variable.stateModal);
  
  return (
    <home>
      <AdvantagesBlock />
      <OurSocialBlock />
      <AboutProduct />
    </home>
  )
}