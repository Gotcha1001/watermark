// export default function WatermarkTypeSelector({ watermarkType, setWatermarkType }) {
//     return (
//         <div className="bg-white shadow-lg rounded-lg">
//             <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg text-white p-4">
//                 <h2 className="text-xl font-semibold">Watermark Type</h2>
//             </div>
//             <div className="p-4">
//                 <label className="flex items-center space-x-2 mb-2 text-gray-500">
//                     <input
//                         type="radio"
//                         name="watermark-type"
//                         value="text"
//                         checked={watermarkType === "text"}
//                         onChange={() => setWatermarkType("text")}
//                         className="form-radio text-purple-600"
//                     />
//                     <span>Text</span>
//                 </label>
//                 <label className="flex items-center space-x-2 text-gray-500">
//                     <input
//                         type="radio"
//                         name="watermark-type"
//                         value="logo"
//                         checked={watermarkType === "logo"}
//                         onChange={() => setWatermarkType("logo")}
//                         className="form-radio text-purple-600"
//                     />
//                     <span>Logo</span>
//                 </label>
//             </div>
//         </div>
//     );
// }



export default function WatermarkTypeSelector({ watermarkType, setWatermarkType }) {
    return (
        <div className="bg-white shadow-lg rounded-lg">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-lg">
                <h2 className="text-xl font-semibold">Watermark Type</h2>
            </div>
            <div className="p-4">
                <select
                    value={watermarkType}
                    onChange={(e) => setWatermarkType(e.target.value)}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
                >
                    <option value="none">None</option>
                    <option value="text">Text</option>
                    <option value="logo">Logo</option>
                </select>
            </div>
        </div>
    );
}