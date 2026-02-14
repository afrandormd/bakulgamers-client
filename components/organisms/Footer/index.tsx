import Image from "next/image";
import FooterList from "./FooterList";

export default function Footer() {
    return (
        <section className="footer pt-50">
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 text-lg-start text-center">
                            <a href="" className="mb-30">
                                <Image src="/icon/logo.svg" alt={"logo"} width={60} height={60} />
                            </a>
                            <p className="mt-30 text-lg color-palette-1 mb-30">BakulGamers membantu gamers<br /> untuk menjadi
                                pemenang sejati</p>
                            <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2026. All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-8 mt-lg-0 mt-20">
                            <div className="row gap-sm-0">
                                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                                    <p className="text-lg fw-semibold color-palette-1 mb-12">Company</p>
                                    <ul className="list-unstyled">
                                        <FooterList title="About Us" />
                                        <FooterList title="Press Release" />
                                        <FooterList title="Terms of Use" />
                                        <FooterList title="Privacy & Policy" />
                                    </ul>
                                </div>
                                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                                    <p className="text-lg fw-semibold color-palette-1 mb-12">Support</p>
                                    <ul className="list-unstyled">
                                        <FooterList title="Refund Policy" />
                                        <FooterList title="Unlock Rewards" />
                                        <FooterList title="Live Chatting" />
                                    </ul>
                                </div>
                                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                                    <p className="text-lg fw-semibold color-palette-1 mb-12">Connect</p>
                                    <ul className="list-unstyled">
                                        <FooterList title="bakulgamers@gmail.com" href="mailto: bakulgamers@gmail.com" />
                                        <FooterList title="team@bakulgamers.com" href="mailto: bakulgamers@gmail.com" />
                                        <FooterList title="Bandar Lampung" href="http://maps.google.com" />
                                        <FooterList title="0895 - 1234 - 2334" href="tel: 089512342334" />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}

