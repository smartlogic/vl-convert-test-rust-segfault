import{geoPath as n,geoAlbers as u,geoAlbersUsa as g,geoAzimuthalEqualArea as p,geoAzimuthalEquidistant as m,geoConicConformal as h,geoConicEqualArea as d,geoConicEquidistant as f,geoEqualEarth as E,geoEquirectangular as q,geoGnomonic as j,geoIdentity as b,geoMercator as A,geoNaturalEarth1 as P,geoOrthographic as v,geoStereographic as z,geoTransverseMercator as w}from"/-/d3-geo@v2.0.2-GbED5IXVv8LfSAM0E5X9/dist=es2020,mode=imports,min/optimized/d3-geo.js";import{geoMollweide as C}from"/-/d3-geo-projection@v3.0.0-Ixov9IPZ53qbokV1HtFZ/dist=es2020,mode=imports,min/optimized/d3-geo-projection.js";const x=n(),c=["clipAngle","clipExtent","scale","translate","center","rotate","parallels","precision","reflectX","reflectY","coefficient","distance","fraction","lobes","parallel","radius","ratio","spacing","tilt"];function I(e,r){return function l(){const o=r();return o.type=e,o.path=n().projection(o),o.copy=o.copy||function(){const i=l();return c.forEach(a=>{o[a]&&i[a](o[a]())}),i.path.pointRadius(o.path.pointRadius()),i},o}}function s(e,r){if(!e||typeof e!="string")throw new Error("Projection type must be a name string.");return e=e.toLowerCase(),arguments.length>1?(t[e]=I(e,r),this):t[e]||null}function M(e){return e&&e.path||x}const t={albers:u,albersusa:g,azimuthalequalarea:p,azimuthalequidistant:m,conicconformal:h,conicequalarea:d,conicequidistant:f,equalEarth:E,equirectangular:q,gnomonic:j,identity:b,mercator:A,mollweide:C,naturalEarth1:P,orthographic:v,stereographic:z,transversemercator:w};for(const e in t)s(e,t[e]);export{M as getProjectionPath,s as projection,c as projectionProperties};export default null;
