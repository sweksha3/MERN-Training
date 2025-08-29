import React from 'react'

export const Boot = () => {
  return (
    <>
    <div>
      {/* <button type="button" classNameName="btn btn-primary">Primary</button>
<button type="button" className="btn btn-secondary">Secondary</button>
<button type="button" className="btn btn-success">Success</button> */}
<button type="button" className="btn btn-danger">Danger</button>
{/* <button type="button" className="btn btn-warning">Warning</button> */}
<button type="button" className="btn btn-info">Info</button>   <br/>  <br/>
{/* <button type="button" className="btn btn-light">Light</button>
<button type="button" className="btn btn-dark">Dark</button>

<button type="button" className="btn btn-link">Link</button> */}

<label htmlFor="inputPassword5" class="form-label">Password</label>
<input type="password" placeholder='enter password' className="form-control"  />

<button type="button" className="btn btn-info">add</button>

<hr/> <hr/>
    
{/* <table class="table-primary">                           this would give blue table      */}            
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
    </tr>
  </tbody>
</table>
</div>
</>
  )
}
