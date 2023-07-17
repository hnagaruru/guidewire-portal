package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/NewAPDPolicyInvolvedPartyPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewAPDPolicyInvolvedPartyPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (line :  PolicyLine, contactType :  ContactType) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewAPDPolicyInvolvedPartyPopup, {line, contactType}, 0)
  }
  
  function pickValueAndCommit (value :  APDPolicyInvolvedParty) : void {
    __widgetOf(this, pcf.NewAPDPolicyInvolvedPartyPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (line :  PolicyLine, contactType :  ContactType) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewAPDPolicyInvolvedPartyPopup, {line, contactType}, 0).push()
  }
  
  
}