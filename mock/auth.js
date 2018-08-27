import Mock from 'mockjs';

export default function mockAuth() {
  Mock.mock('/signin', 'post', {
    id: 0,
    name: 'deny',
    roule: 0,
    theme: 'dark',
    status: 'signin',
    message: 'success',
  });
}
