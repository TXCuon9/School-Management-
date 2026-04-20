import React from 'react';
import { FiSearch, FiBell, FiMessageSquare, FiChevronDown } from 'react-icons/fi';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Tìm kiếm học sinh, lớp học..." />
        </div>
      </div>

      <div className="header-right">
        <button className="icon-btn">
          <FiMessageSquare />
          <span className="badge">3</span>
        </button>
        <button className="icon-btn">
          <FiBell />
          <span className="badge red">5</span>
        </button>
        
        <div className="divider"></div>

        <div className="user-profile">
          <div className="avatar">
            <img src="https://ui-avatars.com/api/?name=Admin&background=2563eb&color=fff" alt="User" />
          </div>
          <div className="user-info">
            <span className="user-name">Quản trị viên</span>
            <span className="user-role">Hệ thống</span>
          </div>
          <FiChevronDown className="chevron" />
        </div>
      </div>
    </header>
  );
};

export default Header;
