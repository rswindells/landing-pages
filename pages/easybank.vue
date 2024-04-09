<script setup>
const { showBanner, showBannerUI, dismissBanner } = useBanner();

useHead({
    title: "Easybank Landing Page",
})

onMounted(() => {
    showBanner();
});

</script>
<template>
    <main class="w-full h-full overflow-y-auto">
        <easybank-header class="fixed w-full z-10 " @show-banner="showBanner" />
        <easybank-banner v-model="showBannerUI" @close-banner="dismissBanner" />

        <section class="relative bg-white pt-[0px] lg:pt-[76px] container mx-auto
        ">
            <div class="flex flex-col lg:flex-row items-center">
                <div class="
                    order-2 lg:order-1
                    container-px
                    flex flex-col justify-center items-center lg:items-start gap-4
                    relative min-h-[24rem]
                    text-center lg:text-start
                ">
                    <easybank-heading level="1" text="Next generation digital banking" class="text-balance" />

                    <p class="text-brand-base text-brand-gray text-balance ">Take your financial life
                        online.
                        Your
                        Easybank account
                        will be
                        a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <easybank-button-request-invite class="mt-4" @click="showBanner" />
                </div>

                <div class="
                    order-1 lg:order-2
                    w-full
                    relative min-h-[25rem] lg:min-h-[600px]

                    before:bg-no-repeat 
                    before:absolute before:left-0 before:bottom-0 
                    before:h-full before:w-full before:bg-cover 
                    before:bg-[bottom_70%_right] sm:before:bg-[bottom_32%_right] md:before:bg-[bottom_28%_right]
                    before:bg-[url(~/assets/images/easybank/bg-intro-mobile.svg)]
                    
                    lg:before:bg-[url(~/assets/images/easybank/bg-intro-desktop.svg)] 
                    lg:before:w-[140%] 
                    lg:before:bg-[top_75%_left] xl:before:bg-[top_50%_left] 
                    lg:before:bg-[length:160%]
                ">
                </div>
            </div>
            <img src="~/assets/images/easybank/image-mockups.png"
                alt="4 smartphones showing Easybank app with different screens of financial data"
                class="
                    absolute top-0 left-1/2 -translate-x-1/2 translate-y-[10%]
                    w-[325px] sm:w-[340px] md:w-[350px] 
                    lg:block lg:translate-x-0 lg:translate-y-0 lg:left-[unset]
                    lg:right-[-18rem] lg:w-[60vw] lg:max-w-[700px] xl:right-[-7.5rem] xl:w-[57.5vw] xl:max-w-[656px] 2xl:left-[55%]" />

        </section>

        <section class="bg-brand-neutral-light-blue">
            <div class="container container-px mx-auto py-16">
                <div class="flex flex-col items-center gap-8">
                    <div class="space-y-[14px] text-center md:text-start md:max-w-[70ch] md:self-start">
                        <easybank-heading level="2" text="Why choose Easybank?" />

                        <p class="text-brand-gray text-lg ">We leverage Open Banking to turn your bank
                            account into
                            your financial hub. <br class="hidden lg:inline">Control your finances like never
                            before.</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

                        <easybank-feature title="Online Banking"
                            description="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.">
                            <template #icon>
                                <img src="~/assets/images/easybank/icon-online.svg" alt="icon-online" />
                            </template>
                        </easybank-feature>

                        <easybank-feature title="Simple Budgeting"
                            description="See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.">
                            <template #icon>
                                <img src="~/assets/images/easybank/icon-budgeting.svg" alt="icon-budgeting" />
                            </template>
                        </easybank-feature>

                        <easybank-feature title="Fast Onboarding"
                            description="We don't do branches. Open your account in minutes online and start taking control of your finances right away.">
                            <template #icon>
                                <img src="~/assets/images/easybank/icon-onboarding.svg" alt="icon-onboarding" />
                            </template>
                        </easybank-feature>

                        <easybank-feature title="Open API"
                            description="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.">
                            <template #icon>
                                <img src="~/assets/images/easybank/icon-api.svg" alt="icon-api" />
                            </template>
                        </easybank-feature>

                    </div>
                </div>
            </div>
        </section>

        <section class="bg-brand-neutral-light-gray">
            <div class="container container-px mx-auto py-16">
                <div class="flex flex-col items-center gap-8 md:gap-10">
                    <easybank-heading level="2" text="Latest Articles" class="lg:self-start" />
                    <div
                        class="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] grid-rows-[repeat(auto-fit,minmax(0,1fr))] gap-6 md:gap-[1.875rem] lg:gap-8">

                        <easybank-article-card author="By Claire Robinson"
                            title="Receive money in any currency with no fees"
                            description="The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...">
                            <template #article-image>
                                <img src="~/assets/images/easybank/image-currency.jpg" alt="image-currency"
                                    class="w-full h-full object-cover" />
                            </template>
                        </easybank-article-card>


                        <easybank-article-card author="By Wilson Hutton"
                            title="Treat yourself without worrying about money"
                            description="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...">
                            <template #article-image>
                                <img src="~/assets/images/easybank/image-restaurant.jpg" alt="image-restaurant"
                                    class="w-full h-full object-cover" />
                            </template>
                        </easybank-article-card>

                        <easybank-article-card author="By Wilson Hutton" title="Take your Easybank card wherever you go"
                            description="We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...">
                            <template #article-image>
                                <img src="~/assets/images/easybank/image-plane.jpg" alt="image-plane"
                                    class="w-full h-full object-cover" />
                            </template>
                        </easybank-article-card>

                        <easybank-article-card author="By Claire Robinson"
                            title="Our invite-only Beta accounts are now live!"
                            description="After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...">
                            <template #article-image>
                                <img src="~/assets/images/easybank/image-confetti.jpg" alt="image-confetti"
                                    class="w-full h-full object-cover" />
                            </template>
                        </easybank-article-card>
                    </div>
                </div>
            </div>
        </section>
        <easybank-footer />
    </main>

</template>

<style>
#__nuxt {
    overscroll-behavior: none;
}
</style>