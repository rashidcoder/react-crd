// var Router = ReactRouter.Router;
// var Route = ReactRouter.Route;
// var IndexRoute = ReactRouter.IndexRoute;
// var Link = ReactRouter.Link;
// var browserHistory = ReactRouter.browserHistory;


class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // headerData
            headerData: {
                headerMenu: [
                    {
                        link: "#",
                        text: "Lorem"
                      
                    },
                    {
                        link: "#",
                        text: "ipsum"
                    },
                    {
                        link: "#",
                        text: "dolor"
                    },

                    {
                        link: "#",
                        text: "sit"
                    },

                    {
                        link: "#",
                        text: "amet"
                    },

                    {
                        link: "#",
                        text: "consectetur"
                    },
                    {
                        link: "/login",
                        text: "Login"
                    }
                ],
                dropDownOptionArray: [
                    {
                        value: "fr",
                        text: "FR"
                    },
                    {
                        value: "fr",
                        text: "FR"
                    },
                    {
                        value: "fr",
                        text: "FR"
                    },
                ],
                Logo: {
                    path: "assets/img/site_logo.svg",
                    link: "#"
                }
            },
            // heroData
            heroData: {
                backgroundImage: "url(assets/img/hero-bg.jpg)",
                text: "La 1ère plateforme de mise en relation entre fournisseurs, producteurs, acheteurs et revendeurs de produits BIO et écologoqies."
            },
          
            // brandData
            brandimages: [
                { path: "assets/img/b-1.png" },
                { path: "assets/img/b-2.png" },
                { path: "assets/img/b-3.png" },
                { path: "assets/img/b-1.png" },
            ],
            // testimonialData
            testimonialData: [
                {
                    image: "assets/img/c-1.png",
                    name: "Name",
                    companyname: "Compnay Name",
                    description: "I hate them, they are always trying to sell me healthy products while i’m drinking petrol. "
                },
                {
                    image: "assets/img/c-1.png",
                    name: "Name",
                    companyname: "Compnay Name",
                    description: "I hate them, they are always trying to sell me healthy products while i’m drinking petrol. "
                },
                {
                    image: "assets/img/c-1.png",
                    name: "Name",
                    companyname: "Compnay Name",
                    description: "I hate them, they are always trying to sell me healthy products while i’m drinking petrol. "
                }
            ],
          
            // footerData
            footerMenu: [
                {
                    link: "#",
                    text: "Link 1"
                },
                {
                    link: "#",
                    text: "Link 2"
                },
                {
                    link: "#",
                    text: "Link 3"
                }
            ]

        }
    }
    render() {
        const { headerData, heroData, data, brandimages, productData, testimonialData, galleryData, productSliderData, footerMenu } = this.state
      
        
      
     

        //brand looping
        const tempbrand = []
        var key = 0;
        brandimages.forEach(item => {
            tempbrand.push(
                <div className="brand-item" key={key++}>
                    <img src={item.path} alt="" />
                </div>
            )
        });

        //footerMenu looping
        const tempfooter = []
        key = 0;
        footerMenu.forEach(item => {
            tempfooter.push(
                <li key={key++}><a href={item.link}>{item.text}</a></li>
            )
        });

        return (
            <div >
                {/* Header */}

                <Header headerData={headerData} />

                {/* body Area */}

                {/* Hero-tag */}
                <Hero heroData={heroData} />
           
                {/* testimonial area card */}

                <div className="client-area gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title client-title">
                                    <h2>Information Area</h2>
                                </div>
                            </div>
                        </div>
                        <Testimonial data={testimonialData} />
                    </div>
                </div>


                {/* Brand-Area   */}

                <div className="brand-area">
                    <div className="container">
                        <div className="section-title">
                            <h2>Our Product</h2>
                        </div>
                        <div className="brand-flex-wrap">
                            {tempbrand}
                        </div>
                    </div>
                </div>

                {/* Footer */}

                <footer className="footer-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-6 mb-30">
                                <div className="footer-widget">
                                    <a href="#" className="ft-logo"><img src="assets/img/ft-logo.png" alt="" /></a>
                                    <p>BEGAAK<br></br> IT SOLUTION <br></br>
                                        Islamabad,Pakistan</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-6 mb-30">
                                <div className="footer-widget">
                                    <ul className="ft-menu">
                                        {tempfooter}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-6 mb-30">
                                <div className="footer-widget">
                                    <ul className="ft-menu">
                                        {tempfooter}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-6 mb-30">
                                <div className="footer-widget">
                                    <ul className="ft-menu">
                                        {tempfooter}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </footer>
            </div >
        )
    }
}






