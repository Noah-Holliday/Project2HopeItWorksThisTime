(this.webpackJsonpproject2=this.webpackJsonpproject2||[]).push([[0],{20:function(e){e.exports=JSON.parse('{"listOfObjectsTypes":[{"ObjectType":"Camping Materials","Items":[{"name":"Bedroll","description":"Cozy up in and watch the stars."},{"name":"Campfire","description":"You\'ll need some light when it gets dark."},{"name":"Tent","description":"Finally a place to get away from the elements!"},{"name":"Structure","description":"Quite an upgrade from the tent."}]},{"ObjectType":"Surivial Items","Items":[{"name":"Hoe","description":"Grow some food like the olden days."},{"name":"Axe","description":"Go get some wood for the fire."},{"name":"Pickaxe","description":"Is this minecraft? Why on earth would you need this?"}]},{"ObjectType":"Grass","Items":[{"name":"Grass","description":"Its just grass bro."},{"name":"Large Grass","description":"Some slightly larger Grass"}]}]}')},44:function(e,t,r){},50:function(e,t,r){"use strict";r.r(t);var s=r(8),o=r(34),n=r.n(o),i=(r(44),function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,54)).then((function(t){var r=t.getCLS,s=t.getFID,o=t.getFCP,n=t.getLCP,i=t.getTTFB;r(e),s(e),o(e),n(e),i(e)}))}),a=r(12),c=r(15),j=r(53),l=r(51),b=r(7);function m(){return Object(b.jsxs)("mesh",{position:[0,-2.5,0],rotation:[-Math.PI/2,0,0],children:[Object(b.jsx)("planeBufferGeometry",{attach:"geometry",args:[100,100]}),Object(b.jsx)("meshLambertMaterial",{attach:"material",color:"rgb(61, 102, 42)"})]})}var u=r(9),O=r(52),d=r(20);function g(e){var t=Object(s.useRef)(),r=Object(O.a)("Project2HopeItWorksThisTime/Models/Arrow.glb"),o=r.nodes;r.materials;return Object(b.jsx)("group",{ref:t,dispose:null,children:Object(b.jsx)("mesh",Object(u.a)(Object(u.a)({},e),{},{onClick:function(t){console.log(e.arrowDirection),console.log(e.currentRenderPosition),console.log(e.currentRenderType),"negative-type"===e.arrowDirection&&e.currentRenderType>0?(e.setCurrentRenderPosition(0),e.setCurrentRender(e.currentRenderType-1)):"positive-type"===e.arrowDirection&&e.currentRenderType<d.listOfObjectsTypes.length-1?(e.setCurrentRenderPosition(0),e.setCurrentRender(e.currentRenderType+1)):"negative-item"===e.arrowDirection&&e.currentRenderPosition>0?e.setCurrentRenderPosition(e.currentRenderPosition-1):"positive-item"===e.arrowDirection&&e.currentRenderPosition<d.listOfObjectsTypes[e.currentRenderType].Items.length-1?e.setCurrentRenderPosition(e.currentRenderPosition+1):console.log("Invalid Input, no more items in that direction.")},geometry:o.Plane.geometry,material:o.Plane.material}))})}var p=r(11);function h(e){var t=Object.assign({},e),r=Object(s.useRef)(),o=Object(O.a)("/Models/grass.glb"),n=o.nodes,i=o.materials;return Object(b.jsx)("group",Object(u.a)(Object(u.a)({position:[0,-2.5,0],ref:r},t),{},{dispose:null,children:Object(b.jsx)("mesh",{geometry:n.grass.geometry,material:i.foliage,scale:.75})}))}function y(e){var t=Object.assign({},e),r=Object(s.useRef)(),o=Object(O.a)("/Models/grassLarge.glb"),n=o.nodes,i=o.materials;return Object(b.jsx)("group",Object(u.a)(Object(u.a)({position:[0,-2.5,0],ref:r},t),{},{dispose:null,children:Object(b.jsx)("mesh",{geometry:n.grassLarge.geometry,material:i.foliage})}))}function x(e){var t=Object.assign({},e),r=Object(s.useRef)(),o=Object(O.a)("Project2HopeItWorksThisTime/Models/bedroll.glb"),n=o.nodes,i=o.materials;return Object(b.jsxs)("group",Object(u.a)(Object(u.a)({position:[0,-2.5,0],ref:r},t),{},{dispose:null,children:[Object(b.jsx)("mesh",{geometry:n.Mesh_bedroll.geometry,material:i.foliage}),Object(b.jsx)("mesh",{geometry:n.Mesh_bedroll_1.geometry,material:i.rock})]}))}function f(e){var t=Object.assign({},e),r=Object(s.useRef)(),o=Object(O.a)("/Models/toolHoe.glb"),n=o.nodes,i=o.materials;return Object(b.jsxs)("group",Object(u.a)(Object(u.a)({position:[0,-2.5,0],ref:r},t),{},{dispose:null,children:[Object(b.jsx)("mesh",{geometry:n.Mesh_toolHoe.geometry,material:i.wood}),Object(b.jsx)("mesh",{geometry:n.Mesh_toolHoe_1.geometry,material:i.metal})]}))}function R(e){var t=Object.assign({},e),r=Object(s.useRef)(),o=Object(O.a)("/Models/toolPickaxe.glb"),n=o.nodes,i=o.materials;return Object(b.jsxs)("group",Object(u.a)(Object(u.a)({position:[0,-2.5,0],ref:r},t),{},{dispose:null,children:[Object(b.jsx)("mesh",{geometry:n.Mesh_toolPickaxe.geometry,material:i.wood}),Object(b.jsx)("mesh",{geometry:n.Mesh_toolPickaxe_1.geometry,material:i.metal})]}))}function P(e){var t=Object.assign({},e),r=Object(s.useRef)(),o=Object(O.a)("/Models/toolAxe.glb"),n=o.nodes,i=o.materials;return Object(b.jsxs)("group",Object(u.a)(Object(u.a)({position:[0,-2.5,0],ref:r},t),{},{dispose:null,children:[Object(b.jsx)("mesh",{geometry:n.Mesh_toolAxe.geometry,material:i.wood}),Object(b.jsx)("mesh",{geometry:n.Mesh_toolAxe_1.geometry,material:i.metal}),Object(b.jsx)("mesh",{geometry:n.Mesh_toolAxe_2.geometry,material:i.rock})]}))}function M(e){var t=Object.assign({},e),r=Object(s.useRef)(),o=Object(O.a)("/Models/campfire.glb"),n=o.nodes,i=o.materials;return Object(b.jsx)("group",Object(u.a)(Object(u.a)({position:[0,-2.5,0],ref:r},t),{},{dispose:null,children:Object(b.jsxs)("mesh",{geometry:n.campfire.geometry,material:n.campfire.material,children:[Object(b.jsxs)("group",{position:[0,.49,.03],scale:[.57,.49,.57],children:[Object(b.jsx)("mesh",{geometry:n.Mesh_bucket.geometry,material:i.metal}),Object(b.jsx)("mesh",{geometry:n.Mesh_bucket_1.geometry,material:i._defaultMat})]}),Object(b.jsx)("mesh",{geometry:n.rocks.geometry,material:i.rock,scale:[.74,.7,.74]}),Object(b.jsx)("mesh",{geometry:n.wood.geometry,material:n.wood.material,position:[-.01,0,-.04]})]})}))}function T(e){var t=Object.assign({},e),r=Object(s.useRef)(),o=Object(O.a)("/Models/tentClosed.glb"),n=o.nodes,i=o.materials;return Object(b.jsxs)("group",Object(u.a)(Object(u.a)({position:[0,-2.5,0],ref:r},t),{},{dispose:null,children:[Object(b.jsx)("mesh",{geometry:n.Mesh_tentClosed.geometry,material:i.wood}),Object(b.jsx)("mesh",{geometry:n.Mesh_tentClosed_1.geometry,material:i.cloth})]}))}function v(e){var t=Object.assign({},e),r=Object(s.useRef)(),o=Object(O.a)("/Models/structureRoof.glb"),n=o.nodes,i=o.materials;return Object(b.jsxs)("group",Object(u.a)(Object(u.a)({position:[0,-2.5,0],ref:r},t),{},{dispose:null,children:[Object(b.jsx)("mesh",{geometry:n.Mesh_structureRoof.geometry,material:i.wood}),Object(b.jsx)("mesh",{geometry:n.Mesh_structureRoof_1.geometry,material:i.woodDark})]}))}O.a.preload("/campfire.glb");var w=r(38);function C(e){var t;return Object(b.jsx)("text",(t={position:[0,3,0],outlineColor:"green",textAlign:"justify",maxWidth:300,lineHeight:1,letterSpacing:0},Object(p.a)(t,"letterSpacing",0),Object(p.a)(t,"anchorX","center"),Object(p.a)(t,"anchorY","top"),Object(p.a)(t,"text",e),Object(p.a)(t,"font","Philosopher"),Object(p.a)(t,"fontSize",.7),Object(p.a)(t,"children",Object(b.jsx)("meshPhongMaterial",{attach:"material",color:"#f70cd8"})),t))}function I(e){var t=d.listOfObjectsTypes[e.currentRenderType].Items.map((function(e){switch(console.log(e.name),e.name){case"Grass":default:return Object(b.jsx)(h,{});case"Bedroll":return Object(b.jsx)(x,{});case"Large Grass":return Object(b.jsx)(y,{});case"Hoe":return Object(b.jsx)(f,{});case"Pickaxe":return Object(b.jsx)(R,{});case"Axe":return Object(b.jsx)(P,{});case"Tent":return Object(b.jsx)(T,{});case"Campfire":return Object(b.jsx)(M,{});case"Structure":return Object(b.jsx)(v,{})}}));return console.log(t),Object(b.jsxs)("group",{children:[t[e.currentRenderPosition],C("Type: "+d.listOfObjectsTypes[e.currentRenderType].ObjectType+"\n\nName: "+d.listOfObjectsTypes[e.currentRenderType].Items[e.currentRenderPosition].name+"\nDescription: "+d.listOfObjectsTypes[e.currentRenderType].Items[e.currentRenderPosition].description)]})}function _(){var e=Object(s.useState)(0),t=Object(a.a)(e,2),r=t[0],o=t[1],n=Object(s.useState)(0),i=Object(a.a)(n,2),u=i[0],O=i[1];return Object(b.jsxs)(c.a,{style:{background:"#171717"},children:[Object(b.jsx)(j.a,{}),Object(b.jsx)(l.a,{}),Object(b.jsx)("ambientLight",{intensity:.5}),Object(b.jsx)("spotLight",{position:10,angle:.3}),Object(b.jsxs)(s.Suspense,{fallback:null,children:[Object(b.jsx)(g,{arrowDirection:"negative-type",setCurrentRenderPosition:O,currentRenderPosition:u,setCurrentRender:o,currentRenderType:r,scale:.5,position:[-7,-1.5,0],rotation:[-Math.PI/2,-Math.PI,0]}),Object(b.jsx)(g,{arrowDirection:"negative-item",setCurrentRenderPosition:O,currentRenderPosition:u,setCurrentRender:o,currentRenderType:r,scale:.3,position:[-4.5,-1.5,0],rotation:[Math.PI/2,-Math.PI/2,0]}),Object(b.jsx)(I,{currentRenderType:r,currentRenderPosition:u}),Object(b.jsx)(g,{arrowDirection:"positive-item",setCurrentRenderPosition:O,currentRenderPosition:u,setCurrentRender:o,currentRenderType:r,scale:.3,position:[4.5,-1.5,0],rotation:[Math.PI/2,Math.PI/2,0]}),Object(b.jsx)(g,{arrowDirection:"positive-type",setCurrentRenderPosition:O,currentRenderPosition:u,setCurrentRender:o,currentRenderType:r,scale:.5,position:[7,-1.5,0],rotation:[-Math.PI/2,0,0]}),Object(b.jsx)(m,{})]})]})}Object(c.b)({Text:w.a}),n.a.render(Object(b.jsx)(_,{}),document.getElementById("root")),i()}},[[50,1,2]]]);
//# sourceMappingURL=main.533430ce.chunk.js.map