import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID PPq6nVS-3HpwgxmIgpjVFPfGWfLmfBKHgPqn-2TjHiw'
  }
})