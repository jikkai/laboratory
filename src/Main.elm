import Html 
import Components.Button as Button

main : Program Never number Button.Msg
main = Html.beginnerProgram {
  model = Button.initModel,
  view = Button.view,
  update = Button.update }
