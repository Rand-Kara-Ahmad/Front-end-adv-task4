import {FaEnvelope, FaLock, FaPhoneAlt, FaRegQuestionCircle} from "react-icons/fa";
import {BsPersonFill} from "react-icons/bs";

export const items = {
    topItems: {
        leftItems: [
            {
                title: "Have a questions?",
                to: "/",
                icon: <FaRegQuestionCircle/>
            },
            {
                title: "10 20 123 456",
                to: "/",
                icon: <FaPhoneAlt/>
            },
            {
                title: "info@mydomain.com",
                to: "/",
                icon: <FaEnvelope/>
            }
        ],
        rightItems: [
            {
                title: "Log In",
                to: "/",
                icon: <FaLock />
            },
            {
                title: "Register",
                to: "/",
                icon: <BsPersonFill />
            }
        ]
    },
    bottomItems: [
        {
            hasChildren: false,
            title: "Home",
            to: "/",
            children: [],
        },
        {
            hasChildren: true,
            title: "Dropdown",
            to: "/",
            children: [
                {
                    hasChildren: false,
                    title: "Elements",
                    to: "/",
                    children: []
                },
                {
                    hasChildren: true,
                    title: "Menu Two",
                    to: "/",
                    children: [
                        {
                            title: "Sub Menu One",
                            to: "/"
                        },
                        {
                            title: "Sub Menu Two",
                            to: "/"
                        },
                        {
                            title: "Sub Menu Three",
                            to: "/"
                        },
                    ]
                },
                {
                    hasChildren: false,
                    title: "Menu Three",
                    to: "/",
                    children: []
                }
            ],
        },
        {
            hasChildren: false,
            title: "Our Staff",
            to: "/",
            children: []
        },
        {
            hasChildren: false,
            title: "News",
            to: "/news",
            children: []
        },
        {
            hasChildren: false,
            title: "Gallery",
            to: "/",
            children: []
        },
        {
            hasChildren: false,
            title: "About",
            to: "/about",
            children: []
        },
        {
            hasChildren: false,
            title: "Contact",
            to: "/",
            children: []
        },
    ],
    logo: "Learner",
    btn: "Enroll Now",
}