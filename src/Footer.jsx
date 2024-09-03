import style from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <div className={style.bg}>
        <div className='text-center'>
          <a className=" p-3 fw-bold fs-4" href="./index.html">Pizza</a>
          <ul className="nav-top p-3 ms-auto">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
          </ul>
        </div>
        <div className="d-flex flex-row p-3 gap-3 ">
          <a >Privacy Policy</a>
          <a >Terms of Use</a>
        </div>
      </div>
    </>
  )
}
