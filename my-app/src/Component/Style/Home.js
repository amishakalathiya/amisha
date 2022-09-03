import custom from "./Custom.module.css";

export default function Home() {
  return (
    <>
      <section className={`${custom.home}`}>
        <div className={`${custom.content}`}>
          <h3>EVERYTHING IS BEAUTIFUL <br />WITH COFFEE!</h3>
          <a href='#' className={`${custom.btn}`}>Get Yours Now</a>
        </div>
      </section>
    </>
  )
}
