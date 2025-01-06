import Image from 'next/image'
import Navigationproject from '../../components/navigationproject'
import Navigationabout from '../../components/navigationabout'
export default function Home() {
  return (
    <main className="w-full md:w-full">
  
      <section className="h-screen flex flex-col">
        <div className="flex-1 flex">
        
          <div className="w-1/2 md:w-1/2 bg-[#1E1E1E] flex items-center justify-center">
            <h1 className="text-8xl font-bold text-white">ROY v</h1>
          </div>
          <div className="w-1/2 relative">
            <Image
              src="/mijzelf.png"
              alt="Roy v Heeswijk"
              fill
              className="object-cover"
            />
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-white">HEESWIJK</h1>
          </div>
        </div>
        <Navigationproject/>
      </section>

      <section className="flex h-screen">
        <div className="w-1/3 bg-white relative overflow-hidden">
          <Image
            src="/miezelf.png"
            alt="Project background"
            fill
            className="object-cover"
          />
          <h2 className=" transform origin-right text-7xl font-bold text-white">
            PROJECTS
          </h2>
        </div>
        <div className="w-2/3 bg-[#E6E6E6] p-8 grid grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-black">Sphere using Three.js</h3>
            <Image 
            src='/ikzelf.png' 
            height="10"
            width={50}
            alt=''
            
            />
            </div>
          ))}
        </div>
      
       
      </section>
 <Navigationabout/>
    
      <section className="flex h-screen">
        <div className=" w-2/3 bg-[#4B5EAB] p-8 md:p-12 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-1 md:mb-8 text-white">
            ABOUT ME
          </h2>
          <p className="text-base md:text-lg lg:text-10% text-white">
            Ik ben Roy van Heeswijk en ik ben 19 jaar oud, ik studeer ICT & Media Design bij Fontys in Tilburg.
          </p>
        </div>
        <div className="w-1/3 relative">
          <Image
            src="/ikzelf.png"
            alt="About background"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </main>
  )
}