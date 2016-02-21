# CSS Icons
The project includes some usefull responsive css icons. Scss as preprocessor is used

## How to see
you have to have Node.js with npm instaled
 
- download projcet
- go to console in project folder and print 
    | npm install
- after finishing installation print 
    | gulp
- open http://localhost:8010/index.html

## How to use

### if you use scss
- copy file 'icons.scss' and folder 'icons' into your project
- import into your main scss file.

### if you use pure CSS or other preprocessor
- comment not necessary import icons
- configurate colors and sizes for icons(in general file or individually each icon file)
- go to console in project folder and print 
    | npm install
- after finishing installation print 
    | gulp sasss
- copy and import generated 'icons.css' into you project
go to folder icon that you want to use and copy class(classes) for usage

## Configuration
- file icons scss includes:
    - main size, color and run-time animation
    - import of all icons in project (you can comment not used icon when you generate css file.)
- each folder of icon has '*.jade' file with class(classes) - for example and '*.scss' with styles
- each scss file of icon nests font size and color from main file. You can configurate each icon individually with your properties.
- there are some icons with animation. To see it it's necessary to add class from 'data-over'.
 