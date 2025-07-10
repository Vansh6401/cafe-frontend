export default function temp() {
    const handleclick = () => {
        alert("Hello World");
    };
    const handleSubmit = (name) => {
        alert(`Hello ${name}`);
    };
    return(
        <div>
            <button onClick={handleclick}></button>
        </div>
    )
}