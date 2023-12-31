#line 2

/*
 * Copyright (c) 2022 Calder Young. All Rights Reserved.
 * 
 * WITH THE EXCEPTION OF PATCH FILES, MINIFIED JAVASCRIPT, AND ALL FILES
 * NORMALLY FOUND IN AN UNMODIFIED MINECRAFT RESOURCE PACK, YOU ARE NOT ALLOWED
 * TO SHARE, DISTRIBUTE, OR REPURPOSE ANY FILE USED BY OR PRODUCED BY THE
 * SOFTWARE IN THIS REPOSITORY WITHOUT PRIOR PERMISSION FROM THE PROJECT AUTHOR.
 * 
 * NOT FOR COMMERCIAL OR MALICIOUS USE
 * 
 * (please read the 'LICENSE' file this repo's root directory for more info) 
 * 
 */

precision lowp int;
precision highp float;
precision lowp sampler2D;

in vec2 a_position2f;

in vec3 p_position3f;
in vec2 p_texCoords2i;
in vec2 p_lightMap2f;
in vec2 p_particleSize_texCoordsSize_2i;
in vec4 p_color4f;

out vec2 v_texCoord2f;
out vec4 v_color4f;

uniform mat4 u_matrixTransform;
uniform vec3 u_texCoordSize2f_particleSize1f;
uniform vec4 u_transformParam_1_2_3_4_f;
uniform float u_transformParam_5_f;
uniform vec4 u_color4f;

uniform sampler2D u_lightmapTexture;

void main() {
	v_color4f = u_color4f * p_color4f.bgra * texture(u_lightmapTexture, p_lightMap2f);

	vec2 tex2f = a_position2f * 0.5 + 0.5;
	tex2f.y = 1.0 - tex2f.y;
	tex2f = p_texCoords2i + tex2f * p_particleSize_texCoordsSize_2i.y;
	v_texCoord2f = tex2f * u_texCoordSize2f_particleSize1f.xy;

	float particleSize = u_texCoordSize2f_particleSize1f.z * p_particleSize_texCoordsSize_2i.x;

	float f1 = u_transformParam_1_2_3_4_f.x;
	float f2 = u_transformParam_1_2_3_4_f.y;
	float f3 = u_transformParam_1_2_3_4_f.z;
	float f4 = u_transformParam_1_2_3_4_f.w;
	float f5 = u_transformParam_5_f;

	vec3 pos3f = p_position3f;
	pos3f.x += f1 * particleSize * a_position2f.x;
	pos3f.x += f4 * particleSize * a_position2f.y;
	pos3f.y += f2 * particleSize * a_position2f.y;
	pos3f.z += f3 * particleSize * a_position2f.x;
	pos3f.z += f5 * particleSize * a_position2f.y;

	gl_Position = u_matrixTransform * vec4(pos3f, 1.0);
}
