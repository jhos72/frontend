import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './routes/AppRoutes';
import React from 'react';
function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>    
  );
}

export default App;
