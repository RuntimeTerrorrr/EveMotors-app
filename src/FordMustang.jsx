import ModelViewer from "./components/ModelViewer.jsx";
let Url= '/toyota_supra_a80_1993/scene.gltf'

const Mustang = () => {
    return (
        <>
            <div className="h-screen w-full">
            <ModelViewer modelUrl={Url}/>

            </div>

            <div className="w-11/12 m-auto flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Make</dt>
                        <dd className="text-gray-700 sm:col-span-2">Ford</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Model</dt>
                        <dd className="text-gray-700 sm:col-span-2">Mustang</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Year</dt>
                        <dd className="text-gray-700 sm:col-span-2">1968</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">TopSpeed</dt>
                        <dd className="text-gray-700 sm:col-span-2">130 MPH</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Power</dt>
                        <dd className="text-gray-700 sm:col-span-2">250 HP</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Torque</dt>
                        <dd className="text-gray-700 sm:col-span-2">305 lb-ft</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Color</dt>
                        <dd className="text-gray-700 sm:col-span-2">Mighty Grey</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Registered In</dt>
                        <dd className="text-gray-700 sm:col-span-2">Lahore</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Assembled In</dt>
                        <dd className="text-gray-700 sm:col-span-2">United States Of America</dd>
                    </div>
                </dl>
                <button className="my-8 w-full text-center inline-block shrink-0 rounded-md border border-orange-red bg-orange-red px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-red focus:outline-none focus:ring active:text-orange-red">
                    Talk to Dealer
                </button>
            </div>
        </>
    );
};

export default Mustang;