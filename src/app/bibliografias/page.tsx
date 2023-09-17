import React from "react";

const bibliografias = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-[7%]">Bibliografias</h1>
      <div className="w-[50%] h-auto text-center mx-auto mt-5 rounded-lg bg-gray-200 border-2 border-gray-600">
        <ul className="p-5">
          <a href="https://www.innovaciondigital360.com/software/calidad-del-software-metodologias-y-tecnologias-para-garantizarla/">
            <li className="m-5 hover:text-blue-700">InnovaciónDigital 360</li>
          </a>
          <a href="https://co.linkedin.com/in/simoncastano/es?trk=article-ssr-frontend-pulse_publisher-author-card">
            <li className="m-5 hover:text-blue-700">LinkedIn - Simon C.</li>
          </a>
          <a href="https://zimbronapps.com/educacion/sistemas-computacionales/ingenieria-de-software/calidad-de-software/">
            <li className="m-5 hover:text-blue-700">ZimbronApp</li>
          </a>
        </ul>
      </div>
      <div className="text-white text-center bottom-0 absolute bg-black h-[150px] p-3">
        <p className="mt-3 text-base">
          Para concluir con el Blog, la información dada en el Blog nos da a
          entender bastante información nueva que nos abre espacio a un
          conocimineto nuevo, en este caso sobre lo importante que es la calida
          de el software, Mantenerlo, poder pensar en el a un futuro para
          escabilidad y formas de mejora de calidad de un software, aparte de
          esto el Blog mostro una mejor manera de conocer un buen software y
          como reconocerlo sea uno que usamos todos los días o uno nuevo.
        </p>
        <p className="mt-4 font-bold">Angel Stiven Toro Fuentes | Universidad Iberoamerica</p>
      </div>
    </>
  );
};

export default bibliografias;
