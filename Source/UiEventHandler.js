
class UiEventHandler
{
	static buttonDecode_Clicked()
	{
		var d = document;
		var selectEncodingFrom = d.getElementById("selectEncodingFrom");
		var selectEncodingTo = d.getElementById("selectEncodingTo");
		var textareaDataToEncode = d.getElementById("textareaDataToEncode");
		var textareaDataEncoded = d.getElementById("textareaDataEncoded");

		var encodingNameFrom = selectEncodingFrom.value;
		var encodingFrom = Encoding.byName(encodingNameFrom);

		var encodingNameTo = selectEncodingTo.value;
		var encodingTo = Encoding.byName(encodingNameTo);

		var dataToEncode = textareaDataEncoded.value;
		var dataAsBytes = encodingTo.decodeToBytes(dataToEncode);
		var dataEncoded = encodingFrom.encodeBytes(dataAsBytes);

		textareaDataToEncode.value = dataEncoded;
	}

	static buttonEncode_Clicked()
	{
		var d = document;
		var selectEncodingFrom = d.getElementById("selectEncodingFrom");
		var selectEncodingTo = d.getElementById("selectEncodingTo");
		var textareaDataToEncode = d.getElementById("textareaDataToEncode");
		var textareaDataEncoded = d.getElementById("textareaDataEncoded");

		var encodingNameFrom = selectEncodingFrom.value;
		var encodingFrom = Encoding.byName(encodingNameFrom);

		var encodingNameTo = selectEncodingTo.value;
		var encodingTo = Encoding.byName(encodingNameTo);

		var dataToEncode = textareaDataToEncode.value;
		var dataAsBytes = encodingFrom.decodeToBytes(dataToEncode);
		var dataEncoded = encodingTo.encodeBytes(dataAsBytes);

		textareaDataEncoded.value = dataEncoded;
	}
}
