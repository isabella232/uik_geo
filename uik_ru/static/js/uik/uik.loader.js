(function ($, UIK) {
	$.extend(UIK.viewmodel, {
		version : null
	});
	$.extend(UIK.view, {
		$document: null
	});

	UIK.loader = {};
	$.extend(UIK.loader, {
		templates: ['uikPopupTemplate', 'uikPopupInfoTemplate', 'searchResultsTemplate', 'userLogsTemplate', 'alertsTemplate'],

		init: function () {
			var context = this;

            this.setDomOptions();

            window.setTimeout(function () {
                context.initModules();
                $('img').imagesLoaded(function () {
                    UIK.view.$body.removeClass('loading');
                });
            }, 1000);
		},

		initModules: function () {
//			try {
				UIK.common.init();
                UIK.alerts.init();
                UIK.permalink.init();
				UIK.map.init();
				UIK.searcher.init();
				UIK.editor.init();
				UIK.user.init();
				UIK.uiks.init();
//			} catch (e) {
//				alert(e);
//			}
		},

		setDomOptions: function () {
			UIK.view.$document = $(document);
		}
	});

	$(document).ready(function () {
		UIK.loader.init();
	});

})(jQuery, UIK);
