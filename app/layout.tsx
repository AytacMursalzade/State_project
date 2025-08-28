import '../styles/reset.css';
import '../styles/global.css';
import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FastPanel from '../components/FastPanel';
import Avarage from '../components/Avarage';



export default function RootLayout({children}: {children:ReactNode}){
  
  return (
    <html lang="en">
      <body>
        <Header/>
        <main>{children}
          <FastPanel />
          <Avarage />
        </main>
        <Footer/>
      </body>
    </html>
  );
}
