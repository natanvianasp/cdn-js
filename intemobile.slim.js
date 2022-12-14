/*!
 * jQuery JavaScript Library v3.6.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-08-26T17:52Z
 */
!(function (global, factory) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = global.document
      ? factory(global, !0)
      : function (w) {
        if (!w.document)
          throw new Error("jQuery requires a window with a document");
        return factory(w);
      })
    : factory(global);
})("undefined" != typeof window ? window : this, function (window, noGlobal) {
  "use strict";
  var arr = [],
    getProto = Object.getPrototypeOf,
    slice = arr.slice,
    flat = arr.flat
      ? function (array) {
        return arr.flat.call(array);
      }
      : function (array) {
        return arr.concat.apply([], array);
      },
    push = arr.push,
    indexOf = arr.indexOf,
    class2type = {},
    toString = class2type.toString,
    hasOwn = class2type.hasOwnProperty,
    fnToString = hasOwn.toString,
    ObjectFunctionString = fnToString.call(Object),
    support = {},
    isFunction = function isFunction(obj) {
      return (
        "function" == typeof obj &&
        "number" != typeof obj.nodeType &&
        "function" != typeof obj.item
      );
    },
    isWindow = function isWindow(obj) {
      return null != obj && obj === obj.window;
    },
    document = window.document,
    preservedScriptAttributes = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function DOMEval(code, node, doc) {
    var i,
      val,
      script = (doc = doc || document).createElement("script");
    if (((script.text = code), node))
      for (i in preservedScriptAttributes)
        (val = node[i] || (node.getAttribute && node.getAttribute(i))) &&
          script.setAttribute(i, val);
    doc.head.appendChild(script).parentNode.removeChild(script);
  }
  function toType(obj) {
    return null == obj
      ? obj + ""
      : "object" == typeof obj || "function" == typeof obj
        ? class2type[toString.call(obj)] || "object"
        : typeof obj;
  }
  var version =
    "3.6.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector",
    jQuery = function (selector, context) {
      return new jQuery.fn.init(selector, context);
    };
  function isArrayLike(obj) {
    var length = !!obj && "length" in obj && obj.length,
      type = toType(obj);
    return (
      !isFunction(obj) &&
      !isWindow(obj) &&
      ("array" === type ||
        0 === length ||
        ("number" == typeof length && length > 0 && length - 1 in obj))
    );
  }
  (jQuery.fn = jQuery.prototype =
  {
    jquery: version,
    constructor: jQuery,
    length: 0,
    toArray: function () {
      return slice.call(this);
    },
    get: function (num) {
      return null == num
        ? slice.call(this)
        : num < 0
          ? this[num + this.length]
          : this[num];
    },
    pushStack: function (elems) {
      var ret = jQuery.merge(this.constructor(), elems);
      return (ret.prevObject = this), ret;
    },
    each: function (callback) {
      return jQuery.each(this, callback);
    },
    map: function (callback) {
      return this.pushStack(
        jQuery.map(this, function (elem, i) {
          return callback.call(elem, i, elem);
        })
      );
    },
    slice: function () {
      return this.pushStack(slice.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    even: function () {
      return this.pushStack(
        jQuery.grep(this, function (_elem, i) {
          return (i + 1) % 2;
        })
      );
    },
    odd: function () {
      return this.pushStack(
        jQuery.grep(this, function (_elem, i) {
          return i % 2;
        })
      );
    },
    eq: function (i) {
      var len = this.length,
        j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: push,
    sort: arr.sort,
    splice: arr.splice,
  }),
    (jQuery.extend = jQuery.fn.extend =
      function () {
        var options,
          name,
          src,
          copy,
          copyIsArray,
          clone,
          target = arguments[0] || {},
          i = 1,
          length = arguments.length,
          deep = !1;
        for (
          "boolean" == typeof target &&
          ((deep = target), (target = arguments[i] || {}), i++),
          "object" == typeof target || isFunction(target) || (target = {}),
          i === length && ((target = this), i--);
          i < length;
          i++
        )
          if (null != (options = arguments[i]))
            for (name in options)
              (copy = options[name]),
                "__proto__" !== name &&
                target !== copy &&
                (deep &&
                  copy &&
                  (jQuery.isPlainObject(copy) ||
                    (copyIsArray = Array.isArray(copy)))
                  ? ((src = target[name]),
                    (clone =
                      copyIsArray && !Array.isArray(src)
                        ? []
                        : copyIsArray || jQuery.isPlainObject(src)
                          ? src
                          : {}),
                    (copyIsArray = !1),
                    (target[name] = jQuery.extend(deep, clone, copy)))
                  : void 0 !== copy && (target[name] = copy));
        return target;
      }),
    jQuery.extend({
      expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (msg) {
        throw new Error(msg);
      },
      noop: function () { },
      isPlainObject: function (obj) {
        var proto, Ctor;
        return (
          !(!obj || "[object Object]" !== toString.call(obj)) &&
          (!(proto = getProto(obj)) ||
            ("function" ==
              typeof (Ctor =
                hasOwn.call(proto, "constructor") && proto.constructor) &&
              fnToString.call(Ctor) === ObjectFunctionString))
        );
      },
      isEmptyObject: function (obj) {
        var name;
        for (name in obj) return !1;
        return !0;
      },
      globalEval: function (code, options, doc) {
        DOMEval(code, { nonce: options && options.nonce }, doc);
      },
      each: function (obj, callback) {
        var length,
          i = 0;
        if (isArrayLike(obj))
          for (
            length = obj.length;
            i < length && !1 !== callback.call(obj[i], i, obj[i]);
            i++
          );
        else for (i in obj) if (!1 === callback.call(obj[i], i, obj[i])) break;
        return obj;
      },
      makeArray: function (arr, results) {
        var ret = results || [];
        return (
          null != arr &&
          (isArrayLike(Object(arr))
            ? jQuery.merge(ret, "string" == typeof arr ? [arr] : arr)
            : push.call(ret, arr)),
          ret
        );
      },
      inArray: function (elem, arr, i) {
        return null == arr ? -1 : indexOf.call(arr, elem, i);
      },
      merge: function (first, second) {
        for (var len = +second.length, j = 0, i = first.length; j < len; j++)
          first[i++] = second[j];
        return (first.length = i), first;
      },
      grep: function (elems, callback, invert) {
        for (
          var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert;
          i < length;
          i++
        )
          (callbackInverse = !callback(elems[i], i)) !== callbackExpect &&
            matches.push(elems[i]);
        return matches;
      },
      map: function (elems, callback, arg) {
        var length,
          value,
          i = 0,
          ret = [];
        if (isArrayLike(elems))
          for (length = elems.length; i < length; i++)
            null != (value = callback(elems[i], i, arg)) && ret.push(value);
        else
          for (i in elems)
            null != (value = callback(elems[i], i, arg)) && ret.push(value);
        return flat(ret);
      },
      guid: 1,
      support: support,
    }),
    "function" == typeof Symbol &&
    (jQuery.fn[Symbol.iterator] = arr[Symbol.iterator]),
    jQuery.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (_i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
      }
    );
  var Sizzle =
    /*!
     * Sizzle CSS Selector Engine v2.3.6
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://js.foundation/
     *
     * Date: 2021-02-16
     */
    (function (window) {
      var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,
        setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        nonnativeSelectorCache = createCache(),
        sortOrder = function (a, b) {
          return a === b && (hasDuplicate = !0), 0;
        },
        hasOwn = {}.hasOwnProperty,
        arr = [],
        pop = arr.pop,
        pushNative = arr.push,
        push = arr.push,
        slice = arr.slice,
        indexOf = function (list, elem) {
          for (var i = 0, len = list.length; i < len; i++)
            if (list[i] === elem) return i;
          return -1;
        },
        booleans =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        whitespace = "[\\x20\\t\\r\\n\\f]",
        identifier =
          "(?:\\\\[\\da-fA-F]{1,6}" +
          whitespace +
          "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        attributes =
          "\\[" +
          whitespace +
          "*(" +
          identifier +
          ")(?:" +
          whitespace +
          "*([*^$|!~]?=)" +
          whitespace +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          identifier +
          "))|)" +
          whitespace +
          "*\\]",
        pseudos =
          ":(" +
          identifier +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          attributes +
          ")*)|.*)\\)|)",
        rwhitespace = new RegExp(whitespace + "+", "g"),
        rtrim = new RegExp(
          "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
          "g"
        ),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp(
          "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"
        ),
        rdescend = new RegExp(whitespace + "|>"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = {
          ID: new RegExp("^#(" + identifier + ")"),
          CLASS: new RegExp("^\\.(" + identifier + ")"),
          TAG: new RegExp("^(" + identifier + "|[*])"),
          ATTR: new RegExp("^" + attributes),
          PSEUDO: new RegExp("^" + pseudos),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            whitespace +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            whitespace +
            "*(?:([+-]|)" +
            whitespace +
            "*(\\d+)|))" +
            whitespace +
            "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + booleans + ")$", "i"),
          needsContext: new RegExp(
            "^" +
            whitespace +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            whitespace +
            "*((?:-\\d)?\\d*)" +
            whitespace +
            "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        rhtml = /HTML$/i,
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rnative = /^[^{]+\{\s*\[native \w/,
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rsibling = /[+~]/,
        runescape = new RegExp(
          "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])",
          "g"
        ),
        funescape = function (escape, nonHex) {
          var high = "0x" + escape.slice(1) - 65536;
          return (
            nonHex ||
            (high < 0
              ? String.fromCharCode(high + 65536)
              : String.fromCharCode(
                (high >> 10) | 55296,
                (1023 & high) | 56320
              ))
          );
        },
        rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        fcssescape = function (ch, asCodePoint) {
          return asCodePoint
            ? "\0" === ch
              ? "???"
              : ch.slice(0, -1) +
              "\\" +
              ch.charCodeAt(ch.length - 1).toString(16) +
              " "
            : "\\" + ch;
        },
        unloadHandler = function () {
          setDocument();
        },
        inDisabledFieldset = addCombinator(
          function (elem) {
            return (
              !0 === elem.disabled && "fieldset" === elem.nodeName.toLowerCase()
            );
          },
          { dir: "parentNode", next: "legend" }
        );
      try {
        push.apply(
          (arr = slice.call(preferredDoc.childNodes)),
          preferredDoc.childNodes
        ),
          arr[preferredDoc.childNodes.length].nodeType;
      } catch (e) {
        push = {
          apply: arr.length
            ? function (target, els) {
              pushNative.apply(target, slice.call(els));
            }
            : function (target, els) {
              for (var j = target.length, i = 0; (target[j++] = els[i++]););
              target.length = j - 1;
            },
        };
      }
      function Sizzle(selector, context, results, seed) {
        var m,
          i,
          elem,
          nid,
          match,
          groups,
          newSelector,
          newContext = context && context.ownerDocument,
          nodeType = context ? context.nodeType : 9;
        if (
          ((results = results || []),
            "string" != typeof selector ||
            !selector ||
            (1 !== nodeType && 9 !== nodeType && 11 !== nodeType))
        )
          return results;
        if (
          !seed &&
          (setDocument(context),
            (context = context || document),
            documentIsHTML)
        ) {
          if (11 !== nodeType && (match = rquickExpr.exec(selector)))
            if ((m = match[1])) {
              if (9 === nodeType) {
                if (!(elem = context.getElementById(m))) return results;
                if (elem.id === m) return results.push(elem), results;
              } else if (
                newContext &&
                (elem = newContext.getElementById(m)) &&
                contains(context, elem) &&
                elem.id === m
              )
                return results.push(elem), results;
            } else {
              if (match[2])
                return (
                  push.apply(results, context.getElementsByTagName(selector)),
                  results
                );
              if (
                (m = match[3]) &&
                support.getElementsByClassName &&
                context.getElementsByClassName
              )
                return (
                  push.apply(results, context.getElementsByClassName(m)),
                  results
                );
            }
          if (
            support.qsa &&
            !nonnativeSelectorCache[selector + " "] &&
            (!rbuggyQSA || !rbuggyQSA.test(selector)) &&
            (1 !== nodeType || "object" !== context.nodeName.toLowerCase())
          ) {
            if (
              ((newSelector = selector),
                (newContext = context),
                1 === nodeType &&
                (rdescend.test(selector) || rcombinators.test(selector)))
            ) {
              for (
                ((newContext =
                  (rsibling.test(selector) &&
                    testContext(context.parentNode)) ||
                  context) === context &&
                  support.scope) ||
                ((nid = context.getAttribute("id"))
                  ? (nid = nid.replace(rcssescape, fcssescape))
                  : context.setAttribute("id", (nid = expando))),
                i = (groups = tokenize(selector)).length;
                i--;

              )
                groups[i] =
                  (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
              newSelector = groups.join(",");
            }
            try {
              return (
                push.apply(results, newContext.querySelectorAll(newSelector)),
                results
              );
            } catch (qsaError) {
              nonnativeSelectorCache(selector, !0);
            } finally {
              nid === expando && context.removeAttribute("id");
            }
          }
        }
        return select(selector.replace(rtrim, "$1"), context, results, seed);
      }
      function createCache() {
        var keys = [];
        function cache(key, value) {
          return (
            keys.push(key + " ") > Expr.cacheLength &&
            delete cache[keys.shift()],
            (cache[key + " "] = value)
          );
        }
        return cache;
      }
      function markFunction(fn) {
        return (fn[expando] = !0), fn;
      }
      function assert(fn) {
        var el = document.createElement("fieldset");
        try {
          return !!fn(el);
        } catch (e) {
          return !1;
        } finally {
          el.parentNode && el.parentNode.removeChild(el), (el = null);
        }
      }
      function addHandle(attrs, handler) {
        for (var arr = attrs.split("|"), i = arr.length; i--;)
          Expr.attrHandle[arr[i]] = handler;
      }
      function siblingCheck(a, b) {
        var cur = b && a,
          diff =
            cur &&
            1 === a.nodeType &&
            1 === b.nodeType &&
            a.sourceIndex - b.sourceIndex;
        if (diff) return diff;
        if (cur) for (; (cur = cur.nextSibling);) if (cur === b) return -1;
        return a ? 1 : -1;
      }
      function createInputPseudo(type) {
        return function (elem) {
          var name;
          return "input" === elem.nodeName.toLowerCase() && elem.type === type;
        };
      }
      function createButtonPseudo(type) {
        return function (elem) {
          var name = elem.nodeName.toLowerCase();
          return ("input" === name || "button" === name) && elem.type === type;
        };
      }
      function createDisabledPseudo(disabled) {
        return function (elem) {
          return "form" in elem
            ? elem.parentNode && !1 === elem.disabled
              ? "label" in elem
                ? "label" in elem.parentNode
                  ? elem.parentNode.disabled === disabled
                  : elem.disabled === disabled
                : elem.isDisabled === disabled ||
                (elem.isDisabled !== !disabled &&
                  inDisabledFieldset(elem) === disabled)
              : elem.disabled === disabled
            : "label" in elem && elem.disabled === disabled;
        };
      }
      function createPositionalPseudo(fn) {
        return markFunction(function (argument) {
          return (
            (argument = +argument),
            markFunction(function (seed, matches) {
              for (
                var j,
                matchIndexes = fn([], seed.length, argument),
                i = matchIndexes.length;
                i--;

              )
                seed[(j = matchIndexes[i])] &&
                  (seed[j] = !(matches[j] = seed[j]));
            })
          );
        });
      }
      function testContext(context) {
        return context && void 0 !== context.getElementsByTagName && context;
      }
      for (i in ((support = Sizzle.support = {}),
        (isXML = Sizzle.isXML =
          function (elem) {
            var namespace = elem && elem.namespaceURI,
              docElem = elem && (elem.ownerDocument || elem).documentElement;
            return !rhtml.test(
              namespace || (docElem && docElem.nodeName) || "HTML"
            );
          }),
        (setDocument = Sizzle.setDocument =
          function (node) {
            var hasCompare,
              subWindow,
              doc = node ? node.ownerDocument || node : preferredDoc;
            return doc != document && 9 === doc.nodeType && doc.documentElement
              ? ((docElem = (document = doc).documentElement),
                (documentIsHTML = !isXML(document)),
                preferredDoc != document &&
                (subWindow = document.defaultView) &&
                subWindow.top !== subWindow &&
                (subWindow.addEventListener
                  ? subWindow.addEventListener("unload", unloadHandler, !1)
                  : subWindow.attachEvent &&
                  subWindow.attachEvent("onunload", unloadHandler)),
                (support.scope = assert(function (el) {
                  return (
                    docElem
                      .appendChild(el)
                      .appendChild(document.createElement("div")),
                    void 0 !== el.querySelectorAll &&
                    !el.querySelectorAll(":scope fieldset div").length
                  );
                })),
                (support.attributes = assert(function (el) {
                  return (el.className = "i"), !el.getAttribute("className");
                })),
                (support.getElementsByTagName = assert(function (el) {
                  return (
                    el.appendChild(document.createComment("")),
                    !el.getElementsByTagName("*").length
                  );
                })),
                (support.getElementsByClassName = rnative.test(
                  document.getElementsByClassName
                )),
                (support.getById = assert(function (el) {
                  return (
                    (docElem.appendChild(el).id = expando),
                    !document.getElementsByName ||
                    !document.getElementsByName(expando).length
                  );
                })),
                support.getById
                  ? ((Expr.filter.ID = function (id) {
                    var attrId = id.replace(runescape, funescape);
                    return function (elem) {
                      return elem.getAttribute("id") === attrId;
                    };
                  }),
                    (Expr.find.ID = function (id, context) {
                      if (void 0 !== context.getElementById && documentIsHTML) {
                        var elem = context.getElementById(id);
                        return elem ? [elem] : [];
                      }
                    }))
                  : ((Expr.filter.ID = function (id) {
                    var attrId = id.replace(runescape, funescape);
                    return function (elem) {
                      var node =
                        void 0 !== elem.getAttributeNode &&
                        elem.getAttributeNode("id");
                      return node && node.value === attrId;
                    };
                  }),
                    (Expr.find.ID = function (id, context) {
                      if (void 0 !== context.getElementById && documentIsHTML) {
                        var node,
                          i,
                          elems,
                          elem = context.getElementById(id);
                        if (elem) {
                          if (
                            (node = elem.getAttributeNode("id")) &&
                            node.value === id
                          )
                            return [elem];
                          for (
                            elems = context.getElementsByName(id), i = 0;
                            (elem = elems[i++]);

                          )
                            if (
                              (node = elem.getAttributeNode("id")) &&
                              node.value === id
                            )
                              return [elem];
                        }
                        return [];
                      }
                    })),
                (Expr.find.TAG = support.getElementsByTagName
                  ? function (tag, context) {
                    return void 0 !== context.getElementsByTagName
                      ? context.getElementsByTagName(tag)
                      : support.qsa
                        ? context.querySelectorAll(tag)
                        : void 0;
                  }
                  : function (tag, context) {
                    var elem,
                      tmp = [],
                      i = 0,
                      results = context.getElementsByTagName(tag);
                    if ("*" === tag) {
                      for (; (elem = results[i++]);)
                        1 === elem.nodeType && tmp.push(elem);
                      return tmp;
                    }
                    return results;
                  }),
                (Expr.find.CLASS =
                  support.getElementsByClassName &&
                  function (className, context) {
                    if (
                      void 0 !== context.getElementsByClassName &&
                      documentIsHTML
                    )
                      return context.getElementsByClassName(className);
                  }),
                (rbuggyMatches = []),
                (rbuggyQSA = []),
                (support.qsa = rnative.test(document.querySelectorAll)) &&
                (assert(function (el) {
                  var input;
                  (docElem.appendChild(el).innerHTML =
                    "<a id='" +
                    expando +
                    "'></a><select id='" +
                    expando +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    el.querySelectorAll("[msallowcapture^='']").length &&
                    rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")"),
                    el.querySelectorAll("[selected]").length ||
                    rbuggyQSA.push(
                      "\\[" + whitespace + "*(?:value|" + booleans + ")"
                    ),
                    el.querySelectorAll("[id~=" + expando + "-]").length ||
                    rbuggyQSA.push("~="),
                    (input = document.createElement("input")).setAttribute(
                      "name",
                      ""
                    ),
                    el.appendChild(input),
                    el.querySelectorAll("[name='']").length ||
                    rbuggyQSA.push(
                      "\\[" +
                      whitespace +
                      "*name" +
                      whitespace +
                      "*=" +
                      whitespace +
                      "*(?:''|\"\")"
                    ),
                    el.querySelectorAll(":checked").length ||
                    rbuggyQSA.push(":checked"),
                    el.querySelectorAll("a#" + expando + "+*").length ||
                    rbuggyQSA.push(".#.+[+~]"),
                    el.querySelectorAll("\\\f"),
                    rbuggyQSA.push("[\\r\\n\\f]");
                }),
                  assert(function (el) {
                    el.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var input = document.createElement("input");
                    input.setAttribute("type", "hidden"),
                      el.appendChild(input).setAttribute("name", "D"),
                      el.querySelectorAll("[name=d]").length &&
                      rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?="),
                      2 !== el.querySelectorAll(":enabled").length &&
                      rbuggyQSA.push(":enabled", ":disabled"),
                      (docElem.appendChild(el).disabled = !0),
                      2 !== el.querySelectorAll(":disabled").length &&
                      rbuggyQSA.push(":enabled", ":disabled"),
                      el.querySelectorAll("*,:x"),
                      rbuggyQSA.push(",.*:");
                  })),
                (support.matchesSelector = rnative.test(
                  (matches =
                    docElem.matches ||
                    docElem.webkitMatchesSelector ||
                    docElem.mozMatchesSelector ||
                    docElem.oMatchesSelector ||
                    docElem.msMatchesSelector)
                )) &&
                assert(function (el) {
                  (support.disconnectedMatch = matches.call(el, "*")),
                    matches.call(el, "[s!='']:x"),
                    rbuggyMatches.push("!=", pseudos);
                }),
                (rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"))),
                (rbuggyMatches =
                  rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"))),
                (hasCompare = rnative.test(docElem.compareDocumentPosition)),
                (contains =
                  hasCompare || rnative.test(docElem.contains)
                    ? function (a, b) {
                      var adown = 9 === a.nodeType ? a.documentElement : a,
                        bup = b && b.parentNode;
                      return (
                        a === bup ||
                        !(
                          !bup ||
                          1 !== bup.nodeType ||
                          !(adown.contains
                            ? adown.contains(bup)
                            : a.compareDocumentPosition &&
                            16 & a.compareDocumentPosition(bup))
                        )
                      );
                    }
                    : function (a, b) {
                      if (b)
                        for (; (b = b.parentNode);) if (b === a) return !0;
                      return !1;
                    }),
                (sortOrder = hasCompare
                  ? function (a, b) {
                    if (a === b) return (hasDuplicate = !0), 0;
                    var compare =
                      !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return (
                      compare ||
                      (1 &
                        (compare =
                          (a.ownerDocument || a) == (b.ownerDocument || b)
                            ? a.compareDocumentPosition(b)
                            : 1) ||
                        (!support.sortDetached &&
                          b.compareDocumentPosition(a) === compare)
                        ? a == document ||
                          (a.ownerDocument == preferredDoc &&
                            contains(preferredDoc, a))
                          ? -1
                          : b == document ||
                            (b.ownerDocument == preferredDoc &&
                              contains(preferredDoc, b))
                            ? 1
                            : sortInput
                              ? indexOf(sortInput, a) - indexOf(sortInput, b)
                              : 0
                        : 4 & compare
                          ? -1
                          : 1)
                    );
                  }
                  : function (a, b) {
                    if (a === b) return (hasDuplicate = !0), 0;
                    var cur,
                      i = 0,
                      aup = a.parentNode,
                      bup = b.parentNode,
                      ap = [a],
                      bp = [b];
                    if (!aup || !bup)
                      return a == document
                        ? -1
                        : b == document
                          ? 1
                          : aup
                            ? -1
                            : bup
                              ? 1
                              : sortInput
                                ? indexOf(sortInput, a) - indexOf(sortInput, b)
                                : 0;
                    if (aup === bup) return siblingCheck(a, b);
                    for (cur = a; (cur = cur.parentNode);) ap.unshift(cur);
                    for (cur = b; (cur = cur.parentNode);) bp.unshift(cur);
                    for (; ap[i] === bp[i];) i++;
                    return i
                      ? siblingCheck(ap[i], bp[i])
                      : ap[i] == preferredDoc
                        ? -1
                        : bp[i] == preferredDoc
                          ? 1
                          : 0;
                  }),
                document)
              : document;
          }),
        (Sizzle.matches = function (expr, elements) {
          return Sizzle(expr, null, null, elements);
        }),
        (Sizzle.matchesSelector = function (elem, expr) {
          if (
            (setDocument(elem),
              support.matchesSelector &&
              documentIsHTML &&
              !nonnativeSelectorCache[expr + " "] &&
              (!rbuggyMatches || !rbuggyMatches.test(expr)) &&
              (!rbuggyQSA || !rbuggyQSA.test(expr)))
          )
            try {
              var ret = matches.call(elem, expr);
              if (
                ret ||
                support.disconnectedMatch ||
                (elem.document && 11 !== elem.document.nodeType)
              )
                return ret;
            } catch (e) {
              nonnativeSelectorCache(expr, !0);
            }
          return Sizzle(expr, document, null, [elem]).length > 0;
        }),
        (Sizzle.contains = function (context, elem) {
          return (
            (context.ownerDocument || context) != document &&
            setDocument(context),
            contains(context, elem)
          );
        }),
        (Sizzle.attr = function (elem, name) {
          (elem.ownerDocument || elem) != document && setDocument(elem);
          var fn = Expr.attrHandle[name.toLowerCase()],
            val =
              fn && hasOwn.call(Expr.attrHandle, name.toLowerCase())
                ? fn(elem, name, !documentIsHTML)
                : void 0;
          return void 0 !== val
            ? val
            : support.attributes || !documentIsHTML
              ? elem.getAttribute(name)
              : (val = elem.getAttributeNode(name)) && val.specified
                ? val.value
                : null;
        }),
        (Sizzle.escape = function (sel) {
          return (sel + "").replace(rcssescape, fcssescape);
        }),
        (Sizzle.error = function (msg) {
          throw new Error("Syntax error, unrecognized expression: " + msg);
        }),
        (Sizzle.uniqueSort = function (results) {
          var elem,
            duplicates = [],
            j = 0,
            i = 0;
          if (
            ((hasDuplicate = !support.detectDuplicates),
              (sortInput = !support.sortStable && results.slice(0)),
              results.sort(sortOrder),
              hasDuplicate)
          ) {
            for (; (elem = results[i++]);)
              elem === results[i] && (j = duplicates.push(i));
            for (; j--;) results.splice(duplicates[j], 1);
          }
          return (sortInput = null), results;
        }),
        (getText = Sizzle.getText =
          function (elem) {
            var node,
              ret = "",
              i = 0,
              nodeType = elem.nodeType;
            if (nodeType) {
              if (1 === nodeType || 9 === nodeType || 11 === nodeType) {
                if ("string" == typeof elem.textContent) return elem.textContent;
                for (elem = elem.firstChild; elem; elem = elem.nextSibling)
                  ret += getText(elem);
              } else if (3 === nodeType || 4 === nodeType) return elem.nodeValue;
            } else for (; (node = elem[i++]);) ret += getText(node);
            return ret;
          }),
        ((Expr = Sizzle.selectors =
        {
          cacheLength: 50,
          createPseudo: markFunction,
          match: matchExpr,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (match) {
              return (
                (match[1] = match[1].replace(runescape, funescape)),
                (match[3] = (match[3] || match[4] || match[5] || "").replace(
                  runescape,
                  funescape
                )),
                "~=" === match[2] && (match[3] = " " + match[3] + " "),
                match.slice(0, 4)
              );
            },
            CHILD: function (match) {
              return (
                (match[1] = match[1].toLowerCase()),
                "nth" === match[1].slice(0, 3)
                  ? (match[3] || Sizzle.error(match[0]),
                    (match[4] = +(match[4]
                      ? match[5] + (match[6] || 1)
                      : 2 * ("even" === match[3] || "odd" === match[3]))),
                    (match[5] = +(match[7] + match[8] || "odd" === match[3])))
                  : match[3] && Sizzle.error(match[0]),
                match
              );
            },
            PSEUDO: function (match) {
              var excess,
                unquoted = !match[6] && match[2];
              return matchExpr.CHILD.test(match[0])
                ? null
                : (match[3]
                  ? (match[2] = match[4] || match[5] || "")
                  : unquoted &&
                  rpseudo.test(unquoted) &&
                  (excess = tokenize(unquoted, !0)) &&
                  (excess =
                    unquoted.indexOf(")", unquoted.length - excess) -
                    unquoted.length) &&
                  ((match[0] = match[0].slice(0, excess)),
                    (match[2] = unquoted.slice(0, excess))),
                  match.slice(0, 3));
            },
          },
          filter: {
            TAG: function (nodeNameSelector) {
              var nodeName = nodeNameSelector
                .replace(runescape, funescape)
                .toLowerCase();
              return "*" === nodeNameSelector
                ? function () {
                  return !0;
                }
                : function (elem) {
                  return (
                    elem.nodeName && elem.nodeName.toLowerCase() === nodeName
                  );
                };
            },
            CLASS: function (className) {
              var pattern = classCache[className + " "];
              return (
                pattern ||
                ((pattern = new RegExp(
                  "(^|" +
                  whitespace +
                  ")" +
                  className +
                  "(" +
                  whitespace +
                  "|$)"
                )) &&
                  classCache(className, function (elem) {
                    return pattern.test(
                      ("string" == typeof elem.className && elem.className) ||
                      (void 0 !== elem.getAttribute &&
                        elem.getAttribute("class")) ||
                      ""
                    );
                  }))
              );
            },
            ATTR: function (name, operator, check) {
              return function (elem) {
                var result = Sizzle.attr(elem, name);
                return null == result
                  ? "!=" === operator
                  : !operator ||
                  ((result += ""),
                    "=" === operator
                      ? result === check
                      : "!=" === operator
                        ? result !== check
                        : "^=" === operator
                          ? check && 0 === result.indexOf(check)
                          : "*=" === operator
                            ? check && result.indexOf(check) > -1
                            : "$=" === operator
                              ? check && result.slice(-check.length) === check
                              : "~=" === operator
                                ? (
                                  " " +
                                  result.replace(rwhitespace, " ") +
                                  " "
                                ).indexOf(check) > -1
                                : "|=" === operator &&
                                (result === check ||
                                  result.slice(0, check.length + 1) === check + "-"));
              };
            },
            CHILD: function (type, what, _argument, first, last) {
              var simple = "nth" !== type.slice(0, 3),
                forward = "last" !== type.slice(-4),
                ofType = "of-type" === what;
              return 1 === first && 0 === last
                ? function (elem) {
                  return !!elem.parentNode;
                }
                : function (elem, _context, xml) {
                  var cache,
                    uniqueCache,
                    outerCache,
                    node,
                    nodeIndex,
                    start,
                    dir =
                      simple !== forward ? "nextSibling" : "previousSibling",
                    parent = elem.parentNode,
                    name = ofType && elem.nodeName.toLowerCase(),
                    useCache = !xml && !ofType,
                    diff = !1;
                  if (parent) {
                    if (simple) {
                      for (; dir;) {
                        for (node = elem; (node = node[dir]);)
                          if (
                            ofType
                              ? node.nodeName.toLowerCase() === name
                              : 1 === node.nodeType
                          )
                            return !1;
                        start = dir =
                          "only" === type && !start && "nextSibling";
                      }
                      return !0;
                    }
                    if (
                      ((start = [
                        forward ? parent.firstChild : parent.lastChild,
                      ]),
                        forward && useCache)
                    ) {
                      for (
                        diff =
                        (nodeIndex =
                          (cache =
                            (uniqueCache =
                              (outerCache =
                                (node = parent)[expando] ||
                                (node[expando] = {}))[node.uniqueID] ||
                              (outerCache[node.uniqueID] = {}))[type] ||
                            [])[0] === dirruns && cache[1]) && cache[2],
                        node = nodeIndex && parent.childNodes[nodeIndex];
                        (node =
                          (++nodeIndex && node && node[dir]) ||
                          (diff = nodeIndex = 0) ||
                          start.pop());

                      )
                        if (1 === node.nodeType && ++diff && node === elem) {
                          uniqueCache[type] = [dirruns, nodeIndex, diff];
                          break;
                        }
                    } else if (
                      (useCache &&
                        (diff = nodeIndex =
                          (cache =
                            (uniqueCache =
                              (outerCache =
                                (node = elem)[expando] ||
                                (node[expando] = {}))[node.uniqueID] ||
                              (outerCache[node.uniqueID] = {}))[type] ||
                            [])[0] === dirruns && cache[1]),
                        !1 === diff)
                    )
                      for (
                        ;
                        (node =
                          (++nodeIndex && node && node[dir]) ||
                          (diff = nodeIndex = 0) ||
                          start.pop()) &&
                        ((ofType
                          ? node.nodeName.toLowerCase() !== name
                          : 1 !== node.nodeType) ||
                          !++diff ||
                          (useCache &&
                            ((uniqueCache =
                              (outerCache =
                                node[expando] || (node[expando] = {}))[
                              node.uniqueID
                              ] || (outerCache[node.uniqueID] = {}))[type] = [
                                dirruns,
                                diff,
                              ]),
                            node !== elem));

                      );
                    return (
                      (diff -= last) === first ||
                      (diff % first == 0 && diff / first >= 0)
                    );
                  }
                };
            },
            PSEUDO: function (pseudo, argument) {
              var args,
                fn =
                  Expr.pseudos[pseudo] ||
                  Expr.setFilters[pseudo.toLowerCase()] ||
                  Sizzle.error("unsupported pseudo: " + pseudo);
              return fn[expando]
                ? fn(argument)
                : fn.length > 1
                  ? ((args = [pseudo, pseudo, "", argument]),
                    Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())
                      ? markFunction(function (seed, matches) {
                        for (
                          var idx,
                          matched = fn(seed, argument),
                          i = matched.length;
                          i--;

                        )
                          seed[(idx = indexOf(seed, matched[i]))] = !(matches[
                            idx
                          ] = matched[i]);
                      })
                      : function (elem) {
                        return fn(elem, 0, args);
                      })
                  : fn;
            },
          },
          pseudos: {
            not: markFunction(function (selector) {
              var input = [],
                results = [],
                matcher = compile(selector.replace(rtrim, "$1"));
              return matcher[expando]
                ? markFunction(function (seed, matches, _context, xml) {
                  for (
                    var elem,
                    unmatched = matcher(seed, null, xml, []),
                    i = seed.length;
                    i--;

                  )
                    (elem = unmatched[i]) && (seed[i] = !(matches[i] = elem));
                })
                : function (elem, _context, xml) {
                  return (
                    (input[0] = elem),
                    matcher(input, null, xml, results),
                    (input[0] = null),
                    !results.pop()
                  );
                };
            }),
            has: markFunction(function (selector) {
              return function (elem) {
                return Sizzle(selector, elem).length > 0;
              };
            }),
            contains: markFunction(function (text) {
              return (
                (text = text.replace(runescape, funescape)),
                function (elem) {
                  return (elem.textContent || getText(elem)).indexOf(text) > -1;
                }
              );
            }),
            lang: markFunction(function (lang) {
              return (
                ridentifier.test(lang || "") ||
                Sizzle.error("unsupported lang: " + lang),
                (lang = lang.replace(runescape, funescape).toLowerCase()),
                function (elem) {
                  var elemLang;
                  do {
                    if (
                      (elemLang = documentIsHTML
                        ? elem.lang
                        : elem.getAttribute("xml:lang") ||
                        elem.getAttribute("lang"))
                    )
                      return (
                        (elemLang = elemLang.toLowerCase()) === lang ||
                        0 === elemLang.indexOf(lang + "-")
                      );
                  } while ((elem = elem.parentNode) && 1 === elem.nodeType);
                  return !1;
                }
              );
            }),
            target: function (elem) {
              var hash = window.location && window.location.hash;
              return hash && hash.slice(1) === elem.id;
            },
            root: function (elem) {
              return elem === docElem;
            },
            focus: function (elem) {
              return (
                elem === document.activeElement &&
                (!document.hasFocus || document.hasFocus()) &&
                !!(elem.type || elem.href || ~elem.tabIndex)
              );
            },
            enabled: createDisabledPseudo(!1),
            disabled: createDisabledPseudo(!0),
            checked: function (elem) {
              var nodeName = elem.nodeName.toLowerCase();
              return (
                ("input" === nodeName && !!elem.checked) ||
                ("option" === nodeName && !!elem.selected)
              );
            },
            selected: function (elem) {
              return (
                elem.parentNode && elem.parentNode.selectedIndex,
                !0 === elem.selected
              );
            },
            empty: function (elem) {
              for (elem = elem.firstChild; elem; elem = elem.nextSibling)
                if (elem.nodeType < 6) return !1;
              return !0;
            },
            parent: function (elem) {
              return !Expr.pseudos.empty(elem);
            },
            header: function (elem) {
              return rheader.test(elem.nodeName);
            },
            input: function (elem) {
              return rinputs.test(elem.nodeName);
            },
            button: function (elem) {
              var name = elem.nodeName.toLowerCase();
              return (
                ("input" === name && "button" === elem.type) ||
                "button" === name
              );
            },
            text: function (elem) {
              var attr;
              return (
                "input" === elem.nodeName.toLowerCase() &&
                "text" === elem.type &&
                (null == (attr = elem.getAttribute("type")) ||
                  "text" === attr.toLowerCase())
              );
            },
            first: createPositionalPseudo(function () {
              return [0];
            }),
            last: createPositionalPseudo(function (_matchIndexes, length) {
              return [length - 1];
            }),
            eq: createPositionalPseudo(function (
              _matchIndexes,
              length,
              argument
            ) {
              return [argument < 0 ? argument + length : argument];
            }),
            even: createPositionalPseudo(function (matchIndexes, length) {
              for (var i = 0; i < length; i += 2) matchIndexes.push(i);
              return matchIndexes;
            }),
            odd: createPositionalPseudo(function (matchIndexes, length) {
              for (var i = 1; i < length; i += 2) matchIndexes.push(i);
              return matchIndexes;
            }),
            lt: createPositionalPseudo(function (
              matchIndexes,
              length,
              argument
            ) {
              for (
                var i =
                  argument < 0
                    ? argument + length
                    : argument > length
                      ? length
                      : argument;
                --i >= 0;

              )
                matchIndexes.push(i);
              return matchIndexes;
            }),
            gt: createPositionalPseudo(function (
              matchIndexes,
              length,
              argument
            ) {
              for (
                var i = argument < 0 ? argument + length : argument;
                ++i < length;

              )
                matchIndexes.push(i);
              return matchIndexes;
            }),
          },
        }).pseudos.nth = Expr.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        Expr.pseudos[i] = createInputPseudo(i);
      for (i in { submit: !0, reset: !0 })
        Expr.pseudos[i] = createButtonPseudo(i);
      function setFilters() { }
      function toSelector(tokens) {
        for (var i = 0, len = tokens.length, selector = ""; i < len; i++)
          selector += tokens[i].value;
        return selector;
      }
      function addCombinator(matcher, combinator, base) {
        var dir = combinator.dir,
          skip = combinator.next,
          key = skip || dir,
          checkNonElements = base && "parentNode" === key,
          doneName = done++;
        return combinator.first
          ? function (elem, context, xml) {
            for (; (elem = elem[dir]);)
              if (1 === elem.nodeType || checkNonElements)
                return matcher(elem, context, xml);
            return !1;
          }
          : function (elem, context, xml) {
            var oldCache,
              uniqueCache,
              outerCache,
              newCache = [dirruns, doneName];
            if (xml) {
              for (; (elem = elem[dir]);)
                if (
                  (1 === elem.nodeType || checkNonElements) &&
                  matcher(elem, context, xml)
                )
                  return !0;
            } else
              for (; (elem = elem[dir]);)
                if (1 === elem.nodeType || checkNonElements)
                  if (
                    ((uniqueCache =
                      (outerCache = elem[expando] || (elem[expando] = {}))[
                      elem.uniqueID
                      ] || (outerCache[elem.uniqueID] = {})),
                      skip && skip === elem.nodeName.toLowerCase())
                  )
                    elem = elem[dir] || elem;
                  else {
                    if (
                      (oldCache = uniqueCache[key]) &&
                      oldCache[0] === dirruns &&
                      oldCache[1] === doneName
                    )
                      return (newCache[2] = oldCache[2]);
                    if (
                      ((uniqueCache[key] = newCache),
                        (newCache[2] = matcher(elem, context, xml)))
                    )
                      return !0;
                  }
            return !1;
          };
      }
      function elementMatcher(matchers) {
        return matchers.length > 1
          ? function (elem, context, xml) {
            for (var i = matchers.length; i--;)
              if (!matchers[i](elem, context, xml)) return !1;
            return !0;
          }
          : matchers[0];
      }
      function multipleContexts(selector, contexts, results) {
        for (var i = 0, len = contexts.length; i < len; i++)
          Sizzle(selector, contexts[i], results);
        return results;
      }
      function condense(unmatched, map, filter, context, xml) {
        for (
          var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = null != map;
          i < len;
          i++
        )
          (elem = unmatched[i]) &&
            ((filter && !filter(elem, context, xml)) ||
              (newUnmatched.push(elem), mapped && map.push(i)));
        return newUnmatched;
      }
      function setMatcher(
        preFilter,
        selector,
        matcher,
        postFilter,
        postFinder,
        postSelector
      ) {
        return (
          postFilter &&
          !postFilter[expando] &&
          (postFilter = setMatcher(postFilter)),
          postFinder &&
          !postFinder[expando] &&
          (postFinder = setMatcher(postFinder, postSelector)),
          markFunction(function (seed, results, context, xml) {
            var temp,
              i,
              elem,
              preMap = [],
              postMap = [],
              preexisting = results.length,
              elems =
                seed ||
                multipleContexts(
                  selector || "*",
                  context.nodeType ? [context] : context,
                  []
                ),
              matcherIn =
                !preFilter || (!seed && selector)
                  ? elems
                  : condense(elems, preMap, preFilter, context, xml),
              matcherOut = matcher
                ? postFinder || (seed ? preFilter : preexisting || postFilter)
                  ? []
                  : results
                : matcherIn;
            if (
              (matcher && matcher(matcherIn, matcherOut, context, xml),
                postFilter)
            )
              for (
                temp = condense(matcherOut, postMap),
                postFilter(temp, [], context, xml),
                i = temp.length;
                i--;

              )
                (elem = temp[i]) &&
                  (matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem));
            if (seed) {
              if (postFinder || preFilter) {
                if (postFinder) {
                  for (temp = [], i = matcherOut.length; i--;)
                    (elem = matcherOut[i]) && temp.push((matcherIn[i] = elem));
                  postFinder(null, (matcherOut = []), temp, xml);
                }
                for (i = matcherOut.length; i--;)
                  (elem = matcherOut[i]) &&
                    (temp = postFinder ? indexOf(seed, elem) : preMap[i]) >
                    -1 &&
                    (seed[temp] = !(results[temp] = elem));
              }
            } else (matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut)), postFinder ? postFinder(null, results, matcherOut, xml) : push.apply(results, matcherOut);
          })
        );
      }
      function matcherFromTokens(tokens) {
        for (
          var checkContext,
          matcher,
          j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
          matchContext = addCombinator(
            function (elem) {
              return elem === checkContext;
            },
            implicitRelative,
            !0
          ),
          matchAnyContext = addCombinator(
            function (elem) {
              return indexOf(checkContext, elem) > -1;
            },
            implicitRelative,
            !0
          ),
          matchers = [
            function (elem, context, xml) {
              var ret =
                (!leadingRelative && (xml || context !== outermostContext)) ||
                ((checkContext = context).nodeType
                  ? matchContext(elem, context, xml)
                  : matchAnyContext(elem, context, xml));
              return (checkContext = null), ret;
            },
          ];
          i < len;
          i++
        )
          if ((matcher = Expr.relative[tokens[i].type]))
            matchers = [addCombinator(elementMatcher(matchers), matcher)];
          else {
            if (
              (matcher = Expr.filter[tokens[i].type].apply(
                null,
                tokens[i].matches
              ))[expando]
            ) {
              for (j = ++i; j < len && !Expr.relative[tokens[j].type]; j++);
              return setMatcher(
                i > 1 && elementMatcher(matchers),
                i > 1 &&
                toSelector(
                  tokens
                    .slice(0, i - 1)
                    .concat({ value: " " === tokens[i - 2].type ? "*" : "" })
                ).replace(rtrim, "$1"),
                matcher,
                i < j && matcherFromTokens(tokens.slice(i, j)),
                j < len && matcherFromTokens((tokens = tokens.slice(j))),
                j < len && toSelector(tokens)
              );
            }
            matchers.push(matcher);
          }
        return elementMatcher(matchers);
      }
      function matcherFromGroupMatchers(elementMatchers, setMatchers) {
        var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function (seed, context, xml, results, outermost) {
            var elem,
              j,
              matcher,
              matchedCount = 0,
              i = "0",
              unmatched = seed && [],
              setMatched = [],
              contextBackup = outermostContext,
              elems = seed || (byElement && Expr.find.TAG("*", outermost)),
              dirrunsUnique = (dirruns +=
                null == contextBackup ? 1 : Math.random() || 0.1),
              len = elems.length;
            for (
              outermost &&
              (outermostContext = context == document || context || outermost);
              i !== len && null != (elem = elems[i]);
              i++
            ) {
              if (byElement && elem) {
                for (
                  j = 0,
                  context ||
                  elem.ownerDocument == document ||
                  (setDocument(elem), (xml = !documentIsHTML));
                  (matcher = elementMatchers[j++]);

                )
                  if (matcher(elem, context || document, xml)) {
                    results.push(elem);
                    break;
                  }
                outermost && (dirruns = dirrunsUnique);
              }
              bySet &&
                ((elem = !matcher && elem) && matchedCount--,
                  seed && unmatched.push(elem));
            }
            if (((matchedCount += i), bySet && i !== matchedCount)) {
              for (j = 0; (matcher = setMatchers[j++]);)
                matcher(unmatched, setMatched, context, xml);
              if (seed) {
                if (matchedCount > 0)
                  for (; i--;)
                    unmatched[i] ||
                      setMatched[i] ||
                      (setMatched[i] = pop.call(results));
                setMatched = condense(setMatched);
              }
              push.apply(results, setMatched),
                outermost &&
                !seed &&
                setMatched.length > 0 &&
                matchedCount + setMatchers.length > 1 &&
                Sizzle.uniqueSort(results);
            }
            return (
              outermost &&
              ((dirruns = dirrunsUnique), (outermostContext = contextBackup)),
              unmatched
            );
          };
        return bySet ? markFunction(superMatcher) : superMatcher;
      }
      return (
        (setFilters.prototype = Expr.filters = Expr.pseudos),
        (Expr.setFilters = new setFilters()),
        (tokenize = Sizzle.tokenize =
          function (selector, parseOnly) {
            var matched,
              match,
              tokens,
              type,
              soFar,
              groups,
              preFilters,
              cached = tokenCache[selector + " "];
            if (cached) return parseOnly ? 0 : cached.slice(0);
            for (
              soFar = selector, groups = [], preFilters = Expr.preFilter;
              soFar;

            ) {
              for (type in ((matched && !(match = rcomma.exec(soFar))) ||
                (match && (soFar = soFar.slice(match[0].length) || soFar),
                  groups.push((tokens = []))),
                (matched = !1),
                (match = rcombinators.exec(soFar)) &&
                ((matched = match.shift()),
                  tokens.push({
                    value: matched,
                    type: match[0].replace(rtrim, " "),
                  }),
                  (soFar = soFar.slice(matched.length))),
                Expr.filter))
                !(match = matchExpr[type].exec(soFar)) ||
                  (preFilters[type] && !(match = preFilters[type](match))) ||
                  ((matched = match.shift()),
                    tokens.push({ value: matched, type: type, matches: match }),
                    (soFar = soFar.slice(matched.length)));
              if (!matched) break;
            }
            return parseOnly
              ? soFar.length
              : soFar
                ? Sizzle.error(selector)
                : tokenCache(selector, groups).slice(0);
          }),
        (compile = Sizzle.compile =
          function (selector, match) {
            var i,
              setMatchers = [],
              elementMatchers = [],
              cached = compilerCache[selector + " "];
            if (!cached) {
              for (
                match || (match = tokenize(selector)), i = match.length;
                i--;

              )
                (cached = matcherFromTokens(match[i]))[expando]
                  ? setMatchers.push(cached)
                  : elementMatchers.push(cached);
              (cached = compilerCache(
                selector,
                matcherFromGroupMatchers(elementMatchers, setMatchers)
              )).selector = selector;
            }
            return cached;
          }),
        (select = Sizzle.select =
          function (selector, context, results, seed) {
            var i,
              tokens,
              token,
              type,
              find,
              compiled = "function" == typeof selector && selector,
              match =
                !seed && tokenize((selector = compiled.selector || selector));
            if (((results = results || []), 1 === match.length)) {
              if (
                (tokens = match[0] = match[0].slice(0)).length > 2 &&
                "ID" === (token = tokens[0]).type &&
                9 === context.nodeType &&
                documentIsHTML &&
                Expr.relative[tokens[1].type]
              ) {
                if (
                  !(context = (Expr.find.ID(
                    token.matches[0].replace(runescape, funescape),
                    context
                  ) || [])[0])
                )
                  return results;
                compiled && (context = context.parentNode),
                  (selector = selector.slice(tokens.shift().value.length));
              }
              for (
                i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
                i-- &&
                ((token = tokens[i]), !Expr.relative[(type = token.type)]);

              )
                if (
                  (find = Expr.find[type]) &&
                  (seed = find(
                    token.matches[0].replace(runescape, funescape),
                    (rsibling.test(tokens[0].type) &&
                      testContext(context.parentNode)) ||
                    context
                  ))
                ) {
                  if (
                    (tokens.splice(i, 1),
                      !(selector = seed.length && toSelector(tokens)))
                  )
                    return push.apply(results, seed), results;
                  break;
                }
            }
            return (
              (compiled || compile(selector, match))(
                seed,
                context,
                !documentIsHTML,
                results,
                !context ||
                (rsibling.test(selector) &&
                  testContext(context.parentNode)) ||
                context
              ),
              results
            );
          }),
        (support.sortStable =
          expando.split("").sort(sortOrder).join("") === expando),
        (support.detectDuplicates = !!hasDuplicate),
        setDocument(),
        (support.sortDetached = assert(function (el) {
          return (
            1 & el.compareDocumentPosition(document.createElement("fieldset"))
          );
        })),
        assert(function (el) {
          return (
            (el.innerHTML = "<a href='#'></a>"),
            "#" === el.firstChild.getAttribute("href")
          );
        }) ||
        addHandle("type|href|height|width", function (elem, name, isXML) {
          if (!isXML)
            return elem.getAttribute(
              name,
              "type" === name.toLowerCase() ? 1 : 2
            );
        }),
        (support.attributes &&
          assert(function (el) {
            return (
              (el.innerHTML = "<input/>"),
              el.firstChild.setAttribute("value", ""),
              "" === el.firstChild.getAttribute("value")
            );
          })) ||
        addHandle("value", function (elem, _name, isXML) {
          if (!isXML && "input" === elem.nodeName.toLowerCase())
            return elem.defaultValue;
        }),
        assert(function (el) {
          return null == el.getAttribute("disabled");
        }) ||
        addHandle(booleans, function (elem, name, isXML) {
          var val;
          if (!isXML)
            return !0 === elem[name]
              ? name.toLowerCase()
              : (val = elem.getAttributeNode(name)) && val.specified
                ? val.value
                : null;
        }),
        Sizzle
      );
    })(window);
  (jQuery.find = Sizzle),
    (jQuery.expr = Sizzle.selectors),
    (jQuery.expr[":"] = jQuery.expr.pseudos),
    (jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort),
    (jQuery.text = Sizzle.getText),
    (jQuery.isXMLDoc = Sizzle.isXML),
    (jQuery.contains = Sizzle.contains),
    (jQuery.escapeSelector = Sizzle.escape);
  var dir = function (elem, dir, until) {
    for (
      var matched = [], truncate = void 0 !== until;
      (elem = elem[dir]) && 9 !== elem.nodeType;

    )
      if (1 === elem.nodeType) {
        if (truncate && jQuery(elem).is(until)) break;
        matched.push(elem);
      }
    return matched;
  },
    siblings = function (n, elem) {
      for (var matched = []; n; n = n.nextSibling)
        1 === n.nodeType && n !== elem && matched.push(n);
      return matched;
    },
    rneedsContext = jQuery.expr.match.needsContext;
  function nodeName(elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }
  var rsingleTag =
    /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function winnow(elements, qualifier, not) {
    return isFunction(qualifier)
      ? jQuery.grep(elements, function (elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      })
      : qualifier.nodeType
        ? jQuery.grep(elements, function (elem) {
          return (elem === qualifier) !== not;
        })
        : "string" != typeof qualifier
          ? jQuery.grep(elements, function (elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
          })
          : jQuery.filter(qualifier, elements, not);
  }
  (jQuery.filter = function (expr, elems, not) {
    var elem = elems[0];
    return (
      not && (expr = ":not(" + expr + ")"),
      1 === elems.length && 1 === elem.nodeType
        ? jQuery.find.matchesSelector(elem, expr)
          ? [elem]
          : []
        : jQuery.find.matches(
          expr,
          jQuery.grep(elems, function (elem) {
            return 1 === elem.nodeType;
          })
        )
    );
  }),
    jQuery.fn.extend({
      find: function (selector) {
        var i,
          ret,
          len = this.length,
          self = this;
        if ("string" != typeof selector)
          return this.pushStack(
            jQuery(selector).filter(function () {
              for (i = 0; i < len; i++)
                if (jQuery.contains(self[i], this)) return !0;
            })
          );
        for (ret = this.pushStack([]), i = 0; i < len; i++)
          jQuery.find(selector, self[i], ret);
        return len > 1 ? jQuery.uniqueSort(ret) : ret;
      },
      filter: function (selector) {
        return this.pushStack(winnow(this, selector || [], !1));
      },
      not: function (selector) {
        return this.pushStack(winnow(this, selector || [], !0));
      },
      is: function (selector) {
        return !!winnow(
          this,
          "string" == typeof selector && rneedsContext.test(selector)
            ? jQuery(selector)
            : selector || [],
          !1
        ).length;
      },
    });
  var rootjQuery,
    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    init;
  ((jQuery.fn.init = function (selector, context, root) {
    var match, elem;
    if (!selector) return this;
    if (((root = root || rootjQuery), "string" == typeof selector)) {
      if (
        !(match =
          "<" === selector[0] &&
            ">" === selector[selector.length - 1] &&
            selector.length >= 3
            ? [null, selector, null]
            : rquickExpr.exec(selector)) ||
        (!match[1] && context)
      )
        return !context || context.jquery
          ? (context || root).find(selector)
          : this.constructor(context).find(selector);
      if (match[1]) {
        if (
          ((context = context instanceof jQuery ? context[0] : context),
            jQuery.merge(
              this,
              jQuery.parseHTML(
                match[1],
                context && context.nodeType
                  ? context.ownerDocument || context
                  : document,
                !0
              )
            ),
            rsingleTag.test(match[1]) && jQuery.isPlainObject(context))
        )
          for (match in context)
            isFunction(this[match])
              ? this[match](context[match])
              : this.attr(match, context[match]);
        return this;
      }
      return (
        (elem = document.getElementById(match[2])) &&
        ((this[0] = elem), (this.length = 1)),
        this
      );
    }
    return selector.nodeType
      ? ((this[0] = selector), (this.length = 1), this)
      : isFunction(selector)
        ? void 0 !== root.ready
          ? root.ready(selector)
          : selector(jQuery)
        : jQuery.makeArray(selector, this);
  }).prototype = jQuery.fn),
    (rootjQuery = jQuery(document));
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
    guaranteedUnique = { children: !0, contents: !0, next: !0, prev: !0 };
  function sibling(cur, dir) {
    for (; (cur = cur[dir]) && 1 !== cur.nodeType;);
    return cur;
  }
  jQuery.fn.extend({
    has: function (target) {
      var targets = jQuery(target, this),
        l = targets.length;
      return this.filter(function () {
        for (var i = 0; i < l; i++)
          if (jQuery.contains(this, targets[i])) return !0;
      });
    },
    closest: function (selectors, context) {
      var cur,
        i = 0,
        l = this.length,
        matched = [],
        targets = "string" != typeof selectors && jQuery(selectors);
      if (!rneedsContext.test(selectors))
        for (; i < l; i++)
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode)
            if (
              cur.nodeType < 11 &&
              (targets
                ? targets.index(cur) > -1
                : 1 === cur.nodeType &&
                jQuery.find.matchesSelector(cur, selectors))
            ) {
              matched.push(cur);
              break;
            }
      return this.pushStack(
        matched.length > 1 ? jQuery.uniqueSort(matched) : matched
      );
    },
    index: function (elem) {
      return elem
        ? "string" == typeof elem
          ? indexOf.call(jQuery(elem), this[0])
          : indexOf.call(this, elem.jquery ? elem[0] : elem)
        : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
    },
    add: function (selector, context) {
      return this.pushStack(
        jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context)))
      );
    },
    addBack: function (selector) {
      return this.add(
        null == selector ? this.prevObject : this.prevObject.filter(selector)
      );
    },
  }),
    jQuery.each(
      {
        parent: function (elem) {
          var parent = elem.parentNode;
          return parent && 11 !== parent.nodeType ? parent : null;
        },
        parents: function (elem) {
          return dir(elem, "parentNode");
        },
        parentsUntil: function (elem, _i, until) {
          return dir(elem, "parentNode", until);
        },
        next: function (elem) {
          return sibling(elem, "nextSibling");
        },
        prev: function (elem) {
          return sibling(elem, "previousSibling");
        },
        nextAll: function (elem) {
          return dir(elem, "nextSibling");
        },
        prevAll: function (elem) {
          return dir(elem, "previousSibling");
        },
        nextUntil: function (elem, _i, until) {
          return dir(elem, "nextSibling", until);
        },
        prevUntil: function (elem, _i, until) {
          return dir(elem, "previousSibling", until);
        },
        siblings: function (elem) {
          return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function (elem) {
          return siblings(elem.firstChild);
        },
        contents: function (elem) {
          return null != elem.contentDocument && getProto(elem.contentDocument)
            ? elem.contentDocument
            : (nodeName(elem, "template") && (elem = elem.content || elem),
              jQuery.merge([], elem.childNodes));
        },
      },
      function (name, fn) {
        jQuery.fn[name] = function (until, selector) {
          var matched = jQuery.map(this, fn, until);
          return (
            "Until" !== name.slice(-5) && (selector = until),
            selector &&
            "string" == typeof selector &&
            (matched = jQuery.filter(selector, matched)),
            this.length > 1 &&
            (guaranteedUnique[name] || jQuery.uniqueSort(matched),
              rparentsprev.test(name) && matched.reverse()),
            this.pushStack(matched)
          );
        };
      }
    );
  var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
  function createOptions(options) {
    var object = {};
    return (
      jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
        object[flag] = !0;
      }),
      object
    );
  }
  function Identity(v) {
    return v;
  }
  function Thrower(ex) {
    throw ex;
  }
  function adoptValue(value, resolve, reject, noValue) {
    var method;
    try {
      value && isFunction((method = value.promise))
        ? method.call(value).done(resolve).fail(reject)
        : value && isFunction((method = value.then))
          ? method.call(value, resolve, reject)
          : resolve.apply(void 0, [value].slice(noValue));
    } catch (value) {
      reject.apply(void 0, [value]);
    }
  }
  (jQuery.Callbacks = function (options) {
    options =
      "string" == typeof options
        ? createOptions(options)
        : jQuery.extend({}, options);
    var firing,
      memory,
      fired,
      locked,
      list = [],
      queue = [],
      firingIndex = -1,
      fire = function () {
        for (
          locked = locked || options.once, fired = firing = !0;
          queue.length;
          firingIndex = -1
        )
          for (memory = queue.shift(); ++firingIndex < list.length;)
            !1 === list[firingIndex].apply(memory[0], memory[1]) &&
              options.stopOnFalse &&
              ((firingIndex = list.length), (memory = !1));
        options.memory || (memory = !1),
          (firing = !1),
          locked && (list = memory ? [] : "");
      },
      self = {
        add: function () {
          return (
            list &&
            (memory &&
              !firing &&
              ((firingIndex = list.length - 1), queue.push(memory)),
              (function add(args) {
                jQuery.each(args, function (_, arg) {
                  isFunction(arg)
                    ? (options.unique && self.has(arg)) || list.push(arg)
                    : arg && arg.length && "string" !== toType(arg) && add(arg);
                });
              })(arguments),
              memory && !firing && fire()),
            this
          );
        },
        remove: function () {
          return (
            jQuery.each(arguments, function (_, arg) {
              for (var index; (index = jQuery.inArray(arg, list, index)) > -1;)
                list.splice(index, 1), index <= firingIndex && firingIndex--;
            }),
            this
          );
        },
        has: function (fn) {
          return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
        },
        empty: function () {
          return list && (list = []), this;
        },
        disable: function () {
          return (locked = queue = []), (list = memory = ""), this;
        },
        disabled: function () {
          return !list;
        },
        lock: function () {
          return (
            (locked = queue = []),
            memory || firing || (list = memory = ""),
            this
          );
        },
        locked: function () {
          return !!locked;
        },
        fireWith: function (context, args) {
          return (
            locked ||
            ((args = [
              context,
              (args = args || []).slice ? args.slice() : args,
            ]),
              queue.push(args),
              firing || fire()),
            this
          );
        },
        fire: function () {
          return self.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!fired;
        },
      };
    return self;
  }),
    jQuery.extend({
      Deferred: function (func) {
        var tuples = [
          [
            "notify",
            "progress",
            jQuery.Callbacks("memory"),
            jQuery.Callbacks("memory"),
            2,
          ],
          [
            "resolve",
            "done",
            jQuery.Callbacks("once memory"),
            jQuery.Callbacks("once memory"),
            0,
            "resolved",
          ],
          [
            "reject",
            "fail",
            jQuery.Callbacks("once memory"),
            jQuery.Callbacks("once memory"),
            1,
            "rejected",
          ],
        ],
          state = "pending",
          promise = {
            state: function () {
              return state;
            },
            always: function () {
              return deferred.done(arguments).fail(arguments), this;
            },
            catch: function (fn) {
              return promise.then(null, fn);
            },
            pipe: function () {
              var fns = arguments;
              return jQuery
                .Deferred(function (newDefer) {
                  jQuery.each(tuples, function (_i, tuple) {
                    var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                    deferred[tuple[1]](function () {
                      var returned = fn && fn.apply(this, arguments);
                      returned && isFunction(returned.promise)
                        ? returned
                          .promise()
                          .progress(newDefer.notify)
                          .done(newDefer.resolve)
                          .fail(newDefer.reject)
                        : newDefer[tuple[0] + "With"](
                          this,
                          fn ? [returned] : arguments
                        );
                    });
                  }),
                    (fns = null);
                })
                .promise();
            },
            then: function (onFulfilled, onRejected, onProgress) {
              var maxDepth = 0;
              function resolve(depth, deferred, handler, special) {
                return function () {
                  var that = this,
                    args = arguments,
                    mightThrow = function () {
                      var returned, then;
                      if (!(depth < maxDepth)) {
                        if (
                          (returned = handler.apply(that, args)) ===
                          deferred.promise()
                        )
                          throw new TypeError("Thenable self-resolution");
                        (then =
                          returned &&
                          ("object" == typeof returned ||
                            "function" == typeof returned) &&
                          returned.then),
                          isFunction(then)
                            ? special
                              ? then.call(
                                returned,
                                resolve(
                                  maxDepth,
                                  deferred,
                                  Identity,
                                  special
                                ),
                                resolve(maxDepth, deferred, Thrower, special)
                              )
                              : (maxDepth++,
                                then.call(
                                  returned,
                                  resolve(
                                    maxDepth,
                                    deferred,
                                    Identity,
                                    special
                                  ),
                                  resolve(maxDepth, deferred, Thrower, special),
                                  resolve(
                                    maxDepth,
                                    deferred,
                                    Identity,
                                    deferred.notifyWith
                                  )
                                ))
                            : (handler !== Identity &&
                              ((that = void 0), (args = [returned])),
                              (special || deferred.resolveWith)(that, args));
                      }
                    },
                    process = special
                      ? mightThrow
                      : function () {
                        try {
                          mightThrow();
                        } catch (e) {
                          jQuery.Deferred.exceptionHook &&
                            jQuery.Deferred.exceptionHook(
                              e,
                              process.stackTrace
                            ),
                            depth + 1 >= maxDepth &&
                            (handler !== Thrower &&
                              ((that = void 0), (args = [e])),
                              deferred.rejectWith(that, args));
                        }
                      };
                  depth
                    ? process()
                    : (jQuery.Deferred.getStackHook &&
                      (process.stackTrace = jQuery.Deferred.getStackHook()),
                      window.setTimeout(process));
                };
              }
              return jQuery
                .Deferred(function (newDefer) {
                  tuples[0][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onProgress) ? onProgress : Identity,
                      newDefer.notifyWith
                    )
                  ),
                    tuples[1][3].add(
                      resolve(
                        0,
                        newDefer,
                        isFunction(onFulfilled) ? onFulfilled : Identity
                      )
                    ),
                    tuples[2][3].add(
                      resolve(
                        0,
                        newDefer,
                        isFunction(onRejected) ? onRejected : Thrower
                      )
                    );
                })
                .promise();
            },
            promise: function (obj) {
              return null != obj ? jQuery.extend(obj, promise) : promise;
            },
          },
          deferred = {};
        return (
          jQuery.each(tuples, function (i, tuple) {
            var list = tuple[2],
              stateString = tuple[5];
            (promise[tuple[1]] = list.add),
              stateString &&
              list.add(
                function () {
                  state = stateString;
                },
                tuples[3 - i][2].disable,
                tuples[3 - i][3].disable,
                tuples[0][2].lock,
                tuples[0][3].lock
              ),
              list.add(tuple[3].fire),
              (deferred[tuple[0]] = function () {
                return (
                  deferred[tuple[0] + "With"](
                    this === deferred ? void 0 : this,
                    arguments
                  ),
                  this
                );
              }),
              (deferred[tuple[0] + "With"] = list.fireWith);
          }),
          promise.promise(deferred),
          func && func.call(deferred, deferred),
          deferred
        );
      },
      when: function (singleValue) {
        var remaining = arguments.length,
          i = remaining,
          resolveContexts = Array(i),
          resolveValues = slice.call(arguments),
          primary = jQuery.Deferred(),
          updateFunc = function (i) {
            return function (value) {
              (resolveContexts[i] = this),
                (resolveValues[i] =
                  arguments.length > 1 ? slice.call(arguments) : value),
                --remaining ||
                primary.resolveWith(resolveContexts, resolveValues);
            };
          };
        if (
          remaining <= 1 &&
          (adoptValue(
            singleValue,
            primary.done(updateFunc(i)).resolve,
            primary.reject,
            !remaining
          ),
            "pending" === primary.state() ||
            isFunction(resolveValues[i] && resolveValues[i].then))
        )
          return primary.then();
        for (; i--;)
          adoptValue(resolveValues[i], updateFunc(i), primary.reject);
        return primary.promise();
      },
    });
  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (jQuery.Deferred.exceptionHook = function (error, stack) {
    window.console &&
      window.console.warn &&
      error &&
      rerrorNames.test(error.name) &&
      window.console.warn(
        "jQuery.Deferred exception: " + error.message,
        error.stack,
        stack
      );
  }),
    (jQuery.readyException = function (error) {
      window.setTimeout(function () {
        throw error;
      });
    });
  var readyList = jQuery.Deferred();
  function completed() {
    document.removeEventListener("DOMContentLoaded", completed),
      window.removeEventListener("load", completed),
      jQuery.ready();
  }
  (jQuery.fn.ready = function (fn) {
    return (
      readyList.then(fn).catch(function (error) {
        jQuery.readyException(error);
      }),
      this
    );
  }),
    jQuery.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (wait) {
        (!0 === wait ? --jQuery.readyWait : jQuery.isReady) ||
          ((jQuery.isReady = !0),
            (!0 !== wait && --jQuery.readyWait > 0) ||
            readyList.resolveWith(document, [jQuery]));
      },
    }),
    (jQuery.ready.then = readyList.then),
    "complete" === document.readyState ||
      ("loading" !== document.readyState && !document.documentElement.doScroll)
      ? window.setTimeout(jQuery.ready)
      : (document.addEventListener("DOMContentLoaded", completed),
        window.addEventListener("load", completed));
  var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
      len = elems.length,
      bulk = null == key;
    if ("object" === toType(key))
      for (i in ((chainable = !0), key))
        access(elems, fn, i, key[i], !0, emptyGet, raw);
    else if (
      void 0 !== value &&
      ((chainable = !0),
        isFunction(value) || (raw = !0),
        bulk &&
        (raw
          ? (fn.call(elems, value), (fn = null))
          : ((bulk = fn),
            (fn = function (elem, _key, value) {
              return bulk.call(jQuery(elem), value);
            }))),
        fn)
    )
      for (; i < len; i++)
        fn(
          elems[i],
          key,
          raw ? value : value.call(elems[i], i, fn(elems[i], key))
        );
    return chainable
      ? elems
      : bulk
        ? fn.call(elems)
        : len
          ? fn(elems[0], key)
          : emptyGet;
  },
    rmsPrefix = /^-ms-/,
    rdashAlpha = /-([a-z])/g;
  function fcamelCase(_all, letter) {
    return letter.toUpperCase();
  }
  function camelCase(string) {
    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
  }
  var acceptData = function (owner) {
    return 1 === owner.nodeType || 9 === owner.nodeType || !+owner.nodeType;
  };
  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }
  (Data.uid = 1),
    (Data.prototype = {
      cache: function (owner) {
        var value = owner[this.expando];
        return (
          value ||
          ((value = {}),
            acceptData(owner) &&
            (owner.nodeType
              ? (owner[this.expando] = value)
              : Object.defineProperty(owner, this.expando, {
                value: value,
                configurable: !0,
              }))),
          value
        );
      },
      set: function (owner, data, value) {
        var prop,
          cache = this.cache(owner);
        if ("string" == typeof data) cache[camelCase(data)] = value;
        else for (prop in data) cache[camelCase(prop)] = data[prop];
        return cache;
      },
      get: function (owner, key) {
        return void 0 === key
          ? this.cache(owner)
          : owner[this.expando] && owner[this.expando][camelCase(key)];
      },
      access: function (owner, key, value) {
        return void 0 === key ||
          (key && "string" == typeof key && void 0 === value)
          ? this.get(owner, key)
          : (this.set(owner, key, value), void 0 !== value ? value : key);
      },
      remove: function (owner, key) {
        var i,
          cache = owner[this.expando];
        if (void 0 !== cache) {
          if (void 0 !== key) {
            i = (key = Array.isArray(key)
              ? key.map(camelCase)
              : (key = camelCase(key)) in cache
                ? [key]
                : key.match(rnothtmlwhite) || []).length;
            for (; i--;) delete cache[key[i]];
          }
          (void 0 === key || jQuery.isEmptyObject(cache)) &&
            (owner.nodeType
              ? (owner[this.expando] = void 0)
              : delete owner[this.expando]);
        }
      },
      hasData: function (owner) {
        var cache = owner[this.expando];
        return void 0 !== cache && !jQuery.isEmptyObject(cache);
      },
    });
  var dataPriv = new Data(),
    dataUser = new Data(),
    rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    rmultiDash = /[A-Z]/g;
  function getData(data) {
    return (
      "true" === data ||
      ("false" !== data &&
        ("null" === data
          ? null
          : data === +data + ""
            ? +data
            : rbrace.test(data)
              ? JSON.parse(data)
              : data))
    );
  }
  function dataAttr(elem, key, data) {
    var name;
    if (void 0 === data && 1 === elem.nodeType)
      if (
        ((name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase()),
          "string" == typeof (data = elem.getAttribute(name)))
      ) {
        try {
          data = getData(data);
        } catch (e) { }
        dataUser.set(elem, key, data);
      } else data = void 0;
    return data;
  }
  jQuery.extend({
    hasData: function (elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function (elem, name, data) {
      return dataUser.access(elem, name, data);
    },
    removeData: function (elem, name) {
      dataUser.remove(elem, name);
    },
    _data: function (elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData: function (elem, name) {
      dataPriv.remove(elem, name);
    },
  }),
    jQuery.fn.extend({
      data: function (key, value) {
        var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes;
        if (void 0 === key) {
          if (
            this.length &&
            ((data = dataUser.get(elem)),
              1 === elem.nodeType && !dataPriv.get(elem, "hasDataAttrs"))
          ) {
            for (i = attrs.length; i--;)
              attrs[i] &&
                0 === (name = attrs[i].name).indexOf("data-") &&
                ((name = camelCase(name.slice(5))),
                  dataAttr(elem, name, data[name]));
            dataPriv.set(elem, "hasDataAttrs", !0);
          }
          return data;
        }
        return "object" == typeof key
          ? this.each(function () {
            dataUser.set(this, key);
          })
          : access(
            this,
            function (value) {
              var data;
              if (elem && void 0 === value)
                return void 0 !== (data = dataUser.get(elem, key))
                  ? data
                  : void 0 !== (data = dataAttr(elem, key))
                    ? data
                    : void 0;
              this.each(function () {
                dataUser.set(this, key, value);
              });
            },
            null,
            value,
            arguments.length > 1,
            null,
            !0
          );
      },
      removeData: function (key) {
        return this.each(function () {
          dataUser.remove(this, key);
        });
      },
    }),
    jQuery.extend({
      queue: function (elem, type, data) {
        var queue;
        if (elem)
          return (
            (type = (type || "fx") + "queue"),
            (queue = dataPriv.get(elem, type)),
            data &&
            (!queue || Array.isArray(data)
              ? (queue = dataPriv.access(elem, type, jQuery.makeArray(data)))
              : queue.push(data)),
            queue || []
          );
      },
      dequeue: function (elem, type) {
        type = type || "fx";
        var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function () {
            jQuery.dequeue(elem, type);
          };
        "inprogress" === fn && ((fn = queue.shift()), startLength--),
          fn &&
          ("fx" === type && queue.unshift("inprogress"),
            delete hooks.stop,
            fn.call(elem, next, hooks)),
          !startLength && hooks && hooks.empty.fire();
      },
      _queueHooks: function (elem, type) {
        var key = type + "queueHooks";
        return (
          dataPriv.get(elem, key) ||
          dataPriv.access(elem, key, {
            empty: jQuery.Callbacks("once memory").add(function () {
              dataPriv.remove(elem, [type + "queue", key]);
            }),
          })
        );
      },
    }),
    jQuery.fn.extend({
      queue: function (type, data) {
        var setter = 2;
        return (
          "string" != typeof type && ((data = type), (type = "fx"), setter--),
          arguments.length < setter
            ? jQuery.queue(this[0], type)
            : void 0 === data
              ? this
              : this.each(function () {
                var queue = jQuery.queue(this, type, data);
                jQuery._queueHooks(this, type),
                  "fx" === type &&
                  "inprogress" !== queue[0] &&
                  jQuery.dequeue(this, type);
              })
        );
      },
      dequeue: function (type) {
        return this.each(function () {
          jQuery.dequeue(this, type);
        });
      },
      clearQueue: function (type) {
        return this.queue(type || "fx", []);
      },
      promise: function (type, obj) {
        var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function () {
            --count || defer.resolveWith(elements, [elements]);
          };
        for (
          "string" != typeof type && ((obj = type), (type = void 0)),
          type = type || "fx";
          i--;

        )
          (tmp = dataPriv.get(elements[i], type + "queueHooks")) &&
            tmp.empty &&
            (count++, tmp.empty.add(resolve));
        return resolve(), defer.promise(obj);
      },
    });
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
    cssExpand = ["Top", "Right", "Bottom", "Left"],
    documentElement = document.documentElement,
    isAttached = function (elem) {
      return jQuery.contains(elem.ownerDocument, elem);
    },
    composed = { composed: !0 };
  documentElement.getRootNode &&
    (isAttached = function (elem) {
      return (
        jQuery.contains(elem.ownerDocument, elem) ||
        elem.getRootNode(composed) === elem.ownerDocument
      );
    });
  var isHiddenWithinTree = function (elem, el) {
    return (
      "none" === (elem = el || elem).style.display ||
      ("" === elem.style.display &&
        isAttached(elem) &&
        "none" === jQuery.css(elem, "display"))
    );
  };
  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted,
      scale,
      maxIterations = 20,
      currentValue = tween
        ? function () {
          return tween.cur();
        }
        : function () {
          return jQuery.css(elem, prop, "");
        },
      initial = currentValue(),
      unit =
        (valueParts && valueParts[3]) || (jQuery.cssNumber[prop] ? "" : "px"),
      initialInUnit =
        elem.nodeType &&
        (jQuery.cssNumber[prop] || ("px" !== unit && +initial)) &&
        rcssNum.exec(jQuery.css(elem, prop));
    if (initialInUnit && initialInUnit[3] !== unit) {
      for (
        initial /= 2,
        unit = unit || initialInUnit[3],
        initialInUnit = +initial || 1;
        maxIterations--;

      )
        jQuery.style(elem, prop, initialInUnit + unit),
          (1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0 &&
          (maxIterations = 0),
          (initialInUnit /= scale);
      (initialInUnit *= 2),
        jQuery.style(elem, prop, initialInUnit + unit),
        (valueParts = valueParts || []);
    }
    return (
      valueParts &&
      ((initialInUnit = +initialInUnit || +initial || 0),
        (adjusted = valueParts[1]
          ? initialInUnit + (valueParts[1] + 1) * valueParts[2]
          : +valueParts[2]),
        tween &&
        ((tween.unit = unit),
          (tween.start = initialInUnit),
          (tween.end = adjusted))),
      adjusted
    );
  }
  var defaultDisplayMap = {};
  function getDefaultDisplay(elem) {
    var temp,
      doc = elem.ownerDocument,
      nodeName = elem.nodeName,
      display = defaultDisplayMap[nodeName];
    return (
      display ||
      ((temp = doc.body.appendChild(doc.createElement(nodeName))),
        (display = jQuery.css(temp, "display")),
        temp.parentNode.removeChild(temp),
        "none" === display && (display = "block"),
        (defaultDisplayMap[nodeName] = display),
        display)
    );
  }
  function showHide(elements, show) {
    for (
      var display, elem, values = [], index = 0, length = elements.length;
      index < length;
      index++
    )
      (elem = elements[index]).style &&
        ((display = elem.style.display),
          show
            ? ("none" === display &&
              ((values[index] = dataPriv.get(elem, "display") || null),
                values[index] || (elem.style.display = "")),
              "" === elem.style.display &&
              isHiddenWithinTree(elem) &&
              (values[index] = getDefaultDisplay(elem)))
            : "none" !== display &&
            ((values[index] = "none"), dataPriv.set(elem, "display", display)));
    for (index = 0; index < length; index++)
      null != values[index] && (elements[index].style.display = values[index]);
    return elements;
  }
  jQuery.fn.extend({
    show: function () {
      return showHide(this, !0);
    },
    hide: function () {
      return showHide(this);
    },
    toggle: function (state) {
      return "boolean" == typeof state
        ? state
          ? this.show()
          : this.hide()
        : this.each(function () {
          isHiddenWithinTree(this)
            ? jQuery(this).show()
            : jQuery(this).hide();
        });
    },
  });
  var rcheckableType = /^(?:checkbox|radio)$/i,
    rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    rscriptType = /^$|^module$|\/(?:java|ecma)script/i,
    fragment,
    div,
    input;
  (div = document
    .createDocumentFragment()
    .appendChild(document.createElement("div"))),
    (input = document.createElement("input")).setAttribute("type", "radio"),
    input.setAttribute("checked", "checked"),
    input.setAttribute("name", "t"),
    div.appendChild(input),
    (support.checkClone = div.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (div.innerHTML = "<textarea>x</textarea>"),
    (support.noCloneChecked = !!div.cloneNode(!0).lastChild.defaultValue),
    (div.innerHTML = "<option></option>"),
    (support.option = !!div.lastChild);
  var wrapMap = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function getAll(context, tag) {
    var ret;
    return (
      (ret =
        void 0 !== context.getElementsByTagName
          ? context.getElementsByTagName(tag || "*")
          : void 0 !== context.querySelectorAll
            ? context.querySelectorAll(tag || "*")
            : []),
      void 0 === tag || (tag && nodeName(context, tag))
        ? jQuery.merge([context], ret)
        : ret
    );
  }
  function setGlobalEval(elems, refElements) {
    for (var i = 0, l = elems.length; i < l; i++)
      dataPriv.set(
        elems[i],
        "globalEval",
        !refElements || dataPriv.get(refElements[i], "globalEval")
      );
  }
  (wrapMap.tbody =
    wrapMap.tfoot =
    wrapMap.colgroup =
    wrapMap.caption =
    wrapMap.thead),
    (wrapMap.th = wrapMap.td),
    support.option ||
    (wrapMap.optgroup = wrapMap.option =
      [1, "<select multiple='multiple'>", "</select>"]);
  var rhtml = /<|&#?\w+;/;
  function buildFragment(elems, context, scripts, selection, ignored) {
    for (
      var elem,
      tmp,
      tag,
      wrap,
      attached,
      j,
      fragment = context.createDocumentFragment(),
      nodes = [],
      i = 0,
      l = elems.length;
      i < l;
      i++
    )
      if ((elem = elems[i]) || 0 === elem)
        if ("object" === toType(elem))
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
        else if (rhtml.test(elem)) {
          for (
            tmp = tmp || fragment.appendChild(context.createElement("div")),
            tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase(),
            wrap = wrapMap[tag] || wrapMap._default,
            tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2],
            j = wrap[0];
            j--;

          )
            tmp = tmp.lastChild;
          jQuery.merge(nodes, tmp.childNodes),
            ((tmp = fragment.firstChild).textContent = "");
        } else nodes.push(context.createTextNode(elem));
    for (fragment.textContent = "", i = 0; (elem = nodes[i++]);)
      if (selection && jQuery.inArray(elem, selection) > -1)
        ignored && ignored.push(elem);
      else if (
        ((attached = isAttached(elem)),
          (tmp = getAll(fragment.appendChild(elem), "script")),
          attached && setGlobalEval(tmp),
          scripts)
      )
        for (j = 0; (elem = tmp[j++]);)
          rscriptType.test(elem.type || "") && scripts.push(elem);
    return fragment;
  }
  var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
  function returnTrue() {
    return !0;
  }
  function returnFalse() {
    return !1;
  }
  function expectSync(elem, type) {
    return (elem === safeActiveElement()) == ("focus" === type);
  }
  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) { }
  }
  function on(elem, types, selector, data, fn, one) {
    var origFn, type;
    if ("object" == typeof types) {
      for (type in ("string" != typeof selector &&
        ((data = data || selector), (selector = void 0)),
        types))
        on(elem, type, selector, data, types[type], one);
      return elem;
    }
    if (
      (null == data && null == fn
        ? ((fn = selector), (data = selector = void 0))
        : null == fn &&
        ("string" == typeof selector
          ? ((fn = data), (data = void 0))
          : ((fn = data), (data = selector), (selector = void 0))),
        !1 === fn)
    )
      fn = returnFalse;
    else if (!fn) return elem;
    return (
      1 === one &&
      ((origFn = fn),
        ((fn = function (event) {
          return jQuery().off(event), origFn.apply(this, arguments);
        }).guid = origFn.guid || (origFn.guid = jQuery.guid++))),
      elem.each(function () {
        jQuery.event.add(this, types, fn, data, selector);
      })
    );
  }
  function leverageNative(el, type, expectSync) {
    expectSync
      ? (dataPriv.set(el, type, !1),
        jQuery.event.add(el, type, {
          namespace: !1,
          handler: function (event) {
            var notAsync,
              result,
              saved = dataPriv.get(this, type);
            if (1 & event.isTrigger && this[type]) {
              if (saved.length)
                (jQuery.event.special[type] || {}).delegateType &&
                  event.stopPropagation();
              else if (
                ((saved = slice.call(arguments)),
                  dataPriv.set(this, type, saved),
                  (notAsync = expectSync(this, type)),
                  this[type](),
                  saved !== (result = dataPriv.get(this, type)) || notAsync
                    ? dataPriv.set(this, type, !1)
                    : (result = {}),
                  saved !== result)
              )
                return (
                  event.stopImmediatePropagation(),
                  event.preventDefault(),
                  result && result.value
                );
            } else
              saved.length &&
                (dataPriv.set(this, type, {
                  value: jQuery.event.trigger(
                    jQuery.extend(saved[0], jQuery.Event.prototype),
                    saved.slice(1),
                    this
                  ),
                }),
                  event.stopImmediatePropagation());
          },
        }))
      : void 0 === dataPriv.get(el, type) &&
      jQuery.event.add(el, type, returnTrue);
  }
  (jQuery.event = {
    global: {},
    add: function (elem, types, handler, data, selector) {
      var handleObjIn,
        eventHandle,
        tmp,
        events,
        t,
        handleObj,
        special,
        handlers,
        type,
        namespaces,
        origType,
        elemData = dataPriv.get(elem);
      if (acceptData(elem))
        for (
          handler.handler &&
          ((handler = (handleObjIn = handler).handler),
            (selector = handleObjIn.selector)),
          selector && jQuery.find.matchesSelector(documentElement, selector),
          handler.guid || (handler.guid = jQuery.guid++),
          (events = elemData.events) ||
          (events = elemData.events = Object.create(null)),
          (eventHandle = elemData.handle) ||
          (eventHandle = elemData.handle =
            function (e) {
              return void 0 !== jQuery && jQuery.event.triggered !== e.type
                ? jQuery.event.dispatch.apply(elem, arguments)
                : void 0;
            }),
          t = (types = (types || "").match(rnothtmlwhite) || [""]).length;
          t--;

        )
          (type = origType = (tmp = rtypenamespace.exec(types[t]) || [])[1]),
            (namespaces = (tmp[2] || "").split(".").sort()),
            type &&
            ((special = jQuery.event.special[type] || {}),
              (type =
                (selector ? special.delegateType : special.bindType) || type),
              (special = jQuery.event.special[type] || {}),
              (handleObj = jQuery.extend(
                {
                  type: type,
                  origType: origType,
                  data: data,
                  handler: handler,
                  guid: handler.guid,
                  selector: selector,
                  needsContext:
                    selector && jQuery.expr.match.needsContext.test(selector),
                  namespace: namespaces.join("."),
                },
                handleObjIn
              )),
              (handlers = events[type]) ||
              (((handlers = events[type] = []).delegateCount = 0),
                (special.setup &&
                  !1 !==
                  special.setup.call(elem, data, namespaces, eventHandle)) ||
                (elem.addEventListener &&
                  elem.addEventListener(type, eventHandle))),
              special.add &&
              (special.add.call(elem, handleObj),
                handleObj.handler.guid ||
                (handleObj.handler.guid = handler.guid)),
              selector
                ? handlers.splice(handlers.delegateCount++, 0, handleObj)
                : handlers.push(handleObj),
              (jQuery.event.global[type] = !0));
    },
    remove: function (elem, types, handler, selector, mappedTypes) {
      var j,
        origCount,
        tmp,
        events,
        t,
        handleObj,
        special,
        handlers,
        type,
        namespaces,
        origType,
        elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
      if (elemData && (events = elemData.events)) {
        for (
          t = (types = (types || "").match(rnothtmlwhite) || [""]).length;
          t--;

        )
          if (
            ((type = origType = (tmp = rtypenamespace.exec(types[t]) || [])[1]),
              (namespaces = (tmp[2] || "").split(".").sort()),
              type)
          ) {
            for (
              special = jQuery.event.special[type] || {},
              handlers =
              events[
              (type =
                (selector ? special.delegateType : special.bindType) ||
                type)
              ] || [],
              tmp =
              tmp[2] &&
              new RegExp(
                "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"
              ),
              origCount = j = handlers.length;
              j--;

            )
              (handleObj = handlers[j]),
                (!mappedTypes && origType !== handleObj.origType) ||
                (handler && handler.guid !== handleObj.guid) ||
                (tmp && !tmp.test(handleObj.namespace)) ||
                (selector &&
                  selector !== handleObj.selector &&
                  ("**" !== selector || !handleObj.selector)) ||
                (handlers.splice(j, 1),
                  handleObj.selector && handlers.delegateCount--,
                  special.remove && special.remove.call(elem, handleObj));
            origCount &&
              !handlers.length &&
              ((special.teardown &&
                !1 !==
                special.teardown.call(elem, namespaces, elemData.handle)) ||
                jQuery.removeEvent(elem, type, elemData.handle),
                delete events[type]);
          } else
            for (type in events)
              jQuery.event.remove(elem, type + types[t], handler, selector, !0);
        jQuery.isEmptyObject(events) && dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function (nativeEvent) {
      var i,
        j,
        ret,
        matched,
        handleObj,
        handlerQueue,
        args = new Array(arguments.length),
        event = jQuery.event.fix(nativeEvent),
        handlers =
          (dataPriv.get(this, "events") || Object.create(null))[event.type] ||
          [],
        special = jQuery.event.special[event.type] || {};
      for (args[0] = event, i = 1; i < arguments.length; i++)
        args[i] = arguments[i];
      if (
        ((event.delegateTarget = this),
          !special.preDispatch || !1 !== special.preDispatch.call(this, event))
      ) {
        for (
          handlerQueue = jQuery.event.handlers.call(this, event, handlers),
          i = 0;
          (matched = handlerQueue[i++]) && !event.isPropagationStopped();

        )
          for (
            event.currentTarget = matched.elem, j = 0;
            (handleObj = matched.handlers[j++]) &&
            !event.isImmediatePropagationStopped();

          )
            (event.rnamespace &&
              !1 !== handleObj.namespace &&
              !event.rnamespace.test(handleObj.namespace)) ||
              ((event.handleObj = handleObj),
                (event.data = handleObj.data),
                void 0 !==
                (ret = (
                  (jQuery.event.special[handleObj.origType] || {}).handle ||
                  handleObj.handler
                ).apply(matched.elem, args)) &&
                !1 === (event.result = ret) &&
                (event.preventDefault(), event.stopPropagation()));
        return (
          special.postDispatch && special.postDispatch.call(this, event),
          event.result
        );
      }
    },
    handlers: function (event, handlers) {
      var i,
        handleObj,
        sel,
        matchedHandlers,
        matchedSelectors,
        handlerQueue = [],
        delegateCount = handlers.delegateCount,
        cur = event.target;
      if (
        delegateCount &&
        cur.nodeType &&
        !("click" === event.type && event.button >= 1)
      )
        for (; cur !== this; cur = cur.parentNode || this)
          if (
            1 === cur.nodeType &&
            ("click" !== event.type || !0 !== cur.disabled)
          ) {
            for (
              matchedHandlers = [], matchedSelectors = {}, i = 0;
              i < delegateCount;
              i++
            )
              void 0 ===
                matchedSelectors[
                (sel = (handleObj = handlers[i]).selector + " ")
                ] &&
                (matchedSelectors[sel] = handleObj.needsContext
                  ? jQuery(sel, this).index(cur) > -1
                  : jQuery.find(sel, this, null, [cur]).length),
                matchedSelectors[sel] && matchedHandlers.push(handleObj);
            matchedHandlers.length &&
              handlerQueue.push({ elem: cur, handlers: matchedHandlers });
          }
      return (
        (cur = this),
        delegateCount < handlers.length &&
        handlerQueue.push({
          elem: cur,
          handlers: handlers.slice(delegateCount),
        }),
        handlerQueue
      );
    },
    addProp: function (name, hook) {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable: !0,
        configurable: !0,
        get: isFunction(hook)
          ? function () {
            if (this.originalEvent) return hook(this.originalEvent);
          }
          : function () {
            if (this.originalEvent) return this.originalEvent[name];
          },
        set: function (value) {
          Object.defineProperty(this, name, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: value,
          });
        },
      });
    },
    fix: function (originalEvent) {
      return originalEvent[jQuery.expando]
        ? originalEvent
        : new jQuery.Event(originalEvent);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (data) {
          var el = this || data;
          return (
            rcheckableType.test(el.type) &&
            el.click &&
            nodeName(el, "input") &&
            leverageNative(el, "click", returnTrue),
            !1
          );
        },
        trigger: function (data) {
          var el = this || data;
          return (
            rcheckableType.test(el.type) &&
            el.click &&
            nodeName(el, "input") &&
            leverageNative(el, "click"),
            !0
          );
        },
        _default: function (event) {
          var target = event.target;
          return (
            (rcheckableType.test(target.type) &&
              target.click &&
              nodeName(target, "input") &&
              dataPriv.get(target, "click")) ||
            nodeName(target, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (event) {
          void 0 !== event.result &&
            event.originalEvent &&
            (event.originalEvent.returnValue = event.result);
        },
      },
    },
  }),
    (jQuery.removeEvent = function (elem, type, handle) {
      elem.removeEventListener && elem.removeEventListener(type, handle);
    }),
    (jQuery.Event = function (src, props) {
      if (!(this instanceof jQuery.Event)) return new jQuery.Event(src, props);
      src && src.type
        ? ((this.originalEvent = src),
          (this.type = src.type),
          (this.isDefaultPrevented =
            src.defaultPrevented ||
              (void 0 === src.defaultPrevented && !1 === src.returnValue)
              ? returnTrue
              : returnFalse),
          (this.target =
            src.target && 3 === src.target.nodeType
              ? src.target.parentNode
              : src.target),
          (this.currentTarget = src.currentTarget),
          (this.relatedTarget = src.relatedTarget))
        : (this.type = src),
        props && jQuery.extend(this, props),
        (this.timeStamp = (src && src.timeStamp) || Date.now()),
        (this[jQuery.expando] = !0);
    }),
    (jQuery.Event.prototype = {
      constructor: jQuery.Event,
      isDefaultPrevented: returnFalse,
      isPropagationStopped: returnFalse,
      isImmediatePropagationStopped: returnFalse,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = returnTrue),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = returnTrue),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = returnTrue),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    jQuery.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      jQuery.event.addProp
    ),
    jQuery.each(
      { focus: "focusin", blur: "focusout" },
      function (type, delegateType) {
        jQuery.event.special[type] = {
          setup: function () {
            return leverageNative(this, type, expectSync), !1;
          },
          trigger: function () {
            return leverageNative(this, type), !0;
          },
          _default: function (event) {
            return dataPriv.get(event.target, type);
          },
          delegateType: delegateType,
        };
      }
    ),
    jQuery.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (orig, fix) {
        jQuery.event.special[orig] = {
          delegateType: fix,
          bindType: fix,
          handle: function (event) {
            var ret,
              target = this,
              related = event.relatedTarget,
              handleObj = event.handleObj;
            return (
              (related &&
                (related === target || jQuery.contains(target, related))) ||
              ((event.type = handleObj.origType),
                (ret = handleObj.handler.apply(this, arguments)),
                (event.type = fix)),
              ret
            );
          },
        };
      }
    ),
    jQuery.fn.extend({
      on: function (types, selector, data, fn) {
        return on(this, types, selector, data, fn);
      },
      one: function (types, selector, data, fn) {
        return on(this, types, selector, data, fn, 1);
      },
      off: function (types, selector, fn) {
        var handleObj, type;
        if (types && types.preventDefault && types.handleObj)
          return (
            (handleObj = types.handleObj),
            jQuery(types.delegateTarget).off(
              handleObj.namespace
                ? handleObj.origType + "." + handleObj.namespace
                : handleObj.origType,
              handleObj.selector,
              handleObj.handler
            ),
            this
          );
        if ("object" == typeof types) {
          for (type in types) this.off(type, selector, types[type]);
          return this;
        }
        return (
          (!1 !== selector && "function" != typeof selector) ||
          ((fn = selector), (selector = void 0)),
          !1 === fn && (fn = returnFalse),
          this.each(function () {
            jQuery.event.remove(this, types, fn, selector);
          })
        );
      },
    });
  var rnoInnerhtml = /<script|<style|<link/i,
    rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
    rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function manipulationTarget(elem, content) {
    return (
      (nodeName(elem, "table") &&
        nodeName(
          11 !== content.nodeType ? content : content.firstChild,
          "tr"
        ) &&
        jQuery(elem).children("tbody")[0]) ||
      elem
    );
  }
  function disableScript(elem) {
    return (
      (elem.type = (null !== elem.getAttribute("type")) + "/" + elem.type), elem
    );
  }
  function restoreScript(elem) {
    return (
      "true/" === (elem.type || "").slice(0, 5)
        ? (elem.type = elem.type.slice(5))
        : elem.removeAttribute("type"),
      elem
    );
  }
  function cloneCopyEvent(src, dest) {
    var i, l, type, pdataOld, udataOld, udataCur, events;
    if (1 === dest.nodeType) {
      if (
        dataPriv.hasData(src) &&
        (events = (pdataOld = dataPriv.get(src)).events)
      )
        for (type in (dataPriv.remove(dest, "handle events"), events))
          for (i = 0, l = events[type].length; i < l; i++)
            jQuery.event.add(dest, type, events[type][i]);
      dataUser.hasData(src) &&
        ((udataOld = dataUser.access(src)),
          (udataCur = jQuery.extend({}, udataOld)),
          dataUser.set(dest, udataCur));
    }
  }
  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase();
    "input" === nodeName && rcheckableType.test(src.type)
      ? (dest.checked = src.checked)
      : ("input" !== nodeName && "textarea" !== nodeName) ||
      (dest.defaultValue = src.defaultValue);
  }
  function domManip(collection, args, callback, ignored) {
    args = flat(args);
    var fragment,
      first,
      scripts,
      hasScripts,
      node,
      doc,
      i = 0,
      l = collection.length,
      iNoClone = l - 1,
      value = args[0],
      valueIsFunction = isFunction(value);
    if (
      valueIsFunction ||
      (l > 1 &&
        "string" == typeof value &&
        !support.checkClone &&
        rchecked.test(value))
    )
      return collection.each(function (index) {
        var self = collection.eq(index);
        valueIsFunction && (args[0] = value.call(this, index, self.html())),
          domManip(self, args, callback, ignored);
      });
    if (
      l &&
      ((first = (fragment = buildFragment(
        args,
        collection[0].ownerDocument,
        !1,
        collection,
        ignored
      )).firstChild),
        1 === fragment.childNodes.length && (fragment = first),
        first || ignored)
    ) {
      for (
        hasScripts = (scripts = jQuery.map(
          getAll(fragment, "script"),
          disableScript
        )).length;
        i < l;
        i++
      )
        (node = fragment),
          i !== iNoClone &&
          ((node = jQuery.clone(node, !0, !0)),
            hasScripts && jQuery.merge(scripts, getAll(node, "script"))),
          callback.call(collection[i], node, i);
      if (hasScripts)
        for (
          doc = scripts[scripts.length - 1].ownerDocument,
          jQuery.map(scripts, restoreScript),
          i = 0;
          i < hasScripts;
          i++
        )
          (node = scripts[i]),
            rscriptType.test(node.type || "") &&
            !dataPriv.access(node, "globalEval") &&
            jQuery.contains(doc, node) &&
            (node.src && "module" !== (node.type || "").toLowerCase()
              ? jQuery._evalUrl &&
              !node.noModule &&
              jQuery._evalUrl(
                node.src,
                { nonce: node.nonce || node.getAttribute("nonce") },
                doc
              )
              : DOMEval(
                node.textContent.replace(rcleanScript, ""),
                node,
                doc
              ));
    }
    return collection;
  }
  function remove(elem, selector, keepData) {
    for (
      var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
      null != (node = nodes[i]);
      i++
    )
      keepData || 1 !== node.nodeType || jQuery.cleanData(getAll(node)),
        node.parentNode &&
        (keepData &&
          isAttached(node) &&
          setGlobalEval(getAll(node, "script")),
          node.parentNode.removeChild(node));
    return elem;
  }
  jQuery.extend({
    htmlPrefilter: function (html) {
      return html;
    },
    clone: function (elem, dataAndEvents, deepDataAndEvents) {
      var i,
        l,
        srcElements,
        destElements,
        clone = elem.cloneNode(!0),
        inPage = isAttached(elem);
      if (
        !(
          support.noCloneChecked ||
          (1 !== elem.nodeType && 11 !== elem.nodeType) ||
          jQuery.isXMLDoc(elem)
        )
      )
        for (
          destElements = getAll(clone),
          i = 0,
          l = (srcElements = getAll(elem)).length;
          i < l;
          i++
        )
          fixInput(srcElements[i], destElements[i]);
      if (dataAndEvents)
        if (deepDataAndEvents)
          for (
            srcElements = srcElements || getAll(elem),
            destElements = destElements || getAll(clone),
            i = 0,
            l = srcElements.length;
            i < l;
            i++
          )
            cloneCopyEvent(srcElements[i], destElements[i]);
        else cloneCopyEvent(elem, clone);
      return (
        (destElements = getAll(clone, "script")).length > 0 &&
        setGlobalEval(destElements, !inPage && getAll(elem, "script")),
        clone
      );
    },
    cleanData: function (elems) {
      for (
        var data, elem, type, special = jQuery.event.special, i = 0;
        void 0 !== (elem = elems[i]);
        i++
      )
        if (acceptData(elem)) {
          if ((data = elem[dataPriv.expando])) {
            if (data.events)
              for (type in data.events)
                special[type]
                  ? jQuery.event.remove(elem, type)
                  : jQuery.removeEvent(elem, type, data.handle);
            elem[dataPriv.expando] = void 0;
          }
          elem[dataUser.expando] && (elem[dataUser.expando] = void 0);
        }
    },
  }),
    jQuery.fn.extend({
      detach: function (selector) {
        return remove(this, selector, !0);
      },
      remove: function (selector) {
        return remove(this, selector);
      },
      text: function (value) {
        return access(
          this,
          function (value) {
            return void 0 === value
              ? jQuery.text(this)
              : this.empty().each(function () {
                (1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  (this.textContent = value);
              });
          },
          null,
          value,
          arguments.length
        );
      },
      append: function () {
        return domManip(this, arguments, function (elem) {
          var target;
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            manipulationTarget(this, elem).appendChild(elem);
        });
      },
      prepend: function () {
        return domManip(this, arguments, function (elem) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var target = manipulationTarget(this, elem);
            target.insertBefore(elem, target.firstChild);
          }
        });
      },
      before: function () {
        return domManip(this, arguments, function (elem) {
          this.parentNode && this.parentNode.insertBefore(elem, this);
        });
      },
      after: function () {
        return domManip(this, arguments, function (elem) {
          this.parentNode &&
            this.parentNode.insertBefore(elem, this.nextSibling);
        });
      },
      empty: function () {
        for (var elem, i = 0; null != (elem = this[i]); i++)
          1 === elem.nodeType &&
            (jQuery.cleanData(getAll(elem, !1)), (elem.textContent = ""));
        return this;
      },
      clone: function (dataAndEvents, deepDataAndEvents) {
        return (
          (dataAndEvents = null != dataAndEvents && dataAndEvents),
          (deepDataAndEvents =
            null == deepDataAndEvents ? dataAndEvents : deepDataAndEvents),
          this.map(function () {
            return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
          })
        );
      },
      html: function (value) {
        return access(
          this,
          function (value) {
            var elem = this[0] || {},
              i = 0,
              l = this.length;
            if (void 0 === value && 1 === elem.nodeType) return elem.innerHTML;
            if (
              "string" == typeof value &&
              !rnoInnerhtml.test(value) &&
              !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]
            ) {
              value = jQuery.htmlPrefilter(value);
              try {
                for (; i < l; i++)
                  1 === (elem = this[i] || {}).nodeType &&
                    (jQuery.cleanData(getAll(elem, !1)),
                      (elem.innerHTML = value));
                elem = 0;
              } catch (e) { }
            }
            elem && this.empty().append(value);
          },
          null,
          value,
          arguments.length
        );
      },
      replaceWith: function () {
        var ignored = [];
        return domManip(
          this,
          arguments,
          function (elem) {
            var parent = this.parentNode;
            jQuery.inArray(this, ignored) < 0 &&
              (jQuery.cleanData(getAll(this)),
                parent && parent.replaceChild(elem, this));
          },
          ignored
        );
      },
    }),
    jQuery.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (name, original) {
        jQuery.fn[name] = function (selector) {
          for (
            var elems,
            ret = [],
            insert = jQuery(selector),
            last = insert.length - 1,
            i = 0;
            i <= last;
            i++
          )
            (elems = i === last ? this : this.clone(!0)),
              jQuery(insert[i])[original](elems),
              push.apply(ret, elems.get());
          return this.pushStack(ret);
        };
      }
    );
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i"),
    rcustomProp = /^--/,
    getStyles = function (elem) {
      var view = elem.ownerDocument.defaultView;
      return (
        (view && view.opener) || (view = window), view.getComputedStyle(elem)
      );
    },
    swap = function (elem, options, callback) {
      var ret,
        name,
        old = {};
      for (name in options)
        (old[name] = elem.style[name]), (elem.style[name] = options[name]);
      for (name in ((ret = callback.call(elem)), options))
        elem.style[name] = old[name];
      return ret;
    },
    rboxStyle = new RegExp(cssExpand.join("|"), "i"),
    whitespace = "[\\x20\\t\\r\\n\\f]",
    rtrimCSS = new RegExp(
      "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
      "g"
    );
  function curCSS(elem, name, computed) {
    var width,
      minWidth,
      maxWidth,
      ret,
      isCustomProp = rcustomProp.test(name),
      style = elem.style;
    return (
      (computed = computed || getStyles(elem)) &&
      ((ret = computed.getPropertyValue(name) || computed[name]),
        isCustomProp && (ret = ret.replace(rtrimCSS, "$1")),
        "" !== ret || isAttached(elem) || (ret = jQuery.style(elem, name)),
        !support.pixelBoxStyles() &&
        rnumnonpx.test(ret) &&
        rboxStyle.test(name) &&
        ((width = style.width),
          (minWidth = style.minWidth),
          (maxWidth = style.maxWidth),
          (style.minWidth = style.maxWidth = style.width = ret),
          (ret = computed.width),
          (style.width = width),
          (style.minWidth = minWidth),
          (style.maxWidth = maxWidth))),
      void 0 !== ret ? ret + "" : ret
    );
  }
  function addGetHookIf(conditionFn, hookFn) {
    return {
      get: function () {
        if (!conditionFn()) return (this.get = hookFn).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function computeStyleTests() {
      if (div) {
        (container.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (div.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          documentElement.appendChild(container).appendChild(div);
        var divStyle = window.getComputedStyle(div);
        (pixelPositionVal = "1%" !== divStyle.top),
          (reliableMarginLeftVal =
            12 === roundPixelMeasures(divStyle.marginLeft)),
          (div.style.right = "60%"),
          (pixelBoxStylesVal = 36 === roundPixelMeasures(divStyle.right)),
          (boxSizingReliableVal = 36 === roundPixelMeasures(divStyle.width)),
          (div.style.position = "absolute"),
          (scrollboxSizeVal = 12 === roundPixelMeasures(div.offsetWidth / 3)),
          documentElement.removeChild(container),
          (div = null);
      }
    }
    function roundPixelMeasures(measure) {
      return Math.round(parseFloat(measure));
    }
    var pixelPositionVal,
      boxSizingReliableVal,
      scrollboxSizeVal,
      pixelBoxStylesVal,
      reliableTrDimensionsVal,
      reliableMarginLeftVal,
      container = document.createElement("div"),
      div = document.createElement("div");
    div.style &&
      ((div.style.backgroundClip = "content-box"),
        (div.cloneNode(!0).style.backgroundClip = ""),
        (support.clearCloneStyle = "content-box" === div.style.backgroundClip),
        jQuery.extend(support, {
          boxSizingReliable: function () {
            return computeStyleTests(), boxSizingReliableVal;
          },
          pixelBoxStyles: function () {
            return computeStyleTests(), pixelBoxStylesVal;
          },
          pixelPosition: function () {
            return computeStyleTests(), pixelPositionVal;
          },
          reliableMarginLeft: function () {
            return computeStyleTests(), reliableMarginLeftVal;
          },
          scrollboxSize: function () {
            return computeStyleTests(), scrollboxSizeVal;
          },
          reliableTrDimensions: function () {
            var table, tr, trChild, trStyle;
            return (
              null == reliableTrDimensionsVal &&
              ((table = document.createElement("table")),
                (tr = document.createElement("tr")),
                (trChild = document.createElement("div")),
                (table.style.cssText =
                  "position:absolute;left:-11111px;border-collapse:separate"),
                (tr.style.cssText = "border:1px solid"),
                (tr.style.height = "1px"),
                (trChild.style.height = "9px"),
                (trChild.style.display = "block"),
                documentElement
                  .appendChild(table)
                  .appendChild(tr)
                  .appendChild(trChild),
                (trStyle = window.getComputedStyle(tr)),
                (reliableTrDimensionsVal =
                  parseInt(trStyle.height, 10) +
                  parseInt(trStyle.borderTopWidth, 10) +
                  parseInt(trStyle.borderBottomWidth, 10) ===
                  tr.offsetHeight),
                documentElement.removeChild(table)),
              reliableTrDimensionsVal
            );
          },
        }));
  })();
  var cssPrefixes = ["Webkit", "Moz", "ms"],
    emptyStyle = document.createElement("div").style,
    vendorProps = {};
  function vendorPropName(name) {
    for (
      var capName = name[0].toUpperCase() + name.slice(1),
      i = cssPrefixes.length;
      i--;

    )
      if ((name = cssPrefixes[i] + capName) in emptyStyle) return name;
  }
  function finalPropName(name) {
    var final = jQuery.cssProps[name] || vendorProps[name];
    return (
      final ||
      (name in emptyStyle
        ? name
        : (vendorProps[name] = vendorPropName(name) || name))
    );
  }
  var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
    cssNormalTransform = { letterSpacing: "0", fontWeight: "400" };
  function setPositiveNumber(_elem, value, subtract) {
    var matches = rcssNum.exec(value);
    return matches
      ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px")
      : value;
  }
  function boxModelAdjustment(
    elem,
    dimension,
    box,
    isBorderBox,
    styles,
    computedVal
  ) {
    var i = "width" === dimension ? 1 : 0,
      extra = 0,
      delta = 0;
    if (box === (isBorderBox ? "border" : "content")) return 0;
    for (; i < 4; i += 2)
      "margin" === box &&
        (delta += jQuery.css(elem, box + cssExpand[i], !0, styles)),
        isBorderBox
          ? ("content" === box &&
            (delta -= jQuery.css(elem, "padding" + cssExpand[i], !0, styles)),
            "margin" !== box &&
            (delta -= jQuery.css(
              elem,
              "border" + cssExpand[i] + "Width",
              !0,
              styles
            )))
          : ((delta += jQuery.css(elem, "padding" + cssExpand[i], !0, styles)),
            "padding" !== box
              ? (delta += jQuery.css(
                elem,
                "border" + cssExpand[i] + "Width",
                !0,
                styles
              ))
              : (extra += jQuery.css(
                elem,
                "border" + cssExpand[i] + "Width",
                !0,
                styles
              )));
    return (
      !isBorderBox &&
      computedVal >= 0 &&
      (delta +=
        Math.max(
          0,
          Math.ceil(
            elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] -
            computedVal -
            delta -
            extra -
            0.5
          )
        ) || 0),
      delta
    );
  }
  function getWidthOrHeight(elem, dimension, extra) {
    var styles = getStyles(elem),
      boxSizingNeeded,
      isBorderBox =
        (!support.boxSizingReliable() || extra) &&
        "border-box" === jQuery.css(elem, "boxSizing", !1, styles),
      valueIsBorderBox = isBorderBox,
      val = curCSS(elem, dimension, styles),
      offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
    if (rnumnonpx.test(val)) {
      if (!extra) return val;
      val = "auto";
    }
    return (
      ((!support.boxSizingReliable() && isBorderBox) ||
        (!support.reliableTrDimensions() && nodeName(elem, "tr")) ||
        "auto" === val ||
        (!parseFloat(val) &&
          "inline" === jQuery.css(elem, "display", !1, styles))) &&
      elem.getClientRects().length &&
      ((isBorderBox =
        "border-box" === jQuery.css(elem, "boxSizing", !1, styles)),
        (valueIsBorderBox = offsetProp in elem) && (val = elem[offsetProp])),
      (val = parseFloat(val) || 0) +
      boxModelAdjustment(
        elem,
        dimension,
        extra || (isBorderBox ? "border" : "content"),
        valueIsBorderBox,
        styles,
        val
      ) +
      "px"
    );
  }
  jQuery.extend({
    cssHooks: {
      opacity: {
        get: function (elem, computed) {
          if (computed) {
            var ret = curCSS(elem, "opacity");
            return "" === ret ? "1" : ret;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (elem, name, value, extra) {
      if (elem && 3 !== elem.nodeType && 8 !== elem.nodeType && elem.style) {
        var ret,
          type,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name),
          style = elem.style;
        if (
          (isCustomProp || (name = finalPropName(origName)),
            (hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]),
            void 0 === value)
        )
          return hooks &&
            "get" in hooks &&
            void 0 !== (ret = hooks.get(elem, !1, extra))
            ? ret
            : style[name];
        "string" === (type = typeof value) &&
          (ret = rcssNum.exec(value)) &&
          ret[1] &&
          ((value = adjustCSS(elem, name, ret)), (type = "number")),
          null != value &&
          value == value &&
          ("number" !== type ||
            isCustomProp ||
            (value +=
              (ret && ret[3]) || (jQuery.cssNumber[origName] ? "" : "px")),
            support.clearCloneStyle ||
            "" !== value ||
            0 !== name.indexOf("background") ||
            (style[name] = "inherit"),
            (hooks &&
              "set" in hooks &&
              void 0 === (value = hooks.set(elem, value, extra))) ||
            (isCustomProp
              ? style.setProperty(name, value)
              : (style[name] = value)));
      }
    },
    css: function (elem, name, extra, styles) {
      var val,
        num,
        hooks,
        origName = camelCase(name),
        isCustomProp;
      return (
        rcustomProp.test(name) || (name = finalPropName(origName)),
        (hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]) &&
        "get" in hooks &&
        (val = hooks.get(elem, !0, extra)),
        void 0 === val && (val = curCSS(elem, name, styles)),
        "normal" === val &&
        name in cssNormalTransform &&
        (val = cssNormalTransform[name]),
        "" === extra || extra
          ? ((num = parseFloat(val)),
            !0 === extra || isFinite(num) ? num || 0 : val)
          : val
      );
    },
  }),
    jQuery.each(["height", "width"], function (_i, dimension) {
      jQuery.cssHooks[dimension] = {
        get: function (elem, computed, extra) {
          if (computed)
            return !rdisplayswap.test(jQuery.css(elem, "display")) ||
              (elem.getClientRects().length &&
                elem.getBoundingClientRect().width)
              ? getWidthOrHeight(elem, dimension, extra)
              : swap(elem, cssShow, function () {
                return getWidthOrHeight(elem, dimension, extra);
              });
        },
        set: function (elem, value, extra) {
          var matches,
            styles = getStyles(elem),
            scrollboxSizeBuggy =
              !support.scrollboxSize() && "absolute" === styles.position,
            boxSizingNeeded,
            isBorderBox =
              (scrollboxSizeBuggy || extra) &&
              "border-box" === jQuery.css(elem, "boxSizing", !1, styles),
            subtract = extra
              ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles)
              : 0;
          return (
            isBorderBox &&
            scrollboxSizeBuggy &&
            (subtract -= Math.ceil(
              elem[
              "offset" + dimension[0].toUpperCase() + dimension.slice(1)
              ] -
              parseFloat(styles[dimension]) -
              boxModelAdjustment(elem, dimension, "border", !1, styles) -
              0.5
            )),
            subtract &&
            (matches = rcssNum.exec(value)) &&
            "px" !== (matches[3] || "px") &&
            ((elem.style[dimension] = value),
              (value = jQuery.css(elem, dimension))),
            setPositiveNumber(elem, value, subtract)
          );
        },
      };
    }),
    (jQuery.cssHooks.marginLeft = addGetHookIf(
      support.reliableMarginLeft,
      function (elem, computed) {
        if (computed)
          return (
            (parseFloat(curCSS(elem, "marginLeft")) ||
              elem.getBoundingClientRect().left -
              swap(elem, { marginLeft: 0 }, function () {
                return elem.getBoundingClientRect().left;
              })) + "px"
          );
      }
    )),
    jQuery.each(
      { margin: "", padding: "", border: "Width" },
      function (prefix, suffix) {
        (jQuery.cssHooks[prefix + suffix] = {
          expand: function (value) {
            for (
              var i = 0,
              expanded = {},
              parts = "string" == typeof value ? value.split(" ") : [value];
              i < 4;
              i++
            )
              expanded[prefix + cssExpand[i] + suffix] =
                parts[i] || parts[i - 2] || parts[0];
            return expanded;
          },
        }),
          "margin" !== prefix &&
          (jQuery.cssHooks[prefix + suffix].set = setPositiveNumber);
      }
    ),
    jQuery.fn.extend({
      css: function (name, value) {
        return access(
          this,
          function (elem, name, value) {
            var styles,
              len,
              map = {},
              i = 0;
            if (Array.isArray(name)) {
              for (styles = getStyles(elem), len = name.length; i < len; i++)
                map[name[i]] = jQuery.css(elem, name[i], !1, styles);
              return map;
            }
            return void 0 !== value
              ? jQuery.style(elem, name, value)
              : jQuery.css(elem, name);
          },
          name,
          value,
          arguments.length > 1
        );
      },
    }),
    (jQuery.fn.delay = function (time, type) {
      return (
        (time = (jQuery.fx && jQuery.fx.speeds[time]) || time),
        (type = type || "fx"),
        this.queue(type, function (next, hooks) {
          var timeout = window.setTimeout(next, time);
          hooks.stop = function () {
            window.clearTimeout(timeout);
          };
        })
      );
    }),
    (function () {
      var input = document.createElement("input"),
        select,
        opt = document
          .createElement("select")
          .appendChild(document.createElement("option"));
      (input.type = "checkbox"),
        (support.checkOn = "" !== input.value),
        (support.optSelected = opt.selected),
        ((input = document.createElement("input")).value = "t"),
        (input.type = "radio"),
        (support.radioValue = "t" === input.value);
    })();
  var boolHook,
    attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function (name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function (name) {
      return this.each(function () {
        jQuery.removeAttr(this, name);
      });
    },
  }),
    jQuery.extend({
      attr: function (elem, name, value) {
        var ret,
          hooks,
          nType = elem.nodeType;
        if (3 !== nType && 8 !== nType && 2 !== nType)
          return void 0 === elem.getAttribute
            ? jQuery.prop(elem, name, value)
            : ((1 === nType && jQuery.isXMLDoc(elem)) ||
              (hooks =
                jQuery.attrHooks[name.toLowerCase()] ||
                (jQuery.expr.match.bool.test(name) ? boolHook : void 0)),
              void 0 !== value
                ? null === value
                  ? void jQuery.removeAttr(elem, name)
                  : hooks &&
                    "set" in hooks &&
                    void 0 !== (ret = hooks.set(elem, value, name))
                    ? ret
                    : (elem.setAttribute(name, value + ""), value)
                : hooks &&
                  "get" in hooks &&
                  null !== (ret = hooks.get(elem, name))
                  ? ret
                  : null == (ret = jQuery.find.attr(elem, name))
                    ? void 0
                    : ret);
      },
      attrHooks: {
        type: {
          set: function (elem, value) {
            if (
              !support.radioValue &&
              "radio" === value &&
              nodeName(elem, "input")
            ) {
              var val = elem.value;
              return (
                elem.setAttribute("type", value),
                val && (elem.value = val),
                value
              );
            }
          },
        },
      },
      removeAttr: function (elem, value) {
        var name,
          i = 0,
          attrNames = value && value.match(rnothtmlwhite);
        if (attrNames && 1 === elem.nodeType)
          for (; (name = attrNames[i++]);) elem.removeAttribute(name);
      },
    }),
    (boolHook = {
      set: function (elem, value, name) {
        return (
          !1 === value
            ? jQuery.removeAttr(elem, name)
            : elem.setAttribute(name, name),
          name
        );
      },
    }),
    jQuery.each(
      jQuery.expr.match.bool.source.match(/\w+/g),
      function (_i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function (elem, name, isXML) {
          var ret,
            handle,
            lowercaseName = name.toLowerCase();
          return (
            isXML ||
            ((handle = attrHandle[lowercaseName]),
              (attrHandle[lowercaseName] = ret),
              (ret = null != getter(elem, name, isXML) ? lowercaseName : null),
              (attrHandle[lowercaseName] = handle)),
            ret
          );
        };
      }
    );
  var rfocusable = /^(?:input|select|textarea|button)$/i,
    rclickable = /^(?:a|area)$/i;
  function stripAndCollapse(value) {
    var tokens;
    return (value.match(rnothtmlwhite) || []).join(" ");
  }
  function getClass(elem) {
    return (elem.getAttribute && elem.getAttribute("class")) || "";
  }
  function classesToArray(value) {
    return Array.isArray(value)
      ? value
      : ("string" == typeof value && value.match(rnothtmlwhite)) || [];
  }
  jQuery.fn.extend({
    prop: function (name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function (name) {
      return this.each(function () {
        delete this[jQuery.propFix[name] || name];
      });
    },
  }),
    jQuery.extend({
      prop: function (elem, name, value) {
        var ret,
          hooks,
          nType = elem.nodeType;
        if (3 !== nType && 8 !== nType && 2 !== nType)
          return (
            (1 === nType && jQuery.isXMLDoc(elem)) ||
            ((name = jQuery.propFix[name] || name),
              (hooks = jQuery.propHooks[name])),
            void 0 !== value
              ? hooks &&
                "set" in hooks &&
                void 0 !== (ret = hooks.set(elem, value, name))
                ? ret
                : (elem[name] = value)
              : hooks &&
                "get" in hooks &&
                null !== (ret = hooks.get(elem, name))
                ? ret
                : elem[name]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (elem) {
            var tabindex = jQuery.find.attr(elem, "tabindex");
            return tabindex
              ? parseInt(tabindex, 10)
              : rfocusable.test(elem.nodeName) ||
                (rclickable.test(elem.nodeName) && elem.href)
                ? 0
                : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    support.optSelected ||
    (jQuery.propHooks.selected = {
      get: function (elem) {
        var parent = elem.parentNode;
        return (
          parent && parent.parentNode && parent.parentNode.selectedIndex, null
        );
      },
      set: function (elem) {
        var parent = elem.parentNode;
        parent &&
          (parent.selectedIndex,
            parent.parentNode && parent.parentNode.selectedIndex);
      },
    }),
    jQuery.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        jQuery.propFix[this.toLowerCase()] = this;
      }
    ),
    jQuery.fn.extend({
      addClass: function (value) {
        var classNames, cur, curValue, className, i, finalValue;
        return isFunction(value)
          ? this.each(function (j) {
            jQuery(this).addClass(value.call(this, j, getClass(this)));
          })
          : (classNames = classesToArray(value)).length
            ? this.each(function () {
              if (
                ((curValue = getClass(this)),
                  (cur =
                    1 === this.nodeType &&
                    " " + stripAndCollapse(curValue) + " "))
              ) {
                for (i = 0; i < classNames.length; i++)
                  (className = classNames[i]),
                    cur.indexOf(" " + className + " ") < 0 &&
                    (cur += className + " ");
                (finalValue = stripAndCollapse(cur)),
                  curValue !== finalValue &&
                  this.setAttribute("class", finalValue);
              }
            })
            : this;
      },
      removeClass: function (value) {
        var classNames, cur, curValue, className, i, finalValue;
        return isFunction(value)
          ? this.each(function (j) {
            jQuery(this).removeClass(value.call(this, j, getClass(this)));
          })
          : arguments.length
            ? (classNames = classesToArray(value)).length
              ? this.each(function () {
                if (
                  ((curValue = getClass(this)),
                    (cur =
                      1 === this.nodeType &&
                      " " + stripAndCollapse(curValue) + " "))
                ) {
                  for (i = 0; i < classNames.length; i++)
                    for (
                      className = classNames[i];
                      cur.indexOf(" " + className + " ") > -1;

                    )
                      cur = cur.replace(" " + className + " ", " ");
                  (finalValue = stripAndCollapse(cur)),
                    curValue !== finalValue &&
                    this.setAttribute("class", finalValue);
                }
              })
              : this
            : this.attr("class", "");
      },
      toggleClass: function (value, stateVal) {
        var classNames,
          className,
          i,
          self,
          type = typeof value,
          isValidValue = "string" === type || Array.isArray(value);
        return isFunction(value)
          ? this.each(function (i) {
            jQuery(this).toggleClass(
              value.call(this, i, getClass(this), stateVal),
              stateVal
            );
          })
          : "boolean" == typeof stateVal && isValidValue
            ? stateVal
              ? this.addClass(value)
              : this.removeClass(value)
            : ((classNames = classesToArray(value)),
              this.each(function () {
                if (isValidValue)
                  for (self = jQuery(this), i = 0; i < classNames.length; i++)
                    (className = classNames[i]),
                      self.hasClass(className)
                        ? self.removeClass(className)
                        : self.addClass(className);
                else
                  (void 0 !== value && "boolean" !== type) ||
                    ((className = getClass(this)) &&
                      dataPriv.set(this, "__className__", className),
                      this.setAttribute &&
                      this.setAttribute(
                        "class",
                        className || !1 === value
                          ? ""
                          : dataPriv.get(this, "__className__") || ""
                      ));
              }));
      },
      hasClass: function (selector) {
        var className,
          elem,
          i = 0;
        for (className = " " + selector + " "; (elem = this[i++]);)
          if (
            1 === elem.nodeType &&
            (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) >
            -1
          )
            return !0;
        return !1;
      },
    });
  var rreturn = /\r/g;
  jQuery.fn.extend({
    val: function (value) {
      var hooks,
        ret,
        valueIsFunction,
        elem = this[0];
      return arguments.length
        ? ((valueIsFunction = isFunction(value)),
          this.each(function (i) {
            var val;
            1 === this.nodeType &&
              (null ==
                (val = valueIsFunction
                  ? value.call(this, i, jQuery(this).val())
                  : value)
                ? (val = "")
                : "number" == typeof val
                  ? (val += "")
                  : Array.isArray(val) &&
                  (val = jQuery.map(val, function (value) {
                    return null == value ? "" : value + "";
                  })),
                ((hooks =
                  jQuery.valHooks[this.type] ||
                  jQuery.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in hooks &&
                  void 0 !== hooks.set(this, val, "value")) ||
                (this.value = val));
          }))
        : elem
          ? (hooks =
            jQuery.valHooks[elem.type] ||
            jQuery.valHooks[elem.nodeName.toLowerCase()]) &&
            "get" in hooks &&
            void 0 !== (ret = hooks.get(elem, "value"))
            ? ret
            : "string" == typeof (ret = elem.value)
              ? ret.replace(rreturn, "")
              : null == ret
                ? ""
                : ret
          : void 0;
    },
  }),
    jQuery.extend({
      valHooks: {
        option: {
          get: function (elem) {
            var val = jQuery.find.attr(elem, "value");
            return null != val ? val : stripAndCollapse(jQuery.text(elem));
          },
        },
        select: {
          get: function (elem) {
            var value,
              option,
              i,
              options = elem.options,
              index = elem.selectedIndex,
              one = "select-one" === elem.type,
              values = one ? null : [],
              max = one ? index + 1 : options.length;
            for (i = index < 0 ? max : one ? index : 0; i < max; i++)
              if (
                ((option = options[i]).selected || i === index) &&
                !option.disabled &&
                (!option.parentNode.disabled ||
                  !nodeName(option.parentNode, "optgroup"))
              ) {
                if (((value = jQuery(option).val()), one)) return value;
                values.push(value);
              }
            return values;
          },
          set: function (elem, value) {
            for (
              var optionSet,
              option,
              options = elem.options,
              values = jQuery.makeArray(value),
              i = options.length;
              i--;

            )
              ((option = options[i]).selected =
                jQuery.inArray(jQuery.valHooks.option.get(option), values) >
                -1) && (optionSet = !0);
            return optionSet || (elem.selectedIndex = -1), values;
          },
        },
      },
    }),
    jQuery.each(["radio", "checkbox"], function () {
      (jQuery.valHooks[this] = {
        set: function (elem, value) {
          if (Array.isArray(value))
            return (elem.checked =
              jQuery.inArray(jQuery(elem).val(), value) > -1);
        },
      }),
        support.checkOn ||
        (jQuery.valHooks[this].get = function (elem) {
          return null === elem.getAttribute("value") ? "on" : elem.value;
        });
    }),
    (support.focusin = "onfocusin" in window);
  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
    stopPropagationCallback = function (e) {
      e.stopPropagation();
    };
  jQuery.extend(jQuery.event, {
    trigger: function (event, data, elem, onlyHandlers) {
      var i,
        cur,
        tmp,
        bubbleType,
        ontype,
        handle,
        special,
        lastElement,
        eventPath = [elem || document],
        type = hasOwn.call(event, "type") ? event.type : event,
        namespaces = hasOwn.call(event, "namespace")
          ? event.namespace.split(".")
          : [];
      if (
        ((cur = lastElement = tmp = elem = elem || document),
          3 !== elem.nodeType &&
          8 !== elem.nodeType &&
          !rfocusMorph.test(type + jQuery.event.triggered) &&
          (type.indexOf(".") > -1 &&
            ((namespaces = type.split(".")),
              (type = namespaces.shift()),
              namespaces.sort()),
            (ontype = type.indexOf(":") < 0 && "on" + type),
            ((event = event[jQuery.expando]
              ? event
              : new jQuery.Event(
                type,
                "object" == typeof event && event
              )).isTrigger = onlyHandlers ? 2 : 3),
            (event.namespace = namespaces.join(".")),
            (event.rnamespace = event.namespace
              ? new RegExp(
                "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"
              )
              : null),
            (event.result = void 0),
            event.target || (event.target = elem),
            (data = null == data ? [event] : jQuery.makeArray(data, [event])),
            (special = jQuery.event.special[type] || {}),
            onlyHandlers ||
            !special.trigger ||
            !1 !== special.trigger.apply(elem, data)))
      ) {
        if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
          for (
            bubbleType = special.delegateType || type,
            rfocusMorph.test(bubbleType + type) || (cur = cur.parentNode);
            cur;
            cur = cur.parentNode
          )
            eventPath.push(cur), (tmp = cur);
          tmp === (elem.ownerDocument || document) &&
            eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
        for (i = 0; (cur = eventPath[i++]) && !event.isPropagationStopped();)
          (lastElement = cur),
            (event.type = i > 1 ? bubbleType : special.bindType || type),
            (handle =
              (dataPriv.get(cur, "events") || Object.create(null))[
              event.type
              ] && dataPriv.get(cur, "handle")) && handle.apply(cur, data),
            (handle = ontype && cur[ontype]) &&
            handle.apply &&
            acceptData(cur) &&
            ((event.result = handle.apply(cur, data)),
              !1 === event.result && event.preventDefault());
        return (
          (event.type = type),
          onlyHandlers ||
          event.isDefaultPrevented() ||
          (special._default &&
            !1 !== special._default.apply(eventPath.pop(), data)) ||
          !acceptData(elem) ||
          (ontype &&
            isFunction(elem[type]) &&
            !isWindow(elem) &&
            ((tmp = elem[ontype]) && (elem[ontype] = null),
              (jQuery.event.triggered = type),
              event.isPropagationStopped() &&
              lastElement.addEventListener(type, stopPropagationCallback),
              elem[type](),
              event.isPropagationStopped() &&
              lastElement.removeEventListener(type, stopPropagationCallback),
              (jQuery.event.triggered = void 0),
              tmp && (elem[ontype] = tmp))),
          event.result
        );
      }
    },
    simulate: function (type, elem, event) {
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: !0,
      });
      jQuery.event.trigger(e, null, elem);
    },
  }),
    jQuery.fn.extend({
      trigger: function (type, data) {
        return this.each(function () {
          jQuery.event.trigger(type, data, this);
        });
      },
      triggerHandler: function (type, data) {
        var elem = this[0];
        if (elem) return jQuery.event.trigger(type, data, elem, !0);
      },
    }),
    support.focusin ||
    jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {
      var handler = function (event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
      };
      jQuery.event.special[fix] = {
        setup: function () {
          var doc = this.ownerDocument || this.document || this,
            attaches = dataPriv.access(doc, fix);
          attaches || doc.addEventListener(orig, handler, !0),
            dataPriv.access(doc, fix, (attaches || 0) + 1);
        },
        teardown: function () {
          var doc = this.ownerDocument || this.document || this,
            attaches = dataPriv.access(doc, fix) - 1;
          attaches
            ? dataPriv.access(doc, fix, attaches)
            : (doc.removeEventListener(orig, handler, !0),
              dataPriv.remove(doc, fix));
        },
      };
    }),
    (jQuery.parseXML = function (data) {
      var xml, parserErrorElem;
      if (!data || "string" != typeof data) return null;
      try {
        xml = new window.DOMParser().parseFromString(data, "text/xml");
      } catch (e) { }
      return (
        (parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0]),
        (xml && !parserErrorElem) ||
        jQuery.error(
          "Invalid XML: " +
          (parserErrorElem
            ? jQuery
              .map(parserErrorElem.childNodes, function (el) {
                return el.textContent;
              })
              .join("\n")
            : data)
        ),
        xml
      );
    });
  var rbracket = /\[\]$/,
    rCRLF = /\r?\n/g,
    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
    rsubmittable = /^(?:input|select|textarea|keygen)/i,
    body;
  function buildParams(prefix, obj, traditional, add) {
    var name;
    if (Array.isArray(obj))
      jQuery.each(obj, function (i, v) {
        traditional || rbracket.test(prefix)
          ? add(prefix, v)
          : buildParams(
            prefix + "[" + ("object" == typeof v && null != v ? i : "") + "]",
            v,
            traditional,
            add
          );
      });
    else if (traditional || "object" !== toType(obj)) add(prefix, obj);
    else
      for (name in obj)
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
  }
  (jQuery.param = function (a, traditional) {
    var prefix,
      s = [],
      add = function (key, valueOrFunction) {
        var value = isFunction(valueOrFunction)
          ? valueOrFunction()
          : valueOrFunction;
        s[s.length] =
          encodeURIComponent(key) +
          "=" +
          encodeURIComponent(null == value ? "" : value);
      };
    if (null == a) return "";
    if (Array.isArray(a) || (a.jquery && !jQuery.isPlainObject(a)))
      jQuery.each(a, function () {
        add(this.name, this.value);
      });
    else for (prefix in a) buildParams(prefix, a[prefix], traditional, add);
    return s.join("&");
  }),
    jQuery.fn.extend({
      serialize: function () {
        return jQuery.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var elements = jQuery.prop(this, "elements");
          return elements ? jQuery.makeArray(elements) : this;
        })
          .filter(function () {
            var type = this.type;
            return (
              this.name &&
              !jQuery(this).is(":disabled") &&
              rsubmittable.test(this.nodeName) &&
              !rsubmitterTypes.test(type) &&
              (this.checked || !rcheckableType.test(type))
            );
          })
          .map(function (_i, elem) {
            var val = jQuery(this).val();
            return null == val
              ? null
              : Array.isArray(val)
                ? jQuery.map(val, function (val) {
                  return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
                })
                : { name: elem.name, value: val.replace(rCRLF, "\r\n") };
          })
          .get();
      },
    }),
    jQuery.fn.extend({
      wrapAll: function (html) {
        var wrap;
        return (
          this[0] &&
          (isFunction(html) && (html = html.call(this[0])),
            (wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && wrap.insertBefore(this[0]),
            wrap
              .map(function () {
                for (var elem = this; elem.firstElementChild;)
                  elem = elem.firstElementChild;
                return elem;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (html) {
        return isFunction(html)
          ? this.each(function (i) {
            jQuery(this).wrapInner(html.call(this, i));
          })
          : this.each(function () {
            var self = jQuery(this),
              contents = self.contents();
            contents.length ? contents.wrapAll(html) : self.append(html);
          });
      },
      wrap: function (html) {
        var htmlIsFunction = isFunction(html);
        return this.each(function (i) {
          jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
        });
      },
      unwrap: function (selector) {
        return (
          this.parent(selector)
            .not("body")
            .each(function () {
              jQuery(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (jQuery.expr.pseudos.hidden = function (elem) {
      return !jQuery.expr.pseudos.visible(elem);
    }),
    (jQuery.expr.pseudos.visible = function (elem) {
      return !!(
        elem.offsetWidth ||
        elem.offsetHeight ||
        elem.getClientRects().length
      );
    }),
    (support.createHTMLDocument =
      (((body = document.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
        2 === body.childNodes.length)),
    (jQuery.parseHTML = function (data, context, keepScripts) {
      return "string" != typeof data
        ? []
        : ("boolean" == typeof context &&
          ((keepScripts = context), (context = !1)),
          context ||
          (support.createHTMLDocument
            ? (((base = (context =
              document.implementation.createHTMLDocument("")).createElement(
                "base"
              )).href = document.location.href),
              context.head.appendChild(base))
            : (context = document)),
          (scripts = !keepScripts && []),
          (parsed = rsingleTag.exec(data))
            ? [context.createElement(parsed[1])]
            : ((parsed = buildFragment([data], context, scripts)),
              scripts && scripts.length && jQuery(scripts).remove(),
              jQuery.merge([], parsed.childNodes)));
      var base, parsed, scripts;
    }),
    (jQuery.offset = {
      setOffset: function (elem, options, i) {
        var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {};
        "static" === position && (elem.style.position = "relative"),
          (curOffset = curElem.offset()),
          (curCSSTop = jQuery.css(elem, "top")),
          (curCSSLeft = jQuery.css(elem, "left")),
          (calculatePosition =
            ("absolute" === position || "fixed" === position) &&
            (curCSSTop + curCSSLeft).indexOf("auto") > -1)
            ? ((curTop = (curPosition = curElem.position()).top),
              (curLeft = curPosition.left))
            : ((curTop = parseFloat(curCSSTop) || 0),
              (curLeft = parseFloat(curCSSLeft) || 0)),
          isFunction(options) &&
          (options = options.call(elem, i, jQuery.extend({}, curOffset))),
          null != options.top &&
          (props.top = options.top - curOffset.top + curTop),
          null != options.left &&
          (props.left = options.left - curOffset.left + curLeft),
          "using" in options
            ? options.using.call(elem, props)
            : curElem.css(props);
      },
    }),
    jQuery.fn.extend({
      offset: function (options) {
        if (arguments.length)
          return void 0 === options
            ? this
            : this.each(function (i) {
              jQuery.offset.setOffset(this, options, i);
            });
        var rect,
          win,
          elem = this[0];
        return elem
          ? elem.getClientRects().length
            ? ((rect = elem.getBoundingClientRect()),
              (win = elem.ownerDocument.defaultView),
            {
              top: rect.top + win.pageYOffset,
              left: rect.left + win.pageXOffset,
            })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var offsetParent,
            offset,
            doc,
            elem = this[0],
            parentOffset = { top: 0, left: 0 };
          if ("fixed" === jQuery.css(elem, "position"))
            offset = elem.getBoundingClientRect();
          else {
            for (
              offset = this.offset(),
              doc = elem.ownerDocument,
              offsetParent = elem.offsetParent || doc.documentElement;
              offsetParent &&
              (offsetParent === doc.body ||
                offsetParent === doc.documentElement) &&
              "static" === jQuery.css(offsetParent, "position");

            )
              offsetParent = offsetParent.parentNode;
            offsetParent &&
              offsetParent !== elem &&
              1 === offsetParent.nodeType &&
              (((parentOffset = jQuery(offsetParent).offset()).top +=
                jQuery.css(offsetParent, "borderTopWidth", !0)),
                (parentOffset.left += jQuery.css(
                  offsetParent,
                  "borderLeftWidth",
                  !0
                )));
          }
          return {
            top:
              offset.top - parentOffset.top - jQuery.css(elem, "marginTop", !0),
            left:
              offset.left -
              parentOffset.left -
              jQuery.css(elem, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var offsetParent = this.offsetParent;
            offsetParent && "static" === jQuery.css(offsetParent, "position");

          )
            offsetParent = offsetParent.offsetParent;
          return offsetParent || documentElement;
        });
      },
    }),
    jQuery.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function (val) {
          return access(
            this,
            function (elem, method, val) {
              var win;
              if (
                (isWindow(elem)
                  ? (win = elem)
                  : 9 === elem.nodeType && (win = elem.defaultView),
                  void 0 === val)
              )
                return win ? win[prop] : elem[method];
              win
                ? win.scrollTo(
                  top ? win.pageXOffset : val,
                  top ? val : win.pageYOffset
                )
                : (elem[method] = val);
            },
            method,
            val,
            arguments.length
          );
        };
      }
    ),
    jQuery.each(["top", "left"], function (_i, prop) {
      jQuery.cssHooks[prop] = addGetHookIf(
        support.pixelPosition,
        function (elem, computed) {
          if (computed)
            return (
              (computed = curCSS(elem, prop)),
              rnumnonpx.test(computed)
                ? jQuery(elem).position()[prop] + "px"
                : computed
            );
        }
      );
    }),
    jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
      jQuery.each(
        { padding: "inner" + name, content: type, "": "outer" + name },
        function (defaultExtra, funcName) {
          jQuery.fn[funcName] = function (margin, value) {
            var chainable =
              arguments.length &&
              (defaultExtra || "boolean" != typeof margin),
              extra =
                defaultExtra ||
                (!0 === margin || !0 === value ? "margin" : "border");
            return access(
              this,
              function (elem, type, value) {
                var doc;
                return isWindow(elem)
                  ? 0 === funcName.indexOf("outer")
                    ? elem["inner" + name]
                    : elem.document.documentElement["client" + name]
                  : 9 === elem.nodeType
                    ? ((doc = elem.documentElement),
                      Math.max(
                        elem.body["scroll" + name],
                        doc["scroll" + name],
                        elem.body["offset" + name],
                        doc["offset" + name],
                        doc["client" + name]
                      ))
                    : void 0 === value
                      ? jQuery.css(elem, type, extra)
                      : jQuery.style(elem, type, value, extra);
              },
              type,
              chainable ? margin : void 0,
              chainable
            );
          };
        }
      );
    }),
    jQuery.fn.extend({
      bind: function (types, data, fn) {
        return this.on(types, null, data, fn);
      },
      unbind: function (types, fn) {
        return this.off(types, null, fn);
      },
      delegate: function (selector, types, data, fn) {
        return this.on(types, selector, data, fn);
      },
      undelegate: function (selector, types, fn) {
        return 1 === arguments.length
          ? this.off(selector, "**")
          : this.off(types, selector || "**", fn);
      },
      hover: function (fnOver, fnOut) {
        return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
      },
    }),
    jQuery.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (_i, name) {
        jQuery.fn[name] = function (data, fn) {
          return arguments.length > 0
            ? this.on(name, null, data, fn)
            : this.trigger(name);
        };
      }
    );
  var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  (jQuery.proxy = function (fn, context) {
    var tmp, args, proxy;
    if (
      ("string" == typeof context &&
        ((tmp = fn[context]), (context = fn), (fn = tmp)),
        isFunction(fn))
    )
      return (
        (args = slice.call(arguments, 2)),
        ((proxy = function () {
          return fn.apply(context || this, args.concat(slice.call(arguments)));
        }).guid = fn.guid =
          fn.guid || jQuery.guid++),
        proxy
      );
  }),
    (jQuery.holdReady = function (hold) {
      hold ? jQuery.readyWait++ : jQuery.ready(!0);
    }),
    (jQuery.isArray = Array.isArray),
    (jQuery.parseJSON = JSON.parse),
    (jQuery.nodeName = nodeName),
    (jQuery.isFunction = isFunction),
    (jQuery.isWindow = isWindow),
    (jQuery.camelCase = camelCase),
    (jQuery.type = toType),
    (jQuery.now = Date.now),
    (jQuery.isNumeric = function (obj) {
      var type = jQuery.type(obj);
      return (
        ("number" === type || "string" === type) &&
        !isNaN(obj - parseFloat(obj))
      );
    }),
    (jQuery.trim = function (text) {
      return null == text ? "" : (text + "").replace(rtrim, "$1");
    }),
    "function" == typeof define &&
    define.amd &&
    define("jquery", [], function () {
      return jQuery;
    });
  var _jQuery = window.jQuery,
    _$ = window.$;
  return (
    (jQuery.noConflict = function (deep) {
      return (
        window.$ === jQuery && (window.$ = _$),
        deep && window.jQuery === jQuery && (window.jQuery = _jQuery),
        jQuery
      );
    }),
    void 0 === noGlobal && (window.jQuery = window.$ = jQuery),
    jQuery
  );
}),
  !(function (i) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], i)
      : "undefined" != typeof exports
        ? (module.exports = i(require("jquery")))
        : i(jQuery);
  })(function (i) {
    "use strict";
    var e = window.Slick || {};
    ((e = (function () {
      var e = 0;
      return function (t, o) {
        var s,
          n = this;
        (n.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: i(t),
          appendDots: i(t),
          arrows: !0,
          asNavFor: null,
          prevArrow:
            '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
          nextArrow:
            '<button class="slick-next" aria-label="Next" type="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function (e, t) {
            return i('<button type="button" />').text(t + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3,
        }),
          (n.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1,
          }),
          i.extend(n, n.initials),
          (n.activeBreakpoint = null),
          (n.animType = null),
          (n.animProp = null),
          (n.breakpoints = []),
          (n.breakpointSettings = []),
          (n.cssTransitions = !1),
          (n.focussed = !1),
          (n.interrupted = !1),
          (n.hidden = "hidden"),
          (n.paused = !0),
          (n.positionProp = null),
          (n.respondTo = null),
          (n.rowCount = 1),
          (n.shouldClick = !0),
          (n.$slider = i(t)),
          (n.$slidesCache = null),
          (n.transformType = null),
          (n.transitionType = null),
          (n.visibilityChange = "visibilitychange"),
          (n.windowWidth = 0),
          (n.windowTimer = null),
          (s = i(t).data("slick") || {}),
          (n.options = i.extend({}, n.defaults, o, s)),
          (n.currentSlide = n.options.initialSlide),
          (n.originalSettings = n.options),
          void 0 !== document.mozHidden
            ? ((n.hidden = "mozHidden"),
              (n.visibilityChange = "mozvisibilitychange"))
            : void 0 !== document.webkitHidden &&
            ((n.hidden = "webkitHidden"),
              (n.visibilityChange = "webkitvisibilitychange")),
          (n.autoPlay = i.proxy(n.autoPlay, n)),
          (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
          (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
          (n.changeSlide = i.proxy(n.changeSlide, n)),
          (n.clickHandler = i.proxy(n.clickHandler, n)),
          (n.selectHandler = i.proxy(n.selectHandler, n)),
          (n.setPosition = i.proxy(n.setPosition, n)),
          (n.swipeHandler = i.proxy(n.swipeHandler, n)),
          (n.dragHandler = i.proxy(n.dragHandler, n)),
          (n.keyHandler = i.proxy(n.keyHandler, n)),
          (n.instanceUid = e++),
          (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          n.registerBreakpoints(),
          n.init(!0);
      };
    })()).prototype.activateADA = function () {
      this.$slideTrack
        .find(".slick-active")
        .attr({ "aria-hidden": "false" })
        .find("a, input, button, select")
        .attr({ tabindex: "0" });
    }),
      (e.prototype.addSlide = e.prototype.slickAdd =
        function (e, t, o) {
          var s = this;
          if ("boolean" == typeof t) (o = t), (t = null);
          else if (t < 0 || t >= s.slideCount) return !1;
          s.unload(),
            "number" == typeof t
              ? 0 === t && 0 === s.$slides.length
                ? i(e).appendTo(s.$slideTrack)
                : o
                  ? i(e).insertBefore(s.$slides.eq(t))
                  : i(e).insertAfter(s.$slides.eq(t))
              : !0 === o
                ? i(e).prependTo(s.$slideTrack)
                : i(e).appendTo(s.$slideTrack),
            (s.$slides = s.$slideTrack.children(this.options.slide)),
            s.$slideTrack.children(this.options.slide).detach(),
            s.$slideTrack.append(s.$slides),
            s.$slides.each(function (e, t) {
              i(t).attr("data-slick-index", e);
            }),
            (s.$slidesCache = s.$slides),
            s.reinit();
        }),
      (e.prototype.animateHeight = function () {
        var i = this;
        if (
          1 === i.options.slidesToShow &&
          !0 === i.options.adaptiveHeight &&
          !1 === i.options.vertical
        ) {
          var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
          i.$list.animate({ height: e }, i.options.speed);
        }
      }),
      (e.prototype.animateSlide = function (e, t) {
        var o = {},
          s = this;
        s.animateHeight(),
          !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
          !1 === s.transformsEnabled
            ? !1 === s.options.vertical
              ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t
              )
              : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t
              )
            : !1 === s.cssTransitions
              ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
                i({ animStart: s.currentLeft }).animate(
                  { animStart: e },
                  {
                    duration: s.options.speed,
                    easing: s.options.easing,
                    step: function (i) {
                      (i = Math.ceil(i)),
                        !1 === s.options.vertical
                          ? ((o[s.animType] = "translate(" + i + "px, 0px)"),
                            s.$slideTrack.css(o))
                          : ((o[s.animType] = "translate(0px," + i + "px)"),
                            s.$slideTrack.css(o));
                    },
                    complete: function () {
                      t && t.call();
                    },
                  }
                ))
              : (s.applyTransition(),
                (e = Math.ceil(e)),
                !1 === s.options.vertical
                  ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
                  : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
                s.$slideTrack.css(o),
                t &&
                setTimeout(function () {
                  s.disableTransition(), t.call();
                }, s.options.speed));
      }),
      (e.prototype.getNavTarget = function () {
        var e = this,
          t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)), t;
      }),
      (e.prototype.asNavFor = function (e) {
        var t = this.getNavTarget();
        null !== t &&
          "object" == typeof t &&
          t.each(function () {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0);
          });
      }),
      (e.prototype.applyTransition = function (i) {
        var e = this,
          t = {};
        !1 === e.options.fade
          ? (t[e.transitionType] =
            e.transformType +
            " " +
            e.options.speed +
            "ms " +
            e.options.cssEase)
          : (t[e.transitionType] =
            "opacity " + e.options.speed + "ms " + e.options.cssEase),
          !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
      }),
      (e.prototype.autoPlay = function () {
        var i = this;
        i.autoPlayClear(),
          i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ));
      }),
      (e.prototype.autoPlayClear = function () {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer);
      }),
      (e.prototype.autoPlayIterator = function () {
        var i = this,
          e = i.currentSlide + i.options.slidesToScroll;
        i.paused ||
          i.interrupted ||
          i.focussed ||
          (!1 === i.options.infinite &&
            (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
              ? (i.direction = 0)
              : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
                i.currentSlide - 1 == 0 && (i.direction = 1))),
            i.slideHandler(e));
      }),
      (e.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows &&
          ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
            (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
            e.slideCount > e.options.slidesToShow
              ? (e.$prevArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
                e.$nextArrow
                  .removeClass("slick-hidden")
                  .removeAttr("aria-hidden tabindex"),
                e.htmlExpr.test(e.options.prevArrow) &&
                e.$prevArrow.prependTo(e.options.appendArrows),
                e.htmlExpr.test(e.options.nextArrow) &&
                e.$nextArrow.appendTo(e.options.appendArrows),
                !0 !== e.options.infinite &&
                e.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"))
              : e.$prevArrow
                .add(e.$nextArrow)
                .addClass("slick-hidden")
                .attr({ "aria-disabled": "true", tabindex: "-1" }));
      }),
      (e.prototype.buildDots = function () {
        var e,
          t,
          o = this;
        if (!0 === o.options.dots) {
          for (
            o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0;
            e <= o.getDotCount();
            e += 1
          )
            t.append(
              i("<li />").append(o.options.customPaging.call(this, o, e))
            );
          (o.$dots = t.appendTo(o.options.appendDots)),
            o.$dots.find("li").first().addClass("slick-active");
        }
      }),
      (e.prototype.buildOut = function () {
        var e = this;
        (e.$slides = e.$slider
          .children(e.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (e.slideCount = e.$slides.length),
          e.$slides.each(function (e, t) {
            i(t)
              .attr("data-slick-index", e)
              .data("originalStyling", i(t).attr("style") || "");
          }),
          e.$slider.addClass("slick-slider"),
          (e.$slideTrack =
            0 === e.slideCount
              ? i('<div class="slick-track"/>').appendTo(e.$slider)
              : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
          e.$slideTrack.css("opacity", 0),
          (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
          (e.options.slidesToScroll = 1),
          i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
          e.setupInfinite(),
          e.buildArrows(),
          e.buildDots(),
          e.updateDots(),
          e.setSlideClasses(
            "number" == typeof e.currentSlide ? e.currentSlide : 0
          ),
          !0 === e.options.draggable && e.$list.addClass("draggable");
      }),
      (e.prototype.buildRows = function () {
        var i,
          e,
          t,
          o,
          s,
          n,
          r,
          l = this;
        if (
          ((o = document.createDocumentFragment()),
            (n = l.$slider.children()),
            l.options.rows > 1)
        ) {
          for (
            r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
            i < s;
            i++
          ) {
            var d = document.createElement("div");
            for (e = 0; e < l.options.rows; e++) {
              var a = document.createElement("div");
              for (t = 0; t < l.options.slidesPerRow; t++) {
                var c = i * r + (e * l.options.slidesPerRow + t);
                n.get(c) && a.appendChild(n.get(c));
              }
              d.appendChild(a);
            }
            o.appendChild(d);
          }
          l.$slider.empty().append(o),
            l.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block",
              });
        }
      }),
      (e.prototype.checkResponsive = function (e, t) {
        var o,
          s,
          n,
          r = this,
          l = !1,
          d = r.$slider.width(),
          a = window.innerWidth || i(window).width();
        if (
          ("window" === r.respondTo
            ? (n = a)
            : "slider" === r.respondTo
              ? (n = d)
              : "min" === r.respondTo && (n = Math.min(a, d)),
            r.options.responsive &&
            r.options.responsive.length &&
            null !== r.options.responsive)
        ) {
          s = null;
          for (o in r.breakpoints)
            r.breakpoints.hasOwnProperty(o) &&
              (!1 === r.originalSettings.mobileFirst
                ? n < r.breakpoints[o] && (s = r.breakpoints[o])
                : n > r.breakpoints[o] && (s = r.breakpoints[o]));
          null !== s
            ? null !== r.activeBreakpoint
              ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
                "unslick" === r.breakpointSettings[s]
                  ? r.unslick(s)
                  : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                    !0 === e && (r.currentSlide = r.options.initialSlide),
                    r.refresh(e)),
                (l = s))
              : ((r.activeBreakpoint = s),
                "unslick" === r.breakpointSettings[s]
                  ? r.unslick(s)
                  : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                    !0 === e && (r.currentSlide = r.options.initialSlide),
                    r.refresh(e)),
                (l = s))
            : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
              (r.options = r.originalSettings),
              !0 === e && (r.currentSlide = r.options.initialSlide),
              r.refresh(e),
              (l = s)),
            e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
        }
      }),
      (e.prototype.changeSlide = function (e, t) {
        var o,
          s,
          n,
          r = this,
          l = i(e.currentTarget);
        switch (
        (l.is("a") && e.preventDefault(),
          l.is("li") || (l = l.closest("li")),
          (n = r.slideCount % r.options.slidesToScroll != 0),
          (o = n
            ? 0
            : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
          e.data.message)
        ) {
          case "previous":
            (s =
              0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
              r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide - s, !1, t);
            break;
          case "next":
            (s = 0 === o ? r.options.slidesToScroll : o),
              r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide + s, !1, t);
            break;
          case "index":
            var d =
              0 === e.data.index
                ? 0
                : e.data.index || l.index() * r.options.slidesToScroll;
            r.slideHandler(r.checkNavigable(d), !1, t),
              l.children().trigger("focus");
            break;
          default:
            return;
        }
      }),
      (e.prototype.checkNavigable = function (i) {
        var e, t;
        if (((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
          i = e[e.length - 1];
        else
          for (var o in e) {
            if (i < e[o]) {
              i = t;
              break;
            }
            t = e[o];
          }
        return i;
      }),
      (e.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots &&
          null !== e.$dots &&
          (i("li", e.$dots)
            .off("click.slick", e.changeSlide)
            .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
            .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
            !0 === e.options.accessibility &&
            e.$dots.off("keydown.slick", e.keyHandler)),
          e.$slider.off("focus.slick blur.slick"),
          !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
            e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
            !0 === e.options.accessibility &&
            (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
              e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
          e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
          e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
          e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
          e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
          e.$list.off("click.slick", e.clickHandler),
          i(document).off(e.visibilityChange, e.visibility),
          e.cleanUpSlideEvents(),
          !0 === e.options.accessibility &&
          e.$list.off("keydown.slick", e.keyHandler),
          !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().off("click.slick", e.selectHandler),
          i(window).off(
            "orientationchange.slick.slick-" + e.instanceUid,
            e.orientationChange
          ),
          i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
          i("[draggable!=true]", e.$slideTrack).off(
            "dragstart",
            e.preventDefault
          ),
          i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
      }),
      (e.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
          e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
      }),
      (e.prototype.cleanUpRows = function () {
        var i,
          e = this;
        e.options.rows > 1 &&
          ((i = e.$slides.children().children()).removeAttr("style"),
            e.$slider.empty().append(i));
      }),
      (e.prototype.clickHandler = function (i) {
        !1 === this.shouldClick &&
          (i.stopImmediatePropagation(),
            i.stopPropagation(),
            i.preventDefault());
      }),
      (e.prototype.destroy = function (e) {
        var t = this;
        t.autoPlayClear(),
          (t.touchObject = {}),
          t.cleanUpEvents(),
          i(".slick-cloned", t.$slider).detach(),
          t.$dots && t.$dots.remove(),
          t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
            t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
          t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
            t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
          t.$slides &&
          (t.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              i(this).attr("style", i(this).data("originalStyling"));
            }),
            t.$slideTrack.children(this.options.slide).detach(),
            t.$slideTrack.detach(),
            t.$list.detach(),
            t.$slider.append(t.$slides)),
          t.cleanUpRows(),
          t.$slider.removeClass("slick-slider"),
          t.$slider.removeClass("slick-initialized"),
          t.$slider.removeClass("slick-dotted"),
          (t.unslicked = !0),
          e || t.$slider.trigger("destroy", [t]);
      }),
      (e.prototype.disableTransition = function (i) {
        var e = this,
          t = {};
        (t[e.transitionType] = ""),
          !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
      }),
      (e.prototype.fadeSlide = function (i, e) {
        var t = this;
        !1 === t.cssTransitions
          ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
            t.$slides
              .eq(i)
              .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
          : (t.applyTransition(i),
            t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
            e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
      }),
      (e.prototype.fadeSlideOut = function (i) {
        var e = this;
        !1 === e.cssTransitions
          ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
          : (e.applyTransition(i),
            e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
      }),
      (e.prototype.filterSlides = e.prototype.slickFilter =
        function (i) {
          var e = this;
          null !== i &&
            ((e.$slidesCache = e.$slides),
              e.unload(),
              e.$slideTrack.children(this.options.slide).detach(),
              e.$slidesCache.filter(i).appendTo(e.$slideTrack),
              e.reinit());
        }),
      (e.prototype.focusHandler = function () {
        var e = this;
        e.$slider
          .off("focus.slick blur.slick")
          .on("focus.slick blur.slick", "*", function (t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function () {
              e.options.pauseOnFocus &&
                ((e.focussed = o.is(":focus")), e.autoPlay());
            }, 0);
          });
      }),
      (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
        function () {
          return this.currentSlide;
        }),
      (e.prototype.getDotCount = function () {
        var i = this,
          e = 0,
          t = 0,
          o = 0;
        if (!0 === i.options.infinite)
          if (i.slideCount <= i.options.slidesToShow) ++o;
          else
            for (; e < i.slideCount;)
              ++o,
                (e = t + i.options.slidesToScroll),
                (t +=
                  i.options.slidesToScroll <= i.options.slidesToShow
                    ? i.options.slidesToScroll
                    : i.options.slidesToShow);
        else if (!0 === i.options.centerMode) o = i.slideCount;
        else if (i.options.asNavFor)
          for (; e < i.slideCount;)
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
        else
          o =
            1 +
            Math.ceil(
              (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
            );
        return o - 1;
      }),
      (e.prototype.getLeft = function (i) {
        var e,
          t,
          o,
          s,
          n = this,
          r = 0;
        return (
          (n.slideOffset = 0),
          (t = n.$slides.first().outerHeight(!0)),
          !0 === n.options.infinite
            ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
                (s = -1),
                !0 === n.options.vertical &&
                !0 === n.options.centerMode &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
                (r = t * n.options.slidesToShow * s)),
              n.slideCount % n.options.slidesToScroll != 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset =
                  (n.options.slidesToShow - (i - n.slideCount)) *
                  n.slideWidth *
                  -1),
                  (r =
                    (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                  (n.slideCount % n.options.slidesToScroll) *
                  n.slideWidth *
                  -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
            : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
              (r = (i + n.options.slidesToShow - n.slideCount) * t)),
          n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
          !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
            ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
            : !0 === n.options.centerMode && !0 === n.options.infinite
              ? (n.slideOffset +=
                n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
                n.slideWidth)
              : !0 === n.options.centerMode &&
              ((n.slideOffset = 0),
                (n.slideOffset +=
                  n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
          (e =
            !1 === n.options.vertical
              ? i * n.slideWidth * -1 + n.slideOffset
              : i * t * -1 + r),
          !0 === n.options.variableWidth &&
          ((o =
            n.slideCount <= n.options.slidesToShow ||
              !1 === n.options.infinite
              ? n.$slideTrack.children(".slick-slide").eq(i)
              : n.$slideTrack
                .children(".slick-slide")
                .eq(i + n.options.slidesToShow)),
            (e =
              !0 === n.options.rtl
                ? o[0]
                  ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                  : 0
                : o[0]
                  ? -1 * o[0].offsetLeft
                  : 0),
            !0 === n.options.centerMode &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
                !1 === n.options.infinite
                ? n.$slideTrack.children(".slick-slide").eq(i)
                : n.$slideTrack
                  .children(".slick-slide")
                  .eq(i + n.options.slidesToShow + 1)),
              (e =
                !0 === n.options.rtl
                  ? o[0]
                    ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                    : 0
                  : o[0]
                    ? -1 * o[0].offsetLeft
                    : 0),
              (e += (n.$list.width() - o.outerWidth()) / 2))),
          e
        );
      }),
      (e.prototype.getOption = e.prototype.slickGetOption =
        function (i) {
          return this.options[i];
        }),
      (e.prototype.getNavigableIndexes = function () {
        var i,
          e = this,
          t = 0,
          o = 0,
          s = [];
        for (
          !1 === e.options.infinite
            ? (i = e.slideCount)
            : ((t = -1 * e.options.slidesToScroll),
              (o = -1 * e.options.slidesToScroll),
              (i = 2 * e.slideCount));
          t < i;

        )
          s.push(t),
            (t = o + e.options.slidesToScroll),
            (o +=
              e.options.slidesToScroll <= e.options.slidesToShow
                ? e.options.slidesToScroll
                : e.options.slidesToShow);
        return s;
      }),
      (e.prototype.getSlick = function () {
        return this;
      }),
      (e.prototype.getSlideCount = function () {
        var e,
          t,
          o = this;
        return (
          (t =
            !0 === o.options.centerMode
              ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
              : 0),
          !0 === o.options.swipeToSlide
            ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
              if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return (e = n), !1;
            }),
              Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1)
            : o.options.slidesToScroll
        );
      }),
      (e.prototype.goTo = e.prototype.slickGoTo =
        function (i, e) {
          this.changeSlide(
            { data: { message: "index", index: parseInt(i) } },
            e
          );
        }),
      (e.prototype.init = function (e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") ||
          (i(t.$slider).addClass("slick-initialized"),
            t.buildRows(),
            t.buildOut(),
            t.setProps(),
            t.startLoad(),
            t.loadSlider(),
            t.initializeEvents(),
            t.updateArrows(),
            t.updateDots(),
            t.checkResponsive(!0),
            t.focusHandler()),
          e && t.$slider.trigger("init", [t]),
          !0 === t.options.accessibility && t.initADA(),
          t.options.autoplay && ((t.paused = !1), t.autoPlay());
      }),
      (e.prototype.initADA = function () {
        var e = this,
          t = Math.ceil(e.slideCount / e.options.slidesToShow),
          o = e.getNavigableIndexes().filter(function (i) {
            return i >= 0 && i < e.slideCount;
          });
        e.$slides
          .add(e.$slideTrack.find(".slick-cloned"))
          .attr({ "aria-hidden": "true", tabindex: "-1" })
          .find("a, input, button, select")
          .attr({ tabindex: "-1" }),
          null !== e.$dots &&
          (e.$slides
            .not(e.$slideTrack.find(".slick-cloned"))
            .each(function (t) {
              var s = o.indexOf(t);
              i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1,
              }),
                -1 !== s &&
                i(this).attr({
                  "aria-describedby":
                    "slick-slide-control" + e.instanceUid + s,
                });
            }),
            e.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (s) {
                var n = o[s];
                i(this).attr({ role: "presentation" }),
                  i(this)
                    .find("button")
                    .first()
                    .attr({
                      role: "tab",
                      id: "slick-slide-control" + e.instanceUid + s,
                      "aria-controls": "slick-slide" + e.instanceUid + n,
                      "aria-label": s + 1 + " of " + t,
                      "aria-selected": null,
                      tabindex: "-1",
                    });
              })
              .eq(e.currentSlide)
              .find("button")
              .attr({ "aria-selected": "true", tabindex: "0" })
              .end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
          e.$slides.eq(s).attr("tabindex", 0);
        e.activateADA();
      }),
      (e.prototype.initArrowEvents = function () {
        var i = this;
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          (i.$prevArrow
            .off("click.slick")
            .on("click.slick", { message: "previous" }, i.changeSlide),
            i.$nextArrow
              .off("click.slick")
              .on("click.slick", { message: "next" }, i.changeSlide),
            !0 === i.options.accessibility &&
            (i.$prevArrow.on("keydown.slick", i.keyHandler),
              i.$nextArrow.on("keydown.slick", i.keyHandler)));
      }),
      (e.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots &&
          (i("li", e.$dots).on(
            "click.slick",
            { message: "index" },
            e.changeSlide
          ),
            !0 === e.options.accessibility &&
            e.$dots.on("keydown.slick", e.keyHandler)),
          !0 === e.options.dots &&
          !0 === e.options.pauseOnDotsHover &&
          i("li", e.$dots)
            .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
            .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
      }),
      (e.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover &&
          (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
            e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
      }),
      (e.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(),
          e.initDotEvents(),
          e.initSlideEvents(),
          e.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            e.swipeHandler
          ),
          e.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            e.swipeHandler
          ),
          e.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            e.swipeHandler
          ),
          e.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            e.swipeHandler
          ),
          e.$list.on("click.slick", e.clickHandler),
          i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
          !0 === e.options.accessibility &&
          e.$list.on("keydown.slick", e.keyHandler),
          !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
          i(window).on(
            "orientationchange.slick.slick-" + e.instanceUid,
            i.proxy(e.orientationChange, e)
          ),
          i(window).on(
            "resize.slick.slick-" + e.instanceUid,
            i.proxy(e.resize, e)
          ),
          i("[draggable!=true]", e.$slideTrack).on(
            "dragstart",
            e.preventDefault
          ),
          i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
          i(e.setPosition);
      }),
      (e.prototype.initUI = function () {
        var i = this;
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          (i.$prevArrow.show(), i.$nextArrow.show()),
          !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show();
      }),
      (e.prototype.keyHandler = function (i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === i.keyCode && !0 === e.options.accessibility
            ? e.changeSlide({
              data: { message: !0 === e.options.rtl ? "next" : "previous" },
            })
            : 39 === i.keyCode &&
            !0 === e.options.accessibility &&
            e.changeSlide({
              data: { message: !0 === e.options.rtl ? "previous" : "next" },
            }));
      }),
      (e.prototype.lazyLoad = function () {
        function e(e) {
          i("img[data-lazy]", e).each(function () {
            var e = i(this),
              t = i(this).attr("data-lazy"),
              o = i(this).attr("data-srcset"),
              s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
              r = document.createElement("img");
            (r.onload = function () {
              e.animate({ opacity: 0 }, 100, function () {
                o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                  e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                    e.removeAttr(
                      "data-lazy data-srcset data-sizes"
                    ).removeClass("slick-loading");
                  }),
                  n.$slider.trigger("lazyLoaded", [n, e, t]);
              });
            }),
              (r.onerror = function () {
                e
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  n.$slider.trigger("lazyLoadError", [n, e, t]);
              }),
              (r.src = t);
          });
        }
        var t,
          o,
          s,
          n = this;
        if (
          (!0 === n.options.centerMode
            ? !0 === n.options.infinite
              ? (s =
                (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) +
                n.options.slidesToShow +
                2)
              : ((o = Math.max(
                0,
                n.currentSlide - (n.options.slidesToShow / 2 + 1)
              )),
                (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
            : ((o = n.options.infinite
              ? n.options.slidesToShow + n.currentSlide
              : n.currentSlide),
              (s = Math.ceil(o + n.options.slidesToShow)),
              !0 === n.options.fade &&
              (o > 0 && o--, s <= n.slideCount && s++)),
            (t = n.$slider.find(".slick-slide").slice(o, s)),
            "anticipated" === n.options.lazyLoad)
        )
          for (
            var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0;
            a < n.options.slidesToScroll;
            a++
          )
            r < 0 && (r = n.slideCount - 1),
              (t = (t = t.add(d.eq(r))).add(d.eq(l))),
              r--,
              l++;
        e(t),
          n.slideCount <= n.options.slidesToShow
            ? e(n.$slider.find(".slick-slide"))
            : n.currentSlide >= n.slideCount - n.options.slidesToShow
              ? e(
                n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)
              )
              : 0 === n.currentSlide &&
              e(
                n.$slider
                  .find(".slick-cloned")
                  .slice(-1 * n.options.slidesToShow)
              );
      }),
      (e.prototype.loadSlider = function () {
        var i = this;
        i.setPosition(),
          i.$slideTrack.css({ opacity: 1 }),
          i.$slider.removeClass("slick-loading"),
          i.initUI(),
          "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
      }),
      (e.prototype.next = e.prototype.slickNext =
        function () {
          this.changeSlide({ data: { message: "next" } });
        }),
      (e.prototype.orientationChange = function () {
        var i = this;
        i.checkResponsive(), i.setPosition();
      }),
      (e.prototype.pause = e.prototype.slickPause =
        function () {
          var i = this;
          i.autoPlayClear(), (i.paused = !0);
        }),
      (e.prototype.play = e.prototype.slickPlay =
        function () {
          var i = this;
          i.autoPlay(),
            (i.options.autoplay = !0),
            (i.paused = !1),
            (i.focussed = !1),
            (i.interrupted = !1);
        }),
      (e.prototype.postSlide = function (e) {
        var t = this;
        t.unslicked ||
          (t.$slider.trigger("afterChange", [t, e]),
            (t.animating = !1),
            t.slideCount > t.options.slidesToShow && t.setPosition(),
            (t.swipeLeft = null),
            t.options.autoplay && t.autoPlay(),
            !0 === t.options.accessibility &&
            (t.initADA(),
              t.options.focusOnChange &&
              i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
      }),
      (e.prototype.prev = e.prototype.slickPrev =
        function () {
          this.changeSlide({ data: { message: "previous" } });
        }),
      (e.prototype.preventDefault = function (i) {
        i.preventDefault();
      }),
      (e.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var t,
          o,
          s,
          n,
          r,
          l = this,
          d = i("img[data-lazy]", l.$slider);
        d.length
          ? ((t = d.first()),
            (o = t.attr("data-lazy")),
            (s = t.attr("data-srcset")),
            (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
            ((r = document.createElement("img")).onload = function () {
              s && (t.attr("srcset", s), n && t.attr("sizes", n)),
                t
                  .attr("src", o)
                  .removeAttr("data-lazy data-srcset data-sizes")
                  .removeClass("slick-loading"),
                !0 === l.options.adaptiveHeight && l.setPosition(),
                l.$slider.trigger("lazyLoaded", [l, t, o]),
                l.progressiveLazyLoad();
            }),
            (r.onerror = function () {
              e < 3
                ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
                : (t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  l.$slider.trigger("lazyLoadError", [l, t, o]),
                  l.progressiveLazyLoad());
            }),
            (r.src = o))
          : l.$slider.trigger("allImagesLoaded", [l]);
      }),
      (e.prototype.refresh = function (e) {
        var t,
          o,
          s = this;
        (o = s.slideCount - s.options.slidesToShow),
          !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
          s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
          (t = s.currentSlide),
          s.destroy(!0),
          i.extend(s, s.initials, { currentSlide: t }),
          s.init(),
          e || s.changeSlide({ data: { message: "index", index: t } }, !1);
      }),
      (e.prototype.registerBreakpoints = function () {
        var e,
          t,
          o,
          s = this,
          n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
          s.respondTo = s.options.respondTo || "window";
          for (e in n)
            if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
              for (t = n[e].breakpoint; o >= 0;)
                s.breakpoints[o] &&
                  s.breakpoints[o] === t &&
                  s.breakpoints.splice(o, 1),
                  o--;
              s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
            }
          s.breakpoints.sort(function (i, e) {
            return s.options.mobileFirst ? i - e : e - i;
          });
        }
      }),
      (e.prototype.reinit = function () {
        var e = this;
        (e.$slides = e.$slideTrack
          .children(e.options.slide)
          .addClass("slick-slide")),
          (e.slideCount = e.$slides.length),
          e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
          e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
          e.registerBreakpoints(),
          e.setProps(),
          e.setupInfinite(),
          e.buildArrows(),
          e.updateArrows(),
          e.initArrowEvents(),
          e.buildDots(),
          e.updateDots(),
          e.initDotEvents(),
          e.cleanUpSlideEvents(),
          e.initSlideEvents(),
          e.checkResponsive(!1, !0),
          !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
          e.setSlideClasses(
            "number" == typeof e.currentSlide ? e.currentSlide : 0
          ),
          e.setPosition(),
          e.focusHandler(),
          (e.paused = !e.options.autoplay),
          e.autoPlay(),
          e.$slider.trigger("reInit", [e]);
      }),
      (e.prototype.resize = function () {
        var e = this;
        i(window).width() !== e.windowWidth &&
          (clearTimeout(e.windowDelay),
            (e.windowDelay = window.setTimeout(function () {
              (e.windowWidth = i(window).width()),
                e.checkResponsive(),
                e.unslicked || e.setPosition();
            }, 50)));
      }),
      (e.prototype.removeSlide = e.prototype.slickRemove =
        function (i, e, t) {
          var o = this;
          if (
            ((i =
              "boolean" == typeof i
                ? !0 === (e = i)
                  ? 0
                  : o.slideCount - 1
                : !0 === e
                  ? --i
                  : i),
              o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
          )
            return !1;
          o.unload(),
            !0 === t
              ? o.$slideTrack.children().remove()
              : o.$slideTrack.children(this.options.slide).eq(i).remove(),
            (o.$slides = o.$slideTrack.children(this.options.slide)),
            o.$slideTrack.children(this.options.slide).detach(),
            o.$slideTrack.append(o.$slides),
            (o.$slidesCache = o.$slides),
            o.reinit();
        }),
      (e.prototype.setCSS = function (i) {
        var e,
          t,
          o = this,
          s = {};
        !0 === o.options.rtl && (i = -i),
          (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
          (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
          (s[o.positionProp] = i),
          !1 === o.transformsEnabled
            ? o.$slideTrack.css(s)
            : ((s = {}),
              !1 === o.cssTransitions
                ? ((s[o.animType] = "translate(" + e + ", " + t + ")"),
                  o.$slideTrack.css(s))
                : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
                  o.$slideTrack.css(s)));
      }),
      (e.prototype.setDimensions = function () {
        var i = this;
        !1 === i.options.vertical
          ? !0 === i.options.centerMode &&
          i.$list.css({ padding: "0px " + i.options.centerPadding })
          : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
            !0 === i.options.centerMode &&
            i.$list.css({ padding: i.options.centerPadding + " 0px" })),
          (i.listWidth = i.$list.width()),
          (i.listHeight = i.$list.height()),
          !1 === i.options.vertical && !1 === i.options.variableWidth
            ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
              i.$slideTrack.width(
                Math.ceil(
                  i.slideWidth * i.$slideTrack.children(".slick-slide").length
                )
              ))
            : !0 === i.options.variableWidth
              ? i.$slideTrack.width(5e3 * i.slideCount)
              : ((i.slideWidth = Math.ceil(i.listWidth)),
                i.$slideTrack.height(
                  Math.ceil(
                    i.$slides.first().outerHeight(!0) *
                    i.$slideTrack.children(".slick-slide").length
                  )
                ));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth &&
          i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
      }),
      (e.prototype.setFade = function () {
        var e,
          t = this;
        t.$slides.each(function (o, s) {
          (e = t.slideWidth * o * -1),
            !0 === t.options.rtl
              ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
              : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              });
        }),
          t.$slides
            .eq(t.currentSlide)
            .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
      }),
      (e.prototype.setHeight = function () {
        var i = this;
        if (
          1 === i.options.slidesToShow &&
          !0 === i.options.adaptiveHeight &&
          !1 === i.options.vertical
        ) {
          var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
          i.$list.css("height", e);
        }
      }),
      (e.prototype.setOption = e.prototype.slickSetOption =
        function () {
          var e,
            t,
            o,
            s,
            n,
            r = this,
            l = !1;
          if (
            ("object" === i.type(arguments[0])
              ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
              : "string" === i.type(arguments[0]) &&
              ((o = arguments[0]),
                (s = arguments[1]),
                (l = arguments[2]),
                "responsive" === arguments[0] &&
                  "array" === i.type(arguments[1])
                  ? (n = "responsive")
                  : void 0 !== arguments[1] && (n = "single")),
              "single" === n)
          )
            r.options[o] = s;
          else if ("multiple" === n)
            i.each(o, function (i, e) {
              r.options[i] = e;
            });
          else if ("responsive" === n)
            for (t in s)
              if ("array" !== i.type(r.options.responsive))
                r.options.responsive = [s[t]];
              else {
                for (e = r.options.responsive.length - 1; e >= 0;)
                  r.options.responsive[e].breakpoint === s[t].breakpoint &&
                    r.options.responsive.splice(e, 1),
                    e--;
                r.options.responsive.push(s[t]);
              }
          l && (r.unload(), r.reinit());
        }),
      (e.prototype.setPosition = function () {
        var i = this;
        i.setDimensions(),
          i.setHeight(),
          !1 === i.options.fade
            ? i.setCSS(i.getLeft(i.currentSlide))
            : i.setFade(),
          i.$slider.trigger("setPosition", [i]);
      }),
      (e.prototype.setProps = function () {
        var i = this,
          e = document.body.style;
        (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
          "top" === i.positionProp
            ? i.$slider.addClass("slick-vertical")
            : i.$slider.removeClass("slick-vertical"),
          (void 0 === e.WebkitTransition &&
            void 0 === e.MozTransition &&
            void 0 === e.msTransition) ||
          (!0 === i.options.useCSS && (i.cssTransitions = !0)),
          i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
          void 0 !== e.OTransform &&
          ((i.animType = "OTransform"),
            (i.transformType = "-o-transform"),
            (i.transitionType = "OTransition"),
            void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
          void 0 !== e.MozTransform &&
          ((i.animType = "MozTransform"),
            (i.transformType = "-moz-transform"),
            (i.transitionType = "MozTransition"),
            void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
          void 0 !== e.webkitTransform &&
          ((i.animType = "webkitTransform"),
            (i.transformType = "-webkit-transform"),
            (i.transitionType = "webkitTransition"),
            void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
          void 0 !== e.msTransform &&
          ((i.animType = "msTransform"),
            (i.transformType = "-ms-transform"),
            (i.transitionType = "msTransition"),
            void 0 === e.msTransform && (i.animType = !1)),
          void 0 !== e.transform &&
          !1 !== i.animType &&
          ((i.animType = "transform"),
            (i.transformType = "transform"),
            (i.transitionType = "transition")),
          (i.transformsEnabled =
            i.options.useTransform && null !== i.animType && !1 !== i.animType);
      }),
      (e.prototype.setSlideClasses = function (i) {
        var e,
          t,
          o,
          s,
          n = this;
        if (
          ((t = n.$slider
            .find(".slick-slide")
            .removeClass("slick-active slick-center slick-current")
            .attr("aria-hidden", "true")),
            n.$slides.eq(i).addClass("slick-current"),
            !0 === n.options.centerMode)
        ) {
          var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
          (e = Math.floor(n.options.slidesToShow / 2)),
            !0 === n.options.infinite &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                .slice(i - e + r, i + e + 1)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
              0 === i
                ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass("slick-center")
                : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass("slick-center")),
            n.$slides.eq(i).addClass("slick-center");
        } else
          i >= 0 && i <= n.slideCount - n.options.slidesToShow
            ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
            : t.length <= n.options.slidesToShow
              ? t.addClass("slick-active").attr("aria-hidden", "false")
              : ((s = n.slideCount % n.options.slidesToShow),
                (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
                n.options.slidesToShow == n.options.slidesToScroll &&
                  n.slideCount - i < n.options.slidesToShow
                  ? t
                    .slice(o - (n.options.slidesToShow - s), o + s)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                  : t
                    .slice(o, o + n.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false"));
        ("ondemand" !== n.options.lazyLoad &&
          "anticipated" !== n.options.lazyLoad) ||
          n.lazyLoad();
      }),
      (e.prototype.setupInfinite = function () {
        var e,
          t,
          o,
          s = this;
        if (
          (!0 === s.options.fade && (s.options.centerMode = !1),
            !0 === s.options.infinite &&
            !1 === s.options.fade &&
            ((t = null), s.slideCount > s.options.slidesToShow))
        ) {
          for (
            o =
            !0 === s.options.centerMode
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
            e > s.slideCount - o;
            e -= 1
          )
            (t = e - 1),
              i(s.$slides[t])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", t - s.slideCount)
                .prependTo(s.$slideTrack)
                .addClass("slick-cloned");
          for (e = 0; e < o + s.slideCount; e += 1)
            (t = e),
              i(s.$slides[t])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", t + s.slideCount)
                .appendTo(s.$slideTrack)
                .addClass("slick-cloned");
          s.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              i(this).attr("id", "");
            });
        }
      }),
      (e.prototype.interrupt = function (i) {
        var e = this;
        i || e.autoPlay(), (e.interrupted = i);
      }),
      (e.prototype.selectHandler = function (e) {
        var t = this,
          o = i(e.target).is(".slick-slide")
            ? i(e.target)
            : i(e.target).parents(".slick-slide"),
          s = parseInt(o.attr("data-slick-index"));
        s || (s = 0),
          t.slideCount <= t.options.slidesToShow
            ? t.slideHandler(s, !1, !0)
            : t.slideHandler(s);
      }),
      (e.prototype.slideHandler = function (i, e, t) {
        var o,
          s,
          n,
          r,
          l,
          d = null,
          a = this;
        if (
          ((e = e || !1),
            !(
              (!0 === a.animating && !0 === a.options.waitForAnimate) ||
              (!0 === a.options.fade && a.currentSlide === i)
            ))
        )
          if (
            (!1 === e && a.asNavFor(i),
              (o = i),
              (d = a.getLeft(o)),
              (r = a.getLeft(a.currentSlide)),
              (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
              !1 === a.options.infinite &&
              !1 === a.options.centerMode &&
              (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
          )
            !1 === a.options.fade &&
              ((o = a.currentSlide),
                !0 !== t
                  ? a.animateSlide(r, function () {
                    a.postSlide(o);
                  })
                  : a.postSlide(o));
          else if (
            !1 === a.options.infinite &&
            !0 === a.options.centerMode &&
            (i < 0 || i > a.slideCount - a.options.slidesToScroll)
          )
            !1 === a.options.fade &&
              ((o = a.currentSlide),
                !0 !== t
                  ? a.animateSlide(r, function () {
                    a.postSlide(o);
                  })
                  : a.postSlide(o));
          else {
            if (
              (a.options.autoplay && clearInterval(a.autoPlayTimer),
                (s =
                  o < 0
                    ? a.slideCount % a.options.slidesToScroll != 0
                      ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                      : a.slideCount + o
                    : o >= a.slideCount
                      ? a.slideCount % a.options.slidesToScroll != 0
                        ? 0
                        : o - a.slideCount
                      : o),
                (a.animating = !0),
                a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
                (n = a.currentSlide),
                (a.currentSlide = s),
                a.setSlideClasses(a.currentSlide),
                a.options.asNavFor &&
                (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <=
                l.options.slidesToShow &&
                l.setSlideClasses(a.currentSlide),
                a.updateDots(),
                a.updateArrows(),
                !0 === a.options.fade)
            )
              return (
                !0 !== t
                  ? (a.fadeSlideOut(n),
                    a.fadeSlide(s, function () {
                      a.postSlide(s);
                    }))
                  : a.postSlide(s),
                void a.animateHeight()
              );
            !0 !== t
              ? a.animateSlide(d, function () {
                a.postSlide(s);
              })
              : a.postSlide(s);
          }
      }),
      (e.prototype.startLoad = function () {
        var i = this;
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          (i.$prevArrow.hide(), i.$nextArrow.hide()),
          !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
          i.$slider.addClass("slick-loading");
      }),
      (e.prototype.swipeDirection = function () {
        var i,
          e,
          t,
          o,
          s = this;
        return (
          (i = s.touchObject.startX - s.touchObject.curX),
          (e = s.touchObject.startY - s.touchObject.curY),
          (t = Math.atan2(e, i)),
          (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
          o <= 45 && o >= 0
            ? !1 === s.options.rtl
              ? "left"
              : "right"
            : o <= 360 && o >= 315
              ? !1 === s.options.rtl
                ? "left"
                : "right"
              : o >= 135 && o <= 225
                ? !1 === s.options.rtl
                  ? "right"
                  : "left"
                : !0 === s.options.verticalSwiping
                  ? o >= 35 && o <= 135
                    ? "down"
                    : "up"
                  : "vertical"
        );
      }),
      (e.prototype.swipeEnd = function (i) {
        var e,
          t,
          o = this;
        if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
          return (o.scrolling = !1), !1;
        if (
          ((o.interrupted = !1),
            (o.shouldClick = !(o.touchObject.swipeLength > 10)),
            void 0 === o.touchObject.curX)
        )
          return !1;
        if (
          (!0 === o.touchObject.edgeHit &&
            o.$slider.trigger("edge", [o, o.swipeDirection()]),
            o.touchObject.swipeLength >= o.touchObject.minSwipe)
        ) {
          switch ((t = o.swipeDirection())) {
            case "left":
            case "down":
              (e = o.options.swipeToSlide
                ? o.checkNavigable(o.currentSlide + o.getSlideCount())
                : o.currentSlide + o.getSlideCount()),
                (o.currentDirection = 0);
              break;
            case "right":
            case "up":
              (e = o.options.swipeToSlide
                ? o.checkNavigable(o.currentSlide - o.getSlideCount())
                : o.currentSlide - o.getSlideCount()),
                (o.currentDirection = 1);
          }
          "vertical" != t &&
            (o.slideHandler(e),
              (o.touchObject = {}),
              o.$slider.trigger("swipe", [o, t]));
        } else
          o.touchObject.startX !== o.touchObject.curX &&
            (o.slideHandler(o.currentSlide), (o.touchObject = {}));
      }),
      (e.prototype.swipeHandler = function (i) {
        var e = this;
        if (
          !(
            !1 === e.options.swipe ||
            ("ontouchend" in document && !1 === e.options.swipe) ||
            (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))
          )
        )
          switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
            (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
            !0 === e.options.verticalSwiping &&
            (e.touchObject.minSwipe =
              e.listHeight / e.options.touchThreshold),
            i.data.action)
          ) {
            case "start":
              e.swipeStart(i);
              break;
            case "move":
              e.swipeMove(i);
              break;
            case "end":
              e.swipeEnd(i);
          }
      }),
      (e.prototype.swipeMove = function (i) {
        var e,
          t,
          o,
          s,
          n,
          r,
          l = this;
        return (
          (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
          !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
            (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
            (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
            (l.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
            )),
            (r = Math.round(
              Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
            )),
            !l.options.verticalSwiping && !l.swiping && r > 4
              ? ((l.scrolling = !0), !1)
              : (!0 === l.options.verticalSwiping &&
                (l.touchObject.swipeLength = r),
                (t = l.swipeDirection()),
                void 0 !== i.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), i.preventDefault()),
                (s =
                  (!1 === l.options.rtl ? 1 : -1) *
                  (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
                !0 === l.options.verticalSwiping &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
                (o = l.touchObject.swipeLength),
                (l.touchObject.edgeHit = !1),
                !1 === l.options.infinite &&
                ((0 === l.currentSlide && "right" === t) ||
                  (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                  (l.touchObject.edgeHit = !0)),
                !1 === l.options.vertical
                  ? (l.swipeLeft = e + o * s)
                  : (l.swipeLeft =
                    e + o * (l.$list.height() / l.listWidth) * s),
                !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
                !0 !== l.options.fade &&
                !1 !== l.options.touchMove &&
                (!0 === l.animating
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
        );
      }),
      (e.prototype.swipeStart = function (i) {
        var e,
          t = this;
        if (
          ((t.interrupted = !0),
            1 !== t.touchObject.fingerCount ||
            t.slideCount <= t.options.slidesToShow)
        )
          return (t.touchObject = {}), !1;
        void 0 !== i.originalEvent &&
          void 0 !== i.originalEvent.touches &&
          (e = i.originalEvent.touches[0]),
          (t.touchObject.startX = t.touchObject.curX =
            void 0 !== e ? e.pageX : i.clientX),
          (t.touchObject.startY = t.touchObject.curY =
            void 0 !== e ? e.pageY : i.clientY),
          (t.dragging = !0);
      }),
      (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
        function () {
          var i = this;
          null !== i.$slidesCache &&
            (i.unload(),
              i.$slideTrack.children(this.options.slide).detach(),
              i.$slidesCache.appendTo(i.$slideTrack),
              i.reinit());
        }),
      (e.prototype.unload = function () {
        var e = this;
        i(".slick-cloned", e.$slider).remove(),
          e.$dots && e.$dots.remove(),
          e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
          e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
          e.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
      }),
      (e.prototype.unslick = function (i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]), e.destroy();
      }),
      (e.prototype.updateArrows = function () {
        var i = this;
        Math.floor(i.options.slidesToShow / 2),
          !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          !i.options.infinite &&
          (i.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
            i.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            0 === i.currentSlide
              ? (i.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
                i.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : i.currentSlide >= i.slideCount - i.options.slidesToShow &&
                !1 === i.options.centerMode
                ? (i.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                  i.$prevArrow
                    .removeClass("slick-disabled")
                    .attr("aria-disabled", "false"))
                : i.currentSlide >= i.slideCount - 1 &&
                !0 === i.options.centerMode &&
                (i.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                  i.$prevArrow
                    .removeClass("slick-disabled")
                    .attr("aria-disabled", "false")));
      }),
      (e.prototype.updateDots = function () {
        var i = this;
        null !== i.$dots &&
          (i.$dots.find("li").removeClass("slick-active").end(),
            i.$dots
              .find("li")
              .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
              .addClass("slick-active"));
      }),
      (e.prototype.visibility = function () {
        var i = this;
        i.options.autoplay &&
          (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
      }),
      (i.fn.slick = function () {
        var i,
          t,
          o = this,
          s = arguments[0],
          n = Array.prototype.slice.call(arguments, 1),
          r = o.length;
        for (i = 0; i < r; i++)
          if (
            ("object" == typeof s || void 0 === s
              ? (o[i].slick = new e(o[i], s))
              : (t = o[i].slick[s].apply(o[i].slick, n)),
              void 0 !== t)
          )
            return t;
        return o;
      });
  });

$(document).ready(function () {
  $("head").append(
    `\n    <link rel="shortcut icon" type="image/jpg" href="https://i.postimg.cc/J0mV2VdS/favicon-intemobile.jpg"/>\n 
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WLRLNVC');</script>
<!-- End Google Tag Manager -->
    `
  ),
    $('body').append(`
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WLRLNVC"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
`)
  $(".slider-parceiros").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: !0,
    autoplaySpeed: 900,
    arrows: !1,
    dots: !1,
    pauseOnHover: !1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 520, settings: { slidesToShow: 3 } },
    ],
  });
});
