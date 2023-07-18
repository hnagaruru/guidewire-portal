package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PlcyNonPriNamedInsured.eti;PlcyNonPriNamedInsured.eix;PlcyNonPriNamedInsured.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PlcyNonPriNamedInsuredVersionList extends entity.windowed.PolicyNamedInsuredVersionList {
  entity.PlcyNonPriNamedInsured AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.LocationNamedInsured> LocationNamedInsuredsAsOf(java.util.Date date);
  
  
  void addToLocationNamedInsureds(entity.LocationNamedInsured bean);
  
  
  java.util.List<? extends entity.PlcyNonPriNamedInsured> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.LocationNamedInsuredVersionList> getLocationNamedInsureds();
  
  
  
}