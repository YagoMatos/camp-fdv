import React from 'react'

import LineDivision from '../../UI/LineDivision/LineDivision';

const header = props => {
  return (
    <div 
      className="relative pt-16 pb-32 flex content-center items-center justify-center"
      style={{minHeight: "75vh"}}>
          <div 
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80')"
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div>
                    <h1 className="text-white font-semibold text-5xl">
                      Acampamento FDV 2020
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                      Uma experiência que mudará o resto da sua vida!
                    </p>
                  </div>
                </div>
              </div>
          </div>
        <LineDivision color="text-gray-300" top="auto" bottom="0" />
    </div>
  )
}

export default header;