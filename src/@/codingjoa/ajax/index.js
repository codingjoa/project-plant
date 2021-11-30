import axios from 'axios'
axios.defaults.baseURL = 'https://codingjoa.kro.kr:49000/'
axios.defaults.withCredentials = true;

export async function signAdmin({
  id,
  password,
}) {
  await axios({
    method: 'POST',
    url: '/api/v1/admin/sign',
    data: {
      id,
      password,
    },
  });
}

export async function signoutAdmin() {
  await axios({
    method: 'DELETE',
    url: '/api/v1/admin/sign',
  });
}

export async function getMyInfo() {
  const result = await axios({
    method: 'GET',
    url: '/api/v1/admin',
  });
  return result.data;
}

export async function getBoardNotices({
  page = 1,
  pageSize = 15,
}) {
  const result = await axios({
    method: 'GET',
    url: `/api/v1/admin/board/notice?page=${page}&pageSize=${pageSize}`,
  });
  return result.data;
}

export async function getBoardNotice({
  id,
}) {
  const result = await axios({
    method: 'GET',
    url: `/api/v1/admin/board/notice/${id}`,
  });
  return result.data;
}

export async function postBoardNotice({
  title,
  content,
}) {
  await axios({
    method: 'POST',
    url: '/api/v1/admin/board/notice',
    data: {
      title,
      content,
    },
  });
}

export async function updateBoardNotice({
  id,
  title,
  content,
}) {
  await axios({
    method: 'PUT',
    url: `/api/v1/admin/board/notice/${id}`,
    data: {
      title,
      content,
    },
  });
}

export async function deleteBoardNotice({
  id,
}) {
  await axios({
    method: 'DELETE',
    url: `/api/v1/admin/board/notice/${id}`,
  });
}
