import { FC, PropsWithChildren } from "react";
import './ui/globals.css';
import { roboto } from './ui/font';


const RootLayout:FC<PropsWithChildren> = ({children}) => {
    return (
        <div>
            <html>
            <body className={`${roboto.className} bg-slate-500`}>
                {children}
            </body>
            </html>
        </div>
    ); 
};

export default RootLayout;