function BCats (){ 
const cats = [
  { id: 1, name: "Cheetah", latinName: "Acinonyx jubatus" },
  { id: 2, name: "Cougar", latinName: "Puma concolor" },
  { id: 3, name: "Jaguar", latinName: "Panthera onca" },
  { id: 4, name: "Leopard", latinName: "Panthera pardus" },
  { id: 5, name: "Lion", latinName: "Panthera leo" },
  { id: 6, name: "Snow leopard", latinName: "Panthera uncia" },
  { id: 7, name: "Tiger", latinName: "Panthera tigris" },
];

return (
<div className="BigCats componentBox">
<ul> {}
{ cats.map(cat => (

<li>{cat.name}</li>

)) }
</ul>
</div>
)
}

export default BCats;

const CatItems = cats.map(cat => (
<Bcats
key={cat.id} // key prop is required for lists
name={cat.name}
latinName={cat.latinName}/>

)
);

// separate component for displaying each movie
function Movie({title, year, synopsis}) {
return (
{/* no key prop here - only at top level inside .map */}
<li>
<h3>{title}</h3> <span>({year})</span>
<div>{synopsis}</div>
</li>
)
}