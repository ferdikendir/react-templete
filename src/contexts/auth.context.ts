import { createContext } from 'react';
import { AuthContextType } from '@core/api';

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
