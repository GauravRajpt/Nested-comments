

function Addinput(e) {
    
  e.target.parentNode.nextSibling.nextSibling.style.display='block'
}



function AddComment(e) {

    if( e.target.previousSibling.previousElementSibling.value===''){
        return;
    }
    console.log(e.target.previousSibling.previousElementSibling.value)
  const comment = `
    <div class='newcomment'>
    <div class="comment">
   ${e.target.previousSibling.previousElementSibling.value}
  </div>
  <div>
    <button onclick="Addinput(event)">Add comment</button>
  </div>
  <div class="input" id="input">
      <input type="text" id="inputbox" placeholder="write comment"/>
      <button onclick="AddComment(event)">Add comment</button>
    </div>
    </div>
  `;
  const div= document.createElement('div');
  div.innerHTML=comment;
   
    e.target.parentNode.style.display='none';
  e.target.parentNode.parentNode.append(div);
  e.target.previousSibling.previousElementSibling.value=''
}
