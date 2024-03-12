"use client";

import Link from "next/link";
import { Righteous } from "next/font/google";
import { cn } from "../lib/utils";
import { usePathname, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const font = Righteous({ subsets: ["latin"], weight: ["400"] });

export default function Header() {

    const router = useRouter();
    const pathname = usePathname();

    return (
        <>
            {pathname.includes('auth') === false && pathname.includes('user') === false && (
                <div className="flex justify-between items-center w-full px-6 p-4 shadow-md">
                    <Link href={"/"}><h1 className={cn("text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent", font.className)}>EmAction</h1></Link>
                    <div className="flex gap-4 items-center">
                        <ThemeSwitcher />
                        {pathname !== "" ? (
                            <Button variant={"outline"} onClick={() => router.push("/auth/login")} className="bg-gradient-to-r from-red-500 to-orange-500 text-white hover:text-white">Sign Out</Button>
                        ) : (
                            <Button variant={"outline"} onClick={() => router.push("/auth/login")} className="bg-gradient-to-r from-red-500 to-orange-500 text-white hover:text-white">Sign In</Button>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}