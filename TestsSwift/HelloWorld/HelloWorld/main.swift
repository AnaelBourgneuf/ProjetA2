//
//  main.swift
//  HelloWorld
//
//  Created by Bourgneuf-Monclair Anael on 12/10/18.
//  Copyright © 2018 Bourgneuf-Monclair Anael. All rights reserved.
//

import Foundation

func printHelloWorld(nb : Int){
    let helloWorld = "            Hello, World !"
    for _ in 1...nb {
        print(helloWorld)
    }
}

func test(){
    print(1+1);
}

func inputNum() -> Int {
    let strData = readLine()
    return Int(strData!)!
}

func input() -> String {
    let strData = readLine()
    return strData!
}

func askWhat() -> Int{
    print("Quelle oppération voulez-vous effectuer ? \n    1 : Addition \n    2 : Soustraction \n    3 : Multiplication \n    4 : Division \n    5 : Modulo ")
    return inputNum()
}

func askNum(nb : Int) -> Int{
    var txt = (String(nb) + "ème")
    if nb == 1 {
        txt = "1er"
    }
    print("\n    Entrez le \(txt) nombre :")
    return inputNum()
}

func main(){
    printHelloWorld(nb: 1)
    let calcul = askWhat()
    let nb1 = askNum(nb: 1)
    let nb2 = askNum(nb: 2)
    
    switch calcul {
        case 1 :
            print("    \(nb1) + \(nb2) = \(nb1+nb2)\n")
        case 2 :
            print("    \(nb1) - \(nb2) = \(nb1-nb2)\n")
        case 3 :
            print("    \(nb1) * \(nb2) = \(nb1*nb2)\n")
        case 4 :
            print("    \(nb1) / \(nb2) = \(nb1/nb2)\n")
        case 5 :
            print("    \(nb1) % \(nb2) = \(nb1%nb2)\n")
        default :
            print("\n   Erreur, votre choix n'etait pas compris entre 1 et 5\n")
    }
}

main()
