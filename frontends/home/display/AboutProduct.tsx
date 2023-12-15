import { Cemjsx, front, Static } from "cemjs-all"
import wallet_icon from '@images/plus/wallet_icon.png'
import blockHomeContent from '@json/home/blockHomeContent'
import blockHomeContentEN from '@json/home/en/blockHomeContentEN'

export default function () {

  const lang = front.Variable.stateLang === "ru" ? blockHomeContent : blockHomeContentEN

  return (
    <div class="about_product">
      <div class="key_pillars block_wrapper">
        <h2 class="socialH2">{lang?.aboutProduct?.title}</h2>
        {lang?.aboutProduct?.content?.map((item: any) => {
          return (
            <div key={item} class="key_pillars_item">
              <p>{item?.title}</p>
              <span>{item?.text}</span>
            </div>
          )
        })}
      </div>
        <img class="background_plus" src={wallet_icon} />
    </div>
  )
}