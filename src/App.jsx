import { Canvas } from '@react-three/fiber'
import "./style.css"
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './components/MacContainer'

const App = () => {
  return (
  <div className='w-full h-screen '>
    <nav className='navbar line flex gap-7 text-white absolute top-3 left-1/2 -translate-x-1/2'>
    {
      ["iPhone","iPad","mac","services"].map((e)=>(
        <a key={e} href="" className="font-[500] text-md capitalize">{e}</a>
      ))
    }

    </nav>
    <div className='flex items-center flex-col absolute top-40 left-1/2 -translate-x-1/2 text-white'>
    <h3 className='text-6xl tracking-tighter font-[700]'>macbook pro.</h3>
    <h5 className='mt-1'>Oh so pro!</h5>
    <p className='text-center w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellat voluptates inventore.</p>

    </div>
    <Canvas camera={{fov:14, position:[1,-10,200]}}>
    {/* <OrbitControls/> */}
    <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"]}/>

    <ScrollControls>
    <MacContainer/>
    </ScrollControls>


  </Canvas>
  </div>
  
)
}

export default App
