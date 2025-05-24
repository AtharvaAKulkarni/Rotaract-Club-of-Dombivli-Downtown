export const  Navbar = () => {
    return (
        <nav class="backdrop-blur-md bg-blue-600/60 text-gray-100 shadow-md border-b border-blue-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">

                    <div class="flex-shrink-0 flex items-center gap-3">
                        <img src="/logo.png" alt="Club Logo" class="h-10 w-10 object-contain" />
                        <span class="text-lg font-bold text-white">Rotaract Club of Dombivli Downtown</span>
                    </div>

                    <div class="hidden md:flex space-x-8 items-center">
                        <a href="/" class="hover:text-white transition">Home</a>
                        <a href="/about" class="hover:text-white transition">About</a>
                        <a href="#projects" class="hover:text-white transition">Projects</a>
                        <a href="#contact" class="hover:text-white transition">Contact</a>
                    </div>

                    <div class="hidden md:block">
                        <a href="#join" class="bg-white text-blue-700 font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-100 transition">
                            Join Rotaract
                        </a>
                    </div>

                    <div class="md:hidden">
                    </div>
                </div>
            </div>
        </nav>

    )
}
