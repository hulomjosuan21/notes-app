import {ModeToggle} from "@/components/theme-toggle";
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'

export default function Navbar(){
    return (
        <header className={'min-h-[64px] border-b w-full fixed top-0 left-0 z-50 bg-background'}>
            <ModeToggle/>
            <SignedOut>
                <SignInButton mode={'modal'}/>
            </SignedOut>
            <SignedIn>
                <UserButton/>
            </SignedIn>

        </header>
    )
}