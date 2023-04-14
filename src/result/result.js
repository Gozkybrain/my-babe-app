import React from 'react';
import './style.css';
import Globe from '../images/globe.png';
import Preloader from '../loader/preloader';

function Result({ formData }) {
  const [showPreloader, setShowPreloader] = React.useState(true);

  // Simulate a 3 second delay
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  let result;

  //   
  const newBond = formData.myName.concat(formData.babeName);
  // This joins both myName and babe name together

  const newBonds = newBond.split("");
  // this turns it back to an array often adding spaces too

  const myBond = [...new Set(newBonds.filter(char => char !== ""))];
  // this will eliminate duplicate values
  const myBonds = myBond.length * 10;

  const theSpace = ((formData.babeState.length) - (formData.myState.length)) * 10;
  // this will subtract the states and multiply by 10

  const ourSpace = Math.abs(theSpace);
  // this will ensure we always have a positive value

  const ourBonds = ((formData.babeName.length) + (formData.myName.length)) * 10;
  // this will render an array length of the exact values entered, multiplied by 10

  const babeNameLength = formData.babeName.length;
  // this is a length of the babe name value

  const myNameLength = formData.myName.length;
  // this is a length of the myName value

  const babeLocation = formData.babeState.length;
  // this is a length of the babeState value

  const userLocation = formData.myState;
  // this the use state value

  const myName = formData.myName;
  // this is the exact value of the user name

  const babeName = formData.babeName;
  // this is the exact value of the user name


  if (myBonds >= 120 && ourSpace <= 90) {
    result = 'Don’t worry, ' + babeName + ' is faithful, send chocolates and nasty pics, they deserve it.';
  } else if (ourSpace > ourBonds) {
    result = 'Roses are red, Violets are blue; see they are sharing ' + babeName + ' with you.' + babeLocation + ' keh!';
  } else if (babeNameLength === ourSpace) {
    result = 'Your partner is cheating, you just haven’t found out. They are really good at it and you may never even find out.';
  } else if (ourBonds > 80 && ourSpace > 40) {
    result = myName + ', you are starving ' + babeName + ',  Make out time this weekend for couples night';
  } else if (ourBonds <= 60) {
    result = 'Forget about cheating, ' + babeName + ' doesn’t even love you. You’re just being used!';
  } else if (ourBonds + ourSpace >= 150) {
    result = babeName + ' loves you for real, but is going through a phase. You need to pay more attention to things they are not saying more than things they actually say.';
  } else if ((babeNameLength + myNameLength) % 2 !== 0) {
    result = 'I do not know how to say it but, you both have a twin flame. Fight as much as you want, but you will always be back together.';
  } else if ((babeNameLength + myNameLength) % 2 === 0) {
    result = 'LOL small nyash dey shake sha, ' + myName + ' the cheater from ' + userLocation + ' wants to know if ' + babeName + ' is cheating LOL';
  } else if (myNameLength % 2 === 0) {
    result = 'This relationship is on one bar, somehow i even think everything is your fault.';
  } else if (myNameLength % 2 !== 0) {
    result = babeName + ' is cheating on you with the number saved as APPLE INC. You know the person, you think they are just friends right?';
  } else {
    result = 'Come on, do you even love ' + myName + '? Why are you even doing this?';
  }

  return (
    <div>
      {showPreloader ? (
        <div><Preloader /></div>
      ) : (
        <div>
          <div className="orbit">
            <img src={Globe} alt="loader" className="orbiting-img" />
          </div>
          <div className="myContainer">
  <div className="box1">{formData.myName}</div>
  <div className="box2">{formData.babeName}</div>
  <div className="box3">{result}</div>
  <button className='mybtn' type='button' onClick={() => window.location.reload(true)}>Check Again</button>
</div>

          {/* <p>My Name: {formData.myName}</p>
          <p>Partner's Name: {formData.babeName}</p>
          <p>My State: {formData.myState}</p>
          <p>Partner's State: {formData.babeState}</p>
          <p>Result: {result}</p> */}
        </div>
      )}
    </div>
  );
}

export default Result;
