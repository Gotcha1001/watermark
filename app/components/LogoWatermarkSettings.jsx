// export default function LogoWatermarkSettings({ onLogoUpload, logoSize, setLogoSize }) {
//     const handleChange = (e) => {
//         const file = e.target.files?.[0];
//         if (file) onLogoUpload(file);
//     };

//     return (
//         <div className="bg-white shadow-lg rounded-lg">
//             <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-lg">
//                 <h2 className="text-xl font-semibold">Logo Watermark</h2>
//             </div>
//             <div className="p-4 space-y-4">
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Upload Logo</label>
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={handleChange}
//                         className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Size (%): {logoSize}</label>
//                     <input
//                         type="range"
//                         min="5"
//                         max="50"
//                         value={logoSize}
//                         onChange={(e) => setLogoSize(Number(e.target.value))}
//                         className="w-full"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }



// export default function LogoWatermarkSettings({ onLogoUpload, logoSize, setLogoSize, logoBorderRadius, setLogoBorderRadius }) {
//     const handleChange = (e) => {
//         const file = e.target.files?.[0];
//         if (file) onLogoUpload(file);
//     };

//     return (
//         <div className="bg-white shadow-lg rounded-lg">
//             <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-lg">
//                 <h2 className="text-xl font-semibold">Logo Watermark</h2>
//             </div>
//             <div className="p-4 space-y-4">
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Upload Logo</label>
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={handleChange}
//                         className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Size (%): {logoSize}</label>
//                     <input
//                         type="range"
//                         min="5"
//                         max="50"
//                         value={logoSize}
//                         onChange={(e) => setLogoSize(Number(e.target.value))}
//                         className="w-full"
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Border Radius (px): {logoBorderRadius}</label>
//                     <input
//                         type="range"
//                         min="0"
//                         max="50"
//                         value={logoBorderRadius}
//                         onChange={(e) => setLogoBorderRadius(Number(e.target.value))}
//                         className="w-full"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }



export default function LogoWatermarkSettings({ onLogoUpload, logoSize, setLogoSize, logoBorderRadius, setLogoBorderRadius }) {
    const handleChange = (e) => {
        const file = e.target.files?.[0];
        if (file) onLogoUpload(file);
    };

    return (
        <div className="bg-white shadow-lg rounded-lg">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-lg">
                <h2 className="text-xl font-semibold">Logo Watermark</h2>
            </div>
            <div className="p-4 space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Upload Logo</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleChange}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Size (%): {logoSize}</label>
                    <input
                        type="range"
                        min="5"
                        max="50"
                        value={logoSize}
                        onChange={(e) => setLogoSize(Number(e.target.value))}
                        className="w-full"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Border Radius (px): {logoBorderRadius}</label>
                    <input
                        type="range"
                        min="0"
                        max="50"
                        value={logoBorderRadius}
                        onChange={(e) => setLogoBorderRadius(Number(e.target.value))}
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
}