
class Encoding
{
	constructor(name, decodeToBytes, encodeBytes)
	{
		this.name = name;
		this.decodeToBytes = decodeToBytes;
		this.encodeBytes = encodeBytes;
	}

	static Instances()
	{
		if (Encoding._instances == null)
		{
			Encoding._instances = new Encoding_Instances();
		}
		return Encoding._instances;
	}

	static byName(name)
	{
		return Encoding.Instances().byName(name);
	}
}

class Encoding_Instances
{
	constructor()
	{
		this.Base64 = new Encoding
		(
			"Base64",
			(dataToDecode) =>
			{
				var dataAsBinaryString = atob(dataToDecode);
				var dataAsBytes = [];
				for (var i = 0; i < dataAsBinaryString.length; i++)
				{
					var byte = dataAsBinaryString.charCodeAt(i);
					dataAsBytes.push(byte);
				}
				return dataAsBytes;
			},
			(bytesToEncode) =>
			{
				var dataAsBinaryString = "";
				for (var i = 0; i < bytesToEncode.length; i++)
				{
					var byte = bytesToEncode[i];
					var byteAsChar = String.fromCharCode(byte);
					dataAsBinaryString += byteAsChar;
				}
				var returnValue = btoa(dataAsBinaryString);
				return returnValue;
			}
		);

		this.Hexadecimal = new Encoding
		(
			"Hexadecimal",
			(dataToDecode) =>
			{
				var returnValues = [];

				var charsToRemoveAsString = " \t\r\n-_";
				for (var i = 0; i < charsToRemoveAsString.length; i++)
				{
					var charToRemove = charsToRemoveAsString[i];
					dataToDecode = dataToDecode.split(charToRemove).join("");
				}

				for (var i = 0; i < dataToDecode.length; i += 2)
				{
					var byteAsHexadecimal = dataToDecode.substr(i, 2);
					var byte = parseInt(byteAsHexadecimal, 16);
					returnValues.push(byte);
				}
				return returnValues;
			},
			(bytesToEncode) =>
			{
				var returnValue = "";

				for (var i = 0; i < bytesToEncode.length; i++)
				{
					var byte = bytesToEncode[i];
					var byteAsString = byte.toString(16);
					returnValue += byteAsString;
				}

				return returnValue;
			}
		);

		this.UTF8 = new Encoding
		(
			"UTF8",
			(dataToDecode) =>
			{
				var returnValues = [];
				for (var i = 0; i < dataToDecode.length; i++)
				{
					var byte = dataToDecode.charCodeAt(i);
					returnValues.push(byte);
				}
				return returnValues;

			},
			(bytesToEncode) =>
			{
				var returnValue = "";

				for (var i = 0; i < bytesToEncode.length; i++)
				{
					var byte = bytesToEncode[i];
					var char = String.fromCharCode(byte);
					returnValue += char;
				}
				return returnValue;
			}
		);
	}

	byName(name)
	{
		return this[name];
	}
}
