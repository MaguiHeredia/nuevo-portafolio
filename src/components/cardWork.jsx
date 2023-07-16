import React from 'react'
import 'tailwindcss/tailwind.css';

export default function CardWork({img, text, title, empresa}){
    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex mt-9  shadow-lg shadow-cyan-500/50">
        <div className="h-48 lg:h-auto lg:w-72 flex-none bg-no-repeat bg-center bg-contain rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-[#2d3c33]" style={{ backgroundImage: `url(${img})`}} title="Woman holding a mug">
</div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-2">
            <div className="text-[#847A73] font-bold text-2xl mb-2">{title}</div>
            <p className="text-[#746b64] text-base">{text}</p>
            <a
                    href={empresa}
                    target="_BLANCK"
                    key="title"
                  >
                    <button className="w-52 bg-[#2d3c33] rounded text-white py-1.5 mt-4">
                      Visitar empresa
                    </button>
                  </a>
          </div>
        </div>
      </div>
    )
}