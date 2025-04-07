import {useParams} from 'react-router-dom';
import {adidasArr} from './PageOne.tsx';


export const Model = () => {
  const params = useParams();
  const currModel = adidasArr.find(model => model.id === Number(params.id));

  console.log(params);

  return (
    <>
      {currModel ? (
        <div style={{textAlign: 'center'}}>
          <h2>{currModel.model}</h2>
          <h4>{currModel.collection}</h4>
          <h3>{currModel.price}</h3>

          <img
            src={currModel.picture}
            alt={currModel.model}
            style={{width: '600px', height: 'auto'}}
          />
        </div>
      ) : (
        <h2 style={{textAlign: 'center'}}>The model is not found.</h2>
      )}
    </>
  )
}