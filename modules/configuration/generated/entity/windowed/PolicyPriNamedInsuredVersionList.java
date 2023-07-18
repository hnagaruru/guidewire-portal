package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyPriNamedInsured.eti;PolicyPriNamedInsured.eix;PolicyPriNamedInsured.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PolicyPriNamedInsuredVersionList extends entity.windowed.PolicyNamedInsuredVersionList {
  entity.PolicyPriNamedInsured AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.LocationNamedInsured> LocationNamedInsuredsAsOf(java.util.Date date);
  
  
  void addToLocationNamedInsureds(entity.LocationNamedInsured bean);
  
  
  java.util.List<? extends entity.PolicyPriNamedInsured> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.LocationNamedInsuredVersionList> getLocationNamedInsureds();
  
  
  
}