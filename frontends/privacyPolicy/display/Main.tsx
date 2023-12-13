import { Cemjsx, Func, Static, Fn, front } from "cemjs-all"
import privacyPolicy from "@json/privacyPolicy/privacyPolicy"
import privacyPolicyEN from "@json/privacyPolicy/en/privacyPolicyEN"

export default function () {

  const lang = front.Variable.stateLang === "ru" ? privacyPolicy : privacyPolicyEN

  return (
    <div class="privacy block_wrapper">
      <h1>{lang?.mainTitle}</h1>
      {lang?.firstBlock?.content?.map((item: any) => {
        return (
          <div>
            <h3>{item?.title}</h3>
            <p>{item?.text}</p>
          </div>
        )
      })}
      <div class="privacy_table_container">
        <div class="privacy_table_row">
          {lang?.table?.rowFirst?.map((item: any) => {
            return (
              <div>
                {item?.text}
              </div>
            )
          })}
        </div>
        <div class="privacy_table_row">
          {lang?.table?.row?.map((item: any) => {
            return (
              <div>
                {item?.text}
              </div>
            )
          })}
        </div>
      </div>
      {lang?.secondBlock?.content?.map((item: any) => {
        return (
          <div>
            <h3>{item?.title}</h3>
            <p>{item?.text}</p>
            {item?.question &&
              <div>
                <h3>{item?.question?.title}</h3>
                <p>{item?.question?.paragraph1}</p>
                <p>{item?.question?.paragraph2}</p>
                <p>{item?.question?.paragraph3}</p>
                <p>{item?.question?.paragraph4}</p>
              </div>}
          </div>
        )
      })}
      <div class="mb" />
    </div>
  )
}