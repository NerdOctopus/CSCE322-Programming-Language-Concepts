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
     let result = onePlayerOneMove game (head moves)
     printGame result

-- YOUR CODE SHOULD COME AFTER THIS POINT

