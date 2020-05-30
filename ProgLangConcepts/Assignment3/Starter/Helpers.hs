module Helpers
( readExtremePegSolitaireFile
, printGame
, countPlayers
, onePlayerOneMove
, listPlayers
, onePlayerOneMoveP
) where

--remember to export functions

import Prelude
import Data.Char
import Data.List
import Debug.Trace

readExtremePegSolitaireFile :: String -> IO ([[Char]],[Char])
readExtremePegSolitaireFile = readIO

printGame :: [[Char]] -> IO ()
printGame [] = do
	       print ""
printGame (row:rows) = do
	  	       print row
		       printGame rows

countPlayers :: [[Char]] -> Int    --don't use this
countPlayers game = (length game) * (length (head game)) - numSpaces - numPegs
	     where numSpaces = length (find2D game '-')
	     	   numPegs   = length (find2D game 'x')

listPlayers :: [[Char]] -> [Char]   --not returning correct type
listPlayers game = sort $ nub $ filter (\ x -> elem x ['0'..'9']) $ concat game

onePlayerOneMove :: [[Char]] -> Char -> [[Char]]
onePlayerOneMove game move
      | move == 'u' = helperUp game r c
      | move == 'd' = helperDown game r c
      | move == 'l' = helperLeft game r c
      | move == 'r' = helperRight game r c
      | otherwise   = game
      where (r,c) = (find2D game '1')!!0     --(r,c) = (find2D game player)!!0

helperUp :: [[Char]] -> Int -> Int -> [[Char]]
helperUp game row col
     | row >= 2 && up == 'x' && up2 == 'x' = changeBoard 'x' (row,col) (changeBoard '-' (row-1,col) (changeBoard '1' (row-2,col) game))
     | otherwise = game
     where up  = (game!!(row-1))!!col
           up2 = (game!!(row-2))!!col

helperDown :: [[Char]] -> Int -> Int -> [[Char]]
helperDown game row col
     | end >= 2 && down == 'x' && down2 == 'x' = changeBoard 'x' (row,col) (changeBoard '-' (row+1,col) (changeBoard '1' (row+2,col) game))
     | otherwise = game
     where down  = (game!!(row+1))!!col
           down2 = (game!!(row+2))!!col
           end   = (length game) - (row + 1)

helperLeft :: [[Char]] -> Int -> Int -> [[Char]]
helperLeft game row col
     | col >= 2 && left == 'x' && left2 == 'x' = changeBoard 'x' (row,col) (changeBoard '-' (row,col-1) (changeBoard '1' (row,col-2) game))
     | otherwise = game
     where left  = (game!!row!!(col-1))
           left2 = (game!!row!!(col-2))

helperRight :: [[Char]] -> Int -> Int -> [[Char]]
helperRight game row col
     | side >= 2 && right == 'x' && right2 == 'x' = changeBoard 'x' (row,col) (changeBoard '-' (row,col+1) (changeBoard '1' (row,col+2) game))
     | otherwise = game
     where right  = (game!!row!!(col+1))
           right2 = (game!!row!!(col+2))
           side  = (length (head game)) - (col + 1)

changeRow :: Char -> Int -> [Char] -> [Char]
changeRow _ _ [] = []
changeRow thing 0 (_:tail) = thing:tail
changeRow thing x (h:t) = h:(changeRow thing (x-1) t)

changeBoard :: Char -> (Int,Int) -> [[Char]] -> [[Char]]
changeBoard _ _ [] = []
changeBoard thing (0,c) (row:rows) = (changeRow thing c row):rows
changeBoard thing (r,c) (row:rows) = row:(changeBoard thing((r-1),c)rows)


find2D :: [[Char]] -> Char -> [(Int,Int)]
find2D [] _ = []
find2D (row:rows) e = first ++ rest
       where first = [(0,c)|c<-(find1D row e)]
       	     rest  = [(r+1,c)|(r,c)<-(find2D rows e)]

find1D :: [Char] -> Char -> [Int]
find1D [] _ = []
find1D (h:t) e
       | h == e		= 0:rst
       | otherwise	= rst
       where rest = find1D t e
       	     rst  = map (+ 1) rest

onePlayerOneMoveP :: [[Char]] -> Char -> Char -> [[Char]]
onePlayerOneMoveP game move player
      | move == 'u' = helperUpP game r c player
      | move == 'd' = helperDownP game r c player
      | move == 'l' = helperLeftP game r c player
      | move == 'r' = helperRightP game r c player
      | otherwise   = game
      where (r,c) = (find2D game player)!!0     --(r,c) = (find2D game player)!!0

helperUpP :: [[Char]] -> Int -> Int -> Char -> [[Char]]
helperUpP game row col player
     | row >= 2 && up == 'x' && up2 == 'x' = changeBoard 'x' (row,col) (changeBoard '-' (row-1,col) (changeBoard player (row-2,col) game))
     | otherwise = game
     where up  = (game!!(row-1))!!col
           up2 = (game!!(row-2))!!col

helperDownP :: [[Char]] -> Int -> Int -> Char -> [[Char]]
helperDownP game row col player
     | end >= 2 && down == 'x' && down2 == 'x' = changeBoard 'x' (row,col) (changeBoard '-' (row+1,col) (changeBoard player (row+2,col) game))
     | otherwise = game
     where down  = (game!!(row+1))!!col
           down2 = (game!!(row+2))!!col
           end   = (length game) - (row + 1)

helperLeftP :: [[Char]] -> Int -> Int -> Char -> [[Char]]
helperLeftP game row col player
     | col >= 2 && left == 'x' && left2 == 'x' = changeBoard 'x' (row,col) (changeBoard '-' (row,col-1) (changeBoard player (row,col-2) game))
     | otherwise = game
     where left  = (game!!row!!(col-1))
           left2 = (game!!row!!(col-2))

helperRightP :: [[Char]] -> Int -> Int -> Char -> [[Char]]
helperRightP game row col player
     | side >= 2 && right == 'x' && right2 == 'x' = changeBoard 'x' (row,col) (changeBoard '-' (row,col+1) (changeBoard player (row,col+2) game))
     | otherwise = game
     where right  = (game!!row!!(col+1))
           right2 = (game!!row!!(col+2))
           side  = (length (head game)) - (col + 1)