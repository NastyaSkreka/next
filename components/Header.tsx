import { Nav } from "./Nav"

const navItems = [
    {label: "Home", href: "/"}, 
    {label: "Blog", href: "/blog"}, 
    {label: "About", href: "/about"}, 
]

const Header = () => {
    return(
        <header>
            <Nav navLinks={navItems}/>
        </header>
    )
}

export {Header}