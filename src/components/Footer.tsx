import Link from "next/link"
import Image from "next/image";
import { Separator } from "@/components/ui/separator"

export default function Footer() {
    return (
        <footer className="border-t py-16 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col items-center">
                    <div className="max-w-150 flex flex-col items-center">
                        {/* <h3 className="text-xl font-bold mb-4 text-primary">Aimpur Tools</h3> */}
                        <Image src="/aimpur-tools-logo.png" alt="Aimpur Tools" width={200} height={32} className="mb-4" />
                        <p className="text-sm text-muted-foreground text-center leading-relaxed mb-6">
                            Your comprehensive toolkit for academic and professional calculations.
                            Free tools designed to simplify complex calculations for students and professionals.
                        </p>
                        <div className="flex space-x-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <span className="text-primary font-semibold">✓</span>
                            </div>
                            <div>
                                <p className="text-sm font-medium">Always Free</p>
                                <p className="text-xs text-muted-foreground">No hidden charges</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator className="my-8" />
                <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
                    <p>&copy; 2025 Aimpur Tools. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Built with ❤️ by Aimpur Team</p>
                </div>
            </div>
        </footer >
    );
};