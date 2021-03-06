
/* @jsx node */

import { node, dom } from 'jsx-pragmatic/src';

import '../../parent';

export function defaultContainerTemplate(_ref) {
    var id = _ref.id,
        tag = _ref.tag,
        context = _ref.context,
        CLASS = _ref.CLASS,
        outlet = _ref.outlet,
        document = _ref.document,
        _ref$dimensions = _ref.dimensions,
        width = _ref$dimensions.width,
        height = _ref$dimensions.height;


    return node(
        'div',
        { id: id, 'class': CLASS.ZOID + ' ' + CLASS.ZOID + '-tag-' + tag + ' ' + CLASS.ZOID + '-context-' + context },
        node(
            'style',
            null,
            '\n                    #' + id + ', #' + id + ' > .' + CLASS.OUTLET + ' {\n                        width: ' + width + ';\n                        height: ' + height + ';\n                    }\n\n                    #' + id + ' > .' + CLASS.OUTLET + ' {\n                        display: inline-block;\n                        position: relative;\n                    }\n\n                    #' + id + ' > .' + CLASS.OUTLET + ' > iframe {\n                        height: 100%;\n                        width: 100%;\n                        position: absolute;\n                        top: 0;\n                        left: 0;\n                        transition: opacity .2s ease-in-out;\n                    }\n\n                    #' + id + ' > .' + CLASS.OUTLET + ' > iframe.' + CLASS.VISIBLE + ' {\n                        opacity: 1;\n                    }\n\n                    #' + id + ' > .' + CLASS.OUTLET + ' > iframe.' + CLASS.INVISIBLE + ' {\n                        opacity: 0;\n                    }\n                '
        ),
        node('node', { el: outlet })
    ).render(dom({ doc: document }));
}