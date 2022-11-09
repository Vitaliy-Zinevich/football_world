import { Navigate } from 'react-router-dom';

const Person: React.FC = () => {
  return (
    <div className="person">
      <Navigate to="/login" />
    </div>
  );
};

export default Person;
