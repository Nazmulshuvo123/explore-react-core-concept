export default function Singers({singer}){
    console.log(singer)

    return(
        <div>
            <h3>Singers: {singer.name}</h3>
            <p>age: {singer.age}</p>
        </div>
    )
}