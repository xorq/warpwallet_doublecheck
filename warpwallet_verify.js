// THE SCRYPT MODULE IS LOADED FROM https://github.com/tonyg/js-scrypt/blob/master/browser/scrypt.js

var scrypt_module_factory = (function (requested_total_memory) {
    var Module = {TOTAL_MEMORY: (requested_total_memory || 33554432)};
    var scrypt_raw = Module;
function g(a) {
  throw a;
}
var k = void 0, l = !0, m = null, p = !1;
function aa() {
  return function() {
  }
}
var q, s;
s || (s = eval("(function() { try { return Module || {} } catch(e) { return {} } })()"));
var ba = {}, t;
for(t in s) {
  s.hasOwnProperty(t) && (ba[t] = s[t])
}
var ca = "object" === typeof process && "function" === typeof require, da = "object" === typeof window, ea = "function" === typeof importScripts, fa = !da && !ca && !ea;
if(ca) {
  s.print = function(a) {
    process.stdout.write(a + "\n")
  };
  s.printErr = function(a) {
    process.stderr.write(a + "\n")
  };
  var ga = require("fs"), ha = require("path");
  s.read = function(a, b) {
    var a = ha.normalize(a), c = ga.readFileSync(a);
    !c && a != ha.resolve(a) && (a = path.join(__dirname, "..", "src", a), c = ga.readFileSync(a));
    c && !b && (c = c.toString());
    return c
  };
  s.readBinary = function(a) {
    return s.read(a, l)
  };
  s.load = function(a) {
    ia(read(a))
  };
  s.arguments = process.argv.slice(2);
  module.ee = s
}else {
  fa ? (s.print = print, "undefined" != typeof printErr && (s.printErr = printErr), s.read = read, s.readBinary = function(a) {
    return read(a, "binary")
  }, "undefined" != typeof scriptArgs ? s.arguments = scriptArgs : "undefined" != typeof arguments && (s.arguments = arguments), this.Module = s) : da || ea ? (s.read = function(a) {
    var b = new XMLHttpRequest;
    b.open("GET", a, p);
    b.send(m);
    return b.responseText
  }, "undefined" != typeof arguments && (s.arguments = arguments), da ? (s.print = function(a) {
    console.log(a)
  }, s.printErr = function(a) {
    console.log(a)
  }, this.Module = s) : ea && (s.print = aa(), s.load = importScripts)) : g("Unknown runtime environment. Where are we?")
}
function ia(a) {
  eval.call(m, a)
}
"undefined" == !s.load && s.read && (s.load = function(a) {
  ia(s.read(a))
});
s.print || (s.print = aa());
s.printErr || (s.printErr = s.print);
s.arguments || (s.arguments = []);
s.print = s.print;
s.P = s.printErr;
s.preRun = [];
s.postRun = [];
for(t in ba) {
  ba.hasOwnProperty(t) && (s[t] = ba[t])
}
function ja() {
  return u
}
function ka(a) {
  u = a
}
function la(a) {
  if(1 == ma) {
    return 1
  }
  var b = {"%i1":1, "%i8":1, "%i16":2, "%i32":4, "%i64":8, "%float":4, "%double":8}["%" + a];
  b || ("*" == a.charAt(a.length - 1) ? b = ma : "i" == a[0] && (a = parseInt(a.substr(1)), w(0 == a % 8), b = a / 8));
  return b
}
function na(a, b, c) {
  c && c.length ? (c.splice || (c = Array.prototype.slice.call(c)), c.splice(0, 0, b), s["dynCall_" + a].apply(m, c)) : s["dynCall_" + a].call(m, b)
}
var oa;
function pa() {
  var a = [], b = 0;
  this.oa = function(c) {
    c &= 255;
    b && (a.push(c), b--);
    if(0 == a.length) {
      if(128 > c) {
        return String.fromCharCode(c)
      }
      a.push(c);
      b = 191 < c && 224 > c ? 1 : 2;
      return""
    }
    if(0 < b) {
      return""
    }
    var c = a[0], d = a[1], e = a[2], c = 191 < c && 224 > c ? String.fromCharCode((c & 31) << 6 | d & 63) : String.fromCharCode((c & 15) << 12 | (d & 63) << 6 | e & 63);
    a.length = 0;
    return c
  };
  this.yb = function(a) {
    for(var a = unescape(encodeURIComponent(a)), b = [], e = 0;e < a.length;e++) {
      b.push(a.charCodeAt(e))
    }
    return b
  }
}
function qa(a) {
  var b = u;
  u = u + a | 0;
  u = u + 7 >> 3 << 3;
  return b
}
function ra(a) {
  var b = sa;
  sa = sa + a | 0;
  sa = sa + 7 >> 3 << 3;
  return b
}
function ua(a) {
  var b = z;
  z = z + a | 0;
  z = z + 7 >> 3 << 3;
  z >= va && wa("Cannot enlarge memory arrays in asm.js. Either (1) compile with -s TOTAL_MEMORY=X with X higher than the current value, or (2) set Module.TOTAL_MEMORY before the program runs.");
  return b
}
function xa(a, b) {
  return Math.ceil(a / (b ? b : 8)) * (b ? b : 8)
}
var ma = 4, ya = {}, za = p, Aa;
function w(a, b) {
  a || wa("Assertion failed: " + b)
}
s.ccall = function(a, b, c, d) {
  return Ba(Ca(a), b, c, d)
};
function Ca(a) {
  try {
    var b = s["_" + a];
    b || (b = eval("_" + a))
  }catch(c) {
  }
  w(b, "Cannot call unknown function " + a + " (perhaps LLVM optimizations or closure removed it?)");
  return b
}
function Ba(a, b, c, d) {
  function e(a, b) {
    if("string" == b) {
      if(a === m || a === k || 0 === a) {
        return 0
      }
      f || (f = ja());
      var c = qa(a.length + 1);
      Da(a, c);
      return c
    }
    return"array" == b ? (f || (f = ja()), c = qa(a.length), Ea(a, c), c) : a
  }
  var f = 0, h = 0, d = d ? d.map(function(a) {
    return e(a, c[h++])
  }) : [];
  a = a.apply(m, d);
  "string" == b ? b = Fa(a) : (w("array" != b), b = a);
  f && ka(f);
  return b
}
s.cwrap = function(a, b, c) {
  var d = Ca(a);
  return function() {
    return Ba(d, b, c, Array.prototype.slice.call(arguments))
  }
};
function Ga(a, b, c) {
  c = c || "i8";
  "*" === c.charAt(c.length - 1) && (c = "i32");
  switch(c) {
    case "i1":
      A[a] = b;
      break;
    case "i8":
      A[a] = b;
      break;
    case "i16":
      Ha[a >> 1] = b;
      break;
    case "i32":
      B[a >> 2] = b;
      break;
    case "i64":
      Aa = [b >>> 0, (Math.min(+Math.floor(b / 4294967296), 4294967295) | 0) >>> 0];
      B[a >> 2] = Aa[0];
      B[a + 4 >> 2] = Aa[1];
      break;
    case "float":
      Ia[a >> 2] = b;
      break;
    case "double":
      Ja[a >> 3] = b;
      break;
    default:
      wa("invalid type for setValue: " + c)
  }
}
s.setValue = Ga;
s.getValue = function(a, b) {
  b = b || "i8";
  "*" === b.charAt(b.length - 1) && (b = "i32");
  switch(b) {
    case "i1":
      return A[a];
    case "i8":
      return A[a];
    case "i16":
      return Ha[a >> 1];
    case "i32":
      return B[a >> 2];
    case "i64":
      return B[a >> 2];
    case "float":
      return Ia[a >> 2];
    case "double":
      return Ja[a >> 3];
    default:
      wa("invalid type for setValue: " + b)
  }
  return m
};
var Ka = 0, La = 1, E = 2, Na = 4;
s.ALLOC_NORMAL = Ka;
s.ALLOC_STACK = La;
s.ALLOC_STATIC = E;
s.ALLOC_DYNAMIC = 3;
s.ALLOC_NONE = Na;
function F(a, b, c, d) {
  var e, f;
  "number" === typeof a ? (e = l, f = a) : (e = p, f = a.length);
  var h = "string" === typeof b ? b : m, c = c == Na ? d : [Oa, qa, ra, ua][c === k ? E : c](Math.max(f, h ? 1 : b.length));
  if(e) {
    d = c;
    w(0 == (c & 3));
    for(a = c + (f & -4);d < a;d += 4) {
      B[d >> 2] = 0
    }
    for(a = c + f;d < a;) {
      A[d++ | 0] = 0
    }
    return c
  }
  if("i8" === h) {
    return a.subarray || a.slice ? G.set(a, c) : G.set(new Uint8Array(a), c), c
  }
  for(var d = 0, i, j;d < f;) {
    var n = a[d];
    "function" === typeof n && (n = ya.fe(n));
    e = h || b[d];
    0 === e ? d++ : ("i64" == e && (e = "i32"), Ga(c + d, n, e), j !== e && (i = la(e), j = e), d += i)
  }
  return c
}
s.allocate = F;
function Fa(a, b) {
  for(var c = p, d, e = 0;;) {
    d = G[a + e | 0];
    if(128 <= d) {
      c = l
    }else {
      if(0 == d && !b) {
        break
      }
    }
    e++;
    if(b && e == b) {
      break
    }
  }
  b || (b = e);
  var f = "";
  if(!c) {
    for(;0 < b;) {
      d = String.fromCharCode.apply(String, G.subarray(a, a + Math.min(b, 1024))), f = f ? f + d : d, a += 1024, b -= 1024
    }
    return f
  }
  c = new pa;
  for(e = 0;e < b;e++) {
    d = G[a + e | 0], f += c.oa(d)
  }
  return f
}
s.Pointer_stringify = Fa;
var A, G, Ha, Pa, B, Qa, Ia, Ja, Ra = 0, sa = 0, Sa = 0, u = 0, Ta = 0, Ua = 0, z = 0, va = s.TOTAL_MEMORY || 33554432;
w(!!Int32Array && !!Float64Array && !!(new Int32Array(1)).subarray && !!(new Int32Array(1)).set, "Cannot fallback to non-typed array case: Code is too specialized");
var I = new ArrayBuffer(va);
A = new Int8Array(I);
Ha = new Int16Array(I);
B = new Int32Array(I);
G = new Uint8Array(I);
Pa = new Uint16Array(I);
Qa = new Uint32Array(I);
Ia = new Float32Array(I);
Ja = new Float64Array(I);
B[0] = 255;
w(255 === G[0] && 0 === G[3], "Typed arrays 2 must be run on a little-endian system");
s.HEAP = k;
s.HEAP8 = A;
s.HEAP16 = Ha;
s.HEAP32 = B;
s.HEAPU8 = G;
s.HEAPU16 = Pa;
s.HEAPU32 = Qa;
s.HEAPF32 = Ia;
s.HEAPF64 = Ja;
function Va(a) {
  for(;0 < a.length;) {
    var b = a.shift();
    if("function" == typeof b) {
      b()
    }else {
      var c = b.V;
      "number" === typeof c ? b.ha === k ? na("v", c) : na("vi", c, [b.ha]) : c(b.ha === k ? m : b.ha)
    }
  }
}
var Wa = [], Xa = [], Ya = [], Za = [], $a = [], ab = p;
function bb(a) {
  Wa.unshift(a)
}
s.addOnPreRun = s.Vd = bb;
s.addOnInit = s.Sd = function(a) {
  Xa.unshift(a)
};
s.addOnPreMain = s.Ud = function(a) {
  Ya.unshift(a)
};
s.addOnExit = s.Rd = function(a) {
  Za.unshift(a)
};
function cb(a) {
  $a.unshift(a)
}
s.addOnPostRun = s.Td = cb;
function J(a, b, c) {
  a = (new pa).yb(a);
  c && (a.length = c);
  b || a.push(0);
  return a
}
s.intArrayFromString = J;
s.intArrayToString = function(a) {
  for(var b = [], c = 0;c < a.length;c++) {
    var d = a[c];
    255 < d && (d &= 255);
    b.push(String.fromCharCode(d))
  }
  return b.join("")
};
function Da(a, b, c) {
  a = J(a, c);
  for(c = 0;c < a.length;) {
    A[b + c | 0] = a[c], c += 1
  }
}
s.writeStringToMemory = Da;
function Ea(a, b) {
  for(var c = 0;c < a.length;c++) {
    A[b + c | 0] = a[c]
  }
}
s.writeArrayToMemory = Ea;
function db(a, b) {
  return 0 <= a ? a : 32 >= b ? 2 * Math.abs(1 << b - 1) + a : Math.pow(2, b) + a
}
function eb(a, b) {
  if(0 >= a) {
    return a
  }
  var c = 32 >= b ? Math.abs(1 << b - 1) : Math.pow(2, b - 1);
  if(a >= c && (32 >= b || a > c)) {
    a = -2 * c + a
  }
  return a
}
Math.imul || (Math.imul = function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16) * d + c * (b >>> 16) << 16) | 0
});
Math.ie = Math.imul;
var L = 0, fb = {}, gb = p, hb = m;
function ib(a) {
  L++;
  s.monitorRunDependencies && s.monitorRunDependencies(L);
  a ? (w(!fb[a]), fb[a] = 1) : s.P("warning: run dependency added without ID")
}
s.addRunDependency = ib;
function jb(a) {
  L--;
  s.monitorRunDependencies && s.monitorRunDependencies(L);
  a ? (w(fb[a]), delete fb[a]) : s.P("warning: run dependency removed without ID");
  0 == L && (hb !== m && (clearInterval(hb), hb = m), !gb && kb && lb())
}
s.removeRunDependency = jb;
s.preloadedImages = {};
s.preloadedAudios = {};
Ra = 8;
sa = Ra + 1312;
Xa.push({V:function() {
  mb()
}});
var nb, ob, pb;
nb = nb = F([0, 0, 0, 0, 0, 0, 0, 0], "i8", E);
ob = ob = F([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "i8", E);
pb = pb = F([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "i8", E);
F([111, 112, 116, 105, 111, 110, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 97, 110, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 45, 45, 32, 37, 115, 0, 0, 0, 0, 0, 0, 0, 111, 112, 116, 105, 111, 110, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 97, 110, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 45, 45, 32, 37, 99, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 64, 0, 0, 0, 0, 0, 0, 89, 64, 0, 0, 0, 0, 0, 136, 195, 64, 0, 0, 0, 0, 132, 215, 151, 65, 0, 128, 224, 55, 121, 195, 65, 67, 
23, 110, 5, 181, 181, 184, 147, 70, 245, 249, 63, 233, 3, 79, 56, 77, 50, 29, 48, 249, 72, 119, 130, 90, 60, 191, 115, 127, 221, 79, 21, 117, 56, 3, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 0, 0, 0, 0, 255, 255, 255, 255, 0, 0, 0, 0, 111, 112, 116, 105, 111, 110, 32, 100, 111, 101, 115, 110, 39, 116, 32, 116, 97, 107, 101, 32, 97, 110, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 45, 45, 32, 37, 46, 42, 115, 0, 117, 110, 107, 
110, 111, 119, 110, 32, 111, 112, 116, 105, 111, 110, 32, 45, 45, 32, 37, 115, 0, 0, 0, 0, 117, 110, 107, 110, 111, 119, 110, 32, 111, 112, 116, 105, 111, 110, 32, 45, 45, 32, 37, 99, 0, 0, 0, 0, 255, 255, 255, 255, 0, 0, 0, 0, 97, 109, 98, 105, 103, 117, 111, 117, 115, 32, 111, 112, 116, 105, 111, 110, 32, 45, 45, 32, 37, 46, 42, 115, 0, 0, 0, 0, 0, 0, 0, 0, 37, 115, 58, 32, 0, 0, 0, 0, 80, 79, 83, 73, 88, 76, 89, 95, 67, 79, 82, 82, 69, 67, 84, 0, 115, 116, 100, 58, 58, 98, 97, 100, 95, 97, 108, 
108, 111, 99, 0, 0, 37, 115, 58, 32, 0, 0, 0, 0, 37, 115, 10, 0, 0, 0, 0, 0, 37, 115, 10, 0, 0, 0, 0, 0, 105, 110, 32, 117, 115, 101, 32, 98, 121, 116, 101, 115, 32, 32, 32, 32, 32, 61, 32, 37, 49, 48, 108, 117, 10, 0, 0, 0, 0, 0, 0, 0, 37, 115, 58, 32, 0, 0, 0, 0, 37, 115, 58, 32, 0, 0, 0, 0, 98, 97, 100, 95, 97, 114, 114, 97, 121, 95, 110, 101, 119, 95, 108, 101, 110, 103, 116, 104, 0, 0, 0, 0, 58, 32, 0, 0, 0, 0, 0, 0, 58, 32, 0, 0, 0, 0, 0, 0, 115, 121, 115, 116, 101, 109, 32, 98, 121, 116, 101, 
115, 32, 32, 32, 32, 32, 61, 32, 37, 49, 48, 108, 117, 10, 0, 0, 0, 0, 0, 0, 0, 109, 97, 120, 32, 115, 121, 115, 116, 101, 109, 32, 98, 121, 116, 101, 115, 32, 61, 32, 37, 49, 48, 108, 117, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 176, 2, 0, 0, 6, 0, 0, 0, 10, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 2, 0, 0, 6, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 116, 57, 101, 120, 99, 101, 112, 116, 105, 111, 110, 0, 0, 0, 0, 83, 116, 57, 98, 97, 
100, 95, 97, 108, 108, 111, 99, 0, 0, 0, 0, 83, 116, 50, 48, 98, 97, 100, 95, 97, 114, 114, 97, 121, 95, 110, 101, 119, 95, 108, 101, 110, 103, 116, 104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 2, 0, 0, 0, 0, 0, 0, 120, 2, 0, 0, 168, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 136, 2, 0, 0, 176, 2, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
"i8", Na, 8);
var qb = xa(F(12, "i8", E), 8);
w(0 == qb % 8);
var rb = 0;
function M(a) {
  return B[rb >> 2] = a
}
s._memcpy = sb;
s._memset = tb;
var N = {L:1, ca:2, Bd:3, sc:4, I:5, za:6, Jb:7, Sc:8, $:9, Zb:10, ua:11, Ld:11, $a:12, Ya:13, kc:14, ed:15, Wb:16, va:17, Md:18, wa:19, gd:20, aa:21, A:22, Mc:23, Za:24, ld:25, Id:26, lc:27, ad:28, da:29, yd:30, Fc:31, rd:32, hc:33, ab:34, Wc:35, pc:36, $b:37, vc:38, wc:39, xc:40, Ec:41, Jd:42, Qc:43, uc:44, ec:45, Tc:46, Pb:50, Sb:51, Nd:52, Oc:53, Tb:54, Ub:55, fc:56, Vb:57, cd:60, Rc:61, Fd:62, bd:63, Xc:64, Yc:65, xd:66, Uc:67, Mb:68, Cd:69, ac:70, td:71, Hc:74, yc:75, ic:76, Rb:77, mc:79, md:80, 
Qb:81, wd:82, zc:83, Ac:84, Dc:85, Cc:86, Bc:87, dd:88, Nc:89, ya:90, Ic:91, ba:92, nd:95, qd:96, dc:104, Pc:105, Nb:106, vd:107, jd:108, Zc:109, zd:110, cc:111, Kb:112, bc:113, Lc:114, Jc:115, Gd:116, nc:117, oc:118, rc:119, Ob:120, gc:121, Gc:122, ud:123, Ad:124, Lb:125, Kc:126, tc:127, fd:128, Hd:129, sd:130, Kd:131, jc:132, Dd:133, kd:134, Vc:135, $c:136, Yb:137, qc:138, od:139, Xb:140, hd:141, pd:142, Ed:143}, ub = {"0":"Success", 1:"Not super-user", 2:"No such file or directory", 3:"No such process", 
4:"Interrupted system call", 5:"I/O error", 6:"No such device or address", 7:"Arg list too long", 8:"Exec format error", 9:"Bad file number", 10:"No children", 11:"No more processes", 12:"Not enough core", 13:"Permission denied", 14:"Bad address", 15:"Block device required", 16:"Mount device busy", 17:"File exists", 18:"Cross-device link", 19:"No such device", 20:"Not a directory", 21:"Is a directory", 22:"Invalid argument", 23:"Too many open files in system", 24:"Too many open files", 25:"Not a typewriter", 
26:"Text file busy", 27:"File too large", 28:"No space left on device", 29:"Illegal seek", 30:"Read only file system", 31:"Too many links", 32:"Broken pipe", 33:"Math arg out of domain of func", 34:"Math result not representable", 35:"No message of desired type", 36:"Identifier removed", 37:"Channel number out of range", 38:"Level 2 not synchronized", 39:"Level 3 halted", 40:"Level 3 reset", 41:"Link number out of range", 42:"Protocol driver not attached", 43:"No CSI structure available", 44:"Level 2 halted", 
45:"Deadlock condition", 46:"No record locks available", 50:"Invalid exchange", 51:"Invalid request descriptor", 52:"Exchange full", 53:"No anode", 54:"Invalid request code", 55:"Invalid slot", 56:"File locking deadlock error", 57:"Bad font file fmt", 60:"Device not a stream", 61:"No data (for no delay io)", 62:"Timer expired", 63:"Out of streams resources", 64:"Machine is not on the network", 65:"Package not installed", 66:"The object is remote", 67:"The link has been severed", 68:"Advertise error", 
69:"Srmount error", 70:"Communication error on send", 71:"Protocol error", 74:"Multihop attempted", 75:"Inode is remote (not really error)", 76:"Cross mount point (not really error)", 77:"Trying to read unreadable message", 79:"Inappropriate file type or format", 80:"Given log. name not unique", 81:"f.d. invalid for this operation", 82:"Remote address changed", 83:"Can\t access a needed shared lib", 84:"Accessing a corrupted shared lib", 85:".lib section in a.out corrupted", 86:"Attempting to link in too many libs", 
87:"Attempting to exec a shared library", 88:"Function not implemented", 89:"No more files", 90:"Directory not empty", 91:"File or path name too long", 92:"Too many symbolic links", 95:"Operation not supported on transport endpoint", 96:"Protocol family not supported", 104:"Connection reset by peer", 105:"No buffer space available", 106:"Address family not supported by protocol family", 107:"Protocol wrong type for socket", 108:"Socket operation on non-socket", 109:"Protocol not available", 110:"Can't send after socket shutdown", 
111:"Connection refused", 112:"Address already in use", 113:"Connection aborted", 114:"Network is unreachable", 115:"Network interface is not configured", 116:"Connection timed out", 117:"Host is down", 118:"Host is unreachable", 119:"Connection already in progress", 120:"Socket already connected", 121:"Destination address required", 122:"Message too long", 123:"Unknown protocol", 124:"Socket type not supported", 125:"Address not available", 126:"ENETRESET", 127:"Socket is already connected", 128:"Socket is not connected", 
129:"TOOMANYREFS", 130:"EPROCLIM", 131:"EUSERS", 132:"EDQUOT", 133:"ESTALE", 134:"Not supported", 135:"No medium (in tape drive)", 136:"No such host or network path", 137:"Filename exists with different case", 138:"EILSEQ", 139:"Value too large for defined data type", 140:"Operation canceled", 141:"State not recoverable", 142:"Previous owner died", 143:"Streams pipe error"};
function vb(a, b, c) {
  var d = O(a, {parent:l}).d, a = "/" === a ? "/" : wb(a)[2], e = xb(d, a);
  e && g(new Q(e));
  d.l.Ta || g(new Q(N.L));
  return d.l.Ta(d, a, b, c)
}
function yb(a, b) {
  b = b & 4095 | 32768;
  return vb(a, b, 0)
}
function zb(a, b) {
  b = b & 1023 | 16384;
  return vb(a, b, 0)
}
function Ab(a, b, c) {
  return vb(a, b | 8192, c)
}
function Bb(a, b) {
  var c = O(b, {parent:l}).d, d = "/" === b ? "/" : wb(b)[2], e = xb(c, d);
  e && g(new Q(e));
  c.l.Wa || g(new Q(N.L));
  return c.l.Wa(c, d, a)
}
function Cb(a, b) {
  var c;
  c = "string" === typeof a ? O(a, {N:l}).d : a;
  c.l.Y || g(new Q(N.L));
  c.l.Y(c, {mode:b & 4095 | c.mode & -4096, timestamp:Date.now()})
}
function Db(a, b) {
  var c, a = Eb(a), d;
  "string" === typeof b ? (d = Fb[b], "undefined" === typeof d && g(Error("Unknown file open mode: " + b))) : d = b;
  b = d;
  c = b & 512 ? c & 4095 | 32768 : 0;
  var e;
  try {
    var f = O(a, {N:!(b & 65536)});
    e = f.d;
    a = f.path
  }catch(h) {
  }
  b & 512 && (e ? b & 2048 && g(new Q(N.va)) : e = vb(a, c, 0));
  e || g(new Q(N.ca));
  8192 === (e.mode & 61440) && (b &= -1025);
  e ? 40960 === (e.mode & 61440) ? c = N.ba : 16384 === (e.mode & 61440) && (0 !== (b & 3) || b & 1024) ? c = N.aa : (c = ["r", "w", "rw"][b & 3], b & 1024 && (c += "w"), c = Gb(e, c)) : c = N.ca;
  c && g(new Q(c));
  b & 1024 && (c = e, c = "string" === typeof c ? O(c, {N:l}).d : c, c.l.Y || g(new Q(N.L)), 16384 === (c.mode & 61440) && g(new Q(N.aa)), 32768 !== (c.mode & 61440) && g(new Q(N.A)), (f = Gb(c, "w")) && g(new Q(f)), c.l.Y(c, {size:0, timestamp:Date.now()}));
  var i = {path:a, d:e, M:b, seekable:l, position:0, e:e.e, Gb:[], error:p}, j;
  a: {
    e = k || 4096;
    for(c = k || 1;c <= e;c++) {
      if(!R[c]) {
        j = c;
        break a
      }
    }
    g(new Q(N.Za))
  }
  i.s = j;
  Object.defineProperty(i, "object", {get:function() {
    return i.d
  }, set:function(a) {
    i.d = a
  }});
  Object.defineProperty(i, "isRead", {get:function() {
    return 1 !== (i.M & 3)
  }});
  Object.defineProperty(i, "isWrite", {get:function() {
    return 0 !== (i.M & 3)
  }});
  Object.defineProperty(i, "isAppend", {get:function() {
    return i.M & 8
  }});
  R[j] = i;
  i.e.open && i.e.open(i);
  return i
}
function Hb(a) {
  try {
    a.e.close && a.e.close(a)
  }catch(b) {
    g(b)
  }finally {
    R[a.s] = m
  }
}
function Ib(a, b, c, d, e) {
  (0 > d || 0 > e) && g(new Q(N.A));
  0 === (a.M & 3) && g(new Q(N.$));
  16384 === (a.d.mode & 61440) && g(new Q(N.aa));
  a.e.write || g(new Q(N.A));
  var f = l;
  "undefined" === typeof e ? (e = a.position, f = p) : a.seekable || g(new Q(N.da));
  a.M & 8 && ((!a.seekable || !a.e.na) && g(new Q(N.da)), a.e.na(a, 0, 2));
  b = a.e.write(a, b, c, d, e);
  f || (a.position += b);
  return b
}
function wb(a) {
  return/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1)
}
function Jb(a, b) {
  for(var c = 0, d = a.length - 1;0 <= d;d--) {
    var e = a[d];
    "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--)
  }
  if(b) {
    for(;c--;c) {
      a.unshift("..")
    }
  }
  return a
}
function Eb(a) {
  var b = "/" === a.charAt(0), c = "/" === a.substr(-1), a = Jb(a.split("/").filter(function(a) {
    return!!a
  }), !b).join("/");
  !a && !b && (a = ".");
  a && c && (a += "/");
  return(b ? "/" : "") + a
}
function S() {
  var a = Array.prototype.slice.call(arguments, 0);
  return Eb(a.filter(function(a) {
    "string" !== typeof a && g(new TypeError("Arguments to path.join must be strings"));
    return a
  }).join("/"))
}
function Kb() {
  for(var a = "", b = p, c = arguments.length - 1;-1 <= c && !b;c--) {
    var d = 0 <= c ? arguments[c] : "/";
    "string" !== typeof d && g(new TypeError("Arguments to path.resolve must be strings"));
    d && (a = d + "/" + a, b = "/" === d.charAt(0))
  }
  a = Jb(a.split("/").filter(function(a) {
    return!!a
  }), !b).join("/");
  return(b ? "/" : "") + a || "."
}
var Lb = [];
function Mb(a, b) {
  Lb[a] = {input:[], H:[], O:b};
  Nb[a] = {e:Ob}
}
var Ob = {open:function(a) {
  Pb || (Pb = new pa);
  var b = Lb[a.d.X];
  b || g(new Q(N.wa));
  a.q = b;
  a.seekable = p
}, close:function(a) {
  a.q.H.length && a.q.O.W(a.q, 10)
}, Q:function(a, b, c, d) {
  (!a.q || !a.q.O.Na) && g(new Q(N.za));
  for(var e = 0, f = 0;f < d;f++) {
    var h;
    try {
      h = a.q.O.Na(a.q)
    }catch(i) {
      g(new Q(N.I))
    }
    h === k && 0 === e && g(new Q(N.ua));
    if(h === m || h === k) {
      break
    }
    e++;
    b[c + f] = h
  }
  e && (a.d.timestamp = Date.now());
  return e
}, write:function(a, b, c, d) {
  (!a.q || !a.q.O.W) && g(new Q(N.za));
  for(var e = 0;e < d;e++) {
    try {
      a.q.O.W(a.q, b[c + e])
    }catch(f) {
      g(new Q(N.I))
    }
  }
  d && (a.d.timestamp = Date.now());
  return e
}}, Pb, T = {z:function() {
  return T.ka(m, "/", 16895, 0)
}, ka:function(a, b, c, d) {
  (24576 === (c & 61440) || 4096 === (c & 61440)) && g(new Q(N.L));
  c = Qb(a, b, c, d);
  c.l = T.l;
  16384 === (c.mode & 61440) ? (c.e = T.e, c.g = {}) : 32768 === (c.mode & 61440) ? (c.e = T.e, c.g = []) : 40960 === (c.mode & 61440) ? c.e = T.e : 8192 === (c.mode & 61440) && (c.e = Rb);
  c.timestamp = Date.now();
  a && (a.g[b] = c);
  return c
}, l:{ge:function(a) {
  var b = {};
  b.ce = 8192 === (a.mode & 61440) ? a.id : 1;
  b.je = a.id;
  b.mode = a.mode;
  b.pe = 1;
  b.uid = 0;
  b.he = 0;
  b.X = a.X;
  b.size = 16384 === (a.mode & 61440) ? 4096 : 32768 === (a.mode & 61440) ? a.g.length : 40960 === (a.mode & 61440) ? a.link.length : 0;
  b.Yd = new Date(a.timestamp);
  b.oe = new Date(a.timestamp);
  b.ae = new Date(a.timestamp);
  b.ib = 4096;
  b.Zd = Math.ceil(b.size / b.ib);
  return b
}, Y:function(a, b) {
  b.mode !== k && (a.mode = b.mode);
  b.timestamp !== k && (a.timestamp = b.timestamp);
  if(b.size !== k) {
    var c = a.g;
    if(b.size < c.length) {
      c.length = b.size
    }else {
      for(;b.size > c.length;) {
        c.push(0)
      }
    }
  }
}, tb:function() {
  g(new Q(N.ca))
}, Ta:function(a, b, c, d) {
  return T.ka(a, b, c, d)
}, rename:function(a, b, c) {
  if(16384 === (a.mode & 61440)) {
    var d;
    try {
      d = Sb(b, c)
    }catch(e) {
    }
    if(d) {
      for(var f in d.g) {
        g(new Q(N.ya))
      }
    }
  }
  delete a.parent.g[a.name];
  a.name = c;
  b.g[c] = a
}, ze:function(a, b) {
  delete a.g[b]
}, ve:function(a, b) {
  var c = Sb(a, b), d;
  for(d in c.g) {
    g(new Q(N.ya))
  }
  delete a.g[b]
}, Wa:function(a, b, c) {
  a = T.ka(a, b, 41471, 0);
  a.link = c;
  return a
}, Va:function(a) {
  40960 !== (a.mode & 61440) && g(new Q(N.A));
  return a.link
}}, e:{open:function(a) {
  if(16384 === (a.d.mode & 61440)) {
    var b = [".", ".."], c;
    for(c in a.d.g) {
      a.d.g.hasOwnProperty(c) && b.push(c)
    }
    a.lb = b
  }
}, Q:function(a, b, c, d, e) {
  a = a.d.g;
  d = Math.min(a.length - e, d);
  if(a.subarray) {
    b.set(a.subarray(e, e + d), c)
  }else {
    for(var f = 0;f < d;f++) {
      b[c + f] = a[e + f]
    }
  }
  return d
}, write:function(a, b, c, d, e) {
  for(var f = a.d.g;f.length < e;) {
    f.push(0)
  }
  for(var h = 0;h < d;h++) {
    f[e + h] = b[c + h]
  }
  a.d.timestamp = Date.now();
  return d
}, na:function(a, b, c) {
  1 === c ? b += a.position : 2 === c && 32768 === (a.d.mode & 61440) && (b += a.d.g.length);
  0 > b && g(new Q(N.A));
  a.Gb = [];
  return a.position = b
}, ue:function(a) {
  return a.lb
}, Wd:function(a, b, c) {
  a = a.d.g;
  for(b += c;b > a.length;) {
    a.push(0)
  }
}, ne:function(a, b, c, d, e, f, h) {
  32768 !== (a.d.mode & 61440) && g(new Q(N.wa));
  a = a.d.g;
  if(h & 2) {
    if(0 < e || e + d < a.length) {
      a = a.subarray ? a.subarray(e, e + d) : Array.prototype.slice.call(a, e, e + d)
    }
    e = l;
    (d = Oa(d)) || g(new Q(N.$a));
    b.set(a, d)
  }else {
    w(a.buffer === b || a.buffer === b.buffer), e = p, d = a.byteOffset
  }
  return{te:d, Xd:e}
}}}, Tb = F(1, "i32*", E), Ub = F(1, "i32*", E);
nb = F(1, "i32*", E);
var Vb = m, Nb = [m], R = [m], Wb = 1, Xb = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ], Yb = l;
function Q(a) {
  this.mb = a;
  for(var b in N) {
    if(N[b] === a) {
      this.code = b;
      break
    }
  }
  this.message = ub[a]
}
function Zb(a) {
  a instanceof Q || g(a + " : " + Error().stack);
  M(a.mb)
}
function $b(a, b) {
  for(var c = 0, d = 0;d < b.length;d++) {
    c = (c << 5) - c + b.charCodeAt(d) | 0
  }
  return(a + c) % Xb.length
}
function Sb(a, b) {
  var c = Gb(a, "x");
  c && g(new Q(c));
  for(c = Xb[$b(a.id, b)];c;c = c.wb) {
    if(c.parent.id === a.id && c.name === b) {
      return c
    }
  }
  return a.l.tb(a, b)
}
function Qb(a, b, c, d) {
  var e = {id:Wb++, name:b, mode:c, l:{}, e:{}, X:d, parent:m, z:m};
  a || (a = e);
  e.parent = a;
  e.z = a.z;
  Object.defineProperty(e, "read", {get:function() {
    return 365 === (e.mode & 365)
  }, set:function(a) {
    a ? e.mode |= 365 : e.mode &= -366
  }});
  Object.defineProperty(e, "write", {get:function() {
    return 146 === (e.mode & 146)
  }, set:function(a) {
    a ? e.mode |= 146 : e.mode &= -147
  }});
  a = $b(e.parent.id, e.name);
  e.wb = Xb[a];
  return Xb[a] = e
}
function O(a, b) {
  a = Kb("/", a);
  b = b || {pa:0};
  8 < b.pa && g(new Q(N.ba));
  for(var c = Jb(a.split("/").filter(function(a) {
    return!!a
  }), p), d = Vb, e = "/", f = 0;f < c.length;f++) {
    var h = f === c.length - 1;
    if(h && b.parent) {
      break
    }
    d = Sb(d, c[f]);
    e = S(e, c[f]);
    d.ub && (d = d.z.root);
    if(!h || b.N) {
      for(h = 0;40960 === (d.mode & 61440);) {
        d = O(e, {N:p}).d;
        d.l.Va || g(new Q(N.A));
        var d = d.l.Va(d), i = Kb;
        var j = wb(e), e = j[0], j = j[1];
        !e && !j ? e = "." : (j && (j = j.substr(0, j.length - 1)), e += j);
        e = i(e, d);
        d = O(e, {pa:b.pa}).d;
        40 < h++ && g(new Q(N.ba))
      }
    }
  }
  return{path:e, d:d}
}
function ac(a) {
  for(var b;;) {
    if(a === a.parent) {
      return b ? S(a.z.Ua, b) : a.z.Ua
    }
    b = b ? S(a.name, b) : a.name;
    a = a.parent
  }
}
var Fb = {r:0, rs:8192, "r+":2, w:1537, wx:3585, xw:3585, "w+":1538, "wx+":3586, "xw+":3586, a:521, ax:2569, xa:2569, "a+":522, "ax+":2570, "xa+":2570};
function Gb(a, b) {
  return Yb ? 0 : -1 !== b.indexOf("r") && !(a.mode & 292) || -1 !== b.indexOf("w") && !(a.mode & 146) || -1 !== b.indexOf("x") && !(a.mode & 73) ? N.Ya : 0
}
function xb(a, b) {
  try {
    return Sb(a, b), N.va
  }catch(c) {
  }
  return Gb(a, "wx")
}
var Rb = {open:function(a) {
  a.e = Nb[a.d.X].e;
  a.e.open && a.e.open(a)
}, na:function() {
  g(new Q(N.da))
}}, bc;
function cc(a, b) {
  var c = 0;
  a && (c |= 365);
  b && (c |= 146);
  return c
}
function dc(a, b, c, d, e) {
  a = S("string" === typeof a ? a : ac(a), b);
  d = cc(d, e);
  e = yb(a, d);
  if(c) {
    if("string" === typeof c) {
      for(var b = Array(c.length), f = 0, h = c.length;f < h;++f) {
        b[f] = c.charCodeAt(f)
      }
      c = b
    }
    Cb(a, d | 146);
    b = Db(a, "w");
    Ib(b, c, 0, c.length, 0);
    Hb(b);
    Cb(a, d)
  }
  return e
}
function ec(a, b, c, d) {
  a = S("string" === typeof a ? a : ac(a), b);
  ec.Sa || (ec.Sa = 64);
  b = ec.Sa++ << 8 | 0;
  Nb[b] = {e:{open:function(a) {
    a.seekable = p
  }, close:function() {
    d && (d.buffer && d.buffer.length) && d(10)
  }, Q:function(a, b, d, i) {
    for(var j = 0, n = 0;n < i;n++) {
      var y;
      try {
        y = c()
      }catch(v) {
        g(new Q(N.I))
      }
      y === k && 0 === j && g(new Q(N.ua));
      if(y === m || y === k) {
        break
      }
      j++;
      b[d + n] = y
    }
    j && (a.d.timestamp = Date.now());
    return j
  }, write:function(a, b, c, i) {
    for(var j = 0;j < i;j++) {
      try {
        d(b[c + j])
      }catch(n) {
        g(new Q(N.I))
      }
    }
    i && (a.d.timestamp = Date.now());
    return j
  }}};
  return Ab(a, c && d ? 511 : c ? 219 : 365, b)
}
function fc(a, b, c) {
  a = R[a];
  if(!a) {
    return-1
  }
  a.sender(G.subarray(b, b + c));
  return c
}
function gc(a, b, c) {
  var d = R[a];
  if(!d) {
    return M(N.$), -1
  }
  if(d && "socket" in d) {
    return fc(a, b, c)
  }
  try {
    return Ib(d, A, b, c)
  }catch(e) {
    return Zb(e), -1
  }
}
function hc(a, b, c, d) {
  c *= b;
  if(0 == c) {
    return 0
  }
  a = gc(d, a, c);
  if(-1 == a) {
    if(b = R[d]) {
      b.error = l
    }
    return 0
  }
  return Math.floor(a / b)
}
s._strlen = ic;
function jc(a) {
  return 0 > a || 0 === a && -Infinity === 1 / a
}
function kc(a, b) {
  function c(a) {
    var c;
    "double" === a ? c = Ja[b + e >> 3] : "i64" == a ? (c = [B[b + e >> 2], B[b + (e + 8) >> 2]], e += 8) : (a = "i32", c = B[b + e >> 2]);
    e += Math.max(Math.max(la(a), ma), 8);
    return c
  }
  for(var d = a, e = 0, f = [], h, i;;) {
    var j = d;
    h = A[d];
    if(0 === h) {
      break
    }
    i = A[d + 1 | 0];
    if(37 == h) {
      var n = p, y = p, v = p, C = p;
      a:for(;;) {
        switch(i) {
          case 43:
            n = l;
            break;
          case 45:
            y = l;
            break;
          case 35:
            v = l;
            break;
          case 48:
            if(C) {
              break a
            }else {
              C = l;
              break
            }
          ;
          default:
            break a
        }
        d++;
        i = A[d + 1 | 0]
      }
      var D = 0;
      if(42 == i) {
        D = c("i32"), d++, i = A[d + 1 | 0]
      }else {
        for(;48 <= i && 57 >= i;) {
          D = 10 * D + (i - 48), d++, i = A[d + 1 | 0]
        }
      }
      var K = p;
      if(46 == i) {
        var H = 0, K = l;
        d++;
        i = A[d + 1 | 0];
        if(42 == i) {
          H = c("i32"), d++
        }else {
          for(;;) {
            i = A[d + 1 | 0];
            if(48 > i || 57 < i) {
              break
            }
            H = 10 * H + (i - 48);
            d++
          }
        }
        i = A[d + 1 | 0]
      }else {
        H = 6
      }
      var x;
      switch(String.fromCharCode(i)) {
        case "h":
          i = A[d + 2 | 0];
          104 == i ? (d++, x = 1) : x = 2;
          break;
        case "l":
          i = A[d + 2 | 0];
          108 == i ? (d++, x = 8) : x = 4;
          break;
        case "L":
        ;
        case "q":
        ;
        case "j":
          x = 8;
          break;
        case "z":
        ;
        case "t":
        ;
        case "I":
          x = 4;
          break;
        default:
          x = m
      }
      x && d++;
      i = A[d + 1 | 0];
      switch(String.fromCharCode(i)) {
        case "d":
        ;
        case "i":
        ;
        case "u":
        ;
        case "o":
        ;
        case "x":
        ;
        case "X":
        ;
        case "p":
          j = 100 == i || 105 == i;
          x = x || 4;
          var P = h = c("i" + 8 * x), r;
          8 == x && (h = 117 == i ? +(h[0] >>> 0) + 4294967296 * +(h[1] >>> 0) : +(h[0] >>> 0) + 4294967296 * +(h[1] | 0));
          4 >= x && (h = (j ? eb : db)(h & Math.pow(256, x) - 1, 8 * x));
          var ta = Math.abs(h), j = "";
          if(100 == i || 105 == i) {
            r = 8 == x && lc ? lc.stringify(P[0], P[1], m) : eb(h, 8 * x).toString(10)
          }else {
            if(117 == i) {
              r = 8 == x && lc ? lc.stringify(P[0], P[1], l) : db(h, 8 * x).toString(10), h = Math.abs(h)
            }else {
              if(111 == i) {
                r = (v ? "0" : "") + ta.toString(8)
              }else {
                if(120 == i || 88 == i) {
                  j = v && 0 != h ? "0x" : "";
                  if(8 == x && lc) {
                    if(P[1]) {
                      r = (P[1] >>> 0).toString(16);
                      for(v = (P[0] >>> 0).toString(16);8 > v.length;) {
                        v = "0" + v
                      }
                      r += v
                    }else {
                      r = (P[0] >>> 0).toString(16)
                    }
                  }else {
                    if(0 > h) {
                      h = -h;
                      r = (ta - 1).toString(16);
                      P = [];
                      for(v = 0;v < r.length;v++) {
                        P.push((15 - parseInt(r[v], 16)).toString(16))
                      }
                      for(r = P.join("");r.length < 2 * x;) {
                        r = "f" + r
                      }
                    }else {
                      r = ta.toString(16)
                    }
                  }
                  88 == i && (j = j.toUpperCase(), r = r.toUpperCase())
                }else {
                  112 == i && (0 === ta ? r = "(nil)" : (j = "0x", r = ta.toString(16)))
                }
              }
            }
          }
          if(K) {
            for(;r.length < H;) {
              r = "0" + r
            }
          }
          for(n && (j = 0 > h ? "-" + j : "+" + j);j.length + r.length < D;) {
            y ? r += " " : C ? r = "0" + r : j = " " + j
          }
          r = j + r;
          r.split("").forEach(function(a) {
            f.push(a.charCodeAt(0))
          });
          break;
        case "f":
        ;
        case "F":
        ;
        case "e":
        ;
        case "E":
        ;
        case "g":
        ;
        case "G":
          h = c("double");
          if(isNaN(h)) {
            r = "nan", C = p
          }else {
            if(isFinite(h)) {
              K = p;
              x = Math.min(H, 20);
              if(103 == i || 71 == i) {
                K = l, H = H || 1, x = parseInt(h.toExponential(x).split("e")[1], 10), H > x && -4 <= x ? (i = (103 == i ? "f" : "F").charCodeAt(0), H -= x + 1) : (i = (103 == i ? "e" : "E").charCodeAt(0), H--), x = Math.min(H, 20)
              }
              if(101 == i || 69 == i) {
                r = h.toExponential(x), /[eE][-+]\d$/.test(r) && (r = r.slice(0, -1) + "0" + r.slice(-1))
              }else {
                if(102 == i || 70 == i) {
                  r = h.toFixed(x), 0 === h && jc(h) && (r = "-" + r)
                }
              }
              j = r.split("e");
              if(K && !v) {
                for(;1 < j[0].length && -1 != j[0].indexOf(".") && ("0" == j[0].slice(-1) || "." == j[0].slice(-1));) {
                  j[0] = j[0].slice(0, -1)
                }
              }else {
                for(v && -1 == r.indexOf(".") && (j[0] += ".");H > x++;) {
                  j[0] += "0"
                }
              }
              r = j[0] + (1 < j.length ? "e" + j[1] : "");
              69 == i && (r = r.toUpperCase());
              n && 0 <= h && (r = "+" + r)
            }else {
              r = (0 > h ? "-" : "") + "inf", C = p
            }
          }
          for(;r.length < D;) {
            r = y ? r + " " : C && ("-" == r[0] || "+" == r[0]) ? r[0] + "0" + r.slice(1) : (C ? "0" : " ") + r
          }
          97 > i && (r = r.toUpperCase());
          r.split("").forEach(function(a) {
            f.push(a.charCodeAt(0))
          });
          break;
        case "s":
          C = (n = c("i8*")) ? ic(n) : 6;
          K && (C = Math.min(C, H));
          if(!y) {
            for(;C < D--;) {
              f.push(32)
            }
          }
          if(n) {
            for(v = 0;v < C;v++) {
              f.push(G[n++ | 0])
            }
          }else {
            f = f.concat(J("(null)".substr(0, C), l))
          }
          if(y) {
            for(;C < D--;) {
              f.push(32)
            }
          }
          break;
        case "c":
          for(y && f.push(c("i8"));0 < --D;) {
            f.push(32)
          }
          y || f.push(c("i8"));
          break;
        case "n":
          y = c("i32*");
          B[y >> 2] = f.length;
          break;
        case "%":
          f.push(h);
          break;
        default:
          for(v = j;v < d + 2;v++) {
            f.push(A[v])
          }
      }
      d += 2
    }else {
      f.push(h), d += 1
    }
  }
  return f
}
function mc(a, b, c) {
  c = kc(b, c);
  b = ja();
  a = hc(F(c, "i8", La), 1, c.length, a);
  ka(b);
  return a
}
function nc(a) {
  nc.ia || (z = z + 4095 >> 12 << 12, nc.ia = l, w(ua), nc.hb = ua, ua = function() {
    wa("cannot dynamically allocate, sbrk now has control")
  });
  var b = z;
  0 != a && nc.hb(a);
  return b
}
function U() {
  return B[U.m >> 2]
}
function oc() {
  return!!oc.ta
}
function pc(a) {
  var b = p;
  try {
    a == __ZTIi && (b = l)
  }catch(c) {
  }
  try {
    a == __ZTIj && (b = l)
  }catch(d) {
  }
  try {
    a == __ZTIl && (b = l)
  }catch(e) {
  }
  try {
    a == __ZTIm && (b = l)
  }catch(f) {
  }
  try {
    a == __ZTIx && (b = l)
  }catch(h) {
  }
  try {
    a == __ZTIy && (b = l)
  }catch(i) {
  }
  try {
    a == __ZTIf && (b = l)
  }catch(j) {
  }
  try {
    a == __ZTId && (b = l)
  }catch(n) {
  }
  try {
    a == __ZTIe && (b = l)
  }catch(y) {
  }
  try {
    a == __ZTIc && (b = l)
  }catch(v) {
  }
  try {
    a == __ZTIa && (b = l)
  }catch(C) {
  }
  try {
    a == __ZTIh && (b = l)
  }catch(D) {
  }
  try {
    a == __ZTIs && (b = l)
  }catch(K) {
  }
  try {
    a == __ZTIt && (b = l)
  }catch(H) {
  }
  return b
}
function qc(a, b, c) {
  if(0 == c) {
    return p
  }
  if(0 == b || b == a) {
    return l
  }
  switch(pc(b) ? b : B[B[b >> 2] - 8 >> 2]) {
    case 0:
      return 0 == B[B[a >> 2] - 8 >> 2] ? qc(B[a + 8 >> 2], B[b + 8 >> 2], c) : p;
    case 1:
      return p;
    case 2:
      return qc(a, B[b + 8 >> 2], c);
    default:
      return p
  }
}
function rc(a, b, c) {
  if(!rc.sb) {
    try {
      B[__ZTVN10__cxxabiv119__pointer_type_infoE >> 2] = 0
    }catch(d) {
    }
    try {
      B[pb >> 2] = 1
    }catch(e) {
    }
    try {
      B[ob >> 2] = 2
    }catch(f) {
    }
    rc.sb = l
  }
  B[U.m >> 2] = a;
  B[U.m + 4 >> 2] = b;
  B[U.m + 8 >> 2] = c;
  "uncaught_exception" in oc ? oc.ta++ : oc.ta = 1;
  g(a + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.")
}
function sc(a) {
  try {
    return tc(a)
  }catch(b) {
  }
}
function uc() {
  if(uc.Bb) {
    uc.Bb = p
  }else {
    V.setThrew(0);
    B[U.m + 4 >> 2] = 0;
    var a = B[U.m >> 2], b = B[U.m + 8 >> 2];
    b && (na("vi", b, [a]), B[U.m + 8 >> 2] = 0);
    a && (sc(a), B[U.m >> 2] = 0)
  }
}
var vc = F(1, "i32*", E);
function wc(a) {
  var b, c;
  wc.ia ? (c = B[vc >> 2], b = B[c >> 2]) : (wc.ia = l, W.USER = "root", W.PATH = "/", W.PWD = "/", W.HOME = "/home/emscripten", W.LANG = "en_US.UTF-8", W._ = "./this.program", b = F(1024, "i8", E), c = F(256, "i8*", E), B[c >> 2] = b, B[vc >> 2] = c);
  var d = [], e = 0, f;
  for(f in a) {
    if("string" === typeof a[f]) {
      var h = f + "=" + a[f];
      d.push(h);
      e += h.length
    }
  }
  1024 < e && g(Error("Environment size exceeded TOTAL_ENV_SIZE!"));
  for(a = 0;a < d.length;a++) {
    h = d[a];
    for(e = 0;e < h.length;e++) {
      A[b + e | 0] = h.charCodeAt(e)
    }
    A[b + e | 0] = 0;
    B[c + 4 * a >> 2] = b;
    b += h.length + 1
  }
  B[c + 4 * d.length >> 2] = 0
}
var W = {};
function xc(a) {
  if(0 === a) {
    return 0
  }
  a = Fa(a);
  if(!W.hasOwnProperty(a)) {
    return 0
  }
  xc.J && tc(xc.J);
  xc.J = F(J(W[a]), "i8", Ka);
  return xc.J
}
function yc(a, b, c) {
  if(a in ub) {
    if(ub[a].length > c - 1) {
      return M(N.ab)
    }
    a = ub[a];
    for(c = 0;c < a.length;c++) {
      A[b + c | 0] = a.charCodeAt(c)
    }
    return A[b + c | 0] = 0
  }
  return M(N.A)
}
function zc(a) {
  zc.buffer || (zc.buffer = Oa(256));
  yc(a, zc.buffer, 256);
  return zc.buffer
}
function Ac(a) {
  s.exit(a)
}
function Bc(a, b) {
  var c = db(a & 255);
  A[Bc.J | 0] = c;
  if(-1 == gc(b, Bc.J, 1)) {
    if(c = R[b]) {
      c.error = l
    }
    return-1
  }
  return c
}
var Cc = p, Dc = p, Ec = p, Fc = p, Gc = k, Hc = k;
function Ic(a) {
  return{jpg:"image/jpeg", jpeg:"image/jpeg", png:"image/png", bmp:"image/bmp", ogg:"audio/ogg", wav:"audio/wav", mp3:"audio/mpeg"}[a.substr(a.lastIndexOf(".") + 1)]
}
var Jc = [];
function Kc() {
  var a = s.canvas;
  Jc.forEach(function(b) {
    b(a.width, a.height)
  })
}
function Lc() {
  var a = s.canvas;
  this.Ib = a.width;
  this.Hb = a.height;
  a.width = screen.width;
  a.height = screen.height;
  "undefined" != typeof SDL && (a = Qa[SDL.screen + 0 * ma >> 2], B[SDL.screen + 0 * ma >> 2] = a | 8388608);
  Kc()
}
function Mc() {
  var a = s.canvas;
  a.width = this.Ib;
  a.height = this.Hb;
  "undefined" != typeof SDL && (a = Qa[SDL.screen + 0 * ma >> 2], B[SDL.screen + 0 * ma >> 2] = a & -8388609);
  Kc()
}
var Nc, Oc, Pc, Qc, rb = ra(4);
B[rb >> 2] = 0;
var Vb = Qb(m, "/", 16895, 0), Rc = T, Sc = {type:Rc, se:{}, Ua:"/", root:m}, Tc;
Tc = O("/", {N:p});
var Uc = Rc.z(Sc);
Uc.z = Sc;
Sc.root = Uc;
Tc && (Tc.d.z = Sc, Tc.d.ub = l, Vb = Sc.root);
zb("/tmp", 511);
zb("/dev", 511);
Nb[259] = {e:{Q:function() {
  return 0
}, write:function() {
  return 0
}}};
Ab("/dev/null", 438, 259);
Mb(1280, {Na:function(a) {
  if(!a.input.length) {
    var b = m;
    if(ca) {
      if(process.Eb.be) {
        return
      }
      b = process.Eb.Q()
    }else {
      "undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "), b !== m && (b += "\n")) : "function" == typeof readline && (b = readline(), b !== m && (b += "\n"))
    }
    if(!b) {
      return m
    }
    a.input = J(b, l)
  }
  return a.input.shift()
}, W:function(a, b) {
  b === m || 10 === b ? (s.print(a.H.join("")), a.H = []) : a.H.push(Pb.oa(b))
}});
Mb(1536, {W:function(a, b) {
  b === m || 10 === b ? (s.printErr(a.H.join("")), a.H = []) : a.H.push(Pb.oa(b))
}});
Ab("/dev/tty", 438, 1280);
Ab("/dev/tty1", 438, 1536);
zb("/dev/shm", 511);
zb("/dev/shm/tmp", 511);
Xa.unshift({V:function() {
  if(!s.noFSInit && !bc) {
    w(!bc, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
    bc = l;
    s.stdin = s.stdin;
    s.stdout = s.stdout;
    s.stderr = s.stderr;
    s.stdin ? ec("/dev", "stdin", s.stdin) : Bb("/dev/tty", "/dev/stdin");
    s.stdout ? ec("/dev", "stdout", m, s.stdout) : Bb("/dev/tty", "/dev/stdout");
    s.stderr ? ec("/dev", "stderr", m, s.stderr) : Bb("/dev/tty1", "/dev/stderr");
    var a = Db("/dev/stdin", "r");
    B[Tb >> 2] = a.s;
    w(1 === a.s, "invalid handle for stdin (" + a.s + ")");
    a = Db("/dev/stdout", "w");
    B[Ub >> 2] = a.s;
    w(2 === a.s, "invalid handle for stdout (" + a.s + ")");
    a = Db("/dev/stderr", "w");
    B[nb >> 2] = a.s;
    w(3 === a.s, "invalid handle for stderr (" + a.s + ")")
  }
}});
Ya.push({V:function() {
  Yb = p
}});
Za.push({V:function() {
  bc = p;
  for(var a = 0;a < R.length;a++) {
    var b = R[a];
    b && Hb(b)
  }
}});
s.FS_createFolder = function(a, b, c, d) {
  a = S("string" === typeof a ? a : ac(a), b);
  return zb(a, cc(c, d))
};
s.FS_createPath = function(a, b) {
  for(var a = "string" === typeof a ? a : ac(a), c = b.split("/").reverse();c.length;) {
    var d = c.pop();
    if(d) {
      var e = S(a, d);
      try {
        zb(e, 511)
      }catch(f) {
      }
      a = e
    }
  }
  return e
};
s.FS_createDataFile = dc;
s.FS_createPreloadedFile = function(a, b, c, d, e, f, h, i) {
  function j() {
    Ec = document.pointerLockElement === v || document.mozPointerLockElement === v || document.webkitPointerLockElement === v
  }
  function n(c) {
    function j(c) {
      i || dc(a, b, c, d, e);
      f && f();
      jb("cp " + C)
    }
    var n = p;
    s.preloadPlugins.forEach(function(a) {
      !n && a.canHandle(C) && (a.handle(c, C, j, function() {
        h && h();
        jb("cp " + C)
      }), n = l)
    });
    n || j(c)
  }
  s.preloadPlugins || (s.preloadPlugins = []);
  if(!Nc && !ea) {
    Nc = l;
    try {
      new Blob, Oc = l
    }catch(y) {
      Oc = p, console.log("warning: no blob constructor, cannot create blobs with mimetypes")
    }
    Pc = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : !Oc ? console.log("warning: no BlobBuilder") : m;
    Qc = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : console.log("warning: cannot create object URLs");
    s.preloadPlugins.push({canHandle:function(a) {
      return!s.re && /\.(jpg|jpeg|png|bmp)$/i.test(a)
    }, handle:function(a, b, c, d) {
      var e = m;
      if(Oc) {
        try {
          e = new Blob([a], {type:Ic(b)}), e.size !== a.length && (e = new Blob([(new Uint8Array(a)).buffer], {type:Ic(b)}))
        }catch(f) {
          var h = "Blob constructor present but fails: " + f + "; falling back to blob builder";
          oa || (oa = {});
          oa[h] || (oa[h] = 1, s.P(h))
        }
      }
      e || (e = new Pc, e.append((new Uint8Array(a)).buffer), e = e.getBlob());
      var i = Qc.createObjectURL(e), j = new Image;
      j.onload = function() {
        w(j.complete, "Image " + b + " could not be decoded");
        var d = document.createElement("canvas");
        d.width = j.width;
        d.height = j.height;
        d.getContext("2d").drawImage(j, 0, 0);
        s.preloadedImages[b] = d;
        Qc.revokeObjectURL(i);
        c && c(a)
      };
      j.onerror = function() {
        console.log("Image " + i + " could not be decoded");
        d && d()
      };
      j.src = i
    }});
    s.preloadPlugins.push({canHandle:function(a) {
      return!s.qe && a.substr(-4) in {".ogg":1, ".wav":1, ".mp3":1}
    }, handle:function(a, b, c, d) {
      function e(d) {
        h || (h = l, s.preloadedAudios[b] = d, c && c(a))
      }
      function f() {
        h || (h = l, s.preloadedAudios[b] = new Audio, d && d())
      }
      var h = p;
      if(Oc) {
        try {
          var i = new Blob([a], {type:Ic(b)})
        }catch(j) {
          return f()
        }
        var i = Qc.createObjectURL(i), n = new Audio;
        n.addEventListener("canplaythrough", function() {
          e(n)
        }, p);
        n.onerror = function() {
          if(!h) {
            console.log("warning: browser could not fully decode audio " + b + ", trying slower base64 approach");
            for(var c = "", d = 0, f = 0, i = 0;i < a.length;i++) {
              d = d << 8 | a[i];
              for(f += 8;6 <= f;) {
                var j = d >> f - 6 & 63, f = f - 6, c = c + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[j]
              }
            }
            2 == f ? (c += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(d & 3) << 4], c += "==") : 4 == f && (c += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(d & 15) << 2], c += "=");
            n.src = "data:audio/x-" + b.substr(-3) + ";base64," + c;
            e(n)
          }
        };
        n.src = i;
        setTimeout(function() {
          za || e(n)
        }, 1E4)
      }else {
        return f()
      }
    }});
    var v = s.canvas;
    v.qa = v.requestPointerLock || v.mozRequestPointerLock || v.webkitRequestPointerLock;
    v.La = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || aa();
    v.La = v.La.bind(document);
    document.addEventListener("pointerlockchange", j, p);
    document.addEventListener("mozpointerlockchange", j, p);
    document.addEventListener("webkitpointerlockchange", j, p);
    s.elementPointerLock && v.addEventListener("click", function(a) {
      !Ec && v.qa && (v.qa(), a.preventDefault())
    }, p)
  }
  var C, D = S.apply(m, [a, b]);
  "/" == D[0] && (D = D.substr(1));
  C = D;
  ib("cp " + C);
  if("string" == typeof c) {
    var K = h, H = function() {
      K ? K() : g('Loading data file "' + c + '" failed.')
    }, x = new XMLHttpRequest;
    x.open("GET", c, l);
    x.responseType = "arraybuffer";
    x.onload = function() {
      if(200 == x.status || 0 == x.status && x.response) {
        var a = x.response;
        w(a, 'Loading data file "' + c + '" failed (no arrayBuffer).');
        a = new Uint8Array(a);
        n(a);
        jb("al " + c)
      }else {
        H()
      }
    };
    x.onerror = H;
    x.send(m);
    ib("al " + c)
  }else {
    n(c)
  }
};
s.FS_createLazyFile = function(a, b, c, d, e) {
  var f, h;
  "undefined" !== typeof XMLHttpRequest ? (ea || g("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc"), f = function() {
    this.ma = p;
    this.T = []
  }, f.prototype.get = function(a) {
    if(!(a > this.length - 1 || 0 > a)) {
      var b = a % this.S;
      return this.pb(Math.floor(a / this.S))[b]
    }
  }, f.prototype.Cb = function(a) {
    this.pb = a
  }, f.prototype.Fa = function() {
    var a = new XMLHttpRequest;
    a.open("HEAD", c, p);
    a.send(m);
    200 <= a.status && 300 > a.status || 304 === a.status || g(Error("Couldn't load " + c + ". Status: " + a.status));
    var b = Number(a.getResponseHeader("Content-length")), d, e = 1048576;
    if(!((d = a.getResponseHeader("Accept-Ranges")) && "bytes" === d)) {
      e = b
    }
    var f = this;
    f.Cb(function(a) {
      var d = a * e, h = (a + 1) * e - 1, h = Math.min(h, b - 1);
      if("undefined" === typeof f.T[a]) {
        var i = f.T;
        d > h && g(Error("invalid range (" + d + ", " + h + ") or no bytes requested!"));
        h > b - 1 && g(Error("only " + b + " bytes available! programmer error!"));
        var j = new XMLHttpRequest;
        j.open("GET", c, p);
        b !== e && j.setRequestHeader("Range", "bytes=" + d + "-" + h);
        "undefined" != typeof Uint8Array && (j.responseType = "arraybuffer");
        j.overrideMimeType && j.overrideMimeType("text/plain; charset=x-user-defined");
        j.send(m);
        200 <= j.status && 300 > j.status || 304 === j.status || g(Error("Couldn't load " + c + ". Status: " + j.status));
        d = j.response !== k ? new Uint8Array(j.response || []) : J(j.responseText || "", l);
        i[a] = d
      }
      "undefined" === typeof f.T[a] && g(Error("doXHR failed!"));
      return f.T[a]
    });
    this.gb = b;
    this.fb = e;
    this.ma = l
  }, f = new f, Object.defineProperty(f, "length", {get:function() {
    this.ma || this.Fa();
    return this.gb
  }}), Object.defineProperty(f, "chunkSize", {get:function() {
    this.ma || this.Fa();
    return this.fb
  }}), h = k) : (h = c, f = k);
  var i, a = S("string" === typeof a ? a : ac(a), b);
  i = yb(a, cc(d, e));
  f ? i.g = f : h && (i.g = m, i.url = h);
  var j = {};
  Object.keys(i.e).forEach(function(a) {
    var b = i.e[a];
    j[a] = function() {
      var a;
      if(i.ke || i.le || i.link || i.g) {
        a = l
      }else {
        a = l;
        "undefined" !== typeof XMLHttpRequest && g(Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."));
        if(s.read) {
          try {
            i.g = J(s.read(i.url), l)
          }catch(c) {
            a = p
          }
        }else {
          g(Error("Cannot load without read() or XMLHttpRequest."))
        }
        a || M(N.I)
      }
      a || g(new Q(N.I));
      return b.apply(m, arguments)
    }
  });
  j.Q = function(a, b, c, d, e) {
    a = a.d.g;
    d = Math.min(a.length - e, d);
    if(a.slice) {
      for(var f = 0;f < d;f++) {
        b[c + f] = a[e + f]
      }
    }else {
      for(f = 0;f < d;f++) {
        b[c + f] = a.get(e + f)
      }
    }
    return d
  };
  i.e = j;
  return i
};
s.FS_createLink = function(a, b, c) {
  a = S("string" === typeof a ? a : ac(a), b);
  return Bb(c, a)
};
s.FS_createDevice = ec;
U.m = F(12, "void*", E);
wc(W);
Bc.J = F([0], "i8", E);
s.requestFullScreen = function(a, b) {
  function c() {
    Dc = p;
    (document.webkitFullScreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.mozFullscreenElement || document.fullScreenElement || document.fullscreenElement) === d ? (d.Ga = document.cancelFullScreen || document.mozCancelFullScreen || document.webkitCancelFullScreen, d.Ga = d.Ga.bind(document), Gc && d.qa(), Dc = l, Hc && Lc()) : Hc && Mc();
    if(s.onFullScreen) {
      s.onFullScreen(Dc)
    }
  }
  Gc = a;
  Hc = b;
  "undefined" === typeof Gc && (Gc = l);
  "undefined" === typeof Hc && (Hc = p);
  var d = s.canvas;
  Fc || (Fc = l, document.addEventListener("fullscreenchange", c, p), document.addEventListener("mozfullscreenchange", c, p), document.addEventListener("webkitfullscreenchange", c, p));
  d.Ab = d.requestFullScreen || d.mozRequestFullScreen || (d.webkitRequestFullScreen ? function() {
    d.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
  } : m);
  d.Ab()
};
s.requestAnimationFrame = function(a) {
  window.requestAnimationFrame || (window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || window.setTimeout);
  window.requestAnimationFrame(a)
};
s.pauseMainLoop = aa();
s.resumeMainLoop = function() {
  Cc && (Cc = p, m())
};
s.getUserMedia = function() {
  window.Ma || (window.Ma = navigator.getUserMedia || navigator.mozGetUserMedia);
  window.Ma(k)
};
Sa = u = xa(sa);
Ta = Sa + 5242880;
Ua = z = xa(Ta);
w(Ua < va);
var Vc = F([8, 7, 6, 6, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "i8", 3), Wc = F([8, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 
2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 7, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 
0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0], "i8", 3), Xc = Math.min;
var V = (function(global,env,buffer) {
// EMSCRIPTEN_START_ASM
 "use asm";
 var a = new global.Int8Array(buffer);
 var b = new global.Int16Array(buffer);
 var c = new global.Int32Array(buffer);
 var d = new global.Uint8Array(buffer);
 var e = new global.Uint16Array(buffer);
 var f = new global.Uint32Array(buffer);
 var g = new global.Float32Array(buffer);
 var h = new global.Float64Array(buffer);
 var i = env.STACKTOP | 0;
 var j = env.STACK_MAX | 0;
 var k = env.tempDoublePtr | 0;
 var l = env.ABORT | 0;
 var m = env.cttz_i8 | 0;
 var n = env.ctlz_i8 | 0;
 var o = env._stderr | 0;
 var p = env.__ZTVN10__cxxabiv120__si_class_type_infoE | 0;
 var q = env.__ZTVN10__cxxabiv117__class_type_infoE | 0;
 var r = env.___progname | 0;
 var s = +env.NaN;
 var t = +env.Infinity;
 var u = 0;
 var v = 0;
 var w = 0;
 var x = 0;
 var y = 0, z = 0, A = 0, B = 0, C = 0.0, D = 0, E = 0, F = 0, G = 0.0;
 var H = 0;
 var I = 0;
 var J = 0;
 var K = 0;
 var L = 0;
 var M = 0;
 var N = 0;
 var O = 0;
 var P = 0;
 var Q = 0;
 var R = global.Math.floor;
 var S = global.Math.abs;
 var T = global.Math.sqrt;
 var U = global.Math.pow;
 var V = global.Math.cos;
 var W = global.Math.sin;
 var X = global.Math.tan;
 var Y = global.Math.acos;
 var Z = global.Math.asin;
 var _ = global.Math.atan;
 var $ = global.Math.atan2;
 var aa = global.Math.exp;
 var ab = global.Math.log;
 var ac = global.Math.ceil;
 var ad = global.Math.imul;
 var ae = env.abort;
 var af = env.assert;
 var ag = env.asmPrintInt;
 var ah = env.asmPrintFloat;
 var ai = env.min;
 var aj = env.invoke_vi;
 var ak = env.invoke_vii;
 var al = env.invoke_ii;
 var am = env.invoke_viii;
 var an = env.invoke_v;
 var ao = env.invoke_iii;
 var ap = env._strncmp;
 var aq = env._llvm_va_end;
 var ar = env._sysconf;
 var as = env.___cxa_throw;
 var at = env._strerror;
 var au = env._abort;
 var av = env._fprintf;
 var aw = env._llvm_eh_exception;
 var ax = env.___cxa_free_exception;
 var ay = env._fflush;
 var az = env.___buildEnvironment;
 var aA = env.__reallyNegative;
 var aB = env._strchr;
 var aC = env._fputc;
 var aD = env.___setErrNo;
 var aE = env._fwrite;
 var aF = env._send;
 var aG = env._write;
 var aH = env._exit;
 var aI = env.___cxa_find_matching_catch;
 var aJ = env.___cxa_allocate_exception;
 var aK = env._isspace;
 var aL = env.__formatString;
 var aM = env.___resumeException;
 var aN = env._llvm_uadd_with_overflow_i32;
 var aO = env.___cxa_does_inherit;
 var aP = env._getenv;
 var aQ = env._vfprintf;
 var aR = env.___cxa_begin_catch;
 var aS = env.__ZSt18uncaught_exceptionv;
 var aT = env._pwrite;
 var aU = env.___cxa_call_unexpected;
 var aV = env._sbrk;
 var aW = env._strerror_r;
 var aX = env.___errno_location;
 var aY = env.___gxx_personality_v0;
 var aZ = env.___cxa_is_number_type;
 var a_ = env._time;
 var a$ = env.__exit;
 var a0 = env.___cxa_end_catch;
// EMSCRIPTEN_START_FUNCS
function a7(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 7 >> 3 << 3;
 return b | 0;
}
function a8() {
 return i | 0;
}
function a9(a) {
 a = a | 0;
 i = a;
}
function ba(a, b) {
 a = a | 0;
 b = b | 0;
 if ((u | 0) == 0) {
  u = a;
  v = b;
 }
}
function bb(b) {
 b = b | 0;
 a[k] = a[b];
 a[k + 1 | 0] = a[b + 1 | 0];
 a[k + 2 | 0] = a[b + 2 | 0];
 a[k + 3 | 0] = a[b + 3 | 0];
}
function bc(b) {
 b = b | 0;
 a[k] = a[b];
 a[k + 1 | 0] = a[b + 1 | 0];
 a[k + 2 | 0] = a[b + 2 | 0];
 a[k + 3 | 0] = a[b + 3 | 0];
 a[k + 4 | 0] = a[b + 4 | 0];
 a[k + 5 | 0] = a[b + 5 | 0];
 a[k + 6 | 0] = a[b + 6 | 0];
 a[k + 7 | 0] = a[b + 7 | 0];
}
function bd(a) {
 a = a | 0;
 H = a;
}
function be(a) {
 a = a | 0;
 I = a;
}
function bf(a) {
 a = a | 0;
 J = a;
}
function bg(a) {
 a = a | 0;
 K = a;
}
function bh(a) {
 a = a | 0;
 L = a;
}
function bi(a) {
 a = a | 0;
 M = a;
}
function bj(a) {
 a = a | 0;
 N = a;
}
function bk(a) {
 a = a | 0;
 O = a;
}
function bl(a) {
 a = a | 0;
 P = a;
}
function bm(a) {
 a = a | 0;
 Q = a;
}
function bn() {
 c[170] = q + 8;
 c[172] = p + 8;
 c[176] = p + 8;
}
function bo(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if ((d | 0) == 0) {
  return;
 } else {
  e = 0;
 }
 do {
  a[b + e | 0] = a[c + e | 0] | 0;
  e = e + 1 | 0;
 } while (e >>> 0 < d >>> 0);
 return;
}
function bp(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 if ((d | 0) == 0) {
  return;
 } else {
  e = 0;
 }
 do {
  f = b + e | 0;
  a[f] = a[f] ^ a[c + e | 0];
  e = e + 1 | 0;
 } while (e >>> 0 < d >>> 0);
 return;
}
function bq(a) {
 a = a | 0;
 var b = 0, c = 0, e = 0, f = 0;
 b = d[a + 1 | 0] | 0;
 c = d[a + 2 | 0] | 0;
 e = d[a + 3 | 0] | 0;
 f = cN(b << 8 | 0 >>> 24 | (d[a] | 0) | (c << 16 | 0 >>> 16) | (e << 24 | 0 >>> 8) | (0 << 8 | 0 >>> 24), 0 << 8 | b >>> 24 | (0 << 16 | c >>> 16) | (0 << 24 | e >>> 8) | (d[a + 4 | 0] | 0) | ((d[a + 5 | 0] | 0) << 8 | 0 >>> 24), 0 << 16 | 0 >>> 16, (d[a + 6 | 0] | 0) << 16 | 0 >>> 16) | 0;
 e = cN(f, H, 0 << 24 | 0 >>> 8, (d[a + 7 | 0] | 0) << 24 | 0 >>> 8) | 0;
 return (H = H, e) | 0;
}
function br(a) {
 a = a | 0;
 return (d[a + 1 | 0] | 0) << 8 | (d[a] | 0) | (d[a + 2 | 0] | 0) << 16 | (d[a + 3 | 0] | 0) << 24 | 0;
}
function bs(b, c) {
 b = b | 0;
 c = c | 0;
 a[b] = c & 255;
 a[b + 1 | 0] = c >>> 8 & 255;
 a[b + 2 | 0] = c >>> 16 & 255;
 a[b + 3 | 0] = c >>> 24 & 255;
 return;
}
function bt(a) {
 a = a | 0;
 c[a + 36 >> 2] = 0;
 c[a + 32 >> 2] = 0;
 c[a >> 2] = 1779033703;
 c[a + 4 >> 2] = -1150833019;
 c[a + 8 >> 2] = 1013904242;
 c[a + 12 >> 2] = -1521486534;
 c[a + 16 >> 2] = 1359893119;
 c[a + 20 >> 2] = -1694144372;
 c[a + 24 >> 2] = 528734635;
 c[a + 28 >> 2] = 1541459225;
 return;
}
function bu(a, b, d, e, f, g, h, i, j, k) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 l = cX(i, 0, h, 0) | 0;
 m = H;
 n = 0;
 if (m >>> 0 > n >>> 0 | m >>> 0 == n >>> 0 & l >>> 0 > 1073741823 >>> 0) {
  c[(aX() | 0) >> 2] = 27;
  o = -1;
  return o | 0;
 }
 l = cN(f, g, -1, -1) | 0;
 if ((l & f | 0) != 0 | (H & g | 0) != 0 | (f | 0) == 0 & (g | 0) == 0) {
  c[(aX() | 0) >> 2] = 22;
  o = -1;
  return o | 0;
 }
 do {
  if (!((33554431 / (i >>> 0) | 0) >>> 0 < h >>> 0 | h >>> 0 > 16777215)) {
   l = 0;
   if (l >>> 0 < g >>> 0 | l >>> 0 == g >>> 0 & (33554431 / (h >>> 0) | 0) >>> 0 < f >>> 0) {
    break;
   }
   l = h << 7;
   n = bL(ad(l, i) | 0) | 0;
   if ((n | 0) == 0) {
    o = -1;
    return o | 0;
   }
   m = bL(h << 8) | 0;
   do {
    if ((m | 0) != 0) {
     p = cX(l, 0, f, g) | 0;
     q = bL(p) | 0;
     if ((q | 0) == 0) {
      bM(m);
      break;
     }
     p = ad(i << 7, h) | 0;
     bJ(a, b, d, e, 1, 0, n, p);
     if ((i | 0) != 0) {
      r = h << 7;
      s = 0;
      do {
       bv(n + (ad(r, s) | 0) | 0, h, f, g, q, m);
       s = s + 1 | 0;
      } while (s >>> 0 < i >>> 0);
     }
     bJ(a, b, n, p, 1, 0, j, k);
     bM(q);
     bM(m);
     bM(n);
     o = 0;
     return o | 0;
    }
   } while (0);
   bM(n);
   o = -1;
   return o | 0;
  }
 } while (0);
 c[(aX() | 0) >> 2] = 12;
 o = -1;
 return o | 0;
}
function bv(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 g = b << 7;
 h = f + g | 0;
 bo(f, a, g);
 if ((c | 0) == 0 & (d | 0) == 0) {
  bo(a, f, g);
  return;
 }
 i = g;
 j = 0;
 k = 0;
 l = 0;
 do {
  m = cX(l, k, i, j) | 0;
  bo(e + m | 0, f, g);
  bw(f, h, b);
  l = cN(l, k, 1, 0) | 0;
  k = H;
 } while (k >>> 0 < d >>> 0 | k >>> 0 == d >>> 0 & l >>> 0 < c >>> 0);
 if ((c | 0) == 0 & (d | 0) == 0) {
  bo(a, f, g);
  return;
 }
 l = cN(c, d, -1, -1) | 0;
 k = H;
 j = g;
 i = 0;
 m = 0;
 n = 0;
 do {
  o = bx(f, b) | 0;
  p = cX(o & l, H & k, j, i) | 0;
  bp(f, e + p | 0, g);
  bw(f, h, b);
  n = cN(n, m, 1, 0) | 0;
  m = H;
 } while (m >>> 0 < d >>> 0 | m >>> 0 == d >>> 0 & n >>> 0 < c >>> 0);
 bo(a, f, g);
 return;
}
function bw(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 d = i;
 i = i + 64 | 0;
 e = d | 0;
 f = c << 1;
 bo(e, a + ((c << 7) - 64) | 0, 64);
 if ((f | 0) != 0) {
  g = 0;
  do {
   h = g << 6;
   bp(e, a + h | 0, 64);
   by(e);
   bo(b + h | 0, e, 64);
   g = g + 1 | 0;
  } while (g >>> 0 < f >>> 0);
 }
 if ((c | 0) == 0) {
  i = d;
  return;
 } else {
  j = 0;
 }
 do {
  bo(a + (j << 6) | 0, b + (j << 7) | 0, 64);
  j = j + 1 | 0;
 } while (j >>> 0 < c >>> 0);
 if ((c | 0) == 0) {
  i = d;
  return;
 } else {
  k = 0;
 }
 do {
  bo(a + (k + c << 6) | 0, b + (k << 7 | 64) | 0, 64);
  k = k + 1 | 0;
 } while (k >>> 0 < c >>> 0);
 i = d;
 return;
}
function bx(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0;
 c = bq(a + ((b << 7) - 64) | 0) | 0;
 return (H = H, c) | 0;
}
function by(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ab = 0;
 b = i;
 i = i + 128 | 0;
 d = b | 0;
 e = b + 64 | 0;
 f = 0;
 do {
  c[d + (f << 2) >> 2] = br(a + (f << 2) | 0) | 0;
  f = f + 1 | 0;
 } while (f >>> 0 < 16);
 f = d;
 g = e;
 cK(g | 0, f | 0, 64) | 0;
 f = e | 0;
 g = e + 48 | 0;
 h = e + 16 | 0;
 j = e + 32 | 0;
 k = e + 20 | 0;
 l = e + 4 | 0;
 m = e + 36 | 0;
 n = e + 52 | 0;
 o = e + 40 | 0;
 p = e + 24 | 0;
 q = e + 56 | 0;
 r = e + 8 | 0;
 s = e + 60 | 0;
 t = e + 44 | 0;
 u = e + 12 | 0;
 v = e + 28 | 0;
 w = 0;
 x = c[f >> 2] | 0;
 y = c[g >> 2] | 0;
 z = c[h >> 2] | 0;
 A = c[j >> 2] | 0;
 B = c[k >> 2] | 0;
 C = c[l >> 2] | 0;
 D = c[m >> 2] | 0;
 E = c[n >> 2] | 0;
 F = c[o >> 2] | 0;
 G = c[p >> 2] | 0;
 H = c[q >> 2] | 0;
 I = c[r >> 2] | 0;
 J = c[s >> 2] | 0;
 K = c[t >> 2] | 0;
 L = c[u >> 2] | 0;
 M = c[v >> 2] | 0;
 do {
  N = y + x | 0;
  O = (N << 7 | N >>> 25) ^ z;
  N = O + x | 0;
  P = (N << 9 | N >>> 23) ^ A;
  N = P + O | 0;
  Q = (N << 13 | N >>> 19) ^ y;
  N = Q + P | 0;
  R = (N << 18 | N >>> 14) ^ x;
  N = C + B | 0;
  S = (N << 7 | N >>> 25) ^ D;
  N = S + B | 0;
  T = (N << 9 | N >>> 23) ^ E;
  N = T + S | 0;
  U = (N << 13 | N >>> 19) ^ C;
  N = U + T | 0;
  V = (N << 18 | N >>> 14) ^ B;
  N = G + F | 0;
  W = (N << 7 | N >>> 25) ^ H;
  N = W + F | 0;
  X = (N << 9 | N >>> 23) ^ I;
  N = X + W | 0;
  Y = (N << 13 | N >>> 19) ^ G;
  N = Y + X | 0;
  Z = (N << 18 | N >>> 14) ^ F;
  N = K + J | 0;
  _ = (N << 7 | N >>> 25) ^ L;
  N = _ + J | 0;
  $ = (N << 9 | N >>> 23) ^ M;
  N = $ + _ | 0;
  aa = (N << 13 | N >>> 19) ^ K;
  N = aa + $ | 0;
  ab = (N << 18 | N >>> 14) ^ J;
  N = _ + R | 0;
  C = (N << 7 | N >>> 25) ^ U;
  U = C + R | 0;
  I = (U << 9 | U >>> 23) ^ X;
  X = I + C | 0;
  L = (X << 13 | X >>> 19) ^ _;
  _ = L + I | 0;
  x = (_ << 18 | _ >>> 14) ^ R;
  R = O + V | 0;
  G = (R << 7 | R >>> 25) ^ Y;
  Y = G + V | 0;
  M = (Y << 9 | Y >>> 23) ^ $;
  $ = M + G | 0;
  z = ($ << 13 | $ >>> 19) ^ O;
  O = z + M | 0;
  B = (O << 18 | O >>> 14) ^ V;
  V = S + Z | 0;
  K = (V << 7 | V >>> 25) ^ aa;
  aa = K + Z | 0;
  A = (aa << 9 | aa >>> 23) ^ P;
  P = A + K | 0;
  D = (P << 13 | P >>> 19) ^ S;
  S = D + A | 0;
  F = (S << 18 | S >>> 14) ^ Z;
  Z = W + ab | 0;
  y = (Z << 7 | Z >>> 25) ^ Q;
  Q = y + ab | 0;
  E = (Q << 9 | Q >>> 23) ^ T;
  T = E + y | 0;
  H = (T << 13 | T >>> 19) ^ W;
  W = H + E | 0;
  J = (W << 18 | W >>> 14) ^ ab;
  w = w + 2 | 0;
 } while (w >>> 0 < 8);
 c[f >> 2] = x;
 c[g >> 2] = y;
 c[h >> 2] = z;
 c[j >> 2] = A;
 c[k >> 2] = B;
 c[l >> 2] = C;
 c[m >> 2] = D;
 c[n >> 2] = E;
 c[o >> 2] = F;
 c[p >> 2] = G;
 c[q >> 2] = H;
 c[r >> 2] = I;
 c[s >> 2] = J;
 c[t >> 2] = K;
 c[u >> 2] = L;
 c[v >> 2] = M;
 M = d | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e >> 2] | 0);
 M = d + 4 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 4 >> 2] | 0);
 M = d + 8 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 8 >> 2] | 0);
 M = d + 12 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 12 >> 2] | 0);
 M = d + 16 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 16 >> 2] | 0);
 M = d + 20 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 20 >> 2] | 0);
 M = d + 24 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 24 >> 2] | 0);
 M = d + 28 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 28 >> 2] | 0);
 M = d + 32 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 32 >> 2] | 0);
 M = d + 36 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 36 >> 2] | 0);
 M = d + 40 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 40 >> 2] | 0);
 M = d + 44 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 44 >> 2] | 0);
 M = d + 48 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 48 >> 2] | 0);
 M = d + 52 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 52 >> 2] | 0);
 M = d + 56 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 56 >> 2] | 0);
 M = d + 60 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 60 >> 2] | 0);
 e = 0;
 do {
  bs(a + (e << 2) | 0, c[d + (e << 2) >> 2] | 0);
  e = e + 1 | 0;
 } while (e >>> 0 < 16);
 i = b;
 return;
}
function bz(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 e = a + 32 | 0;
 f = a + 36 | 0;
 g = c[f >> 2] | 0;
 h = g >>> 3 & 63;
 i = aN(g | 0, d << 3 | 0) | 0;
 c[f >> 2] = i;
 if (H) {
  i = e | 0;
  c[i >> 2] = (c[i >> 2] | 0) + 1;
 }
 i = e | 0;
 c[i >> 2] = (c[i >> 2] | 0) + (d >>> 29);
 i = 64 - h | 0;
 e = a + 40 + h | 0;
 if (i >>> 0 > d >>> 0) {
  cK(e | 0, b | 0, d) | 0;
  return;
 }
 cK(e | 0, b | 0, i) | 0;
 e = a | 0;
 h = a + 40 | 0;
 bA(e, h);
 a = b + i | 0;
 b = d - i | 0;
 if (b >>> 0 > 63) {
  i = b;
  d = a;
  while (1) {
   bA(e, d);
   f = d + 64 | 0;
   g = i - 64 | 0;
   if (g >>> 0 > 63) {
    i = g;
    d = f;
   } else {
    j = g;
    k = f;
    break;
   }
  }
 } else {
  j = b;
  k = a;
 }
 cK(h | 0, k | 0, j) | 0;
 return;
}
function bA(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 d = i;
 i = i + 288 | 0;
 e = d | 0;
 f = d + 256 | 0;
 g = e | 0;
 bK(g, b);
 b = 16;
 do {
  h = c[e + (b - 2 << 2) >> 2] | 0;
  j = c[e + (b - 15 << 2) >> 2] | 0;
  c[e + (b << 2) >> 2] = (c[e + (b - 16 << 2) >> 2] | 0) + (c[e + (b - 7 << 2) >> 2] | 0) + ((h >>> 19 | h << 13) ^ h >>> 10 ^ (h >>> 17 | h << 15)) + ((j >>> 18 | j << 14) ^ j >>> 3 ^ (j >>> 7 | j << 25));
  b = b + 1 | 0;
 } while ((b | 0) < 64);
 b = f;
 j = a;
 cK(b | 0, j | 0, 32) | 0;
 j = f + 28 | 0;
 b = f + 16 | 0;
 h = c[b >> 2] | 0;
 k = f + 20 | 0;
 l = f + 24 | 0;
 m = c[l >> 2] | 0;
 n = (c[j >> 2] | 0) + 1116352408 + (c[g >> 2] | 0) + ((h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7)) + ((m ^ c[k >> 2]) & h ^ m) | 0;
 m = f | 0;
 h = c[m >> 2] | 0;
 g = f + 4 | 0;
 o = c[g >> 2] | 0;
 p = f + 8 | 0;
 q = c[p >> 2] | 0;
 r = f + 12 | 0;
 c[r >> 2] = (c[r >> 2] | 0) + n;
 s = ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + n + ((q | o) & h | q & o) | 0;
 c[j >> 2] = s;
 o = c[r >> 2] | 0;
 q = c[k >> 2] | 0;
 h = (c[l >> 2] | 0) + 1899447441 + (c[e + 4 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[b >> 2]) & o ^ q) | 0;
 q = c[m >> 2] | 0;
 o = c[g >> 2] | 0;
 c[p >> 2] = (c[p >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[l >> 2] = n;
 q = c[p >> 2] | 0;
 o = c[b >> 2] | 0;
 s = (c[k >> 2] | 0) - 1245643825 + (c[e + 8 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[r >> 2]) & q ^ o) | 0;
 o = c[j >> 2] | 0;
 q = c[m >> 2] | 0;
 c[g >> 2] = (c[g >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[k >> 2] = h;
 o = c[g >> 2] | 0;
 q = c[r >> 2] | 0;
 n = (c[b >> 2] | 0) - 373957723 + (c[e + 12 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[p >> 2]) & o ^ q) | 0;
 q = c[l >> 2] | 0;
 o = c[j >> 2] | 0;
 c[m >> 2] = (c[m >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[b >> 2] = s;
 q = c[m >> 2] | 0;
 o = c[p >> 2] | 0;
 h = (c[r >> 2] | 0) + 961987163 + (c[e + 16 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[g >> 2]) & q ^ o) | 0;
 o = c[k >> 2] | 0;
 q = c[l >> 2] | 0;
 c[j >> 2] = (c[j >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[r >> 2] = n;
 o = c[j >> 2] | 0;
 q = c[g >> 2] | 0;
 s = (c[p >> 2] | 0) + 1508970993 + (c[e + 20 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[m >> 2]) & o ^ q) | 0;
 q = c[b >> 2] | 0;
 o = c[k >> 2] | 0;
 c[l >> 2] = (c[l >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[p >> 2] = h;
 q = c[l >> 2] | 0;
 o = c[m >> 2] | 0;
 n = (c[g >> 2] | 0) - 1841331548 + (c[e + 24 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[j >> 2]) & q ^ o) | 0;
 o = c[r >> 2] | 0;
 q = c[b >> 2] | 0;
 c[k >> 2] = (c[k >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[g >> 2] = s;
 o = c[k >> 2] | 0;
 q = c[j >> 2] | 0;
 h = (c[m >> 2] | 0) - 1424204075 + (c[e + 28 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[l >> 2]) & o ^ q) | 0;
 q = c[p >> 2] | 0;
 o = c[r >> 2] | 0;
 c[b >> 2] = (c[b >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[m >> 2] = n;
 q = c[b >> 2] | 0;
 o = c[l >> 2] | 0;
 s = (c[j >> 2] | 0) - 670586216 + (c[e + 32 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[k >> 2]) & q ^ o) | 0;
 o = c[g >> 2] | 0;
 q = c[p >> 2] | 0;
 c[r >> 2] = (c[r >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[j >> 2] = h;
 o = c[r >> 2] | 0;
 q = c[k >> 2] | 0;
 n = (c[l >> 2] | 0) + 310598401 + (c[e + 36 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[b >> 2]) & o ^ q) | 0;
 q = c[m >> 2] | 0;
 o = c[g >> 2] | 0;
 c[p >> 2] = (c[p >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[l >> 2] = s;
 q = c[p >> 2] | 0;
 o = c[b >> 2] | 0;
 h = (c[k >> 2] | 0) + 607225278 + (c[e + 40 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[r >> 2]) & q ^ o) | 0;
 o = c[j >> 2] | 0;
 q = c[m >> 2] | 0;
 c[g >> 2] = (c[g >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[k >> 2] = n;
 o = c[g >> 2] | 0;
 q = c[r >> 2] | 0;
 s = (c[b >> 2] | 0) + 1426881987 + (c[e + 44 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[p >> 2]) & o ^ q) | 0;
 q = c[l >> 2] | 0;
 o = c[j >> 2] | 0;
 c[m >> 2] = (c[m >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[b >> 2] = h;
 q = c[m >> 2] | 0;
 o = c[p >> 2] | 0;
 n = (c[r >> 2] | 0) + 1925078388 + (c[e + 48 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[g >> 2]) & q ^ o) | 0;
 o = c[k >> 2] | 0;
 q = c[l >> 2] | 0;
 c[j >> 2] = (c[j >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[r >> 2] = s;
 o = c[j >> 2] | 0;
 q = c[g >> 2] | 0;
 h = (c[p >> 2] | 0) - 2132889090 + (c[e + 52 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[m >> 2]) & o ^ q) | 0;
 q = c[b >> 2] | 0;
 o = c[k >> 2] | 0;
 c[l >> 2] = (c[l >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[p >> 2] = n;
 q = c[l >> 2] | 0;
 o = c[m >> 2] | 0;
 s = (c[g >> 2] | 0) - 1680079193 + (c[e + 56 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[j >> 2]) & q ^ o) | 0;
 o = c[r >> 2] | 0;
 q = c[b >> 2] | 0;
 c[k >> 2] = (c[k >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[g >> 2] = h;
 o = c[k >> 2] | 0;
 q = c[j >> 2] | 0;
 n = (c[m >> 2] | 0) - 1046744716 + (c[e + 60 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[l >> 2]) & o ^ q) | 0;
 q = c[p >> 2] | 0;
 o = c[r >> 2] | 0;
 c[b >> 2] = (c[b >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[m >> 2] = s;
 q = c[b >> 2] | 0;
 o = c[l >> 2] | 0;
 h = (c[j >> 2] | 0) - 459576895 + (c[e + 64 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[k >> 2]) & q ^ o) | 0;
 o = c[g >> 2] | 0;
 q = c[p >> 2] | 0;
 c[r >> 2] = (c[r >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[j >> 2] = n;
 o = c[r >> 2] | 0;
 q = c[k >> 2] | 0;
 s = (c[l >> 2] | 0) - 272742522 + (c[e + 68 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[b >> 2]) & o ^ q) | 0;
 q = c[m >> 2] | 0;
 o = c[g >> 2] | 0;
 c[p >> 2] = (c[p >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[l >> 2] = h;
 q = c[p >> 2] | 0;
 o = c[b >> 2] | 0;
 n = (c[k >> 2] | 0) + 264347078 + (c[e + 72 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[r >> 2]) & q ^ o) | 0;
 o = c[j >> 2] | 0;
 q = c[m >> 2] | 0;
 c[g >> 2] = (c[g >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[k >> 2] = s;
 o = c[g >> 2] | 0;
 q = c[r >> 2] | 0;
 h = (c[b >> 2] | 0) + 604807628 + (c[e + 76 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[p >> 2]) & o ^ q) | 0;
 q = c[l >> 2] | 0;
 o = c[j >> 2] | 0;
 c[m >> 2] = (c[m >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[b >> 2] = n;
 q = c[m >> 2] | 0;
 o = c[p >> 2] | 0;
 s = (c[r >> 2] | 0) + 770255983 + (c[e + 80 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[g >> 2]) & q ^ o) | 0;
 o = c[k >> 2] | 0;
 q = c[l >> 2] | 0;
 c[j >> 2] = (c[j >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[r >> 2] = h;
 o = c[j >> 2] | 0;
 q = c[g >> 2] | 0;
 n = (c[p >> 2] | 0) + 1249150122 + (c[e + 84 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[m >> 2]) & o ^ q) | 0;
 q = c[b >> 2] | 0;
 o = c[k >> 2] | 0;
 c[l >> 2] = (c[l >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[p >> 2] = s;
 q = c[l >> 2] | 0;
 o = c[m >> 2] | 0;
 h = (c[g >> 2] | 0) + 1555081692 + (c[e + 88 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[j >> 2]) & q ^ o) | 0;
 o = c[r >> 2] | 0;
 q = c[b >> 2] | 0;
 c[k >> 2] = (c[k >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[g >> 2] = n;
 o = c[k >> 2] | 0;
 q = c[j >> 2] | 0;
 s = (c[m >> 2] | 0) + 1996064986 + (c[e + 92 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[l >> 2]) & o ^ q) | 0;
 q = c[p >> 2] | 0;
 o = c[r >> 2] | 0;
 c[b >> 2] = (c[b >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[m >> 2] = h;
 q = c[b >> 2] | 0;
 o = c[l >> 2] | 0;
 n = (c[j >> 2] | 0) - 1740746414 + (c[e + 96 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[k >> 2]) & q ^ o) | 0;
 o = c[g >> 2] | 0;
 q = c[p >> 2] | 0;
 c[r >> 2] = (c[r >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[j >> 2] = s;
 o = c[r >> 2] | 0;
 q = c[k >> 2] | 0;
 h = (c[l >> 2] | 0) - 1473132947 + (c[e + 100 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[b >> 2]) & o ^ q) | 0;
 q = c[m >> 2] | 0;
 o = c[g >> 2] | 0;
 c[p >> 2] = (c[p >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[l >> 2] = n;
 q = c[p >> 2] | 0;
 o = c[b >> 2] | 0;
 s = (c[k >> 2] | 0) - 1341970488 + (c[e + 104 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[r >> 2]) & q ^ o) | 0;
 o = c[j >> 2] | 0;
 q = c[m >> 2] | 0;
 c[g >> 2] = (c[g >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[k >> 2] = h;
 o = c[g >> 2] | 0;
 q = c[r >> 2] | 0;
 n = (c[b >> 2] | 0) - 1084653625 + (c[e + 108 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[p >> 2]) & o ^ q) | 0;
 q = c[l >> 2] | 0;
 o = c[j >> 2] | 0;
 c[m >> 2] = (c[m >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[b >> 2] = s;
 q = c[m >> 2] | 0;
 o = c[p >> 2] | 0;
 h = (c[r >> 2] | 0) - 958395405 + (c[e + 112 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[g >> 2]) & q ^ o) | 0;
 o = c[k >> 2] | 0;
 q = c[l >> 2] | 0;
 c[j >> 2] = (c[j >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[r >> 2] = n;
 o = c[j >> 2] | 0;
 q = c[g >> 2] | 0;
 s = (c[p >> 2] | 0) - 710438585 + (c[e + 116 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[m >> 2]) & o ^ q) | 0;
 q = c[b >> 2] | 0;
 o = c[k >> 2] | 0;
 c[l >> 2] = (c[l >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[p >> 2] = h;
 q = c[l >> 2] | 0;
 o = c[m >> 2] | 0;
 n = (c[g >> 2] | 0) + 113926993 + (c[e + 120 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[j >> 2]) & q ^ o) | 0;
 o = c[r >> 2] | 0;
 q = c[b >> 2] | 0;
 c[k >> 2] = (c[k >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[g >> 2] = s;
 o = c[k >> 2] | 0;
 q = c[j >> 2] | 0;
 h = (c[m >> 2] | 0) + 338241895 + (c[e + 124 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[l >> 2]) & o ^ q) | 0;
 q = c[p >> 2] | 0;
 o = c[r >> 2] | 0;
 c[b >> 2] = (c[b >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[m >> 2] = n;
 q = c[b >> 2] | 0;
 o = c[l >> 2] | 0;
 s = (c[j >> 2] | 0) + 666307205 + (c[e + 128 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[k >> 2]) & q ^ o) | 0;
 o = c[g >> 2] | 0;
 q = c[p >> 2] | 0;
 c[r >> 2] = (c[r >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[j >> 2] = h;
 o = c[r >> 2] | 0;
 q = c[k >> 2] | 0;
 n = (c[l >> 2] | 0) + 773529912 + (c[e + 132 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[b >> 2]) & o ^ q) | 0;
 q = c[m >> 2] | 0;
 o = c[g >> 2] | 0;
 c[p >> 2] = (c[p >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[l >> 2] = s;
 q = c[p >> 2] | 0;
 o = c[b >> 2] | 0;
 h = (c[k >> 2] | 0) + 1294757372 + (c[e + 136 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[r >> 2]) & q ^ o) | 0;
 o = c[j >> 2] | 0;
 q = c[m >> 2] | 0;
 c[g >> 2] = (c[g >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[k >> 2] = n;
 o = c[g >> 2] | 0;
 q = c[r >> 2] | 0;
 s = (c[b >> 2] | 0) + 1396182291 + (c[e + 140 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[p >> 2]) & o ^ q) | 0;
 q = c[l >> 2] | 0;
 o = c[j >> 2] | 0;
 c[m >> 2] = (c[m >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[b >> 2] = h;
 q = c[m >> 2] | 0;
 o = c[p >> 2] | 0;
 n = (c[r >> 2] | 0) + 1695183700 + (c[e + 144 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[g >> 2]) & q ^ o) | 0;
 o = c[k >> 2] | 0;
 q = c[l >> 2] | 0;
 c[j >> 2] = (c[j >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[r >> 2] = s;
 o = c[j >> 2] | 0;
 q = c[g >> 2] | 0;
 h = (c[p >> 2] | 0) + 1986661051 + (c[e + 148 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[m >> 2]) & o ^ q) | 0;
 q = c[b >> 2] | 0;
 o = c[k >> 2] | 0;
 c[l >> 2] = (c[l >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[p >> 2] = n;
 q = c[l >> 2] | 0;
 o = c[m >> 2] | 0;
 s = (c[g >> 2] | 0) - 2117940946 + (c[e + 152 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[j >> 2]) & q ^ o) | 0;
 o = c[r >> 2] | 0;
 q = c[b >> 2] | 0;
 c[k >> 2] = (c[k >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[g >> 2] = h;
 o = c[k >> 2] | 0;
 q = c[j >> 2] | 0;
 n = (c[m >> 2] | 0) - 1838011259 + (c[e + 156 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[l >> 2]) & o ^ q) | 0;
 q = c[p >> 2] | 0;
 o = c[r >> 2] | 0;
 c[b >> 2] = (c[b >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[m >> 2] = s;
 q = c[b >> 2] | 0;
 o = c[l >> 2] | 0;
 h = (c[j >> 2] | 0) - 1564481375 + (c[e + 160 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[k >> 2]) & q ^ o) | 0;
 o = c[g >> 2] | 0;
 q = c[p >> 2] | 0;
 c[r >> 2] = (c[r >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[j >> 2] = n;
 o = c[r >> 2] | 0;
 q = c[k >> 2] | 0;
 s = (c[l >> 2] | 0) - 1474664885 + (c[e + 164 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[b >> 2]) & o ^ q) | 0;
 q = c[m >> 2] | 0;
 o = c[g >> 2] | 0;
 c[p >> 2] = (c[p >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[l >> 2] = h;
 q = c[p >> 2] | 0;
 o = c[b >> 2] | 0;
 n = (c[k >> 2] | 0) - 1035236496 + (c[e + 168 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[r >> 2]) & q ^ o) | 0;
 o = c[j >> 2] | 0;
 q = c[m >> 2] | 0;
 c[g >> 2] = (c[g >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[k >> 2] = s;
 o = c[g >> 2] | 0;
 q = c[r >> 2] | 0;
 h = (c[b >> 2] | 0) - 949202525 + (c[e + 172 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[p >> 2]) & o ^ q) | 0;
 q = c[l >> 2] | 0;
 o = c[j >> 2] | 0;
 c[m >> 2] = (c[m >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[b >> 2] = n;
 q = c[m >> 2] | 0;
 o = c[p >> 2] | 0;
 s = (c[r >> 2] | 0) - 778901479 + (c[e + 176 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[g >> 2]) & q ^ o) | 0;
 o = c[k >> 2] | 0;
 q = c[l >> 2] | 0;
 c[j >> 2] = (c[j >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[r >> 2] = h;
 o = c[j >> 2] | 0;
 q = c[g >> 2] | 0;
 n = (c[p >> 2] | 0) - 694614492 + (c[e + 180 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[m >> 2]) & o ^ q) | 0;
 q = c[b >> 2] | 0;
 o = c[k >> 2] | 0;
 c[l >> 2] = (c[l >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[p >> 2] = s;
 q = c[l >> 2] | 0;
 o = c[m >> 2] | 0;
 h = (c[g >> 2] | 0) - 200395387 + (c[e + 184 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[j >> 2]) & q ^ o) | 0;
 o = c[r >> 2] | 0;
 q = c[b >> 2] | 0;
 c[k >> 2] = (c[k >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[g >> 2] = n;
 o = c[k >> 2] | 0;
 q = c[j >> 2] | 0;
 s = (c[m >> 2] | 0) + 275423344 + (c[e + 188 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[l >> 2]) & o ^ q) | 0;
 q = c[p >> 2] | 0;
 o = c[r >> 2] | 0;
 c[b >> 2] = (c[b >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[m >> 2] = h;
 q = c[b >> 2] | 0;
 o = c[l >> 2] | 0;
 n = (c[j >> 2] | 0) + 430227734 + (c[e + 192 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[k >> 2]) & q ^ o) | 0;
 o = c[g >> 2] | 0;
 q = c[p >> 2] | 0;
 c[r >> 2] = (c[r >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[j >> 2] = s;
 o = c[r >> 2] | 0;
 q = c[k >> 2] | 0;
 h = (c[l >> 2] | 0) + 506948616 + (c[e + 196 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[b >> 2]) & o ^ q) | 0;
 q = c[m >> 2] | 0;
 o = c[g >> 2] | 0;
 c[p >> 2] = (c[p >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[l >> 2] = n;
 q = c[p >> 2] | 0;
 o = c[b >> 2] | 0;
 s = (c[k >> 2] | 0) + 659060556 + (c[e + 200 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[r >> 2]) & q ^ o) | 0;
 o = c[j >> 2] | 0;
 q = c[m >> 2] | 0;
 c[g >> 2] = (c[g >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[k >> 2] = h;
 o = c[g >> 2] | 0;
 q = c[r >> 2] | 0;
 n = (c[b >> 2] | 0) + 883997877 + (c[e + 204 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[p >> 2]) & o ^ q) | 0;
 q = c[l >> 2] | 0;
 o = c[j >> 2] | 0;
 c[m >> 2] = (c[m >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[b >> 2] = s;
 q = c[m >> 2] | 0;
 o = c[p >> 2] | 0;
 h = (c[r >> 2] | 0) + 958139571 + (c[e + 208 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[g >> 2]) & q ^ o) | 0;
 o = c[k >> 2] | 0;
 q = c[l >> 2] | 0;
 c[j >> 2] = (c[j >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[r >> 2] = n;
 o = c[j >> 2] | 0;
 q = c[g >> 2] | 0;
 s = (c[p >> 2] | 0) + 1322822218 + (c[e + 212 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[m >> 2]) & o ^ q) | 0;
 q = c[b >> 2] | 0;
 o = c[k >> 2] | 0;
 c[l >> 2] = (c[l >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[p >> 2] = h;
 q = c[l >> 2] | 0;
 o = c[m >> 2] | 0;
 n = (c[g >> 2] | 0) + 1537002063 + (c[e + 216 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[j >> 2]) & q ^ o) | 0;
 o = c[r >> 2] | 0;
 q = c[b >> 2] | 0;
 c[k >> 2] = (c[k >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[g >> 2] = s;
 o = c[k >> 2] | 0;
 q = c[j >> 2] | 0;
 h = (c[m >> 2] | 0) + 1747873779 + (c[e + 220 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[l >> 2]) & o ^ q) | 0;
 q = c[p >> 2] | 0;
 o = c[r >> 2] | 0;
 c[b >> 2] = (c[b >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[m >> 2] = n;
 q = c[b >> 2] | 0;
 o = c[l >> 2] | 0;
 s = (c[j >> 2] | 0) + 1955562222 + (c[e + 224 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[k >> 2]) & q ^ o) | 0;
 o = c[g >> 2] | 0;
 q = c[p >> 2] | 0;
 c[r >> 2] = (c[r >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[j >> 2] = h;
 o = c[r >> 2] | 0;
 q = c[k >> 2] | 0;
 n = (c[l >> 2] | 0) + 2024104815 + (c[e + 228 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[b >> 2]) & o ^ q) | 0;
 q = c[m >> 2] | 0;
 o = c[g >> 2] | 0;
 c[p >> 2] = (c[p >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[l >> 2] = s;
 q = c[p >> 2] | 0;
 o = c[b >> 2] | 0;
 h = (c[k >> 2] | 0) - 2067236844 + (c[e + 232 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[r >> 2]) & q ^ o) | 0;
 o = c[j >> 2] | 0;
 q = c[m >> 2] | 0;
 c[g >> 2] = (c[g >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[k >> 2] = n;
 o = c[g >> 2] | 0;
 q = c[r >> 2] | 0;
 s = (c[b >> 2] | 0) - 1933114872 + (c[e + 236 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[p >> 2]) & o ^ q) | 0;
 q = c[l >> 2] | 0;
 o = c[j >> 2] | 0;
 c[m >> 2] = (c[m >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[b >> 2] = h;
 q = c[m >> 2] | 0;
 o = c[p >> 2] | 0;
 n = (c[r >> 2] | 0) - 1866530822 + (c[e + 240 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[g >> 2]) & q ^ o) | 0;
 o = c[k >> 2] | 0;
 q = c[l >> 2] | 0;
 c[j >> 2] = (c[j >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[r >> 2] = s;
 o = c[j >> 2] | 0;
 q = c[g >> 2] | 0;
 h = (c[p >> 2] | 0) - 1538233109 + (c[e + 244 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[m >> 2]) & o ^ q) | 0;
 q = c[b >> 2] | 0;
 o = c[k >> 2] | 0;
 c[l >> 2] = (c[l >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[p >> 2] = n;
 q = c[l >> 2] | 0;
 o = c[m >> 2] | 0;
 s = (c[g >> 2] | 0) - 1090935817 + (c[e + 248 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[j >> 2]) & q ^ o) | 0;
 o = c[r >> 2] | 0;
 q = c[b >> 2] | 0;
 c[k >> 2] = (c[k >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[g >> 2] = h;
 g = c[k >> 2] | 0;
 k = c[j >> 2] | 0;
 j = (c[m >> 2] | 0) - 965641998 + (c[e + 252 >> 2] | 0) + ((g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7)) + ((k ^ c[l >> 2]) & g ^ k) | 0;
 k = c[p >> 2] | 0;
 p = c[r >> 2] | 0;
 c[b >> 2] = (c[b >> 2] | 0) + j;
 b = j + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((p | k) & h | p & k) | 0;
 c[m >> 2] = b;
 c[a >> 2] = (c[a >> 2] | 0) + b;
 b = a + 4 | 0;
 c[b >> 2] = (c[b >> 2] | 0) + (c[f + 4 >> 2] | 0);
 b = a + 8 | 0;
 c[b >> 2] = (c[b >> 2] | 0) + (c[f + 8 >> 2] | 0);
 b = a + 12 | 0;
 c[b >> 2] = (c[b >> 2] | 0) + (c[f + 12 >> 2] | 0);
 b = a + 16 | 0;
 c[b >> 2] = (c[b >> 2] | 0) + (c[f + 16 >> 2] | 0);
 b = a + 20 | 0;
 c[b >> 2] = (c[b >> 2] | 0) + (c[f + 20 >> 2] | 0);
 b = a + 24 | 0;
 c[b >> 2] = (c[b >> 2] | 0) + (c[f + 24 >> 2] | 0);
 b = a + 28 | 0;
 c[b >> 2] = (c[b >> 2] | 0) + (c[f + 28 >> 2] | 0);
 i = d;
 return;
}
function bB(b, c) {
 b = b | 0;
 c = c | 0;
 a[b + 3 | 0] = c & 255;
 a[b + 2 | 0] = c >>> 8 & 255;
 a[b + 1 | 0] = c >>> 16 & 255;
 a[b] = c >>> 24 & 255;
 return;
}
function bC(a) {
 a = a | 0;
 return (d[a + 2 | 0] | 0) << 8 | (d[a + 3 | 0] | 0) | (d[a + 1 | 0] | 0) << 16 | (d[a] | 0) << 24 | 0;
}
function bD(a, b) {
 a = a | 0;
 b = b | 0;
 bE(b);
 bF(a, b | 0, 32);
 cL(b | 0, 0, 104);
 return;
}
function bE(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 b = i;
 i = i + 8 | 0;
 d = b | 0;
 bF(d, a + 32 | 0, 8);
 e = (c[a + 36 >> 2] | 0) >>> 3 & 63;
 bz(a, 720, (e >>> 0 < 56 ? 56 : 120) - e | 0);
 bz(a, d, 8);
 i = b;
 return;
}
function bF(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = d >>> 2;
 if ((e | 0) == 0) {
  return;
 } else {
  f = 0;
 }
 do {
  bB(a + (f << 2) | 0, c[b + (f << 2) >> 2] | 0);
  f = f + 1 | 0;
 } while (f >>> 0 < e >>> 0);
 return;
}
function bG(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
 e = i;
 i = i + 96 | 0;
 f = e | 0;
 if (d >>> 0 > 64) {
  g = b | 0;
  bt(g);
  bz(g, c, d);
  h = e + 64 | 0;
  bD(h, g);
  j = h;
  k = 32;
 } else {
  j = c;
  k = d;
 }
 d = b | 0;
 bt(d);
 c = f | 0;
 cL(c | 0, 54, 64);
 if ((k | 0) != 0) {
  h = 0;
  do {
   g = f + h | 0;
   a[g] = a[g] ^ a[j + h | 0];
   h = h + 1 | 0;
  } while (h >>> 0 < k >>> 0);
 }
 bz(d, c, 64);
 d = b + 104 | 0;
 bt(d);
 cL(c | 0, 92, 64);
 if ((k | 0) == 0) {
  bz(d, c, 64);
  i = e;
  return;
 } else {
  l = 0;
 }
 do {
  b = f + l | 0;
  a[b] = a[b] ^ a[j + l | 0];
  l = l + 1 | 0;
 } while (l >>> 0 < k >>> 0);
 bz(d, c, 64);
 i = e;
 return;
}
function bH(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 bz(a | 0, b, c);
 return;
}
function bI(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0, d = 0, e = 0;
 c = i;
 i = i + 32 | 0;
 d = c | 0;
 bD(d, b | 0);
 e = b + 104 | 0;
 bz(e, d, 32);
 bD(a, e);
 i = c;
 return;
}
function bJ(b, c, d, e, f, g, h, j) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 k = i;
 i = i + 488 | 0;
 l = k | 0;
 m = k + 208 | 0;
 n = k + 424 | 0;
 o = k + 456 | 0;
 bG(l, b, c);
 bH(l, d, e);
 if ((j | 0) == 0) {
  i = k;
  return;
 }
 e = k + 416 | 0;
 d = m;
 p = l;
 l = n | 0;
 q = o | 0;
 r = 0;
 s = g >>> 0 < r >>> 0 | g >>> 0 == r >>> 0 & f >>> 0 < 2 >>> 0;
 r = 0;
 t = 0;
 do {
  r = r + 1 | 0;
  bB(e, r);
  cK(d | 0, p | 0, 208) | 0;
  bH(m, e, 4);
  bI(l, m);
  cK(q | 0, l | 0, 32) | 0;
  if (!s) {
   u = 0;
   v = 2;
   do {
    bG(m, b, c);
    bH(m, l, 32);
    bI(l, m);
    w = 0;
    do {
     x = o + w | 0;
     a[x] = a[x] ^ a[n + w | 0];
     w = w + 1 | 0;
    } while ((w | 0) < 32);
    v = cN(v, u, 1, 0) | 0;
    u = H;
   } while (!(u >>> 0 > g >>> 0 | u >>> 0 == g >>> 0 & v >>> 0 > f >>> 0));
  }
  v = j - t | 0;
  u = v >>> 0 > 32 ? 32 : v;
  v = h + t | 0;
  cK(v | 0, q | 0, u) | 0;
  t = r << 5;
 } while (t >>> 0 < j >>> 0);
 i = k;
 return;
}
function bK(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 d = 0;
 do {
  c[a + (d << 2) >> 2] = bC(b + (d << 2) | 0) | 0;
  d = d + 1 | 0;
 } while (d >>> 0 < 16);
 return;
}
function bL(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ab = 0, ac = 0, ad = 0, ae = 0, af = 0, ag = 0, ah = 0, ai = 0, aj = 0, ak = 0, al = 0, am = 0, an = 0, ao = 0, ap = 0, aq = 0, as = 0, at = 0, av = 0, aw = 0, ax = 0, ay = 0, az = 0, aA = 0, aB = 0, aC = 0, aD = 0, aE = 0, aF = 0, aG = 0, aH = 0, aI = 0;
 do {
  if (a >>> 0 < 245) {
   if (a >>> 0 < 11) {
    b = 16;
   } else {
    b = a + 11 & -8;
   }
   d = b >>> 3;
   e = c[208] | 0;
   f = e >>> (d >>> 0);
   if ((f & 3 | 0) != 0) {
    g = (f & 1 ^ 1) + d | 0;
    h = g << 1;
    i = 872 + (h << 2) | 0;
    j = 872 + (h + 2 << 2) | 0;
    h = c[j >> 2] | 0;
    k = h + 8 | 0;
    l = c[k >> 2] | 0;
    do {
     if ((i | 0) == (l | 0)) {
      c[208] = e & ~(1 << g);
     } else {
      if (l >>> 0 < (c[212] | 0) >>> 0) {
       au();
       return 0;
      }
      m = l + 12 | 0;
      if ((c[m >> 2] | 0) == (h | 0)) {
       c[m >> 2] = i;
       c[j >> 2] = l;
       break;
      } else {
       au();
       return 0;
      }
     }
    } while (0);
    l = g << 3;
    c[h + 4 >> 2] = l | 3;
    j = h + (l | 4) | 0;
    c[j >> 2] = c[j >> 2] | 1;
    n = k;
    return n | 0;
   }
   if (b >>> 0 <= (c[210] | 0) >>> 0) {
    o = b;
    break;
   }
   if ((f | 0) != 0) {
    j = 2 << d;
    l = f << d & (j | -j);
    j = (l & -l) - 1 | 0;
    l = j >>> 12 & 16;
    i = j >>> (l >>> 0);
    j = i >>> 5 & 8;
    m = i >>> (j >>> 0);
    i = m >>> 2 & 4;
    p = m >>> (i >>> 0);
    m = p >>> 1 & 2;
    q = p >>> (m >>> 0);
    p = q >>> 1 & 1;
    r = (j | l | i | m | p) + (q >>> (p >>> 0)) | 0;
    p = r << 1;
    q = 872 + (p << 2) | 0;
    m = 872 + (p + 2 << 2) | 0;
    p = c[m >> 2] | 0;
    i = p + 8 | 0;
    l = c[i >> 2] | 0;
    do {
     if ((q | 0) == (l | 0)) {
      c[208] = e & ~(1 << r);
     } else {
      if (l >>> 0 < (c[212] | 0) >>> 0) {
       au();
       return 0;
      }
      j = l + 12 | 0;
      if ((c[j >> 2] | 0) == (p | 0)) {
       c[j >> 2] = q;
       c[m >> 2] = l;
       break;
      } else {
       au();
       return 0;
      }
     }
    } while (0);
    l = r << 3;
    m = l - b | 0;
    c[p + 4 >> 2] = b | 3;
    q = p;
    e = q + b | 0;
    c[q + (b | 4) >> 2] = m | 1;
    c[q + l >> 2] = m;
    l = c[210] | 0;
    if ((l | 0) != 0) {
     q = c[213] | 0;
     d = l >>> 3;
     l = d << 1;
     f = 872 + (l << 2) | 0;
     k = c[208] | 0;
     h = 1 << d;
     do {
      if ((k & h | 0) == 0) {
       c[208] = k | h;
       s = f;
       t = 872 + (l + 2 << 2) | 0;
      } else {
       d = 872 + (l + 2 << 2) | 0;
       g = c[d >> 2] | 0;
       if (g >>> 0 >= (c[212] | 0) >>> 0) {
        s = g;
        t = d;
        break;
       }
       au();
       return 0;
      }
     } while (0);
     c[t >> 2] = q;
     c[s + 12 >> 2] = q;
     c[q + 8 >> 2] = s;
     c[q + 12 >> 2] = f;
    }
    c[210] = m;
    c[213] = e;
    n = i;
    return n | 0;
   }
   l = c[209] | 0;
   if ((l | 0) == 0) {
    o = b;
    break;
   }
   h = (l & -l) - 1 | 0;
   l = h >>> 12 & 16;
   k = h >>> (l >>> 0);
   h = k >>> 5 & 8;
   p = k >>> (h >>> 0);
   k = p >>> 2 & 4;
   r = p >>> (k >>> 0);
   p = r >>> 1 & 2;
   d = r >>> (p >>> 0);
   r = d >>> 1 & 1;
   g = c[1136 + ((h | l | k | p | r) + (d >>> (r >>> 0)) << 2) >> 2] | 0;
   r = g;
   d = g;
   p = (c[g + 4 >> 2] & -8) - b | 0;
   while (1) {
    g = c[r + 16 >> 2] | 0;
    if ((g | 0) == 0) {
     k = c[r + 20 >> 2] | 0;
     if ((k | 0) == 0) {
      break;
     } else {
      u = k;
     }
    } else {
     u = g;
    }
    g = (c[u + 4 >> 2] & -8) - b | 0;
    k = g >>> 0 < p >>> 0;
    r = u;
    d = k ? u : d;
    p = k ? g : p;
   }
   r = d;
   i = c[212] | 0;
   if (r >>> 0 < i >>> 0) {
    au();
    return 0;
   }
   e = r + b | 0;
   m = e;
   if (r >>> 0 >= e >>> 0) {
    au();
    return 0;
   }
   e = c[d + 24 >> 2] | 0;
   f = c[d + 12 >> 2] | 0;
   do {
    if ((f | 0) == (d | 0)) {
     q = d + 20 | 0;
     g = c[q >> 2] | 0;
     if ((g | 0) == 0) {
      k = d + 16 | 0;
      l = c[k >> 2] | 0;
      if ((l | 0) == 0) {
       v = 0;
       break;
      } else {
       w = l;
       x = k;
      }
     } else {
      w = g;
      x = q;
     }
     while (1) {
      q = w + 20 | 0;
      g = c[q >> 2] | 0;
      if ((g | 0) != 0) {
       w = g;
       x = q;
       continue;
      }
      q = w + 16 | 0;
      g = c[q >> 2] | 0;
      if ((g | 0) == 0) {
       break;
      } else {
       w = g;
       x = q;
      }
     }
     if (x >>> 0 < i >>> 0) {
      au();
      return 0;
     } else {
      c[x >> 2] = 0;
      v = w;
      break;
     }
    } else {
     q = c[d + 8 >> 2] | 0;
     if (q >>> 0 < i >>> 0) {
      au();
      return 0;
     }
     g = q + 12 | 0;
     if ((c[g >> 2] | 0) != (d | 0)) {
      au();
      return 0;
     }
     k = f + 8 | 0;
     if ((c[k >> 2] | 0) == (d | 0)) {
      c[g >> 2] = f;
      c[k >> 2] = q;
      v = f;
      break;
     } else {
      au();
      return 0;
     }
    }
   } while (0);
   L223 : do {
    if ((e | 0) != 0) {
     f = d + 28 | 0;
     i = 1136 + (c[f >> 2] << 2) | 0;
     do {
      if ((d | 0) == (c[i >> 2] | 0)) {
       c[i >> 2] = v;
       if ((v | 0) != 0) {
        break;
       }
       c[209] = c[209] & ~(1 << c[f >> 2]);
       break L223;
      } else {
       if (e >>> 0 < (c[212] | 0) >>> 0) {
        au();
        return 0;
       }
       q = e + 16 | 0;
       if ((c[q >> 2] | 0) == (d | 0)) {
        c[q >> 2] = v;
       } else {
        c[e + 20 >> 2] = v;
       }
       if ((v | 0) == 0) {
        break L223;
       }
      }
     } while (0);
     if (v >>> 0 < (c[212] | 0) >>> 0) {
      au();
      return 0;
     }
     c[v + 24 >> 2] = e;
     f = c[d + 16 >> 2] | 0;
     do {
      if ((f | 0) != 0) {
       if (f >>> 0 < (c[212] | 0) >>> 0) {
        au();
        return 0;
       } else {
        c[v + 16 >> 2] = f;
        c[f + 24 >> 2] = v;
        break;
       }
      }
     } while (0);
     f = c[d + 20 >> 2] | 0;
     if ((f | 0) == 0) {
      break;
     }
     if (f >>> 0 < (c[212] | 0) >>> 0) {
      au();
      return 0;
     } else {
      c[v + 20 >> 2] = f;
      c[f + 24 >> 2] = v;
      break;
     }
    }
   } while (0);
   if (p >>> 0 < 16) {
    e = p + b | 0;
    c[d + 4 >> 2] = e | 3;
    f = r + (e + 4) | 0;
    c[f >> 2] = c[f >> 2] | 1;
   } else {
    c[d + 4 >> 2] = b | 3;
    c[r + (b | 4) >> 2] = p | 1;
    c[r + (p + b) >> 2] = p;
    f = c[210] | 0;
    if ((f | 0) != 0) {
     e = c[213] | 0;
     i = f >>> 3;
     f = i << 1;
     q = 872 + (f << 2) | 0;
     k = c[208] | 0;
     g = 1 << i;
     do {
      if ((k & g | 0) == 0) {
       c[208] = k | g;
       y = q;
       z = 872 + (f + 2 << 2) | 0;
      } else {
       i = 872 + (f + 2 << 2) | 0;
       l = c[i >> 2] | 0;
       if (l >>> 0 >= (c[212] | 0) >>> 0) {
        y = l;
        z = i;
        break;
       }
       au();
       return 0;
      }
     } while (0);
     c[z >> 2] = e;
     c[y + 12 >> 2] = e;
     c[e + 8 >> 2] = y;
     c[e + 12 >> 2] = q;
    }
    c[210] = p;
    c[213] = m;
   }
   f = d + 8 | 0;
   if ((f | 0) == 0) {
    o = b;
    break;
   } else {
    n = f;
   }
   return n | 0;
  } else {
   if (a >>> 0 > 4294967231) {
    o = -1;
    break;
   }
   f = a + 11 | 0;
   g = f & -8;
   k = c[209] | 0;
   if ((k | 0) == 0) {
    o = g;
    break;
   }
   r = -g | 0;
   i = f >>> 8;
   do {
    if ((i | 0) == 0) {
     A = 0;
    } else {
     if (g >>> 0 > 16777215) {
      A = 31;
      break;
     }
     f = (i + 1048320 | 0) >>> 16 & 8;
     l = i << f;
     h = (l + 520192 | 0) >>> 16 & 4;
     j = l << h;
     l = (j + 245760 | 0) >>> 16 & 2;
     B = 14 - (h | f | l) + (j << l >>> 15) | 0;
     A = g >>> ((B + 7 | 0) >>> 0) & 1 | B << 1;
    }
   } while (0);
   i = c[1136 + (A << 2) >> 2] | 0;
   L271 : do {
    if ((i | 0) == 0) {
     C = 0;
     D = r;
     E = 0;
    } else {
     if ((A | 0) == 31) {
      F = 0;
     } else {
      F = 25 - (A >>> 1) | 0;
     }
     d = 0;
     m = r;
     p = i;
     q = g << F;
     e = 0;
     while (1) {
      B = c[p + 4 >> 2] & -8;
      l = B - g | 0;
      if (l >>> 0 < m >>> 0) {
       if ((B | 0) == (g | 0)) {
        C = p;
        D = l;
        E = p;
        break L271;
       } else {
        G = p;
        H = l;
       }
      } else {
       G = d;
       H = m;
      }
      l = c[p + 20 >> 2] | 0;
      B = c[p + 16 + (q >>> 31 << 2) >> 2] | 0;
      j = (l | 0) == 0 | (l | 0) == (B | 0) ? e : l;
      if ((B | 0) == 0) {
       C = G;
       D = H;
       E = j;
       break;
      } else {
       d = G;
       m = H;
       p = B;
       q = q << 1;
       e = j;
      }
     }
    }
   } while (0);
   if ((E | 0) == 0 & (C | 0) == 0) {
    i = 2 << A;
    r = k & (i | -i);
    if ((r | 0) == 0) {
     o = g;
     break;
    }
    i = (r & -r) - 1 | 0;
    r = i >>> 12 & 16;
    e = i >>> (r >>> 0);
    i = e >>> 5 & 8;
    q = e >>> (i >>> 0);
    e = q >>> 2 & 4;
    p = q >>> (e >>> 0);
    q = p >>> 1 & 2;
    m = p >>> (q >>> 0);
    p = m >>> 1 & 1;
    I = c[1136 + ((i | r | e | q | p) + (m >>> (p >>> 0)) << 2) >> 2] | 0;
   } else {
    I = E;
   }
   if ((I | 0) == 0) {
    J = D;
    K = C;
   } else {
    p = I;
    m = D;
    q = C;
    while (1) {
     e = (c[p + 4 >> 2] & -8) - g | 0;
     r = e >>> 0 < m >>> 0;
     i = r ? e : m;
     e = r ? p : q;
     r = c[p + 16 >> 2] | 0;
     if ((r | 0) != 0) {
      p = r;
      m = i;
      q = e;
      continue;
     }
     r = c[p + 20 >> 2] | 0;
     if ((r | 0) == 0) {
      J = i;
      K = e;
      break;
     } else {
      p = r;
      m = i;
      q = e;
     }
    }
   }
   if ((K | 0) == 0) {
    o = g;
    break;
   }
   if (J >>> 0 >= ((c[210] | 0) - g | 0) >>> 0) {
    o = g;
    break;
   }
   q = K;
   m = c[212] | 0;
   if (q >>> 0 < m >>> 0) {
    au();
    return 0;
   }
   p = q + g | 0;
   k = p;
   if (q >>> 0 >= p >>> 0) {
    au();
    return 0;
   }
   e = c[K + 24 >> 2] | 0;
   i = c[K + 12 >> 2] | 0;
   do {
    if ((i | 0) == (K | 0)) {
     r = K + 20 | 0;
     d = c[r >> 2] | 0;
     if ((d | 0) == 0) {
      j = K + 16 | 0;
      B = c[j >> 2] | 0;
      if ((B | 0) == 0) {
       L = 0;
       break;
      } else {
       M = B;
       N = j;
      }
     } else {
      M = d;
      N = r;
     }
     while (1) {
      r = M + 20 | 0;
      d = c[r >> 2] | 0;
      if ((d | 0) != 0) {
       M = d;
       N = r;
       continue;
      }
      r = M + 16 | 0;
      d = c[r >> 2] | 0;
      if ((d | 0) == 0) {
       break;
      } else {
       M = d;
       N = r;
      }
     }
     if (N >>> 0 < m >>> 0) {
      au();
      return 0;
     } else {
      c[N >> 2] = 0;
      L = M;
      break;
     }
    } else {
     r = c[K + 8 >> 2] | 0;
     if (r >>> 0 < m >>> 0) {
      au();
      return 0;
     }
     d = r + 12 | 0;
     if ((c[d >> 2] | 0) != (K | 0)) {
      au();
      return 0;
     }
     j = i + 8 | 0;
     if ((c[j >> 2] | 0) == (K | 0)) {
      c[d >> 2] = i;
      c[j >> 2] = r;
      L = i;
      break;
     } else {
      au();
      return 0;
     }
    }
   } while (0);
   L321 : do {
    if ((e | 0) != 0) {
     i = K + 28 | 0;
     m = 1136 + (c[i >> 2] << 2) | 0;
     do {
      if ((K | 0) == (c[m >> 2] | 0)) {
       c[m >> 2] = L;
       if ((L | 0) != 0) {
        break;
       }
       c[209] = c[209] & ~(1 << c[i >> 2]);
       break L321;
      } else {
       if (e >>> 0 < (c[212] | 0) >>> 0) {
        au();
        return 0;
       }
       r = e + 16 | 0;
       if ((c[r >> 2] | 0) == (K | 0)) {
        c[r >> 2] = L;
       } else {
        c[e + 20 >> 2] = L;
       }
       if ((L | 0) == 0) {
        break L321;
       }
      }
     } while (0);
     if (L >>> 0 < (c[212] | 0) >>> 0) {
      au();
      return 0;
     }
     c[L + 24 >> 2] = e;
     i = c[K + 16 >> 2] | 0;
     do {
      if ((i | 0) != 0) {
       if (i >>> 0 < (c[212] | 0) >>> 0) {
        au();
        return 0;
       } else {
        c[L + 16 >> 2] = i;
        c[i + 24 >> 2] = L;
        break;
       }
      }
     } while (0);
     i = c[K + 20 >> 2] | 0;
     if ((i | 0) == 0) {
      break;
     }
     if (i >>> 0 < (c[212] | 0) >>> 0) {
      au();
      return 0;
     } else {
      c[L + 20 >> 2] = i;
      c[i + 24 >> 2] = L;
      break;
     }
    }
   } while (0);
   do {
    if (J >>> 0 < 16) {
     e = J + g | 0;
     c[K + 4 >> 2] = e | 3;
     i = q + (e + 4) | 0;
     c[i >> 2] = c[i >> 2] | 1;
    } else {
     c[K + 4 >> 2] = g | 3;
     c[q + (g | 4) >> 2] = J | 1;
     c[q + (J + g) >> 2] = J;
     i = J >>> 3;
     if (J >>> 0 < 256) {
      e = i << 1;
      m = 872 + (e << 2) | 0;
      r = c[208] | 0;
      j = 1 << i;
      do {
       if ((r & j | 0) == 0) {
        c[208] = r | j;
        O = m;
        P = 872 + (e + 2 << 2) | 0;
       } else {
        i = 872 + (e + 2 << 2) | 0;
        d = c[i >> 2] | 0;
        if (d >>> 0 >= (c[212] | 0) >>> 0) {
         O = d;
         P = i;
         break;
        }
        au();
        return 0;
       }
      } while (0);
      c[P >> 2] = k;
      c[O + 12 >> 2] = k;
      c[q + (g + 8) >> 2] = O;
      c[q + (g + 12) >> 2] = m;
      break;
     }
     e = p;
     j = J >>> 8;
     do {
      if ((j | 0) == 0) {
       Q = 0;
      } else {
       if (J >>> 0 > 16777215) {
        Q = 31;
        break;
       }
       r = (j + 1048320 | 0) >>> 16 & 8;
       i = j << r;
       d = (i + 520192 | 0) >>> 16 & 4;
       B = i << d;
       i = (B + 245760 | 0) >>> 16 & 2;
       l = 14 - (d | r | i) + (B << i >>> 15) | 0;
       Q = J >>> ((l + 7 | 0) >>> 0) & 1 | l << 1;
      }
     } while (0);
     j = 1136 + (Q << 2) | 0;
     c[q + (g + 28) >> 2] = Q;
     c[q + (g + 20) >> 2] = 0;
     c[q + (g + 16) >> 2] = 0;
     m = c[209] | 0;
     l = 1 << Q;
     if ((m & l | 0) == 0) {
      c[209] = m | l;
      c[j >> 2] = e;
      c[q + (g + 24) >> 2] = j;
      c[q + (g + 12) >> 2] = e;
      c[q + (g + 8) >> 2] = e;
      break;
     }
     if ((Q | 0) == 31) {
      R = 0;
     } else {
      R = 25 - (Q >>> 1) | 0;
     }
     l = J << R;
     m = c[j >> 2] | 0;
     while (1) {
      if ((c[m + 4 >> 2] & -8 | 0) == (J | 0)) {
       break;
      }
      S = m + 16 + (l >>> 31 << 2) | 0;
      j = c[S >> 2] | 0;
      if ((j | 0) == 0) {
       T = 262;
       break;
      } else {
       l = l << 1;
       m = j;
      }
     }
     if ((T | 0) == 262) {
      if (S >>> 0 < (c[212] | 0) >>> 0) {
       au();
       return 0;
      } else {
       c[S >> 2] = e;
       c[q + (g + 24) >> 2] = m;
       c[q + (g + 12) >> 2] = e;
       c[q + (g + 8) >> 2] = e;
       break;
      }
     }
     l = m + 8 | 0;
     j = c[l >> 2] | 0;
     i = c[212] | 0;
     if (m >>> 0 < i >>> 0) {
      au();
      return 0;
     }
     if (j >>> 0 < i >>> 0) {
      au();
      return 0;
     } else {
      c[j + 12 >> 2] = e;
      c[l >> 2] = e;
      c[q + (g + 8) >> 2] = j;
      c[q + (g + 12) >> 2] = m;
      c[q + (g + 24) >> 2] = 0;
      break;
     }
    }
   } while (0);
   q = K + 8 | 0;
   if ((q | 0) == 0) {
    o = g;
    break;
   } else {
    n = q;
   }
   return n | 0;
  }
 } while (0);
 K = c[210] | 0;
 if (o >>> 0 <= K >>> 0) {
  S = K - o | 0;
  J = c[213] | 0;
  if (S >>> 0 > 15) {
   R = J;
   c[213] = R + o;
   c[210] = S;
   c[R + (o + 4) >> 2] = S | 1;
   c[R + K >> 2] = S;
   c[J + 4 >> 2] = o | 3;
  } else {
   c[210] = 0;
   c[213] = 0;
   c[J + 4 >> 2] = K | 3;
   S = J + (K + 4) | 0;
   c[S >> 2] = c[S >> 2] | 1;
  }
  n = J + 8 | 0;
  return n | 0;
 }
 J = c[211] | 0;
 if (o >>> 0 < J >>> 0) {
  S = J - o | 0;
  c[211] = S;
  J = c[214] | 0;
  K = J;
  c[214] = K + o;
  c[K + (o + 4) >> 2] = S | 1;
  c[J + 4 >> 2] = o | 3;
  n = J + 8 | 0;
  return n | 0;
 }
 do {
  if ((c[200] | 0) == 0) {
   J = ar(8) | 0;
   if ((J - 1 & J | 0) == 0) {
    c[202] = J;
    c[201] = J;
    c[203] = -1;
    c[204] = 2097152;
    c[205] = 0;
    c[319] = 0;
    c[200] = (a_(0) | 0) & -16 ^ 1431655768;
    break;
   } else {
    au();
    return 0;
   }
  }
 } while (0);
 J = o + 48 | 0;
 S = c[202] | 0;
 K = o + 47 | 0;
 R = S + K | 0;
 Q = -S | 0;
 S = R & Q;
 if (S >>> 0 <= o >>> 0) {
  n = 0;
  return n | 0;
 }
 O = c[318] | 0;
 do {
  if ((O | 0) != 0) {
   P = c[316] | 0;
   L = P + S | 0;
   if (L >>> 0 <= P >>> 0 | L >>> 0 > O >>> 0) {
    n = 0;
   } else {
    break;
   }
   return n | 0;
  }
 } while (0);
 L413 : do {
  if ((c[319] & 4 | 0) == 0) {
   O = c[214] | 0;
   L415 : do {
    if ((O | 0) == 0) {
     T = 292;
    } else {
     L = O;
     P = 1280;
     while (1) {
      U = P | 0;
      M = c[U >> 2] | 0;
      if (M >>> 0 <= L >>> 0) {
       V = P + 4 | 0;
       if ((M + (c[V >> 2] | 0) | 0) >>> 0 > L >>> 0) {
        break;
       }
      }
      M = c[P + 8 >> 2] | 0;
      if ((M | 0) == 0) {
       T = 292;
       break L415;
      } else {
       P = M;
      }
     }
     if ((P | 0) == 0) {
      T = 292;
      break;
     }
     L = R - (c[211] | 0) & Q;
     if (L >>> 0 >= 2147483647) {
      W = 0;
      break;
     }
     m = aV(L | 0) | 0;
     e = (m | 0) == ((c[U >> 2] | 0) + (c[V >> 2] | 0) | 0);
     X = e ? m : -1;
     Y = e ? L : 0;
     Z = m;
     _ = L;
     T = 301;
    }
   } while (0);
   do {
    if ((T | 0) == 292) {
     O = aV(0) | 0;
     if ((O | 0) == -1) {
      W = 0;
      break;
     }
     g = O;
     L = c[201] | 0;
     m = L - 1 | 0;
     if ((m & g | 0) == 0) {
      $ = S;
     } else {
      $ = S - g + (m + g & -L) | 0;
     }
     L = c[316] | 0;
     g = L + $ | 0;
     if (!($ >>> 0 > o >>> 0 & $ >>> 0 < 2147483647)) {
      W = 0;
      break;
     }
     m = c[318] | 0;
     if ((m | 0) != 0) {
      if (g >>> 0 <= L >>> 0 | g >>> 0 > m >>> 0) {
       W = 0;
       break;
      }
     }
     m = aV($ | 0) | 0;
     g = (m | 0) == (O | 0);
     X = g ? O : -1;
     Y = g ? $ : 0;
     Z = m;
     _ = $;
     T = 301;
    }
   } while (0);
   L435 : do {
    if ((T | 0) == 301) {
     m = -_ | 0;
     if ((X | 0) != -1) {
      aa = Y;
      ab = X;
      T = 312;
      break L413;
     }
     do {
      if ((Z | 0) != -1 & _ >>> 0 < 2147483647 & _ >>> 0 < J >>> 0) {
       g = c[202] | 0;
       O = K - _ + g & -g;
       if (O >>> 0 >= 2147483647) {
        ac = _;
        break;
       }
       if ((aV(O | 0) | 0) == -1) {
        aV(m | 0) | 0;
        W = Y;
        break L435;
       } else {
        ac = O + _ | 0;
        break;
       }
      } else {
       ac = _;
      }
     } while (0);
     if ((Z | 0) == -1) {
      W = Y;
     } else {
      aa = ac;
      ab = Z;
      T = 312;
      break L413;
     }
    }
   } while (0);
   c[319] = c[319] | 4;
   ad = W;
   T = 309;
  } else {
   ad = 0;
   T = 309;
  }
 } while (0);
 do {
  if ((T | 0) == 309) {
   if (S >>> 0 >= 2147483647) {
    break;
   }
   W = aV(S | 0) | 0;
   Z = aV(0) | 0;
   if (!((Z | 0) != -1 & (W | 0) != -1 & W >>> 0 < Z >>> 0)) {
    break;
   }
   ac = Z - W | 0;
   Z = ac >>> 0 > (o + 40 | 0) >>> 0;
   Y = Z ? W : -1;
   if ((Y | 0) != -1) {
    aa = Z ? ac : ad;
    ab = Y;
    T = 312;
   }
  }
 } while (0);
 do {
  if ((T | 0) == 312) {
   ad = (c[316] | 0) + aa | 0;
   c[316] = ad;
   if (ad >>> 0 > (c[317] | 0) >>> 0) {
    c[317] = ad;
   }
   ad = c[214] | 0;
   L455 : do {
    if ((ad | 0) == 0) {
     S = c[212] | 0;
     if ((S | 0) == 0 | ab >>> 0 < S >>> 0) {
      c[212] = ab;
     }
     c[320] = ab;
     c[321] = aa;
     c[323] = 0;
     c[217] = c[200];
     c[216] = -1;
     S = 0;
     do {
      Y = S << 1;
      ac = 872 + (Y << 2) | 0;
      c[872 + (Y + 3 << 2) >> 2] = ac;
      c[872 + (Y + 2 << 2) >> 2] = ac;
      S = S + 1 | 0;
     } while (S >>> 0 < 32);
     S = ab + 8 | 0;
     if ((S & 7 | 0) == 0) {
      ae = 0;
     } else {
      ae = -S & 7;
     }
     S = aa - 40 - ae | 0;
     c[214] = ab + ae;
     c[211] = S;
     c[ab + (ae + 4) >> 2] = S | 1;
     c[ab + (aa - 36) >> 2] = 40;
     c[215] = c[204];
    } else {
     S = 1280;
     while (1) {
      af = c[S >> 2] | 0;
      ag = S + 4 | 0;
      ah = c[ag >> 2] | 0;
      if ((ab | 0) == (af + ah | 0)) {
       T = 324;
       break;
      }
      ac = c[S + 8 >> 2] | 0;
      if ((ac | 0) == 0) {
       break;
      } else {
       S = ac;
      }
     }
     do {
      if ((T | 0) == 324) {
       if ((c[S + 12 >> 2] & 8 | 0) != 0) {
        break;
       }
       ac = ad;
       if (!(ac >>> 0 >= af >>> 0 & ac >>> 0 < ab >>> 0)) {
        break;
       }
       c[ag >> 2] = ah + aa;
       ac = c[214] | 0;
       Y = (c[211] | 0) + aa | 0;
       Z = ac;
       W = ac + 8 | 0;
       if ((W & 7 | 0) == 0) {
        ai = 0;
       } else {
        ai = -W & 7;
       }
       W = Y - ai | 0;
       c[214] = Z + ai;
       c[211] = W;
       c[Z + (ai + 4) >> 2] = W | 1;
       c[Z + (Y + 4) >> 2] = 40;
       c[215] = c[204];
       break L455;
      }
     } while (0);
     if (ab >>> 0 < (c[212] | 0) >>> 0) {
      c[212] = ab;
     }
     S = ab + aa | 0;
     Y = 1280;
     while (1) {
      aj = Y | 0;
      if ((c[aj >> 2] | 0) == (S | 0)) {
       T = 334;
       break;
      }
      Z = c[Y + 8 >> 2] | 0;
      if ((Z | 0) == 0) {
       break;
      } else {
       Y = Z;
      }
     }
     do {
      if ((T | 0) == 334) {
       if ((c[Y + 12 >> 2] & 8 | 0) != 0) {
        break;
       }
       c[aj >> 2] = ab;
       S = Y + 4 | 0;
       c[S >> 2] = (c[S >> 2] | 0) + aa;
       S = ab + 8 | 0;
       if ((S & 7 | 0) == 0) {
        ak = 0;
       } else {
        ak = -S & 7;
       }
       S = ab + (aa + 8) | 0;
       if ((S & 7 | 0) == 0) {
        al = 0;
       } else {
        al = -S & 7;
       }
       S = ab + (al + aa) | 0;
       Z = S;
       W = ak + o | 0;
       ac = ab + W | 0;
       _ = ac;
       K = S - (ab + ak) - o | 0;
       c[ab + (ak + 4) >> 2] = o | 3;
       do {
        if ((Z | 0) == (c[214] | 0)) {
         J = (c[211] | 0) + K | 0;
         c[211] = J;
         c[214] = _;
         c[ab + (W + 4) >> 2] = J | 1;
        } else {
         if ((Z | 0) == (c[213] | 0)) {
          J = (c[210] | 0) + K | 0;
          c[210] = J;
          c[213] = _;
          c[ab + (W + 4) >> 2] = J | 1;
          c[ab + (J + W) >> 2] = J;
          break;
         }
         J = aa + 4 | 0;
         X = c[ab + (J + al) >> 2] | 0;
         if ((X & 3 | 0) == 1) {
          $ = X & -8;
          V = X >>> 3;
          L500 : do {
           if (X >>> 0 < 256) {
            U = c[ab + ((al | 8) + aa) >> 2] | 0;
            Q = c[ab + (aa + 12 + al) >> 2] | 0;
            R = 872 + (V << 1 << 2) | 0;
            do {
             if ((U | 0) != (R | 0)) {
              if (U >>> 0 < (c[212] | 0) >>> 0) {
               au();
               return 0;
              }
              if ((c[U + 12 >> 2] | 0) == (Z | 0)) {
               break;
              }
              au();
              return 0;
             }
            } while (0);
            if ((Q | 0) == (U | 0)) {
             c[208] = c[208] & ~(1 << V);
             break;
            }
            do {
             if ((Q | 0) == (R | 0)) {
              am = Q + 8 | 0;
             } else {
              if (Q >>> 0 < (c[212] | 0) >>> 0) {
               au();
               return 0;
              }
              m = Q + 8 | 0;
              if ((c[m >> 2] | 0) == (Z | 0)) {
               am = m;
               break;
              }
              au();
              return 0;
             }
            } while (0);
            c[U + 12 >> 2] = Q;
            c[am >> 2] = U;
           } else {
            R = S;
            m = c[ab + ((al | 24) + aa) >> 2] | 0;
            P = c[ab + (aa + 12 + al) >> 2] | 0;
            do {
             if ((P | 0) == (R | 0)) {
              O = al | 16;
              g = ab + (J + O) | 0;
              L = c[g >> 2] | 0;
              if ((L | 0) == 0) {
               e = ab + (O + aa) | 0;
               O = c[e >> 2] | 0;
               if ((O | 0) == 0) {
                an = 0;
                break;
               } else {
                ao = O;
                ap = e;
               }
              } else {
               ao = L;
               ap = g;
              }
              while (1) {
               g = ao + 20 | 0;
               L = c[g >> 2] | 0;
               if ((L | 0) != 0) {
                ao = L;
                ap = g;
                continue;
               }
               g = ao + 16 | 0;
               L = c[g >> 2] | 0;
               if ((L | 0) == 0) {
                break;
               } else {
                ao = L;
                ap = g;
               }
              }
              if (ap >>> 0 < (c[212] | 0) >>> 0) {
               au();
               return 0;
              } else {
               c[ap >> 2] = 0;
               an = ao;
               break;
              }
             } else {
              g = c[ab + ((al | 8) + aa) >> 2] | 0;
              if (g >>> 0 < (c[212] | 0) >>> 0) {
               au();
               return 0;
              }
              L = g + 12 | 0;
              if ((c[L >> 2] | 0) != (R | 0)) {
               au();
               return 0;
              }
              e = P + 8 | 0;
              if ((c[e >> 2] | 0) == (R | 0)) {
               c[L >> 2] = P;
               c[e >> 2] = g;
               an = P;
               break;
              } else {
               au();
               return 0;
              }
             }
            } while (0);
            if ((m | 0) == 0) {
             break;
            }
            P = ab + (aa + 28 + al) | 0;
            U = 1136 + (c[P >> 2] << 2) | 0;
            do {
             if ((R | 0) == (c[U >> 2] | 0)) {
              c[U >> 2] = an;
              if ((an | 0) != 0) {
               break;
              }
              c[209] = c[209] & ~(1 << c[P >> 2]);
              break L500;
             } else {
              if (m >>> 0 < (c[212] | 0) >>> 0) {
               au();
               return 0;
              }
              Q = m + 16 | 0;
              if ((c[Q >> 2] | 0) == (R | 0)) {
               c[Q >> 2] = an;
              } else {
               c[m + 20 >> 2] = an;
              }
              if ((an | 0) == 0) {
               break L500;
              }
             }
            } while (0);
            if (an >>> 0 < (c[212] | 0) >>> 0) {
             au();
             return 0;
            }
            c[an + 24 >> 2] = m;
            R = al | 16;
            P = c[ab + (R + aa) >> 2] | 0;
            do {
             if ((P | 0) != 0) {
              if (P >>> 0 < (c[212] | 0) >>> 0) {
               au();
               return 0;
              } else {
               c[an + 16 >> 2] = P;
               c[P + 24 >> 2] = an;
               break;
              }
             }
            } while (0);
            P = c[ab + (J + R) >> 2] | 0;
            if ((P | 0) == 0) {
             break;
            }
            if (P >>> 0 < (c[212] | 0) >>> 0) {
             au();
             return 0;
            } else {
             c[an + 20 >> 2] = P;
             c[P + 24 >> 2] = an;
             break;
            }
           }
          } while (0);
          aq = ab + (($ | al) + aa) | 0;
          as = $ + K | 0;
         } else {
          aq = Z;
          as = K;
         }
         J = aq + 4 | 0;
         c[J >> 2] = c[J >> 2] & -2;
         c[ab + (W + 4) >> 2] = as | 1;
         c[ab + (as + W) >> 2] = as;
         J = as >>> 3;
         if (as >>> 0 < 256) {
          V = J << 1;
          X = 872 + (V << 2) | 0;
          P = c[208] | 0;
          m = 1 << J;
          do {
           if ((P & m | 0) == 0) {
            c[208] = P | m;
            at = X;
            av = 872 + (V + 2 << 2) | 0;
           } else {
            J = 872 + (V + 2 << 2) | 0;
            U = c[J >> 2] | 0;
            if (U >>> 0 >= (c[212] | 0) >>> 0) {
             at = U;
             av = J;
             break;
            }
            au();
            return 0;
           }
          } while (0);
          c[av >> 2] = _;
          c[at + 12 >> 2] = _;
          c[ab + (W + 8) >> 2] = at;
          c[ab + (W + 12) >> 2] = X;
          break;
         }
         V = ac;
         m = as >>> 8;
         do {
          if ((m | 0) == 0) {
           aw = 0;
          } else {
           if (as >>> 0 > 16777215) {
            aw = 31;
            break;
           }
           P = (m + 1048320 | 0) >>> 16 & 8;
           $ = m << P;
           J = ($ + 520192 | 0) >>> 16 & 4;
           U = $ << J;
           $ = (U + 245760 | 0) >>> 16 & 2;
           Q = 14 - (J | P | $) + (U << $ >>> 15) | 0;
           aw = as >>> ((Q + 7 | 0) >>> 0) & 1 | Q << 1;
          }
         } while (0);
         m = 1136 + (aw << 2) | 0;
         c[ab + (W + 28) >> 2] = aw;
         c[ab + (W + 20) >> 2] = 0;
         c[ab + (W + 16) >> 2] = 0;
         X = c[209] | 0;
         Q = 1 << aw;
         if ((X & Q | 0) == 0) {
          c[209] = X | Q;
          c[m >> 2] = V;
          c[ab + (W + 24) >> 2] = m;
          c[ab + (W + 12) >> 2] = V;
          c[ab + (W + 8) >> 2] = V;
          break;
         }
         if ((aw | 0) == 31) {
          ax = 0;
         } else {
          ax = 25 - (aw >>> 1) | 0;
         }
         Q = as << ax;
         X = c[m >> 2] | 0;
         while (1) {
          if ((c[X + 4 >> 2] & -8 | 0) == (as | 0)) {
           break;
          }
          ay = X + 16 + (Q >>> 31 << 2) | 0;
          m = c[ay >> 2] | 0;
          if ((m | 0) == 0) {
           T = 407;
           break;
          } else {
           Q = Q << 1;
           X = m;
          }
         }
         if ((T | 0) == 407) {
          if (ay >>> 0 < (c[212] | 0) >>> 0) {
           au();
           return 0;
          } else {
           c[ay >> 2] = V;
           c[ab + (W + 24) >> 2] = X;
           c[ab + (W + 12) >> 2] = V;
           c[ab + (W + 8) >> 2] = V;
           break;
          }
         }
         Q = X + 8 | 0;
         m = c[Q >> 2] | 0;
         $ = c[212] | 0;
         if (X >>> 0 < $ >>> 0) {
          au();
          return 0;
         }
         if (m >>> 0 < $ >>> 0) {
          au();
          return 0;
         } else {
          c[m + 12 >> 2] = V;
          c[Q >> 2] = V;
          c[ab + (W + 8) >> 2] = m;
          c[ab + (W + 12) >> 2] = X;
          c[ab + (W + 24) >> 2] = 0;
          break;
         }
        }
       } while (0);
       n = ab + (ak | 8) | 0;
       return n | 0;
      }
     } while (0);
     Y = ad;
     W = 1280;
     while (1) {
      az = c[W >> 2] | 0;
      if (az >>> 0 <= Y >>> 0) {
       aA = c[W + 4 >> 2] | 0;
       aB = az + aA | 0;
       if (aB >>> 0 > Y >>> 0) {
        break;
       }
      }
      W = c[W + 8 >> 2] | 0;
     }
     W = az + (aA - 39) | 0;
     if ((W & 7 | 0) == 0) {
      aC = 0;
     } else {
      aC = -W & 7;
     }
     W = az + (aA - 47 + aC) | 0;
     ac = W >>> 0 < (ad + 16 | 0) >>> 0 ? Y : W;
     W = ac + 8 | 0;
     _ = ab + 8 | 0;
     if ((_ & 7 | 0) == 0) {
      aD = 0;
     } else {
      aD = -_ & 7;
     }
     _ = aa - 40 - aD | 0;
     c[214] = ab + aD;
     c[211] = _;
     c[ab + (aD + 4) >> 2] = _ | 1;
     c[ab + (aa - 36) >> 2] = 40;
     c[215] = c[204];
     c[ac + 4 >> 2] = 27;
     c[W >> 2] = c[320];
     c[W + 4 >> 2] = c[1284 >> 2];
     c[W + 8 >> 2] = c[1288 >> 2];
     c[W + 12 >> 2] = c[1292 >> 2];
     c[320] = ab;
     c[321] = aa;
     c[323] = 0;
     c[322] = W;
     W = ac + 28 | 0;
     c[W >> 2] = 7;
     if ((ac + 32 | 0) >>> 0 < aB >>> 0) {
      _ = W;
      while (1) {
       W = _ + 4 | 0;
       c[W >> 2] = 7;
       if ((_ + 8 | 0) >>> 0 < aB >>> 0) {
        _ = W;
       } else {
        break;
       }
      }
     }
     if ((ac | 0) == (Y | 0)) {
      break;
     }
     _ = ac - ad | 0;
     W = Y + (_ + 4) | 0;
     c[W >> 2] = c[W >> 2] & -2;
     c[ad + 4 >> 2] = _ | 1;
     c[Y + _ >> 2] = _;
     W = _ >>> 3;
     if (_ >>> 0 < 256) {
      K = W << 1;
      Z = 872 + (K << 2) | 0;
      S = c[208] | 0;
      m = 1 << W;
      do {
       if ((S & m | 0) == 0) {
        c[208] = S | m;
        aE = Z;
        aF = 872 + (K + 2 << 2) | 0;
       } else {
        W = 872 + (K + 2 << 2) | 0;
        Q = c[W >> 2] | 0;
        if (Q >>> 0 >= (c[212] | 0) >>> 0) {
         aE = Q;
         aF = W;
         break;
        }
        au();
        return 0;
       }
      } while (0);
      c[aF >> 2] = ad;
      c[aE + 12 >> 2] = ad;
      c[ad + 8 >> 2] = aE;
      c[ad + 12 >> 2] = Z;
      break;
     }
     K = ad;
     m = _ >>> 8;
     do {
      if ((m | 0) == 0) {
       aG = 0;
      } else {
       if (_ >>> 0 > 16777215) {
        aG = 31;
        break;
       }
       S = (m + 1048320 | 0) >>> 16 & 8;
       Y = m << S;
       ac = (Y + 520192 | 0) >>> 16 & 4;
       W = Y << ac;
       Y = (W + 245760 | 0) >>> 16 & 2;
       Q = 14 - (ac | S | Y) + (W << Y >>> 15) | 0;
       aG = _ >>> ((Q + 7 | 0) >>> 0) & 1 | Q << 1;
      }
     } while (0);
     m = 1136 + (aG << 2) | 0;
     c[ad + 28 >> 2] = aG;
     c[ad + 20 >> 2] = 0;
     c[ad + 16 >> 2] = 0;
     Z = c[209] | 0;
     Q = 1 << aG;
     if ((Z & Q | 0) == 0) {
      c[209] = Z | Q;
      c[m >> 2] = K;
      c[ad + 24 >> 2] = m;
      c[ad + 12 >> 2] = ad;
      c[ad + 8 >> 2] = ad;
      break;
     }
     if ((aG | 0) == 31) {
      aH = 0;
     } else {
      aH = 25 - (aG >>> 1) | 0;
     }
     Q = _ << aH;
     Z = c[m >> 2] | 0;
     while (1) {
      if ((c[Z + 4 >> 2] & -8 | 0) == (_ | 0)) {
       break;
      }
      aI = Z + 16 + (Q >>> 31 << 2) | 0;
      m = c[aI >> 2] | 0;
      if ((m | 0) == 0) {
       T = 442;
       break;
      } else {
       Q = Q << 1;
       Z = m;
      }
     }
     if ((T | 0) == 442) {
      if (aI >>> 0 < (c[212] | 0) >>> 0) {
       au();
       return 0;
      } else {
       c[aI >> 2] = K;
       c[ad + 24 >> 2] = Z;
       c[ad + 12 >> 2] = ad;
       c[ad + 8 >> 2] = ad;
       break;
      }
     }
     Q = Z + 8 | 0;
     _ = c[Q >> 2] | 0;
     m = c[212] | 0;
     if (Z >>> 0 < m >>> 0) {
      au();
      return 0;
     }
     if (_ >>> 0 < m >>> 0) {
      au();
      return 0;
     } else {
      c[_ + 12 >> 2] = K;
      c[Q >> 2] = K;
      c[ad + 8 >> 2] = _;
      c[ad + 12 >> 2] = Z;
      c[ad + 24 >> 2] = 0;
      break;
     }
    }
   } while (0);
   ad = c[211] | 0;
   if (ad >>> 0 <= o >>> 0) {
    break;
   }
   _ = ad - o | 0;
   c[211] = _;
   ad = c[214] | 0;
   Q = ad;
   c[214] = Q + o;
   c[Q + (o + 4) >> 2] = _ | 1;
   c[ad + 4 >> 2] = o | 3;
   n = ad + 8 | 0;
   return n | 0;
  }
 } while (0);
 c[(aX() | 0) >> 2] = 12;
 n = 0;
 return n | 0;
}
function bM(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0;
 if ((a | 0) == 0) {
  return;
 }
 b = a - 8 | 0;
 d = b;
 e = c[212] | 0;
 if (b >>> 0 < e >>> 0) {
  au();
 }
 f = c[a - 4 >> 2] | 0;
 g = f & 3;
 if ((g | 0) == 1) {
  au();
 }
 h = f & -8;
 i = a + (h - 8) | 0;
 j = i;
 L672 : do {
  if ((f & 1 | 0) == 0) {
   k = c[b >> 2] | 0;
   if ((g | 0) == 0) {
    return;
   }
   l = -8 - k | 0;
   m = a + l | 0;
   n = m;
   o = k + h | 0;
   if (m >>> 0 < e >>> 0) {
    au();
   }
   if ((n | 0) == (c[213] | 0)) {
    p = a + (h - 4) | 0;
    if ((c[p >> 2] & 3 | 0) != 3) {
     q = n;
     r = o;
     break;
    }
    c[210] = o;
    c[p >> 2] = c[p >> 2] & -2;
    c[a + (l + 4) >> 2] = o | 1;
    c[i >> 2] = o;
    return;
   }
   p = k >>> 3;
   if (k >>> 0 < 256) {
    k = c[a + (l + 8) >> 2] | 0;
    s = c[a + (l + 12) >> 2] | 0;
    t = 872 + (p << 1 << 2) | 0;
    do {
     if ((k | 0) != (t | 0)) {
      if (k >>> 0 < e >>> 0) {
       au();
      }
      if ((c[k + 12 >> 2] | 0) == (n | 0)) {
       break;
      }
      au();
     }
    } while (0);
    if ((s | 0) == (k | 0)) {
     c[208] = c[208] & ~(1 << p);
     q = n;
     r = o;
     break;
    }
    do {
     if ((s | 0) == (t | 0)) {
      u = s + 8 | 0;
     } else {
      if (s >>> 0 < e >>> 0) {
       au();
      }
      v = s + 8 | 0;
      if ((c[v >> 2] | 0) == (n | 0)) {
       u = v;
       break;
      }
      au();
     }
    } while (0);
    c[k + 12 >> 2] = s;
    c[u >> 2] = k;
    q = n;
    r = o;
    break;
   }
   t = m;
   p = c[a + (l + 24) >> 2] | 0;
   v = c[a + (l + 12) >> 2] | 0;
   do {
    if ((v | 0) == (t | 0)) {
     w = a + (l + 20) | 0;
     x = c[w >> 2] | 0;
     if ((x | 0) == 0) {
      y = a + (l + 16) | 0;
      z = c[y >> 2] | 0;
      if ((z | 0) == 0) {
       A = 0;
       break;
      } else {
       B = z;
       C = y;
      }
     } else {
      B = x;
      C = w;
     }
     while (1) {
      w = B + 20 | 0;
      x = c[w >> 2] | 0;
      if ((x | 0) != 0) {
       B = x;
       C = w;
       continue;
      }
      w = B + 16 | 0;
      x = c[w >> 2] | 0;
      if ((x | 0) == 0) {
       break;
      } else {
       B = x;
       C = w;
      }
     }
     if (C >>> 0 < e >>> 0) {
      au();
     } else {
      c[C >> 2] = 0;
      A = B;
      break;
     }
    } else {
     w = c[a + (l + 8) >> 2] | 0;
     if (w >>> 0 < e >>> 0) {
      au();
     }
     x = w + 12 | 0;
     if ((c[x >> 2] | 0) != (t | 0)) {
      au();
     }
     y = v + 8 | 0;
     if ((c[y >> 2] | 0) == (t | 0)) {
      c[x >> 2] = v;
      c[y >> 2] = w;
      A = v;
      break;
     } else {
      au();
     }
    }
   } while (0);
   if ((p | 0) == 0) {
    q = n;
    r = o;
    break;
   }
   v = a + (l + 28) | 0;
   m = 1136 + (c[v >> 2] << 2) | 0;
   do {
    if ((t | 0) == (c[m >> 2] | 0)) {
     c[m >> 2] = A;
     if ((A | 0) != 0) {
      break;
     }
     c[209] = c[209] & ~(1 << c[v >> 2]);
     q = n;
     r = o;
     break L672;
    } else {
     if (p >>> 0 < (c[212] | 0) >>> 0) {
      au();
     }
     k = p + 16 | 0;
     if ((c[k >> 2] | 0) == (t | 0)) {
      c[k >> 2] = A;
     } else {
      c[p + 20 >> 2] = A;
     }
     if ((A | 0) == 0) {
      q = n;
      r = o;
      break L672;
     }
    }
   } while (0);
   if (A >>> 0 < (c[212] | 0) >>> 0) {
    au();
   }
   c[A + 24 >> 2] = p;
   t = c[a + (l + 16) >> 2] | 0;
   do {
    if ((t | 0) != 0) {
     if (t >>> 0 < (c[212] | 0) >>> 0) {
      au();
     } else {
      c[A + 16 >> 2] = t;
      c[t + 24 >> 2] = A;
      break;
     }
    }
   } while (0);
   t = c[a + (l + 20) >> 2] | 0;
   if ((t | 0) == 0) {
    q = n;
    r = o;
    break;
   }
   if (t >>> 0 < (c[212] | 0) >>> 0) {
    au();
   } else {
    c[A + 20 >> 2] = t;
    c[t + 24 >> 2] = A;
    q = n;
    r = o;
    break;
   }
  } else {
   q = d;
   r = h;
  }
 } while (0);
 d = q;
 if (d >>> 0 >= i >>> 0) {
  au();
 }
 A = a + (h - 4) | 0;
 e = c[A >> 2] | 0;
 if ((e & 1 | 0) == 0) {
  au();
 }
 do {
  if ((e & 2 | 0) == 0) {
   if ((j | 0) == (c[214] | 0)) {
    B = (c[211] | 0) + r | 0;
    c[211] = B;
    c[214] = q;
    c[q + 4 >> 2] = B | 1;
    if ((q | 0) == (c[213] | 0)) {
     c[213] = 0;
     c[210] = 0;
    }
    if (B >>> 0 <= (c[215] | 0) >>> 0) {
     return;
    }
    bS(0) | 0;
    return;
   }
   if ((j | 0) == (c[213] | 0)) {
    B = (c[210] | 0) + r | 0;
    c[210] = B;
    c[213] = q;
    c[q + 4 >> 2] = B | 1;
    c[d + B >> 2] = B;
    return;
   }
   B = (e & -8) + r | 0;
   C = e >>> 3;
   L777 : do {
    if (e >>> 0 < 256) {
     u = c[a + h >> 2] | 0;
     g = c[a + (h | 4) >> 2] | 0;
     b = 872 + (C << 1 << 2) | 0;
     do {
      if ((u | 0) != (b | 0)) {
       if (u >>> 0 < (c[212] | 0) >>> 0) {
        au();
       }
       if ((c[u + 12 >> 2] | 0) == (j | 0)) {
        break;
       }
       au();
      }
     } while (0);
     if ((g | 0) == (u | 0)) {
      c[208] = c[208] & ~(1 << C);
      break;
     }
     do {
      if ((g | 0) == (b | 0)) {
       D = g + 8 | 0;
      } else {
       if (g >>> 0 < (c[212] | 0) >>> 0) {
        au();
       }
       f = g + 8 | 0;
       if ((c[f >> 2] | 0) == (j | 0)) {
        D = f;
        break;
       }
       au();
      }
     } while (0);
     c[u + 12 >> 2] = g;
     c[D >> 2] = u;
    } else {
     b = i;
     f = c[a + (h + 16) >> 2] | 0;
     t = c[a + (h | 4) >> 2] | 0;
     do {
      if ((t | 0) == (b | 0)) {
       p = a + (h + 12) | 0;
       v = c[p >> 2] | 0;
       if ((v | 0) == 0) {
        m = a + (h + 8) | 0;
        k = c[m >> 2] | 0;
        if ((k | 0) == 0) {
         E = 0;
         break;
        } else {
         F = k;
         G = m;
        }
       } else {
        F = v;
        G = p;
       }
       while (1) {
        p = F + 20 | 0;
        v = c[p >> 2] | 0;
        if ((v | 0) != 0) {
         F = v;
         G = p;
         continue;
        }
        p = F + 16 | 0;
        v = c[p >> 2] | 0;
        if ((v | 0) == 0) {
         break;
        } else {
         F = v;
         G = p;
        }
       }
       if (G >>> 0 < (c[212] | 0) >>> 0) {
        au();
       } else {
        c[G >> 2] = 0;
        E = F;
        break;
       }
      } else {
       p = c[a + h >> 2] | 0;
       if (p >>> 0 < (c[212] | 0) >>> 0) {
        au();
       }
       v = p + 12 | 0;
       if ((c[v >> 2] | 0) != (b | 0)) {
        au();
       }
       m = t + 8 | 0;
       if ((c[m >> 2] | 0) == (b | 0)) {
        c[v >> 2] = t;
        c[m >> 2] = p;
        E = t;
        break;
       } else {
        au();
       }
      }
     } while (0);
     if ((f | 0) == 0) {
      break;
     }
     t = a + (h + 20) | 0;
     u = 1136 + (c[t >> 2] << 2) | 0;
     do {
      if ((b | 0) == (c[u >> 2] | 0)) {
       c[u >> 2] = E;
       if ((E | 0) != 0) {
        break;
       }
       c[209] = c[209] & ~(1 << c[t >> 2]);
       break L777;
      } else {
       if (f >>> 0 < (c[212] | 0) >>> 0) {
        au();
       }
       g = f + 16 | 0;
       if ((c[g >> 2] | 0) == (b | 0)) {
        c[g >> 2] = E;
       } else {
        c[f + 20 >> 2] = E;
       }
       if ((E | 0) == 0) {
        break L777;
       }
      }
     } while (0);
     if (E >>> 0 < (c[212] | 0) >>> 0) {
      au();
     }
     c[E + 24 >> 2] = f;
     b = c[a + (h + 8) >> 2] | 0;
     do {
      if ((b | 0) != 0) {
       if (b >>> 0 < (c[212] | 0) >>> 0) {
        au();
       } else {
        c[E + 16 >> 2] = b;
        c[b + 24 >> 2] = E;
        break;
       }
      }
     } while (0);
     b = c[a + (h + 12) >> 2] | 0;
     if ((b | 0) == 0) {
      break;
     }
     if (b >>> 0 < (c[212] | 0) >>> 0) {
      au();
     } else {
      c[E + 20 >> 2] = b;
      c[b + 24 >> 2] = E;
      break;
     }
    }
   } while (0);
   c[q + 4 >> 2] = B | 1;
   c[d + B >> 2] = B;
   if ((q | 0) != (c[213] | 0)) {
    H = B;
    break;
   }
   c[210] = B;
   return;
  } else {
   c[A >> 2] = e & -2;
   c[q + 4 >> 2] = r | 1;
   c[d + r >> 2] = r;
   H = r;
  }
 } while (0);
 r = H >>> 3;
 if (H >>> 0 < 256) {
  d = r << 1;
  e = 872 + (d << 2) | 0;
  A = c[208] | 0;
  E = 1 << r;
  do {
   if ((A & E | 0) == 0) {
    c[208] = A | E;
    I = e;
    J = 872 + (d + 2 << 2) | 0;
   } else {
    r = 872 + (d + 2 << 2) | 0;
    h = c[r >> 2] | 0;
    if (h >>> 0 >= (c[212] | 0) >>> 0) {
     I = h;
     J = r;
     break;
    }
    au();
   }
  } while (0);
  c[J >> 2] = q;
  c[I + 12 >> 2] = q;
  c[q + 8 >> 2] = I;
  c[q + 12 >> 2] = e;
  return;
 }
 e = q;
 I = H >>> 8;
 do {
  if ((I | 0) == 0) {
   K = 0;
  } else {
   if (H >>> 0 > 16777215) {
    K = 31;
    break;
   }
   J = (I + 1048320 | 0) >>> 16 & 8;
   d = I << J;
   E = (d + 520192 | 0) >>> 16 & 4;
   A = d << E;
   d = (A + 245760 | 0) >>> 16 & 2;
   r = 14 - (E | J | d) + (A << d >>> 15) | 0;
   K = H >>> ((r + 7 | 0) >>> 0) & 1 | r << 1;
  }
 } while (0);
 I = 1136 + (K << 2) | 0;
 c[q + 28 >> 2] = K;
 c[q + 20 >> 2] = 0;
 c[q + 16 >> 2] = 0;
 r = c[209] | 0;
 d = 1 << K;
 do {
  if ((r & d | 0) == 0) {
   c[209] = r | d;
   c[I >> 2] = e;
   c[q + 24 >> 2] = I;
   c[q + 12 >> 2] = q;
   c[q + 8 >> 2] = q;
  } else {
   if ((K | 0) == 31) {
    L = 0;
   } else {
    L = 25 - (K >>> 1) | 0;
   }
   A = H << L;
   J = c[I >> 2] | 0;
   while (1) {
    if ((c[J + 4 >> 2] & -8 | 0) == (H | 0)) {
     break;
    }
    M = J + 16 + (A >>> 31 << 2) | 0;
    E = c[M >> 2] | 0;
    if ((E | 0) == 0) {
     N = 621;
     break;
    } else {
     A = A << 1;
     J = E;
    }
   }
   if ((N | 0) == 621) {
    if (M >>> 0 < (c[212] | 0) >>> 0) {
     au();
    } else {
     c[M >> 2] = e;
     c[q + 24 >> 2] = J;
     c[q + 12 >> 2] = q;
     c[q + 8 >> 2] = q;
     break;
    }
   }
   A = J + 8 | 0;
   B = c[A >> 2] | 0;
   E = c[212] | 0;
   if (J >>> 0 < E >>> 0) {
    au();
   }
   if (B >>> 0 < E >>> 0) {
    au();
   } else {
    c[B + 12 >> 2] = e;
    c[A >> 2] = e;
    c[q + 8 >> 2] = B;
    c[q + 12 >> 2] = J;
    c[q + 24 >> 2] = 0;
    break;
   }
  }
 } while (0);
 q = (c[216] | 0) - 1 | 0;
 c[216] = q;
 if ((q | 0) == 0) {
  O = 1288;
 } else {
  return;
 }
 while (1) {
  q = c[O >> 2] | 0;
  if ((q | 0) == 0) {
   break;
  } else {
   O = q + 8 | 0;
  }
 }
 c[216] = -1;
 return;
}
function bN(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 do {
  if ((a | 0) == 0) {
   d = 0;
  } else {
   e = ad(b, a) | 0;
   if ((b | a) >>> 0 <= 65535) {
    d = e;
    break;
   }
   d = ((e >>> 0) / (a >>> 0) | 0 | 0) == (b | 0) ? e : -1;
  }
 } while (0);
 b = bL(d) | 0;
 if ((b | 0) == 0) {
  return b | 0;
 }
 if ((c[b - 4 >> 2] & 3 | 0) == 0) {
  return b | 0;
 }
 cL(b | 0, 0, d | 0);
 return b | 0;
}
function bO(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 if ((a | 0) == 0) {
  d = bL(b) | 0;
  return d | 0;
 }
 if (b >>> 0 > 4294967231) {
  c[(aX() | 0) >> 2] = 12;
  d = 0;
  return d | 0;
 }
 if (b >>> 0 < 11) {
  e = 16;
 } else {
  e = b + 11 & -8;
 }
 f = bT(a - 8 | 0, e) | 0;
 if ((f | 0) != 0) {
  d = f + 8 | 0;
  return d | 0;
 }
 f = bL(b) | 0;
 if ((f | 0) == 0) {
  d = 0;
  return d | 0;
 }
 e = c[a - 4 >> 2] | 0;
 g = (e & -8) - ((e & 3 | 0) == 0 ? 8 : 4) | 0;
 e = g >>> 0 < b >>> 0 ? g : b;
 cK(f | 0, a | 0, e) | 0;
 bM(a);
 d = f;
 return d | 0;
}
function bP(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 if ((a | 0) == 0) {
  return 0;
 }
 if (b >>> 0 > 4294967231) {
  c[(aX() | 0) >> 2] = 12;
  return 0;
 }
 if (b >>> 0 < 11) {
  d = 16;
 } else {
  d = b + 11 & -8;
 }
 b = a - 8 | 0;
 return ((bT(b, d) | 0) == (b | 0) ? a : 0) | 0;
}
function bQ(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0;
 if (a >>> 0 < 9) {
  c = bL(b) | 0;
  return c | 0;
 } else {
  c = bR(a, b) | 0;
  return c | 0;
 }
 return 0;
}
function bR(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 d = a >>> 0 < 16 ? 16 : a;
 if ((d - 1 & d | 0) == 0) {
  e = d;
 } else {
  a = 16;
  while (1) {
   if (a >>> 0 < d >>> 0) {
    a = a << 1;
   } else {
    e = a;
    break;
   }
  }
 }
 if ((-64 - e | 0) >>> 0 <= b >>> 0) {
  c[(aX() | 0) >> 2] = 12;
  f = 0;
  return f | 0;
 }
 if (b >>> 0 < 11) {
  g = 16;
 } else {
  g = b + 11 & -8;
 }
 b = bL(e + 12 + g | 0) | 0;
 if ((b | 0) == 0) {
  f = 0;
  return f | 0;
 }
 a = b - 8 | 0;
 d = a;
 h = e - 1 | 0;
 do {
  if ((b & h | 0) == 0) {
   i = d;
  } else {
   j = b + h & -e;
   k = j - 8 | 0;
   l = a;
   if ((k - l | 0) >>> 0 > 15) {
    m = k;
   } else {
    m = j + (e - 8) | 0;
   }
   j = m;
   k = m - l | 0;
   l = b - 4 | 0;
   n = c[l >> 2] | 0;
   o = (n & -8) - k | 0;
   if ((n & 3 | 0) == 0) {
    c[m >> 2] = (c[a >> 2] | 0) + k;
    c[m + 4 >> 2] = o;
    i = j;
    break;
   } else {
    n = m + 4 | 0;
    c[n >> 2] = o | c[n >> 2] & 1 | 2;
    n = m + (o + 4) | 0;
    c[n >> 2] = c[n >> 2] | 1;
    c[l >> 2] = k | c[l >> 2] & 1 | 2;
    l = b + (k - 4) | 0;
    c[l >> 2] = c[l >> 2] | 1;
    b9(d, k);
    i = j;
    break;
   }
  }
 } while (0);
 d = i + 4 | 0;
 b = c[d >> 2] | 0;
 do {
  if ((b & 3 | 0) != 0) {
   m = b & -8;
   if (m >>> 0 <= (g + 16 | 0) >>> 0) {
    break;
   }
   a = m - g | 0;
   e = i;
   c[d >> 2] = g | b & 1 | 2;
   c[e + (g | 4) >> 2] = a | 3;
   h = e + (m | 4) | 0;
   c[h >> 2] = c[h >> 2] | 1;
   b9(e + g | 0, a);
  }
 } while (0);
 f = i + 8 | 0;
 return f | 0;
}
function bS(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 do {
  if ((c[200] | 0) == 0) {
   b = ar(8) | 0;
   if ((b - 1 & b | 0) == 0) {
    c[202] = b;
    c[201] = b;
    c[203] = -1;
    c[204] = 2097152;
    c[205] = 0;
    c[319] = 0;
    c[200] = (a_(0) | 0) & -16 ^ 1431655768;
    break;
   } else {
    au();
    return 0;
   }
  }
 } while (0);
 if (a >>> 0 >= 4294967232) {
  d = 0;
  return d | 0;
 }
 b = c[214] | 0;
 if ((b | 0) == 0) {
  d = 0;
  return d | 0;
 }
 e = c[211] | 0;
 do {
  if (e >>> 0 > (a + 40 | 0) >>> 0) {
   f = c[202] | 0;
   g = ad((((-40 - a - 1 + e + f | 0) >>> 0) / (f >>> 0) | 0) - 1 | 0, f) | 0;
   h = b;
   i = 1280;
   while (1) {
    j = c[i >> 2] | 0;
    if (j >>> 0 <= h >>> 0) {
     if ((j + (c[i + 4 >> 2] | 0) | 0) >>> 0 > h >>> 0) {
      k = i;
      break;
     }
    }
    j = c[i + 8 >> 2] | 0;
    if ((j | 0) == 0) {
     k = 0;
     break;
    } else {
     i = j;
    }
   }
   if ((c[k + 12 >> 2] & 8 | 0) != 0) {
    break;
   }
   i = aV(0) | 0;
   h = k + 4 | 0;
   if ((i | 0) != ((c[k >> 2] | 0) + (c[h >> 2] | 0) | 0)) {
    break;
   }
   j = aV(-(g >>> 0 > 2147483646 ? -2147483648 - f | 0 : g) | 0) | 0;
   l = aV(0) | 0;
   if (!((j | 0) != -1 & l >>> 0 < i >>> 0)) {
    break;
   }
   j = i - l | 0;
   if ((i | 0) == (l | 0)) {
    break;
   }
   c[h >> 2] = (c[h >> 2] | 0) - j;
   c[316] = (c[316] | 0) - j;
   h = c[214] | 0;
   m = (c[211] | 0) - j | 0;
   j = h;
   n = h + 8 | 0;
   if ((n & 7 | 0) == 0) {
    o = 0;
   } else {
    o = -n & 7;
   }
   n = m - o | 0;
   c[214] = j + o;
   c[211] = n;
   c[j + (o + 4) >> 2] = n | 1;
   c[j + (m + 4) >> 2] = 40;
   c[215] = c[204];
   d = (i | 0) != (l | 0) | 0;
   return d | 0;
  }
 } while (0);
 if ((c[211] | 0) >>> 0 <= (c[215] | 0) >>> 0) {
  d = 0;
  return d | 0;
 }
 c[215] = -1;
 d = 0;
 return d | 0;
}
function bT(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 d = a + 4 | 0;
 e = c[d >> 2] | 0;
 f = e & -8;
 g = a;
 h = g + f | 0;
 i = h;
 j = c[212] | 0;
 if (g >>> 0 < j >>> 0) {
  au();
  return 0;
 }
 k = e & 3;
 if (!((k | 0) != 1 & g >>> 0 < h >>> 0)) {
  au();
  return 0;
 }
 l = g + (f | 4) | 0;
 m = c[l >> 2] | 0;
 if ((m & 1 | 0) == 0) {
  au();
  return 0;
 }
 if ((k | 0) == 0) {
  if (b >>> 0 < 256) {
   n = 0;
   return n | 0;
  }
  do {
   if (f >>> 0 >= (b + 4 | 0) >>> 0) {
    if ((f - b | 0) >>> 0 > c[202] << 1 >>> 0) {
     break;
    } else {
     n = a;
    }
    return n | 0;
   }
  } while (0);
  n = 0;
  return n | 0;
 }
 if (f >>> 0 >= b >>> 0) {
  k = f - b | 0;
  if (k >>> 0 <= 15) {
   n = a;
   return n | 0;
  }
  c[d >> 2] = e & 1 | b | 2;
  c[g + (b + 4) >> 2] = k | 3;
  c[l >> 2] = c[l >> 2] | 1;
  b9(g + b | 0, k);
  n = a;
  return n | 0;
 }
 if ((i | 0) == (c[214] | 0)) {
  k = (c[211] | 0) + f | 0;
  if (k >>> 0 <= b >>> 0) {
   n = 0;
   return n | 0;
  }
  l = k - b | 0;
  c[d >> 2] = e & 1 | b | 2;
  c[g + (b + 4) >> 2] = l | 1;
  c[214] = g + b;
  c[211] = l;
  n = a;
  return n | 0;
 }
 if ((i | 0) == (c[213] | 0)) {
  l = (c[210] | 0) + f | 0;
  if (l >>> 0 < b >>> 0) {
   n = 0;
   return n | 0;
  }
  k = l - b | 0;
  if (k >>> 0 > 15) {
   c[d >> 2] = e & 1 | b | 2;
   c[g + (b + 4) >> 2] = k | 1;
   c[g + l >> 2] = k;
   o = g + (l + 4) | 0;
   c[o >> 2] = c[o >> 2] & -2;
   p = g + b | 0;
   q = k;
  } else {
   c[d >> 2] = e & 1 | l | 2;
   e = g + (l + 4) | 0;
   c[e >> 2] = c[e >> 2] | 1;
   p = 0;
   q = 0;
  }
  c[210] = q;
  c[213] = p;
  n = a;
  return n | 0;
 }
 if ((m & 2 | 0) != 0) {
  n = 0;
  return n | 0;
 }
 p = (m & -8) + f | 0;
 if (p >>> 0 < b >>> 0) {
  n = 0;
  return n | 0;
 }
 q = p - b | 0;
 e = m >>> 3;
 L1056 : do {
  if (m >>> 0 < 256) {
   l = c[g + (f + 8) >> 2] | 0;
   k = c[g + (f + 12) >> 2] | 0;
   o = 872 + (e << 1 << 2) | 0;
   do {
    if ((l | 0) != (o | 0)) {
     if (l >>> 0 < j >>> 0) {
      au();
      return 0;
     }
     if ((c[l + 12 >> 2] | 0) == (i | 0)) {
      break;
     }
     au();
     return 0;
    }
   } while (0);
   if ((k | 0) == (l | 0)) {
    c[208] = c[208] & ~(1 << e);
    break;
   }
   do {
    if ((k | 0) == (o | 0)) {
     r = k + 8 | 0;
    } else {
     if (k >>> 0 < j >>> 0) {
      au();
      return 0;
     }
     s = k + 8 | 0;
     if ((c[s >> 2] | 0) == (i | 0)) {
      r = s;
      break;
     }
     au();
     return 0;
    }
   } while (0);
   c[l + 12 >> 2] = k;
   c[r >> 2] = l;
  } else {
   o = h;
   s = c[g + (f + 24) >> 2] | 0;
   t = c[g + (f + 12) >> 2] | 0;
   do {
    if ((t | 0) == (o | 0)) {
     u = g + (f + 20) | 0;
     v = c[u >> 2] | 0;
     if ((v | 0) == 0) {
      w = g + (f + 16) | 0;
      x = c[w >> 2] | 0;
      if ((x | 0) == 0) {
       y = 0;
       break;
      } else {
       z = x;
       A = w;
      }
     } else {
      z = v;
      A = u;
     }
     while (1) {
      u = z + 20 | 0;
      v = c[u >> 2] | 0;
      if ((v | 0) != 0) {
       z = v;
       A = u;
       continue;
      }
      u = z + 16 | 0;
      v = c[u >> 2] | 0;
      if ((v | 0) == 0) {
       break;
      } else {
       z = v;
       A = u;
      }
     }
     if (A >>> 0 < j >>> 0) {
      au();
      return 0;
     } else {
      c[A >> 2] = 0;
      y = z;
      break;
     }
    } else {
     u = c[g + (f + 8) >> 2] | 0;
     if (u >>> 0 < j >>> 0) {
      au();
      return 0;
     }
     v = u + 12 | 0;
     if ((c[v >> 2] | 0) != (o | 0)) {
      au();
      return 0;
     }
     w = t + 8 | 0;
     if ((c[w >> 2] | 0) == (o | 0)) {
      c[v >> 2] = t;
      c[w >> 2] = u;
      y = t;
      break;
     } else {
      au();
      return 0;
     }
    }
   } while (0);
   if ((s | 0) == 0) {
    break;
   }
   t = g + (f + 28) | 0;
   l = 1136 + (c[t >> 2] << 2) | 0;
   do {
    if ((o | 0) == (c[l >> 2] | 0)) {
     c[l >> 2] = y;
     if ((y | 0) != 0) {
      break;
     }
     c[209] = c[209] & ~(1 << c[t >> 2]);
     break L1056;
    } else {
     if (s >>> 0 < (c[212] | 0) >>> 0) {
      au();
      return 0;
     }
     k = s + 16 | 0;
     if ((c[k >> 2] | 0) == (o | 0)) {
      c[k >> 2] = y;
     } else {
      c[s + 20 >> 2] = y;
     }
     if ((y | 0) == 0) {
      break L1056;
     }
    }
   } while (0);
   if (y >>> 0 < (c[212] | 0) >>> 0) {
    au();
    return 0;
   }
   c[y + 24 >> 2] = s;
   o = c[g + (f + 16) >> 2] | 0;
   do {
    if ((o | 0) != 0) {
     if (o >>> 0 < (c[212] | 0) >>> 0) {
      au();
      return 0;
     } else {
      c[y + 16 >> 2] = o;
      c[o + 24 >> 2] = y;
      break;
     }
    }
   } while (0);
   o = c[g + (f + 20) >> 2] | 0;
   if ((o | 0) == 0) {
    break;
   }
   if (o >>> 0 < (c[212] | 0) >>> 0) {
    au();
    return 0;
   } else {
    c[y + 20 >> 2] = o;
    c[o + 24 >> 2] = y;
    break;
   }
  }
 } while (0);
 if (q >>> 0 < 16) {
  c[d >> 2] = p | c[d >> 2] & 1 | 2;
  y = g + (p | 4) | 0;
  c[y >> 2] = c[y >> 2] | 1;
  n = a;
  return n | 0;
 } else {
  c[d >> 2] = c[d >> 2] & 1 | b | 2;
  c[g + (b + 4) >> 2] = q | 3;
  d = g + (p | 4) | 0;
  c[d >> 2] = c[d >> 2] | 1;
  b9(g + b | 0, q);
  n = a;
  return n | 0;
 }
 return 0;
}
function bU() {
 return c[316] | 0;
}
function bV() {
 return c[317] | 0;
}
function bW() {
 var a = 0;
 a = c[318] | 0;
 return ((a | 0) == 0 ? -1 : a) | 0;
}
function bX(a) {
 a = a | 0;
 var b = 0, d = 0;
 if ((a | 0) == -1) {
  b = 0;
 } else {
  d = c[202] | 0;
  b = a - 1 + d & -d;
 }
 c[318] = b;
 return b | 0;
}
function bY(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 do {
  if ((a | 0) == 0) {
   b = 0;
  } else {
   d = c[a - 4 >> 2] | 0;
   e = d & 3;
   if ((e | 0) == 1) {
    b = 0;
    break;
   }
   b = (d & -8) - ((e | 0) == 0 ? 8 : 4) | 0;
  }
 } while (0);
 return b | 0;
}
function bZ(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 do {
  if ((b | 0) == 8) {
   e = bL(d) | 0;
  } else {
   f = b >>> 2;
   if ((b & 3 | 0) != 0 | (f | 0) == 0) {
    g = 22;
    return g | 0;
   }
   if ((f + 1073741823 & f | 0) != 0) {
    g = 22;
    return g | 0;
   }
   if ((-64 - b | 0) >>> 0 < d >>> 0) {
    g = 12;
    return g | 0;
   } else {
    e = bR(b >>> 0 < 16 ? 16 : b, d) | 0;
    break;
   }
  }
 } while (0);
 if ((e | 0) == 0) {
  g = 12;
  return g | 0;
 }
 c[a >> 2] = e;
 g = 0;
 return g | 0;
}
function b_(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = i;
 i = i + 8 | 0;
 f = e | 0;
 c[f >> 2] = b;
 b = b2(a, f, 3, d) | 0;
 i = e;
 return b | 0;
}
function b$(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return b2(a, b, 0, c) | 0;
}
function b0(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 if ((c[200] | 0) != 0) {
  b = c[201] | 0;
  d = bQ(b, a) | 0;
  return d | 0;
 }
 e = ar(8) | 0;
 if ((e - 1 & e | 0) != 0) {
  au();
  return 0;
 }
 c[202] = e;
 c[201] = e;
 c[203] = -1;
 c[204] = 2097152;
 c[205] = 0;
 c[319] = 0;
 c[200] = (a_(0) | 0) & -16 ^ 1431655768;
 b = c[201] | 0;
 d = bQ(b, a) | 0;
 return d | 0;
}
function b1(a) {
 a = a | 0;
 var b = 0;
 do {
  if ((c[200] | 0) == 0) {
   b = ar(8) | 0;
   if ((b - 1 & b | 0) == 0) {
    c[202] = b;
    c[201] = b;
    c[203] = -1;
    c[204] = 2097152;
    c[205] = 0;
    c[319] = 0;
    c[200] = (a_(0) | 0) & -16 ^ 1431655768;
    break;
   } else {
    au();
    return 0;
   }
  }
 } while (0);
 b = c[201] | 0;
 return bQ(b, a - 1 + b & -b) | 0;
}
function b2(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 do {
  if ((c[200] | 0) == 0) {
   f = ar(8) | 0;
   if ((f - 1 & f | 0) == 0) {
    c[202] = f;
    c[201] = f;
    c[203] = -1;
    c[204] = 2097152;
    c[205] = 0;
    c[319] = 0;
    c[200] = (a_(0) | 0) & -16 ^ 1431655768;
    break;
   } else {
    au();
    return 0;
   }
  }
 } while (0);
 f = (a | 0) == 0;
 do {
  if ((e | 0) == 0) {
   if (f) {
    g = bL(0) | 0;
    return g | 0;
   } else {
    h = a << 2;
    if (h >>> 0 < 11) {
     i = 0;
     j = 16;
     break;
    }
    i = 0;
    j = h + 11 & -8;
    break;
   }
  } else {
   if (f) {
    g = e;
   } else {
    i = e;
    j = 0;
    break;
   }
   return g | 0;
  }
 } while (0);
 do {
  if ((d & 1 | 0) == 0) {
   if (f) {
    k = 0;
    l = 0;
    break;
   } else {
    m = 0;
    n = 0;
   }
   while (1) {
    e = c[b + (n << 2) >> 2] | 0;
    if (e >>> 0 < 11) {
     o = 16;
    } else {
     o = e + 11 & -8;
    }
    e = o + m | 0;
    h = n + 1 | 0;
    if ((h | 0) == (a | 0)) {
     k = 0;
     l = e;
     break;
    } else {
     m = e;
     n = h;
    }
   }
  } else {
   h = c[b >> 2] | 0;
   if (h >>> 0 < 11) {
    p = 16;
   } else {
    p = h + 11 & -8;
   }
   k = p;
   l = ad(p, a) | 0;
  }
 } while (0);
 p = bL(j - 4 + l | 0) | 0;
 if ((p | 0) == 0) {
  g = 0;
  return g | 0;
 }
 n = p - 8 | 0;
 m = c[p - 4 >> 2] & -8;
 if ((d & 2 | 0) != 0) {
  cL(p | 0, 0, -4 - j + m | 0);
 }
 if ((i | 0) == 0) {
  c[p + (l - 4) >> 2] = m - l | 3;
  q = p + l | 0;
  r = l;
 } else {
  q = i;
  r = m;
 }
 c[q >> 2] = p;
 p = a - 1 | 0;
 L1216 : do {
  if ((p | 0) == 0) {
   s = n;
   t = r;
  } else {
   if ((k | 0) == 0) {
    u = n;
    v = r;
    w = 0;
   } else {
    a = n;
    m = r;
    i = 0;
    while (1) {
     l = m - k | 0;
     c[a + 4 >> 2] = k | 3;
     j = a + k | 0;
     d = i + 1 | 0;
     c[q + (d << 2) >> 2] = a + (k + 8);
     if ((d | 0) == (p | 0)) {
      s = j;
      t = l;
      break L1216;
     } else {
      a = j;
      m = l;
      i = d;
     }
    }
   }
   while (1) {
    i = c[b + (w << 2) >> 2] | 0;
    if (i >>> 0 < 11) {
     x = 16;
    } else {
     x = i + 11 & -8;
    }
    i = v - x | 0;
    c[u + 4 >> 2] = x | 3;
    m = u + x | 0;
    a = w + 1 | 0;
    c[q + (a << 2) >> 2] = u + (x + 8);
    if ((a | 0) == (p | 0)) {
     s = m;
     t = i;
     break;
    } else {
     u = m;
     v = i;
     w = a;
    }
   }
  }
 } while (0);
 c[s + 4 >> 2] = t | 3;
 g = q;
 return g | 0;
}
function b3(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 d = a + (b << 2) | 0;
 L1229 : do {
  if ((b | 0) != 0) {
   e = a;
   L1230 : while (1) {
    f = c[e >> 2] | 0;
    L1232 : do {
     if ((f | 0) == 0) {
      g = e + 4 | 0;
     } else {
      h = f - 8 | 0;
      i = h;
      j = f - 4 | 0;
      k = c[j >> 2] & -8;
      c[e >> 2] = 0;
      if (h >>> 0 < (c[212] | 0) >>> 0) {
       l = 935;
       break L1230;
      }
      h = c[j >> 2] | 0;
      if ((h & 3 | 0) == 1) {
       l = 936;
       break L1230;
      }
      m = e + 4 | 0;
      n = h - 8 & -8;
      do {
       if ((m | 0) != (d | 0)) {
        if ((c[m >> 2] | 0) != (f + (n + 8) | 0)) {
         break;
        }
        o = (c[f + (n | 4) >> 2] & -8) + k | 0;
        c[j >> 2] = h & 1 | o | 2;
        p = f + (o - 4) | 0;
        c[p >> 2] = c[p >> 2] | 1;
        c[m >> 2] = f;
        g = m;
        break L1232;
       }
      } while (0);
      b9(i, k);
      g = m;
     }
    } while (0);
    if ((g | 0) == (d | 0)) {
     break L1229;
    } else {
     e = g;
    }
   }
   if ((l | 0) == 935) {
    au();
    return 0;
   } else if ((l | 0) == 936) {
    au();
    return 0;
   }
  }
 } while (0);
 if ((c[211] | 0) >>> 0 <= (c[215] | 0) >>> 0) {
  return 0;
 }
 bS(0) | 0;
 return 0;
}
function b4(a) {
 a = a | 0;
 var b = 0, d = 0;
 if ((c[200] | 0) != 0) {
  b = bS(a) | 0;
  return b | 0;
 }
 d = ar(8) | 0;
 if ((d - 1 & d | 0) != 0) {
  au();
  return 0;
 }
 c[202] = d;
 c[201] = d;
 c[203] = -1;
 c[204] = 2097152;
 c[205] = 0;
 c[319] = 0;
 c[200] = (a_(0) | 0) & -16 ^ 1431655768;
 b = bS(a) | 0;
 return b | 0;
}
function b5(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 do {
  if ((c[200] | 0) == 0) {
   b = ar(8) | 0;
   if ((b - 1 & b | 0) == 0) {
    c[202] = b;
    c[201] = b;
    c[203] = -1;
    c[204] = 2097152;
    c[205] = 0;
    c[319] = 0;
    c[200] = (a_(0) | 0) & -16 ^ 1431655768;
    break;
   } else {
    au();
   }
  }
 } while (0);
 b = c[214] | 0;
 if ((b | 0) == 0) {
  d = 0;
  e = 0;
  f = 0;
  g = 0;
  h = 0;
  i = 0;
  j = 0;
 } else {
  k = c[211] | 0;
  l = k + 40 | 0;
  m = 1;
  n = l;
  o = l;
  l = 1280;
  while (1) {
   p = c[l >> 2] | 0;
   q = p + 8 | 0;
   if ((q & 7 | 0) == 0) {
    r = 0;
   } else {
    r = -q & 7;
   }
   q = p + (c[l + 4 >> 2] | 0) | 0;
   s = m;
   t = n;
   u = o;
   v = p + r | 0;
   while (1) {
    if (v >>> 0 >= q >>> 0 | (v | 0) == (b | 0)) {
     w = s;
     x = t;
     y = u;
     break;
    }
    z = c[v + 4 >> 2] | 0;
    if ((z | 0) == 7) {
     w = s;
     x = t;
     y = u;
     break;
    }
    A = z & -8;
    B = A + u | 0;
    if ((z & 3 | 0) == 1) {
     C = A + t | 0;
     D = s + 1 | 0;
    } else {
     C = t;
     D = s;
    }
    z = v + A | 0;
    if (z >>> 0 < p >>> 0) {
     w = D;
     x = C;
     y = B;
     break;
    } else {
     s = D;
     t = C;
     u = B;
     v = z;
    }
   }
   v = c[l + 8 >> 2] | 0;
   if ((v | 0) == 0) {
    break;
   } else {
    m = w;
    n = x;
    o = y;
    l = v;
   }
  }
  l = c[316] | 0;
  d = k;
  e = y;
  f = w;
  g = l - y | 0;
  h = c[317] | 0;
  i = l - x | 0;
  j = x;
 }
 c[a >> 2] = e;
 c[a + 4 >> 2] = f;
 f = a + 8 | 0;
 c[f >> 2] = 0;
 c[f + 4 >> 2] = 0;
 c[a + 16 >> 2] = g;
 c[a + 20 >> 2] = h;
 c[a + 24 >> 2] = 0;
 c[a + 28 >> 2] = i;
 c[a + 32 >> 2] = j;
 c[a + 36 >> 2] = d;
 return;
}
function b6() {
 var a = 0, b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0;
 a = i;
 do {
  if ((c[200] | 0) == 0) {
   b = ar(8) | 0;
   if ((b - 1 & b | 0) == 0) {
    c[202] = b;
    c[201] = b;
    c[203] = -1;
    c[204] = 2097152;
    c[205] = 0;
    c[319] = 0;
    c[200] = (a_(0) | 0) & -16 ^ 1431655768;
    break;
   } else {
    au();
   }
  }
 } while (0);
 b = c[214] | 0;
 if ((b | 0) == 0) {
  d = 0;
  e = 0;
  f = 0;
 } else {
  g = c[317] | 0;
  h = c[316] | 0;
  j = h - 40 - (c[211] | 0) | 0;
  k = 1280;
  while (1) {
   l = c[k >> 2] | 0;
   m = l + 8 | 0;
   if ((m & 7 | 0) == 0) {
    n = 0;
   } else {
    n = -m & 7;
   }
   m = l + (c[k + 4 >> 2] | 0) | 0;
   p = j;
   q = l + n | 0;
   while (1) {
    if (q >>> 0 >= m >>> 0 | (q | 0) == (b | 0)) {
     r = p;
     break;
    }
    s = c[q + 4 >> 2] | 0;
    if ((s | 0) == 7) {
     r = p;
     break;
    }
    t = s & -8;
    u = p - ((s & 3 | 0) == 1 ? t : 0) | 0;
    s = q + t | 0;
    if (s >>> 0 < l >>> 0) {
     r = u;
     break;
    } else {
     p = u;
     q = s;
    }
   }
   q = c[k + 8 >> 2] | 0;
   if ((q | 0) == 0) {
    d = r;
    e = h;
    f = g;
    break;
   } else {
    j = r;
    k = q;
   }
  }
 }
 av(c[o >> 2] | 0, 520, (y = i, i = i + 8 | 0, c[y >> 2] = f, y) | 0) | 0;
 av(c[o >> 2] | 0, 488, (y = i, i = i + 8 | 0, c[y >> 2] = e, y) | 0) | 0;
 av(c[o >> 2] | 0, 400, (y = i, i = i + 8 | 0, c[y >> 2] = d, y) | 0) | 0;
 i = a;
 return;
}
function b7(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 do {
  if ((c[200] | 0) == 0) {
   d = ar(8) | 0;
   if ((d - 1 & d | 0) == 0) {
    c[202] = d;
    c[201] = d;
    c[203] = -1;
    c[204] = 2097152;
    c[205] = 0;
    c[319] = 0;
    c[200] = (a_(0) | 0) & -16 ^ 1431655768;
    break;
   } else {
    au();
    return 0;
   }
  }
 } while (0);
 if ((a | 0) == (-1 | 0)) {
  c[204] = b;
  e = 1;
  return e | 0;
 } else if ((a | 0) == (-2 | 0)) {
  if ((c[201] | 0) >>> 0 > b >>> 0) {
   e = 0;
   return e | 0;
  }
  if ((b - 1 & b | 0) != 0) {
   e = 0;
   return e | 0;
  }
  c[202] = b;
  e = 1;
  return e | 0;
 } else if ((a | 0) == (-3 | 0)) {
  c[203] = b;
  e = 1;
  return e | 0;
 } else {
  e = 0;
  return e | 0;
 }
 return 0;
}
function b8() {
 return (F = c[328] | 0, c[328] = F + 0, F) | 0;
}
function b9(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0;
 d = a;
 e = d + b | 0;
 f = e;
 g = c[a + 4 >> 2] | 0;
 L1325 : do {
  if ((g & 1 | 0) == 0) {
   h = c[a >> 2] | 0;
   if ((g & 3 | 0) == 0) {
    return;
   }
   i = d + (-h | 0) | 0;
   j = i;
   k = h + b | 0;
   l = c[212] | 0;
   if (i >>> 0 < l >>> 0) {
    au();
   }
   if ((j | 0) == (c[213] | 0)) {
    m = d + (b + 4) | 0;
    if ((c[m >> 2] & 3 | 0) != 3) {
     n = j;
     o = k;
     break;
    }
    c[210] = k;
    c[m >> 2] = c[m >> 2] & -2;
    c[d + (4 - h) >> 2] = k | 1;
    c[e >> 2] = k;
    return;
   }
   m = h >>> 3;
   if (h >>> 0 < 256) {
    p = c[d + (8 - h) >> 2] | 0;
    q = c[d + (12 - h) >> 2] | 0;
    r = 872 + (m << 1 << 2) | 0;
    do {
     if ((p | 0) != (r | 0)) {
      if (p >>> 0 < l >>> 0) {
       au();
      }
      if ((c[p + 12 >> 2] | 0) == (j | 0)) {
       break;
      }
      au();
     }
    } while (0);
    if ((q | 0) == (p | 0)) {
     c[208] = c[208] & ~(1 << m);
     n = j;
     o = k;
     break;
    }
    do {
     if ((q | 0) == (r | 0)) {
      s = q + 8 | 0;
     } else {
      if (q >>> 0 < l >>> 0) {
       au();
      }
      t = q + 8 | 0;
      if ((c[t >> 2] | 0) == (j | 0)) {
       s = t;
       break;
      }
      au();
     }
    } while (0);
    c[p + 12 >> 2] = q;
    c[s >> 2] = p;
    n = j;
    o = k;
    break;
   }
   r = i;
   m = c[d + (24 - h) >> 2] | 0;
   t = c[d + (12 - h) >> 2] | 0;
   do {
    if ((t | 0) == (r | 0)) {
     u = 16 - h | 0;
     v = d + (u + 4) | 0;
     w = c[v >> 2] | 0;
     if ((w | 0) == 0) {
      x = d + u | 0;
      u = c[x >> 2] | 0;
      if ((u | 0) == 0) {
       y = 0;
       break;
      } else {
       z = u;
       A = x;
      }
     } else {
      z = w;
      A = v;
     }
     while (1) {
      v = z + 20 | 0;
      w = c[v >> 2] | 0;
      if ((w | 0) != 0) {
       z = w;
       A = v;
       continue;
      }
      v = z + 16 | 0;
      w = c[v >> 2] | 0;
      if ((w | 0) == 0) {
       break;
      } else {
       z = w;
       A = v;
      }
     }
     if (A >>> 0 < l >>> 0) {
      au();
     } else {
      c[A >> 2] = 0;
      y = z;
      break;
     }
    } else {
     v = c[d + (8 - h) >> 2] | 0;
     if (v >>> 0 < l >>> 0) {
      au();
     }
     w = v + 12 | 0;
     if ((c[w >> 2] | 0) != (r | 0)) {
      au();
     }
     x = t + 8 | 0;
     if ((c[x >> 2] | 0) == (r | 0)) {
      c[w >> 2] = t;
      c[x >> 2] = v;
      y = t;
      break;
     } else {
      au();
     }
    }
   } while (0);
   if ((m | 0) == 0) {
    n = j;
    o = k;
    break;
   }
   t = d + (28 - h) | 0;
   l = 1136 + (c[t >> 2] << 2) | 0;
   do {
    if ((r | 0) == (c[l >> 2] | 0)) {
     c[l >> 2] = y;
     if ((y | 0) != 0) {
      break;
     }
     c[209] = c[209] & ~(1 << c[t >> 2]);
     n = j;
     o = k;
     break L1325;
    } else {
     if (m >>> 0 < (c[212] | 0) >>> 0) {
      au();
     }
     i = m + 16 | 0;
     if ((c[i >> 2] | 0) == (r | 0)) {
      c[i >> 2] = y;
     } else {
      c[m + 20 >> 2] = y;
     }
     if ((y | 0) == 0) {
      n = j;
      o = k;
      break L1325;
     }
    }
   } while (0);
   if (y >>> 0 < (c[212] | 0) >>> 0) {
    au();
   }
   c[y + 24 >> 2] = m;
   r = 16 - h | 0;
   t = c[d + r >> 2] | 0;
   do {
    if ((t | 0) != 0) {
     if (t >>> 0 < (c[212] | 0) >>> 0) {
      au();
     } else {
      c[y + 16 >> 2] = t;
      c[t + 24 >> 2] = y;
      break;
     }
    }
   } while (0);
   t = c[d + (r + 4) >> 2] | 0;
   if ((t | 0) == 0) {
    n = j;
    o = k;
    break;
   }
   if (t >>> 0 < (c[212] | 0) >>> 0) {
    au();
   } else {
    c[y + 20 >> 2] = t;
    c[t + 24 >> 2] = y;
    n = j;
    o = k;
    break;
   }
  } else {
   n = a;
   o = b;
  }
 } while (0);
 a = c[212] | 0;
 if (e >>> 0 < a >>> 0) {
  au();
 }
 y = d + (b + 4) | 0;
 z = c[y >> 2] | 0;
 do {
  if ((z & 2 | 0) == 0) {
   if ((f | 0) == (c[214] | 0)) {
    A = (c[211] | 0) + o | 0;
    c[211] = A;
    c[214] = n;
    c[n + 4 >> 2] = A | 1;
    if ((n | 0) != (c[213] | 0)) {
     return;
    }
    c[213] = 0;
    c[210] = 0;
    return;
   }
   if ((f | 0) == (c[213] | 0)) {
    A = (c[210] | 0) + o | 0;
    c[210] = A;
    c[213] = n;
    c[n + 4 >> 2] = A | 1;
    c[n + A >> 2] = A;
    return;
   }
   A = (z & -8) + o | 0;
   s = z >>> 3;
   L1424 : do {
    if (z >>> 0 < 256) {
     g = c[d + (b + 8) >> 2] | 0;
     t = c[d + (b + 12) >> 2] | 0;
     h = 872 + (s << 1 << 2) | 0;
     do {
      if ((g | 0) != (h | 0)) {
       if (g >>> 0 < a >>> 0) {
        au();
       }
       if ((c[g + 12 >> 2] | 0) == (f | 0)) {
        break;
       }
       au();
      }
     } while (0);
     if ((t | 0) == (g | 0)) {
      c[208] = c[208] & ~(1 << s);
      break;
     }
     do {
      if ((t | 0) == (h | 0)) {
       B = t + 8 | 0;
      } else {
       if (t >>> 0 < a >>> 0) {
        au();
       }
       m = t + 8 | 0;
       if ((c[m >> 2] | 0) == (f | 0)) {
        B = m;
        break;
       }
       au();
      }
     } while (0);
     c[g + 12 >> 2] = t;
     c[B >> 2] = g;
    } else {
     h = e;
     m = c[d + (b + 24) >> 2] | 0;
     l = c[d + (b + 12) >> 2] | 0;
     do {
      if ((l | 0) == (h | 0)) {
       i = d + (b + 20) | 0;
       p = c[i >> 2] | 0;
       if ((p | 0) == 0) {
        q = d + (b + 16) | 0;
        v = c[q >> 2] | 0;
        if ((v | 0) == 0) {
         C = 0;
         break;
        } else {
         D = v;
         E = q;
        }
       } else {
        D = p;
        E = i;
       }
       while (1) {
        i = D + 20 | 0;
        p = c[i >> 2] | 0;
        if ((p | 0) != 0) {
         D = p;
         E = i;
         continue;
        }
        i = D + 16 | 0;
        p = c[i >> 2] | 0;
        if ((p | 0) == 0) {
         break;
        } else {
         D = p;
         E = i;
        }
       }
       if (E >>> 0 < a >>> 0) {
        au();
       } else {
        c[E >> 2] = 0;
        C = D;
        break;
       }
      } else {
       i = c[d + (b + 8) >> 2] | 0;
       if (i >>> 0 < a >>> 0) {
        au();
       }
       p = i + 12 | 0;
       if ((c[p >> 2] | 0) != (h | 0)) {
        au();
       }
       q = l + 8 | 0;
       if ((c[q >> 2] | 0) == (h | 0)) {
        c[p >> 2] = l;
        c[q >> 2] = i;
        C = l;
        break;
       } else {
        au();
       }
      }
     } while (0);
     if ((m | 0) == 0) {
      break;
     }
     l = d + (b + 28) | 0;
     g = 1136 + (c[l >> 2] << 2) | 0;
     do {
      if ((h | 0) == (c[g >> 2] | 0)) {
       c[g >> 2] = C;
       if ((C | 0) != 0) {
        break;
       }
       c[209] = c[209] & ~(1 << c[l >> 2]);
       break L1424;
      } else {
       if (m >>> 0 < (c[212] | 0) >>> 0) {
        au();
       }
       t = m + 16 | 0;
       if ((c[t >> 2] | 0) == (h | 0)) {
        c[t >> 2] = C;
       } else {
        c[m + 20 >> 2] = C;
       }
       if ((C | 0) == 0) {
        break L1424;
       }
      }
     } while (0);
     if (C >>> 0 < (c[212] | 0) >>> 0) {
      au();
     }
     c[C + 24 >> 2] = m;
     h = c[d + (b + 16) >> 2] | 0;
     do {
      if ((h | 0) != 0) {
       if (h >>> 0 < (c[212] | 0) >>> 0) {
        au();
       } else {
        c[C + 16 >> 2] = h;
        c[h + 24 >> 2] = C;
        break;
       }
      }
     } while (0);
     h = c[d + (b + 20) >> 2] | 0;
     if ((h | 0) == 0) {
      break;
     }
     if (h >>> 0 < (c[212] | 0) >>> 0) {
      au();
     } else {
      c[C + 20 >> 2] = h;
      c[h + 24 >> 2] = C;
      break;
     }
    }
   } while (0);
   c[n + 4 >> 2] = A | 1;
   c[n + A >> 2] = A;
   if ((n | 0) != (c[213] | 0)) {
    F = A;
    break;
   }
   c[210] = A;
   return;
  } else {
   c[y >> 2] = z & -2;
   c[n + 4 >> 2] = o | 1;
   c[n + o >> 2] = o;
   F = o;
  }
 } while (0);
 o = F >>> 3;
 if (F >>> 0 < 256) {
  z = o << 1;
  y = 872 + (z << 2) | 0;
  C = c[208] | 0;
  b = 1 << o;
  do {
   if ((C & b | 0) == 0) {
    c[208] = C | b;
    G = y;
    H = 872 + (z + 2 << 2) | 0;
   } else {
    o = 872 + (z + 2 << 2) | 0;
    d = c[o >> 2] | 0;
    if (d >>> 0 >= (c[212] | 0) >>> 0) {
     G = d;
     H = o;
     break;
    }
    au();
   }
  } while (0);
  c[H >> 2] = n;
  c[G + 12 >> 2] = n;
  c[n + 8 >> 2] = G;
  c[n + 12 >> 2] = y;
  return;
 }
 y = n;
 G = F >>> 8;
 do {
  if ((G | 0) == 0) {
   I = 0;
  } else {
   if (F >>> 0 > 16777215) {
    I = 31;
    break;
   }
   H = (G + 1048320 | 0) >>> 16 & 8;
   z = G << H;
   b = (z + 520192 | 0) >>> 16 & 4;
   C = z << b;
   z = (C + 245760 | 0) >>> 16 & 2;
   o = 14 - (b | H | z) + (C << z >>> 15) | 0;
   I = F >>> ((o + 7 | 0) >>> 0) & 1 | o << 1;
  }
 } while (0);
 G = 1136 + (I << 2) | 0;
 c[n + 28 >> 2] = I;
 c[n + 20 >> 2] = 0;
 c[n + 16 >> 2] = 0;
 o = c[209] | 0;
 z = 1 << I;
 if ((o & z | 0) == 0) {
  c[209] = o | z;
  c[G >> 2] = y;
  c[n + 24 >> 2] = G;
  c[n + 12 >> 2] = n;
  c[n + 8 >> 2] = n;
  return;
 }
 if ((I | 0) == 31) {
  J = 0;
 } else {
  J = 25 - (I >>> 1) | 0;
 }
 I = F << J;
 J = c[G >> 2] | 0;
 while (1) {
  if ((c[J + 4 >> 2] & -8 | 0) == (F | 0)) {
   break;
  }
  K = J + 16 + (I >>> 31 << 2) | 0;
  G = c[K >> 2] | 0;
  if ((G | 0) == 0) {
   L = 1120;
   break;
  } else {
   I = I << 1;
   J = G;
  }
 }
 if ((L | 0) == 1120) {
  if (K >>> 0 < (c[212] | 0) >>> 0) {
   au();
  }
  c[K >> 2] = y;
  c[n + 24 >> 2] = J;
  c[n + 12 >> 2] = n;
  c[n + 8 >> 2] = n;
  return;
 }
 K = J + 8 | 0;
 L = c[K >> 2] | 0;
 I = c[212] | 0;
 if (J >>> 0 < I >>> 0) {
  au();
 }
 if (L >>> 0 < I >>> 0) {
  au();
 }
 c[L + 12 >> 2] = y;
 c[K >> 2] = y;
 c[n + 8 >> 2] = L;
 c[n + 12 >> 2] = J;
 c[n + 24 >> 2] = 0;
 return;
}
function ca(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 b = (a | 0) == 0 ? 1 : a;
 while (1) {
  d = bL(b) | 0;
  if ((d | 0) != 0) {
   e = 1164;
   break;
  }
  a = (F = c[328] | 0, c[328] = F + 0, F);
  if ((a | 0) == 0) {
   break;
  }
  a5[a & 1]();
 }
 if ((e | 0) == 1164) {
  return d | 0;
 }
 d = aJ(4) | 0;
 c[d >> 2] = 560;
 as(d | 0, 688, 6);
 return 0;
}
function cb(a, b) {
 a = a | 0;
 b = b | 0;
 return ca(a) | 0;
}
function cc(a) {
 a = a | 0;
 return;
}
function cd(a) {
 a = a | 0;
 return 360 | 0;
}
function ce(a) {
 a = a | 0;
 return 448 | 0;
}
function cf(a) {
 a = a | 0;
 return (F = c[328] | 0, c[328] = a, F) | 0;
}
function cg(a) {
 a = a | 0;
 c[a >> 2] = 560;
 return;
}
function ch(a) {
 a = a | 0;
 c[a >> 2] = 592;
 return;
}
function ci(a) {
 a = a | 0;
 if ((a | 0) != 0) {
  bM(a);
 }
 return;
}
function cj(a, b) {
 a = a | 0;
 b = b | 0;
 ci(a);
 return;
}
function ck(a) {
 a = a | 0;
 ci(a);
 return;
}
function cl(a, b) {
 a = a | 0;
 b = b | 0;
 ck(a);
 return;
}
function cm(a) {
 a = a | 0;
 ci(a);
 return;
}
function cn(a) {
 a = a | 0;
 ci(a);
 return;
}
function co(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return cp(a, b, c, 0, 0, 0) | 0;
}
function cp(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ab = 0, ac = 0, ad = 0;
 j = i;
 if ((e | 0) == 0) {
  k = -1;
  i = j;
  return k | 0;
 }
 l = c[44] | 0;
 if ((l | 0) == 0) {
  c[196] = 1;
  c[44] = 1;
  m = 1;
  n = 1;
  o = 1190;
 } else {
  p = c[196] | 0;
  q = c[74] | 0;
  if ((q | 0) == -1 | (p | 0) != 0) {
   m = p;
   n = l;
   o = 1190;
  } else {
   r = q;
   s = p;
   t = l;
  }
 }
 if ((o | 0) == 1190) {
  l = (aP(344) | 0) != 0 | 0;
  c[74] = l;
  r = l;
  s = m;
  t = n;
 }
 n = a[e] | 0;
 if (n << 24 >> 24 == 45) {
  u = h | 2;
  o = 1194;
 } else {
  m = (r | 0) != 0 | n << 24 >> 24 == 43 ? h & -2 : h;
  if (n << 24 >> 24 == 43) {
   u = m;
   o = 1194;
  } else {
   v = e;
   w = m;
  }
 }
 if ((o | 0) == 1194) {
  v = e + 1 | 0;
  w = u;
 }
 c[198] = 0;
 if ((s | 0) == 0) {
  x = t;
  o = 1198;
 } else {
  c[50] = -1;
  c[48] = -1;
  z = t;
  A = s;
  o = 1197;
 }
 while (1) {
  if ((o | 0) == 1197) {
   o = 0;
   if ((A | 0) == 0) {
    x = z;
    o = 1198;
    continue;
   } else {
    B = z;
   }
  } else if ((o | 0) == 1198) {
   o = 0;
   s = c[40] | 0;
   if ((a[s] | 0) == 0) {
    B = x;
   } else {
    C = s;
    D = x;
    break;
   }
  }
  c[196] = 0;
  if ((B | 0) >= (b | 0)) {
   o = 1200;
   break;
  }
  E = d + (B << 2) | 0;
  F = c[E >> 2] | 0;
  c[40] = F;
  if ((a[F] | 0) == 45) {
   G = F + 1 | 0;
   H = a[G] | 0;
   if (H << 24 >> 24 != 0) {
    o = 1232;
    break;
   }
   if ((aB(v | 0, 45) | 0) != 0) {
    o = 1232;
    break;
   }
  }
  c[40] = 824;
  if ((w & 2 | 0) != 0) {
   o = 1217;
   break;
  }
  if ((w & 1 | 0) == 0) {
   k = -1;
   o = 1298;
   break;
  }
  s = c[48] | 0;
  do {
   if ((s | 0) == -1) {
    c[48] = B;
    I = B;
    J = 0;
   } else {
    t = c[50] | 0;
    if ((t | 0) == -1) {
     I = B;
     J = 0;
     break;
    }
    u = t - s | 0;
    e = B - t | 0;
    m = (u | 0) % (e | 0) | 0;
    if ((m | 0) == 0) {
     K = e;
    } else {
     n = e;
     h = m;
     while (1) {
      m = (n | 0) % (h | 0) | 0;
      if ((m | 0) == 0) {
       K = h;
       break;
      } else {
       n = h;
       h = m;
      }
     }
    }
    h = (B - s | 0) / (K | 0) | 0;
    do {
     if ((K | 0) > 0) {
      n = -u | 0;
      if ((h | 0) > 0) {
       L = 0;
      } else {
       M = B;
       N = t;
       O = s;
       P = 0;
       break;
      }
      do {
       m = L + t | 0;
       r = d + (m << 2) | 0;
       l = 0;
       p = m;
       m = c[r >> 2] | 0;
       while (1) {
        q = ((p | 0) < (t | 0) ? e : n) + p | 0;
        Q = d + (q << 2) | 0;
        R = c[Q >> 2] | 0;
        c[Q >> 2] = m;
        c[r >> 2] = R;
        Q = l + 1 | 0;
        if ((Q | 0) < (h | 0)) {
         l = Q;
         p = q;
         m = R;
        } else {
         break;
        }
       }
       L = L + 1 | 0;
      } while ((L | 0) < (K | 0));
      M = c[44] | 0;
      N = c[50] | 0;
      O = c[48] | 0;
      P = c[196] | 0;
     } else {
      M = B;
      N = t;
      O = s;
      P = 0;
     }
    } while (0);
    c[48] = M - N + O;
    c[50] = -1;
    I = M;
    J = P;
   }
  } while (0);
  s = I + 1 | 0;
  c[44] = s;
  z = s;
  A = J;
  o = 1197;
 }
 do {
  if ((o | 0) == 1298) {
   i = j;
   return k | 0;
  } else if ((o | 0) == 1232) {
   J = c[48] | 0;
   A = c[50] | 0;
   if ((J | 0) != -1 & (A | 0) == -1) {
    c[50] = B;
    S = a[G] | 0;
    T = B;
   } else {
    S = H;
    T = A;
   }
   if (S << 24 >> 24 == 0) {
    C = F;
    D = B;
    break;
   }
   c[40] = G;
   if ((a[G] | 0) != 45) {
    C = G;
    D = B;
    break;
   }
   if ((a[F + 2 | 0] | 0) != 0) {
    C = G;
    D = B;
    break;
   }
   A = B + 1 | 0;
   c[44] = A;
   c[40] = 824;
   if ((T | 0) != -1) {
    z = T - J | 0;
    I = A - T | 0;
    P = (z | 0) % (I | 0) | 0;
    if ((P | 0) == 0) {
     U = I;
    } else {
     M = I;
     O = P;
     while (1) {
      P = (M | 0) % (O | 0) | 0;
      if ((P | 0) == 0) {
       U = O;
       break;
      } else {
       M = O;
       O = P;
      }
     }
    }
    O = (A - J | 0) / (U | 0) | 0;
    do {
     if ((U | 0) > 0) {
      M = -z | 0;
      if ((O | 0) > 0) {
       V = 0;
      } else {
       W = T;
       X = J;
       Y = A;
       break;
      }
      do {
       P = V + T | 0;
       N = d + (P << 2) | 0;
       K = 0;
       L = P;
       P = c[N >> 2] | 0;
       while (1) {
        x = ((L | 0) < (T | 0) ? I : M) + L | 0;
        s = d + (x << 2) | 0;
        t = c[s >> 2] | 0;
        c[s >> 2] = P;
        c[N >> 2] = t;
        s = K + 1 | 0;
        if ((s | 0) < (O | 0)) {
         K = s;
         L = x;
         P = t;
        } else {
         break;
        }
       }
       V = V + 1 | 0;
      } while ((V | 0) < (U | 0));
      W = c[50] | 0;
      X = c[48] | 0;
      Y = c[44] | 0;
     } else {
      W = T;
      X = J;
      Y = A;
     }
    } while (0);
    c[44] = X - W + Y;
   }
   c[50] = -1;
   c[48] = -1;
   k = -1;
   i = j;
   return k | 0;
  } else if ((o | 0) == 1200) {
   c[40] = 824;
   A = c[50] | 0;
   J = c[48] | 0;
   do {
    if ((A | 0) == -1) {
     if ((J | 0) == -1) {
      break;
     }
     c[44] = J;
    } else {
     O = A - J | 0;
     I = B - A | 0;
     z = (O | 0) % (I | 0) | 0;
     if ((z | 0) == 0) {
      Z = I;
     } else {
      M = I;
      P = z;
      while (1) {
       z = (M | 0) % (P | 0) | 0;
       if ((z | 0) == 0) {
        Z = P;
        break;
       } else {
        M = P;
        P = z;
       }
      }
     }
     P = (B - J | 0) / (Z | 0) | 0;
     do {
      if ((Z | 0) > 0) {
       M = -O | 0;
       if ((P | 0) > 0) {
        _ = 0;
       } else {
        $ = A;
        aa = J;
        ab = B;
        break;
       }
       do {
        z = _ + A | 0;
        L = d + (z << 2) | 0;
        K = 0;
        N = z;
        z = c[L >> 2] | 0;
        while (1) {
         t = ((N | 0) < (A | 0) ? I : M) + N | 0;
         x = d + (t << 2) | 0;
         s = c[x >> 2] | 0;
         c[x >> 2] = z;
         c[L >> 2] = s;
         x = K + 1 | 0;
         if ((x | 0) < (P | 0)) {
          K = x;
          N = t;
          z = s;
         } else {
          break;
         }
        }
        _ = _ + 1 | 0;
       } while ((_ | 0) < (Z | 0));
       $ = c[50] | 0;
       aa = c[48] | 0;
       ab = c[44] | 0;
      } else {
       $ = A;
       aa = J;
       ab = B;
      }
     } while (0);
     c[44] = aa - $ + ab;
    }
   } while (0);
   c[50] = -1;
   c[48] = -1;
   k = -1;
   i = j;
   return k | 0;
  } else if ((o | 0) == 1217) {
   c[44] = B + 1;
   c[198] = c[E >> 2];
   k = 1;
   i = j;
   return k | 0;
  }
 } while (0);
 E = (f | 0) != 0;
 L1659 : do {
  if (E) {
   if ((C | 0) == (c[d + (D << 2) >> 2] | 0)) {
    ac = C;
    break;
   }
   B = a[C] | 0;
   do {
    if (B << 24 >> 24 == 45) {
     c[40] = C + 1;
     ad = 0;
    } else {
     if ((w & 4 | 0) == 0) {
      ac = C;
      break L1659;
     }
     if (B << 24 >> 24 == 58) {
      ad = 0;
      break;
     }
     ad = (aB(v | 0, B << 24 >> 24 | 0) | 0) != 0 | 0;
    }
   } while (0);
   B = cv(d, v, f, g, ad) | 0;
   if ((B | 0) == -1) {
    ac = c[40] | 0;
    break;
   }
   c[40] = 824;
   k = B;
   i = j;
   return k | 0;
  } else {
   ac = C;
  }
 } while (0);
 C = ac + 1 | 0;
 c[40] = C;
 ad = a[ac] | 0;
 ac = ad << 24 >> 24;
 if ((ad << 24 >> 24 | 0) == 45) {
  if ((a[C] | 0) == 0) {
   o = 1260;
  }
 } else if ((ad << 24 >> 24 | 0) == 58) {
  o = 1263;
 } else {
  o = 1260;
 }
 do {
  if ((o | 0) == 1260) {
   w = aB(v | 0, ac | 0) | 0;
   if ((w | 0) == 0) {
    if (ad << 24 >> 24 != 45) {
     o = 1263;
     break;
    }
    if ((a[C] | 0) == 0) {
     k = -1;
    } else {
     break;
    }
    i = j;
    return k | 0;
   }
   D = a[w + 1 | 0] | 0;
   if (E & ad << 24 >> 24 == 87 & D << 24 >> 24 == 59) {
    do {
     if ((a[C] | 0) == 0) {
      B = (c[44] | 0) + 1 | 0;
      c[44] = B;
      if ((B | 0) < (b | 0)) {
       c[40] = c[d + (B << 2) >> 2];
       break;
      }
      c[40] = 824;
      do {
       if ((c[46] | 0) != 0) {
        if ((a[v] | 0) == 58) {
         break;
        }
        cx(48, (y = i, i = i + 8 | 0, c[y >> 2] = ac, y) | 0);
       }
      } while (0);
      c[42] = ac;
      k = (a[v] | 0) == 58 ? 58 : 63;
      i = j;
      return k | 0;
     }
    } while (0);
    B = cv(d, v, f, g, 0) | 0;
    c[40] = 824;
    k = B;
    i = j;
    return k | 0;
   }
   if (D << 24 >> 24 != 58) {
    if ((a[C] | 0) != 0) {
     k = ac;
     i = j;
     return k | 0;
    }
    c[44] = (c[44] | 0) + 1;
    k = ac;
    i = j;
    return k | 0;
   }
   c[198] = 0;
   do {
    if ((a[C] | 0) == 0) {
     if ((a[w + 2 | 0] | 0) == 58) {
      break;
     }
     B = (c[44] | 0) + 1 | 0;
     c[44] = B;
     if ((B | 0) < (b | 0)) {
      c[198] = c[d + (B << 2) >> 2];
      break;
     }
     c[40] = 824;
     do {
      if ((c[46] | 0) != 0) {
       if ((a[v] | 0) == 58) {
        break;
       }
       cx(48, (y = i, i = i + 8 | 0, c[y >> 2] = ac, y) | 0);
      }
     } while (0);
     c[42] = ac;
     k = (a[v] | 0) == 58 ? 58 : 63;
     i = j;
     return k | 0;
    } else {
     c[198] = C;
    }
   } while (0);
   c[40] = 824;
   c[44] = (c[44] | 0) + 1;
   k = ac;
   i = j;
   return k | 0;
  }
 } while (0);
 do {
  if ((o | 0) == 1263) {
   if ((a[C] | 0) != 0) {
    break;
   }
   c[44] = (c[44] | 0) + 1;
  }
 } while (0);
 do {
  if ((c[46] | 0) != 0) {
   if ((a[v] | 0) == 58) {
    break;
   }
   cx(272, (y = i, i = i + 8 | 0, c[y >> 2] = ac, y) | 0);
  }
 } while (0);
 c[42] = ac;
 k = 63;
 i = j;
 return k | 0;
}
function cq(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 return cp(a, b, c, d, e, 1) | 0;
}
function cr(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 return cp(a, b, c, d, e, 5) | 0;
}
function cs(a) {
 a = a | 0;
 return ca(a) | 0;
}
function ct(a, b) {
 a = a | 0;
 b = b | 0;
 return cs(a) | 0;
}
function cu() {
 var a = 0;
 a = aJ(4) | 0;
 c[a >> 2] = 560;
 as(a | 0, 688, 6);
}
function cv(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, z = 0;
 h = i;
 j = c[40] | 0;
 k = c[44] | 0;
 l = k + 1 | 0;
 c[44] = l;
 m = aB(j | 0, 61) | 0;
 if ((m | 0) == 0) {
  n = cM(j | 0) | 0;
  o = 0;
 } else {
  n = m - j | 0;
  o = m + 1 | 0;
 }
 m = c[e >> 2] | 0;
 L1739 : do {
  if ((m | 0) != 0) {
   L1741 : do {
    if ((g | 0) != 0 & (n | 0) == 1) {
     p = 0;
     q = m;
     while (1) {
      if ((a[j] | 0) == (a[q] | 0)) {
       if ((cM(q | 0) | 0) == 1) {
        r = p;
        break L1741;
       }
      }
      p = p + 1 | 0;
      q = c[e + (p << 4) >> 2] | 0;
      if ((q | 0) == 0) {
       break L1739;
      }
     }
    } else {
     q = 0;
     p = -1;
     s = m;
     while (1) {
      if ((ap(j | 0, s | 0, n | 0) | 0) == 0) {
       if ((cM(s | 0) | 0) == (n | 0)) {
        r = q;
        break L1741;
       }
       if ((p | 0) == -1) {
        t = q;
       } else {
        break;
       }
      } else {
       t = p;
      }
      u = q + 1 | 0;
      v = c[e + (u << 4) >> 2] | 0;
      if ((v | 0) == 0) {
       r = t;
       break L1741;
      } else {
       q = u;
       p = t;
       s = v;
      }
     }
     do {
      if ((c[46] | 0) != 0) {
       if ((a[d] | 0) == 58) {
        break;
       }
       cx(304, (y = i, i = i + 16 | 0, c[y >> 2] = n, c[y + 8 >> 2] = j, y) | 0);
      }
     } while (0);
     c[42] = 0;
     w = 63;
     i = h;
     return w | 0;
    }
   } while (0);
   if ((r | 0) == -1) {
    break;
   }
   s = e + (r << 4) + 4 | 0;
   p = c[s >> 2] | 0;
   q = (o | 0) == 0;
   if (!((p | 0) != 0 | q)) {
    do {
     if ((c[46] | 0) != 0) {
      if ((a[d] | 0) == 58) {
       break;
      }
      cx(208, (y = i, i = i + 16 | 0, c[y >> 2] = n, c[y + 8 >> 2] = j, y) | 0);
     }
    } while (0);
    if ((c[e + (r << 4) + 8 >> 2] | 0) == 0) {
     x = c[e + (r << 4) + 12 >> 2] | 0;
    } else {
     x = 0;
    }
    c[42] = x;
    w = (a[d] | 0) == 58 ? 58 : 63;
    i = h;
    return w | 0;
   }
   do {
    if ((p - 1 | 0) >>> 0 < 2) {
     if (!q) {
      c[198] = o;
      break;
     }
     if ((p | 0) != 1) {
      break;
     }
     c[44] = k + 2;
     c[198] = c[b + (l << 2) >> 2];
    }
   } while (0);
   if (!((c[s >> 2] | 0) == 1 & (c[198] | 0) == 0)) {
    if ((f | 0) != 0) {
     c[f >> 2] = r;
    }
    p = c[e + (r << 4) + 8 >> 2] | 0;
    q = c[e + (r << 4) + 12 >> 2] | 0;
    if ((p | 0) == 0) {
     w = q;
     i = h;
     return w | 0;
    }
    c[p >> 2] = q;
    w = 0;
    i = h;
    return w | 0;
   }
   do {
    if ((c[46] | 0) != 0) {
     if ((a[d] | 0) == 58) {
      break;
     }
     cx(8, (y = i, i = i + 8 | 0, c[y >> 2] = j, y) | 0);
    }
   } while (0);
   if ((c[e + (r << 4) + 8 >> 2] | 0) == 0) {
    z = c[e + (r << 4) + 12 >> 2] | 0;
   } else {
    z = 0;
   }
   c[42] = z;
   c[44] = (c[44] | 0) - 1;
   w = (a[d] | 0) == 58 ? 58 : 63;
   i = h;
   return w | 0;
  }
 } while (0);
 if ((g | 0) != 0) {
  c[44] = k;
  w = -1;
  i = h;
  return w | 0;
 }
 do {
  if ((c[46] | 0) != 0) {
   if ((a[d] | 0) == 58) {
    break;
   }
   cx(248, (y = i, i = i + 8 | 0, c[y >> 2] = j, y) | 0);
  }
 } while (0);
 c[42] = 0;
 w = 63;
 i = h;
 return w | 0;
}
function cw(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 d = i;
 i = i + 16 | 0;
 e = d | 0;
 f = e;
 c[f >> 2] = b;
 c[f + 4 >> 2] = 0;
 cy(a, e | 0);
 i = d;
 return;
}
function cx(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 d = i;
 i = i + 16 | 0;
 e = d | 0;
 f = e;
 c[f >> 2] = b;
 c[f + 4 >> 2] = 0;
 cz(a, e | 0);
 i = d;
 return;
}
function cy(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 d = i;
 e = c[(aX() | 0) >> 2] | 0;
 f = c[r >> 2] | 0;
 av(c[o >> 2] | 0, 432, (y = i, i = i + 8 | 0, c[y >> 2] = f, y) | 0) | 0;
 if ((a | 0) != 0) {
  f = c[o >> 2] | 0;
  aQ(f | 0, a | 0, b | 0) | 0;
  b = c[o >> 2] | 0;
  aE(472, 2, 1, b | 0) | 0;
 }
 b = c[o >> 2] | 0;
 a = at(e | 0) | 0;
 av(b | 0, 384, (y = i, i = i + 8 | 0, c[y >> 2] = a, y) | 0) | 0;
 i = d;
 return;
}
function cz(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = i;
 e = c[r >> 2] | 0;
 av(c[o >> 2] | 0, 376, (y = i, i = i + 8 | 0, c[y >> 2] = e, y) | 0) | 0;
 if ((a | 0) != 0) {
  e = c[o >> 2] | 0;
  aQ(e | 0, a | 0, b | 0) | 0;
 }
 aC(10, c[o >> 2] | 0) | 0;
 i = d;
 return;
}
function cA(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0.0, r = 0, s = 0, t = 0, u = 0, v = 0.0, w = 0, x = 0, y = 0, z = 0.0, A = 0.0, B = 0, C = 0, D = 0, E = 0.0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0.0, O = 0, P = 0, Q = 0.0, R = 0.0, S = 0.0;
 e = b;
 while (1) {
  f = e + 1 | 0;
  if ((aK(a[e] | 0) | 0) == 0) {
   break;
  } else {
   e = f;
  }
 }
 g = a[e] | 0;
 if ((g << 24 >> 24 | 0) == 45) {
  i = f;
  j = 1;
 } else if ((g << 24 >> 24 | 0) == 43) {
  i = f;
  j = 0;
 } else {
  i = e;
  j = 0;
 }
 e = -1;
 f = 0;
 g = i;
 while (1) {
  k = a[g] | 0;
  if (((k << 24 >> 24) - 48 | 0) >>> 0 < 10) {
   l = e;
  } else {
   if (k << 24 >> 24 != 46 | (e | 0) > -1) {
    break;
   } else {
    l = f;
   }
  }
  e = l;
  f = f + 1 | 0;
  g = g + 1 | 0;
 }
 l = g + (-f | 0) | 0;
 i = (e | 0) < 0;
 m = ((i ^ 1) << 31 >> 31) + f | 0;
 n = (m | 0) > 18;
 o = (n ? -18 : -m | 0) + (i ? f : e) | 0;
 e = n ? 18 : m;
 do {
  if ((e | 0) == 0) {
   p = b;
   q = 0.0;
  } else {
   if ((e | 0) > 9) {
    m = l;
    n = e;
    f = 0;
    while (1) {
     i = a[m] | 0;
     r = m + 1 | 0;
     if (i << 24 >> 24 == 46) {
      s = a[r] | 0;
      t = m + 2 | 0;
     } else {
      s = i;
      t = r;
     }
     u = (f * 10 | 0) - 48 + (s << 24 >> 24) | 0;
     r = n - 1 | 0;
     if ((r | 0) > 9) {
      m = t;
      n = r;
      f = u;
     } else {
      break;
     }
    }
    v = +(u | 0) * 1.0e9;
    w = 9;
    x = t;
    y = 1393;
   } else {
    if ((e | 0) > 0) {
     v = 0.0;
     w = e;
     x = l;
     y = 1393;
    } else {
     z = 0.0;
     A = 0.0;
    }
   }
   if ((y | 0) == 1393) {
    f = x;
    n = w;
    m = 0;
    while (1) {
     r = a[f] | 0;
     i = f + 1 | 0;
     if (r << 24 >> 24 == 46) {
      B = a[i] | 0;
      C = f + 2 | 0;
     } else {
      B = r;
      C = i;
     }
     D = (m * 10 | 0) - 48 + (B << 24 >> 24) | 0;
     i = n - 1 | 0;
     if ((i | 0) > 0) {
      f = C;
      n = i;
      m = D;
     } else {
      break;
     }
    }
    z = +(D | 0);
    A = v;
   }
   E = A + z;
   do {
    if ((k << 24 >> 24 | 0) == 69 | (k << 24 >> 24 | 0) == 101) {
     m = g + 1 | 0;
     n = a[m] | 0;
     if ((n << 24 >> 24 | 0) == 43) {
      F = g + 2 | 0;
      G = 0;
     } else if ((n << 24 >> 24 | 0) == 45) {
      F = g + 2 | 0;
      G = 1;
     } else {
      F = m;
      G = 0;
     }
     m = a[F] | 0;
     if (((m << 24 >> 24) - 48 | 0) >>> 0 < 10) {
      H = F;
      I = 0;
      J = m;
     } else {
      K = 0;
      L = F;
      M = G;
      break;
     }
     while (1) {
      m = (I * 10 | 0) - 48 + (J << 24 >> 24) | 0;
      n = H + 1 | 0;
      f = a[n] | 0;
      if (((f << 24 >> 24) - 48 | 0) >>> 0 < 10) {
       H = n;
       I = m;
       J = f;
      } else {
       K = m;
       L = n;
       M = G;
       break;
      }
     }
    } else {
     K = 0;
     L = g;
     M = 0;
    }
   } while (0);
   n = o + ((M | 0) == 0 ? K : -K | 0) | 0;
   m = (n | 0) < 0 ? -n | 0 : n;
   if ((m | 0) > 511) {
    c[(aX() | 0) >> 2] = 34;
    N = 1.0;
    O = 88;
    P = 511;
    y = 1410;
   } else {
    if ((m | 0) == 0) {
     Q = 1.0;
    } else {
     N = 1.0;
     O = 88;
     P = m;
     y = 1410;
    }
   }
   if ((y | 0) == 1410) {
    while (1) {
     y = 0;
     if ((P & 1 | 0) == 0) {
      R = N;
     } else {
      R = N * +h[O >> 3];
     }
     m = P >> 1;
     if ((m | 0) == 0) {
      Q = R;
      break;
     } else {
      N = R;
      O = O + 8 | 0;
      P = m;
      y = 1410;
     }
    }
   }
   if ((n | 0) > -1) {
    p = L;
    q = E * Q;
    break;
   } else {
    p = L;
    q = E / Q;
    break;
   }
  }
 } while (0);
 if ((d | 0) != 0) {
  c[d >> 2] = p;
 }
 if ((j | 0) == 0) {
  S = q;
  return +S;
 }
 S = -0.0 - q;
 return +S;
}
function cB(a, b) {
 a = a | 0;
 b = b | 0;
 return +(+cA(a, b));
}
function cC(a, b) {
 a = a | 0;
 b = b | 0;
 return +(+cA(a, b));
}
function cD(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return +(+cA(a, b));
}
function cE(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return +(+cA(a, b));
}
function cF(a) {
 a = a | 0;
 return +(+cA(a, 0));
}
function cG(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = i;
 i = i + 16 | 0;
 f = e | 0;
 e = f;
 c[e >> 2] = d;
 c[e + 4 >> 2] = 0;
 cI(a, b, f | 0);
}
function cH(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = i;
 i = i + 16 | 0;
 f = e | 0;
 e = f;
 c[e >> 2] = d;
 c[e + 4 >> 2] = 0;
 cJ(a, b, f | 0);
}
function cI(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = c[(aX() | 0) >> 2] | 0;
 f = c[r >> 2] | 0;
 av(c[o >> 2] | 0, 336, (y = i, i = i + 8 | 0, c[y >> 2] = f, y) | 0) | 0;
 if ((b | 0) != 0) {
  f = c[o >> 2] | 0;
  aQ(f | 0, b | 0, d | 0) | 0;
  d = c[o >> 2] | 0;
  aE(480, 2, 1, d | 0) | 0;
 }
 d = c[o >> 2] | 0;
 b = at(e | 0) | 0;
 av(d | 0, 392, (y = i, i = i + 8 | 0, c[y >> 2] = b, y) | 0) | 0;
 aH(a | 0);
}
function cJ(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 e = c[r >> 2] | 0;
 av(c[o >> 2] | 0, 440, (y = i, i = i + 8 | 0, c[y >> 2] = e, y) | 0) | 0;
 if ((b | 0) != 0) {
  e = c[o >> 2] | 0;
  aQ(e | 0, b | 0, d | 0) | 0;
 }
 aC(10, c[o >> 2] | 0) | 0;
 aH(a | 0);
}
function cK(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 f = b | 0;
 if ((b & 3) == (d & 3)) {
  while (b & 3) {
   if ((e | 0) == 0) return f | 0;
   a[b] = a[d] | 0;
   b = b + 1 | 0;
   d = d + 1 | 0;
   e = e - 1 | 0;
  }
  while ((e | 0) >= 4) {
   c[b >> 2] = c[d >> 2];
   b = b + 4 | 0;
   d = d + 4 | 0;
   e = e - 4 | 0;
  }
 }
 while ((e | 0) > 0) {
  a[b] = a[d] | 0;
  b = b + 1 | 0;
  d = d + 1 | 0;
  e = e - 1 | 0;
 }
 return f | 0;
}
function cL(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = b + e | 0;
 if ((e | 0) >= 20) {
  d = d & 255;
  e = b & 3;
  g = d | d << 8 | d << 16 | d << 24;
  h = f & ~3;
  if (e) {
   e = b + 4 - e | 0;
   while ((b | 0) < (e | 0)) {
    a[b] = d;
    b = b + 1 | 0;
   }
  }
  while ((b | 0) < (h | 0)) {
   c[b >> 2] = g;
   b = b + 4 | 0;
  }
 }
 while ((b | 0) < (f | 0)) {
  a[b] = d;
  b = b + 1 | 0;
 }
}
function cM(b) {
 b = b | 0;
 var c = 0;
 c = b;
 while (a[c] | 0) {
  c = c + 1 | 0;
 }
 return c - b | 0;
}
function cN(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 e = a + c >>> 0;
 return (H = b + d + (e >>> 0 < a >>> 0 | 0) >>> 0, e | 0) | 0;
}
function cO(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 e = b - d >>> 0;
 e = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
 return (H = e, a - c >>> 0 | 0) | 0;
}
function cP(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  H = b << c | (a & (1 << c) - 1 << 32 - c) >>> 32 - c;
  return a << c;
 }
 H = a << c - 32;
 return 0;
}
function cQ(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  H = b >>> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 H = 0;
 return b >>> c - 32 | 0;
}
function cR(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  H = b >> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 H = (b | 0) < 0 ? -1 : 0;
 return b >> c - 32 | 0;
}
function cS(b) {
 b = b | 0;
 var c = 0;
 c = a[n + (b >>> 24) | 0] | 0;
 if ((c | 0) < 8) return c | 0;
 c = a[n + (b >> 16 & 255) | 0] | 0;
 if ((c | 0) < 8) return c + 8 | 0;
 c = a[n + (b >> 8 & 255) | 0] | 0;
 if ((c | 0) < 8) return c + 16 | 0;
 return (a[n + (b & 255) | 0] | 0) + 24 | 0;
}
function cT(b) {
 b = b | 0;
 var c = 0;
 c = a[m + (b & 255) | 0] | 0;
 if ((c | 0) < 8) return c | 0;
 c = a[m + (b >> 8 & 255) | 0] | 0;
 if ((c | 0) < 8) return c + 8 | 0;
 c = a[m + (b >> 16 & 255) | 0] | 0;
 if ((c | 0) < 8) return c + 16 | 0;
 return (a[m + (b >>> 24) | 0] | 0) + 24 | 0;
}
function cU(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0, d = 0, e = 0, f = 0;
 c = a & 65535;
 d = b & 65535;
 e = ad(d, c) | 0;
 f = a >>> 16;
 a = (e >>> 16) + (ad(d, f) | 0) | 0;
 d = b >>> 16;
 b = ad(d, c) | 0;
 return (H = (a >>> 16) + (ad(d, f) | 0) + (((a & 65535) + b | 0) >>> 16) | 0, a + b << 16 | e & 65535 | 0) | 0;
}
function cV(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 e = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 f = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 g = d >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 h = ((d | 0) < 0 ? -1 : 0) >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 i = cO(e ^ a, f ^ b, e, f) | 0;
 b = H;
 a = g ^ e;
 e = h ^ f;
 f = cO((c_(i, b, cO(g ^ c, h ^ d, g, h) | 0, H, 0) | 0) ^ a, H ^ e, a, e) | 0;
 return (H = H, f) | 0;
}
function cW(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 f = i;
 i = i + 8 | 0;
 g = f | 0;
 h = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 j = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 k = e >> 31 | ((e | 0) < 0 ? -1 : 0) << 1;
 l = ((e | 0) < 0 ? -1 : 0) >> 31 | ((e | 0) < 0 ? -1 : 0) << 1;
 m = cO(h ^ a, j ^ b, h, j) | 0;
 b = H;
 a = cO(k ^ d, l ^ e, k, l) | 0;
 c_(m, b, a, H, g) | 0;
 a = cO(c[g >> 2] ^ h, c[g + 4 >> 2] ^ j, h, j) | 0;
 j = H;
 i = f;
 return (H = j, a) | 0;
}
function cX(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a;
 a = c;
 c = cU(e, a) | 0;
 f = H;
 return (H = (ad(b, a) | 0) + (ad(d, e) | 0) + f | f & 0, c | 0 | 0) | 0;
}
function cY(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 e = c_(a, b, c, d, 0) | 0;
 return (H = H, e) | 0;
}
function cZ(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = i;
 i = i + 8 | 0;
 g = f | 0;
 c_(a, b, d, e, g) | 0;
 i = f;
 return (H = c[g + 4 >> 2] | 0, c[g >> 2] | 0) | 0;
}
function c_(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, I = 0, J = 0, K = 0, L = 0, M = 0;
 g = a;
 h = b;
 i = h;
 j = d;
 k = e;
 l = k;
 if ((i | 0) == 0) {
  m = (f | 0) != 0;
  if ((l | 0) == 0) {
   if (m) {
    c[f >> 2] = (g >>> 0) % (j >>> 0);
    c[f + 4 >> 2] = 0;
   }
   n = 0;
   o = (g >>> 0) / (j >>> 0) >>> 0;
   return (H = n, o) | 0;
  } else {
   if (!m) {
    n = 0;
    o = 0;
    return (H = n, o) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = b & 0;
   n = 0;
   o = 0;
   return (H = n, o) | 0;
  }
 }
 m = (l | 0) == 0;
 do {
  if ((j | 0) == 0) {
   if (m) {
    if ((f | 0) != 0) {
     c[f >> 2] = (i >>> 0) % (j >>> 0);
     c[f + 4 >> 2] = 0;
    }
    n = 0;
    o = (i >>> 0) / (j >>> 0) >>> 0;
    return (H = n, o) | 0;
   }
   if ((g | 0) == 0) {
    if ((f | 0) != 0) {
     c[f >> 2] = 0;
     c[f + 4 >> 2] = (i >>> 0) % (l >>> 0);
    }
    n = 0;
    o = (i >>> 0) / (l >>> 0) >>> 0;
    return (H = n, o) | 0;
   }
   p = l - 1 | 0;
   if ((p & l | 0) == 0) {
    if ((f | 0) != 0) {
     c[f >> 2] = a | 0;
     c[f + 4 >> 2] = p & i | b & 0;
    }
    n = 0;
    o = i >>> ((cT(l | 0) | 0) >>> 0);
    return (H = n, o) | 0;
   }
   p = (cS(l | 0) | 0) - (cS(i | 0) | 0) | 0;
   if (p >>> 0 <= 30) {
    q = p + 1 | 0;
    r = 31 - p | 0;
    s = q;
    t = i << r | g >>> (q >>> 0);
    u = i >>> (q >>> 0);
    v = 0;
    w = g << r;
    break;
   }
   if ((f | 0) == 0) {
    n = 0;
    o = 0;
    return (H = n, o) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = h | b & 0;
   n = 0;
   o = 0;
   return (H = n, o) | 0;
  } else {
   if (!m) {
    r = (cS(l | 0) | 0) - (cS(i | 0) | 0) | 0;
    if (r >>> 0 <= 31) {
     q = r + 1 | 0;
     p = 31 - r | 0;
     x = r - 31 >> 31;
     s = q;
     t = g >>> (q >>> 0) & x | i << p;
     u = i >>> (q >>> 0) & x;
     v = 0;
     w = g << p;
     break;
    }
    if ((f | 0) == 0) {
     n = 0;
     o = 0;
     return (H = n, o) | 0;
    }
    c[f >> 2] = a | 0;
    c[f + 4 >> 2] = h | b & 0;
    n = 0;
    o = 0;
    return (H = n, o) | 0;
   }
   p = j - 1 | 0;
   if ((p & j | 0) != 0) {
    x = (cS(j | 0) | 0) + 33 - (cS(i | 0) | 0) | 0;
    q = 64 - x | 0;
    r = 32 - x | 0;
    y = r >> 31;
    z = x - 32 | 0;
    A = z >> 31;
    s = x;
    t = r - 1 >> 31 & i >>> (z >>> 0) | (i << r | g >>> (x >>> 0)) & A;
    u = A & i >>> (x >>> 0);
    v = g << q & y;
    w = (i << q | g >>> (z >>> 0)) & y | g << r & x - 33 >> 31;
    break;
   }
   if ((f | 0) != 0) {
    c[f >> 2] = p & g;
    c[f + 4 >> 2] = 0;
   }
   if ((j | 0) == 1) {
    n = h | b & 0;
    o = a | 0 | 0;
    return (H = n, o) | 0;
   } else {
    p = cT(j | 0) | 0;
    n = i >>> (p >>> 0) | 0;
    o = i << 32 - p | g >>> (p >>> 0) | 0;
    return (H = n, o) | 0;
   }
  }
 } while (0);
 if ((s | 0) == 0) {
  B = w;
  C = v;
  D = u;
  E = t;
  F = 0;
  G = 0;
 } else {
  g = d | 0 | 0;
  d = k | e & 0;
  e = cN(g, d, -1, -1) | 0;
  k = H;
  i = w;
  w = v;
  v = u;
  u = t;
  t = s;
  s = 0;
  while (1) {
   I = w >>> 31 | i << 1;
   J = s | w << 1;
   j = u << 1 | i >>> 31 | 0;
   a = u >>> 31 | v << 1 | 0;
   cO(e, k, j, a) | 0;
   b = H;
   h = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
   K = h & 1;
   L = cO(j, a, h & g, (((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1) & d) | 0;
   M = H;
   b = t - 1 | 0;
   if ((b | 0) == 0) {
    break;
   } else {
    i = I;
    w = J;
    v = M;
    u = L;
    t = b;
    s = K;
   }
  }
  B = I;
  C = J;
  D = M;
  E = L;
  F = 0;
  G = K;
 }
 K = C;
 C = 0;
 if ((f | 0) != 0) {
  c[f >> 2] = E;
  c[f + 4 >> 2] = D;
 }
 n = (K | 0) >>> 31 | (B | C) << 1 | (C << 1 | K >>> 31) & 0 | F;
 o = (K << 1 | 0 >>> 31) & -2 | G;
 return (H = n, o) | 0;
}
function c$(a, b) {
 a = a | 0;
 b = b | 0;
 a1[a & 15](b | 0);
}
function c0(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 a2[a & 15](b | 0, c | 0);
}
function c1(a, b) {
 a = a | 0;
 b = b | 0;
 return a3[a & 7](b | 0) | 0;
}
function c2(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 a4[a & 15](b | 0, c | 0, d | 0);
}
function c3(a) {
 a = a | 0;
 a5[a & 1]();
}
function c4(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return a6[a & 1](b | 0, c | 0) | 0;
}
function c5(a) {
 a = a | 0;
 ae(0);
}
function c6(a, b) {
 a = a | 0;
 b = b | 0;
 ae(1);
}
function c7(a) {
 a = a | 0;
 ae(2);
 return 0;
}
function c8(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 ae(3);
}
function c9() {
 ae(4);
}
function da(a, b) {
 a = a | 0;
 b = b | 0;
 ae(5);
 return 0;
}
// EMSCRIPTEN_END_FUNCS
 var a1 = [ c5, c5, ch, c5, cn, c5, cc, c5, cg, c5, cm, c5, c5, c5, c5, c5 ];
 var a2 = [ c6, c6, cw, c6, cy, c6, cx, c6, cz, c6, c6, c6, c6, c6, c6, c6 ];
 var a3 = [ c7, c7, cd, c7, ce, c7, c7, c7 ];
 var a4 = [ c8, c8, cJ, c8, cI, c8, cG, c8, cH, c8, c8, c8, c8, c8, c8, c8 ];
 var a5 = [ c9, c9 ];
 var a6 = [ da, da ];
 return {
  _crypto_scrypt: bu,
  _strlen: cM,
  _free: bM,
  _realloc: bO,
  _memset: cL,
  _malloc: bL,
  _memcpy: cK,
  _calloc: bN,
  runPostSets: bn,
  stackAlloc: a7,
  stackSave: a8,
  stackRestore: a9,
  setThrew: ba,
  setTempRet0: bd,
  setTempRet1: be,
  setTempRet2: bf,
  setTempRet3: bg,
  setTempRet4: bh,
  setTempRet5: bi,
  setTempRet6: bj,
  setTempRet7: bk,
  setTempRet8: bl,
  setTempRet9: bm,
  dynCall_vi: c$,
  dynCall_vii: c0,
  dynCall_ii: c1,
  dynCall_viii: c2,
  dynCall_v: c3,
  dynCall_iii: c4
 };
// EMSCRIPTEN_END_ASM
})({Math:Math, Int8Array:Int8Array, Int16Array:Int16Array, Int32Array:Int32Array, Uint8Array:Uint8Array, Uint16Array:Uint16Array, Uint32Array:Uint32Array, Float32Array:Float32Array, Float64Array:Float64Array}, {abort:wa, assert:w, asmPrintInt:function(a, b) {
  s.print("int " + a + "," + b)
}, asmPrintFloat:function(a, b) {
  s.print("float " + a + "," + b)
}, min:Xc, invoke_vi:function(a, b) {
  try {
    s.dynCall_vi(a, b)
  }catch(c) {
    "number" !== typeof c && "longjmp" !== c && g(c), V.setThrew(1, 0)
  }
}, invoke_vii:function(a, b, c) {
  try {
    s.dynCall_vii(a, b, c)
  }catch(d) {
    "number" !== typeof d && "longjmp" !== d && g(d), V.setThrew(1, 0)
  }
}, invoke_ii:function(a, b) {
  try {
    return s.dynCall_ii(a, b)
  }catch(c) {
    "number" !== typeof c && "longjmp" !== c && g(c), V.setThrew(1, 0)
  }
}, invoke_viii:function(a, b, c, d) {
  try {
    s.dynCall_viii(a, b, c, d)
  }catch(e) {
    "number" !== typeof e && "longjmp" !== e && g(e), V.setThrew(1, 0)
  }
}, invoke_v:function(a) {
  try {
    s.dynCall_v(a)
  }catch(b) {
    "number" !== typeof b && "longjmp" !== b && g(b), V.setThrew(1, 0)
  }
}, invoke_iii:function(a, b, c) {
  try {
    return s.dynCall_iii(a, b, c)
  }catch(d) {
    "number" !== typeof d && "longjmp" !== d && g(d), V.setThrew(1, 0)
  }
}, _strncmp:function(a, b, c) {
  for(var d = 0;d < c;) {
    var e = G[a + d | 0], f = G[b + d | 0];
    if(e == f && 0 == e) {
      break
    }
    if(0 == e) {
      return-1
    }
    if(0 == f) {
      return 1
    }
    if(e == f) {
      d++
    }else {
      return e > f ? 1 : -1
    }
  }
  return 0
}, _llvm_va_end:aa(), _sysconf:function(a) {
  switch(a) {
    case 8:
      return 4096;
    case 54:
    ;
    case 56:
    ;
    case 21:
    ;
    case 61:
    ;
    case 63:
    ;
    case 22:
    ;
    case 67:
    ;
    case 23:
    ;
    case 24:
    ;
    case 25:
    ;
    case 26:
    ;
    case 27:
    ;
    case 69:
    ;
    case 28:
    ;
    case 101:
    ;
    case 70:
    ;
    case 71:
    ;
    case 29:
    ;
    case 30:
    ;
    case 199:
    ;
    case 75:
    ;
    case 76:
    ;
    case 32:
    ;
    case 43:
    ;
    case 44:
    ;
    case 80:
    ;
    case 46:
    ;
    case 47:
    ;
    case 45:
    ;
    case 48:
    ;
    case 49:
    ;
    case 42:
    ;
    case 82:
    ;
    case 33:
    ;
    case 7:
    ;
    case 108:
    ;
    case 109:
    ;
    case 107:
    ;
    case 112:
    ;
    case 119:
    ;
    case 121:
      return 200809;
    case 13:
    ;
    case 104:
    ;
    case 94:
    ;
    case 95:
    ;
    case 34:
    ;
    case 35:
    ;
    case 77:
    ;
    case 81:
    ;
    case 83:
    ;
    case 84:
    ;
    case 85:
    ;
    case 86:
    ;
    case 87:
    ;
    case 88:
    ;
    case 89:
    ;
    case 90:
    ;
    case 91:
    ;
    case 94:
    ;
    case 95:
    ;
    case 110:
    ;
    case 111:
    ;
    case 113:
    ;
    case 114:
    ;
    case 115:
    ;
    case 116:
    ;
    case 117:
    ;
    case 118:
    ;
    case 120:
    ;
    case 40:
    ;
    case 16:
    ;
    case 79:
    ;
    case 19:
      return-1;
    case 92:
    ;
    case 93:
    ;
    case 5:
    ;
    case 72:
    ;
    case 6:
    ;
    case 74:
    ;
    case 92:
    ;
    case 93:
    ;
    case 96:
    ;
    case 97:
    ;
    case 98:
    ;
    case 99:
    ;
    case 102:
    ;
    case 103:
    ;
    case 105:
      return 1;
    case 38:
    ;
    case 66:
    ;
    case 50:
    ;
    case 51:
    ;
    case 4:
      return 1024;
    case 15:
    ;
    case 64:
    ;
    case 41:
      return 32;
    case 55:
    ;
    case 37:
    ;
    case 17:
      return 2147483647;
    case 18:
    ;
    case 1:
      return 47839;
    case 59:
    ;
    case 57:
      return 99;
    case 68:
    ;
    case 58:
      return 2048;
    case 0:
      return 2097152;
    case 3:
      return 65536;
    case 14:
      return 32768;
    case 73:
      return 32767;
    case 39:
      return 16384;
    case 60:
      return 1E3;
    case 106:
      return 700;
    case 52:
      return 256;
    case 62:
      return 255;
    case 2:
      return 100;
    case 65:
      return 64;
    case 36:
      return 20;
    case 100:
      return 16;
    case 20:
      return 6;
    case 53:
      return 4;
    case 10:
      return 1
  }
  M(N.A);
  return-1
}, ___cxa_throw:rc, _strerror:zc, _abort:function() {
  s.abort()
}, _fprintf:mc, _llvm_eh_exception:U, ___cxa_free_exception:sc, _fflush:aa(), ___buildEnvironment:wc, __reallyNegative:jc, _strchr:function(a, b) {
  a--;
  do {
    a++;
    var c = A[a];
    if(c == b) {
      return a
    }
  }while(c);
  return 0
}, _fputc:Bc, ___setErrNo:M, _fwrite:hc, _send:fc, _write:gc, _exit:function(a) {
  Ac(a)
}, ___cxa_find_matching_catch:function(a, b) {
  -1 == a && (a = B[U.m >> 2]);
  -1 == b && (b = B[U.m + 4 >> 2]);
  var c = Array.prototype.slice.call(arguments, 2);
  0 != b && !pc(b) && 0 == B[B[b >> 2] - 8 >> 2] && (a = B[a >> 2]);
  for(var d = 0;d < c.length;d++) {
    if(qc(c[d], b, a)) {
      return(V.setTempRet0(c[d]), a) | 0
    }
  }
  return(V.setTempRet0(b), a) | 0
}, ___cxa_allocate_exception:function(a) {
  return Oa(a)
}, _isspace:function(a) {
  return 32 == a || 9 <= a && 13 >= a
}, __formatString:kc, ___resumeException:function(a) {
  0 == B[U.m >> 2] && (B[U.m >> 2] = a);
  g(a + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.")
}, _llvm_uadd_with_overflow_i32:function(a, b) {
  a >>>= 0;
  b >>>= 0;
  return(V.setTempRet0(4294967295 < a + b), a + b >>> 0) | 0
}, ___cxa_does_inherit:qc, _getenv:xc, _vfprintf:function(a, b, c) {
  return mc(a, b, B[c >> 2])
}, ___cxa_begin_catch:function(a) {
  oc.ta--;
  return a
}, __ZSt18uncaught_exceptionv:oc, _pwrite:function(a, b, c, d) {
  a = R[a];
  if(!a) {
    return M(N.$), -1
  }
  try {
    return Ib(a, A, b, c, d)
  }catch(e) {
    return Zb(e), -1
  }
}, ___cxa_call_unexpected:function(a) {
  s.P("Unexpected exception thrown, this is not properly supported - aborting");
  za = l;
  g(a)
}, _sbrk:nc, _strerror_r:yc, ___errno_location:function() {
  return rb
}, ___gxx_personality_v0:aa(), ___cxa_is_number_type:pc, _time:function(a) {
  var b = Math.floor(Date.now() / 1E3);
  a && (B[a >> 2] = b);
  return b
}, __exit:Ac, ___cxa_end_catch:uc, STACKTOP:u, STACK_MAX:Ta, tempDoublePtr:qb, ABORT:za, cttz_i8:Wc, ctlz_i8:Vc, NaN:NaN, Infinity:Infinity, _stderr:nb, __ZTVN10__cxxabiv120__si_class_type_infoE:ob, __ZTVN10__cxxabiv117__class_type_infoE:pb, ___progname:k}, I);
s._crypto_scrypt = V._crypto_scrypt;
var ic = s._strlen = V._strlen, tc = s._free = V._free;
s._realloc = V._realloc;
var tb = s._memset = V._memset, Oa = s._malloc = V._malloc, sb = s._memcpy = V._memcpy;
s._calloc = V._calloc;
var mb = s.runPostSets = V.runPostSets;
s.dynCall_vi = V.dynCall_vi;
s.dynCall_vii = V.dynCall_vii;
s.dynCall_ii = V.dynCall_ii;
s.dynCall_viii = V.dynCall_viii;
s.dynCall_v = V.dynCall_v;
s.dynCall_iii = V.dynCall_iii;
var qa = function(a) {
  return V.stackAlloc(a)
}, ja = function() {
  return V.stackSave()
}, ka = function(a) {
  V.stackRestore(a)
}, lc;
function X(a, b) {
  a != m && ("number" == typeof a ? this.p(a) : b == m && "string" != typeof a ? this.k(a, 256) : this.k(a, b))
}
function Yc() {
  return new X(m)
}
function Zc(a, b) {
  var c = $c[a.charCodeAt(b)];
  return c == m ? -1 : c
}
function ad(a) {
  var b = Yc();
  b.D(a);
  return b
}
function Y(a, b) {
  this.h = a | 0;
  this.j = b | 0
}
Y.Ca = {};
Y.D = function(a) {
  if(-128 <= a && 128 > a) {
    var b = Y.Ca[a];
    if(b) {
      return b
    }
  }
  b = new Y(a | 0, 0 > a ? -1 : 0);
  -128 <= a && 128 > a && (Y.Ca[a] = b);
  return b
};
Y.p = function(a) {
  return isNaN(a) || !isFinite(a) ? Y.ZERO : a <= -Y.Ea ? Y.MIN_VALUE : a + 1 >= Y.Ea ? Y.MAX_VALUE : 0 > a ? Y.p(-a).i() : new Y(a % Y.B | 0, a / Y.B | 0)
};
Y.v = function(a, b) {
  return new Y(a, b)
};
Y.k = function(a, b) {
  0 == a.length && g(Error("number format error: empty string"));
  var c = b || 10;
  (2 > c || 36 < c) && g(Error("radix out of range: " + c));
  if("-" == a.charAt(0)) {
    return Y.k(a.substring(1), c).i()
  }
  0 <= a.indexOf("-") && g(Error('number format error: interior "-" character: ' + a));
  for(var d = Y.p(Math.pow(c, 8)), e = Y.ZERO, f = 0;f < a.length;f += 8) {
    var h = Math.min(8, a.length - f), i = parseInt(a.substring(f, f + h), c);
    8 > h ? (h = Y.p(Math.pow(c, h)), e = e.multiply(h).add(Y.p(i))) : (e = e.multiply(d), e = e.add(Y.p(i)))
  }
  return e
};
Y.ea = 65536;
Y.Od = 16777216;
Y.B = Y.ea * Y.ea;
Y.Pd = Y.B / 2;
Y.Qd = Y.B * Y.ea;
Y.eb = Y.B * Y.B;
Y.Ea = Y.eb / 2;
Y.ZERO = Y.D(0);
Y.ONE = Y.D(1);
Y.Da = Y.D(-1);
Y.MAX_VALUE = Y.v(-1, 2147483647);
Y.MIN_VALUE = Y.v(0, -2147483648);
Y.cb = Y.D(16777216);
q = Y.prototype;
q.Z = function() {
  return this.j * Y.B + this.ob()
};
q.toString = function(a) {
  a = a || 10;
  (2 > a || 36 < a) && g(Error("radix out of range: " + a));
  if(this.G()) {
    return"0"
  }
  if(this.n()) {
    if(this.o(Y.MIN_VALUE)) {
      var b = Y.p(a), c = this.F(b), b = c.multiply(b).R(this);
      return c.toString(a) + b.h.toString(a)
    }
    return"-" + this.i().toString(a)
  }
  for(var c = Y.p(Math.pow(a, 6)), b = this, d = "";;) {
    var e = b.F(c), f = b.R(e.multiply(c)).h.toString(a), b = e;
    if(b.G()) {
      return f + d
    }
    for(;6 > f.length;) {
      f = "0" + f
    }
    d = "" + f + d
  }
};
q.ob = function() {
  return 0 <= this.h ? this.h : Y.B + this.h
};
q.G = function() {
  return 0 == this.j && 0 == this.h
};
q.n = function() {
  return 0 > this.j
};
q.Pa = function() {
  return 1 == (this.h & 1)
};
q.o = function(a) {
  return this.j == a.j && this.h == a.h
};
q.Ra = function() {
  return 0 > this.ja(Y.cb)
};
q.qb = function(a) {
  return 0 < this.ja(a)
};
q.rb = function(a) {
  return 0 <= this.ja(a)
};
q.ja = function(a) {
  if(this.o(a)) {
    return 0
  }
  var b = this.n(), c = a.n();
  return b && !c ? -1 : !b && c ? 1 : this.R(a).n() ? -1 : 1
};
q.i = function() {
  return this.o(Y.MIN_VALUE) ? Y.MIN_VALUE : this.xb().add(Y.ONE)
};
q.add = function(a) {
  var b = this.j >>> 16, c = this.j & 65535, d = this.h >>> 16, e = a.j >>> 16, f = a.j & 65535, h = a.h >>> 16, i;
  i = 0 + ((this.h & 65535) + (a.h & 65535));
  a = 0 + (i >>> 16);
  a += d + h;
  d = 0 + (a >>> 16);
  d += c + f;
  c = 0 + (d >>> 16);
  c = c + (b + e) & 65535;
  return Y.v((a & 65535) << 16 | i & 65535, c << 16 | d & 65535)
};
q.R = function(a) {
  return this.add(a.i())
};
q.multiply = function(a) {
  if(this.G() || a.G()) {
    return Y.ZERO
  }
  if(this.o(Y.MIN_VALUE)) {
    return a.Pa() ? Y.MIN_VALUE : Y.ZERO
  }
  if(a.o(Y.MIN_VALUE)) {
    return this.Pa() ? Y.MIN_VALUE : Y.ZERO
  }
  if(this.n()) {
    return a.n() ? this.i().multiply(a.i()) : this.i().multiply(a).i()
  }
  if(a.n()) {
    return this.multiply(a.i()).i()
  }
  if(this.Ra() && a.Ra()) {
    return Y.p(this.Z() * a.Z())
  }
  var b = this.j >>> 16, c = this.j & 65535, d = this.h >>> 16, e = this.h & 65535, f = a.j >>> 16, h = a.j & 65535, i = a.h >>> 16, a = a.h & 65535, j, n, y, v;
  v = 0 + e * a;
  y = 0 + (v >>> 16);
  y += d * a;
  n = 0 + (y >>> 16);
  y = (y & 65535) + e * i;
  n += y >>> 16;
  y &= 65535;
  n += c * a;
  j = 0 + (n >>> 16);
  n = (n & 65535) + d * i;
  j += n >>> 16;
  n &= 65535;
  n += e * h;
  j += n >>> 16;
  n &= 65535;
  j = j + (b * a + c * i + d * h + e * f) & 65535;
  return Y.v(y << 16 | v & 65535, j << 16 | n)
};
q.F = function(a) {
  a.G() && g(Error("division by zero"));
  if(this.G()) {
    return Y.ZERO
  }
  if(this.o(Y.MIN_VALUE)) {
    if(a.o(Y.ONE) || a.o(Y.Da)) {
      return Y.MIN_VALUE
    }
    if(a.o(Y.MIN_VALUE)) {
      return Y.ONE
    }
    var b = this.Db().F(a).shiftLeft(1);
    if(b.o(Y.ZERO)) {
      return a.n() ? Y.ONE : Y.Da
    }
    var c = this.R(a.multiply(b));
    return b.add(c.F(a))
  }
  if(a.o(Y.MIN_VALUE)) {
    return Y.ZERO
  }
  if(this.n()) {
    return a.n() ? this.i().F(a.i()) : this.i().F(a).i()
  }
  if(a.n()) {
    return this.F(a.i()).i()
  }
  for(var d = Y.ZERO, c = this;c.rb(a);) {
    for(var b = Math.max(1, Math.floor(c.Z() / a.Z())), e = Math.ceil(Math.log(b) / Math.LN2), e = 48 >= e ? 1 : Math.pow(2, e - 48), f = Y.p(b), h = f.multiply(a);h.n() || h.qb(c);) {
      b -= e, f = Y.p(b), h = f.multiply(a)
    }
    f.G() && (f = Y.ONE);
    d = d.add(f);
    c = c.R(h)
  }
  return d
};
q.xb = function() {
  return Y.v(~this.h, ~this.j)
};
q.shiftLeft = function(a) {
  a &= 63;
  if(0 == a) {
    return this
  }
  var b = this.h;
  return 32 > a ? Y.v(b << a, this.j << a | b >>> 32 - a) : Y.v(0, b << a - 32)
};
q.Db = function() {
  var a;
  a = 1;
  if(0 == a) {
    return this
  }
  var b = this.j;
  return 32 > a ? Y.v(this.h >>> a | b << 32 - a, b >> a) : Y.v(b >> a - 32, 0 <= b ? 0 : -1)
};
q = X.prototype;
q.ga = function(a, b, c, d) {
  for(var e = 0, f = 0;0 <= --d;) {
    var h = a * this[e++] + b[c] + f, f = Math.floor(h / 67108864);
    b[c++] = h & 67108863
  }
  return f
};
q.f = 26;
q.u = 67108863;
q.K = 67108864;
q.bb = Math.pow(2, 52);
q.Aa = 26;
q.Ba = 0;
var $c = [], bd, Z;
bd = 48;
for(Z = 0;9 >= Z;++Z) {
  $c[bd++] = Z
}
bd = 97;
for(Z = 10;36 > Z;++Z) {
  $c[bd++] = Z
}
bd = 65;
for(Z = 10;36 > Z;++Z) {
  $c[bd++] = Z
}
q = X.prototype;
q.copyTo = function(a) {
  for(var b = this.b - 1;0 <= b;--b) {
    a[b] = this[b]
  }
  a.b = this.b;
  a.c = this.c
};
q.D = function(a) {
  this.b = 1;
  this.c = 0 > a ? -1 : 0;
  0 < a ? this[0] = a : -1 > a ? this[0] = a + DV : this.b = 0
};
q.k = function(a, b) {
  var c;
  if(16 == b) {
    c = 4
  }else {
    if(8 == b) {
      c = 3
    }else {
      if(256 == b) {
        c = 8
      }else {
        if(2 == b) {
          c = 1
        }else {
          if(32 == b) {
            c = 5
          }else {
            if(4 == b) {
              c = 2
            }else {
              this.nb(a, b);
              return
            }
          }
        }
      }
    }
  }
  this.c = this.b = 0;
  for(var d = a.length, e = p, f = 0;0 <= --d;) {
    var h = 8 == c ? a[d] & 255 : Zc(a, d);
    0 > h ? "-" == a.charAt(d) && (e = l) : (e = p, 0 == f ? this[this.b++] = h : f + c > this.f ? (this[this.b - 1] |= (h & (1 << this.f - f) - 1) << f, this[this.b++] = h >> this.f - f) : this[this.b - 1] |= h << f, f += c, f >= this.f && (f -= this.f))
  }
  8 == c && 0 != (a[0] & 128) && (this.c = -1, 0 < f && (this[this.b - 1] |= (1 << this.f - f) - 1 << f));
  this.C();
  e && X.ZERO.t(this, this)
};
q.C = function() {
  for(var a = this.c & this.u;0 < this.b && this[this.b - 1] == a;) {
    --this.b
  }
};
q.la = function(a, b) {
  var c;
  for(c = this.b - 1;0 <= c;--c) {
    b[c + a] = this[c]
  }
  for(c = a - 1;0 <= c;--c) {
    b[c] = 0
  }
  b.b = this.b + a;
  b.c = this.c
};
q.jb = function(a, b) {
  for(var c = a;c < this.b;++c) {
    b[c - a] = this[c]
  }
  b.b = Math.max(this.b - a, 0);
  b.c = this.c
};
q.Qa = function(a, b) {
  var c = a % this.f, d = this.f - c, e = (1 << d) - 1, f = Math.floor(a / this.f), h = this.c << c & this.u, i;
  for(i = this.b - 1;0 <= i;--i) {
    b[i + f + 1] = this[i] >> d | h, h = (this[i] & e) << c
  }
  for(i = f - 1;0 <= i;--i) {
    b[i] = 0
  }
  b[f] = h;
  b.b = this.b + f + 1;
  b.c = this.c;
  b.C()
};
q.zb = function(a, b) {
  b.c = this.c;
  var c = Math.floor(a / this.f);
  if(c >= this.b) {
    b.b = 0
  }else {
    var d = a % this.f, e = this.f - d, f = (1 << d) - 1;
    b[0] = this[c] >> d;
    for(var h = c + 1;h < this.b;++h) {
      b[h - c - 1] |= (this[h] & f) << e, b[h - c] = this[h] >> d
    }
    0 < d && (b[this.b - c - 1] |= (this.c & f) << e);
    b.b = this.b - c;
    b.C()
  }
};
q.t = function(a, b) {
  for(var c = 0, d = 0, e = Math.min(a.b, this.b);c < e;) {
    d += this[c] - a[c], b[c++] = d & this.u, d >>= this.f
  }
  if(a.b < this.b) {
    for(d -= a.c;c < this.b;) {
      d += this[c], b[c++] = d & this.u, d >>= this.f
    }
    d += this.c
  }else {
    for(d += this.c;c < a.b;) {
      d -= a[c], b[c++] = d & this.u, d >>= this.f
    }
    d -= a.c
  }
  b.c = 0 > d ? -1 : 0;
  -1 > d ? b[c++] = this.K + d : 0 < d && (b[c++] = d);
  b.b = c;
  b.C()
};
q.vb = function(a) {
  var b = $.Xa, c = this.abs(), d = b.abs(), e = c.b;
  for(a.b = e + d.b;0 <= --e;) {
    a[e] = 0
  }
  for(e = 0;e < d.b;++e) {
    a[e + c.b] = c.ga(d[e], a, e, c.b)
  }
  a.c = 0;
  a.C();
  this.c != b.c && X.ZERO.t(a, a)
};
q.Ja = function(a, b, c) {
  var d = a.abs();
  if(!(0 >= d.b)) {
    var e = this.abs();
    if(e.b < d.b) {
      b != m && b.D(0), c != m && this.copyTo(c)
    }else {
      c == m && (c = Yc());
      var f = Yc(), h = this.c, a = a.c, i = d[d.b - 1], j = 1, n;
      if(0 != (n = i >>> 16)) {
        i = n, j += 16
      }
      if(0 != (n = i >> 8)) {
        i = n, j += 8
      }
      if(0 != (n = i >> 4)) {
        i = n, j += 4
      }
      if(0 != (n = i >> 2)) {
        i = n, j += 2
      }
      0 != i >> 1 && (j += 1);
      i = this.f - j;
      0 < i ? (d.Qa(i, f), e.Qa(i, c)) : (d.copyTo(f), e.copyTo(c));
      d = f.b;
      e = f[d - 1];
      if(0 != e) {
        n = e * (1 << this.Aa) + (1 < d ? f[d - 2] >> this.Ba : 0);
        j = this.bb / n;
        n = (1 << this.Aa) / n;
        var y = 1 << this.Ba, v = c.b, C = v - d, D = b == m ? Yc() : b;
        f.la(C, D);
        0 <= c.U(D) && (c[c.b++] = 1, c.t(D, c));
        X.ONE.la(d, D);
        for(D.t(f, f);f.b < d;) {
          f[f.b++] = 0
        }
        for(;0 <= --C;) {
          var K = c[--v] == e ? this.u : Math.floor(c[v] * j + (c[v - 1] + y) * n);
          if((c[v] += f.ga(K, c, C, d)) < K) {
            f.la(C, D);
            for(c.t(D, c);c[v] < --K;) {
              c.t(D, c)
            }
          }
        }
        b != m && (c.jb(d, b), h != a && X.ZERO.t(b, b));
        c.b = d;
        c.C();
        0 < i && c.zb(i, c);
        0 > h && X.ZERO.t(c, c)
      }
    }
  }
};
q.toString = function(a) {
  if(0 > this.c) {
    return"-" + this.i().toString(a)
  }
  if(16 == a) {
    a = 4
  }else {
    if(8 == a) {
      a = 3
    }else {
      if(2 == a) {
        a = 1
      }else {
        if(32 == a) {
          a = 5
        }else {
          if(4 == a) {
            a = 2
          }else {
            return this.Fb(a)
          }
        }
      }
    }
  }
  var b = (1 << a) - 1, c, d = p, e = "", f = this.b, h = this.f - f * this.f % a;
  if(0 < f--) {
    if(h < this.f && 0 < (c = this[f] >> h)) {
      d = l, e = "0123456789abcdefghijklmnopqrstuvwxyz".charAt(c)
    }
    for(;0 <= f;) {
      h < a ? (c = (this[f] & (1 << h) - 1) << a - h, c |= this[--f] >> (h += this.f - a)) : (c = this[f] >> (h -= a) & b, 0 >= h && (h += this.f, --f)), 0 < c && (d = l), d && (e += "0123456789abcdefghijklmnopqrstuvwxyz".charAt(c))
    }
  }
  return d ? e : "0"
};
q.i = function() {
  var a = Yc();
  X.ZERO.t(this, a);
  return a
};
q.abs = function() {
  return 0 > this.c ? this.i() : this
};
q.U = function(a) {
  var b = this.c - a.c;
  if(0 != b) {
    return b
  }
  var c = this.b, b = c - a.b;
  if(0 != b) {
    return 0 > this.c ? -b : b
  }
  for(;0 <= --c;) {
    if(0 != (b = this[c] - a[c])) {
      return b
    }
  }
  return 0
};
X.ZERO = ad(0);
X.ONE = ad(1);
q = X.prototype;
q.nb = function(a, b) {
  this.D(0);
  b == m && (b = 10);
  for(var c = this.S(b), d = Math.pow(b, c), e = p, f = 0, h = 0, i = 0;i < a.length;++i) {
    var j = Zc(a, i);
    0 > j ? "-" == a.charAt(i) && 0 == this.ra() && (e = l) : (h = b * h + j, ++f >= c && (this.Ia(d), this.Ha(h), h = f = 0))
  }
  0 < f && (this.Ia(Math.pow(b, f)), this.Ha(h));
  e && X.ZERO.t(this, this)
};
q.S = function(a) {
  return Math.floor(Math.LN2 * this.f / Math.log(a))
};
q.ra = function() {
  return 0 > this.c ? -1 : 0 >= this.b || 1 == this.b && 0 >= this[0] ? 0 : 1
};
q.Ia = function(a) {
  this[this.b] = this.ga(a - 1, this, 0, this.b);
  ++this.b;
  this.C()
};
q.Ha = function(a) {
  var b = 0;
  if(0 != a) {
    for(;this.b <= b;) {
      this[this.b++] = 0
    }
    for(this[b] += a;this[b] >= this.K;) {
      this[b] -= this.K, ++b >= this.b && (this[this.b++] = 0), ++this[b]
    }
  }
};
q.Fb = function(a) {
  a == m && (a = 10);
  if(0 == this.ra() || 2 > a || 36 < a) {
    return"0"
  }
  var b = this.S(a), b = Math.pow(a, b), c = ad(b), d = Yc(), e = Yc(), f = "";
  for(this.Ja(c, d, e);0 < d.ra();) {
    f = (b + e.Oa()).toString(a).substr(1) + f, d.Ja(c, d, e)
  }
  return e.Oa().toString(a) + f
};
q.Oa = function() {
  if(0 > this.c) {
    if(1 == this.b) {
      return this[0] - this.K
    }
    if(0 == this.b) {
      return-1
    }
  }else {
    if(1 == this.b) {
      return this[0]
    }
    if(0 == this.b) {
      return 0
    }
  }
  return(this[1] & (1 << 32 - this.f) - 1) << this.f | this[0]
};
q.fa = function(a, b) {
  for(var c = 0, d = 0, e = Math.min(a.b, this.b);c < e;) {
    d += this[c] + a[c], b[c++] = d & this.u, d >>= this.f
  }
  if(a.b < this.b) {
    for(d += a.c;c < this.b;) {
      d += this[c], b[c++] = d & this.u, d >>= this.f
    }
    d += this.c
  }else {
    for(d += this.c;c < a.b;) {
      d += a[c], b[c++] = d & this.u, d >>= this.f
    }
    d += a.c
  }
  b.c = 0 > d ? -1 : 0;
  0 < d ? b[c++] = d : -1 > d && (b[c++] = this.K + d);
  b.b = c;
  b.C()
};
var $ = {abs:function(a, b) {
  var c = new Y(a, b), c = c.n() ? c.i() : c;
  B[qb >> 2] = c.h;
  B[qb + 4 >> 2] = c.j
}, Ka:function() {
  $.kb || ($.kb = l, $.Xa = new X, $.Xa.k("4294967296", 10), $.sa = new X, $.sa.k("18446744073709551616", 10), $.xe = new X, $.ye = new X)
}, me:function(a, b) {
  var c = new X;
  c.k(b.toString(), 10);
  var d = new X;
  c.vb(d);
  c = new X;
  c.k(a.toString(), 10);
  var e = new X;
  c.fa(d, e);
  return e
}, stringify:function(a, b, c) {
  a = (new Y(a, b)).toString();
  c && "-" == a[0] && ($.Ka(), c = new X, c.k(a, 10), a = new X, $.sa.fa(c, a), a = a.toString(10));
  return a
}, k:function(a, b, c, d, e) {
  $.Ka();
  var f = new X;
  f.k(a, b);
  a = new X;
  a.k(c, 10);
  c = new X;
  c.k(d, 10);
  e && 0 > f.U(X.ZERO) && (d = new X, f.fa($.sa, d), f = d);
  d = p;
  0 > f.U(a) ? (f = a, d = l) : 0 < f.U(c) && (f = c, d = l);
  f = Y.k(f.toString());
  B[qb >> 2] = f.h;
  B[qb + 4 >> 2] = f.j;
  d && g("range error")
}};
lc = $;
var cd, dd;
s.callMain = s.$d = function(a) {
  function b() {
    for(var a = 0;3 > a;a++) {
      d.push(0)
    }
  }
  w(0 == L, "cannot call main when async dependencies remain! (listen on __ATMAIN__)");
  w(0 == Wa.length, "cannot call main when preRun functions remain to be called");
  a = a || [];
  ab || (ab = l, Va(Xa));
  var c = a.length + 1, d = [F(J("/bin/this.program"), "i8", Ka)];
  b();
  for(var e = 0;e < c - 1;e += 1) {
    d.push(F(J(a[e]), "i8", Ka)), b()
  }
  d.push(0);
  d = F(d, "i32", Ka);
  cd = u;
  dd = l;
  var f;
  try {
    f = s._main(c, d, 0)
  }catch(h) {
    if(h && "object" == typeof h && "ExitStatus" == h.type) {
      return s.print("Exit Status: " + h.value), h.value
    }
    "SimulateInfiniteLoop" == h ? s.noExitRuntime = l : g(h)
  }finally {
    dd = p
  }
  s.noExitRuntime || ed(f)
};
function lb(a) {
  function b() {
    ab || (ab = l, Va(Xa));
    Va(Ya);
    gb = l;
    s._main && kb && s.callMain(a);
    if(s.postRun) {
      for("function" == typeof s.postRun && (s.postRun = [s.postRun]);s.postRun.length;) {
        cb(s.postRun.shift())
      }
    }
    Va($a)
  }
  a = a || s.arguments;
  if(0 < L) {
    s.P("run() called, but dependencies remain, so not running")
  }else {
    if(s.preRun) {
      for("function" == typeof s.preRun && (s.preRun = [s.preRun]);s.preRun.length;) {
        bb(s.preRun.shift())
      }
    }
    Va(Wa);
    0 < L || (s.setStatus ? (s.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        s.setStatus("")
      }, 1);
      za || b()
    }, 1)) : b())
  }
}
s.run = s.we = lb;
function ed(a) {
  za = l;
  u = cd;
  Va(Za);
  dd && g({type:"ExitStatus", value:a})
}
s.exit = s.de = ed;
function wa(a) {
  a && s.print(a);
  za = l;
  g("abort() at " + Error().stack)
}
s.abort = s.abort = wa;
if(s.preInit) {
  for("function" == typeof s.preInit && (s.preInit = [s.preInit]);0 < s.preInit.length;) {
    s.preInit.pop()()
  }
}
var kb = l;
s.noInitialRun && (kb = p);
lb();
var scrypt = (function () {
    var exports = {};

    //---------------------------------------------------------------------------
    // Horrifying UTF-8 and hex codecs

    function encode_utf8(s) {
	return encode_latin1(unescape(encodeURIComponent(s)));
    }

    function encode_latin1(s) {
	var result = new Uint8Array(s.length);
	for (var i = 0; i < s.length; i++) {
	    var c = s.charCodeAt(i);
	    if ((c & 0xff) !== c) throw {message: "Cannot encode string in Latin1", str: s};
	    result[i] = (c & 0xff);
	}
	return result;
    }

    function decode_utf8(bs) {
	return decodeURIComponent(escape(decode_latin1(bs)));
    }

    function decode_latin1(bs) {
	var encoded = [];
	for (var i = 0; i < bs.length; i++) {
	    encoded.push(String.fromCharCode(bs[i]));
	}
	return encoded.join('');
    }

    function to_hex(bs) {
	var encoded = [];
	for (var i = 0; i < bs.length; i++) {
	    encoded.push("0123456789abcdef"[(bs[i] >> 4) & 15]);
	    encoded.push("0123456789abcdef"[bs[i] & 15]);
	}
	return encoded.join('');
    }

    //---------------------------------------------------------------------------

    function injectBytes(bs, leftPadding) {
	var p = leftPadding || 0;
	var address = scrypt_raw._malloc(bs.length + p);
	scrypt_raw.HEAPU8.set(bs, address + p);
	for (var i = address; i < address + p; i++) {
	    scrypt_raw.HEAPU8[i] = 0;
	}
	return address;
    }

    function check_injectBytes(function_name, what, thing, expected_length, leftPadding) {
	check_length(function_name, what, thing, expected_length);
	return injectBytes(thing, leftPadding);
    }

    function extractBytes(address, length) {
	var result = new Uint8Array(length);
	result.set(scrypt_raw.HEAPU8.subarray(address, address + length));
	return result;
    }

    //---------------------------------------------------------------------------

    function check(function_name, result) {
	if (result !== 0) {
	    throw {message: "scrypt_raw." + function_name + " signalled an error"};
	}
    }

    function check_length(function_name, what, thing, expected_length) {
	if (thing.length !== expected_length) {
	    throw {message: "scrypt." + function_name + " expected " +
	           expected_length + "-byte " + what + " but got length " + thing.length};
	}
    }

    function Target(length) {
	this.length = length;
	this.address = scrypt_raw._malloc(length);
    }

    Target.prototype.extractBytes = function (offset) {
	var result = extractBytes(this.address + (offset || 0), this.length - (offset || 0));
	scrypt_raw._free(this.address);
	this.address = null;
	return result;
    };

    function free_all(addresses) {
	for (var i = 0; i < addresses.length; i++) {
	    scrypt_raw._free(addresses[i]);
	}
    }

    //---------------------------------------------------------------------------

    function random_bytes(count) {
	var bs = new Uint8Array(count);
	if(typeof(window.crypto) !== "undefined") {
	    if(typeof(window.crypto.getRandomValues) !== "undefined") {
	    	window.crypto.getRandomValues(bs);
	    	return bs;
	    }
	}
	if(typeof(window.msCrypto) !== "undefined") {
	    if(typeof(window.msCrypto.getRandomValues) !== "undefined") {
	    	window.msCrypto.getRandomValues(bs);
	    	return bs;
	    }
	}
	throw { message: "No suitable random number generator found!"};
    }

    function crypto_scrypt(passwd, salt, n, r, p, buflen) {
	var buf = new Target(buflen);
	var pa = injectBytes(passwd);
	var sa = injectBytes(salt);
	check("_crypto_scrypt",
	      scrypt_raw._crypto_scrypt(pa, passwd.length,
					sa, salt.length,
					n, 0, // 64 bits; zero upper half
					r,
					p,
					buf.address, buf.length));
	free_all([pa, sa]);
	return buf.extractBytes();
    }

    //---------------------------------------------------------------------------

    exports.encode_utf8 = encode_utf8;
    exports.encode_latin1 = encode_latin1;
    exports.decode_utf8 = decode_utf8;
    exports.decode_latin1 = decode_latin1;
    exports.to_hex = to_hex;

    exports.random_bytes = random_bytes;
    exports.crypto_scrypt = crypto_scrypt;

    return exports;
})();
    return scrypt;
});



// PBKDF2

"use strict";function q(a){throw a;}var t=void 0,u=!1;var sjcl={cipher:{},hash:{},keyexchange:{},mode:{},misc:{},codec:{},exception:{corrupt:function(a){this.toString=function(){return"CORRUPT: "+this.message};this.message=a},invalid:function(a){this.toString=function(){return"INVALID: "+this.message};this.message=a},bug:function(a){this.toString=function(){return"BUG: "+this.message};this.message=a},notReady:function(a){this.toString=function(){return"NOT READY: "+this.message};this.message=a}}};
"undefined"!==typeof module&&module.exports&&(module.exports=sjcl);
sjcl.cipher.aes=function(a){this.k[0][0][0]||this.D();var b,c,d,e,f=this.k[0][4],g=this.k[1];b=a.length;var h=1;4!==b&&(6!==b&&8!==b)&&q(new sjcl.exception.invalid("invalid aes key size"));this.b=[d=a.slice(0),e=[]];for(a=b;a<4*b+28;a++){c=d[a-1];if(0===a%b||8===b&&4===a%b)c=f[c>>>24]<<24^f[c>>16&255]<<16^f[c>>8&255]<<8^f[c&255],0===a%b&&(c=c<<8^c>>>24^h<<24,h=h<<1^283*(h>>7));d[a]=d[a-b]^c}for(b=0;a;b++,a--)c=d[b&3?a:a-4],e[b]=4>=a||4>b?c:g[0][f[c>>>24]]^g[1][f[c>>16&255]]^g[2][f[c>>8&255]]^g[3][f[c&
255]]};
sjcl.cipher.aes.prototype={encrypt:function(a){return y(this,a,0)},decrypt:function(a){return y(this,a,1)},k:[[[],[],[],[],[]],[[],[],[],[],[]]],D:function(){var a=this.k[0],b=this.k[1],c=a[4],d=b[4],e,f,g,h=[],l=[],k,n,m,p;for(e=0;0x100>e;e++)l[(h[e]=e<<1^283*(e>>7))^e]=e;for(f=g=0;!c[f];f^=k||1,g=l[g]||1){m=g^g<<1^g<<2^g<<3^g<<4;m=m>>8^m&255^99;c[f]=m;d[m]=f;n=h[e=h[k=h[f]]];p=0x1010101*n^0x10001*e^0x101*k^0x1010100*f;n=0x101*h[m]^0x1010100*m;for(e=0;4>e;e++)a[e][f]=n=n<<24^n>>>8,b[e][m]=p=p<<24^p>>>8}for(e=
0;5>e;e++)a[e]=a[e].slice(0),b[e]=b[e].slice(0)}};
function y(a,b,c){4!==b.length&&q(new sjcl.exception.invalid("invalid aes block size"));var d=a.b[c],e=b[0]^d[0],f=b[c?3:1]^d[1],g=b[2]^d[2];b=b[c?1:3]^d[3];var h,l,k,n=d.length/4-2,m,p=4,s=[0,0,0,0];h=a.k[c];a=h[0];var r=h[1],v=h[2],w=h[3],x=h[4];for(m=0;m<n;m++)h=a[e>>>24]^r[f>>16&255]^v[g>>8&255]^w[b&255]^d[p],l=a[f>>>24]^r[g>>16&255]^v[b>>8&255]^w[e&255]^d[p+1],k=a[g>>>24]^r[b>>16&255]^v[e>>8&255]^w[f&255]^d[p+2],b=a[b>>>24]^r[e>>16&255]^v[f>>8&255]^w[g&255]^d[p+3],p+=4,e=h,f=l,g=k;for(m=0;4>
m;m++)s[c?3&-m:m]=x[e>>>24]<<24^x[f>>16&255]<<16^x[g>>8&255]<<8^x[b&255]^d[p++],h=e,e=f,f=g,g=b,b=h;return s}
sjcl.bitArray={bitSlice:function(a,b,c){a=sjcl.bitArray.P(a.slice(b/32),32-(b&31)).slice(1);return c===t?a:sjcl.bitArray.clamp(a,c-b)},extract:function(a,b,c){var d=Math.floor(-b-c&31);return((b+c-1^b)&-32?a[b/32|0]<<32-d^a[b/32+1|0]>>>d:a[b/32|0]>>>d)&(1<<c)-1},concat:function(a,b){if(0===a.length||0===b.length)return a.concat(b);var c=a[a.length-1],d=sjcl.bitArray.getPartial(c);return 32===d?a.concat(b):sjcl.bitArray.P(b,d,c|0,a.slice(0,a.length-1))},bitLength:function(a){var b=a.length;return 0===
b?0:32*(b-1)+sjcl.bitArray.getPartial(a[b-1])},clamp:function(a,b){if(32*a.length<b)return a;a=a.slice(0,Math.ceil(b/32));var c=a.length;b&=31;0<c&&b&&(a[c-1]=sjcl.bitArray.partial(b,a[c-1]&2147483648>>b-1,1));return a},partial:function(a,b,c){return 32===a?b:(c?b|0:b<<32-a)+0x10000000000*a},getPartial:function(a){return Math.round(a/0x10000000000)||32},equal:function(a,b){if(sjcl.bitArray.bitLength(a)!==sjcl.bitArray.bitLength(b))return u;var c=0,d;for(d=0;d<a.length;d++)c|=a[d]^b[d];return 0===
c},P:function(a,b,c,d){var e;e=0;for(d===t&&(d=[]);32<=b;b-=32)d.push(c),c=0;if(0===b)return d.concat(a);for(e=0;e<a.length;e++)d.push(c|a[e]>>>b),c=a[e]<<32-b;e=a.length?a[a.length-1]:0;a=sjcl.bitArray.getPartial(e);d.push(sjcl.bitArray.partial(b+a&31,32<b+a?c:d.pop(),1));return d},l:function(a,b){return[a[0]^b[0],a[1]^b[1],a[2]^b[2],a[3]^b[3]]}};
sjcl.codec.utf8String={fromBits:function(a){var b="",c=sjcl.bitArray.bitLength(a),d,e;for(d=0;d<c/8;d++)0===(d&3)&&(e=a[d/4]),b+=String.fromCharCode(e>>>24),e<<=8;return decodeURIComponent(escape(b))},toBits:function(a){a=unescape(encodeURIComponent(a));var b=[],c,d=0;for(c=0;c<a.length;c++)d=d<<8|a.charCodeAt(c),3===(c&3)&&(b.push(d),d=0);c&3&&b.push(sjcl.bitArray.partial(8*(c&3),d));return b}};
sjcl.codec.hex={fromBits:function(a){var b="",c;for(c=0;c<a.length;c++)b+=((a[c]|0)+0xf00000000000).toString(16).substr(4);return b.substr(0,sjcl.bitArray.bitLength(a)/4)},toBits:function(a){var b,c=[],d;a=a.replace(/\s|0x/g,"");d=a.length;a+="00000000";for(b=0;b<a.length;b+=8)c.push(parseInt(a.substr(b,8),16)^0);return sjcl.bitArray.clamp(c,4*d)}};
sjcl.codec.base64={J:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",fromBits:function(a,b,c){var d="",e=0,f=sjcl.codec.base64.J,g=0,h=sjcl.bitArray.bitLength(a);c&&(f=f.substr(0,62)+"-_");for(c=0;6*d.length<=h;)d+=f.charAt((g^a[c]>>>e)>>>26),6>e?(g=a[c]<<6-e,e+=26,c++):(g<<=6,e-=6);for(;d.length&3&&!b;)d+="=";return d},toBits:function(a,b){a=a.replace(/\s|=/g,"");var c=[],d,e=0,f=sjcl.codec.base64.J,g=0,h;b&&(f=f.substr(0,62)+"-_");for(d=0;d<a.length;d++)h=f.indexOf(a.charAt(d)),
0>h&&q(new sjcl.exception.invalid("this isn't base64!")),26<e?(e-=26,c.push(g^h>>>e),g=h<<32-e):(e+=6,g^=h<<32-e);e&56&&c.push(sjcl.bitArray.partial(e&56,g,1));return c}};sjcl.codec.base64url={fromBits:function(a){return sjcl.codec.base64.fromBits(a,1,1)},toBits:function(a){return sjcl.codec.base64.toBits(a,1)}};sjcl.hash.sha256=function(a){this.b[0]||this.D();a?(this.r=a.r.slice(0),this.o=a.o.slice(0),this.h=a.h):this.reset()};sjcl.hash.sha256.hash=function(a){return(new sjcl.hash.sha256).update(a).finalize()};
sjcl.hash.sha256.prototype={blockSize:512,reset:function(){this.r=this.N.slice(0);this.o=[];this.h=0;return this},update:function(a){"string"===typeof a&&(a=sjcl.codec.utf8String.toBits(a));var b,c=this.o=sjcl.bitArray.concat(this.o,a);b=this.h;a=this.h=b+sjcl.bitArray.bitLength(a);for(b=512+b&-512;b<=a;b+=512)z(this,c.splice(0,16));return this},finalize:function(){var a,b=this.o,c=this.r,b=sjcl.bitArray.concat(b,[sjcl.bitArray.partial(1,1)]);for(a=b.length+2;a&15;a++)b.push(0);b.push(Math.floor(this.h/
4294967296));for(b.push(this.h|0);b.length;)z(this,b.splice(0,16));this.reset();return c},N:[],b:[],D:function(){function a(a){return 0x100000000*(a-Math.floor(a))|0}var b=0,c=2,d;a:for(;64>b;c++){for(d=2;d*d<=c;d++)if(0===c%d)continue a;8>b&&(this.N[b]=a(Math.pow(c,0.5)));this.b[b]=a(Math.pow(c,1/3));b++}}};
function z(a,b){var c,d,e,f=b.slice(0),g=a.r,h=a.b,l=g[0],k=g[1],n=g[2],m=g[3],p=g[4],s=g[5],r=g[6],v=g[7];for(c=0;64>c;c++)16>c?d=f[c]:(d=f[c+1&15],e=f[c+14&15],d=f[c&15]=(d>>>7^d>>>18^d>>>3^d<<25^d<<14)+(e>>>17^e>>>19^e>>>10^e<<15^e<<13)+f[c&15]+f[c+9&15]|0),d=d+v+(p>>>6^p>>>11^p>>>25^p<<26^p<<21^p<<7)+(r^p&(s^r))+h[c],v=r,r=s,s=p,p=m+d|0,m=n,n=k,k=l,l=d+(k&n^m&(k^n))+(k>>>2^k>>>13^k>>>22^k<<30^k<<19^k<<10)|0;g[0]=g[0]+l|0;g[1]=g[1]+k|0;g[2]=g[2]+n|0;g[3]=g[3]+m|0;g[4]=g[4]+p|0;g[5]=g[5]+s|0;g[6]=
g[6]+r|0;g[7]=g[7]+v|0}
sjcl.mode.ccm={name:"ccm",encrypt:function(a,b,c,d,e){var f,g=b.slice(0),h=sjcl.bitArray,l=h.bitLength(c)/8,k=h.bitLength(g)/8;e=e||64;d=d||[];7>l&&q(new sjcl.exception.invalid("ccm: iv must be at least 7 bytes"));for(f=2;4>f&&k>>>8*f;f++);f<15-l&&(f=15-l);c=h.clamp(c,8*(15-f));b=sjcl.mode.ccm.L(a,b,c,d,e,f);g=sjcl.mode.ccm.p(a,g,c,b,e,f);return h.concat(g.data,g.tag)},decrypt:function(a,b,c,d,e){e=e||64;d=d||[];var f=sjcl.bitArray,g=f.bitLength(c)/8,h=f.bitLength(b),l=f.clamp(b,h-e),k=f.bitSlice(b,
h-e),h=(h-e)/8;7>g&&q(new sjcl.exception.invalid("ccm: iv must be at least 7 bytes"));for(b=2;4>b&&h>>>8*b;b++);b<15-g&&(b=15-g);c=f.clamp(c,8*(15-b));l=sjcl.mode.ccm.p(a,l,c,k,e,b);a=sjcl.mode.ccm.L(a,l.data,c,d,e,b);f.equal(l.tag,a)||q(new sjcl.exception.corrupt("ccm: tag doesn't match"));return l.data},L:function(a,b,c,d,e,f){var g=[],h=sjcl.bitArray,l=h.l;e/=8;(e%2||4>e||16<e)&&q(new sjcl.exception.invalid("ccm: invalid tag length"));(0xffffffff<d.length||0xffffffff<b.length)&&q(new sjcl.exception.bug("ccm: can't deal with 4GiB or more data"));
f=[h.partial(8,(d.length?64:0)|e-2<<2|f-1)];f=h.concat(f,c);f[3]|=h.bitLength(b)/8;f=a.encrypt(f);if(d.length){c=h.bitLength(d)/8;65279>=c?g=[h.partial(16,c)]:0xffffffff>=c&&(g=h.concat([h.partial(16,65534)],[c]));g=h.concat(g,d);for(d=0;d<g.length;d+=4)f=a.encrypt(l(f,g.slice(d,d+4).concat([0,0,0])))}for(d=0;d<b.length;d+=4)f=a.encrypt(l(f,b.slice(d,d+4).concat([0,0,0])));return h.clamp(f,8*e)},p:function(a,b,c,d,e,f){var g,h=sjcl.bitArray;g=h.l;var l=b.length,k=h.bitLength(b);c=h.concat([h.partial(8,
f-1)],c).concat([0,0,0]).slice(0,4);d=h.bitSlice(g(d,a.encrypt(c)),0,e);if(!l)return{tag:d,data:[]};for(g=0;g<l;g+=4)c[3]++,e=a.encrypt(c),b[g]^=e[0],b[g+1]^=e[1],b[g+2]^=e[2],b[g+3]^=e[3];return{tag:d,data:h.clamp(b,k)}}};
sjcl.mode.ocb2={name:"ocb2",encrypt:function(a,b,c,d,e,f){128!==sjcl.bitArray.bitLength(c)&&q(new sjcl.exception.invalid("ocb iv must be 128 bits"));var g,h=sjcl.mode.ocb2.H,l=sjcl.bitArray,k=l.l,n=[0,0,0,0];c=h(a.encrypt(c));var m,p=[];d=d||[];e=e||64;for(g=0;g+4<b.length;g+=4)m=b.slice(g,g+4),n=k(n,m),p=p.concat(k(c,a.encrypt(k(c,m)))),c=h(c);m=b.slice(g);b=l.bitLength(m);g=a.encrypt(k(c,[0,0,0,b]));m=l.clamp(k(m.concat([0,0,0]),g),b);n=k(n,k(m.concat([0,0,0]),g));n=a.encrypt(k(n,k(c,h(c))));d.length&&
(n=k(n,f?d:sjcl.mode.ocb2.pmac(a,d)));return p.concat(l.concat(m,l.clamp(n,e)))},decrypt:function(a,b,c,d,e,f){128!==sjcl.bitArray.bitLength(c)&&q(new sjcl.exception.invalid("ocb iv must be 128 bits"));e=e||64;var g=sjcl.mode.ocb2.H,h=sjcl.bitArray,l=h.l,k=[0,0,0,0],n=g(a.encrypt(c)),m,p,s=sjcl.bitArray.bitLength(b)-e,r=[];d=d||[];for(c=0;c+4<s/32;c+=4)m=l(n,a.decrypt(l(n,b.slice(c,c+4)))),k=l(k,m),r=r.concat(m),n=g(n);p=s-32*c;m=a.encrypt(l(n,[0,0,0,p]));m=l(m,h.clamp(b.slice(c),p).concat([0,0,0]));
k=l(k,m);k=a.encrypt(l(k,l(n,g(n))));d.length&&(k=l(k,f?d:sjcl.mode.ocb2.pmac(a,d)));h.equal(h.clamp(k,e),h.bitSlice(b,s))||q(new sjcl.exception.corrupt("ocb: tag doesn't match"));return r.concat(h.clamp(m,p))},pmac:function(a,b){var c,d=sjcl.mode.ocb2.H,e=sjcl.bitArray,f=e.l,g=[0,0,0,0],h=a.encrypt([0,0,0,0]),h=f(h,d(d(h)));for(c=0;c+4<b.length;c+=4)h=d(h),g=f(g,a.encrypt(f(h,b.slice(c,c+4))));c=b.slice(c);128>e.bitLength(c)&&(h=f(h,d(h)),c=e.concat(c,[-2147483648,0,0,0]));g=f(g,c);return a.encrypt(f(d(f(h,
d(h))),g))},H:function(a){return[a[0]<<1^a[1]>>>31,a[1]<<1^a[2]>>>31,a[2]<<1^a[3]>>>31,a[3]<<1^135*(a[0]>>>31)]}};
sjcl.mode.gcm={name:"gcm",encrypt:function(a,b,c,d,e){var f=b.slice(0);b=sjcl.bitArray;d=d||[];a=sjcl.mode.gcm.p(!0,a,f,d,c,e||128);return b.concat(a.data,a.tag)},decrypt:function(a,b,c,d,e){var f=b.slice(0),g=sjcl.bitArray,h=g.bitLength(f);e=e||128;d=d||[];e<=h?(b=g.bitSlice(f,h-e),f=g.bitSlice(f,0,h-e)):(b=f,f=[]);a=sjcl.mode.gcm.p(u,a,f,d,c,e);g.equal(a.tag,b)||q(new sjcl.exception.corrupt("gcm: tag doesn't match"));return a.data},Z:function(a,b){var c,d,e,f,g,h=sjcl.bitArray.l;e=[0,0,0,0];f=b.slice(0);
for(c=0;128>c;c++){(d=0!==(a[Math.floor(c/32)]&1<<31-c%32))&&(e=h(e,f));g=0!==(f[3]&1);for(d=3;0<d;d--)f[d]=f[d]>>>1|(f[d-1]&1)<<31;f[0]>>>=1;g&&(f[0]^=-0x1f000000)}return e},g:function(a,b,c){var d,e=c.length;b=b.slice(0);for(d=0;d<e;d+=4)b[0]^=0xffffffff&c[d],b[1]^=0xffffffff&c[d+1],b[2]^=0xffffffff&c[d+2],b[3]^=0xffffffff&c[d+3],b=sjcl.mode.gcm.Z(b,a);return b},p:function(a,b,c,d,e,f){var g,h,l,k,n,m,p,s,r=sjcl.bitArray;m=c.length;p=r.bitLength(c);s=r.bitLength(d);h=r.bitLength(e);g=b.encrypt([0,
0,0,0]);96===h?(e=e.slice(0),e=r.concat(e,[1])):(e=sjcl.mode.gcm.g(g,[0,0,0,0],e),e=sjcl.mode.gcm.g(g,e,[0,0,Math.floor(h/0x100000000),h&0xffffffff]));h=sjcl.mode.gcm.g(g,[0,0,0,0],d);n=e.slice(0);d=h.slice(0);a||(d=sjcl.mode.gcm.g(g,h,c));for(k=0;k<m;k+=4)n[3]++,l=b.encrypt(n),c[k]^=l[0],c[k+1]^=l[1],c[k+2]^=l[2],c[k+3]^=l[3];c=r.clamp(c,p);a&&(d=sjcl.mode.gcm.g(g,h,c));a=[Math.floor(s/0x100000000),s&0xffffffff,Math.floor(p/0x100000000),p&0xffffffff];d=sjcl.mode.gcm.g(g,d,a);l=b.encrypt(e);d[0]^=l[0];
d[1]^=l[1];d[2]^=l[2];d[3]^=l[3];return{tag:r.bitSlice(d,0,f),data:c}}};sjcl.misc.hmac=function(a,b){this.M=b=b||sjcl.hash.sha256;var c=[[],[]],d,e=b.prototype.blockSize/32;this.n=[new b,new b];a.length>e&&(a=b.hash(a));for(d=0;d<e;d++)c[0][d]=a[d]^909522486,c[1][d]=a[d]^1549556828;this.n[0].update(c[0]);this.n[1].update(c[1]);this.G=new b(this.n[0])};
sjcl.misc.hmac.prototype.encrypt=sjcl.misc.hmac.prototype.mac=function(a){this.Q&&q(new sjcl.exception.invalid("encrypt on already updated hmac called!"));this.update(a);return this.digest(a)};sjcl.misc.hmac.prototype.reset=function(){this.G=new this.M(this.n[0]);this.Q=u};sjcl.misc.hmac.prototype.update=function(a){this.Q=!0;this.G.update(a)};sjcl.misc.hmac.prototype.digest=function(){var a=this.G.finalize(),a=(new this.M(this.n[1])).update(a).finalize();this.reset();return a};
sjcl.misc.pbkdf2=function(a,b,c,d,e){c=c||1E3;(0>d||0>c)&&q(sjcl.exception.invalid("invalid params to pbkdf2"));"string"===typeof a&&(a=sjcl.codec.utf8String.toBits(a));"string"===typeof b&&(b=sjcl.codec.utf8String.toBits(b));e=e||sjcl.misc.hmac;a=new e(a);var f,g,h,l,k=[],n=sjcl.bitArray;for(l=1;32*k.length<(d||1);l++){e=f=a.encrypt(n.concat(b,[l]));for(g=1;g<c;g++){f=a.encrypt(f);for(h=0;h<f.length;h++)e[h]^=f[h]}k=k.concat(e)}d&&(k=n.clamp(k,d));return k};
sjcl.prng=function(a){this.c=[new sjcl.hash.sha256];this.i=[0];this.F=0;this.s={};this.C=0;this.K={};this.O=this.d=this.j=this.W=0;this.b=[0,0,0,0,0,0,0,0];this.f=[0,0,0,0];this.A=t;this.B=a;this.q=u;this.w={progress:{},seeded:{}};this.m=this.V=0;this.t=1;this.u=2;this.S=0x10000;this.I=[0,48,64,96,128,192,0x100,384,512,768,1024];this.T=3E4;this.R=80};
sjcl.prng.prototype={randomWords:function(a,b){var c=[],d;d=this.isReady(b);var e;d===this.m&&q(new sjcl.exception.notReady("generator isn't seeded"));if(d&this.u){d=!(d&this.t);e=[];var f=0,g;this.O=e[0]=(new Date).valueOf()+this.T;for(g=0;16>g;g++)e.push(0x100000000*Math.random()|0);for(g=0;g<this.c.length&&!(e=e.concat(this.c[g].finalize()),f+=this.i[g],this.i[g]=0,!d&&this.F&1<<g);g++);this.F>=1<<this.c.length&&(this.c.push(new sjcl.hash.sha256),this.i.push(0));this.d-=f;f>this.j&&(this.j=f);this.F++;
this.b=sjcl.hash.sha256.hash(this.b.concat(e));this.A=new sjcl.cipher.aes(this.b);for(d=0;4>d&&!(this.f[d]=this.f[d]+1|0,this.f[d]);d++);}for(d=0;d<a;d+=4)0===(d+1)%this.S&&A(this),e=B(this),c.push(e[0],e[1],e[2],e[3]);A(this);return c.slice(0,a)},setDefaultParanoia:function(a,b){0===a&&"Setting paranoia=0 will ruin your security; use it only for testing"!==b&&q("Setting paranoia=0 will ruin your security; use it only for testing");this.B=a},addEntropy:function(a,b,c){c=c||"user";var d,e,f=(new Date).valueOf(),
g=this.s[c],h=this.isReady(),l=0;d=this.K[c];d===t&&(d=this.K[c]=this.W++);g===t&&(g=this.s[c]=0);this.s[c]=(this.s[c]+1)%this.c.length;switch(typeof a){case "number":b===t&&(b=1);this.c[g].update([d,this.C++,1,b,f,1,a|0]);break;case "object":c=Object.prototype.toString.call(a);if("[object Uint32Array]"===c){e=[];for(c=0;c<a.length;c++)e.push(a[c]);a=e}else{"[object Array]"!==c&&(l=1);for(c=0;c<a.length&&!l;c++)"number"!==typeof a[c]&&(l=1)}if(!l){if(b===t)for(c=b=0;c<a.length;c++)for(e=a[c];0<e;)b++,
e>>>=1;this.c[g].update([d,this.C++,2,b,f,a.length].concat(a))}break;case "string":b===t&&(b=a.length);this.c[g].update([d,this.C++,3,b,f,a.length]);this.c[g].update(a);break;default:l=1}l&&q(new sjcl.exception.bug("random: addEntropy only supports number, array of numbers or string"));this.i[g]+=b;this.d+=b;h===this.m&&(this.isReady()!==this.m&&C("seeded",Math.max(this.j,this.d)),C("progress",this.getProgress()))},isReady:function(a){a=this.I[a!==t?a:this.B];return this.j&&this.j>=a?this.i[0]>this.R&&
(new Date).valueOf()>this.O?this.u|this.t:this.t:this.d>=a?this.u|this.m:this.m},getProgress:function(a){a=this.I[a?a:this.B];return this.j>=a?1:this.d>a?1:this.d/a},startCollectors:function(){this.q||(this.a={loadTimeCollector:D(this,this.aa),mouseCollector:D(this,this.ba),keyboardCollector:D(this,this.$),accelerometerCollector:D(this,this.U)},window.addEventListener?(window.addEventListener("load",this.a.loadTimeCollector,u),window.addEventListener("mousemove",this.a.mouseCollector,u),window.addEventListener("keypress",
this.a.keyboardCollector,u),window.addEventListener("devicemotion",this.a.accelerometerCollector,u)):document.attachEvent?(document.attachEvent("onload",this.a.loadTimeCollector),document.attachEvent("onmousemove",this.a.mouseCollector),document.attachEvent("keypress",this.a.keyboardCollector)):q(new sjcl.exception.bug("can't attach event")),this.q=!0)},stopCollectors:function(){this.q&&(window.removeEventListener?(window.removeEventListener("load",this.a.loadTimeCollector,u),window.removeEventListener("mousemove",
this.a.mouseCollector,u),window.removeEventListener("keypress",this.a.keyboardCollector,u),window.removeEventListener("devicemotion",this.a.accelerometerCollector,u)):document.detachEvent&&(document.detachEvent("onload",this.a.loadTimeCollector),document.detachEvent("onmousemove",this.a.mouseCollector),document.detachEvent("keypress",this.a.keyboardCollector)),this.q=u)},addEventListener:function(a,b){this.w[a][this.V++]=b},removeEventListener:function(a,b){var c,d,e=this.w[a],f=[];for(d in e)e.hasOwnProperty(d)&&
e[d]===b&&f.push(d);for(c=0;c<f.length;c++)d=f[c],delete e[d]},$:function(){E(1)},ba:function(a){sjcl.random.addEntropy([a.x||a.clientX||a.offsetX||0,a.y||a.clientY||a.offsetY||0],2,"mouse");E(0)},aa:function(){E(2)},U:function(a){a=a.accelerationIncludingGravity.x||a.accelerationIncludingGravity.y||a.accelerationIncludingGravity.z;if(window.orientation){var b=window.orientation;"number"===typeof b&&sjcl.random.addEntropy(b,1,"accelerometer")}a&&sjcl.random.addEntropy(a,2,"accelerometer");E(0)}};
function C(a,b){var c,d=sjcl.random.w[a],e=[];for(c in d)d.hasOwnProperty(c)&&e.push(d[c]);for(c=0;c<e.length;c++)e[c](b)}function E(a){window&&window.performance&&"function"===typeof window.performance.now?sjcl.random.addEntropy(window.performance.now(),a,"loadtime"):sjcl.random.addEntropy((new Date).valueOf(),a,"loadtime")}function A(a){a.b=B(a).concat(B(a));a.A=new sjcl.cipher.aes(a.b)}function B(a){for(var b=0;4>b&&!(a.f[b]=a.f[b]+1|0,a.f[b]);b++);return a.A.encrypt(a.f)}
function D(a,b){return function(){b.apply(a,arguments)}}sjcl.random=new sjcl.prng(6);
a:try{var F,G,H,I;if(I="undefined"!==typeof module){var J;if(J=module.exports){var K;try{K=require("crypto")}catch(L){K=null}J=(G=K)&&G.randomBytes}I=J}if(I)F=G.randomBytes(128),F=new Uint32Array((new Uint8Array(F)).buffer),sjcl.random.addEntropy(F,1024,"crypto['randomBytes']");else if(window&&Uint32Array){H=new Uint32Array(32);if(window.crypto&&window.crypto.getRandomValues)window.crypto.getRandomValues(H);else if(window.msCrypto&&window.msCrypto.getRandomValues)window.msCrypto.getRandomValues(H);
else break a;sjcl.random.addEntropy(H,1024,"crypto['getRandomValues']")}}catch(M){"undefined"!==typeof window&&window.console&&(console.log("There was an error collecting entropy from the browser:"),console.log(M))}
sjcl.json={defaults:{v:1,iter:1E3,ks:128,ts:64,mode:"ccm",adata:"",cipher:"aes"},Y:function(a,b,c,d){c=c||{};d=d||{};var e=sjcl.json,f=e.e({iv:sjcl.random.randomWords(4,0)},e.defaults),g;e.e(f,c);c=f.adata;"string"===typeof f.salt&&(f.salt=sjcl.codec.base64.toBits(f.salt));"string"===typeof f.iv&&(f.iv=sjcl.codec.base64.toBits(f.iv));(!sjcl.mode[f.mode]||!sjcl.cipher[f.cipher]||"string"===typeof a&&100>=f.iter||64!==f.ts&&96!==f.ts&&128!==f.ts||128!==f.ks&&192!==f.ks&&0x100!==f.ks||2>f.iv.length||4<
f.iv.length)&&q(new sjcl.exception.invalid("json encrypt: invalid parameters"));"string"===typeof a?(g=sjcl.misc.cachedPbkdf2(a,f),a=g.key.slice(0,f.ks/32),f.salt=g.salt):sjcl.ecc&&a instanceof sjcl.ecc.elGamal.publicKey&&(g=a.kem(),f.kemtag=g.tag,a=g.key.slice(0,f.ks/32));"string"===typeof b&&(b=sjcl.codec.utf8String.toBits(b));"string"===typeof c&&(c=sjcl.codec.utf8String.toBits(c));g=new sjcl.cipher[f.cipher](a);e.e(d,f);d.key=a;f.ct=sjcl.mode[f.mode].encrypt(g,b,f.iv,c,f.ts);return f},encrypt:function(a,
b,c,d){var e=sjcl.json,f=e.Y.apply(e,arguments);return e.encode(f)},X:function(a,b,c,d){c=c||{};d=d||{};var e=sjcl.json;b=e.e(e.e(e.e({},e.defaults),b),c,!0);var f;c=b.adata;"string"===typeof b.salt&&(b.salt=sjcl.codec.base64.toBits(b.salt));"string"===typeof b.iv&&(b.iv=sjcl.codec.base64.toBits(b.iv));(!sjcl.mode[b.mode]||!sjcl.cipher[b.cipher]||"string"===typeof a&&100>=b.iter||64!==b.ts&&96!==b.ts&&128!==b.ts||128!==b.ks&&192!==b.ks&&0x100!==b.ks||!b.iv||2>b.iv.length||4<b.iv.length)&&q(new sjcl.exception.invalid("json decrypt: invalid parameters"));
"string"===typeof a?(f=sjcl.misc.cachedPbkdf2(a,b),a=f.key.slice(0,b.ks/32),b.salt=f.salt):sjcl.ecc&&a instanceof sjcl.ecc.elGamal.secretKey&&(a=a.unkem(sjcl.codec.base64.toBits(b.kemtag)).slice(0,b.ks/32));"string"===typeof c&&(c=sjcl.codec.utf8String.toBits(c));f=new sjcl.cipher[b.cipher](a);c=sjcl.mode[b.mode].decrypt(f,b.ct,b.iv,c,b.ts);e.e(d,b);d.key=a;return sjcl.codec.utf8String.fromBits(c)},decrypt:function(a,b,c,d){var e=sjcl.json;return e.X(a,e.decode(b),c,d)},encode:function(a){var b,c=
"{",d="";for(b in a)if(a.hasOwnProperty(b))switch(b.match(/^[a-z0-9]+$/i)||q(new sjcl.exception.invalid("json encode: invalid property name")),c+=d+'"'+b+'":',d=",",typeof a[b]){case "number":case "boolean":c+=a[b];break;case "string":c+='"'+escape(a[b])+'"';break;case "object":c+='"'+sjcl.codec.base64.fromBits(a[b],0)+'"';break;default:q(new sjcl.exception.bug("json encode: unsupported type"))}return c+"}"},decode:function(a){a=a.replace(/\s/g,"");a.match(/^\{.*\}$/)||q(new sjcl.exception.invalid("json decode: this isn't json!"));
a=a.replace(/^\{|\}$/g,"").split(/,/);var b={},c,d;for(c=0;c<a.length;c++)(d=a[c].match(/^(?:(["']?)([a-z][a-z0-9]*)\1):(?:(\d+)|"([a-z0-9+\/%*_.@=\-]*)")$/i))||q(new sjcl.exception.invalid("json decode: this isn't json!")),b[d[2]]=d[3]?parseInt(d[3],10):d[2].match(/^(ct|salt|iv)$/)?sjcl.codec.base64.toBits(d[4]):unescape(d[4]);return b},e:function(a,b,c){a===t&&(a={});if(b===t)return a;for(var d in b)b.hasOwnProperty(d)&&(c&&(a[d]!==t&&a[d]!==b[d])&&q(new sjcl.exception.invalid("required parameter overridden")),
a[d]=b[d]);return a},ea:function(a,b){var c={},d;for(d in a)a.hasOwnProperty(d)&&a[d]!==b[d]&&(c[d]=a[d]);return c},da:function(a,b){var c={},d;for(d=0;d<b.length;d++)a[b[d]]!==t&&(c[b[d]]=a[b[d]]);return c}};sjcl.encrypt=sjcl.json.encrypt;sjcl.decrypt=sjcl.json.decrypt;sjcl.misc.ca={};
sjcl.misc.cachedPbkdf2=function(a,b){var c=sjcl.misc.ca,d;b=b||{};d=b.iter||1E3;c=c[a]=c[a]||{};d=c[d]=c[d]||{firstSalt:b.salt&&b.salt.length?b.salt.slice(0):sjcl.random.randomWords(2,0)};c=b.salt===t?d.firstSalt:b.salt;d[c]=d[c]||sjcl.misc.pbkdf2(a,c,b.iter);return{key:d[c].slice(0),salt:c.slice(0)}};

// BIG INTEGER

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.BigInteger=e()}}(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){var util=require("util/");var pSlice=Array.prototype.slice;var hasOwn=Object.prototype.hasOwnProperty;var assert=module.exports=ok;assert.AssertionError=function AssertionError(options){this.name="AssertionError";this.actual=options.actual;this.expected=options.expected;this.operator=options.operator;if(options.message){this.message=options.message;this.generatedMessage=false}else{this.message=getMessage(this);this.generatedMessage=true}var stackStartFunction=options.stackStartFunction||fail;if(Error.captureStackTrace){Error.captureStackTrace(this,stackStartFunction)}else{var err=new Error;if(err.stack){var out=err.stack;var fn_name=stackStartFunction.name;var idx=out.indexOf("\n"+fn_name);if(idx>=0){var next_line=out.indexOf("\n",idx+1);out=out.substring(next_line+1)}this.stack=out}}};util.inherits(assert.AssertionError,Error);function replacer(key,value){if(util.isUndefined(value)){return""+value}if(util.isNumber(value)&&(isNaN(value)||!isFinite(value))){return value.toString()}if(util.isFunction(value)||util.isRegExp(value)){return value.toString()}return value}function truncate(s,n){if(util.isString(s)){return s.length<n?s:s.slice(0,n)}else{return s}}function getMessage(self){return truncate(JSON.stringify(self.actual,replacer),128)+" "+self.operator+" "+truncate(JSON.stringify(self.expected,replacer),128)}function fail(actual,expected,message,operator,stackStartFunction){throw new assert.AssertionError({message:message,actual:actual,expected:expected,operator:operator,stackStartFunction:stackStartFunction})}assert.fail=fail;function ok(value,message){if(!value)fail(value,true,message,"==",assert.ok)}assert.ok=ok;assert.equal=function equal(actual,expected,message){if(actual!=expected)fail(actual,expected,message,"==",assert.equal)};assert.notEqual=function notEqual(actual,expected,message){if(actual==expected){fail(actual,expected,message,"!=",assert.notEqual)}};assert.deepEqual=function deepEqual(actual,expected,message){if(!_deepEqual(actual,expected)){fail(actual,expected,message,"deepEqual",assert.deepEqual)}};function _deepEqual(actual,expected){if(actual===expected){return true}else if(util.isBuffer(actual)&&util.isBuffer(expected)){if(actual.length!=expected.length)return false;for(var i=0;i<actual.length;i++){if(actual[i]!==expected[i])return false}return true}else if(util.isDate(actual)&&util.isDate(expected)){return actual.getTime()===expected.getTime()}else if(util.isRegExp(actual)&&util.isRegExp(expected)){return actual.source===expected.source&&actual.global===expected.global&&actual.multiline===expected.multiline&&actual.lastIndex===expected.lastIndex&&actual.ignoreCase===expected.ignoreCase}else if(!util.isObject(actual)&&!util.isObject(expected)){return actual==expected}else{return objEquiv(actual,expected)}}function isArguments(object){return Object.prototype.toString.call(object)=="[object Arguments]"}function objEquiv(a,b){if(util.isNullOrUndefined(a)||util.isNullOrUndefined(b))return false;if(a.prototype!==b.prototype)return false;if(isArguments(a)){if(!isArguments(b)){return false}a=pSlice.call(a);b=pSlice.call(b);return _deepEqual(a,b)}try{var ka=objectKeys(a),kb=objectKeys(b),key,i}catch(e){return false}if(ka.length!=kb.length)return false;ka.sort();kb.sort();for(i=ka.length-1;i>=0;i--){if(ka[i]!=kb[i])return false}for(i=ka.length-1;i>=0;i--){key=ka[i];if(!_deepEqual(a[key],b[key]))return false}return true}assert.notDeepEqual=function notDeepEqual(actual,expected,message){if(_deepEqual(actual,expected)){fail(actual,expected,message,"notDeepEqual",assert.notDeepEqual)}};assert.strictEqual=function strictEqual(actual,expected,message){if(actual!==expected){fail(actual,expected,message,"===",assert.strictEqual)}};assert.notStrictEqual=function notStrictEqual(actual,expected,message){if(actual===expected){fail(actual,expected,message,"!==",assert.notStrictEqual)}};function expectedException(actual,expected){if(!actual||!expected){return false}if(Object.prototype.toString.call(expected)=="[object RegExp]"){return expected.test(actual)}else if(actual instanceof expected){return true}else if(expected.call({},actual)===true){return true}return false}function _throws(shouldThrow,block,expected,message){var actual;if(util.isString(expected)){message=expected;expected=null}try{block()}catch(e){actual=e}message=(expected&&expected.name?" ("+expected.name+").":".")+(message?" "+message:".");if(shouldThrow&&!actual){fail(actual,expected,"Missing expected exception"+message)}if(!shouldThrow&&expectedException(actual,expected)){fail(actual,expected,"Got unwanted exception"+message)}if(shouldThrow&&actual&&expected&&!expectedException(actual,expected)||!shouldThrow&&actual){throw actual}}assert.throws=function(block,error,message){_throws.apply(this,[true].concat(pSlice.call(arguments)))};assert.doesNotThrow=function(block,message){_throws.apply(this,[false].concat(pSlice.call(arguments)))};assert.ifError=function(err){if(err){throw err}};var objectKeys=Object.keys||function(obj){var keys=[];for(var key in obj){if(hasOwn.call(obj,key))keys.push(key)}return keys}},{"util/":3}],2:[function(require,module,exports){module.exports=function isBuffer(arg){return arg&&typeof arg==="object"&&typeof arg.copy==="function"&&typeof arg.fill==="function"&&typeof arg.readUInt8==="function"}},{}],3:[function(require,module,exports){(function(process,global){var formatRegExp=/%[sdj%]/g;exports.format=function(f){if(!isString(f)){var objects=[];for(var i=0;i<arguments.length;i++){objects.push(inspect(arguments[i]))}return objects.join(" ")}var i=1;var args=arguments;var len=args.length;var str=String(f).replace(formatRegExp,function(x){if(x==="%%")return"%";if(i>=len)return x;switch(x){case"%s":return String(args[i++]);case"%d":return Number(args[i++]);case"%j":try{return JSON.stringify(args[i++])}catch(_){return"[Circular]"}default:return x}});for(var x=args[i];i<len;x=args[++i]){if(isNull(x)||!isObject(x)){str+=" "+x}else{str+=" "+inspect(x)}}return str};exports.deprecate=function(fn,msg){if(isUndefined(global.process)){return function(){return exports.deprecate(fn,msg).apply(this,arguments)}}if(process.noDeprecation===true){return fn}var warned=false;function deprecated(){if(!warned){if(process.throwDeprecation){throw new Error(msg)}else if(process.traceDeprecation){console.trace(msg)}else{console.error(msg)}warned=true}return fn.apply(this,arguments)}return deprecated};var debugs={};var debugEnviron;exports.debuglog=function(set){if(isUndefined(debugEnviron))debugEnviron=process.env.NODE_DEBUG||"";set=set.toUpperCase();if(!debugs[set]){if(new RegExp("\\b"+set+"\\b","i").test(debugEnviron)){var pid=process.pid;debugs[set]=function(){var msg=exports.format.apply(exports,arguments);console.error("%s %d: %s",set,pid,msg)}}else{debugs[set]=function(){}}}return debugs[set]};function inspect(obj,opts){var ctx={seen:[],stylize:stylizeNoColor};if(arguments.length>=3)ctx.depth=arguments[2];if(arguments.length>=4)ctx.colors=arguments[3];if(isBoolean(opts)){ctx.showHidden=opts}else if(opts){exports._extend(ctx,opts)}if(isUndefined(ctx.showHidden))ctx.showHidden=false;if(isUndefined(ctx.depth))ctx.depth=2;if(isUndefined(ctx.colors))ctx.colors=false;if(isUndefined(ctx.customInspect))ctx.customInspect=true;if(ctx.colors)ctx.stylize=stylizeWithColor;return formatValue(ctx,obj,ctx.depth)}exports.inspect=inspect;inspect.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]};inspect.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"};function stylizeWithColor(str,styleType){var style=inspect.styles[styleType];if(style){return"["+inspect.colors[style][0]+"m"+str+"["+inspect.colors[style][1]+"m"}else{return str}}function stylizeNoColor(str,styleType){return str}function arrayToHash(array){var hash={};array.forEach(function(val,idx){hash[val]=true});return hash}function formatValue(ctx,value,recurseTimes){if(ctx.customInspect&&value&&isFunction(value.inspect)&&value.inspect!==exports.inspect&&!(value.constructor&&value.constructor.prototype===value)){var ret=value.inspect(recurseTimes,ctx);if(!isString(ret)){ret=formatValue(ctx,ret,recurseTimes)}return ret}var primitive=formatPrimitive(ctx,value);if(primitive){return primitive}var keys=Object.keys(value);var visibleKeys=arrayToHash(keys);if(ctx.showHidden){keys=Object.getOwnPropertyNames(value)}if(isError(value)&&(keys.indexOf("message")>=0||keys.indexOf("description")>=0)){return formatError(value)}if(keys.length===0){if(isFunction(value)){var name=value.name?": "+value.name:"";return ctx.stylize("[Function"+name+"]","special")}if(isRegExp(value)){return ctx.stylize(RegExp.prototype.toString.call(value),"regexp")}if(isDate(value)){return ctx.stylize(Date.prototype.toString.call(value),"date")}if(isError(value)){return formatError(value)}}var base="",array=false,braces=["{","}"];if(isArray(value)){array=true;braces=["[","]"]}if(isFunction(value)){var n=value.name?": "+value.name:"";base=" [Function"+n+"]"}if(isRegExp(value)){base=" "+RegExp.prototype.toString.call(value)}if(isDate(value)){base=" "+Date.prototype.toUTCString.call(value)}if(isError(value)){base=" "+formatError(value)}if(keys.length===0&&(!array||value.length==0)){return braces[0]+base+braces[1]}if(recurseTimes<0){if(isRegExp(value)){return ctx.stylize(RegExp.prototype.toString.call(value),"regexp")}else{return ctx.stylize("[Object]","special")}}ctx.seen.push(value);var output;if(array){output=formatArray(ctx,value,recurseTimes,visibleKeys,keys)}else{output=keys.map(function(key){return formatProperty(ctx,value,recurseTimes,visibleKeys,key,array)})}ctx.seen.pop();return reduceToSingleString(output,base,braces)}function formatPrimitive(ctx,value){if(isUndefined(value))return ctx.stylize("undefined","undefined");if(isString(value)){var simple="'"+JSON.stringify(value).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return ctx.stylize(simple,"string")}if(isNumber(value))return ctx.stylize(""+value,"number");if(isBoolean(value))return ctx.stylize(""+value,"boolean");if(isNull(value))return ctx.stylize("null","null")}function formatError(value){return"["+Error.prototype.toString.call(value)+"]"}function formatArray(ctx,value,recurseTimes,visibleKeys,keys){var output=[];for(var i=0,l=value.length;i<l;++i){if(hasOwnProperty(value,String(i))){output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,String(i),true))}else{output.push("")}}keys.forEach(function(key){if(!key.match(/^\d+$/)){output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,key,true))}});return output}function formatProperty(ctx,value,recurseTimes,visibleKeys,key,array){var name,str,desc;desc=Object.getOwnPropertyDescriptor(value,key)||{value:value[key]};if(desc.get){if(desc.set){str=ctx.stylize("[Getter/Setter]","special")}else{str=ctx.stylize("[Getter]","special")}}else{if(desc.set){str=ctx.stylize("[Setter]","special")}}if(!hasOwnProperty(visibleKeys,key)){name="["+key+"]"}if(!str){if(ctx.seen.indexOf(desc.value)<0){if(isNull(recurseTimes)){str=formatValue(ctx,desc.value,null)}else{str=formatValue(ctx,desc.value,recurseTimes-1)}if(str.indexOf("\n")>-1){if(array){str=str.split("\n").map(function(line){return"  "+line}).join("\n").substr(2)}else{str="\n"+str.split("\n").map(function(line){return"   "+line}).join("\n")}}}else{str=ctx.stylize("[Circular]","special")}}if(isUndefined(name)){if(array&&key.match(/^\d+$/)){return str}name=JSON.stringify(""+key);if(name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)){name=name.substr(1,name.length-2);name=ctx.stylize(name,"name")}else{name=name.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'");name=ctx.stylize(name,"string")}}return name+": "+str}function reduceToSingleString(output,base,braces){var numLinesEst=0;var length=output.reduce(function(prev,cur){numLinesEst++;if(cur.indexOf("\n")>=0)numLinesEst++;return prev+cur.replace(/\u001b\[\d\d?m/g,"").length+1},0);if(length>60){return braces[0]+(base===""?"":base+"\n ")+" "+output.join(",\n  ")+" "+braces[1]}return braces[0]+base+" "+output.join(", ")+" "+braces[1]}function isArray(ar){return Array.isArray(ar)}exports.isArray=isArray;function isBoolean(arg){return typeof arg==="boolean"}exports.isBoolean=isBoolean;function isNull(arg){return arg===null}exports.isNull=isNull;function isNullOrUndefined(arg){return arg==null}exports.isNullOrUndefined=isNullOrUndefined;function isNumber(arg){return typeof arg==="number"}exports.isNumber=isNumber;function isString(arg){return typeof arg==="string"}exports.isString=isString;function isSymbol(arg){return typeof arg==="symbol"}exports.isSymbol=isSymbol;function isUndefined(arg){return arg===void 0}exports.isUndefined=isUndefined;function isRegExp(re){return isObject(re)&&objectToString(re)==="[object RegExp]"}exports.isRegExp=isRegExp;function isObject(arg){return typeof arg==="object"&&arg!==null}exports.isObject=isObject;function isDate(d){return isObject(d)&&objectToString(d)==="[object Date]"}exports.isDate=isDate;function isError(e){return isObject(e)&&(objectToString(e)==="[object Error]"||e instanceof Error)}exports.isError=isError;function isFunction(arg){return typeof arg==="function"}exports.isFunction=isFunction;function isPrimitive(arg){return arg===null||typeof arg==="boolean"||typeof arg==="number"||typeof arg==="string"||typeof arg==="symbol"||typeof arg==="undefined"}exports.isPrimitive=isPrimitive;exports.isBuffer=require("./support/isBuffer");function objectToString(o){return Object.prototype.toString.call(o)}function pad(n){return n<10?"0"+n.toString(10):n.toString(10)}var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function timestamp(){var d=new Date;var time=[pad(d.getHours()),pad(d.getMinutes()),pad(d.getSeconds())].join(":");return[d.getDate(),months[d.getMonth()],time].join(" ")}exports.log=function(){console.log("%s - %s",timestamp(),exports.format.apply(exports,arguments))};exports.inherits=require("inherits");exports._extend=function(origin,add){if(!add||!isObject(add))return origin;var keys=Object.keys(add);var i=keys.length;while(i--){origin[keys[i]]=add[keys[i]]}return origin};function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}}).call(this,require("_process"),typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./support/isBuffer":2,_process:8,inherits:7}],4:[function(require,module,exports){var base64=require("base64-js");var ieee754=require("ieee754");exports.Buffer=Buffer;exports.SlowBuffer=Buffer;exports.INSPECT_MAX_BYTES=50;Buffer.poolSize=8192;var TYPED_ARRAY_SUPPORT=function(){try{var buf=new ArrayBuffer(0);var arr=new Uint8Array(buf);arr.foo=function(){return 42};return 42===arr.foo()&&typeof arr.subarray==="function"&&new Uint8Array(1).subarray(1,1).byteLength===0}catch(e){return false}}();function Buffer(subject,encoding,noZero){if(!(this instanceof Buffer))return new Buffer(subject,encoding,noZero);var type=typeof subject;var length;if(type==="number")length=subject>0?subject>>>0:0;else if(type==="string"){if(encoding==="base64")subject=base64clean(subject);length=Buffer.byteLength(subject,encoding)}else if(type==="object"&&subject!==null){if(subject.type==="Buffer"&&isArray(subject.data))subject=subject.data;length=+subject.length>0?Math.floor(+subject.length):0}else throw new Error("First argument needs to be a number, array or string.");var buf;if(TYPED_ARRAY_SUPPORT){buf=Buffer._augment(new Uint8Array(length))}else{buf=this;buf.length=length;buf._isBuffer=true}var i;if(TYPED_ARRAY_SUPPORT&&typeof subject.byteLength==="number"){buf._set(subject)}else if(isArrayish(subject)){if(Buffer.isBuffer(subject)){for(i=0;i<length;i++)buf[i]=subject.readUInt8(i)}else{for(i=0;i<length;i++)buf[i]=(subject[i]%256+256)%256}}else if(type==="string"){buf.write(subject,0,encoding)}else if(type==="number"&&!TYPED_ARRAY_SUPPORT&&!noZero){for(i=0;i<length;i++){buf[i]=0}}return buf}Buffer.isEncoding=function(encoding){switch(String(encoding).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return true;default:return false}};Buffer.isBuffer=function(b){return!!(b!=null&&b._isBuffer)};Buffer.byteLength=function(str,encoding){var ret;str=str.toString();switch(encoding||"utf8"){case"hex":ret=str.length/2;break;case"utf8":case"utf-8":ret=utf8ToBytes(str).length;break;case"ascii":case"binary":case"raw":ret=str.length;break;case"base64":ret=base64ToBytes(str).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":ret=str.length*2;break;default:throw new Error("Unknown encoding")}return ret};Buffer.concat=function(list,totalLength){assert(isArray(list),"Usage: Buffer.concat(list[, length])");if(list.length===0){return new Buffer(0)}else if(list.length===1){return list[0]}var i;if(totalLength===undefined){totalLength=0;for(i=0;i<list.length;i++){totalLength+=list[i].length}}var buf=new Buffer(totalLength);var pos=0;for(i=0;i<list.length;i++){var item=list[i];item.copy(buf,pos);pos+=item.length}return buf};Buffer.compare=function(a,b){assert(Buffer.isBuffer(a)&&Buffer.isBuffer(b),"Arguments must be Buffers");var x=a.length;var y=b.length;for(var i=0,len=Math.min(x,y);i<len&&a[i]===b[i];i++){}if(i!==len){x=a[i];y=b[i]}if(x<y){return-1}if(y<x){return 1}return 0};function hexWrite(buf,string,offset,length){offset=Number(offset)||0;var remaining=buf.length-offset;if(!length){length=remaining}else{length=Number(length);if(length>remaining){length=remaining}}var strLen=string.length;assert(strLen%2===0,"Invalid hex string");if(length>strLen/2){length=strLen/2}for(var i=0;i<length;i++){var byte=parseInt(string.substr(i*2,2),16);assert(!isNaN(byte),"Invalid hex string");buf[offset+i]=byte}return i}function utf8Write(buf,string,offset,length){var charsWritten=blitBuffer(utf8ToBytes(string),buf,offset,length);return charsWritten}function asciiWrite(buf,string,offset,length){var charsWritten=blitBuffer(asciiToBytes(string),buf,offset,length);return charsWritten}function binaryWrite(buf,string,offset,length){return asciiWrite(buf,string,offset,length)}function base64Write(buf,string,offset,length){var charsWritten=blitBuffer(base64ToBytes(string),buf,offset,length);return charsWritten}function utf16leWrite(buf,string,offset,length){var charsWritten=blitBuffer(utf16leToBytes(string),buf,offset,length);return charsWritten}Buffer.prototype.write=function(string,offset,length,encoding){if(isFinite(offset)){if(!isFinite(length)){encoding=length;length=undefined}}else{var swap=encoding;encoding=offset;offset=length;length=swap}offset=Number(offset)||0;var remaining=this.length-offset;if(!length){length=remaining}else{length=Number(length);if(length>remaining){length=remaining}}encoding=String(encoding||"utf8").toLowerCase();var ret;switch(encoding){case"hex":ret=hexWrite(this,string,offset,length);break;case"utf8":case"utf-8":ret=utf8Write(this,string,offset,length);break;case"ascii":ret=asciiWrite(this,string,offset,length);break;case"binary":ret=binaryWrite(this,string,offset,length);break;case"base64":ret=base64Write(this,string,offset,length);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":ret=utf16leWrite(this,string,offset,length);break;default:throw new Error("Unknown encoding")}return ret};Buffer.prototype.toString=function(encoding,start,end){var self=this;encoding=String(encoding||"utf8").toLowerCase();start=Number(start)||0;end=end===undefined?self.length:Number(end);if(end===start)return"";var ret;switch(encoding){case"hex":ret=hexSlice(self,start,end);break;case"utf8":case"utf-8":ret=utf8Slice(self,start,end);break;case"ascii":ret=asciiSlice(self,start,end);break;case"binary":ret=binarySlice(self,start,end);break;case"base64":ret=base64Slice(self,start,end);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":ret=utf16leSlice(self,start,end);break;default:throw new Error("Unknown encoding")}return ret};Buffer.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};Buffer.prototype.equals=function(b){assert(Buffer.isBuffer(b),"Argument must be a Buffer");return Buffer.compare(this,b)===0};Buffer.prototype.compare=function(b){assert(Buffer.isBuffer(b),"Argument must be a Buffer");return Buffer.compare(this,b)};Buffer.prototype.copy=function(target,target_start,start,end){var source=this;if(!start)start=0;if(!end&&end!==0)end=this.length;if(!target_start)target_start=0;if(end===start)return;if(target.length===0||source.length===0)return;assert(end>=start,"sourceEnd < sourceStart");assert(target_start>=0&&target_start<target.length,"targetStart out of bounds");assert(start>=0&&start<source.length,"sourceStart out of bounds");assert(end>=0&&end<=source.length,"sourceEnd out of bounds");if(end>this.length)end=this.length;if(target.length-target_start<end-start)end=target.length-target_start+start;var len=end-start;if(len<100||!TYPED_ARRAY_SUPPORT){for(var i=0;i<len;i++){target[i+target_start]=this[i+start]}}else{target._set(this.subarray(start,start+len),target_start)}};function base64Slice(buf,start,end){if(start===0&&end===buf.length){return base64.fromByteArray(buf)}else{return base64.fromByteArray(buf.slice(start,end))}}function utf8Slice(buf,start,end){var res="";var tmp="";end=Math.min(buf.length,end);for(var i=start;i<end;i++){if(buf[i]<=127){res+=decodeUtf8Char(tmp)+String.fromCharCode(buf[i]);tmp=""}else{tmp+="%"+buf[i].toString(16)}}return res+decodeUtf8Char(tmp)}function asciiSlice(buf,start,end){var ret="";end=Math.min(buf.length,end);for(var i=start;i<end;i++){ret+=String.fromCharCode(buf[i])}return ret}function binarySlice(buf,start,end){return asciiSlice(buf,start,end)}function hexSlice(buf,start,end){var len=buf.length;if(!start||start<0)start=0;if(!end||end<0||end>len)end=len;var out="";for(var i=start;i<end;i++){out+=toHex(buf[i])}return out}function utf16leSlice(buf,start,end){var bytes=buf.slice(start,end);var res="";for(var i=0;i<bytes.length;i+=2){res+=String.fromCharCode(bytes[i]+bytes[i+1]*256)}return res}Buffer.prototype.slice=function(start,end){var len=this.length;start=~~start;end=end===undefined?len:~~end;if(start<0){start+=len;if(start<0)start=0}else if(start>len){start=len}if(end<0){end+=len;if(end<0)end=0}else if(end>len){end=len}if(end<start)end=start;if(TYPED_ARRAY_SUPPORT){return Buffer._augment(this.subarray(start,end))}else{var sliceLen=end-start;var newBuf=new Buffer(sliceLen,undefined,true);for(var i=0;i<sliceLen;i++){newBuf[i]=this[i+start]}return newBuf}};Buffer.prototype.get=function(offset){console.log(".get() is deprecated. Access using array indexes instead.");return this.readUInt8(offset)};Buffer.prototype.set=function(v,offset){console.log(".set() is deprecated. Access using array indexes instead.");return this.writeUInt8(v,offset)};Buffer.prototype.readUInt8=function(offset,noAssert){if(!noAssert){assert(offset!==undefined&&offset!==null,"missing offset");assert(offset<this.length,"Trying to read beyond buffer length")}if(offset>=this.length)return;return this[offset]};function readUInt16(buf,offset,littleEndian,noAssert){if(!noAssert){assert(typeof littleEndian==="boolean","missing or invalid endian");assert(offset!==undefined&&offset!==null,"missing offset");assert(offset+1<buf.length,"Trying to read beyond buffer length")}var len=buf.length;if(offset>=len)return;var val;if(littleEndian){val=buf[offset];if(offset+1<len)val|=buf[offset+1]<<8}else{val=buf[offset]<<8;if(offset+1<len)val|=buf[offset+1]}return val}Buffer.prototype.readUInt16LE=function(offset,noAssert){return readUInt16(this,offset,true,noAssert)};Buffer.prototype.readUInt16BE=function(offset,noAssert){return readUInt16(this,offset,false,noAssert)};function readUInt32(buf,offset,littleEndian,noAssert){if(!noAssert){assert(typeof littleEndian==="boolean","missing or invalid endian");assert(offset!==undefined&&offset!==null,"missing offset");assert(offset+3<buf.length,"Trying to read beyond buffer length")}var len=buf.length;if(offset>=len)return;var val;if(littleEndian){if(offset+2<len)val=buf[offset+2]<<16;if(offset+1<len)val|=buf[offset+1]<<8;val|=buf[offset];if(offset+3<len)val=val+(buf[offset+3]<<24>>>0)}else{if(offset+1<len)val=buf[offset+1]<<16;if(offset+2<len)val|=buf[offset+2]<<8;if(offset+3<len)val|=buf[offset+3];val=val+(buf[offset]<<24>>>0)}return val}Buffer.prototype.readUInt32LE=function(offset,noAssert){return readUInt32(this,offset,true,noAssert)};Buffer.prototype.readUInt32BE=function(offset,noAssert){return readUInt32(this,offset,false,noAssert)};Buffer.prototype.readInt8=function(offset,noAssert){if(!noAssert){assert(offset!==undefined&&offset!==null,"missing offset");assert(offset<this.length,"Trying to read beyond buffer length")}if(offset>=this.length)return;var neg=this[offset]&128;if(neg)return(255-this[offset]+1)*-1;else return this[offset]};function readInt16(buf,offset,littleEndian,noAssert){if(!noAssert){assert(typeof littleEndian==="boolean","missing or invalid endian");assert(offset!==undefined&&offset!==null,"missing offset");assert(offset+1<buf.length,"Trying to read beyond buffer length")}var len=buf.length;if(offset>=len)return;var val=readUInt16(buf,offset,littleEndian,true);var neg=val&32768;if(neg)return(65535-val+1)*-1;else return val}Buffer.prototype.readInt16LE=function(offset,noAssert){return readInt16(this,offset,true,noAssert)};Buffer.prototype.readInt16BE=function(offset,noAssert){return readInt16(this,offset,false,noAssert)};function readInt32(buf,offset,littleEndian,noAssert){if(!noAssert){assert(typeof littleEndian==="boolean","missing or invalid endian");assert(offset!==undefined&&offset!==null,"missing offset");assert(offset+3<buf.length,"Trying to read beyond buffer length")}var len=buf.length;if(offset>=len)return;var val=readUInt32(buf,offset,littleEndian,true);var neg=val&2147483648;if(neg)return(4294967295-val+1)*-1;else return val}Buffer.prototype.readInt32LE=function(offset,noAssert){return readInt32(this,offset,true,noAssert)};Buffer.prototype.readInt32BE=function(offset,noAssert){return readInt32(this,offset,false,noAssert)};function readFloat(buf,offset,littleEndian,noAssert){if(!noAssert){assert(typeof littleEndian==="boolean","missing or invalid endian");assert(offset+3<buf.length,"Trying to read beyond buffer length")}return ieee754.read(buf,offset,littleEndian,23,4)}Buffer.prototype.readFloatLE=function(offset,noAssert){return readFloat(this,offset,true,noAssert)};Buffer.prototype.readFloatBE=function(offset,noAssert){return readFloat(this,offset,false,noAssert)};function readDouble(buf,offset,littleEndian,noAssert){if(!noAssert){assert(typeof littleEndian==="boolean","missing or invalid endian");assert(offset+7<buf.length,"Trying to read beyond buffer length")}return ieee754.read(buf,offset,littleEndian,52,8)}Buffer.prototype.readDoubleLE=function(offset,noAssert){return readDouble(this,offset,true,noAssert)};Buffer.prototype.readDoubleBE=function(offset,noAssert){return readDouble(this,offset,false,noAssert)};Buffer.prototype.writeUInt8=function(value,offset,noAssert){if(!noAssert){assert(value!==undefined&&value!==null,"missing value");assert(offset!==undefined&&offset!==null,"missing offset");assert(offset<this.length,"trying to write beyond buffer length");verifuint(value,255)}if(offset>=this.length)return;this[offset]=value;return offset+1};function writeUInt16(buf,value,offset,littleEndian,noAssert){if(!noAssert){assert(value!==undefined&&value!==null,"missing value");assert(typeof littleEndian==="boolean","missing or invalid endian");assert(offset!==undefined&&offset!==null,"missing offset");assert(offset+1<buf.length,"trying to write beyond buffer length");verifuint(value,65535)}var len=buf.length;if(offset>=len)return;for(var i=0,j=Math.min(len-offset,2);i<j;i++){buf[offset+i]=(value&255<<8*(littleEndian?i:1-i))>>>(littleEndian?i:1-i)*8}return offset+2}Buffer.prototype.writeUInt16LE=function(value,offset,noAssert){return writeUInt16(this,value,offset,true,noAssert)};Buffer.prototype.writeUInt16BE=function(value,offset,noAssert){return writeUInt16(this,value,offset,false,noAssert)};function writeUInt32(buf,value,offset,littleEndian,noAssert){if(!noAssert){assert(value!==undefined&&value!==null,"missing value");assert(typeof littleEndian==="boolean","missing or invalid endian");assert(offset!==undefined&&offset!==null,"missing offset");assert(offset+3<buf.length,"trying to write beyond buffer length");verifuint(value,4294967295)}var len=buf.length;if(offset>=len)return;for(var i=0,j=Math.min(len-offset,4);i<j;i++){buf[offset+i]=value>>>(littleEndian?i:3-i)*8&255}return offset+4}Buffer.prototype.writeUInt32LE=function(value,offset,noAssert){return writeUInt32(this,value,offset,true,noAssert)};Buffer.prototype.writeUInt32BE=function(value,offset,noAssert){return writeUInt32(this,value,offset,false,noAssert)};Buffer.prototype.writeInt8=function(value,offset,noAssert){if(!noAssert){assert(value!==undefined&&value!==null,"missing value");assert(offset!==undefined&&offset!==null,"missing offset");assert(offset<this.length,"Trying to write beyond buffer length");verifsint(value,127,-128)}if(offset>=this.length)return;if(value>=0)this.writeUInt8(value,offset,noAssert);else this.writeUInt8(255+value+1,offset,noAssert);return offset+1};function writeInt16(buf,value,offset,littleEndian,noAssert){if(!noAssert){assert(value!==undefined&&value!==null,"missing value");assert(typeof littleEndian==="boolean","missing or invalid endian");assert(offset!==undefined&&offset!==null,"missing offset");assert(offset+1<buf.length,"Trying to write beyond buffer length");verifsint(value,32767,-32768)}var len=buf.length;if(offset>=len)return;if(value>=0)writeUInt16(buf,value,offset,littleEndian,noAssert);else writeUInt16(buf,65535+value+1,offset,littleEndian,noAssert);return offset+2}Buffer.prototype.writeInt16LE=function(value,offset,noAssert){return writeInt16(this,value,offset,true,noAssert)};Buffer.prototype.writeInt16BE=function(value,offset,noAssert){return writeInt16(this,value,offset,false,noAssert)};function writeInt32(buf,value,offset,littleEndian,noAssert){if(!noAssert){assert(value!==undefined&&value!==null,"missing value");assert(typeof littleEndian==="boolean","missing or invalid endian");assert(offset!==undefined&&offset!==null,"missing offset");assert(offset+3<buf.length,"Trying to write beyond buffer length");verifsint(value,2147483647,-2147483648)}var len=buf.length;if(offset>=len)return;if(value>=0)writeUInt32(buf,value,offset,littleEndian,noAssert);else writeUInt32(buf,4294967295+value+1,offset,littleEndian,noAssert);return offset+4}Buffer.prototype.writeInt32LE=function(value,offset,noAssert){return writeInt32(this,value,offset,true,noAssert)};Buffer.prototype.writeInt32BE=function(value,offset,noAssert){return writeInt32(this,value,offset,false,noAssert)};function writeFloat(buf,value,offset,littleEndian,noAssert){if(!noAssert){assert(value!==undefined&&value!==null,"missing value");assert(typeof littleEndian==="boolean","missing or invalid endian");assert(offset!==undefined&&offset!==null,"missing offset");
assert(offset+3<buf.length,"Trying to write beyond buffer length");verifIEEE754(value,3.4028234663852886e38,-3.4028234663852886e38)}var len=buf.length;if(offset>=len)return;ieee754.write(buf,value,offset,littleEndian,23,4);return offset+4}Buffer.prototype.writeFloatLE=function(value,offset,noAssert){return writeFloat(this,value,offset,true,noAssert)};Buffer.prototype.writeFloatBE=function(value,offset,noAssert){return writeFloat(this,value,offset,false,noAssert)};function writeDouble(buf,value,offset,littleEndian,noAssert){if(!noAssert){assert(value!==undefined&&value!==null,"missing value");assert(typeof littleEndian==="boolean","missing or invalid endian");assert(offset!==undefined&&offset!==null,"missing offset");assert(offset+7<buf.length,"Trying to write beyond buffer length");verifIEEE754(value,1.7976931348623157e308,-1.7976931348623157e308)}var len=buf.length;if(offset>=len)return;ieee754.write(buf,value,offset,littleEndian,52,8);return offset+8}Buffer.prototype.writeDoubleLE=function(value,offset,noAssert){return writeDouble(this,value,offset,true,noAssert)};Buffer.prototype.writeDoubleBE=function(value,offset,noAssert){return writeDouble(this,value,offset,false,noAssert)};Buffer.prototype.fill=function(value,start,end){if(!value)value=0;if(!start)start=0;if(!end)end=this.length;assert(end>=start,"end < start");if(end===start)return;if(this.length===0)return;assert(start>=0&&start<this.length,"start out of bounds");assert(end>=0&&end<=this.length,"end out of bounds");var i;if(typeof value==="number"){for(i=start;i<end;i++){this[i]=value}}else{var bytes=utf8ToBytes(value.toString());var len=bytes.length;for(i=start;i<end;i++){this[i]=bytes[i%len]}}return this};Buffer.prototype.inspect=function(){var out=[];var len=this.length;for(var i=0;i<len;i++){out[i]=toHex(this[i]);if(i===exports.INSPECT_MAX_BYTES){out[i+1]="...";break}}return"<Buffer "+out.join(" ")+">"};Buffer.prototype.toArrayBuffer=function(){if(typeof Uint8Array!=="undefined"){if(TYPED_ARRAY_SUPPORT){return new Buffer(this).buffer}else{var buf=new Uint8Array(this.length);for(var i=0,len=buf.length;i<len;i+=1){buf[i]=this[i]}return buf.buffer}}else{throw new Error("Buffer.toArrayBuffer not supported in this browser")}};var BP=Buffer.prototype;Buffer._augment=function(arr){arr._isBuffer=true;arr._get=arr.get;arr._set=arr.set;arr.get=BP.get;arr.set=BP.set;arr.write=BP.write;arr.toString=BP.toString;arr.toLocaleString=BP.toString;arr.toJSON=BP.toJSON;arr.equals=BP.equals;arr.compare=BP.compare;arr.copy=BP.copy;arr.slice=BP.slice;arr.readUInt8=BP.readUInt8;arr.readUInt16LE=BP.readUInt16LE;arr.readUInt16BE=BP.readUInt16BE;arr.readUInt32LE=BP.readUInt32LE;arr.readUInt32BE=BP.readUInt32BE;arr.readInt8=BP.readInt8;arr.readInt16LE=BP.readInt16LE;arr.readInt16BE=BP.readInt16BE;arr.readInt32LE=BP.readInt32LE;arr.readInt32BE=BP.readInt32BE;arr.readFloatLE=BP.readFloatLE;arr.readFloatBE=BP.readFloatBE;arr.readDoubleLE=BP.readDoubleLE;arr.readDoubleBE=BP.readDoubleBE;arr.writeUInt8=BP.writeUInt8;arr.writeUInt16LE=BP.writeUInt16LE;arr.writeUInt16BE=BP.writeUInt16BE;arr.writeUInt32LE=BP.writeUInt32LE;arr.writeUInt32BE=BP.writeUInt32BE;arr.writeInt8=BP.writeInt8;arr.writeInt16LE=BP.writeInt16LE;arr.writeInt16BE=BP.writeInt16BE;arr.writeInt32LE=BP.writeInt32LE;arr.writeInt32BE=BP.writeInt32BE;arr.writeFloatLE=BP.writeFloatLE;arr.writeFloatBE=BP.writeFloatBE;arr.writeDoubleLE=BP.writeDoubleLE;arr.writeDoubleBE=BP.writeDoubleBE;arr.fill=BP.fill;arr.inspect=BP.inspect;arr.toArrayBuffer=BP.toArrayBuffer;return arr};var INVALID_BASE64_RE=/[^+\/0-9A-z]/g;function base64clean(str){str=stringtrim(str).replace(INVALID_BASE64_RE,"");while(str.length%4!==0){str=str+"="}return str}function stringtrim(str){if(str.trim)return str.trim();return str.replace(/^\s+|\s+$/g,"")}function isArray(subject){return(Array.isArray||function(subject){return Object.prototype.toString.call(subject)==="[object Array]"})(subject)}function isArrayish(subject){return isArray(subject)||Buffer.isBuffer(subject)||subject&&typeof subject==="object"&&typeof subject.length==="number"}function toHex(n){if(n<16)return"0"+n.toString(16);return n.toString(16)}function utf8ToBytes(str){var byteArray=[];for(var i=0;i<str.length;i++){var b=str.charCodeAt(i);if(b<=127){byteArray.push(b)}else{var start=i;if(b>=55296&&b<=57343)i++;var h=encodeURIComponent(str.slice(start,i+1)).substr(1).split("%");for(var j=0;j<h.length;j++){byteArray.push(parseInt(h[j],16))}}}return byteArray}function asciiToBytes(str){var byteArray=[];for(var i=0;i<str.length;i++){byteArray.push(str.charCodeAt(i)&255)}return byteArray}function utf16leToBytes(str){var c,hi,lo;var byteArray=[];for(var i=0;i<str.length;i++){c=str.charCodeAt(i);hi=c>>8;lo=c%256;byteArray.push(lo);byteArray.push(hi)}return byteArray}function base64ToBytes(str){return base64.toByteArray(str)}function blitBuffer(src,dst,offset,length){for(var i=0;i<length;i++){if(i+offset>=dst.length||i>=src.length)break;dst[i+offset]=src[i]}return i}function decodeUtf8Char(str){try{return decodeURIComponent(str)}catch(err){return String.fromCharCode(65533)}}function verifuint(value,max){assert(typeof value==="number","cannot write a non-number as a number");assert(value>=0,"specified a negative value for writing an unsigned value");assert(value<=max,"value is larger than maximum value for type");assert(Math.floor(value)===value,"value has a fractional component")}function verifsint(value,max,min){assert(typeof value==="number","cannot write a non-number as a number");assert(value<=max,"value larger than maximum allowed value");assert(value>=min,"value smaller than minimum allowed value");assert(Math.floor(value)===value,"value has a fractional component")}function verifIEEE754(value,max,min){assert(typeof value==="number","cannot write a non-number as a number");assert(value<=max,"value larger than maximum allowed value");assert(value>=min,"value smaller than minimum allowed value")}function assert(test,message){if(!test)throw new Error(message||"Failed assertion")}},{"base64-js":5,ieee754:6}],5:[function(require,module,exports){var lookup="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";(function(exports){"use strict";var Arr=typeof Uint8Array!=="undefined"?Uint8Array:Array;var PLUS="+".charCodeAt(0);var SLASH="/".charCodeAt(0);var NUMBER="0".charCodeAt(0);var LOWER="a".charCodeAt(0);var UPPER="A".charCodeAt(0);function decode(elt){var code=elt.charCodeAt(0);if(code===PLUS)return 62;if(code===SLASH)return 63;if(code<NUMBER)return-1;if(code<NUMBER+10)return code-NUMBER+26+26;if(code<UPPER+26)return code-UPPER;if(code<LOWER+26)return code-LOWER+26}function b64ToByteArray(b64){var i,j,l,tmp,placeHolders,arr;if(b64.length%4>0){throw new Error("Invalid string. Length must be a multiple of 4")}var len=b64.length;placeHolders="="===b64.charAt(len-2)?2:"="===b64.charAt(len-1)?1:0;arr=new Arr(b64.length*3/4-placeHolders);l=placeHolders>0?b64.length-4:b64.length;var L=0;function push(v){arr[L++]=v}for(i=0,j=0;i<l;i+=4,j+=3){tmp=decode(b64.charAt(i))<<18|decode(b64.charAt(i+1))<<12|decode(b64.charAt(i+2))<<6|decode(b64.charAt(i+3));push((tmp&16711680)>>16);push((tmp&65280)>>8);push(tmp&255)}if(placeHolders===2){tmp=decode(b64.charAt(i))<<2|decode(b64.charAt(i+1))>>4;push(tmp&255)}else if(placeHolders===1){tmp=decode(b64.charAt(i))<<10|decode(b64.charAt(i+1))<<4|decode(b64.charAt(i+2))>>2;push(tmp>>8&255);push(tmp&255)}return arr}function uint8ToBase64(uint8){var i,extraBytes=uint8.length%3,output="",temp,length;function encode(num){return lookup.charAt(num)}function tripletToBase64(num){return encode(num>>18&63)+encode(num>>12&63)+encode(num>>6&63)+encode(num&63)}for(i=0,length=uint8.length-extraBytes;i<length;i+=3){temp=(uint8[i]<<16)+(uint8[i+1]<<8)+uint8[i+2];output+=tripletToBase64(temp)}switch(extraBytes){case 1:temp=uint8[uint8.length-1];output+=encode(temp>>2);output+=encode(temp<<4&63);output+="==";break;case 2:temp=(uint8[uint8.length-2]<<8)+uint8[uint8.length-1];output+=encode(temp>>10);output+=encode(temp>>4&63);output+=encode(temp<<2&63);output+="=";break}return output}exports.toByteArray=b64ToByteArray;exports.fromByteArray=uint8ToBase64})(typeof exports==="undefined"?this.base64js={}:exports)},{}],6:[function(require,module,exports){exports.read=function(buffer,offset,isLE,mLen,nBytes){var e,m,eLen=nBytes*8-mLen-1,eMax=(1<<eLen)-1,eBias=eMax>>1,nBits=-7,i=isLE?nBytes-1:0,d=isLE?-1:1,s=buffer[offset+i];i+=d;e=s&(1<<-nBits)-1;s>>=-nBits;nBits+=eLen;for(;nBits>0;e=e*256+buffer[offset+i],i+=d,nBits-=8);m=e&(1<<-nBits)-1;e>>=-nBits;nBits+=mLen;for(;nBits>0;m=m*256+buffer[offset+i],i+=d,nBits-=8);if(e===0){e=1-eBias}else if(e===eMax){return m?NaN:(s?-1:1)*Infinity}else{m=m+Math.pow(2,mLen);e=e-eBias}return(s?-1:1)*m*Math.pow(2,e-mLen)};exports.write=function(buffer,value,offset,isLE,mLen,nBytes){var e,m,c,eLen=nBytes*8-mLen-1,eMax=(1<<eLen)-1,eBias=eMax>>1,rt=mLen===23?Math.pow(2,-24)-Math.pow(2,-77):0,i=isLE?0:nBytes-1,d=isLE?1:-1,s=value<0||value===0&&1/value<0?1:0;value=Math.abs(value);if(isNaN(value)||value===Infinity){m=isNaN(value)?1:0;e=eMax}else{e=Math.floor(Math.log(value)/Math.LN2);if(value*(c=Math.pow(2,-e))<1){e--;c*=2}if(e+eBias>=1){value+=rt/c}else{value+=rt*Math.pow(2,1-eBias)}if(value*c>=2){e++;c/=2}if(e+eBias>=eMax){m=0;e=eMax}else if(e+eBias>=1){m=(value*c-1)*Math.pow(2,mLen);e=e+eBias}else{m=value*Math.pow(2,eBias-1)*Math.pow(2,mLen);e=0}}for(;mLen>=8;buffer[offset+i]=m&255,i+=d,m/=256,mLen-=8);e=e<<mLen|m;eLen+=mLen;for(;eLen>0;buffer[offset+i]=e&255,i+=d,e/=256,eLen-=8);buffer[offset+i-d]|=s*128}},{}],7:[function(require,module,exports){if(typeof Object.create==="function"){module.exports=function inherits(ctor,superCtor){ctor.super_=superCtor;ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:false,writable:true,configurable:true}})}}else{module.exports=function inherits(ctor,superCtor){ctor.super_=superCtor;var TempCtor=function(){};TempCtor.prototype=superCtor.prototype;ctor.prototype=new TempCtor;ctor.prototype.constructor=ctor}}},{}],8:[function(require,module,exports){var process=module.exports={};process.nextTick=function(){var canSetImmediate=typeof window!=="undefined"&&window.setImmediate;var canPost=typeof window!=="undefined"&&window.postMessage&&window.addEventListener;if(canSetImmediate){return function(f){return window.setImmediate(f)}}if(canPost){var queue=[];window.addEventListener("message",function(ev){var source=ev.source;if((source===window||source===null)&&ev.data==="process-tick"){ev.stopPropagation();if(queue.length>0){var fn=queue.shift();fn()}}},true);return function nextTick(fn){queue.push(fn);window.postMessage("process-tick","*")}}return function nextTick(fn){setTimeout(fn,0)}}();process.title="browser";process.browser=true;process.env={};process.argv=[];function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.binding=function(name){throw new Error("process.binding is not supported")};process.cwd=function(){return"/"};process.chdir=function(dir){throw new Error("process.chdir is not supported")}},{}],9:[function(require,module,exports){var assert=require("assert");function BigInteger(a,b,c){if(!(this instanceof BigInteger))return new BigInteger(a,b,c);if(a!=null){if("number"==typeof a)this.fromNumber(a,b,c);else if(b==null&&"string"!=typeof a)this.fromString(a,256);else this.fromString(a,b)}}var proto=BigInteger.prototype;proto.__bigi=require("../package.json").version;BigInteger.isBigInteger=function(obj,check_ver){return obj&&obj.__bigi&&(!check_ver||obj.__bigi===proto.__bigi)};var dbits;function am1(i,x,w,j,c,n){while(--n>=0){var v=x*this[i++]+w[j]+c;c=Math.floor(v/67108864);w[j++]=v&67108863}return c}function am2(i,x,w,j,c,n){var xl=x&32767,xh=x>>15;while(--n>=0){var l=this[i]&32767;var h=this[i++]>>15;var m=xh*l+h*xl;l=xl*l+((m&32767)<<15)+w[j]+(c&1073741823);c=(l>>>30)+(m>>>15)+xh*h+(c>>>30);w[j++]=l&1073741823}return c}function am3(i,x,w,j,c,n){var xl=x&16383,xh=x>>14;while(--n>=0){var l=this[i]&16383;var h=this[i++]>>14;var m=xh*l+h*xl;l=xl*l+((m&16383)<<14)+w[j]+c;c=(l>>28)+(m>>14)+xh*h;w[j++]=l&268435455}return c}BigInteger.prototype.am=am1;dbits=26;BigInteger.prototype.DB=dbits;BigInteger.prototype.DM=(1<<dbits)-1;var DV=BigInteger.prototype.DV=1<<dbits;var BI_FP=52;BigInteger.prototype.FV=Math.pow(2,BI_FP);BigInteger.prototype.F1=BI_FP-dbits;BigInteger.prototype.F2=2*dbits-BI_FP;var BI_RM="0123456789abcdefghijklmnopqrstuvwxyz";var BI_RC=new Array;var rr,vv;rr="0".charCodeAt(0);for(vv=0;vv<=9;++vv)BI_RC[rr++]=vv;rr="a".charCodeAt(0);for(vv=10;vv<36;++vv)BI_RC[rr++]=vv;rr="A".charCodeAt(0);for(vv=10;vv<36;++vv)BI_RC[rr++]=vv;function int2char(n){return BI_RM.charAt(n)}function intAt(s,i){var c=BI_RC[s.charCodeAt(i)];return c==null?-1:c}function bnpCopyTo(r){for(var i=this.t-1;i>=0;--i)r[i]=this[i];r.t=this.t;r.s=this.s}function bnpFromInt(x){this.t=1;this.s=x<0?-1:0;if(x>0)this[0]=x;else if(x<-1)this[0]=x+DV;else this.t=0}function nbv(i){var r=new BigInteger;r.fromInt(i);return r}function bnpFromString(s,b){var self=this;var k;if(b==16)k=4;else if(b==8)k=3;else if(b==256)k=8;else if(b==2)k=1;else if(b==32)k=5;else if(b==4)k=2;else{self.fromRadix(s,b);return}self.t=0;self.s=0;var i=s.length,mi=false,sh=0;while(--i>=0){var x=k==8?s[i]&255:intAt(s,i);if(x<0){if(s.charAt(i)=="-")mi=true;continue}mi=false;if(sh==0)self[self.t++]=x;else if(sh+k>self.DB){self[self.t-1]|=(x&(1<<self.DB-sh)-1)<<sh;self[self.t++]=x>>self.DB-sh}else self[self.t-1]|=x<<sh;sh+=k;if(sh>=self.DB)sh-=self.DB}if(k==8&&(s[0]&128)!=0){self.s=-1;if(sh>0)self[self.t-1]|=(1<<self.DB-sh)-1<<sh}self.clamp();if(mi)BigInteger.ZERO.subTo(self,self)}function bnpClamp(){var c=this.s&this.DM;while(this.t>0&&this[this.t-1]==c)--this.t}function bnToString(b){var self=this;if(self.s<0)return"-"+self.negate().toString(b);var k;if(b==16)k=4;else if(b==8)k=3;else if(b==2)k=1;else if(b==32)k=5;else if(b==4)k=2;else return self.toRadix(b);var km=(1<<k)-1,d,m=false,r="",i=self.t;var p=self.DB-i*self.DB%k;if(i-->0){if(p<self.DB&&(d=self[i]>>p)>0){m=true;r=int2char(d)}while(i>=0){if(p<k){d=(self[i]&(1<<p)-1)<<k-p;d|=self[--i]>>(p+=self.DB-k)}else{d=self[i]>>(p-=k)&km;if(p<=0){p+=self.DB;--i}}if(d>0)m=true;if(m)r+=int2char(d)}}return m?r:"0"}function bnNegate(){var r=new BigInteger;BigInteger.ZERO.subTo(this,r);return r}function bnAbs(){return this.s<0?this.negate():this}function bnCompareTo(a){var r=this.s-a.s;if(r!=0)return r;var i=this.t;r=i-a.t;if(r!=0)return this.s<0?-r:r;while(--i>=0)if((r=this[i]-a[i])!=0)return r;return 0}function nbits(x){var r=1,t;if((t=x>>>16)!=0){x=t;r+=16}if((t=x>>8)!=0){x=t;r+=8}if((t=x>>4)!=0){x=t;r+=4}if((t=x>>2)!=0){x=t;r+=2}if((t=x>>1)!=0){x=t;r+=1}return r}function bnBitLength(){if(this.t<=0)return 0;return this.DB*(this.t-1)+nbits(this[this.t-1]^this.s&this.DM)}function bnpDLShiftTo(n,r){var i;for(i=this.t-1;i>=0;--i)r[i+n]=this[i];for(i=n-1;i>=0;--i)r[i]=0;r.t=this.t+n;r.s=this.s}function bnpDRShiftTo(n,r){for(var i=n;i<this.t;++i)r[i-n]=this[i];r.t=Math.max(this.t-n,0);r.s=this.s}function bnpLShiftTo(n,r){var self=this;var bs=n%self.DB;var cbs=self.DB-bs;var bm=(1<<cbs)-1;var ds=Math.floor(n/self.DB),c=self.s<<bs&self.DM,i;for(i=self.t-1;i>=0;--i){r[i+ds+1]=self[i]>>cbs|c;c=(self[i]&bm)<<bs}for(i=ds-1;i>=0;--i)r[i]=0;r[ds]=c;r.t=self.t+ds+1;r.s=self.s;r.clamp()}function bnpRShiftTo(n,r){var self=this;r.s=self.s;var ds=Math.floor(n/self.DB);if(ds>=self.t){r.t=0;return}var bs=n%self.DB;var cbs=self.DB-bs;var bm=(1<<bs)-1;r[0]=self[ds]>>bs;for(var i=ds+1;i<self.t;++i){r[i-ds-1]|=(self[i]&bm)<<cbs;r[i-ds]=self[i]>>bs}if(bs>0)r[self.t-ds-1]|=(self.s&bm)<<cbs;r.t=self.t-ds;r.clamp()}function bnpSubTo(a,r){var self=this;var i=0,c=0,m=Math.min(a.t,self.t);while(i<m){c+=self[i]-a[i];r[i++]=c&self.DM;c>>=self.DB}if(a.t<self.t){c-=a.s;while(i<self.t){c+=self[i];r[i++]=c&self.DM;c>>=self.DB}c+=self.s}else{c+=self.s;while(i<a.t){c-=a[i];r[i++]=c&self.DM;c>>=self.DB}c-=a.s}r.s=c<0?-1:0;if(c<-1)r[i++]=self.DV+c;else if(c>0)r[i++]=c;r.t=i;r.clamp()}function bnpMultiplyTo(a,r){var x=this.abs(),y=a.abs();var i=x.t;r.t=i+y.t;while(--i>=0)r[i]=0;for(i=0;i<y.t;++i)r[i+x.t]=x.am(0,y[i],r,i,0,x.t);r.s=0;r.clamp();if(this.s!=a.s)BigInteger.ZERO.subTo(r,r)}function bnpSquareTo(r){var x=this.abs();var i=r.t=2*x.t;while(--i>=0)r[i]=0;for(i=0;i<x.t-1;++i){var c=x.am(i,x[i],r,2*i,0,1);if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1))>=x.DV){r[i+x.t]-=x.DV;r[i+x.t+1]=1}}if(r.t>0)r[r.t-1]+=x.am(i,x[i],r,2*i,0,1);r.s=0;r.clamp()}function bnpDivRemTo(m,q,r){var self=this;var pm=m.abs();if(pm.t<=0)return;var pt=self.abs();if(pt.t<pm.t){if(q!=null)q.fromInt(0);if(r!=null)self.copyTo(r);return}if(r==null)r=new BigInteger;var y=new BigInteger,ts=self.s,ms=m.s;var nsh=self.DB-nbits(pm[pm.t-1]);if(nsh>0){pm.lShiftTo(nsh,y);pt.lShiftTo(nsh,r)}else{pm.copyTo(y);pt.copyTo(r)}var ys=y.t;var y0=y[ys-1];if(y0==0)return;var yt=y0*(1<<self.F1)+(ys>1?y[ys-2]>>self.F2:0);var d1=self.FV/yt,d2=(1<<self.F1)/yt,e=1<<self.F2;var i=r.t,j=i-ys,t=q==null?new BigInteger:q;y.dlShiftTo(j,t);if(r.compareTo(t)>=0){r[r.t++]=1;r.subTo(t,r)}BigInteger.ONE.dlShiftTo(ys,t);t.subTo(y,y);while(y.t<ys)y[y.t++]=0;while(--j>=0){var qd=r[--i]==y0?self.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);if((r[i]+=y.am(0,qd,r,j,0,ys))<qd){y.dlShiftTo(j,t);r.subTo(t,r);while(r[i]<--qd)r.subTo(t,r)}}if(q!=null){r.drShiftTo(ys,q);if(ts!=ms)BigInteger.ZERO.subTo(q,q)}r.t=ys;r.clamp();if(nsh>0)r.rShiftTo(nsh,r);if(ts<0)BigInteger.ZERO.subTo(r,r)}function bnMod(a){var r=new BigInteger;this.abs().divRemTo(a,null,r);if(this.s<0&&r.compareTo(BigInteger.ZERO)>0)a.subTo(r,r);return r}function Classic(m){this.m=m}function cConvert(x){if(x.s<0||x.compareTo(this.m)>=0)return x.mod(this.m);else return x}function cRevert(x){return x}function cReduce(x){x.divRemTo(this.m,null,x)}function cMulTo(x,y,r){x.multiplyTo(y,r);this.reduce(r)}function cSqrTo(x,r){x.squareTo(r);this.reduce(r)}Classic.prototype.convert=cConvert;Classic.prototype.revert=cRevert;Classic.prototype.reduce=cReduce;Classic.prototype.mulTo=cMulTo;Classic.prototype.sqrTo=cSqrTo;function bnpInvDigit(){if(this.t<1)return 0;var x=this[0];if((x&1)==0)return 0;var y=x&3;y=y*(2-(x&15)*y)&15;y=y*(2-(x&255)*y)&255;y=y*(2-((x&65535)*y&65535))&65535;y=y*(2-x*y%this.DV)%this.DV;return y>0?this.DV-y:-y}function Montgomery(m){this.m=m;this.mp=m.invDigit();this.mpl=this.mp&32767;this.mph=this.mp>>15;this.um=(1<<m.DB-15)-1;this.mt2=2*m.t}function montConvert(x){var r=new BigInteger;x.abs().dlShiftTo(this.m.t,r);r.divRemTo(this.m,null,r);if(x.s<0&&r.compareTo(BigInteger.ZERO)>0)this.m.subTo(r,r);return r}function montRevert(x){var r=new BigInteger;x.copyTo(r);this.reduce(r);return r}function montReduce(x){while(x.t<=this.mt2)x[x.t++]=0;for(var i=0;i<this.m.t;++i){var j=x[i]&32767;var u0=j*this.mpl+((j*this.mph+(x[i]>>15)*this.mpl&this.um)<<15)&x.DM;j=i+this.m.t;x[j]+=this.m.am(0,u0,x,i,0,this.m.t);while(x[j]>=x.DV){x[j]-=x.DV;x[++j]++}}x.clamp();x.drShiftTo(this.m.t,x);if(x.compareTo(this.m)>=0)x.subTo(this.m,x)}function montSqrTo(x,r){x.squareTo(r);this.reduce(r)}function montMulTo(x,y,r){x.multiplyTo(y,r);this.reduce(r)}Montgomery.prototype.convert=montConvert;Montgomery.prototype.revert=montRevert;Montgomery.prototype.reduce=montReduce;Montgomery.prototype.mulTo=montMulTo;Montgomery.prototype.sqrTo=montSqrTo;function bnpIsEven(){return(this.t>0?this[0]&1:this.s)==0}function bnpExp(e,z){if(e>4294967295||e<1)return BigInteger.ONE;var r=new BigInteger,r2=new BigInteger,g=z.convert(this),i=nbits(e)-1;g.copyTo(r);while(--i>=0){z.sqrTo(r,r2);if((e&1<<i)>0)z.mulTo(r2,g,r);else{var t=r;r=r2;r2=t}}return z.revert(r)}function bnModPowInt(e,m){var z;if(e<256||m.isEven())z=new Classic(m);else z=new Montgomery(m);return this.exp(e,z)}proto.copyTo=bnpCopyTo;proto.fromInt=bnpFromInt;proto.fromString=bnpFromString;proto.clamp=bnpClamp;proto.dlShiftTo=bnpDLShiftTo;proto.drShiftTo=bnpDRShiftTo;proto.lShiftTo=bnpLShiftTo;proto.rShiftTo=bnpRShiftTo;proto.subTo=bnpSubTo;proto.multiplyTo=bnpMultiplyTo;proto.squareTo=bnpSquareTo;proto.divRemTo=bnpDivRemTo;proto.invDigit=bnpInvDigit;proto.isEven=bnpIsEven;proto.exp=bnpExp;proto.toString=bnToString;proto.negate=bnNegate;proto.abs=bnAbs;proto.compareTo=bnCompareTo;proto.bitLength=bnBitLength;proto.mod=bnMod;proto.modPowInt=bnModPowInt;function bnClone(){var r=new BigInteger;this.copyTo(r);return r}function bnIntValue(){if(this.s<0){if(this.t==1)return this[0]-this.DV;else if(this.t==0)return-1}else if(this.t==1)return this[0];else if(this.t==0)return 0;return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function bnByteValue(){return this.t==0?this.s:this[0]<<24>>24}function bnShortValue(){return this.t==0?this.s:this[0]<<16>>16}function bnpChunkSize(r){return Math.floor(Math.LN2*this.DB/Math.log(r))}function bnSigNum(){if(this.s<0)return-1;else if(this.t<=0||this.t==1&&this[0]<=0)return 0;else return 1}function bnpToRadix(b){if(b==null)b=10;if(this.signum()==0||b<2||b>36)return"0";var cs=this.chunkSize(b);var a=Math.pow(b,cs);var d=nbv(a),y=new BigInteger,z=new BigInteger,r="";this.divRemTo(d,y,z);while(y.signum()>0){r=(a+z.intValue()).toString(b).substr(1)+r;y.divRemTo(d,y,z)}return z.intValue().toString(b)+r}function bnpFromRadix(s,b){var self=this;self.fromInt(0);if(b==null)b=10;var cs=self.chunkSize(b);var d=Math.pow(b,cs),mi=false,j=0,w=0;for(var i=0;i<s.length;++i){var x=intAt(s,i);if(x<0){if(s.charAt(i)=="-"&&self.signum()==0)mi=true;continue}w=b*w+x;if(++j>=cs){self.dMultiply(d);self.dAddOffset(w,0);j=0;w=0}}if(j>0){self.dMultiply(Math.pow(b,j));self.dAddOffset(w,0)}if(mi)BigInteger.ZERO.subTo(self,self)}function bnpFromNumber(a,b,c){var self=this;if("number"==typeof b){if(a<2)self.fromInt(1);else{self.fromNumber(a,c);if(!self.testBit(a-1))self.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,self);if(self.isEven())self.dAddOffset(1,0);while(!self.isProbablePrime(b)){self.dAddOffset(2,0);if(self.bitLength()>a)self.subTo(BigInteger.ONE.shiftLeft(a-1),self)}}}else{var x=new Array,t=a&7;x.length=(a>>3)+1;b.nextBytes(x);if(t>0)x[0]&=(1<<t)-1;else x[0]=0;self.fromString(x,256)}}function bnToByteArray(){var self=this;var i=self.t,r=new Array;r[0]=self.s;var p=self.DB-i*self.DB%8,d,k=0;if(i-->0){if(p<self.DB&&(d=self[i]>>p)!=(self.s&self.DM)>>p)r[k++]=d|self.s<<self.DB-p;while(i>=0){if(p<8){d=(self[i]&(1<<p)-1)<<8-p;d|=self[--i]>>(p+=self.DB-8)}else{d=self[i]>>(p-=8)&255;if(p<=0){p+=self.DB;--i}}if((d&128)!=0)d|=-256;if(k===0&&(self.s&128)!=(d&128))++k;if(k>0||d!=self.s)r[k++]=d}}return r}function bnEquals(a){return this.compareTo(a)==0}function bnMin(a){return this.compareTo(a)<0?this:a}function bnMax(a){return this.compareTo(a)>0?this:a}function bnpBitwiseTo(a,op,r){var self=this;var i,f,m=Math.min(a.t,self.t);for(i=0;i<m;++i)r[i]=op(self[i],a[i]);if(a.t<self.t){f=a.s&self.DM;for(i=m;i<self.t;++i)r[i]=op(self[i],f);r.t=self.t}else{f=self.s&self.DM;for(i=m;i<a.t;++i)r[i]=op(f,a[i]);r.t=a.t}r.s=op(self.s,a.s);r.clamp()}function op_and(x,y){return x&y}function bnAnd(a){var r=new BigInteger;this.bitwiseTo(a,op_and,r);return r}function op_or(x,y){return x|y}function bnOr(a){var r=new BigInteger;this.bitwiseTo(a,op_or,r);return r}function op_xor(x,y){return x^y}function bnXor(a){var r=new BigInteger;this.bitwiseTo(a,op_xor,r);return r}function op_andnot(x,y){return x&~y}function bnAndNot(a){var r=new BigInteger;this.bitwiseTo(a,op_andnot,r);return r}function bnNot(){var r=new BigInteger;for(var i=0;i<this.t;++i)r[i]=this.DM&~this[i];r.t=this.t;r.s=~this.s;return r}function bnShiftLeft(n){var r=new BigInteger;if(n<0)this.rShiftTo(-n,r);else this.lShiftTo(n,r);return r}function bnShiftRight(n){var r=new BigInteger;if(n<0)this.lShiftTo(-n,r);else this.rShiftTo(n,r);return r}function lbit(x){if(x==0)return-1;var r=0;if((x&65535)==0){x>>=16;r+=16}if((x&255)==0){x>>=8;r+=8}if((x&15)==0){x>>=4;r+=4}if((x&3)==0){x>>=2;r+=2}if((x&1)==0)++r;return r}function bnGetLowestSetBit(){for(var i=0;i<this.t;++i)if(this[i]!=0)return i*this.DB+lbit(this[i]);if(this.s<0)return this.t*this.DB;return-1}function cbit(x){var r=0;while(x!=0){x&=x-1;++r}return r}function bnBitCount(){var r=0,x=this.s&this.DM;for(var i=0;i<this.t;++i)r+=cbit(this[i]^x);return r}function bnTestBit(n){var j=Math.floor(n/this.DB);if(j>=this.t)return this.s!=0;return(this[j]&1<<n%this.DB)!=0}function bnpChangeBit(n,op){var r=BigInteger.ONE.shiftLeft(n);this.bitwiseTo(r,op,r);return r}function bnSetBit(n){return this.changeBit(n,op_or)}function bnClearBit(n){return this.changeBit(n,op_andnot)}function bnFlipBit(n){return this.changeBit(n,op_xor)}function bnpAddTo(a,r){var self=this;var i=0,c=0,m=Math.min(a.t,self.t);while(i<m){c+=self[i]+a[i];r[i++]=c&self.DM;c>>=self.DB}if(a.t<self.t){c+=a.s;while(i<self.t){c+=self[i];r[i++]=c&self.DM;c>>=self.DB}c+=self.s}else{c+=self.s;while(i<a.t){c+=a[i];r[i++]=c&self.DM;c>>=self.DB}c+=a.s}r.s=c<0?-1:0;if(c>0)r[i++]=c;else if(c<-1)r[i++]=self.DV+c;r.t=i;r.clamp()}function bnAdd(a){var r=new BigInteger;this.addTo(a,r);return r}function bnSubtract(a){var r=new BigInteger;this.subTo(a,r);return r}function bnMultiply(a){var r=new BigInteger;this.multiplyTo(a,r);return r}function bnSquare(){var r=new BigInteger;this.squareTo(r);return r}function bnDivide(a){var r=new BigInteger;this.divRemTo(a,r,null);return r}function bnRemainder(a){var r=new BigInteger;this.divRemTo(a,null,r);return r}function bnDivideAndRemainder(a){var q=new BigInteger,r=new BigInteger;this.divRemTo(a,q,r);return new Array(q,r)}function bnpDMultiply(n){this[this.t]=this.am(0,n-1,this,0,0,this.t);++this.t;this.clamp()}function bnpDAddOffset(n,w){if(n==0)return;while(this.t<=w)this[this.t++]=0;this[w]+=n;while(this[w]>=this.DV){this[w]-=this.DV;if(++w>=this.t)this[this.t++]=0;++this[w]}}function NullExp(){}function nNop(x){return x}function nMulTo(x,y,r){x.multiplyTo(y,r)}function nSqrTo(x,r){x.squareTo(r)}NullExp.prototype.convert=nNop;NullExp.prototype.revert=nNop;NullExp.prototype.mulTo=nMulTo;NullExp.prototype.sqrTo=nSqrTo;function bnPow(e){return this.exp(e,new NullExp)}function bnpMultiplyLowerTo(a,n,r){var i=Math.min(this.t+a.t,n);r.s=0;r.t=i;while(i>0)r[--i]=0;var j;for(j=r.t-this.t;i<j;++i)r[i+this.t]=this.am(0,a[i],r,i,0,this.t);for(j=Math.min(a.t,n);i<j;++i)this.am(0,a[i],r,i,0,n-i);r.clamp()}function bnpMultiplyUpperTo(a,n,r){--n;var i=r.t=this.t+a.t-n;r.s=0;while(--i>=0)r[i]=0;for(i=Math.max(n-this.t,0);i<a.t;++i)r[this.t+i-n]=this.am(n-i,a[i],r,0,0,this.t+i-n);r.clamp();r.drShiftTo(1,r)}function Barrett(m){this.r2=new BigInteger;this.q3=new BigInteger;BigInteger.ONE.dlShiftTo(2*m.t,this.r2);this.mu=this.r2.divide(m);this.m=m}function barrettConvert(x){if(x.s<0||x.t>2*this.m.t)return x.mod(this.m);else if(x.compareTo(this.m)<0)return x;else{var r=new BigInteger;x.copyTo(r);this.reduce(r);return r}}function barrettRevert(x){return x}function barrettReduce(x){var self=this;x.drShiftTo(self.m.t-1,self.r2);if(x.t>self.m.t+1){x.t=self.m.t+1;x.clamp()}self.mu.multiplyUpperTo(self.r2,self.m.t+1,self.q3);self.m.multiplyLowerTo(self.q3,self.m.t+1,self.r2);while(x.compareTo(self.r2)<0)x.dAddOffset(1,self.m.t+1);x.subTo(self.r2,x);while(x.compareTo(self.m)>=0)x.subTo(self.m,x)}function barrettSqrTo(x,r){x.squareTo(r);this.reduce(r)}function barrettMulTo(x,y,r){x.multiplyTo(y,r);this.reduce(r)}Barrett.prototype.convert=barrettConvert;Barrett.prototype.revert=barrettRevert;Barrett.prototype.reduce=barrettReduce;Barrett.prototype.mulTo=barrettMulTo;Barrett.prototype.sqrTo=barrettSqrTo;function bnModPow(e,m){var i=e.bitLength(),k,r=nbv(1),z;if(i<=0)return r;else if(i<18)k=1;else if(i<48)k=3;else if(i<144)k=4;else if(i<768)k=5;else k=6;if(i<8)z=new Classic(m);else if(m.isEven())z=new Barrett(m);else z=new Montgomery(m);var g=new Array,n=3,k1=k-1,km=(1<<k)-1;g[1]=z.convert(this);if(k>1){var g2=new BigInteger;z.sqrTo(g[1],g2);while(n<=km){g[n]=new BigInteger;z.mulTo(g2,g[n-2],g[n]);n+=2}}var j=e.t-1,w,is1=true,r2=new BigInteger,t;i=nbits(e[j])-1;while(j>=0){if(i>=k1)w=e[j]>>i-k1&km;else{w=(e[j]&(1<<i+1)-1)<<k1-i;if(j>0)w|=e[j-1]>>this.DB+i-k1}n=k;while((w&1)==0){w>>=1;--n}if((i-=n)<0){i+=this.DB;--j}if(is1){g[w].copyTo(r);is1=false}else{while(n>1){z.sqrTo(r,r2);z.sqrTo(r2,r);n-=2}if(n>0)z.sqrTo(r,r2);else{t=r;r=r2;r2=t}z.mulTo(r2,g[w],r)}while(j>=0&&(e[j]&1<<i)==0){z.sqrTo(r,r2);t=r;r=r2;r2=t;if(--i<0){i=this.DB-1;--j}}}return z.revert(r)}function bnGCD(a){var x=this.s<0?this.negate():this.clone();var y=a.s<0?a.negate():a.clone();if(x.compareTo(y)<0){var t=x;x=y;y=t}var i=x.getLowestSetBit(),g=y.getLowestSetBit();if(g<0)return x;if(i<g)g=i;if(g>0){x.rShiftTo(g,x);y.rShiftTo(g,y)}while(x.signum()>0){if((i=x.getLowestSetBit())>0)x.rShiftTo(i,x);if((i=y.getLowestSetBit())>0)y.rShiftTo(i,y);if(x.compareTo(y)>=0){x.subTo(y,x);x.rShiftTo(1,x)}else{y.subTo(x,y);y.rShiftTo(1,y)}}if(g>0)y.lShiftTo(g,y);return y}function bnpModInt(n){if(n<=0)return 0;var d=this.DV%n,r=this.s<0?n-1:0;if(this.t>0)if(d==0)r=this[0]%n;else for(var i=this.t-1;i>=0;--i)r=(d*r+this[i])%n;return r}function bnModInverse(m){var ac=m.isEven();if(this.isEven()&&ac||m.signum()==0)return BigInteger.ZERO;var u=m.clone(),v=this.clone();var a=nbv(1),b=nbv(0),c=nbv(0),d=nbv(1);while(u.signum()!=0){while(u.isEven()){u.rShiftTo(1,u);if(ac){if(!a.isEven()||!b.isEven()){a.addTo(this,a);b.subTo(m,b)}a.rShiftTo(1,a)}else if(!b.isEven())b.subTo(m,b);b.rShiftTo(1,b)}while(v.isEven()){v.rShiftTo(1,v);if(ac){if(!c.isEven()||!d.isEven()){c.addTo(this,c);d.subTo(m,d)}c.rShiftTo(1,c)}else if(!d.isEven())d.subTo(m,d);d.rShiftTo(1,d)}if(u.compareTo(v)>=0){u.subTo(v,u);if(ac)a.subTo(c,a);b.subTo(d,b)}else{v.subTo(u,v);if(ac)c.subTo(a,c);d.subTo(b,d)}}if(v.compareTo(BigInteger.ONE)!=0)return BigInteger.ZERO;if(d.compareTo(m)>=0)return d.subtract(m);if(d.signum()<0)d.addTo(m,d);else return d;if(d.signum()<0)return d.add(m);else return d}proto.chunkSize=bnpChunkSize;proto.toRadix=bnpToRadix;proto.fromRadix=bnpFromRadix;proto.fromNumber=bnpFromNumber;proto.bitwiseTo=bnpBitwiseTo;proto.changeBit=bnpChangeBit;proto.addTo=bnpAddTo;proto.dMultiply=bnpDMultiply;proto.dAddOffset=bnpDAddOffset;proto.multiplyLowerTo=bnpMultiplyLowerTo;proto.multiplyUpperTo=bnpMultiplyUpperTo;proto.modInt=bnpModInt;proto.clone=bnClone;proto.intValue=bnIntValue;proto.byteValue=bnByteValue;proto.shortValue=bnShortValue;proto.signum=bnSigNum;proto.toByteArray=bnToByteArray;proto.equals=bnEquals;proto.min=bnMin;proto.max=bnMax;proto.and=bnAnd;proto.or=bnOr;proto.xor=bnXor;proto.andNot=bnAndNot;proto.not=bnNot;proto.shiftLeft=bnShiftLeft;proto.shiftRight=bnShiftRight;proto.getLowestSetBit=bnGetLowestSetBit;proto.bitCount=bnBitCount;proto.testBit=bnTestBit;proto.setBit=bnSetBit;proto.clearBit=bnClearBit;proto.flipBit=bnFlipBit;proto.add=bnAdd;proto.subtract=bnSubtract;proto.multiply=bnMultiply;proto.divide=bnDivide;proto.remainder=bnRemainder;proto.divideAndRemainder=bnDivideAndRemainder;proto.modPow=bnModPow;proto.modInverse=bnModInverse;proto.pow=bnPow;proto.gcd=bnGCD;proto.square=bnSquare;BigInteger.ZERO=nbv(0);BigInteger.ONE=nbv(1);BigInteger.valueOf=nbv;module.exports=BigInteger},{"../package.json":11,assert:1}],10:[function(require,module,exports){(function(Buffer){var assert=require("assert");var BigInteger=require("./bigi");BigInteger.fromByteArrayUnsigned=function(byteArray){if(byteArray[0]&128){return new BigInteger([0].concat(byteArray))}return new BigInteger(byteArray)};BigInteger.prototype.toByteArrayUnsigned=function(){var byteArray=this.toByteArray();return byteArray[0]===0?byteArray.slice(1):byteArray};BigInteger.fromDERInteger=function(byteArray){return new BigInteger(byteArray)};BigInteger.prototype.toDERInteger=BigInteger.prototype.toByteArray;BigInteger.fromBuffer=function(buffer){if(buffer[0]&128){var byteArray=Array.prototype.slice.call(buffer);return new BigInteger([0].concat(byteArray))}return new BigInteger(buffer)};BigInteger.fromHex=function(hex){if(hex==="")return BigInteger.ZERO;assert.equal(hex,hex.match(/^[A-Fa-f0-9]+/),"Invalid hex string");assert.equal(hex.length%2,0,"Incomplete hex");return new BigInteger(hex,16)
};BigInteger.prototype.toBuffer=function(size){var byteArray=this.toByteArrayUnsigned();var zeros=[];var padding=size-byteArray.length;while(zeros.length<padding)zeros.push(0);return new Buffer(zeros.concat(byteArray))};BigInteger.prototype.toHex=function(size){return this.toBuffer(size).toString("hex")}}).call(this,require("buffer").Buffer)},{"./bigi":9,assert:1,buffer:4}],11:[function(require,module,exports){module.exports={name:"bigi",version:"1.2.1",description:"Big integers.",keywords:["cryptography","math","bitcoin","arbitrary","precision","arithmetic","big","integer","int","number","biginteger","bigint","bignumber","decimal","float"],devDependencies:{mocha:"^1.20.1",jshint:"^2.5.1",coveralls:"^2.10.0",istanbul:"^0.2.11"},repository:{url:"https://github.com/cryptocoinjs/bigi",type:"git"},main:"./lib/index.js",scripts:{test:"./node_modules/.bin/_mocha -- test/*.js",jshint:"./node_modules/.bin/jshint --config jshint.json lib/*.js ; true",unit:"./node_modules/.bin/mocha",coverage:"./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js",coveralls:"npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info"},dependencies:{},testling:{files:"test/*.js",harness:"mocha",browsers:["ie/9..latest","firefox/latest","chrome/latest","safari/6.0..latest","iphone/6.0..latest","android-browser/4.2..latest"]},readme:"bigi\n======\n\n[![build status](https://secure.travis-ci.org/cryptocoinjs/bigi.png)](http://travis-ci.org/cryptocoinjs/bigi)\n[![Coverage Status](https://img.shields.io/coveralls/cryptocoinjs/bigi.svg)](https://coveralls.io/r/cryptocoinjs/bigi)\n[![Version](http://img.shields.io/npm/v/bigi.svg)](https://www.npmjs.org/package/bigi)\n\n[![browser support](https://ci.testling.com/cryptocoinjs/bigi.png)](https://ci.testling.com/cryptocoinjs/bigi)\n\nJavaScript library to manipulate big integers. Based on `jsbn` made by [Tom Wu](http://www-cs-students.stanford.edu/~tjw/jsbn/)\n\nOfficial documentation: \n\nhttp://cryptocoinjs.com/modules/misc/bigi/",readmeFilename:"README.md",bugs:{url:"https://github.com/cryptocoinjs/bigi/issues"},homepage:"https://github.com/cryptocoinjs/bigi",_id:"bigi@1.2.1",_from:"bigi@"}},{}],bigi:[function(require,module,exports){var BigInteger=require("./bigi");require("./convert");BigInt = BigInteger},{"./bigi":9,"./convert":10}]},{},[])("bigi")});

// BITCOIN

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Bitcoin=e()}}(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){var util=require("util/");var pSlice=Array.prototype.slice;var hasOwn=Object.prototype.hasOwnProperty;var assert=module.exports=ok;assert.AssertionError=function AssertionError(options){this.name="AssertionError";this.actual=options.actual;this.expected=options.expected;this.operator=options.operator;if(options.message){this.message=options.message;this.generatedMessage=false}else{this.message=getMessage(this);this.generatedMessage=true}var stackStartFunction=options.stackStartFunction||fail;if(Error.captureStackTrace){Error.captureStackTrace(this,stackStartFunction)}else{var err=new Error;if(err.stack){var out=err.stack;var fn_name=stackStartFunction.name;var idx=out.indexOf("\n"+fn_name);if(idx>=0){var next_line=out.indexOf("\n",idx+1);out=out.substring(next_line+1)}this.stack=out}}};util.inherits(assert.AssertionError,Error);function replacer(key,value){if(util.isUndefined(value)){return""+value}if(util.isNumber(value)&&(isNaN(value)||!isFinite(value))){return value.toString()}if(util.isFunction(value)||util.isRegExp(value)){return value.toString()}return value}function truncate(s,n){if(util.isString(s)){return s.length<n?s:s.slice(0,n)}else{return s}}function getMessage(self){return truncate(JSON.stringify(self.actual,replacer),128)+" "+self.operator+" "+truncate(JSON.stringify(self.expected,replacer),128)}function fail(actual,expected,message,operator,stackStartFunction){throw new assert.AssertionError({message:message,actual:actual,expected:expected,operator:operator,stackStartFunction:stackStartFunction})}assert.fail=fail;function ok(value,message){if(!value)fail(value,true,message,"==",assert.ok)}assert.ok=ok;assert.equal=function equal(actual,expected,message){if(actual!=expected)fail(actual,expected,message,"==",assert.equal)};assert.notEqual=function notEqual(actual,expected,message){if(actual==expected){fail(actual,expected,message,"!=",assert.notEqual)}};assert.deepEqual=function deepEqual(actual,expected,message){if(!_deepEqual(actual,expected)){fail(actual,expected,message,"deepEqual",assert.deepEqual)}};function _deepEqual(actual,expected){if(actual===expected){return true}else if(util.isBuffer(actual)&&util.isBuffer(expected)){if(actual.length!=expected.length)return false;for(var i=0;i<actual.length;i++){if(actual[i]!==expected[i])return false}return true}else if(util.isDate(actual)&&util.isDate(expected)){return actual.getTime()===expected.getTime()}else if(util.isRegExp(actual)&&util.isRegExp(expected)){return actual.source===expected.source&&actual.global===expected.global&&actual.multiline===expected.multiline&&actual.lastIndex===expected.lastIndex&&actual.ignoreCase===expected.ignoreCase}else if(!util.isObject(actual)&&!util.isObject(expected)){return actual==expected}else{return objEquiv(actual,expected)}}function isArguments(object){return Object.prototype.toString.call(object)=="[object Arguments]"}function objEquiv(a,b){if(util.isNullOrUndefined(a)||util.isNullOrUndefined(b))return false;if(a.prototype!==b.prototype)return false;if(isArguments(a)){if(!isArguments(b)){return false}a=pSlice.call(a);b=pSlice.call(b);return _deepEqual(a,b)}try{var ka=objectKeys(a),kb=objectKeys(b),key,i}catch(e){return false}if(ka.length!=kb.length)return false;ka.sort();kb.sort();for(i=ka.length-1;i>=0;i--){if(ka[i]!=kb[i])return false}for(i=ka.length-1;i>=0;i--){key=ka[i];if(!_deepEqual(a[key],b[key]))return false}return true}assert.notDeepEqual=function notDeepEqual(actual,expected,message){if(_deepEqual(actual,expected)){fail(actual,expected,message,"notDeepEqual",assert.notDeepEqual)}};assert.strictEqual=function strictEqual(actual,expected,message){if(actual!==expected){fail(actual,expected,message,"===",assert.strictEqual)}};assert.notStrictEqual=function notStrictEqual(actual,expected,message){if(actual===expected){fail(actual,expected,message,"!==",assert.notStrictEqual)}};function expectedException(actual,expected){if(!actual||!expected){return false}if(Object.prototype.toString.call(expected)=="[object RegExp]"){return expected.test(actual)}else if(actual instanceof expected){return true}else if(expected.call({},actual)===true){return true}return false}function _throws(shouldThrow,block,expected,message){var actual;if(util.isString(expected)){message=expected;expected=null}try{block()}catch(e){actual=e}message=(expected&&expected.name?" ("+expected.name+").":".")+(message?" "+message:".");if(shouldThrow&&!actual){fail(actual,expected,"Missing expected exception"+message)}if(!shouldThrow&&expectedException(actual,expected)){fail(actual,expected,"Got unwanted exception"+message)}if(shouldThrow&&actual&&expected&&!expectedException(actual,expected)||!shouldThrow&&actual){throw actual}}assert.throws=function(block,error,message){_throws.apply(this,[true].concat(pSlice.call(arguments)))};assert.doesNotThrow=function(block,message){_throws.apply(this,[false].concat(pSlice.call(arguments)))};assert.ifError=function(err){if(err){throw err}};var objectKeys=Object.keys||function(obj){var keys=[];for(var key in obj){if(hasOwn.call(obj,key))keys.push(key)}return keys}},{"util/":3}],2:[function(require,module,exports){module.exports=function isBuffer(arg){return arg&&typeof arg==="object"&&typeof arg.copy==="function"&&typeof arg.fill==="function"&&typeof arg.readUInt8==="function"}},{}],3:[function(require,module,exports){(function(process,global){var formatRegExp=/%[sdj%]/g;exports.format=function(f){if(!isString(f)){var objects=[];for(var i=0;i<arguments.length;i++){objects.push(inspect(arguments[i]))}return objects.join(" ")}var i=1;var args=arguments;var len=args.length;var str=String(f).replace(formatRegExp,function(x){if(x==="%%")return"%";if(i>=len)return x;switch(x){case"%s":return String(args[i++]);case"%d":return Number(args[i++]);case"%j":try{return JSON.stringify(args[i++])}catch(_){return"[Circular]"}default:return x}});for(var x=args[i];i<len;x=args[++i]){if(isNull(x)||!isObject(x)){str+=" "+x}else{str+=" "+inspect(x)}}return str};exports.deprecate=function(fn,msg){if(isUndefined(global.process)){return function(){return exports.deprecate(fn,msg).apply(this,arguments)}}if(process.noDeprecation===true){return fn}var warned=false;function deprecated(){if(!warned){if(process.throwDeprecation){throw new Error(msg)}else if(process.traceDeprecation){console.trace(msg)}else{console.error(msg)}warned=true}return fn.apply(this,arguments)}return deprecated};var debugs={};var debugEnviron;exports.debuglog=function(set){if(isUndefined(debugEnviron))debugEnviron=process.env.NODE_DEBUG||"";set=set.toUpperCase();if(!debugs[set]){if(new RegExp("\\b"+set+"\\b","i").test(debugEnviron)){var pid=process.pid;debugs[set]=function(){var msg=exports.format.apply(exports,arguments);console.error("%s %d: %s",set,pid,msg)}}else{debugs[set]=function(){}}}return debugs[set]};function inspect(obj,opts){var ctx={seen:[],stylize:stylizeNoColor};if(arguments.length>=3)ctx.depth=arguments[2];if(arguments.length>=4)ctx.colors=arguments[3];if(isBoolean(opts)){ctx.showHidden=opts}else if(opts){exports._extend(ctx,opts)}if(isUndefined(ctx.showHidden))ctx.showHidden=false;if(isUndefined(ctx.depth))ctx.depth=2;if(isUndefined(ctx.colors))ctx.colors=false;if(isUndefined(ctx.customInspect))ctx.customInspect=true;if(ctx.colors)ctx.stylize=stylizeWithColor;return formatValue(ctx,obj,ctx.depth)}exports.inspect=inspect;inspect.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]};inspect.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"};function stylizeWithColor(str,styleType){var style=inspect.styles[styleType];if(style){return"["+inspect.colors[style][0]+"m"+str+"["+inspect.colors[style][1]+"m"}else{return str}}function stylizeNoColor(str,styleType){return str}function arrayToHash(array){var hash={};array.forEach(function(val,idx){hash[val]=true});return hash}function formatValue(ctx,value,recurseTimes){if(ctx.customInspect&&value&&isFunction(value.inspect)&&value.inspect!==exports.inspect&&!(value.constructor&&value.constructor.prototype===value)){var ret=value.inspect(recurseTimes,ctx);if(!isString(ret)){ret=formatValue(ctx,ret,recurseTimes)}return ret}var primitive=formatPrimitive(ctx,value);if(primitive){return primitive}var keys=Object.keys(value);var visibleKeys=arrayToHash(keys);if(ctx.showHidden){keys=Object.getOwnPropertyNames(value)}if(isError(value)&&(keys.indexOf("message")>=0||keys.indexOf("description")>=0)){return formatError(value)}if(keys.length===0){if(isFunction(value)){var name=value.name?": "+value.name:"";return ctx.stylize("[Function"+name+"]","special")}if(isRegExp(value)){return ctx.stylize(RegExp.prototype.toString.call(value),"regexp")}if(isDate(value)){return ctx.stylize(Date.prototype.toString.call(value),"date")}if(isError(value)){return formatError(value)}}var base="",array=false,braces=["{","}"];if(isArray(value)){array=true;braces=["[","]"]}if(isFunction(value)){var n=value.name?": "+value.name:"";base=" [Function"+n+"]"}if(isRegExp(value)){base=" "+RegExp.prototype.toString.call(value)}if(isDate(value)){base=" "+Date.prototype.toUTCString.call(value)}if(isError(value)){base=" "+formatError(value)}if(keys.length===0&&(!array||value.length==0)){return braces[0]+base+braces[1]}if(recurseTimes<0){if(isRegExp(value)){return ctx.stylize(RegExp.prototype.toString.call(value),"regexp")}else{return ctx.stylize("[Object]","special")}}ctx.seen.push(value);var output;if(array){output=formatArray(ctx,value,recurseTimes,visibleKeys,keys)}else{output=keys.map(function(key){return formatProperty(ctx,value,recurseTimes,visibleKeys,key,array)})}ctx.seen.pop();return reduceToSingleString(output,base,braces)}function formatPrimitive(ctx,value){if(isUndefined(value))return ctx.stylize("undefined","undefined");if(isString(value)){var simple="'"+JSON.stringify(value).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return ctx.stylize(simple,"string")}if(isNumber(value))return ctx.stylize(""+value,"number");if(isBoolean(value))return ctx.stylize(""+value,"boolean");if(isNull(value))return ctx.stylize("null","null")}function formatError(value){return"["+Error.prototype.toString.call(value)+"]"}function formatArray(ctx,value,recurseTimes,visibleKeys,keys){var output=[];for(var i=0,l=value.length;i<l;++i){if(hasOwnProperty(value,String(i))){output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,String(i),true))}else{output.push("")}}keys.forEach(function(key){if(!key.match(/^\d+$/)){output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,key,true))}});return output}function formatProperty(ctx,value,recurseTimes,visibleKeys,key,array){var name,str,desc;desc=Object.getOwnPropertyDescriptor(value,key)||{value:value[key]};if(desc.get){if(desc.set){str=ctx.stylize("[Getter/Setter]","special")}else{str=ctx.stylize("[Getter]","special")}}else{if(desc.set){str=ctx.stylize("[Setter]","special")}}if(!hasOwnProperty(visibleKeys,key)){name="["+key+"]"}if(!str){if(ctx.seen.indexOf(desc.value)<0){if(isNull(recurseTimes)){str=formatValue(ctx,desc.value,null)}else{str=formatValue(ctx,desc.value,recurseTimes-1)}if(str.indexOf("\n")>-1){if(array){str=str.split("\n").map(function(line){return"  "+line}).join("\n").substr(2)}else{str="\n"+str.split("\n").map(function(line){return"   "+line}).join("\n")}}}else{str=ctx.stylize("[Circular]","special")}}if(isUndefined(name)){if(array&&key.match(/^\d+$/)){return str}name=JSON.stringify(""+key);if(name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)){name=name.substr(1,name.length-2);name=ctx.stylize(name,"name")}else{name=name.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'");name=ctx.stylize(name,"string")}}return name+": "+str}function reduceToSingleString(output,base,braces){var numLinesEst=0;var length=output.reduce(function(prev,cur){numLinesEst++;if(cur.indexOf("\n")>=0)numLinesEst++;return prev+cur.replace(/\u001b\[\d\d?m/g,"").length+1},0);if(length>60){return braces[0]+(base===""?"":base+"\n ")+" "+output.join(",\n  ")+" "+braces[1]}return braces[0]+base+" "+output.join(", ")+" "+braces[1]}function isArray(ar){return Array.isArray(ar)}exports.isArray=isArray;function isBoolean(arg){return typeof arg==="boolean"}exports.isBoolean=isBoolean;function isNull(arg){return arg===null}exports.isNull=isNull;function isNullOrUndefined(arg){return arg==null}exports.isNullOrUndefined=isNullOrUndefined;function isNumber(arg){return typeof arg==="number"}exports.isNumber=isNumber;function isString(arg){return typeof arg==="string"}exports.isString=isString;function isSymbol(arg){return typeof arg==="symbol"}exports.isSymbol=isSymbol;function isUndefined(arg){return arg===void 0}exports.isUndefined=isUndefined;function isRegExp(re){return isObject(re)&&objectToString(re)==="[object RegExp]"}exports.isRegExp=isRegExp;function isObject(arg){return typeof arg==="object"&&arg!==null}exports.isObject=isObject;function isDate(d){return isObject(d)&&objectToString(d)==="[object Date]"}exports.isDate=isDate;function isError(e){return isObject(e)&&(objectToString(e)==="[object Error]"||e instanceof Error)}exports.isError=isError;function isFunction(arg){return typeof arg==="function"}exports.isFunction=isFunction;function isPrimitive(arg){return arg===null||typeof arg==="boolean"||typeof arg==="number"||typeof arg==="string"||typeof arg==="symbol"||typeof arg==="undefined"}exports.isPrimitive=isPrimitive;exports.isBuffer=require("./support/isBuffer");function objectToString(o){return Object.prototype.toString.call(o)}function pad(n){return n<10?"0"+n.toString(10):n.toString(10)}var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function timestamp(){var d=new Date;var time=[pad(d.getHours()),pad(d.getMinutes()),pad(d.getSeconds())].join(":");return[d.getDate(),months[d.getMonth()],time].join(" ")}exports.log=function(){console.log("%s - %s",timestamp(),exports.format.apply(exports,arguments))};exports.inherits=require("inherits");exports._extend=function(origin,add){if(!add||!isObject(add))return origin;var keys=Object.keys(add);var i=keys.length;while(i--){origin[keys[i]]=add[keys[i]]}return origin};function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}}).call(this,require("_process"),typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./support/isBuffer":2,_process:21,inherits:20}],4:[function(require,module,exports){var base64=require("base64-js");var ieee754=require("ieee754");exports.Buffer=Buffer;exports.SlowBuffer=Buffer;exports.INSPECT_MAX_BYTES=50;Buffer.poolSize=8192;var TYPED_ARRAY_SUPPORT=function(){try{var buf=new ArrayBuffer(0);var arr=new Uint8Array(buf);arr.foo=function(){return 42};return 42===arr.foo()&&typeof arr.subarray==="function"&&new Uint8Array(1).subarray(1,1).byteLength===0}catch(e){return false}}();function Buffer(subject,encoding,noZero){if(!(this instanceof Buffer))return new Buffer(subject,encoding,noZero);var type=typeof subject;var length;if(type==="number")length=subject>0?subject>>>0:0;else if(type==="string"){if(encoding==="base64")subject=base64clean(subject);length=Buffer.byteLength(subject,encoding)}else if(type==="object"&&subject!==null){if(subject.type==="Buffer"&&isArray(subject.data))subject=subject.data;length=+subject.length>0?Math.floor(+subject.length):0}else throw new Error("First argument needs to be a number, array or string.");var buf;if(TYPED_ARRAY_SUPPORT){buf=Buffer._augment(new Uint8Array(length))}else{buf=this;buf.length=length;buf._isBuffer=true}var i;if(TYPED_ARRAY_SUPPORT&&typeof subject.byteLength==="number"){buf._set(subject)}else if(isArrayish(subject)){if(Buffer.isBuffer(subject)){for(i=0;i<length;i++)buf[i]=subject.readUInt8(i)}else{for(i=0;i<length;i++)buf[i]=(subject[i]%256+256)%256}}else if(type==="string"){buf.write(subject,0,encoding)}else if(type==="number"&&!TYPED_ARRAY_SUPPORT&&!noZero){for(i=0;i<length;i++){buf[i]=0}}return buf}Buffer.isEncoding=function(encoding){switch(String(encoding).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return true;default:return false}};Buffer.isBuffer=function(b){return!!(b!=null&&b._isBuffer)};Buffer.byteLength=function(str,encoding){var ret;str=str.toString();switch(encoding||"utf8"){case"hex":ret=str.length/2;break;case"utf8":case"utf-8":ret=utf8ToBytes(str).length;break;case"ascii":case"binary":case"raw":ret=str.length;break;case"base64":ret=base64ToBytes(str).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":ret=str.length*2;break;default:throw new Error("Unknown encoding")}return ret};Buffer.concat=function(list,totalLength){assert(isArray(list),"Usage: Buffer.concat(list[, length])");if(list.length===0){return new Buffer(0)}else if(list.length===1){return list[0]}var i;if(totalLength===undefined){totalLength=0;for(i=0;i<list.length;i++){totalLength+=list[i].length}}var buf=new Buffer(totalLength);var pos=0;for(i=0;i<list.length;i++){var item=list[i];item.copy(buf,pos);pos+=item.length}return buf};Buffer.compare=function(a,b){assert(Buffer.isBuffer(a)&&Buffer.isBuffer(b),"Arguments must be Buffers");var x=a.length;var y=b.length;for(var i=0,len=Math.min(x,y);i<len&&a[i]===b[i];i++){}if(i!==len){x=a[i];y=b[i]}if(x<y){return-1}if(y<x){return 1}return 0};function hexWrite(buf,string,offset,length){offset=Number(offset)||0;var remaining=buf.length-offset;if(!length){length=remaining}else{length=Number(length);if(length>remaining){length=remaining}}var strLen=string.length;assert(strLen%2===0,"Invalid hex string");if(length>strLen/2){length=strLen/2}for(var i=0;i<length;i++){var byte=parseInt(string.substr(i*2,2),16);assert(!isNaN(byte),"Invalid hex string");buf[offset+i]=byte}return i}function utf8Write(buf,string,offset,length){var charsWritten=blitBuffer(utf8ToBytes(string),buf,offset,length);return charsWritten}function asciiWrite(buf,string,offset,length){var charsWritten=blitBuffer(asciiToBytes(string),buf,offset,length);return charsWritten}function binaryWrite(buf,string,offset,length){return asciiWrite(buf,string,offset,length)}function base64Write(buf,string,offset,length){var charsWritten=blitBuffer(base64ToBytes(string),buf,offset,length);return charsWritten}function utf16leWrite(buf,string,offset,length){var charsWritten=blitBuffer(utf16leToBytes(string),buf,offset,length);return charsWritten}Buffer.prototype.write=function(string,offset,length,encoding){if(isFinite(offset)){if(!isFinite(length)){encoding=length;length=undefined}}else{var swap=encoding;encoding=offset;offset=length;length=swap}offset=Number(offset)||0;var remaining=this.length-offset;if(!length){length=remaining}else{length=Number(length);if(length>remaining){length=remaining}}encoding=String(encoding||"utf8").toLowerCase();var ret;switch(encoding){case"hex":ret=hexWrite(this,string,offset,length);break;case"utf8":case"utf-8":ret=utf8Write(this,string,offset,length);break;case"ascii":ret=asciiWrite(this,string,offset,length);break;case"binary":ret=binaryWrite(this,string,offset,length);break;case"base64":ret=base64Write(this,string,offset,length);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":ret=utf16leWrite(this,string,offset,length);break;default:throw new Error("Unknown encoding")}return ret};Buffer.prototype.toString=function(encoding,start,end){var self=this;encoding=String(encoding||"utf8").toLowerCase();start=Number(start)||0;end=end===undefined?self.length:Number(end);if(end===start)return"";var ret;switch(encoding){case"hex":ret=hexSlice(self,start,end);break;case"utf8":case"utf-8":ret=utf8Slice(self,start,end);break;case"ascii":ret=asciiSlice(self,start,end);break;case"binary":ret=binarySlice(self,start,end);break;case"base64":ret=base64Slice(self,start,end);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":ret=utf16leSlice(self,start,end);break;default:throw new Error("Unknown encoding")}return ret};Buffer.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};Buffer.prototype.equals=function(b){assert(Buffer.isBuffer(b),"Argument must be a Buffer");return Buffer.compare(this,b)===0};Buffer.prototype.compare=function(b){assert(Buffer.isBuffer(b),"Argument must be a Buffer");return Buffer.compare(this,b)};Buffer.prototype.copy=function(target,target_start,start,end){var source=this;if(!start)start=0;if(!end&&end!==0)end=this.length;if(!target_start)target_start=0;if(end===start)return;if(target.length===0||source.length===0)return;assert(end>=start,"sourceEnd < sourceStart");assert(target_start>=0&&target_start<target.length,"targetStart out of bounds");assert(start>=0&&start<source.length,"sourceStart out of bounds");assert(end>=0&&end<=source.length,"sourceEnd out of bounds");if(end>this.length)end=this.length;if(target.length-target_start<end-start)end=target.length-target_start+start;var len=end-start;if(len<100||!TYPED_ARRAY_SUPPORT){for(var i=0;i<len;i++){target[i+target_start]=this[i+start]}}else{target._set(this.subarray(start,start+len),target_start)}};function base64Slice(buf,start,end){if(start===0&&end===buf.length){return base64.fromByteArray(buf)}else{return base64.fromByteArray(buf.slice(start,end))}}function utf8Slice(buf,start,end){var res="";var tmp="";end=Math.min(buf.length,end);for(var i=start;i<end;i++){if(buf[i]<=127){res+=decodeUtf8Char(tmp)+String.fromCharCode(buf[i]);tmp=""}else{tmp+="%"+buf[i].toString(16)}}return res+decodeUtf8Char(tmp)}function asciiSlice(buf,start,end){var ret="";end=Math.min(buf.length,end);for(var i=start;i<end;i++){ret+=String.fromCharCode(buf[i])}return ret}function binarySlice(buf,start,end){return asciiSlice(buf,start,end)}function hexSlice(buf,start,end){var len=buf.length;if(!start||start<0)start=0;if(!end||end<0||end>len)end=len;var out="";for(var i=start;i<end;i++){out+=toHex(buf[i])}return out}function utf16leSlice(buf,start,end){var bytes=buf.slice(start,end);var res="";for(var i=0;i<bytes.length;i+=2){res+=String.fromCharCode(bytes[i]+bytes[i+1]*256)}return res}Buffer.prototype.slice=function(start,end){var len=this.length;start=~~start;end=end===undefined?len:~~end;if(start<0){start+=len;if(start<0)start=0}else if(start>len){start=len}if(end<0){end+=len;if(end<0)end=0}else if(end>len){end=len}if(end<start)end=start;if(TYPED_ARRAY_SUPPORT){return Buffer._augment(this.subarray(start,end))}else{var sliceLen=end-start;var newBuf=new Buffer(sliceLen,undefined,true);for(var i=0;i<sliceLen;i++){newBuf[i]=this[i+start]}return newBuf}};Buffer.prototype.get=function(offset){console.log(".get() is deprecated. Access using array indexes instead.");return this.readUInt8(offset)};Buffer.prototype.set=function(v,offset){console.log(".set() is deprecated. Access using array indexes instead.");return this.writeUInt8(v,offset)};Buffer.prototype.readUInt8=function(offset,noAssert){if(!noAssert){assert(offset!==undefined&&offset!==null,"missing offset");assert(offset<this.length,"Trying to read beyond buffer length")}if(offset>=this.length)return;return this[offset]};function readUInt16(buf,offset,littleEndian,noAssert){if(!noAssert){assert(typeof littleEndian==="boolean","missing or invalid endian");assert(offset!==undefined&&offset!==null,"missing offset");assert(offset+1<buf.length,"Trying to read beyond buffer length")}var len=buf.length;if(offset>=len)return;var val;if(littleEndian){val=buf[offset];if(offset+1<len)val|=buf[offset+1]<<8}else{val=buf[offset]<<8;if(offset+1<len)val|=buf[offset+1]}return val}Buffer.prototype.readUInt16LE=function(offset,noAssert){return readUInt16(this,offset,true,noAssert)};Buffer.prototype.readUInt16BE=function(offset,noAssert){return readUInt16(this,offset,false,noAssert)};function readUInt32(buf,offset,littleEndian,noAssert){if(!noAssert){assert(typeof littleEndian==="boolean","missing or invalid endian");assert(offset!==undefined&&offset!==null,"missing offset");assert(offset+3<buf.length,"Trying to read beyond buffer length")}var len=buf.length;if(offset>=len)return;var val;if(littleEndian){if(offset+2<len)val=buf[offset+2]<<16;if(offset+1<len)val|=buf[offset+1]<<8;val|=buf[offset];if(offset+3<len)val=val+(buf[offset+3]<<24>>>0)}else{if(offset+1<len)val=buf[offset+1]<<16;if(offset+2<len)val|=buf[offset+2]<<8;if(offset+3<len)val|=buf[offset+3];val=val+(buf[offset]<<24>>>0)}return val}Buffer.prototype.readUInt32LE=function(offset,noAssert){return readUInt32(this,offset,true,noAssert)};Buffer.prototype.readUInt32BE=function(offset,noAssert){return readUInt32(this,offset,false,noAssert)};Buffer.prototype.readInt8=function(offset,noAssert){if(!noAssert){assert(offset!==undefined&&offset!==null,"missing offset");assert(offset<this.length,"Trying to read beyond buffer length")}if(offset>=this.length)return;var neg=this[offset]&128;if(neg)return(255-this[offset]+1)*-1;else return this[offset]};function readInt16(buf,offset,littleEndian,noAssert){if(!noAssert){assert(typeof littleEndian==="boolean","missing or invalid endian");assert(offset!==undefined&&offset!==null,"missing offset");assert(offset+1<buf.length,"Trying to read beyond buffer length")}var len=buf.length;if(offset>=len)return;var val=readUInt16(buf,offset,littleEndian,true);var neg=val&32768;if(neg)return(65535-val+1)*-1;else return val}Buffer.prototype.readInt16LE=function(offset,noAssert){return readInt16(this,offset,true,noAssert)};Buffer.prototype.readInt16BE=function(offset,noAssert){return readInt16(this,offset,false,noAssert)};function readInt32(buf,offset,littleEndian,noAssert){if(!noAssert){assert(typeof littleEndian==="boolean","missing or invalid endian");assert(offset!==undefined&&offset!==null,"missing offset");assert(offset+3<buf.length,"Trying to read beyond buffer length")}var len=buf.length;if(offset>=len)return;var val=readUInt32(buf,offset,littleEndian,true);var neg=val&2147483648;if(neg)return(4294967295-val+1)*-1;else return val}Buffer.prototype.readInt32LE=function(offset,noAssert){return readInt32(this,offset,true,noAssert)};Buffer.prototype.readInt32BE=function(offset,noAssert){return readInt32(this,offset,false,noAssert)};function readFloat(buf,offset,littleEndian,noAssert){if(!noAssert){assert(typeof littleEndian==="boolean","missing or invalid endian");assert(offset+3<buf.length,"Trying to read beyond buffer length")}return ieee754.read(buf,offset,littleEndian,23,4)}Buffer.prototype.readFloatLE=function(offset,noAssert){return readFloat(this,offset,true,noAssert)};Buffer.prototype.readFloatBE=function(offset,noAssert){return readFloat(this,offset,false,noAssert)};function readDouble(buf,offset,littleEndian,noAssert){if(!noAssert){assert(typeof littleEndian==="boolean","missing or invalid endian");assert(offset+7<buf.length,"Trying to read beyond buffer length")}return ieee754.read(buf,offset,littleEndian,52,8)}Buffer.prototype.readDoubleLE=function(offset,noAssert){return readDouble(this,offset,true,noAssert)};Buffer.prototype.readDoubleBE=function(offset,noAssert){return readDouble(this,offset,false,noAssert)};Buffer.prototype.writeUInt8=function(value,offset,noAssert){if(!noAssert){assert(value!==undefined&&value!==null,"missing value");assert(offset!==undefined&&offset!==null,"missing offset");assert(offset<this.length,"trying to write beyond buffer length");verifuint(value,255)}if(offset>=this.length)return;this[offset]=value;return offset+1};function writeUInt16(buf,value,offset,littleEndian,noAssert){if(!noAssert){assert(value!==undefined&&value!==null,"missing value");assert(typeof littleEndian==="boolean","missing or invalid endian");assert(offset!==undefined&&offset!==null,"missing offset");assert(offset+1<buf.length,"trying to write beyond buffer length");verifuint(value,65535)}var len=buf.length;if(offset>=len)return;for(var i=0,j=Math.min(len-offset,2);i<j;i++){buf[offset+i]=(value&255<<8*(littleEndian?i:1-i))>>>(littleEndian?i:1-i)*8}return offset+2}Buffer.prototype.writeUInt16LE=function(value,offset,noAssert){return writeUInt16(this,value,offset,true,noAssert)};Buffer.prototype.writeUInt16BE=function(value,offset,noAssert){return writeUInt16(this,value,offset,false,noAssert)};function writeUInt32(buf,value,offset,littleEndian,noAssert){if(!noAssert){assert(value!==undefined&&value!==null,"missing value");assert(typeof littleEndian==="boolean","missing or invalid endian");assert(offset!==undefined&&offset!==null,"missing offset");assert(offset+3<buf.length,"trying to write beyond buffer length");verifuint(value,4294967295)}var len=buf.length;if(offset>=len)return;for(var i=0,j=Math.min(len-offset,4);i<j;i++){buf[offset+i]=value>>>(littleEndian?i:3-i)*8&255}return offset+4}Buffer.prototype.writeUInt32LE=function(value,offset,noAssert){return writeUInt32(this,value,offset,true,noAssert)};Buffer.prototype.writeUInt32BE=function(value,offset,noAssert){return writeUInt32(this,value,offset,false,noAssert)};Buffer.prototype.writeInt8=function(value,offset,noAssert){if(!noAssert){assert(value!==undefined&&value!==null,"missing value");assert(offset!==undefined&&offset!==null,"missing offset");assert(offset<this.length,"Trying to write beyond buffer length");verifsint(value,127,-128)}if(offset>=this.length)return;if(value>=0)this.writeUInt8(value,offset,noAssert);else this.writeUInt8(255+value+1,offset,noAssert);return offset+1};function writeInt16(buf,value,offset,littleEndian,noAssert){if(!noAssert){assert(value!==undefined&&value!==null,"missing value");assert(typeof littleEndian==="boolean","missing or invalid endian");assert(offset!==undefined&&offset!==null,"missing offset");assert(offset+1<buf.length,"Trying to write beyond buffer length");verifsint(value,32767,-32768)}var len=buf.length;if(offset>=len)return;if(value>=0)writeUInt16(buf,value,offset,littleEndian,noAssert);else writeUInt16(buf,65535+value+1,offset,littleEndian,noAssert);return offset+2}Buffer.prototype.writeInt16LE=function(value,offset,noAssert){return writeInt16(this,value,offset,true,noAssert)};Buffer.prototype.writeInt16BE=function(value,offset,noAssert){return writeInt16(this,value,offset,false,noAssert)};function writeInt32(buf,value,offset,littleEndian,noAssert){if(!noAssert){assert(value!==undefined&&value!==null,"missing value");assert(typeof littleEndian==="boolean","missing or invalid endian");assert(offset!==undefined&&offset!==null,"missing offset");assert(offset+3<buf.length,"Trying to write beyond buffer length");verifsint(value,2147483647,-2147483648)}var len=buf.length;if(offset>=len)return;if(value>=0)writeUInt32(buf,value,offset,littleEndian,noAssert);else writeUInt32(buf,4294967295+value+1,offset,littleEndian,noAssert);return offset+4}Buffer.prototype.writeInt32LE=function(value,offset,noAssert){return writeInt32(this,value,offset,true,noAssert)};Buffer.prototype.writeInt32BE=function(value,offset,noAssert){return writeInt32(this,value,offset,false,noAssert)};function writeFloat(buf,value,offset,littleEndian,noAssert){if(!noAssert){assert(value!==undefined&&value!==null,"missing value");assert(typeof littleEndian==="boolean","missing or invalid endian");assert(offset!==undefined&&offset!==null,"missing offset");
assert(offset+3<buf.length,"Trying to write beyond buffer length");verifIEEE754(value,3.4028234663852886e38,-3.4028234663852886e38)}var len=buf.length;if(offset>=len)return;ieee754.write(buf,value,offset,littleEndian,23,4);return offset+4}Buffer.prototype.writeFloatLE=function(value,offset,noAssert){return writeFloat(this,value,offset,true,noAssert)};Buffer.prototype.writeFloatBE=function(value,offset,noAssert){return writeFloat(this,value,offset,false,noAssert)};function writeDouble(buf,value,offset,littleEndian,noAssert){if(!noAssert){assert(value!==undefined&&value!==null,"missing value");assert(typeof littleEndian==="boolean","missing or invalid endian");assert(offset!==undefined&&offset!==null,"missing offset");assert(offset+7<buf.length,"Trying to write beyond buffer length");verifIEEE754(value,1.7976931348623157e308,-1.7976931348623157e308)}var len=buf.length;if(offset>=len)return;ieee754.write(buf,value,offset,littleEndian,52,8);return offset+8}Buffer.prototype.writeDoubleLE=function(value,offset,noAssert){return writeDouble(this,value,offset,true,noAssert)};Buffer.prototype.writeDoubleBE=function(value,offset,noAssert){return writeDouble(this,value,offset,false,noAssert)};Buffer.prototype.fill=function(value,start,end){if(!value)value=0;if(!start)start=0;if(!end)end=this.length;assert(end>=start,"end < start");if(end===start)return;if(this.length===0)return;assert(start>=0&&start<this.length,"start out of bounds");assert(end>=0&&end<=this.length,"end out of bounds");var i;if(typeof value==="number"){for(i=start;i<end;i++){this[i]=value}}else{var bytes=utf8ToBytes(value.toString());var len=bytes.length;for(i=start;i<end;i++){this[i]=bytes[i%len]}}return this};Buffer.prototype.inspect=function(){var out=[];var len=this.length;for(var i=0;i<len;i++){out[i]=toHex(this[i]);if(i===exports.INSPECT_MAX_BYTES){out[i+1]="...";break}}return"<Buffer "+out.join(" ")+">"};Buffer.prototype.toArrayBuffer=function(){if(typeof Uint8Array!=="undefined"){if(TYPED_ARRAY_SUPPORT){return new Buffer(this).buffer}else{var buf=new Uint8Array(this.length);for(var i=0,len=buf.length;i<len;i+=1){buf[i]=this[i]}return buf.buffer}}else{throw new Error("Buffer.toArrayBuffer not supported in this browser")}};var BP=Buffer.prototype;Buffer._augment=function(arr){arr._isBuffer=true;arr._get=arr.get;arr._set=arr.set;arr.get=BP.get;arr.set=BP.set;arr.write=BP.write;arr.toString=BP.toString;arr.toLocaleString=BP.toString;arr.toJSON=BP.toJSON;arr.equals=BP.equals;arr.compare=BP.compare;arr.copy=BP.copy;arr.slice=BP.slice;arr.readUInt8=BP.readUInt8;arr.readUInt16LE=BP.readUInt16LE;arr.readUInt16BE=BP.readUInt16BE;arr.readUInt32LE=BP.readUInt32LE;arr.readUInt32BE=BP.readUInt32BE;arr.readInt8=BP.readInt8;arr.readInt16LE=BP.readInt16LE;arr.readInt16BE=BP.readInt16BE;arr.readInt32LE=BP.readInt32LE;arr.readInt32BE=BP.readInt32BE;arr.readFloatLE=BP.readFloatLE;arr.readFloatBE=BP.readFloatBE;arr.readDoubleLE=BP.readDoubleLE;arr.readDoubleBE=BP.readDoubleBE;arr.writeUInt8=BP.writeUInt8;arr.writeUInt16LE=BP.writeUInt16LE;arr.writeUInt16BE=BP.writeUInt16BE;arr.writeUInt32LE=BP.writeUInt32LE;arr.writeUInt32BE=BP.writeUInt32BE;arr.writeInt8=BP.writeInt8;arr.writeInt16LE=BP.writeInt16LE;arr.writeInt16BE=BP.writeInt16BE;arr.writeInt32LE=BP.writeInt32LE;arr.writeInt32BE=BP.writeInt32BE;arr.writeFloatLE=BP.writeFloatLE;arr.writeFloatBE=BP.writeFloatBE;arr.writeDoubleLE=BP.writeDoubleLE;arr.writeDoubleBE=BP.writeDoubleBE;arr.fill=BP.fill;arr.inspect=BP.inspect;arr.toArrayBuffer=BP.toArrayBuffer;return arr};var INVALID_BASE64_RE=/[^+\/0-9A-z]/g;function base64clean(str){str=stringtrim(str).replace(INVALID_BASE64_RE,"");while(str.length%4!==0){str=str+"="}return str}function stringtrim(str){if(str.trim)return str.trim();return str.replace(/^\s+|\s+$/g,"")}function isArray(subject){return(Array.isArray||function(subject){return Object.prototype.toString.call(subject)==="[object Array]"})(subject)}function isArrayish(subject){return isArray(subject)||Buffer.isBuffer(subject)||subject&&typeof subject==="object"&&typeof subject.length==="number"}function toHex(n){if(n<16)return"0"+n.toString(16);return n.toString(16)}function utf8ToBytes(str){var byteArray=[];for(var i=0;i<str.length;i++){var b=str.charCodeAt(i);if(b<=127){byteArray.push(b)}else{var start=i;if(b>=55296&&b<=57343)i++;var h=encodeURIComponent(str.slice(start,i+1)).substr(1).split("%");for(var j=0;j<h.length;j++){byteArray.push(parseInt(h[j],16))}}}return byteArray}function asciiToBytes(str){var byteArray=[];for(var i=0;i<str.length;i++){byteArray.push(str.charCodeAt(i)&255)}return byteArray}function utf16leToBytes(str){var c,hi,lo;var byteArray=[];for(var i=0;i<str.length;i++){c=str.charCodeAt(i);hi=c>>8;lo=c%256;byteArray.push(lo);byteArray.push(hi)}return byteArray}function base64ToBytes(str){return base64.toByteArray(str)}function blitBuffer(src,dst,offset,length){for(var i=0;i<length;i++){if(i+offset>=dst.length||i>=src.length)break;dst[i+offset]=src[i]}return i}function decodeUtf8Char(str){try{return decodeURIComponent(str)}catch(err){return String.fromCharCode(65533)}}function verifuint(value,max){assert(typeof value==="number","cannot write a non-number as a number");assert(value>=0,"specified a negative value for writing an unsigned value");assert(value<=max,"value is larger than maximum value for type");assert(Math.floor(value)===value,"value has a fractional component")}function verifsint(value,max,min){assert(typeof value==="number","cannot write a non-number as a number");assert(value<=max,"value larger than maximum allowed value");assert(value>=min,"value smaller than minimum allowed value");assert(Math.floor(value)===value,"value has a fractional component")}function verifIEEE754(value,max,min){assert(typeof value==="number","cannot write a non-number as a number");assert(value<=max,"value larger than maximum allowed value");assert(value>=min,"value smaller than minimum allowed value")}function assert(test,message){if(!test)throw new Error(message||"Failed assertion")}},{"base64-js":5,ieee754:6}],5:[function(require,module,exports){var lookup="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";(function(exports){"use strict";var Arr=typeof Uint8Array!=="undefined"?Uint8Array:Array;var PLUS="+".charCodeAt(0);var SLASH="/".charCodeAt(0);var NUMBER="0".charCodeAt(0);var LOWER="a".charCodeAt(0);var UPPER="A".charCodeAt(0);function decode(elt){var code=elt.charCodeAt(0);if(code===PLUS)return 62;if(code===SLASH)return 63;if(code<NUMBER)return-1;if(code<NUMBER+10)return code-NUMBER+26+26;if(code<UPPER+26)return code-UPPER;if(code<LOWER+26)return code-LOWER+26}function b64ToByteArray(b64){var i,j,l,tmp,placeHolders,arr;if(b64.length%4>0){throw new Error("Invalid string. Length must be a multiple of 4")}var len=b64.length;placeHolders="="===b64.charAt(len-2)?2:"="===b64.charAt(len-1)?1:0;arr=new Arr(b64.length*3/4-placeHolders);l=placeHolders>0?b64.length-4:b64.length;var L=0;function push(v){arr[L++]=v}for(i=0,j=0;i<l;i+=4,j+=3){tmp=decode(b64.charAt(i))<<18|decode(b64.charAt(i+1))<<12|decode(b64.charAt(i+2))<<6|decode(b64.charAt(i+3));push((tmp&16711680)>>16);push((tmp&65280)>>8);push(tmp&255)}if(placeHolders===2){tmp=decode(b64.charAt(i))<<2|decode(b64.charAt(i+1))>>4;push(tmp&255)}else if(placeHolders===1){tmp=decode(b64.charAt(i))<<10|decode(b64.charAt(i+1))<<4|decode(b64.charAt(i+2))>>2;push(tmp>>8&255);push(tmp&255)}return arr}function uint8ToBase64(uint8){var i,extraBytes=uint8.length%3,output="",temp,length;function encode(num){return lookup.charAt(num)}function tripletToBase64(num){return encode(num>>18&63)+encode(num>>12&63)+encode(num>>6&63)+encode(num&63)}for(i=0,length=uint8.length-extraBytes;i<length;i+=3){temp=(uint8[i]<<16)+(uint8[i+1]<<8)+uint8[i+2];output+=tripletToBase64(temp)}switch(extraBytes){case 1:temp=uint8[uint8.length-1];output+=encode(temp>>2);output+=encode(temp<<4&63);output+="==";break;case 2:temp=(uint8[uint8.length-2]<<8)+uint8[uint8.length-1];output+=encode(temp>>10);output+=encode(temp>>4&63);output+=encode(temp<<2&63);output+="=";break}return output}exports.toByteArray=b64ToByteArray;exports.fromByteArray=uint8ToBase64})(typeof exports==="undefined"?this.base64js={}:exports)},{}],6:[function(require,module,exports){exports.read=function(buffer,offset,isLE,mLen,nBytes){var e,m,eLen=nBytes*8-mLen-1,eMax=(1<<eLen)-1,eBias=eMax>>1,nBits=-7,i=isLE?nBytes-1:0,d=isLE?-1:1,s=buffer[offset+i];i+=d;e=s&(1<<-nBits)-1;s>>=-nBits;nBits+=eLen;for(;nBits>0;e=e*256+buffer[offset+i],i+=d,nBits-=8);m=e&(1<<-nBits)-1;e>>=-nBits;nBits+=mLen;for(;nBits>0;m=m*256+buffer[offset+i],i+=d,nBits-=8);if(e===0){e=1-eBias}else if(e===eMax){return m?NaN:(s?-1:1)*Infinity}else{m=m+Math.pow(2,mLen);e=e-eBias}return(s?-1:1)*m*Math.pow(2,e-mLen)};exports.write=function(buffer,value,offset,isLE,mLen,nBytes){var e,m,c,eLen=nBytes*8-mLen-1,eMax=(1<<eLen)-1,eBias=eMax>>1,rt=mLen===23?Math.pow(2,-24)-Math.pow(2,-77):0,i=isLE?0:nBytes-1,d=isLE?1:-1,s=value<0||value===0&&1/value<0?1:0;value=Math.abs(value);if(isNaN(value)||value===Infinity){m=isNaN(value)?1:0;e=eMax}else{e=Math.floor(Math.log(value)/Math.LN2);if(value*(c=Math.pow(2,-e))<1){e--;c*=2}if(e+eBias>=1){value+=rt/c}else{value+=rt*Math.pow(2,1-eBias)}if(value*c>=2){e++;c/=2}if(e+eBias>=eMax){m=0;e=eMax}else if(e+eBias>=1){m=(value*c-1)*Math.pow(2,mLen);e=e+eBias}else{m=value*Math.pow(2,eBias-1)*Math.pow(2,mLen);e=0}}for(;mLen>=8;buffer[offset+i]=m&255,i+=d,m/=256,mLen-=8);e=e<<mLen|m;eLen+=mLen;for(;eLen>0;buffer[offset+i]=e&255,i+=d,e/=256,eLen-=8);buffer[offset+i-d]|=s*128}},{}],7:[function(require,module,exports){(function(Buffer){var createHash=require("sha.js");var md5=toConstructor(require("./md5"));var rmd160=toConstructor(require("ripemd160"));function toConstructor(fn){return function(){var buffers=[];var m={update:function(data,enc){if(!Buffer.isBuffer(data))data=new Buffer(data,enc);buffers.push(data);return this},digest:function(enc){var buf=Buffer.concat(buffers);var r=fn(buf);buffers=null;return enc?r.toString(enc):r}};return m}}module.exports=function(alg){if("md5"===alg)return new md5;if("rmd160"===alg)return new rmd160;return createHash(alg)}}).call(this,require("buffer").Buffer)},{"./md5":11,buffer:4,ripemd160:12,"sha.js":14}],8:[function(require,module,exports){(function(Buffer){var createHash=require("./create-hash");var blocksize=64;var zeroBuffer=new Buffer(blocksize);zeroBuffer.fill(0);module.exports=Hmac;function Hmac(alg,key){if(!(this instanceof Hmac))return new Hmac(alg,key);this._opad=opad;this._alg=alg;key=this._key=!Buffer.isBuffer(key)?new Buffer(key):key;if(key.length>blocksize){key=createHash(alg).update(key).digest()}else if(key.length<blocksize){key=Buffer.concat([key,zeroBuffer],blocksize)}var ipad=this._ipad=new Buffer(blocksize);var opad=this._opad=new Buffer(blocksize);for(var i=0;i<blocksize;i++){ipad[i]=key[i]^54;opad[i]=key[i]^92}this._hash=createHash(alg).update(ipad)}Hmac.prototype.update=function(data,enc){this._hash.update(data,enc);return this};Hmac.prototype.digest=function(enc){var h=this._hash.digest();return createHash(this._alg).update(this._opad).update(h).digest(enc)}}).call(this,require("buffer").Buffer)},{"./create-hash":7,buffer:4}],9:[function(require,module,exports){(function(Buffer){var intSize=4;var zeroBuffer=new Buffer(intSize);zeroBuffer.fill(0);var chrsz=8;function toArray(buf,bigEndian){if(buf.length%intSize!==0){var len=buf.length+(intSize-buf.length%intSize);buf=Buffer.concat([buf,zeroBuffer],len)}var arr=[];var fn=bigEndian?buf.readInt32BE:buf.readInt32LE;for(var i=0;i<buf.length;i+=intSize){arr.push(fn.call(buf,i))}return arr}function toBuffer(arr,size,bigEndian){var buf=new Buffer(size);var fn=bigEndian?buf.writeInt32BE:buf.writeInt32LE;for(var i=0;i<arr.length;i++){fn.call(buf,arr[i],i*4,true)}return buf}function hash(buf,fn,hashSize,bigEndian){if(!Buffer.isBuffer(buf))buf=new Buffer(buf);var arr=fn(toArray(buf,bigEndian),buf.length*chrsz);return toBuffer(arr,hashSize,bigEndian)}module.exports={hash:hash}}).call(this,require("buffer").Buffer)},{buffer:4}],10:[function(require,module,exports){(function(Buffer){var rng=require("./rng");function error(){var m=[].slice.call(arguments).join(" ");throw new Error([m,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join("\n"))}exports.createHash=require("./create-hash");exports.createHmac=require("./create-hmac");exports.randomBytes=function(size,callback){if(callback&&callback.call){try{callback.call(this,undefined,new Buffer(rng(size)))}catch(err){callback(err)}}else{return new Buffer(rng(size))}};function each(a,f){for(var i in a)f(a[i],i)}exports.getHashes=function(){return["sha1","sha256","md5","rmd160"]};var p=require("./pbkdf2")(exports.createHmac);exports.pbkdf2=p.pbkdf2;exports.pbkdf2Sync=p.pbkdf2Sync;each(["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman"],function(name){exports[name]=function(){error("sorry,",name,"is not implemented yet")}})}).call(this,require("buffer").Buffer)},{"./create-hash":7,"./create-hmac":8,"./pbkdf2":18,"./rng":19,buffer:4}],11:[function(require,module,exports){var helpers=require("./helpers");function core_md5(x,len){x[len>>5]|=128<<len%32;x[(len+64>>>9<<4)+14]=len;var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;for(var i=0;i<x.length;i+=16){var olda=a;var oldb=b;var oldc=c;var oldd=d;a=md5_ff(a,b,c,d,x[i+0],7,-680876936);d=md5_ff(d,a,b,c,x[i+1],12,-389564586);c=md5_ff(c,d,a,b,x[i+2],17,606105819);b=md5_ff(b,c,d,a,x[i+3],22,-1044525330);a=md5_ff(a,b,c,d,x[i+4],7,-176418897);d=md5_ff(d,a,b,c,x[i+5],12,1200080426);c=md5_ff(c,d,a,b,x[i+6],17,-1473231341);b=md5_ff(b,c,d,a,x[i+7],22,-45705983);a=md5_ff(a,b,c,d,x[i+8],7,1770035416);d=md5_ff(d,a,b,c,x[i+9],12,-1958414417);c=md5_ff(c,d,a,b,x[i+10],17,-42063);b=md5_ff(b,c,d,a,x[i+11],22,-1990404162);a=md5_ff(a,b,c,d,x[i+12],7,1804603682);d=md5_ff(d,a,b,c,x[i+13],12,-40341101);c=md5_ff(c,d,a,b,x[i+14],17,-1502002290);b=md5_ff(b,c,d,a,x[i+15],22,1236535329);a=md5_gg(a,b,c,d,x[i+1],5,-165796510);d=md5_gg(d,a,b,c,x[i+6],9,-1069501632);c=md5_gg(c,d,a,b,x[i+11],14,643717713);b=md5_gg(b,c,d,a,x[i+0],20,-373897302);a=md5_gg(a,b,c,d,x[i+5],5,-701558691);d=md5_gg(d,a,b,c,x[i+10],9,38016083);c=md5_gg(c,d,a,b,x[i+15],14,-660478335);b=md5_gg(b,c,d,a,x[i+4],20,-405537848);a=md5_gg(a,b,c,d,x[i+9],5,568446438);d=md5_gg(d,a,b,c,x[i+14],9,-1019803690);c=md5_gg(c,d,a,b,x[i+3],14,-187363961);b=md5_gg(b,c,d,a,x[i+8],20,1163531501);a=md5_gg(a,b,c,d,x[i+13],5,-1444681467);d=md5_gg(d,a,b,c,x[i+2],9,-51403784);c=md5_gg(c,d,a,b,x[i+7],14,1735328473);b=md5_gg(b,c,d,a,x[i+12],20,-1926607734);a=md5_hh(a,b,c,d,x[i+5],4,-378558);d=md5_hh(d,a,b,c,x[i+8],11,-2022574463);c=md5_hh(c,d,a,b,x[i+11],16,1839030562);b=md5_hh(b,c,d,a,x[i+14],23,-35309556);a=md5_hh(a,b,c,d,x[i+1],4,-1530992060);d=md5_hh(d,a,b,c,x[i+4],11,1272893353);c=md5_hh(c,d,a,b,x[i+7],16,-155497632);b=md5_hh(b,c,d,a,x[i+10],23,-1094730640);a=md5_hh(a,b,c,d,x[i+13],4,681279174);d=md5_hh(d,a,b,c,x[i+0],11,-358537222);c=md5_hh(c,d,a,b,x[i+3],16,-722521979);b=md5_hh(b,c,d,a,x[i+6],23,76029189);a=md5_hh(a,b,c,d,x[i+9],4,-640364487);d=md5_hh(d,a,b,c,x[i+12],11,-421815835);c=md5_hh(c,d,a,b,x[i+15],16,530742520);b=md5_hh(b,c,d,a,x[i+2],23,-995338651);a=md5_ii(a,b,c,d,x[i+0],6,-198630844);d=md5_ii(d,a,b,c,x[i+7],10,1126891415);c=md5_ii(c,d,a,b,x[i+14],15,-1416354905);b=md5_ii(b,c,d,a,x[i+5],21,-57434055);a=md5_ii(a,b,c,d,x[i+12],6,1700485571);d=md5_ii(d,a,b,c,x[i+3],10,-1894986606);c=md5_ii(c,d,a,b,x[i+10],15,-1051523);b=md5_ii(b,c,d,a,x[i+1],21,-2054922799);a=md5_ii(a,b,c,d,x[i+8],6,1873313359);d=md5_ii(d,a,b,c,x[i+15],10,-30611744);c=md5_ii(c,d,a,b,x[i+6],15,-1560198380);b=md5_ii(b,c,d,a,x[i+13],21,1309151649);a=md5_ii(a,b,c,d,x[i+4],6,-145523070);d=md5_ii(d,a,b,c,x[i+11],10,-1120210379);c=md5_ii(c,d,a,b,x[i+2],15,718787259);b=md5_ii(b,c,d,a,x[i+9],21,-343485551);a=safe_add(a,olda);b=safe_add(b,oldb);c=safe_add(c,oldc);d=safe_add(d,oldd)}return Array(a,b,c,d)}function md5_cmn(q,a,b,x,s,t){return safe_add(bit_rol(safe_add(safe_add(a,q),safe_add(x,t)),s),b)}function md5_ff(a,b,c,d,x,s,t){return md5_cmn(b&c|~b&d,a,b,x,s,t)}function md5_gg(a,b,c,d,x,s,t){return md5_cmn(b&d|c&~d,a,b,x,s,t)}function md5_hh(a,b,c,d,x,s,t){return md5_cmn(b^c^d,a,b,x,s,t)}function md5_ii(a,b,c,d,x,s,t){return md5_cmn(c^(b|~d),a,b,x,s,t)}function safe_add(x,y){var lsw=(x&65535)+(y&65535);var msw=(x>>16)+(y>>16)+(lsw>>16);return msw<<16|lsw&65535}function bit_rol(num,cnt){return num<<cnt|num>>>32-cnt}module.exports=function md5(buf){return helpers.hash(buf,core_md5,16)}},{"./helpers":9}],12:[function(require,module,exports){(function(Buffer){module.exports=ripemd160;var zl=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13];var zr=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11];var sl=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6];var sr=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11];var hl=[0,1518500249,1859775393,2400959708,2840853838];var hr=[1352829926,1548603684,1836072691,2053994217,0];var bytesToWords=function(bytes){var words=[];for(var i=0,b=0;i<bytes.length;i++,b+=8){words[b>>>5]|=bytes[i]<<24-b%32}return words};var wordsToBytes=function(words){var bytes=[];for(var b=0;b<words.length*32;b+=8){bytes.push(words[b>>>5]>>>24-b%32&255)}return bytes};var processBlock=function(H,M,offset){for(var i=0;i<16;i++){var offset_i=offset+i;var M_offset_i=M[offset_i];M[offset_i]=(M_offset_i<<8|M_offset_i>>>24)&16711935|(M_offset_i<<24|M_offset_i>>>8)&4278255360}var al,bl,cl,dl,el;var ar,br,cr,dr,er;ar=al=H[0];br=bl=H[1];cr=cl=H[2];dr=dl=H[3];er=el=H[4];var t;for(var i=0;i<80;i+=1){t=al+M[offset+zl[i]]|0;if(i<16){t+=f1(bl,cl,dl)+hl[0]}else if(i<32){t+=f2(bl,cl,dl)+hl[1]}else if(i<48){t+=f3(bl,cl,dl)+hl[2]}else if(i<64){t+=f4(bl,cl,dl)+hl[3]}else{t+=f5(bl,cl,dl)+hl[4]}t=t|0;t=rotl(t,sl[i]);t=t+el|0;al=el;el=dl;dl=rotl(cl,10);cl=bl;bl=t;t=ar+M[offset+zr[i]]|0;if(i<16){t+=f5(br,cr,dr)+hr[0]}else if(i<32){t+=f4(br,cr,dr)+hr[1]}else if(i<48){t+=f3(br,cr,dr)+hr[2]}else if(i<64){t+=f2(br,cr,dr)+hr[3]}else{t+=f1(br,cr,dr)+hr[4]}t=t|0;t=rotl(t,sr[i]);t=t+er|0;ar=er;er=dr;dr=rotl(cr,10);cr=br;br=t}t=H[1]+cl+dr|0;H[1]=H[2]+dl+er|0;H[2]=H[3]+el+ar|0;H[3]=H[4]+al+br|0;H[4]=H[0]+bl+cr|0;H[0]=t};function f1(x,y,z){return x^y^z}function f2(x,y,z){return x&y|~x&z}function f3(x,y,z){return(x|~y)^z}function f4(x,y,z){return x&z|y&~z}function f5(x,y,z){return x^(y|~z)}function rotl(x,n){return x<<n|x>>>32-n}function ripemd160(message){var H=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof message=="string")message=new Buffer(message,"utf8");var m=bytesToWords(message);var nBitsLeft=message.length*8;var nBitsTotal=message.length*8;m[nBitsLeft>>>5]|=128<<24-nBitsLeft%32;m[(nBitsLeft+64>>>9<<4)+14]=(nBitsTotal<<8|nBitsTotal>>>24)&16711935|(nBitsTotal<<24|nBitsTotal>>>8)&4278255360;for(var i=0;i<m.length;i+=16){processBlock(H,m,i)}for(var i=0;i<5;i++){var H_i=H[i];H[i]=(H_i<<8|H_i>>>24)&16711935|(H_i<<24|H_i>>>8)&4278255360}var digestbytes=wordsToBytes(H);return new Buffer(digestbytes)}}).call(this,require("buffer").Buffer)},{buffer:4}],13:[function(require,module,exports){var u=require("./util");var write=u.write;var fill=u.zeroFill;module.exports=function(Buffer){function Hash(blockSize,finalSize){this._block=new Buffer(blockSize);this._finalSize=finalSize;this._blockSize=blockSize;this._len=0;this._s=0}Hash.prototype.init=function(){this._s=0;this._len=0};function lengthOf(data,enc){if(enc==null)return data.byteLength||data.length;if(enc=="ascii"||enc=="binary")return data.length;if(enc=="hex")return data.length/2;if(enc=="base64")return data.length/3}Hash.prototype.update=function(data,enc){var bl=this._blockSize;var length;if(!enc&&"string"===typeof data)enc="utf8";if(enc){if(enc==="utf-8")enc="utf8";if(enc==="base64"||enc==="utf8")data=new Buffer(data,enc),enc=null;length=lengthOf(data,enc)}else length=data.byteLength||data.length;var l=this._len+=length;var s=this._s=this._s||0;var f=0;var buffer=this._block;while(s<l){var t=Math.min(length,f+bl-s%bl);write(buffer,data,enc,s%bl,f,t);var ch=t-f;s+=ch;f+=ch;if(!(s%bl))this._update(buffer)}this._s=s;return this};Hash.prototype.digest=function(enc){var bl=this._blockSize;var fl=this._finalSize;var len=this._len*8;var x=this._block;var bits=len%(bl*8);x[this._len%bl]=128;fill(this._block,this._len%bl+1);if(bits>=fl*8){this._update(this._block);u.zeroFill(this._block,0)}x.writeInt32BE(len,fl+4);var hash=this._update(this._block)||this._hash();if(enc==null)return hash;return hash.toString(enc)};Hash.prototype._update=function(){throw new Error("_update must be implemented by subclass")};return Hash}},{"./util":17}],14:[function(require,module,exports){var exports=module.exports=function(alg){var Alg=exports[alg];if(!Alg)throw new Error(alg+" is not supported (we accept pull requests)");return new Alg};var Buffer=require("buffer").Buffer;var Hash=require("./hash")(Buffer);exports.sha=exports.sha1=require("./sha1")(Buffer,Hash);exports.sha256=require("./sha256")(Buffer,Hash)},{"./hash":13,"./sha1":15,"./sha256":16,buffer:4}],15:[function(require,module,exports){module.exports=function(Buffer,Hash){var inherits=require("util").inherits;inherits(Sha1,Hash);var A=0|0;var B=4|0;var C=8|0;var D=12|0;var E=16|0;var BE=false;var LE=true;var W=new Int32Array(80);var POOL=[];function Sha1(){if(POOL.length)return POOL.pop().init();if(!(this instanceof Sha1))return new Sha1;this._w=W;Hash.call(this,16*4,14*4);this._h=null;this.init()}Sha1.prototype.init=function(){this._a=1732584193;this._b=4023233417;this._c=2562383102;this._d=271733878;this._e=3285377520;Hash.prototype.init.call(this);return this};Sha1.prototype._POOL=POOL;var isDV=new Buffer(1)instanceof DataView;function readInt32BE(X,i){return isDV?X.getInt32(i,false):X.readInt32BE(i)}Sha1.prototype._update=function(array){var X=this._block;var h=this._h;var a,b,c,d,e,_a,_b,_c,_d,_e;a=_a=this._a;b=_b=this._b;c=_c=this._c;d=_d=this._d;e=_e=this._e;var w=this._w;for(var j=0;j<80;j++){var W=w[j]=j<16?X.readInt32BE(j*4):rol(w[j-3]^w[j-8]^w[j-14]^w[j-16],1);var t=add(add(rol(a,5),sha1_ft(j,b,c,d)),add(add(e,W),sha1_kt(j)));e=d;d=c;c=rol(b,30);b=a;a=t}this._a=add(a,_a);this._b=add(b,_b);this._c=add(c,_c);this._d=add(d,_d);this._e=add(e,_e)};Sha1.prototype._hash=function(){if(POOL.length<100)POOL.push(this);var H=new Buffer(20);H.writeInt32BE(this._a|0,A);H.writeInt32BE(this._b|0,B);H.writeInt32BE(this._c|0,C);H.writeInt32BE(this._d|0,D);H.writeInt32BE(this._e|0,E);return H};function sha1_ft(t,b,c,d){if(t<20)return b&c|~b&d;if(t<40)return b^c^d;if(t<60)return b&c|b&d|c&d;return b^c^d}function sha1_kt(t){return t<20?1518500249:t<40?1859775393:t<60?-1894007588:-899497514}function add(x,y){return x+y|0}function rol(num,cnt){return num<<cnt|num>>>32-cnt}return Sha1}},{util:23}],16:[function(require,module,exports){var inherits=require("util").inherits;var BE=false;var LE=true;var u=require("./util");module.exports=function(Buffer,Hash){var K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];inherits(Sha256,Hash);var W=new Array(64);var POOL=[];function Sha256(){if(POOL.length){}this.init();this._w=W;Hash.call(this,16*4,14*4)}Sha256.prototype.init=function(){this._a=1779033703|0;this._b=3144134277|0;this._c=1013904242|0;this._d=2773480762|0;this._e=1359893119|0;this._f=2600822924|0;this._g=528734635|0;this._h=1541459225|0;this._len=this._s=0;return this};var safe_add=function(x,y){var lsw=(x&65535)+(y&65535);var msw=(x>>16)+(y>>16)+(lsw>>16);return msw<<16|lsw&65535};function S(X,n){return X>>>n|X<<32-n}function R(X,n){return X>>>n}function Ch(x,y,z){return x&y^~x&z}function Maj(x,y,z){return x&y^x&z^y&z}function Sigma0256(x){return S(x,2)^S(x,13)^S(x,22)}function Sigma1256(x){return S(x,6)^S(x,11)^S(x,25)}function Gamma0256(x){return S(x,7)^S(x,18)^R(x,3)}function Gamma1256(x){return S(x,17)^S(x,19)^R(x,10)}Sha256.prototype._update=function(m){var M=this._block;var W=this._w;var a,b,c,d,e,f,g,h;var T1,T2;a=this._a|0;b=this._b|0;c=this._c|0;d=this._d|0;e=this._e|0;f=this._f|0;g=this._g|0;h=this._h|0;for(var j=0;j<64;j++){var w=W[j]=j<16?M.readInt32BE(j*4):Gamma1256(W[j-2])+W[j-7]+Gamma0256(W[j-15])+W[j-16];T1=h+Sigma1256(e)+Ch(e,f,g)+K[j]+w;T2=Sigma0256(a)+Maj(a,b,c);h=g;g=f;f=e;e=d+T1;d=c;c=b;b=a;a=T1+T2}this._a=a+this._a|0;this._b=b+this._b|0;this._c=c+this._c|0;this._d=d+this._d|0;this._e=e+this._e|0;this._f=f+this._f|0;this._g=g+this._g|0;this._h=h+this._h|0};Sha256.prototype._hash=function(){if(POOL.length<10)POOL.push(this);var H=new Buffer(32);H.writeInt32BE(this._a,0);H.writeInt32BE(this._b,4);H.writeInt32BE(this._c,8);H.writeInt32BE(this._d,12);H.writeInt32BE(this._e,16);H.writeInt32BE(this._f,20);H.writeInt32BE(this._g,24);H.writeInt32BE(this._h,28);return H};return Sha256}},{"./util":17,util:23}],17:[function(require,module,exports){exports.write=write;exports.zeroFill=zeroFill;exports.toString=toString;function write(buffer,string,enc,start,from,to,LE){var l=to-from;if(enc==="ascii"||enc==="binary"){for(var i=0;i<l;i++){buffer[start+i]=string.charCodeAt(i+from)}}else if(enc==null){for(var i=0;i<l;i++){buffer[start+i]=string[i+from]}}else if(enc==="hex"){for(var i=0;i<l;i++){var j=from+i;buffer[start+i]=parseInt(string[j*2]+string[j*2+1],16)}}else if(enc==="base64"){throw new Error("base64 encoding not yet supported")}else throw new Error(enc+" encoding not yet supported")}function zeroFill(buf,from){for(var i=from;i<buf.length;i++)buf[i]=0}},{}],18:[function(require,module,exports){(function(Buffer){var blocksize=64;var zeroBuffer=new Buffer(blocksize);zeroBuffer.fill(0);module.exports=function(createHmac,exports){exports=exports||{};exports.pbkdf2=function(password,salt,iterations,keylen,cb){if("function"!==typeof cb)throw new Error("No callback provided to pbkdf2");setTimeout(function(){cb(null,exports.pbkdf2Sync(password,salt,iterations,keylen))})};exports.pbkdf2Sync=function(key,salt,iterations,keylen){if("number"!==typeof iterations)throw new TypeError("Iterations not a number");if(iterations<0)throw new TypeError("Bad iterations");if("number"!==typeof keylen)throw new TypeError("Key length not a number");if(keylen<0)throw new TypeError("Bad key length");var key=!Buffer.isBuffer(key)?new Buffer(key):key;if(key.length>blocksize){key=createHash(alg).update(key).digest()}else if(key.length<blocksize){key=Buffer.concat([key,zeroBuffer],blocksize)}var HMAC;var cplen,p=0,i=1,itmp=new Buffer(4),digtmp;var out=new Buffer(keylen);out.fill(0);while(keylen){if(keylen>20)cplen=20;else cplen=keylen;itmp[0]=i>>24&255;itmp[1]=i>>16&255;itmp[2]=i>>8&255;itmp[3]=i&255;HMAC=createHmac("sha1",key);HMAC.update(salt);HMAC.update(itmp);digtmp=HMAC.digest();digtmp.copy(out,p,0,cplen);for(var j=1;j<iterations;j++){HMAC=createHmac("sha1",key);HMAC.update(digtmp);digtmp=HMAC.digest();for(var k=0;k<cplen;k++){out[k]^=digtmp[k]}}keylen-=cplen;i++;p+=cplen}return out};return exports}}).call(this,require("buffer").Buffer)},{buffer:4}],19:[function(require,module,exports){(function(Buffer){(function(){module.exports=function(size){var bytes=new Buffer(size);crypto.getRandomValues(bytes);return bytes}})()}).call(this,require("buffer").Buffer)},{buffer:4}],20:[function(require,module,exports){if(typeof Object.create==="function"){module.exports=function inherits(ctor,superCtor){ctor.super_=superCtor;ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:false,writable:true,configurable:true}})}}else{module.exports=function inherits(ctor,superCtor){ctor.super_=superCtor;var TempCtor=function(){};TempCtor.prototype=superCtor.prototype;ctor.prototype=new TempCtor;ctor.prototype.constructor=ctor}}},{}],21:[function(require,module,exports){var process=module.exports={};process.nextTick=function(){var canSetImmediate=typeof window!=="undefined"&&window.setImmediate;var canPost=typeof window!=="undefined"&&window.postMessage&&window.addEventListener;if(canSetImmediate){return function(f){return window.setImmediate(f)}}if(canPost){var queue=[];window.addEventListener("message",function(ev){var source=ev.source;if((source===window||source===null)&&ev.data==="process-tick"){ev.stopPropagation();if(queue.length>0){var fn=queue.shift();fn()}}},true);return function nextTick(fn){queue.push(fn);window.postMessage("process-tick","*")}}return function nextTick(fn){setTimeout(fn,0)}}();process.title="browser";process.browser=true;process.env={};process.argv=[];function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.binding=function(name){throw new Error("process.binding is not supported")};process.cwd=function(){return"/"};process.chdir=function(dir){throw new Error("process.chdir is not supported")}},{}],22:[function(require,module,exports){module.exports=require(2)},{}],23:[function(require,module,exports){module.exports=require(3)},{"./support/isBuffer":22,_process:21,inherits:20}],24:[function(require,module,exports){var assert=require("assert");module.exports=BigInteger;var canary=0xdeadbeefcafe;var j_lm=(canary&16777215)==15715070;function BigInteger(a,b,c){if(!(this instanceof BigInteger)){return new BigInteger(a,b,c)}if(a!=null){if("number"==typeof a)this.fromNumber(a,b,c);else if(b==null&&"string"!=typeof a)this.fromString(a,256);else this.fromString(a,b)}}var proto=BigInteger.prototype;function nbi(){return new BigInteger(null)}var dbits;function am1(i,x,w,j,c,n){while(--n>=0){var v=x*this[i++]+w[j]+c;c=Math.floor(v/67108864);w[j++]=v&67108863}return c}function am2(i,x,w,j,c,n){var xl=x&32767,xh=x>>15;while(--n>=0){var l=this[i]&32767;var h=this[i++]>>15;var m=xh*l+h*xl;l=xl*l+((m&32767)<<15)+w[j]+(c&1073741823);c=(l>>>30)+(m>>>15)+xh*h+(c>>>30);w[j++]=l&1073741823}return c}function am3(i,x,w,j,c,n){var xl=x&16383,xh=x>>14;while(--n>=0){var l=this[i]&16383;var h=this[i++]>>14;var m=xh*l+h*xl;l=xl*l+((m&16383)<<14)+w[j]+c;c=(l>>28)+(m>>14)+xh*h;w[j++]=l&268435455}return c}BigInteger.prototype.am=am1;dbits=26;BigInteger.prototype.DB=dbits;BigInteger.prototype.DM=(1<<dbits)-1;var DV=BigInteger.prototype.DV=1<<dbits;var BI_FP=52;BigInteger.prototype.FV=Math.pow(2,BI_FP);BigInteger.prototype.F1=BI_FP-dbits;BigInteger.prototype.F2=2*dbits-BI_FP;var BI_RM="0123456789abcdefghijklmnopqrstuvwxyz";var BI_RC=new Array;var rr,vv;rr="0".charCodeAt(0);for(vv=0;vv<=9;++vv)BI_RC[rr++]=vv;rr="a".charCodeAt(0);for(vv=10;vv<36;++vv)BI_RC[rr++]=vv;rr="A".charCodeAt(0);for(vv=10;vv<36;++vv)BI_RC[rr++]=vv;function int2char(n){return BI_RM.charAt(n)}function intAt(s,i){var c=BI_RC[s.charCodeAt(i)];return c==null?-1:c}function bnpCopyTo(r){for(var i=this.t-1;i>=0;--i)r[i]=this[i];r.t=this.t;r.s=this.s}function bnpFromInt(x){this.t=1;this.s=x<0?-1:0;if(x>0)this[0]=x;else if(x<-1)this[0]=x+DV;
else this.t=0}function nbv(i){var r=nbi();r.fromInt(i);return r}function bnpFromString(s,b){var self=this;var k;if(b==16)k=4;else if(b==8)k=3;else if(b==256)k=8;else if(b==2)k=1;else if(b==32)k=5;else if(b==4)k=2;else{self.fromRadix(s,b);return}self.t=0;self.s=0;var i=s.length,mi=false,sh=0;while(--i>=0){var x=k==8?s[i]&255:intAt(s,i);if(x<0){if(s.charAt(i)=="-")mi=true;continue}mi=false;if(sh==0)self[self.t++]=x;else if(sh+k>self.DB){self[self.t-1]|=(x&(1<<self.DB-sh)-1)<<sh;self[self.t++]=x>>self.DB-sh}else self[self.t-1]|=x<<sh;sh+=k;if(sh>=self.DB)sh-=self.DB}if(k==8&&(s[0]&128)!=0){self.s=-1;if(sh>0)self[self.t-1]|=(1<<self.DB-sh)-1<<sh}self.clamp();if(mi)BigInteger.ZERO.subTo(self,self)}function bnpClamp(){var c=this.s&this.DM;while(this.t>0&&this[this.t-1]==c)--this.t}function bnToString(b){var self=this;if(self.s<0)return"-"+self.negate().toString(b);var k;if(b==16)k=4;else if(b==8)k=3;else if(b==2)k=1;else if(b==32)k=5;else if(b==4)k=2;else return self.toRadix(b);var km=(1<<k)-1,d,m=false,r="",i=self.t;var p=self.DB-i*self.DB%k;if(i-->0){if(p<self.DB&&(d=self[i]>>p)>0){m=true;r=int2char(d)}while(i>=0){if(p<k){d=(self[i]&(1<<p)-1)<<k-p;d|=self[--i]>>(p+=self.DB-k)}else{d=self[i]>>(p-=k)&km;if(p<=0){p+=self.DB;--i}}if(d>0)m=true;if(m)r+=int2char(d)}}return m?r:"0"}function bnNegate(){var r=nbi();BigInteger.ZERO.subTo(this,r);return r}function bnAbs(){return this.s<0?this.negate():this}function bnCompareTo(a){var r=this.s-a.s;if(r!=0)return r;var i=this.t;r=i-a.t;if(r!=0)return this.s<0?-r:r;while(--i>=0)if((r=this[i]-a[i])!=0)return r;return 0}function nbits(x){var r=1,t;if((t=x>>>16)!=0){x=t;r+=16}if((t=x>>8)!=0){x=t;r+=8}if((t=x>>4)!=0){x=t;r+=4}if((t=x>>2)!=0){x=t;r+=2}if((t=x>>1)!=0){x=t;r+=1}return r}function bnBitLength(){if(this.t<=0)return 0;return this.DB*(this.t-1)+nbits(this[this.t-1]^this.s&this.DM)}function bnpDLShiftTo(n,r){var i;for(i=this.t-1;i>=0;--i)r[i+n]=this[i];for(i=n-1;i>=0;--i)r[i]=0;r.t=this.t+n;r.s=this.s}function bnpDRShiftTo(n,r){for(var i=n;i<this.t;++i)r[i-n]=this[i];r.t=Math.max(this.t-n,0);r.s=this.s}function bnpLShiftTo(n,r){var self=this;var bs=n%self.DB;var cbs=self.DB-bs;var bm=(1<<cbs)-1;var ds=Math.floor(n/self.DB),c=self.s<<bs&self.DM,i;for(i=self.t-1;i>=0;--i){r[i+ds+1]=self[i]>>cbs|c;c=(self[i]&bm)<<bs}for(i=ds-1;i>=0;--i)r[i]=0;r[ds]=c;r.t=self.t+ds+1;r.s=self.s;r.clamp()}function bnpRShiftTo(n,r){var self=this;r.s=self.s;var ds=Math.floor(n/self.DB);if(ds>=self.t){r.t=0;return}var bs=n%self.DB;var cbs=self.DB-bs;var bm=(1<<bs)-1;r[0]=self[ds]>>bs;for(var i=ds+1;i<self.t;++i){r[i-ds-1]|=(self[i]&bm)<<cbs;r[i-ds]=self[i]>>bs}if(bs>0)r[self.t-ds-1]|=(self.s&bm)<<cbs;r.t=self.t-ds;r.clamp()}function bnpSubTo(a,r){var self=this;var i=0,c=0,m=Math.min(a.t,self.t);while(i<m){c+=self[i]-a[i];r[i++]=c&self.DM;c>>=self.DB}if(a.t<self.t){c-=a.s;while(i<self.t){c+=self[i];r[i++]=c&self.DM;c>>=self.DB}c+=self.s}else{c+=self.s;while(i<a.t){c-=a[i];r[i++]=c&self.DM;c>>=self.DB}c-=a.s}r.s=c<0?-1:0;if(c<-1)r[i++]=self.DV+c;else if(c>0)r[i++]=c;r.t=i;r.clamp()}function bnpMultiplyTo(a,r){var x=this.abs(),y=a.abs();var i=x.t;r.t=i+y.t;while(--i>=0)r[i]=0;for(i=0;i<y.t;++i)r[i+x.t]=x.am(0,y[i],r,i,0,x.t);r.s=0;r.clamp();if(this.s!=a.s)BigInteger.ZERO.subTo(r,r)}function bnpSquareTo(r){var x=this.abs();var i=r.t=2*x.t;while(--i>=0)r[i]=0;for(i=0;i<x.t-1;++i){var c=x.am(i,x[i],r,2*i,0,1);if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1))>=x.DV){r[i+x.t]-=x.DV;r[i+x.t+1]=1}}if(r.t>0)r[r.t-1]+=x.am(i,x[i],r,2*i,0,1);r.s=0;r.clamp()}function bnpDivRemTo(m,q,r){var self=this;var pm=m.abs();if(pm.t<=0)return;var pt=self.abs();if(pt.t<pm.t){if(q!=null)q.fromInt(0);if(r!=null)self.copyTo(r);return}if(r==null)r=nbi();var y=nbi(),ts=self.s,ms=m.s;var nsh=self.DB-nbits(pm[pm.t-1]);if(nsh>0){pm.lShiftTo(nsh,y);pt.lShiftTo(nsh,r)}else{pm.copyTo(y);pt.copyTo(r)}var ys=y.t;var y0=y[ys-1];if(y0==0)return;var yt=y0*(1<<self.F1)+(ys>1?y[ys-2]>>self.F2:0);var d1=self.FV/yt,d2=(1<<self.F1)/yt,e=1<<self.F2;var i=r.t,j=i-ys,t=q==null?nbi():q;y.dlShiftTo(j,t);if(r.compareTo(t)>=0){r[r.t++]=1;r.subTo(t,r)}BigInteger.ONE.dlShiftTo(ys,t);t.subTo(y,y);while(y.t<ys)y[y.t++]=0;while(--j>=0){var qd=r[--i]==y0?self.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);if((r[i]+=y.am(0,qd,r,j,0,ys))<qd){y.dlShiftTo(j,t);r.subTo(t,r);while(r[i]<--qd)r.subTo(t,r)}}if(q!=null){r.drShiftTo(ys,q);if(ts!=ms)BigInteger.ZERO.subTo(q,q)}r.t=ys;r.clamp();if(nsh>0)r.rShiftTo(nsh,r);if(ts<0)BigInteger.ZERO.subTo(r,r)}function bnMod(a){var r=nbi();this.abs().divRemTo(a,null,r);if(this.s<0&&r.compareTo(BigInteger.ZERO)>0)a.subTo(r,r);return r}function Classic(m){this.m=m}function cConvert(x){if(x.s<0||x.compareTo(this.m)>=0)return x.mod(this.m);else return x}function cRevert(x){return x}function cReduce(x){x.divRemTo(this.m,null,x)}function cMulTo(x,y,r){x.multiplyTo(y,r);this.reduce(r)}function cSqrTo(x,r){x.squareTo(r);this.reduce(r)}Classic.prototype.convert=cConvert;Classic.prototype.revert=cRevert;Classic.prototype.reduce=cReduce;Classic.prototype.mulTo=cMulTo;Classic.prototype.sqrTo=cSqrTo;function bnpInvDigit(){if(this.t<1)return 0;var x=this[0];if((x&1)==0)return 0;var y=x&3;y=y*(2-(x&15)*y)&15;y=y*(2-(x&255)*y)&255;y=y*(2-((x&65535)*y&65535))&65535;y=y*(2-x*y%this.DV)%this.DV;return y>0?this.DV-y:-y}function Montgomery(m){this.m=m;this.mp=m.invDigit();this.mpl=this.mp&32767;this.mph=this.mp>>15;this.um=(1<<m.DB-15)-1;this.mt2=2*m.t}function montConvert(x){var r=nbi();x.abs().dlShiftTo(this.m.t,r);r.divRemTo(this.m,null,r);if(x.s<0&&r.compareTo(BigInteger.ZERO)>0)this.m.subTo(r,r);return r}function montRevert(x){var r=nbi();x.copyTo(r);this.reduce(r);return r}function montReduce(x){while(x.t<=this.mt2)x[x.t++]=0;for(var i=0;i<this.m.t;++i){var j=x[i]&32767;var u0=j*this.mpl+((j*this.mph+(x[i]>>15)*this.mpl&this.um)<<15)&x.DM;j=i+this.m.t;x[j]+=this.m.am(0,u0,x,i,0,this.m.t);while(x[j]>=x.DV){x[j]-=x.DV;x[++j]++}}x.clamp();x.drShiftTo(this.m.t,x);if(x.compareTo(this.m)>=0)x.subTo(this.m,x)}function montSqrTo(x,r){x.squareTo(r);this.reduce(r)}function montMulTo(x,y,r){x.multiplyTo(y,r);this.reduce(r)}Montgomery.prototype.convert=montConvert;Montgomery.prototype.revert=montRevert;Montgomery.prototype.reduce=montReduce;Montgomery.prototype.mulTo=montMulTo;Montgomery.prototype.sqrTo=montSqrTo;function bnpIsEven(){return(this.t>0?this[0]&1:this.s)==0}function bnpExp(e,z){if(e>4294967295||e<1)return BigInteger.ONE;var r=nbi(),r2=nbi(),g=z.convert(this),i=nbits(e)-1;g.copyTo(r);while(--i>=0){z.sqrTo(r,r2);if((e&1<<i)>0)z.mulTo(r2,g,r);else{var t=r;r=r2;r2=t}}return z.revert(r)}function bnModPowInt(e,m){var z;if(e<256||m.isEven())z=new Classic(m);else z=new Montgomery(m);return this.exp(e,z)}proto.copyTo=bnpCopyTo;proto.fromInt=bnpFromInt;proto.fromString=bnpFromString;proto.clamp=bnpClamp;proto.dlShiftTo=bnpDLShiftTo;proto.drShiftTo=bnpDRShiftTo;proto.lShiftTo=bnpLShiftTo;proto.rShiftTo=bnpRShiftTo;proto.subTo=bnpSubTo;proto.multiplyTo=bnpMultiplyTo;proto.squareTo=bnpSquareTo;proto.divRemTo=bnpDivRemTo;proto.invDigit=bnpInvDigit;proto.isEven=bnpIsEven;proto.exp=bnpExp;proto.toString=bnToString;proto.negate=bnNegate;proto.abs=bnAbs;proto.compareTo=bnCompareTo;proto.bitLength=bnBitLength;proto.mod=bnMod;proto.modPowInt=bnModPowInt;function nbi(){return new BigInteger(null)}function bnClone(){var r=nbi();this.copyTo(r);return r}function bnIntValue(){if(this.s<0){if(this.t==1)return this[0]-this.DV;else if(this.t==0)return-1}else if(this.t==1)return this[0];else if(this.t==0)return 0;return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function bnByteValue(){return this.t==0?this.s:this[0]<<24>>24}function bnShortValue(){return this.t==0?this.s:this[0]<<16>>16}function bnpChunkSize(r){return Math.floor(Math.LN2*this.DB/Math.log(r))}function bnSigNum(){if(this.s<0)return-1;else if(this.t<=0||this.t==1&&this[0]<=0)return 0;else return 1}function bnpToRadix(b){if(b==null)b=10;if(this.signum()==0||b<2||b>36)return"0";var cs=this.chunkSize(b);var a=Math.pow(b,cs);var d=nbv(a),y=nbi(),z=nbi(),r="";this.divRemTo(d,y,z);while(y.signum()>0){r=(a+z.intValue()).toString(b).substr(1)+r;y.divRemTo(d,y,z)}return z.intValue().toString(b)+r}function bnpFromRadix(s,b){var self=this;self.fromInt(0);if(b==null)b=10;var cs=self.chunkSize(b);var d=Math.pow(b,cs),mi=false,j=0,w=0;for(var i=0;i<s.length;++i){var x=intAt(s,i);if(x<0){if(s.charAt(i)=="-"&&self.signum()==0)mi=true;continue}w=b*w+x;if(++j>=cs){self.dMultiply(d);self.dAddOffset(w,0);j=0;w=0}}if(j>0){self.dMultiply(Math.pow(b,j));self.dAddOffset(w,0)}if(mi)BigInteger.ZERO.subTo(self,self)}function bnpFromNumber(a,b,c){var self=this;if("number"==typeof b){if(a<2)self.fromInt(1);else{self.fromNumber(a,c);if(!self.testBit(a-1))self.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,self);if(self.isEven())self.dAddOffset(1,0);while(!self.isProbablePrime(b)){self.dAddOffset(2,0);if(self.bitLength()>a)self.subTo(BigInteger.ONE.shiftLeft(a-1),self)}}}else{var x=new Array,t=a&7;x.length=(a>>3)+1;b.nextBytes(x);if(t>0)x[0]&=(1<<t)-1;else x[0]=0;self.fromString(x,256)}}function bnToByteArray(){var self=this;var i=self.t,r=new Array;r[0]=self.s;var p=self.DB-i*self.DB%8,d,k=0;if(i-->0){if(p<self.DB&&(d=self[i]>>p)!=(self.s&self.DM)>>p)r[k++]=d|self.s<<self.DB-p;while(i>=0){if(p<8){d=(self[i]&(1<<p)-1)<<8-p;d|=self[--i]>>(p+=self.DB-8)}else{d=self[i]>>(p-=8)&255;if(p<=0){p+=self.DB;--i}}if((d&128)!=0)d|=-256;if(k===0&&(self.s&128)!=(d&128))++k;if(k>0||d!=self.s)r[k++]=d}}return r}function bnEquals(a){return this.compareTo(a)==0}function bnMin(a){return this.compareTo(a)<0?this:a}function bnMax(a){return this.compareTo(a)>0?this:a}function bnpBitwiseTo(a,op,r){var self=this;var i,f,m=Math.min(a.t,self.t);for(i=0;i<m;++i)r[i]=op(self[i],a[i]);if(a.t<self.t){f=a.s&self.DM;for(i=m;i<self.t;++i)r[i]=op(self[i],f);r.t=self.t}else{f=self.s&self.DM;for(i=m;i<a.t;++i)r[i]=op(f,a[i]);r.t=a.t}r.s=op(self.s,a.s);r.clamp()}function op_and(x,y){return x&y}function bnAnd(a){var r=nbi();this.bitwiseTo(a,op_and,r);return r}function op_or(x,y){return x|y}function bnOr(a){var r=nbi();this.bitwiseTo(a,op_or,r);return r}function op_xor(x,y){return x^y}function bnXor(a){var r=nbi();this.bitwiseTo(a,op_xor,r);return r}function op_andnot(x,y){return x&~y}function bnAndNot(a){var r=nbi();this.bitwiseTo(a,op_andnot,r);return r}function bnNot(){var r=nbi();for(var i=0;i<this.t;++i)r[i]=this.DM&~this[i];r.t=this.t;r.s=~this.s;return r}function bnShiftLeft(n){var r=nbi();if(n<0)this.rShiftTo(-n,r);else this.lShiftTo(n,r);return r}function bnShiftRight(n){var r=nbi();if(n<0)this.lShiftTo(-n,r);else this.rShiftTo(n,r);return r}function lbit(x){if(x==0)return-1;var r=0;if((x&65535)==0){x>>=16;r+=16}if((x&255)==0){x>>=8;r+=8}if((x&15)==0){x>>=4;r+=4}if((x&3)==0){x>>=2;r+=2}if((x&1)==0)++r;return r}function bnGetLowestSetBit(){for(var i=0;i<this.t;++i)if(this[i]!=0)return i*this.DB+lbit(this[i]);if(this.s<0)return this.t*this.DB;return-1}function cbit(x){var r=0;while(x!=0){x&=x-1;++r}return r}function bnBitCount(){var r=0,x=this.s&this.DM;for(var i=0;i<this.t;++i)r+=cbit(this[i]^x);return r}function bnTestBit(n){var j=Math.floor(n/this.DB);if(j>=this.t)return this.s!=0;return(this[j]&1<<n%this.DB)!=0}function bnpChangeBit(n,op){var r=BigInteger.ONE.shiftLeft(n);this.bitwiseTo(r,op,r);return r}function bnSetBit(n){return this.changeBit(n,op_or)}function bnClearBit(n){return this.changeBit(n,op_andnot)}function bnFlipBit(n){return this.changeBit(n,op_xor)}function bnpAddTo(a,r){var self=this;var i=0,c=0,m=Math.min(a.t,self.t);while(i<m){c+=self[i]+a[i];r[i++]=c&self.DM;c>>=self.DB}if(a.t<self.t){c+=a.s;while(i<self.t){c+=self[i];r[i++]=c&self.DM;c>>=self.DB}c+=self.s}else{c+=self.s;while(i<a.t){c+=a[i];r[i++]=c&self.DM;c>>=self.DB}c+=a.s}r.s=c<0?-1:0;if(c>0)r[i++]=c;else if(c<-1)r[i++]=self.DV+c;r.t=i;r.clamp()}function bnAdd(a){var r=nbi();this.addTo(a,r);return r}function bnSubtract(a){var r=nbi();this.subTo(a,r);return r}function bnMultiply(a){var r=nbi();this.multiplyTo(a,r);return r}function bnSquare(){var r=nbi();this.squareTo(r);return r}function bnDivide(a){var r=nbi();this.divRemTo(a,r,null);return r}function bnRemainder(a){var r=nbi();this.divRemTo(a,null,r);return r}function bnDivideAndRemainder(a){var q=nbi(),r=nbi();this.divRemTo(a,q,r);return new Array(q,r)}function bnpDMultiply(n){this[this.t]=this.am(0,n-1,this,0,0,this.t);++this.t;this.clamp()}function bnpDAddOffset(n,w){if(n==0)return;while(this.t<=w)this[this.t++]=0;this[w]+=n;while(this[w]>=this.DV){this[w]-=this.DV;if(++w>=this.t)this[this.t++]=0;++this[w]}}function NullExp(){}function nNop(x){return x}function nMulTo(x,y,r){x.multiplyTo(y,r)}function nSqrTo(x,r){x.squareTo(r)}NullExp.prototype.convert=nNop;NullExp.prototype.revert=nNop;NullExp.prototype.mulTo=nMulTo;NullExp.prototype.sqrTo=nSqrTo;function bnPow(e){return this.exp(e,new NullExp)}function bnpMultiplyLowerTo(a,n,r){var i=Math.min(this.t+a.t,n);r.s=0;r.t=i;while(i>0)r[--i]=0;var j;for(j=r.t-this.t;i<j;++i)r[i+this.t]=this.am(0,a[i],r,i,0,this.t);for(j=Math.min(a.t,n);i<j;++i)this.am(0,a[i],r,i,0,n-i);r.clamp()}function bnpMultiplyUpperTo(a,n,r){--n;var i=r.t=this.t+a.t-n;r.s=0;while(--i>=0)r[i]=0;for(i=Math.max(n-this.t,0);i<a.t;++i)r[this.t+i-n]=this.am(n-i,a[i],r,0,0,this.t+i-n);r.clamp();r.drShiftTo(1,r)}function Barrett(m){this.r2=nbi();this.q3=nbi();BigInteger.ONE.dlShiftTo(2*m.t,this.r2);this.mu=this.r2.divide(m);this.m=m}function barrettConvert(x){if(x.s<0||x.t>2*this.m.t)return x.mod(this.m);else if(x.compareTo(this.m)<0)return x;else{var r=nbi();x.copyTo(r);this.reduce(r);return r}}function barrettRevert(x){return x}function barrettReduce(x){var self=this;x.drShiftTo(self.m.t-1,self.r2);if(x.t>self.m.t+1){x.t=self.m.t+1;x.clamp()}self.mu.multiplyUpperTo(self.r2,self.m.t+1,self.q3);self.m.multiplyLowerTo(self.q3,self.m.t+1,self.r2);while(x.compareTo(self.r2)<0)x.dAddOffset(1,self.m.t+1);x.subTo(self.r2,x);while(x.compareTo(self.m)>=0)x.subTo(self.m,x)}function barrettSqrTo(x,r){x.squareTo(r);this.reduce(r)}function barrettMulTo(x,y,r){x.multiplyTo(y,r);this.reduce(r)}Barrett.prototype.convert=barrettConvert;Barrett.prototype.revert=barrettRevert;Barrett.prototype.reduce=barrettReduce;Barrett.prototype.mulTo=barrettMulTo;Barrett.prototype.sqrTo=barrettSqrTo;function bnModPow(e,m){var i=e.bitLength(),k,r=nbv(1),z;if(i<=0)return r;else if(i<18)k=1;else if(i<48)k=3;else if(i<144)k=4;else if(i<768)k=5;else k=6;if(i<8)z=new Classic(m);else if(m.isEven())z=new Barrett(m);else z=new Montgomery(m);var g=new Array,n=3,k1=k-1,km=(1<<k)-1;g[1]=z.convert(this);if(k>1){var g2=nbi();z.sqrTo(g[1],g2);while(n<=km){g[n]=nbi();z.mulTo(g2,g[n-2],g[n]);n+=2}}var j=e.t-1,w,is1=true,r2=nbi(),t;i=nbits(e[j])-1;while(j>=0){if(i>=k1)w=e[j]>>i-k1&km;else{w=(e[j]&(1<<i+1)-1)<<k1-i;if(j>0)w|=e[j-1]>>this.DB+i-k1}n=k;while((w&1)==0){w>>=1;--n}if((i-=n)<0){i+=this.DB;--j}if(is1){g[w].copyTo(r);is1=false}else{while(n>1){z.sqrTo(r,r2);z.sqrTo(r2,r);n-=2}if(n>0)z.sqrTo(r,r2);else{t=r;r=r2;r2=t}z.mulTo(r2,g[w],r)}while(j>=0&&(e[j]&1<<i)==0){z.sqrTo(r,r2);t=r;r=r2;r2=t;if(--i<0){i=this.DB-1;--j}}}return z.revert(r)}function bnGCD(a){var x=this.s<0?this.negate():this.clone();var y=a.s<0?a.negate():a.clone();if(x.compareTo(y)<0){var t=x;x=y;y=t}var i=x.getLowestSetBit(),g=y.getLowestSetBit();if(g<0)return x;if(i<g)g=i;if(g>0){x.rShiftTo(g,x);y.rShiftTo(g,y)}while(x.signum()>0){if((i=x.getLowestSetBit())>0)x.rShiftTo(i,x);if((i=y.getLowestSetBit())>0)y.rShiftTo(i,y);if(x.compareTo(y)>=0){x.subTo(y,x);x.rShiftTo(1,x)}else{y.subTo(x,y);y.rShiftTo(1,y)}}if(g>0)y.lShiftTo(g,y);return y}function bnpModInt(n){if(n<=0)return 0;var d=this.DV%n,r=this.s<0?n-1:0;if(this.t>0)if(d==0)r=this[0]%n;else for(var i=this.t-1;i>=0;--i)r=(d*r+this[i])%n;return r}function bnModInverse(m){var ac=m.isEven();if(this.isEven()&&ac||m.signum()==0)return BigInteger.ZERO;var u=m.clone(),v=this.clone();var a=nbv(1),b=nbv(0),c=nbv(0),d=nbv(1);while(u.signum()!=0){while(u.isEven()){u.rShiftTo(1,u);if(ac){if(!a.isEven()||!b.isEven()){a.addTo(this,a);b.subTo(m,b)}a.rShiftTo(1,a)}else if(!b.isEven())b.subTo(m,b);b.rShiftTo(1,b)}while(v.isEven()){v.rShiftTo(1,v);if(ac){if(!c.isEven()||!d.isEven()){c.addTo(this,c);d.subTo(m,d)}c.rShiftTo(1,c)}else if(!d.isEven())d.subTo(m,d);d.rShiftTo(1,d)}if(u.compareTo(v)>=0){u.subTo(v,u);if(ac)a.subTo(c,a);b.subTo(d,b)}else{v.subTo(u,v);if(ac)c.subTo(a,c);d.subTo(b,d)}}if(v.compareTo(BigInteger.ONE)!=0)return BigInteger.ZERO;if(d.compareTo(m)>=0)return d.subtract(m);if(d.signum()<0)d.addTo(m,d);else return d;if(d.signum()<0)return d.add(m);else return d}proto.chunkSize=bnpChunkSize;proto.toRadix=bnpToRadix;proto.fromRadix=bnpFromRadix;proto.fromNumber=bnpFromNumber;proto.bitwiseTo=bnpBitwiseTo;proto.changeBit=bnpChangeBit;proto.addTo=bnpAddTo;proto.dMultiply=bnpDMultiply;proto.dAddOffset=bnpDAddOffset;proto.multiplyLowerTo=bnpMultiplyLowerTo;proto.multiplyUpperTo=bnpMultiplyUpperTo;proto.modInt=bnpModInt;proto.clone=bnClone;proto.intValue=bnIntValue;proto.byteValue=bnByteValue;proto.shortValue=bnShortValue;proto.signum=bnSigNum;proto.toByteArray=bnToByteArray;proto.equals=bnEquals;proto.min=bnMin;proto.max=bnMax;proto.and=bnAnd;proto.or=bnOr;proto.xor=bnXor;proto.andNot=bnAndNot;proto.not=bnNot;proto.shiftLeft=bnShiftLeft;proto.shiftRight=bnShiftRight;proto.getLowestSetBit=bnGetLowestSetBit;proto.bitCount=bnBitCount;proto.testBit=bnTestBit;proto.setBit=bnSetBit;proto.clearBit=bnClearBit;proto.flipBit=bnFlipBit;proto.add=bnAdd;proto.subtract=bnSubtract;proto.multiply=bnMultiply;proto.divide=bnDivide;proto.remainder=bnRemainder;proto.divideAndRemainder=bnDivideAndRemainder;proto.modPow=bnModPow;proto.modInverse=bnModInverse;proto.pow=bnPow;proto.gcd=bnGCD;proto.square=bnSquare;BigInteger.ZERO=nbv(0);BigInteger.ONE=nbv(1);BigInteger.valueOf=nbv},{assert:1}],25:[function(require,module,exports){(function(Buffer){var assert=require("assert");var BigInteger=require("./bigi");BigInteger.fromByteArrayUnsigned=function(byteArray){if(byteArray[0]&128){return new BigInteger([0].concat(byteArray))}return new BigInteger(byteArray)};BigInteger.prototype.toByteArrayUnsigned=function(){var byteArray=this.toByteArray();return byteArray[0]===0?byteArray.slice(1):byteArray};BigInteger.fromDERInteger=function(byteArray){return new BigInteger(byteArray)};BigInteger.prototype.toDERInteger=BigInteger.prototype.toByteArray;BigInteger.fromBuffer=function(buffer){if(buffer[0]&128){var byteArray=Array.prototype.slice.call(buffer);return new BigInteger([0].concat(byteArray))}return new BigInteger(buffer)};BigInteger.fromHex=function(hex){if(hex==="")return BigInteger.ZERO;assert.equal(hex,hex.match(/^[A-Fa-f0-9]+/),"Invalid hex string");assert.equal(hex.length%2,0,"Incomplete hex");return new BigInteger(hex,16)};BigInteger.prototype.toBuffer=function(size){var byteArray=this.toByteArrayUnsigned();var zeros=[];var padding=size-byteArray.length;while(zeros.length<padding)zeros.push(0);return new Buffer(zeros.concat(byteArray))};BigInteger.prototype.toHex=function(size){return this.toBuffer(size).toString("hex")}}).call(this,require("buffer").Buffer)},{"./bigi":24,assert:1,buffer:4}],26:[function(require,module,exports){var BigInteger=require("./bigi");require("./convert");module.exports=BigInteger},{"./bigi":24,"./convert":25}],27:[function(require,module,exports){(function(Buffer){var assert=require("assert");var ALPHABET="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";var ALPHABET_MAP={};for(var i=0;i<ALPHABET.length;i++){ALPHABET_MAP[ALPHABET.charAt(i)]=i}var BASE=58;function encode(buffer){if(buffer.length===0)return"";var i,j,digits=[0];for(i=0;i<buffer.length;i++){for(j=0;j<digits.length;j++)digits[j]<<=8;digits[0]+=buffer[i];var carry=0;for(j=0;j<digits.length;++j){digits[j]+=carry;carry=digits[j]/BASE|0;digits[j]%=BASE}while(carry){digits.push(carry%BASE);carry=carry/BASE|0}}for(i=0;i<buffer.length-1&&buffer[i]==0;i++)digits.push(0);return digits.reverse().map(function(digit){return ALPHABET[digit]}).join("")}function decode(string){if(string.length===0)return new Buffer(0);var input=string.split("").map(function(c){assert(c in ALPHABET_MAP,"Non-base58 character");return ALPHABET_MAP[c]});var i,j,bytes=[0];for(i=0;i<input.length;i++){for(j=0;j<bytes.length;j++)bytes[j]*=BASE;bytes[0]+=input[i];var carry=0;for(j=0;j<bytes.length;++j){bytes[j]+=carry;carry=bytes[j]>>8;bytes[j]&=255}while(carry){bytes.push(carry&255);carry>>=8}}for(i=0;i<input.length-1&&input[i]==0;i++)bytes.push(0);return new Buffer(bytes.reverse())}module.exports={encode:encode,decode:decode}}).call(this,require("buffer").Buffer)},{assert:1,buffer:4}],28:[function(require,module,exports){(function(Buffer){"use strict";var assert=require("assert");var base58=require("bs58");var crypto=require("crypto");function sha256x2(buffer){buffer=crypto.createHash("sha256").update(buffer).digest();return crypto.createHash("sha256").update(buffer).digest()}function encode(payload){var checksum=sha256x2(payload).slice(0,4);return base58.encode(Buffer.concat([payload,checksum]))}function decode(string){var buffer=base58.decode(string);var payload=buffer.slice(0,-4);var checksum=buffer.slice(-4);var newChecksum=sha256x2(payload).slice(0,4);assert.deepEqual(newChecksum,checksum,"Invalid checksum");return payload}module.exports={encode:encode,decode:decode}}).call(this,require("buffer").Buffer)},{assert:1,bs58:27,buffer:4,crypto:10}],29:[function(require,module,exports){arguments[4][7][0].apply(exports,arguments)},{"./md5":33,buffer:4,ripemd160:34,"sha.js":36}],30:[function(require,module,exports){module.exports=require(8)},{"./create-hash":29,buffer:4}],31:[function(require,module,exports){module.exports=require(9)},{buffer:4}],32:[function(require,module,exports){module.exports=require(10)},{"./create-hash":29,"./create-hmac":30,"./pbkdf2":40,"./rng":41,buffer:4}],33:[function(require,module,exports){module.exports=require(11)},{"./helpers":31}],34:[function(require,module,exports){module.exports=require(12)},{buffer:4}],35:[function(require,module,exports){var u=require("./util");var write=u.write;var fill=u.zeroFill;module.exports=function(Buffer){function Hash(blockSize,finalSize){this._block=new Buffer(blockSize);this._finalSize=finalSize;this._blockSize=blockSize;this._len=0;this._s=0}Hash.prototype.init=function(){this._s=0;this._len=0};function lengthOf(data,enc){if(enc==null)return data.byteLength||data.length;if(enc=="ascii"||enc=="binary")return data.length;if(enc=="hex")return data.length/2;if(enc=="base64")return data.length/3}Hash.prototype.update=function(data,enc){var bl=this._blockSize;var length;if(!enc&&"string"===typeof data)enc="utf8";if(enc){if(enc==="utf-8")enc="utf8";if(enc==="base64"||enc==="utf8")data=new Buffer(data,enc),enc=null;length=lengthOf(data,enc)}else length=data.byteLength||data.length;var l=this._len+=length;var s=this._s=this._s||0;var f=0;var buffer=this._block;while(s<l){var t=Math.min(length,f+bl);write(buffer,data,enc,s%bl,f,t);var ch=t-f;s+=ch;f+=ch;if(!(s%bl))this._update(buffer)}this._s=s;return this};Hash.prototype.digest=function(enc){var bl=this._blockSize;var fl=this._finalSize;var len=this._len*8;var x=this._block;var bits=len%(bl*8);x[this._len%bl]=128;fill(this._block,this._len%bl+1);if(bits>=fl*8){this._update(this._block);u.zeroFill(this._block,0)}x.writeInt32BE(len,fl+4);var hash=this._update(this._block)||this._hash();if(enc==null)return hash;return hash.toString(enc)};Hash.prototype._update=function(){throw new Error("_update must be implemented by subclass")};return Hash}},{"./util":39}],36:[function(require,module,exports){arguments[4][14][0].apply(exports,arguments)},{"./hash":35,"./sha1":37,"./sha256":38,buffer:4}],37:[function(require,module,exports){module.exports=require(15)},{util:23}],38:[function(require,module,exports){module.exports=require(16)},{"./util":39,util:23}],39:[function(require,module,exports){module.exports=require(17)},{}],40:[function(require,module,exports){module.exports=require(18)},{buffer:4}],41:[function(require,module,exports){module.exports=require(19)},{buffer:4}],42:[function(require,module,exports){(function(root,factory,undef){if(typeof exports==="object"){module.exports=exports=factory(require("./core"),require("./enc-base64"),require("./md5"),require("./evpkdf"),require("./cipher-core"))}else if(typeof define==="function"&&define.amd){define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){(function(){var C=CryptoJS;var C_lib=C.lib;var BlockCipher=C_lib.BlockCipher;var C_algo=C.algo;var SBOX=[];var INV_SBOX=[];var SUB_MIX_0=[];var SUB_MIX_1=[];var SUB_MIX_2=[];var SUB_MIX_3=[];var INV_SUB_MIX_0=[];var INV_SUB_MIX_1=[];var INV_SUB_MIX_2=[];var INV_SUB_MIX_3=[];(function(){var d=[];for(var i=0;i<256;i++){if(i<128){d[i]=i<<1}else{d[i]=i<<1^283}}var x=0;var xi=0;for(var i=0;i<256;i++){var sx=xi^xi<<1^xi<<2^xi<<3^xi<<4;sx=sx>>>8^sx&255^99;SBOX[x]=sx;INV_SBOX[sx]=x;var x2=d[x];var x4=d[x2];var x8=d[x4];var t=d[sx]*257^sx*16843008;SUB_MIX_0[x]=t<<24|t>>>8;SUB_MIX_1[x]=t<<16|t>>>16;SUB_MIX_2[x]=t<<8|t>>>24;SUB_MIX_3[x]=t;var t=x8*16843009^x4*65537^x2*257^x*16843008;INV_SUB_MIX_0[sx]=t<<24|t>>>8;INV_SUB_MIX_1[sx]=t<<16|t>>>16;INV_SUB_MIX_2[sx]=t<<8|t>>>24;INV_SUB_MIX_3[sx]=t;if(!x){x=xi=1}else{x=x2^d[d[d[x8^x2]]];xi^=d[d[xi]]}}})();var RCON=[0,1,2,4,8,16,32,64,128,27,54];var AES=C_algo.AES=BlockCipher.extend({_doReset:function(){var key=this._key;var keyWords=key.words;var keySize=key.sigBytes/4;var nRounds=this._nRounds=keySize+6;var ksRows=(nRounds+1)*4;var keySchedule=this._keySchedule=[];for(var ksRow=0;ksRow<ksRows;ksRow++){if(ksRow<keySize){keySchedule[ksRow]=keyWords[ksRow]}else{var t=keySchedule[ksRow-1];if(!(ksRow%keySize)){t=t<<8|t>>>24;t=SBOX[t>>>24]<<24|SBOX[t>>>16&255]<<16|SBOX[t>>>8&255]<<8|SBOX[t&255];t^=RCON[ksRow/keySize|0]<<24}else if(keySize>6&&ksRow%keySize==4){t=SBOX[t>>>24]<<24|SBOX[t>>>16&255]<<16|SBOX[t>>>8&255]<<8|SBOX[t&255]}keySchedule[ksRow]=keySchedule[ksRow-keySize]^t}}var invKeySchedule=this._invKeySchedule=[];for(var invKsRow=0;invKsRow<ksRows;invKsRow++){var ksRow=ksRows-invKsRow;if(invKsRow%4){var t=keySchedule[ksRow]}else{var t=keySchedule[ksRow-4]}if(invKsRow<4||ksRow<=4){invKeySchedule[invKsRow]=t}else{invKeySchedule[invKsRow]=INV_SUB_MIX_0[SBOX[t>>>24]]^INV_SUB_MIX_1[SBOX[t>>>16&255]]^INV_SUB_MIX_2[SBOX[t>>>8&255]]^INV_SUB_MIX_3[SBOX[t&255]]}}},encryptBlock:function(M,offset){this._doCryptBlock(M,offset,this._keySchedule,SUB_MIX_0,SUB_MIX_1,SUB_MIX_2,SUB_MIX_3,SBOX)},decryptBlock:function(M,offset){var t=M[offset+1];M[offset+1]=M[offset+3];M[offset+3]=t;this._doCryptBlock(M,offset,this._invKeySchedule,INV_SUB_MIX_0,INV_SUB_MIX_1,INV_SUB_MIX_2,INV_SUB_MIX_3,INV_SBOX);var t=M[offset+1];M[offset+1]=M[offset+3];M[offset+3]=t},_doCryptBlock:function(M,offset,keySchedule,SUB_MIX_0,SUB_MIX_1,SUB_MIX_2,SUB_MIX_3,SBOX){var nRounds=this._nRounds;var s0=M[offset]^keySchedule[0];var s1=M[offset+1]^keySchedule[1];var s2=M[offset+2]^keySchedule[2];var s3=M[offset+3]^keySchedule[3];var ksRow=4;for(var round=1;round<nRounds;round++){var t0=SUB_MIX_0[s0>>>24]^SUB_MIX_1[s1>>>16&255]^SUB_MIX_2[s2>>>8&255]^SUB_MIX_3[s3&255]^keySchedule[ksRow++];var t1=SUB_MIX_0[s1>>>24]^SUB_MIX_1[s2>>>16&255]^SUB_MIX_2[s3>>>8&255]^SUB_MIX_3[s0&255]^keySchedule[ksRow++];var t2=SUB_MIX_0[s2>>>24]^SUB_MIX_1[s3>>>16&255]^SUB_MIX_2[s0>>>8&255]^SUB_MIX_3[s1&255]^keySchedule[ksRow++];var t3=SUB_MIX_0[s3>>>24]^SUB_MIX_1[s0>>>16&255]^SUB_MIX_2[s1>>>8&255]^SUB_MIX_3[s2&255]^keySchedule[ksRow++];s0=t0;s1=t1;s2=t2;s3=t3}var t0=(SBOX[s0>>>24]<<24|SBOX[s1>>>16&255]<<16|SBOX[s2>>>8&255]<<8|SBOX[s3&255])^keySchedule[ksRow++];var t1=(SBOX[s1>>>24]<<24|SBOX[s2>>>16&255]<<16|SBOX[s3>>>8&255]<<8|SBOX[s0&255])^keySchedule[ksRow++];var t2=(SBOX[s2>>>24]<<24|SBOX[s3>>>16&255]<<16|SBOX[s0>>>8&255]<<8|SBOX[s1&255])^keySchedule[ksRow++];var t3=(SBOX[s3>>>24]<<24|SBOX[s0>>>16&255]<<16|SBOX[s1>>>8&255]<<8|SBOX[s2&255])^keySchedule[ksRow++];M[offset]=t0;M[offset+1]=t1;M[offset+2]=t2;M[offset+3]=t3},keySize:256/32});C.AES=BlockCipher._createHelper(AES)})();return CryptoJS.AES})},{"./cipher-core":43,"./core":44,"./enc-base64":45,"./evpkdf":47,"./md5":52}],43:[function(require,module,exports){(function(root,factory){if(typeof exports==="object"){module.exports=exports=factory(require("./core"))}else if(typeof define==="function"&&define.amd){define(["./core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){CryptoJS.lib.Cipher||function(undefined){var C=CryptoJS;var C_lib=C.lib;var Base=C_lib.Base;var WordArray=C_lib.WordArray;var BufferedBlockAlgorithm=C_lib.BufferedBlockAlgorithm;var C_enc=C.enc;var Utf8=C_enc.Utf8;var Base64=C_enc.Base64;var C_algo=C.algo;var EvpKDF=C_algo.EvpKDF;var Cipher=C_lib.Cipher=BufferedBlockAlgorithm.extend({cfg:Base.extend(),createEncryptor:function(key,cfg){return this.create(this._ENC_XFORM_MODE,key,cfg)},createDecryptor:function(key,cfg){return this.create(this._DEC_XFORM_MODE,key,cfg)},init:function(xformMode,key,cfg){this.cfg=this.cfg.extend(cfg);this._xformMode=xformMode;this._key=key;this.reset()},reset:function(){BufferedBlockAlgorithm.reset.call(this);this._doReset()},process:function(dataUpdate){this._append(dataUpdate);return this._process()},finalize:function(dataUpdate){if(dataUpdate){this._append(dataUpdate)}var finalProcessedData=this._doFinalize();return finalProcessedData},keySize:128/32,ivSize:128/32,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function selectCipherStrategy(key){if(typeof key=="string"){return PasswordBasedCipher}else{return SerializableCipher}}return function(cipher){return{encrypt:function(message,key,cfg){return selectCipherStrategy(key).encrypt(cipher,message,key,cfg)},decrypt:function(ciphertext,key,cfg){return selectCipherStrategy(key).decrypt(cipher,ciphertext,key,cfg)}}}}()});var StreamCipher=C_lib.StreamCipher=Cipher.extend({_doFinalize:function(){var finalProcessedBlocks=this._process(!!"flush");return finalProcessedBlocks},blockSize:1});var C_mode=C.mode={};var BlockCipherMode=C_lib.BlockCipherMode=Base.extend({createEncryptor:function(cipher,iv){return this.Encryptor.create(cipher,iv)},createDecryptor:function(cipher,iv){return this.Decryptor.create(cipher,iv)},init:function(cipher,iv){this._cipher=cipher;this._iv=iv}});var CBC=C_mode.CBC=function(){var CBC=BlockCipherMode.extend();CBC.Encryptor=CBC.extend({processBlock:function(words,offset){var cipher=this._cipher;var blockSize=cipher.blockSize;xorBlock.call(this,words,offset,blockSize);cipher.encryptBlock(words,offset);this._prevBlock=words.slice(offset,offset+blockSize)}});CBC.Decryptor=CBC.extend({processBlock:function(words,offset){var cipher=this._cipher;var blockSize=cipher.blockSize;var thisBlock=words.slice(offset,offset+blockSize);cipher.decryptBlock(words,offset);xorBlock.call(this,words,offset,blockSize);this._prevBlock=thisBlock}});function xorBlock(words,offset,blockSize){var iv=this._iv;if(iv){var block=iv;this._iv=undefined}else{var block=this._prevBlock}for(var i=0;i<blockSize;i++){words[offset+i]^=block[i]}}return CBC}();var C_pad=C.pad={};var Pkcs7=C_pad.Pkcs7={pad:function(data,blockSize){var blockSizeBytes=blockSize*4;var nPaddingBytes=blockSizeBytes-data.sigBytes%blockSizeBytes;var paddingWord=nPaddingBytes<<24|nPaddingBytes<<16|nPaddingBytes<<8|nPaddingBytes;var paddingWords=[];for(var i=0;i<nPaddingBytes;i+=4){paddingWords.push(paddingWord)}var padding=WordArray.create(paddingWords,nPaddingBytes);data.concat(padding)},unpad:function(data){var nPaddingBytes=data.words[data.sigBytes-1>>>2]&255;data.sigBytes-=nPaddingBytes}};var BlockCipher=C_lib.BlockCipher=Cipher.extend({cfg:Cipher.cfg.extend({mode:CBC,padding:Pkcs7}),reset:function(){Cipher.reset.call(this);var cfg=this.cfg;var iv=cfg.iv;var mode=cfg.mode;if(this._xformMode==this._ENC_XFORM_MODE){var modeCreator=mode.createEncryptor}else{var modeCreator=mode.createDecryptor;this._minBufferSize=1}this._mode=modeCreator.call(mode,this,iv&&iv.words)},_doProcessBlock:function(words,offset){this._mode.processBlock(words,offset)},_doFinalize:function(){var padding=this.cfg.padding;
if(this._xformMode==this._ENC_XFORM_MODE){padding.pad(this._data,this.blockSize);var finalProcessedBlocks=this._process(!!"flush")}else{var finalProcessedBlocks=this._process(!!"flush");padding.unpad(finalProcessedBlocks)}return finalProcessedBlocks},blockSize:128/32});var CipherParams=C_lib.CipherParams=Base.extend({init:function(cipherParams){this.mixIn(cipherParams)},toString:function(formatter){return(formatter||this.formatter).stringify(this)}});var C_format=C.format={};var OpenSSLFormatter=C_format.OpenSSL={stringify:function(cipherParams){var ciphertext=cipherParams.ciphertext;var salt=cipherParams.salt;if(salt){var wordArray=WordArray.create([1398893684,1701076831]).concat(salt).concat(ciphertext)}else{var wordArray=ciphertext}return wordArray.toString(Base64)},parse:function(openSSLStr){var ciphertext=Base64.parse(openSSLStr);var ciphertextWords=ciphertext.words;if(ciphertextWords[0]==1398893684&&ciphertextWords[1]==1701076831){var salt=WordArray.create(ciphertextWords.slice(2,4));ciphertextWords.splice(0,4);ciphertext.sigBytes-=16}return CipherParams.create({ciphertext:ciphertext,salt:salt})}};var SerializableCipher=C_lib.SerializableCipher=Base.extend({cfg:Base.extend({format:OpenSSLFormatter}),encrypt:function(cipher,message,key,cfg){cfg=this.cfg.extend(cfg);var encryptor=cipher.createEncryptor(key,cfg);var ciphertext=encryptor.finalize(message);var cipherCfg=encryptor.cfg;return CipherParams.create({ciphertext:ciphertext,key:key,iv:cipherCfg.iv,algorithm:cipher,mode:cipherCfg.mode,padding:cipherCfg.padding,blockSize:cipher.blockSize,formatter:cfg.format})},decrypt:function(cipher,ciphertext,key,cfg){cfg=this.cfg.extend(cfg);ciphertext=this._parse(ciphertext,cfg.format);var plaintext=cipher.createDecryptor(key,cfg).finalize(ciphertext.ciphertext);return plaintext},_parse:function(ciphertext,format){if(typeof ciphertext=="string"){return format.parse(ciphertext,this)}else{return ciphertext}}});var C_kdf=C.kdf={};var OpenSSLKdf=C_kdf.OpenSSL={execute:function(password,keySize,ivSize,salt){if(!salt){salt=WordArray.random(64/8)}var key=EvpKDF.create({keySize:keySize+ivSize}).compute(password,salt);var iv=WordArray.create(key.words.slice(keySize),ivSize*4);key.sigBytes=keySize*4;return CipherParams.create({key:key,iv:iv,salt:salt})}};var PasswordBasedCipher=C_lib.PasswordBasedCipher=SerializableCipher.extend({cfg:SerializableCipher.cfg.extend({kdf:OpenSSLKdf}),encrypt:function(cipher,message,password,cfg){cfg=this.cfg.extend(cfg);var derivedParams=cfg.kdf.execute(password,cipher.keySize,cipher.ivSize);cfg.iv=derivedParams.iv;var ciphertext=SerializableCipher.encrypt.call(this,cipher,message,derivedParams.key,cfg);ciphertext.mixIn(derivedParams);return ciphertext},decrypt:function(cipher,ciphertext,password,cfg){cfg=this.cfg.extend(cfg);ciphertext=this._parse(ciphertext,cfg.format);var derivedParams=cfg.kdf.execute(password,cipher.keySize,cipher.ivSize,ciphertext.salt);cfg.iv=derivedParams.iv;var plaintext=SerializableCipher.decrypt.call(this,cipher,ciphertext,derivedParams.key,cfg);return plaintext}})}()})},{"./core":44}],44:[function(require,module,exports){(function(root,factory){if(typeof exports==="object"){module.exports=exports=factory()}else if(typeof define==="function"&&define.amd){define([],factory)}else{root.CryptoJS=factory()}})(this,function(){var CryptoJS=CryptoJS||function(Math,undefined){var C={};var C_lib=C.lib={};var Base=C_lib.Base=function(){function F(){}return{extend:function(overrides){F.prototype=this;var subtype=new F;if(overrides){subtype.mixIn(overrides)}if(!subtype.hasOwnProperty("init")){subtype.init=function(){subtype.$super.init.apply(this,arguments)}}subtype.init.prototype=subtype;subtype.$super=this;return subtype},create:function(){var instance=this.extend();instance.init.apply(instance,arguments);return instance},init:function(){},mixIn:function(properties){for(var propertyName in properties){if(properties.hasOwnProperty(propertyName)){this[propertyName]=properties[propertyName]}}if(properties.hasOwnProperty("toString")){this.toString=properties.toString}},clone:function(){return this.init.prototype.extend(this)}}}();var WordArray=C_lib.WordArray=Base.extend({init:function(words,sigBytes){words=this.words=words||[];if(sigBytes!=undefined){this.sigBytes=sigBytes}else{this.sigBytes=words.length*4}},toString:function(encoder){return(encoder||Hex).stringify(this)},concat:function(wordArray){var thisWords=this.words;var thatWords=wordArray.words;var thisSigBytes=this.sigBytes;var thatSigBytes=wordArray.sigBytes;this.clamp();if(thisSigBytes%4){for(var i=0;i<thatSigBytes;i++){var thatByte=thatWords[i>>>2]>>>24-i%4*8&255;thisWords[thisSigBytes+i>>>2]|=thatByte<<24-(thisSigBytes+i)%4*8}}else if(thatWords.length>65535){for(var i=0;i<thatSigBytes;i+=4){thisWords[thisSigBytes+i>>>2]=thatWords[i>>>2]}}else{thisWords.push.apply(thisWords,thatWords)}this.sigBytes+=thatSigBytes;return this},clamp:function(){var words=this.words;var sigBytes=this.sigBytes;words[sigBytes>>>2]&=4294967295<<32-sigBytes%4*8;words.length=Math.ceil(sigBytes/4)},clone:function(){var clone=Base.clone.call(this);clone.words=this.words.slice(0);return clone},random:function(nBytes){var words=[];for(var i=0;i<nBytes;i+=4){words.push(Math.random()*4294967296|0)}return new WordArray.init(words,nBytes)}});var C_enc=C.enc={};var Hex=C_enc.Hex={stringify:function(wordArray){var words=wordArray.words;var sigBytes=wordArray.sigBytes;var hexChars=[];for(var i=0;i<sigBytes;i++){var bite=words[i>>>2]>>>24-i%4*8&255;hexChars.push((bite>>>4).toString(16));hexChars.push((bite&15).toString(16))}return hexChars.join("")},parse:function(hexStr){var hexStrLength=hexStr.length;var words=[];for(var i=0;i<hexStrLength;i+=2){words[i>>>3]|=parseInt(hexStr.substr(i,2),16)<<24-i%8*4}return new WordArray.init(words,hexStrLength/2)}};var Latin1=C_enc.Latin1={stringify:function(wordArray){var words=wordArray.words;var sigBytes=wordArray.sigBytes;var latin1Chars=[];for(var i=0;i<sigBytes;i++){var bite=words[i>>>2]>>>24-i%4*8&255;latin1Chars.push(String.fromCharCode(bite))}return latin1Chars.join("")},parse:function(latin1Str){var latin1StrLength=latin1Str.length;var words=[];for(var i=0;i<latin1StrLength;i++){words[i>>>2]|=(latin1Str.charCodeAt(i)&255)<<24-i%4*8}return new WordArray.init(words,latin1StrLength)}};var Utf8=C_enc.Utf8={stringify:function(wordArray){try{return decodeURIComponent(escape(Latin1.stringify(wordArray)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(utf8Str){return Latin1.parse(unescape(encodeURIComponent(utf8Str)))}};var BufferedBlockAlgorithm=C_lib.BufferedBlockAlgorithm=Base.extend({reset:function(){this._data=new WordArray.init;this._nDataBytes=0},_append:function(data){if(typeof data=="string"){data=Utf8.parse(data)}this._data.concat(data);this._nDataBytes+=data.sigBytes},_process:function(doFlush){var data=this._data;var dataWords=data.words;var dataSigBytes=data.sigBytes;var blockSize=this.blockSize;var blockSizeBytes=blockSize*4;var nBlocksReady=dataSigBytes/blockSizeBytes;if(doFlush){nBlocksReady=Math.ceil(nBlocksReady)}else{nBlocksReady=Math.max((nBlocksReady|0)-this._minBufferSize,0)}var nWordsReady=nBlocksReady*blockSize;var nBytesReady=Math.min(nWordsReady*4,dataSigBytes);if(nWordsReady){for(var offset=0;offset<nWordsReady;offset+=blockSize){this._doProcessBlock(dataWords,offset)}var processedWords=dataWords.splice(0,nWordsReady);data.sigBytes-=nBytesReady}return new WordArray.init(processedWords,nBytesReady)},clone:function(){var clone=Base.clone.call(this);clone._data=this._data.clone();return clone},_minBufferSize:0});var Hasher=C_lib.Hasher=BufferedBlockAlgorithm.extend({cfg:Base.extend(),init:function(cfg){this.cfg=this.cfg.extend(cfg);this.reset()},reset:function(){BufferedBlockAlgorithm.reset.call(this);this._doReset()},update:function(messageUpdate){this._append(messageUpdate);this._process();return this},finalize:function(messageUpdate){if(messageUpdate){this._append(messageUpdate)}var hash=this._doFinalize();return hash},blockSize:512/32,_createHelper:function(hasher){return function(message,cfg){return new hasher.init(cfg).finalize(message)}},_createHmacHelper:function(hasher){return function(message,key){return new C_algo.HMAC.init(hasher,key).finalize(message)}}});var C_algo=C.algo={};return C}(Math);return CryptoJS})},{}],45:[function(require,module,exports){(function(root,factory){if(typeof exports==="object"){module.exports=exports=factory(require("./core"))}else if(typeof define==="function"&&define.amd){define(["./core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){(function(){var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var C_enc=C.enc;var Base64=C_enc.Base64={stringify:function(wordArray){var words=wordArray.words;var sigBytes=wordArray.sigBytes;var map=this._map;wordArray.clamp();var base64Chars=[];for(var i=0;i<sigBytes;i+=3){var byte1=words[i>>>2]>>>24-i%4*8&255;var byte2=words[i+1>>>2]>>>24-(i+1)%4*8&255;var byte3=words[i+2>>>2]>>>24-(i+2)%4*8&255;var triplet=byte1<<16|byte2<<8|byte3;for(var j=0;j<4&&i+j*.75<sigBytes;j++){base64Chars.push(map.charAt(triplet>>>6*(3-j)&63))}}var paddingChar=map.charAt(64);if(paddingChar){while(base64Chars.length%4){base64Chars.push(paddingChar)}}return base64Chars.join("")},parse:function(base64Str){var base64StrLength=base64Str.length;var map=this._map;var paddingChar=map.charAt(64);if(paddingChar){var paddingIndex=base64Str.indexOf(paddingChar);if(paddingIndex!=-1){base64StrLength=paddingIndex}}var words=[];var nBytes=0;for(var i=0;i<base64StrLength;i++){if(i%4){var bits1=map.indexOf(base64Str.charAt(i-1))<<i%4*2;var bits2=map.indexOf(base64Str.charAt(i))>>>6-i%4*2;words[nBytes>>>2]|=(bits1|bits2)<<24-nBytes%4*8;nBytes++}}return WordArray.create(words,nBytes)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();return CryptoJS.enc.Base64})},{"./core":44}],46:[function(require,module,exports){(function(root,factory){if(typeof exports==="object"){module.exports=exports=factory(require("./core"))}else if(typeof define==="function"&&define.amd){define(["./core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){(function(){var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var C_enc=C.enc;var Utf16BE=C_enc.Utf16=C_enc.Utf16BE={stringify:function(wordArray){var words=wordArray.words;var sigBytes=wordArray.sigBytes;var utf16Chars=[];for(var i=0;i<sigBytes;i+=2){var codePoint=words[i>>>2]>>>16-i%4*8&65535;utf16Chars.push(String.fromCharCode(codePoint))}return utf16Chars.join("")},parse:function(utf16Str){var utf16StrLength=utf16Str.length;var words=[];for(var i=0;i<utf16StrLength;i++){words[i>>>1]|=utf16Str.charCodeAt(i)<<16-i%2*16}return WordArray.create(words,utf16StrLength*2)}};C_enc.Utf16LE={stringify:function(wordArray){var words=wordArray.words;var sigBytes=wordArray.sigBytes;var utf16Chars=[];for(var i=0;i<sigBytes;i+=2){var codePoint=swapEndian(words[i>>>2]>>>16-i%4*8&65535);utf16Chars.push(String.fromCharCode(codePoint))}return utf16Chars.join("")},parse:function(utf16Str){var utf16StrLength=utf16Str.length;var words=[];for(var i=0;i<utf16StrLength;i++){words[i>>>1]|=swapEndian(utf16Str.charCodeAt(i)<<16-i%2*16)}return WordArray.create(words,utf16StrLength*2)}};function swapEndian(word){return word<<8&4278255360|word>>>8&16711935}})();return CryptoJS.enc.Utf16})},{"./core":44}],47:[function(require,module,exports){(function(root,factory,undef){if(typeof exports==="object"){module.exports=exports=factory(require("./core"),require("./sha1"),require("./hmac"))}else if(typeof define==="function"&&define.amd){define(["./core","./sha1","./hmac"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){(function(){var C=CryptoJS;var C_lib=C.lib;var Base=C_lib.Base;var WordArray=C_lib.WordArray;var C_algo=C.algo;var MD5=C_algo.MD5;var EvpKDF=C_algo.EvpKDF=Base.extend({cfg:Base.extend({keySize:128/32,hasher:MD5,iterations:1}),init:function(cfg){this.cfg=this.cfg.extend(cfg)},compute:function(password,salt){var cfg=this.cfg;var hasher=cfg.hasher.create();var derivedKey=WordArray.create();var derivedKeyWords=derivedKey.words;var keySize=cfg.keySize;var iterations=cfg.iterations;while(derivedKeyWords.length<keySize){if(block){hasher.update(block)}var block=hasher.update(password).finalize(salt);hasher.reset();for(var i=1;i<iterations;i++){block=hasher.finalize(block);hasher.reset()}derivedKey.concat(block)}derivedKey.sigBytes=keySize*4;return derivedKey}});C.EvpKDF=function(password,salt,cfg){return EvpKDF.create(cfg).compute(password,salt)}})();return CryptoJS.EvpKDF})},{"./core":44,"./hmac":49,"./sha1":68}],48:[function(require,module,exports){(function(root,factory,undef){if(typeof exports==="object"){module.exports=exports=factory(require("./core"),require("./cipher-core"))}else if(typeof define==="function"&&define.amd){define(["./core","./cipher-core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){(function(undefined){var C=CryptoJS;var C_lib=C.lib;var CipherParams=C_lib.CipherParams;var C_enc=C.enc;var Hex=C_enc.Hex;var C_format=C.format;var HexFormatter=C_format.Hex={stringify:function(cipherParams){return cipherParams.ciphertext.toString(Hex)},parse:function(input){var ciphertext=Hex.parse(input);return CipherParams.create({ciphertext:ciphertext})}}})();return CryptoJS.format.Hex})},{"./cipher-core":43,"./core":44}],49:[function(require,module,exports){(function(root,factory){if(typeof exports==="object"){module.exports=exports=factory(require("./core"))}else if(typeof define==="function"&&define.amd){define(["./core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){(function(){var C=CryptoJS;var C_lib=C.lib;var Base=C_lib.Base;var C_enc=C.enc;var Utf8=C_enc.Utf8;var C_algo=C.algo;var HMAC=C_algo.HMAC=Base.extend({init:function(hasher,key){hasher=this._hasher=new hasher.init;if(typeof key=="string"){key=Utf8.parse(key)}var hasherBlockSize=hasher.blockSize;var hasherBlockSizeBytes=hasherBlockSize*4;if(key.sigBytes>hasherBlockSizeBytes){key=hasher.finalize(key)}key.clamp();var oKey=this._oKey=key.clone();var iKey=this._iKey=key.clone();var oKeyWords=oKey.words;var iKeyWords=iKey.words;for(var i=0;i<hasherBlockSize;i++){oKeyWords[i]^=1549556828;iKeyWords[i]^=909522486}oKey.sigBytes=iKey.sigBytes=hasherBlockSizeBytes;this.reset()},reset:function(){var hasher=this._hasher;hasher.reset();hasher.update(this._iKey)},update:function(messageUpdate){this._hasher.update(messageUpdate);return this},finalize:function(messageUpdate){var hasher=this._hasher;var innerHash=hasher.finalize(messageUpdate);hasher.reset();var hmac=hasher.finalize(this._oKey.clone().concat(innerHash));return hmac}})})()})},{"./core":44}],50:[function(require,module,exports){(function(root,factory,undef){if(typeof exports==="object"){module.exports=exports=factory(require("./core"),require("./x64-core"),require("./lib-typedarrays"),require("./enc-utf16"),require("./enc-base64"),require("./md5"),require("./sha1"),require("./sha256"),require("./sha224"),require("./sha512"),require("./sha384"),require("./sha3"),require("./ripemd160"),require("./hmac"),require("./pbkdf2"),require("./evpkdf"),require("./cipher-core"),require("./mode-cfb"),require("./mode-ctr"),require("./mode-ctr-gladman"),require("./mode-ofb"),require("./mode-ecb"),require("./pad-ansix923"),require("./pad-iso10126"),require("./pad-iso97971"),require("./pad-zeropadding"),require("./pad-nopadding"),require("./format-hex"),require("./aes"),require("./tripledes"),require("./rc4"),require("./rabbit"),require("./rabbit-legacy"))}else if(typeof define==="function"&&define.amd){define(["./core","./x64-core","./lib-typedarrays","./enc-utf16","./enc-base64","./md5","./sha1","./sha256","./sha224","./sha512","./sha384","./sha3","./ripemd160","./hmac","./pbkdf2","./evpkdf","./cipher-core","./mode-cfb","./mode-ctr","./mode-ctr-gladman","./mode-ofb","./mode-ecb","./pad-ansix923","./pad-iso10126","./pad-iso97971","./pad-zeropadding","./pad-nopadding","./format-hex","./aes","./tripledes","./rc4","./rabbit","./rabbit-legacy"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){return CryptoJS})},{"./aes":42,"./cipher-core":43,"./core":44,"./enc-base64":45,"./enc-utf16":46,"./evpkdf":47,"./format-hex":48,"./hmac":49,"./lib-typedarrays":51,"./md5":52,"./mode-cfb":53,"./mode-ctr":55,"./mode-ctr-gladman":54,"./mode-ecb":56,"./mode-ofb":57,"./pad-ansix923":58,"./pad-iso10126":59,"./pad-iso97971":60,"./pad-nopadding":61,"./pad-zeropadding":62,"./pbkdf2":63,"./rabbit":65,"./rabbit-legacy":64,"./rc4":66,"./ripemd160":67,"./sha1":68,"./sha224":69,"./sha256":70,"./sha3":71,"./sha384":72,"./sha512":73,"./tripledes":74,"./x64-core":75}],51:[function(require,module,exports){(function(root,factory){if(typeof exports==="object"){module.exports=exports=factory(require("./core"))}else if(typeof define==="function"&&define.amd){define(["./core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){(function(){if(typeof ArrayBuffer!="function"){return}var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var superInit=WordArray.init;var subInit=WordArray.init=function(typedArray){if(typedArray instanceof ArrayBuffer){typedArray=new Uint8Array(typedArray)}if(typedArray instanceof Int8Array||typedArray instanceof Uint8ClampedArray||typedArray instanceof Int16Array||typedArray instanceof Uint16Array||typedArray instanceof Int32Array||typedArray instanceof Uint32Array||typedArray instanceof Float32Array||typedArray instanceof Float64Array){typedArray=new Uint8Array(typedArray.buffer,typedArray.byteOffset,typedArray.byteLength)}if(typedArray instanceof Uint8Array){var typedArrayByteLength=typedArray.byteLength;var words=[];for(var i=0;i<typedArrayByteLength;i++){words[i>>>2]|=typedArray[i]<<24-i%4*8}superInit.call(this,words,typedArrayByteLength)}else{superInit.apply(this,arguments)}};subInit.prototype=WordArray})();return CryptoJS.lib.WordArray})},{"./core":44}],52:[function(require,module,exports){(function(root,factory){if(typeof exports==="object"){module.exports=exports=factory(require("./core"))}else if(typeof define==="function"&&define.amd){define(["./core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){(function(Math){var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var Hasher=C_lib.Hasher;var C_algo=C.algo;var T=[];(function(){for(var i=0;i<64;i++){T[i]=Math.abs(Math.sin(i+1))*4294967296|0}})();var MD5=C_algo.MD5=Hasher.extend({_doReset:function(){this._hash=new WordArray.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(M,offset){for(var i=0;i<16;i++){var offset_i=offset+i;var M_offset_i=M[offset_i];M[offset_i]=(M_offset_i<<8|M_offset_i>>>24)&16711935|(M_offset_i<<24|M_offset_i>>>8)&4278255360}var H=this._hash.words;var M_offset_0=M[offset+0];var M_offset_1=M[offset+1];var M_offset_2=M[offset+2];var M_offset_3=M[offset+3];var M_offset_4=M[offset+4];var M_offset_5=M[offset+5];var M_offset_6=M[offset+6];var M_offset_7=M[offset+7];var M_offset_8=M[offset+8];var M_offset_9=M[offset+9];var M_offset_10=M[offset+10];var M_offset_11=M[offset+11];var M_offset_12=M[offset+12];var M_offset_13=M[offset+13];var M_offset_14=M[offset+14];var M_offset_15=M[offset+15];var a=H[0];var b=H[1];var c=H[2];var d=H[3];a=FF(a,b,c,d,M_offset_0,7,T[0]);d=FF(d,a,b,c,M_offset_1,12,T[1]);c=FF(c,d,a,b,M_offset_2,17,T[2]);b=FF(b,c,d,a,M_offset_3,22,T[3]);a=FF(a,b,c,d,M_offset_4,7,T[4]);d=FF(d,a,b,c,M_offset_5,12,T[5]);c=FF(c,d,a,b,M_offset_6,17,T[6]);b=FF(b,c,d,a,M_offset_7,22,T[7]);a=FF(a,b,c,d,M_offset_8,7,T[8]);d=FF(d,a,b,c,M_offset_9,12,T[9]);c=FF(c,d,a,b,M_offset_10,17,T[10]);b=FF(b,c,d,a,M_offset_11,22,T[11]);a=FF(a,b,c,d,M_offset_12,7,T[12]);d=FF(d,a,b,c,M_offset_13,12,T[13]);c=FF(c,d,a,b,M_offset_14,17,T[14]);b=FF(b,c,d,a,M_offset_15,22,T[15]);a=GG(a,b,c,d,M_offset_1,5,T[16]);d=GG(d,a,b,c,M_offset_6,9,T[17]);c=GG(c,d,a,b,M_offset_11,14,T[18]);b=GG(b,c,d,a,M_offset_0,20,T[19]);a=GG(a,b,c,d,M_offset_5,5,T[20]);d=GG(d,a,b,c,M_offset_10,9,T[21]);c=GG(c,d,a,b,M_offset_15,14,T[22]);b=GG(b,c,d,a,M_offset_4,20,T[23]);a=GG(a,b,c,d,M_offset_9,5,T[24]);d=GG(d,a,b,c,M_offset_14,9,T[25]);c=GG(c,d,a,b,M_offset_3,14,T[26]);b=GG(b,c,d,a,M_offset_8,20,T[27]);a=GG(a,b,c,d,M_offset_13,5,T[28]);d=GG(d,a,b,c,M_offset_2,9,T[29]);c=GG(c,d,a,b,M_offset_7,14,T[30]);b=GG(b,c,d,a,M_offset_12,20,T[31]);a=HH(a,b,c,d,M_offset_5,4,T[32]);d=HH(d,a,b,c,M_offset_8,11,T[33]);c=HH(c,d,a,b,M_offset_11,16,T[34]);b=HH(b,c,d,a,M_offset_14,23,T[35]);a=HH(a,b,c,d,M_offset_1,4,T[36]);d=HH(d,a,b,c,M_offset_4,11,T[37]);c=HH(c,d,a,b,M_offset_7,16,T[38]);b=HH(b,c,d,a,M_offset_10,23,T[39]);a=HH(a,b,c,d,M_offset_13,4,T[40]);d=HH(d,a,b,c,M_offset_0,11,T[41]);c=HH(c,d,a,b,M_offset_3,16,T[42]);b=HH(b,c,d,a,M_offset_6,23,T[43]);a=HH(a,b,c,d,M_offset_9,4,T[44]);d=HH(d,a,b,c,M_offset_12,11,T[45]);c=HH(c,d,a,b,M_offset_15,16,T[46]);b=HH(b,c,d,a,M_offset_2,23,T[47]);a=II(a,b,c,d,M_offset_0,6,T[48]);d=II(d,a,b,c,M_offset_7,10,T[49]);c=II(c,d,a,b,M_offset_14,15,T[50]);b=II(b,c,d,a,M_offset_5,21,T[51]);a=II(a,b,c,d,M_offset_12,6,T[52]);d=II(d,a,b,c,M_offset_3,10,T[53]);c=II(c,d,a,b,M_offset_10,15,T[54]);b=II(b,c,d,a,M_offset_1,21,T[55]);a=II(a,b,c,d,M_offset_8,6,T[56]);d=II(d,a,b,c,M_offset_15,10,T[57]);c=II(c,d,a,b,M_offset_6,15,T[58]);b=II(b,c,d,a,M_offset_13,21,T[59]);a=II(a,b,c,d,M_offset_4,6,T[60]);d=II(d,a,b,c,M_offset_11,10,T[61]);c=II(c,d,a,b,M_offset_2,15,T[62]);b=II(b,c,d,a,M_offset_9,21,T[63]);H[0]=H[0]+a|0;H[1]=H[1]+b|0;H[2]=H[2]+c|0;H[3]=H[3]+d|0},_doFinalize:function(){var data=this._data;var dataWords=data.words;var nBitsTotal=this._nDataBytes*8;var nBitsLeft=data.sigBytes*8;dataWords[nBitsLeft>>>5]|=128<<24-nBitsLeft%32;var nBitsTotalH=Math.floor(nBitsTotal/4294967296);var nBitsTotalL=nBitsTotal;dataWords[(nBitsLeft+64>>>9<<4)+15]=(nBitsTotalH<<8|nBitsTotalH>>>24)&16711935|(nBitsTotalH<<24|nBitsTotalH>>>8)&4278255360;dataWords[(nBitsLeft+64>>>9<<4)+14]=(nBitsTotalL<<8|nBitsTotalL>>>24)&16711935|(nBitsTotalL<<24|nBitsTotalL>>>8)&4278255360;data.sigBytes=(dataWords.length+1)*4;this._process();var hash=this._hash;var H=hash.words;for(var i=0;i<4;i++){var H_i=H[i];H[i]=(H_i<<8|H_i>>>24)&16711935|(H_i<<24|H_i>>>8)&4278255360}return hash},clone:function(){var clone=Hasher.clone.call(this);clone._hash=this._hash.clone();return clone}});function FF(a,b,c,d,x,s,t){var n=a+(b&c|~b&d)+x+t;return(n<<s|n>>>32-s)+b}function GG(a,b,c,d,x,s,t){var n=a+(b&d|c&~d)+x+t;return(n<<s|n>>>32-s)+b}function HH(a,b,c,d,x,s,t){var n=a+(b^c^d)+x+t;return(n<<s|n>>>32-s)+b}function II(a,b,c,d,x,s,t){var n=a+(c^(b|~d))+x+t;return(n<<s|n>>>32-s)+b}C.MD5=Hasher._createHelper(MD5);C.HmacMD5=Hasher._createHmacHelper(MD5)})(Math);return CryptoJS.MD5})},{"./core":44}],53:[function(require,module,exports){(function(root,factory,undef){if(typeof exports==="object"){module.exports=exports=factory(require("./core"),require("./cipher-core"))}else if(typeof define==="function"&&define.amd){define(["./core","./cipher-core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){CryptoJS.mode.CFB=function(){var CFB=CryptoJS.lib.BlockCipherMode.extend();CFB.Encryptor=CFB.extend({processBlock:function(words,offset){var cipher=this._cipher;var blockSize=cipher.blockSize;generateKeystreamAndEncrypt.call(this,words,offset,blockSize,cipher);this._prevBlock=words.slice(offset,offset+blockSize)}});CFB.Decryptor=CFB.extend({processBlock:function(words,offset){var cipher=this._cipher;var blockSize=cipher.blockSize;var thisBlock=words.slice(offset,offset+blockSize);generateKeystreamAndEncrypt.call(this,words,offset,blockSize,cipher);this._prevBlock=thisBlock}});function generateKeystreamAndEncrypt(words,offset,blockSize,cipher){var iv=this._iv;if(iv){var keystream=iv.slice(0);this._iv=undefined}else{var keystream=this._prevBlock}cipher.encryptBlock(keystream,0);for(var i=0;i<blockSize;i++){words[offset+i]^=keystream[i]}}return CFB}();return CryptoJS.mode.CFB})},{"./cipher-core":43,"./core":44}],54:[function(require,module,exports){(function(root,factory,undef){if(typeof exports==="object"){module.exports=exports=factory(require("./core"),require("./cipher-core"))}else if(typeof define==="function"&&define.amd){define(["./core","./cipher-core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){CryptoJS.mode.CTRGladman=function(){var CTRGladman=CryptoJS.lib.BlockCipherMode.extend();function incWord(word){if((word>>24&255)===255){var b1=word>>16&255;var b2=word>>8&255;var b3=word&255;if(b1===255){b1=0;if(b2===255){b2=0;if(b3===255){b3=0}else{++b3}}else{++b2}}else{++b1}word=0;word+=b1<<16;word+=b2<<8;word+=b3}else{word+=1<<24}return word}function incCounter(counter){if((counter[0]=incWord(counter[0]))===0){counter[1]=incWord(counter[1])}return counter}var Encryptor=CTRGladman.Encryptor=CTRGladman.extend({processBlock:function(words,offset){var cipher=this._cipher;var blockSize=cipher.blockSize;var iv=this._iv;var counter=this._counter;if(iv){counter=this._counter=iv.slice(0);this._iv=undefined}incCounter(counter);var keystream=counter.slice(0);cipher.encryptBlock(keystream,0);for(var i=0;i<blockSize;i++){words[offset+i]^=keystream[i]}}});CTRGladman.Decryptor=Encryptor;return CTRGladman}();return CryptoJS.mode.CTRGladman})},{"./cipher-core":43,"./core":44}],55:[function(require,module,exports){(function(root,factory,undef){if(typeof exports==="object"){module.exports=exports=factory(require("./core"),require("./cipher-core"))}else if(typeof define==="function"&&define.amd){define(["./core","./cipher-core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){CryptoJS.mode.CTR=function(){var CTR=CryptoJS.lib.BlockCipherMode.extend();var Encryptor=CTR.Encryptor=CTR.extend({processBlock:function(words,offset){var cipher=this._cipher;var blockSize=cipher.blockSize;var iv=this._iv;var counter=this._counter;if(iv){counter=this._counter=iv.slice(0);this._iv=undefined}var keystream=counter.slice(0);cipher.encryptBlock(keystream,0);counter[blockSize-1]=counter[blockSize-1]+1|0;for(var i=0;i<blockSize;i++){words[offset+i]^=keystream[i]}}});CTR.Decryptor=Encryptor;return CTR}();return CryptoJS.mode.CTR})},{"./cipher-core":43,"./core":44}],56:[function(require,module,exports){(function(root,factory,undef){if(typeof exports==="object"){module.exports=exports=factory(require("./core"),require("./cipher-core"))}else if(typeof define==="function"&&define.amd){define(["./core","./cipher-core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){CryptoJS.mode.ECB=function(){var ECB=CryptoJS.lib.BlockCipherMode.extend();ECB.Encryptor=ECB.extend({processBlock:function(words,offset){this._cipher.encryptBlock(words,offset)}});ECB.Decryptor=ECB.extend({processBlock:function(words,offset){this._cipher.decryptBlock(words,offset)}});return ECB}();return CryptoJS.mode.ECB})},{"./cipher-core":43,"./core":44}],57:[function(require,module,exports){(function(root,factory,undef){if(typeof exports==="object"){module.exports=exports=factory(require("./core"),require("./cipher-core"))}else if(typeof define==="function"&&define.amd){define(["./core","./cipher-core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){CryptoJS.mode.OFB=function(){var OFB=CryptoJS.lib.BlockCipherMode.extend();var Encryptor=OFB.Encryptor=OFB.extend({processBlock:function(words,offset){var cipher=this._cipher;var blockSize=cipher.blockSize;var iv=this._iv;var keystream=this._keystream;if(iv){keystream=this._keystream=iv.slice(0);this._iv=undefined}cipher.encryptBlock(keystream,0);for(var i=0;i<blockSize;i++){words[offset+i]^=keystream[i]}}});OFB.Decryptor=Encryptor;return OFB}();return CryptoJS.mode.OFB})},{"./cipher-core":43,"./core":44}],58:[function(require,module,exports){(function(root,factory,undef){if(typeof exports==="object"){module.exports=exports=factory(require("./core"),require("./cipher-core"))}else if(typeof define==="function"&&define.amd){define(["./core","./cipher-core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){CryptoJS.pad.AnsiX923={pad:function(data,blockSize){var dataSigBytes=data.sigBytes;var blockSizeBytes=blockSize*4;var nPaddingBytes=blockSizeBytes-dataSigBytes%blockSizeBytes;var lastBytePos=dataSigBytes+nPaddingBytes-1;data.clamp();data.words[lastBytePos>>>2]|=nPaddingBytes<<24-lastBytePos%4*8;data.sigBytes+=nPaddingBytes},unpad:function(data){var nPaddingBytes=data.words[data.sigBytes-1>>>2]&255;data.sigBytes-=nPaddingBytes}};return CryptoJS.pad.Ansix923})},{"./cipher-core":43,"./core":44}],59:[function(require,module,exports){(function(root,factory,undef){if(typeof exports==="object"){module.exports=exports=factory(require("./core"),require("./cipher-core"))}else if(typeof define==="function"&&define.amd){define(["./core","./cipher-core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){CryptoJS.pad.Iso10126={pad:function(data,blockSize){var blockSizeBytes=blockSize*4;var nPaddingBytes=blockSizeBytes-data.sigBytes%blockSizeBytes;data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes-1)).concat(CryptoJS.lib.WordArray.create([nPaddingBytes<<24],1))},unpad:function(data){var nPaddingBytes=data.words[data.sigBytes-1>>>2]&255;data.sigBytes-=nPaddingBytes}};return CryptoJS.pad.Iso10126})},{"./cipher-core":43,"./core":44}],60:[function(require,module,exports){(function(root,factory,undef){if(typeof exports==="object"){module.exports=exports=factory(require("./core"),require("./cipher-core"))}else if(typeof define==="function"&&define.amd){define(["./core","./cipher-core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){CryptoJS.pad.Iso97971={pad:function(data,blockSize){data.concat(CryptoJS.lib.WordArray.create([2147483648],1));CryptoJS.pad.ZeroPadding.pad(data,blockSize)},unpad:function(data){CryptoJS.pad.ZeroPadding.unpad(data);data.sigBytes--}};return CryptoJS.pad.Iso97971})},{"./cipher-core":43,"./core":44}],61:[function(require,module,exports){(function(root,factory,undef){if(typeof exports==="object"){module.exports=exports=factory(require("./core"),require("./cipher-core"))}else if(typeof define==="function"&&define.amd){define(["./core","./cipher-core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){CryptoJS.pad.NoPadding={pad:function(){},unpad:function(){}};return CryptoJS.pad.NoPadding})},{"./cipher-core":43,"./core":44}],62:[function(require,module,exports){(function(root,factory,undef){if(typeof exports==="object"){module.exports=exports=factory(require("./core"),require("./cipher-core"))}else if(typeof define==="function"&&define.amd){define(["./core","./cipher-core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){CryptoJS.pad.ZeroPadding={pad:function(data,blockSize){var blockSizeBytes=blockSize*4;data.clamp();data.sigBytes+=blockSizeBytes-(data.sigBytes%blockSizeBytes||blockSizeBytes)},unpad:function(data){var dataWords=data.words;var i=data.sigBytes-1;while(!(dataWords[i>>>2]>>>24-i%4*8&255)){i--}data.sigBytes=i+1}};return CryptoJS.pad.ZeroPadding})},{"./cipher-core":43,"./core":44}],63:[function(require,module,exports){(function(root,factory,undef){if(typeof exports==="object"){module.exports=exports=factory(require("./core"),require("./sha1"),require("./hmac"))}else if(typeof define==="function"&&define.amd){define(["./core","./sha1","./hmac"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){(function(){var C=CryptoJS;var C_lib=C.lib;var Base=C_lib.Base;var WordArray=C_lib.WordArray;var C_algo=C.algo;var SHA1=C_algo.SHA1;var HMAC=C_algo.HMAC;var PBKDF2=C_algo.PBKDF2=Base.extend({cfg:Base.extend({keySize:128/32,hasher:SHA1,iterations:1}),init:function(cfg){this.cfg=this.cfg.extend(cfg)},compute:function(password,salt){var cfg=this.cfg;var hmac=HMAC.create(cfg.hasher,password);var derivedKey=WordArray.create();var blockIndex=WordArray.create([1]);var derivedKeyWords=derivedKey.words;var blockIndexWords=blockIndex.words;var keySize=cfg.keySize;var iterations=cfg.iterations;while(derivedKeyWords.length<keySize){var block=hmac.update(salt).finalize(blockIndex);hmac.reset();var blockWords=block.words;
var blockWordsLength=blockWords.length;var intermediate=block;for(var i=1;i<iterations;i++){intermediate=hmac.finalize(intermediate);hmac.reset();var intermediateWords=intermediate.words;for(var j=0;j<blockWordsLength;j++){blockWords[j]^=intermediateWords[j]}}derivedKey.concat(block);blockIndexWords[0]++}derivedKey.sigBytes=keySize*4;return derivedKey}});C.PBKDF2=function(password,salt,cfg){return PBKDF2.create(cfg).compute(password,salt)}})();return CryptoJS.PBKDF2})},{"./core":44,"./hmac":49,"./sha1":68}],64:[function(require,module,exports){(function(root,factory,undef){if(typeof exports==="object"){module.exports=exports=factory(require("./core"),require("./enc-base64"),require("./md5"),require("./evpkdf"),require("./cipher-core"))}else if(typeof define==="function"&&define.amd){define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){(function(){var C=CryptoJS;var C_lib=C.lib;var StreamCipher=C_lib.StreamCipher;var C_algo=C.algo;var S=[];var C_=[];var G=[];var RabbitLegacy=C_algo.RabbitLegacy=StreamCipher.extend({_doReset:function(){var K=this._key.words;var iv=this.cfg.iv;var X=this._X=[K[0],K[3]<<16|K[2]>>>16,K[1],K[0]<<16|K[3]>>>16,K[2],K[1]<<16|K[0]>>>16,K[3],K[2]<<16|K[1]>>>16];var C=this._C=[K[2]<<16|K[2]>>>16,K[0]&4294901760|K[1]&65535,K[3]<<16|K[3]>>>16,K[1]&4294901760|K[2]&65535,K[0]<<16|K[0]>>>16,K[2]&4294901760|K[3]&65535,K[1]<<16|K[1]>>>16,K[3]&4294901760|K[0]&65535];this._b=0;for(var i=0;i<4;i++){nextState.call(this)}for(var i=0;i<8;i++){C[i]^=X[i+4&7]}if(iv){var IV=iv.words;var IV_0=IV[0];var IV_1=IV[1];var i0=(IV_0<<8|IV_0>>>24)&16711935|(IV_0<<24|IV_0>>>8)&4278255360;var i2=(IV_1<<8|IV_1>>>24)&16711935|(IV_1<<24|IV_1>>>8)&4278255360;var i1=i0>>>16|i2&4294901760;var i3=i2<<16|i0&65535;C[0]^=i0;C[1]^=i1;C[2]^=i2;C[3]^=i3;C[4]^=i0;C[5]^=i1;C[6]^=i2;C[7]^=i3;for(var i=0;i<4;i++){nextState.call(this)}}},_doProcessBlock:function(M,offset){var X=this._X;nextState.call(this);S[0]=X[0]^X[5]>>>16^X[3]<<16;S[1]=X[2]^X[7]>>>16^X[5]<<16;S[2]=X[4]^X[1]>>>16^X[7]<<16;S[3]=X[6]^X[3]>>>16^X[1]<<16;for(var i=0;i<4;i++){S[i]=(S[i]<<8|S[i]>>>24)&16711935|(S[i]<<24|S[i]>>>8)&4278255360;M[offset+i]^=S[i]}},blockSize:128/32,ivSize:64/32});function nextState(){var X=this._X;var C=this._C;for(var i=0;i<8;i++){C_[i]=C[i]}C[0]=C[0]+1295307597+this._b|0;C[1]=C[1]+3545052371+(C[0]>>>0<C_[0]>>>0?1:0)|0;C[2]=C[2]+886263092+(C[1]>>>0<C_[1]>>>0?1:0)|0;C[3]=C[3]+1295307597+(C[2]>>>0<C_[2]>>>0?1:0)|0;C[4]=C[4]+3545052371+(C[3]>>>0<C_[3]>>>0?1:0)|0;C[5]=C[5]+886263092+(C[4]>>>0<C_[4]>>>0?1:0)|0;C[6]=C[6]+1295307597+(C[5]>>>0<C_[5]>>>0?1:0)|0;C[7]=C[7]+3545052371+(C[6]>>>0<C_[6]>>>0?1:0)|0;this._b=C[7]>>>0<C_[7]>>>0?1:0;for(var i=0;i<8;i++){var gx=X[i]+C[i];var ga=gx&65535;var gb=gx>>>16;var gh=((ga*ga>>>17)+ga*gb>>>15)+gb*gb;var gl=((gx&4294901760)*gx|0)+((gx&65535)*gx|0);G[i]=gh^gl}X[0]=G[0]+(G[7]<<16|G[7]>>>16)+(G[6]<<16|G[6]>>>16)|0;X[1]=G[1]+(G[0]<<8|G[0]>>>24)+G[7]|0;X[2]=G[2]+(G[1]<<16|G[1]>>>16)+(G[0]<<16|G[0]>>>16)|0;X[3]=G[3]+(G[2]<<8|G[2]>>>24)+G[1]|0;X[4]=G[4]+(G[3]<<16|G[3]>>>16)+(G[2]<<16|G[2]>>>16)|0;X[5]=G[5]+(G[4]<<8|G[4]>>>24)+G[3]|0;X[6]=G[6]+(G[5]<<16|G[5]>>>16)+(G[4]<<16|G[4]>>>16)|0;X[7]=G[7]+(G[6]<<8|G[6]>>>24)+G[5]|0}C.RabbitLegacy=StreamCipher._createHelper(RabbitLegacy)})();return CryptoJS.RabbitLegacy})},{"./cipher-core":43,"./core":44,"./enc-base64":45,"./evpkdf":47,"./md5":52}],65:[function(require,module,exports){(function(root,factory,undef){if(typeof exports==="object"){module.exports=exports=factory(require("./core"),require("./enc-base64"),require("./md5"),require("./evpkdf"),require("./cipher-core"))}else if(typeof define==="function"&&define.amd){define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){(function(){var C=CryptoJS;var C_lib=C.lib;var StreamCipher=C_lib.StreamCipher;var C_algo=C.algo;var S=[];var C_=[];var G=[];var Rabbit=C_algo.Rabbit=StreamCipher.extend({_doReset:function(){var K=this._key.words;var iv=this.cfg.iv;for(var i=0;i<4;i++){K[i]=(K[i]<<8|K[i]>>>24)&16711935|(K[i]<<24|K[i]>>>8)&4278255360}var X=this._X=[K[0],K[3]<<16|K[2]>>>16,K[1],K[0]<<16|K[3]>>>16,K[2],K[1]<<16|K[0]>>>16,K[3],K[2]<<16|K[1]>>>16];var C=this._C=[K[2]<<16|K[2]>>>16,K[0]&4294901760|K[1]&65535,K[3]<<16|K[3]>>>16,K[1]&4294901760|K[2]&65535,K[0]<<16|K[0]>>>16,K[2]&4294901760|K[3]&65535,K[1]<<16|K[1]>>>16,K[3]&4294901760|K[0]&65535];this._b=0;for(var i=0;i<4;i++){nextState.call(this)}for(var i=0;i<8;i++){C[i]^=X[i+4&7]}if(iv){var IV=iv.words;var IV_0=IV[0];var IV_1=IV[1];var i0=(IV_0<<8|IV_0>>>24)&16711935|(IV_0<<24|IV_0>>>8)&4278255360;var i2=(IV_1<<8|IV_1>>>24)&16711935|(IV_1<<24|IV_1>>>8)&4278255360;var i1=i0>>>16|i2&4294901760;var i3=i2<<16|i0&65535;C[0]^=i0;C[1]^=i1;C[2]^=i2;C[3]^=i3;C[4]^=i0;C[5]^=i1;C[6]^=i2;C[7]^=i3;for(var i=0;i<4;i++){nextState.call(this)}}},_doProcessBlock:function(M,offset){var X=this._X;nextState.call(this);S[0]=X[0]^X[5]>>>16^X[3]<<16;S[1]=X[2]^X[7]>>>16^X[5]<<16;S[2]=X[4]^X[1]>>>16^X[7]<<16;S[3]=X[6]^X[3]>>>16^X[1]<<16;for(var i=0;i<4;i++){S[i]=(S[i]<<8|S[i]>>>24)&16711935|(S[i]<<24|S[i]>>>8)&4278255360;M[offset+i]^=S[i]}},blockSize:128/32,ivSize:64/32});function nextState(){var X=this._X;var C=this._C;for(var i=0;i<8;i++){C_[i]=C[i]}C[0]=C[0]+1295307597+this._b|0;C[1]=C[1]+3545052371+(C[0]>>>0<C_[0]>>>0?1:0)|0;C[2]=C[2]+886263092+(C[1]>>>0<C_[1]>>>0?1:0)|0;C[3]=C[3]+1295307597+(C[2]>>>0<C_[2]>>>0?1:0)|0;C[4]=C[4]+3545052371+(C[3]>>>0<C_[3]>>>0?1:0)|0;C[5]=C[5]+886263092+(C[4]>>>0<C_[4]>>>0?1:0)|0;C[6]=C[6]+1295307597+(C[5]>>>0<C_[5]>>>0?1:0)|0;C[7]=C[7]+3545052371+(C[6]>>>0<C_[6]>>>0?1:0)|0;this._b=C[7]>>>0<C_[7]>>>0?1:0;for(var i=0;i<8;i++){var gx=X[i]+C[i];var ga=gx&65535;var gb=gx>>>16;var gh=((ga*ga>>>17)+ga*gb>>>15)+gb*gb;var gl=((gx&4294901760)*gx|0)+((gx&65535)*gx|0);G[i]=gh^gl}X[0]=G[0]+(G[7]<<16|G[7]>>>16)+(G[6]<<16|G[6]>>>16)|0;X[1]=G[1]+(G[0]<<8|G[0]>>>24)+G[7]|0;X[2]=G[2]+(G[1]<<16|G[1]>>>16)+(G[0]<<16|G[0]>>>16)|0;X[3]=G[3]+(G[2]<<8|G[2]>>>24)+G[1]|0;X[4]=G[4]+(G[3]<<16|G[3]>>>16)+(G[2]<<16|G[2]>>>16)|0;X[5]=G[5]+(G[4]<<8|G[4]>>>24)+G[3]|0;X[6]=G[6]+(G[5]<<16|G[5]>>>16)+(G[4]<<16|G[4]>>>16)|0;X[7]=G[7]+(G[6]<<8|G[6]>>>24)+G[5]|0}C.Rabbit=StreamCipher._createHelper(Rabbit)})();return CryptoJS.Rabbit})},{"./cipher-core":43,"./core":44,"./enc-base64":45,"./evpkdf":47,"./md5":52}],66:[function(require,module,exports){(function(root,factory,undef){if(typeof exports==="object"){module.exports=exports=factory(require("./core"),require("./enc-base64"),require("./md5"),require("./evpkdf"),require("./cipher-core"))}else if(typeof define==="function"&&define.amd){define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){(function(){var C=CryptoJS;var C_lib=C.lib;var StreamCipher=C_lib.StreamCipher;var C_algo=C.algo;var RC4=C_algo.RC4=StreamCipher.extend({_doReset:function(){var key=this._key;var keyWords=key.words;var keySigBytes=key.sigBytes;var S=this._S=[];for(var i=0;i<256;i++){S[i]=i}for(var i=0,j=0;i<256;i++){var keyByteIndex=i%keySigBytes;var keyByte=keyWords[keyByteIndex>>>2]>>>24-keyByteIndex%4*8&255;j=(j+S[i]+keyByte)%256;var t=S[i];S[i]=S[j];S[j]=t}this._i=this._j=0},_doProcessBlock:function(M,offset){M[offset]^=generateKeystreamWord.call(this)},keySize:256/32,ivSize:0});function generateKeystreamWord(){var S=this._S;var i=this._i;var j=this._j;var keystreamWord=0;for(var n=0;n<4;n++){i=(i+1)%256;j=(j+S[i])%256;var t=S[i];S[i]=S[j];S[j]=t;keystreamWord|=S[(S[i]+S[j])%256]<<24-n*8}this._i=i;this._j=j;return keystreamWord}C.RC4=StreamCipher._createHelper(RC4);var RC4Drop=C_algo.RC4Drop=RC4.extend({cfg:RC4.cfg.extend({drop:192}),_doReset:function(){RC4._doReset.call(this);for(var i=this.cfg.drop;i>0;i--){generateKeystreamWord.call(this)}}});C.RC4Drop=StreamCipher._createHelper(RC4Drop)})();return CryptoJS.RC4})},{"./cipher-core":43,"./core":44,"./enc-base64":45,"./evpkdf":47,"./md5":52}],67:[function(require,module,exports){(function(root,factory){if(typeof exports==="object"){module.exports=exports=factory(require("./core"))}else if(typeof define==="function"&&define.amd){define(["./core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){(function(Math){var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var Hasher=C_lib.Hasher;var C_algo=C.algo;var _zl=WordArray.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]);var _zr=WordArray.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]);var _sl=WordArray.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]);var _sr=WordArray.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]);var _hl=WordArray.create([0,1518500249,1859775393,2400959708,2840853838]);var _hr=WordArray.create([1352829926,1548603684,1836072691,2053994217,0]);var RIPEMD160=C_algo.RIPEMD160=Hasher.extend({_doReset:function(){this._hash=WordArray.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(M,offset){for(var i=0;i<16;i++){var offset_i=offset+i;var M_offset_i=M[offset_i];M[offset_i]=(M_offset_i<<8|M_offset_i>>>24)&16711935|(M_offset_i<<24|M_offset_i>>>8)&4278255360}var H=this._hash.words;var hl=_hl.words;var hr=_hr.words;var zl=_zl.words;var zr=_zr.words;var sl=_sl.words;var sr=_sr.words;var al,bl,cl,dl,el;var ar,br,cr,dr,er;ar=al=H[0];br=bl=H[1];cr=cl=H[2];dr=dl=H[3];er=el=H[4];var t;for(var i=0;i<80;i+=1){t=al+M[offset+zl[i]]|0;if(i<16){t+=f1(bl,cl,dl)+hl[0]}else if(i<32){t+=f2(bl,cl,dl)+hl[1]}else if(i<48){t+=f3(bl,cl,dl)+hl[2]}else if(i<64){t+=f4(bl,cl,dl)+hl[3]}else{t+=f5(bl,cl,dl)+hl[4]}t=t|0;t=rotl(t,sl[i]);t=t+el|0;al=el;el=dl;dl=rotl(cl,10);cl=bl;bl=t;t=ar+M[offset+zr[i]]|0;if(i<16){t+=f5(br,cr,dr)+hr[0]}else if(i<32){t+=f4(br,cr,dr)+hr[1]}else if(i<48){t+=f3(br,cr,dr)+hr[2]}else if(i<64){t+=f2(br,cr,dr)+hr[3]}else{t+=f1(br,cr,dr)+hr[4]}t=t|0;t=rotl(t,sr[i]);t=t+er|0;ar=er;er=dr;dr=rotl(cr,10);cr=br;br=t}t=H[1]+cl+dr|0;H[1]=H[2]+dl+er|0;H[2]=H[3]+el+ar|0;H[3]=H[4]+al+br|0;H[4]=H[0]+bl+cr|0;H[0]=t},_doFinalize:function(){var data=this._data;var dataWords=data.words;var nBitsTotal=this._nDataBytes*8;var nBitsLeft=data.sigBytes*8;dataWords[nBitsLeft>>>5]|=128<<24-nBitsLeft%32;dataWords[(nBitsLeft+64>>>9<<4)+14]=(nBitsTotal<<8|nBitsTotal>>>24)&16711935|(nBitsTotal<<24|nBitsTotal>>>8)&4278255360;data.sigBytes=(dataWords.length+1)*4;this._process();var hash=this._hash;var H=hash.words;for(var i=0;i<5;i++){var H_i=H[i];H[i]=(H_i<<8|H_i>>>24)&16711935|(H_i<<24|H_i>>>8)&4278255360}return hash},clone:function(){var clone=Hasher.clone.call(this);clone._hash=this._hash.clone();return clone}});function f1(x,y,z){return x^y^z}function f2(x,y,z){return x&y|~x&z}function f3(x,y,z){return(x|~y)^z}function f4(x,y,z){return x&z|y&~z}function f5(x,y,z){return x^(y|~z)}function rotl(x,n){return x<<n|x>>>32-n}C.RIPEMD160=Hasher._createHelper(RIPEMD160);C.HmacRIPEMD160=Hasher._createHmacHelper(RIPEMD160)})(Math);return CryptoJS.RIPEMD160})},{"./core":44}],68:[function(require,module,exports){(function(root,factory){if(typeof exports==="object"){module.exports=exports=factory(require("./core"))}else if(typeof define==="function"&&define.amd){define(["./core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){(function(){var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var Hasher=C_lib.Hasher;var C_algo=C.algo;var W=[];var SHA1=C_algo.SHA1=Hasher.extend({_doReset:function(){this._hash=new WordArray.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(M,offset){var H=this._hash.words;var a=H[0];var b=H[1];var c=H[2];var d=H[3];var e=H[4];for(var i=0;i<80;i++){if(i<16){W[i]=M[offset+i]|0}else{var n=W[i-3]^W[i-8]^W[i-14]^W[i-16];W[i]=n<<1|n>>>31}var t=(a<<5|a>>>27)+e+W[i];if(i<20){t+=(b&c|~b&d)+1518500249}else if(i<40){t+=(b^c^d)+1859775393}else if(i<60){t+=(b&c|b&d|c&d)-1894007588}else{t+=(b^c^d)-899497514}e=d;d=c;c=b<<30|b>>>2;b=a;a=t}H[0]=H[0]+a|0;H[1]=H[1]+b|0;H[2]=H[2]+c|0;H[3]=H[3]+d|0;H[4]=H[4]+e|0},_doFinalize:function(){var data=this._data;var dataWords=data.words;var nBitsTotal=this._nDataBytes*8;var nBitsLeft=data.sigBytes*8;dataWords[nBitsLeft>>>5]|=128<<24-nBitsLeft%32;dataWords[(nBitsLeft+64>>>9<<4)+14]=Math.floor(nBitsTotal/4294967296);dataWords[(nBitsLeft+64>>>9<<4)+15]=nBitsTotal;data.sigBytes=dataWords.length*4;this._process();return this._hash},clone:function(){var clone=Hasher.clone.call(this);clone._hash=this._hash.clone();return clone}});C.SHA1=Hasher._createHelper(SHA1);C.HmacSHA1=Hasher._createHmacHelper(SHA1)})();return CryptoJS.SHA1})},{"./core":44}],69:[function(require,module,exports){(function(root,factory,undef){if(typeof exports==="object"){module.exports=exports=factory(require("./core"),require("./sha256"))}else if(typeof define==="function"&&define.amd){define(["./core","./sha256"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){(function(){var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var C_algo=C.algo;var SHA256=C_algo.SHA256;var SHA224=C_algo.SHA224=SHA256.extend({_doReset:function(){this._hash=new WordArray.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var hash=SHA256._doFinalize.call(this);hash.sigBytes-=4;return hash}});C.SHA224=SHA256._createHelper(SHA224);C.HmacSHA224=SHA256._createHmacHelper(SHA224)})();return CryptoJS.SHA224})},{"./core":44,"./sha256":70}],70:[function(require,module,exports){(function(root,factory){if(typeof exports==="object"){module.exports=exports=factory(require("./core"))}else if(typeof define==="function"&&define.amd){define(["./core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){(function(Math){var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var Hasher=C_lib.Hasher;var C_algo=C.algo;var H=[];var K=[];(function(){function isPrime(n){var sqrtN=Math.sqrt(n);for(var factor=2;factor<=sqrtN;factor++){if(!(n%factor)){return false}}return true}function getFractionalBits(n){return(n-(n|0))*4294967296|0}var n=2;var nPrime=0;while(nPrime<64){if(isPrime(n)){if(nPrime<8){H[nPrime]=getFractionalBits(Math.pow(n,1/2))}K[nPrime]=getFractionalBits(Math.pow(n,1/3));nPrime++}n++}})();var W=[];var SHA256=C_algo.SHA256=Hasher.extend({_doReset:function(){this._hash=new WordArray.init(H.slice(0))},_doProcessBlock:function(M,offset){var H=this._hash.words;var a=H[0];var b=H[1];var c=H[2];var d=H[3];var e=H[4];var f=H[5];var g=H[6];var h=H[7];for(var i=0;i<64;i++){if(i<16){W[i]=M[offset+i]|0}else{var gamma0x=W[i-15];var gamma0=(gamma0x<<25|gamma0x>>>7)^(gamma0x<<14|gamma0x>>>18)^gamma0x>>>3;var gamma1x=W[i-2];var gamma1=(gamma1x<<15|gamma1x>>>17)^(gamma1x<<13|gamma1x>>>19)^gamma1x>>>10;W[i]=gamma0+W[i-7]+gamma1+W[i-16]}var ch=e&f^~e&g;var maj=a&b^a&c^b&c;var sigma0=(a<<30|a>>>2)^(a<<19|a>>>13)^(a<<10|a>>>22);var sigma1=(e<<26|e>>>6)^(e<<21|e>>>11)^(e<<7|e>>>25);var t1=h+sigma1+ch+K[i]+W[i];var t2=sigma0+maj;h=g;g=f;f=e;e=d+t1|0;d=c;c=b;b=a;a=t1+t2|0}H[0]=H[0]+a|0;H[1]=H[1]+b|0;H[2]=H[2]+c|0;H[3]=H[3]+d|0;H[4]=H[4]+e|0;H[5]=H[5]+f|0;H[6]=H[6]+g|0;H[7]=H[7]+h|0},_doFinalize:function(){var data=this._data;var dataWords=data.words;var nBitsTotal=this._nDataBytes*8;var nBitsLeft=data.sigBytes*8;dataWords[nBitsLeft>>>5]|=128<<24-nBitsLeft%32;dataWords[(nBitsLeft+64>>>9<<4)+14]=Math.floor(nBitsTotal/4294967296);dataWords[(nBitsLeft+64>>>9<<4)+15]=nBitsTotal;data.sigBytes=dataWords.length*4;this._process();return this._hash},clone:function(){var clone=Hasher.clone.call(this);clone._hash=this._hash.clone();return clone}});C.SHA256=Hasher._createHelper(SHA256);C.HmacSHA256=Hasher._createHmacHelper(SHA256)})(Math);return CryptoJS.SHA256})},{"./core":44}],71:[function(require,module,exports){(function(root,factory,undef){if(typeof exports==="object"){module.exports=exports=factory(require("./core"),require("./x64-core"))}else if(typeof define==="function"&&define.amd){define(["./core","./x64-core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){(function(Math){var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var Hasher=C_lib.Hasher;var C_x64=C.x64;var X64Word=C_x64.Word;var C_algo=C.algo;var RHO_OFFSETS=[];var PI_INDEXES=[];var ROUND_CONSTANTS=[];(function(){var x=1,y=0;for(var t=0;t<24;t++){RHO_OFFSETS[x+5*y]=(t+1)*(t+2)/2%64;var newX=y%5;var newY=(2*x+3*y)%5;x=newX;y=newY}for(var x=0;x<5;x++){for(var y=0;y<5;y++){PI_INDEXES[x+5*y]=y+(2*x+3*y)%5*5}}var LFSR=1;for(var i=0;i<24;i++){var roundConstantMsw=0;var roundConstantLsw=0;for(var j=0;j<7;j++){if(LFSR&1){var bitPosition=(1<<j)-1;if(bitPosition<32){roundConstantLsw^=1<<bitPosition}else{roundConstantMsw^=1<<bitPosition-32}}if(LFSR&128){LFSR=LFSR<<1^113}else{LFSR<<=1}}ROUND_CONSTANTS[i]=X64Word.create(roundConstantMsw,roundConstantLsw)}})();var T=[];(function(){for(var i=0;i<25;i++){T[i]=X64Word.create()}})();var SHA3=C_algo.SHA3=Hasher.extend({cfg:Hasher.cfg.extend({outputLength:512}),_doReset:function(){var state=this._state=[];for(var i=0;i<25;i++){state[i]=new X64Word.init}this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(M,offset){var state=this._state;var nBlockSizeLanes=this.blockSize/2;for(var i=0;i<nBlockSizeLanes;i++){var M2i=M[offset+2*i];var M2i1=M[offset+2*i+1];M2i=(M2i<<8|M2i>>>24)&16711935|(M2i<<24|M2i>>>8)&4278255360;M2i1=(M2i1<<8|M2i1>>>24)&16711935|(M2i1<<24|M2i1>>>8)&4278255360;var lane=state[i];lane.high^=M2i1;lane.low^=M2i}for(var round=0;round<24;round++){for(var x=0;x<5;x++){var tMsw=0,tLsw=0;for(var y=0;y<5;y++){var lane=state[x+5*y];tMsw^=lane.high;tLsw^=lane.low}var Tx=T[x];Tx.high=tMsw;Tx.low=tLsw}for(var x=0;x<5;x++){var Tx4=T[(x+4)%5];var Tx1=T[(x+1)%5];var Tx1Msw=Tx1.high;var Tx1Lsw=Tx1.low;var tMsw=Tx4.high^(Tx1Msw<<1|Tx1Lsw>>>31);var tLsw=Tx4.low^(Tx1Lsw<<1|Tx1Msw>>>31);for(var y=0;y<5;y++){var lane=state[x+5*y];lane.high^=tMsw;lane.low^=tLsw}}for(var laneIndex=1;laneIndex<25;laneIndex++){var lane=state[laneIndex];var laneMsw=lane.high;var laneLsw=lane.low;var rhoOffset=RHO_OFFSETS[laneIndex];if(rhoOffset<32){var tMsw=laneMsw<<rhoOffset|laneLsw>>>32-rhoOffset;var tLsw=laneLsw<<rhoOffset|laneMsw>>>32-rhoOffset}else{var tMsw=laneLsw<<rhoOffset-32|laneMsw>>>64-rhoOffset;var tLsw=laneMsw<<rhoOffset-32|laneLsw>>>64-rhoOffset}var TPiLane=T[PI_INDEXES[laneIndex]];TPiLane.high=tMsw;TPiLane.low=tLsw}var T0=T[0];var state0=state[0];T0.high=state0.high;T0.low=state0.low;for(var x=0;x<5;x++){for(var y=0;y<5;y++){var laneIndex=x+5*y;var lane=state[laneIndex];var TLane=T[laneIndex];var Tx1Lane=T[(x+1)%5+5*y];var Tx2Lane=T[(x+2)%5+5*y];lane.high=TLane.high^~Tx1Lane.high&Tx2Lane.high;lane.low=TLane.low^~Tx1Lane.low&Tx2Lane.low}}var lane=state[0];var roundConstant=ROUND_CONSTANTS[round];lane.high^=roundConstant.high;lane.low^=roundConstant.low}},_doFinalize:function(){var data=this._data;var dataWords=data.words;var nBitsTotal=this._nDataBytes*8;var nBitsLeft=data.sigBytes*8;var blockSizeBits=this.blockSize*32;dataWords[nBitsLeft>>>5]|=1<<24-nBitsLeft%32;dataWords[(Math.ceil((nBitsLeft+1)/blockSizeBits)*blockSizeBits>>>5)-1]|=128;data.sigBytes=dataWords.length*4;this._process();var state=this._state;var outputLengthBytes=this.cfg.outputLength/8;var outputLengthLanes=outputLengthBytes/8;var hashWords=[];for(var i=0;i<outputLengthLanes;i++){var lane=state[i];var laneMsw=lane.high;var laneLsw=lane.low;laneMsw=(laneMsw<<8|laneMsw>>>24)&16711935|(laneMsw<<24|laneMsw>>>8)&4278255360;laneLsw=(laneLsw<<8|laneLsw>>>24)&16711935|(laneLsw<<24|laneLsw>>>8)&4278255360;hashWords.push(laneLsw);hashWords.push(laneMsw)}return new WordArray.init(hashWords,outputLengthBytes)},clone:function(){var clone=Hasher.clone.call(this);var state=clone._state=this._state.slice(0);for(var i=0;i<25;i++){state[i]=state[i].clone()}return clone}});C.SHA3=Hasher._createHelper(SHA3);C.HmacSHA3=Hasher._createHmacHelper(SHA3)})(Math);return CryptoJS.SHA3})},{"./core":44,"./x64-core":75}],72:[function(require,module,exports){(function(root,factory,undef){if(typeof exports==="object"){module.exports=exports=factory(require("./core"),require("./x64-core"),require("./sha512"))}else if(typeof define==="function"&&define.amd){define(["./core","./x64-core","./sha512"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){(function(){var C=CryptoJS;var C_x64=C.x64;var X64Word=C_x64.Word;var X64WordArray=C_x64.WordArray;var C_algo=C.algo;var SHA512=C_algo.SHA512;var SHA384=C_algo.SHA384=SHA512.extend({_doReset:function(){this._hash=new X64WordArray.init([new X64Word.init(3418070365,3238371032),new X64Word.init(1654270250,914150663),new X64Word.init(2438529370,812702999),new X64Word.init(355462360,4144912697),new X64Word.init(1731405415,4290775857),new X64Word.init(2394180231,1750603025),new X64Word.init(3675008525,1694076839),new X64Word.init(1203062813,3204075428)])},_doFinalize:function(){var hash=SHA512._doFinalize.call(this);hash.sigBytes-=16;return hash}});C.SHA384=SHA512._createHelper(SHA384);C.HmacSHA384=SHA512._createHmacHelper(SHA384)})();return CryptoJS.SHA384})},{"./core":44,"./sha512":73,"./x64-core":75}],73:[function(require,module,exports){(function(root,factory,undef){if(typeof exports==="object"){module.exports=exports=factory(require("./core"),require("./x64-core"))}else if(typeof define==="function"&&define.amd){define(["./core","./x64-core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){(function(){var C=CryptoJS;var C_lib=C.lib;var Hasher=C_lib.Hasher;var C_x64=C.x64;var X64Word=C_x64.Word;var X64WordArray=C_x64.WordArray;var C_algo=C.algo;function X64Word_create(){return X64Word.create.apply(X64Word,arguments)}var K=[X64Word_create(1116352408,3609767458),X64Word_create(1899447441,602891725),X64Word_create(3049323471,3964484399),X64Word_create(3921009573,2173295548),X64Word_create(961987163,4081628472),X64Word_create(1508970993,3053834265),X64Word_create(2453635748,2937671579),X64Word_create(2870763221,3664609560),X64Word_create(3624381080,2734883394),X64Word_create(310598401,1164996542),X64Word_create(607225278,1323610764),X64Word_create(1426881987,3590304994),X64Word_create(1925078388,4068182383),X64Word_create(2162078206,991336113),X64Word_create(2614888103,633803317),X64Word_create(3248222580,3479774868),X64Word_create(3835390401,2666613458),X64Word_create(4022224774,944711139),X64Word_create(264347078,2341262773),X64Word_create(604807628,2007800933),X64Word_create(770255983,1495990901),X64Word_create(1249150122,1856431235),X64Word_create(1555081692,3175218132),X64Word_create(1996064986,2198950837),X64Word_create(2554220882,3999719339),X64Word_create(2821834349,766784016),X64Word_create(2952996808,2566594879),X64Word_create(3210313671,3203337956),X64Word_create(3336571891,1034457026),X64Word_create(3584528711,2466948901),X64Word_create(113926993,3758326383),X64Word_create(338241895,168717936),X64Word_create(666307205,1188179964),X64Word_create(773529912,1546045734),X64Word_create(1294757372,1522805485),X64Word_create(1396182291,2643833823),X64Word_create(1695183700,2343527390),X64Word_create(1986661051,1014477480),X64Word_create(2177026350,1206759142),X64Word_create(2456956037,344077627),X64Word_create(2730485921,1290863460),X64Word_create(2820302411,3158454273),X64Word_create(3259730800,3505952657),X64Word_create(3345764771,106217008),X64Word_create(3516065817,3606008344),X64Word_create(3600352804,1432725776),X64Word_create(4094571909,1467031594),X64Word_create(275423344,851169720),X64Word_create(430227734,3100823752),X64Word_create(506948616,1363258195),X64Word_create(659060556,3750685593),X64Word_create(883997877,3785050280),X64Word_create(958139571,3318307427),X64Word_create(1322822218,3812723403),X64Word_create(1537002063,2003034995),X64Word_create(1747873779,3602036899),X64Word_create(1955562222,1575990012),X64Word_create(2024104815,1125592928),X64Word_create(2227730452,2716904306),X64Word_create(2361852424,442776044),X64Word_create(2428436474,593698344),X64Word_create(2756734187,3733110249),X64Word_create(3204031479,2999351573),X64Word_create(3329325298,3815920427),X64Word_create(3391569614,3928383900),X64Word_create(3515267271,566280711),X64Word_create(3940187606,3454069534),X64Word_create(4118630271,4000239992),X64Word_create(116418474,1914138554),X64Word_create(174292421,2731055270),X64Word_create(289380356,3203993006),X64Word_create(460393269,320620315),X64Word_create(685471733,587496836),X64Word_create(852142971,1086792851),X64Word_create(1017036298,365543100),X64Word_create(1126000580,2618297676),X64Word_create(1288033470,3409855158),X64Word_create(1501505948,4234509866),X64Word_create(1607167915,987167468),X64Word_create(1816402316,1246189591)];var W=[];(function(){for(var i=0;i<80;i++){W[i]=X64Word_create()}})();var SHA512=C_algo.SHA512=Hasher.extend({_doReset:function(){this._hash=new X64WordArray.init([new X64Word.init(1779033703,4089235720),new X64Word.init(3144134277,2227873595),new X64Word.init(1013904242,4271175723),new X64Word.init(2773480762,1595750129),new X64Word.init(1359893119,2917565137),new X64Word.init(2600822924,725511199),new X64Word.init(528734635,4215389547),new X64Word.init(1541459225,327033209)])},_doProcessBlock:function(M,offset){var H=this._hash.words;var H0=H[0];var H1=H[1];var H2=H[2];var H3=H[3];var H4=H[4];var H5=H[5];var H6=H[6];var H7=H[7];var H0h=H0.high;var H0l=H0.low;var H1h=H1.high;var H1l=H1.low;var H2h=H2.high;var H2l=H2.low;var H3h=H3.high;var H3l=H3.low;var H4h=H4.high;var H4l=H4.low;var H5h=H5.high;var H5l=H5.low;var H6h=H6.high;var H6l=H6.low;var H7h=H7.high;var H7l=H7.low;var ah=H0h;var al=H0l;var bh=H1h;var bl=H1l;var ch=H2h;var cl=H2l;var dh=H3h;var dl=H3l;var eh=H4h;var el=H4l;var fh=H5h;var fl=H5l;var gh=H6h;var gl=H6l;var hh=H7h;var hl=H7l;for(var i=0;i<80;i++){var Wi=W[i];if(i<16){var Wih=Wi.high=M[offset+i*2]|0;var Wil=Wi.low=M[offset+i*2+1]|0}else{var gamma0x=W[i-15];var gamma0xh=gamma0x.high;var gamma0xl=gamma0x.low;var gamma0h=(gamma0xh>>>1|gamma0xl<<31)^(gamma0xh>>>8|gamma0xl<<24)^gamma0xh>>>7;var gamma0l=(gamma0xl>>>1|gamma0xh<<31)^(gamma0xl>>>8|gamma0xh<<24)^(gamma0xl>>>7|gamma0xh<<25);var gamma1x=W[i-2];var gamma1xh=gamma1x.high;var gamma1xl=gamma1x.low;var gamma1h=(gamma1xh>>>19|gamma1xl<<13)^(gamma1xh<<3|gamma1xl>>>29)^gamma1xh>>>6;var gamma1l=(gamma1xl>>>19|gamma1xh<<13)^(gamma1xl<<3|gamma1xh>>>29)^(gamma1xl>>>6|gamma1xh<<26);var Wi7=W[i-7];var Wi7h=Wi7.high;var Wi7l=Wi7.low;var Wi16=W[i-16];var Wi16h=Wi16.high;var Wi16l=Wi16.low;var Wil=gamma0l+Wi7l;var Wih=gamma0h+Wi7h+(Wil>>>0<gamma0l>>>0?1:0);var Wil=Wil+gamma1l;var Wih=Wih+gamma1h+(Wil>>>0<gamma1l>>>0?1:0);var Wil=Wil+Wi16l;var Wih=Wih+Wi16h+(Wil>>>0<Wi16l>>>0?1:0);Wi.high=Wih;Wi.low=Wil}var chh=eh&fh^~eh&gh;var chl=el&fl^~el&gl;var majh=ah&bh^ah&ch^bh&ch;var majl=al&bl^al&cl^bl&cl;var sigma0h=(ah>>>28|al<<4)^(ah<<30|al>>>2)^(ah<<25|al>>>7);var sigma0l=(al>>>28|ah<<4)^(al<<30|ah>>>2)^(al<<25|ah>>>7);var sigma1h=(eh>>>14|el<<18)^(eh>>>18|el<<14)^(eh<<23|el>>>9);var sigma1l=(el>>>14|eh<<18)^(el>>>18|eh<<14)^(el<<23|eh>>>9);var Ki=K[i];var Kih=Ki.high;var Kil=Ki.low;var t1l=hl+sigma1l;var t1h=hh+sigma1h+(t1l>>>0<hl>>>0?1:0);var t1l=t1l+chl;var t1h=t1h+chh+(t1l>>>0<chl>>>0?1:0);var t1l=t1l+Kil;var t1h=t1h+Kih+(t1l>>>0<Kil>>>0?1:0);var t1l=t1l+Wil;var t1h=t1h+Wih+(t1l>>>0<Wil>>>0?1:0);var t2l=sigma0l+majl;var t2h=sigma0h+majh+(t2l>>>0<sigma0l>>>0?1:0);hh=gh;hl=gl;gh=fh;gl=fl;fh=eh;fl=el;el=dl+t1l|0;eh=dh+t1h+(el>>>0<dl>>>0?1:0)|0;dh=ch;dl=cl;ch=bh;cl=bl;bh=ah;bl=al;al=t1l+t2l|0;ah=t1h+t2h+(al>>>0<t1l>>>0?1:0)|0}H0l=H0.low=H0l+al;H0.high=H0h+ah+(H0l>>>0<al>>>0?1:0);H1l=H1.low=H1l+bl;H1.high=H1h+bh+(H1l>>>0<bl>>>0?1:0);H2l=H2.low=H2l+cl;H2.high=H2h+ch+(H2l>>>0<cl>>>0?1:0);H3l=H3.low=H3l+dl;H3.high=H3h+dh+(H3l>>>0<dl>>>0?1:0);H4l=H4.low=H4l+el;H4.high=H4h+eh+(H4l>>>0<el>>>0?1:0);H5l=H5.low=H5l+fl;H5.high=H5h+fh+(H5l>>>0<fl>>>0?1:0);H6l=H6.low=H6l+gl;H6.high=H6h+gh+(H6l>>>0<gl>>>0?1:0);H7l=H7.low=H7l+hl;H7.high=H7h+hh+(H7l>>>0<hl>>>0?1:0)},_doFinalize:function(){var data=this._data;var dataWords=data.words;var nBitsTotal=this._nDataBytes*8;var nBitsLeft=data.sigBytes*8;dataWords[nBitsLeft>>>5]|=128<<24-nBitsLeft%32;dataWords[(nBitsLeft+128>>>10<<5)+30]=Math.floor(nBitsTotal/4294967296);dataWords[(nBitsLeft+128>>>10<<5)+31]=nBitsTotal;data.sigBytes=dataWords.length*4;this._process();var hash=this._hash.toX32();return hash},clone:function(){var clone=Hasher.clone.call(this);clone._hash=this._hash.clone();return clone},blockSize:1024/32});C.SHA512=Hasher._createHelper(SHA512);C.HmacSHA512=Hasher._createHmacHelper(SHA512)})();return CryptoJS.SHA512})},{"./core":44,"./x64-core":75}],74:[function(require,module,exports){(function(root,factory,undef){if(typeof exports==="object"){module.exports=exports=factory(require("./core"),require("./enc-base64"),require("./md5"),require("./evpkdf"),require("./cipher-core"))}else if(typeof define==="function"&&define.amd){define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){(function(){var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var BlockCipher=C_lib.BlockCipher;var C_algo=C.algo;var PC1=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4];var PC2=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32];var BIT_SHIFTS=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28];var SBOX_P=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}];
var SBOX_MASK=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679];var DES=C_algo.DES=BlockCipher.extend({_doReset:function(){var key=this._key;var keyWords=key.words;var keyBits=[];for(var i=0;i<56;i++){var keyBitPos=PC1[i]-1;keyBits[i]=keyWords[keyBitPos>>>5]>>>31-keyBitPos%32&1}var subKeys=this._subKeys=[];for(var nSubKey=0;nSubKey<16;nSubKey++){var subKey=subKeys[nSubKey]=[];var bitShift=BIT_SHIFTS[nSubKey];for(var i=0;i<24;i++){subKey[i/6|0]|=keyBits[(PC2[i]-1+bitShift)%28]<<31-i%6;subKey[4+(i/6|0)]|=keyBits[28+(PC2[i+24]-1+bitShift)%28]<<31-i%6}subKey[0]=subKey[0]<<1|subKey[0]>>>31;for(var i=1;i<7;i++){subKey[i]=subKey[i]>>>(i-1)*4+3}subKey[7]=subKey[7]<<5|subKey[7]>>>27}var invSubKeys=this._invSubKeys=[];for(var i=0;i<16;i++){invSubKeys[i]=subKeys[15-i]}},encryptBlock:function(M,offset){this._doCryptBlock(M,offset,this._subKeys)},decryptBlock:function(M,offset){this._doCryptBlock(M,offset,this._invSubKeys)},_doCryptBlock:function(M,offset,subKeys){this._lBlock=M[offset];this._rBlock=M[offset+1];exchangeLR.call(this,4,252645135);exchangeLR.call(this,16,65535);exchangeRL.call(this,2,858993459);exchangeRL.call(this,8,16711935);exchangeLR.call(this,1,1431655765);for(var round=0;round<16;round++){var subKey=subKeys[round];var lBlock=this._lBlock;var rBlock=this._rBlock;var f=0;for(var i=0;i<8;i++){f|=SBOX_P[i][((rBlock^subKey[i])&SBOX_MASK[i])>>>0]}this._lBlock=rBlock;this._rBlock=lBlock^f}var t=this._lBlock;this._lBlock=this._rBlock;this._rBlock=t;exchangeLR.call(this,1,1431655765);exchangeRL.call(this,8,16711935);exchangeRL.call(this,2,858993459);exchangeLR.call(this,16,65535);exchangeLR.call(this,4,252645135);M[offset]=this._lBlock;M[offset+1]=this._rBlock},keySize:64/32,ivSize:64/32,blockSize:64/32});function exchangeLR(offset,mask){var t=(this._lBlock>>>offset^this._rBlock)&mask;this._rBlock^=t;this._lBlock^=t<<offset}function exchangeRL(offset,mask){var t=(this._rBlock>>>offset^this._lBlock)&mask;this._lBlock^=t;this._rBlock^=t<<offset}C.DES=BlockCipher._createHelper(DES);var TripleDES=C_algo.TripleDES=BlockCipher.extend({_doReset:function(){var key=this._key;var keyWords=key.words;this._des1=DES.createEncryptor(WordArray.create(keyWords.slice(0,2)));this._des2=DES.createEncryptor(WordArray.create(keyWords.slice(2,4)));this._des3=DES.createEncryptor(WordArray.create(keyWords.slice(4,6)))},encryptBlock:function(M,offset){this._des1.encryptBlock(M,offset);this._des2.decryptBlock(M,offset);this._des3.encryptBlock(M,offset)},decryptBlock:function(M,offset){this._des3.decryptBlock(M,offset);this._des2.encryptBlock(M,offset);this._des1.decryptBlock(M,offset)},keySize:192/32,ivSize:64/32,blockSize:64/32});C.TripleDES=BlockCipher._createHelper(TripleDES)})();return CryptoJS.TripleDES})},{"./cipher-core":43,"./core":44,"./enc-base64":45,"./evpkdf":47,"./md5":52}],75:[function(require,module,exports){(function(root,factory){if(typeof exports==="object"){module.exports=exports=factory(require("./core"))}else if(typeof define==="function"&&define.amd){define(["./core"],factory)}else{factory(root.CryptoJS)}})(this,function(CryptoJS){(function(undefined){var C=CryptoJS;var C_lib=C.lib;var Base=C_lib.Base;var X32WordArray=C_lib.WordArray;var C_x64=C.x64={};var X64Word=C_x64.Word=Base.extend({init:function(high,low){this.high=high;this.low=low}});var X64WordArray=C_x64.WordArray=Base.extend({init:function(words,sigBytes){words=this.words=words||[];if(sigBytes!=undefined){this.sigBytes=sigBytes}else{this.sigBytes=words.length*8}},toX32:function(){var x64Words=this.words;var x64WordsLength=x64Words.length;var x32Words=[];for(var i=0;i<x64WordsLength;i++){var x64Word=x64Words[i];x32Words.push(x64Word.high);x32Words.push(x64Word.low)}return X32WordArray.create(x32Words,this.sigBytes)},clone:function(){var clone=Base.clone.call(this);var words=clone.words=this.words.slice(0);var wordsLength=words.length;for(var i=0;i<wordsLength;i++){words[i]=words[i].clone()}return clone}})})();return CryptoJS})},{"./core":44}],76:[function(require,module,exports){var assert=require("assert");var BigInteger=require("bigi");var Point=require("./point");function Curve(p,a,b,Gx,Gy,n,h){this.p=p;this.a=a;this.b=b;this.G=Point.fromAffine(this,Gx,Gy);this.n=n;this.h=h;this.infinity=new Point(this,null,null,BigInteger.ZERO);this.pOverFour=p.add(BigInteger.ONE).shiftRight(2)}Curve.prototype.pointFromX=function(isOdd,x){var alpha=x.pow(3).add(this.a.multiply(x)).add(this.b).mod(this.p);var beta=alpha.modPow(this.pOverFour,this.p);var y=beta;if(beta.isEven()^!isOdd){y=this.p.subtract(y)}return Point.fromAffine(this,x,y)};Curve.prototype.isInfinity=function(Q){if(Q===this.infinity)return true;return Q.z.signum()===0&&Q.y.signum()!==0};Curve.prototype.isOnCurve=function(Q){if(this.isInfinity(Q))return true;var x=Q.affineX;var y=Q.affineY;var a=this.a;var b=this.b;var p=this.p;if(x.signum()<0||x.compareTo(p)>=0)return false;if(y.signum()<0||y.compareTo(p)>=0)return false;var lhs=y.square().mod(p);var rhs=x.pow(3).add(a.multiply(x)).add(b).mod(p);return lhs.equals(rhs)};Curve.prototype.validate=function(Q){assert(!this.isInfinity(Q),"Point is at infinity");assert(this.isOnCurve(Q),"Point is not on the curve");var nQ=Q.multiply(this.n);assert(this.isInfinity(nQ),"Point is not a scalar multiple of G");return true};module.exports=Curve},{"./point":80,assert:1,bigi:26}],77:[function(require,module,exports){module.exports={secp128r1:{p:"fffffffdffffffffffffffffffffffff",a:"fffffffdfffffffffffffffffffffffc",b:"e87579c11079f43dd824993c2cee5ed3",n:"fffffffe0000000075a30d1b9038a115",h:"01",Gx:"161ff7528b899b2d0c28607ca52c5b86",Gy:"cf5ac8395bafeb13c02da292dded7a83"},secp160k1:{p:"fffffffffffffffffffffffffffffffeffffac73",a:"00",b:"07",n:"0100000000000000000001b8fa16dfab9aca16b6b3",h:"01",Gx:"3b4c382ce37aa192a4019e763036f4f5dd4d7ebb",Gy:"938cf935318fdced6bc28286531733c3f03c4fee"},secp160r1:{p:"ffffffffffffffffffffffffffffffff7fffffff",a:"ffffffffffffffffffffffffffffffff7ffffffc",b:"1c97befc54bd7a8b65acf89f81d4d4adc565fa45",n:"0100000000000000000001f4c8f927aed3ca752257",h:"01",Gx:"4a96b5688ef573284664698968c38bb913cbfc82",Gy:"23a628553168947d59dcc912042351377ac5fb32"},secp192k1:{p:"fffffffffffffffffffffffffffffffffffffffeffffee37",a:"00",b:"03",n:"fffffffffffffffffffffffe26f2fc170f69466a74defd8d",h:"01",Gx:"db4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d",Gy:"9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d"},secp192r1:{p:"fffffffffffffffffffffffffffffffeffffffffffffffff",a:"fffffffffffffffffffffffffffffffefffffffffffffffc",b:"64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1",n:"ffffffffffffffffffffffff99def836146bc9b1b4d22831",h:"01",Gx:"188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012",Gy:"07192b95ffc8da78631011ed6b24cdd573f977a11e794811"},secp256k1:{p:"fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",a:"00",b:"07",n:"fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",h:"01",Gx:"79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",Gy:"483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"},secp256r1:{p:"ffffffff00000001000000000000000000000000ffffffffffffffffffffffff",a:"ffffffff00000001000000000000000000000000fffffffffffffffffffffffc",b:"5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b",n:"ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551",h:"01",Gx:"6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296",Gy:"4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"}}},{}],78:[function(require,module,exports){var Point=require("./point");var Curve=require("./curve");var getCurveByName=require("./names");module.exports={Curve:Curve,Point:Point,getCurveByName:getCurveByName}},{"./curve":76,"./names":79,"./point":80}],79:[function(require,module,exports){var BigInteger=require("bigi");var curves=require("./curves");var Curve=require("./curve");function getCurveByName(name){var curve=curves[name];if(!curve)return null;var p=new BigInteger(curve.p,16);var a=new BigInteger(curve.a,16);var b=new BigInteger(curve.b,16);var n=new BigInteger(curve.n,16);var h=new BigInteger(curve.h,16);var Gx=new BigInteger(curve.Gx,16);var Gy=new BigInteger(curve.Gy,16);return new Curve(p,a,b,Gx,Gy,n,h)}module.exports=getCurveByName},{"./curve":76,"./curves":77,bigi:26}],80:[function(require,module,exports){(function(Buffer){var assert=require("assert");var BigInteger=require("bigi");var THREE=BigInteger.valueOf(3);function Point(curve,x,y,z){assert.notStrictEqual(z,undefined,"Missing Z coordinate");this.curve=curve;this.x=x;this.y=y;this.z=z;this._zInv=null;this.compressed=true}Object.defineProperty(Point.prototype,"zInv",{get:function(){if(this._zInv===null){this._zInv=this.z.modInverse(this.curve.p)}return this._zInv}});Object.defineProperty(Point.prototype,"affineX",{get:function(){return this.x.multiply(this.zInv).mod(this.curve.p)}});Object.defineProperty(Point.prototype,"affineY",{get:function(){return this.y.multiply(this.zInv).mod(this.curve.p)}});Point.fromAffine=function(curve,x,y){return new Point(curve,x,y,BigInteger.ONE)};Point.prototype.equals=function(other){if(other===this)return true;if(this.curve.isInfinity(this))return this.curve.isInfinity(other);if(this.curve.isInfinity(other))return this.curve.isInfinity(this);var u=other.y.multiply(this.z).subtract(this.y.multiply(other.z)).mod(this.curve.p);if(u.signum()!==0)return false;var v=other.x.multiply(this.z).subtract(this.x.multiply(other.z)).mod(this.curve.p);return v.signum()===0};Point.prototype.negate=function(){var y=this.curve.p.subtract(this.y);return new Point(this.curve,this.x,y,this.z)};Point.prototype.add=function(b){if(this.curve.isInfinity(this))return b;if(this.curve.isInfinity(b))return this;var x1=this.x;var y1=this.y;var x2=b.x;var y2=b.y;var u=y2.multiply(this.z).subtract(y1.multiply(b.z)).mod(this.curve.p);var v=x2.multiply(this.z).subtract(x1.multiply(b.z)).mod(this.curve.p);if(v.signum()===0){if(u.signum()===0){return this.twice()}return this.curve.infinity}var v2=v.square();var v3=v2.multiply(v);var x1v2=x1.multiply(v2);var zu2=u.square().multiply(this.z);var x3=zu2.subtract(x1v2.shiftLeft(1)).multiply(b.z).subtract(v3).multiply(v).mod(this.curve.p);var y3=x1v2.multiply(THREE).multiply(u).subtract(y1.multiply(v3)).subtract(zu2.multiply(u)).multiply(b.z).add(u.multiply(v3)).mod(this.curve.p);var z3=v3.multiply(this.z).multiply(b.z).mod(this.curve.p);return new Point(this.curve,x3,y3,z3)};Point.prototype.twice=function(){if(this.curve.isInfinity(this))return this;if(this.y.signum()===0)return this.curve.infinity;var x1=this.x;var y1=this.y;var y1z1=y1.multiply(this.z);var y1sqz1=y1z1.multiply(y1).mod(this.curve.p);var a=this.curve.a;var w=x1.square().multiply(THREE);if(a.signum()!==0){w=w.add(this.z.square().multiply(a))}w=w.mod(this.curve.p);var x3=w.square().subtract(x1.shiftLeft(3).multiply(y1sqz1)).shiftLeft(1).multiply(y1z1).mod(this.curve.p);var y3=w.multiply(THREE).multiply(x1).subtract(y1sqz1.shiftLeft(1)).shiftLeft(2).multiply(y1sqz1).subtract(w.pow(3)).mod(this.curve.p);var z3=y1z1.pow(3).shiftLeft(3).mod(this.curve.p);return new Point(this.curve,x3,y3,z3)};Point.prototype.multiply=function(k){if(this.curve.isInfinity(this))return this;if(k.signum()===0)return this.curve.infinity;var e=k;var h=e.multiply(THREE);var neg=this.negate();var R=this;for(var i=h.bitLength()-2;i>0;--i){R=R.twice();var hBit=h.testBit(i);var eBit=e.testBit(i);if(hBit!=eBit){R=R.add(hBit?this:neg)}}return R};Point.prototype.multiplyTwo=function(j,x,k){var i;if(j.bitLength()>k.bitLength())i=j.bitLength()-1;else i=k.bitLength()-1;var R=this.curve.infinity;var both=this.add(x);while(i>=0){R=R.twice();var jBit=j.testBit(i);var kBit=k.testBit(i);if(jBit){if(kBit){R=R.add(both)}else{R=R.add(this)}}else{if(kBit){R=R.add(x)}}--i}return R};Point.prototype.getEncoded=function(compressed){if(compressed==undefined)compressed=this.compressed;if(this.curve.isInfinity(this))return new Buffer("00","hex");var x=this.affineX;var y=this.affineY;var buffer;var byteLength=Math.floor((this.curve.p.bitLength()+7)/8);if(compressed){buffer=new Buffer(1+byteLength);buffer.writeUInt8(y.isEven()?2:3,0)}else{buffer=new Buffer(1+byteLength+byteLength);buffer.writeUInt8(4,0);y.toBuffer(byteLength).copy(buffer,1+byteLength)}x.toBuffer(byteLength).copy(buffer,1);return buffer};Point.decodeFrom=function(curve,buffer){var type=buffer.readUInt8(0);var compressed=type!==4;var x=BigInteger.fromBuffer(buffer.slice(1,33));var byteLength=Math.floor((curve.p.bitLength()+7)/8);var Q;if(compressed){assert.equal(buffer.length,byteLength+1,"Invalid sequence length");assert(type===2||type===3,"Invalid sequence tag");var isOdd=type===3;Q=curve.pointFromX(isOdd,x)}else{assert.equal(buffer.length,1+byteLength+byteLength,"Invalid sequence length");var y=BigInteger.fromBuffer(buffer.slice(1+byteLength));Q=Point.fromAffine(curve,x,y)}Q.compressed=compressed;return Q};Point.prototype.toString=function(){if(this.curve.isInfinity(this))return"(INFINITY)";return"("+this.affineX.toString()+","+this.affineY.toString()+")"};module.exports=Point}).call(this,require("buffer").Buffer)},{assert:1,bigi:26,buffer:4}],81:[function(require,module,exports){(function(Buffer){var assert=require("assert");var base58check=require("bs58check");var networks=require("./networks");var scripts=require("./scripts");function findScriptTypeByVersion(version){for(var networkName in networks){var network=networks[networkName];if(version===network.pubKeyHash)return"pubkeyhash";if(version===network.scriptHash)return"scripthash"}}function Address(hash,version){assert(Buffer.isBuffer(hash),"Expected Buffer, got "+hash);assert.strictEqual(hash.length,20,"Invalid hash length");assert.strictEqual(version&255,version,"Invalid version byte");this.hash=hash;this.version=version}Address.fromBase58Check=function(string){var payload=base58check.decode(string);var version=payload.readUInt8(0);var hash=payload.slice(1);return new Address(hash,version)};Address.fromOutputScript=function(script,network){network=network||networks.bitcoin;var type=scripts.classifyOutput(script);if(type==="pubkeyhash")return new Address(script.chunks[2],network.pubKeyHash);if(type==="scripthash")return new Address(script.chunks[1],network.scriptHash);assert(false,type+" has no matching Address")};Address.prototype.toBase58Check=function(){var payload=new Buffer(21);payload.writeUInt8(this.version,0);this.hash.copy(payload,1);return base58check.encode(payload)};Address.prototype.toOutputScript=function(){var scriptType=findScriptTypeByVersion(this.version);if(scriptType==="pubkeyhash")return scripts.pubKeyHashOutput(this.hash);if(scriptType==="scripthash")return scripts.scriptHashOutput(this.hash);assert(false,this.toString()+" has no matching Script")};Address.prototype.toString=Address.prototype.toBase58Check;module.exports=Address}).call(this,require("buffer").Buffer)},{"./networks":91,"./scripts":94,assert:1,bs58check:28,buffer:4}],82:[function(require,module,exports){var assert=require("assert");var opcodes=require("./opcodes");function verifuint(value,max){assert(typeof value==="number","cannot write a non-number as a number");assert(value>=0,"specified a negative value for writing an unsigned value");assert(value<=max,"value is larger than maximum value for type");assert(Math.floor(value)===value,"value has a fractional component")}function pushDataSize(i){return i<opcodes.OP_PUSHDATA1?1:i<255?2:i<65535?3:5}function readPushDataInt(buffer,offset){var opcode=buffer.readUInt8(offset);var number,size;if(opcode<opcodes.OP_PUSHDATA1){number=opcode;size=1}else if(opcode===opcodes.OP_PUSHDATA1){number=buffer.readUInt8(offset+1);size=2}else if(opcode===opcodes.OP_PUSHDATA2){number=buffer.readUInt16LE(offset+1);size=3}else{assert.equal(opcode,opcodes.OP_PUSHDATA4,"Unexpected opcode");number=buffer.readUInt32LE(offset+1);size=5}return{opcode:opcode,number:number,size:size}}function readUInt64LE(buffer,offset){var a=buffer.readUInt32LE(offset);var b=buffer.readUInt32LE(offset+4);b*=4294967296;verifuint(b+a,9007199254740991);return b+a}function readVarInt(buffer,offset){var t=buffer.readUInt8(offset);var number,size;if(t<253){number=t;size=1}else if(t<254){number=buffer.readUInt16LE(offset+1);size=3}else if(t<255){number=buffer.readUInt32LE(offset+1);size=5}else{number=readUInt64LE(buffer,offset+1);size=9}return{number:number,size:size}}function writePushDataInt(buffer,number,offset){var size=pushDataSize(number);if(size===1){buffer.writeUInt8(number,offset)}else if(size===2){buffer.writeUInt8(opcodes.OP_PUSHDATA1,offset);buffer.writeUInt8(number,offset+1)}else if(size===3){buffer.writeUInt8(opcodes.OP_PUSHDATA2,offset);buffer.writeUInt16LE(number,offset+1)}else{buffer.writeUInt8(opcodes.OP_PUSHDATA4,offset);buffer.writeUInt32LE(number,offset+1)}return size}function writeUInt64LE(buffer,value,offset){verifuint(value,9007199254740991);buffer.writeInt32LE(value&-1,offset);buffer.writeUInt32LE(Math.floor(value/4294967296),offset+4)}function varIntSize(i){return i<253?1:i<65536?3:i<4294967296?5:9}function writeVarInt(buffer,number,offset){var size=varIntSize(number);if(size===1){buffer.writeUInt8(number,offset)}else if(size===3){buffer.writeUInt8(253,offset);buffer.writeUInt16LE(number,offset+1)}else if(size===5){buffer.writeUInt8(254,offset);buffer.writeUInt32LE(number,offset+1)}else{buffer.writeUInt8(255,offset);writeUInt64LE(buffer,number,offset+1)}return size}module.exports={pushDataSize:pushDataSize,readPushDataInt:readPushDataInt,readUInt64LE:readUInt64LE,readVarInt:readVarInt,varIntSize:varIntSize,writePushDataInt:writePushDataInt,writeUInt64LE:writeUInt64LE,writeVarInt:writeVarInt}},{"./opcodes":92,assert:1}],83:[function(require,module,exports){(function(Buffer){var assert=require("assert");var Crypto=require("crypto-js");var WordArray=Crypto.lib.WordArray;function bufferToWordArray(buffer){assert(Buffer.isBuffer(buffer),"Expected Buffer, got",buffer);var words=[];for(var i=0,b=0;i<buffer.length;i++,b+=8){words[b>>>5]|=buffer[i]<<24-b%32}return new WordArray.init(words,buffer.length)}function wordArrayToBuffer(wordArray){assert(Array.isArray(wordArray.words),"Expected WordArray, got"+wordArray);var words=wordArray.words;var buffer=new Buffer(words.length*4);words.forEach(function(value,i){buffer.writeInt32BE(value&-1,i*4)});return buffer}module.exports={bufferToWordArray:bufferToWordArray,wordArrayToBuffer:wordArrayToBuffer}}).call(this,require("buffer").Buffer)},{assert:1,buffer:4,"crypto-js":50}],84:[function(require,module,exports){(function(Buffer){var assert=require("assert");var CryptoJS=require("crypto-js");var crypto=require("crypto");var convert=require("./convert");function hash160(buffer){return ripemd160(sha256(buffer))}function hash256(buffer){return sha256(sha256(buffer))}function ripemd160(buffer){return crypto.createHash("rmd160").update(buffer).digest()}function sha1(buffer){return crypto.createHash("sha1").update(buffer).digest()}function sha256(buffer){return crypto.createHash("sha256").update(buffer).digest()}function HmacSHA256(buffer,secret){return crypto.createHmac("sha256",secret).update(buffer).digest()}function HmacSHA512(data,secret){assert(Buffer.isBuffer(data),"Expected Buffer for data, got "+data);assert(Buffer.isBuffer(secret),"Expected Buffer for secret, got "+secret);var dataWords=convert.bufferToWordArray(data);var secretWords=convert.bufferToWordArray(secret);var hash=CryptoJS.HmacSHA512(dataWords,secretWords);return convert.wordArrayToBuffer(hash)}module.exports={ripemd160:ripemd160,sha1:sha1,sha256:sha256,hash160:hash160,hash256:hash256,HmacSHA256:HmacSHA256,HmacSHA512:HmacSHA512}}).call(this,require("buffer").Buffer)},{"./convert":83,assert:1,buffer:4,crypto:32,"crypto-js":50}],85:[function(require,module,exports){(function(Buffer){var assert=require("assert");var crypto=require("./crypto");var BigInteger=require("bigi");var ECSignature=require("./ecsignature");function deterministicGenerateK(curve,hash,d){assert(Buffer.isBuffer(hash),"Hash must be a Buffer, not "+hash);assert.equal(hash.length,32,"Hash must be 256 bit");assert(d instanceof BigInteger,"Private key must be a BigInteger");var x=d.toBuffer(32);var k=new Buffer(32);var v=new Buffer(32);v.fill(1);k.fill(0);k=crypto.HmacSHA256(Buffer.concat([v,new Buffer([0]),x,hash]),k);v=crypto.HmacSHA256(v,k);k=crypto.HmacSHA256(Buffer.concat([v,new Buffer([1]),x,hash]),k);v=crypto.HmacSHA256(v,k);v=crypto.HmacSHA256(v,k);var T=BigInteger.fromBuffer(v);while(T.signum()<=0||T.compareTo(curve.n)>=0){k=crypto.HmacSHA256(Buffer.concat([v,new Buffer([0])]),k);v=crypto.HmacSHA256(v,k);T=BigInteger.fromBuffer(v)}return T}function sign(curve,hash,d){var k=deterministicGenerateK(curve,hash,d);var n=curve.n;var G=curve.G;var Q=G.multiply(k);var e=BigInteger.fromBuffer(hash);var r=Q.affineX.mod(n);assert.notEqual(r.signum(),0,"Invalid R value");var s=k.modInverse(n).multiply(e.add(d.multiply(r))).mod(n);assert.notEqual(s.signum(),0,"Invalid S value");var N_OVER_TWO=n.shiftRight(1);if(s.compareTo(N_OVER_TWO)>0){s=n.subtract(s)}return new ECSignature(r,s)}function verify(curve,hash,signature,Q){var e=BigInteger.fromBuffer(hash);return verifyRaw(curve,e,signature,Q)}function verifyRaw(curve,e,signature,Q){var n=curve.n;var G=curve.G;var r=signature.r;var s=signature.s;if(r.signum()<=0||r.compareTo(n)>=0)return false;if(s.signum()<=0||s.compareTo(n)>=0)return false;var c=s.modInverse(n);var u1=e.multiply(c).mod(n);var u2=r.multiply(c).mod(n);var R=G.multiplyTwo(u1,Q,u2);var v=R.affineX.mod(n);if(curve.isInfinity(R))return false;return v.equals(r)}function recoverPubKey(curve,e,signature,i){assert.strictEqual(i&3,i,"Recovery param is more than two bits");var n=curve.n;var G=curve.G;var r=signature.r;var s=signature.s;assert(r.signum()>0&&r.compareTo(n)<0,"Invalid r value");assert(s.signum()>0&&s.compareTo(n)<0,"Invalid s value");var isYOdd=i&1;var isSecondKey=i>>1;var x=isSecondKey?r.add(n):r;var R=curve.pointFromX(isYOdd,x);var nR=R.multiply(n);assert(curve.isInfinity(nR),"nR is not a valid curve point");var eNeg=e.negate().mod(n);var rInv=r.modInverse(n);var Q=R.multiplyTwo(s,G,eNeg).multiply(rInv);curve.validate(Q);return Q}function calcPubKeyRecoveryParam(curve,e,signature,Q){for(var i=0;i<4;i++){var Qprime=recoverPubKey(curve,e,signature,i);if(Qprime.equals(Q)){return i}}throw new Error("Unable to find valid recovery factor")}module.exports={calcPubKeyRecoveryParam:calcPubKeyRecoveryParam,deterministicGenerateK:deterministicGenerateK,recoverPubKey:recoverPubKey,sign:sign,verify:verify,verifyRaw:verifyRaw}}).call(this,require("buffer").Buffer)},{"./crypto":84,"./ecsignature":88,assert:1,bigi:26,buffer:4}],86:[function(require,module,exports){(function(Buffer){var assert=require("assert");var base58check=require("bs58check");var crypto=require("crypto");var ecdsa=require("./ecdsa");var networks=require("./networks");var BigInteger=require("bigi");var ECPubKey=require("./ecpubkey");var ecurve=require("ecurve");var curve=ecurve.getCurveByName("secp256k1");function ECKey(d,compressed){assert(d.signum()>0,"Private key must be greater than 0");assert(d.compareTo(curve.n)<0,"Private key must be less than the curve order");var Q=curve.G.multiply(d);this.d=d;this.pub=new ECPubKey(Q,compressed)}ECKey.fromWIF=function(string){var payload=base58check.decode(string);var compressed=false;payload=payload.slice(1);if(payload.length===33){assert.strictEqual(payload[32],1,"Invalid compression flag");payload=payload.slice(0,-1);compressed=true}assert.equal(payload.length,32,"Invalid WIF payload length");var d=BigInteger.fromBuffer(payload);return new ECKey(d,compressed)};ECKey.makeRandom=function(compressed,rng){rng=rng||crypto.randomBytes;var buffer=rng(32);assert(Buffer.isBuffer(buffer),"Expected Buffer, got "+buffer);var d=BigInteger.fromBuffer(buffer);d=d.mod(curve.n);return new ECKey(d,compressed)};ECKey.prototype.toWIF=function(network){network=network||networks.bitcoin;var bufferLen=this.pub.compressed?34:33;var buffer=new Buffer(bufferLen);buffer.writeUInt8(network.wif,0);this.d.toBuffer(32).copy(buffer,1);if(this.pub.compressed){buffer.writeUInt8(1,33)}return base58check.encode(buffer)};ECKey.prototype.sign=function(hash){return ecdsa.sign(curve,hash,this.d)};module.exports=ECKey}).call(this,require("buffer").Buffer)},{"./ecdsa":85,"./ecpubkey":87,"./networks":91,assert:1,bigi:26,bs58check:28,buffer:4,crypto:32,ecurve:78}],87:[function(require,module,exports){(function(Buffer){var assert=require("assert");var crypto=require("./crypto");var ecdsa=require("./ecdsa");var networks=require("./networks");var Address=require("./address");var ecurve=require("ecurve");var curve=ecurve.getCurveByName("secp256k1");function ECPubKey(Q,compressed){assert(Q instanceof ecurve.Point,"Expected Point, got "+Q);if(compressed==undefined)compressed=true;assert.strictEqual(typeof compressed,"boolean","Expected boolean, got "+compressed);this.compressed=compressed;this.Q=Q}ECPubKey.fromBuffer=function(buffer){var Q=ecurve.Point.decodeFrom(curve,buffer);return new ECPubKey(Q,Q.compressed)};ECPubKey.fromHex=function(hex){return ECPubKey.fromBuffer(new Buffer(hex,"hex"))};ECPubKey.prototype.getAddress=function(network){network=network||networks.bitcoin;return new Address(crypto.hash160(this.toBuffer()),network.pubKeyHash)};ECPubKey.prototype.verify=function(hash,signature){return ecdsa.verify(curve,hash,signature,this.Q)};ECPubKey.prototype.toBuffer=function(){return this.Q.getEncoded(this.compressed)};ECPubKey.prototype.toHex=function(){return this.toBuffer().toString("hex")};module.exports=ECPubKey}).call(this,require("buffer").Buffer)},{"./address":81,"./crypto":84,"./ecdsa":85,"./networks":91,assert:1,buffer:4,ecurve:78}],88:[function(require,module,exports){(function(Buffer){var assert=require("assert");var BigInteger=require("bigi");function ECSignature(r,s){assert(r instanceof BigInteger,"Expected BigInteger, got "+r);assert(s instanceof BigInteger,"Expected BigInteger, got "+s);this.r=r;this.s=s}ECSignature.parseCompact=function(buffer){assert.equal(buffer.length,65,"Invalid signature length");var i=buffer.readUInt8(0)-27;assert.equal(i,i&7,"Invalid signature parameter");var compressed=!!(i&4);i=i&3;var r=BigInteger.fromBuffer(buffer.slice(1,33));var s=BigInteger.fromBuffer(buffer.slice(33));return{compressed:compressed,i:i,signature:new ECSignature(r,s)}};ECSignature.fromDER=function(buffer){assert.equal(buffer.readUInt8(0),48,"Not a DER sequence");assert.equal(buffer.readUInt8(1),buffer.length-2,"Invalid sequence length");assert.equal(buffer.readUInt8(2),2,"Expected a DER integer");var rLen=buffer.readUInt8(3);assert(rLen>0,"R length is zero");var offset=4+rLen;assert.equal(buffer.readUInt8(offset),2,"Expected a DER integer (2)");var sLen=buffer.readUInt8(offset+1);assert(sLen>0,"S length is zero");var rB=buffer.slice(4,offset);var sB=buffer.slice(offset+2);offset+=2+sLen;if(rLen>1&&rB.readUInt8(0)===0){assert(rB.readUInt8(1)&128,"R value excessively padded")}if(sLen>1&&sB.readUInt8(0)===0){assert(sB.readUInt8(1)&128,"S value excessively padded")}assert.equal(offset,buffer.length,"Invalid DER encoding");var r=BigInteger.fromDERInteger(rB);var s=BigInteger.fromDERInteger(sB);assert(r.signum()>=0,"R value is negative");assert(s.signum()>=0,"S value is negative");return new ECSignature(r,s)};ECSignature.parseScriptSignature=function(buffer){var hashType=buffer.readUInt8(buffer.length-1);var hashTypeMod=hashType&~128;assert(hashTypeMod>0&&hashTypeMod<4,"Invalid hashType");return{signature:ECSignature.fromDER(buffer.slice(0,-1)),hashType:hashType}};ECSignature.prototype.toCompact=function(i,compressed){if(compressed)i+=4;i+=27;var buffer=new Buffer(65);buffer.writeUInt8(i,0);this.r.toBuffer(32).copy(buffer,1);this.s.toBuffer(32).copy(buffer,33);return buffer};ECSignature.prototype.toDER=function(){var rBa=this.r.toDERInteger();var sBa=this.s.toDERInteger();var sequence=[];sequence.push(2,rBa.length);sequence=sequence.concat(rBa);sequence.push(2,sBa.length);sequence=sequence.concat(sBa);sequence.unshift(48,sequence.length);return new Buffer(sequence)};ECSignature.prototype.toScriptSignature=function(hashType){var hashTypeBuffer=new Buffer(1);hashTypeBuffer.writeUInt8(hashType,0);return Buffer.concat([this.toDER(),hashTypeBuffer])};module.exports=ECSignature}).call(this,require("buffer").Buffer)},{assert:1,bigi:26,buffer:4}],89:[function(require,module,exports){(function(Buffer){var assert=require("assert");var base58check=require("bs58check");var crypto=require("./crypto");var networks=require("./networks");var BigInteger=require("bigi");var ECKey=require("./eckey");var ECPubKey=require("./ecpubkey");var ecurve=require("ecurve");var curve=ecurve.getCurveByName("secp256k1");function findBIP32ParamsByVersion(version){for(var name in networks){var network=networks[name];for(var type in network.bip32){if(version!=network.bip32[type])continue;return{isPrivate:type==="private",network:network}}}assert(false,"Could not find version "+version.toString(16))}function HDNode(K,chainCode,network){network=network||networks.bitcoin;assert(Buffer.isBuffer(chainCode),"Expected Buffer, got "+chainCode);assert(network.bip32,"Unknown BIP32 constants for network");this.chainCode=chainCode;this.depth=0;this.index=0;this.network=network;if(K instanceof BigInteger){this.privKey=new ECKey(K,true);this.pubKey=this.privKey.pub}else{this.pubKey=new ECPubKey(K,true)}}HDNode.MASTER_SECRET=new Buffer("Bitcoin seed");HDNode.HIGHEST_BIT=2147483648;HDNode.LENGTH=78;HDNode.fromSeedBuffer=function(seed,network){assert(Buffer.isBuffer(seed),"Expected Buffer, got "+seed);assert(seed.length>=16,"Seed should be at least 128 bits");assert(seed.length<=64,"Seed should be at most 512 bits");var I=crypto.HmacSHA512(seed,HDNode.MASTER_SECRET);var IL=I.slice(0,32);var IR=I.slice(32);var pIL=BigInteger.fromBuffer(IL);return new HDNode(pIL,IR,network)};HDNode.fromSeedHex=function(hex,network){return HDNode.fromSeedBuffer(new Buffer(hex,"hex"),network)};HDNode.fromBase58=function(string){return HDNode.fromBuffer(base58check.decode(string))};HDNode.fromBuffer=function(buffer){assert.strictEqual(buffer.length,HDNode.LENGTH,"Invalid buffer length");var version=buffer.readUInt32BE(0);var params=findBIP32ParamsByVersion(version);var depth=buffer.readUInt8(4);var parentFingerprint=buffer.readUInt32BE(5);if(depth===0){assert.strictEqual(parentFingerprint,0,"Invalid parent fingerprint")}var index=buffer.readUInt32BE(9);assert(depth>0||index===0,"Invalid index");var chainCode=buffer.slice(13,45);var hd;if(params.isPrivate){assert.strictEqual(buffer.readUInt8(45),0,"Invalid private key");var data=buffer.slice(46,78);var d=BigInteger.fromBuffer(data);hd=new HDNode(d,chainCode,params.network)}else{var data=buffer.slice(45,78);var Q=ecurve.Point.decodeFrom(curve,data);assert.equal(Q.compressed,true,"Invalid public key");curve.validate(Q);hd=new HDNode(Q,chainCode,params.network)}hd.depth=depth;hd.index=index;hd.parentFingerprint=parentFingerprint;return hd};HDNode.fromHex=function(hex){return HDNode.fromBuffer(new Buffer(hex,"hex"))};HDNode.prototype.getIdentifier=function(){return crypto.hash160(this.pubKey.toBuffer())};HDNode.prototype.getFingerprint=function(){return this.getIdentifier().slice(0,4)};HDNode.prototype.getAddress=function(){return this.pubKey.getAddress(this.network)};HDNode.prototype.toBase58=function(isPrivate){return base58check.encode(this.toBuffer(isPrivate))};HDNode.prototype.toBuffer=function(isPrivate){if(isPrivate==undefined)isPrivate=!!this.privKey;var version=isPrivate?this.network.bip32.private:this.network.bip32.public;var buffer=new Buffer(HDNode.LENGTH);buffer.writeUInt32BE(version,0);buffer.writeUInt8(this.depth,4);var fingerprint=this.depth===0?0:this.parentFingerprint;buffer.writeUInt32BE(fingerprint,5);buffer.writeUInt32BE(this.index,9);this.chainCode.copy(buffer,13);if(isPrivate){assert(this.privKey,"Missing private key");buffer.writeUInt8(0,45);this.privKey.d.toBuffer(32).copy(buffer,46)}else{this.pubKey.toBuffer().copy(buffer,45)}return buffer};HDNode.prototype.toHex=function(isPrivate){return this.toBuffer(isPrivate).toString("hex")
};HDNode.prototype.derive=function(index){var isHardened=index>=HDNode.HIGHEST_BIT;var indexBuffer=new Buffer(4);indexBuffer.writeUInt32BE(index,0);var data;if(isHardened){assert(this.privKey,"Could not derive hardened child key");data=Buffer.concat([this.privKey.d.toBuffer(33),indexBuffer])}else{data=Buffer.concat([this.pubKey.toBuffer(),indexBuffer])}var I=crypto.HmacSHA512(data,this.chainCode);var IL=I.slice(0,32);var IR=I.slice(32);var pIL=BigInteger.fromBuffer(IL);if(pIL.compareTo(curve.n)>=0){return this.derive(index+1)}var hd;if(this.privKey){var ki=pIL.add(this.privKey.d).mod(curve.n);if(ki.signum()===0){return this.derive(index+1)}hd=new HDNode(ki,IR,this.network)}else{var Ki=curve.G.multiply(pIL).add(this.pubKey.Q);if(curve.isInfinity(Ki)){return this.derive(index+1)}hd=new HDNode(Ki,IR,this.network)}hd.depth=this.depth+1;hd.index=index;hd.parentFingerprint=this.getFingerprint().readUInt32BE(0);return hd};HDNode.prototype.deriveHardened=function(index){return this.derive(index+HDNode.HIGHEST_BIT)};HDNode.prototype.toString=HDNode.prototype.toBase58;module.exports=HDNode}).call(this,require("buffer").Buffer)},{"./crypto":84,"./eckey":86,"./ecpubkey":87,"./networks":91,assert:1,bigi:26,bs58check:28,buffer:4,ecurve:78}],90:[function(require,module,exports){(function(Buffer){var Address=require("./address");var BigInteger=require("bigi");var bufferutils=require("./bufferutils");var crypto=require("./crypto");var ecdsa=require("./ecdsa");var networks=require("./networks");var Address=require("./address");var ECPubKey=require("./ecpubkey");var ECSignature=require("./ecsignature");var ecurve=require("ecurve");var ecparams=ecurve.getCurveByName("secp256k1");function magicHash(message,network){var magicPrefix=new Buffer(network.magicPrefix);var messageBuffer=new Buffer(message);var lengthBuffer=new Buffer(bufferutils.varIntSize(messageBuffer.length));bufferutils.writeVarInt(lengthBuffer,messageBuffer.length,0);var buffer=Buffer.concat([magicPrefix,lengthBuffer,messageBuffer]);return crypto.hash256(buffer)}function sign(privKey,message,network){network=network||networks.bitcoin;var hash=magicHash(message,network);var signature=privKey.sign(hash);var e=BigInteger.fromBuffer(hash);var i=ecdsa.calcPubKeyRecoveryParam(ecparams,e,signature,privKey.pub.Q);return signature.toCompact(i,privKey.pub.compressed)}function verify(address,signatureBuffer,message,network){if(address instanceof Address){address=address.toString()}network=network||networks.bitcoin;var hash=magicHash(message,network);var parsed=ECSignature.parseCompact(signatureBuffer);var e=BigInteger.fromBuffer(hash);var Q=ecdsa.recoverPubKey(ecparams,e,parsed.signature,parsed.i);var pubKey=new ECPubKey(Q,parsed.compressed);return pubKey.getAddress(network).toString()===address}module.exports={magicHash:magicHash,sign:sign,verify:verify}}).call(this,require("buffer").Buffer)},{"./address":81,"./bufferutils":82,"./crypto":84,"./ecdsa":85,"./ecpubkey":87,"./ecsignature":88,"./networks":91,bigi:26,buffer:4,ecurve:78}],91:[function(require,module,exports){var networks={bitcoin:{magicPrefix:"Bitcoin Signed Message:\n",bip32:{"public":76067358,"private":76066276},pubKeyHash:0,scriptHash:5,wif:128,dustThreshold:546,feePerKb:1e4,estimateFee:estimateFee("bitcoin")},dogecoin:{magicPrefix:"Dogecoin Signed Message:\n",bip32:{"public":49990397,"private":49988504},pubKeyHash:30,scriptHash:22,wif:158,dustThreshold:0,dustSoftThreshold:1e8,feePerKb:1e8,estimateFee:estimateFee("dogecoin")},litecoin:{magicPrefix:"Litecoin Signed Message:\n",bip32:{"public":27108450,"private":27106558},pubKeyHash:48,scriptHash:5,wif:176,dustThreshold:0,dustSoftThreshold:1e5,feePerKb:1e5,estimateFee:estimateFee("litecoin")},testnet:{magicPrefix:"Bitcoin Signed Message:\n",bip32:{"public":70617039,"private":70615956},pubKeyHash:111,scriptHash:196,wif:239,dustThreshold:546,feePerKb:1e4,estimateFee:estimateFee("testnet")}};function estimateFee(type){return function(tx){var network=networks[type];var baseFee=network.feePerKb;var byteSize=tx.toBuffer().length;var fee=baseFee*Math.ceil(byteSize/1e3);if(network.dustSoftThreshold==undefined)return fee;tx.outs.forEach(function(e){if(e.value<network.dustSoftThreshold){fee+=baseFee}});return fee}}module.exports=networks},{}],92:[function(require,module,exports){module.exports={OP_FALSE:0,OP_0:0,OP_PUSHDATA1:76,OP_PUSHDATA2:77,OP_PUSHDATA4:78,OP_1NEGATE:79,OP_RESERVED:80,OP_1:81,OP_TRUE:81,OP_2:82,OP_3:83,OP_4:84,OP_5:85,OP_6:86,OP_7:87,OP_8:88,OP_9:89,OP_10:90,OP_11:91,OP_12:92,OP_13:93,OP_14:94,OP_15:95,OP_16:96,OP_NOP:97,OP_VER:98,OP_IF:99,OP_NOTIF:100,OP_VERIF:101,OP_VERNOTIF:102,OP_ELSE:103,OP_ENDIF:104,OP_VERIFY:105,OP_RETURN:106,OP_TOALTSTACK:107,OP_FROMALTSTACK:108,OP_2DROP:109,OP_2DUP:110,OP_3DUP:111,OP_2OVER:112,OP_2ROT:113,OP_2SWAP:114,OP_IFDUP:115,OP_DEPTH:116,OP_DROP:117,OP_DUP:118,OP_NIP:119,OP_OVER:120,OP_PICK:121,OP_ROLL:122,OP_ROT:123,OP_SWAP:124,OP_TUCK:125,OP_CAT:126,OP_SUBSTR:127,OP_LEFT:128,OP_RIGHT:129,OP_SIZE:130,OP_INVERT:131,OP_AND:132,OP_OR:133,OP_XOR:134,OP_EQUAL:135,OP_EQUALVERIFY:136,OP_RESERVED1:137,OP_RESERVED2:138,OP_1ADD:139,OP_1SUB:140,OP_2MUL:141,OP_2DIV:142,OP_NEGATE:143,OP_ABS:144,OP_NOT:145,OP_0NOTEQUAL:146,OP_ADD:147,OP_SUB:148,OP_MUL:149,OP_DIV:150,OP_MOD:151,OP_LSHIFT:152,OP_RSHIFT:153,OP_BOOLAND:154,OP_BOOLOR:155,OP_NUMEQUAL:156,OP_NUMEQUALVERIFY:157,OP_NUMNOTEQUAL:158,OP_LESSTHAN:159,OP_GREATERTHAN:160,OP_LESSTHANOREQUAL:161,OP_GREATERTHANOREQUAL:162,OP_MIN:163,OP_MAX:164,OP_WITHIN:165,OP_RIPEMD160:166,OP_SHA1:167,OP_SHA256:168,OP_HASH160:169,OP_HASH256:170,OP_CODESEPARATOR:171,OP_CHECKSIG:172,OP_CHECKSIGVERIFY:173,OP_CHECKMULTISIG:174,OP_CHECKMULTISIGVERIFY:175,OP_NOP1:176,OP_NOP2:177,OP_NOP3:178,OP_NOP4:179,OP_NOP5:180,OP_NOP6:181,OP_NOP7:182,OP_NOP8:183,OP_NOP9:184,OP_NOP10:185,OP_PUBKEYHASH:253,OP_PUBKEY:254,OP_INVALIDOPCODE:255}},{}],93:[function(require,module,exports){(function(Buffer){var assert=require("assert");var bufferutils=require("./bufferutils");var crypto=require("./crypto");var opcodes=require("./opcodes");function Script(buffer,chunks){assert(Buffer.isBuffer(buffer),"Expected Buffer, got "+buffer);assert(Array.isArray(chunks),"Expected Array, got "+chunks);this.buffer=buffer;this.chunks=chunks}Script.fromASM=function(asm){var strChunks=asm.split(" ");var chunks=strChunks.map(function(strChunk){if(strChunk in opcodes){return opcodes[strChunk]}else{return new Buffer(strChunk,"hex")}});return Script.fromChunks(chunks)};Script.fromBuffer=function(buffer){var chunks=[];var i=0;while(i<buffer.length){var opcode=buffer.readUInt8(i);if(opcode>opcodes.OP_0&&opcode<=opcodes.OP_PUSHDATA4){var d=bufferutils.readPushDataInt(buffer,i);i+=d.size;var data=buffer.slice(i,i+d.number);i+=d.number;chunks.push(data)}else{chunks.push(opcode);i+=1}}return new Script(buffer,chunks)};Script.fromChunks=function(chunks){assert(Array.isArray(chunks),"Expected Array, got "+chunks);var bufferSize=chunks.reduce(function(accum,chunk){if(Buffer.isBuffer(chunk)){return accum+bufferutils.pushDataSize(chunk.length)+chunk.length}return accum+1},0);var buffer=new Buffer(bufferSize);var offset=0;chunks.forEach(function(chunk){if(Buffer.isBuffer(chunk)){offset+=bufferutils.writePushDataInt(buffer,chunk.length,offset);chunk.copy(buffer,offset);offset+=chunk.length}else{buffer.writeUInt8(chunk,offset);offset+=1}});assert.equal(offset,buffer.length,"Could not decode chunks");return new Script(buffer,chunks)};Script.fromHex=function(hex){return Script.fromBuffer(new Buffer(hex,"hex"))};Script.EMPTY=Script.fromChunks([]);Script.prototype.getHash=function(){return crypto.hash160(this.buffer)};Script.prototype.without=function(needle){return Script.fromChunks(this.chunks.filter(function(op){return op!==needle}))};var reverseOps=[];for(var op in opcodes){var code=opcodes[op];reverseOps[code]=op}Script.prototype.toASM=function(){return this.chunks.map(function(chunk){if(Buffer.isBuffer(chunk)){return chunk.toString("hex")}else{return reverseOps[chunk]}}).join(" ")};Script.prototype.toBuffer=function(){return this.buffer};Script.prototype.toHex=function(){return this.toBuffer().toString("hex")};module.exports=Script}).call(this,require("buffer").Buffer)},{"./bufferutils":82,"./crypto":84,"./opcodes":92,assert:1,buffer:4}],94:[function(require,module,exports){(function(Buffer){var assert=require("assert");var opcodes=require("./opcodes");var ecurve=require("ecurve");var curve=ecurve.getCurveByName("secp256k1");var ECSignature=require("./ecsignature");var Script=require("./script");function classifyOutput(script){assert(script instanceof Script,"Expected Script, got ",script);if(isPubKeyHashOutput.call(script)){return"pubkeyhash"}else if(isScriptHashOutput.call(script)){return"scripthash"}else if(isMultisigOutput.call(script)){return"multisig"}else if(isPubKeyOutput.call(script)){return"pubkey"}else if(isNulldataOutput.call(script)){return"nulldata"}else{return"nonstandard"}}function classifyInput(script){assert(script instanceof Script,"Expected Script, got ",script);if(isPubKeyHashInput.call(script)){return"pubkeyhash"}else if(isScriptHashInput.call(script)){return"scripthash"}else if(isMultisigInput.call(script)){return"multisig"}else if(isPubKeyInput.call(script)){return"pubkey"}else{return"nonstandard"}}function isCanonicalPubKey(buffer){if(!Buffer.isBuffer(buffer))return false;try{ecurve.Point.decodeFrom(curve,buffer)}catch(e){if(!e.message.match(/Invalid sequence (length|tag)/))throw e;return false}return true}function isCanonicalSignature(buffer){if(!Buffer.isBuffer(buffer))return false;try{ECSignature.parseScriptSignature(buffer)}catch(e){if(!e.message.match(/Not a DER sequence|Invalid sequence length|Expected a DER integer|R length is zero|S length is zero|R value excessively padded|S value excessively padded|R value is negative|S value is negative|Invalid hashType/))throw e;return false}return true}function isPubKeyHashInput(){return this.chunks.length===2&&isCanonicalSignature(this.chunks[0])&&isCanonicalPubKey(this.chunks[1])}function isPubKeyHashOutput(){return this.chunks.length===5&&this.chunks[0]===opcodes.OP_DUP&&this.chunks[1]===opcodes.OP_HASH160&&Buffer.isBuffer(this.chunks[2])&&this.chunks[2].length===20&&this.chunks[3]===opcodes.OP_EQUALVERIFY&&this.chunks[4]===opcodes.OP_CHECKSIG}function isPubKeyInput(){return this.chunks.length===1&&isCanonicalSignature(this.chunks[0])}function isPubKeyOutput(){return this.chunks.length===2&&isCanonicalPubKey(this.chunks[0])&&this.chunks[1]===opcodes.OP_CHECKSIG}function isScriptHashInput(){if(this.chunks.length<2)return false;var lastChunk=this.chunks[this.chunks.length-1];if(!Buffer.isBuffer(lastChunk))return false;var scriptSig=Script.fromChunks(this.chunks.slice(0,-1));var scriptPubKey=Script.fromBuffer(lastChunk);return classifyInput(scriptSig)===classifyOutput(scriptPubKey)}function isScriptHashOutput(){return this.chunks.length===3&&this.chunks[0]===opcodes.OP_HASH160&&Buffer.isBuffer(this.chunks[1])&&this.chunks[1].length===20&&this.chunks[2]===opcodes.OP_EQUAL}function isMultisigInput(){return this.chunks[0]===opcodes.OP_0&&this.chunks.slice(1).every(isCanonicalSignature)}function isMultisigOutput(){if(this.chunks<4)return false;if(this.chunks[this.chunks.length-1]!==opcodes.OP_CHECKMULTISIG)return false;var mOp=this.chunks[0];if(mOp===opcodes.OP_0)return false;if(mOp<opcodes.OP_1)return false;if(mOp>opcodes.OP_16)return false;var nOp=this.chunks[this.chunks.length-2];if(nOp===opcodes.OP_0)return false;if(nOp<opcodes.OP_1)return false;if(nOp>opcodes.OP_16)return false;var m=mOp-(opcodes.OP_1-1);var n=nOp-(opcodes.OP_1-1);if(n<m)return false;var pubKeys=this.chunks.slice(1,-2);if(n<pubKeys.length)return false;return pubKeys.every(isCanonicalPubKey)}function isNulldataOutput(){return this.chunks[0]===opcodes.OP_RETURN}function pubKeyOutput(pubKey){return Script.fromChunks([pubKey.toBuffer(),opcodes.OP_CHECKSIG])}function pubKeyHashOutput(hash){assert(Buffer.isBuffer(hash),"Expected Buffer, got "+hash);return Script.fromChunks([opcodes.OP_DUP,opcodes.OP_HASH160,hash,opcodes.OP_EQUALVERIFY,opcodes.OP_CHECKSIG])}function scriptHashOutput(hash){assert(Buffer.isBuffer(hash),"Expected Buffer, got "+hash);return Script.fromChunks([opcodes.OP_HASH160,hash,opcodes.OP_EQUAL])}function multisigOutput(m,pubKeys){assert(Array.isArray(pubKeys),"Expected Array, got "+pubKeys);assert(pubKeys.length>=m,"Not enough pubKeys provided");var pubKeyBuffers=pubKeys.map(function(pubKey){return pubKey.toBuffer()});var n=pubKeys.length;return Script.fromChunks([].concat(opcodes.OP_1-1+m,pubKeyBuffers,opcodes.OP_1-1+n,opcodes.OP_CHECKMULTISIG))}function pubKeyInput(signature){assert(Buffer.isBuffer(signature),"Expected Buffer, got "+signature);return Script.fromChunks([signature])}function pubKeyHashInput(signature,pubKey){assert(Buffer.isBuffer(signature),"Expected Buffer, got "+signature);return Script.fromChunks([signature,pubKey.toBuffer()])}function scriptHashInput(scriptSig,scriptPubKey){return Script.fromChunks([].concat(scriptSig.chunks,scriptPubKey.toBuffer()))}function multisigInput(signatures,scriptPubKey){if(scriptPubKey){assert(isMultisigOutput.call(scriptPubKey));var m=scriptPubKey.chunks[0];var k=m-(opcodes.OP_1-1);assert(k<=signatures.length,"Not enough signatures provided")}return Script.fromChunks([].concat(opcodes.OP_0,signatures))}module.exports={classifyInput:classifyInput,classifyOutput:classifyOutput,multisigInput:multisigInput,multisigOutput:multisigOutput,pubKeyHashInput:pubKeyHashInput,pubKeyHashOutput:pubKeyHashOutput,pubKeyInput:pubKeyInput,pubKeyOutput:pubKeyOutput,scriptHashInput:scriptHashInput,scriptHashOutput:scriptHashOutput}}).call(this,require("buffer").Buffer)},{"./ecsignature":88,"./opcodes":92,"./script":93,assert:1,buffer:4,ecurve:78}],95:[function(require,module,exports){(function(Buffer){var assert=require("assert");var bufferutils=require("./bufferutils");var crypto=require("./crypto");var opcodes=require("./opcodes");var scripts=require("./scripts");var Address=require("./address");var ECSignature=require("./ecsignature");var Script=require("./script");Transaction.DEFAULT_SEQUENCE=4294967295;Transaction.SIGHASH_ALL=1;Transaction.SIGHASH_NONE=2;Transaction.SIGHASH_SINGLE=3;Transaction.SIGHASH_ANYONECANPAY=128;function Transaction(){this.version=1;this.locktime=0;this.ins=[];this.outs=[]}Transaction.prototype.addInput=function(tx,index,sequence){if(sequence==undefined)sequence=Transaction.DEFAULT_SEQUENCE;var hash;if(typeof tx==="string"){hash=new Buffer(tx,"hex");Array.prototype.reverse.call(hash)}else if(tx instanceof Transaction){hash=tx.getHash()}else{hash=tx}assert(Buffer.isBuffer(hash),"Expected Transaction, txId or txHash, got "+tx);assert.equal(hash.length,32,"Expected hash length of 32, got "+hash.length);assert.equal(typeof index,"number","Expected number index, got "+index);return this.ins.push({hash:hash,index:index,script:Script.EMPTY,sequence:sequence})-1};Transaction.prototype.addOutput=function(scriptPubKey,value){if(typeof scriptPubKey==="string"){scriptPubKey=Address.fromBase58Check(scriptPubKey)}if(scriptPubKey instanceof Address){var address=scriptPubKey;scriptPubKey=address.toOutputScript()}assert(scriptPubKey instanceof Script,"Expected Address or Script, got "+scriptPubKey);assert.equal(typeof value,"number","Expected number value, got "+value);return this.outs.push({script:scriptPubKey,value:value})-1};Transaction.prototype.toBuffer=function(){var txInSize=this.ins.reduce(function(a,x){return a+(40+bufferutils.varIntSize(x.script.buffer.length)+x.script.buffer.length)},0);var txOutSize=this.outs.reduce(function(a,x){return a+(8+bufferutils.varIntSize(x.script.buffer.length)+x.script.buffer.length)},0);var buffer=new Buffer(8+bufferutils.varIntSize(this.ins.length)+bufferutils.varIntSize(this.outs.length)+txInSize+txOutSize);var offset=0;function writeSlice(slice){slice.copy(buffer,offset);offset+=slice.length}function writeUInt32(i){buffer.writeUInt32LE(i,offset);offset+=4}function writeUInt64(i){bufferutils.writeUInt64LE(buffer,i,offset);offset+=8}function writeVarInt(i){var n=bufferutils.writeVarInt(buffer,i,offset);offset+=n}writeUInt32(this.version);writeVarInt(this.ins.length);this.ins.forEach(function(txin){writeSlice(txin.hash);writeUInt32(txin.index);writeVarInt(txin.script.buffer.length);writeSlice(txin.script.buffer);writeUInt32(txin.sequence)});writeVarInt(this.outs.length);this.outs.forEach(function(txout){writeUInt64(txout.value);writeVarInt(txout.script.buffer.length);writeSlice(txout.script.buffer)});writeUInt32(this.locktime);return buffer};Transaction.prototype.toHex=function(){return this.toBuffer().toString("hex")};Transaction.prototype.hashForSignature=function(prevOutScript,inIndex,hashType){assert(inIndex>=0,"Invalid vin index");assert(inIndex<this.ins.length,"Invalid vin index");assert(prevOutScript instanceof Script,"Invalid Script object");var txTmp=this.clone();var hashScript=prevOutScript.without(opcodes.OP_CODESEPARATOR);txTmp.ins.forEach(function(txin){txin.script=Script.EMPTY});txTmp.ins[inIndex].script=hashScript;var hashTypeModifier=hashType&31;if(hashTypeModifier===Transaction.SIGHASH_NONE){assert(false,"SIGHASH_NONE not yet supported")}else if(hashTypeModifier===Transaction.SIGHASH_SINGLE){assert(false,"SIGHASH_SINGLE not yet supported")}if(hashType&Transaction.SIGHASH_ANYONECANPAY){assert(false,"SIGHASH_ANYONECANPAY not yet supported")}var hashTypeBuffer=new Buffer(4);hashTypeBuffer.writeInt32LE(hashType,0);var buffer=Buffer.concat([txTmp.toBuffer(),hashTypeBuffer]);return crypto.hash256(buffer)};Transaction.prototype.getHash=function(){return crypto.hash256(this.toBuffer())};Transaction.prototype.getId=function(){var buffer=this.getHash();Array.prototype.reverse.call(buffer);return buffer.toString("hex")};Transaction.prototype.clone=function(){var newTx=new Transaction;newTx.version=this.version;newTx.locktime=this.locktime;newTx.ins=this.ins.map(function(txin){return{hash:txin.hash,index:txin.index,script:txin.script,sequence:txin.sequence}});newTx.outs=this.outs.map(function(txout){return{script:txout.script,value:txout.value}});return newTx};Transaction.fromBuffer=function(buffer){var offset=0;function readSlice(n){offset+=n;return buffer.slice(offset-n,offset)}function readUInt32(){var i=buffer.readUInt32LE(offset);offset+=4;return i}function readUInt64(){var i=bufferutils.readUInt64LE(buffer,offset);offset+=8;return i}function readVarInt(){var vi=bufferutils.readVarInt(buffer,offset);offset+=vi.size;return vi.number}var tx=new Transaction;tx.version=readUInt32();var vinLen=readVarInt();for(var i=0;i<vinLen;++i){var hash=readSlice(32);var vout=readUInt32();var scriptLen=readVarInt();var script=readSlice(scriptLen);var sequence=readUInt32();tx.ins.push({hash:hash,index:vout,script:Script.fromBuffer(script),sequence:sequence})}var voutLen=readVarInt();for(i=0;i<voutLen;++i){var value=readUInt64();var scriptLen=readVarInt();var script=readSlice(scriptLen);tx.outs.push({value:value,script:Script.fromBuffer(script)})}tx.locktime=readUInt32();assert.equal(offset,buffer.length,"Transaction has unexpected data");return tx};Transaction.fromHex=function(hex){return Transaction.fromBuffer(new Buffer(hex,"hex"))};Transaction.prototype.sign=function(index,privKey,hashType){var prevOutScript=privKey.pub.getAddress().toOutputScript();var signature=this.signInput(index,prevOutScript,privKey,hashType);var scriptSig=scripts.pubKeyHashInput(signature,privKey.pub);this.setInputScript(index,scriptSig)};Transaction.prototype.signInput=function(index,prevOutScript,privKey,hashType){hashType=hashType||Transaction.SIGHASH_ALL;var hash=this.hashForSignature(prevOutScript,index,hashType);var signature=privKey.sign(hash);return signature.toScriptSignature(hashType)};Transaction.prototype.setInputScript=function(index,script){this.ins[index].script=script};Transaction.prototype.validateInput=function(index,prevOutScript,pubKey,buffer){var parsed=ECSignature.parseScriptSignature(buffer);var hash=this.hashForSignature(prevOutScript,index,parsed.hashType);return pubKey.verify(hash,parsed.signature)};module.exports=Transaction}).call(this,require("buffer").Buffer)},{"./address":81,"./bufferutils":82,"./crypto":84,"./ecsignature":88,"./opcodes":92,"./script":93,"./scripts":94,assert:1,buffer:4}],96:[function(require,module,exports){(function(Buffer){var assert=require("assert");var crypto=require("crypto");var networks=require("./networks");var Address=require("./address");var HDNode=require("./hdnode");var Transaction=require("./transaction");function Wallet(seed,network){network=network||networks.bitcoin;var masterkey=null;var me=this;var accountZero=null;var internalAccount=null;var externalAccount=null;this.addresses=[];this.changeAddresses=[];this.outputs={};this.newMasterKey=function(seed){seed=seed||crypto.randomBytes(32);masterkey=HDNode.fromSeedBuffer(seed,network);accountZero=masterkey.deriveHardened(0);externalAccount=accountZero.derive(0);internalAccount=accountZero.derive(1);me.addresses=[];me.changeAddresses=[];me.outputs={}};this.newMasterKey(seed);this.generateAddress=function(){var key=externalAccount.derive(this.addresses.length);this.addresses.push(key.getAddress().toString());return this.addresses[this.addresses.length-1]};this.generateChangeAddress=function(){var key=internalAccount.derive(this.changeAddresses.length);this.changeAddresses.push(key.getAddress().toString());return this.changeAddresses[this.changeAddresses.length-1]};this.getBalance=function(){return this.getUnspentOutputs().reduce(function(memo,output){return memo+output.value},0)};this.getUnspentOutputs=function(){var utxo=[];for(var key in this.outputs){var output=this.outputs[key];if(!output.to)utxo.push(outputToUnspentOutput(output))}return utxo};this.setUnspentOutputs=function(utxo){var outputs={};utxo.forEach(function(uo){validateUnspentOutput(uo);var o=unspentOutputToOutput(uo);outputs[o.from]=o});this.outputs=outputs};function outputToUnspentOutput(output){var hashAndIndex=output.from.split(":");return{hash:hashAndIndex[0],outputIndex:parseInt(hashAndIndex[1]),address:output.address,value:output.value,pending:output.pending}}function unspentOutputToOutput(o){var hash=o.hash;var key=hash+":"+o.outputIndex;return{from:key,address:o.address,value:o.value,pending:o.pending}}function validateUnspentOutput(uo){var missingField;if(isNullOrUndefined(uo.hash)){missingField="hash"}var requiredKeys=["outputIndex","address","value"];requiredKeys.forEach(function(key){if(isNullOrUndefined(uo[key])){missingField=key}});if(missingField){var message=["Invalid unspent output: key",missingField,"is missing.","A valid unspent output must contain"];message.push(requiredKeys.join(", "));message.push("and hash");throw new Error(message.join(" "))}}function isNullOrUndefined(value){return value==undefined}this.processPendingTx=function(tx){processTx(tx,true)};this.processConfirmedTx=function(tx){processTx(tx,false)};function processTx(tx,isPending){var txid=tx.getId();tx.outs.forEach(function(txOut,i){var address;try{address=Address.fromOutputScript(txOut.script,network).toString()}catch(e){if(!e.message.match(/has no matching Address/))throw e}if(isMyAddress(address)){var output=txid+":"+i;me.outputs[output]={from:output,value:txOut.value,address:address,pending:isPending}}});tx.ins.forEach(function(txIn,i){var txinId=new Buffer(txIn.hash);Array.prototype.reverse.call(txinId);txinId=txinId.toString("hex");var output=txinId+":"+txIn.index;if(!(output in me.outputs))return;if(isPending){me.outputs[output].to=txid+":"+i;me.outputs[output].pending=true}else{delete me.outputs[output]}})}this.createTx=function(to,value,fixedFee,changeAddress){assert(value>network.dustThreshold,value+" must be above dust threshold ("+network.dustThreshold+" Satoshis)");var utxos=getCandidateOutputs(value);var accum=0;var subTotal=value;var addresses=[];var tx=new Transaction;tx.addOutput(to,value);for(var i=0;i<utxos.length;++i){var utxo=utxos[i];addresses.push(utxo.address);var outpoint=utxo.from.split(":");tx.addInput(outpoint[0],parseInt(outpoint[1]));var fee=fixedFee==undefined?estimateFeePadChangeOutput(tx):fixedFee;accum+=utxo.value;subTotal=value+fee;if(accum>=subTotal){var change=accum-subTotal;if(change>network.dustThreshold){tx.addOutput(changeAddress||getChangeAddress(),change)}break}}assert(accum>=subTotal,"Not enough funds (incl. fee): "+accum+" < "+subTotal);this.signWith(tx,addresses);return tx};function getCandidateOutputs(){var unspent=[];for(var key in me.outputs){var output=me.outputs[key];if(!output.pending)unspent.push(output)}var sortByValueDesc=unspent.sort(function(o1,o2){return o2.value-o1.value});return sortByValueDesc}function estimateFeePadChangeOutput(tx){var tmpTx=tx.clone();tmpTx.addOutput(getChangeAddress(),network.dustSoftThreshold||0);return network.estimateFee(tmpTx)}function getChangeAddress(){if(me.changeAddresses.length===0)me.generateChangeAddress();return me.changeAddresses[me.changeAddresses.length-1]}this.signWith=function(tx,addresses){assert.equal(tx.ins.length,addresses.length,"Number of addresses must match number of transaction inputs");addresses.forEach(function(address,i){var key=me.getPrivateKeyForAddress(address);tx.sign(i,key)});return tx};this.getMasterKey=function(){return masterkey};this.getAccountZero=function(){return accountZero};this.getInternalAccount=function(){return internalAccount};this.getExternalAccount=function(){return externalAccount};this.getPrivateKey=function(index){return externalAccount.derive(index).privKey};this.getInternalPrivateKey=function(index){return internalAccount.derive(index).privKey};this.getPrivateKeyForAddress=function(address){var index;if((index=this.addresses.indexOf(address))>-1){return this.getPrivateKey(index)}else if((index=this.changeAddresses.indexOf(address))>-1){return this.getInternalPrivateKey(index)}else{throw new Error("Unknown address. Make sure the address is from the keychain and has been generated.")}};function isReceiveAddress(address){return me.addresses.indexOf(address)>-1}function isChangeAddress(address){return me.changeAddresses.indexOf(address)>-1}function isMyAddress(address){return isReceiveAddress(address)||isChangeAddress(address)}}module.exports=Wallet}).call(this,require("buffer").Buffer)},{"./address":81,"./hdnode":89,"./networks":91,"./transaction":95,assert:1,buffer:4,crypto:32}],"bitcoinjs-lib":[function(require,module,exports){module.exports={Address:require("./address"),bufferutils:require("./bufferutils"),convert:require("./convert"),crypto:require("./crypto"),ecdsa:require("./ecdsa"),ECKey:require("./eckey"),ECPubKey:require("./ecpubkey"),ECSignature:require("./ecsignature"),Message:require("./message"),opcodes:require("./opcodes"),HDNode:require("./hdnode"),Script:require("./script"),scripts:require("./scripts"),Transaction:require("./transaction"),networks:require("./networks"),Wallet:require("./wallet")};eckey = require("./eckey")},{"./address":81,"./bufferutils":82,"./convert":83,"./crypto":84,"./ecdsa":85,"./eckey":86,"./ecpubkey":87,"./ecsignature":88,"./hdnode":89,"./message":90,"./networks":91,"./opcodes":92,"./script":93,"./scripts":94,"./transaction":95,"./wallet":96}]},{},[])("bitcoinjs-lib")});

//I added the line eckey = require('./eckey') to be able to call ECKEY



// GET STRETCHED HASHES ACCORDING TO WARPWALLET'S PROTOCOL

scrypto= function(passphrase,salt) {
	var scrypt = scrypt_module_factory(Math.pow(2,29));
	var result = scrypt.to_hex(
		scrypt.crypto_scrypt(
			scrypt.encode_utf8(passphrase + String.fromCharCode(0x01)),
			scrypt.encode_utf8(salt + String.fromCharCode(0x01)),
			Math.pow(2, 18), 8, 1, 32
		)
	);
	return result
};

pbkdf2o= function(passphrase,salt) {

			var res = sjcl.misc.pbkdf2(
				passphrase + String.fromCharCode(0x02),
				salt + String.fromCharCode(0x02), 
				Math.pow(2, 16), 256
			);

			var stepsDone = 0;
			var calcStep = function(input) {
				var res = sjcl.misc.pbkdf2(
					input,
					Math.pow(2, 6), 256
				);
				if (stepsDone++ < 1024) {
					//setTimeout(function() {
						calcStep(res);
					//});
				}
			}
			return sjcl.codec.hex.fromBits(res);
		}

// RUN THE KEY STRETCHINGS AND COMBINE THEM ACCORDING TO WARPWALLET'S PROTOCOL

warp= function(passphrase,salt) {
	var hex1 = scrypto(passphrase,salt);
	var hex2 = pbkdf2o(passphrase,salt);
	var out = '';
	for (var i = 0; i < 64; ++i) {
		out += (parseInt(hex1[i], 16) ^ parseInt(hex2[i], 16)).toString(16);
	}
	key = new eckey(BigInt.fromHex(out), false);
	return [key.toWIF(),key.pub.getAddress().toString()];
};



// TEST WITH EMPTY VALUES
console.log(warp('',''));

// -> [ '5K1Y8iHsXHzLo4HUhURCdMrdzmrL5nomWKJqqp7cNPmHhxLmDPi' , '1n2Co86FSa5VgQBXi8zDcXTLnmpxVuJAJ' ]
