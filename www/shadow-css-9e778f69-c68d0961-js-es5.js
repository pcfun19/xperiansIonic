function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shadow-css-9e778f69-c68d0961-js"], {
  /***/
  "./node_modules/@ionic/pwa-elements/dist/esm/shadow-css-9e778f69-c68d0961.js":
  /*!***********************************************************************************!*\
    !*** ./node_modules/@ionic/pwa-elements/dist/esm/shadow-css-9e778f69-c68d0961.js ***!
    \***********************************************************************************/

  /*! exports provided: scopeCss */

  /***/
  function node_modulesIonicPwaElementsDistEsmShadowCss9e778f69C68d0961Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scopeCss", function () {
      return scopeCss;
    });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     *
     * This file is a port of shadowCSS from webcomponents.js to TypeScript.
     * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
     * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
     */


    var safeSelector = function safeSelector(selector) {
      var placeholders = [];
      var index = 0;
      var content; // Replaces attribute selectors with placeholders.
      // The WS in [attr="va lue"] would otherwise be interpreted as a selector separator.

      selector = selector.replace(/(\[[^\]]*\])/g, function (_, keep) {
        var replaceBy = "__ph-".concat(index, "__");
        placeholders.push(keep);
        index++;
        return replaceBy;
      }); // Replaces the expression in `:nth-child(2n + 1)` with a placeholder.
      // WS and "+" would otherwise be interpreted as selector separators.

      content = selector.replace(/(:nth-[-\w]+)(\([^)]+\))/g, function (_, pseudo, exp) {
        var replaceBy = "__ph-".concat(index, "__");
        placeholders.push(exp);
        index++;
        return pseudo + replaceBy;
      });
      var ss = {
        content: content,
        placeholders: placeholders
      };
      return ss;
    };

    var restoreSafeSelector = function restoreSafeSelector(placeholders, content) {
      return content.replace(/__ph-(\d+)__/g, function (_, index) {
        return placeholders[+index];
      });
    };

    var _polyfillHost = '-shadowcsshost';
    var _polyfillSlotted = '-shadowcssslotted'; // note: :host-context pre-processed to -shadowcsshostcontext.

    var _polyfillHostContext = '-shadowcsscontext';

    var _parenSuffix = ')(?:\\((' + '(?:\\([^)(]*\\)|[^)(]*)+?' + ')\\))?([^,{]*)';

    var _cssColonHostRe = new RegExp('(' + _polyfillHost + _parenSuffix, 'gim');

    var _cssColonHostContextRe = new RegExp('(' + _polyfillHostContext + _parenSuffix, 'gim');

    var _cssColonSlottedRe = new RegExp('(' + _polyfillSlotted + _parenSuffix, 'gim');

    var _polyfillHostNoCombinator = _polyfillHost + '-no-combinator';

    var _polyfillHostNoCombinatorRe = /-shadowcsshost-no-combinator([^\s]*)/;
    var _shadowDOMSelectorsRe = [/::shadow/g, /::content/g];
    var _selectorReSuffix = '([>\\s~+\[.,{:][\\s\\S]*)?$';
    var _polyfillHostRe = /-shadowcsshost/gim;
    var _colonHostRe = /:host/gim;
    var _colonSlottedRe = /::slotted/gim;
    var _colonHostContextRe = /:host-context/gim;
    var _commentRe = /\/\*\s*[\s\S]*?\*\//g;

    var stripComments = function stripComments(input) {
      return input.replace(_commentRe, '');
    };

    var _commentWithHashRe = /\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g;

    var extractCommentsWithHash = function extractCommentsWithHash(input) {
      return input.match(_commentWithHashRe) || [];
    };

    var _ruleRe = /(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g;
    var _curlyRe = /([{}])/g;
    var OPEN_CURLY = '{';
    var CLOSE_CURLY = '}';
    var BLOCK_PLACEHOLDER = '%BLOCK%';

    var processRules = function processRules(input, ruleCallback) {
      var inputWithEscapedBlocks = escapeBlocks(input);
      var nextBlockIndex = 0;
      return inputWithEscapedBlocks.escapedString.replace(_ruleRe, function () {
        var selector = arguments.length <= 2 ? undefined : arguments[2];
        var content = '';
        var suffix = arguments.length <= 4 ? undefined : arguments[4];
        var contentPrefix = '';

        if (suffix && suffix.startsWith('{' + BLOCK_PLACEHOLDER)) {
          content = inputWithEscapedBlocks.blocks[nextBlockIndex++];
          suffix = suffix.substring(BLOCK_PLACEHOLDER.length + 1);
          contentPrefix = '{';
        }

        var cssRule = {
          selector: selector,
          content: content
        };
        var rule = ruleCallback(cssRule);
        return "".concat(arguments.length <= 1 ? undefined : arguments[1]).concat(rule.selector).concat(arguments.length <= 3 ? undefined : arguments[3]).concat(contentPrefix).concat(rule.content).concat(suffix);
      });
    };

    var escapeBlocks = function escapeBlocks(input) {
      var inputParts = input.split(_curlyRe);
      var resultParts = [];
      var escapedBlocks = [];
      var bracketCount = 0;
      var currentBlockParts = [];

      for (var partIndex = 0; partIndex < inputParts.length; partIndex++) {
        var part = inputParts[partIndex];

        if (part === CLOSE_CURLY) {
          bracketCount--;
        }

        if (bracketCount > 0) {
          currentBlockParts.push(part);
        } else {
          if (currentBlockParts.length > 0) {
            escapedBlocks.push(currentBlockParts.join(''));
            resultParts.push(BLOCK_PLACEHOLDER);
            currentBlockParts = [];
          }

          resultParts.push(part);
        }

        if (part === OPEN_CURLY) {
          bracketCount++;
        }
      }

      if (currentBlockParts.length > 0) {
        escapedBlocks.push(currentBlockParts.join(''));
        resultParts.push(BLOCK_PLACEHOLDER);
      }

      var strEscapedBlocks = {
        escapedString: resultParts.join(''),
        blocks: escapedBlocks
      };
      return strEscapedBlocks;
    };

    var insertPolyfillHostInCssText = function insertPolyfillHostInCssText(selector) {
      selector = selector.replace(_colonHostContextRe, _polyfillHostContext).replace(_colonHostRe, _polyfillHost).replace(_colonSlottedRe, _polyfillSlotted);
      return selector;
    };

    var convertColonRule = function convertColonRule(cssText, regExp, partReplacer) {
      // m[1] = :host(-context), m[2] = contents of (), m[3] rest of rule
      return cssText.replace(regExp, function () {
        for (var _len = arguments.length, m = new Array(_len), _key = 0; _key < _len; _key++) {
          m[_key] = arguments[_key];
        }

        if (m[2]) {
          var parts = m[2].split(',');
          var r = [];

          for (var i = 0; i < parts.length; i++) {
            var p = parts[i].trim();
            if (!p) break;
            r.push(partReplacer(_polyfillHostNoCombinator, p, m[3]));
          }

          return r.join(',');
        } else {
          return _polyfillHostNoCombinator + m[3];
        }
      });
    };

    var colonHostPartReplacer = function colonHostPartReplacer(host, part, suffix) {
      return host + part.replace(_polyfillHost, '') + suffix;
    };

    var convertColonHost = function convertColonHost(cssText) {
      return convertColonRule(cssText, _cssColonHostRe, colonHostPartReplacer);
    };

    var colonHostContextPartReplacer = function colonHostContextPartReplacer(host, part, suffix) {
      if (part.indexOf(_polyfillHost) > -1) {
        return colonHostPartReplacer(host, part, suffix);
      } else {
        return host + part + suffix + ', ' + part + ' ' + host + suffix;
      }
    };

    var convertColonSlotted = function convertColonSlotted(cssText, slotAttr) {
      var regExp = _cssColonSlottedRe;
      return cssText.replace(regExp, function () {
        for (var _len2 = arguments.length, m = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          m[_key2] = arguments[_key2];
        }

        if (m[2]) {
          var compound = m[2].trim();
          var suffix = m[3];
          var sel = '.' + slotAttr + ' > ' + compound + suffix;
          return sel;
        } else {
          return _polyfillHostNoCombinator + m[3];
        }
      });
    };

    var convertColonHostContext = function convertColonHostContext(cssText) {
      return convertColonRule(cssText, _cssColonHostContextRe, colonHostContextPartReplacer);
    };

    var convertShadowDOMSelectors = function convertShadowDOMSelectors(cssText) {
      return _shadowDOMSelectorsRe.reduce(function (result, pattern) {
        return result.replace(pattern, ' ');
      }, cssText);
    };

    var makeScopeMatcher = function makeScopeMatcher(scopeSelector) {
      var lre = /\[/g;
      var rre = /\]/g;
      scopeSelector = scopeSelector.replace(lre, '\\[').replace(rre, '\\]');
      return new RegExp('^(' + scopeSelector + ')' + _selectorReSuffix, 'm');
    };

    var selectorNeedsScoping = function selectorNeedsScoping(selector, scopeSelector) {
      var re = makeScopeMatcher(scopeSelector);
      return !re.test(selector);
    };

    var applySimpleSelectorScope = function applySimpleSelectorScope(selector, scopeSelector, hostSelector) {
      // In Android browser, the lastIndex is not reset when the regex is used in String.replace()
      _polyfillHostRe.lastIndex = 0;

      if (_polyfillHostRe.test(selector)) {
        var replaceBy = ".".concat(hostSelector);
        return selector.replace(_polyfillHostNoCombinatorRe, function (_, selector) {
          return selector.replace(/([^:]*)(:*)(.*)/, function (_, before, colon, after) {
            return before + replaceBy + colon + after;
          });
        }).replace(_polyfillHostRe, replaceBy + ' ');
      }

      return scopeSelector + ' ' + selector;
    };

    var applyStrictSelectorScope = function applyStrictSelectorScope(selector, scopeSelector, hostSelector) {
      var isRe = /\[is=([^\]]*)\]/g;
      scopeSelector = scopeSelector.replace(isRe, function (_) {
        return arguments.length <= 1 ? undefined : arguments[1];
      });
      var className = '.' + scopeSelector;

      var _scopeSelectorPart = function _scopeSelectorPart(p) {
        var scopedP = p.trim();

        if (!scopedP) {
          return '';
        }

        if (p.indexOf(_polyfillHostNoCombinator) > -1) {
          scopedP = applySimpleSelectorScope(p, scopeSelector, hostSelector);
        } else {
          // remove :host since it should be unnecessary
          var t = p.replace(_polyfillHostRe, '');

          if (t.length > 0) {
            var matches = t.match(/([^:]*)(:*)(.*)/);

            if (matches) {
              scopedP = matches[1] + className + matches[2] + matches[3];
            }
          }
        }

        return scopedP;
      };

      var safeContent = safeSelector(selector);
      selector = safeContent.content;
      var scopedSelector = '';
      var startIndex = 0;
      var res;
      var sep = /( |>|\+|~(?!=))\s*/g; // If a selector appears before :host it should not be shimmed as it
      // matches on ancestor elements and not on elements in the host's shadow
      // `:host-context(div)` is transformed to
      // `-shadowcsshost-no-combinatordiv, div -shadowcsshost-no-combinator`
      // the `div` is not part of the component in the 2nd selectors and should not be scoped.
      // Historically `component-tag:host` was matching the component so we also want to preserve
      // this behavior to avoid breaking legacy apps (it should not match).
      // The behavior should be:
      // - `tag:host` -> `tag[h]` (this is to avoid breaking legacy apps, should not match anything)
      // - `tag :host` -> `tag [h]` (`tag` is not scoped because it's considered part of a
      //   `:host-context(tag)`)

      var hasHost = selector.indexOf(_polyfillHostNoCombinator) > -1; // Only scope parts after the first `-shadowcsshost-no-combinator` when it is present

      var shouldScope = !hasHost;

      while ((res = sep.exec(selector)) !== null) {
        var separator = res[1];

        var _part = selector.slice(startIndex, res.index).trim();

        shouldScope = shouldScope || _part.indexOf(_polyfillHostNoCombinator) > -1;
        var scopedPart = shouldScope ? _scopeSelectorPart(_part) : _part;
        scopedSelector += "".concat(scopedPart, " ").concat(separator, " ");
        startIndex = sep.lastIndex;
      }

      var part = selector.substring(startIndex);
      shouldScope = shouldScope || part.indexOf(_polyfillHostNoCombinator) > -1;
      scopedSelector += shouldScope ? _scopeSelectorPart(part) : part; // replace the placeholders with their original values

      return restoreSafeSelector(safeContent.placeholders, scopedSelector);
    };

    var scopeSelector = function scopeSelector(selector, scopeSelectorText, hostSelector, slotSelector) {
      return selector.split(',').map(function (shallowPart) {
        if (slotSelector && shallowPart.indexOf('.' + slotSelector) > -1) {
          return shallowPart.trim();
        }

        if (selectorNeedsScoping(shallowPart, scopeSelectorText)) {
          return applyStrictSelectorScope(shallowPart, scopeSelectorText, hostSelector).trim();
        } else {
          return shallowPart.trim();
        }
      }).join(', ');
    };

    var scopeSelectors = function scopeSelectors(cssText, scopeSelectorText, hostSelector, slotSelector, commentOriginalSelector) {
      return processRules(cssText, function (rule) {
        var selector = rule.selector;
        var content = rule.content;

        if (rule.selector[0] !== '@') {
          selector = scopeSelector(rule.selector, scopeSelectorText, hostSelector, slotSelector);
        } else if (rule.selector.startsWith('@media') || rule.selector.startsWith('@supports') || rule.selector.startsWith('@page') || rule.selector.startsWith('@document')) {
          content = scopeSelectors(rule.content, scopeSelectorText, hostSelector, slotSelector);
        }

        var cssRule = {
          selector: selector.replace(/\s{2,}/g, ' ').trim(),
          content: content
        };
        return cssRule;
      });
    };

    var scopeCssText = function scopeCssText(cssText, scopeId, hostScopeId, slotScopeId, commentOriginalSelector) {
      cssText = insertPolyfillHostInCssText(cssText);
      cssText = convertColonHost(cssText);
      cssText = convertColonHostContext(cssText);
      cssText = convertColonSlotted(cssText, slotScopeId);
      cssText = convertShadowDOMSelectors(cssText);

      if (scopeId) {
        cssText = scopeSelectors(cssText, scopeId, hostScopeId, slotScopeId);
      }

      cssText = cssText.replace(/-shadowcsshost-no-combinator/g, ".".concat(hostScopeId));
      cssText = cssText.replace(/>\s*\*\s+([^{, ]+)/gm, ' $1 ');
      return cssText.trim();
    };

    var scopeCss = function scopeCss(cssText, scopeId, commentOriginalSelector) {
      var hostScopeId = scopeId + '-h';
      var slotScopeId = scopeId + '-s';
      var commentsWithHash = extractCommentsWithHash(cssText);
      cssText = stripComments(cssText);
      var orgSelectors = [];

      if (commentOriginalSelector) {
        var processCommentedSelector = function processCommentedSelector(rule) {
          var placeholder = "/*!@___".concat(orgSelectors.length, "___*/");
          var comment = "/*!@".concat(rule.selector, "*/");
          orgSelectors.push({
            placeholder: placeholder,
            comment: comment
          });
          rule.selector = placeholder + rule.selector;
          return rule;
        };

        cssText = processRules(cssText, function (rule) {
          if (rule.selector[0] !== '@') {
            return processCommentedSelector(rule);
          } else if (rule.selector.startsWith('@media') || rule.selector.startsWith('@supports') || rule.selector.startsWith('@page') || rule.selector.startsWith('@document')) {
            rule.content = processRules(rule.content, processCommentedSelector);
            return rule;
          }

          return rule;
        });
      }

      var scopedCssText = scopeCssText(cssText, scopeId, hostScopeId, slotScopeId);
      cssText = [scopedCssText].concat(_toConsumableArray(commentsWithHash)).join('\n');

      if (commentOriginalSelector) {
        orgSelectors.forEach(function (_ref) {
          var placeholder = _ref.placeholder,
              comment = _ref.comment;
          cssText = cssText.replace(placeholder, comment);
        });
      }

      return cssText;
    };
    /***/

  }
}]);
//# sourceMappingURL=shadow-css-9e778f69-c68d0961-js-es5.js.map