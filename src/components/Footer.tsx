import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
    return (
        <footer className="border-t py-16 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col items-center">
                    <div className="max-w-150 flex flex-col items-center">
                        <h3 className="text-3xl font-bold mb-4">
                            <span className="text-primary">Interio</span>
                            <span className="text-secondary">Web</span>
                        </h3>
                        <p className="text-sm text-muted-foreground text-center leading-relaxed mb-6 max-w-2xl">
                            Empowering interior designers with beautiful websites, powerful SEO, and free tools
                            to grow their digital presence and attract more clients.
                        </p>
                        <div className="flex space-x-4">
                            <div className="w-10 h-10 bg-green-600/10 rounded-lg flex items-center justify-center">
                                <span className="text-green-600 font-semibold text-xl">✓</span>
                            </div>
                            <div>
                                <p className="text-sm font-medium">Built for Designers</p>
                                <p className="text-xs text-muted-foreground">Like you</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator className="my-8" />
                <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
                    <p>&copy; 2025 InterioWeb. All rights reserved.</p>
                    <div className="mt-2 md:mt-0 flex gap-6">
                        <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                        <Link href="/tools" className="hover:text-primary transition-colors">Tools</Link>
                        <Link href="/get-started" className="hover:text-primary transition-colors">Get Started</Link>
                    </div>
                </div>
            </div>
        </footer >
    );
};