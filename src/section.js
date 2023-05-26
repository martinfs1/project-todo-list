
const Section = () => {
  const divSection = document.createElement('div');
  divSection.classList.add('divSection');
  const h2Section = document.createElement('h2')
  h2Section.innerText = 'Section'

  divSection.appendChild(h2Section)
  return divSection;
}
export default Section;