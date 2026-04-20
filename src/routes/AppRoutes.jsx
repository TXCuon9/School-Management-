import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';

// Features / Pages - Using the new Feature-based structure
import HomePage from '../features/admin/pages/HomePage';
import Students from '../features/admin/pages/Students';
import Teachers from '../features/admin/pages/Teachers';
import ClassManagement from '../features/admin/pages/ClassManagement';
import Subject from '../features/admin/pages/Subject';
import Grade from '../features/admin/pages/Grade';
import Attendance from '../features/admin/pages/Attendance';
import Fees from '../features/admin/pages/Fees';
import Assignment from '../features/admin/pages/Assignment';

import LoginPage from '../pages/auth/LoginPage';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<LoginPage />} />
      
      {/* Admin Dashboard Routes */}
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<HomePage />} />
        <Route path="students" element={<Students />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="classes" element={<ClassManagement />} />
        <Route path="subjects" element={<Subject />} />
        <Route path="grades" element={<Grade />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="fees" element={<Fees />} />
        <Route path="assignments" element={<Assignment />} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>

      {/* Default Redirect */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
