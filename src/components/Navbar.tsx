"use client"

import React, { useCallback, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { CountrySwitcher } from "@/components/CountrySwitcher"

type NavItem = {
    name: string
    link: string
    children?: { name: string; link: string }[]
}


const mainMenu: NavItem[] = [
    { name: "Home", link: "/" },
    {
        name: "Services",
        link: "/services",
        children: [
            { name: "Website Design", link: "/services/website-design" },
            { name: "SEO & Marketing", link: "/services/seo-marketing" },
            { name: "Branding & Identity", link: "/services/branding" },
        ],
    },
    { name: "Tools", link: "/tools" },
    { name: "About", link: "/about" },
]

export default function Navbar() {

    const [isMobileOpen, setIsMobileOpen] = useState(false)

    const toggleMobile = useCallback(() => setIsMobileOpen((v) => !v), [])

    return (

        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full md:w-fit px-4 container">
            <div className="bg-white backdrop-blur-md border border-border/50 rounded-4xl shadow-lg py-1">
                <div className="flex items-center justify-between h-12 px-4 text-base gap-12">
                    <Link href="/" className="text-xl font-bold text-primary">
                        <span className="text-2xl font-bold">
                            <span className="text-primary">Interio</span>
                            <span className="text-secondary">Web</span>
                        </span>
                    </Link>

                    {/* Desktop navigation using NavigationMenu */}
                    <div className="hidden md:flex items-center gap-4">
                        <NavigationMenu viewport={false}>
                            <NavigationMenuList>
                                {mainMenu.map((item) =>
                                    item.children ? (
                                        <NavigationMenuItem key={item.name}>
                                            <NavigationMenuTrigger
                                                className="bg-transparent px-3 py-2 font-semibold text-muted-foreground hover:bg-muted hover:text-primary transition-colors data-[state=open]:bg-transparent  data-[state=open]:text-primary data-[state=open]:hover:bg-muted"
                                            >{item.name}</NavigationMenuTrigger>
                                            <NavigationMenuContent
                                                className="p-0 border-none bg-transparent"
                                            >
                                                <div className="grid grid-cols-1 gap-1 p-4 text-popover-foreground rounded-lg shadow-lg border min-w-[16rem]">
                                                    {item.children.map((child) => (
                                                        <NavigationMenuLink key={child.link} asChild>
                                                            <Link
                                                                href={child.link}
                                                                className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-primary transition-colors"
                                                            >
                                                                {child.name}
                                                            </Link>
                                                        </NavigationMenuLink>
                                                    ))}
                                                </div>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    ) : (
                                        <NavigationMenuItem key={item.name}>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href={item.link}
                                                    className="block rounded-md px-3 py-2 text-lg font-semibold text-muted-foreground hover:bg-muted hover:text-primary transition-colors"
                                                >
                                                    {item.name}
                                                </Link>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    )
                                )}
                            </NavigationMenuList>
                        </NavigationMenu>

                        <CountrySwitcher />

                        <Link href="/get-started">
                            <Button size="sm" className="font-medium cursor-pointer">
                                Get Started
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile controls */}
                    <div className="md:hidden">
                        <Button
                            size="sm"
                            variant="outline"
                            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
                            onClick={toggleMobile}
                        >
                            {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile menu panel */}
                {isMobileOpen && (
                    <div className="md:hidden border-t border-border/50">
                        <div className="flex flex-col p-3">
                            {mainMenu.map((item) => (
                                <div key={item.name}>
                                    <Link
                                        href={item.link}
                                        onClick={() => setIsMobileOpen(false)}
                                        className="block px-3 py-2 rounded text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary"
                                    >
                                        {item.name}
                                    </Link>
                                    {item.children && (
                                        <div className="ml-4 mt-1 flex flex-col">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.link}
                                                    href={child.link}
                                                    onClick={() => setIsMobileOpen(false)}
                                                    className="block px-3 py-1 rounded text-sm text-muted-foreground/90 hover:text-primary"
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            <div className="mt-2 flex items-center gap-2">
                                <CountrySwitcher />
                                <Link href="mailto:anshu@aimpur.com">
                                    <Button size="sm" className="font-medium cursor-pointer">
                                        Contact
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};