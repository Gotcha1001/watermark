export default function TextWatermarkSettings({
    watermarkText,
    setWatermarkText,
    textSize,
    setTextSize,
    textColor,
    setTextColor,
}) {
    return (
        <div className="bg-white shadow-lg rounded-lg">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-lg">
                <h2 className="text-xl font-semibold">Text Watermark</h2>
            </div>
            <div className="p-4 space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Text</label>
                    <input
                        type="text"
                        value={watermarkText}
                        onChange={(e) => setWatermarkText(e.target.value)}
                        className="mt-1 block w-full rounded-md border-2 border-indigo-500 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 text-gray-700"
                    />

                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Size: {textSize}</label>
                    <input
                        type="range"
                        min="10"
                        max="100"
                        value={textSize}
                        onChange={(e) => setTextSize(Number(e.target.value))}
                        className="w-full"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Color</label>

                    <div className="mt-1 w-full h-10 rounded-md overflow-hidden border border-gray-300 ">
                        <input
                            type="color"
                            value={textColor}
                            onChange={(e) => setTextColor(e.target.value)}
                            className="w-full h-full border-none p-0"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}