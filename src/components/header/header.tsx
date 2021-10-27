import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

enum NavigationItem {
  bank = "bank",
  credit = "credit",
}

const Header = () => (
    <div className={ styles.header }>
        <Menu defaultSelectedKeys={ [NavigationItem.bank] } mode="horizontal">
            <Menu.Item key={ NavigationItem.bank }>
                <Link to="/">Bank</Link>
            </Menu.Item>
            <Menu.Item key={ NavigationItem.credit }>
                <Link to="/credit">Credit calculator</Link>
            </Menu.Item>
        </Menu>
    </div>
);

export default Header;
