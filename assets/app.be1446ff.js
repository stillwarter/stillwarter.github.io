import{d as br,o as nn,c as rn,C as Ji,b as co,F as Wr,L as ss,M as as,x as Ce,a as Ur,_ as Sr,u as Fo,f as mt,K as Hs,t as Yn,h as os,a1 as tn,S as nu,w as Kd,a2 as iu,i as Jd,R as ru,a3 as Qd,e as ef,z as Er,N as su,D as cl,I as uo,a4 as tf,l as nf,a5 as rf,a6 as sf,a7 as af,a8 as of,a9 as lf,aa as cf,ab as uf,ac as df,ad as ff,ae as hf,af as pf,ag as mf,ah as gf}from"./chunks/framework.598f53ee.js";import{t as au}from"./chunks/theme.b072c6b4.js";const _f=r=>(ss("data-v-14b53971"),r=r(),as(),r),vf=_f(()=>Ce("footer",{id:"foo"},[Ur(" Copyright © 2019-2023 | the model from "),Ce("a",{href:"https://process1024.github.io/vitepress/"}," vitepress "),Ur(" and "),Ce("a",{href:"https://github.com/clark-cui/vitepress-blog-zaun"}," vitepress-blog-zaun "),Ur(" | have a good time ")],-1)),xf=br({__name:"myLayout",setup(r){const{Layout:e}=au;return(t,n)=>(nn(),rn(Wr,null,[Ji(co(e)),vf],64))}});const yf=Sr(xf,[["__scopeId","data-v-14b53971"]]);const bf=r=>(ss("data-v-f78eb7b9"),r=r(),as(),r),Sf={class:"main"},Mf={class:"mytags"},wf=["onClick"],Tf={class:"chosemytag"},Ef=bf(()=>Ce("div",{class:"colorline"},null,-1)),Cf={class:"mytagslist"},Af={class:"theTagTitle"},Lf={class:"list"},Pf=["href"],Df=br({__name:"tags",setup(r){const{theme:e}=Fo(),t=e.value.posts,n={};let i=mt(""),s=mt("");for(let a of t){const l=a.frontMatter.tags;if(!l)break;if(typeof l=="object")for(let c of l)n[c]||(n[c]=[]),n[c].push(a);else n[l]||(n[l]=[]),n[l].push(a)}function o(a,l){s.value=l,i=a}return(a,l)=>(nn(),rn("div",Sf,[Ce("div",Mf,[(nn(),rn(Wr,null,Hs(n,(c,u)=>Ce("div",{class:"mytag",onClick:d=>o(u,c)},[Ce("div",Tf,[Ur(Yn(u)+" ",1),Ce("sup",null,Yn(c.length),1)])],8,wf)),64))]),Ef,Ce("div",Cf,[Ce("div",Af,Yn(co(i)),1),(nn(!0),rn(Wr,null,Hs(co(s),(c,u)=>(nn(),rn("div",Lf,[Ce("a",{href:c.regularPath,class:"singlelist"},[Ce("div",null,Yn(c.frontMatter.title),1),Ce("div",null,Yn(c.frontMatter.date),1)],8,Pf)]))),256))])]))}});const Rf=Sr(Df,[["__scopeId","data-v-f78eb7b9"]]),If={class:"main"},Of={class:"archievs"},Ff={class:"arc"},zf={class:"yeartitle"},Nf={class:"archievsmain"},Bf=br({__name:"archives",setup(r){const{theme:e}=Fo(),t=e.value.posts,n={};console.log(t);for(let i of t){const s=i.frontMatter.date;i.frontMatter.layout!==!1&&(n[s]||(n[s]=[]),n[s].push(i))}return(i,s)=>(nn(),rn("div",If,[Ce("div",Of,[(nn(),rn(Wr,null,Hs(n,(o,a)=>Ce("div",Ff,[Ce("div",zf,Yn(a.slice(0,4)),1),(nn(!0),rn(Wr,null,Hs(n[a],(l,c)=>(nn(),rn("div",Nf,[Ce("div",null,Yn(l.frontMatter.title),1),Ce("div",null,Yn(l.frontMatter.date),1)]))),256))])),64))])]))}});const Uf=Sr(Bf,[["__scopeId","data-v-8264e16e"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zo="150",zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kf=0,ul=1,Gf=2,ou=1,Vf=2,Fr=3,oi=0,jt=1,Kn=2,ri=0,ir=1,dl=2,fl=3,hl=4,Wf=5,Qi=100,Hf=101,qf=102,pl=103,ml=104,Xf=200,jf=201,$f=202,Yf=203,lu=204,cu=205,Zf=206,Kf=207,Jf=208,Qf=209,eh=210,th=0,nh=1,ih=2,fo=3,rh=4,sh=5,ah=6,oh=7,uu=0,lh=1,ch=2,mn=0,uh=1,dh=2,fh=3,hh=4,ph=5,du=300,ur=301,dr=302,ho=303,po=304,Qs=306,Hr=1e3,hn=1001,mo=1002,Tt=1003,gl=1004,pa=1005,Pt=1006,mh=1007,qr=1008,Pi=1009,gh=1010,_h=1011,fu=1012,vh=1013,Mi=1014,wi=1015,Di=1016,xh=1017,yh=1018,rr=1020,bh=1021,pn=1023,Sh=1024,Mh=1025,Ei=1026,fr=1027,wh=1028,Th=1029,Eh=1030,Ch=1031,Ah=1033,ma=33776,ga=33777,_a=33778,va=33779,_l=35840,vl=35841,xl=35842,yl=35843,Lh=36196,bl=37492,Sl=37496,Ml=37808,wl=37809,Tl=37810,El=37811,Cl=37812,Al=37813,Ll=37814,Pl=37815,Dl=37816,Rl=37817,Il=37818,Ol=37819,Fl=37820,zl=37821,xa=36492,Ph=36283,Nl=36284,Bl=36285,Ul=36286,Gn=3e3,Ve=3001,Dh=3200,Rh=3201,Ih=0,Oh=1,bn="srgb",Xr="srgb-linear",hu="display-p3",ya=7680,Fh=519,kl=35044,Gl="300 es",go=1035;class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ba=Math.PI/180,Vl=180/Math.PI;function ls(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ht[r&255]+ht[r>>8&255]+ht[r>>16&255]+ht[r>>24&255]+"-"+ht[e&255]+ht[e>>8&255]+"-"+ht[e>>16&15|64]+ht[e>>24&255]+"-"+ht[t&63|128]+ht[t>>8&255]+"-"+ht[t>>16&255]+ht[t>>24&255]+ht[n&255]+ht[n>>8&255]+ht[n>>16&255]+ht[n>>24&255]).toLowerCase()}function Dt(r,e,t){return Math.max(e,Math.min(t,r))}function zh(r,e){return(r%e+e)%e}function Sa(r,e,t){return(1-t)*r+t*e}function Wl(r){return(r&r-1)===0&&r!==0}function Nh(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function hs(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Gt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ct{constructor(){Ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],v=n[8],h=i[0],p=i[3],g=i[6],x=i[1],_=i[4],S=i[7],b=i[2],w=i[5],C=i[8];return s[0]=o*h+a*x+l*b,s[3]=o*p+a*_+l*w,s[6]=o*g+a*S+l*C,s[1]=c*h+u*x+d*b,s[4]=c*p+u*_+d*w,s[7]=c*g+u*S+d*C,s[2]=f*h+m*x+v*b,s[5]=f*p+m*_+v*w,s[8]=f*g+m*S+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,m=c*s-o*l,v=t*d+n*f+i*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/v;return e[0]=d*h,e[1]=(i*c-u*n)*h,e[2]=(a*n-i*o)*h,e[3]=f*h,e[4]=(u*t-i*l)*h,e[5]=(i*s-a*t)*h,e[6]=m*h,e[7]=(n*l-c*t)*h,e[8]=(o*t-n*s)*h,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ma.makeScale(e,t)),this}rotate(e){return this.premultiply(Ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ma.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ma=new Ct;function pu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function jr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}class li{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const f=s[o+0],m=s[o+1],v=s[o+2],h=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=h;return}if(d!==h||l!==f||c!==m||u!==v){let p=1-a;const g=l*f+c*m+u*v+d*h,x=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){const b=Math.sqrt(_),w=Math.atan2(b,g*x);p=Math.sin(p*w)/b,a=Math.sin(a*w)/b}const S=a*x;if(l=l*p+f*S,c=c*p+m*S,u=u*p+v*S,d=d*p+h*S,p===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[o],f=s[o+1],m=s[o+2],v=s[o+3];return e[t]=a*v+u*d+l*m-c*f,e[t+1]=l*v+u*f+c*d-a*m,e[t+2]=c*v+u*m+a*f-l*d,e[t+3]=u*v-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(s/2),f=l(n/2),m=l(i/2),v=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"YXZ":this._x=f*u*d+c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"ZXY":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d-f*m*v;break;case"ZYX":this._x=f*u*d-c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d+f*m*v;break;case"YZX":this._x=f*u*d+c*m*v,this._y=c*m*d+f*u*v,this._z=c*u*v-f*m*d,this._w=c*u*d-f*m*v;break;case"XZY":this._x=f*u*d-c*m*v,this._y=c*m*d-f*u*v,this._z=c*u*v+f*m*d,this._w=c*u*d+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,d=l*i+s*n-o*t,f=-s*t-o*n-a*i;return this.x=c*l+f*-s+u*-a-d*-o,this.y=u*l+f*-o+d*-s-c*-a,this.z=d*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wa.copy(this).projectOnVector(e),this.sub(wa)}reflect(e){return this.sub(wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wa=new N,Hl=new li;function sr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ta(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Bh=new Ct().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Uh=new Ct().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Jn=new N;function kh(r){return r.convertSRGBToLinear(),Jn.set(r.r,r.g,r.b).applyMatrix3(Uh),r.setRGB(Jn.x,Jn.y,Jn.z)}function Gh(r){return Jn.set(r.r,r.g,r.b).applyMatrix3(Bh),r.setRGB(Jn.x,Jn.y,Jn.z).convertLinearToSRGB()}const Vh={[Xr]:r=>r,[bn]:r=>r.convertSRGBToLinear(),[hu]:kh},Wh={[Xr]:r=>r,[bn]:r=>r.convertLinearToSRGB(),[hu]:Gh},Mt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Xr},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Vh[e],i=Wh[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Bi;class mu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bi===void 0&&(Bi=jr("canvas")),Bi.width=e.width,Bi.height=e.height;const n=Bi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=sr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(sr(t[n]/255)*255):t[n]=sr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class gu{constructor(e=null){this.isSource=!0,this.uuid=ls(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ea(i[o].image)):s.push(Ea(i[o]))}else s=Ea(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ea(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?mu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hh=0;class At extends Oi{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=hn,i=hn,s=Pt,o=qr,a=pn,l=Pi,c=At.DEFAULT_ANISOTROPY,u=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=ls(),this.name="",this.source=new gu(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==du)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hr:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hr:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=du;At.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,t=0,n=0,i=1){je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],v=l[9],h=l[2],p=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-h)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+h)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,S=(m+1)/2,b=(g+1)/2,w=(u+f)/4,C=(d+h)/4,y=(v+p)/4;return _>S&&_>b?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=w/n,s=C/n):S>b?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=w/i,s=y/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=C/s,i=y/s),this.set(n,i,s,t),this}let x=Math.sqrt((p-v)*(p-v)+(d-h)*(d-h)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-v)/x,this.y=(d-h)/x,this.z=(f-u)/x,this.w=Math.acos((c+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vn extends Oi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new At(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _u extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qh extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cs{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],d=e[l+1],f=e[l+2];u<t&&(t=u),d<n&&(n=d),f<i&&(i=f),u>s&&(s=u),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),d=e.getY(l),f=e.getZ(l);u<t&&(t=u),d<n&&(n=d),f<i&&(i=f),u>s&&(s=u),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)mi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(mi)}else n.boundingBox===null&&n.computeBoundingBox(),Ca.copy(n.boundingBox),Ca.applyMatrix4(e.matrixWorld),this.union(Ca);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),ps.subVectors(this.max,Cr),Ui.subVectors(e.a,Cr),ki.subVectors(e.b,Cr),Gi.subVectors(e.c,Cr),qn.subVectors(ki,Ui),Xn.subVectors(Gi,ki),gi.subVectors(Ui,Gi);let t=[0,-qn.z,qn.y,0,-Xn.z,Xn.y,0,-gi.z,gi.y,qn.z,0,-qn.x,Xn.z,0,-Xn.x,gi.z,0,-gi.x,-qn.y,qn.x,0,-Xn.y,Xn.x,0,-gi.y,gi.x,0];return!Aa(t,Ui,ki,Gi,ps)||(t=[1,0,0,0,1,0,0,0,1],!Aa(t,Ui,ki,Gi,ps))?!1:(ms.crossVectors(qn,Xn),t=[ms.x,ms.y,ms.z],Aa(t,Ui,ki,Gi,ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rn=[new N,new N,new N,new N,new N,new N,new N,new N],mi=new N,Ca=new cs,Ui=new N,ki=new N,Gi=new N,qn=new N,Xn=new N,gi=new N,Cr=new N,ps=new N,ms=new N,_i=new N;function Aa(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){_i.fromArray(r,s);const a=i.x*Math.abs(_i.x)+i.y*Math.abs(_i.y)+i.z*Math.abs(_i.z),l=e.dot(_i),c=t.dot(_i),u=n.dot(_i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Xh=new cs,Ar=new N,La=new N;class ea{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Xh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);const t=Ar.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ar,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(La.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(La)),this.expandByPoint(Ar.copy(e.center).sub(La))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new N,Pa=new N,gs=new N,jn=new N,Da=new N,_s=new N,Ra=new N;class vu{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Pa.copy(e).add(t).multiplyScalar(.5),gs.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(Pa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(gs),a=jn.dot(this.direction),l=-jn.dot(gs),c=jn.lengthSq(),u=Math.abs(1-o*o);let d,f,m,v;if(u>0)if(d=o*l-a,f=o*a-l,v=s*u,d>=0)if(f>=-v)if(f<=v){const h=1/u;d*=h,f*=h,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Pa).addScaledVector(gs,f),m}intersectSphere(e,t){In.subVectors(e.center,this.origin);const n=In.dot(this.direction),i=In.dot(In)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,i,s){Da.subVectors(t,e),_s.subVectors(n,e),Ra.crossVectors(Da,_s);let o=this.direction.dot(Ra),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,e);const l=a*this.direction.dot(_s.crossVectors(jn,_s));if(l<0)return null;const c=a*this.direction.dot(Da.cross(jn));if(c<0||l+c>o)return null;const u=-a*jn.dot(Ra);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,u,d,f,m,v,h,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=f,g[3]=m,g[7]=v,g[11]=h,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Vi.setFromMatrixColumn(e,0).length(),s=1/Vi.setFromMatrixColumn(e,1).length(),o=1/Vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*d,v=a*u,h=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+v*c,t[5]=f-h*c,t[9]=-a*l,t[2]=h-f*c,t[6]=v+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,v=c*u,h=c*d;t[0]=f+h*a,t[4]=v*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-v,t[6]=h+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,v=c*u,h=c*d;t[0]=f-h*a,t[4]=-o*d,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*u,t[9]=h-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*d,v=a*u,h=a*d;t[0]=l*u,t[4]=v*c-m,t[8]=f*c+h,t[1]=l*d,t[5]=h*c+f,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,v=a*l,h=a*c;t[0]=l*u,t[4]=h-f*d,t[8]=v*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+v,t[10]=f-h*d}else if(e.order==="XZY"){const f=o*l,m=o*c,v=a*l,h=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+h,t[5]=o*u,t[9]=m*d-v,t[2]=v*d-m,t[6]=a*u,t[10]=h*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jh,e,$h)}lookAt(e,t,n){const i=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),$n.crossVectors(n,Vt),$n.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),$n.crossVectors(n,Vt)),$n.normalize(),vs.crossVectors(Vt,$n),i[0]=$n.x,i[4]=vs.x,i[8]=Vt.x,i[1]=$n.y,i[5]=vs.y,i[9]=Vt.y,i[2]=$n.z,i[6]=vs.z,i[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],v=n[2],h=n[6],p=n[10],g=n[14],x=n[3],_=n[7],S=n[11],b=n[15],w=i[0],C=i[4],y=i[8],M=i[12],R=i[1],D=i[5],z=i[9],E=i[13],L=i[2],O=i[6],G=i[10],q=i[14],V=i[3],Y=i[7],K=i[11],se=i[15];return s[0]=o*w+a*R+l*L+c*V,s[4]=o*C+a*D+l*O+c*Y,s[8]=o*y+a*z+l*G+c*K,s[12]=o*M+a*E+l*q+c*se,s[1]=u*w+d*R+f*L+m*V,s[5]=u*C+d*D+f*O+m*Y,s[9]=u*y+d*z+f*G+m*K,s[13]=u*M+d*E+f*q+m*se,s[2]=v*w+h*R+p*L+g*V,s[6]=v*C+h*D+p*O+g*Y,s[10]=v*y+h*z+p*G+g*K,s[14]=v*M+h*E+p*q+g*se,s[3]=x*w+_*R+S*L+b*V,s[7]=x*C+_*D+S*O+b*Y,s[11]=x*y+_*z+S*G+b*K,s[15]=x*M+_*E+S*q+b*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],v=e[3],h=e[7],p=e[11],g=e[15];return v*(+s*l*d-i*c*d-s*a*f+n*c*f+i*a*m-n*l*m)+h*(+t*l*m-t*c*f+s*o*f-i*o*m+i*c*u-s*l*u)+p*(+t*c*d-t*a*m-s*o*d+n*o*m+s*a*u-n*c*u)+g*(-i*a*u-t*l*d+t*a*f+i*o*d-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],v=e[12],h=e[13],p=e[14],g=e[15],x=d*p*c-h*f*c+h*l*m-a*p*m-d*l*g+a*f*g,_=v*f*c-u*p*c-v*l*m+o*p*m+u*l*g-o*f*g,S=u*h*c-v*d*c+v*a*m-o*h*m-u*a*g+o*d*g,b=v*d*l-u*h*l-v*a*f+o*h*f+u*a*p-o*d*p,w=t*x+n*_+i*S+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=x*C,e[1]=(h*f*s-d*p*s-h*i*m+n*p*m+d*i*g-n*f*g)*C,e[2]=(a*p*s-h*l*s+h*i*c-n*p*c-a*i*g+n*l*g)*C,e[3]=(d*l*s-a*f*s-d*i*c+n*f*c+a*i*m-n*l*m)*C,e[4]=_*C,e[5]=(u*p*s-v*f*s+v*i*m-t*p*m-u*i*g+t*f*g)*C,e[6]=(v*l*s-o*p*s-v*i*c+t*p*c+o*i*g-t*l*g)*C,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*m+t*l*m)*C,e[8]=S*C,e[9]=(v*d*s-u*h*s-v*n*m+t*h*m+u*n*g-t*d*g)*C,e[10]=(o*h*s-v*a*s+v*n*c-t*h*c-o*n*g+t*a*g)*C,e[11]=(u*a*s-o*d*s-u*n*c+t*d*c+o*n*m-t*a*m)*C,e[12]=b*C,e[13]=(u*h*i-v*d*i+v*n*f-t*h*f-u*n*p+t*d*p)*C,e[14]=(v*a*i-o*h*i-v*n*l+t*h*l+o*n*p-t*a*p)*C,e[15]=(o*d*i-u*a*i+u*n*l-t*d*l-o*n*f+t*a*f)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,m=s*u,v=s*d,h=o*u,p=o*d,g=a*d,x=l*c,_=l*u,S=l*d,b=n.x,w=n.y,C=n.z;return i[0]=(1-(h+g))*b,i[1]=(m+S)*b,i[2]=(v-_)*b,i[3]=0,i[4]=(m-S)*w,i[5]=(1-(f+g))*w,i[6]=(p+x)*w,i[7]=0,i[8]=(v+_)*C,i[9]=(p-x)*C,i[10]=(1-(f+h))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Vi.set(i[0],i[1],i[2]).length();const o=Vi.set(i[4],i[5],i[6]).length(),a=Vi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],un.copy(this);const c=1/s,u=1/o,d=1/a;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=d,un.elements[9]*=d,un.elements[10]*=d,t.setFromRotationMatrix(un),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),d=(t+e)*l,f=(n+i)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vi=new N,un=new Xe,jh=new N(0,0,0),$h=new N(1,1,1),$n=new N,vs=new N,Vt=new N,ql=new Xe,Xl=new li;class ta{constructor(e=0,t=0,n=0,i=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ql.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ql,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xl.setFromEuler(this),this.setFromQuaternion(Xl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class xu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yh=0;const jl=new N,Wi=new li,On=new Xe,xs=new N,Lr=new N,Zh=new N,Kh=new li,$l=new N(1,0,0),Yl=new N(0,1,0),Zl=new N(0,0,1),Jh={type:"added"},Kl={type:"removed"};class Lt extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new N,t=new ta,n=new li,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Ct}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new xu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis($l,e)}rotateY(e){return this.rotateOnAxis(Yl,e)}rotateZ(e){return this.rotateOnAxis(Zl,e)}translateOnAxis(e,t){return jl.copy(e).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($l,e)}translateY(e){return this.translateOnAxis(Yl,e)}translateZ(e){return this.translateOnAxis(Zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xs.copy(e):xs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Lr,xs,this.up):On.lookAt(xs,Lr,this.up),this.quaternion.setFromRotationMatrix(On),i&&(On.extractRotation(i.matrixWorld),Wi.setFromRotationMatrix(On),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Jh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Kl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,Zh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,Kh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Lt.DEFAULT_UP=new N(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new N,Fn=new N,Ia=new N,zn=new N,Hi=new N,qi=new N,Jl=new N,Oa=new N,Fa=new N,za=new N;class kn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),dn.subVectors(e,t),i.cross(dn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){dn.subVectors(i,t),Fn.subVectors(n,t),Ia.subVectors(e,t);const o=dn.dot(dn),a=dn.dot(Fn),l=dn.dot(Ia),c=Fn.dot(Fn),u=Fn.dot(Ia),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,m=(c*l-a*u)*f,v=(o*u-a*l)*f;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,zn),zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,zn),l.set(0,0),l.addScaledVector(s,zn.x),l.addScaledVector(o,zn.y),l.addScaledVector(a,zn.z),l}static isFrontFacing(e,t,n,i){return dn.subVectors(n,t),Fn.subVectors(e,t),dn.cross(Fn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),dn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return kn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Hi.subVectors(i,n),qi.subVectors(s,n),Oa.subVectors(e,n);const l=Hi.dot(Oa),c=qi.dot(Oa);if(l<=0&&c<=0)return t.copy(n);Fa.subVectors(e,i);const u=Hi.dot(Fa),d=qi.dot(Fa);if(u>=0&&d<=u)return t.copy(i);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Hi,o);za.subVectors(e,s);const m=Hi.dot(za),v=qi.dot(za);if(v>=0&&m<=v)return t.copy(s);const h=m*c-l*v;if(h<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(qi,a);const p=u*v-m*d;if(p<=0&&d-u>=0&&m-v>=0)return Jl.subVectors(s,i),a=(d-u)/(d-u+(m-v)),t.copy(i).addScaledVector(Jl,a);const g=1/(p+h+f);return o=h*g,a=f*g,t.copy(n).addScaledVector(Hi,o).addScaledVector(qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Qh=0;class us extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=ir,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=lu,this.blendDst=cu,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ya,this.stencilZFail=ya,this.stencilZPass=ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},ys={h:0,s:0,l:0};function Na(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Mt.workingColorSpace){if(e=zh(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Na(o,s,e+1/3),this.g=Na(o,s,e),this.b=Na(o,s,e-1/3)}return Mt.toWorkingColorSpace(this,i),this}setStyle(e,t=bn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Mt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Mt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Mt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Mt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const n=yu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return Mt.fromWorkingColorSpace(pt.copy(this),e),Dt(pt.r*255,0,255)<<16^Dt(pt.g*255,0,255)<<8^Dt(pt.b*255,0,255)<<0}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(pt.copy(this),t);const n=pt.r,i=pt.g,s=pt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(pt.copy(this),t),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=bn){Mt.fromWorkingColorSpace(pt.copy(this),e);const t=pt.r,n=pt.g,i=pt.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(fn),fn.h+=e,fn.s+=t,fn.l+=n,this.setHSL(fn.h,fn.s,fn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fn),e.getHSL(ys);const n=Sa(fn.h,ys.h,t),i=Sa(fn.s,ys.s,t),s=Sa(fn.l,ys.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pt=new Ie;Ie.NAMES=yu;class na extends us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qe=new N,bs=new Te;class gn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=kl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bs.fromBufferAttribute(this,t),bs.applyMatrix3(e),this.setXY(t,bs.x,bs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix3(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix4(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyNormalMatrix(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.transformDirection(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),i=Gt(i,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class bu extends gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Su extends gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ft extends gn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ep=0;const Jt=new Xe,Ba=new Lt,Xi=new N,Wt=new cs,Pr=new cs,ct=new N;class cn extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pu(e)?Su:bu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ct().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Ba.lookAt(e),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Pr.setFromBufferAttribute(a),this.morphTargetsRelative?(ct.addVectors(Wt.min,Pr.min),Wt.expandByPoint(ct),ct.addVectors(Wt.max,Pr.max),Wt.expandByPoint(ct)):(Wt.expandByPoint(Pr.min),Wt.expandByPoint(Pr.max))}Wt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)ct.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ct.fromBufferAttribute(a,c),l&&(Xi.fromBufferAttribute(e,c),ct.add(Xi)),i=Math.max(i,n.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new N,u[R]=new N;const d=new N,f=new N,m=new N,v=new Te,h=new Te,p=new Te,g=new N,x=new N;function _(R,D,z){d.fromArray(i,R*3),f.fromArray(i,D*3),m.fromArray(i,z*3),v.fromArray(o,R*2),h.fromArray(o,D*2),p.fromArray(o,z*2),f.sub(d),m.sub(d),h.sub(v),p.sub(v);const E=1/(h.x*p.y-p.x*h.y);isFinite(E)&&(g.copy(f).multiplyScalar(p.y).addScaledVector(m,-h.y).multiplyScalar(E),x.copy(m).multiplyScalar(h.x).addScaledVector(f,-p.x).multiplyScalar(E),c[R].add(g),c[D].add(g),c[z].add(g),u[R].add(x),u[D].add(x),u[z].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let R=0,D=S.length;R<D;++R){const z=S[R],E=z.start,L=z.count;for(let O=E,G=E+L;O<G;O+=3)_(n[O+0],n[O+1],n[O+2])}const b=new N,w=new N,C=new N,y=new N;function M(R){C.fromArray(s,R*3),y.copy(C);const D=c[R];b.copy(D),b.sub(C.multiplyScalar(C.dot(D))).normalize(),w.crossVectors(y,D);const E=w.dot(u[R])<0?-1:1;l[R*4]=b.x,l[R*4+1]=b.y,l[R*4+2]=b.z,l[R*4+3]=E}for(let R=0,D=S.length;R<D;++R){const z=S[R],E=z.start,L=z.count;for(let O=E,G=E+L;O<G;O+=3)M(n[O+0]),M(n[O+1]),M(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,d=new N;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),h=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,v),s.fromBufferAttribute(t,h),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,h),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(h,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let m=0,v=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?m=l[h]*a.data.stride+a.offset:m=l[h]*u;for(let g=0;g<u;g++)f[v++]=c[m++]}return new gn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ql=new Xe,yn=new vu,Ss=new ea,ec=new N,Dr=new N,Rr=new N,Ir=new N,Ua=new N,Ms=new N,ws=new Te,Ts=new Te,Es=new Te,ka=new N,Cs=new N;class It extends Lt{constructor(e=new cn,t=new na){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Ms.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Ua.fromBufferAttribute(d,e),o?Ms.addScaledVector(Ua,u):Ms.addScaledVector(Ua.sub(t),u))}t.add(Ms)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(s),yn.copy(e.ray).recast(e.near),Ss.containsPoint(yn.origin)===!1&&(yn.intersectSphere(Ss,ec)===null||yn.origin.distanceToSquared(ec)>(e.far-e.near)**2))||(Ql.copy(s).invert(),yn.copy(e.ray).applyMatrix4(Ql),n.boundingBox!==null&&yn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,d=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,v=d.length;m<v;m++){const h=d[m],p=i[h.materialIndex],g=Math.max(h.start,f.start),x=Math.min(a.count,Math.min(h.start+h.count,f.start+f.count));for(let _=g,S=x;_<S;_+=3){const b=a.getX(_),w=a.getX(_+1),C=a.getX(_+2);o=As(this,p,e,yn,c,u,b,w,C),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let h=m,p=v;h<p;h+=3){const g=a.getX(h),x=a.getX(h+1),_=a.getX(h+2);o=As(this,i,e,yn,c,u,g,x,_),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,v=d.length;m<v;m++){const h=d[m],p=i[h.materialIndex],g=Math.max(h.start,f.start),x=Math.min(l.count,Math.min(h.start+h.count,f.start+f.count));for(let _=g,S=x;_<S;_+=3){const b=_,w=_+1,C=_+2;o=As(this,p,e,yn,c,u,b,w,C),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let h=m,p=v;h<p;h+=3){const g=h,x=h+1,_=h+2;o=As(this,i,e,yn,c,u,g,x,_),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}}}function tp(r,e,t,n,i,s,o,a){let l;if(e.side===jt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===oi,a),l===null)return null;Cs.copy(a),Cs.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Cs);return c<t.near||c>t.far?null:{distance:c,point:Cs.clone(),object:r}}function As(r,e,t,n,i,s,o,a,l){r.getVertexPosition(o,Dr),r.getVertexPosition(a,Rr),r.getVertexPosition(l,Ir);const c=tp(r,e,t,n,Dr,Rr,Ir,ka);if(c){i&&(ws.fromBufferAttribute(i,o),Ts.fromBufferAttribute(i,a),Es.fromBufferAttribute(i,l),c.uv=kn.getUV(ka,Dr,Rr,Ir,ws,Ts,Es,new Te)),s&&(ws.fromBufferAttribute(s,o),Ts.fromBufferAttribute(s,a),Es.fromBufferAttribute(s,l),c.uv2=kn.getUV(ka,Dr,Rr,Ir,ws,Ts,Es,new Te));const u={a:o,b:a,c:l,normal:new N,materialIndex:0};kn.getNormal(Dr,Rr,Ir,u.normal),c.face=u}return c}class Mr extends cn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,i,o,2),v("x","z","y",1,-1,e,n,-t,i,o,3),v("x","y","z",1,-1,e,t,n,i,s,4),v("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(d,2));function v(h,p,g,x,_,S,b,w,C,y,M){const R=S/C,D=b/y,z=S/2,E=b/2,L=w/2,O=C+1,G=y+1;let q=0,V=0;const Y=new N;for(let K=0;K<G;K++){const se=K*D-E;for(let H=0;H<O;H++){const J=H*R-z;Y[h]=J*x,Y[p]=se*_,Y[g]=L,c.push(Y.x,Y.y,Y.z),Y[h]=0,Y[p]=0,Y[g]=w>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(H/C),d.push(1-K/y),q+=1}}for(let K=0;K<y;K++)for(let se=0;se<C;se++){const H=f+se+O*K,J=f+se+O*(K+1),ee=f+(se+1)+O*(K+1),B=f+(se+1)+O*K;l.push(H,J,B),l.push(J,ee,B),V+=6}a.addGroup(m,V,M),m+=V,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wt(r){const e={};for(let t=0;t<r.length;t++){const n=hr(r[t]);for(const i in n)e[i]=n[i]}return e}function np(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Mu(r){return r.getRenderTarget()===null&&r.outputEncoding===Ve?bn:Xr}const ia={clone:hr,merge:wt};var ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ip,this.fragmentShader=rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=np(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wu extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Et extends wu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vl*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ba*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=-90,$i=1;class sp extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Et(ji,$i,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Et(ji,$i,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Et(ji,$i,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Et(ji,$i,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Et(ji,$i,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Et(ji,$i,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=mn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Tu extends At{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ur,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ap extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Tu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Mr(5,5,5),s=new Ln({name:"CubemapFromEquirect",uniforms:hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:ri});s.uniforms.tEquirect.value=t;const o=new It(i,s),a=t.minFilter;return t.minFilter===qr&&(t.minFilter=Pt),new sp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Ga=new N,op=new N,lp=new Ct;class Sn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ga.subVectors(n,t).cross(op.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ga),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lp.getNormalMatrix(e),i=this.coplanarPoint(Ga).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new ea,Ls=new N;class Eu{constructor(e=new Sn,t=new Sn,n=new Sn,i=new Sn,s=new Sn,o=new Sn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7],f=n[8],m=n[9],v=n[10],h=n[11],p=n[12],g=n[13],x=n[14],_=n[15];return t[0].setComponents(a-i,d-l,h-f,_-p).normalize(),t[1].setComponents(a+i,d+l,h+f,_+p).normalize(),t[2].setComponents(a+s,d+c,h+m,_+g).normalize(),t[3].setComponents(a-s,d-c,h-m,_-g).normalize(),t[4].setComponents(a-o,d-u,h-v,_-x).normalize(),t[5].setComponents(a+o,d+u,h+v,_+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSprite(e){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ls.x=i.normal.x>0?e.max.x:e.min.x,Ls.y=i.normal.y>0?e.max.y:e.min.y,Ls.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cu(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function cp(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const d=c.array,f=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,d,f),c.onUploadCallback();let v;if(d instanceof Float32Array)v=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(d instanceof Int16Array)v=5122;else if(d instanceof Uint32Array)v=5125;else if(d instanceof Int32Array)v=5124;else if(d instanceof Int8Array)v=5120;else if(d instanceof Uint8Array)v=5121;else if(d instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const f=u.array,m=u.updateRange;r.bindBuffer(d,c),m.count===-1?r.bufferSubData(d,0,f):(t?r.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:o,remove:a,update:l}}class No extends cn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=e/a,f=t/l,m=[],v=[],h=[],p=[];for(let g=0;g<u;g++){const x=g*f-o;for(let _=0;_<c;_++){const S=_*d-s;v.push(S,-x,0),h.push(0,0,1),p.push(_/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){const _=x+c*g,S=x+c*(g+1),b=x+1+c*(g+1),w=x+1+c*g;m.push(_,S,w),m.push(S,b,w)}this.setIndex(m),this.setAttribute("position",new ft(v,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.width,e.height,e.widthSegments,e.heightSegments)}}var up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gp="vec3 transformed = vec3( position );",_p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,xp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Pp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Np=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$p=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qp=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,sm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,am=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,om=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,cm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,um=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,bm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,wm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Am=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Om=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$m=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,eg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,tg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ng=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ig=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,rg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,sg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ag=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_g=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sg=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ig=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,kg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Se={alphamap_fragment:up,alphamap_pars_fragment:dp,alphatest_fragment:fp,alphatest_pars_fragment:hp,aomap_fragment:pp,aomap_pars_fragment:mp,begin_vertex:gp,beginnormal_vertex:_p,bsdfs:vp,iridescence_fragment:xp,bumpmap_pars_fragment:yp,clipping_planes_fragment:bp,clipping_planes_pars_fragment:Sp,clipping_planes_pars_vertex:Mp,clipping_planes_vertex:wp,color_fragment:Tp,color_pars_fragment:Ep,color_pars_vertex:Cp,color_vertex:Ap,common:Lp,cube_uv_reflection_fragment:Pp,defaultnormal_vertex:Dp,displacementmap_pars_vertex:Rp,displacementmap_vertex:Ip,emissivemap_fragment:Op,emissivemap_pars_fragment:Fp,encodings_fragment:zp,encodings_pars_fragment:Np,envmap_fragment:Bp,envmap_common_pars_fragment:Up,envmap_pars_fragment:kp,envmap_pars_vertex:Gp,envmap_physical_pars_fragment:Qp,envmap_vertex:Vp,fog_vertex:Wp,fog_pars_vertex:Hp,fog_fragment:qp,fog_pars_fragment:Xp,gradientmap_pars_fragment:jp,lightmap_fragment:$p,lightmap_pars_fragment:Yp,lights_lambert_fragment:Zp,lights_lambert_pars_fragment:Kp,lights_pars_begin:Jp,lights_toon_fragment:em,lights_toon_pars_fragment:tm,lights_phong_fragment:nm,lights_phong_pars_fragment:im,lights_physical_fragment:rm,lights_physical_pars_fragment:sm,lights_fragment_begin:am,lights_fragment_maps:om,lights_fragment_end:lm,logdepthbuf_fragment:cm,logdepthbuf_pars_fragment:um,logdepthbuf_pars_vertex:dm,logdepthbuf_vertex:fm,map_fragment:hm,map_pars_fragment:pm,map_particle_fragment:mm,map_particle_pars_fragment:gm,metalnessmap_fragment:_m,metalnessmap_pars_fragment:vm,morphcolor_vertex:xm,morphnormal_vertex:ym,morphtarget_pars_vertex:bm,morphtarget_vertex:Sm,normal_fragment_begin:Mm,normal_fragment_maps:wm,normal_pars_fragment:Tm,normal_pars_vertex:Em,normal_vertex:Cm,normalmap_pars_fragment:Am,clearcoat_normal_fragment_begin:Lm,clearcoat_normal_fragment_maps:Pm,clearcoat_pars_fragment:Dm,iridescence_pars_fragment:Rm,output_fragment:Im,packing:Om,premultiplied_alpha_fragment:Fm,project_vertex:zm,dithering_fragment:Nm,dithering_pars_fragment:Bm,roughnessmap_fragment:Um,roughnessmap_pars_fragment:km,shadowmap_pars_fragment:Gm,shadowmap_pars_vertex:Vm,shadowmap_vertex:Wm,shadowmask_pars_fragment:Hm,skinbase_vertex:qm,skinning_pars_vertex:Xm,skinning_vertex:jm,skinnormal_vertex:$m,specularmap_fragment:Ym,specularmap_pars_fragment:Zm,tonemapping_fragment:Km,tonemapping_pars_fragment:Jm,transmission_fragment:Qm,transmission_pars_fragment:eg,uv_pars_fragment:tg,uv_pars_vertex:ng,uv_vertex:ig,uv2_pars_fragment:rg,uv2_pars_vertex:sg,uv2_vertex:ag,worldpos_vertex:og,background_vert:lg,background_frag:cg,backgroundCube_vert:ug,backgroundCube_frag:dg,cube_vert:fg,cube_frag:hg,depth_vert:pg,depth_frag:mg,distanceRGBA_vert:gg,distanceRGBA_frag:_g,equirect_vert:vg,equirect_frag:xg,linedashed_vert:yg,linedashed_frag:bg,meshbasic_vert:Sg,meshbasic_frag:Mg,meshlambert_vert:wg,meshlambert_frag:Tg,meshmatcap_vert:Eg,meshmatcap_frag:Cg,meshnormal_vert:Ag,meshnormal_frag:Lg,meshphong_vert:Pg,meshphong_frag:Dg,meshphysical_vert:Rg,meshphysical_frag:Ig,meshtoon_vert:Og,meshtoon_frag:Fg,points_vert:zg,points_frag:Ng,shadow_vert:Bg,shadow_frag:Ug,sprite_vert:kg,sprite_frag:Gg},ie={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ct},uv2Transform:{value:new Ct},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ct}}},Mn={basic:{uniforms:wt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:wt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:wt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:wt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:wt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:wt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:wt([ie.points,ie.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:wt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:wt([ie.common,ie.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:wt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:wt([ie.sprite,ie.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:wt([ie.common,ie.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:wt([ie.lights,ie.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Mn.physical={uniforms:wt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Te(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const Ps={r:0,b:0,g:0};function Vg(r,e,t,n,i,s,o){const a=new Ie(0);let l=s===!0?0:1,c,u,d=null,f=0,m=null;function v(p,g){let x=!1,_=g.isScene===!0?g.background:null;_&&_.isTexture&&(_=(g.backgroundBlurriness>0?t:e).get(_));const S=r.xr,b=S.getSession&&S.getSession();b&&b.environmentBlendMode==="additive"&&(_=null),_===null?h(a,l):_&&_.isColor&&(h(_,1),x=!0),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Qs)?(u===void 0&&(u=new It(new Mr(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:hr(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=_.encoding!==Ve,(d!==_||f!==_.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,m=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new It(new No(2,2),new Ln({name:"BackgroundMaterial",uniforms:hr(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=_.encoding!==Ve,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,m=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function h(p,g){p.getRGB(Ps,Mu(r)),n.buffers.color.setClear(Ps.r,Ps.g,Ps.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),l=g,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,h(a,l)},render:v}}function Wg(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function d(L,O,G,q,V){let Y=!1;if(o){const K=h(q,G,O);c!==K&&(c=K,m(c.object)),Y=g(L,q,G,V),Y&&x(L,q,G,V)}else{const K=O.wireframe===!0;(c.geometry!==q.id||c.program!==G.id||c.wireframe!==K)&&(c.geometry=q.id,c.program=G.id,c.wireframe=K,Y=!0)}V!==null&&t.update(V,34963),(Y||u)&&(u=!1,y(L,O,G,q),V!==null&&r.bindBuffer(34963,t.get(V).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function v(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function h(L,O,G){const q=G.wireframe===!0;let V=a[L.id];V===void 0&&(V={},a[L.id]=V);let Y=V[O.id];Y===void 0&&(Y={},V[O.id]=Y);let K=Y[q];return K===void 0&&(K=p(f()),Y[q]=K),K}function p(L){const O=[],G=[],q=[];for(let V=0;V<i;V++)O[V]=0,G[V]=0,q[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:q,object:L,attributes:{},index:null}}function g(L,O,G,q){const V=c.attributes,Y=O.attributes;let K=0;const se=G.getAttributes();for(const H in se)if(se[H].location>=0){const ee=V[H];let B=Y[H];if(B===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(B=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(B=L.instanceColor)),ee===void 0||ee.attribute!==B||B&&ee.data!==B.data)return!0;K++}return c.attributesNum!==K||c.index!==q}function x(L,O,G,q){const V={},Y=O.attributes;let K=0;const se=G.getAttributes();for(const H in se)if(se[H].location>=0){let ee=Y[H];ee===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor));const B={};B.attribute=ee,ee&&ee.data&&(B.data=ee.data),V[H]=B,K++}c.attributes=V,c.attributesNum=K,c.index=q}function _(){const L=c.newAttributes;for(let O=0,G=L.length;O<G;O++)L[O]=0}function S(L){b(L,0)}function b(L,O){const G=c.newAttributes,q=c.enabledAttributes,V=c.attributeDivisors;G[L]=1,q[L]===0&&(r.enableVertexAttribArray(L),q[L]=1),V[L]!==O&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),V[L]=O)}function w(){const L=c.newAttributes,O=c.enabledAttributes;for(let G=0,q=O.length;G<q;G++)O[G]!==L[G]&&(r.disableVertexAttribArray(G),O[G]=0)}function C(L,O,G,q,V,Y){n.isWebGL2===!0&&(G===5124||G===5125)?r.vertexAttribIPointer(L,O,G,V,Y):r.vertexAttribPointer(L,O,G,q,V,Y)}function y(L,O,G,q){if(n.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const V=q.attributes,Y=G.getAttributes(),K=O.defaultAttributeValues;for(const se in Y){const H=Y[se];if(H.location>=0){let J=V[se];if(J===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),J!==void 0){const ee=J.normalized,B=J.itemSize,ce=t.get(J);if(ce===void 0)continue;const ue=ce.buffer,fe=ce.type,de=ce.bytesPerElement;if(J.isInterleavedBufferAttribute){const xe=J.data,be=xe.stride,Me=J.offset;if(xe.isInstancedInterleavedBuffer){for(let Oe=0;Oe<H.locationSize;Oe++)b(H.location+Oe,xe.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Oe=0;Oe<H.locationSize;Oe++)S(H.location+Oe);r.bindBuffer(34962,ue);for(let Oe=0;Oe<H.locationSize;Oe++)C(H.location+Oe,B/H.locationSize,fe,ee,be*de,(Me+B/H.locationSize*Oe)*de)}else{if(J.isInstancedBufferAttribute){for(let xe=0;xe<H.locationSize;xe++)b(H.location+xe,J.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let xe=0;xe<H.locationSize;xe++)S(H.location+xe);r.bindBuffer(34962,ue);for(let xe=0;xe<H.locationSize;xe++)C(H.location+xe,B/H.locationSize,fe,ee,B*de,B/H.locationSize*xe*de)}}else if(K!==void 0){const ee=K[se];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(H.location,ee);break;case 3:r.vertexAttrib3fv(H.location,ee);break;case 4:r.vertexAttrib4fv(H.location,ee);break;default:r.vertexAttrib1fv(H.location,ee)}}}}w()}function M(){z();for(const L in a){const O=a[L];for(const G in O){const q=O[G];for(const V in q)v(q[V].object),delete q[V];delete O[G]}delete a[L]}}function R(L){if(a[L.id]===void 0)return;const O=a[L.id];for(const G in O){const q=O[G];for(const V in q)v(q[V].object),delete q[V];delete O[G]}delete a[L.id]}function D(L){for(const O in a){const G=a[O];if(G[L.id]===void 0)continue;const q=G[L.id];for(const V in q)v(q[V].object),delete q[V];delete G[L.id]}}function z(){E(),u=!0,c!==l&&(c=l,m(c.object))}function E(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:z,resetDefaultState:E,dispose:M,releaseStatesOfGeometry:R,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:S,disableUnusedAttributes:w}}function Hg(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,d){if(d===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,u,d),t.update(u,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function qg(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=r.getParameter(34930),f=r.getParameter(35660),m=r.getParameter(3379),v=r.getParameter(34076),h=r.getParameter(34921),p=r.getParameter(36347),g=r.getParameter(36348),x=r.getParameter(36349),_=f>0,S=o||e.has("OES_texture_float"),b=_&&S,w=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:v,maxAttributes:h,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:b,maxSamples:w}}function Xg(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Sn,a=new Ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||i;return i=f,n=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,h=d.clipIntersection,p=d.clipShadows,g=r.get(d);if(!i||v===null||v.length===0||s&&!p)s?u(null):c();else{const x=s?0:n,_=x*4;let S=g.clippingState||null;l.value=S,S=u(v,f,_,m);for(let b=0;b!==_;++b)S[b]=t[b];g.clippingState=S,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,v){const h=d!==null?d.length:0;let p=null;if(h!==0){if(p=l.value,v!==!0||p===null){const g=m+h*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<g)&&(p=new Float32Array(g));for(let _=0,S=m;_!==h;++_,S+=4)o.copy(d[_]).applyMatrix4(x,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function jg(r){let e=new WeakMap;function t(o,a){return a===ho?o.mapping=ur:a===po&&(o.mapping=dr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ho||a===po)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ap(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class $g extends wu{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const er=4,tc=[.125,.215,.35,.446,.526,.582],Si=20,Va=new $g,nc=new Ie;let Wa=null;const yi=(1+Math.sqrt(5))/2,Zi=1/yi,ic=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,yi,Zi),new N(0,yi,-Zi),new N(Zi,0,yi),new N(-Zi,0,yi),new N(yi,Zi,0),new N(-yi,Zi,0)];class rc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Wa=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wa),e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ur||e.mapping===dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wa=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Di,format:pn,encoding:Gn,depthBuffer:!1},i=sc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yg(s)),this._blurMaterial=Zg(s,e,t)}return i}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,Va)}_sceneToCubeUV(e,t,n,i){const a=new Et(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(nc),u.toneMapping=mn,u.autoClear=!1;const m=new na({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),v=new It(new Mr,m);let h=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,h=!0):(m.color.copy(nc),h=!0);for(let g=0;g<6;g++){const x=g%3;x===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):x===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const _=this._cubeSize;Ds(i,x*_,g>2?_:0,_,_),u.setRenderTarget(i),h&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ur||e.mapping===dr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ac());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new It(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ds(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Va)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ic[(i-1)%ic.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new It(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Si-1),h=s/v,p=isFinite(s)?1+Math.floor(u*h):Si;p>Si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Si}`);const g=[];let x=0;for(let C=0;C<Si;++C){const y=C/h,M=Math.exp(-y*y/2);g.push(M),C===0?x+=M:C<p&&(x+=2*M)}for(let C=0;C<g.length;C++)g[C]=g[C]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=v,f.mipInt.value=_-n;const S=this._sizeLods[i],b=3*S*(i>_-er?i-_+er:0),w=4*(this._cubeSize-S);Ds(t,b,w,3*S,2*S),l.setRenderTarget(t),l.render(d,Va)}}function Yg(r){const e=[],t=[],n=[];let i=r;const s=r-er+1+tc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-er?l=tc[o-r+er-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,h=3,p=2,g=1,x=new Float32Array(h*v*m),_=new Float32Array(p*v*m),S=new Float32Array(g*v*m);for(let w=0;w<m;w++){const C=w%3*2/3-1,y=w>2?0:-1,M=[C,y,0,C+2/3,y,0,C+2/3,y+1,0,C,y,0,C+2/3,y+1,0,C,y+1,0];x.set(M,h*v*w),_.set(f,p*v*w);const R=[w,w,w,w,w,w];S.set(R,g*v*w)}const b=new cn;b.setAttribute("position",new gn(x,h)),b.setAttribute("uv",new gn(_,p)),b.setAttribute("faceIndex",new gn(S,g)),e.push(b),i>er&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sc(r,e,t){const n=new Vn(r,e,t);return n.texture.mapping=Qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Zg(r,e,t){const n=new Float32Array(Si),i=new N(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function ac(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function oc(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Bo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kg(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ho||l===po,u=l===ur||l===dr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new rc(r)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new rc(r));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Jg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Qg(r,e,t,n){const i={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",o),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],34962);const m=d.morphAttributes;for(const v in m){const h=m[v];for(let p=0,g=h.length;p<g;p++)e.update(h[p],34962)}}function c(d){const f=[],m=d.index,v=d.attributes.position;let h=0;if(m!==null){const x=m.array;h=m.version;for(let _=0,S=x.length;_<S;_+=3){const b=x[_+0],w=x[_+1],C=x[_+2];f.push(b,w,w,C,C,b)}}else{const x=v.array;h=v.version;for(let _=0,S=x.length/3-1;_<S;_+=3){const b=_+0,w=_+1,C=_+2;f.push(b,w,w,C,C,b)}}const p=new(pu(f)?Su:bu)(f,1);p.version=h;const g=s.get(d);g&&e.remove(g),s.set(d,p)}function u(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function e_(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,m){r.drawElements(s,m,a,f*l),t.update(m,s,1)}function d(f,m,v){if(v===0)return;let h,p;if(i)h=r,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,m,a,f*l,v),t.update(m,s,v)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d}function t_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function n_(r,e){return r[0]-e[0]}function i_(r,e){return Math.abs(e[1])-Math.abs(r[1])}function r_(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new je,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=m!==void 0?m.length:0;let h=s.get(u);if(h===void 0||h.count!==v){let L=function(){z.dispose(),s.delete(u),u.removeEventListener("dispose",L)};h!==void 0&&h.texture.dispose();const x=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let y=0;x===!0&&(y=1),_===!0&&(y=2),S===!0&&(y=3);let M=u.attributes.position.count*y,R=1;M>e.maxTextureSize&&(R=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const D=new Float32Array(M*R*4*v),z=new _u(D,M,R,v);z.type=wi,z.needsUpdate=!0;const E=y*4;for(let O=0;O<v;O++){const G=b[O],q=w[O],V=C[O],Y=M*R*4*O;for(let K=0;K<G.count;K++){const se=K*E;x===!0&&(o.fromBufferAttribute(G,K),D[Y+se+0]=o.x,D[Y+se+1]=o.y,D[Y+se+2]=o.z,D[Y+se+3]=0),_===!0&&(o.fromBufferAttribute(q,K),D[Y+se+4]=o.x,D[Y+se+5]=o.y,D[Y+se+6]=o.z,D[Y+se+7]=0),S===!0&&(o.fromBufferAttribute(V,K),D[Y+se+8]=o.x,D[Y+se+9]=o.y,D[Y+se+10]=o.z,D[Y+se+11]=V.itemSize===4?o.w:1)}}h={count:v,texture:z,size:new Te(M,R)},s.set(u,h),u.addEventListener("dispose",L)}let p=0;for(let x=0;x<f.length;x++)p+=f[x];const g=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(r,"morphTargetBaseInfluence",g),d.getUniforms().setValue(r,"morphTargetInfluences",f),d.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}else{const m=f===void 0?0:f.length;let v=n[u.id];if(v===void 0||v.length!==m){v=[];for(let _=0;_<m;_++)v[_]=[_,0];n[u.id]=v}for(let _=0;_<m;_++){const S=v[_];S[0]=_,S[1]=f[_]}v.sort(i_);for(let _=0;_<8;_++)_<m&&v[_][1]?(a[_][0]=v[_][0],a[_][1]=v[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(n_);const h=u.morphAttributes.position,p=u.morphAttributes.normal;let g=0;for(let _=0;_<8;_++){const S=a[_],b=S[0],w=S[1];b!==Number.MAX_SAFE_INTEGER&&w?(h&&u.getAttribute("morphTarget"+_)!==h[b]&&u.setAttribute("morphTarget"+_,h[b]),p&&u.getAttribute("morphNormal"+_)!==p[b]&&u.setAttribute("morphNormal"+_,p[b]),i[_]=w,g+=w):(h&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),p&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),i[_]=0)}const x=u.morphTargetsRelative?1:1-g;d.getUniforms().setValue(r,"morphTargetBaseInfluence",x),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function s_(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Au=new At,Lu=new _u,Pu=new qh,Du=new Tu,lc=[],cc=[],uc=new Float32Array(16),dc=new Float32Array(9),fc=new Float32Array(4);function wr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=lc[i];if(s===void 0&&(s=new Float32Array(i),lc[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function nt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function it(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ra(r,e){let t=cc[e];t===void 0&&(t=new Int32Array(e),cc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function a_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function o_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;r.uniform2fv(this.addr,e),it(t,e)}}function l_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nt(t,e))return;r.uniform3fv(this.addr,e),it(t,e)}}function c_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;r.uniform4fv(this.addr,e),it(t,e)}}function u_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;fc.set(n),r.uniformMatrix2fv(this.addr,!1,fc),it(t,n)}}function d_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;dc.set(n),r.uniformMatrix3fv(this.addr,!1,dc),it(t,n)}}function f_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;uc.set(n),r.uniformMatrix4fv(this.addr,!1,uc),it(t,n)}}function h_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function p_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;r.uniform2iv(this.addr,e),it(t,e)}}function m_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;r.uniform3iv(this.addr,e),it(t,e)}}function g_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;r.uniform4iv(this.addr,e),it(t,e)}}function __(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function v_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;r.uniform2uiv(this.addr,e),it(t,e)}}function x_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;r.uniform3uiv(this.addr,e),it(t,e)}}function y_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;r.uniform4uiv(this.addr,e),it(t,e)}}function b_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Au,i)}function S_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Pu,i)}function M_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Du,i)}function w_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Lu,i)}function T_(r){switch(r){case 5126:return a_;case 35664:return o_;case 35665:return l_;case 35666:return c_;case 35674:return u_;case 35675:return d_;case 35676:return f_;case 5124:case 35670:return h_;case 35667:case 35671:return p_;case 35668:case 35672:return m_;case 35669:case 35673:return g_;case 5125:return __;case 36294:return v_;case 36295:return x_;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return S_;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return w_}}function E_(r,e){r.uniform1fv(this.addr,e)}function C_(r,e){const t=wr(e,this.size,2);r.uniform2fv(this.addr,t)}function A_(r,e){const t=wr(e,this.size,3);r.uniform3fv(this.addr,t)}function L_(r,e){const t=wr(e,this.size,4);r.uniform4fv(this.addr,t)}function P_(r,e){const t=wr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function D_(r,e){const t=wr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function R_(r,e){const t=wr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function I_(r,e){r.uniform1iv(this.addr,e)}function O_(r,e){r.uniform2iv(this.addr,e)}function F_(r,e){r.uniform3iv(this.addr,e)}function z_(r,e){r.uniform4iv(this.addr,e)}function N_(r,e){r.uniform1uiv(this.addr,e)}function B_(r,e){r.uniform2uiv(this.addr,e)}function U_(r,e){r.uniform3uiv(this.addr,e)}function k_(r,e){r.uniform4uiv(this.addr,e)}function G_(r,e,t){const n=this.cache,i=e.length,s=ra(t,i);nt(n,s)||(r.uniform1iv(this.addr,s),it(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Au,s[o])}function V_(r,e,t){const n=this.cache,i=e.length,s=ra(t,i);nt(n,s)||(r.uniform1iv(this.addr,s),it(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Pu,s[o])}function W_(r,e,t){const n=this.cache,i=e.length,s=ra(t,i);nt(n,s)||(r.uniform1iv(this.addr,s),it(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Du,s[o])}function H_(r,e,t){const n=this.cache,i=e.length,s=ra(t,i);nt(n,s)||(r.uniform1iv(this.addr,s),it(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Lu,s[o])}function q_(r){switch(r){case 5126:return E_;case 35664:return C_;case 35665:return A_;case 35666:return L_;case 35674:return P_;case 35675:return D_;case 35676:return R_;case 5124:case 35670:return I_;case 35667:case 35671:return O_;case 35668:case 35672:return F_;case 35669:case 35673:return z_;case 5125:return N_;case 36294:return B_;case 36295:return U_;case 36296:return k_;case 35678:case 36198:case 36298:case 36306:case 35682:return G_;case 35679:case 36299:case 36307:return V_;case 35680:case 36300:case 36308:case 36293:return W_;case 36289:case 36303:case 36311:case 36292:return H_}}class X_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=T_(t.type)}}class j_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=q_(t.type)}}class $_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ha=/(\w+)(\])?(\[|\.)?/g;function hc(r,e){r.seq.push(e),r.map[e.id]=e}function Y_(r,e,t){const n=r.name,i=n.length;for(Ha.lastIndex=0;;){const s=Ha.exec(n),o=Ha.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){hc(t,c===void 0?new X_(a,r,e):new j_(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new $_(a),hc(t,d)),t=d}}}class Ns{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Y_(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function pc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Z_=0;function K_(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function J_(r){switch(r){case Gn:return["Linear","( value )"];case Ve:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function mc(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+K_(r.getShaderSource(e),o)}else return i}function Q_(r,e){const t=J_(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function e0(r,e){let t;switch(e){case uh:t="Linear";break;case dh:t="Reinhard";break;case fh:t="OptimizedCineon";break;case hh:t="ACESFilmic";break;case ph:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function t0(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zr).join(`
`)}function n0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function i0(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function zr(r){return r!==""}function gc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _c(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const r0=/^[ \t]*#include +<([\w\d./]+)>/gm;function _o(r){return r.replace(r0,s0)}function s0(r,e){const t=Se[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return _o(t)}const a0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vc(r){return r.replace(a0,o0)}function o0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function xc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function l0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ou?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Vf?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Fr&&(e="SHADOWMAP_TYPE_VSM"),e}function c0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ur:case dr:e="ENVMAP_TYPE_CUBE";break;case Qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function u0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case dr:e="ENVMAP_MODE_REFRACTION";break}return e}function d0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case uu:e="ENVMAP_BLENDING_MULTIPLY";break;case lh:e="ENVMAP_BLENDING_MIX";break;case ch:e="ENVMAP_BLENDING_ADD";break}return e}function f0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function h0(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=l0(t),c=c0(t),u=u0(t),d=d0(t),f=f0(t),m=t.isWebGL2?"":t0(t),v=n0(s),h=i.createProgram();let p,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[v].filter(zr).join(`
`),p.length>0&&(p+=`
`),g=[m,v].filter(zr).join(`
`),g.length>0&&(g+=`
`)):(p=[xc(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),g=[m,xc(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mn?"#define TONE_MAPPING":"",t.toneMapping!==mn?Se.tonemapping_pars_fragment:"",t.toneMapping!==mn?e0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Se.encodings_pars_fragment,Q_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zr).join(`
`)),o=_o(o),o=gc(o,t),o=_c(o,t),a=_o(a),a=gc(a,t),a=_c(a,t),o=vc(o),a=vc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=x+p+o,S=x+g+a,b=pc(i,35633,_),w=pc(i,35632,S);if(i.attachShader(h,b),i.attachShader(h,w),t.index0AttributeName!==void 0?i.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(h,0,"position"),i.linkProgram(h),r.debug.checkShaderErrors){const M=i.getProgramInfoLog(h).trim(),R=i.getShaderInfoLog(b).trim(),D=i.getShaderInfoLog(w).trim();let z=!0,E=!0;if(i.getProgramParameter(h,35714)===!1){z=!1;const L=mc(i,b,"vertex"),O=mc(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(h,35715)+`

Program Info Log: `+M+`
`+L+`
`+O)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(R===""||D==="")&&(E=!1);E&&(this.diagnostics={runnable:z,programLog:M,vertexShader:{log:R,prefix:p},fragmentShader:{log:D,prefix:g}})}i.deleteShader(b),i.deleteShader(w);let C;this.getUniforms=function(){return C===void 0&&(C=new Ns(i,h)),C};let y;return this.getAttributes=function(){return y===void 0&&(y=i0(i,h)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.name=t.shaderName,this.id=Z_++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=b,this.fragmentShader=w,this}let p0=0;class m0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new g0(e),t.set(e,n)),n}}class g0{constructor(e){this.id=p0++,this.code=e,this.usedTimes=0}}function _0(r,e,t,n,i,s,o){const a=new xu,l=new m0,c=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(y,M,R,D,z){const E=D.fog,L=z.geometry,O=y.isMeshStandardMaterial?D.environment:null,G=(y.isMeshStandardMaterial?t:e).get(y.envMap||O),q=G&&G.mapping===Qs?G.image.height:null,V=v[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const Y=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,K=Y!==void 0?Y.length:0;let se=0;L.morphAttributes.position!==void 0&&(se=1),L.morphAttributes.normal!==void 0&&(se=2),L.morphAttributes.color!==void 0&&(se=3);let H,J,ee,B;if(V){const be=Mn[V];H=be.vertexShader,J=be.fragmentShader}else H=y.vertexShader,J=y.fragmentShader,l.update(y),ee=l.getVertexShaderID(y),B=l.getFragmentShaderID(y);const ce=r.getRenderTarget(),ue=y.alphaTest>0,fe=y.clearcoat>0,de=y.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:y.type,vertexShader:H,fragmentShader:J,defines:y.defines,customVertexShaderID:ee,customFragmentShaderID:B,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:z.isInstancedMesh===!0,instancingColor:z.isInstancedMesh===!0&&z.instanceColor!==null,supportsVertexTextures:f,outputEncoding:ce===null?r.outputEncoding:ce.isXRRenderTarget===!0?ce.texture.encoding:Gn,map:!!y.map,matcap:!!y.matcap,envMap:!!G,envMapMode:G&&G.mapping,envMapCubeUVHeight:q,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Oh,tangentSpaceNormalMap:y.normalMapType===Ih,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Ve,clearcoat:fe,clearcoatMap:fe&&!!y.clearcoatMap,clearcoatRoughnessMap:fe&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!y.clearcoatNormalMap,iridescence:de,iridescenceMap:de&&!!y.iridescenceMap,iridescenceThicknessMap:de&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===ir,alphaMap:!!y.alphaMap,alphaTest:ue,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!L.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!E,useFog:y.fog===!0,fogExp2:E&&E.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:d,skinning:z.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:se,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:y.toneMapped?r.toneMapping:mn,useLegacyLights:r.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Kn,flipSided:y.side===jt,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)M.push(R),M.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(g(M,y),x(M,y),M.push(r.outputEncoding)),M.push(y.customProgramCacheKey),M.join()}function g(y,M){y.push(M.precision),y.push(M.outputEncoding),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.combine),y.push(M.vertexUvs),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function x(y,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.map&&a.enable(4),M.matcap&&a.enable(5),M.envMap&&a.enable(6),M.lightMap&&a.enable(7),M.aoMap&&a.enable(8),M.emissiveMap&&a.enable(9),M.bumpMap&&a.enable(10),M.normalMap&&a.enable(11),M.objectSpaceNormalMap&&a.enable(12),M.tangentSpaceNormalMap&&a.enable(13),M.clearcoat&&a.enable(14),M.clearcoatMap&&a.enable(15),M.clearcoatRoughnessMap&&a.enable(16),M.clearcoatNormalMap&&a.enable(17),M.iridescence&&a.enable(18),M.iridescenceMap&&a.enable(19),M.iridescenceThicknessMap&&a.enable(20),M.displacementMap&&a.enable(21),M.specularMap&&a.enable(22),M.roughnessMap&&a.enable(23),M.metalnessMap&&a.enable(24),M.gradientMap&&a.enable(25),M.alphaMap&&a.enable(26),M.alphaTest&&a.enable(27),M.vertexColors&&a.enable(28),M.vertexAlphas&&a.enable(29),M.vertexUvs&&a.enable(30),M.vertexTangents&&a.enable(31),M.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.specularIntensityMap&&a.enable(15),M.specularColorMap&&a.enable(16),M.transmission&&a.enable(17),M.transmissionMap&&a.enable(18),M.thicknessMap&&a.enable(19),M.sheen&&a.enable(20),M.sheenColorMap&&a.enable(21),M.sheenRoughnessMap&&a.enable(22),M.decodeVideoTexture&&a.enable(23),M.opaque&&a.enable(24),y.push(a.mask)}function _(y){const M=v[y.type];let R;if(M){const D=Mn[M];R=ia.clone(D.uniforms)}else R=y.uniforms;return R}function S(y,M){let R;for(let D=0,z=c.length;D<z;D++){const E=c[D];if(E.cacheKey===M){R=E,++R.usedTimes;break}}return R===void 0&&(R=new h0(r,M,y,s),c.push(R)),R}function b(y){if(--y.usedTimes===0){const M=c.indexOf(y);c[M]=c[c.length-1],c.pop(),y.destroy()}}function w(y){l.remove(y)}function C(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:_,acquireProgram:S,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:C}}function v0(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function x0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function yc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function bc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d,f,m,v,h,p){let g=r[e];return g===void 0?(g={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:h,group:p},r[e]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=m,g.groupOrder=v,g.renderOrder=d.renderOrder,g.z=h,g.group=p),e++,g}function a(d,f,m,v,h,p){const g=o(d,f,m,v,h,p);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):t.push(g)}function l(d,f,m,v,h,p){const g=o(d,f,m,v,h,p);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):t.unshift(g)}function c(d,f){t.length>1&&t.sort(d||x0),n.length>1&&n.sort(f||yc),i.length>1&&i.sort(f||yc)}function u(){for(let d=e,f=r.length;d<f;d++){const m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function y0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new bc,r.set(n,[o])):i>=s.length?(o=new bc,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function b0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ie};break;case"SpotLight":t={position:new N,direction:new N,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function S0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let M0=0;function w0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function T0(r,e){const t=new b0,n=S0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new N);const s=new N,o=new Xe,a=new Xe;function l(u,d){let f=0,m=0,v=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let h=0,p=0,g=0,x=0,_=0,S=0,b=0,w=0,C=0,y=0;u.sort(w0);const M=d===!0?Math.PI:1;for(let D=0,z=u.length;D<z;D++){const E=u[D],L=E.color,O=E.intensity,G=E.distance,q=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)f+=L.r*O*M,m+=L.g*O*M,v+=L.b*O*M;else if(E.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(E.sh.coefficients[V],O);else if(E.isDirectionalLight){const V=t.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity*M),E.castShadow){const Y=E.shadow,K=n.get(E);K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,i.directionalShadow[h]=K,i.directionalShadowMap[h]=q,i.directionalShadowMatrix[h]=E.shadow.matrix,S++}i.directional[h]=V,h++}else if(E.isSpotLight){const V=t.get(E);V.position.setFromMatrixPosition(E.matrixWorld),V.color.copy(L).multiplyScalar(O*M),V.distance=G,V.coneCos=Math.cos(E.angle),V.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),V.decay=E.decay,i.spot[g]=V;const Y=E.shadow;if(E.map&&(i.spotLightMap[C]=E.map,C++,Y.updateMatrices(E),E.castShadow&&y++),i.spotLightMatrix[g]=Y.matrix,E.castShadow){const K=n.get(E);K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,i.spotShadow[g]=K,i.spotShadowMap[g]=q,w++}g++}else if(E.isRectAreaLight){const V=t.get(E);V.color.copy(L).multiplyScalar(O),V.halfWidth.set(E.width*.5,0,0),V.halfHeight.set(0,E.height*.5,0),i.rectArea[x]=V,x++}else if(E.isPointLight){const V=t.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity*M),V.distance=E.distance,V.decay=E.decay,E.castShadow){const Y=E.shadow,K=n.get(E);K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,K.shadowCameraNear=Y.camera.near,K.shadowCameraFar=Y.camera.far,i.pointShadow[p]=K,i.pointShadowMap[p]=q,i.pointShadowMatrix[p]=E.shadow.matrix,b++}i.point[p]=V,p++}else if(E.isHemisphereLight){const V=t.get(E);V.skyColor.copy(E.color).multiplyScalar(O*M),V.groundColor.copy(E.groundColor).multiplyScalar(O*M),i.hemi[_]=V,_++}}x>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=v;const R=i.hash;(R.directionalLength!==h||R.pointLength!==p||R.spotLength!==g||R.rectAreaLength!==x||R.hemiLength!==_||R.numDirectionalShadows!==S||R.numPointShadows!==b||R.numSpotShadows!==w||R.numSpotMaps!==C)&&(i.directional.length=h,i.spot.length=g,i.rectArea.length=x,i.point.length=p,i.hemi.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=w+C-y,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=y,R.directionalLength=h,R.pointLength=p,R.spotLength=g,R.rectAreaLength=x,R.hemiLength=_,R.numDirectionalShadows=S,R.numPointShadows=b,R.numSpotShadows=w,R.numSpotMaps=C,i.version=M0++)}function c(u,d){let f=0,m=0,v=0,h=0,p=0;const g=d.matrixWorldInverse;for(let x=0,_=u.length;x<_;x++){const S=u[x];if(S.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),f++}else if(S.isSpotLight){const b=i.spot[v];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),v++}else if(S.isRectAreaLight){const b=i.rectArea[h];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(g),a.identity(),o.copy(S.matrixWorld),o.premultiply(g),a.extractRotation(o),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),h++}else if(S.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(g),m++}else if(S.isHemisphereLight){const b=i.hemi[p];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(g),p++}}}return{setup:l,setupView:c,state:i}}function Sc(r,e){const t=new T0(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function E0(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Sc(r,e),t.set(s,[l])):o>=a.length?(l=new Sc(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class C0 extends us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class A0 extends us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const L0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function D0(r,e,t){let n=new Eu;const i=new Te,s=new Te,o=new je,a=new C0({depthPacking:Rh}),l=new A0,c={},u=t.maxTextureSize,d={[oi]:jt,[jt]:oi,[Kn]:Kn},f=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:L0,fragmentShader:P0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new cn;v.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new It(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ou,this.render=function(S,b,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const C=r.getRenderTarget(),y=r.getActiveCubeFace(),M=r.getActiveMipmapLevel(),R=r.state;R.setBlending(ri),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let D=0,z=S.length;D<z;D++){const E=S[D],L=E.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",E,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);const O=L.getFrameExtents();if(i.multiply(O),s.copy(L.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/O.x),i.x=s.x*O.x,L.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/O.y),i.y=s.y*O.y,L.mapSize.y=s.y)),L.map===null){const q=this.type!==Fr?{minFilter:Tt,magFilter:Tt}:{};L.map=new Vn(i.x,i.y,q),L.map.texture.name=E.name+".shadowMap",L.camera.updateProjectionMatrix()}r.setRenderTarget(L.map),r.clear();const G=L.getViewportCount();for(let q=0;q<G;q++){const V=L.getViewport(q);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),R.viewport(o),L.updateMatrices(E,q),n=L.getFrustum(),_(b,w,L.camera,E,this.type)}L.isPointLightShadow!==!0&&this.type===Fr&&g(L,w),L.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(C,y,M)};function g(S,b){const w=e.update(h);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Vn(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(b,null,w,f,h,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(b,null,w,m,h,null)}function x(S,b,w,C,y,M){let R=null;const D=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)R=D;else if(R=w.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const z=R.uuid,E=b.uuid;let L=c[z];L===void 0&&(L={},c[z]=L);let O=L[E];O===void 0&&(O=R.clone(),L[E]=O),R=O}return R.visible=b.visible,R.wireframe=b.wireframe,M===Fr?R.side=b.shadowSide!==null?b.shadowSide:b.side:R.side=b.shadowSide!==null?b.shadowSide:d[b.side],R.alphaMap=b.alphaMap,R.alphaTest=b.alphaTest,R.map=b.map,R.clipShadows=b.clipShadows,R.clippingPlanes=b.clippingPlanes,R.clipIntersection=b.clipIntersection,R.displacementMap=b.displacementMap,R.displacementScale=b.displacementScale,R.displacementBias=b.displacementBias,R.wireframeLinewidth=b.wireframeLinewidth,R.linewidth=b.linewidth,w.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(w.matrixWorld),R.nearDistance=C,R.farDistance=y),R}function _(S,b,w,C,y){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===Fr)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);const D=e.update(S),z=S.material;if(Array.isArray(z)){const E=D.groups;for(let L=0,O=E.length;L<O;L++){const G=E[L],q=z[G.materialIndex];if(q&&q.visible){const V=x(S,q,C,w.near,w.far,y);r.renderBufferDirect(w,null,D,V,S,G)}}}else if(z.visible){const E=x(S,z,C,w.near,w.far,y);r.renderBufferDirect(w,null,D,E,S,null)}}const R=S.children;for(let D=0,z=R.length;D<z;D++)_(R[D],b,w,C,y)}}function R0(r,e,t){const n=t.isWebGL2;function i(){let F=!1;const $=new je;let Q=null;const le=new je(0,0,0,0);return{setMask:function(he){Q!==he&&!F&&(r.colorMask(he,he,he,he),Q=he)},setLocked:function(he){F=he},setClear:function(he,Ge,ot,bt,vn){vn===!0&&(he*=bt,Ge*=bt,ot*=bt),$.set(he,Ge,ot,bt),le.equals($)===!1&&(r.clearColor(he,Ge,ot,bt),le.copy($))},reset:function(){F=!1,Q=null,le.set(-1,0,0,0)}}}function s(){let F=!1,$=null,Q=null,le=null;return{setTest:function(he){he?ue(2929):fe(2929)},setMask:function(he){$!==he&&!F&&(r.depthMask(he),$=he)},setFunc:function(he){if(Q!==he){switch(he){case th:r.depthFunc(512);break;case nh:r.depthFunc(519);break;case ih:r.depthFunc(513);break;case fo:r.depthFunc(515);break;case rh:r.depthFunc(514);break;case sh:r.depthFunc(518);break;case ah:r.depthFunc(516);break;case oh:r.depthFunc(517);break;default:r.depthFunc(515)}Q=he}},setLocked:function(he){F=he},setClear:function(he){le!==he&&(r.clearDepth(he),le=he)},reset:function(){F=!1,$=null,Q=null,le=null}}}function o(){let F=!1,$=null,Q=null,le=null,he=null,Ge=null,ot=null,bt=null,vn=null;return{setTest:function(Ye){F||(Ye?ue(2960):fe(2960))},setMask:function(Ye){$!==Ye&&!F&&(r.stencilMask(Ye),$=Ye)},setFunc:function(Ye,Kt,xn){(Q!==Ye||le!==Kt||he!==xn)&&(r.stencilFunc(Ye,Kt,xn),Q=Ye,le=Kt,he=xn)},setOp:function(Ye,Kt,xn){(Ge!==Ye||ot!==Kt||bt!==xn)&&(r.stencilOp(Ye,Kt,xn),Ge=Ye,ot=Kt,bt=xn)},setLocked:function(Ye){F=Ye},setClear:function(Ye){vn!==Ye&&(r.clearStencil(Ye),vn=Ye)},reset:function(){F=!1,$=null,Q=null,le=null,he=null,Ge=null,ot=null,bt=null,vn=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let f={},m={},v=new WeakMap,h=[],p=null,g=!1,x=null,_=null,S=null,b=null,w=null,C=null,y=null,M=!1,R=null,D=null,z=null,E=null,L=null;const O=r.getParameter(35661);let G=!1,q=0;const V=r.getParameter(7938);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=q>=2);let Y=null,K={};const se=r.getParameter(3088),H=r.getParameter(2978),J=new je().fromArray(se),ee=new je().fromArray(H);function B(F,$,Q){const le=new Uint8Array(4),he=r.createTexture();r.bindTexture(F,he),r.texParameteri(F,10241,9728),r.texParameteri(F,10240,9728);for(let Ge=0;Ge<Q;Ge++)r.texImage2D($+Ge,0,6408,1,1,0,6408,5121,le);return he}const ce={};ce[3553]=B(3553,3553,1),ce[34067]=B(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ue(2929),l.setFunc(fo),st(!1),at(ul),ue(2884),rt(ri);function ue(F){f[F]!==!0&&(r.enable(F),f[F]=!0)}function fe(F){f[F]!==!1&&(r.disable(F),f[F]=!1)}function de(F,$){return m[F]!==$?(r.bindFramebuffer(F,$),m[F]=$,n&&(F===36009&&(m[36160]=$),F===36160&&(m[36009]=$)),!0):!1}function xe(F,$){let Q=h,le=!1;if(F)if(Q=v.get($),Q===void 0&&(Q=[],v.set($,Q)),F.isWebGLMultipleRenderTargets){const he=F.texture;if(Q.length!==he.length||Q[0]!==36064){for(let Ge=0,ot=he.length;Ge<ot;Ge++)Q[Ge]=36064+Ge;Q.length=he.length,le=!0}}else Q[0]!==36064&&(Q[0]=36064,le=!0);else Q[0]!==1029&&(Q[0]=1029,le=!0);le&&(t.isWebGL2?r.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function be(F){return p!==F?(r.useProgram(F),p=F,!0):!1}const Me={[Qi]:32774,[Hf]:32778,[qf]:32779};if(n)Me[pl]=32775,Me[ml]=32776;else{const F=e.get("EXT_blend_minmax");F!==null&&(Me[pl]=F.MIN_EXT,Me[ml]=F.MAX_EXT)}const Oe={[Xf]:0,[jf]:1,[$f]:768,[lu]:770,[eh]:776,[Jf]:774,[Zf]:772,[Yf]:769,[cu]:771,[Qf]:775,[Kf]:773};function rt(F,$,Q,le,he,Ge,ot,bt){if(F===ri){g===!0&&(fe(3042),g=!1);return}if(g===!1&&(ue(3042),g=!0),F!==Wf){if(F!==x||bt!==M){if((_!==Qi||w!==Qi)&&(r.blendEquation(32774),_=Qi,w=Qi),bt)switch(F){case ir:r.blendFuncSeparate(1,771,1,771);break;case dl:r.blendFunc(1,1);break;case fl:r.blendFuncSeparate(0,769,0,1);break;case hl:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ir:r.blendFuncSeparate(770,771,1,771);break;case dl:r.blendFunc(770,1);break;case fl:r.blendFuncSeparate(0,769,0,1);break;case hl:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,b=null,C=null,y=null,x=F,M=bt}return}he=he||$,Ge=Ge||Q,ot=ot||le,($!==_||he!==w)&&(r.blendEquationSeparate(Me[$],Me[he]),_=$,w=he),(Q!==S||le!==b||Ge!==C||ot!==y)&&(r.blendFuncSeparate(Oe[Q],Oe[le],Oe[Ge],Oe[ot]),S=Q,b=le,C=Ge,y=ot),x=F,M=!1}function xt(F,$){F.side===Kn?fe(2884):ue(2884);let Q=F.side===jt;$&&(Q=!Q),st(Q),F.blending===ir&&F.transparent===!1?rt(ri):rt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const le=F.stencilWrite;c.setTest(le),le&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ke(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ue(32926):fe(32926)}function st(F){R!==F&&(F?r.frontFace(2304):r.frontFace(2305),R=F)}function at(F){F!==kf?(ue(2884),F!==D&&(F===ul?r.cullFace(1029):F===Gf?r.cullFace(1028):r.cullFace(1032))):fe(2884),D=F}function We(F){F!==z&&(G&&r.lineWidth(F),z=F)}function ke(F,$,Q){F?(ue(32823),(E!==$||L!==Q)&&(r.polygonOffset($,Q),E=$,L=Q)):fe(32823)}function Bt(F){F?ue(3089):fe(3089)}function yt(F){F===void 0&&(F=33984+O-1),Y!==F&&(r.activeTexture(F),Y=F)}function P(F,$,Q){Q===void 0&&(Y===null?Q=33984+O-1:Q=Y);let le=K[Q];le===void 0&&(le={type:void 0,texture:void 0},K[Q]=le),(le.type!==F||le.texture!==$)&&(Y!==Q&&(r.activeTexture(Q),Y=Q),r.bindTexture(F,$||ce[F]),le.type=F,le.texture=$)}function T(){const F=K[Y];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function I(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function U(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(F){J.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),J.copy(F))}function me(F){ee.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),ee.copy(F))}function Ae(F,$){let Q=d.get($);Q===void 0&&(Q=new WeakMap,d.set($,Q));let le=Q.get(F);le===void 0&&(le=r.getUniformBlockIndex($,F.name),Q.set(F,le))}function Fe(F,$){const le=d.get($).get(F);u.get($)!==le&&(r.uniformBlockBinding($,le,F.__bindingPointIndex),u.set($,le))}function Ne(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},Y=null,K={},m={},v=new WeakMap,h=[],p=null,g=!1,x=null,_=null,S=null,b=null,w=null,C=null,y=null,M=!1,R=null,D=null,z=null,E=null,L=null,J.set(0,0,r.canvas.width,r.canvas.height),ee.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ue,disable:fe,bindFramebuffer:de,drawBuffers:xe,useProgram:be,setBlending:rt,setMaterial:xt,setFlipSided:st,setCullFace:at,setLineWidth:We,setPolygonOffset:ke,setScissorTest:Bt,activeTexture:yt,bindTexture:P,unbindTexture:T,compressedTexImage2D:j,compressedTexImage3D:te,texImage2D:re,texImage3D:pe,updateUBOMapping:Ae,uniformBlockBinding:Fe,texStorage2D:U,texStorage3D:oe,texSubImage2D:ne,texSubImage3D:ae,compressedTexSubImage2D:_e,compressedTexSubImage3D:I,scissor:ge,viewport:me,reset:Ne}}function I0(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,T){return g?new OffscreenCanvas(P,T):jr("canvas")}function _(P,T,j,te){let ne=1;if((P.width>te||P.height>te)&&(ne=te/Math.max(P.width,P.height)),ne<1||T===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ae=T?Nh:Math.floor,_e=ae(ne*P.width),I=ae(ne*P.height);h===void 0&&(h=x(_e,I));const U=j?x(_e,I):h;return U.width=_e,U.height=I,U.getContext("2d").drawImage(P,0,0,_e,I),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+_e+"x"+I+")."),U}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function S(P){return Wl(P.width)&&Wl(P.height)}function b(P){return a?!1:P.wrapS!==hn||P.wrapT!==hn||P.minFilter!==Tt&&P.minFilter!==Pt}function w(P,T){return P.generateMipmaps&&T&&P.minFilter!==Tt&&P.minFilter!==Pt}function C(P){r.generateMipmap(P)}function y(P,T,j,te,ne=!1){if(a===!1)return T;if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ae=T;return T===6403&&(j===5126&&(ae=33326),j===5131&&(ae=33325),j===5121&&(ae=33321)),T===33319&&(j===5126&&(ae=33328),j===5131&&(ae=33327),j===5121&&(ae=33323)),T===6408&&(j===5126&&(ae=34836),j===5131&&(ae=34842),j===5121&&(ae=te===Ve&&ne===!1?35907:32856),j===32819&&(ae=32854),j===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function M(P,T,j){return w(P,j)===!0||P.isFramebufferTexture&&P.minFilter!==Tt&&P.minFilter!==Pt?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function R(P){return P===Tt||P===gl||P===pa?9728:9729}function D(P){const T=P.target;T.removeEventListener("dispose",D),E(T),T.isVideoTexture&&v.delete(T)}function z(P){const T=P.target;T.removeEventListener("dispose",z),O(T)}function E(P){const T=n.get(P);if(T.__webglInit===void 0)return;const j=P.source,te=p.get(j);if(te){const ne=te[T.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&L(P),Object.keys(te).length===0&&p.delete(j)}n.remove(P)}function L(P){const T=n.get(P);r.deleteTexture(T.__webglTexture);const j=P.source,te=p.get(j);delete te[T.__cacheKey],o.memory.textures--}function O(P){const T=P.texture,j=n.get(P),te=n.get(T);if(te.__webglTexture!==void 0&&(r.deleteTexture(te.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)r.deleteFramebuffer(j.__webglFramebuffer[ne]),j.__webglDepthbuffer&&r.deleteRenderbuffer(j.__webglDepthbuffer[ne]);else{if(r.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&r.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&r.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ne=0;ne<j.__webglColorRenderbuffer.length;ne++)j.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer(j.__webglColorRenderbuffer[ne]);j.__webglDepthRenderbuffer&&r.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ne=0,ae=T.length;ne<ae;ne++){const _e=n.get(T[ne]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(T[ne])}n.remove(T),n.remove(P)}let G=0;function q(){G=0}function V(){const P=G;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),G+=1,P}function Y(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.encoding),T.join()}function K(P,T){const j=n.get(P);if(P.isVideoTexture&&Bt(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){const te=P.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(j,P,T);return}}t.bindTexture(3553,j.__webglTexture,33984+T)}function se(P,T){const j=n.get(P);if(P.version>0&&j.__version!==P.version){fe(j,P,T);return}t.bindTexture(35866,j.__webglTexture,33984+T)}function H(P,T){const j=n.get(P);if(P.version>0&&j.__version!==P.version){fe(j,P,T);return}t.bindTexture(32879,j.__webglTexture,33984+T)}function J(P,T){const j=n.get(P);if(P.version>0&&j.__version!==P.version){de(j,P,T);return}t.bindTexture(34067,j.__webglTexture,33984+T)}const ee={[Hr]:10497,[hn]:33071,[mo]:33648},B={[Tt]:9728,[gl]:9984,[pa]:9986,[Pt]:9729,[mh]:9985,[qr]:9987};function ce(P,T,j){if(j?(r.texParameteri(P,10242,ee[T.wrapS]),r.texParameteri(P,10243,ee[T.wrapT]),(P===32879||P===35866)&&r.texParameteri(P,32882,ee[T.wrapR]),r.texParameteri(P,10240,B[T.magFilter]),r.texParameteri(P,10241,B[T.minFilter])):(r.texParameteri(P,10242,33071),r.texParameteri(P,10243,33071),(P===32879||P===35866)&&r.texParameteri(P,32882,33071),(T.wrapS!==hn||T.wrapT!==hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(P,10240,R(T.magFilter)),r.texParameteri(P,10241,R(T.minFilter)),T.minFilter!==Tt&&T.minFilter!==Pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Tt||T.minFilter!==pa&&T.minFilter!==qr||T.type===wi&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===Di&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(r.texParameterf(P,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function ue(P,T){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",D));const te=T.source;let ne=p.get(te);ne===void 0&&(ne={},p.set(te,ne));const ae=Y(T);if(ae!==P.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ne[ae].usedTimes++;const _e=ne[P.__cacheKey];_e!==void 0&&(ne[P.__cacheKey].usedTimes--,_e.usedTimes===0&&L(T)),P.__cacheKey=ae,P.__webglTexture=ne[ae].texture}return j}function fe(P,T,j){let te=3553;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(te=35866),T.isData3DTexture&&(te=32879);const ne=ue(P,T),ae=T.source;t.bindTexture(te,P.__webglTexture,33984+j);const _e=n.get(ae);if(ae.version!==_e.__version||ne===!0){t.activeTexture(33984+j),r.pixelStorei(37440,T.flipY),r.pixelStorei(37441,T.premultiplyAlpha),r.pixelStorei(3317,T.unpackAlignment),r.pixelStorei(37443,0);const I=b(T)&&S(T.image)===!1;let U=_(T.image,I,!1,u);U=yt(T,U);const oe=S(U)||a,re=s.convert(T.format,T.encoding);let pe=s.convert(T.type),ge=y(T.internalFormat,re,pe,T.encoding,T.isVideoTexture);ce(te,T,oe);let me;const Ae=T.mipmaps,Fe=a&&T.isVideoTexture!==!0,Ne=_e.__version===void 0||ne===!0,F=M(T,U,oe);if(T.isDepthTexture)ge=6402,a?T.type===wi?ge=36012:T.type===Mi?ge=33190:T.type===rr?ge=35056:ge=33189:T.type===wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Ei&&ge===6402&&T.type!==fu&&T.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Mi,pe=s.convert(T.type)),T.format===fr&&ge===6402&&(ge=34041,T.type!==rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=rr,pe=s.convert(T.type))),Ne&&(Fe?t.texStorage2D(3553,1,ge,U.width,U.height):t.texImage2D(3553,0,ge,U.width,U.height,0,re,pe,null));else if(T.isDataTexture)if(Ae.length>0&&oe){Fe&&Ne&&t.texStorage2D(3553,F,ge,Ae[0].width,Ae[0].height);for(let $=0,Q=Ae.length;$<Q;$++)me=Ae[$],Fe?t.texSubImage2D(3553,$,0,0,me.width,me.height,re,pe,me.data):t.texImage2D(3553,$,ge,me.width,me.height,0,re,pe,me.data);T.generateMipmaps=!1}else Fe?(Ne&&t.texStorage2D(3553,F,ge,U.width,U.height),t.texSubImage2D(3553,0,0,0,U.width,U.height,re,pe,U.data)):t.texImage2D(3553,0,ge,U.width,U.height,0,re,pe,U.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Fe&&Ne&&t.texStorage3D(35866,F,ge,Ae[0].width,Ae[0].height,U.depth);for(let $=0,Q=Ae.length;$<Q;$++)me=Ae[$],T.format!==pn?re!==null?Fe?t.compressedTexSubImage3D(35866,$,0,0,0,me.width,me.height,U.depth,re,me.data,0,0):t.compressedTexImage3D(35866,$,ge,me.width,me.height,U.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage3D(35866,$,0,0,0,me.width,me.height,U.depth,re,pe,me.data):t.texImage3D(35866,$,ge,me.width,me.height,U.depth,0,re,pe,me.data)}else{Fe&&Ne&&t.texStorage2D(3553,F,ge,Ae[0].width,Ae[0].height);for(let $=0,Q=Ae.length;$<Q;$++)me=Ae[$],T.format!==pn?re!==null?Fe?t.compressedTexSubImage2D(3553,$,0,0,me.width,me.height,re,me.data):t.compressedTexImage2D(3553,$,ge,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage2D(3553,$,0,0,me.width,me.height,re,pe,me.data):t.texImage2D(3553,$,ge,me.width,me.height,0,re,pe,me.data)}else if(T.isDataArrayTexture)Fe?(Ne&&t.texStorage3D(35866,F,ge,U.width,U.height,U.depth),t.texSubImage3D(35866,0,0,0,0,U.width,U.height,U.depth,re,pe,U.data)):t.texImage3D(35866,0,ge,U.width,U.height,U.depth,0,re,pe,U.data);else if(T.isData3DTexture)Fe?(Ne&&t.texStorage3D(32879,F,ge,U.width,U.height,U.depth),t.texSubImage3D(32879,0,0,0,0,U.width,U.height,U.depth,re,pe,U.data)):t.texImage3D(32879,0,ge,U.width,U.height,U.depth,0,re,pe,U.data);else if(T.isFramebufferTexture){if(Ne)if(Fe)t.texStorage2D(3553,F,ge,U.width,U.height);else{let $=U.width,Q=U.height;for(let le=0;le<F;le++)t.texImage2D(3553,le,ge,$,Q,0,re,pe,null),$>>=1,Q>>=1}}else if(Ae.length>0&&oe){Fe&&Ne&&t.texStorage2D(3553,F,ge,Ae[0].width,Ae[0].height);for(let $=0,Q=Ae.length;$<Q;$++)me=Ae[$],Fe?t.texSubImage2D(3553,$,0,0,re,pe,me):t.texImage2D(3553,$,ge,re,pe,me);T.generateMipmaps=!1}else Fe?(Ne&&t.texStorage2D(3553,F,ge,U.width,U.height),t.texSubImage2D(3553,0,0,0,re,pe,U)):t.texImage2D(3553,0,ge,re,pe,U);w(T,oe)&&C(te),_e.__version=ae.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function de(P,T,j){if(T.image.length!==6)return;const te=ue(P,T),ne=T.source;t.bindTexture(34067,P.__webglTexture,33984+j);const ae=n.get(ne);if(ne.version!==ae.__version||te===!0){t.activeTexture(33984+j),r.pixelStorei(37440,T.flipY),r.pixelStorei(37441,T.premultiplyAlpha),r.pixelStorei(3317,T.unpackAlignment),r.pixelStorei(37443,0);const _e=T.isCompressedTexture||T.image[0].isCompressedTexture,I=T.image[0]&&T.image[0].isDataTexture,U=[];for(let $=0;$<6;$++)!_e&&!I?U[$]=_(T.image[$],!1,!0,c):U[$]=I?T.image[$].image:T.image[$],U[$]=yt(T,U[$]);const oe=U[0],re=S(oe)||a,pe=s.convert(T.format,T.encoding),ge=s.convert(T.type),me=y(T.internalFormat,pe,ge,T.encoding),Ae=a&&T.isVideoTexture!==!0,Fe=ae.__version===void 0||te===!0;let Ne=M(T,oe,re);ce(34067,T,re);let F;if(_e){Ae&&Fe&&t.texStorage2D(34067,Ne,me,oe.width,oe.height);for(let $=0;$<6;$++){F=U[$].mipmaps;for(let Q=0;Q<F.length;Q++){const le=F[Q];T.format!==pn?pe!==null?Ae?t.compressedTexSubImage2D(34069+$,Q,0,0,le.width,le.height,pe,le.data):t.compressedTexImage2D(34069+$,Q,me,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?t.texSubImage2D(34069+$,Q,0,0,le.width,le.height,pe,ge,le.data):t.texImage2D(34069+$,Q,me,le.width,le.height,0,pe,ge,le.data)}}}else{F=T.mipmaps,Ae&&Fe&&(F.length>0&&Ne++,t.texStorage2D(34067,Ne,me,U[0].width,U[0].height));for(let $=0;$<6;$++)if(I){Ae?t.texSubImage2D(34069+$,0,0,0,U[$].width,U[$].height,pe,ge,U[$].data):t.texImage2D(34069+$,0,me,U[$].width,U[$].height,0,pe,ge,U[$].data);for(let Q=0;Q<F.length;Q++){const he=F[Q].image[$].image;Ae?t.texSubImage2D(34069+$,Q+1,0,0,he.width,he.height,pe,ge,he.data):t.texImage2D(34069+$,Q+1,me,he.width,he.height,0,pe,ge,he.data)}}else{Ae?t.texSubImage2D(34069+$,0,0,0,pe,ge,U[$]):t.texImage2D(34069+$,0,me,pe,ge,U[$]);for(let Q=0;Q<F.length;Q++){const le=F[Q];Ae?t.texSubImage2D(34069+$,Q+1,0,0,pe,ge,le.image[$]):t.texImage2D(34069+$,Q+1,me,pe,ge,le.image[$])}}}w(T,re)&&C(34067),ae.__version=ne.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function xe(P,T,j,te,ne){const ae=s.convert(j.format,j.encoding),_e=s.convert(j.type),I=y(j.internalFormat,ae,_e,j.encoding);n.get(T).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,I,T.width,T.height,T.depth,0,ae,_e,null):t.texImage2D(ne,0,I,T.width,T.height,0,ae,_e,null)),t.bindFramebuffer(36160,P),ke(T)?f.framebufferTexture2DMultisampleEXT(36160,te,ne,n.get(j).__webglTexture,0,We(T)):(ne===3553||ne>=34069&&ne<=34074)&&r.framebufferTexture2D(36160,te,ne,n.get(j).__webglTexture,0),t.bindFramebuffer(36160,null)}function be(P,T,j){if(r.bindRenderbuffer(36161,P),T.depthBuffer&&!T.stencilBuffer){let te=33189;if(j||ke(T)){const ne=T.depthTexture;ne&&ne.isDepthTexture&&(ne.type===wi?te=36012:ne.type===Mi&&(te=33190));const ae=We(T);ke(T)?f.renderbufferStorageMultisampleEXT(36161,ae,te,T.width,T.height):r.renderbufferStorageMultisample(36161,ae,te,T.width,T.height)}else r.renderbufferStorage(36161,te,T.width,T.height);r.framebufferRenderbuffer(36160,36096,36161,P)}else if(T.depthBuffer&&T.stencilBuffer){const te=We(T);j&&ke(T)===!1?r.renderbufferStorageMultisample(36161,te,35056,T.width,T.height):ke(T)?f.renderbufferStorageMultisampleEXT(36161,te,35056,T.width,T.height):r.renderbufferStorage(36161,34041,T.width,T.height),r.framebufferRenderbuffer(36160,33306,36161,P)}else{const te=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ne=0;ne<te.length;ne++){const ae=te[ne],_e=s.convert(ae.format,ae.encoding),I=s.convert(ae.type),U=y(ae.internalFormat,_e,I,ae.encoding),oe=We(T);j&&ke(T)===!1?r.renderbufferStorageMultisample(36161,oe,U,T.width,T.height):ke(T)?f.renderbufferStorageMultisampleEXT(36161,oe,U,T.width,T.height):r.renderbufferStorage(36161,U,T.width,T.height)}}r.bindRenderbuffer(36161,null)}function Me(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),K(T.depthTexture,0);const te=n.get(T.depthTexture).__webglTexture,ne=We(T);if(T.depthTexture.format===Ei)ke(T)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ne):r.framebufferTexture2D(36160,36096,3553,te,0);else if(T.depthTexture.format===fr)ke(T)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ne):r.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function Oe(P){const T=n.get(P),j=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Me(T.__webglFramebuffer,P)}else if(j){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]=r.createRenderbuffer(),be(T.__webglDepthbuffer[te],P,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),be(T.__webglDepthbuffer,P,!1);t.bindFramebuffer(36160,null)}function rt(P,T,j){const te=n.get(P);T!==void 0&&xe(te.__webglFramebuffer,P,P.texture,36064,3553),j!==void 0&&Oe(P)}function xt(P){const T=P.texture,j=n.get(P),te=n.get(T);P.addEventListener("dispose",z),P.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=T.version,o.memory.textures++);const ne=P.isWebGLCubeRenderTarget===!0,ae=P.isWebGLMultipleRenderTargets===!0,_e=S(P)||a;if(ne){j.__webglFramebuffer=[];for(let I=0;I<6;I++)j.__webglFramebuffer[I]=r.createFramebuffer()}else{if(j.__webglFramebuffer=r.createFramebuffer(),ae)if(i.drawBuffers){const I=P.texture;for(let U=0,oe=I.length;U<oe;U++){const re=n.get(I[U]);re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&ke(P)===!1){const I=ae?T:[T];j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,j.__webglMultisampledFramebuffer);for(let U=0;U<I.length;U++){const oe=I[U];j.__webglColorRenderbuffer[U]=r.createRenderbuffer(),r.bindRenderbuffer(36161,j.__webglColorRenderbuffer[U]);const re=s.convert(oe.format,oe.encoding),pe=s.convert(oe.type),ge=y(oe.internalFormat,re,pe,oe.encoding,P.isXRRenderTarget===!0),me=We(P);r.renderbufferStorageMultisample(36161,me,ge,P.width,P.height),r.framebufferRenderbuffer(36160,36064+U,36161,j.__webglColorRenderbuffer[U])}r.bindRenderbuffer(36161,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),be(j.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,te.__webglTexture),ce(34067,T,_e);for(let I=0;I<6;I++)xe(j.__webglFramebuffer[I],P,T,36064,34069+I);w(T,_e)&&C(34067),t.unbindTexture()}else if(ae){const I=P.texture;for(let U=0,oe=I.length;U<oe;U++){const re=I[U],pe=n.get(re);t.bindTexture(3553,pe.__webglTexture),ce(3553,re,_e),xe(j.__webglFramebuffer,P,re,36064+U,3553),w(re,_e)&&C(3553)}t.unbindTexture()}else{let I=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?I=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(I,te.__webglTexture),ce(I,T,_e),xe(j.__webglFramebuffer,P,T,36064,I),w(T,_e)&&C(I),t.unbindTexture()}P.depthBuffer&&Oe(P)}function st(P){const T=S(P)||a,j=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let te=0,ne=j.length;te<ne;te++){const ae=j[te];if(w(ae,T)){const _e=P.isWebGLCubeRenderTarget?34067:3553,I=n.get(ae).__webglTexture;t.bindTexture(_e,I),C(_e),t.unbindTexture()}}}function at(P){if(a&&P.samples>0&&ke(P)===!1){const T=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],j=P.width,te=P.height;let ne=16384;const ae=[],_e=P.stencilBuffer?33306:36096,I=n.get(P),U=P.isWebGLMultipleRenderTargets===!0;if(U)for(let oe=0;oe<T.length;oe++)t.bindFramebuffer(36160,I.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+oe,36161,null),t.bindFramebuffer(36160,I.__webglFramebuffer),r.framebufferTexture2D(36009,36064+oe,3553,null,0);t.bindFramebuffer(36008,I.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,I.__webglFramebuffer);for(let oe=0;oe<T.length;oe++){ae.push(36064+oe),P.depthBuffer&&ae.push(_e);const re=I.__ignoreDepthValues!==void 0?I.__ignoreDepthValues:!1;if(re===!1&&(P.depthBuffer&&(ne|=256),P.stencilBuffer&&(ne|=1024)),U&&r.framebufferRenderbuffer(36008,36064,36161,I.__webglColorRenderbuffer[oe]),re===!0&&(r.invalidateFramebuffer(36008,[_e]),r.invalidateFramebuffer(36009,[_e])),U){const pe=n.get(T[oe]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,pe,0)}r.blitFramebuffer(0,0,j,te,0,0,j,te,ne,9728),m&&r.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),U)for(let oe=0;oe<T.length;oe++){t.bindFramebuffer(36160,I.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+oe,36161,I.__webglColorRenderbuffer[oe]);const re=n.get(T[oe]).__webglTexture;t.bindFramebuffer(36160,I.__webglFramebuffer),r.framebufferTexture2D(36009,36064+oe,3553,re,0)}t.bindFramebuffer(36009,I.__webglMultisampledFramebuffer)}}function We(P){return Math.min(d,P.samples)}function ke(P){const T=n.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Bt(P){const T=o.render.frame;v.get(P)!==T&&(v.set(P,T),P.update())}function yt(P,T){const j=P.encoding,te=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===go||j!==Gn&&(j===Ve?a===!1?e.has("EXT_sRGB")===!0&&te===pn?(P.format=go,P.minFilter=Pt,P.generateMipmaps=!1):T=mu.sRGBToLinear(T):(te!==pn||ne!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",j)),T}this.allocateTextureUnit=V,this.resetTextureUnits=q,this.setTexture2D=K,this.setTexture2DArray=se,this.setTexture3D=H,this.setTextureCube=J,this.rebindTextures=rt,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ke}function O0(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===Pi)return 5121;if(s===xh)return 32819;if(s===yh)return 32820;if(s===gh)return 5120;if(s===_h)return 5122;if(s===fu)return 5123;if(s===vh)return 5124;if(s===Mi)return 5125;if(s===wi)return 5126;if(s===Di)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===bh)return 6406;if(s===pn)return 6408;if(s===Sh)return 6409;if(s===Mh)return 6410;if(s===Ei)return 6402;if(s===fr)return 34041;if(s===go)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===wh)return 6403;if(s===Th)return 36244;if(s===Eh)return 33319;if(s===Ch)return 33320;if(s===Ah)return 36249;if(s===ma||s===ga||s===_a||s===va)if(o===Ve)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ma)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===_a)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===va)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ma)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ga)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===_a)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===va)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_l||s===vl||s===xl||s===yl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===_l)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===vl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===yl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Lh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===bl||s===Sl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===bl)return o===Ve?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Sl)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ml||s===wl||s===Tl||s===El||s===Cl||s===Al||s===Ll||s===Pl||s===Dl||s===Rl||s===Il||s===Ol||s===Fl||s===zl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ml)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wl)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Tl)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===El)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Cl)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Al)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ll)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Pl)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Dl)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rl)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Il)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ol)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Fl)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===zl)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===xa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===xa)return o===Ve?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Ph||s===Nl||s===Bl||s===Ul)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===xa)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Nl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Bl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ul)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===rr?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class F0 extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rs extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z0={type:"move"};class qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const h of e.hand.values()){const p=t.getJointPose(h,n),g=this._getHandJoint(c,h);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(z0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Rs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class N0 extends At{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Ei,u!==Ei&&u!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ei&&(n=Mi),n===void 0&&u===fr&&(n=rr),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Tt,this.minFilter=l!==void 0?l:Tt,this.flipY=!1,this.generateMipmaps=!1}}class B0 extends Oi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,v=null;const h=t.getContextAttributes();let p=null,g=null;const x=[],_=[],S=new Set,b=new Map,w=new Et;w.layers.enable(1),w.viewport=new je;const C=new Et;C.layers.enable(2),C.viewport=new je;const y=[w,C],M=new F0;M.layers.enable(1),M.layers.enable(2);let R=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let J=x[H];return J===void 0&&(J=new qa,x[H]=J),J.getTargetRaySpace()},this.getControllerGrip=function(H){let J=x[H];return J===void 0&&(J=new qa,x[H]=J),J.getGripSpace()},this.getHand=function(H){let J=x[H];return J===void 0&&(J=new qa,x[H]=J),J.getHandSpace()};function z(H){const J=_.indexOf(H.inputSource);if(J===-1)return;const ee=x[J];ee!==void 0&&ee.dispatchEvent({type:H.type,data:H.inputSource})}function E(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",E),i.removeEventListener("inputsourceschange",L);for(let H=0;H<x.length;H++){const J=_[H];J!==null&&(_[H]=null,x[H].disconnect(J))}R=null,D=null,e.setRenderTarget(p),m=null,f=null,d=null,i=null,g=null,se.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",E),i.addEventListener("inputsourceschange",L),h.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?h.antialias:!0,alpha:h.alpha,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:m}),g=new Vn(m.framebufferWidth,m.framebufferHeight,{format:pn,type:Pi,encoding:e.outputEncoding,stencilBuffer:h.stencil})}else{let J=null,ee=null,B=null;h.depth&&(B=h.stencil?35056:33190,J=h.stencil?fr:Ei,ee=h.stencil?rr:Mi);const ce={colorFormat:32856,depthFormat:B,scaleFactor:s};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(ce),i.updateRenderState({layers:[f]}),g=new Vn(f.textureWidth,f.textureHeight,{format:pn,type:Pi,depthTexture:new N0(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:h.stencil,encoding:e.outputEncoding,samples:h.antialias?4:0});const ue=e.properties.get(g);ue.__ignoreDepthValues=f.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function L(H){for(let J=0;J<H.removed.length;J++){const ee=H.removed[J],B=_.indexOf(ee);B>=0&&(_[B]=null,x[B].disconnect(ee))}for(let J=0;J<H.added.length;J++){const ee=H.added[J];let B=_.indexOf(ee);if(B===-1){for(let ue=0;ue<x.length;ue++)if(ue>=_.length){_.push(ee),B=ue;break}else if(_[ue]===null){_[ue]=ee,B=ue;break}if(B===-1)break}const ce=x[B];ce&&ce.connect(ee)}}const O=new N,G=new N;function q(H,J,ee){O.setFromMatrixPosition(J.matrixWorld),G.setFromMatrixPosition(ee.matrixWorld);const B=O.distanceTo(G),ce=J.projectionMatrix.elements,ue=ee.projectionMatrix.elements,fe=ce[14]/(ce[10]-1),de=ce[14]/(ce[10]+1),xe=(ce[9]+1)/ce[5],be=(ce[9]-1)/ce[5],Me=(ce[8]-1)/ce[0],Oe=(ue[8]+1)/ue[0],rt=fe*Me,xt=fe*Oe,st=B/(-Me+Oe),at=st*-Me;J.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(at),H.translateZ(st),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const We=fe+st,ke=de+st,Bt=rt-at,yt=xt+(B-at),P=xe*de/ke*We,T=be*de/ke*We;H.projectionMatrix.makePerspective(Bt,yt,P,T,We,ke)}function V(H,J){J===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(J.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;M.near=C.near=w.near=H.near,M.far=C.far=w.far=H.far,(R!==M.near||D!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,D=M.far);const J=H.parent,ee=M.cameras;V(M,J);for(let ce=0;ce<ee.length;ce++)V(ee[ce],J);M.matrixWorld.decompose(M.position,M.quaternion,M.scale),H.matrix.copy(M.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const B=H.children;for(let ce=0,ue=B.length;ce<ue;ce++)B[ce].updateMatrixWorld(!0);ee.length===2?q(M,w,C):M.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.getPlanes=function(){return S};let Y=null;function K(H,J){if(u=J.getViewerPose(c||o),v=J,u!==null){const ee=u.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let B=!1;ee.length!==M.cameras.length&&(M.cameras.length=0,B=!0);for(let ce=0;ce<ee.length;ce++){const ue=ee[ce];let fe=null;if(m!==null)fe=m.getViewport(ue);else{const xe=d.getViewSubImage(f,ue);fe=xe.viewport,ce===0&&(e.setRenderTargetTextures(g,xe.colorTexture,f.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(g))}let de=y[ce];de===void 0&&(de=new Et,de.layers.enable(ce),de.viewport=new je,y[ce]=de),de.matrix.fromArray(ue.transform.matrix),de.projectionMatrix.fromArray(ue.projectionMatrix),de.viewport.set(fe.x,fe.y,fe.width,fe.height),ce===0&&M.matrix.copy(de.matrix),B===!0&&M.cameras.push(de)}}for(let ee=0;ee<x.length;ee++){const B=_[ee],ce=x[ee];B!==null&&ce!==void 0&&ce.update(B,J,c||o)}if(Y&&Y(H,J),J.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let ee=null;for(const B of S)J.detectedPlanes.has(B)||(ee===null&&(ee=[]),ee.push(B));if(ee!==null)for(const B of ee)S.delete(B),b.delete(B),n.dispatchEvent({type:"planeremoved",data:B});for(const B of J.detectedPlanes)if(!S.has(B))S.add(B),b.set(B,J.lastChangedTime),n.dispatchEvent({type:"planeadded",data:B});else{const ce=b.get(B);B.lastChangedTime>ce&&(b.set(B,B.lastChangedTime),n.dispatchEvent({type:"planechanged",data:B}))}}v=null}const se=new Cu;se.setAnimationLoop(K),this.setAnimationLoop=function(H){Y=H},this.dispose=function(){}}}function U0(r,e){function t(h,p){p.color.getRGB(h.fogColor.value,Mu(r)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function n(h,p,g,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(h,p):p.isMeshToonMaterial?(i(h,p),u(h,p)):p.isMeshPhongMaterial?(i(h,p),c(h,p)):p.isMeshStandardMaterial?(i(h,p),d(h,p),p.isMeshPhysicalMaterial&&f(h,p,_)):p.isMeshMatcapMaterial?(i(h,p),m(h,p)):p.isMeshDepthMaterial?i(h,p):p.isMeshDistanceMaterial?(i(h,p),v(h,p)):p.isMeshNormalMaterial?i(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?a(h,p,g,x):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===jt&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===jt&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const g=e.get(p).envMap;if(g&&(h.envMap.value=g,h.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const S=r.useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let x;p.map?x=p.map:p.specularMap?x=p.specularMap:p.displacementMap?x=p.displacementMap:p.normalMap?x=p.normalMap:p.bumpMap?x=p.bumpMap:p.roughnessMap?x=p.roughnessMap:p.metalnessMap?x=p.metalnessMap:p.alphaMap?x=p.alphaMap:p.emissiveMap?x=p.emissiveMap:p.clearcoatMap?x=p.clearcoatMap:p.clearcoatNormalMap?x=p.clearcoatNormalMap:p.clearcoatRoughnessMap?x=p.clearcoatRoughnessMap:p.iridescenceMap?x=p.iridescenceMap:p.iridescenceThicknessMap?x=p.iridescenceThicknessMap:p.specularIntensityMap?x=p.specularIntensityMap:p.specularColorMap?x=p.specularColorMap:p.transmissionMap?x=p.transmissionMap:p.thicknessMap?x=p.thicknessMap:p.sheenColorMap?x=p.sheenColorMap:p.sheenRoughnessMap&&(x=p.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),h.uvTransform.value.copy(x.matrix));let _;p.aoMap?_=p.aoMap:p.lightMap&&(_=p.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uv2Transform.value.copy(_.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,g,x){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*g,h.scale.value=x*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),h.uvTransform.value.copy(g.matrix))}function c(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function u(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function d(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function f(h,p,g){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===jt&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=g.texture,h.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function m(h,p){p.matcap&&(h.matcap.value=p.matcap)}function v(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function k0(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(x,_){const S=_.program;n.uniformBlockBinding(x,S)}function c(x,_){let S=i[x.id];S===void 0&&(v(x),S=u(x),i[x.id]=S,x.addEventListener("dispose",p));const b=_.program;n.updateUBOMapping(x,b);const w=e.render.frame;s[x.id]!==w&&(f(x),s[x.id]=w)}function u(x){const _=d();x.__bindingPointIndex=_;const S=r.createBuffer(),b=x.__size,w=x.usage;return r.bindBuffer(35345,S),r.bufferData(35345,b,w),r.bindBuffer(35345,null),r.bindBufferBase(35345,_,S),S}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const _=i[x.id],S=x.uniforms,b=x.__cache;r.bindBuffer(35345,_);for(let w=0,C=S.length;w<C;w++){const y=S[w];if(m(y,w,b)===!0){const M=y.__offset,R=Array.isArray(y.value)?y.value:[y.value];let D=0;for(let z=0;z<R.length;z++){const E=R[z],L=h(E);typeof E=="number"?(y.__data[0]=E,r.bufferSubData(35345,M+D,y.__data)):E.isMatrix3?(y.__data[0]=E.elements[0],y.__data[1]=E.elements[1],y.__data[2]=E.elements[2],y.__data[3]=E.elements[0],y.__data[4]=E.elements[3],y.__data[5]=E.elements[4],y.__data[6]=E.elements[5],y.__data[7]=E.elements[0],y.__data[8]=E.elements[6],y.__data[9]=E.elements[7],y.__data[10]=E.elements[8],y.__data[11]=E.elements[0]):(E.toArray(y.__data,D),D+=L.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,M,y.__data)}}r.bindBuffer(35345,null)}function m(x,_,S){const b=x.value;if(S[_]===void 0){if(typeof b=="number")S[_]=b;else{const w=Array.isArray(b)?b:[b],C=[];for(let y=0;y<w.length;y++)C.push(w[y].clone());S[_]=C}return!0}else if(typeof b=="number"){if(S[_]!==b)return S[_]=b,!0}else{const w=Array.isArray(S[_])?S[_]:[S[_]],C=Array.isArray(b)?b:[b];for(let y=0;y<w.length;y++){const M=w[y];if(M.equals(C[y])===!1)return M.copy(C[y]),!0}}return!1}function v(x){const _=x.uniforms;let S=0;const b=16;let w=0;for(let C=0,y=_.length;C<y;C++){const M=_[C],R={boundary:0,storage:0},D=Array.isArray(M.value)?M.value:[M.value];for(let z=0,E=D.length;z<E;z++){const L=D[z],O=h(L);R.boundary+=O.boundary,R.storage+=O.storage}if(M.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=S,C>0){w=S%b;const z=b-w;w!==0&&z-R.boundary<0&&(S+=b-w,M.__offset=S)}S+=R.storage}return w=S%b,w>0&&(S+=b-w),x.__size=S,x.__cache={},this}function h(x){const _={boundary:0,storage:0};return typeof x=="number"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function p(x){const _=x.target;_.removeEventListener("dispose",p);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function g(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:g}}function G0(){const r=jr("canvas");return r.style.display="block",r}function sa(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:G0(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let d=null,f=null;const m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Gn,this.useLegacyLights=!0,this.toneMapping=mn,this.toneMappingExposure=1;const h=this;let p=!1,g=0,x=0,_=null,S=-1,b=null;const w=new je,C=new je;let y=null,M=e.width,R=e.height,D=1,z=null,E=null;const L=new je(0,0,M,R),O=new je(0,0,M,R);let G=!1;const q=new Eu;let V=!1,Y=!1,K=null;const se=new Xe,H=new N,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ee(){return _===null?D:1}let B=t;function ce(A,W){for(let X=0;X<A.length;X++){const k=A[X],Z=e.getContext(k,W);if(Z!==null)return Z}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zo}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",me,!1),B===null){const W=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&W.shift(),B=ce(W,A),B===null)throw ce(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ue,fe,de,xe,be,Me,Oe,rt,xt,st,at,We,ke,Bt,yt,P,T,j,te,ne,ae,_e,I,U;function oe(){ue=new Jg(B),fe=new qg(B,ue,r),ue.init(fe),_e=new O0(B,ue,fe),de=new R0(B,ue,fe),xe=new t_,be=new v0,Me=new I0(B,ue,de,be,fe,_e,xe),Oe=new jg(h),rt=new Kg(h),xt=new cp(B,fe),I=new Wg(B,ue,xt,fe),st=new Qg(B,xt,xe,I),at=new s_(B,st,xt,xe),te=new r_(B,fe,Me),P=new Xg(be),We=new _0(h,Oe,rt,ue,fe,I,P),ke=new U0(h,be),Bt=new y0,yt=new E0(ue,fe),j=new Vg(h,Oe,rt,de,at,u,o),T=new D0(h,at,fe),U=new k0(B,xe,fe,de),ne=new Hg(B,ue,xe,fe),ae=new e_(B,ue,xe,fe),xe.programs=We.programs,h.capabilities=fe,h.extensions=ue,h.properties=be,h.renderLists=Bt,h.shadowMap=T,h.state=de,h.info=xe}oe();const re=new B0(h,B);this.xr=re,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=ue.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ue.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(A){A!==void 0&&(D=A,this.setSize(M,R,!1))},this.getSize=function(A){return A.set(M,R)},this.setSize=function(A,W,X=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}M=A,R=W,e.width=Math.floor(A*D),e.height=Math.floor(W*D),X===!0&&(e.style.width=A+"px",e.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(M*D,R*D).floor()},this.setDrawingBufferSize=function(A,W,X){M=A,R=W,D=X,e.width=Math.floor(A*X),e.height=Math.floor(W*X),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(L)},this.setViewport=function(A,W,X,k){A.isVector4?L.set(A.x,A.y,A.z,A.w):L.set(A,W,X,k),de.viewport(w.copy(L).multiplyScalar(D).floor())},this.getScissor=function(A){return A.copy(O)},this.setScissor=function(A,W,X,k){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,W,X,k),de.scissor(C.copy(O).multiplyScalar(D).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(A){de.setScissorTest(G=A)},this.setOpaqueSort=function(A){z=A},this.setTransparentSort=function(A){E=A},this.getClearColor=function(A){return A.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(A=!0,W=!0,X=!0){let k=0;A&&(k|=16384),W&&(k|=256),X&&(k|=1024),B.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",me,!1),Bt.dispose(),yt.dispose(),be.dispose(),Oe.dispose(),rt.dispose(),at.dispose(),I.dispose(),U.dispose(),We.dispose(),re.dispose(),re.removeEventListener("sessionstart",Q),re.removeEventListener("sessionend",le),K&&(K.dispose(),K=null),he.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const A=xe.autoReset,W=T.enabled,X=T.autoUpdate,k=T.needsUpdate,Z=T.type;oe(),xe.autoReset=A,T.enabled=W,T.autoUpdate=X,T.needsUpdate=k,T.type=Z}function me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ae(A){const W=A.target;W.removeEventListener("dispose",Ae),Fe(W)}function Fe(A){Ne(A),be.remove(A)}function Ne(A){const W=be.get(A).programs;W!==void 0&&(W.forEach(function(X){We.releaseProgram(X)}),A.isShaderMaterial&&We.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,X,k,Z,ve){W===null&&(W=J);const ye=Z.isMesh&&Z.matrixWorld.determinant()<0,we=jd(A,W,X,k,Z);de.setMaterial(k,ye);let Ee=X.index,ze=1;k.wireframe===!0&&(Ee=st.getWireframeAttribute(X),ze=2);const Pe=X.drawRange,De=X.attributes.position;let Ke=Pe.start*ze,Ut=(Pe.start+Pe.count)*ze;ve!==null&&(Ke=Math.max(Ke,ve.start*ze),Ut=Math.min(Ut,(ve.start+ve.count)*ze)),Ee!==null?(Ke=Math.max(Ke,0),Ut=Math.min(Ut,Ee.count)):De!=null&&(Ke=Math.max(Ke,0),Ut=Math.min(Ut,De.count));const Dn=Ut-Ke;if(Dn<0||Dn===1/0)return;I.setup(Z,k,we,X,Ee);let fi,Je=ne;if(Ee!==null&&(fi=xt.get(Ee),Je=ae,Je.setIndex(fi)),Z.isMesh)k.wireframe===!0?(de.setLineWidth(k.wireframeLinewidth*ee()),Je.setMode(1)):Je.setMode(4);else if(Z.isLine){let Re=k.linewidth;Re===void 0&&(Re=1),de.setLineWidth(Re*ee()),Z.isLineSegments?Je.setMode(1):Z.isLineLoop?Je.setMode(2):Je.setMode(3)}else Z.isPoints?Je.setMode(0):Z.isSprite&&Je.setMode(4);if(Z.isInstancedMesh)Je.renderInstances(Ke,Dn,Z.count);else if(X.isInstancedBufferGeometry){const Re=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ua=Math.min(X.instanceCount,Re);Je.renderInstances(Ke,Dn,ua)}else Je.render(Ke,Dn)},this.compile=function(A,W){function X(k,Z,ve){k.transparent===!0&&k.side===Kn&&k.forceSinglePass===!1?(k.side=jt,k.needsUpdate=!0,Kt(k,Z,ve),k.side=oi,k.needsUpdate=!0,Kt(k,Z,ve),k.side=Kn):Kt(k,Z,ve)}f=yt.get(A),f.init(),v.push(f),A.traverseVisible(function(k){k.isLight&&k.layers.test(W.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights(h.useLegacyLights),A.traverse(function(k){const Z=k.material;if(Z)if(Array.isArray(Z))for(let ve=0;ve<Z.length;ve++){const ye=Z[ve];X(ye,A,k)}else X(Z,A,k)}),v.pop(),f=null};let F=null;function $(A){F&&F(A)}function Q(){he.stop()}function le(){he.start()}const he=new Cu;he.setAnimationLoop($),typeof self<"u"&&he.setContext(self),this.setAnimationLoop=function(A){F=A,re.setAnimationLoop(A),A===null?he.stop():he.start()},re.addEventListener("sessionstart",Q),re.addEventListener("sessionend",le),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(W),W=re.getCamera()),A.isScene===!0&&A.onBeforeRender(h,A,W,_),f=yt.get(A,v.length),f.init(),v.push(f),se.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),q.setFromProjectionMatrix(se),Y=this.localClippingEnabled,V=P.init(this.clippingPlanes,Y),d=Bt.get(A,m.length),d.init(),m.push(d),Ge(A,W,0,h.sortObjects),d.finish(),h.sortObjects===!0&&d.sort(z,E),V===!0&&P.beginShadows();const X=f.state.shadowsArray;if(T.render(X,A,W),V===!0&&P.endShadows(),this.info.autoReset===!0&&this.info.reset(),j.render(d,A),f.setupLights(h.useLegacyLights),W.isArrayCamera){const k=W.cameras;for(let Z=0,ve=k.length;Z<ve;Z++){const ye=k[Z];ot(d,A,ye,ye.viewport)}}else ot(d,A,W);_!==null&&(Me.updateMultisampleRenderTarget(_),Me.updateRenderTargetMipmap(_)),A.isScene===!0&&A.onAfterRender(h,A,W),I.resetDefaultState(),S=-1,b=null,v.pop(),v.length>0?f=v[v.length-1]:f=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function Ge(A,W,X,k){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){k&&H.setFromMatrixPosition(A.matrixWorld).applyMatrix4(se);const ye=at.update(A),we=A.material;we.visible&&d.push(A,ye,we,X,H.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==xe.render.frame&&(A.skeleton.update(),A.skeleton.frame=xe.render.frame),!A.frustumCulled||q.intersectsObject(A))){k&&H.setFromMatrixPosition(A.matrixWorld).applyMatrix4(se);const ye=at.update(A),we=A.material;if(Array.isArray(we)){const Ee=ye.groups;for(let ze=0,Pe=Ee.length;ze<Pe;ze++){const De=Ee[ze],Ke=we[De.materialIndex];Ke&&Ke.visible&&d.push(A,ye,Ke,X,H.z,De)}}else we.visible&&d.push(A,ye,we,X,H.z,null)}}const ve=A.children;for(let ye=0,we=ve.length;ye<we;ye++)Ge(ve[ye],W,X,k)}function ot(A,W,X,k){const Z=A.opaque,ve=A.transmissive,ye=A.transparent;f.setupLightsView(X),V===!0&&P.setGlobalState(h.clippingPlanes,X),ve.length>0&&bt(Z,W,X),k&&de.viewport(w.copy(k)),Z.length>0&&vn(Z,W,X),ve.length>0&&vn(ve,W,X),ye.length>0&&vn(ye,W,X),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function bt(A,W,X){const k=fe.isWebGL2;K===null&&(K=new Vn(1024,1024,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?Di:Pi,minFilter:qr,samples:k&&s===!0?4:0}));const Z=h.getRenderTarget();h.setRenderTarget(K),h.clear();const ve=h.toneMapping;h.toneMapping=mn,vn(A,W,X),h.toneMapping=ve,Me.updateMultisampleRenderTarget(K),Me.updateRenderTargetMipmap(K),h.setRenderTarget(Z)}function vn(A,W,X){const k=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,ve=A.length;Z<ve;Z++){const ye=A[Z],we=ye.object,Ee=ye.geometry,ze=k===null?ye.material:k,Pe=ye.group;we.layers.test(X.layers)&&Ye(we,W,X,Ee,ze,Pe)}}function Ye(A,W,X,k,Z,ve){A.onBeforeRender(h,W,X,k,Z,ve),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(h,W,X,k,A,ve),Z.transparent===!0&&Z.side===Kn&&Z.forceSinglePass===!1?(Z.side=jt,Z.needsUpdate=!0,h.renderBufferDirect(X,W,k,Z,A,ve),Z.side=oi,Z.needsUpdate=!0,h.renderBufferDirect(X,W,k,Z,A,ve),Z.side=Kn):h.renderBufferDirect(X,W,k,Z,A,ve),A.onAfterRender(h,W,X,k,Z,ve)}function Kt(A,W,X){W.isScene!==!0&&(W=J);const k=be.get(A),Z=f.state.lights,ve=f.state.shadowsArray,ye=Z.state.version,we=We.getParameters(A,Z.state,ve,W,X),Ee=We.getProgramCacheKey(we);let ze=k.programs;k.environment=A.isMeshStandardMaterial?W.environment:null,k.fog=W.fog,k.envMap=(A.isMeshStandardMaterial?rt:Oe).get(A.envMap||k.environment),ze===void 0&&(A.addEventListener("dispose",Ae),ze=new Map,k.programs=ze);let Pe=ze.get(Ee);if(Pe!==void 0){if(k.currentProgram===Pe&&k.lightsStateVersion===ye)return xn(A,we),Pe}else we.uniforms=We.getUniforms(A),A.onBuild(X,we,h),A.onBeforeCompile(we,h),Pe=We.acquireProgram(we,Ee),ze.set(Ee,Pe),k.uniforms=we.uniforms;const De=k.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(De.clippingPlanes=P.uniform),xn(A,we),k.needsLights=Yd(A),k.lightsStateVersion=ye,k.needsLights&&(De.ambientLightColor.value=Z.state.ambient,De.lightProbe.value=Z.state.probe,De.directionalLights.value=Z.state.directional,De.directionalLightShadows.value=Z.state.directionalShadow,De.spotLights.value=Z.state.spot,De.spotLightShadows.value=Z.state.spotShadow,De.rectAreaLights.value=Z.state.rectArea,De.ltc_1.value=Z.state.rectAreaLTC1,De.ltc_2.value=Z.state.rectAreaLTC2,De.pointLights.value=Z.state.point,De.pointLightShadows.value=Z.state.pointShadow,De.hemisphereLights.value=Z.state.hemi,De.directionalShadowMap.value=Z.state.directionalShadowMap,De.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,De.spotShadowMap.value=Z.state.spotShadowMap,De.spotLightMatrix.value=Z.state.spotLightMatrix,De.spotLightMap.value=Z.state.spotLightMap,De.pointShadowMap.value=Z.state.pointShadowMap,De.pointShadowMatrix.value=Z.state.pointShadowMatrix);const Ke=Pe.getUniforms(),Ut=Ns.seqWithValue(Ke.seq,De);return k.currentProgram=Pe,k.uniformsList=Ut,Pe}function xn(A,W){const X=be.get(A);X.outputEncoding=W.outputEncoding,X.instancing=W.instancing,X.skinning=W.skinning,X.morphTargets=W.morphTargets,X.morphNormals=W.morphNormals,X.morphColors=W.morphColors,X.morphTargetsCount=W.morphTargetsCount,X.numClippingPlanes=W.numClippingPlanes,X.numIntersection=W.numClipIntersection,X.vertexAlphas=W.vertexAlphas,X.vertexTangents=W.vertexTangents,X.toneMapping=W.toneMapping}function jd(A,W,X,k,Z){W.isScene!==!0&&(W=J),Me.resetTextureUnits();const ve=W.fog,ye=k.isMeshStandardMaterial?W.environment:null,we=_===null?h.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Gn,Ee=(k.isMeshStandardMaterial?rt:Oe).get(k.envMap||ye),ze=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Pe=!!k.normalMap&&!!X.attributes.tangent,De=!!X.morphAttributes.position,Ke=!!X.morphAttributes.normal,Ut=!!X.morphAttributes.color,Dn=k.toneMapped?h.toneMapping:mn,fi=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Je=fi!==void 0?fi.length:0,Re=be.get(k),ua=f.state.lights;if(V===!0&&(Y===!0||A!==b)){const kt=A===b&&k.id===S;P.setState(k,A,kt)}let lt=!1;k.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==ua.state.version||Re.outputEncoding!==we||Z.isInstancedMesh&&Re.instancing===!1||!Z.isInstancedMesh&&Re.instancing===!0||Z.isSkinnedMesh&&Re.skinning===!1||!Z.isSkinnedMesh&&Re.skinning===!0||Re.envMap!==Ee||k.fog===!0&&Re.fog!==ve||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==P.numPlanes||Re.numIntersection!==P.numIntersection)||Re.vertexAlphas!==ze||Re.vertexTangents!==Pe||Re.morphTargets!==De||Re.morphNormals!==Ke||Re.morphColors!==Ut||Re.toneMapping!==Dn||fe.isWebGL2===!0&&Re.morphTargetsCount!==Je)&&(lt=!0):(lt=!0,Re.__version=k.version);let hi=Re.currentProgram;lt===!0&&(hi=Kt(k,W,Z));let ol=!1,Tr=!1,da=!1;const St=hi.getUniforms(),pi=Re.uniforms;if(de.useProgram(hi.program)&&(ol=!0,Tr=!0,da=!0),k.id!==S&&(S=k.id,Tr=!0),ol||b!==A){if(St.setValue(B,"projectionMatrix",A.projectionMatrix),fe.logarithmicDepthBuffer&&St.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),b!==A&&(b=A,Tr=!0,da=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const kt=St.map.cameraPosition;kt!==void 0&&kt.setValue(B,H.setFromMatrixPosition(A.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&St.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||Z.isSkinnedMesh)&&St.setValue(B,"viewMatrix",A.matrixWorldInverse)}if(Z.isSkinnedMesh){St.setOptional(B,Z,"bindMatrix"),St.setOptional(B,Z,"bindMatrixInverse");const kt=Z.skeleton;kt&&(fe.floatVertexTextures?(kt.boneTexture===null&&kt.computeBoneTexture(),St.setValue(B,"boneTexture",kt.boneTexture,Me),St.setValue(B,"boneTextureSize",kt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fa=X.morphAttributes;if((fa.position!==void 0||fa.normal!==void 0||fa.color!==void 0&&fe.isWebGL2===!0)&&te.update(Z,X,hi),(Tr||Re.receiveShadow!==Z.receiveShadow)&&(Re.receiveShadow=Z.receiveShadow,St.setValue(B,"receiveShadow",Z.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(pi.envMap.value=Ee,pi.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),Tr&&(St.setValue(B,"toneMappingExposure",h.toneMappingExposure),Re.needsLights&&$d(pi,da),ve&&k.fog===!0&&ke.refreshFogUniforms(pi,ve),ke.refreshMaterialUniforms(pi,k,D,R,K),Ns.upload(B,Re.uniformsList,pi,Me)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ns.upload(B,Re.uniformsList,pi,Me),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&St.setValue(B,"center",Z.center),St.setValue(B,"modelViewMatrix",Z.modelViewMatrix),St.setValue(B,"normalMatrix",Z.normalMatrix),St.setValue(B,"modelMatrix",Z.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const kt=k.uniformsGroups;for(let ha=0,Zd=kt.length;ha<Zd;ha++)if(fe.isWebGL2){const ll=kt[ha];U.update(ll,hi),U.bind(ll,hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hi}function $d(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Yd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(A,W,X){be.get(A.texture).__webglTexture=W,be.get(A.depthTexture).__webglTexture=X;const k=be.get(A);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=X===void 0,k.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,W){const X=be.get(A);X.__webglFramebuffer=W,X.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,X=0){_=A,g=W,x=X;let k=!0,Z=null,ve=!1,ye=!1;if(A){const Ee=be.get(A);Ee.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),k=!1):Ee.__webglFramebuffer===void 0?Me.setupRenderTarget(A):Ee.__hasExternalTextures&&Me.rebindTextures(A,be.get(A.texture).__webglTexture,be.get(A.depthTexture).__webglTexture);const ze=A.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ye=!0);const Pe=be.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Z=Pe[W],ve=!0):fe.isWebGL2&&A.samples>0&&Me.useMultisampledRTT(A)===!1?Z=be.get(A).__webglMultisampledFramebuffer:Z=Pe,w.copy(A.viewport),C.copy(A.scissor),y=A.scissorTest}else w.copy(L).multiplyScalar(D).floor(),C.copy(O).multiplyScalar(D).floor(),y=G;if(de.bindFramebuffer(36160,Z)&&fe.drawBuffers&&k&&de.drawBuffers(A,Z),de.viewport(w),de.scissor(C),de.setScissorTest(y),ve){const Ee=be.get(A.texture);B.framebufferTexture2D(36160,36064,34069+W,Ee.__webglTexture,X)}else if(ye){const Ee=be.get(A.texture),ze=W||0;B.framebufferTextureLayer(36160,36064,Ee.__webglTexture,X||0,ze)}S=-1},this.readRenderTargetPixels=function(A,W,X,k,Z,ve,ye){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=be.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){de.bindFramebuffer(36160,we);try{const Ee=A.texture,ze=Ee.format,Pe=Ee.type;if(ze!==pn&&_e.convert(ze)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Pe===Di&&(ue.has("EXT_color_buffer_half_float")||fe.isWebGL2&&ue.has("EXT_color_buffer_float"));if(Pe!==Pi&&_e.convert(Pe)!==B.getParameter(35738)&&!(Pe===wi&&(fe.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-k&&X>=0&&X<=A.height-Z&&B.readPixels(W,X,k,Z,_e.convert(ze),_e.convert(Pe),ve)}finally{const Ee=_!==null?be.get(_).__webglFramebuffer:null;de.bindFramebuffer(36160,Ee)}}},this.copyFramebufferToTexture=function(A,W,X=0){const k=Math.pow(2,-X),Z=Math.floor(W.image.width*k),ve=Math.floor(W.image.height*k);Me.setTexture2D(W,0),B.copyTexSubImage2D(3553,X,0,0,A.x,A.y,Z,ve),de.unbindTexture()},this.copyTextureToTexture=function(A,W,X,k=0){const Z=W.image.width,ve=W.image.height,ye=_e.convert(X.format),we=_e.convert(X.type);Me.setTexture2D(X,0),B.pixelStorei(37440,X.flipY),B.pixelStorei(37441,X.premultiplyAlpha),B.pixelStorei(3317,X.unpackAlignment),W.isDataTexture?B.texSubImage2D(3553,k,A.x,A.y,Z,ve,ye,we,W.image.data):W.isCompressedTexture?B.compressedTexSubImage2D(3553,k,A.x,A.y,W.mipmaps[0].width,W.mipmaps[0].height,ye,W.mipmaps[0].data):B.texSubImage2D(3553,k,A.x,A.y,ye,we,W.image),k===0&&X.generateMipmaps&&B.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(A,W,X,k,Z=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=A.max.x-A.min.x+1,ye=A.max.y-A.min.y+1,we=A.max.z-A.min.z+1,Ee=_e.convert(k.format),ze=_e.convert(k.type);let Pe;if(k.isData3DTexture)Me.setTexture3D(k,0),Pe=32879;else if(k.isDataArrayTexture)Me.setTexture2DArray(k,0),Pe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,k.flipY),B.pixelStorei(37441,k.premultiplyAlpha),B.pixelStorei(3317,k.unpackAlignment);const De=B.getParameter(3314),Ke=B.getParameter(32878),Ut=B.getParameter(3316),Dn=B.getParameter(3315),fi=B.getParameter(32877),Je=X.isCompressedTexture?X.mipmaps[0]:X.image;B.pixelStorei(3314,Je.width),B.pixelStorei(32878,Je.height),B.pixelStorei(3316,A.min.x),B.pixelStorei(3315,A.min.y),B.pixelStorei(32877,A.min.z),X.isDataTexture||X.isData3DTexture?B.texSubImage3D(Pe,Z,W.x,W.y,W.z,ve,ye,we,Ee,ze,Je.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Pe,Z,W.x,W.y,W.z,ve,ye,we,Ee,Je.data)):B.texSubImage3D(Pe,Z,W.x,W.y,W.z,ve,ye,we,Ee,ze,Je),B.pixelStorei(3314,De),B.pixelStorei(32878,Ke),B.pixelStorei(3316,Ut),B.pixelStorei(3315,Dn),B.pixelStorei(32877,fi),Z===0&&k.generateMipmaps&&B.generateMipmap(Pe),de.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Me.setTextureCube(A,0):A.isData3DTexture?Me.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Me.setTexture2DArray(A,0):Me.setTexture2D(A,0),de.unbindTexture()},this.resetState=function(){g=0,x=0,_=null,de.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(sa.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(r){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!r}}});class V0 extends sa{}V0.prototype.isWebGL1Renderer=!0;class Ru extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Uo extends us{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Mc=new N,wc=new N,Tc=new Xe,Xa=new vu,Is=new ea;class W0 extends Lt{constructor(e=new cn,t=new Uo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Mc.fromBufferAttribute(t,i-1),wc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Mc.distanceTo(wc);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(i),Is.radius+=s,e.ray.intersectsSphere(Is)===!1)return;Tc.copy(i).invert(),Xa.copy(e.ray).applyMatrix4(Tc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new N,u=new N,d=new N,f=new N,m=this.isLineSegments?2:1,v=n.index,p=n.attributes.position;if(v!==null){const g=Math.max(0,o.start),x=Math.min(v.count,o.start+o.count);for(let _=g,S=x-1;_<S;_+=m){const b=v.getX(_),w=v.getX(_+1);if(c.fromBufferAttribute(p,b),u.fromBufferAttribute(p,w),Xa.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(f);y<e.near||y>e.far||t.push({distance:y,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let _=g,S=x-1;_<S;_+=m){if(c.fromBufferAttribute(p,_),u.fromBufferAttribute(p,_+1),Xa.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Ec=new N,Cc=new N;class H0 extends W0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ec.fromBufferAttribute(t,i),Cc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ec.distanceTo(Cc);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class q0 extends At{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:Pt,this.magFilter=s!==void 0?s:Pt,this.generateMipmaps=!1;const u=this;function d(){u.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class ko extends cn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new N,u=new Te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const m=n+d/t*i;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Go extends cn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new N,f=new N,m=[],v=[],h=[],p=[];for(let g=0;g<=n;g++){const x=[],_=g/n;let S=0;g==0&&o==0?S=.5/t:g==n&&l==Math.PI&&(S=-.5/t);for(let b=0;b<=t;b++){const w=b/t;d.x=-e*Math.cos(i+w*s)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(i+w*s)*Math.sin(o+_*a),v.push(d.x,d.y,d.z),f.copy(d).normalize(),h.push(f.x,f.y,f.z),p.push(w+S,1-_),x.push(c++)}u.push(x)}for(let g=0;g<n;g++)for(let x=0;x<t;x++){const _=u[g][x+1],S=u[g][x],b=u[g+1][x],w=u[g+1][x+1];(g!==0||o>0)&&m.push(_,S,w),(g!==n-1||l<Math.PI)&&m.push(S,b,w)}this.setIndex(m),this.setAttribute("position",new ft(v,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Ac={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class X0{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],v=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const j0=new X0;class Iu{constructor(e){this.manager=e!==void 0?e:j0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class $0 extends Iu{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ac.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=jr("img");function l(){u(),Ac.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Bs extends Iu{constructor(e){super(e)}load(e,t,n,i){const s=new At,o=new $0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Y0 extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Z0 extends Y0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class K0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Lc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Lc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Lc(){return(typeof performance>"u"?Date:performance).now()}class Pc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class J0 extends H0{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new cn;i.setAttribute("position",new ft(t,3)),i.setAttribute("color",new ft(n,3));const s=new Uo({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Ie,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Q0 extends ko{constructor(e,t,n,i){console.warn("THREE.CircleBufferGeometry has been renamed to THREE.CircleGeometry."),super(e,t,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zo);const Dc={type:"change"},ja={type:"start"},Rc={type:"end"};class Ou extends Oi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.DOLLY,RIGHT:zi.PAN},this.touches={ONE:Ni.ROTATE,TWO:Ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",yt),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",yt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Dc),n.update(),s=i.NONE},this.update=function(){const I=new N,U=new li().setFromUnitVectors(e.up,new N(0,1,0)),oe=U.clone().invert(),re=new N,pe=new li,ge=2*Math.PI;return function(){const Ae=n.object.position;I.copy(Ae).sub(n.target),I.applyQuaternion(U),a.setFromVector3(I),n.autoRotate&&s===i.NONE&&M(C()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Fe=n.minAzimuthAngle,Ne=n.maxAzimuthAngle;return isFinite(Fe)&&isFinite(Ne)&&(Fe<-Math.PI?Fe+=ge:Fe>Math.PI&&(Fe-=ge),Ne<-Math.PI?Ne+=ge:Ne>Math.PI&&(Ne-=ge),Fe<=Ne?a.theta=Math.max(Fe,Math.min(Ne,a.theta)):a.theta=a.theta>(Fe+Ne)/2?Math.max(Fe,a.theta):Math.min(Ne,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),I.setFromSpherical(a),I.applyQuaternion(oe),Ae.copy(n.target).add(I),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,d||re.distanceToSquared(n.object.position)>o||8*(1-pe.dot(n.object.quaternion))>o?(n.dispatchEvent(Dc),re.copy(n.object.position),pe.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",j),n.domElement.removeEventListener("pointerdown",rt),n.domElement.removeEventListener("pointercancel",at),n.domElement.removeEventListener("wheel",Bt),n.domElement.removeEventListener("pointermove",xt),n.domElement.removeEventListener("pointerup",st),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",yt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Pc,l=new Pc;let c=1;const u=new N;let d=!1;const f=new Te,m=new Te,v=new Te,h=new Te,p=new Te,g=new Te,x=new Te,_=new Te,S=new Te,b=[],w={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function M(I){l.theta-=I}function R(I){l.phi-=I}const D=function(){const I=new N;return function(oe,re){I.setFromMatrixColumn(re,0),I.multiplyScalar(-oe),u.add(I)}}(),z=function(){const I=new N;return function(oe,re){n.screenSpacePanning===!0?I.setFromMatrixColumn(re,1):(I.setFromMatrixColumn(re,0),I.crossVectors(n.object.up,I)),I.multiplyScalar(oe),u.add(I)}}(),E=function(){const I=new N;return function(oe,re){const pe=n.domElement;if(n.object.isPerspectiveCamera){const ge=n.object.position;I.copy(ge).sub(n.target);let me=I.length();me*=Math.tan(n.object.fov/2*Math.PI/180),D(2*oe*me/pe.clientHeight,n.object.matrix),z(2*re*me/pe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(oe*(n.object.right-n.object.left)/n.object.zoom/pe.clientWidth,n.object.matrix),z(re*(n.object.top-n.object.bottom)/n.object.zoom/pe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function L(I){n.object.isPerspectiveCamera?c/=I:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*I)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(I){n.object.isPerspectiveCamera?c*=I:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/I)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(I){f.set(I.clientX,I.clientY)}function q(I){x.set(I.clientX,I.clientY)}function V(I){h.set(I.clientX,I.clientY)}function Y(I){m.set(I.clientX,I.clientY),v.subVectors(m,f).multiplyScalar(n.rotateSpeed);const U=n.domElement;M(2*Math.PI*v.x/U.clientHeight),R(2*Math.PI*v.y/U.clientHeight),f.copy(m),n.update()}function K(I){_.set(I.clientX,I.clientY),S.subVectors(_,x),S.y>0?L(y()):S.y<0&&O(y()),x.copy(_),n.update()}function se(I){p.set(I.clientX,I.clientY),g.subVectors(p,h).multiplyScalar(n.panSpeed),E(g.x,g.y),h.copy(p),n.update()}function H(I){I.deltaY<0?O(y()):I.deltaY>0&&L(y()),n.update()}function J(I){let U=!1;switch(I.code){case n.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):E(0,n.keyPanSpeed),U=!0;break;case n.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):E(0,-n.keyPanSpeed),U=!0;break;case n.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?M(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):E(n.keyPanSpeed,0),U=!0;break;case n.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?M(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):E(-n.keyPanSpeed,0),U=!0;break}U&&(I.preventDefault(),n.update())}function ee(){if(b.length===1)f.set(b[0].pageX,b[0].pageY);else{const I=.5*(b[0].pageX+b[1].pageX),U=.5*(b[0].pageY+b[1].pageY);f.set(I,U)}}function B(){if(b.length===1)h.set(b[0].pageX,b[0].pageY);else{const I=.5*(b[0].pageX+b[1].pageX),U=.5*(b[0].pageY+b[1].pageY);h.set(I,U)}}function ce(){const I=b[0].pageX-b[1].pageX,U=b[0].pageY-b[1].pageY,oe=Math.sqrt(I*I+U*U);x.set(0,oe)}function ue(){n.enableZoom&&ce(),n.enablePan&&B()}function fe(){n.enableZoom&&ce(),n.enableRotate&&ee()}function de(I){if(b.length==1)m.set(I.pageX,I.pageY);else{const oe=_e(I),re=.5*(I.pageX+oe.x),pe=.5*(I.pageY+oe.y);m.set(re,pe)}v.subVectors(m,f).multiplyScalar(n.rotateSpeed);const U=n.domElement;M(2*Math.PI*v.x/U.clientHeight),R(2*Math.PI*v.y/U.clientHeight),f.copy(m)}function xe(I){if(b.length===1)p.set(I.pageX,I.pageY);else{const U=_e(I),oe=.5*(I.pageX+U.x),re=.5*(I.pageY+U.y);p.set(oe,re)}g.subVectors(p,h).multiplyScalar(n.panSpeed),E(g.x,g.y),h.copy(p)}function be(I){const U=_e(I),oe=I.pageX-U.x,re=I.pageY-U.y,pe=Math.sqrt(oe*oe+re*re);_.set(0,pe),S.set(0,Math.pow(_.y/x.y,n.zoomSpeed)),L(S.y),x.copy(_)}function Me(I){n.enableZoom&&be(I),n.enablePan&&xe(I)}function Oe(I){n.enableZoom&&be(I),n.enableRotate&&de(I)}function rt(I){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(I.pointerId),n.domElement.addEventListener("pointermove",xt),n.domElement.addEventListener("pointerup",st)),te(I),I.pointerType==="touch"?P(I):We(I))}function xt(I){n.enabled!==!1&&(I.pointerType==="touch"?T(I):ke(I))}function st(I){ne(I),b.length===0&&(n.domElement.releasePointerCapture(I.pointerId),n.domElement.removeEventListener("pointermove",xt),n.domElement.removeEventListener("pointerup",st)),n.dispatchEvent(Rc),s=i.NONE}function at(I){ne(I)}function We(I){let U;switch(I.button){case 0:U=n.mouseButtons.LEFT;break;case 1:U=n.mouseButtons.MIDDLE;break;case 2:U=n.mouseButtons.RIGHT;break;default:U=-1}switch(U){case zi.DOLLY:if(n.enableZoom===!1)return;q(I),s=i.DOLLY;break;case zi.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enablePan===!1)return;V(I),s=i.PAN}else{if(n.enableRotate===!1)return;G(I),s=i.ROTATE}break;case zi.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enableRotate===!1)return;G(I),s=i.ROTATE}else{if(n.enablePan===!1)return;V(I),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ja)}function ke(I){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Y(I);break;case i.DOLLY:if(n.enableZoom===!1)return;K(I);break;case i.PAN:if(n.enablePan===!1)return;se(I);break}}function Bt(I){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(I.preventDefault(),n.dispatchEvent(ja),H(I),n.dispatchEvent(Rc))}function yt(I){n.enabled===!1||n.enablePan===!1||J(I)}function P(I){switch(ae(I),b.length){case 1:switch(n.touches.ONE){case Ni.ROTATE:if(n.enableRotate===!1)return;ee(),s=i.TOUCH_ROTATE;break;case Ni.PAN:if(n.enablePan===!1)return;B(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Ni.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ue(),s=i.TOUCH_DOLLY_PAN;break;case Ni.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;fe(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ja)}function T(I){switch(ae(I),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;de(I),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;xe(I),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Me(I),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Oe(I),n.update();break;default:s=i.NONE}}function j(I){n.enabled!==!1&&I.preventDefault()}function te(I){b.push(I)}function ne(I){delete w[I.pointerId];for(let U=0;U<b.length;U++)if(b[U].pointerId==I.pointerId){b.splice(U,1);return}}function ae(I){let U=w[I.pointerId];U===void 0&&(U=new Te,w[I.pointerId]=U),U.set(I.pageX,I.pageY)}function _e(I){const U=I.pointerId===b[0].pointerId?b[1]:b[0];return w[U.pointerId]}n.domElement.addEventListener("contextmenu",j),n.domElement.addEventListener("pointerdown",rt),n.domElement.addEventListener("pointercancel",at),n.domElement.addEventListener("wheel",Bt,{passive:!1}),this.update()}}class $r extends It{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new Et;const n=this,i=t.color!==void 0?new Ie(t.color):new Ie(8355711),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||$r.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Sn,d=new N,f=new N,m=new N,v=new Xe,h=new N(0,0,-1),p=new je,g=new N,x=new N,_=new je,S=new Xe,b=this.camera,w=new Vn(s,o,{samples:c,type:Di}),C=new Ln({uniforms:ia.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});C.uniforms.tDiffuse.value=w.texture,C.uniforms.color.value=i,C.uniforms.textureMatrix.value=S,this.material=C,this.onBeforeRender=function(y,M,R){if(f.setFromMatrixPosition(n.matrixWorld),m.setFromMatrixPosition(R.matrixWorld),v.extractRotation(n.matrixWorld),d.set(0,0,1),d.applyMatrix4(v),g.subVectors(f,m),g.dot(d)>0)return;g.reflect(d).negate(),g.add(f),v.extractRotation(R.matrixWorld),h.set(0,0,-1),h.applyMatrix4(v),h.add(m),x.subVectors(f,h),x.reflect(d).negate(),x.add(f),b.position.copy(g),b.up.set(0,1,0),b.up.applyMatrix4(v),b.up.reflect(d),b.lookAt(x),b.far=R.far,b.updateMatrixWorld(),b.projectionMatrix.copy(R.projectionMatrix),S.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),S.multiply(b.projectionMatrix),S.multiply(b.matrixWorldInverse),S.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(d,f),u.applyMatrix4(b.matrixWorldInverse),p.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const D=b.projectionMatrix;_.x=(Math.sign(p.x)+D.elements[8])/D.elements[0],_.y=(Math.sign(p.y)+D.elements[9])/D.elements[5],_.z=-1,_.w=(1+D.elements[10])/D.elements[14],p.multiplyScalar(2/p.dot(_)),D.elements[2]=p.x,D.elements[6]=p.y,D.elements[10]=p.z+1-a,D.elements[14]=p.w,n.visible=!1;const z=y.getRenderTarget(),E=y.xr.enabled,L=y.shadowMap.autoUpdate,O=y.outputEncoding,G=y.toneMapping;y.xr.enabled=!1,y.shadowMap.autoUpdate=!1,y.outputEncoding=Gn,y.toneMapping=mn,y.setRenderTarget(w),y.state.buffers.depth.setMask(!0),y.autoClear===!1&&y.clear(),y.render(M,b),y.xr.enabled=E,y.shadowMap.autoUpdate=L,y.outputEncoding=O,y.toneMapping=G,y.setRenderTarget(z);const q=R.viewport;q!==void 0&&y.state.viewport(q),n.visible=!0},this.getRenderTarget=function(){return w},this.dispose=function(){w.dispose(),n.material.dispose()}}}$r.ReflectorShader={uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <encodings_fragment>

		}`};class Yr extends It{constructor(e,t={}){super(e),this.isRefractor=!0,this.type="Refractor",this.camera=new Et;const n=this,i=t.color!==void 0?new Ie(t.color):new Ie(8355711),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||Yr.RefractorShader,c=t.multisample!==void 0?t.multisample:4,u=this.camera;u.matrixAutoUpdate=!1,u.userData.refractor=!0;const d=new Sn,f=new Xe,m=new Vn(s,o,{samples:c,type:Di});this.material=new Ln({uniforms:ia.clone(l.uniforms),vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,transparent:!0}),this.material.uniforms.color.value=i,this.material.uniforms.tDiffuse.value=m.texture,this.material.uniforms.textureMatrix.value=f;const v=function(){const _=new N,S=new N,b=new Xe,w=new N,C=new N;return function(M){return _.setFromMatrixPosition(n.matrixWorld),S.setFromMatrixPosition(M.matrixWorld),w.subVectors(_,S),b.extractRotation(n.matrixWorld),C.set(0,0,1),C.applyMatrix4(b),w.dot(C)<0}}(),h=function(){const _=new N,S=new N,b=new li,w=new N;return function(){n.matrixWorld.decompose(S,b,w),_.set(0,0,1).applyQuaternion(b).normalize(),_.negate(),d.setFromNormalAndCoplanarPoint(_,S)}}(),p=function(){const _=new Sn,S=new je,b=new je;return function(C){u.matrixWorld.copy(C.matrixWorld),u.matrixWorldInverse.copy(u.matrixWorld).invert(),u.projectionMatrix.copy(C.projectionMatrix),u.far=C.far,_.copy(d),_.applyMatrix4(u.matrixWorldInverse),S.set(_.normal.x,_.normal.y,_.normal.z,_.constant);const y=u.projectionMatrix;b.x=(Math.sign(S.x)+y.elements[8])/y.elements[0],b.y=(Math.sign(S.y)+y.elements[9])/y.elements[5],b.z=-1,b.w=(1+y.elements[10])/y.elements[14],S.multiplyScalar(2/S.dot(b)),y.elements[2]=S.x,y.elements[6]=S.y,y.elements[10]=S.z+1-a,y.elements[14]=S.w}}();function g(_){f.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),f.multiply(_.projectionMatrix),f.multiply(_.matrixWorldInverse),f.multiply(n.matrixWorld)}function x(_,S,b){n.visible=!1;const w=_.getRenderTarget(),C=_.xr.enabled,y=_.shadowMap.autoUpdate,M=_.outputEncoding,R=_.toneMapping;_.xr.enabled=!1,_.shadowMap.autoUpdate=!1,_.outputEncoding=Gn,_.toneMapping=mn,_.setRenderTarget(m),_.autoClear===!1&&_.clear(),_.render(S,u),_.xr.enabled=C,_.shadowMap.autoUpdate=y,_.outputEncoding=M,_.toneMapping=R,_.setRenderTarget(w);const D=b.viewport;D!==void 0&&_.state.viewport(D),n.visible=!0}this.onBeforeRender=function(_,S,b){b.userData.refractor!==!0&&v(b)&&(h(),g(b),p(b),x(_,S,b))},this.getRenderTarget=function(){return m},this.dispose=function(){m.dispose(),n.material.dispose()}}}Yr.RefractorShader={uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`

		uniform mat4 textureMatrix;

		varying vec4 vUv;

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform vec3 color;
		uniform sampler2D tDiffuse;

		varying vec4 vUv;

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <encodings_fragment>

		}`};class aa extends It{constructor(e,t={}){super(e),this.isWater=!0,this.type="Water";const n=this,i=t.color!==void 0?new Ie(t.color):new Ie(16777215),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.flowDirection||new Te(1,0),c=t.flowSpeed||.03,u=t.reflectivity||.02,d=t.scale||1,f=t.shader||aa.WaterShader,m=new Bs,v=t.flowMap||void 0,h=t.normalMap0||m.load("textures/water/Water_1_M_Normal.jpg"),p=t.normalMap1||m.load("textures/water/Water_2_M_Normal.jpg"),g=.15,x=g*.5,_=new Xe,S=new K0;if($r===void 0){console.error("THREE.Water: Required component Reflector not found.");return}if(Yr===void 0){console.error("THREE.Water: Required component Refractor not found.");return}const b=new $r(e,{textureWidth:s,textureHeight:o,clipBias:a}),w=new Yr(e,{textureWidth:s,textureHeight:o,clipBias:a});b.matrixAutoUpdate=!1,w.matrixAutoUpdate=!1,this.material=new Ln({uniforms:ia.merge([ie.fog,f.uniforms]),vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,transparent:!0,fog:!0}),v!==void 0?(this.material.defines.USE_FLOWMAP="",this.material.uniforms.tFlowMap={type:"t",value:v}):this.material.uniforms.flowDirection={type:"v2",value:l},h.wrapS=h.wrapT=Hr,p.wrapS=p.wrapT=Hr,this.material.uniforms.tReflectionMap.value=b.getRenderTarget().texture,this.material.uniforms.tRefractionMap.value=w.getRenderTarget().texture,this.material.uniforms.tNormalMap0.value=h,this.material.uniforms.tNormalMap1.value=p,this.material.uniforms.color.value=i,this.material.uniforms.reflectivity.value=u,this.material.uniforms.textureMatrix.value=_,this.material.uniforms.config.value.x=0,this.material.uniforms.config.value.y=x,this.material.uniforms.config.value.z=x,this.material.uniforms.config.value.w=d;function C(M){_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(M.projectionMatrix),_.multiply(M.matrixWorldInverse),_.multiply(n.matrixWorld)}function y(){const M=S.getDelta(),R=n.material.uniforms.config;R.value.x+=c*M,R.value.y=R.value.x+x,R.value.x>=g?(R.value.x=0,R.value.y=x):R.value.y>=g&&(R.value.y=R.value.y-g)}this.onBeforeRender=function(M,R,D){C(D),y(),n.visible=!1,b.matrixWorld.copy(n.matrixWorld),w.matrixWorld.copy(n.matrixWorld),b.onBeforeRender(M,R,D),w.onBeforeRender(M,R,D),n.visible=!0}}}aa.WaterShader={uniforms:{color:{type:"c",value:null},reflectivity:{type:"f",value:0},tReflectionMap:{type:"t",value:null},tRefractionMap:{type:"t",value:null},tNormalMap0:{type:"t",value:null},tNormalMap1:{type:"t",value:null},textureMatrix:{type:"m4",value:null},config:{type:"v4",value:new je}},vertexShader:`

		#include <common>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>

		uniform mat4 textureMatrix;

		varying vec4 vCoord;
		varying vec2 vUv;
		varying vec3 vToEye;

		void main() {

			vUv = uv;
			vCoord = textureMatrix * vec4( position, 1.0 );

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vToEye = cameraPosition - worldPosition.xyz;

			vec4 mvPosition =  viewMatrix * worldPosition; // used in fog_vertex
			gl_Position = projectionMatrix * mvPosition;

			#include <logdepthbuf_vertex>
			#include <fog_vertex>

		}`,fragmentShader:`

		#include <common>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>

		uniform sampler2D tReflectionMap;
		uniform sampler2D tRefractionMap;
		uniform sampler2D tNormalMap0;
		uniform sampler2D tNormalMap1;

		#ifdef USE_FLOWMAP
			uniform sampler2D tFlowMap;
		#else
			uniform vec2 flowDirection;
		#endif

		uniform vec3 color;
		uniform float reflectivity;
		uniform vec4 config;

		varying vec4 vCoord;
		varying vec2 vUv;
		varying vec3 vToEye;

		void main() {

			#include <logdepthbuf_fragment>

			float flowMapOffset0 = config.x;
			float flowMapOffset1 = config.y;
			float halfCycle = config.z;
			float scale = config.w;

			vec3 toEye = normalize( vToEye );

			// determine flow direction
			vec2 flow;
			#ifdef USE_FLOWMAP
				flow = texture2D( tFlowMap, vUv ).rg * 2.0 - 1.0;
			#else
				flow = flowDirection;
			#endif
			flow.x *= - 1.0;

			// sample normal maps (distort uvs with flowdata)
			vec4 normalColor0 = texture2D( tNormalMap0, ( vUv * scale ) + flow * flowMapOffset0 );
			vec4 normalColor1 = texture2D( tNormalMap1, ( vUv * scale ) + flow * flowMapOffset1 );

			// linear interpolate to get the final normal color
			float flowLerp = abs( halfCycle - flowMapOffset0 ) / halfCycle;
			vec4 normalColor = mix( normalColor0, normalColor1, flowLerp );

			// calculate normal vector
			vec3 normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );

			// calculate the fresnel term to blend reflection and refraction maps
			float theta = max( dot( toEye, normal ), 0.0 );
			float reflectance = reflectivity + ( 1.0 - reflectivity ) * pow( ( 1.0 - theta ), 5.0 );

			// calculate final uv coords
			vec3 coord = vCoord.xyz / vCoord.w;
			vec2 uv = coord.xy + coord.z * normal.xz * 0.05;

			vec4 reflectColor = texture2D( tReflectionMap, vec2( 1.0 - uv.x, uv.y ) );
			vec4 refractColor = texture2D( tRefractionMap, uv );

			// multiply water color with the mix of both textures
			gl_FragColor = vec4( color, 1.0 ) * mix( refractColor, reflectColor, reflectance );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>

		}`};const ev=r=>(ss("data-v-2eab72ce"),r=r(),as(),r),tv={class:"main"},nv=ev(()=>Ce("div",{class:"threeshow"},null,-1)),iv=[nv],rv=br({__name:"home",setup(r){return os(()=>{const e=new Ru,t=new Et(75,window.innerWidth/window.innerHeight,.1,1e4);t.position.set(-50,50,130),t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),e.add(t);const n=new sa({antialias:!0});n.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setPixelRatio(window.devicePixelRatio)});function i(){n.render(e,t),requestAnimationFrame(i)}const s=new Ou(t,n.domElement);s.minDistance=20,s.maxDistance=500;let o=new Bs().load("/img/home/sky.jpg");const a=new Go(1e3,60,60),l=new na({map:o});a.scale(1,1,-1);const c=new It(a,l);e.add(c);const u=document.createElement("video");u.src="/img/home/sky.mp4",u.loop=!0,window.addEventListener("click",v=>{if(u.paused){u.play();let h=new q0(u);l.map=h,l.map.needsUpdate=!0}});const d=new Q0(800,64),f=new aa(d,{textureWidth:2048,textureHeight:2048,color:15658751,flowDirection:new Te(10,1),scale:4,normalMap0:new Bs().load("/img/home/Water_1_M_Normal.jpg"),normalMap1:new Bs().load("/img/home/Water_2_M_Normal.jpg")});f.position.y=3,f.rotation.x=-Math.PI/2,e.add(f),document.querySelector(".threeshow").appendChild(n.domElement),i()}),(e,t)=>(nn(),rn("div",tv,iv))}});const sv=Sr(rv,[["__scopeId","data-v-2eab72ce"]]);function Bn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Fu(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var $t={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},pr={duration:.5,overwrite:!1,delay:0},Vo,_t,et,sn=1e8,Ue=1/sn,vo=Math.PI*2,av=vo/4,ov=0,zu=Math.sqrt,lv=Math.cos,cv=Math.sin,ut=function(e){return typeof e=="string"},$e=function(e){return typeof e=="function"},Wn=function(e){return typeof e=="number"},Wo=function(e){return typeof e>"u"},Pn=function(e){return typeof e=="object"},Ot=function(e){return e!==!1},Ho=function(){return typeof window<"u"},Os=function(e){return $e(e)||ut(e)},Nu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},vt=Array.isArray,xo=/(?:-?\.?\d|\.)+/gi,Bu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,tr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,$a=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Uu=/[+-]=-?[.\d]+/,ku=/[^,'"\[\]\s]+/gi,uv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,He,en,yo,qo,Yt={},qs={},Gu,Vu=function(e){return(qs=Ri(e,Yt))&&Nt},Xo=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Xs=function(e,t){return!t&&console.warn(e)},Wu=function(e,t){return e&&(Yt[e]=t)&&qs&&(qs[e]=t)||Yt},Zr=function(){return 0},dv={suppressEvents:!0,isStart:!0,kill:!1},Us={suppressEvents:!0,kill:!1},fv={suppressEvents:!0},jo={},si=[],bo={},Hu,Ht={},Ya={},Ic=30,ks=[],$o="",Yo=function(e){var t=e[0],n,i;if(Pn(t)||$e(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ks.length;i--&&!ks[i].targetTest(t););n=ks[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new pd(e[i],n)))||e.splice(i,1);return e},Ci=function(e){return e._gsap||Yo(an(e))[0]._gsap},qu=function(e,t,n){return(n=e[t])&&$e(n)?e[t]():Wo(n)&&e.getAttribute&&e.getAttribute(t)||n},Ft=function(e,t){return(e=e.split(",")).forEach(t)||e},Ze=function(e){return Math.round(e*1e5)/1e5||0},dt=function(e){return Math.round(e*1e7)/1e7||0},ar=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},hv=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},js=function(){var e=si.length,t=si.slice(0),n,i;for(bo={},si.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Xu=function(e,t,n,i){si.length&&!_t&&js(),e.render(t,n,i||_t&&t<0&&(e._initted||e._startAt)),si.length&&!_t&&js()},ju=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ku).length<2?t:ut(e)?e.trim():e},$u=function(e){return e},ln=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},pv=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ri=function(e,t){for(var n in t)e[n]=t[n];return e},Oc=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Pn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},$s=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},kr=function(e){var t=e.parent||He,n=e.keyframes?pv(vt(e.keyframes)):ln;if(Ot(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},mv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Yu=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},oa=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},ci=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Ai=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},gv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},So=function(e,t,n,i){return e._startAt&&(_t?e._startAt.revert(Us):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},_v=function r(e){return!e||e._ts&&r(e.parent)},Fc=function(e){return e._repeat?mr(e._tTime,e=e.duration()+e._rDelay)*e:0},mr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ys=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},la=function(e){return e._end=dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ue)||0))},ca=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=dt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),la(e),n._dirty||Ai(n,e)),e},Zu=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Ys(e.rawTime(),t),(!t._dur||ds(0,t.totalDuration(),n)-t._tTime>Ue)&&t.render(n,!0)),Ai(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ue}},wn=function(e,t,n,i){return t.parent&&ci(t),t._start=dt((Wn(n)?n:n||e!==He?Qt(e,n,t):e._time)+t._delay),t._end=dt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Yu(e,t,"_first","_last",e._sort?"_start":0),Mo(t)||(e._recent=t),i||Zu(e,t),e._ts<0&&ca(e,e._tTime),e},Ku=function(e,t){return(Yt.ScrollTrigger||Xo("scrollTrigger",t))&&Yt.ScrollTrigger.create(t,e)},Ju=function(e,t,n,i,s){if(Ko(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!_t&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Hu!==Xt.frame)return si.push(e),e._lazy=[s,i],1},vv=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Mo=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},xv=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&vv(e)&&!(!e._initted&&Mo(e))||(e._ts<0||e._dp._ts<0)&&!Mo(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=ds(0,e._tDur,t),u=mr(l,a),e._yoyo&&u&1&&(o=1-o),u!==mr(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||_t||i||e._zTime===Ue||!t&&e._zTime){if(!e._initted&&Ju(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?Ue:0),n||(n=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&So(e,t,n,!0),e._onUpdate&&!n&&on(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&on(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ci(e,1),!n&&!_t&&(on(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},yv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},gr=function(e,t,n,i){var s=e._repeat,o=dt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:dt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&ca(e,e._tTime=e._tDur*a),e.parent&&la(e),n||Ai(e.parent,e),e},zc=function(e){return e instanceof Rt?Ai(e):gr(e,e._dur)},bv={_start:0,endTime:Zr,totalDuration:Zr},Qt=function r(e,t,n){var i=e.labels,s=e._recent||bv,o=e.duration()>=sn?s.endTime(!1):e._dur,a,l,c;return ut(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(vt(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Gr=function(e,t,n){var i=Wn(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ot(l.vars.inherit)&&l.parent;o.immediateRender=Ot(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new tt(t[0],o,t[s+1])},di=function(e,t){return e||e===0?t(e):t},ds=function(e,t,n){return n<e?e:n>t?t:n},gt=function(e,t){return!ut(e)||!(t=uv.exec(e))?"":t[1]},Sv=function(e,t,n){return di(n,function(i){return ds(e,t,i)})},wo=[].slice,Qu=function(e,t){return e&&Pn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Pn(e[0]))&&!e.nodeType&&e!==en},Mv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return ut(i)&&!t||Qu(i,1)?(s=n).push.apply(s,an(i)):n.push(i)})||n},an=function(e,t,n){return et&&!t&&et.selector?et.selector(e):ut(e)&&!n&&(yo||!_r())?wo.call((t||qo).querySelectorAll(e),0):vt(e)?Mv(e,n):Qu(e)?wo.call(e,0):e?[e]:[]},To=function(e){return e=an(e)[0]||Xs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return an(t,n.querySelectorAll?n:n===e?Xs("Invalid scope")||qo.createElement("div"):e)}},ed=function(e){return e.sort(function(){return .5-Math.random()})},td=function(e){if($e(e))return e;var t=Pn(e)?e:{each:e},n=Li(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,d=i;return ut(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],d=i[1]),function(f,m,v){var h=(v||t).length,p=o[h],g,x,_,S,b,w,C,y,M;if(!p){if(M=t.grid==="auto"?0:(t.grid||[1,sn])[1],!M){for(C=-sn;C<(C=v[M++].getBoundingClientRect().left)&&M<h;);M--}for(p=o[h]=[],g=l?Math.min(M,h)*u-.5:i%M,x=M===sn?0:l?h*d/M-.5:i/M|0,C=0,y=sn,w=0;w<h;w++)_=w%M-g,S=x-(w/M|0),p[w]=b=c?Math.abs(c==="y"?S:_):zu(_*_+S*S),b>C&&(C=b),b<y&&(y=b);i==="random"&&ed(p),p.max=C-y,p.min=y,p.v=h=(parseFloat(t.amount)||parseFloat(t.each)*(M>h?h-1:c?c==="y"?h/M:M:Math.max(M,h/M))||0)*(i==="edges"?-1:1),p.b=h<0?s-h:s,p.u=gt(t.amount||t.each)||0,n=n&&h<0?dd(n):n}return h=(p[f]-p.min)/p.max||0,dt(p.b+(n?n(h):h)*p.v)+p.u}},Eo=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=dt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Wn(n)?0:gt(n))}},nd=function(e,t){var n=vt(e),i,s;return!n&&Pn(e)&&(i=n=e.radius||sn,e.values?(e=an(e.values),(s=!Wn(e[0]))&&(i*=i)):e=Eo(e.increment)),di(t,n?$e(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=sn,u=0,d=e.length,f,m;d--;)s?(f=e[d].x-a,m=e[d].y-l,f=f*f+m*m):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!i||c<=i?e[u]:o,s||u===o||Wn(o)?u:u+gt(o)}:Eo(e))},id=function(e,t,n,i){return di(vt(e)?!t:n===!0?!!(n=0):!i,function(){return vt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},wv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Tv=function(e,t){return function(n){return e(parseFloat(n))+(t||gt(n))}},Ev=function(e,t,n){return sd(e,t,0,1,n)},rd=function(e,t,n){return di(n,function(i){return e[~~t(i)]})},Cv=function r(e,t,n){var i=t-e;return vt(e)?rd(e,r(0,e.length),t):di(n,function(s){return(i+(s-e)%i)%i+e})},Av=function r(e,t,n){var i=t-e,s=i*2;return vt(e)?rd(e,r(0,e.length-1),t):di(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Kr=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?ku:xo),n+=e.substr(t,i-t)+id(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},sd=function(e,t,n,i,s){var o=t-e,a=i-n;return di(s,function(l){return n+((l-e)/o*a||0)})},Lv=function r(e,t,n,i){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var o=ut(e),a={},l,c,u,d,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(vt(e)&&!vt(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(v){v*=d;var h=Math.min(f,~~v);return u[h](v-h)},n=t}else i||(e=Ri(vt(e)?[]:{},e));if(!u){for(l in t)Zo.call(a,e,l,"get",t[l]);s=function(v){return el(v,a)||(o?e.p:e)}}}return di(n,s)},Nc=function(e,t,n){var i=e.labels,s=sn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},on=function(e,t,n){var i=e.vars,s=i[t],o=et,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&si.length&&js(),a&&(et=a),u=l?s.apply(c,l):s.call(c),et=o,u},Nr=function(e){return ci(e),e.scrollTrigger&&e.scrollTrigger.kill(!!_t),e.progress()<1&&on(e,"onInterrupt"),e},nr,ad=[],od=function(e){if(!Ho()){ad.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=$e(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Zr,render:el,add:Zo,kill:qv,modifier:Hv,rawVars:0},o={targetTest:0,get:0,getSetter:Qo,aliases:{},register:0};if(_r(),e!==i){if(Ht[t])return;ln(i,ln($s(e,s),o)),Ri(i.prototype,Ri(s,$s(e,o))),Ht[i.prop=t]=i,e.targetTest&&(ks.push(i),jo[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Wu(t,i),e.register&&e.register(Nt,i,zt)},Be=255,Br={aqua:[0,Be,Be],lime:[0,Be,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Be],navy:[0,0,128],white:[Be,Be,Be],olive:[128,128,0],yellow:[Be,Be,0],orange:[Be,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Be,0,0],pink:[Be,192,203],cyan:[0,Be,Be],transparent:[Be,Be,Be,0]},Za=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Be+.5|0},ld=function(e,t,n){var i=e?Wn(e)?[e>>16,e>>8&Be,e&Be]:0:Br.black,s,o,a,l,c,u,d,f,m,v;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Br[e])i=Br[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Be,i&Be,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Be,e&Be]}else if(e.substr(0,3)==="hsl"){if(i=v=e.match(xo),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Za(l+1/3,s,o),i[1]=Za(l,s,o),i[2]=Za(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Bu),n&&i.length<4&&(i[3]=1),i}else i=e.match(xo)||Br.transparent;i=i.map(Number)}return t&&!v&&(s=i[0]/Be,o=i[1]/Be,a=i[2]/Be,d=Math.max(s,o,a),f=Math.min(s,o,a),u=(d+f)/2,d===f?l=c=0:(m=d-f,c=u>.5?m/(2-d-f):m/(d+f),l=d===s?(o-a)/m+(o<a?6:0):d===o?(a-s)/m+2:(s-o)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},cd=function(e){var t=[],n=[],i=-1;return e.split(ai).forEach(function(s){var o=s.match(tr)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Bc=function(e,t,n){var i="",s=(e+i).match(ai),o=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!s)return e;if(s=s.map(function(f){return(f=ld(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=cd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(ai,"1").split(tr),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(ai),d=c.length-1;a<d;a++)i+=c[a]+s[a];return i+c[d]},ai=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Br)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Pv=/hsl[a]?\(/,ud=function(e){var t=e.join(" "),n;if(ai.lastIndex=0,ai.test(t))return n=Pv.test(t),e[1]=Bc(e[1],n),e[0]=Bc(e[0],n,cd(e[1])),!0},Jr,Xt=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,d,f,m,v=function h(p){var g=r()-i,x=p===!0,_,S,b,w;if(g>e&&(n+=g-t),i+=g,b=i-n,_=b-o,(_>0||x)&&(w=++d.frame,f=b-d.time*1e3,d.time=b=b/1e3,o+=_+(_>=s?4:s-_),S=1),x||(l=c(h)),S)for(m=0;m<a.length;m++)a[m](b,f,w,p)};return d={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Gu&&(!yo&&Ho()&&(en=yo=window,qo=en.document||{},Yt.gsap=Nt,(en.gsapVersions||(en.gsapVersions=[])).push(Nt.version),Vu(qs||en.GreenSockGlobals||!en.gsap&&en||{}),u=en.requestAnimationFrame,ad.forEach(od)),l&&d.sleep(),c=u||function(p){return setTimeout(p,o-d.time*1e3+1|0)},Jr=1,v(2))},sleep:function(){(u?en.cancelAnimationFrame:clearTimeout)(l),Jr=0,c=Zr},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){s=1e3/(p||240),o=d.time*1e3+s},add:function(p,g,x){var _=g?function(S,b,w,C){p(S,b,w,C),d.remove(_)}:p;return d.remove(p),a[x?"unshift":"push"](_),_r(),_},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&m>=g&&m--},_listeners:a},d}(),_r=function(){return!Jr&&Xt.wake()},Le={},Dv=/^[\d.\-M][\d.\-,\s]/,Rv=/["']/g,Iv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Rv,"").trim():+c,i=l.substr(a+1).trim();return t},Ov=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Fv=function(e){var t=(e+"").split("("),n=Le[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Iv(t[1])]:Ov(e).split(",").map(ju)):Le._CE&&Dv.test(e)?Le._CE("",e):n},dd=function(e){return function(t){return 1-e(1-t)}},fd=function r(e,t){for(var n=e._first,i;n;)n instanceof Rt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Li=function(e,t){return e&&($e(e)?e:Le[e]||Fv(e))||t},Fi=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Ft(e,function(a){Le[a]=Yt[a]=s,Le[o=a.toLowerCase()]=n;for(var l in s)Le[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Le[a+"."+l]=s[l]}),s},hd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ka=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/vo*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*cv((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:hd(a);return s=vo/s,l.config=function(c,u){return r(e,c,u)},l},Ja=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:hd(n);return i.config=function(s){return r(e,s)},i};Ft("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Fi(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Le.Linear.easeNone=Le.none=Le.Linear.easeIn;Fi("Elastic",Ka("in"),Ka("out"),Ka());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Fi("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Fi("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Fi("Circ",function(r){return-(zu(1-r*r)-1)});Fi("Sine",function(r){return r===1?1:-lv(r*av)+1});Fi("Back",Ja("in"),Ja("out"),Ja());Le.SteppedEase=Le.steps=Yt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Ue;return function(a){return((i*ds(0,o,a)|0)+s)*n}}};pr.ease=Le["quad.out"];Ft("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return $o+=r+","+r+"Params,"});var pd=function(e,t){this.id=ov++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:qu,this.set=t?t.getSetter:Qo},vr=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,gr(this,+t.duration,1,1),this.data=t.data,et&&(this._ctx=et,et.data.push(this)),Jr||Xt.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,gr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(_r(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ca(this,n),!s._dp||s.parent||Zu(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&wn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ue||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Xu(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Fc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Fc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?mr(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Ue?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Ys(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ue?0:this._rts,this.totalTime(ds(-Math.abs(this._delay),this._tDur,i),!0),la(this),gv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(_r(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ue&&(this._tTime-=Ue)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&wn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ot(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ys(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=fv);var i=_t;return _t=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),_t=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,zc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,zc(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Qt(this,n),Ot(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ot(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ue:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ue,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ue)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=$e(n)?n:$u,a=function(){var c=i.then;i.then=null,$e(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Nr(this)},r}();ln(vr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ue,_prom:0,_ps:!1,_rts:1});var Rt=function(r){Fu(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ot(n.sortChildren),He&&wn(n.parent||He,Bn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ku(Bn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Gr(0,arguments,this),this},t.from=function(i,s,o){return Gr(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Gr(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,kr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new tt(i,s,Qt(this,o),1),this},t.call=function(i,s,o){return wn(this,tt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new tt(i,o,Qt(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,kr(o).immediateRender=Ot(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,d){return a.startAt=o,kr(a).immediateRender=Ot(a.immediateRender),this.staggerTo(i,s,a,l,c,u,d)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:dt(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,m,v,h,p,g,x,_,S,b,w,C;if(this!==He&&u>l&&i>=0&&(u=l),u!==this._tTime||o||d){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,S=this._start,_=this._ts,g=!_,d&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(f=dt(u%p),u===l?(h=this._repeat,f=c):(h=~~(u/p),h&&h===u/p&&(f=c,h--),f>c&&(f=c)),b=mr(this._tTime,p),!a&&this._tTime&&b!==h&&this._tTime-b*p-this._dur<=0&&(b=h),w&&h&1&&(f=c-f,C=1),h!==b&&!this._lock){var y=w&&b&1,M=y===(w&&h&1);if(h<b&&(y=!y),a=y?0:c,this._lock=1,this.render(a||(C?0:dt(h*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&on(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=y?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;fd(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=yv(this,dt(a),dt(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!h&&(on(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(m=this._first;m;){if(v=m._next,(m._act||f>=m._start)&&m._ts&&x!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,s,o),f!==this._time||!this._ts&&!g){x=0,v&&(u+=this._zTime=-Ue);break}}m=v}else{m=this._last;for(var R=i<0?i:f;m;){if(v=m._prev,(m._act||R<=m._end)&&m._ts&&x!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(R-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(R-m._start)*m._ts,s,o||_t&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!g){x=0,v&&(u+=this._zTime=R?-Ue:Ue);break}}m=v}}if(x&&!s&&(this.pause(),x.render(f>=a?0:-Ue)._zTime=f>=a?1:-1,this._ts))return this._start=S,la(this),this.render(i,s,o);this._onUpdate&&!s&&on(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ci(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(on(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Wn(s)||(s=Qt(this,s,i)),!(i instanceof vr)){if(vt(i))return i.forEach(function(a){return o.add(a,s)}),this;if(ut(i))return this.addLabel(i,s);if($e(i))i=tt.delayedCall(0,i);else return this}return this!==i?wn(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-sn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof tt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return ut(i)?this.removeLabel(i):$e(i)?this.killTweensOf(i):(oa(this,i),i===this._recent&&(this._recent=this._last),Ai(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=dt(Xt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Qt(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=tt.delayedCall(0,s||Zr,o);return a.data="isPause",this._hasPause=1,wn(this,a,Qt(this,i))},t.removePause=function(i){var s=this._first;for(i=Qt(this,i);s;)s._start===i&&s.data==="isPause"&&ci(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Qn!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=an(i),l=this._first,c=Wn(s),u;l;)l instanceof tt?hv(l._targets,a)&&(c?(!Qn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Qt(o,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,m,v=tt.to(o,ln({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ue,onStart:function(){if(o.pause(),!m){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());v._dur!==p&&gr(v,p,0,1).render(v._time,!0,!0),m=1}u&&u.apply(v,d||[])}},s));return f?v.render(0):v},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,ln({startAt:{time:Qt(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Nc(this,Qt(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Nc(this,Qt(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ue)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Ai(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ai(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=sn,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,wn(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;gr(o,o===He&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(He._ts&&(Xu(He,Ys(i,He)),Hu=Xt.frame),Xt.frame>=Ic){Ic+=$t.autoSleep||120;var s=He._first;if((!s||!s._ts)&&$t.autoSleep&&Xt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Xt.sleep()}}},e}(vr);ln(Rt.prototype,{_lock:0,_hasPause:0,_forcing:0});var zv=function(e,t,n,i,s,o,a){var l=new zt(this._pt,e,t,0,1,yd,null,s),c=0,u=0,d,f,m,v,h,p,g,x;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Kr(i)),o&&(x=[n,i],o(x,e,t),n=x[0],i=x[1]),f=n.match($a)||[];d=$a.exec(i);)v=d[0],h=i.substring(c,d.index),m?m=(m+1)%5:h.substr(-5)==="rgba("&&(m=1),v!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:h||u===1?h:",",s:p,c:v.charAt(1)==="="?ar(p,v)-p:parseFloat(v)-p,m:m&&m<4?Math.round:0},c=$a.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Uu.test(i)||g)&&(l.e=0),this._pt=l,l},Zo=function(e,t,n,i,s,o,a,l,c,u){$e(i)&&(i=i(s||0,e,o));var d=e[t],f=n!=="get"?n:$e(d)?c?e[t.indexOf("set")||!$e(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,m=$e(d)?c?Gv:vd:Jo,v;if(ut(i)&&(~i.indexOf("random(")&&(i=Kr(i)),i.charAt(1)==="="&&(v=ar(f,i)+(gt(f)||0),(v||v===0)&&(i=v))),!u||f!==i||Co)return!isNaN(f*i)&&i!==""?(v=new zt(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?Wv:xd,0,m),c&&(v.fp=c),a&&v.modifier(a,this,e),this._pt=v):(!d&&!(t in e)&&Xo(t,i),zv.call(this,e,t,f,i,m,l||$t.stringFilter,c))},Nv=function(e,t,n,i,s){if($e(e)&&(e=Vr(e,s,t,n,i)),!Pn(e)||e.style&&e.nodeType||vt(e)||Nu(e))return ut(e)?Vr(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Vr(e[a],s,t,n,i);return o},md=function(e,t,n,i,s,o){var a,l,c,u;if(Ht[e]&&(a=new Ht[e]).init(s,a.rawVars?t[e]:Nv(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new zt(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==nr))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Qn,Co,Ko=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,d=i.callbackScope,f=i.runBackwards,m=i.yoyoEase,v=i.keyframes,h=i.autoRevert,p=e._dur,g=e._startAt,x=e._targets,_=e.parent,S=_&&_.data==="nested"?_.vars.targets:x,b=e._overwrite==="auto"&&!Vo,w=e.timeline,C,y,M,R,D,z,E,L,O,G,q,V,Y;if(w&&(!v||!s)&&(s="none"),e._ease=Li(s,pr.ease),e._yEase=m?dd(Li(m===!0?s:m,pr.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!w&&!!i.runBackwards,!w||v&&!i.stagger){if(L=x[0]?Ci(x[0]).harness:0,V=L&&i[L.prop],C=$s(i,jo),g&&(g._zTime<0&&g.progress(1),t<0&&f&&a&&!h?g.render(-1,!0):g.revert(f&&p?Us:dv),g._lazy=0),o){if(ci(e._startAt=tt.set(x,ln({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!g&&Ot(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:d,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_t||!a&&!h)&&e._startAt.revert(Us),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&p&&!g){if(t&&(a=!1),M=ln({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Ot(l),immediateRender:a,stagger:0,parent:_},C),V&&(M[L.prop]=V),ci(e._startAt=tt.set(x,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_t?e._startAt.revert(Us):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Ue,Ue);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Ot(l)||l&&!p,y=0;y<x.length;y++){if(D=x[y],E=D._gsap||Yo(x)[y]._gsap,e._ptLookup[y]=G={},bo[E.id]&&si.length&&js(),q=S===x?y:S.indexOf(D),L&&(O=new L).init(D,V||C,e,q,S)!==!1&&(e._pt=R=new zt(e._pt,D,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(K){G[K]=R}),O.priority&&(z=1)),!L||V)for(M in C)Ht[M]&&(O=md(M,C,e,q,D,S))?O.priority&&(z=1):G[M]=R=Zo.call(e,D,M,"get",C[M],q,S,0,i.stringFilter);e._op&&e._op[y]&&e.kill(D,e._op[y]),b&&e._pt&&(Qn=e,He.killTweensOf(D,G,e.globalTime(t)),Y=!e.parent,Qn=0),e._pt&&l&&(bo[E.id]=1)}z&&bd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,v&&t<=0&&w.render(sn,!0,!0)},Bv=function(e,t,n,i,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,d,f;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(c=d[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Co=1,e.vars[t]="+=0",Ko(e,a),Co=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=Ze(n)+gt(u.e)),u.b&&(u.b=c.s+gt(u.b))},Uv=function(e,t){var n=e[0]?Ci(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Ri({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},kv=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(vt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Vr=function(e,t,n,i,s){return $e(e)?e.call(t,n,i,s):ut(e)&&~e.indexOf("random(")?Kr(e):e},gd=$o+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",_d={};Ft(gd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return _d[r]=1});var tt=function(r){Fu(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:kr(i))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,m=l.overwrite,v=l.keyframes,h=l.defaults,p=l.scrollTrigger,g=l.yoyoEase,x=i.parent||He,_=(vt(n)||Nu(n)?Wn(n[0]):"length"in i)?[n]:an(n),S,b,w,C,y,M,R,D;if(a._targets=_.length?Yo(_):Xs("GSAP target "+n+" not found. https://greensock.com",!$t.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,v||f||Os(c)||Os(u)){if(i=a.vars,S=a.timeline=new Rt({data:"nested",defaults:h||{},targets:x&&x.data==="nested"?x.vars.targets:_}),S.kill(),S.parent=S._dp=Bn(a),S._start=0,f||Os(c)||Os(u)){if(C=_.length,R=f&&td(f),Pn(f))for(y in f)~gd.indexOf(y)&&(D||(D={}),D[y]=f[y]);for(b=0;b<C;b++)w=$s(i,_d),w.stagger=0,g&&(w.yoyoEase=g),D&&Ri(w,D),M=_[b],w.duration=+Vr(c,Bn(a),b,M,_),w.delay=(+Vr(u,Bn(a),b,M,_)||0)-a._delay,!f&&C===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),S.to(M,w,R?R(b,M,_):0),S._ease=Le.none;S.duration()?c=u=0:a.timeline=0}else if(v){kr(ln(S.vars.defaults,{ease:"none"})),S._ease=Li(v.ease||i.ease||"none");var z=0,E,L,O;if(vt(v))v.forEach(function(G){return S.to(_,G,">")}),S.duration();else{w={};for(y in v)y==="ease"||y==="easeEach"||kv(y,v[y],w,v.easeEach);for(y in w)for(E=w[y].sort(function(G,q){return G.t-q.t}),z=0,b=0;b<E.length;b++)L=E[b],O={ease:L.e,duration:(L.t-(b?E[b-1].t:0))/100*c},O[y]=L.v,S.to(_,O,z),z+=O.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return m===!0&&!Vo&&(Qn=Bn(a),He.killTweensOf(_),Qn=0),wn(x,Bn(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!v&&a._start===dt(x._time)&&Ot(d)&&_v(Bn(a))&&x.data!=="nested")&&(a._tTime=-Ue,a.render(Math.max(0,-u)||0)),p&&Ku(Bn(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-Ue&&!u?l:i<Ue?0:i,f,m,v,h,p,g,x,_,S;if(!c)xv(this,i,s,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=d,_=this.timeline,this._repeat){if(h=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(h*100+i,s,o);if(f=dt(d%h),d===l?(v=this._repeat,f=c):(v=~~(d/h),v&&v===d/h&&(f=c,v--),f>c&&(f=c)),g=this._yoyo&&v&1,g&&(S=this._yEase,f=c-f),p=mr(this._tTime,h),f===a&&!o&&this._initted)return this._tTime=d,this;v!==p&&(_&&this._yEase&&fd(_,g),this.vars.repeatRefresh&&!g&&!this._lock&&(this._lock=o=1,this.render(dt(h*v),!0).invalidate()._lock=0))}if(!this._initted){if(Ju(this,u?i:f,o,s,d))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(S||this._ease)(f/c),this._from&&(this.ratio=x=1-x),f&&!a&&!s&&!v&&(on(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(x,m.d),m=m._next;_&&_.render(i<0?i:!f&&g?-Ue:_._dur*_._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&So(this,i,s,o),on(this,"onUpdate")),this._repeat&&v!==p&&this.vars.onRepeat&&!s&&this.parent&&on(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&So(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&ci(this,1),!s&&!(u&&!a)&&(d||a||g)&&(on(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a){Jr||Xt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Ko(this,l),c=this._ease(l/this._dur),Bv(this,i,s,o,a,c,l)?this.resetTo(i,s,o,a):(ca(this,0),this.parent||Yu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Nr(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Qn&&Qn.vars.overwrite!==!0)._first||Nr(this),this.parent&&o!==this.timeline.totalDuration()&&gr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?an(i):a,c=this._ptLookup,u=this._pt,d,f,m,v,h,p,g;if((!s||s==="all")&&mv(a,l))return s==="all"&&(this._pt=0),Nr(this);for(d=this._op=this._op||[],s!=="all"&&(ut(s)&&(h={},Ft(s,function(x){return h[x]=1}),s=h),s=Uv(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],s==="all"?(d[g]=s,v=f,m={}):(m=d[g]=d[g]||{},v=s);for(h in v)p=f&&f[h],p&&((!("kill"in p.d)||p.d.kill(h)===!0)&&oa(this,p,"_pt"),delete f[h]),m!=="all"&&(m[h]=1)}return this._initted&&!this._pt&&u&&Nr(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Gr(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Gr(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return He.killTweensOf(i,s,o)},e}(vr);ln(tt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ft("staggerTo,staggerFrom,staggerFromTo",function(r){tt[r]=function(){var e=new Rt,t=wo.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Jo=function(e,t,n){return e[t]=n},vd=function(e,t,n){return e[t](n)},Gv=function(e,t,n,i){return e[t](i.fp,n)},Vv=function(e,t,n){return e.setAttribute(t,n)},Qo=function(e,t){return $e(e[t])?vd:Wo(e[t])&&e.setAttribute?Vv:Jo},xd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Wv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},yd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},el=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Hv=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},qv=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?oa(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Xv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},bd=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},zt=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||xd,this.d=l||this,this.set=c||Jo,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Xv,this.m=n,this.mt=s,this.tween=i},r}();Ft($o+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return jo[r]=1});Yt.TweenMax=Yt.TweenLite=tt;Yt.TimelineLite=Yt.TimelineMax=Rt;He=new Rt({sortChildren:!1,defaults:pr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});$t.stringFilter=ud;var xr=[],Gs={},jv=[],Uc=0,Qa=function(e){return(Gs[e]||jv).map(function(t){return t()})},Ao=function(){var e=Date.now(),t=[];e-Uc>2&&(Qa("matchMediaInit"),xr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=en.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Qa("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Uc=e,Qa("matchMedia"))},Sd=function(){function r(t,n){this.selector=n&&To(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){$e(n)&&(s=i,i=n,n=$e);var o=this,a=function(){var c=et,u=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=To(s)),et=o,d=i.apply(o,arguments),$e(d)&&o._r.push(d),et=c,o.selector=u,o.isReverted=!1,d};return o.last=a,n===$e?a(o):n?o[n]=a:a},e.ignore=function(n){var i=et;et=null,n(this),et=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof tt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof vr)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var a=xr.indexOf(this);~a&&xr.splice(a,1)}},e.revert=function(n){this.kill(n||{})},r}(),$v=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){Pn(n)||(n={matches:n});var o=new Sd(0,s||this.scope),a=o.conditions={},l,c,u;this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=en.matchMedia(n[c]),l&&(xr.indexOf(o)<0&&xr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ao):l.addEventListener("change",Ao)));return u&&i(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Zs={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return od(i)})},timeline:function(e){return new Rt(e)},getTweensOf:function(e,t){return He.getTweensOf(e,t)},getProperty:function(e,t,n,i){ut(e)&&(e=an(e)[0]);var s=Ci(e||{}).get,o=n?$u:ju;return n==="native"&&(n=""),e&&(t?o((Ht[t]&&Ht[t].get||s)(e,t,n,i)):function(a,l,c){return o((Ht[a]&&Ht[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=an(e),e.length>1){var i=e.map(function(u){return Nt.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var o=Ht[t],a=Ci(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var d=new o;nr._pt=0,d.init(e,n?u+n:u,nr,0,[e]),d.render(1,d),nr._pt&&el(1,nr)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Nt.to(e,Ri((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return He.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Li(e.ease,pr.ease)),Oc(pr,e||{})},config:function(e){return Oc($t,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Ht[a]&&!Yt[a]&&Xs(t+" effect requires "+a+" plugin.")}),Ya[t]=function(a,l,c){return n(an(a),ln(l||{},s),c)},o&&(Rt.prototype[t]=function(a,l,c){return this.add(Ya[t](a,Pn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Le[e]=Li(t)},parseEase:function(e,t){return arguments.length?Li(e,t):Le},getById:function(e){return He.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Rt(e),i,s;for(n.smoothChildTiming=Ot(e.smoothChildTiming),He.remove(n),n._dp=0,n._time=n._tTime=He._time,i=He._first;i;)s=i._next,(t||!(!i._dur&&i instanceof tt&&i.vars.onComplete===i._targets[0]))&&wn(n,i,i._start-i._delay),i=s;return wn(He,n,0),n},context:function(e,t){return e?new Sd(e,t):et},matchMedia:function(e){return new $v(e)},matchMediaRefresh:function(){return xr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ao()},addEventListener:function(e,t){var n=Gs[e]||(Gs[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Gs[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Cv,wrapYoyo:Av,distribute:td,random:id,snap:nd,normalize:Ev,getUnit:gt,clamp:Sv,splitColor:ld,toArray:an,selector:To,mapRange:sd,pipe:wv,unitize:Tv,interpolate:Lv,shuffle:ed},install:Vu,effects:Ya,ticker:Xt,updateRoot:Rt.updateRoot,plugins:Ht,globalTimeline:He,core:{PropTween:zt,globals:Wu,Tween:tt,Timeline:Rt,Animation:vr,getCache:Ci,_removeLinkedListItem:oa,reverting:function(){return _t},context:function(e){return e&&et&&(et.data.push(e),e._ctx=et),et},suppressOverwrites:function(e){return Vo=e}}};Ft("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Zs[r]=tt[r]});Xt.add(Rt.updateRoot);nr=Zs.to({},{duration:0});var Yv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Zv=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Yv(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},eo=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(ut(s)&&(l={},Ft(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Zv(a,s)}}}},Nt=Zs.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)_t?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},eo("roundProps",Eo),eo("modifiers"),eo("snap",nd))||Zs;tt.version=Rt.version=Nt.version="3.11.5";Gu=1;Ho()&&_r();Le.Power0;Le.Power1;Le.Power2;Le.Power3;Le.Power4;Le.Linear;Le.Quad;Le.Cubic;Le.Quart;Le.Quint;Le.Strong;Le.Elastic;Le.Back;Le.SteppedEase;Le.Bounce;Le.Sine;Le.Expo;Le.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var kc,ei,or,tl,Ti,Gc,nl,Kv=function(){return typeof window<"u"},Hn={},bi=180/Math.PI,lr=Math.PI/180,Ki=Math.atan2,Vc=1e8,il=/([A-Z])/g,Jv=/(left|right|width|margin|padding|x)/i,Qv=/[\s,\(]\S/,Tn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Lo=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ex=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},tx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},nx=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Md=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},wd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ix=function(e,t,n){return e.style[t]=n},rx=function(e,t,n){return e.style.setProperty(t,n)},sx=function(e,t,n){return e._gsap[t]=n},ax=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ox=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},lx=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},qe="transform",_n=qe+"Origin",cx=function r(e,t){var n=this,i=this.target,s=i.style;if(e in Hn){if(this.tfm=this.tfm||{},e!=="transform")e=Tn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Un(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Un(i,e);else return Tn.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(qe)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(_n,t,"")),e=qe}(s||t)&&this.props.push(e,t,s[e])},Td=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ux=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(il,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=nl(),(!s||!s.isStart)&&!n[qe]&&(Td(n),i.uncache=1)}},Ed=function(e,t){var n={target:e,props:[],revert:ux,save:cx};return e._gsap||Nt.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Cd,Po=function(e,t){var n=ei.createElementNS?ei.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ei.createElement(e);return n.style?n:ei.createElement(e)},Cn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(il,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,yr(t)||t,1)||""},Wc="O,Moz,ms,Ms,Webkit".split(","),yr=function(e,t,n){var i=t||Ti,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Wc[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Wc[o]:"")+e},Do=function(){Kv()&&window.document&&(kc=window,ei=kc.document,or=ei.documentElement,Ti=Po("div")||{style:{}},Po("div"),qe=yr(qe),_n=qe+"Origin",Ti.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Cd=!!yr("perspective"),nl=Nt.core.reverting,tl=1)},to=function r(e){var t=Po("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(or.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),or.removeChild(t),this.style.cssText=s,o},Hc=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Ad=function(e){var t;try{t=e.getBBox()}catch{t=to.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===to||(t=to.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Hc(e,["x","cx","x1"])||0,y:+Hc(e,["y","cy","y1"])||0,width:0,height:0}:t},Ld=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ad(e))},Qr=function(e,t){if(t){var n=e.style;t in Hn&&t!==_n&&(t=qe),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(il,"-$1").toLowerCase())):n.removeAttribute(t)}},ti=function(e,t,n,i,s,o){var a=new zt(e._pt,t,n,0,1,o?wd:Md);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},qc={deg:1,rad:1,turn:1},dx={grid:1,flex:1},ui=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ti.style,l=Jv.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",m=i==="%",v,h,p,g;return i===o||!s||qc[i]||qc[o]?s:(o!=="px"&&!f&&(s=r(e,t,n,"px")),g=e.getCTM&&Ld(e),(m||o==="%")&&(Hn[t]||~t.indexOf("adius"))?(v=g?e.getBBox()[l?"width":"height"]:e[u],Ze(m?s/v*d:s/100*v)):(a[l?"width":"height"]=d+(f?o:i),h=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(h=(e.ownerSVGElement||{}).parentNode),(!h||h===ei||!h.appendChild)&&(h=ei.body),p=h._gsap,p&&m&&p.width&&l&&p.time===Xt.time&&!p.uncache?Ze(s/p.width*d):((m||o==="%")&&!dx[Cn(h,"display")]&&(a.position=Cn(e,"position")),h===e&&(a.position="static"),h.appendChild(Ti),v=Ti[u],h.removeChild(Ti),a.position="absolute",l&&m&&(p=Ci(h),p.time=Xt.time,p.width=h[u]),Ze(f?v*s/d:v&&s?d/v*s:0))))},Un=function(e,t,n,i){var s;return tl||Do(),t in Tn&&t!=="transform"&&(t=Tn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Hn[t]&&t!=="transform"?(s=ts(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Js(Cn(e,_n))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ks[t]&&Ks[t](e,t,n)||Cn(e,t)||qu(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ui(e,t,s,n)+n:s},fx=function(e,t,n,i){if(!n||n==="none"){var s=yr(t,e,1),o=s&&Cn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Cn(e,"borderTopColor"))}var a=new zt(this._pt,e.style,t,0,1,yd),l=0,c=0,u,d,f,m,v,h,p,g,x,_,S,b;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Cn(e,t)||i,e.style[t]=n),u=[n,i],ud(u),n=u[0],i=u[1],f=n.match(tr)||[],b=i.match(tr)||[],b.length){for(;d=tr.exec(i);)p=d[0],x=i.substring(l,d.index),v?v=(v+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(v=1),p!==(h=f[c++]||"")&&(m=parseFloat(h)||0,S=h.substr((m+"").length),p.charAt(1)==="="&&(p=ar(m,p)+S),g=parseFloat(p),_=p.substr((g+"").length),l=tr.lastIndex-_.length,_||(_=_||$t.units[t]||S,l===i.length&&(i+=_,a.e+=_)),S!==_&&(m=ui(e,t,h,_)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:m,c:g-m,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?wd:Md;return Uu.test(i)&&(a.e=0),this._pt=a,a},Xc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},hx=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Xc[n]||n,t[1]=Xc[i]||i,t.join(" ")},px=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Hn[a]&&(l=1,a=a==="transformOrigin"?_n:qe),Qr(n,a);l&&(Qr(n,qe),o&&(o.svg&&n.removeAttribute("transform"),ts(n,1),o.uncache=1,Td(i)))}},Ks={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new zt(e._pt,t,n,0,0,px);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},es=[1,0,0,1,0,0],Pd={},Dd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},jc=function(e){var t=Cn(e,qe);return Dd(t)?es:t.substr(7).match(Bu).map(Ze)},rl=function(e,t){var n=e._gsap||Ci(e),i=e.style,s=jc(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?es:s):(s===es&&!e.offsetParent&&e!==or&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,or.appendChild(e)),s=jc(e),l?i.display=l:Qr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):or.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ro=function(e,t,n,i,s,o){var a=e._gsap,l=s||rl(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,m=l[0],v=l[1],h=l[2],p=l[3],g=l[4],x=l[5],_=t.split(" "),S=parseFloat(_[0])||0,b=parseFloat(_[1])||0,w,C,y,M;n?l!==es&&(C=m*p-v*h)&&(y=S*(p/C)+b*(-h/C)+(h*x-p*g)/C,M=S*(-v/C)+b*(m/C)-(m*x-v*g)/C,S=y,b=M):(w=Ad(e),S=w.x+(~_[0].indexOf("%")?S/100*w.width:S),b=w.y+(~(_[1]||_[0]).indexOf("%")?b/100*w.height:b)),i||i!==!1&&a.smooth?(g=S-c,x=b-u,a.xOffset=d+(g*m+x*h)-g,a.yOffset=f+(g*v+x*p)-x):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=b,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[_n]="0px 0px",o&&(ti(o,a,"xOrigin",c,S),ti(o,a,"yOrigin",u,b),ti(o,a,"xOffset",d,a.xOffset),ti(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+b)},ts=function(e,t){var n=e._gsap||new pd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Cn(e,_n)||"0",u,d,f,m,v,h,p,g,x,_,S,b,w,C,y,M,R,D,z,E,L,O,G,q,V,Y,K,se,H,J,ee,B;return u=d=f=h=p=g=x=_=S=0,m=v=1,n.svg=!!(e.getCTM&&Ld(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[qe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[qe]!=="none"?l[qe]:"")),i.scale=i.rotate=i.translate="none"),C=rl(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),Ro(e,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,C)),b=n.xOrigin||0,w=n.yOrigin||0,C!==es&&(D=C[0],z=C[1],E=C[2],L=C[3],u=O=C[4],d=G=C[5],C.length===6?(m=Math.sqrt(D*D+z*z),v=Math.sqrt(L*L+E*E),h=D||z?Ki(z,D)*bi:0,x=E||L?Ki(E,L)*bi+h:0,x&&(v*=Math.abs(Math.cos(x*lr))),n.svg&&(u-=b-(b*D+w*E),d-=w-(b*z+w*L))):(B=C[6],J=C[7],K=C[8],se=C[9],H=C[10],ee=C[11],u=C[12],d=C[13],f=C[14],y=Ki(B,H),p=y*bi,y&&(M=Math.cos(-y),R=Math.sin(-y),q=O*M+K*R,V=G*M+se*R,Y=B*M+H*R,K=O*-R+K*M,se=G*-R+se*M,H=B*-R+H*M,ee=J*-R+ee*M,O=q,G=V,B=Y),y=Ki(-E,H),g=y*bi,y&&(M=Math.cos(-y),R=Math.sin(-y),q=D*M-K*R,V=z*M-se*R,Y=E*M-H*R,ee=L*R+ee*M,D=q,z=V,E=Y),y=Ki(z,D),h=y*bi,y&&(M=Math.cos(y),R=Math.sin(y),q=D*M+z*R,V=O*M+G*R,z=z*M-D*R,G=G*M-O*R,D=q,O=V),p&&Math.abs(p)+Math.abs(h)>359.9&&(p=h=0,g=180-g),m=Ze(Math.sqrt(D*D+z*z+E*E)),v=Ze(Math.sqrt(G*G+B*B)),y=Ki(O,G),x=Math.abs(y)>2e-4?y*bi:0,S=ee?1/(ee<0?-ee:ee):0),n.svg&&(q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Dd(Cn(e,qe)),q&&e.setAttribute("transform",q))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(m*=-1,x+=h<=0?180:-180,h+=h<=0?180:-180):(v*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Ze(m),n.scaleY=Ze(v),n.rotation=Ze(h)+a,n.rotationX=Ze(p)+a,n.rotationY=Ze(g)+a,n.skewX=x+a,n.skewY=_+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[_n]=Js(c)),n.xOffset=n.yOffset=0,n.force3D=$t.force3D,n.renderTransform=n.svg?gx:Cd?Rd:mx,n.uncache=0,n},Js=function(e){return(e=e.split(" "))[0]+" "+e[1]},no=function(e,t,n){var i=gt(t);return Ze(parseFloat(t)+parseFloat(ui(e,"x",n+"px",i)))+i},mx=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Rd(e,t)},vi="0deg",Or="0px",xi=") ",Rd=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,m=n.skewY,v=n.scaleX,h=n.scaleY,p=n.transformPerspective,g=n.force3D,x=n.target,_=n.zOrigin,S="",b=g==="auto"&&e&&e!==1||g===!0;if(_&&(d!==vi||u!==vi)){var w=parseFloat(u)*lr,C=Math.sin(w),y=Math.cos(w),M;w=parseFloat(d)*lr,M=Math.cos(w),o=no(x,o,C*M*-_),a=no(x,a,-Math.sin(w)*-_),l=no(x,l,y*M*-_+_)}p!==Or&&(S+="perspective("+p+xi),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(b||o!==Or||a!==Or||l!==Or)&&(S+=l!==Or||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+xi),c!==vi&&(S+="rotate("+c+xi),u!==vi&&(S+="rotateY("+u+xi),d!==vi&&(S+="rotateX("+d+xi),(f!==vi||m!==vi)&&(S+="skew("+f+", "+m+xi),(v!==1||h!==1)&&(S+="scale("+v+", "+h+xi),x.style[qe]=S||"translate(0, 0)"},gx=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,m=n.target,v=n.xOrigin,h=n.yOrigin,p=n.xOffset,g=n.yOffset,x=n.forceCSS,_=parseFloat(o),S=parseFloat(a),b,w,C,y,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=lr,c*=lr,b=Math.cos(l)*d,w=Math.sin(l)*d,C=Math.sin(l-c)*-f,y=Math.cos(l-c)*f,c&&(u*=lr,M=Math.tan(c-u),M=Math.sqrt(1+M*M),C*=M,y*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),b*=M,w*=M)),b=Ze(b),w=Ze(w),C=Ze(C),y=Ze(y)):(b=d,y=f,w=C=0),(_&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(_=ui(m,"x",o,"px"),S=ui(m,"y",a,"px")),(v||h||p||g)&&(_=Ze(_+v-(v*b+h*C)+p),S=Ze(S+h-(v*w+h*y)+g)),(i||s)&&(M=m.getBBox(),_=Ze(_+i/100*M.width),S=Ze(S+s/100*M.height)),M="matrix("+b+","+w+","+C+","+y+","+_+","+S+")",m.setAttribute("transform",M),x&&(m.style[qe]=M)},_x=function(e,t,n,i,s){var o=360,a=ut(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?bi:1),c=l-i,u=i+c+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Vc)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Vc)%o-~~(c/o)*o)),e._pt=f=new zt(e._pt,t,n,i,c,ex),f.e=u,f.u="deg",e._props.push(n),f},$c=function(e,t){for(var n in t)e[n]=t[n];return e},vx=function(e,t,n){var i=$c({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,d,f,m,v;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[qe]=t,a=ts(n,1),Qr(n,qe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[qe],o[qe]=t,a=ts(n,1),o[qe]=c);for(l in Hn)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(m=gt(c),v=gt(u),d=m!==v?ui(n,l,c,v):parseFloat(c),f=parseFloat(u),e._pt=new zt(e._pt,a,l,d,f-d,Lo),e._pt.u=v||0,e._props.push(l));$c(a,i)};Ft("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Ks[e>1?"border"+r:r]=function(a,l,c,u,d){var f,m;if(arguments.length<4)return f=o.map(function(v){return Un(a,v,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},o.forEach(function(v,h){return m[v]=f[h]=f[h]||f[(h-1)/2|0]}),a.init(l,m,d)}});var Id={name:"css",register:Do,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,d,f,m,v,h,p,g,x,_,S,b,w,C,y;tl||Do(),this.styles=this.styles||Ed(e),y=this.styles.props,this.tween=n;for(h in t)if(h!=="autoRound"&&(u=t[h],!(Ht[h]&&md(h,t,n,i,e,s)))){if(m=typeof u,v=Ks[h],m==="function"&&(u=u.call(n,i,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Kr(u)),v)v(this,e,h,u,n)&&(C=1);else if(h.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(h)+"").trim(),u+="",ai.lastIndex=0,ai.test(c)||(p=gt(c),g=gt(u)),g?p!==g&&(c=ui(e,h,c,g)+g):p&&(u+=p),this.add(a,"setProperty",c,u,i,s,0,0,h),o.push(h),y.push(h,0,a[h]);else if(m!=="undefined"){if(l&&h in l?(c=typeof l[h]=="function"?l[h].call(n,i,e,s):l[h],ut(c)&&~c.indexOf("random(")&&(c=Kr(c)),gt(c+"")||(c+=$t.units[h]||gt(Un(e,h))||""),(c+"").charAt(1)==="="&&(c=Un(e,h))):c=Un(e,h),f=parseFloat(c),x=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),d=parseFloat(u),h in Tn&&(h==="autoAlpha"&&(f===1&&Un(e,"visibility")==="hidden"&&d&&(f=0),y.push("visibility",0,a.visibility),ti(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),h!=="scale"&&h!=="transform"&&(h=Tn[h],~h.indexOf(",")&&(h=h.split(",")[0]))),_=h in Hn,_){if(this.styles.save(h),S||(b=e._gsap,b.renderTransform&&!t.parseTransform||ts(e,t.parseTransform),w=t.smoothOrigin!==!1&&b.smooth,S=this._pt=new zt(this._pt,a,qe,0,1,b.renderTransform,b,0,-1),S.dep=1),h==="scale")this._pt=new zt(this._pt,b,"scaleY",b.scaleY,(x?ar(b.scaleY,x+d):d)-b.scaleY||0,Lo),this._pt.u=0,o.push("scaleY",h),h+="X";else if(h==="transformOrigin"){y.push(_n,0,a[_n]),u=hx(u),b.svg?Ro(e,u,0,w,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==b.zOrigin&&ti(this,b,"zOrigin",b.zOrigin,g),ti(this,a,h,Js(c),Js(u)));continue}else if(h==="svgOrigin"){Ro(e,u,1,w,0,this);continue}else if(h in Pd){_x(this,b,h,f,x?ar(f,x+u):u);continue}else if(h==="smoothOrigin"){ti(this,b,"smooth",b.smooth,u);continue}else if(h==="force3D"){b[h]=u;continue}else if(h==="transform"){vx(this,u,e);continue}}else h in a||(h=yr(h)||h);if(_||(d||d===0)&&(f||f===0)&&!Qv.test(u)&&h in a)p=(c+"").substr((f+"").length),d||(d=0),g=gt(u)||(h in $t.units?$t.units[h]:p),p!==g&&(f=ui(e,h,c,g)),this._pt=new zt(this._pt,_?b:a,h,f,(x?ar(f,x+d):d)-f,!_&&(g==="px"||h==="zIndex")&&t.autoRound!==!1?nx:Lo),this._pt.u=g||0,p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=tx);else if(h in a)fx.call(this,e,h,c,x?x+u:u);else if(h in e)this.add(e,h,c||e[h],x?x+u:u,i,s);else if(h!=="parseTransform"){Xo(h,u);continue}_||(h in a?y.push(h,0,a[h]):y.push(h,1,c||e[h])),o.push(h)}}C&&bd(this)},render:function(e,t){if(t.tween._time||!nl())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Un,aliases:Tn,getSetter:function(e,t,n){var i=Tn[t];return i&&i.indexOf(",")<0&&(t=i),t in Hn&&t!==_n&&(e._gsap.x||Un(e,"x"))?n&&Gc===n?t==="scale"?ax:sx:(Gc=n||{})&&(t==="scale"?ox:lx):e.style&&!Wo(e.style[t])?ix:~t.indexOf("-")?rx:Qo(e,t)},core:{_removeProperty:Qr,_getMatrix:rl}};Nt.utils.checkPrefix=yr;Nt.core.getStyleSaver=Ed;(function(r,e,t,n){var i=Ft(r+","+e+","+t,function(s){Hn[s]=1});Ft(e,function(s){$t.units[s]="deg",Pd[s]=1}),Tn[i[13]]=r+","+e,Ft(n,function(s){var o=s.split(":");Tn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ft("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){$t.units[r]="px"});Nt.registerPlugin(Id);var Vs=Nt.registerPlugin(Id)||Nt;Vs.core.Tween;const xx=r=>(ss("data-v-32aebeff"),r=r(),as(),r),yx={class:"main"},bx=xx(()=>Ce("div",{class:"threeshow"},null,-1)),Sx=br({__name:"threeDemo",setup(r){return os(()=>{const e=new Ru,t=new Et(75,window.innerWidth/window.innerHeight,.1,1e3);t.position.set(0,0,10),e.add(t);const n=new Mr(1,1,1),i=new na({color:16776960}),s=new It(n,i),o=new sa({antialias:!0});window.innerWidth<=460?o.setSize(340,400):o.setSize(672,400);const a=new Ou(t,o.domElement);a.enableDamping=!0,new J0(10),s.position.x=0,s.scale.set(1,1,1),s.scale.x=2,Vs.to(s.position,{x:5,duration:5,repeat:2,yoyo:!0,onComplete:()=>{console.log("动画完成")},onStart:()=>{console.log("动画开始")}}),Vs.to(s.rotation,{x:2*Math.PI,duration:5});for(let d=0;d<50;d++){const f=new cn,m=new Float32Array(9);for(let g=0;g<9;g++)m[g]=Math.random()*4-2;f.setAttribute("position",new gn(m,3));let v=new Ie(Math.random(),Math.random(),Math.random());const h=new Uo({color:v,linewidth:1,linecap:"round",linejoin:"round"}),p=new It(f,h);Vs.to(p.rotation,{y:2*Math.PI,duration:3,repeat:-1,yoyo:!0}),e.add(p)}const l=new Z0(268435455,.5);e.add(l);function c(){a.update(),o.render(e,t),requestAnimationFrame(c)}c(),window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),o.setPixelRatio(window.devicePixelRatio)}),document.querySelector(".threeshow").appendChild(o.domElement)}),(e,t)=>(nn(),rn("div",yx,[Ur(" this is a demo "),bx]))}});const Mx=Sr(Sx,[["__scopeId","data-v-32aebeff"]]);function Yc(r){return r!==null&&typeof r=="object"&&"constructor"in r&&r.constructor===Object}function sl(r={},e={}){Object.keys(e).forEach(t=>{typeof r[t]>"u"?r[t]=e[t]:Yc(e[t])&&Yc(r[t])&&Object.keys(e[t]).length>0&&sl(r[t],e[t])})}const Od={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function An(){const r=typeof document<"u"?document:{};return sl(r,Od),r}const wx={document:Od,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(r){return typeof setTimeout>"u"?(r(),null):setTimeout(r,0)},cancelAnimationFrame(r){typeof setTimeout>"u"||clearTimeout(r)}};function Zt(){const r=typeof window<"u"?window:{};return sl(r,wx),r}function Tx(r){const e=r;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function Io(r,e=0){return setTimeout(r,e)}function ns(){return Date.now()}function Ex(r){const e=Zt();let t;return e.getComputedStyle&&(t=e.getComputedStyle(r,null)),!t&&r.currentStyle&&(t=r.currentStyle),t||(t=r.style),t}function Cx(r,e="x"){const t=Zt();let n,i,s;const o=Ex(r);return t.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(a=>a.replace(",",".")).join(", ")),s=new t.WebKitCSSMatrix(i==="none"?"":i)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=s.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?i=s.m41:n.length===16?i=parseFloat(n[12]):i=parseFloat(n[4])),e==="y"&&(t.WebKitCSSMatrix?i=s.m42:n.length===16?i=parseFloat(n[13]):i=parseFloat(n[5])),i||0}function Fs(r){return typeof r=="object"&&r!==null&&r.constructor&&Object.prototype.toString.call(r).slice(8,-1)==="Object"}function Ax(r){return typeof window<"u"&&typeof window.HTMLElement<"u"?r instanceof HTMLElement:r&&(r.nodeType===1||r.nodeType===11)}function qt(...r){const e=Object(r[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<r.length;n+=1){const i=r[n];if(i!=null&&!Ax(i)){const s=Object.keys(Object(i)).filter(o=>t.indexOf(o)<0);for(let o=0,a=s.length;o<a;o+=1){const l=s[o],c=Object.getOwnPropertyDescriptor(i,l);c!==void 0&&c.enumerable&&(Fs(e[l])&&Fs(i[l])?i[l].__swiper__?e[l]=i[l]:qt(e[l],i[l]):!Fs(e[l])&&Fs(i[l])?(e[l]={},i[l].__swiper__?e[l]=i[l]:qt(e[l],i[l])):e[l]=i[l])}}}return e}function zs(r,e,t){r.style.setProperty(e,t)}function Fd({swiper:r,targetPosition:e,side:t}){const n=Zt(),i=-r.translate;let s=null,o;const a=r.params.speed;r.wrapperEl.style.scrollSnapType="none",n.cancelAnimationFrame(r.cssModeFrameID);const l=e>i?"next":"prev",c=(d,f)=>l==="next"&&d>=f||l==="prev"&&d<=f,u=()=>{o=new Date().getTime(),s===null&&(s=o);const d=Math.max(Math.min((o-s)/a,1),0),f=.5-Math.cos(d*Math.PI)/2;let m=i+f*(e-i);if(c(m,e)&&(m=e),r.wrapperEl.scrollTo({[t]:m}),c(m,e)){r.wrapperEl.style.overflow="hidden",r.wrapperEl.style.scrollSnapType="",setTimeout(()=>{r.wrapperEl.style.overflow="",r.wrapperEl.scrollTo({[t]:m})}),n.cancelAnimationFrame(r.cssModeFrameID);return}r.cssModeFrameID=n.requestAnimationFrame(u)};u()}function En(r,e=""){return[...r.children].filter(t=>t.matches(e))}function al(r,e=[]){const t=document.createElement(r);return t.classList.add(...Array.isArray(e)?e:[e]),t}function Lx(r,e){const t=[];for(;r.previousElementSibling;){const n=r.previousElementSibling;e?n.matches(e)&&t.push(n):t.push(n),r=n}return t}function Px(r,e){const t=[];for(;r.nextElementSibling;){const n=r.nextElementSibling;e?n.matches(e)&&t.push(n):t.push(n),r=n}return t}function ni(r,e){return Zt().getComputedStyle(r,null).getPropertyValue(e)}function is(r){let e=r,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function zd(r,e){const t=[];let n=r.parentElement;for(;n;)e?n.matches(e)&&t.push(n):t.push(n),n=n.parentElement;return t}function Oo(r,e,t){const n=Zt();return t?r[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(n.getComputedStyle(r,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(n.getComputedStyle(r,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):r.offsetWidth}let io;function Dx(){const r=Zt(),e=An();return{smoothScroll:e.documentElement&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in r||r.DocumentTouch&&e instanceof r.DocumentTouch)}}function Nd(){return io||(io=Dx()),io}let ro;function Rx({userAgent:r}={}){const e=Nd(),t=Zt(),n=t.navigator.platform,i=r||t.navigator.userAgent,s={ios:!1,android:!1},o=t.screen.width,a=t.screen.height,l=i.match(/(Android);?[\s\/]+([\d.]+)?/);let c=i.match(/(iPad).*OS\s([\d_]+)/);const u=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!c&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f=n==="Win32";let m=n==="MacIntel";const v=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&m&&e.touch&&v.indexOf(`${o}x${a}`)>=0&&(c=i.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),m=!1),l&&!f&&(s.os="android",s.android=!0),(c||d||u)&&(s.os="ios",s.ios=!0),s}function Ix(r={}){return ro||(ro=Rx(r)),ro}let so;function Ox(){const r=Zt();let e=!1;function t(){const n=r.navigator.userAgent.toLowerCase();return n.indexOf("safari")>=0&&n.indexOf("chrome")<0&&n.indexOf("android")<0}if(t()){const n=String(r.navigator.userAgent);if(n.includes("Version/")){const[i,s]=n.split("Version/")[1].split(" ")[0].split(".").map(o=>Number(o));e=i<16||i===16&&s<2}}return{isSafari:e||t(),needPerspectiveFix:e,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(r.navigator.userAgent)}}function Fx(){return so||(so=Ox()),so}function zx({swiper:r,on:e,emit:t}){const n=Zt();let i=null,s=null;const o=()=>{!r||r.destroyed||!r.initialized||(t("beforeResize"),t("resize"))},a=()=>{!r||r.destroyed||!r.initialized||(i=new ResizeObserver(u=>{s=n.requestAnimationFrame(()=>{const{width:d,height:f}=r;let m=d,v=f;u.forEach(({contentBoxSize:h,contentRect:p,target:g})=>{g&&g!==r.el||(m=p?p.width:(h[0]||h).inlineSize,v=p?p.height:(h[0]||h).blockSize)}),(m!==d||v!==f)&&o()})}),i.observe(r.el))},l=()=>{s&&n.cancelAnimationFrame(s),i&&i.unobserve&&r.el&&(i.unobserve(r.el),i=null)},c=()=>{!r||r.destroyed||!r.initialized||t("orientationchange")};e("init",()=>{if(r.params.resizeObserver&&typeof n.ResizeObserver<"u"){a();return}n.addEventListener("resize",o),n.addEventListener("orientationchange",c)}),e("destroy",()=>{l(),n.removeEventListener("resize",o),n.removeEventListener("orientationchange",c)})}function Nx({swiper:r,extendParams:e,on:t,emit:n}){const i=[],s=Zt(),o=(c,u={})=>{const d=s.MutationObserver||s.WebkitMutationObserver,f=new d(m=>{if(r.__preventObserver__)return;if(m.length===1){n("observerUpdate",m[0]);return}const v=function(){n("observerUpdate",m[0])};s.requestAnimationFrame?s.requestAnimationFrame(v):s.setTimeout(v,0)});f.observe(c,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:typeof u.childList>"u"?!0:u.childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),i.push(f)},a=()=>{if(r.params.observer){if(r.params.observeParents){const c=zd(r.el);for(let u=0;u<c.length;u+=1)o(c[u])}o(r.el,{childList:r.params.observeSlideChildren}),o(r.wrapperEl,{attributes:!1})}},l=()=>{i.forEach(c=>{c.disconnect()}),i.splice(0,i.length)};e({observer:!1,observeParents:!1,observeSlideChildren:!1}),t("init",a),t("destroy",l)}const Bx={on(r,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const i=t?"unshift":"push";return r.split(" ").forEach(s=>{n.eventsListeners[s]||(n.eventsListeners[s]=[]),n.eventsListeners[s][i](e)}),n},once(r,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;function i(...s){n.off(r,i),i.__emitterProxy&&delete i.__emitterProxy,e.apply(n,s)}return i.__emitterProxy=e,n.on(r,i,t)},onAny(r,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof r!="function")return t;const n=e?"unshift":"push";return t.eventsAnyListeners.indexOf(r)<0&&t.eventsAnyListeners[n](r),t},offAny(r){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(r);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(r,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||r.split(" ").forEach(n=>{typeof e>"u"?t.eventsListeners[n]=[]:t.eventsListeners[n]&&t.eventsListeners[n].forEach((i,s)=>{(i===e||i.__emitterProxy&&i.__emitterProxy===e)&&t.eventsListeners[n].splice(s,1)})}),t},emit(...r){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,i;return typeof r[0]=="string"||Array.isArray(r[0])?(t=r[0],n=r.slice(1,r.length),i=e):(t=r[0].events,n=r[0].data,i=r[0].context||e),n.unshift(i),(Array.isArray(t)?t:t.split(" ")).forEach(o=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(a=>{a.apply(i,[o,...n])}),e.eventsListeners&&e.eventsListeners[o]&&e.eventsListeners[o].forEach(a=>{a.apply(i,n)})}),e}};function Ux(){const r=this;let e,t;const n=r.el;typeof r.params.width<"u"&&r.params.width!==null?e=r.params.width:e=n.clientWidth,typeof r.params.height<"u"&&r.params.height!==null?t=r.params.height:t=n.clientHeight,!(e===0&&r.isHorizontal()||t===0&&r.isVertical())&&(e=e-parseInt(ni(n,"padding-left")||0,10)-parseInt(ni(n,"padding-right")||0,10),t=t-parseInt(ni(n,"padding-top")||0,10)-parseInt(ni(n,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(r,{width:e,height:t,size:r.isHorizontal()?e:t}))}function kx(){const r=this;function e(D){return r.isHorizontal()?D:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[D]}function t(D,z){return parseFloat(D.getPropertyValue(e(z))||0)}const n=r.params,{wrapperEl:i,slidesEl:s,size:o,rtlTranslate:a,wrongRTL:l}=r,c=r.virtual&&n.virtual.enabled,u=c?r.virtual.slides.length:r.slides.length,d=En(s,`.${r.params.slideClass}, swiper-slide`),f=c?r.virtual.slides.length:d.length;let m=[];const v=[],h=[];let p=n.slidesOffsetBefore;typeof p=="function"&&(p=n.slidesOffsetBefore.call(r));let g=n.slidesOffsetAfter;typeof g=="function"&&(g=n.slidesOffsetAfter.call(r));const x=r.snapGrid.length,_=r.slidesGrid.length;let S=n.spaceBetween,b=-p,w=0,C=0;if(typeof o>"u")return;typeof S=="string"&&S.indexOf("%")>=0&&(S=parseFloat(S.replace("%",""))/100*o),r.virtualSize=-S,d.forEach(D=>{a?D.style.marginLeft="":D.style.marginRight="",D.style.marginBottom="",D.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(zs(i,"--swiper-centered-offset-before",""),zs(i,"--swiper-centered-offset-after",""));const y=n.grid&&n.grid.rows>1&&r.grid;y&&r.grid.initSlides(f);let M;const R=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(D=>typeof n.breakpoints[D].slidesPerView<"u").length>0;for(let D=0;D<f;D+=1){M=0;let z;if(d[D]&&(z=d[D]),y&&r.grid.updateSlide(D,z,f,e),!(d[D]&&ni(z,"display")==="none")){if(n.slidesPerView==="auto"){R&&(d[D].style[e("width")]="");const E=getComputedStyle(z),L=z.style.transform,O=z.style.webkitTransform;if(L&&(z.style.transform="none"),O&&(z.style.webkitTransform="none"),n.roundLengths)M=r.isHorizontal()?Oo(z,"width",!0):Oo(z,"height",!0);else{const G=t(E,"width"),q=t(E,"padding-left"),V=t(E,"padding-right"),Y=t(E,"margin-left"),K=t(E,"margin-right"),se=E.getPropertyValue("box-sizing");if(se&&se==="border-box")M=G+Y+K;else{const{clientWidth:H,offsetWidth:J}=z;M=G+q+V+Y+K+(J-H)}}L&&(z.style.transform=L),O&&(z.style.webkitTransform=O),n.roundLengths&&(M=Math.floor(M))}else M=(o-(n.slidesPerView-1)*S)/n.slidesPerView,n.roundLengths&&(M=Math.floor(M)),d[D]&&(d[D].style[e("width")]=`${M}px`);d[D]&&(d[D].swiperSlideSize=M),h.push(M),n.centeredSlides?(b=b+M/2+w/2+S,w===0&&D!==0&&(b=b-o/2-S),D===0&&(b=b-o/2-S),Math.abs(b)<1/1e3&&(b=0),n.roundLengths&&(b=Math.floor(b)),C%n.slidesPerGroup===0&&m.push(b),v.push(b)):(n.roundLengths&&(b=Math.floor(b)),(C-Math.min(r.params.slidesPerGroupSkip,C))%r.params.slidesPerGroup===0&&m.push(b),v.push(b),b=b+M+S),r.virtualSize+=M+S,w=M,C+=1}}if(r.virtualSize=Math.max(r.virtualSize,o)+g,a&&l&&(n.effect==="slide"||n.effect==="coverflow")&&(i.style.width=`${r.virtualSize+n.spaceBetween}px`),n.setWrapperSize&&(i.style[e("width")]=`${r.virtualSize+n.spaceBetween}px`),y&&r.grid.updateWrapperSize(M,m,e),!n.centeredSlides){const D=[];for(let z=0;z<m.length;z+=1){let E=m[z];n.roundLengths&&(E=Math.floor(E)),m[z]<=r.virtualSize-o&&D.push(E)}m=D,Math.floor(r.virtualSize-o)-Math.floor(m[m.length-1])>1&&m.push(r.virtualSize-o)}if(c&&n.loop){const D=h[0]+S;if(n.slidesPerGroup>1){const z=Math.ceil((r.virtual.slidesBefore+r.virtual.slidesAfter)/n.slidesPerGroup),E=D*n.slidesPerGroup;for(let L=0;L<z;L+=1)m.push(m[m.length-1]+E)}for(let z=0;z<r.virtual.slidesBefore+r.virtual.slidesAfter;z+=1)n.slidesPerGroup===1&&m.push(m[m.length-1]+D),v.push(v[v.length-1]+D),r.virtualSize+=D}if(m.length===0&&(m=[0]),n.spaceBetween!==0){const D=r.isHorizontal()&&a?"marginLeft":e("marginRight");d.filter((z,E)=>!n.cssMode||n.loop?!0:E!==d.length-1).forEach(z=>{z.style[D]=`${S}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let D=0;h.forEach(E=>{D+=E+(n.spaceBetween?n.spaceBetween:0)}),D-=n.spaceBetween;const z=D-o;m=m.map(E=>E<0?-p:E>z?z+g:E)}if(n.centerInsufficientSlides){let D=0;if(h.forEach(z=>{D+=z+(n.spaceBetween?n.spaceBetween:0)}),D-=n.spaceBetween,D<o){const z=(o-D)/2;m.forEach((E,L)=>{m[L]=E-z}),v.forEach((E,L)=>{v[L]=E+z})}}if(Object.assign(r,{slides:d,snapGrid:m,slidesGrid:v,slidesSizesGrid:h}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){zs(i,"--swiper-centered-offset-before",`${-m[0]}px`),zs(i,"--swiper-centered-offset-after",`${r.size/2-h[h.length-1]/2}px`);const D=-r.snapGrid[0],z=-r.slidesGrid[0];r.snapGrid=r.snapGrid.map(E=>E+D),r.slidesGrid=r.slidesGrid.map(E=>E+z)}if(f!==u&&r.emit("slidesLengthChange"),m.length!==x&&(r.params.watchOverflow&&r.checkOverflow(),r.emit("snapGridLengthChange")),v.length!==_&&r.emit("slidesGridLengthChange"),n.watchSlidesProgress&&r.updateSlidesOffset(),!c&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const D=`${n.containerModifierClass}backface-hidden`,z=r.el.classList.contains(D);f<=n.maxBackfaceHiddenSlides?z||r.el.classList.add(D):z&&r.el.classList.remove(D)}}function Gx(r){const e=this,t=[],n=e.virtual&&e.params.virtual.enabled;let i=0,s;typeof r=="number"?e.setTransition(r):r===!0&&e.setTransition(e.params.speed);const o=a=>n?e.getSlideIndexByData(a):e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{t.push(a)});else for(s=0;s<Math.ceil(e.params.slidesPerView);s+=1){const a=e.activeIndex+s;if(a>e.slides.length&&!n)break;t.push(o(a))}else t.push(o(e.activeIndex));for(s=0;s<t.length;s+=1)if(typeof t[s]<"u"){const a=t[s].offsetHeight;i=a>i?a:i}(i||i===0)&&(e.wrapperEl.style.height=`${i}px`)}function Vx(){const r=this,e=r.slides,t=r.isElement?r.isHorizontal()?r.wrapperEl.offsetLeft:r.wrapperEl.offsetTop:0;for(let n=0;n<e.length;n+=1)e[n].swiperSlideOffset=(r.isHorizontal()?e[n].offsetLeft:e[n].offsetTop)-t}function Wx(r=this&&this.translate||0){const e=this,t=e.params,{slides:n,rtlTranslate:i,snapGrid:s}=e;if(n.length===0)return;typeof n[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-r;i&&(o=r),n.forEach(a=>{a.classList.remove(t.slideVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];for(let a=0;a<n.length;a+=1){const l=n[a];let c=l.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(c-=n[0].swiperSlideOffset);const u=(o+(t.centeredSlides?e.minTranslate():0)-c)/(l.swiperSlideSize+t.spaceBetween),d=(o-s[0]+(t.centeredSlides?e.minTranslate():0)-c)/(l.swiperSlideSize+t.spaceBetween),f=-(o-c),m=f+e.slidesSizesGrid[a];(f>=0&&f<e.size-1||m>1&&m<=e.size||f<=0&&m>=e.size)&&(e.visibleSlides.push(l),e.visibleSlidesIndexes.push(a),n[a].classList.add(t.slideVisibleClass)),l.progress=i?-u:u,l.originalProgress=i?-d:d}}function Hx(r){const e=this;if(typeof r>"u"){const u=e.rtlTranslate?-1:1;r=e&&e.translate&&e.translate*u||0}const t=e.params,n=e.maxTranslate()-e.minTranslate();let{progress:i,isBeginning:s,isEnd:o,progressLoop:a}=e;const l=s,c=o;if(n===0)i=0,s=!0,o=!0;else{i=(r-e.minTranslate())/n;const u=Math.abs(r-e.minTranslate())<1,d=Math.abs(r-e.maxTranslate())<1;s=u||i<=0,o=d||i>=1,u&&(i=0),d&&(i=1)}if(t.loop){const u=e.getSlideIndexByData(0),d=e.getSlideIndexByData(e.slides.length-1),f=e.slidesGrid[u],m=e.slidesGrid[d],v=e.slidesGrid[e.slidesGrid.length-1],h=Math.abs(r);h>=f?a=(h-f)/v:a=(h+v-m)/v,a>1&&(a-=1)}Object.assign(e,{progress:i,progressLoop:a,isBeginning:s,isEnd:o}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(r),s&&!l&&e.emit("reachBeginning toEdge"),o&&!c&&e.emit("reachEnd toEdge"),(l&&!s||c&&!o)&&e.emit("fromEdge"),e.emit("progress",i)}function qx(){const r=this,{slides:e,params:t,slidesEl:n,activeIndex:i}=r,s=r.virtual&&t.virtual.enabled,o=l=>En(n,`.${t.slideClass}${l}, swiper-slide${l}`)[0];e.forEach(l=>{l.classList.remove(t.slideActiveClass,t.slideNextClass,t.slidePrevClass)});let a;if(s)if(t.loop){let l=i-r.virtual.slidesBefore;l<0&&(l=r.virtual.slides.length+l),l>=r.virtual.slides.length&&(l-=r.virtual.slides.length),a=o(`[data-swiper-slide-index="${l}"]`)}else a=o(`[data-swiper-slide-index="${i}"]`);else a=e[i];if(a){a.classList.add(t.slideActiveClass);let l=Px(a,`.${t.slideClass}, swiper-slide`)[0];t.loop&&!l&&(l=e[0]),l&&l.classList.add(t.slideNextClass);let c=Lx(a,`.${t.slideClass}, swiper-slide`)[0];t.loop&&!c===0&&(c=e[e.length-1]),c&&c.classList.add(t.slidePrevClass)}r.emitSlidesClasses()}function Xx(r){const{slidesGrid:e,params:t}=r,n=r.rtlTranslate?r.translate:-r.translate;let i;for(let s=0;s<e.length;s+=1)typeof e[s+1]<"u"?n>=e[s]&&n<e[s+1]-(e[s+1]-e[s])/2?i=s:n>=e[s]&&n<e[s+1]&&(i=s+1):n>=e[s]&&(i=s);return t.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function jx(r){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:n,params:i,activeIndex:s,realIndex:o,snapIndex:a}=e;let l=r,c;const u=f=>{let m=f-e.virtual.slidesBefore;return m<0&&(m=e.virtual.slides.length+m),m>=e.virtual.slides.length&&(m-=e.virtual.slides.length),m};if(typeof l>"u"&&(l=Xx(e)),n.indexOf(t)>=0)c=n.indexOf(t);else{const f=Math.min(i.slidesPerGroupSkip,l);c=f+Math.floor((l-f)/i.slidesPerGroup)}if(c>=n.length&&(c=n.length-1),l===s){c!==a&&(e.snapIndex=c,e.emit("snapIndexChange")),e.params.loop&&e.virtual&&e.params.virtual.enabled&&(e.realIndex=u(l));return}let d;e.virtual&&i.virtual.enabled&&i.loop?d=u(l):e.slides[l]?d=parseInt(e.slides[l].getAttribute("data-swiper-slide-index")||l,10):d=l,Object.assign(e,{snapIndex:c,realIndex:d,previousIndex:s,activeIndex:l}),e.emit("activeIndexChange"),e.emit("snapIndexChange"),o!==d&&e.emit("realIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&e.emit("slideChange")}function $x(r){const e=this,t=e.params,n=r.closest(`.${t.slideClass}, swiper-slide`);let i=!1,s;if(n){for(let o=0;o<e.slides.length;o+=1)if(e.slides[o]===n){i=!0,s=o;break}}if(n&&i)e.clickedSlide=n,e.virtual&&e.params.virtual.enabled?e.clickedIndex=parseInt(n.getAttribute("data-swiper-slide-index"),10):e.clickedIndex=s;else{e.clickedSlide=void 0,e.clickedIndex=void 0;return}t.slideToClickedSlide&&e.clickedIndex!==void 0&&e.clickedIndex!==e.activeIndex&&e.slideToClickedSlide()}const Yx={updateSize:Ux,updateSlides:kx,updateAutoHeight:Gx,updateSlidesOffset:Vx,updateSlidesProgress:Wx,updateProgress:Hx,updateSlidesClasses:qx,updateActiveIndex:jx,updateClickedSlide:$x};function Zx(r=this.isHorizontal()?"x":"y"){const e=this,{params:t,rtlTranslate:n,translate:i,wrapperEl:s}=e;if(t.virtualTranslate)return n?-i:i;if(t.cssMode)return i;let o=Cx(s,r);return n&&(o=-o),o||0}function Kx(r,e){const t=this,{rtlTranslate:n,params:i,wrapperEl:s,progress:o}=t;let a=0,l=0;const c=0;t.isHorizontal()?a=n?-r:r:l=r,i.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),i.cssMode?s[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-a:-l:i.virtualTranslate||(s.style.transform=`translate3d(${a}px, ${l}px, ${c}px)`),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?a:l;let u;const d=t.maxTranslate()-t.minTranslate();d===0?u=0:u=(r-t.minTranslate())/d,u!==o&&t.updateProgress(r),t.emit("setTranslate",t.translate,e)}function Jx(){return-this.snapGrid[0]}function Qx(){return-this.snapGrid[this.snapGrid.length-1]}function ey(r=0,e=this.params.speed,t=!0,n=!0,i){const s=this,{params:o,wrapperEl:a}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const l=s.minTranslate(),c=s.maxTranslate();let u;if(n&&r>l?u=l:n&&r<c?u=c:u=r,s.updateProgress(u),o.cssMode){const d=s.isHorizontal();if(e===0)a[d?"scrollLeft":"scrollTop"]=-u;else{if(!s.support.smoothScroll)return Fd({swiper:s,targetPosition:-u,side:d?"left":"top"}),!0;a.scrollTo({[d?"left":"top"]:-u,behavior:"smooth"})}return!0}return e===0?(s.setTransition(0),s.setTranslate(u),t&&(s.emit("beforeTransitionStart",e,i),s.emit("transitionEnd"))):(s.setTransition(e),s.setTranslate(u),t&&(s.emit("beforeTransitionStart",e,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(f){!s||s.destroyed||f.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,t&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}const ty={getTranslate:Zx,setTranslate:Kx,minTranslate:Jx,maxTranslate:Qx,translateTo:ey};function ny(r,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${r}ms`),t.emit("setTransition",r,e)}function Bd({swiper:r,runCallbacks:e,direction:t,step:n}){const{activeIndex:i,previousIndex:s}=r;let o=t;if(o||(i>s?o="next":i<s?o="prev":o="reset"),r.emit(`transition${n}`),e&&i!==s){if(o==="reset"){r.emit(`slideResetTransition${n}`);return}r.emit(`slideChangeTransition${n}`),o==="next"?r.emit(`slideNextTransition${n}`):r.emit(`slidePrevTransition${n}`)}}function iy(r=!0,e){const t=this,{params:n}=t;n.cssMode||(n.autoHeight&&t.updateAutoHeight(),Bd({swiper:t,runCallbacks:r,direction:e,step:"Start"}))}function ry(r=!0,e){const t=this,{params:n}=t;t.animating=!1,!n.cssMode&&(t.setTransition(0),Bd({swiper:t,runCallbacks:r,direction:e,step:"End"}))}const sy={setTransition:ny,transitionStart:iy,transitionEnd:ry};function ay(r=0,e=this.params.speed,t=!0,n,i){typeof r=="string"&&(r=parseInt(r,10));const s=this;let o=r;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:d,rtlTranslate:f,wrapperEl:m,enabled:v}=s;if(s.animating&&a.preventInteractionOnTransition||!v&&!n&&!i)return!1;const h=Math.min(s.params.slidesPerGroupSkip,o);let p=h+Math.floor((o-h)/s.params.slidesPerGroup);p>=l.length&&(p=l.length-1);const g=-l[p];if(a.normalizeSlideIndex)for(let _=0;_<c.length;_+=1){const S=-Math.floor(g*100),b=Math.floor(c[_]*100),w=Math.floor(c[_+1]*100);typeof c[_+1]<"u"?S>=b&&S<w-(w-b)/2?o=_:S>=b&&S<w&&(o=_+1):S>=b&&(o=_)}if(s.initialized&&o!==d&&(!s.allowSlideNext&&g<s.translate&&g<s.minTranslate()||!s.allowSlidePrev&&g>s.translate&&g>s.maxTranslate()&&(d||0)!==o))return!1;o!==(u||0)&&t&&s.emit("beforeSlideChangeStart"),s.updateProgress(g);let x;if(o>d?x="next":o<d?x="prev":x="reset",f&&-g===s.translate||!f&&g===s.translate)return s.updateActiveIndex(o),a.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),a.effect!=="slide"&&s.setTranslate(g),x!=="reset"&&(s.transitionStart(t,x),s.transitionEnd(t,x)),!1;if(a.cssMode){const _=s.isHorizontal(),S=f?g:-g;if(e===0){const b=s.virtual&&s.params.virtual.enabled;b&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),b&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{m[_?"scrollLeft":"scrollTop"]=S})):m[_?"scrollLeft":"scrollTop"]=S,b&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return Fd({swiper:s,targetPosition:S,side:_?"left":"top"}),!0;m.scrollTo({[_?"left":"top"]:S,behavior:"smooth"})}return!0}return s.setTransition(e),s.setTranslate(g),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",e,n),s.transitionStart(t,x),e===0?s.transitionEnd(t,x):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(S){!s||s.destroyed||S.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(t,x))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function oy(r=0,e=this.params.speed,t=!0,n){typeof r=="string"&&(r=parseInt(r,10));const i=this;let s=r;return i.params.loop&&(i.virtual&&i.params.virtual.enabled?s=s+i.virtual.slidesBefore:s=i.getSlideIndexByData(s)),i.slideTo(s,e,t,n)}function ly(r=this.params.speed,e=!0,t){const n=this,{enabled:i,params:s,animating:o}=n;if(!i)return n;let a=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(a=Math.max(n.slidesPerViewDynamic("current",!0),1));const l=n.activeIndex<s.slidesPerGroupSkip?1:a,c=n.virtual&&s.virtual.enabled;if(s.loop){if(o&&!c&&s.loopPreventsSliding)return!1;n.loopFix({direction:"next"}),n._clientLeft=n.wrapperEl.clientLeft}return s.rewind&&n.isEnd?n.slideTo(0,r,e,t):n.slideTo(n.activeIndex+l,r,e,t)}function cy(r=this.params.speed,e=!0,t){const n=this,{params:i,snapGrid:s,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=n;if(!l)return n;const u=n.virtual&&i.virtual.enabled;if(i.loop){if(c&&!u&&i.loopPreventsSliding)return!1;n.loopFix({direction:"prev"}),n._clientLeft=n.wrapperEl.clientLeft}const d=a?n.translate:-n.translate;function f(g){return g<0?-Math.floor(Math.abs(g)):Math.floor(g)}const m=f(d),v=s.map(g=>f(g));let h=s[v.indexOf(m)-1];if(typeof h>"u"&&i.cssMode){let g;s.forEach((x,_)=>{m>=x&&(g=_)}),typeof g<"u"&&(h=s[g>0?g-1:g])}let p=0;if(typeof h<"u"&&(p=o.indexOf(h),p<0&&(p=n.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(p=p-n.slidesPerViewDynamic("previous",!0)+1,p=Math.max(p,0))),i.rewind&&n.isBeginning){const g=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(g,r,e,t)}return n.slideTo(p,r,e,t)}function uy(r=this.params.speed,e=!0,t){const n=this;return n.slideTo(n.activeIndex,r,e,t)}function dy(r=this.params.speed,e=!0,t,n=.5){const i=this;let s=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[a]){const c=i.snapGrid[a],u=i.snapGrid[a+1];l-c>(u-c)*n&&(s+=i.params.slidesPerGroup)}else{const c=i.snapGrid[a-1],u=i.snapGrid[a];l-c<=(u-c)*n&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,r,e,t)}function fy(){const r=this,{params:e,slidesEl:t}=r,n=e.slidesPerView==="auto"?r.slidesPerViewDynamic():e.slidesPerView;let i=r.clickedIndex,s;const o=r.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(r.animating)return;s=parseInt(r.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?i<r.loopedSlides-n/2||i>r.slides.length-r.loopedSlides+n/2?(r.loopFix(),i=r.getSlideIndex(En(t,`${o}[data-swiper-slide-index="${s}"]`)[0]),Io(()=>{r.slideTo(i)})):r.slideTo(i):i>r.slides.length-n?(r.loopFix(),i=r.getSlideIndex(En(t,`${o}[data-swiper-slide-index="${s}"]`)[0]),Io(()=>{r.slideTo(i)})):r.slideTo(i)}else r.slideTo(i)}const hy={slideTo:ay,slideToLoop:oy,slideNext:ly,slidePrev:cy,slideReset:uy,slideToClosest:dy,slideToClickedSlide:fy};function py(r){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;En(n,`.${t.slideClass}, swiper-slide`).forEach((s,o)=>{s.setAttribute("data-swiper-slide-index",o)}),e.loopFix({slideRealIndex:r,direction:t.centeredSlides?void 0:"next"})}function my({slideRealIndex:r,slideTo:e=!0,direction:t,setTranslate:n,activeSlideIndex:i,byController:s,byMousewheel:o}={}){const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:l,allowSlidePrev:c,allowSlideNext:u,slidesEl:d,params:f}=a;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&f.virtual.enabled){e&&(!f.centeredSlides&&a.snapIndex===0?a.slideTo(a.virtual.slides.length,0,!1,!0):f.centeredSlides&&a.snapIndex<f.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0)),a.allowSlidePrev=c,a.allowSlideNext=u,a.emit("loopFix");return}const m=f.slidesPerView==="auto"?a.slidesPerViewDynamic():Math.ceil(parseFloat(f.slidesPerView,10));let v=f.loopedSlides||m;v%f.slidesPerGroup!==0&&(v+=f.slidesPerGroup-v%f.slidesPerGroup),a.loopedSlides=v;const h=[],p=[];let g=a.activeIndex;typeof i>"u"?i=a.getSlideIndex(a.slides.filter(w=>w.classList.contains(f.slideActiveClass))[0]):g=i;const x=t==="next"||!t,_=t==="prev"||!t;let S=0,b=0;if(i<v){S=Math.max(v-i,f.slidesPerGroup);for(let w=0;w<v-i;w+=1){const C=w-Math.floor(w/l.length)*l.length;h.push(l.length-C-1)}}else if(i>a.slides.length-v*2){b=Math.max(i-(a.slides.length-v*2),f.slidesPerGroup);for(let w=0;w<b;w+=1){const C=w-Math.floor(w/l.length)*l.length;p.push(C)}}if(_&&h.forEach(w=>{d.prepend(a.slides[w])}),x&&p.forEach(w=>{d.append(a.slides[w])}),a.recalcSlides(),f.watchSlidesProgress&&a.updateSlidesOffset(),e){if(h.length>0&&_)if(typeof r>"u"){const w=a.slidesGrid[g],y=a.slidesGrid[g+S]-w;o?a.setTranslate(a.translate-y):(a.slideTo(g+S,0,!1,!0),n&&(a.touches[a.isHorizontal()?"startX":"startY"]+=y))}else n&&a.slideToLoop(r,0,!1,!0);else if(p.length>0&&x)if(typeof r>"u"){const w=a.slidesGrid[g],y=a.slidesGrid[g-b]-w;o?a.setTranslate(a.translate-y):(a.slideTo(g-b,0,!1,!0),n&&(a.touches[a.isHorizontal()?"startX":"startY"]+=y))}else a.slideToLoop(r,0,!1,!0)}if(a.allowSlidePrev=c,a.allowSlideNext=u,a.controller&&a.controller.control&&!s){const w={slideRealIndex:r,slideTo:!1,direction:t,setTranslate:n,activeSlideIndex:i,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach(C=>{!C.destroyed&&C.params.loop&&C.loopFix(w)}):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix(w)}a.emit("loopFix")}function gy(){const r=this,{params:e,slidesEl:t}=r;if(!e.loop||r.virtual&&r.params.virtual.enabled)return;r.recalcSlides();const n=[];r.slides.forEach(i=>{const s=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;n[s]=i}),r.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),n.forEach(i=>{t.append(i)}),r.recalcSlides(),r.slideTo(r.realIndex,0)}const _y={loopCreate:py,loopFix:my,loopDestroy:gy};function vy(r){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=r?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function xy(){const r=this;r.params.watchOverflow&&r.isLocked||r.params.cssMode||(r.isElement&&(r.__preventObserver__=!0),r[r.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",r.isElement&&requestAnimationFrame(()=>{r.__preventObserver__=!1}))}const yy={setGrabCursor:vy,unsetGrabCursor:xy};function by(r,e=this){function t(n){if(!n||n===An()||n===Zt())return null;n.assignedSlot&&(n=n.assignedSlot);const i=n.closest(r);return!i&&!n.getRootNode?null:i||t(n.getRootNode().host)}return t(e)}function Sy(r){const e=this,t=An(),n=Zt(),i=e.touchEventsData;i.evCache.push(r);const{params:s,touches:o,enabled:a}=e;if(!a||!s.simulateTouch&&r.pointerType==="mouse"||e.animating&&s.preventInteractionOnTransition)return;!e.animating&&s.cssMode&&s.loop&&e.loopFix();let l=r;l.originalEvent&&(l=l.originalEvent);let c=l.target;if(s.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(c)||"which"in l&&l.which===3||"button"in l&&l.button>0||i.isTouched&&i.isMoved)return;const u=!!s.noSwipingClass&&s.noSwipingClass!=="",d=r.composedPath?r.composedPath():r.path;u&&l.target&&l.target.shadowRoot&&d&&(c=d[0]);const f=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,m=!!(l.target&&l.target.shadowRoot);if(s.noSwiping&&(m?by(f,c):c.closest(f))){e.allowClick=!0;return}if(s.swipeHandler&&!c.closest(s.swipeHandler))return;o.currentX=l.pageX,o.currentY=l.pageY;const v=o.currentX,h=o.currentY,p=s.edgeSwipeDetection||s.iOSEdgeSwipeDetection,g=s.edgeSwipeThreshold||s.iOSEdgeSwipeThreshold;if(p&&(v<=g||v>=n.innerWidth-g))if(p==="prevent")r.preventDefault();else return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=v,o.startY=h,i.touchStartTime=ns(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1);let x=!0;c.matches(i.focusableElements)&&(x=!1,c.nodeName==="SELECT"&&(i.isTouched=!1)),t.activeElement&&t.activeElement.matches(i.focusableElements)&&t.activeElement!==c&&t.activeElement.blur();const _=x&&e.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||_)&&!c.isContentEditable&&l.preventDefault(),e.params.freeMode&&e.params.freeMode.enabled&&e.freeMode&&e.animating&&!s.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",l)}function My(r){const e=An(),t=this,n=t.touchEventsData,{params:i,touches:s,rtlTranslate:o,enabled:a}=t;if(!a||!i.simulateTouch&&r.pointerType==="mouse")return;let l=r;if(l.originalEvent&&(l=l.originalEvent),!n.isTouched){n.startMoving&&n.isScrolling&&t.emit("touchMoveOpposite",l);return}const c=n.evCache.findIndex(w=>w.pointerId===l.pointerId);c>=0&&(n.evCache[c]=l);const u=n.evCache.length>1?n.evCache[0]:l,d=u.pageX,f=u.pageY;if(l.preventedByNestedSwiper){s.startX=d,s.startY=f;return}if(!t.allowTouchMove){l.target.matches(n.focusableElements)||(t.allowClick=!1),n.isTouched&&(Object.assign(s,{startX:d,startY:f,prevX:t.touches.currentX,prevY:t.touches.currentY,currentX:d,currentY:f}),n.touchStartTime=ns());return}if(i.touchReleaseOnEdges&&!i.loop){if(t.isVertical()){if(f<s.startY&&t.translate<=t.maxTranslate()||f>s.startY&&t.translate>=t.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else if(d<s.startX&&t.translate<=t.maxTranslate()||d>s.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&l.target===e.activeElement&&l.target.matches(n.focusableElements)){n.isMoved=!0,t.allowClick=!1;return}if(n.allowTouchCallbacks&&t.emit("touchMove",l),l.targetTouches&&l.targetTouches.length>1)return;s.currentX=d,s.currentY=f;const m=s.currentX-s.startX,v=s.currentY-s.startY;if(t.params.threshold&&Math.sqrt(m**2+v**2)<t.params.threshold)return;if(typeof n.isScrolling>"u"){let w;t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?n.isScrolling=!1:m*m+v*v>=25&&(w=Math.atan2(Math.abs(v),Math.abs(m))*180/Math.PI,n.isScrolling=t.isHorizontal()?w>i.touchAngle:90-w>i.touchAngle)}if(n.isScrolling&&t.emit("touchMoveOpposite",l),typeof n.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(n.startMoving=!0),n.isScrolling||t.zoom&&t.params.zoom&&t.params.zoom.enabled&&n.evCache.length>1){n.isTouched=!1;return}if(!n.startMoving)return;t.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let h=t.isHorizontal()?m:v,p=t.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;i.oneWayMovement&&(h=Math.abs(h)*(o?1:-1),p=Math.abs(p)*(o?1:-1)),s.diff=h,h*=i.touchRatio,o&&(h=-h,p=-p);const g=t.touchesDirection;t.swipeDirection=h>0?"prev":"next",t.touchesDirection=p>0?"prev":"next";const x=t.params.loop&&!i.cssMode;if(!n.isMoved){if(x&&t.loopFix({direction:t.swipeDirection}),n.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const w=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(w)}n.allowMomentumBounce=!1,i.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",l)}let _;n.isMoved&&g!==t.touchesDirection&&x&&Math.abs(h)>=1&&(t.loopFix({direction:t.swipeDirection,setTranslate:!0}),_=!0),t.emit("sliderMove",l),n.isMoved=!0,n.currentTranslate=h+n.startTranslate;let S=!0,b=i.resistanceRatio;if(i.touchReleaseOnEdges&&(b=0),h>0?(x&&!_&&n.currentTranslate>(i.centeredSlides?t.minTranslate()-t.size/2:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>t.minTranslate()&&(S=!1,i.resistance&&(n.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+n.startTranslate+h)**b))):h<0&&(x&&!_&&n.currentTranslate<(i.centeredSlides?t.maxTranslate()+t.size/2:t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(i.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),n.currentTranslate<t.maxTranslate()&&(S=!1,i.resistance&&(n.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-n.startTranslate-h)**b))),S&&(l.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(n.currentTranslate=n.startTranslate),i.threshold>0)if(Math.abs(h)>i.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,n.currentTranslate=n.startTranslate,s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{n.currentTranslate=n.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&t.freeMode||i.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),t.params.freeMode&&i.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(n.currentTranslate),t.setTranslate(n.currentTranslate))}function wy(r){const e=this,t=e.touchEventsData,n=t.evCache.findIndex(_=>_.pointerId===r.pointerId);if(n>=0&&t.evCache.splice(n,1),["pointercancel","pointerout","pointerleave"].includes(r.type)&&!(r.type==="pointercancel"&&(e.browser.isSafari||e.browser.isWebView)))return;const{params:i,touches:s,rtlTranslate:o,slidesGrid:a,enabled:l}=e;if(!l||!i.simulateTouch&&r.pointerType==="mouse")return;let c=r;if(c.originalEvent&&(c=c.originalEvent),t.allowTouchCallbacks&&e.emit("touchEnd",c),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&i.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}i.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const u=ns(),d=u-t.touchStartTime;if(e.allowClick){const _=c.path||c.composedPath&&c.composedPath();e.updateClickedSlide(_&&_[0]||c.target),e.emit("tap click",c),d<300&&u-t.lastClickTime<300&&e.emit("doubleTap doubleClick",c)}if(t.lastClickTime=ns(),Io(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||s.diff===0||t.currentTranslate===t.startTranslate){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let f;if(i.followFinger?f=o?e.translate:-e.translate:f=-t.currentTranslate,i.cssMode)return;if(e.params.freeMode&&i.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:f});return}let m=0,v=e.slidesSizesGrid[0];for(let _=0;_<a.length;_+=_<i.slidesPerGroupSkip?1:i.slidesPerGroup){const S=_<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;typeof a[_+S]<"u"?f>=a[_]&&f<a[_+S]&&(m=_,v=a[_+S]-a[_]):f>=a[_]&&(m=_,v=a[a.length-1]-a[a.length-2])}let h=null,p=null;i.rewind&&(e.isBeginning?p=e.params.virtual&&e.params.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(h=0));const g=(f-a[m])/v,x=m<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(d>i.longSwipesMs){if(!i.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(g>=i.longSwipesRatio?e.slideTo(i.rewind&&e.isEnd?h:m+x):e.slideTo(m)),e.swipeDirection==="prev"&&(g>1-i.longSwipesRatio?e.slideTo(m+x):p!==null&&g<0&&Math.abs(g)>i.longSwipesRatio?e.slideTo(p):e.slideTo(m))}else{if(!i.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(c.target===e.navigation.nextEl||c.target===e.navigation.prevEl)?c.target===e.navigation.nextEl?e.slideTo(m+x):e.slideTo(m):(e.swipeDirection==="next"&&e.slideTo(h!==null?h:m+x),e.swipeDirection==="prev"&&e.slideTo(p!==null?p:m))}}let Zc;function Kc(){const r=this,{params:e,el:t}=r;if(t&&t.offsetWidth===0)return;e.breakpoints&&r.setBreakpoint();const{allowSlideNext:n,allowSlidePrev:i,snapGrid:s}=r,o=r.virtual&&r.params.virtual.enabled;r.allowSlideNext=!0,r.allowSlidePrev=!0,r.updateSize(),r.updateSlides(),r.updateSlidesClasses();const a=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&r.isEnd&&!r.isBeginning&&!r.params.centeredSlides&&!a?r.slideTo(r.slides.length-1,0,!1,!0):r.params.loop&&!o?r.slideToLoop(r.realIndex,0,!1,!0):r.slideTo(r.activeIndex,0,!1,!0),r.autoplay&&r.autoplay.running&&r.autoplay.paused&&(clearTimeout(Zc),Zc=setTimeout(()=>{r.autoplay&&r.autoplay.running&&r.autoplay.paused&&r.autoplay.resume()},500)),r.allowSlidePrev=i,r.allowSlideNext=n,r.params.watchOverflow&&s!==r.snapGrid&&r.checkOverflow()}function Ty(r){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&r.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(r.stopPropagation(),r.stopImmediatePropagation())))}function Ey(){const r=this,{wrapperEl:e,rtlTranslate:t,enabled:n}=r;if(!n)return;r.previousTranslate=r.translate,r.isHorizontal()?r.translate=-e.scrollLeft:r.translate=-e.scrollTop,r.translate===0&&(r.translate=0),r.updateActiveIndex(),r.updateSlidesClasses();let i;const s=r.maxTranslate()-r.minTranslate();s===0?i=0:i=(r.translate-r.minTranslate())/s,i!==r.progress&&r.updateProgress(t?-r.translate:r.translate),r.emit("setTranslate",r.translate,!1)}const Ws=(r,e)=>{if(!r||r.destroyed||!r.params)return;const t=()=>r.isElement?"swiper-slide":`.${r.params.slideClass}`,n=e.closest(t());if(n){const i=n.querySelector(`.${r.params.lazyPreloaderClass}`);i&&i.remove()}};function Cy(r){const e=this;Ws(e,r.target),e.update()}let Jc=!1;function Ay(){}const Ud=(r,e)=>{const t=An(),{params:n,el:i,wrapperEl:s,device:o}=r,a=!!n.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;i[l]("pointerdown",r.onTouchStart,{passive:!1}),t[l]("pointermove",r.onTouchMove,{passive:!1,capture:a}),t[l]("pointerup",r.onTouchEnd,{passive:!0}),t[l]("pointercancel",r.onTouchEnd,{passive:!0}),t[l]("pointerout",r.onTouchEnd,{passive:!0}),t[l]("pointerleave",r.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&i[l]("click",r.onClick,!0),n.cssMode&&s[l]("scroll",r.onScroll),n.updateOnWindowResize?r[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Kc,!0):r[c]("observerUpdate",Kc,!0),i[l]("load",r.onLoad,{capture:!0})};function Ly(){const r=this,e=An(),{params:t}=r;r.onTouchStart=Sy.bind(r),r.onTouchMove=My.bind(r),r.onTouchEnd=wy.bind(r),t.cssMode&&(r.onScroll=Ey.bind(r)),r.onClick=Ty.bind(r),r.onLoad=Cy.bind(r),Jc||(e.addEventListener("touchstart",Ay),Jc=!0),Ud(r,"on")}function Py(){Ud(this,"off")}const Dy={attachEvents:Ly,detachEvents:Py},Qc=(r,e)=>r.grid&&e.grid&&e.grid.rows>1;function Ry(){const r=this,{realIndex:e,initialized:t,params:n,el:i}=r,s=n.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const o=r.getBreakpoint(s,r.params.breakpointsBase,r.el);if(!o||r.currentBreakpoint===o)return;const l=(o in s?s[o]:void 0)||r.originalParams,c=Qc(r,n),u=Qc(r,l),d=n.enabled;c&&!u?(i.classList.remove(`${n.containerModifierClass}grid`,`${n.containerModifierClass}grid-column`),r.emitContainerClasses()):!c&&u&&(i.classList.add(`${n.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&n.grid.fill==="column")&&i.classList.add(`${n.containerModifierClass}grid-column`),r.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(h=>{const p=n[h]&&n[h].enabled,g=l[h]&&l[h].enabled;p&&!g&&r[h].disable(),!p&&g&&r[h].enable()});const f=l.direction&&l.direction!==n.direction,m=n.loop&&(l.slidesPerView!==n.slidesPerView||f);f&&t&&r.changeDirection(),qt(r.params,l);const v=r.params.enabled;Object.assign(r,{allowTouchMove:r.params.allowTouchMove,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev}),d&&!v?r.disable():!d&&v&&r.enable(),r.currentBreakpoint=o,r.emit("_beforeBreakpoint",l),m&&t&&(r.loopDestroy(),r.loopCreate(e),r.updateSlides()),r.emit("breakpoint",l)}function Iy(r,e="window",t){if(!r||e==="container"&&!t)return;let n=!1;const i=Zt(),s=e==="window"?i.innerHeight:t.clientHeight,o=Object.keys(r).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:s*l,point:a}}return{value:a,point:a}});o.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<o.length;a+=1){const{point:l,value:c}=o[a];e==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(n=l):c<=t.clientWidth&&(n=l)}return n||"max"}const Oy={setBreakpoint:Ry,getBreakpoint:Iy};function Fy(r,e){const t=[];return r.forEach(n=>{typeof n=="object"?Object.keys(n).forEach(i=>{n[i]&&t.push(e+i)}):typeof n=="string"&&t.push(e+n)}),t}function zy(){const r=this,{classNames:e,params:t,rtl:n,el:i,device:s}=r,o=Fy(["initialized",t.direction,{"free-mode":r.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:n},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...o),i.classList.add(...e),r.emitContainerClasses()}function Ny(){const r=this,{el:e,classNames:t}=r;e.classList.remove(...t),r.emitContainerClasses()}const By={addClasses:zy,removeClasses:Ny};function Uy(){const r=this,{isLocked:e,params:t}=r,{slidesOffsetBefore:n}=t;if(n){const i=r.slides.length-1,s=r.slidesGrid[i]+r.slidesSizesGrid[i]+n*2;r.isLocked=r.size>s}else r.isLocked=r.snapGrid.length===1;t.allowSlideNext===!0&&(r.allowSlideNext=!r.isLocked),t.allowSlidePrev===!0&&(r.allowSlidePrev=!r.isLocked),e&&e!==r.isLocked&&(r.isEnd=!1),e!==r.isLocked&&r.emit(r.isLocked?"lock":"unlock")}const ky={checkOverflow:Uy},eu={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",runCallbacksOnInit:!0,_emitClasses:!1};function Gy(r,e){return function(n={}){const i=Object.keys(n)[0],s=n[i];if(typeof s!="object"||s===null){qt(e,n);return}if(["navigation","pagination","scrollbar"].indexOf(i)>=0&&r[i]===!0&&(r[i]={auto:!0}),!(i in r&&"enabled"in s)){qt(e,n);return}r[i]===!0&&(r[i]={enabled:!0}),typeof r[i]=="object"&&!("enabled"in r[i])&&(r[i].enabled=!0),r[i]||(r[i]={enabled:!1}),qt(e,n)}}const ao={eventsEmitter:Bx,update:Yx,translate:ty,transition:sy,slide:hy,loop:_y,grabCursor:yy,events:Dy,breakpoints:Oy,checkOverflow:ky,classes:By},oo={};let rs=class Nn{constructor(...e){let t,n;e.length===1&&e[0].constructor&&Object.prototype.toString.call(e[0]).slice(8,-1)==="Object"?n=e[0]:[t,n]=e,n||(n={}),n=qt({},n),t&&!n.el&&(n.el=t);const i=An();if(n.el&&typeof n.el=="string"&&i.querySelectorAll(n.el).length>1){const l=[];return i.querySelectorAll(n.el).forEach(c=>{const u=qt({},n,{el:c});l.push(new Nn(u))}),l}const s=this;s.__swiper__=!0,s.support=Nd(),s.device=Ix({userAgent:n.userAgent}),s.browser=Fx(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__],n.modules&&Array.isArray(n.modules)&&s.modules.push(...n.modules);const o={};s.modules.forEach(l=>{l({params:n,swiper:s,extendParams:Gy(n,o),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})});const a=qt({},eu,o);return s.params=qt({},a,oo,n),s.originalParams=qt({},s.params),s.passedParams=qt({},n),s.params&&s.params.on&&Object.keys(s.params.on).forEach(l=>{s.on(l,s.params.on[l])}),s.params&&s.params.onAny&&s.onAny(s.params.onAny),Object.assign(s,{enabled:s.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return s.params.direction==="horizontal"},isVertical(){return s.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:ns(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}getSlideIndex(e){const{slidesEl:t,params:n}=this,i=En(t,`.${n.slideClass}, swiper-slide`),s=is(i[0]);return is(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:t,params:n}=e;e.slides=En(t,`.${n.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const i=n.minTranslate(),o=(n.maxTranslate()-i)*e+i;n.translateTo(o,typeof t>"u"?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(n=>n.indexOf("swiper")===0||n.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(n=>n.indexOf("swiper-slide")===0||n.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(n=>{const i=e.getSlideClasses(n);t.push({slideEl:n,classNames:i}),e.emit("_slideClass",n,i)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const n=this,{params:i,slides:s,slidesGrid:o,slidesSizesGrid:a,size:l,activeIndex:c}=n;let u=1;if(i.centeredSlides){let d=s[c].swiperSlideSize,f;for(let m=c+1;m<s.length;m+=1)s[m]&&!f&&(d+=s[m].swiperSlideSize,u+=1,d>l&&(f=!0));for(let m=c-1;m>=0;m-=1)s[m]&&!f&&(d+=s[m].swiperSlideSize,u+=1,d>l&&(f=!0))}else if(e==="current")for(let d=c+1;d<s.length;d+=1)(t?o[d]+a[d]-o[c]<l:o[d]-o[c]<l)&&(u+=1);else for(let d=c-1;d>=0;d-=1)o[c]-o[d]<l&&(u+=1);return u}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&Ws(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function i(){const o=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let s;e.params.freeMode&&e.params.freeMode.enabled?(i(),e.params.autoHeight&&e.updateAutoHeight()):((e.params.slidesPerView==="auto"||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?s=e.slideTo(e.slides.length-1,0,!1,!0):s=e.slideTo(e.activeIndex,0,!1,!0),s||i()),n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const n=this,i=n.params.direction;return e||(e=i==="horizontal"?"vertical":"horizontal"),e===i||e!=="horizontal"&&e!=="vertical"||(n.el.classList.remove(`${n.params.containerModifierClass}${i}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach(s=>{e==="vertical"?s.style.width="":s.style.height=""}),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if(typeof n=="string"&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.shadowEl&&(t.isElement=!0);const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(i()):En(n,i())[0])();return!o&&t.params.createElements&&(o=al("div",t.params.wrapperClass),n.append(o),En(n,`.${t.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(t,{el:n,wrapperEl:o,slidesEl:t.isElement?n:o,mounted:!0,rtl:n.dir.toLowerCase()==="rtl"||ni(n,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(n.dir.toLowerCase()==="rtl"||ni(n,"direction")==="rtl"),wrongRTL:ni(o,"display")==="-webkit-box"}),!0}init(e){const t=this;return t.initialized||t.mount(e)===!1||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(i=>{i.complete?Ws(t,i):i.addEventListener("load",s=>{Ws(t,s.target)})}),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t}destroy(e=!0,t=!0){const n=this,{params:i,el:s,wrapperEl:o,slides:a}=n;return typeof n.params>"u"||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),i.loop&&n.loopDestroy(),t&&(n.removeClasses(),s.removeAttribute("style"),o.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),n.emit("destroy"),Object.keys(n.eventsListeners).forEach(l=>{n.off(l)}),e!==!1&&(n.el.swiper=null,Tx(n)),n.destroyed=!0),null}static extendDefaults(e){qt(oo,e)}static get extendedDefaults(){return oo}static get defaults(){return eu}static installModule(e){Nn.prototype.__modules__||(Nn.prototype.__modules__=[]);const t=Nn.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>Nn.installModule(t)),Nn):(Nn.installModule(e),Nn)}};Object.keys(ao).forEach(r=>{Object.keys(ao[r]).forEach(e=>{rs.prototype[e]=ao[r][e]})});rs.use([zx,Nx]);function kd(r,e,t,n){return r.params.createElements&&Object.keys(n).forEach(i=>{if(!t[i]&&t.auto===!0){let s=En(r.el,`.${n[i]}`)[0];s||(s=al("div",n[i]),s.className=n[i],r.el.append(s)),t[i]=s,e[i]=s}}),t}function Vy({swiper:r,extendParams:e,on:t,emit:n}){e({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),r.navigation={nextEl:null,prevEl:null};const i=v=>(Array.isArray(v)||(v=[v].filter(h=>!!h)),v);function s(v){let h;return v&&typeof v=="string"&&r.isElement&&(h=r.el.shadowRoot.querySelector(v),h)?h:(v&&(typeof v=="string"&&(h=[...document.querySelectorAll(v)]),r.params.uniqueNavElements&&typeof v=="string"&&h.length>1&&r.el.querySelectorAll(v).length===1&&(h=r.el.querySelector(v))),v&&!h?v:h)}function o(v,h){const p=r.params.navigation;v=i(v),v.forEach(g=>{g&&(g.classList[h?"add":"remove"](...p.disabledClass.split(" ")),g.tagName==="BUTTON"&&(g.disabled=h),r.params.watchOverflow&&r.enabled&&g.classList[r.isLocked?"add":"remove"](p.lockClass))})}function a(){const{nextEl:v,prevEl:h}=r.navigation;if(r.params.loop){o(h,!1),o(v,!1);return}o(h,r.isBeginning&&!r.params.rewind),o(v,r.isEnd&&!r.params.rewind)}function l(v){v.preventDefault(),!(r.isBeginning&&!r.params.loop&&!r.params.rewind)&&(r.slidePrev(),n("navigationPrev"))}function c(v){v.preventDefault(),!(r.isEnd&&!r.params.loop&&!r.params.rewind)&&(r.slideNext(),n("navigationNext"))}function u(){const v=r.params.navigation;if(r.params.navigation=kd(r,r.originalParams.navigation,r.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(v.nextEl||v.prevEl))return;let h=s(v.nextEl),p=s(v.prevEl);Object.assign(r.navigation,{nextEl:h,prevEl:p}),h=i(h),p=i(p);const g=(x,_)=>{x&&x.addEventListener("click",_==="next"?c:l),!r.enabled&&x&&x.classList.add(...v.lockClass.split(" "))};h.forEach(x=>g(x,"next")),p.forEach(x=>g(x,"prev"))}function d(){let{nextEl:v,prevEl:h}=r.navigation;v=i(v),h=i(h);const p=(g,x)=>{g.removeEventListener("click",x==="next"?c:l),g.classList.remove(...r.params.navigation.disabledClass.split(" "))};v.forEach(g=>p(g,"next")),h.forEach(g=>p(g,"prev"))}t("init",()=>{r.params.navigation.enabled===!1?m():(u(),a())}),t("toEdge fromEdge lock unlock",()=>{a()}),t("destroy",()=>{d()}),t("enable disable",()=>{let{nextEl:v,prevEl:h}=r.navigation;v=i(v),h=i(h),[...v,...h].filter(p=>!!p).forEach(p=>p.classList[r.enabled?"remove":"add"](r.params.navigation.lockClass))}),t("click",(v,h)=>{let{nextEl:p,prevEl:g}=r.navigation;p=i(p),g=i(g);const x=h.target;if(r.params.navigation.hideOnClick&&!g.includes(x)&&!p.includes(x)){if(r.pagination&&r.params.pagination&&r.params.pagination.clickable&&(r.pagination.el===x||r.pagination.el.contains(x)))return;let _;p.length?_=p[0].classList.contains(r.params.navigation.hiddenClass):g.length&&(_=g[0].classList.contains(r.params.navigation.hiddenClass)),n(_===!0?"navigationShow":"navigationHide"),[...p,...g].filter(S=>!!S).forEach(S=>S.classList.toggle(r.params.navigation.hiddenClass))}});const f=()=>{r.el.classList.remove(...r.params.navigation.navigationDisabledClass.split(" ")),u(),a()},m=()=>{r.el.classList.add(...r.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(r.navigation,{enable:f,disable:m,update:a,init:u,destroy:d})}function Zn(r=""){return`.${r.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Wy({swiper:r,extendParams:e,on:t,emit:n}){const i="swiper-pagination";e({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:g=>g,formatFractionTotal:g=>g,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),r.pagination={el:null,bullets:[]};let s,o=0;const a=g=>(Array.isArray(g)||(g=[g].filter(x=>!!x)),g);function l(){return!r.params.pagination.el||!r.pagination.el||Array.isArray(r.pagination.el)&&r.pagination.el.length===0}function c(g,x){const{bulletActiveClass:_}=r.params.pagination;g&&(g=g[`${x==="prev"?"previous":"next"}ElementSibling`],g&&(g.classList.add(`${_}-${x}`),g=g[`${x==="prev"?"previous":"next"}ElementSibling`],g&&g.classList.add(`${_}-${x}-${x}`)))}function u(g){const x=g.target.closest(Zn(r.params.pagination.bulletClass));if(!x)return;g.preventDefault();const _=is(x)*r.params.slidesPerGroup;if(r.params.loop){if(r.realIndex===_)return;(_<r.loopedSlides||_>r.slides.length-r.loopedSlides)&&r.loopFix({direction:_<r.loopedSlides?"prev":"next",activeSlideIndex:_,slideTo:!1}),r.slideToLoop(_)}else r.slideTo(_)}function d(){const g=r.rtl,x=r.params.pagination;if(l())return;let _=r.pagination.el;_=a(_);let S;const b=r.virtual&&r.params.virtual.enabled?r.virtual.slides.length:r.slides.length,w=r.params.loop?Math.ceil(b/r.params.slidesPerGroup):r.snapGrid.length;if(r.params.loop?S=r.params.slidesPerGroup>1?Math.floor(r.realIndex/r.params.slidesPerGroup):r.realIndex:typeof r.snapIndex<"u"?S=r.snapIndex:S=r.activeIndex||0,x.type==="bullets"&&r.pagination.bullets&&r.pagination.bullets.length>0){const C=r.pagination.bullets;let y,M,R;if(x.dynamicBullets&&(s=Oo(C[0],r.isHorizontal()?"width":"height",!0),_.forEach(D=>{D.style[r.isHorizontal()?"width":"height"]=`${s*(x.dynamicMainBullets+4)}px`}),x.dynamicMainBullets>1&&r.previousIndex!==void 0&&(o+=S-(r.previousIndex||0),o>x.dynamicMainBullets-1?o=x.dynamicMainBullets-1:o<0&&(o=0)),y=Math.max(S-o,0),M=y+(Math.min(C.length,x.dynamicMainBullets)-1),R=(M+y)/2),C.forEach(D=>{const z=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(E=>`${x.bulletActiveClass}${E}`)].map(E=>typeof E=="string"&&E.includes(" ")?E.split(" "):E).flat();D.classList.remove(...z)}),_.length>1)C.forEach(D=>{const z=is(D);z===S&&D.classList.add(...x.bulletActiveClass.split(" ")),x.dynamicBullets&&(z>=y&&z<=M&&D.classList.add(...`${x.bulletActiveClass}-main`.split(" ")),z===y&&c(D,"prev"),z===M&&c(D,"next"))});else{const D=C[S];if(D&&D.classList.add(...x.bulletActiveClass.split(" ")),x.dynamicBullets){const z=C[y],E=C[M];for(let L=y;L<=M;L+=1)C[L]&&C[L].classList.add(...`${x.bulletActiveClass}-main`.split(" "));c(z,"prev"),c(E,"next")}}if(x.dynamicBullets){const D=Math.min(C.length,x.dynamicMainBullets+4),z=(s*D-s)/2-R*s,E=g?"right":"left";C.forEach(L=>{L.style[r.isHorizontal()?E:"top"]=`${z}px`})}}_.forEach((C,y)=>{if(x.type==="fraction"&&(C.querySelectorAll(Zn(x.currentClass)).forEach(M=>{M.textContent=x.formatFractionCurrent(S+1)}),C.querySelectorAll(Zn(x.totalClass)).forEach(M=>{M.textContent=x.formatFractionTotal(w)})),x.type==="progressbar"){let M;x.progressbarOpposite?M=r.isHorizontal()?"vertical":"horizontal":M=r.isHorizontal()?"horizontal":"vertical";const R=(S+1)/w;let D=1,z=1;M==="horizontal"?D=R:z=R,C.querySelectorAll(Zn(x.progressbarFillClass)).forEach(E=>{E.style.transform=`translate3d(0,0,0) scaleX(${D}) scaleY(${z})`,E.style.transitionDuration=`${r.params.speed}ms`})}x.type==="custom"&&x.renderCustom?(C.innerHTML=x.renderCustom(r,S+1,w),y===0&&n("paginationRender",C)):(y===0&&n("paginationRender",C),n("paginationUpdate",C)),r.params.watchOverflow&&r.enabled&&C.classList[r.isLocked?"add":"remove"](x.lockClass)})}function f(){const g=r.params.pagination;if(l())return;const x=r.virtual&&r.params.virtual.enabled?r.virtual.slides.length:r.slides.length;let _=r.pagination.el;_=a(_);let S="";if(g.type==="bullets"){let b=r.params.loop?Math.ceil(x/r.params.slidesPerGroup):r.snapGrid.length;r.params.freeMode&&r.params.freeMode.enabled&&b>x&&(b=x);for(let w=0;w<b;w+=1)g.renderBullet?S+=g.renderBullet.call(r,w,g.bulletClass):S+=`<${g.bulletElement} class="${g.bulletClass}"></${g.bulletElement}>`}g.type==="fraction"&&(g.renderFraction?S=g.renderFraction.call(r,g.currentClass,g.totalClass):S=`<span class="${g.currentClass}"></span> / <span class="${g.totalClass}"></span>`),g.type==="progressbar"&&(g.renderProgressbar?S=g.renderProgressbar.call(r,g.progressbarFillClass):S=`<span class="${g.progressbarFillClass}"></span>`),r.pagination.bullets=[],_.forEach(b=>{g.type!=="custom"&&(b.innerHTML=S||""),g.type==="bullets"&&r.pagination.bullets.push(...b.querySelectorAll(Zn(g.bulletClass)))}),g.type!=="custom"&&n("paginationRender",_[0])}function m(){r.params.pagination=kd(r,r.originalParams.pagination,r.params.pagination,{el:"swiper-pagination"});const g=r.params.pagination;if(!g.el)return;let x;typeof g.el=="string"&&r.isElement&&(x=r.el.shadowRoot.querySelector(g.el)),!x&&typeof g.el=="string"&&(x=[...document.querySelectorAll(g.el)]),x||(x=g.el),!(!x||x.length===0)&&(r.params.uniqueNavElements&&typeof g.el=="string"&&Array.isArray(x)&&x.length>1&&(x=[...r.el.querySelectorAll(g.el)],x.length>1&&(x=x.filter(_=>zd(_,".swiper")[0]===r.el)[0])),Array.isArray(x)&&x.length===1&&(x=x[0]),Object.assign(r.pagination,{el:x}),x=a(x),x.forEach(_=>{g.type==="bullets"&&g.clickable&&_.classList.add(g.clickableClass),_.classList.add(g.modifierClass+g.type),_.classList.add(r.isHorizontal()?g.horizontalClass:g.verticalClass),g.type==="bullets"&&g.dynamicBullets&&(_.classList.add(`${g.modifierClass}${g.type}-dynamic`),o=0,g.dynamicMainBullets<1&&(g.dynamicMainBullets=1)),g.type==="progressbar"&&g.progressbarOpposite&&_.classList.add(g.progressbarOppositeClass),g.clickable&&_.addEventListener("click",u),r.enabled||_.classList.add(g.lockClass)}))}function v(){const g=r.params.pagination;if(l())return;let x=r.pagination.el;x&&(x=a(x),x.forEach(_=>{_.classList.remove(g.hiddenClass),_.classList.remove(g.modifierClass+g.type),_.classList.remove(r.isHorizontal()?g.horizontalClass:g.verticalClass),g.clickable&&_.removeEventListener("click",u)})),r.pagination.bullets&&r.pagination.bullets.forEach(_=>_.classList.remove(...g.bulletActiveClass.split(" ")))}t("init",()=>{r.params.pagination.enabled===!1?p():(m(),f(),d())}),t("activeIndexChange",()=>{typeof r.snapIndex>"u"&&d()}),t("snapIndexChange",()=>{d()}),t("snapGridLengthChange",()=>{f(),d()}),t("destroy",()=>{v()}),t("enable disable",()=>{let{el:g}=r.pagination;g&&(g=a(g),g.forEach(x=>x.classList[r.enabled?"remove":"add"](r.params.pagination.lockClass)))}),t("lock unlock",()=>{d()}),t("click",(g,x)=>{const _=x.target;let{el:S}=r.pagination;if(Array.isArray(S)||(S=[S].filter(b=>!!b)),r.params.pagination.el&&r.params.pagination.hideOnClick&&S&&S.length>0&&!_.classList.contains(r.params.pagination.bulletClass)){if(r.navigation&&(r.navigation.nextEl&&_===r.navigation.nextEl||r.navigation.prevEl&&_===r.navigation.prevEl))return;const b=S[0].classList.contains(r.params.pagination.hiddenClass);n(b===!0?"paginationShow":"paginationHide"),S.forEach(w=>w.classList.toggle(r.params.pagination.hiddenClass))}});const h=()=>{r.el.classList.remove(r.params.pagination.paginationDisabledClass);let{el:g}=r.pagination;g&&(g=a(g),g.forEach(x=>x.classList.remove(r.params.pagination.paginationDisabledClass))),m(),f(),d()},p=()=>{r.el.classList.add(r.params.pagination.paginationDisabledClass);let{el:g}=r.pagination;g&&(g=a(g),g.forEach(x=>x.classList.add(r.params.pagination.paginationDisabledClass))),v()};Object.assign(r.pagination,{enable:h,disable:p,render:f,update:d,init:m,destroy:v})}function Hy({swiper:r,extendParams:e,on:t}){e({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),r.a11y={clicked:!1};let n=null;function i(E){const L=n;L.length!==0&&(L.innerHTML="",L.innerHTML=E)}const s=E=>(Array.isArray(E)||(E=[E].filter(L=>!!L)),E);function o(E=16){const L=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(E).replace(/x/g,L)}function a(E){E=s(E),E.forEach(L=>{L.setAttribute("tabIndex","0")})}function l(E){E=s(E),E.forEach(L=>{L.setAttribute("tabIndex","-1")})}function c(E,L){E=s(E),E.forEach(O=>{O.setAttribute("role",L)})}function u(E,L){E=s(E),E.forEach(O=>{O.setAttribute("aria-roledescription",L)})}function d(E,L){E=s(E),E.forEach(O=>{O.setAttribute("aria-controls",L)})}function f(E,L){E=s(E),E.forEach(O=>{O.setAttribute("aria-label",L)})}function m(E,L){E=s(E),E.forEach(O=>{O.setAttribute("id",L)})}function v(E,L){E=s(E),E.forEach(O=>{O.setAttribute("aria-live",L)})}function h(E){E=s(E),E.forEach(L=>{L.setAttribute("aria-disabled",!0)})}function p(E){E=s(E),E.forEach(L=>{L.setAttribute("aria-disabled",!1)})}function g(E){if(E.keyCode!==13&&E.keyCode!==32)return;const L=r.params.a11y,O=E.target;r.pagination&&r.pagination.el&&(O===r.pagination.el||r.pagination.el.contains(E.target))&&!E.target.matches(Zn(r.params.pagination.bulletClass))||(r.navigation&&r.navigation.nextEl&&O===r.navigation.nextEl&&(r.isEnd&&!r.params.loop||r.slideNext(),r.isEnd?i(L.lastSlideMessage):i(L.nextSlideMessage)),r.navigation&&r.navigation.prevEl&&O===r.navigation.prevEl&&(r.isBeginning&&!r.params.loop||r.slidePrev(),r.isBeginning?i(L.firstSlideMessage):i(L.prevSlideMessage)),r.pagination&&O.matches(Zn(r.params.pagination.bulletClass))&&O.click())}function x(){if(r.params.loop||r.params.rewind||!r.navigation)return;const{nextEl:E,prevEl:L}=r.navigation;L&&(r.isBeginning?(h(L),l(L)):(p(L),a(L))),E&&(r.isEnd?(h(E),l(E)):(p(E),a(E)))}function _(){return r.pagination&&r.pagination.bullets&&r.pagination.bullets.length}function S(){return _()&&r.params.pagination.clickable}function b(){const E=r.params.a11y;_()&&r.pagination.bullets.forEach(L=>{r.params.pagination.clickable&&(a(L),r.params.pagination.renderBullet||(c(L,"button"),f(L,E.paginationBulletMessage.replace(/\{\{index\}\}/,is(L)+1)))),L.matches(Zn(r.params.pagination.bulletActiveClass))?L.setAttribute("aria-current","true"):L.removeAttribute("aria-current")})}const w=(E,L,O)=>{a(E),E.tagName!=="BUTTON"&&(c(E,"button"),E.addEventListener("keydown",g)),f(E,O),d(E,L)},C=()=>{r.a11y.clicked=!0},y=()=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{r.destroyed||(r.a11y.clicked=!1)})})},M=E=>{if(r.a11y.clicked)return;const L=E.target.closest(`.${r.params.slideClass}, swiper-slide`);if(!L||!r.slides.includes(L))return;const O=r.slides.indexOf(L)===r.activeIndex,G=r.params.watchSlidesProgress&&r.visibleSlides&&r.visibleSlides.includes(L);O||G||E.sourceCapabilities&&E.sourceCapabilities.firesTouchEvents||(r.isHorizontal()?r.el.scrollLeft=0:r.el.scrollTop=0,r.slideTo(r.slides.indexOf(L),0))},R=()=>{const E=r.params.a11y;E.itemRoleDescriptionMessage&&u(r.slides,E.itemRoleDescriptionMessage),E.slideRole&&c(r.slides,E.slideRole);const L=r.slides.length;E.slideLabelMessage&&r.slides.forEach((O,G)=>{const q=r.params.loop?parseInt(O.getAttribute("data-swiper-slide-index"),10):G,V=E.slideLabelMessage.replace(/\{\{index\}\}/,q+1).replace(/\{\{slidesLength\}\}/,L);f(O,V)})},D=()=>{const E=r.params.a11y;r.el.append(n);const L=r.el;E.containerRoleDescriptionMessage&&u(L,E.containerRoleDescriptionMessage),E.containerMessage&&f(L,E.containerMessage);const O=r.wrapperEl,G=E.id||O.getAttribute("id")||`swiper-wrapper-${o(16)}`,q=r.params.autoplay&&r.params.autoplay.enabled?"off":"polite";m(O,G),v(O,q),R();let{nextEl:V,prevEl:Y}=r.navigation?r.navigation:{};V=s(V),Y=s(Y),V&&V.forEach(K=>w(K,G,E.nextSlideMessage)),Y&&Y.forEach(K=>w(K,G,E.prevSlideMessage)),S()&&(Array.isArray(r.pagination.el)?r.pagination.el:[r.pagination.el]).forEach(se=>{se.addEventListener("keydown",g)}),r.el.addEventListener("focus",M,!0),r.el.addEventListener("pointerdown",C,!0),r.el.addEventListener("pointerup",y,!0)};function z(){n&&n.length>0&&n.remove();let{nextEl:E,prevEl:L}=r.navigation?r.navigation:{};E=s(E),L=s(L),E&&E.forEach(O=>O.removeEventListener("keydown",g)),L&&L.forEach(O=>O.removeEventListener("keydown",g)),S()&&(Array.isArray(r.pagination.el)?r.pagination.el:[r.pagination.el]).forEach(G=>{G.removeEventListener("keydown",g)}),r.el.removeEventListener("focus",M,!0),r.el.removeEventListener("pointerdown",C,!0),r.el.removeEventListener("pointerup",y,!0)}t("beforeInit",()=>{n=al("span",r.params.a11y.notificationClass),n.setAttribute("aria-live","assertive"),n.setAttribute("aria-atomic","true"),r.isElement&&n.setAttribute("slot","container-end")}),t("afterInit",()=>{r.params.a11y.enabled&&D()}),t("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{r.params.a11y.enabled&&R()}),t("fromEdge toEdge afterInit lock unlock",()=>{r.params.a11y.enabled&&x()}),t("paginationUpdate",()=>{r.params.a11y.enabled&&b()}),t("destroy",()=>{r.params.a11y.enabled&&z()})}function qy({swiper:r,extendParams:e,on:t,emit:n,params:i}){r.autoplay={running:!1,paused:!1,timeLeft:0},e({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let s,o,a=i&&i.autoplay?i.autoplay.delay:3e3,l=i&&i.autoplay?i.autoplay.delay:3e3,c,u=new Date().getTime,d,f,m,v,h,p;function g(G){!r||r.destroyed||!r.wrapperEl||G.target===r.wrapperEl&&(r.wrapperEl.removeEventListener("transitionend",g),y())}const x=()=>{if(r.destroyed||!r.autoplay.running)return;r.autoplay.paused?d=!0:d&&(l=c,d=!1);const G=r.autoplay.paused?c:u+l-new Date().getTime();r.autoplay.timeLeft=G,n("autoplayTimeLeft",G,G/a),o=requestAnimationFrame(()=>{x()})},_=()=>{let G;return r.virtual&&r.params.virtual.enabled?G=r.slides.filter(V=>V.classList.contains("swiper-slide-active"))[0]:G=r.slides[r.activeIndex],G?parseInt(G.getAttribute("data-swiper-autoplay"),10):void 0},S=G=>{if(r.destroyed||!r.autoplay.running)return;cancelAnimationFrame(o),x();let q=typeof G>"u"?r.params.autoplay.delay:G;a=r.params.autoplay.delay,l=r.params.autoplay.delay;const V=_();!Number.isNaN(V)&&V>0&&typeof G>"u"&&(q=V,a=V,l=V),c=q;const Y=r.params.speed,K=()=>{!r||r.destroyed||(r.params.autoplay.reverseDirection?!r.isBeginning||r.params.loop||r.params.rewind?(r.slidePrev(Y,!0,!0),n("autoplay")):r.params.autoplay.stopOnLastSlide||(r.slideTo(r.slides.length-1,Y,!0,!0),n("autoplay")):!r.isEnd||r.params.loop||r.params.rewind?(r.slideNext(Y,!0,!0),n("autoplay")):r.params.autoplay.stopOnLastSlide||(r.slideTo(0,Y,!0,!0),n("autoplay")),r.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{S()})))};return q>0?(clearTimeout(s),s=setTimeout(()=>{K()},q)):requestAnimationFrame(()=>{K()}),q},b=()=>{r.autoplay.running=!0,S(),n("autoplayStart")},w=()=>{r.autoplay.running=!1,clearTimeout(s),cancelAnimationFrame(o),n("autoplayStop")},C=(G,q)=>{if(r.destroyed||!r.autoplay.running)return;clearTimeout(s),G||(p=!0);const V=()=>{n("autoplayPause"),r.params.autoplay.waitForTransition?r.wrapperEl.addEventListener("transitionend",g):y()};if(r.autoplay.paused=!0,q){h&&(c=r.params.autoplay.delay),h=!1,V();return}c=(c||r.params.autoplay.delay)-(new Date().getTime()-u),!(r.isEnd&&c<0&&!r.params.loop)&&(c<0&&(c=0),V())},y=()=>{r.isEnd&&c<0&&!r.params.loop||r.destroyed||!r.autoplay.running||(u=new Date().getTime(),p?(p=!1,S(c)):S(),r.autoplay.paused=!1,n("autoplayResume"))},M=()=>{if(r.destroyed||!r.autoplay.running)return;const G=An();G.visibilityState==="hidden"&&(p=!0,C(!0)),G.visibilityState==="visible"&&y()},R=G=>{G.pointerType==="mouse"&&(p=!0,C(!0))},D=G=>{G.pointerType==="mouse"&&r.autoplay.paused&&y()},z=()=>{r.params.autoplay.pauseOnMouseEnter&&(r.el.addEventListener("pointerenter",R),r.el.addEventListener("pointerleave",D))},E=()=>{r.el.removeEventListener("pointerenter",R),r.el.removeEventListener("pointerleave",D)},L=()=>{An().addEventListener("visibilitychange",M)},O=()=>{An().removeEventListener("visibilitychange",M)};t("init",()=>{r.params.autoplay.enabled&&(z(),L(),u=new Date().getTime(),b())}),t("destroy",()=>{E(),O(),r.autoplay.running&&w()}),t("beforeTransitionStart",(G,q,V)=>{r.destroyed||!r.autoplay.running||(V||!r.params.autoplay.disableOnInteraction?C(!0,!0):w())}),t("sliderFirstMove",()=>{if(!(r.destroyed||!r.autoplay.running)){if(r.params.autoplay.disableOnInteraction){w();return}f=!0,m=!1,p=!1,v=setTimeout(()=>{p=!0,m=!0,C(!0)},200)}}),t("touchEnd",()=>{if(!(r.destroyed||!r.autoplay.running||!f)){if(clearTimeout(v),clearTimeout(s),r.params.autoplay.disableOnInteraction){m=!1,f=!1;return}m&&r.params.cssMode&&y(),m=!1,f=!1}}),t("slideChange",()=>{r.destroyed||!r.autoplay.running||(h=!0)}),Object.assign(r.autoplay,{start:b,stop:w,pause:C,resume:y})}function Ii(r){return typeof r=="object"&&r!==null&&r.constructor&&Object.prototype.toString.call(r).slice(8,-1)==="Object"}function ii(r,e){const t=["__proto__","constructor","prototype"];Object.keys(e).filter(n=>t.indexOf(n)<0).forEach(n=>{typeof r[n]>"u"?r[n]=e[n]:Ii(e[n])&&Ii(r[n])&&Object.keys(e[n]).length>0?e[n].__swiper__?r[n]=e[n]:ii(r[n],e[n]):r[n]=e[n]})}function Gd(r={}){return r.navigation&&typeof r.navigation.nextEl>"u"&&typeof r.navigation.prevEl>"u"}function Vd(r={}){return r.pagination&&typeof r.pagination.el>"u"}function Wd(r={}){return r.scrollbar&&typeof r.scrollbar.el>"u"}function Hd(r=""){const e=r.split(" ").map(n=>n.trim()).filter(n=>!!n),t=[];return e.forEach(n=>{t.indexOf(n)<0&&t.push(n)}),t.join(" ")}function Xy(r=""){return r?r.includes("swiper-wrapper")?r:`swiper-wrapper ${r}`:"swiper-wrapper"}const qd=["eventsPrefix","modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopedSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideNextClass","slidePrevClass","wrapperClass","lazyPreloaderClass","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control","injectStyles","injectStylesUrls"];function tu(r={},e=!0){const t={on:{}},n={},i={};ii(t,rs.defaults),ii(t,rs.extendedDefaults),t._emitClasses=!0,t.init=!1;const s={},o=qd.map(l=>l.replace(/_/,"")),a=Object.assign({},r);return Object.keys(a).forEach(l=>{typeof r[l]>"u"||(o.indexOf(l)>=0?Ii(r[l])?(t[l]={},i[l]={},ii(t[l],r[l]),ii(i[l],r[l])):(t[l]=r[l],i[l]=r[l]):l.search(/on[A-Z]/)===0&&typeof r[l]=="function"?e?n[`${l[2].toLowerCase()}${l.substr(3)}`]=r[l]:t.on[`${l[2].toLowerCase()}${l.substr(3)}`]=r[l]:s[l]=r[l])}),["navigation","pagination","scrollbar"].forEach(l=>{t[l]===!0&&(t[l]={}),t[l]===!1&&delete t[l]}),{params:t,passedParams:i,rest:s,events:n}}function jy({el:r,nextEl:e,prevEl:t,paginationEl:n,scrollbarEl:i,swiper:s},o){Gd(o)&&e&&t&&(s.params.navigation.nextEl=e,s.originalParams.navigation.nextEl=e,s.params.navigation.prevEl=t,s.originalParams.navigation.prevEl=t),Vd(o)&&n&&(s.params.pagination.el=n,s.originalParams.pagination.el=n),Wd(o)&&i&&(s.params.scrollbar.el=i,s.originalParams.scrollbar.el=i),s.init(r)}function $y(r,e,t,n,i){const s=[];if(!e)return s;const o=l=>{s.indexOf(l)<0&&s.push(l)};if(t&&n){const l=n.map(i),c=t.map(i);l.join("")!==c.join("")&&o("children"),n.length!==t.length&&o("children")}return qd.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in r&&l in e)if(Ii(r[l])&&Ii(e[l])){const c=Object.keys(r[l]),u=Object.keys(e[l]);c.length!==u.length?o(l):(c.forEach(d=>{r[l][d]!==e[l][d]&&o(l)}),u.forEach(d=>{r[l][d]!==e[l][d]&&o(l)}))}else r[l]!==e[l]&&o(l)}),s}function lo(r,e,t){r===void 0&&(r={});const n=[],i={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},s=(o,a)=>{Array.isArray(o)&&o.forEach(l=>{const c=typeof l.type=="symbol";a==="default"&&(a="container-end"),c&&l.children?s(l.children,"default"):l.type&&(l.type.name==="SwiperSlide"||l.type.name==="AsyncComponentWrapper")?n.push(l):i[a]&&i[a].push(l)})};return Object.keys(r).forEach(o=>{if(typeof r[o]!="function")return;const a=r[o]();s(a,o)}),t.value=e.value,e.value=n,{slides:n,slots:i}}function Yy({swiper:r,slides:e,passedParams:t,changedParams:n,nextEl:i,prevEl:s,scrollbarEl:o,paginationEl:a}){const l=n.filter(y=>y!=="children"&&y!=="direction"&&y!=="wrapperClass"),{params:c,pagination:u,navigation:d,scrollbar:f,virtual:m,thumbs:v}=r;let h,p,g,x,_,S,b,w;n.includes("thumbs")&&t.thumbs&&t.thumbs.swiper&&c.thumbs&&!c.thumbs.swiper&&(h=!0),n.includes("controller")&&t.controller&&t.controller.control&&c.controller&&!c.controller.control&&(p=!0),n.includes("pagination")&&t.pagination&&(t.pagination.el||a)&&(c.pagination||c.pagination===!1)&&u&&!u.el&&(g=!0),n.includes("scrollbar")&&t.scrollbar&&(t.scrollbar.el||o)&&(c.scrollbar||c.scrollbar===!1)&&f&&!f.el&&(x=!0),n.includes("navigation")&&t.navigation&&(t.navigation.prevEl||s)&&(t.navigation.nextEl||i)&&(c.navigation||c.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(_=!0);const C=y=>{r[y]&&(r[y].destroy(),y==="navigation"?(r.isElement&&(r[y].prevEl.remove(),r[y].nextEl.remove()),c[y].prevEl=void 0,c[y].nextEl=void 0,r[y].prevEl=void 0,r[y].nextEl=void 0):(r.isElement&&r[y].el.remove(),c[y].el=void 0,r[y].el=void 0))};n.includes("loop")&&r.isElement&&(c.loop&&!t.loop?S=!0:!c.loop&&t.loop?b=!0:w=!0),l.forEach(y=>{if(Ii(c[y])&&Ii(t[y]))ii(c[y],t[y]);else{const M=t[y];(M===!0||M===!1)&&(y==="navigation"||y==="pagination"||y==="scrollbar")?M===!1&&C(y):c[y]=t[y]}}),l.includes("controller")&&!p&&r.controller&&r.controller.control&&c.controller&&c.controller.control&&(r.controller.control=c.controller.control),n.includes("children")&&e&&m&&c.virtual.enabled&&(m.slides=e,m.update(!0)),n.includes("children")&&e&&c.loop&&(w=!0),h&&v.init()&&v.update(!0),p&&(r.controller.control=c.controller.control),g&&(r.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-pagination"),r.el.shadowEl.appendChild(a)),a&&(c.pagination.el=a),u.init(),u.render(),u.update()),x&&(r.isElement&&(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-scrollbar"),r.el.shadowEl.appendChild(o)),o&&(c.scrollbar.el=o),f.init(),f.updateSize(),f.setTranslate()),_&&(r.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),r.el.shadowEl.appendChild(i)),(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-prev"),r.el.shadowEl.appendChild(s))),i&&(c.navigation.nextEl=i),s&&(c.navigation.prevEl=s),d.init(),d.update()),n.includes("allowSlideNext")&&(r.allowSlideNext=t.allowSlideNext),n.includes("allowSlidePrev")&&(r.allowSlidePrev=t.allowSlidePrev),n.includes("direction")&&r.changeDirection(t.direction,!1),(S||w)&&r.loopDestroy(),(b||w)&&r.loopCreate(),r.update()}function Zy(r,e,t){if(!t)return null;const n=u=>{let d=u;return u<0?d=e.length+u:d>=e.length&&(d=d-e.length),d},i=r.value.isHorizontal()?{[r.value.rtlTranslate?"right":"left"]:`${t.offset}px`}:{top:`${t.offset}px`},{from:s,to:o}=t,a=r.value.params.loop?-e.length:0,l=r.value.params.loop?e.length*2:e.length,c=[];for(let u=a;u<l;u+=1)u>=s&&u<=o&&c.push(e[n(u)]);return c.map(u=>(u.props||(u.props={}),u.props.style||(u.props.style={}),u.props.swiperRef=r,u.props.style=i,tn(u.type,{...u.props},u.children)))}const Ky=r=>{!r||r.destroyed||!r.params.virtual||r.params.virtual&&!r.params.virtual.enabled||(r.updateSlides(),r.updateProgress(),r.updateSlidesClasses(),r.parallax&&r.params.parallax&&r.params.parallax.enabled&&r.parallax.setTranslate())},Jy={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},oneWayMovement:{type:Boolean,default:void 0},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},spaceBetween:{type:[Number,String],default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopedSlides:{type:Number,default:void 0},loopPreventsSliding:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},lazyPreloaderClass:{type:String,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0},enabled:{type:Boolean,default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","_freeModeNoMomentumRelease","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","autoplayTimeLeft","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","init","keyPress","lock","loopFix","momentumBounce","navigationHide","navigationShow","navigationPrev","navigationNext","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","virtualUpdate","zoomChange"],setup(r,e){let{slots:t,emit:n}=e;const{tag:i,wrapperTag:s}=r,o=mt("swiper"),a=mt(null),l=mt(!1),c=mt(!1),u=mt(null),d=mt(null),f=mt(null),m={value:[]},v={value:[]},h=mt(null),p=mt(null),g=mt(null),x=mt(null),{params:_,passedParams:S}=tu(r,!1);lo(t,m,v),f.value=S,v.value=m.value;const b=()=>{lo(t,m,v),l.value=!0};_.onAny=function(y){for(var M=arguments.length,R=new Array(M>1?M-1:0),D=1;D<M;D++)R[D-1]=arguments[D];n(y,...R)},Object.assign(_.on,{_beforeBreakpoint:b,_containerClasses(y,M){o.value=M}});const w={..._};if(delete w.wrapperClass,d.value=new rs(w),d.value.virtual&&d.value.params.virtual.enabled){d.value.virtual.slides=m.value;const y={cache:!1,slides:m.value,renderExternal:M=>{a.value=M},renderExternalUpdate:!1};ii(d.value.params.virtual,y),ii(d.value.originalParams.virtual,y)}nu(()=>{!c.value&&d.value&&(d.value.emitSlidesClasses(),c.value=!0);const{passedParams:y}=tu(r,!1),M=$y(y,f.value,m.value,v.value,R=>R.props&&R.props.key);f.value=y,(M.length||l.value)&&d.value&&!d.value.destroyed&&Yy({swiper:d.value,slides:m.value,passedParams:y,changedParams:M,nextEl:h.value,prevEl:p.value,scrollbarEl:x.value,paginationEl:g.value}),l.value=!1}),ru("swiper",d),Kd(a,()=>{Jd(()=>{Ky(d.value)})}),os(()=>{u.value&&(jy({el:u.value,nextEl:h.value,prevEl:p.value,paginationEl:g.value,scrollbarEl:x.value,swiper:d.value},_),n("swiper",d.value))}),iu(()=>{d.value&&!d.value.destroyed&&d.value.destroy(!0,!1)});function C(y){return _.virtual?Zy(d,y,a.value):(y.forEach((M,R)=>{M.props||(M.props={}),M.props.swiperRef=d,M.props.swiperSlideIndex=R}),y)}return()=>{const{slides:y,slots:M}=lo(t,m,v);return tn(i,{ref:u,class:Hd(o.value)},[M["container-start"],tn(s,{class:Xy(_.wrapperClass)},[M["wrapper-start"],C(y),M["wrapper-end"]]),Gd(r)&&[tn("div",{ref:p,class:"swiper-button-prev"}),tn("div",{ref:h,class:"swiper-button-next"})],Wd(r)&&tn("div",{ref:x,class:"swiper-scrollbar"}),Vd(r)&&tn("div",{ref:g,class:"swiper-pagination"}),M["container-end"]])}}},Qy={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},swiperSlideIndex:{type:Number,default:void 0,required:!1},zoom:{type:Boolean,default:void 0,required:!1},lazy:{type:Boolean,default:!1,required:!1},virtualIndex:{type:[String,Number],default:void 0}},setup(r,e){let{slots:t}=e,n=!1;const{swiperRef:i}=r,s=mt(null),o=mt("swiper-slide"),a=mt(!1);function l(d,f,m){f===s.value&&(o.value=m)}os(()=>{!i||!i.value||(i.value.on("_slideClass",l),n=!0)}),Qd(()=>{n||!i||!i.value||(i.value.on("_slideClass",l),n=!0)}),nu(()=>{!s.value||!i||!i.value||(typeof r.swiperSlideIndex<"u"&&(s.value.swiperSlideIndex=r.swiperSlideIndex),i.value.destroyed&&o.value!=="swiper-slide"&&(o.value="swiper-slide"))}),iu(()=>{!i||!i.value||i.value.off("_slideClass",l)});const c=ef(()=>({isActive:o.value.indexOf("swiper-slide-active")>=0,isVisible:o.value.indexOf("swiper-slide-visible")>=0,isPrev:o.value.indexOf("swiper-slide-prev")>=0,isNext:o.value.indexOf("swiper-slide-next")>=0}));ru("swiperSlide",c);const u=()=>{a.value=!0};return()=>tn(r.tag,{class:Hd(`${o.value}`),ref:s,"data-swiper-slide-index":typeof r.virtualIndex>"u"&&i&&i.value&&i.value.params.loop?r.swiperSlideIndex:r.virtualIndex,onLoadCapture:u},r.zoom?tn("div",{class:"swiper-zoom-container","data-swiper-zoom":typeof r.zoom=="number"?r.zoom:void 0},[t.default&&t.default(c.value),r.lazy&&!a.value&&tn("div",{class:"swiper-lazy-preloader"})]):[t.default&&t.default(c.value),r.lazy&&!a.value&&tn("div",{class:"swiper-lazy-preloader"})])}};const eb={components:{Swiper:Jy,SwiperSlide:Qy},setup(){return{onSwiper:t=>{},onSlideChange:()=>{},modules:[qy,Wy,Hy,Vy]}}};const fs=r=>(ss("data-v-30a6b467"),r=r(),as(),r),tb={class:"main"},nb={class:"box_bg"},ib={class:"bgcontain"},rb=su('<div class="left" data-v-30a6b467><div class="title" data-v-30a6b467><div class="logo" data-v-30a6b467></div><ul data-v-30a6b467><li data-v-30a6b467>首页</li><li data-v-30a6b467>职位库</li><li data-v-30a6b467>备考资料</li><li data-v-30a6b467>热门好课</li><li data-v-30a6b467>师资介绍</li><li data-v-30a6b467>关于我们</li></ul></div></div><div class="right" data-v-30a6b467><div class="phone" data-v-30a6b467></div></div>',2),sb={class:"center"},ab=fs(()=>Ce("div",{class:"centerleft"},[Ce("ul",null,[Ce("li",null,"国家公务员"),Ce("li",null,"地方公务员"),Ce("li",null,"事业单位"),Ce("li",null,"教师资格"),Ce("li",null,"银行招聘"),Ce("li",null,"国企招聘")])],-1)),ob={class:"centeright"},lb=fs(()=>Ce("img",{src:"https://attachment.gwy.com/img/202301131620460177838.jpg"},null,-1)),cb=fs(()=>Ce("img",{src:"https://stark-attachment.pxo.cn/img/202211151020530183082.jpg"},null,-1)),ub=fs(()=>Ce("img",{src:"https://stark-attachment.pxo.cn/img/202211102012580108891.jpg"},null,-1)),db=fs(()=>Ce("img",{src:"https://attachment.gwy.com/img/202303150846260135328.jpg"},null,-1)),fb=su('<div class="bottom" data-v-30a6b467><div class="left" data-v-30a6b467><div class="top" data-v-30a6b467><div class="logo" data-v-30a6b467></div><div class="words" data-v-30a6b467>职位搜索表</div><div data-v-30a6b467><input type="text" id="typeId" placeholder="请选择省份" data-v-30a6b467></div><div data-v-30a6b467><input type="text" id="typeId" placeholder="请选择时间" data-v-30a6b467></div><div class="btn" data-v-30a6b467>查询</div></div><div class="bottom" data-v-30a6b467><span data-v-30a6b467>热门推荐：</span><ul data-v-30a6b467><li data-v-30a6b467><a target="_blank" href="https://www.gwy.com/gjgwy/248726.html" data-v-30a6b467>国家公务员成绩已发布</a><div class="hotIcon" data-v-30a6b467></div></li><li data-v-30a6b467><a target="_blank" href="https://www.gwy.com/gjgwy/249333.html" data-v-30a6b467>国考调剂公告|名单</a></li><li data-v-30a6b467><a target="_blank" href="https://www.gwy.com/lngwy/249083.html" data-v-30a6b467>辽宁成绩查询</a></li><li data-v-30a6b467><a target="_blank" href="https://www.gwy.com/hljgwy/248775.html" data-v-30a6b467>黑龙江成绩查询入口</a></li><li data-v-30a6b467><a target="_blank" href="https://www.gwy.com/xjgwy/249766.html" data-v-30a6b467>新疆兵团成绩</a></li></ul></div></div><div class="right" data-v-30a6b467><div data-v-30a6b467><div data-v-30a6b467>微信扫一扫</div><div data-v-30a6b467>咨询老师获取</div><div data-v-30a6b467>获取2023省考院长私教营优惠</div></div><div class="shareCode" data-v-30a6b467></div></div></div>',1);function hb(r,e,t,n,i,s){const o=cl("SwiperSlide"),a=cl("Swiper");return nn(),rn("div",tb,[Ce("div",nb,[Ce("div",ib,[rb,Ce("div",sb,[ab,Ce("div",ob,[Ji(a,{modules:n.modules,"slides-per-view":1,loop:!0,speed:1200,effect:"fade",pagination:{clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1},grabCursor:!0},{default:Er(()=>[Ji(o,null,{default:Er(()=>[lb]),_:1}),Ji(o,null,{default:Er(()=>[cb]),_:1}),Ji(o,null,{default:Er(()=>[ub]),_:1}),Ji(o,null,{default:Er(()=>[db]),_:1})]),_:1},8,["modules"])])]),fb])])])}const pb=Sr(eb,[["render",hb],["__scopeId","data-v-30a6b467"]]),mb={...au,Layout:yf,enhanceApp({app:r,router:e,siteData:t}){r.component("tags",Rf),r.component("archives",Uf),r.component("home",sv),r.component("threeDemo",Mx),r.component("gwycomDemo",pb)}};function Xd(r){if(r.extends){const e=Xd(r.extends);return{...e,...r,async enhanceApp(t){e.enhanceApp&&await e.enhanceApp(t),r.enhanceApp&&await r.enhanceApp(t)}}}return r}const cr=Xd(mb),gb=br({name:"VitePressApp",setup(){const{site:r}=Fo();return os(()=>{nf(()=>{document.documentElement.lang=r.value.lang,document.documentElement.dir=r.value.dir})}),rf(),sf(),af(),cr.setup&&cr.setup(),()=>tn(cr.Layout)}});async function _b(){const r=xb(),e=vb();e.provide(of,r);const t=lf(r.route);return e.provide(cf,t),e.component("Content",uf),e.component("ClientOnly",df),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),cr.enhanceApp&&await cr.enhanceApp({app:e,router:r,siteData:ff}),{app:e,router:r,data:t}}function vb(){return hf(gb)}function xb(){let r=uo,e;return pf(t=>{let n=mf(t);return r&&(e=n),(r||e===n)&&(n=n.replace(/\.js$/,".lean.js")),uo&&(r=!1),gf(()=>import(n),[])},cr.NotFound)}uo&&_b().then(({app:r,router:e,data:t})=>{e.go().then(()=>{tf(e.route,t.site),r.mount("#app")})});export{_b as createApp};
