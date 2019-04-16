import React from 'react';

function List({lista}) {
    //console.log(lista);
    return (  

        lista.map(item => 
            (
            <div>
                <ol>
                    <li>{item.nome} - {item.idade}</li>
                </ol>
            </div>
            )
        )
    );
}

export default List;