package cc.test.data

class VehicleHelper.gs
{
  static function changeVehicleYear(vehicle : Vehicle) {
    if (vehicle != null) {
      vehicle.Year = 1990
    }
  }

  static function changeVehicleModel(vehicle : Vehicle) {
    if (vehicle != null) {
      vehicle.Model = "Punch"
    }
  }

  static function ValidateVINNumber(vehicle : Vehicle) : Boolean {
    var isAlphNumeric : Boolean = false
    if (vehicle != null and vehicle.Vin != null) {
      isAlphNumeric = vehicle.Vin.Alphanumeric ? true : false
    }
    return isAlphNumeric
  }

  static function changeVehicleBoatType(vehicle : Vehicle) {
    if (vehicle != null) {
      vehicle.BoatType = BoatType.TC_CR
    }
  }

  static function isValidAmountRemaining(vehicle : Vehicle) : Boolean {
    var isValid : Boolean
    if (vehicle != null and vehicle.LoanMonthsRemaining != null) {
      isValid = vehicle.LoanMonthsRemaining >= 20 ? true : false
    }
    return isValid
  }

  static function changeVehicleloanStatus(vehicle : Vehicle) {
    if (vehicle != null and vehicle.Loan != null and vehicle.Loan == true) {
      vehicle.Loan = false
    }
  }
}
