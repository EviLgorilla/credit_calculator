import { Header } from "components/header";
import React, { FunctionComponent } from "react";
import styles from "./main-layout.module.css";

const MainLayout: FunctionComponent = ({ children }) => {
    return (
        <div className={ styles.main_layout }>
            <Header />
            { children }
        </div>
    );
};

export default MainLayout;
