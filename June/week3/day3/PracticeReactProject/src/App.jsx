import './App.css'
import Card from './comoponents/card'

let obj={
  img:'https://m.media-amazon.com/images/I/51Qsbgwk1xL.AC_SX679.jpg',
  name:'SAMSUNG Galaxy S24 Ultra 5G S9280 - 512GB 12GB RAM AI Smartphone, Factory Unlocked, Global Model, Long Battery Life- (Titanium Violet)',
price:'1,19,999',
desp1:'Brand: Samsung',
desp2:'Operating System: Android 11.0',
desp1:'Brand: Samsung',
desp3:'RAM: 12 GB',
desp4:'CPU Speed: 2.84 GHz',
desp5:'Resolution	1440 x 2960',
desp6:'Storage: 512 GB',
desp7:'Screen Size: 6.8'

}
function App() {

  return (
    <>
    <Card product={obj}/>
        {/* <h1>tyd</h1> */}
    </>
  )
}

export default App