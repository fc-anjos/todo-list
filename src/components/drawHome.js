import homeTag from './homeTag';

const drawHome = () => {
  const content = document.getElementById('content');
  content.innerHTML = homeTag();
};

export default drawHome;
