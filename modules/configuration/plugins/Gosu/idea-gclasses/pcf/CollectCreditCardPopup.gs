package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/payment/demo/CollectCreditCardPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CollectCreditCardPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (jobNumber :  String, tokenInfo :  gw.payment.paymentgateway.impl.TokenizedCreditCardDetails) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.CollectCreditCardPopup, {jobNumber, tokenInfo}, 0)
  }
  
  function pickValueAndCommit (value :  String) : void {
    __widgetOf(this, pcf.CollectCreditCardPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (jobNumber :  String, tokenInfo :  gw.payment.paymentgateway.impl.TokenizedCreditCardDetails) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CollectCreditCardPopup, {jobNumber, tokenInfo}, 0).push()
  }
  
  
}