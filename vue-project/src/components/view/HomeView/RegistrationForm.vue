<template>
   <section @click.self="$emit('CloseRegistration')" class="min-h-screen flex items-center justify-center fixed inset-0 z-50 bg-white/30 backdrop-blur-sm">
<!-- Sign Form -->
    <div v-if="false" class="w-full max-w-md border border-gray-200 rounded-[32px] p-10 shadow-sm">

        <div class="mb-8">
            <p class="text-sm text-gray-500 uppercase tracking-widest">
                Welcome
            </p>

            <h1 class="text-4xl font-bold mt-2">
                Create account
            </h1>

            <p class="text-gray-500 mt-3">
                Start building modern web applications with us.
            </p>
        </div>

        <form class="space-y-5">

            <div class="grid grid-cols-2 gap-4">

                <div>
                    <label class="text-sm text-gray-500 mb-2 block">
                        First name
                    </label>

                    <input
                        type="text"
                        placeholder="John"
                        class="w-full h-12 px-4 rounded-2xl border border-gray-200 bg-gray-50
                        focus:outline-none focus:border-black transition"
                    >
                </div>

                <div>
                    <label class="text-sm text-gray-500 mb-2 block">
                        Last name
                    </label>

                    <input
                        type="text"
                        placeholder="Doe"
                        class="w-full h-12 px-4 rounded-2xl border border-gray-200 bg-gray-50
                        focus:outline-none focus:border-black transition"
                    >
                </div>

            </div>

            <div>
                <label class="text-sm text-gray-500 mb-2 block">
                    Email
                </label>

                <input
                    type="email"
                    placeholder="john@example.com"
                    class="w-full h-12 px-4 rounded-2xl border border-gray-200 bg-gray-50
                    focus:outline-none focus:border-black transition"
                >
            </div>

            <div>
                <label class="text-sm text-gray-500 mb-2 block">
                    Password
                </label>

                <input
                    type="password"
                    placeholder="••••••••••"
                    class="w-full h-12 px-4 rounded-2xl border border-gray-200 bg-gray-50
                    focus:outline-none focus:border-black transition"
                >
            </div>

            <button
                type="submit"
                class="w-full h-12 rounded-full bg-black text-white
                hover:opacity-90 transition"
            >
                Create Account
            </button>

        </form>

        <p class="text-center text-gray-500 mt-8">

            Already have an account?

            <a href="#" class="text-black font-semibold">
                Login
            </a>

        </p>
       
    </div>

<!-- Login Form -->
    <div v-else class="w-full max-w-md border border-gray-200 rounded-[32px] p-10 shadow-sm">

        <div class="mb-8">

            <p class="uppercase text-sm tracking-widest text-gray-500">
                Welcome back
            </p>

            <h1 class="text-4xl font-bold mt-2">
                Login
            </h1>

            <p class="text-gray-500 mt-3">
                Continue where you left off.
            </p>

        </div>

        <form class="space-y-5">

            <div>

                <label class="text-sm text-gray-500 mb-2 block">
                    Email
                </label>

                <input
                    type="email"
                    class="w-full h-12 px-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-black transition"
                    placeholder="john@example.com"
                >

            </div>

            <div>

                <label class="text-sm text-gray-500 mb-2 block">
                    Password
                </label>

                <input
                    type="password"
                    class="w-full h-12 px-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-black transition"
                    placeholder="••••••••••"
                >

            </div>

            <button
                type="submit"
                class="w-full h-12 rounded-full bg-black text-white hover:opacity-90 transition"
            >
                Login
            </button>

        </form>

    </div>
</section>


</template>

<script setup>



</script>