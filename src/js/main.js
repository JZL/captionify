(function () {
    'use strict';
    captionify({
        imgClassSelector: "caption"
    });

    captionify({
        imgClassSelector: "data-caption",
        dataCaption: true
    });

    captionify({
        imgClassSelector: "bottom-caption",
        mode: "bottom"
    });
}());