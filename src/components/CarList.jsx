import { Link } from "react-router-dom";

const CarList = () => {
    return (
        <>
            <Link to="/car/supra-mk4" className="group relative block my-12">
                <div class="relative h-[350px] sm:h-[450px] transition-all">
                    <img
                        src="https://images.unsplash.com/photo-1627008119197-6889fd74266a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
                        alt=""
                        class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                    />

                    <img
                        src="https://images.unsplash.com/photo-1627008119193-58dc96b6c1a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
                        alt=""
                        class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                    />
                </div>

                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 class="text-xl font-medium text-white">Toyota Supra MK IV</h3>

                    <p class="mt-1.5 max-w-[40ch] text-xs text-white">
                        1997 - JAPAN
                    </p>
                    <p class="mt-1.5 max-w-[40ch] text-xs text-white">
                        Registered in Karachi
                    </p>

                    <span
                        class="mt-3 inline-block rounded-md bg-orange-red px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                    >
                        Learn More
                    </span>
                </div>
            </Link>

            <Link to="/car/nissan-gtr" className="group relative block my-12">
                <div class="relative h-[350px] sm:h-[450px] transition-all">
                    <img
                        src="https://images.unsplash.com/photo-1613922348434-469dd2adffc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80"
                        alt=""
                        class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                    />

                    <img
                        src="https://images.unsplash.com/photo-1613922430003-a0403df3bab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80"
                        alt=""
                        class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                    />
                </div>

                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 class="text-xl font-medium text-white">Nissan R35 GT-R</h3>

                    <p class="mt-1.5 max-w-[40ch] text-xs text-white">
                        2017 - JAPAN
                    </p>
                    <p class="mt-1.5 max-w-[40ch] text-xs text-white">
                        Registered in Islamabad
                    </p>

                    <span
                        class="mt-3 inline-block rounded-md bg-orange-red px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                    >
                        Learn More
                    </span>
                </div>
            </Link>

            <Link to="/car/ford-mustang" className="group relative block my-12">
                <div class="relative h-[350px] sm:h-[450px] transition-all">
                    <img
                        src="https://images.unsplash.com/photo-1591293835940-934a7c4f2d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                        alt=""
                        class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                    />

                    <img
                        src="https://images.unsplash.com/photo-1621966543249-1435c89f618d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                        alt=""
                        class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                    />
                </div>

                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 class="text-xl font-medium text-white">Ford Mustang</h3>

                    <p class="mt-1.5 max-w-[40ch] text-xs text-white">
                        1968 - AMERICA
                    </p>
                    <p class="mt-1.5 max-w-[40ch] text-xs text-white">
                        Registered in Lahore
                    </p>

                    <span
                        class="mt-3 inline-block rounded-md bg-orange-red px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                    >
                        Learn More
                    </span>
                </div>
            </Link>
        </>
    );
};

export default CarList;