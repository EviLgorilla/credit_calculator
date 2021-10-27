import {FunctionComponent} from "react";
import styles from './main-layout.module.css';
import {Header} from "components/header";

const MainLayout: FunctionComponent = ({children}) => {
    return (
        <div className={styles.main_layout}>
            <Header />
            {children}
        </div>
    )
}

export default MainLayout;