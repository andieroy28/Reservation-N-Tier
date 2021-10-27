CREATE PROCEDURE [dbo].[spAddContact]
	@Name NVARCHAR(50), 
	@PhoneNumber NVARCHAR(15), 
	@Birthdate date, 
	@ReservationId int, 
	@Description NVARCHAR(max)
AS
	INSERT INTO tblContact (Name, PhoneNumber, Birthdate, ReservationId) 
	VALUES (@Name, @PhoneNumber, @Birthdate, @ReservationId)
	UPDATE tblReservation SET Description = @Description WHERE Id = @ReservationId
RETURN 0