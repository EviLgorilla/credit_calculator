import { Menu } from "antd";
import React, { useMemo } from "react";
import {Link, useHistory, useLocation} from "react-router-dom";
import styles from "./header.module.css";
import { routes } from "../../routes";

const Header = () => {
    const location = useLocation();

    const defaultKey = useMemo(() => {
        return location.pathname;
    }, [location]);

    const history = useHistory();
    console.log(history);

    return (
        <div className={ styles.header }>
            <Menu defaultSelectedKeys={ [defaultKey] } mode="horizontal">
                { routes.map( route => (
                    <Menu.Item key={ route.path }>
                        <Link to={ route.path }>{ route.navigation }</Link>
                    </Menu.Item>
                )) }
            </Menu>
        </div>
    );
};

export default Header;
