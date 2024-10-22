// import data from '../data/data.json'

function Articles({ data }) {
    return <>
        {data.map((item, idx) => (
            <section key={idx} >
                <h2>{item.title}</h2>
                <div>
                    <p>{item.body}</p>
                </div>
                </section>
            ))}         
    </>;
    
}

export default Articles;