import React from 'react';

const Concurso = () => {
    const imageUrl = `${process.env.PUBLIC_URL}/img/bases-concurso.jpg`;

    return (
        <div>
            <img src={imageUrl} alt="Bases del Concurso" />
        </div>
    );
}

export default Concurso;
