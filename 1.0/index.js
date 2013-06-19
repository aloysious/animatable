/**
 * @fileoverview 请修改组件描述
 * @author shouzuo<aloysiousliang@gmail.com>
 * @module animatable
 **/
KISSY.add("gallery/animatable/1.0/index", function (S, Base, NODE, DOM) {

	"use strict";

	function Animatable(id, cfg) {
		if (this instanceof Animatable) {

			this.con = S.one(id);

			Animatable.superclass.constructor.call(this, cfg);
			this.init();

		} else {
			return new Animatable(id,cfg);
		}
	}

	Animatable.ATTRS = {
	};

	S.extend(Animatable, S.Base, {

		init: function() {
			this.render();
		},

		render: function() {
			this.renderUI();
			this.bindUI();
			this.syncUI();
		},

		renderUI: function() {
			var conNode = this.con,
				property = conNode.attr('data-property'),
				from = conNode.attr('data-from'),
				to = conNode.attr('data-to'),
				id = conNode.getDOMNode().id,
				keyFrameIdent = id,
				keyFrameContent = '',
				styleDOMNode;

			keyFrameContent = '@keyframes ' + keyFrameIdent + '{\r\n' +
								'from{' + property + ':' + from + '}' + '\r\n' +
								'to{' + property + ':' + to + '}}' + '\r\n' +
								'#' + id + '{animation:' + keyFrameIdent + ' 1s infinite alternate; ' + property + ': ' + from + ';}';
							/* +
							  '@-webkit-keyframes ' + keyFrameIdent + '{\r\n' +
								'from{' + property + ':' + from + '}' + '\r\n' +
								'to{' + property + ':' + to + '}}' +
							  '@-moz-keyframes ' + keyFrameIdent + '{\r\n' +
								'from{' + property + ':' + from + '}' + '\r\n' +
								'to{' + property + ':' + to + '}}';*/
			styleDOMNode = DOM.create('<style>', {
				text: keyFrameContent
			});
			StyleFix.styleElement(styleDOMNode);
			DOM.append(styleDOMNode, 'head');
			/*
			conNode.css({
				'animation': keyFrameIdent + ' 1s infinite alternate',
				'-webkit-animation': keyFrameIdent + ' 1s infinite alternate',
				'-moz-animation': keyFrameIdent + ' 1s infinite alternate',
				'-webkit-transform': 'rotate(0deg)'
			});*/
		},

		bindUI: function() {},

		syncUI: function() {},

		destory: function(){

		}
	});

	return Animatable;

}, {
	requires: ['base','node', 'dom']
});

