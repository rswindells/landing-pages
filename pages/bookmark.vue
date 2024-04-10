<script setup>

const navDialog = ref(null);
const showMenu = ref(false);

function onHamburgerClick() {
    showMenu.value = !showMenu.value;

    const links = navDialog.value.querySelectorAll('a');

    if (showMenu.value) {
        navDialog.value.showModal();


        // use rafr to wait for the dialog to open
        // as safari/firefox don't support allow-discrete
        requestAnimationFrame(() => {
            links.forEach((link) => {
                link.classList.add('_show');
            });
        })

    }
}

function closeNav() {

    const links = navDialog.value.querySelectorAll('a');
    links.forEach((link) => {
        link.classList.remove('_show');
    });

    navDialog.value.close();
    showMenu.value = false;
}

</script>

<template>
    <div class="wrapper">
        <header>
            <img src="~/assets/images/bookmark/logo-bookmark.svg" alt="Bookmark logo" />
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
            <button class="btn-hamburger" :data-state="showMenu ? 'opened' : 'closed'" @click.stop="onHamburgerClick">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                    <path fill="#242A45" fill-rule="evenodd" d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z" />
                </svg>
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

        <dialog ref="navDialog">
            <header>
                <svg class="logo" width="148" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148 25">
                    <g fill="none" fill-rule="evenodd">
                        <path class="logo-text" fill="currentColor" fill-rule="nonzero"
                            d="M37 6.3h5.2a4 4 0 0 1 2 .5c.7.3 1.2.7 1.6 1.2s.5 1.2.5 1.8a3 3 0 0 1-1.8 2.9v.1c.7.3 1.3.7 1.7 1.2.4.5.6 1.2.6 2 0 .7-.2 1.3-.6 1.9a3.8 3.8 0 0 1-1.6 1.3 5 5 0 0 1-2.2.5H37V6.3zm5 5.4c.6 0 1-.1 1.4-.4.3-.3.5-.7.5-1.2 0-.4-.2-.8-.5-1-.3-.4-.8-.5-1.3-.5h-2.6v3.1H42zm.3 5.7a2 2 0 0 0 1.4-.5c.4-.3.6-.7.6-1.2 0-.6-.2-1-.6-1.3-.3-.3-.8-.5-1.5-.5h-2.7v3.5h2.8zm13 2.6a7 7 0 0 1-3.6-1 6.7 6.7 0 0 1-2.5-2.5 7 7 0 0 1-1-3.5 7 7 0 0 1 1-3.5 6.7 6.7 0 0 1 2.5-2.6 7 7 0 0 1 3.5-.9 7 7 0 0 1 3.6 1 6.7 6.7 0 0 1 2.5 2.5 7 7 0 0 1 1 3.5 7 7 0 0 1-1 3.5 6.7 6.7 0 0 1-2.5 2.5 7 7 0 0 1-3.6 1zm0-2.4a4.5 4.5 0 0 0 2.2-.6 4.2 4.2 0 0 0 1.6-1.6c.4-.7.6-1.5.6-2.4 0-1-.2-1.7-.6-2.4A4.2 4.2 0 0 0 57.5 9a4.5 4.5 0 0 0-2.3-.6A4.5 4.5 0 0 0 53 9a4.2 4.2 0 0 0-1.6 1.6c-.4.7-.6 1.5-.6 2.4 0 .9.2 1.7.6 2.4A4.2 4.2 0 0 0 53 17a4.5 4.5 0 0 0 2.2.6zM70.5 20a7 7 0 0 1-3.6-1 6.7 6.7 0 0 1-2.5-2.5 7 7 0 0 1-.9-3.5 7 7 0 0 1 1-3.5A6.7 6.7 0 0 1 67 6.9a7 7 0 0 1 3.6-.9 7 7 0 0 1 3.6 1 6.7 6.7 0 0 1 2.5 2.5 7 7 0 0 1 .9 3.5 7 7 0 0 1-1 3.5 6.7 6.7 0 0 1-2.4 2.5 7 7 0 0 1-3.6 1zm0-2.4a4.5 4.5 0 0 0 2.3-.6 4.2 4.2 0 0 0 1.6-1.6c.4-.7.6-1.5.6-2.4 0-1-.2-1.7-.6-2.4A4.2 4.2 0 0 0 72.9 9a4.5 4.5 0 0 0-2.3-.6 4.5 4.5 0 0 0-2.3.6 4.2 4.2 0 0 0-1.6 1.6 6 6 0 0 0 0 4.8 4.2 4.2 0 0 0 1.7 1.6 4.5 4.5 0 0 0 2.2.6zm9.2-11.3h2.6V12h.1l4.9-5.7h3v.1L85.6 12l5.3 7.5v.2h-3l-4-5.7-1.5 1.7v4h-2.6V6.3zm14-.3H97l3.6 9.4h.1l3.6-9.4h3.2v13.4H105v-6.6l.2-2.2h-.2l-3.4 8.8h-2l-3.3-8.8H96l.2 2.2v6.6h-2.5V6zm20.8 0h2.9l5 13.4h-2.8l-1.1-3.2h-5.1l-1.1 3.2h-2.8l5-13.4zm3.2 7.9-1.2-3.4-.5-1.6h-.1l-.5 1.6-1.2 3.4h3.5zm6.8-7.9h4.8c.9 0 1.7.2 2.3.5a4 4 0 0 1 1.6 1.5c.4.7.6 1.4.6 2.2 0 .9-.3 1.6-.8 2.3a4.6 4.6 0 0 1-2 1.5l3.5 5.2v.2h-2.9l-3.5-5H127v5h-2.5V6zm4.8 6c.6 0 1-.1 1.4-.5.4-.3.5-.8.5-1.3s-.1-1-.5-1.3c-.3-.4-.8-.6-1.4-.6H127V12h2.3zm7.2-6h2.6v5.7h.1l4.9-5.7h3v.1l-4.8 5.6 5.3 7.5v.2h-3l-4-5.7-1.5 1.7v4h-2.6V6z" />
                        <circle class="logo-circle" cx="12.5" cy="12.5" r="12.5" fill="currentColor" />
                        <path class="logo-bookmark" fill="#FFF"
                            d="M9 9v10l3.5-3.4 3.6 3.4V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z" />
                    </g>
                </svg>

                <button @click="closeNav">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15">
                        <path fill="#FFF" fill-rule="evenodd"
                            d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z" />
                    </svg>
                </button>
            </header>
            <nav>
                <ul>
                    <li>
                        <nuxt-link :style="{ '--i': 0 }" to="/">Features</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link :style="{ '--i': 1 }" to="/">Pricing</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link :style="{ '--i': 2 }" to="/">Contact</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link class="btn-login" :style="{ '--i': 3 }" to="/">Login</nuxt-link>
                    </li>
                </ul>
            </nav>
            <footer>
                <ul>
                    <li>
                        <nuxt-link to="/"><img src="~/assets/images/bookmark/icon-twitter.svg"
                                alt="Twitter" /></nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/"><img src="~/assets/images/bookmark/icon-facebook.svg"
                                alt="Facebook" /></nuxt-link>
                    </li>
                </ul>
            </footer>
        </dialog>
    </div>
</template>

<style>
@import '~/assets/css/bookmark/index.css';
@import '~/assets/css/bookmark/header.css';
</style>