import React, {useState, useEffect} from "react"
import { Button, Menu, Typography, Avatar } from "antd"
import { Link } from "react-router-dom"
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons"

import icon from "../images/cryptocurrency.png"

const menuItem = [
    {
        key: "home",
        icon: <HomeOutlined />,
        label: <Link to="/">Home</Link>,
    },
    {
        key: "cryptocurrencies",
        icon: <FundOutlined />,
        label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
    },
    {
        key: "exchanges",
        icon: <MoneyCollectOutlined />,
        label: <Link to="/exchanges">Exchanges</Link>,
    },
    {
        key: "news",
        icon: <BulbOutlined />,
        label: <Link to="/news">News</Link>,
    },
]

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [screenSize, setScreenSize] = useState(null)

    useEffect(() => {
      const handleResize = () => setScreenSize(window.innerWidth)
      window.addEventListener('resize', handleResize)

      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
     if(screenSize < 768){
        setActiveMenu(false)
     } else {
        setActiveMenu(true)
     }
    }, [screenSize])
    
    

  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className="logo">
                <Link to="/">VaaVverse</Link>
            </Typography.Title>
            <Button className="menu-control-container" onClick={()=>setActiveMenu(!activeMenu)}>
                <MenuOutlined />
            </Button>
        </div>
    {activeMenu && (
          <Menu items={menuItem} theme="dark" />
    )}
      
    </div>
  )
}

export default Navbar