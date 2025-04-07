import {useParams} from 'react-router-dom';
import {NavLink} from 'react-router';
import {adidasModulesState, AdidasModelType} from './Adidas.tsx';
import {pumaModelsState, PumaModelType} from './Puma.tsx';
import {nikeModelsState, NikeModelType} from './Nike.tsx';
import {M} from './_styles.ts';


type CrossModalType = {
  [key: string]: (AdidasModelType[] | PumaModelType[] | NikeModelType[]);
}

const crossModal: CrossModalType = {
  adidas: adidasModulesState,
  puma: pumaModelsState,
  nike: nikeModelsState
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
        <M.SneakersContent>
          <M.NavWrapper>
            <NavLink to={`/${model}`}>
              {model ?
                `< Back to ${model.charAt(0).toUpperCase()}${model.slice(1).toLowerCase()}` :
                ''
              }
            </NavLink>
          </M.NavWrapper>
          <h2>{currentModel?.model}</h2>
          <h4>{currentModel?.collection}</h4>
          <h3>{currentModel?.price}</h3>

          <img
            src={currentModel?.picture}
            alt={currentModel?.model}
            style={{width: '600px', height: 'auto', marginBottom: '220px'}}
          />
        </M.SneakersContent>
      ) : (
        <h2 style={{textAlign: 'center'}}>The model is not found.</h2>
      )}
    </>
  )
}