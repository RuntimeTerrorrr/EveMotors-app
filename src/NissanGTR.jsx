import ModelViewer from "./components/ModelViewer.jsx";
let Url= '/nissan_skyline_r34_gt-r/scene.gltf'

const GTR = () => {
    const fixedScale = [1.5, 1.5, 1.5]; // Adjust the scale as needed
    const fixedTarget = [2.5, 1.8, 1.5]; // Adjust the target as needed
    return (
        <>
            <div className=" bg-zinc-100">
            <ModelViewer modelUrl={Url} fixedScale={fixedScale} fixedTarget={fixedTarget} />

            </div>

            <div className="w-11/12 m-auto flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Make</dt>
                        <dd className="text-gray-700 sm:col-span-2">Nissan</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Model</dt>
                        <dd className="text-gray-700 sm:col-span-2">r34 GT-R</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Year</dt>
                        <dd className="text-gray-700 sm:col-span-2">2002</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">TopSpeed</dt>
                        <dd className="text-gray-700 sm:col-span-2">186 MPH</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Power</dt>
                        <dd className="text-gray-700 sm:col-span-2">450 HP</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Torque</dt>
                        <dd className="text-gray-700 sm:col-span-2">398 lb-ft</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Color</dt>
                        <dd className="text-gray-700 sm:col-span-2">Bayside Blue</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Registered In</dt>
                        <dd className="text-gray-700 sm:col-span-2">Islamabad</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Assembled In</dt>
                        <dd className="text-gray-700 sm:col-span-2">Japan</dd>
                    </div>
                </dl>
                <button className="my-8 w-full text-center inline-block shrink-0 rounded-md border border-orange-red bg-orange-red px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-red focus:outline-none focus:ring active:text-orange-red">
                    Talk to Dealer
                </button>
            </div>
        </>
    );
};

export default GTR;