import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";

export default function App({ Component, pageProps }) {
    return (
        <div className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </div>
    );
}
