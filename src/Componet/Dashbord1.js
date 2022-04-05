import React from 'react'
import {useState, useEffect } from 'react'

export default function Dashbord1() {

    const[record,setRecord] = useState([])
    const getData = () =>
   {
       fetch('https://jsonplaceholder.typicode.com/users').then(resposne=> resposne.json()).then(res=>setRecord(res))
   }
  
   useEffect(() => {
      getData();
   },)
    return (
        
   <div class="col main pt-5 mt-3">

<nav aria-label="breadcrumb">
<ol class="breadcrumb">
   <li class="breadcrumb-item"><a href="#">Home</a></li>
   <li class="breadcrumb-item"><a href="#">Library</a></li>
   <li class="breadcrumb-item active" aria-current="page">Data</li>
</ol>
</nav>
<p class="lead d-none d-sm-block">Add Employee Details and Records</p>
<div class="alert alert-warning fade collapse" role="alert" id="myAlert">
   <button type="button" class="close" data-dismiss="alert" aria-label="Close">
       <span aria-hidden="true">×</span>
       <span class="sr-only">Close</span>
   </button>
   <strong>Data and Records</strong> Learn more about employee
</div>
<div class="row mb-3">
   <div class="col-xl-3 col-sm-6 py-2">
       <div class="card bg-success text-white h-100">
           <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
               <div class="rotate">
                   <i class="fa fa-user fa-4x"></i>
               </div>
               <h6 class="text-uppercase">Users</h6>
               <h1 class="display-4">134</h1>
           </div>
       </div>
   </div>
   <div class="col-xl-3 col-sm-6 py-2">
       <div class="card text-white bg-danger h-100">
           <div class="card-body bg-danger">
               <div class="rotate">
                   <i class="fa fa-list fa-4x"></i>
               </div>
               <h6 class="text-uppercase">Posts</h6>
               <h1 class="display-4">87</h1>
           </div>
       </div>
   </div>
   <div class="col-xl-3 col-sm-6 py-2">
       <div class="card text-white bg-info h-100">
           <div class="card-body bg-info">
               <div class="rotate">
                 <i class="fab fa-twitter fa-4x"></i>
               </div>
               <h6 class="text-uppercase">Tweets</h6>
               <h1 class="display-4">125</h1>
           </div>
       </div>
   </div>
   <div class="col-xl-3 col-sm-6 py-2">
       <div class="card text-white bg-warning h-100">
           <div class="card-body">
               <div class="rotate">
                   <i class="fa fa-share fa-4x"></i>
               </div>
               <h6 class="text-uppercase">Shares</h6>
               <h1 class="display-4">36</h1>
           </div>
       </div>
   </div>
</div>
<hr/>
<div class="row ">
    <div class="col-lg-7 col-md-6 col-sm-12">
    <h5 class="mt-3 mb-3 text-secondary">Check More Records of Employees</h5>
    <div class="table-responsive">
    <table class="table table-striped">
                        <thead class="thead-light text-center" >
                            <tr>
                                <th>Sn</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Column</th>
                                <th>Organization</th>
                            </tr>
                        </thead>
                        <tbody>
                         {record.slice(0, 5).map((output)=>
                            <tr>
                                <td>{output.id}</td>
                                <td>{output.name}</td>
                                <td>{output.email}</td>
                                <td>{output.username}</td>
                                <td>{output.website}</td>
                                <td></td>
                            </tr>
                           )}
                        </tbody>
                        </table>

    </div>

    </div>
    <a id="more"></a>
        <hr/>
        <h2 class="sub-header mt-5">Use card decks for equal height rows of cards</h2>
        <div class="mb-3">
            <div class="card-deck">
                <div class="card card-inverse card-success text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>It's really good news that the new Bootstrap 5 now has support for CSS 3 flexboBootstrap 5 is the latest version of Bootstrap and the most extensive web framework with many features, all easy to use. We’ve hand-picked the list of free Bootstrap 5 admin dashboard templates..</p>
                            {/* <footer>Makes flexible layouts <cite title="Source Title">Faster</cite></footer> */}
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-warning text-center">
                    <div  class="card-body">
                    <blockquote class="card-blockquote">
                            <p>The focus of each template is different – some templates offer a wide range of customization while others focus on specific features. We’re sure you will find a template that suits your needs perfectly!</p>
                            {/* <footer>These handy utilities make it <cite title="Source Title">Easy</cite></footer> */}
                        </blockquote>
                    </div>
                </div>
                <div class="card card-inverse card-info text-center">
                    <div class="card-body">
                        <blockquote class="card-blockquote">
                            <p>If you want to use cool icons in Bootstrap 5, you'll have to find your own such as Font Awesome or Ionicons.</p>
                            <footer>The Glyphicons are not <cite title="Source Title">Included</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
        <a id="flexbox"></a>
        <hr/>
        <h2 class="mt-5">Masonry-style grid columns</h2>
        <h6>with Bootstrap 5 flexbox</h6>
        <div class="card-columns mb-3">
            <div class="card">
                <img class="card-img-top img-fluid" src="//placehold.it/600x200/444/fff?text=..." alt="Card image cap"/>
                <div class="card-body">
                    <h4 class="card-title">New XL Grid Tier</h4>
                    <p class="card-text">With screens getting smaller, Bootstrap 5 introduces a new grid breakpoint with the col-xl-* classes. This extra tier extends the media query range all the way down to 576 px. Eventhough the new XL tier would make one think it’s been added to support extra large screens, it’s actually the opposite.</p>
                </div>
            </div>
            <div class="card card-body">
                <blockquote class="card-blockquote">
                    <p>Bootstrap 5 will be lighter and easier to customize.</p>
                    <footer>
                        <small class="text-muted">
                          Someone famous like <cite title="Source Title">Mark Otto</cite>
                        </small>
                    </footer>
                </blockquote>
            </div>
            <div class="card">
                <img class="card-img-top img-fluid" src="//placehold.it/600x200/bbb/fff?text=..." alt="Card image cap"/>
                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card">
                <img class="card-img img-fluid" src="//placehold.it/600x200/777/fff?text=..." alt="Card image"/>
            </div>
            <div class="card card-body text-right">
                <blockquote class="card-blockquote">
                    <p>There are also some interesting new text classes to uppercase or capitalize.</p>
                    <footer>
                        <small class="text-muted">
                          Someone famous in <cite title="Source Title">Bootstrap</cite>
                        </small>
                    </footer>
                </blockquote>
            </div>
            <div class="card">
                <div class="card-body">
                    <ul class="list-unstyled">
                        <li class="text-capitalize"><code class="text-lowercase">text-capitalize</code> Capitalize each word</li>
                        <li class="text-uppercase"><code class="text-lowercase">text-uppercase</code> Uppercase text</li>
                        <li class="text-success"><code>text-success</code> Contextual colors for text</li>
                        <li><code>text-muted</code> <span class="text-muted">Lighten with muted</span></li>
                        <li><code>text-info</code> <span class="text-muted">Info text color</span></li>
                        <li><code>text-danger</code> <span class="text-muted">Danger text color</span></li>
                        <li><code>text-warning</code> <span class="text-muted">Warning text color</span></li>
                        <li><code>text-primary</code> <span class="text-primary">Primary text color</span></li>
                    </ul>
                </div>
            </div>
            <div class="card card-body">
                <h4 class="card-title">Heading</h4>
                <p class="card-text">So now that you've seen some of what Bootstrap 5 has to offer, are you going to give it a try?</p>
                <p class="card-text"><small class="text-muted">Last updated 12 mins ago</small></p>
            </div>
            </div>
            <a id="layouts"></a>
        <hr/>
        <h2 class="sub-header mt-5">Interesting layouts and elements</h2>
        <div class="row mb-3">
            <div class="col-lg-6">
 
                <div class="card mb-3">
                    <div class="card-header">
                        Bye .well, .panel &amp; .thumbnail
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Replaced with .card</h4>
                        <p class="card-text">All of these Bootstrap 5.x components have been dropped entirely for the new card component.</p>
                        <button type="button" class="btn btn-secondary btn-lg">Large</button>
                    </div>
                </div>
 
            </div>
            </div>
</div>

  </div>
)
}
