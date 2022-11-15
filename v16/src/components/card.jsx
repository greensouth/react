export function Card({props}){
    const doubleHTML = props.double ? "double" : "";
    console.log(doubleHTML);
    return (
        <li className="miniCard {doubleHTML}">
            <span data-gameName="{name}"></span>
            <a data-gameitem href="{url}" title="{name}">
                <img src="{thumb}" alt=""></img>
            </a>
        </li>
    );
}