import axios from 'axios'
import * as AuthService from './AuthService'

const api_base = 'http://localhost:3001'

// todo: proper authentication implementation

export function getEmployees () {
  return axios.get(api_base + '/users')
}

export function getReview () {
  const userid = AuthService.getCurrentUser()
  const headers = {userid}
  return axios.get(api_base + '/reviews', {headers})
}

export function updateReview (data) {
  const userid = AuthService.getCurrentUser()
  const headers = {userid}
  return axios.put(api_base + '/reviews', data, {headers})
}

export function getFeedback () {
  const userid = AuthService.getCurrentUser()
  const headers = {userid}
  return axios.get(api_base + '/reviews/feedback', {headers})
}

export function createFeedback (targetUserid, feedback) {
  const userid = AuthService.getCurrentUser()
  const headers = {userid}
  const data = {
    from: userid,
    text: feedback
  }
  return axios.post(api_base + `/reviews/${targetUserid}/feedback`, data, {headers})
}
