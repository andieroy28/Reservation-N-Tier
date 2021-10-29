CREATE PROCEDURE [dbo].[spAddContact]
	@Name NVARCHAR(50), 
	@PhoneNumber NVARCHAR(15), 
	@Birthdate date, 
	@ReservationId int, 
	@ContactTypeId int, 
	@Description NVARCHAR(max),
	@Id INT OUTPUT
AS
Begin
	INSERT INTO tblContact ([Name], PhoneNumber, Birthdate, ReservationId, ContactTypeId) 
	VALUES (@Name, @PhoneNumber, @Birthdate, @ReservationId, @ContactTypeId)
	SET @Id = SCOPE_IDENTITY()
	UPDATE tblReservation SET Description = @Description WHERE Id = @ReservationId
End