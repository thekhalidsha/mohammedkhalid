import { Palette } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ColorChanger = () => {
    const [openPalette, setOpenPalette] = useState(false);
    const [selectedColor, setSelectedColor] = useState(getComputedStyle(document.documentElement)
        .getPropertyValue('--color-highlight')
        .trim());

    const handleColorChange = (e) => {
        const newColor = e.target.value;
        setSelectedColor(newColor);
        document.documentElement.style.setProperty('--color-highlight', newColor);
    };
    useEffect(() => {
        const highlight = getComputedStyle(document.documentElement)
            .getPropertyValue('--color-highlight')
            .trim();
        document.documentElement.style.setProperty('--color-highlight', highlight);
    }, []);

    return (
        <div className='max-w-screen-lg mx-auto'>
            <div className={`roundx overflow-hidden ${openPalette ? 'z-50 p-4 h-40 w-64 rounded-[10px] transition-all duration-500 trans' : 'flex justify-center items-center w-10 h-10 rounded-[50%]'} `} onClick={() => setOpenPalette(true)}>
                {
                    !openPalette
                    &&
                    <Palette className='stroke-zinc-200' />
                }
                {
                    openPalette
                    &&
                    <div className={`transition-all duration-500 ${openPalette ? 'scale-100 opacity-100 delay-300' : 'scale-0 opacity-0 delay-0'}`}>
                        <div className={`flex justify-between items-center mb-3`}>
                            <h3 className="text-white font-semibold">Pick a Color</h3>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenPalette(false);
                                }}
                                className="text-sm text-red-400 hover:text-red-600"
                            >
                                Close
                            </button>
                        </div>
                        <input
                            type="color"
                            value={selectedColor}
                            onChange={handleColorChange}
                            className="w-full h-12 border-none rounded cursor-pointer"
                        />
                        <p className="text-white mt-2">Hex: {selectedColor}</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default ColorChanger;
