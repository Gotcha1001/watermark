export default function WatermarkTypeSelector({ watermarkType, setWatermarkType }) {
    return (
        <div className="bg-white shadow-lg rounded-lg">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg text-white p-4">
                <h2 className="text-xl font-semibold">Watermark Type</h2>
            </div>
            <div className="p-4">
                <label className="flex items-center space-x-2 mb-2 text-gray-500">
                    <input
                        type="radio"
                        name="watermark-type"
                        value="text"
                        checked={watermarkType === "text"}
                        onChange={() => setWatermarkType("text")}
                        className="form-radio text-purple-600"
                    />
                    <span>Text</span>
                </label>
                <label className="flex items-center space-x-2 text-gray-500">
                    <input
                        type="radio"
                        name="watermark-type"
                        value="logo"
                        checked={watermarkType === "logo"}
                        onChange={() => setWatermarkType("logo")}
                        className="form-radio text-purple-600"
                    />
                    <span>Logo</span>
                </label>
            </div>
        </div>
    );
}