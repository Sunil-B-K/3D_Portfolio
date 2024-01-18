import React from 'react'
import MyBook from './Components/MyBook'
import BgTexture from "./assets/brown-wooden-flooring.jpg";
const BgTextureStyle = {
  backgroundImage: `url(${BgTexture})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  width: "100%",
};

function App() {
  return (
    <div style={BgTextureStyle}   className='w-full h-full justify-center items-center flex'>
      <MyBook/>
    </div>
  )
}

export default App
