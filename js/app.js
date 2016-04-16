/**
 * Portfoilo react script
 *
 * Component structure:
 * - App
 *    |--IndexPage
 *		|-- 2016 Before
 *		|	|-- 畢業製作
 *		|	|-- Else work
 *		|	   |-- 手繪
 *		|	   |-- 電繪
 *		|-- 2016 After
 *		|	|-- 合作案例
 *		|	|  |-- 案例介紹
 *		|	|-- 資訊分享
 *		|	|  |-- CSS
 *		|	|  |-- JS
 *		|-- About Me
 *			|-- Introduction
 *			|-- Skills
 *			|-- Experience
 *			|-- List(Case, Awards record)
 *
 */
'use strict';
/* application component. */
var ContainerBox = React.createClass({
	render: function(){
		return(
			<div className="contentBox">
				<ContentBox_left />
				<ContentBox_right />
			</div>
		);
	};
});
React.render( < ContainerBox / > , document.getElementById('container'));
