import axios from 'axios';
import { Company, PersonalDetails, Project } from './types';

// export const BASE_URL = 'https://smartasherlee.herokuapp.com/api';

export const BASE_URL = 'https://mananoel.github.io/api';

export async function getPersonalDetails(): Promise<PersonalDetails | boolean> {
  try {
    const { data } = await axios.get(`${BASE_URL}/me`);
    return data;
  } catch (err) {
    return false;
  }
}

export async function getProjectDetails(): Promise<Project[] | boolean> {
  try {
    const { data } = await axios.get(`${BASE_URL}/projects`);
    return data;
  } catch (err) {
    return false;
  }
}
export async function getCompanyDetails(): Promise<Company[] | boolean> {
  try {
    const { data } = await axios.get(`${BASE_URL}/companies`);
    return data;
  } catch (err) {
    return false;
  }
}

export async function getGithubDetails(): Promise<unknown> {
  try {
    const { data } = await axios.get(`https://api.github.com/repos/flyahser`);
    return data;
  } catch (err) {
    return false;
  }
}
