import { useEffect } from "react"
import { useState } from "react"

function App() {
  const themes = ['black', 'orange', 'purple', 'green', 'blue']
  const themeColors = {
    black: 'bg-black',
    orange: 'bg-orange-500',
    purple: 'bg-purple-500',
    green: 'bg-green-500',
    blue: 'bg-blue-500',
  };
  const localTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : () => {
    localStorage.setItem('theme', themes[0])
    return themes[0]
  }
  const [Theme, setTheme] = useState(localTheme)
  useEffect(() => {
    localStorage.setItem('theme', Theme)
  }, [Theme])
  return (
    <div className={`min-h-screen w-full flex overflow-scroll flex-col space-y-8  md:px-28 sm:px-12 px-4  pt-12 theme-${Theme}`}>
      <div className="flex flex-col space-y-6">
        <h3 className="text-primary font-bold text-xl">Select theme:</h3>
        <div className="flex space-x-3">
          {
            themes.map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={`w-[25px] h-[25px] ${t===Theme&&'shadow-md shadow-secondary'} rounded-full ${themeColors[t]}`}
              />
            ))
          }
        </div>
      </div>
      <div className={`flex md:flex-row w-full h-full flex-col justify-between md:space-x-4 gap-y-6`}>
        <img src="/tw.jpeg" alt="tw" className="w-[100%] aspect-video  border-primary border-2 shadow-lg shadow-secondary rounded-md" />
        <div className="md:w-[50%] w-full flex flex-col justify-center space-y-4">
          <h2 className="font-bold text-2xl text-primary">Woodside Creek Paradise</h2>
          <p className="text-secondary">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
          <div className="flex space-x-6 ">
            <button className="bg-primary text-white shadow shadow-secondary rounded-md px-3 py-1  hover:bg-secondary">
              Buy now
            </button>
            <button className=" text-primary border border-secondary shadow shadow-secondary rounded-md px-3 py-1 hover:bg-primary hover:text-white">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
