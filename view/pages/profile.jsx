class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // headerdata
            headerData: {
                headerMenu: [
                    {
                        // Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis corporis quibusdam similique aliquid quas quae consectetur assumenda nostrum, animi, voluptates quasi odio laudantium voluptatum nihil ipsam suscipit? Enim, commodi eos.Ad voluptatem, molestias minus fugiat obcaecati magnam esse voluptates! Expedita minus laborum, in ab excepturi dolores, quidem quod eos cum maiores recusandae, neque illo. Dicta dolorum vitae nostrum temporibus totam!
                        link: "#",
                        text: "Lorem"
                    },
                    {
                        link: "#",
                        text: "ipsum"
                    },
                    {
                        link: "#",
                        text: "dolor "
                    },

                    {
                        link: "#",
                        text: "sit "
                    },

                    {
                        link: "#",
                        text: "Services"
                    },

                    {
                        link: "/login",
                        text: "Logout"
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
            // sidebar menu Data
            sidebarData: {
                sidebar: [
                    {
                        link: "#",
                        image: "assets/img/user.png",
                        text: "ipsum"
                    },
                    {
                        link: "#",
                        image: "assets/img/r7.png",
                        text: "consectetur"
                    },
                    {
                        link: "#",
                        image: "assets/img/ic-4.png",
                        text: "Lorem"
                    },
                    {

                        link: "#",
                        image: "assets/img/ic-3.png",
                        text: " ipsum"
                    },
                    {
                        link: "#",
                        image: "assets/img/ic-4.png",
                        text: " ipsum"
                    },
                    {
                        link: "#",
                        image: "assets/img/ic-5.png",
                        text: " consectetur"
                    },
                    {
                        link: "/login",
                        image: "assets/img/ic-7.png",
                        text: "Logout"
                    }
                ]
            },
            //formData
            data: {
                action: "/profile",
                method: "POST",
                form: [
                    {
                        fieldtype: "input",
                        col: "col",
                        label: "First NAME",
                        type: "text",
                        placeholder: "",
                        className: "xyz"
                    },
                    {
                        fieldtype: "input",
                        col: "col",
                        label: "Last Name",
                        type: "text",
                        placeholder: "",
                        className: "xyz"

                    },
                    {
                        fieldtype: "input",
                        col: "col",
                        label: "Phone Number",
                        type: "text",
                        placeholder: "",
                        className: "xyz"
                    },
                    {
                        fieldtype: "input",
                        col: "col",
                        label: "Email",
                        type: "email",
                        placeholder: "",
                        className: "xyz"
                    },
                    {
                        fieldtype: "input",
                        col: "col",
                        label: "Profile Picture",
                        type: "file",
                        placeholder: "",
                        className: "xyz"
                    },
                    {
                        fieldtype: "button",
                        col: "col",
                        type: "submit",
                        label: "Save",
                        className: "round-btn",
                    }

                ]
            },
            userinfo: {
                name: "Rashid Iqbal",
                email: "rashidcoder",
                phoneno: "0346******",
                address: "Islamabad",
                dateofbirth: "04/03/1997",
                image: "assets/img/sm-banner.png"

            }

        }
    }

    render() {
        const { headerData, sidebarData, data, userinfo } = this.state
        var style = {

            input_inside: {
                padding: "10px"
            }

        }
        return (
            <div>
                {/* header */}
                <Header headerData={headerData} />
                <main>
                    <div className="main-full">
                        {/* Sidebar */}
                        <SideBar data={sidebarData} />
                        <div className="mainContent-wrap">
                            <div className="content-heading">
                                <h2>Profile</h2>
                            </div>

                            <div className="">
                                <div className="row content-heading">
                                    <div style={style.input_inside} className={"input-inside type-2 col-4"}>
                                        <h1 >Name</h1>
                                        <h2 >{userinfo.name}</h2>
                                    </div>
                                    <div style={style.input_inside} className={"input-inside type-2 col-4"}>
                                        <h1 >Email</h1>
                                        <h2 >{userinfo.email}</h2>
                                    </div>
                                    <div style={style.input_inside} className={"input-inside type-2 col-4"}>
                                        <h1 >Phone No</h1>
                                        <h2 >{userinfo.phoneno}</h2>
                                    </div>
                                    <div style={style.input_inside} className={"input-inside type-2 col-4"}>
                                        <h1 >Address</h1>
                                        <h2 >{userinfo.address}</h2>
                                    </div>
                                    <div style={style.input_inside} className={"input-inside type-2 col-4"}>
                                        <h1 >Date of Birth</h1>
                                        <h2 >{userinfo.dateofbirth}</h2>
                                    </div>

                                    <div className="upload-g-wrap">
                                        <div className="input-inside type-2 style2">
                                            <div style={style.input_inside} className={"input-inside type-2 col-4"}>
                                                <h1 >Image</h1>
                                            </div>
                                            <div className="uploaded-photo banner">
                                                <img src={userinfo.image} alt="" />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

