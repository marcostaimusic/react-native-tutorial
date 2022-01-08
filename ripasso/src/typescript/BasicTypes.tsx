export const BasicTypes = () => {

    let name: string | number= "tizio"

    let ee = name.includes("o")
    
    return (
        <>
          <h3>Basic Types</h3>  
          { ee ? "ciao" : "no" }
        </>
    )
}
