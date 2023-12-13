import { Cemjsx, Static, Fn, front } from "cemjs-all"
import blockHomeContent from '@json/home/blockHomeContent'
import blockHomeContentEN from '@json/home/en/blockHomeContentEN'
import wallet_banner from '@images/plus/wallet_banner.png'

export default function () {

  const lang = front.Variable.stateLang === "ru" ? blockHomeContent : blockHomeContentEN

  return (
    <div class="advantages_block" ref="home">
      <div class="preview_block block_wrapper">
        <div class="preview_block_main">
          <h1>{front.Variable.stateLang == "ru" ? Static?.text : Static?.textEn}</h1>
          <div>
            <img src={wallet_banner} />
          </div>
        </div>
        <p>
          <b>CEM Wallet </b>
          {front.Variable.stateLang == "ru" ? "- мультивалютный крипто-кошелёк." :
            "multicurrency crypto wallet."}
        </p>
      </div>
      <div class="our_values_block block_wrapper">
        <h2>{lang?.title}</h2>
        <div class="our_values_list">
          {lang?.advantages?.content?.map((item: any) => {
            return (
              <div class="our_values_item">
                {item?.icon &&
                  <img
                    class="imgFirsBlock"
                    src={item?.icon}
                  />
                }
                <span>{item?.info}</span>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}