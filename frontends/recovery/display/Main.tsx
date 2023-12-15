import { Cemjsx, Func, Static, Fn, front } from "cemjs-all"
import recovery from "@json/recovery/recovery"
import recoveryEN from "@json/recovery/en//recoveryEN"

export default function () {

  const lang = front.Variable.stateLang === "ru" ? recovery : recoveryEN

  return (
    <div>
      <div class="recovery block_wrapper">
        <h1>
          {lang?.mainTitle}
        </h1>
        <p>{lang?.paragraphFirst?.title}</p>
        <p>{lang?.paragraphFirst?.paragraph}</p>
        <p><b>{lang?.paragraphFirst?.paragraph2}</b></p>
        {lang?.paragraphFirst?.content?.map((item: any) => {
          return (
            <div class="recovery_marginB">
              <div class="roadmap_point">
              </div>
              {item.text}
            </div>
          )
        })}
        <h3>{lang?.StepOne?.title}</h3>
        <p>{lang?.StepOne?.paragraph}</p>

        <h3>{lang?.StepTwo?.title}</h3>
        <p>{lang?.StepTwo?.paragraph}</p>

        <h3>{lang?.StepThree?.title}</h3>
        <p>{lang?.StepThree?.paragraph}</p>

        <h3>{lang?.StepFour?.title}</h3>
        <p>{lang?.StepFour?.paragraph}</p>

        <h3>{lang?.StepFive?.title}</h3>
        <p>{lang?.StepFive?.paragraph}</p>
      </div>
    </div>
  )
}