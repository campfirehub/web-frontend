<template>
  <div
    class="max-w-[50rem] flex flex-col mx-auto size-full h-[calc(100vh-70px)]"
  >
    <!-- ========== MAIN CONTENT ========== -->
    <main id="content">
      <div class="text-center py-10 px-4 sm:px-6 lg:px-8">
        <h1 class="block text-2xl font-bold text-white sm:text-4xl">
          Non trovato
        </h1>
        <p class="mt-3 text-lg text-gray-300 dark:text-neutral-400">
          Il contenuto che stai cercando non è stato trovato
        </p>
        <div
          class="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3"
        >
          <a
            class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
            href="/"
          >
            <svg
              class="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Home
          </a>
        </div>
      </div>
    </main>
    <!-- ========== END MAIN CONTENT ========== -->
  </div>
</template>
