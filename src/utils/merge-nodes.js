const mergeNodes = innerFragments => {
  const outerFragment = new DocumentFragment();
  innerFragments.forEach(innerFragment => outerFragment.appendChild(innerFragment));
  return outerFragment;
};

export default mergeNodes;
