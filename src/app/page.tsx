import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-[10%] items-center text-center justify-center">
      <Nav />
      <div className="grid grid-cols-2 items-center mx-20 gap-4 text-center justify-center  ">
        <div className=" h-80 p-5  text-center">
          <h1 className=" text-3xl font-semibold ">Introducción al Blog:</h1>
          <p className="text-xl p-5">
            Este blog tienen como proposito informar sobre{" "}
            <b>
              a calidad del software, tomando en cuenta sus paradigmas,
              Lenguajes entre otros terminos importan te para una buena calidad
              de software
            </b>
            , Espero que el blog sea de su agrado, continuaremos explicando la
            importancia del software.
          </p>
        </div>
        <div className="mx-auto">
          <Image
            src="/images/csoftware.png"
            width={500}
            height={350}
            alt="Calidad image"
            priority={true}
          />
        </div>
        <div className="mx-auto">
          <Image
            src="/images/software.png"
            width={400}
            height={350}
            alt="Calidad image"
            priority={true}
          />
        </div>
        <div className=" mt-3 h-80 p-4  text-center">
          <h1 className=" text-3xl font-semibold">
            Importancia de calidad de software
          </h1>
          <p>
            La importancia radica principalmente en entregar productos de
            calidad esperada, en donde se previenen riesgos a futuro. Así mismo,
            todo software puede tener fallos que terminen siendo responsables de
            grandes pérdidas de dinero para la empresa. Cabe resaltar que
            mientras más tarde se detecten los defectos o errores, conocer cada
            uno de los indicadores del proceso de la calidad del software y cómo
            se está desempeñando su producto, es indispensable para brindar
            soluciones claras a las necesidades de los usuarios, desde un
            aspecto fácil de manejar y que sea cómodo. El objetivo, es que logre
            soportar todos los requerimientos, sea amigable, seguro, útil,
            usable, estable y satisfaga las necesidades y requerimientos del
            usuario sin que presente fallos o errores.
          </p>
        </div>
      </div>
      <div className="w-[50%] mx-auto mt-10 p-4 text-center">
        <h1 className="text-3xl font-semibold">
          ¿Cómo se mide la calidad del software?
        </h1>
        <p className="mt-5 ">
          Hay diferentes maneras de medir la calidad del software. Una forma es
          pensar en lo que el software debe hacer. Si el software cumple con los
          requisitos establecidos, entonces es funcional. Otra forma de medir la
          calidad del software es pensar en cómo se usa. Si el software es fácil
          de usar, entonces es usable.
        </p>
      </div>
      <div className="w-[50%] mx-auto mt-10 p-4  text-center">
        <h1 className="text-3xl font-semibold">
          ¿Por qué es importante la calidad del software en el mundo digital?
        </h1>
        <p className="mt-5 ">
          En un mundo cada vez más digital, el software está en todas partes.
          Usamos software para jugar, trabajar, aprender y comunicarnos. Los
          errores y problemas en el software pueden tener un impacto negativo en
          nuestras vidas. Pueden hacer que el software sea difícil de usar,
          inseguro o incluso peligroso.
        </p>
      </div>
      <div className="w-[50%] mx-auto mt-10 p-4 mb-10 text-center">
        <h1 className="text-3xl font-semibold">
          ¿Cómo podemos mejorar la calidad del software?
        </h1>
        <p className="mt-5 ">
          Hay muchas cosas que podemos hacer para mejorar la calidad del
          software. Podemos seguir las mejores prácticas de desarrollo de
          software. Podemos realizar pruebas exhaustivas del software. Y podemos
          usar estándares y reglas para medir y mejorar la calidad.
        </p>
      </div>
      <div className="text-white bottom-0 bg-black h-[150px] p-3">
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
    </main>
  );
}
