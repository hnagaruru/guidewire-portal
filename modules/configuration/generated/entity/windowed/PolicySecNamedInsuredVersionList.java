package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicySecNamedInsured.eti;PolicySecNamedInsured.eix;PolicySecNamedInsured.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PolicySecNamedInsuredVersionList extends entity.windowed.PlcyNonPriNamedInsuredVersionList {
  entity.PolicySecNamedInsured AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.LocationNamedInsured> LocationNamedInsuredsAsOf(java.util.Date date);
  
  
  void addToLocationNamedInsureds(entity.LocationNamedInsured bean);
  
  
  java.util.List<? extends entity.PolicySecNamedInsured> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.LocationNamedInsuredVersionList> getLocationNamedInsureds();
  
  
  
}