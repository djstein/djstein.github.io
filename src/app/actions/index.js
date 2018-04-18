import { push } from 'react-router-redux'
import axiosBase from 'axios'
import Cookies from 'js-cookie'

export const SET_JWT_COOKIE = 'SET_JWT_COOKIE'
export const UPDATE_ERRORS = 'UPDATE_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

export const UPDATE_DROPDOWN = 'UPDATE_DROPDOWN'

// URL CONSTANTS
const BASE_URL =
  process.env.NODE_ENV === 'production' ? '/' : 'http://api.localtest.me/'

var axios = axiosBase.create({
  baseURL: BASE_URL
})



