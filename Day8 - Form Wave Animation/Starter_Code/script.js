const labels = document.querySelectorAll( '.form-control label' );
const SPEED = 50

labels.forEach( label => {
  label.innerHTML = label.innerText
    .split( '' )
    .map( ( letter, index ) => `<span style="transition-delay:${ index * SPEED }ms">${ letter }</span>` )
    .join( '' )
} )