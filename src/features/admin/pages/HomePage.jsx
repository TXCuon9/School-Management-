import React from 'react';
import { FiUsers, FiBookOpen, FiUserCheck, FiDollarSign, FiTrendingUp } from 'react-icons/fi';
import './HomePage.scss';

const HomePage = () => {
  const stats = [
    { title: 'Tổng học sinh', value: '1,240', change: '+5.2%', icon: <FiUsers />, color: 'blue' },
    { title: 'Giảng viên', value: '86', change: '+2.1%', icon: <FiUserCheck />, color: 'green' },
    { title: 'Lớp học', value: '42', change: '0%', icon: <FiBookOpen />, color: 'purple' },
    { title: 'Học phí thu', value: '1.2B', change: '+12.5%', icon: <FiDollarSign />, color: 'orange' },
  ];

  const recentStudents = [
    { id: 1, name: 'Nguyễn Văn A', class: '10A1', date: '2024-03-15', status: 'Hoàn thành' },
    { id: 2, name: 'Trần Thị B', class: '11B2', date: '2024-03-14', status: 'Đang học' },
    { id: 3, name: 'Lê Văn C', class: '12C3', date: '2024-03-13', status: 'Hoàn thành' },
    { id: 4, name: 'Phạm Thị D', class: '10A2', date: '2024-03-12', status: 'Nghỉ học' },
  ];

  return (
    <div className="admin-home-page">
      <div className="page-header">
        <div className="title-area">
          <h1>Tổng quan</h1>
          <p>Chào mừng trở lại, đây là những gì đang diễn ra hôm nay.</p>
        </div>
        <div className="action-area">
          <button className="btn-primary">Xuất báo cáo</button>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className={`icon-box ${stat.color}`}>
              {stat.icon}
            </div>
            <div className="stat-info">
              <span className="stat-title">{stat.title}</span>
              <div className="stat-value-row">
                <span className="stat-value">{stat.value}</span>
                <span className={`stat-change ${stat.change.startsWith('+') ? 'up' : ''}`}>
                   {stat.change} <FiTrendingUp />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-content">
        <div className="main-charts">
          <div className="card chart-card">
            <h3>Biểu đồ học tập</h3>
            <div className="chart-placeholder">
              <p>Biểu đồ sự tiến bộ của học sinh sẽ hiển thị ở đây.</p>
            </div>
          </div>
        </div>

        <div className="side-list">
          <div className="card list-card">
            <div className="card-header">
              <h3>Học sinh mới</h3>
              <button className="text-btn">Xem tất cả</button>
            </div>
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Tên</th>
                  <th>Lớp</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {recentStudents.map((student) => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.class}</td>
                    <td>
                      <span className={`status-badge ${student.status === 'Hoàn thành' ? 'success' : student.status === 'Đang học' ? 'warning' : 'danger'}`}>
                        {student.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
