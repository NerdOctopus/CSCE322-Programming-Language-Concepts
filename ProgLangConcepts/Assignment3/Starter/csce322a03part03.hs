import Prelude
import System.Environment ( getArgs )
import Data.List
import Helpers

-- The main method that will be used for testing / command line access
main = do
     args <- getArgs
     filename <- readFile (head args)
     (game,moves) <- readExtremePegSolitaireFile filename
     print "Result"
     let result = manyPlayersOneMove game moves
     printGame result

-- YOUR CODE SHOULD COME AFTER THIS POINT
manyPlayersOneMove :: [[Char]] -> [Char] -> [[Char]]
manyPlayersOneMove game moves = oneManyHelper game moves (listPlayers game)

oneManyHelper :: [[Char]] -> [Char] -> [Char] -> [[Char]]
oneManyHelper game moves [] = game
oneManyHelper game (move:moves) (player:players) = oneManyHelper (onePlayerOneMoveP game move player) moves players
