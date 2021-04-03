import Image from 'next/image';

const PersonCard = ({name, image, description, links}) => {
  return (
    <div className='person' id={`${name}-person-card`}>
      <h3>{name}</h3>
      <Image 
        src={image}
        alt={`Picture of ${name}`}
        width={75}
        height={75}
      />
      <p>{description}</p>
      <style>{`
          .person {
            min-width: 200px;
            max-width: 200px;
            min-height: 200px;
            max-height: 200px;
            margin: 1rem;
            text-align: center;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            padding: 1.5rem;
            flex: 1;
          }
        `
      }`</style>
    </div>
  );
}

export default PersonCard;