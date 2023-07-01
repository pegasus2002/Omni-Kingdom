import { Card } from "@/components/card";
import { Divider } from "@/components/divider";
import { Carousel } from "@/components/carousel";
import { Typography } from "@/components/typography";

import { heroCard, weaponCard, authorCard, journeyList } from "@/@fake_db/home";
import "./style.css";

const { Title, Paragraph } = Typography();
const { HeroCard, WeaponCard, AuthorCard } = Card();

export default function Home() {
    return (
        <main>
            {/* <!-- Primary Page Layout
            ================================================== --> */}

            <div className="section" id="home">

                {/* <!-- Hero Slider Block
                ================================================== --> */}

                <div className="section big-75-height over-hide">
                    <div className="parallax" style={{ backgroundImage: 'url(assets/img/banner-bg.jpg)', backgroundPosition: '50% -50px' }}></div>
                    <div className="grey-fade-over"></div>
                    <div className="hero-bottom-wrap text-center z-bigger">
                        <div className="container-fluid parallax-fade-top" style={{ top: 125 }}>
                            <div className="row">
                                <div className="col-md-12">
                                    <h4>Omni Kingdom</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Call To Action Block
                ================================================== --> */}
                <Divider />

                <div className="home-overview">
                    <div className="section padding-top-bottom-smaller" id="scroll-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="call-box-3 text-center text-md-center">
                                        <Title className="mt-[70px] pb-4" align="center">Now we've come Omni Kingdom</Title>
                                        <Paragraph className="w-[90%] m-auto" align="center">The Great War had been raging for years. Five tribes had been locked in battle, each determined to prove their superiority. The Aketi, the strongest and most experienced fighters, had been the first to start the war. For weeks, the five tribes had fought in a brutal war, each using every tactic they could think of. But in the end, it was the Aketi who emerged as the victors. The other tribes were forced to accept their rule, and the Great War was finally over. Though the war had ended, the legacy of it remained. The scars of battle could still be seen throughout the land, as a reminder of the sacrifices made by all the tribes. But the war had also brought the five tribes together, and in the end, that was the greatest victory of all.</Paragraph>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Separator Line
                    ================================================== --> */}

                    <div className="section pt-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="home-separator"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Services Block
                    ================================================== --> */}

                    <div className="section py-[80px] over-hide">
                        <div className="container">
                            <Title className="pb-5" align="center">Choose your hero</Title>

                            <div className="row">
                                {
                                    heroCard.map((item, index) => (
                                        <div key={index} className="col-xs-12 col-md-6 col-lg-3" data-scroll-reveal="enter bottom move 40px over 0.8s after 0.2s">
                                            <HeroCard className="" content={item} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <Divider />

            </div>

            <div className="section" id="about">



                {/* <!-- Content With Images Block
                ================================================== --> */}

                <div className="home-journey">
                    <div className="section padding-top-bottom-smaller" id="scroll-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="call-box-3 text-center text-md-center">
                                        <Title className="mt-[70px] pb-4" align="center">Begin your journey</Title>
                                        <Paragraph className="w-[90%] m-auto" align="center">The ornate peace of these halls would be shattered now and then by the faint whispers of the Statue of a thousand faces, as the soul fragments collided and the Heroes met in glorious Combat. For them it would always be the first time, until someone's time to be free of this burden would come - then he'd regain consciousness of who he was and what he had to do. But, this time, something was different.</Paragraph>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Services Block
                    ================================================== --> */}

                    <div className="section py-[80px] over-hide">
                        <div className="container">
                            <div>
                                <Carousel images={journeyList} />
                            </div>
                        </div>
                    </div>
                </div>

                <Divider />

            </div>

            <div className="section" id="testimonials">

                {/* <!-- Testimonials Block
                ================================================== --> */}

                <div className="home-overview">
                    <div className="section padding-top-bottom-smaller" id="scroll-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="call-box-3 text-center text-md-center">
                                        <Title className="mt-[70px] pb-4" align="center">Choose your weapon</Title>
                                        <Paragraph className="w-[90%] m-auto" align="center">Unleash your revenge upon mankind as you turn and look towards the human cities, only to see a great pillar of flame hit their cathedrals, the ensuing shockwave and flamewall erasing all signs of their kingdoms' existence.</Paragraph>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Services Block
                    ================================================== --> */}

                    <div className="section pt-[50px] pb-[70px] over-hide">
                        <div className="container">
                            <div className="row gap-10 flex justify-center">
                                {
                                    weaponCard.map((item, index) => (
                                        <div key={index} className="col-xs-12 col-md-6 col-lg-3" data-scroll-reveal="enter bottom move 40px over 0.8s after 0.2s">
                                            <WeaponCard className="" content={item} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <Divider />
            </div>

            <div className="section padding-top-bottom">
                <div className="parallax-1"
                    style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.25)), url(assets/img/banner-bg2.jpg)', backgroundPosition: '50% -27px' }}></div>
                <div className="container z-bigger">
                    <Title align="center">THE INSIGHTS OF DARKNESS</Title>
                    <div className="row justify-content-center">
                        <div className="col-md-11">
                        </div>
                        {
                            authorCard.map((item, index) => (
                                <div key={index} className="px-4 col-md-4 mt-[80px]">
                                    <AuthorCard className="" content={item} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Divider />

            <div className="section home-overview" id="support">

                {/* <!-- Support Block
                ================================================== --> */}

                <div className="section padding-top-bottom-smaller" id="scroll-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="call-box-3 text-center text-md-center pb-5">
                                    <Title className="mt-[70px] pb-4" align="center">Summon Us</Title>
                                    <Paragraph className="w-[90%] m-auto" align="center">Whether your mind echoes with questions, or your soul seeks for answers untold, stay awhile and write us down your request. If a bug is what bothers you, it shall be purged into eternity via your precious feedback. If a career in warmonging is what you long for, indulge us with a first handshake and be welcome to visit us in our den, located right in the midst of the ancient city of Athens. By all means, if you wish to present us with a review only a true Master gamer would, enlighten us so we may bask in its light.<br /><br />   By all means, contact us. We are always listening...</Paragraph>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Divider />

            {/* <!-- Footer Dark Block
            ================================================== --> */}

            <div className="section padding-top background-dark-2 over-hide footer-1 dark">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h6>Home concepts</h6>
                            <ul className="list-style">
                                <li><a href="digital-agency.html">Digital Agency</a></li>
                                <li><a href="design-studio.html">Design Studio</a></li>
                                <li><a href="app-landing.html">App Landing</a></li>
                                <li><a href="personal-portfolio.html">Personal Portfolio</a></li>
                                <li><a href="corporate.html">Home Corporate</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 mt-4 mt-md-0">
                            <h6>Picked Pages</h6>
                            <ul className="list-style">
                                <li><a href="portfolio-grid-3col.html">Portfolio Grid</a></li>
                                <li><a href="portfolio-masonry-3col.html">Portfolio Masonry</a></li>
                                <li><a href="blog-grid.html">Blog Grid</a></li>
                                <li><a href="careers-listing.html">Careers Listing</a></li>
                                <li><a href="contact-map.html">Contact Map</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 mt-4 mt-md-0">
                            <h6>Interesting</h6>
                            <ul className="list-style">
                                <li><a href="about-company.html">About</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="contact-modern.html">Contact</a></li>
                                <li><a href="shop-grid-sidebar.html">Shop</a></li>
                                <li><a href="create-account.html">Create Account</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 mt-4 mt-md-0 logo-footer-100">
                            {/* <Image width={100} height={100} src="/img/logo-light.png" alt="" className="mb-5" /> */}
                            <div className="separator-wrap">
                                <span className="separator"><span className="separator-line dashed"></span></span>
                            </div>
                            <ul className="list-style mt-3 mb-3">
                                <li><i className="fa fa-envelope-o"></i><a href="#">support@omnikingdom.com</a></li>
                                <li><i className="fa fa-phone"></i><a href="#">+41-34-9653-3246</a></li>
                                <li><i className="fa fa-skype"></i><a href="#">OmniKingdom</a></li>
                            </ul>
                            <div className="separator-wrap">
                                <span className="separator"><span className="separator-line dashed"></span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container scd-foot padding-top-small padding-bottom-smaller">
                    <div className="row">
                        <div className="col-md-6">
                            <p>© 2023 OmniKingdom. Powerd with by KAL</p>
                        </div>
                        <div className="col-md-6">
                            <ul className="footer-social">
                                <li className="twitter">
                                    <a href="#">Tw</a>
                                </li>
                                <li className="facebook">
                                    <a href="#">Fb</a>
                                </li>
                                <li className="google">
                                    <a href="#">G+</a>
                                </li>
                                <li className="vimeo">
                                    <a href="#">Vm</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="scroll-to-top"><i className="fa fa-angle-up"></i></div>
        </main>
    )
}
