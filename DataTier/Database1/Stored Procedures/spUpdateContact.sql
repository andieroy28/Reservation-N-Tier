CREATE PROCEDURE [dbo].[spUpdateContact]
	@Id int, 
	@Name NVARCHAR(50), 
	@PhoneNumber NVARCHAR(15), 
	@Birthdate date, 
	@ReservationId int, 
	@ContactTypeId int, 
	@Description NVARCHAR(max)
AS
	UPDATE tblContact SET [Name] = @Name, PhoneNumber= @PhoneNumber, Birthdate = @Birthdate, ContactTypeId = @ContactTypeId WHERE Id = @Id
	UPDATE tblReservation SET Description = @Description WHERE Id = @ReservationId
RETURN 0