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

function showTab(tabId) {
    const tabs = ['bookmarking', 'searching', 'sharing'];
    const tabpanelIds = ['bookmarking-tab', 'searching-tab', 'sharing-tab'];

    const btns = document.querySelectorAll(tabs.map(x => '#' + x).join(', '));
    const panels = document.querySelectorAll(tabpanelIds.map(x => '#' + x).join(', '));


    btns.forEach((btn) => {
        if (btn.id !== tabId) {
            btn.setAttribute('aria-selected', 'false');
            btn.removeAttribute('tabindex');
        } else {
            btn.setAttribute('aria-selected', 'true');
            btn.setAttribute('tabindex', '0');
        }
    });

    panels.forEach((panel) => {
        if (panel.id !== `${tabId}-tab`) {
            panel.classList.add('is-hidden');
        } else {
            panel.classList.remove('is-hidden');

            // focus
            requestAnimationFrame(() => {
                panel.focus();
            });
        }
    });

}

function showFaqPanel(questionNo) {
    const faqBtns = document.querySelectorAll('.accordion-item button');
    const faqPanels = document.querySelectorAll('.accordion-item [role="region"]');
    const btnId = `faq-btn-${questionNo}`;
    const panelId = `faq-${questionNo}`;

    faqBtns.forEach((btn) => {
        if (btn.id !== btnId) {
            btn.setAttribute('aria-expanded', 'false');
            btn.removeAttribute('tabindex');
        } else if (btn.id === btnId && btn.getAttribute('aria-expanded') === 'true') {
            btn.setAttribute('aria-expanded', 'false');
            btn.removeAttribute('tabindex');
        } else {
            btn.setAttribute('aria-expanded', 'true');
            btn.setAttribute('tabindex', '0');
        }
    });

    faqPanels.forEach((panel) => {

        if (panel.id !== panelId || panel.id === panelId && !panel.hasAttribute('hidden')) {
            panel.setAttribute('hidden', '');
        } else {
            panel.removeAttribute('hidden');
        }
    });
}

function handleFormSubmit(e) {
    const formIsValid = validatInput();

    if (formIsValid) {
        console.log('form is valid, post data');
    } else {
        console.log('form is invalid');
    }
}

function validatInput() {

    const input = document.querySelector('.input-wrapper input');
    const inputValue = input.value;
    let valid = false;

    if (!inputValue || inputValue && !validateEmail(inputValue)) {
        console.log('add error class');
        input.parentElement.classList.add('error');
    } else {
        console.log('rmv error');
        input.parentElement.classList.remove('error');

        valid = true;
    }

    return valid;
}

function handleKeydown() {
    // if there's an error, remove it
    const input = document.querySelector('.input-wrapper input');

    if (input.parentElement.classList.contains('error')) {
        input.parentElement.classList.remove('error');
    }
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);

}

/**
 * TODO:
 * - Add a11y
 * - Add tab keys navigation 
 * - Add animations
 */

</script>

<template>
    <div id="bookmark-page" class="wrapper-main">
        <header>
            <img src="~/assets/images/bookmark/logo-bookmark.svg" alt="Bookmark logo" />
            <nav class="desktop">
                <ul class="text-style-5">
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
                        <nuxt-link class="btn __tertiary" to="/">Login</nuxt-link>
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
            <section class="hero contained">
                <div class="hero-img-wrapper">
                    <img width="657" height="466" src="~/assets/images/bookmark/illustration-hero.svg" alt="Hero" />
                </div>

                <div class="hero-text-wrapper">
                    <h1 class="brand-primary-variant">A Simple Bookmark Manager</h1>
                    <p class="neutral-gray">A clean and siple interface to organize your favourite
                        websites.
                        Open a new
                        browser tab and see your
                        sites load instantly. Try it for free.</p>
                    <div class="hero-btn-wrapper">
                        <button class="btn __primary">Get it on Chrome</button>
                        <button class="btn __light">Get it on Firefox</button>
                    </div>
                </div>
            </section>
            <section class="features contained">
                <h2 id="features">Features</h2>
                <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync
                    between your devices so you can access them on the go.</p>

                <div class="tab-container">
                    <div class="tab-btns" role="tablist" aria-labelledby="features">
                        <button class="tab-btn" @click="showTab('bookmarking')" role="tab" aria-selected="true"
                            aria-controls="bookmarking-tab" id="bookmarking">Simple
                            Bookmarking</button>
                        <button class="tab-btn" @click="showTab('searching')" role="tab" aria-selected="false"
                            aria-controls="searching-tab" id="searching" tabindex="-1">Speedy Searching</button>
                        <button class="tab-btn" @click="showTab('sharing')" role="tab" aria-selected="false"
                            aria-controls="sharing-tab" id="sharing" data-deletable="" tabindex="-1">Easy
                            Sharing</button>
                    </div>

                    <div tabindex="0" role="tabpanel" id="bookmarking-tab" aria-labelledby="bookmarking">
                        <div class="feature-img-wrapper">
                            <img src="~/assets/images/bookmark/illustration-features-tab-1.svg"
                                alt="Simple Bookmarking" />
                        </div>
                        <div class="feature-content">
                            <h3 class="text-style-2 __bold">Bookmark in one click</h3>
                            <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you
                                complete
                                control over how you manage your favourite sites.</p>
                            <button class="btn __primary">More Info</button>
                        </div>
                    </div>

                    <div class="is-hidden" tabindex="0" role="tabpanel" id="searching-tab" aria-labelledby="searching">
                        <div class="feature-img-wrapper">
                            <img src="~/assets/images/bookmark/illustration-features-tab-2.svg"
                                alt="Simple Bookmarking" />
                        </div>

                        <div class="feature-content">
                            <h3 class="text-style-2 __bold">Intelligent search</h3>
                            <p>Our powerful search feature will help you find saved sites in no time at all. No need to
                                trawl
                                through all of your bookmarks.</p>
                            <button class="btn __primary">More Info</button>
                        </div>

                    </div>

                    <div class="is-hidden" tabindex="0" role="tabpanel" id="sharing-tab" aria-labelledby="sharing">
                        <div class="feature-img-wrapper">
                            <img src="~/assets/images/bookmark/illustration-features-tab-3.svg"
                                alt="Simple Bookmarking" />
                        </div>

                        <div class="feature-content">
                            <h3 class="text-style-2 __bold">Share your bookmarks</h3>
                            <p>Share your bookmarks and collections with others. Create a shareable link that you can
                                send
                                at
                                the click of a button.</p>
                            <button class="btn __primary">More Info</button>
                        </div>
                    </div>
                </div>
            </section>

            <section class="download contained">
                <h2>Download the extension</h2>
                <p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like
                    us
                    to prioritize.</p>
                <div class="download-card-container">
                    <div class="download-card">
                        <div class="">
                            <img src="~/assets/images/bookmark/logo-chrome.svg" alt="Chrome" />
                            <h3 class="text-style-3 __bold">Add to Chrome</h3>
                            <p class="text-style-5 ">Minimum version 62</p>
                        </div>
                        <button class="btn __primary">Add & Install Extension</button>
                    </div>
                    <div class="download-card">
                        <div class="">
                            <img src="~/assets/images/bookmark/logo-firefox.svg" alt="Chrome" />
                            <h3 class="text-style-3 __bold">Add to Firefox</h3>
                            <p class="text-style-5">Minimum version 62</p>
                        </div>
                        <button class="btn __primary">Add & Install Extension</button>
                    </div>
                    <div class="download-card">
                        <div class="">
                            <img src="~/assets/images/bookmark/logo-opera.svg" alt="Chrome" />
                            <h3 class="text-style-3 __bold">Add to Opera</h3>
                            <p class="text-style-5">Minimum version 62</p>
                        </div>
                        <button class="btn __primary">Add & Install Extension</button>
                    </div>
                </div>
            </section>
            <section class="faq contained">
                <h2>Frequently Asked Questions</h2>
                <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to
                    email us.</p>

                <!-- could use details summary here -->
                <ul class="accordion">
                    <li class="accordion-item">
                        <h3><button @click="showFaqPanel(1)" id="faq-btn-1" type="button" aria-expanded="false"
                                aria-controls="faq-1">
                                <span>
                                    What is a Bookmark?
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                    <path fill="none" stroke="currentColor" stroke-width="3" d="M1 1l8 8 8-8" />
                                </svg>
                            </button>
                        </h3>
                        <div id="faq-1" aria-labelledby="faq-btn-1" role="region" hidden>
                            <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                                tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare
                                mattis.</p>
                        </div>
                    </li>
                    <li class="accordion-item">
                        <h3><button @click="showFaqPanel(2)" id="faq-btn-2" type="button" aria-expanded="false"
                                aria-controls="faq-2">
                                <span class="">
                                    How can I
                                    request a new
                                    browser?
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                    <path fill="none" stroke="currentColor" stroke-width="3" d="M1 1l8 8 8-8" />
                                </svg>
                            </button></h3>
                        <div id="faq-2" aria-labelledby="faq-btn-2" role="region" hidden>
                            <p>Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non
                                ligula.
                                Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue
                                massa,
                                ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
                                ultricies.
                                Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.</p>
                        </div>

                    </li>
                    <li class="accordion-item">
                        <h3><button @click="showFaqPanel(3)" id="faq-btn-3" type="button" aria-expanded="false"
                                aria-controls="faq-3">
                                <span>
                                    Is there a
                                    mobile
                                    app?
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                    <path fill="none" stroke="currentColor" stroke-width="3" d="M1 1l8 8 8-8" />
                                </svg>
                            </button>
                        </h3>
                        <div id="faq-3" aria-labelledby="faq-btn-3" role="region" hidden>
                            <p>Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut
                                condimentum
                                urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus.
                                Sed
                                sollicitudin ex et ultricies bibendum.</p>
                        </div>

                    </li>
                    <li class="accordion-item">
                        <h3><button @click="showFaqPanel(4)" id="faq-btn-4" type="button" aria-expanded="false"
                                aria-controls="faq-4">
                                <span>
                                    What about
                                    other Chromium
                                    browsers?
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                    <path fill="none" stroke="currentColor" stroke-width="3" d="M1 1l8 8 8-8" />
                                </svg>
                            </button></h3>
                        <div id="faq-4" aria-labelledby="faq-btn-4" role="region" hidden>
                            <p>Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui.
                                Aliquam
                                vitae neque eget nisl gravida pellentesque non ut velit.</p>
                        </div>
                    </li>
                </ul>
                <button class="btn __primary">More info</button>
            </section>
            <section class="contact-us">
                <div class="wrapper contained">
                    <p class="text-style-6 __uppercase">35,000+ already joined</p>
                    <h2 class="text-style-2">Stay up-to-date with what we're doing</h2>
                    <form @submit.prevent="handleFormSubmit" novalidate>
                        <div class="input-wrapper">
                            <input @keydown="handleKeydown" @blur="" class="text-style-5" type="email"
                                placeholder="Enter your email address" />
                            <p class="input-error">Whoops, make sure it's an email</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                <g fill="none" fill-rule="evenodd">
                                    <circle cx="10" cy="10" r="10" fill="#FA5959" />
                                    <g fill="#FFF" transform="translate(9 5)">
                                        <rect width="2" height="7" rx="1" />
                                        <rect width="2" height="2" y="8" rx="1" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <button class="btn __tertiary">Contact Us</button>
                    </form>
                </div>
            </section>
        </main>
        <footer class="footer">
            <div class="contained">

                <svg class="logo" width="148" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148 25">
                    <g fill="none" fill-rule="evenodd">
                        <path class="logo-text" fill="white" fill-rule="nonzero"
                            d="M37 6.3h5.2a4 4 0 0 1 2 .5c.7.3 1.2.7 1.6 1.2s.5 1.2.5 1.8a3 3 0 0 1-1.8 2.9v.1c.7.3 1.3.7 1.7 1.2.4.5.6 1.2.6 2 0 .7-.2 1.3-.6 1.9a3.8 3.8 0 0 1-1.6 1.3 5 5 0 0 1-2.2.5H37V6.3zm5 5.4c.6 0 1-.1 1.4-.4.3-.3.5-.7.5-1.2 0-.4-.2-.8-.5-1-.3-.4-.8-.5-1.3-.5h-2.6v3.1H42zm.3 5.7a2 2 0 0 0 1.4-.5c.4-.3.6-.7.6-1.2 0-.6-.2-1-.6-1.3-.3-.3-.8-.5-1.5-.5h-2.7v3.5h2.8zm13 2.6a7 7 0 0 1-3.6-1 6.7 6.7 0 0 1-2.5-2.5 7 7 0 0 1-1-3.5 7 7 0 0 1 1-3.5 6.7 6.7 0 0 1 2.5-2.6 7 7 0 0 1 3.5-.9 7 7 0 0 1 3.6 1 6.7 6.7 0 0 1 2.5 2.5 7 7 0 0 1 1 3.5 7 7 0 0 1-1 3.5 6.7 6.7 0 0 1-2.5 2.5 7 7 0 0 1-3.6 1zm0-2.4a4.5 4.5 0 0 0 2.2-.6 4.2 4.2 0 0 0 1.6-1.6c.4-.7.6-1.5.6-2.4 0-1-.2-1.7-.6-2.4A4.2 4.2 0 0 0 57.5 9a4.5 4.5 0 0 0-2.3-.6A4.5 4.5 0 0 0 53 9a4.2 4.2 0 0 0-1.6 1.6c-.4.7-.6 1.5-.6 2.4 0 .9.2 1.7.6 2.4A4.2 4.2 0 0 0 53 17a4.5 4.5 0 0 0 2.2.6zM70.5 20a7 7 0 0 1-3.6-1 6.7 6.7 0 0 1-2.5-2.5 7 7 0 0 1-.9-3.5 7 7 0 0 1 1-3.5A6.7 6.7 0 0 1 67 6.9a7 7 0 0 1 3.6-.9 7 7 0 0 1 3.6 1 6.7 6.7 0 0 1 2.5 2.5 7 7 0 0 1 .9 3.5 7 7 0 0 1-1 3.5 6.7 6.7 0 0 1-2.4 2.5 7 7 0 0 1-3.6 1zm0-2.4a4.5 4.5 0 0 0 2.3-.6 4.2 4.2 0 0 0 1.6-1.6c.4-.7.6-1.5.6-2.4 0-1-.2-1.7-.6-2.4A4.2 4.2 0 0 0 72.9 9a4.5 4.5 0 0 0-2.3-.6 4.5 4.5 0 0 0-2.3.6 4.2 4.2 0 0 0-1.6 1.6 6 6 0 0 0 0 4.8 4.2 4.2 0 0 0 1.7 1.6 4.5 4.5 0 0 0 2.2.6zm9.2-11.3h2.6V12h.1l4.9-5.7h3v.1L85.6 12l5.3 7.5v.2h-3l-4-5.7-1.5 1.7v4h-2.6V6.3zm14-.3H97l3.6 9.4h.1l3.6-9.4h3.2v13.4H105v-6.6l.2-2.2h-.2l-3.4 8.8h-2l-3.3-8.8H96l.2 2.2v6.6h-2.5V6zm20.8 0h2.9l5 13.4h-2.8l-1.1-3.2h-5.1l-1.1 3.2h-2.8l5-13.4zm3.2 7.9-1.2-3.4-.5-1.6h-.1l-.5 1.6-1.2 3.4h3.5zm6.8-7.9h4.8c.9 0 1.7.2 2.3.5a4 4 0 0 1 1.6 1.5c.4.7.6 1.4.6 2.2 0 .9-.3 1.6-.8 2.3a4.6 4.6 0 0 1-2 1.5l3.5 5.2v.2h-2.9l-3.5-5H127v5h-2.5V6zm4.8 6c.6 0 1-.1 1.4-.5.4-.3.5-.8.5-1.3s-.1-1-.5-1.3c-.3-.4-.8-.6-1.4-.6H127V12h2.3zm7.2-6h2.6v5.7h.1l4.9-5.7h3v.1l-4.8 5.6 5.3 7.5v.2h-3l-4-5.7-1.5 1.7v4h-2.6V6z" />
                        <circle class="logo-circle" cx="12.5" cy="12.5" r="12.5" fill="white" />
                        <path class="logo-bookmark" fill="currentColor"
                            d="M9 9v10l3.5-3.4 3.6 3.4V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z" />
                    </g>
                </svg>
                <nav>
                    <ul class="nav-features-list text-style-6 __light">
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

                <ul class="icons-list">
                    <li>
                        <nuxt-link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <path fill="currentColor" fill-rule="evenodd"
                                    d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                            </svg></nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                                <path fill="currentColor" fill-rule="evenodd"
                                    d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z" />
                            </svg></nuxt-link>
                    </li>
                </ul>

            </div>

        </footer>

        <dialog ref="navDialog">
            <div class="wrapper">
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
            </div>
        </dialog>
    </div>
</template>


<style>
@import url('~/assets/css/bookmark/index.css');
@import url('~/assets/css/bookmark/utilities.css');
@import url("~/assets/css/bookmark/header.css");
@import url("~/assets/css/bookmark/hero.css");
@import url("~/assets/css/bookmark/features.css");
@import url("~/assets/css/bookmark/download.css");
@import url("~/assets/css/bookmark/faq.css");
@import url("~/assets/css/bookmark/contact-us.css");
@import url("~/assets/css/bookmark/footer.css");
</style>