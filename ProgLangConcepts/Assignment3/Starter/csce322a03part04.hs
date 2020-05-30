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
     let result = manyPlayersManyMoves game moves
     printGame result

-- YOUR CODE SHOULD COME AFTER THIS POINT
manyPlayersManyMoves :: [[Char]] -> [Char] -> [[Char]]
manyPlayersManyMoves game moves = manyManyHelper game moves (listPlayers game)

manyManyHelper :: [[Char]] -> [Char] -> [Char] -> [[Char]]
manyManyHelper game [] players = game
manyManyHelper game moves [] = manyManyHelper game moves (listPlayers game)
manyManyHelper game (move:moves) (player:players) = manyManyHelper (onePlayerOneMoveP game move player) moves players