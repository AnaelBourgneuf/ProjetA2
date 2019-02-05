#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: Promo
#------------------------------------------------------------

CREATE TABLE Promo(
        Promo_Id    Int  Auto_increment  NOT NULL ,
        Promo_Name  Varchar (50) NOT NULL ,
        Promo_Alias Varchar (50) NOT NULL
        ,CONSTRAINT Promo_PK PRIMARY KEY (Promo_Id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: User
#------------------------------------------------------------

CREATE TABLE User(
        User_Id        Int  Auto_increment  NOT NULL ,
        User_Name      Varchar (50) NOT NULL ,
        User_Firstname Varchar (50) NOT NULL ,
        User_Alias     Varchar (50) NOT NULL ,
        User_Birthday  Date NOT NULL ,
        User_Mail      Varchar (50) NOT NULL ,
        User_Is_Admin  Bool NOT NULL ,
        Promo_Id       Int NOT NULL
        ,CONSTRAINT User_PK PRIMARY KEY (User_Id)

        ,CONSTRAINT User_Promo_FK FOREIGN KEY (Promo_Id) REFERENCES Promo(Promo_Id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Idea
#------------------------------------------------------------

CREATE TABLE Idea(
        Idea_Id       Int  Auto_increment  NOT NULL ,
        Idea_Title    Varchar (50) NOT NULL ,
        Idea_Text     Text NOT NULL ,
        Idea_Datetime Datetime NOT NULL ,
        User_Id       Int NOT NULL
        ,CONSTRAINT Idea_PK PRIMARY KEY (Idea_Id)

        ,CONSTRAINT Idea_User_FK FOREIGN KEY (User_Id) REFERENCES User(User_Id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Event
#------------------------------------------------------------

CREATE TABLE Event(
        Event_Id        Int  Auto_increment  NOT NULL ,
        Event_Title     Varchar (50) NOT NULL ,
        Event_Datetime  Datetime NOT NULL ,
        Create_Datetime Datetime NOT NULL ,
        Create_Update   Datetime NOT NULL ,
        User_Id         Int NOT NULL
        ,CONSTRAINT Event_PK PRIMARY KEY (Event_Id)

        ,CONSTRAINT Event_User_FK FOREIGN KEY (User_Id) REFERENCES User(User_Id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Review
#------------------------------------------------------------

CREATE TABLE Review(
        Review_Id       Int  Auto_increment  NOT NULL ,
        Review_Title    Varchar (50) NOT NULL ,
        Review_Datetime Datetime NOT NULL ,
        Review_Adress   Text NOT NULL ,
        Promo_Id        Int NOT NULL
        ,CONSTRAINT Review_PK PRIMARY KEY (Review_Id)

        ,CONSTRAINT Review_Promo_FK FOREIGN KEY (Promo_Id) REFERENCES Promo(Promo_Id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Join
#------------------------------------------------------------

CREATE TABLE Join(
        Event_Id      Int NOT NULL ,
        User_Id       Int NOT NULL ,
        Join_Datetime Datetime NOT NULL
        ,CONSTRAINT Join_PK PRIMARY KEY (Event_Id,User_Id)

        ,CONSTRAINT Join_Event_FK FOREIGN KEY (Event_Id) REFERENCES Event(Event_Id)
        ,CONSTRAINT Join_User0_FK FOREIGN KEY (User_Id) REFERENCES User(User_Id)
)ENGINE=InnoDB;

