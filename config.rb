#!/usr/bin/ruby -w
require 'susy'
require 'breakpoint'
project_type= :stand-alone
http_path = "public/"
sass_dir = "resources/assets/scss"
css_dir = "public/assests/css"
image_dir = "public/assests/images"
fonts_dir = "public/assests/fonts"
javascript_dir = "public/assests/js"
line_comments = false
preferred_syntax = :scss
#!output_style = :compressed
output_style = :exanded
relative_assets = true
