import Html exposing (text)

names: List String
-- names = ["Alice", "Bob", "Chuck"]
names = []

appendString: List String -> String -> String -> Html.Html text
appendString a b c = if List.isEmpty a then text (b ++ c) else text "failed"

main: Html.Html text
main = appendString names "hello world" "!"