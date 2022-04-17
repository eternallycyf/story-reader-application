import axios from 'axios'
export function getMessage(params: any) {
  return axios('/users/eternallycyf/repos', {
    params
  });
}