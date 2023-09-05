import {getItem} from '../../asyncStorage';
import {UserAction} from '../type';
import {setUserProfile} from './userActions';

export const loadUserInitialStateValue = async (
  dispatch: React.Dispatch<UserAction>,
) => {
  try {
    const storedUserProfile = await getItem('userProfile');

    // TODO: Check to make the user profile more robust
    if (storedUserProfile) {
      dispatch(setUserProfile(JSON.parse(storedUserProfile)));
    }
  } catch (error) {
    // TODO: Add error handling
    // For now swallow error and log to console
    // TODO: implement robust error handling and logging
    console.error('Error loading User initial state:', error);
  }
};
