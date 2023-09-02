const CarList = () => {
    return (
        <>
            <a href="#" class="group relative block my-12">
                <div class="relative h-[350px] sm:h-[450px] transition-all">
                    <img
                        src="https://images.unsplash.com/photo-1603811478698-0b1d6256f79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        alt=""
                        class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                    />

                    <img
                        src="https://images.unsplash.com/photo-1603811478700-7590182b6abb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        alt=""
                        class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                    />
                </div>

                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 class="text-xl font-medium text-white">Toyota Supra MK IV</h3>

                    <p class="mt-1.5 max-w-[40ch] text-xs text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi
                        dicta impedit aperiam ipsum!
                    </p>

                    <span
                        class="mt-3 inline-block rounded-md bg-orange-red px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                    >
                        Learn More
                    </span>
                </div>
            </a>

        </>
    );
};

export default CarList;