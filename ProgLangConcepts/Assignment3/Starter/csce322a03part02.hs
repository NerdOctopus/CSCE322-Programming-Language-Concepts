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
     let result = onePlayerManyMoves game moves
     printGame result

-- YOUR CODE SHOULD COME AFTER THIS POINT
onePlayerManyMoves :: [[Char]] -> [Char] -> [[Char]]
onePlayerManyMoves game [] = game
onePlayerManyMoves game (move:moves) = onePlayerManyMoves (onePlayerOneMove game move) moves
