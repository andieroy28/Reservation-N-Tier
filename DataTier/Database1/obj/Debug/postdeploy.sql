/*
Post-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be appended to the build script.		
 Use SQLCMD syntax to include a file in the post-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the post-deployment script.		
 Example:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/

INSERT INTO tblContactTypetblContactType(Name) 
VALUES ('Home'),
    ('Work Place'),
    ('Business'),
    ('Personal'),
    ('Supplier'),
    ('Owner'),
    ('Other');


INSERT INTO tblReservation (Description) 
VALUES ('Second Dock'),
    ('Primer Puerto'),
    ('Stella'),
    ('Island Creek'),
    ('Fogo The Chao'),
    ('Boracay'),
    ('Palawan'),
    ('Puerta Galera'),
    ('Tagaytay Hills'),
    ('Puerto Azul');

INSERT INTO tblContact (Name, PhoneNumber, Birthdate, ReservationId, ContactTypeId) 
VALUES ('Vannesa Thomas', '+639998061180', '01-11-1964', 1, 1),
    ('Williams Ramos', '+639008061180', '03-05-1974', 6, 2),
    ('Bobby Rio', '+639008062220', '04-18-1986', 2, 3),
    ('Sonny Chui', '+639123062220', '08-28-1976', 3, 4),
    ('Tom Andrews', '+639123064560', '06-24-1998', 4, 1),
    ('Kyrie Wanna', '+639123454560', '01-01-1990', 5, 2),
    ('May Cruz', '+639123454589', '02-22-1990', 7, 3),
    ('Aljur Mendosa', '+639663454560', '01-11-1970', 8, 4),
    ('Donna Lim', '+639123454561', '11-14-1980', 9, 4),
    ('Allen Gomez', '+639565454563', '05-12-1990', 10, 1),
    ('Carla Gil', '+639124454560', '01-11-1990', 8, 2)


GO
