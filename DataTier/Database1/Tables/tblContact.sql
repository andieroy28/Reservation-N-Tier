CREATE TABLE [dbo].[tblContact]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
	[Name] NVARCHAR(50) NOT NULL,   
    [PhoneNumber] NVARCHAR(15) NULL,  
    [Birthdate] Date NULL ,
	[ReservationId] [int] FOREIGN KEY (ReservationId) REFERENCES tblReservation(Id) NOT NULL, 
    [ContactTypeId] INT NULL
)
