import {useParams} from 'react-router-dom';
import {adidasArr, AdidasItem} from './PageOne.tsx';
import {pumaModelsState, PumaModelType} from './Puma.tsx';


type CrossModalType = {
  [key: string]: (AdidasItem[] | PumaModelType[]);
}

const crossModal: CrossModalType = {
  adidas: adidasArr,
  puma: pumaModelsState,
}

export const Model = () => {
  // const params = useParams();
  const { id, model } = useParams();

  const currentModel = model && crossModal[model]
    ? crossModal[model].find(item => item.id === Number(id))
    : null;

  console.log(
    'id:', id,
    '-',
    'model:', model
  );

  // const location = useLocation();
  // const isAdidas = location.pathname.includes('/adidas/');

  return (
    <>
      {currentModel ? (
        <div style={{textAlign: 'center'}}>
          <h2>{currentModel?.model}</h2>
          <h4>{currentModel?.collection}</h4>
          <h3>{currentModel?.price}</h3>

          <img
            src={currentModel?.picture}
            alt={currentModel?.model}
            style={{width: '600px', height: 'auto'}}
          />
        </div>
      ) : (
        <h2 style={{textAlign: 'center'}}>The model is not found.</h2>
      )}
    </>
  )
}