import { Footer } from "../components/Footer/Footer";
import { IconMenu } from "../components/IconMenu/IconMenu";
import { Logo } from "../components/Logo/Logo";
import { MainContent } from "../components/MainContent/MainContent";
import { MainMenu } from "../components/MainMenu/MainMenu";
import { TopBar } from "../components/TopBar/TopBar";

export function Layout({ children }) {
    return (
        <>
            <MainContent>
                <TopBar>
                    <MainMenu />
                    <Logo />
                    <IconMenu />
                </TopBar>
                {children}
            </MainContent>
            <Footer />
        </>
    );
}
