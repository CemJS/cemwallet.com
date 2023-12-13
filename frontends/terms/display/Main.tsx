import { Cemjsx, Func, Static, Fn, front } from "cemjs-all"
import TermsEN from "./en/termsEN"
import Terms from "./terms"

export default function () {

  return (
    <div class="terms block_wrapper">
      {front.Variable.stateLang === "ru" ? <Terms /> : <TermsEN />}
    </div>
  )
}