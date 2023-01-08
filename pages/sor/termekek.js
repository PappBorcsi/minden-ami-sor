const Termekek=()=>{
    
    const termekek=["IPA","Soproni", "Heineken" ]
    
    return (
        <>
            <h1>
            Termekeink
            </h1>
            <ol>
            {termekek.map(t=><li className="termekek">{t}</li>)}
            </ol>
            <h2>
                vege elvileg
            </h2>

            <main>
                <section id="welcome">
                    <article className="welcome-card brewing">
                      <h3>Termekeink</h3>
                     </article>
                </section>

                <section id="action">
                    <h2>Akciós termékek</h2>
                    <section className="action-cards">
                        <article className="action-card">
        
                             <h3>Kéklő Álom fél áron</h3>
                            <p className="price">700,-Ft</p>
                        </article>
                    </section>
                </section>

                <section id="tips">
                    <h2>NAgyobb termekek</h2>
                    <article className="tips-cards">    
                     <article className="tips-card">

                        <div>
                         <h3>Jo minoségu</h3>
                         <p className="date">2022.12.28</p>
                            <p className="text">
                              finom nagyon ez a sor...
                            </p>
                        </div>
                          <button className="btn">Részletek</button>
                     </article>
                    </article>
                </section>
            </main>
        </>
        
        
    )
}
export default Termekek