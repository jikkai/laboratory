-- import Html exposing (..)
-- import Html.Attributes exposing (..)

import Components.Counter exposing ( counter )

main : Program Never Components.Counter.Model Components.Counter.Msg
main = counter