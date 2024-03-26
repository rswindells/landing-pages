<template>
    <footer class="bg-brand-primary-blue text-brand-neutral-white">
        <div class="container container-px mx-auto py-16">
            <div class="flex flex-col items-center gap-y-8 md:grid md:grid-cols-[auto] md:items-stretch">

                <easybank-svg-logo class="lg:row-[1/2] lg:col-[1/2] " />
                <div class="flex gap-x-4 md:row-[3/4] md:col-[1/2] lg:row-[2/3] lg:col-[1/2]">
                    <a href="#" class="hover:text-brand-primary-green"><easybank-icon-facebook /></a>
                    <a href="#" class="hover:text-brand-primary-green"><easybank-icon-youtube /></a>
                    <a href="#" class="hover:text-brand-primary-green"><easybank-icon-twitter /></a>
                    <a href="#" class="hover:text-brand-primary-green"><easybank-icon-pinterest /></a>
                    <a href="#" class="hover:text-brand-primary-green"><easybank-icon-instagram /></a>
                </div>

                <nav
                    class="flex flex-col items-center gap-2 md:row-[2/3] md:col-[1/2] lg:row-[1/3] lg:col-[2/4] md:grid grid-cols-[repeat(2,1fr)] grid-rows-[repeat(3,fr)] self-stretch content-between">
                    <a href="#" class="hover:text-brand-primary-green">About us</a>
                    <a href="#" class="hover:text-brand-primary-green">Contact</a>
                    <a href="#" class="hover:text-brand-primary-green">Blog</a>
                    <a href="#" class="hover:text-brand-primary-green">Careers</a>
                    <a href="#" class="hover:text-brand-primary-green">Support</a>
                    <a href="#" class="hover:text-brand-primary-green">Privacy Policy</a>
                </nav>

                <EasybankButtonRequestInvite
                    class="justify-self-end md:row-[2/3] md:col-[4/5] md:self-end lg:row-[1/2] lg:col-[4/5] " />
                <p class="text-brand-neutral-blue md:row-[3/4] md:col-[4/5] lg:row-[2/3] lg:col-[4/5] justify-self-end">
                    &copy; Easybank. All
                    Rights Reserved</p>
            </div>
        </div>
    </footer>

</template>