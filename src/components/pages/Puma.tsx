import {Link} from 'react-router-dom';
import pumaModel1 from './../../assets/puma/pumaModel1.jpg'
import pumaModel2 from './../../assets/puma/pumaModel2.jpg'
import pumaModel3 from './../../assets/puma/pumaModel3.jpg'


export type PumaModelType = {
  id: number
  model: string
  collection: string
  price: string
  picture: string
}

export const pumaModelsState: PumaModelType[] = [
  {
    id: 11,
    model: 'PUMA ADIFOM TRXN',
    collection: 'Spring/Summer 2023',
    price: '$110.00',
    picture: pumaModel1,
  },
  {
    id: 22,
    model: 'PUMA ADIFOM SUPER',
    collection: 'Autumn/Winter 2023',
    price: '$130.00',
    picture: pumaModel2,
  },
  {
    id: 33,
    model: 'PUMA SUPER SUPERSKI',
    collection: 'Limited Edition',
    price: '$160.00',
    picture: pumaModel3,
  },
]

export const Puma = () => {
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>PUMA</h2>
      <div style={{display: 'flex', justifyContent: 'center', gap: '20px'}}>
        {pumaModelsState.map(model => (
            <Link key={model.id} to={`/puma/${model.id}`}>
              <img
                src={model.picture}
                alt={model.model}
                style={{width: '350px', height: 'auto'}}
              />
            </Link>
          )
        )}
      </div>
      <p>
        What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard
        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
        specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
        unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently
        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout.
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
        'Content here,
        content here', making it look like readable English. Many desktop publishing packages and web page editors now
        use Lorem Ipsum
        as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
        Various versions
        have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


        Where does it come from?
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
        literature from 45 BC,
        making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
        looked up one of the
        more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
        classical literature,
        discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
        Malorum"
        (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
        very popular during the
        Renaissance.
        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      </p>
    </div>
  )
}