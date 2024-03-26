import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const FooterComponent = () => {
  return (
    <footer className="py-4 flex justify-center font-primary items-center">
      Awesome Stickers <FontAwesomeIcon icon={faGithub} className="w-5 text-black-600 mx-1" /> get on github{' '}
      <a
        href="https://twitter.com/deepwhitman"
        target="_blank"
        rel="noreferrer"
        className="text-palette-primary font-bold px-1"
      >
        here
        </a>
    </footer>
  )
}

export default FooterComponent