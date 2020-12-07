import homeTag from './homeTag';

const drawHome = projects => {
  const content = document.getElementById('content');
  content.innerHTML = homeTag(projects);
};

export default drawHome;
