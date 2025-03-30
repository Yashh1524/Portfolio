import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter} from "react-icons/fa6";

export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const socialLinks = [{
        href: "https://github.com/YashBhut1524", icon: <FaGithub size={24} />, label: "Github"
    }, {
        href: "https://www.instagram.com/yashh_1524/", icon: <FaInstagram size={24} />, label: "Instagram"
    }, {
        href: "https://x.com/YaShh1524", icon: <FaXTwitter size={24} />, label: "X"
    }, {
        href: "https://www.linkedin.com/in/yashbhut1524/", icon: <FaLinkedin size={24} />, label: "LinkedIn"
    }
]