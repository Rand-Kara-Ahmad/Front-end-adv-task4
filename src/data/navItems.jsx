import {FaEnvelope, FaLock, FaPhoneAlt, FaRegQuestionCircle} from "react-icons/fa";
import {BsPersonFill} from "react-icons/bs";

export const items = {
    topItems: {
        leftItems: [
            {
                title: "Have a questions?",
                to: "/Front-end-adv-task4",
                icon: <FaRegQuestionCircle/>
            },
            {
                title: "10 20 123 456",
                to: "/Front-end-adv-task4",
                icon: <FaPhoneAlt/>
            },
            {
                title: "info@mydomain.com",
                to: "/Front-end-adv-task4",
                icon: <FaEnvelope/>
            }
        ],
        rightItems: [
            {
                title: "Log In",
                to: "/Front-end-adv-task4",
                icon: <FaLock />
            },
            {
                title: "Register",
                to: "/Front-end-adv-task4",
                icon: <BsPersonFill />
            }
        ]
    },
    bottomItems: [
        {
            hasChildren: false,
            title: "Home",
            to: "/Front-end-adv-task4",
            children: [],
        },
        {
            hasChildren: true,
            title: "Dropdown",
            to: "/Front-end-adv-task4",
            children: [
                {
                    hasChildren: false,
                    title: "Elements",
                    to: "/Front-end-adv-task4",
                    children: []
                },
                {
                    hasChildren: true,
                    title: "Menu Two",
                    to: "/Front-end-adv-task4",
                    children: [
                        {
                            title: "Sub Menu One",
                            to: "/Front-end-adv-task4"
                        },
                        {
                            title: "Sub Menu Two",
                            to: "/Front-end-adv-task4"
                        },
                        {
                            title: "Sub Menu Three",
                            to: "/Front-end-adv-task4"
                        },
                    ]
                },
                {
                    hasChildren: false,
                    title: "Menu Three",
                    to: "/Front-end-adv-task4",
                    children: []
                }
            ],
        },
        {
            hasChildren: false,
            title: "Our Staff",
            to: "/Front-end-adv-task4",
            children: []
        },
        {
            hasChildren: false,
            title: "News",
            to: "/Front-end-adv-task4/news",
            children: []
        },
        {
            hasChildren: false,
            title: "Gallery",
            to: "/Front-end-adv-task4",
            children: []
        },
        {
            hasChildren: false,
            title: "About",
            to: "/Front-end-adv-task4/about",
            children: []
        },
        {
            hasChildren: false,
            title: "Contact",
            to: "/Front-end-adv-task4",
            children: []
        },
    ],
    logo: "Learner",
    btn: "Enroll Now",
}