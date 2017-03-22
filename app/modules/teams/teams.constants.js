import { createTypes } from 'reduxsauce';


export const ACTION_TYPES = createTypes(`
  GET
  GET_SUCCESS
  GET_FAIL
  SET_RANGE_VALUES
`, { prefix: 'TEAMS_' });
