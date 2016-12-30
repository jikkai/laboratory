module Components.Button exposing (initModel, Msg, update, view)

import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)

type Msg = Increment | Decrement

-- UPDATE
update : Msg -> number -> number
update msg model = 
  case msg of 
    Increment -> 
      model + 1
    Decrement ->
      model - 1

-- MODEL
initModel : number
initModel = 3

-- VIEW
view : a -> Html Msg
view model =
  div [] [ 
    button [onClick Decrement] [text "-"],
    text (toString model),
    button [onClick Increment] [text "+"]
  ]
