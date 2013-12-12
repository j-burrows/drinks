$(function () {
    function addError(inputField, errorMessage) {
        inputField.addClass('invalid');
        inputField.next('.ValidationError').html(errorMessage);
    }

    function removeError(inputField) {
        inputField.removeClass('invalid');
        inputField.next('.ValidationError').html('');
    }

    $(".AvatarCreate").submit(function (event) {
        var isValid = true;
        var TitleInput = $(this).children('input[name=Title]');
        var UrlInput = $(this).children('input[name=Url]');

        //Validate the title.
        if (TitleInput.val() == '') {
            addError(TitleInput, "Title cannot be empty.");
            isValid = false;
        }
        else if (TitleInput.val().length > 16) {
            addError(TitleInput, "Title cannot exceed 16 characters.");
            isValid = false;
        }
        else {
            removeError(TitleInput);
        }

        //Validate the url.
        if (UrlInput.val() == '') {
            addError(UrlInput, "Url cannot be empty.");
        }
        else if (UrlInput.val().length > 1024) {
            addError(UrlInput, "Url cannot exceed 1024 characters.");
        }
        else {
            removeError(UrlInput);
        }

        event.preventDefault();
        return false;
    });

    $('.AvatarCreate > input[name=Title]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val() == '') {
                addError($(this), "Title cannot be empty.");
            }
            else if ($(this).val().length > 16) {
                addError($(this), "Title cannot exceed 16 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.AvatarCreate > input[name=Url]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val() == '') {
                addError($(this), "Url cannot be empty.");
            }
            else if ($(this).val().length > 1024) {
                addError($(this), "Url cannot exceed 1024 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });


    $(".AvatarUpdate").submit(function (event) {
        var isValid = true;
        var TitleInput = $(this).children('input[name=Title]');
        var UrlInput = $(this).children('input[name=Url]');

        //Validate the title.
        if (TitleInput.val().length > 16) {
            addError(TitleInput, "Title cannot exceed 16 characters.");
            isValid = false;
        }
        else {
            removeError(TitleInput);
        }

        //Validate the url.
        if (UrlInput.val().length > 1024) {
            addError(UrlInput, "Url cannot exceed 1024 characters.");
            isValid = false;
        }
        else {
            removeError(UrlInput);
        }

        event.preventDefault();
        return false;
    });

    $('.AvatarUpdate > input[name=Title]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 16) {
                addError($(this), "Title cannot exceed 16 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.AvatarUpdate > input[name=Url]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 1024) {
                addError($(this), "Url cannot exceed 1024 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $(".DefinedInstructionCreate").submit(function (event) {
        var isValid = true;
        var DescriptionInput = $(this).children('input[name=Description]');

        if (DescriptionInput.val() == '') {
            addError(DescriptionInput, "Description cannot be empty.");
            isValid = false;
        }
        else if (DescriptionInput.val().length > 64) {
            addError(DescriptionInput, "Description cannot exceed 64 characters.");
            isValid = false;
        }
        else {
            removeError(DescriptionInput);
        }

        event.preventDefault();
        return false;
    });

    $('.DefinedInstructionCreate > input[name=Description]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val() == '') {
                addError($(this), "Description cannot be empty.");
            }
            else if ($(this).val().length > 64) {
                addError($(this), "Description cannot exceed 64 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $(".DefinedInstructionUpdate").submit(function (event) {
        var isValid = true;
        var DescriptionInput = $(this).children('input[name=Description]');

        if (DescriptionInput.val().length > 64) {
            addError(DescriptionInput, "Description cannot exceed 64 characters.");
            isValid = false;
        }
        else {
            removeError(DescriptionInput);
        }

        event.preventDefault();
        return false;
    });

    $('.DefinedInstructionUpdate > input[name=Description]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 64) {
                addError($(this), "Description cannot exceed 64 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $(".DrinkCreate").submit(function (event) {
        var isValid = true;
        var NameInput = $(this).children('input[name=Name]');
        var DefinitionInput = $(this).children('input[name=Definition]');

        if (NameInput.val() == '') {
            addError(NameInput, "Name cannot be empty.");
            isValid = false;
        }
        else if (NameInput.val().length > 16) {
            addError(NameInput, "Name cannot exceed 16 characters.");
            isValid = false;
        }
        else {
            removeError(NameInput);
        }
        if (DefinitionInput.val().length > 128) {
            addError(DefinitionInput, "Definition cannot exceed 128 characters.");
            isValid = false;
        }
        else {
            removeError(DefinitionInput);
        }

        event.preventDefault();
        return false;
    });

    $('.DrinkCreate > input[name=Name]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val() == '') {
                addError($(this), "Name cannot be empty.");
            }
            else if ($(this).val().length > 16) {
                addError($(this), "Name cannot exceed 16 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.DrinkCreate > input[name=Definition]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 128) {
                addError($(this), "Definition cannot exceed 128 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $(".DrinkUpdate").submit(function (event) {
        var isValid = true;
        var NameInput = $(this).children('input[name=Name]');
        var DefinitionInput = $(this).children('input[name=Definition]');

        if (NameInput.val().length > 16) {
            addError(NameInput, "Name cannot exceed 16 characters.");
            isValid = false;
        }
        else {
            removeError(NameInput);
        }
        if (DefinitionInput.val().length > 128) {
            addError(DefinitionInput, "Definition cannot exceed 128 characters.");
            isValid = false;
        }
        else {
            removeError(DefinitionInput);
        }

        event.preventDefault();
        return false;
    });

    $('.DrinkUpdate > input[name=Name]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 16) {
                addError($(this), "Name cannot exceed 16 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.DrinkUpdate > input[name=Definition]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 128) {
                addError($(this), "Definition cannot exceed 128 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $(".IngredientCreate").submit(function (event) {
        var isValid = true;
        var LongNameInput = $(this).children('input[name=Long_Name]');
        var ShortNameInput = $(this).children('input[name=Short_Name]');
        var AmountInput = $(this).children('input[name=Amount]');

        if (LongNameInput.val().length > 32) {
            addError(LongNameInput, "Long Name cannot exceed 32 characters.");
            isValid = false;
        }
        else {
            removeError(LongNameInput);
        }
        if (ShortNameInput.val().length > 8) {
            addError(ShortNameInput, "Short Name cannot exceed 8 characters.");
            isValid = false;
        }
        else {
            removeError(ShortNameInput);
        }
        if (LongNameInput.val() == '' && ShortNameInput.val() == '') {
            addError(LongNameInput, "Either long or short name must be filled in.");
            addError(ShortNameInput, "Either long or short name must be filled in.");
            isValid = false;
        }
        if (!$.isNumeric(AmountInput.val())) {
            addError(AmountInput, "Amount must be a numeric value.");
            isValid = false;
        }
        else if (AmountInput.val() < 0) {
            addError(AmountInput, "Amount must be a postive value.");
            isValid = false;
        }
        else if (AmountInput.val() % 1 != 0) {
            addError(AmountInput, "Amount must be whole number.");
            isValid = false;
        }
        else {
            removeError(AmountInput);
        }

        event.preventDefault();
        return false;
    });

    $('.IngredientCreate > input[name=Long_Name]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 32) {
                addError($(this), "Long Name cannot exceed 32 characters.");
            }
            else if ($(this).val() == ''
                  && $(this).siblings('input[name=Short_Name]').val() == '') {
                addError($(this), "Either long or short name must be filled in.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.IngredientCreate > input[name=Short_Name]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 8) {
                addError($(this), "Short Name cannot exceed 8 characters.");
            }
            else if ($(this).val() == ''
                  && $(this).siblings('input[name=Long_Name]').val() == '') {
                addError($(this), "Either long or short name must be filled in.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.IngredientCreate > input[name=Amount]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if (!$.isNumeric($(this).val())) {
                addError($(this), "Amount must be a numeric value.");
            }
            else if ($(this).val() < 0) {
                addError($(this), "Amount must be a postive value.");
            }
            else if ($(this).val() % 1 != 0) {
                addError($(this), "Amount must be whole number.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $(".IngredientUpdate").submit(function (event) {
        var isValid = true;
        var LongNameInput = $(this).children('input[name=Long_Name]');
        var ShortNameInput = $(this).children('input[name=Short_Name]');
        var AmountInput = $(this).children('input[name=Amount]');

        if (LongNameInput.val().length > 32) {
            addError(LongNameInput, "Long Name cannot exceed 32 characters.");
            isValid = false;
        }
        else {
            removeError(LongNameInput);
        }
        if (ShortNameInput.val().length > 8) {
            addError(ShortNameInput, "Short Name cannot exceed 8 characters.");
            isValid = false;
        }
        else {
            removeError(ShortNameInput);
        }
        if (!$.isNumeric(AmountInput.val())) {
            addError(AmountInput, "Amount must be a numeric value.");
            isValid = false;
        }
        else if (AmountInput.val() < 0) {
            addError(AmountInput, "Amount must be a postive value.");
            isValid = false;
        }
        else if (AmountInput.val() % 1 != 0) {
            addError(AmountInput, "Amount must be whole number.");
            isValid = false;
        }

        event.preventDefault();
        return false;
    });

    $('.IngredientUpdate > input[name=Long_Name]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 32) {
                addError($(this), "Long Name cannot exceed 32 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.IngredientUpdate > input[name=Short_Name]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 8) {
                addError($(this), "Short Name cannot exceed 8 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.IngredientUpdate > input[name=Amount]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if (!$.isNumeric($(this).val())) {
                addError($(this), "Amount must be a numeric value.");
            }
            else if ($(this).val() < 0) {
                addError($(this), "Amount must be a postive value.");
            }
            else if ($(this).val() % 1 != 0) {
                addError($(this), "Amount must be whole number.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $(".InstructionCreate").submit(function (event) {
        var isValid = true;
        var TimeInput = $(this).children('input[name=Time]');
        var DescriptionInput = $(this).children('input[name=Description]');

        if (!$.isNumeric(TimeInput.val())) {
            addError(TimeInput, "Time must be a numeric value.");
            isValid = false;
        }
        else if (TimeInput.val() < 0) {
            addError(TimeInput, "Time must be a postive value.");
            isValid = false;
        }
        else if (TimeInput.val() % 1 != 0) {
            addError(TimeInput, "Time must be whole number.");
            isValid = false;
        }

        if (DescriptionInput.val() == '') {
            addError(DescriptionInput, "Description cannot be empty.");
            isValid = false;
        }
        else if (DescriptionInput.val().length > 64) {
            addError(DescriptionInput, "Description cannot exceed 64 characters.");
            isValid = false;
        }
        else {
            removeError(DescriptionInput);
        }

        event.preventDefault();
        return false;
    });

    $('.InstructionCreate > input[name=Description]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val() == '') {
                addError($(this), "Description cannot be empty.");
            }
            else if ($(this).val().length > 64) {
                addError($(this), "Description cannot exceed 64 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });
    
    $('.InstructionCreate > input[name=Time]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if (!$.isNumeric($(this).val())) {
                addError($(this), "Time must be a numeric value.");
            }
            else if ($(this).val() < 0) {
                addError($(this), "Time must be a postive value.");
            }
            else if ($(this).val() % 1 != 0) {
                addError($(this), "Time must be whole number.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $(".InstructionUpdate").submit(function (event) {
        var isValid = true;
        var TimeInput = $(this).children('input[name=Time]');
        var DescriptionInput = $(this).children('input[name=Description]');

        if (!$.isNumeric(TimeInput.val())) {
            addError(TimeInput, "Time must be a numeric value.");
            isValid = false;
        }
        else if (TimeInput.val() < 0) {
            addError(TimeInput, "Time must be a postive value.");
            isValid = false;
        }
        else if (TimeInput.val() % 1 != 0) {
            addError(TimeInput, "Time must be whole number.");
            isValid = false;
        }

        if (DescriptionInput.val().length > 64) {
            addError(DescriptionInput, "Description cannot exceed 64 characters.");
            isValid = false;
        }
        else {
            removeError(DescriptionInput);
        }

        event.preventDefault();
        return false;
    });

    $('.InstructionUpdate > input[name=Description]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 64) {
                addError($(this), "Description cannot exceed 64 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.InstructionUpdate > input[name=Time]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if (!$.isNumeric($(this).val())) {
                addError($(this), "Time must be a numeric value.");
            }
            else if ($(this).val() < 0) {
                addError($(this), "Time must be a postive value.");
            }
            else if ($(this).val() % 1 != 0) {
                addError($(this), "Time must be whole number.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $(".RatingCreate, .RatingUpdate").submit(function (event) {
        var isValid = true;
        var ReasonsInput = $(this).children('input[name=Reasons]');
        var ScoreInput = $(this).children('input[name=Score]');

        if (ReasonsInput.val().length > 64) {
            addError(ReasonsInput, "Reasons cannot be exceed 64 characters.");
            isValid = false;
        }
        else {
            removeError(ReasonsInput);
        }
        if (!$.isNumeric(ScoreInput.val())) {
            addError(ScoreInput, "Score must be a numeric value.");
            isValid = false;
        }
        else if (ScoreInput.val() < 0) {
            addError(ScoreInput, "Score must be a postive value.");
            isValid = false;
        }
        else if (ScoreInput.val() % 1 != 0 && ScoreInput.val() % 1 != 0.5) {
            addError(ScoreInput, "Score must be whole or half number.");
            isValid = false;
        }

        event.preventDefault();
        return false;
    });

    $('.RatingCreate > input[name=Reasons], .RatingUpdate > input[name=Reasons]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 64) {
                addError($(this), "Reasons cannot be exceed 64 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.RatingCreate > input[name=Score], .RatingUpdate > input[name=Score]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if (!$.isNumeric($(this).val())) {
                addError($(this), "Score must be a numeric value.");
            }
            else if ($(this).val() < 0) {
                addError($(this), "Score must be a postive value.");
            }
            else if ($(this).val() % 1 != 0 && $(this).val() % 1 != 0.5) {
                addError($(this), "Score must be whole or half number.");
            }
            else {
                removeError($(this));
            }
        }
    });


    $(".UnitCreate, .UnitUpdate").submit(function (event) {
        var isValid = true;
        var LongNameInput = $(this).children('input[name=Long_Name]');
        var ShortNameInput = $(this).children('input[name=Short_Name]');

        if (LongNameInput.val().length > 16) {
            addError(LongNameInput, "Long Name cannot exceed 16 characters.");
            isValid = false;
        }
        else {
            removeError(LongNameInput);
        }
        if (ShortNameInput.val().length > 4) {
            addError(ShortNameInput, "Short Name cannot exceed 4 characters.");
            isValid = false;
        }
        else {
            removeError(ShortNameInput);
        }
        if (LongNameInput.val() == '' && ShortNameInput.val() == '') {
            addError(LongNameInput, "Either long or short name must be filled in.");
            addError(ShortNameInput, "Either long or short name must be filled in.");
            isValid = false;
        }

        event.preventDefault();
        return false;
    });

    $('.UnitCreate > input[name=Long_Name], .UnitUpdate > input[name=Long_Name]')
        .on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 16) {
                addError($(this), "Long Name cannot exceed 16 characters.");
            }
            else if ($(this).val() == ''
                  && $(this).siblings('input[name=Short_Name]').val() == '') {
                addError($(this), "Either long or short name must be filled in.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.UnitCreate > input[name=Short_Name], .UnitUpdate > input[name=Short_Name]')
        .on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 4) {
                addError($(this), "Short Name cannot exceed 4 characters.");
            }
            else if ($(this).val() == ''
                  && $(this).siblings('input[name=Long_Name]').val() == '') {
                addError($(this), "Either long or short name must be filled in.");
            }
            else {
                removeError($(this));
            }
        }
    });
});

