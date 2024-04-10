<script setup>

const showMenu = ref(false);

function onHamburgerClick() {
    showMenu.value = !showMenu.value;
}

</script>

<template>
    <div>
        <header>
            <!-- Logo -->
            <div>Logo</div>
            <nav class="desktop">
                <ul>
                    <li>
                        <nuxt-link to="/">Features</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/">Pricing</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/">Contact</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link class="btn-primary btn-red" to="/">Login</nuxt-link>
                    </li>
                </ul>
            </nav>
            <button class="btn-hamburger flex flex-col gap-1  h-6 w-6" :data-state="showMenu ? 'opened' : 'closed'"
                @click.stop="onHamburgerClick">
                <span
                    class="block h-1 w-6 bg-brand-primary-blue transition-transform ease-in-out duration-300 origin-top-left"
                    :class="{ 'rotate-45 translate-x-[4px]': showMenu }"></span>
                <span class="block h-1 w-6 bg-brand-primary-blue transition-transform ease-in-out duration-300"
                    :class="{ 'opacity-0': showMenu }"></span>
                <span
                    class="block h-1 w-6 bg-brand-primary-blue transition-transform ease-in-out duration-300 origin-bottom-left"
                    :class="{ 'rotate-[-45deg] translate-x-[4px]': showMenu }"></span>
            </button>
        </header>
        <main>
            <section id="hero">
                <h1>A Simple Bookmark Manager</h1>
                <p>A clean and siple interface to organize your favourite websites. Open a new browser tab and see your
                    sites load instantly. Try it for free.</p>
                <div>
                    <button>Get it on Chrome</button>
                    <button>Get it on Firefox</button>
                </div>
            </section>
            <section id="features">
                <h2>Features</h2>
                <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync
                    between your devices so you can access them on the go.</p>

                <div>
                    <button>Simple Bookmarking</button>
                    <button>Speedy Searching</button>
                    <button>Easy Sharing</button>
                </div>

                <div>
                    <div>
                        <img src="" alt="Simple Bookmarking" />
                        <h3>Simple Bookmarking</h3>
                        <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you
                            complete
                            control over how you manage your favourite sites.</p>
                    </div>
                    <div>
                        <img src="" alt="Speedy Searching" />
                        <h3>Speedy Searching</h3>
                        <p>Our powerful search feature will help you find saved sites in no time at all. No need to
                            trawl
                            through all of your bookmarks.</p>
                    </div>
                    <div>
                        <img src="" alt="Easy Sharing" />
                        <h3>Easy Sharing</h3>
                        <p>Share your bookmarks and collections with others. Create a shareable link that you can send
                            at
                            the click of a button.</p>
                    </div>
                </div>
            </section>

            <section id="download">
                <h2>Download the extension</h2>
                <p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like
                    us
                    to prioritize.</p>
                <div class="download__card">
                    <div>
                        <img src="" alt="Chrome" />
                        <h3>Add to Chrome</h3>
                        <p>Minimum version 62</p>
                    </div>
                    <button>Add & Install Extension</button>
                </div>
            </section>
            <section>
                <h2>Frequently Asked Questions</h2>
                <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to
                    email us.</p>

                <div>
                    <div>
                        <h3>What is a Bookmark?</h3>
                        <p>A bookmark is a saved link to a website that you can easily access later. Instead of having
                            to
                            remember the web address, you can simply click on the bookmark to navigate to the site.</p>
                    </div>
                    <div>
                        <h3>How can I request a new browser?</h3>
                        <p>The more browsers we support, the more people we can help. Please send us an email and let us
                            know which browser you'd like us to prioritize.</p>
                    </div>
                    <div>
                        <h3>Is there a mobile app?</h3>
                        <p>Unfortunately not yet. However, we are working on a mobile app. Please subscribe to our
                            newsletter to be one of the first to know when it's ready.</p>
                    </div>
                    <div>
                        <h3>What about other Chromium browsers?</h3>
                        <p>At the moment, we only support Chrome. However, we are working on adding more browsers in the
                            future.</p>
                    </div>
                </div>
                <button>More info</button>
            </section>
            <section id="contact_us">
                <p>35,000+ already joined</p>
                <h2>Stay up-to-date with what we're doing</h2>
                <form>
                    <input type="email" placeholder="Enter your email address" />
                    <button>Contact Us</button>
                </form>
            </section>
        </main>
        <footer>
            <div>
                <div>
                    <img src="" alt="Logo" />
                    <nav>
                        <ul>
                            <li>
                                <nuxt-link to="/">Features</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">Pricing</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">Contact</nuxt-link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <ul>
                        <li>
                            <nuxt-link to="/">Twitter</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Facebook</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Instagram</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <p>© 2024 Bookmark. All rights reserved</p>
            </div>
        </footer>
    </div>
</template>

<style>
@import '~/assets/css/bookmark/header.css';

:root {
    --primary-blue: hsl(231, 69%, 60%);
    --primary-red: hsl(0, 94%, 66%);
    --neutral-gray: hsl(229, 8%, 60%);
    --neutral-dark-blue: hsl(229, 31%, 21%);
}

body {
    font-family: 'Rubik', sans-serif;
    color: var(--neutral-dark-blue);
    font-size: 18px;
}



.btn-primary {
    background-color: var(--primary-blue);
    border: 3px solid var(--primary-blue);
    color: white;
    padding: 1rem 2rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        box-shadow: 0px 8px 10px -6px hsla(231, 69%, 60%, 0.3);
    }

    &.btn-red {
        background-color: var(--primary-red);
        border-color: var(--primary-red);

        &:hover {
            background-color: hsl(0, 94%, 70%);
            background-color: white;
            border-color: var(--primary-red);
            color: var(--primary-red);
        }
    }

}
</style>